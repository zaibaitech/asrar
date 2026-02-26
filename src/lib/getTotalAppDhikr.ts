/**
 * Get Total App Dhikr
 * ====================
 * Aggregates dhikr counts from all tracking sources in the app:
 * 1. Ramadan Challenges store (ramadanProgress per challenge)
 * 2. Istikhara DhikrCounter sessions (dhikr-history)
 * 3. Planetary DhikrCard counters (dhikr_count_${planet})
 */

const PLANET_NAMES = ['Sun', 'Moon', 'Mars', 'Mercury', 'Jupiter', 'Venus', 'Saturn'] as const;

export interface AppDhikrTotals {
  ramadanChallenges: number;
  istikharaSessions: number;
  planetaryDhikr: number;
  total: number;
}

/**
 * Gets total dhikr from all sources in the app.
 * Must be called client-side only (uses localStorage).
 */
export function getTotalAppDhikr(): AppDhikrTotals {
  if (typeof window === 'undefined') {
    return { ramadanChallenges: 0, istikharaSessions: 0, planetaryDhikr: 0, total: 0 };
  }

  // 1. Ramadan Challenges store (key: ramadan_challenges_v2)
  let ramadanChallenges = 0;
  try {
    const stored = localStorage.getItem('ramadan_challenges_v2');
    if (stored) {
      const challenges = JSON.parse(stored);
      // Storage format is an array of challenges directly
      if (Array.isArray(challenges)) {
        ramadanChallenges = challenges.reduce(
          (sum: number, c: { ramadanProgress?: number; sessionLogs?: { count: number }[] }) => {
            // Prefer recalculating from sessionLogs for accuracy
            if (Array.isArray(c.sessionLogs) && c.sessionLogs.length > 0) {
              return sum + c.sessionLogs.reduce((s: number, log: { count: number }) => s + (log.count || 0), 0);
            }
            return sum + (c.ramadanProgress || 0);
          },
          0
        );
      }
    }
  } catch (e) {
    console.warn('Failed to read ramadan challenges:', e);
  }

  // 2. Istikhara DhikrCounter sessions history
  let istikharaSessions = 0;
  try {
    const historyStr = localStorage.getItem('dhikr-history');
    if (historyStr) {
      const history = JSON.parse(historyStr);
      if (Array.isArray(history)) {
        istikharaSessions = history.reduce(
          (sum: number, session: { count?: number; completed?: boolean }) =>
            sum + (session.completed ? (session.count || 0) : 0),
          0
        );
      }
    }
  } catch (e) {
    console.warn('Failed to read dhikr history:', e);
  }

  // 3. Planetary DhikrCard counters
  let planetaryDhikr = 0;
  try {
    for (const planet of PLANET_NAMES) {
      const countStr = localStorage.getItem(`dhikr_count_${planet}`);
      if (countStr) {
        const count = parseInt(countStr, 10);
        if (!isNaN(count)) {
          planetaryDhikr += count;
        }
      }
    }
  } catch (e) {
    console.warn('Failed to read planetary dhikr:', e);
  }

  return {
    ramadanChallenges,
    istikharaSessions,
    planetaryDhikr,
    total: ramadanChallenges + istikharaSessions + planetaryDhikr,
  };
}

/**
 * React hook to get total dhikr with hydration safety.
 */
export function useTotalAppDhikr(): AppDhikrTotals {
  // This function is for direct use in components
  // For hydration-safe usage, wrap in useEffect pattern
  return getTotalAppDhikr();
}
