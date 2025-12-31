/**
 * Divine Name Resonance (28-Letter Cycle)
 * Based on Maghribī ʿIlm al-Asrār / ʿIlm al-Ḥurūf (Jaʿfarī principles)
 * 
 * This module implements the EXACT Divine Name Resonance methodology
 * from the mobile app - a correspondence system, not destiny or guarantee.
 */

import { normalizeArabic } from '../lib/text-normalize';

/**
 * Abjad Kabīr values for all Arabic letters
 * AUTHORITATIVE - DO NOT MODIFY
 */
export const ABJAD_KABIR: Record<string, number> = {
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
  'غ': 1000
};

/**
 * 28 Governing Divine Names mapped to the Arabic alphabet
 * EXACT CORRESPONDENCE - DO NOT MODIFY
 * 
 * Each of the 28 Arabic letters has a corresponding Divine Name
 */
export interface GoverningDivineName {
  index: number;          // 1-28
  letter: string;         // Arabic letter
  name: string;           // Divine Name in Arabic
  transliteration: string;
  translation: {
    en: string;
    fr: string;
  };
}

/**
 * The 28 Governing Divine Names (AUTHORITATIVE TABLE)
 * Based on classical Maghribī tradition
 */
export const GOVERNING_DIVINE_NAMES: GoverningDivineName[] = [
  { index: 1, letter: 'ا', name: 'الله', transliteration: 'Allāh', translation: { en: 'The God', fr: 'Le Dieu' } },
  { index: 2, letter: 'ب', name: 'باقٍ', transliteration: 'Bāqī', translation: { en: 'The Everlasting', fr: 'L\'Éternel' } },
  { index: 3, letter: 'ج', name: 'جامع', transliteration: 'Jāmiʿ', translation: { en: 'The Gatherer', fr: 'Le Rassembleur' } },
  { index: 4, letter: 'د', name: 'دائم', transliteration: 'Dāʾim', translation: { en: 'The Eternal', fr: 'L\'Éternel' } },
  { index: 5, letter: 'ه', name: 'هادي', transliteration: 'Hādī', translation: { en: 'The Guide', fr: 'Le Guide' } },
  { index: 6, letter: 'و', name: 'ودود', transliteration: 'Wadūd', translation: { en: 'The Loving', fr: 'L\'Affectueux' } },
  { index: 7, letter: 'ز', name: 'زكي', transliteration: 'Zakī', translation: { en: 'The Pure', fr: 'Le Pur' } },
  { index: 8, letter: 'ح', name: 'حكيم', transliteration: 'Ḥakīm', translation: { en: 'The Wise', fr: 'Le Sage' } },
  { index: 9, letter: 'ط', name: 'طاهر', transliteration: 'Ṭāhir', translation: { en: 'The Pure One', fr: 'Le Pur' } },
  { index: 10, letter: 'ي', name: 'يقين', transliteration: 'Yaqīn', translation: { en: 'The Certainty', fr: 'La Certitude' } },
  { index: 11, letter: 'ك', name: 'كريم', transliteration: 'Karīm', translation: { en: 'The Generous', fr: 'Le Généreux' } },
  { index: 12, letter: 'ل', name: 'لطيف', transliteration: 'Laṭīf', translation: { en: 'The Subtle', fr: 'Le Subtil' } },
  { index: 13, letter: 'م', name: 'مؤمن', transliteration: 'Muʾmin', translation: { en: 'The Believer', fr: 'Le Croyant' } },
  { index: 14, letter: 'ن', name: 'نور', transliteration: 'Nūr', translation: { en: 'The Light', fr: 'La Lumière' } },
  { index: 15, letter: 'س', name: 'سلام', transliteration: 'Salām', translation: { en: 'The Peace', fr: 'La Paix' } },
  { index: 16, letter: 'ع', name: 'عليم', transliteration: 'ʿAlīm', translation: { en: 'The All-Knowing', fr: 'L\'Omniscient' } },
  { index: 17, letter: 'ف', name: 'فرد', transliteration: 'Fard', translation: { en: 'The Unique', fr: 'L\'Unique' } },
  { index: 18, letter: 'ص', name: 'صبور', transliteration: 'Ṣabūr', translation: { en: 'The Patient', fr: 'Le Patient' } },
  { index: 19, letter: 'ق', name: 'قادر', transliteration: 'Qādir', translation: { en: 'The Capable', fr: 'Le Capable' } },
  { index: 20, letter: 'ر', name: 'رحمن', transliteration: 'Raḥmān', translation: { en: 'The Most Gracious', fr: 'Le Tout Miséricordieux' } },
  { index: 21, letter: 'ش', name: 'شكور', transliteration: 'Shakūr', translation: { en: 'The Grateful', fr: 'Le Reconnaissant' } },
  { index: 22, letter: 'ت', name: 'تواب', transliteration: 'Tawwāb', translation: { en: 'The Acceptor of Repentance', fr: 'Celui qui accepte le repentir' } },
  { index: 23, letter: 'ث', name: 'ثابت', transliteration: 'Thābit', translation: { en: 'The Firm', fr: 'Le Ferme' } },
  { index: 24, letter: 'خ', name: 'خبير', transliteration: 'Khabīr', translation: { en: 'The Aware', fr: 'L\'Expert' } },
  { index: 25, letter: 'ذ', name: 'ذو الجلال والإكرام', transliteration: 'Dhū al-Jalāl wa al-Ikrām', translation: { en: 'The Lord of Majesty and Bounty', fr: 'Le Seigneur de Majesté et de Générosité' } },
  { index: 26, letter: 'ض', name: 'ضار', transliteration: 'Ḍārr', translation: { en: 'The Distresser', fr: 'Celui qui afflige' } },
  { index: 27, letter: 'ظ', name: 'ظاهر', transliteration: 'Ẓāhir', translation: { en: 'The Manifest', fr: 'L\'Apparent' } },
  { index: 28, letter: 'غ', name: 'غني', transliteration: 'Ghanī', translation: { en: 'The Self-Sufficient', fr: 'Le Riche' } }
];

/**
 * Normalize Arabic name for Abjad calculation
 * 
 * MANDATORY normalization rules:
 * - Remove tashkīl (harakāt), tatwīl (ـ), punctuation, spaces
 * - Normalize: آ / أ / إ / ٱ → ا
 * - Normalize: ة → ه
 * - Normalize: ى → ي
 * - Normalize: ؤ → و
 * - Normalize: ئ → ي
 * 
 * @param name - Arabic name to normalize
 * @returns Normalized name ready for Abjad calculation
 */
export function normalizeForDivineNameResonance(name: string): string {
  if (!name || name.trim().length === 0) {
    return '';
  }
  
  // Use the existing normalizeArabic function with our specific options
  return normalizeArabic(name, {
    stripDiacritics: true,
    unifyAlif: true,
    taMarbutaAs: 'ه',
    stripTatweel: true,
    keepSpaces: false
  });
}

/**
 * Calculate Abjad total using Abjad Kabīr values
 * 
 * @param normalizedName - Normalized Arabic name
 * @returns Total Abjad value
 */
export function calculateAbjadTotal(normalizedName: string): number {
  if (!normalizedName) {
    return 0;
  }
  
  const letters = [...normalizedName];
  return letters.reduce((sum, letter) => {
    const value = ABJAD_KABIR[letter];
    return sum + (value || 0); // Ignore non-Abjad characters safely
  }, 0);
}

/**
 * Apply the 28-letter cycle reduction
 * 
 * CORE RULE (CRITICAL - DO NOT MODIFY):
 * - Arabic has 28 letters → reduction is by 28 ONLY
 * - IF total < 28: index = total (DO NOT divide)
 * - ELSE: index = total % 28, IF index == 0 → index = 28
 * 
 * @param total - Abjad total
 * @returns Index (1-28)
 */
export function apply28LetterCycle(total: number): number {
  if (total < 28) {
    return total;
  }
  
  const index = total % 28;
  return index === 0 ? 28 : index;
}

/**
 * Get Governing Divine Name by index (1-28)
 * 
 * @param index - Index (1-28)
 * @returns Governing Divine Name or undefined
 */
export function getGoverningDivineNameByIndex(index: number): GoverningDivineName | undefined {
  if (index < 1 || index > 28) {
    return undefined;
  }
  
  return GOVERNING_DIVINE_NAMES[index - 1];
}

/**
 * Calculate dhikr count for a Divine Name
 * 
 * The recommended dhikr count is the Abjad Kabīr value of the Divine Name ITSELF.
 * NOT the user's name, NOT the resonance index, NOT multipliers.
 * 
 * @param divineName - Divine Name in Arabic
 * @returns Dhikr count (Abjad value of the Divine Name)
 */
export function calculateDhikrCount(divineName: string): number {
  const normalized = normalizeForDivineNameResonance(divineName);
  return calculateAbjadTotal(normalized);
}

/**
 * Divine Name Resonance Result
 */
export interface DivineNameResonanceResult {
  // Input
  originalName: string;
  normalizedName: string;
  
  // Calculation steps
  abjadTotal: number;
  resonanceIndex: number; // 1-28
  
  // Governing Divine Name
  governingLetter: string;
  governingName: string;
  transliteration: string;
  translation: {
    en: string;
    fr: string;
  };
  
  // Dhikr recommendation
  dhikrCount: number;
}

/**
 * MAIN FUNCTION: Calculate Divine Name Resonance
 * 
 * This is the complete implementation of the Divine Name Resonance methodology.
 * 
 * @param arabicName - User's name in Arabic
 * @returns Divine Name Resonance result
 */
export function calculateDivineNameResonance(arabicName: string): DivineNameResonanceResult | null {
  if (!arabicName || arabicName.trim().length === 0) {
    return null;
  }
  
  // Step 1: Normalize the name
  const normalizedName = normalizeForDivineNameResonance(arabicName);
  
  if (!normalizedName) {
    return null;
  }
  
  // Step 2: Calculate Abjad total
  const abjadTotal = calculateAbjadTotal(normalizedName);
  
  if (abjadTotal === 0) {
    return null;
  }
  
  // Step 3: Apply 28-letter cycle reduction
  const resonanceIndex = apply28LetterCycle(abjadTotal);
  
  // Step 4: Get the Governing Divine Name
  const governingDivineName = getGoverningDivineNameByIndex(resonanceIndex);
  
  if (!governingDivineName) {
    return null;
  }
  
  // Step 5: Calculate dhikr count (from the Divine Name itself)
  const dhikrCount = calculateDhikrCount(governingDivineName.name);
  
  return {
    originalName: arabicName,
    normalizedName,
    abjadTotal,
    resonanceIndex,
    governingLetter: governingDivineName.letter,
    governingName: governingDivineName.name,
    transliteration: governingDivineName.transliteration,
    translation: governingDivineName.translation,
    dhikrCount
  };
}
