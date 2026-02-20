/**
 * Ramadan Challenges Migrations
 * ==============================
 * Backward-compatible migration from v1 (single Istighfār tracker)
 * to v2 (multi-challenge system).
 */

import type { Challenge, SessionLog } from './types';
import { generateId, STORAGE_KEYS } from './utils';

// ─── Legacy Data Shape ───────────────────────────────────────────────────────────

interface LegacyDailyEntry {
  date: string;
  sessions: { session: string; count: number; timestamp: string }[];
  total: number;
}

interface LegacyTrackerState {
  plan: string | null;
  customDaily: number;
  cumulativeTotal: number;
  dailyLog: LegacyDailyEntry[];
}

// ─── Session Key Mapping ─────────────────────────────────────────────────────────

const SESSION_KEY_MAP: Record<string, SessionLog['session']> = {
  sessionFajr: 'Fajr',
  sessionDuha: 'Ḍuḥā / Morning',
  sessionDhuhr: 'Ẓuhr',
  sessionAsr: 'ʿAṣr',
  sessionMaghrib: 'Maghrib / Ifṭār',
  sessionIsha: 'ʿIshāʾ / Tarāwīḥ',
  sessionCustom: 'Other',
};

// ─── Plan to Daily Target Mapping ────────────────────────────────────────────────

const PLAN_DAILY_TARGETS: Record<string, number> = {
  intensive: 12400,
  balanced: 6200,
  steady: 4134,
  light: 3100,
};

// ─── Migration Function ──────────────────────────────────────────────────────────

/**
 * Migrate existing Istighfār tracker data to the new multi-challenge format.
 * This should be called on app initialization.
 *
 * @returns Migrated Challenge object if legacy data exists, null otherwise
 */
export function migrateExistingIstighfar(): Challenge | null {
  if (typeof window === 'undefined') return null;

  // Check if already migrated
  const existing = localStorage.getItem(STORAGE_KEYS.CHALLENGES_V2);
  if (existing) {
    // Already have v2 data, no migration needed
    return null;
  }

  // Check for legacy data
  const legacyRaw = localStorage.getItem(STORAGE_KEYS.LEGACY_ISTIGHFAR);
  if (!legacyRaw) {
    // No legacy data to migrate
    return null;
  }

  try {
    const legacy: LegacyTrackerState = JSON.parse(legacyRaw);

    // Calculate daily target from plan
    let dailyTarget = 6200; // Default balanced
    if (legacy.plan === 'custom' && legacy.customDaily > 0) {
      dailyTarget = legacy.customDaily;
    } else if (legacy.plan && PLAN_DAILY_TARGETS[legacy.plan]) {
      dailyTarget = PLAN_DAILY_TARGETS[legacy.plan];
    }

    // Convert session logs
    const sessionLogs: SessionLog[] = [];
    let lastLoggedDate: string | null = null;

    for (const entry of legacy.dailyLog) {
      // Track the most recent log date
      if (!lastLoggedDate || entry.date > lastLoggedDate) {
        lastLoggedDate = entry.date;
      }

      for (const session of entry.sessions) {
        const mappedSession = SESSION_KEY_MAP[session.session] || 'Other';
        sessionLogs.push({
          date: entry.date,
          session: mappedSession,
          count: session.count,
          timestamp: session.timestamp,
        });
      }
    }

    // Calculate today's progress from daily log
    const today = new Date().toISOString().slice(0, 10);
    const todayEntry = legacy.dailyLog.find((e) => e.date === today);
    const todayProgress = todayEntry?.total ?? 0;

    // Calculate streak (simplified - assumes consecutive if there's data)
    const sortedDates = legacy.dailyLog
      .filter((e) => e.total > 0)
      .map((e) => e.date)
      .sort((a, b) => b.localeCompare(a));

    let streakDays = 0;
    if (sortedDates.length > 0) {
      const todayDate = new Date();
      let checkDate = new Date(todayDate);

      for (const dateStr of sortedDates) {
        const checkDateStr = checkDate.toISOString().slice(0, 10);
        if (dateStr === checkDateStr) {
          streakDays++;
          checkDate.setDate(checkDate.getDate() - 1);
        } else {
          break;
        }
      }
    }

    // Build migrated challenge
    const migratedChallenge: Challenge = {
      id: generateId(),
      type: 'ISTIGHFAR',
      title: 'Ramadan Istighfār',
      arabicText: 'أَسْتَغْفِرُ اللهَ',
      transliteration: 'Astaghfirullāh',
      meaning: 'I seek forgiveness from Allah',
      dailyTarget,
      ramadanTarget: 124000,
      todayProgress,
      ramadanProgress: legacy.cumulativeTotal,
      streakDays,
      lastLoggedDate,
      quickAddPresets: [33, 100, 500, 1000],
      sessionLogs,
      createdAt: new Date().toISOString(),
    };

    // Save to new storage key
    localStorage.setItem(STORAGE_KEYS.CHALLENGES_V2, JSON.stringify([migratedChallenge]));

    // Optionally: Remove legacy key to prevent re-migration
    // localStorage.removeItem(STORAGE_KEYS.LEGACY_ISTIGHFAR);
    // Note: Keeping legacy for safety, can be removed after confirmed stable

    console.log('[RamadanChallenges] Successfully migrated legacy Istighfār data');
    return migratedChallenge;
  } catch (error) {
    console.error('[RamadanChallenges] Migration failed:', error);
    return null;
  }
}

/**
 * Check if migration is needed (has legacy data but no v2)
 */
export function needsMigration(): boolean {
  if (typeof window === 'undefined') return false;

  const hasV2 = !!localStorage.getItem(STORAGE_KEYS.CHALLENGES_V2);
  const hasLegacy = !!localStorage.getItem(STORAGE_KEYS.LEGACY_ISTIGHFAR);

  return !hasV2 && hasLegacy;
}
