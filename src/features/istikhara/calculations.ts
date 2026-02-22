/**
 * Istikhara Calculation Utilities
 * Istikharah al-Asmā' - Personal Spiritual Guidance
 * 
 * Calculates buruj (zodiac) remainder and retrieves spiritual profile
 */

import { calculateAbjadValue, modIndex } from '../ilm-huruf/core';
import burujDataJson from '../../data/burujData.json';
import type { BurujProfile, BurujData, IstikharaCalculationResult } from './types';

// Type assertion for imported JSON (with unknown for safety)
const burujData = burujDataJson as unknown as BurujData;

/**
 * Calculate the buruj remainder from person and mother totals
 * Uses modIndex with base 12 for 1-indexed buruj system
 * 
 * @param personTotal - Abjad total of person's name
 * @param motherTotal - Abjad total of mother's name
 * @returns Buruj remainder (1-12)
 */
export function calculateBurujRemainder(personTotal: number, motherTotal: number): number {
  const combinedTotal = personTotal + motherTotal;
  // Use modIndex to get 1-indexed result (1-12 instead of 0-11)
  return modIndex(combinedTotal, 12);
}

/**
 * Get buruj profile data for a specific remainder
 * 
 * @param remainder - Buruj remainder (1-12)
 * @returns BurujProfile object with all spiritual guidance
 * @throws Error if remainder is invalid or profile not found
 */
export function getBurujData(remainder: number): BurujProfile {
  if (remainder < 1 || remainder > 12) {
    throw new Error(`Invalid buruj remainder: ${remainder}. Must be between 1 and 12.`);
  }

  const profile = burujData.buruj_data[remainder.toString()];
  
  if (!profile) {
    throw new Error(`Buruj profile not found for remainder ${remainder}`);
  }

  return profile;
}

/**
 * Calculate repetition count for Divine Names practice
 * Uses the combined total of person and mother names
 * 
 * @param personTotal - Abjad total of person's name
 * @param motherTotal - Abjad total of mother's name
 * @returns Number of repetitions for spiritual practice
 */
export function calculateRepetitionCount(personTotal: number, motherTotal: number): number {
  const combinedTotal = personTotal + motherTotal;
  return combinedTotal;
}

/**
 * Get day of week name from day number
 * 
 * @param dayNumber - Day number (0=Sunday, 1=Monday, etc.)
 * @returns Object with English and French day names
 */
export function getDayOfWeek(dayNumber: number | null): { en: string; fr: string } | null {
  if (dayNumber === null || dayNumber < 0 || dayNumber > 6) {
    return null;
  }

  const days: { [key: number]: { en: string; fr: string } } = {
    0: { en: 'Sunday', fr: 'Dimanche' },
    1: { en: 'Monday', fr: 'Lundi' },
    2: { en: 'Tuesday', fr: 'Mardi' },
    3: { en: 'Wednesday', fr: 'Mercredi' },
    4: { en: 'Thursday', fr: 'Jeudi' },
    5: { en: 'Friday', fr: 'Vendredi' },
    6: { en: 'Saturday', fr: 'Samedi' }
  };

  return days[dayNumber];
}

/**
 * Complete Istikhara calculation
 * Takes person and mother names, calculates all values and retrieves profile
 * 
 * @param personName - Person's name (Arabic or Latin)
 * @param motherName - Mother's name (Arabic or Latin)
 * @returns Complete calculation result with buruj profile
 */
export function calculateIstikhara(
  personName: string,
  motherName: string
): IstikharaCalculationResult {
  // Validate inputs
  if (!personName || personName.trim().length === 0) {
    throw new Error('Person name is required');
  }
  if (!motherName || motherName.trim().length === 0) {
    throw new Error('Mother name is required');
  }

  // Calculate Abjad totals
  const personTotal = calculateAbjadValue(personName);
  const motherTotal = calculateAbjadValue(motherName);
  const combinedTotal = personTotal + motherTotal;

  // Calculate buruj remainder
  const burujRemainder = calculateBurujRemainder(personTotal, motherTotal);

  // Get buruj profile
  const burujProfile = getBurujData(burujRemainder);

  // Calculate repetition count for spiritual practice
  const repetitionCount = calculateRepetitionCount(personTotal, motherTotal);

  return {
    personName: personName.trim(),
    motherName: motherName.trim(),
    personTotal,
    motherTotal,
    combinedTotal,
    burujRemainder,
    burujProfile,
    repetitionCount
  };
}

/**
 * Get element information from buruj remainder
 * Helper function for quick element lookup
 * 
 * @param remainder - Buruj remainder (1-12)
 * @returns Element type, emoji, and number
 */
export function getElementInfo(remainder: number): {
  element: 'fire' | 'earth' | 'air' | 'water';
  emoji: string;
  number: number;
  colors: [string, string];
} {
  const profile = getBurujData(remainder);
  return {
    element: profile.element,
    emoji: profile.element_emoji,
    number: profile.element_number,
    colors: profile.colors
  };
}

/**
 * Validate name input
 * Checks if name contains valid characters (Arabic, Latin, spaces, hyphens)
 * 
 * @param name - Name to validate
 * @returns true if valid, false otherwise
 */
export function validateName(name: string): boolean {
  if (!name || name.trim().length === 0) {
    return false;
  }

  // Allow Arabic letters, Latin letters, spaces, hyphens, and apostrophes
  const validNamePattern = /^[\u0600-\u06FFa-zA-Z\s\-']+$/;
  return validNamePattern.test(name);
}

/**
 * Get element name in specified language
 * 
 * @param element - Element type
 * @param language - 'en' or 'fr'
 * @returns Element name in specified language
 */
export function getElementName(
  element: 'fire' | 'earth' | 'air' | 'water',
  language: 'en' | 'fr'
): string {
  const elementNames = {
    fire: { en: 'Fire', fr: 'Feu' },
    earth: { en: 'Earth', fr: 'Terre' },
    air: { en: 'Air', fr: 'Air' },
    water: { en: 'Water', fr: 'Eau' }
  };

  return elementNames[element][language];
}

// ============================================================================
// BIRTH DATE-BASED CALCULATION (ʿIlm al-Nujūm - Tropical Zodiac)
// ============================================================================

/**
 * Burj (Zodiac Signs) in Arabic - Tropical zodiac
 */
export const BURJ_NAMES_AR = [
  'الحمل',     // Aries (Mar 21 - Apr 19)
  'الثور',     // Taurus (Apr 20 - May 20)
  'الجوزاء',   // Gemini (May 21 - Jun 20)
  'السرطان',   // Cancer (Jun 21 - Jul 22)
  'الأسد',     // Leo (Jul 23 - Aug 22)
  'العذراء',   // Virgo (Aug 23 - Sep 22)
  'الميزان',   // Libra (Sep 23 - Oct 22)
  'العقرب',    // Scorpio (Oct 23 - Nov 21)
  'القوس',     // Sagittarius (Nov 22 - Dec 21)
  'الجدي',     // Capricorn (Dec 22 - Jan 19)
  'الدلو',     // Aquarius (Jan 20 - Feb 18)
  'الحوت',     // Pisces (Feb 19 - Mar 20)
];

export const BURJ_NAMES_EN = [
  'Aries',
  'Taurus',
  'Gemini',
  'Cancer',
  'Leo',
  'Virgo',
  'Libra',
  'Scorpio',
  'Sagittarius',
  'Capricorn',
  'Aquarius',
  'Pisces',
];

export const BURJ_NAMES_FR = [
  'Bélier',
  'Taureau',
  'Gémeaux',
  'Cancer',
  'Lion',
  'Vierge',
  'Balance',
  'Scorpion',
  'Sagittaire',
  'Capricorne',
  'Verseau',
  'Poissons',
];

/**
 * Burj date ranges (tropical zodiac)
 * Format: { start: [month, day], end: [month, day] }
 */
const BURJ_DATE_RANGES = [
  { start: [3, 21], end: [4, 19] },   // Aries (index 0)
  { start: [4, 20], end: [5, 20] },   // Taurus (index 1)
  { start: [5, 21], end: [6, 20] },   // Gemini (index 2)
  { start: [6, 21], end: [7, 22] },   // Cancer (index 3)
  { start: [7, 23], end: [8, 22] },   // Leo (index 4)
  { start: [8, 23], end: [9, 22] },   // Virgo (index 5)
  { start: [9, 23], end: [10, 22] },  // Libra (index 6)
  { start: [10, 23], end: [11, 21] }, // Scorpio (index 7)
  { start: [11, 22], end: [12, 21] }, // Sagittarius (index 8)
  { start: [12, 22], end: [1, 19] },  // Capricorn (index 9)
  { start: [1, 20], end: [2, 18] },   // Aquarius (index 10)
  { start: [2, 19], end: [3, 20] },   // Pisces (index 11)
];

/**
 * Elements assigned to each Burj (tropical zodiac)
 */
const BURJ_ELEMENTS: ('fire' | 'earth' | 'air' | 'water')[] = [
  'fire',   // Aries
  'earth',  // Taurus
  'air',    // Gemini
  'water',  // Cancer
  'fire',   // Leo
  'earth',  // Virgo
  'air',    // Libra
  'water',  // Scorpio
  'fire',   // Sagittarius
  'earth',  // Capricorn
  'air',    // Aquarius
  'water',  // Pisces
];

/**
 * Planetary rulers for each Burj
 */
const BURJ_PLANETARY_RULERS = [
  'mars',      // Aries
  'venus',     // Taurus
  'mercury',   // Gemini
  'moon',      // Cancer
  'sun',       // Leo
  'mercury',   // Virgo
  'venus',     // Libra
  'mars',      // Scorpio
  'jupiter',   // Sagittarius
  'saturn',    // Capricorn
  'saturn',    // Aquarius
  'jupiter',   // Pisces
];

/**
 * Derive Burj (zodiac sign) from date of birth
 * Uses tropical zodiac
 * 
 * @param dobISO - Date of birth in ISO format (YYYY-MM-DD)
 * @returns Object with burj data or null if invalid
 */
export function deriveBurjFromDOB(dobISO: string): {
  burjAr: string;
  burjEn: string;
  burjFr: string;
  burjIndex: number;
  element: 'fire' | 'earth' | 'air' | 'water';
  planetaryRuler: string;
} | null {
  try {
    const date = new Date(dobISO);
    
    if (isNaN(date.getTime())) {
      return null;
    }
    
    const month = date.getMonth() + 1; // 1-12
    const day = date.getDate();
    
    // Find matching Burj
    for (let i = 0; i < BURJ_DATE_RANGES.length; i++) {
      const range = BURJ_DATE_RANGES[i];
      const [startMonth, startDay] = range.start;
      const [endMonth, endDay] = range.end;
      
      // Handle year-crossing signs (Capricorn: Dec 22 - Jan 19)
      if (startMonth > endMonth) {
        if (
          (month === startMonth && day >= startDay) ||
          (month === endMonth && day <= endDay)
        ) {
          return {
            burjAr: BURJ_NAMES_AR[i],
            burjEn: BURJ_NAMES_EN[i],
            burjFr: BURJ_NAMES_FR[i],
            burjIndex: i,
            element: BURJ_ELEMENTS[i],
            planetaryRuler: BURJ_PLANETARY_RULERS[i],
          };
        }
      } else {
        // Normal range (within same year)
        if (
          (month === startMonth && day >= startDay) ||
          (month === endMonth && day <= endDay) ||
          (month > startMonth && month < endMonth)
        ) {
          return {
            burjAr: BURJ_NAMES_AR[i],
            burjEn: BURJ_NAMES_EN[i],
            burjFr: BURJ_NAMES_FR[i],
            burjIndex: i,
            element: BURJ_ELEMENTS[i],
            planetaryRuler: BURJ_PLANETARY_RULERS[i],
          };
        }
      }
    }
    
    return null;
    
  } catch (error) {
    console.error('[Istikhara] Error deriving Burj from DOB:', error);
    return null;
  }
}

/**
 * Calculate Istikhara from birth date
 * Simpler method using only date of birth
 * 
 * @param dobISO - Date of birth in ISO format (YYYY-MM-DD)
 * @param dateFormat - 'full' or 'month-day'
 * @returns IstikharaCalculationResult with birth-date specific fields
 */
export function calculateIstikharaFromBirthDate(
  dobISO: string,
  dateFormat: 'full' | 'month-day' = 'full'
): IstikharaCalculationResult {
  const burjData = deriveBurjFromDOB(dobISO);
  
  if (!burjData) {
    throw new Error('Invalid date of birth');
  }
  
  // Get the buruj profile using the index (add 1 for 1-indexed lookup)
  const burujRemainder = burjData.burjIndex + 1;
  const burujProfile = getBurujData(burujRemainder);
  
  // Calculate a "pseudo" total based on the date for repetition count
  const date = new Date(dobISO);
  const pseudoTotal = date.getDate() + (date.getMonth() + 1) * 31;
  // Use simple modulo for repetition count (1-9)
  const repetitionCount = (pseudoTotal % 9) || 9;
  
  return {
    personName: burjData.burjAr,
    motherName: '',
    personTotal: 0,
    motherTotal: 0,
    combinedTotal: pseudoTotal,
    burujRemainder,
    burujProfile,
    repetitionCount,
    calculationMethod: 'birth-date',
    birthDate: dobISO,
    dateFormat,
    // Include zodiac names for display
    burjNameAr: burjData.burjAr,
    burjNameEn: burjData.burjEn,
    burjNameFr: burjData.burjFr,
    burjPlanetaryRuler: burjData.planetaryRuler,
  };
}
