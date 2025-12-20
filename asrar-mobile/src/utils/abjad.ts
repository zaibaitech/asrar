/**
 * Abjad (Arabic Letter Numerology) Utilities
 * Extracted from web app for mobile use
 */

/**
 * Maghribi (Western/North African) Abjad System
 * This is the traditional system used in Morocco, Algeria, Tunisia, etc.
 */
export const ABJAD_MAGHRIBI: Record<string, number> = {
  'ا': 1,
  'ب': 2,
  'ج': 3,
  'د': 4,
  'ه': 5,
  'و': 6,
  'ز': 7,
  'ح': 8,
  'ط': 9,
  'ي': 10,
  'ك': 20,
  'ل': 30,
  'م': 40,
  'ن': 50,
  'س': 60,
  'ع': 70,
  'ف': 80,
  'ص': 90,
  'ق': 100,
  'ر': 200,
  'ش': 300,
  'ت': 400,
  'ث': 500,
  'خ': 600,
  'ذ': 700,
  'ض': 800,
  'ظ': 900,
  'غ': 1000,
  // Special forms
  'ة': 400, // tā' marbūṭa (feminine ending) = same as ت
  'ى': 10,  // alif maqṣūra = same as ي
  'أ': 1,   // hamza on alif = same as ا
  'إ': 1,   // hamza below alif = same as ا
  'آ': 1,   // madda on alif = same as ا
  'ؤ': 6,   // hamza on waw = same as و
  'ئ': 10,  // hamza on yā' = same as ي
};

/**
 * Mashriq (Eastern) Abjad System
 * Used in Egypt, Levant, Arabian Peninsula
 */
export const ABJAD_MASHRIQ: Record<string, number> = {
  ...ABJAD_MAGHRIBI, // Start with Maghribi as base
  'غ': 800,  // Different from Maghribi (1000)
  'ظ': 1000, // Different from Maghribi (900)
  'ض': 900,  // Different from Maghribi (800)
};

/**
 * Calculate mod with 1-indexed result (mod-12 returns 1-12 instead of 0-11)
 * Used for Buruj calculations
 */
export function modIndex(n: number, base: 4 | 12): number {
  const remainder = n % base;
  return remainder === 0 ? base : remainder;
}

/**
 * Calculate Abjad value of a text string
 * 
 * @param text - Text to calculate (Arabic or Latin)
 * @param abjad - Abjad system to use (defaults to Maghribi)
 * @returns Total Abjad value
 */
export function calculateAbjadValue(
  text: string,
  abjad: Record<string, number> = ABJAD_MAGHRIBI
): number {
  if (!text || text.trim().length === 0) {
    return 0;
  }
  
  // Remove diacritics (tashkeel) and normalize whitespace
  const normalized = text.replaceAll(/[ًٌٍَُِّْ]/g, '').replaceAll(/\s+/g, '');
  const letters = [...normalized];
  
  return letters.reduce((sum, ch) => sum + (abjad[ch] || 0), 0);
}

/**
 * Validate name input
 * Checks if name contains valid characters (Arabic, Latin, spaces, hyphens)
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
 * Calculate digital root (sum digits until single digit)
 * Used in various numerological calculations
 */
export function digitalRoot(num: number): number {
  if (num === 0) return 0;
  return num % 9 === 0 ? 9 : num % 9;
}
