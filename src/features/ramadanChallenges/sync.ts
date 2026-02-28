/**
 * Ramadan Challenges Cloud Sync
 * ==============================
 * Synchronizes dhikr progress between localStorage and Supabase.
 * Handles merge conflicts when data exists in both locations.
 */

import { supabase } from '@/src/lib/supabase';
import type { Challenge, RamadanChallengesState } from './types';

// ─── Types ───────────────────────────────────────────────────────────────────────

export interface SyncResult {
  success: boolean;
  data?: { challenges: Challenge[] };
  error?: string;
}

export interface SyncStatus {
  lastSyncedAt: string | null;
  isPending: boolean;
}

// ─── Database Operations ─────────────────────────────────────────────────────────

/**
 * Load challenges from Supabase for the authenticated user
 */
export async function loadChallengesFromCloud(): Promise<SyncResult> {
  if (!supabase) {
    return { success: false, error: 'Supabase not configured' };
  }

  try {
    const { data: { user } } = await supabase.auth.getUser();
    
    if (!user) {
      return { success: false, error: 'Not authenticated' };
    }

    const { data, error } = await supabase
      .from('ramadan_challenges')
      .select('challenges, last_synced_at')
      .eq('user_id', user.id)
      .maybeSingle() as any;

    if (error) {
      console.error('[RamadanSync] Error loading from cloud:', error);
      return { success: false, error: error.message };
    }

    if (!data) {
      // No cloud data yet - this is fine for new users
      return { success: true, data: { challenges: []} };
    }

    // Parse challenges from JSONB
    const challenges = Array.isArray(data?.challenges) ? data.challenges : [];
    
    return { 
      success: true, 
      data: { challenges }
    };
  } catch (error) {
    console.error('[RamadanSync] Exception loading from cloud:', error);
    return { success: false, error: String(error) };
  }
}

/**
 * Save challenges to Supabase for the authenticated user
 */
export async function saveChallengesToCloud(challenges: Challenge[]): Promise<SyncResult> {
  if (!supabase) {
    return { success: false, error: 'Supabase not configured' };
  }

  try {
    const { data: { user } } = await supabase.auth.getUser();
    
    if (!user) {
      return { success: false, error: 'Not authenticated' };
    }

    const now = new Date().toISOString();

    // Upsert (insert or update)
    const { error } = await (supabase
      .from('ramadan_challenges') as any)
      .upsert({
        user_id: user.id,
        challenges: challenges,
        last_synced_at: now,
        updated_at: now,
      }, {
        onConflict: 'user_id'
      });

    if (error) {
      console.error('[RamadanSync] Error saving to cloud:', error);
      return { success: false, error: error.message };
    }

    console.log('[RamadanSync] Successfully synced to cloud:', challenges.length, 'challenges');
    return { success: true };
  } catch (error) {
    console.error('[RamadanSync] Exception saving to cloud:', error);
    return { success: false, error: String(error) };
  }
}

// ─── Merge Logic ─────────────────────────────────────────────────────────────────

/**
 * Merge local and cloud challenges intelligently.
 * Strategy:
 * - Keep all unique challenges (by ID)
 * - For duplicate IDs, take the one with higher totalProgress
 * - Merge session logs (keep all unique sessions)
 */
export function mergeChallenges(
  localChallenges: Challenge[],
  cloudChallenges: Challenge[]
): Challenge[] {
  const mergedMap = new Map<string, Challenge>();

  // Add all local challenges first
  for (const challenge of localChallenges) {
    mergedMap.set(challenge.id, { ...challenge });
  }

  // Merge or add cloud challenges
  for (const cloudChallenge of cloudChallenges) {
    const existing = mergedMap.get(cloudChallenge.id);

    if (!existing) {
      // New challenge from cloud
      mergedMap.set(cloudChallenge.id, { ...cloudChallenge });
    } else {
      // Conflict: same challenge ID exists in both
      // Merge strategy: take higher progress, merge session logs
      const merged: Challenge = {
        ...existing,
        // Keep higher progress
        totalProgress: Math.max(
          existing.totalProgress || 0,
          cloudChallenge.totalProgress || 0
        ),
        todayProgress: Math.max(
          existing.todayProgress || 0,
          cloudChallenge.todayProgress || 0
        ),
        // Merge session logs (unique by timestamp)
        sessionLogs: mergeSessionLogs(
          existing.sessionLogs || [],
          cloudChallenge.sessionLogs || []
        ),
        // Keep the most recent streak
        streakDays: Math.max(
          existing.streakDays || 0,
          cloudChallenge.streakDays || 0
        ),
        // Use the later last logged date
        lastLoggedDate: laterDate(
          existing.lastLoggedDate,
          cloudChallenge.lastLoggedDate
        ),
      };

      mergedMap.set(cloudChallenge.id, merged);
    }
  }

  return Array.from(mergedMap.values());
}

/**
 * Merge session logs from two sources, avoiding duplicates
 */
function mergeSessionLogs(
  logs1: Challenge['sessionLogs'],
  logs2: Challenge['sessionLogs']
): Challenge['sessionLogs'] {
  if (!logs1) return logs2 || [];
  if (!logs2) return logs1 || [];

  const mergedMap = new Map<string, (typeof logs1)[0]>();

  // Add all from logs1
  for (const log of logs1) {
    const key = `${log.date}-${log.timestamp}`;
    mergedMap.set(key, log);
  }

  // Add from logs2 (won't duplicate if timestamp matches)
  for (const log of logs2) {
    const key = `${log.date}-${log.timestamp}`;
    if (!mergedMap.has(key)) {
      mergedMap.set(key, log);
    }
  }

  // Return sorted by timestamp
  return Array.from(mergedMap.values()).sort(
    (a, b) => new Date(a.timestamp).getTime() - new Date(b.timestamp).getTime()
  );
}

/**
 * Return the later of two date strings
 */
function laterDate(date1: string | null | undefined, date2: string | null | undefined): string | null {
  if (!date1) return date2 || null;
  if (!date2) return date1 || null;
  return new Date(date1) > new Date(date2) ? date1 : date2;
}

// ─── Sync Orchestration ──────────────────────────────────────────────────────────

/**
 * Full sync: pull from cloud, merge with local, save merged result back
 * 
 * Use this when:
 * - User logs in
 * - App starts and user is authenticated
 * - User manually triggers sync
 */
export async function syncChallenges(
  localChallenges: Challenge[]
): Promise<SyncResult> {
  try {
    // 1. Load from cloud
    const cloudResult = await loadChallengesFromCloud();
    
    if (!cloudResult.success) {
      // If cloud load fails, continue with local only
      console.warn('[RamadanSync] Cloud load failed, using local only');
      return { success: false, error: cloudResult.error };
    }

    const cloudChallenges = cloudResult.data?.challenges || [];

    // 2. Merge local and cloud
    const mergedChallenges = mergeChallenges(localChallenges, cloudChallenges);

    // 3. Save merged result back to cloud
    const saveResult = await saveChallengesToCloud(mergedChallenges);
    
    if (!saveResult.success) {
      console.warn('[RamadanSync] Cloud save failed:', saveResult.error);
    }

    // 4. Return merged data (even if save failed, we have the merge)
    return {
      success: true,
      data: { challenges: mergedChallenges }
    };
  } catch (error) {
    console.error('[RamadanSync] Sync failed:', error);
    return { success: false, error: String(error) };
  }
}

/**
 * Check if user is authenticated
 */
export async function isAuthenticated(): Promise<boolean> {
  if (!supabase) return false;
  
  try {
    const { data: { user } } = await supabase.auth.getUser();
    return !!user;
  } catch {
    return false;
  }
}

/**
 * Auto-save to cloud (debounced)
 * Call this after any local changes when user is authenticated
 */
let saveTimeout: ReturnType<typeof setTimeout> | null = null;

export function queueCloudSync(challenges: Challenge[], debounceMs = 2000) {
  if (saveTimeout) {
    clearTimeout(saveTimeout);
  }

  saveTimeout = setTimeout(async () => {
    const authed = await isAuthenticated();
    if (authed) {
      await saveChallengesToCloud(challenges);
    }
  }, debounceMs);
}

/**
 * Force immediate sync (call on page unload)
 */
export async function flushCloudSync(challenges: Challenge[]) {
  if (saveTimeout) {
    clearTimeout(saveTimeout);
    saveTimeout = null;
  }

  const authed = await isAuthenticated();
  if (authed) {
    await saveChallengesToCloud(challenges);
  }
}
