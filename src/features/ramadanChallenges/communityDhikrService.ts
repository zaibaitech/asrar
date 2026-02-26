/**
 * Community Dhikr Client Service
 * ================================
 * Handles:
 * - Anonymous browser fingerprint generation
 * - Batched/debounced POST of dhikr increments to the API
 * - Polling for community stats (with optional Supabase Realtime upgrade)
 * - React hook for consuming live community stats
 */

'use client';

import { useState, useEffect, useCallback, useRef } from 'react';
import { supabase } from '@/src/lib/supabase';

// ─── Types ───────────────────────────────────────────────────────────────────────

export interface CommunityDhikrStats {
  todayTotal: number;
  todayUsers: number;
  allTimeTotal: number;
  lastUpdated: string;
}

// ─── Fingerprint ─────────────────────────────────────────────────────────────────

const FP_KEY = 'asrar_device_fp';

/**
 * Generate or retrieve a stable anonymous device fingerprint.
 * Not tracking-grade, just enough to count unique contributors.
 */
function getFingerprint(): string {
  if (typeof window === 'undefined') return 'ssr';
  let fp = localStorage.getItem(FP_KEY);
  if (fp) return fp;

  // Generate a random ID
  fp =
    typeof crypto !== 'undefined' && crypto.randomUUID
      ? crypto.randomUUID()
      : 'fp-' + Math.random().toString(36).slice(2) + Date.now().toString(36);

  localStorage.setItem(FP_KEY, fp);
  return fp;
}

// ─── Batched Increment Queue ─────────────────────────────────────────────────────

interface QueuedIncrement {
  amount: number;
  dhikrType: string;
}

let pendingQueue: QueuedIncrement[] = [];
let flushTimer: ReturnType<typeof setTimeout> | null = null;
let latestStats: CommunityDhikrStats | null = null;
let statsListeners: Set<(stats: CommunityDhikrStats) => void> = new Set();

function notifyListeners(stats: CommunityDhikrStats) {
  latestStats = stats;
  statsListeners.forEach((fn) => fn(stats));
}

/**
 * Flush the pending queue: merge amounts by type and POST once.
 */
async function flushQueue() {
  if (pendingQueue.length === 0) return;

  // Merge by type
  const merged: Record<string, number> = {};
  for (const item of pendingQueue) {
    merged[item.dhikrType] = (merged[item.dhikrType] || 0) + item.amount;
  }
  pendingQueue = [];

  const fingerprint = getFingerprint();

  // Send one request per type (usually 1-2 types)
  for (const [dhikrType, amount] of Object.entries(merged)) {
    try {
      const res = await fetch('/api/v1/community-dhikr', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ fingerprint, amount, dhikrType }),
      });
      if (res.ok) {
        const json = await res.json();
        if (json.success && json.data) {
          notifyListeners(json.data);
        }
      }
    } catch (e) {
      console.warn('[community-dhikr] Failed to sync:', e);
      // Re-queue on failure (will retry on next flush)
      pendingQueue.push({ amount, dhikrType });
    }
  }
}

/**
 * Queue a dhikr increment. Flushes after 2 seconds of inactivity
 * to batch rapid taps into a single API call.
 */
export function queueDhikrIncrement(amount: number, dhikrType: string = 'general') {
  if (amount <= 0) return;
  pendingQueue.push({ amount, dhikrType });

  // Debounce flush: wait 2s after last tap
  if (flushTimer) clearTimeout(flushTimer);
  flushTimer = setTimeout(flushQueue, 2000);
}

/**
 * Force-flush any pending increments (call on page unload).
 */
export function flushDhikrQueue() {
  if (flushTimer) clearTimeout(flushTimer);
  flushQueue();
}

// ─── Fetch Stats ─────────────────────────────────────────────────────────────────

async function fetchStats(): Promise<CommunityDhikrStats | null> {
  try {
    const res = await fetch('/api/v1/community-dhikr');
    if (!res.ok) return null;
    const json = await res.json();
    if (json.success && json.data) {
      notifyListeners(json.data);
      return json.data;
    }
  } catch (e) {
    console.warn('[community-dhikr] Failed to fetch stats:', e);
  }
  return null;
}

// ─── One-time Migration: Sync Existing localStorage Progress ─────────────────────

const MIGRATION_KEY = 'asrar_community_dhikr_migrated_v1';

/**
 * On the first load after deployment, sync whatever dhikr the user
 * has already accumulated in localStorage to the community counter.
 * Runs once per device, then sets a flag so it never re-runs.
 */
async function migrateExistingLocalData() {
  if (typeof window === 'undefined') return;
  if (localStorage.getItem(MIGRATION_KEY)) return; // Already migrated

  const fingerprint = getFingerprint();
  let totalToSync = 0;

  // 1. Ramadan Challenges store
  try {
    const raw = localStorage.getItem('ramadan_challenges_v2');
    if (raw) {
      const challenges = JSON.parse(raw);
      if (Array.isArray(challenges)) {
        for (const c of challenges) {
          const amount = Array.isArray(c.sessionLogs)
            ? c.sessionLogs.reduce((s: number, l: { count: number }) => s + (l.count || 0), 0)
            : (c.ramadanProgress || 0);
          if (amount > 0) {
            totalToSync += amount;
            try {
              await fetch('/api/v1/community-dhikr', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                  fingerprint,
                  amount,
                  dhikrType: (c.type || 'general').toLowerCase(),
                }),
              });
            } catch {}
          }
        }
      }
    }
  } catch {}

  // 2. Istikhara DhikrCounter sessions
  try {
    const historyStr = localStorage.getItem('dhikr-history');
    if (historyStr) {
      const history = JSON.parse(historyStr);
      if (Array.isArray(history)) {
        const total = history.reduce(
          (s: number, sess: { count?: number; completed?: boolean }) =>
            s + (sess.completed ? (sess.count || 0) : 0),
          0
        );
        if (total > 0) {
          totalToSync += total;
          try {
            await fetch('/api/v1/community-dhikr', {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({ fingerprint, amount: total, dhikrType: 'tashbih' }),
            });
          } catch {}
        }
      }
    }
  } catch {}

  // 3. Planetary DhikrCard counters
  const PLANETS = ['Sun', 'Moon', 'Mars', 'Mercury', 'Jupiter', 'Venus', 'Saturn'];
  try {
    let planetaryTotal = 0;
    for (const planet of PLANETS) {
      const v = localStorage.getItem(`dhikr_count_${planet}`);
      if (v) {
        const n = parseInt(v, 10);
        if (!isNaN(n) && n > 0) planetaryTotal += n;
      }
    }
    if (planetaryTotal > 0) {
      totalToSync += planetaryTotal;
      try {
        await fetch('/api/v1/community-dhikr', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ fingerprint, amount: planetaryTotal, dhikrType: 'planetary' }),
        });
      } catch {}
    }
  } catch {}

  // Mark as migrated
  localStorage.setItem(MIGRATION_KEY, new Date().toISOString());
  if (totalToSync > 0) {
    console.log(`[community-dhikr] Migrated ${totalToSync} existing dhikr to community counter`);
    // Refresh stats after migration
    fetchStats();
  }
}

// ─── React Hook ──────────────────────────────────────────────────────────────────

/**
 * Hook that provides live community dhikr stats.
 * Fetches on mount, then polls every 30s + listens to Supabase Realtime.
 */
const DEFAULT_STATS: CommunityDhikrStats = {
  todayTotal: 0,
  todayUsers: 0,
  allTimeTotal: 0,
  lastUpdated: '',
};

export function useCommunityDhikr(): CommunityDhikrStats {
  const [stats, setStats] = useState<CommunityDhikrStats>(DEFAULT_STATS);

  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  // Register as listener for queue flush updates + hydrate from latestStats
  useEffect(() => {
    if (latestStats) setStats(latestStats);
    const listener = (newStats: CommunityDhikrStats) => setStats(newStats);
    statsListeners.add(listener);
    return () => { statsListeners.delete(listener); };
  }, []);

  // Initial fetch + polling every 30s + one-time migration
  useEffect(() => {
    // Sync existing localStorage data on first load after deploy
    migrateExistingLocalData().then(() => fetchStats());
    intervalRef.current = setInterval(fetchStats, 30_000);
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, []);

  // Supabase Realtime subscription for instant updates
  useEffect(() => {
    if (!supabase) return;

    const channel = supabase
      .channel('community-dhikr-realtime')
      .on(
        'postgres_changes',
        {
          event: '*',
          schema: 'public',
          table: 'community_dhikr',
        },
        (payload) => {
          // When the aggregate row changes, refetch full stats
          fetchStats();
        }
      )
      .subscribe();

    return () => {
      supabase?.removeChannel(channel);
    };
  }, []);

  // Flush on page unload
  useEffect(() => {
    const handleUnload = () => flushDhikrQueue();
    window.addEventListener('beforeunload', handleUnload);
    return () => window.removeEventListener('beforeunload', handleUnload);
  }, []);

  return stats;
}
