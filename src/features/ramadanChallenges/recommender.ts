/**
 * Ramadan Dhikr Recommender
 * ==========================
 * Rule-based "Best Dhikr Right Now" logic based on time of day
 * and (future) planetary hour data.
 */

import type { Challenge, ChallengeType } from './types';

// ─── Time Window Configuration ───────────────────────────────────────────────────

interface TimeWindow {
  name: string;
  nameAr: string;
  startHour: number;
  endHour: number;
  recommended: ChallengeType[];
}

/**
 * Time windows with recommended dhikr types.
 * Order matters - first match wins when types overlap.
 */
const TIME_WINDOWS: TimeWindow[] = [
  {
    name: 'Fajr / Pre-dawn',
    nameAr: 'الفجر',
    startHour: 4,
    endHour: 7,
    recommended: ['ISTIGHFAR', 'DIVINE_NAME'],
  },
  {
    name: 'Morning / Ḍuḥā',
    nameAr: 'الضحى',
    startHour: 7,
    endHour: 12,
    recommended: ['SALAWAT', 'DIVINE_NAME'],
  },
  {
    name: 'Ẓuhr / Midday',
    nameAr: 'الظهر',
    startHour: 12,
    endHour: 15,
    recommended: ['DIVINE_NAME', 'SALAWAT'],
  },
  {
    name: 'ʿAṣr / Afternoon',
    nameAr: 'العصر',
    startHour: 15,
    endHour: 18,
    recommended: ['ISTIGHFAR', 'SALAWAT'],
  },
  {
    name: 'Maghrib / Ifṭār',
    nameAr: 'المغرب',
    startHour: 18,
    endHour: 21,
    recommended: ['SALAWAT', 'ISTIGHFAR'],
  },
  {
    name: 'ʿIshāʾ / Tarāwīḥ',
    nameAr: 'العشاء',
    startHour: 21,
    endHour: 24,
    recommended: ['DIVINE_NAME', 'CUSTOM'],
  },
  {
    name: 'Late Night / Tahajjud',
    nameAr: 'القيام',
    startHour: 0,
    endHour: 4,
    recommended: ['ISTIGHFAR', 'DIVINE_NAME'],
  },
];

// ─── Recommendation Result ───────────────────────────────────────────────────────

export interface DhikrRecommendation {
  /** The recommended challenge, or null if none match */
  challenge: Challenge | null;
  /** Current time window name */
  timeWindow: string;
  /** Arabic name of time window */
  timeWindowAr: string;
  /** Why this dhikr is recommended */
  reason: string;
  /** Arabic reason */
  reasonAr: string;
}

// ─── Main Recommender Function ───────────────────────────────────────────────────

/**
 * Get the best dhikr recommendation based on current time and active challenges.
 *
 * @param challenges - List of user's active challenges
 * @param hour - Current hour (0-23), defaults to current time
 * @param planetaryHour - Future hook for planetary hour data
 * @returns Recommendation with challenge and reasoning
 */
export function getBestDhikrNow(
  challenges: Challenge[],
  hour?: number,
  planetaryHour?: string
): DhikrRecommendation {
  const currentHour = hour ?? new Date().getHours();

  // Find current time window
  const window = TIME_WINDOWS.find((w) => {
    if (w.startHour < w.endHour) {
      return currentHour >= w.startHour && currentHour < w.endHour;
    }
    // Handle midnight crossing (e.g., 21-4)
    return currentHour >= w.startHour || currentHour < w.endHour;
  }) || TIME_WINDOWS[0]; // Fallback to first window

  // Find best matching challenge from user's active challenges
  let bestChallenge: Challenge | null = null;

  for (const recommendedType of window.recommended) {
    const match = challenges.find((c) => c.type === recommendedType);
    if (match) {
      bestChallenge = match;
      break;
    }
  }

  // If no type match, pick any active challenge (prefer one with lowest completion %)
  if (!bestChallenge && challenges.length > 0) {
    const sorted = [...challenges].sort((a, b) => {
      const pctA = a.ramadanTarget > 0 ? a.ramadanProgress / a.ramadanTarget : 1;
      const pctB = b.ramadanTarget > 0 ? b.ramadanProgress / b.ramadanTarget : 1;
      return pctA - pctB;
    });
    bestChallenge = sorted[0];
  }

  // Build reason
  const typeReasons: Record<ChallengeType, { en: string; ar: string }> = {
    ISTIGHFAR: {
      en: 'Istighfār is most powerful during this window',
      ar: 'الاستغفار أقوى في هذا الوقت',
    },
    SALAWAT: {
      en: 'Ṣalawāt upon the Prophet ﷺ brings abundant blessings now',
      ar: 'الصلاة على النبي ﷺ تجلب البركات الآن',
    },
    DIVINE_NAME: {
      en: 'Divine Name invocation is especially blessed now',
      ar: 'ذكر الاسم الإلهي مبارك خاصة الآن',
    },
    CUSTOM: {
      en: 'Continue your personal wird during this spiritual window',
      ar: 'استمر في وردك الشخصي في هذا الوقت الروحاني',
    },
  };

  const reason = bestChallenge
    ? typeReasons[bestChallenge.type]
    : { en: 'Start a dhikr challenge for this blessed time', ar: 'ابدأ تحدي ذكر لهذا الوقت المبارك' };

  return {
    challenge: bestChallenge,
    timeWindow: window.name,
    timeWindowAr: window.nameAr,
    reason: reason.en,
    reasonAr: reason.ar,
  };
}

/**
 * Get the current time window name (without needing challenges)
 */
export function getCurrentTimeWindow(): { name: string; nameAr: string } {
  const currentHour = new Date().getHours();

  const window = TIME_WINDOWS.find((w) => {
    if (w.startHour < w.endHour) {
      return currentHour >= w.startHour && currentHour < w.endHour;
    }
    return currentHour >= w.startHour || currentHour < w.endHour;
  }) || TIME_WINDOWS[0];

  return { name: window.name, nameAr: window.nameAr };
}
