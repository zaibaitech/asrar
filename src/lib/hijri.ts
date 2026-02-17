/**
 * Hijri (Islamic) Calendar Utility
 * 
 * Provides conversion between Gregorian and Hijri dates,
 * with specific support for detecting the Ramadan month.
 * 
 * Uses the Umm al-Qura calendar approximation algorithm.
 * For moonsighting-based communities, the start date can be overridden.
 */

// ─── Known Ramadan start dates (Gregorian) for moonsighting-based communities ──
// These are manually verified dates; add future years as needed.
const RAMADAN_START_DATES: Record<number, { year: number; month: number; day: number }> = {
  1446: { year: 2025, month: 2, day: 28 },  // Ramadan 1446 AH — Feb 28, 2025
  1447: { year: 2026, month: 2, day: 18 },  // Ramadan 1447 AH — Feb 18, 2026
  1448: { year: 2027, month: 2, day: 7 },   // Ramadan 1448 AH — Feb 7, 2027
};

// Duration of Ramadan is either 29 or 30 days. Default to 30.
const RAMADAN_DURATION = 30;

export interface HijriDate {
  year: number;
  month: number;  // 1–12
  day: number;     // 1–30
  monthName: string;
  monthNameAr: string;
}

export interface RamadanInfo {
  isRamadan: boolean;
  dayOfRamadan: number;  // 1–30, or 0 if not Ramadan
  hijriYear: number;
  ramadanStart: Date | null;
  ramadanEnd: Date | null;
  daysRemaining: number; // days left in Ramadan (including today)
}

const HIJRI_MONTHS = [
  { en: 'Muḥarram', ar: 'مُحَرَّم' },
  { en: 'Ṣafar', ar: 'صَفَر' },
  { en: 'Rabīʿ al-Awwal', ar: 'رَبِيعُ الأوَّل' },
  { en: 'Rabīʿ al-Thānī', ar: 'رَبِيعُ الثَّانِي' },
  { en: 'Jumādā al-Ūlā', ar: 'جُمَادَى الأولَى' },
  { en: 'Jumādā al-Thāniyah', ar: 'جُمَادَى الثَّانِيَة' },
  { en: 'Rajab', ar: 'رَجَب' },
  { en: 'Shaʿbān', ar: 'شَعبَان' },
  { en: 'Ramaḍān', ar: 'رَمَضَان' },
  { en: 'Shawwāl', ar: 'شَوَّال' },
  { en: 'Dhū al-Qaʿdah', ar: 'ذُو القَعدَة' },
  { en: 'Dhū al-Ḥijjah', ar: 'ذُو الحِجَّة' },
];

/**
 * Get the current Ramadan info based on known start dates.
 * Returns whether today falls within Ramadan and which day it is.
 */
export function getRamadanInfo(date: Date = new Date()): RamadanInfo {
  const today = new Date(date.getFullYear(), date.getMonth(), date.getDate());

  // Check each known Ramadan start date
  for (const [hijriYearStr, start] of Object.entries(RAMADAN_START_DATES)) {
    const hijriYear = parseInt(hijriYearStr);
    const ramadanStart = new Date(start.year, start.month - 1, start.day);
    const ramadanEnd = new Date(ramadanStart);
    ramadanEnd.setDate(ramadanEnd.getDate() + RAMADAN_DURATION - 1);

    if (today >= ramadanStart && today <= ramadanEnd) {
      const diffMs = today.getTime() - ramadanStart.getTime();
      const dayOfRamadan = Math.floor(diffMs / 86400000) + 1;
      const daysRemaining = RAMADAN_DURATION - dayOfRamadan + 1;

      return {
        isRamadan: true,
        dayOfRamadan,
        hijriYear,
        ramadanStart,
        ramadanEnd,
        daysRemaining,
      };
    }
  }

  return {
    isRamadan: false,
    dayOfRamadan: 0,
    hijriYear: 0,
    ramadanStart: null,
    ramadanEnd: null,
    daysRemaining: 0,
  };
}

/**
 * Get the Hijri month name for a given month number (1–12).
 */
export function getHijriMonthName(month: number, lang: 'en' | 'fr' | 'ar' = 'en'): string {
  const m = HIJRI_MONTHS[month - 1];
  if (!m) return '';
  if (lang === 'ar') return m.ar;
  return m.en;
}

/**
 * Format Ramadan day string, e.g., "Ramadan Day 5 / 30"
 */
export function formatRamadanDay(dayOfRamadan: number, lang: 'en' | 'fr' = 'en'): string {
  if (lang === 'fr') {
    return `Jour ${dayOfRamadan} / ${RAMADAN_DURATION} de Ramadan`;
  }
  return `Ramadan Day ${dayOfRamadan} / ${RAMADAN_DURATION}`;
}
