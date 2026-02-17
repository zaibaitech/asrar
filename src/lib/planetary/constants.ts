/**
 * Planetary Constants
 * Extracted from asrar-mobile codebase
 */

import { Planet, PlanetInfo, DayOfWeek, Element, ZodiacSign, ZodiacInfo } from './types';

// ============================================================================
// PLANET INFO
// ============================================================================

export const PLANET_INFO: Record<Planet, PlanetInfo> = {
  Sun: {
    planet: 'Sun',
    symbol: '☉',
    arabicName: 'الشمس',
    element: 'fire',
  },
  Moon: {
    planet: 'Moon',
    symbol: '☽',
    arabicName: 'القمر',
    element: 'water',
  },
  Mars: {
    planet: 'Mars',
    symbol: '♂',
    arabicName: 'المريخ',
    element: 'fire',
  },
  Mercury: {
    planet: 'Mercury',
    symbol: '☿',
    arabicName: 'عطارد',
    element: 'air',
  },
  Jupiter: {
    planet: 'Jupiter',
    symbol: '♃',
    arabicName: 'المشتري',
    element: 'air',
  },
  Venus: {
    planet: 'Venus',
    symbol: '♀',
    arabicName: 'الزهرة',
    element: 'water',
  },
  Saturn: {
    planet: 'Saturn',
    symbol: '♄',
    arabicName: 'زحل',
    element: 'earth',
  },
};

// ============================================================================
// CHALDEAN ORDER
// ============================================================================

/**
 * Chaldean order sequence (slowest to fastest)
 * Saturn → Jupiter → Mars → Sun → Venus → Mercury → Moon
 */
export const CHALDEAN_ORDER: Planet[] = [
  'Saturn',
  'Jupiter',
  'Mars',
  'Sun',
  'Venus',
  'Mercury',
  'Moon',
];

// ============================================================================
// DAY RULERS
// ============================================================================

/**
 * Day rulers (0=Sunday, 1=Monday, etc.)
 */
export const DAY_RULERS: Record<number, Planet> = {
  0: 'Sun',     // Sunday
  1: 'Moon',    // Monday
  2: 'Mars',    // Tuesday
  3: 'Mercury', // Wednesday
  4: 'Jupiter', // Thursday
  5: 'Venus',   // Friday
  6: 'Saturn',  // Saturday
};

/**
 * Day of week names
 */
export const DAY_NAMES: DayOfWeek[] = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday'
];

/**
 * Day of week Arabic names
 */
export const DAY_NAMES_ARABIC: Record<DayOfWeek, string> = {
  Sunday: 'الأحد',
  Monday: 'الإثنين',
  Tuesday: 'الثلاثاء',
  Wednesday: 'الأربعاء',
  Thursday: 'الخميس',
  Friday: 'الجمعة',
  Saturday: 'السبت',
};

// ============================================================================
// ELEMENT DATA
// ============================================================================

/**
 * Element Arabic names
 */
export const ELEMENT_ARABIC: Record<Element, string> = {
  fire: 'نار',
  water: 'ماء',
  air: 'هواء',
  earth: 'تراب',
};

/**
 * Element emojis/icons
 */
export const ELEMENT_EMOJI: Record<Element, string> = {
  fire: '🔥',
  water: '💧',
  air: '💨',
  earth: '🌿',
};

/**
 * Element descriptions
 */
export const ELEMENT_DESCRIPTIONS: Record<Element, string> = {
  fire: 'Passionate & energizing',
  water: 'Flowing & emotional',
  air: 'Intellectual & communicative',
  earth: 'Grounded & stable',
};

/**
 * Best activities for each element
 */
export const ELEMENT_BEST_FOR: Record<Element, string[]> = {
  fire: ['Leadership', 'Starting projects', 'Physical activities', 'Bold decisions'],
  water: ['Emotional healing', 'Relationships', 'Intuitive work', 'Creative flow'],
  air: ['Learning', 'Communication', 'Planning', 'Social connections'],
  earth: ['Building foundations', 'Practical tasks', 'Financial matters', 'Physical health'],
};

// ============================================================================
// ZODIAC DATA
// ============================================================================

/**
 * Zodiac sign data with elements, symbols, and Arabic names
 */
export const ZODIAC_DATA: Record<ZodiacSign, ZodiacInfo> = {
  aries: { key: 'aries', element: 'fire', symbol: '♈', arabicName: 'الحمل' },
  taurus: { key: 'taurus', element: 'earth', symbol: '♉', arabicName: 'الثور' },
  gemini: { key: 'gemini', element: 'air', symbol: '♊', arabicName: 'الجوزاء' },
  cancer: { key: 'cancer', element: 'water', symbol: '♋', arabicName: 'السرطان' },
  leo: { key: 'leo', element: 'fire', symbol: '♌', arabicName: 'الأسد' },
  virgo: { key: 'virgo', element: 'earth', symbol: '♍', arabicName: 'العذراء' },
  libra: { key: 'libra', element: 'air', symbol: '♎', arabicName: 'الميزان' },
  scorpio: { key: 'scorpio', element: 'water', symbol: '♏', arabicName: 'العقرب' },
  sagittarius: { key: 'sagittarius', element: 'fire', symbol: '♐', arabicName: 'القوس' },
  capricorn: { key: 'capricorn', element: 'earth', symbol: '♑', arabicName: 'الجدي' },
  aquarius: { key: 'aquarius', element: 'air', symbol: '♒', arabicName: 'الدلو' },
  pisces: { key: 'pisces', element: 'water', symbol: '♓', arabicName: 'الحوت' },
};

/**
 * Planetary rulerships over zodiac signs
 */
export const PLANET_RULERSHIPS: Record<Planet, ZodiacSign[]> = {
  Sun: ['leo'],
  Moon: ['cancer'],
  Mars: ['aries', 'scorpio'],
  Mercury: ['gemini', 'virgo'],
  Jupiter: ['sagittarius', 'pisces'],
  Venus: ['taurus', 'libra'],
  Saturn: ['capricorn', 'aquarius'],
};

/**
 * Burj (zodiac) to planetary ruler mapping
 */
export const BURJ_RULERS: Record<number, Planet> = {
  0: 'Mars',     // Aries
  1: 'Venus',    // Taurus
  2: 'Mercury',  // Gemini
  3: 'Moon',     // Cancer
  4: 'Sun',      // Leo
  5: 'Mercury',  // Virgo
  6: 'Venus',    // Libra
  7: 'Mars',     // Scorpio
  8: 'Jupiter',  // Sagittarius
  9: 'Saturn',   // Capricorn
  10: 'Saturn',  // Aquarius
  11: 'Jupiter', // Pisces
};
