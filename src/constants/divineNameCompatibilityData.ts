/**
 * Divine Name Compatibility — data layer for the "Person ↔ Divine Name" and
 * "Divine Name ↔ Intention" flows within the Compatibility feature.
 *
 * Ported from a mobile-app spec (services/compatibility/types.ts +
 * divineNamesData.ts). The mobile app's actual hand-curated per-Name
 * {element, planet, modeOfAction, classicalFunction} table was not
 * available when this was written, so DIVINE_NAME_CLASSICAL_DATA below is a
 * first-pass derived from each Name's classical meaning (Al-Ghazālī's
 * al-Maqṣad al-Asnā and standard tafsīr of al-Asmā' al-Ḥusnā), with
 * element/planet assigned via this app's own existing abjad-mod-7
 * PLANETARY_RULERS table (src/constants/compatibility.ts) applied to each
 * Name's own recomputed abjadValue, and modeOfAction derived deterministically
 * from classicalFunction. Replace with the mobile app's authoritative table
 * when available — everything downstream (algorithms, UI) reads through this
 * one file, so that swap is a single-file change.
 *
 * `meaning`/`spiritualInfluence` carry `ar` as an empty string — no Arabic
 * prose source exists in this codebase yet (data/divine-names.ts only has
 * en/fr) and inventing Arabic text ourselves risks visible errors to native
 * readers. Left blank rather than fabricated, same as this feature's Arabic
 * fields elsewhere.
 */

import { DIVINE_NAMES, type DivineName } from '../data/divine-names';
import { ABJAD_MAGHRIBI } from '../contexts/AbjadContext';
import { PLANETARY_RULERS } from './compatibility';
import type { DivineIntention } from './divineNameIntentions';

// ============================================================================
// TYPES (per mobile spec)
// ============================================================================

export type IntentionCategory =
  | 'clarity'
  | 'patience'
  | 'provision'
  | 'healing'
  | 'protection'
  | 'guidance'
  | 'strength'
  | 'peace'
  | 'knowledge'
  | 'forgiveness';

export type ElementType = 'fire' | 'water' | 'air' | 'earth';

export type ModeOfAction = 'fast' | 'gradual' | 'hidden';

export type AlignmentTier = 'optimal' | 'suitable' | 'neutral' | 'not-recommended';

export type CompatibilityType = 'person-person' | 'person-divine-name' | 'divine-intention';

export interface DivineNameMetadata {
  number: number;
  arabic: string;
  transliteration: string;
  /** Abjad total using the Maghribi table, computed WITHOUT a leading ال prefix. Do not reuse data/divine-names.ts's abjadValue — that one is Mashriqi-based and computed separately for a different feature. */
  abjadValue: number;
  element: ElementType;
  planet: string;
  modeOfAction: ModeOfAction;
  /** Hand-curated (first-pass, see file header): what this Name is traditionally invoked for. */
  classicalFunction: IntentionCategory[];
  meaning: { en: string; ar: string };
  spiritualInfluence: { en: string; ar: string };
}

export interface DivineNameIntentionCompatibility {
  type: 'divine-intention';
  divineName: DivineNameMetadata;
  intention: IntentionCategory;
  alignment: AlignmentTier;
  guidance: { en: string; ar: string };
  guidanceKey: string;
  /** Up to 3, populated only when alignment is 'not-recommended'. */
  alternativeSuggestions?: DivineNameMetadata[];
}

export type NameActionEffect = 'strengthens' | 'stabilizes' | 'tempers' | 'challenges';

export interface PersonDivineNameCompatibility {
  type: 'person-divine-name';
  personAbjad: number;
  personElement: ElementType;
  divineName: DivineNameMetadata;
  /** (personAbjad + divineName.abjadValue + 7) mod 9, 0 -> 9. Reuses this app's existing calculateSoulNumber, already verified against the mobile app's calculateSpiritualDestiny formula. */
  spiritualDestiny: number;
  effect: NameActionEffect;
}

// ============================================================================
// Related-intention-category adjacency (verbatim from spec)
// ============================================================================

export const RELATED_INTENTION_GROUPS: Record<IntentionCategory, IntentionCategory[]> = {
  clarity: ['knowledge', 'guidance'],
  patience: ['peace', 'healing'],
  provision: ['strength'],
  healing: ['peace', 'patience'],
  protection: ['strength', 'peace'],
  guidance: ['clarity', 'knowledge'],
  strength: ['protection', 'provision'],
  peace: ['healing', 'patience'],
  knowledge: ['clarity', 'guidance'],
  forgiveness: ['healing', 'peace'],
};

/**
 * The live UI's intention picker (DivineNameIntentionForm) still offers the
 * existing 10 DivineIntention values (distress/marriage/ease instead of
 * clarity/patience/peace) per explicit instruction not to change the UI.
 * This maps each of those onto the closest IntentionCategory so the new
 * classicalFunction-based algorithm can run underneath the unchanged picker.
 * distress->peace, marriage->peace, ease->patience are judgment calls (no
 * mobile-app source for these 3 categories existed to port) — reasonable
 * semantic nearest-neighbors, not a claim of textual attestation.
 */
export const DIVINE_INTENTION_TO_CATEGORY: Record<DivineIntention, IntentionCategory> = {
  provision: 'provision',
  healing: 'healing',
  distress: 'peace',
  protection: 'protection',
  guidance: 'guidance',
  marriage: 'peace',
  forgiveness: 'forgiveness',
  strength: 'strength',
  ease: 'patience',
  knowledge: 'knowledge',
};

// ============================================================================
// Per-Name classical-function / element / planet / mode-of-action
// (first-pass — see file header)
// ============================================================================

/** Number (1-99) -> the IntentionCategory tags this Name is traditionally invoked for. */
const CLASSICAL_FUNCTION_BY_NUMBER: Record<number, IntentionCategory[]> = {
  1: ['healing', 'peace'],            // Ar-Raḥmān
  2: ['healing', 'forgiveness'],      // Ar-Raḥīm
  3: ['guidance', 'strength'],        // Al-Malik
  4: ['peace', 'forgiveness'],        // Al-Quddūs
  5: ['peace', 'protection'],         // As-Salām
  6: ['protection', 'peace'],         // Al-Mu'min
  7: ['protection', 'guidance'],      // Al-Muhaymin
  8: ['strength', 'protection'],      // Al-'Azīz
  9: ['guidance', 'strength'],        // Al-Jabbār
  10: ['strength', 'guidance'],       // Al-Mutakabbir
  11: ['guidance', 'knowledge'],      // Al-Khāliq
  12: ['guidance', 'strength'],       // Al-Bāri'
  13: ['clarity', 'guidance'],        // Al-Muṣawwir
  14: ['forgiveness', 'peace'],       // Al-Ghaffār
  15: ['strength', 'protection'],     // Al-Qahhār
  16: ['provision', 'strength'],      // Al-Wahhāb
  17: ['provision', 'strength'],      // Ar-Razzāq
  18: ['clarity', 'guidance'],        // Al-Fattāḥ
  19: ['knowledge', 'clarity'],       // Al-'Alīm
  20: ['provision', 'protection'],    // Al-Qābiḍ
  21: ['provision', 'peace'],         // Al-Bāsiṭ
  22: ['patience', 'peace'],          // Al-Khāfiḍ
  23: ['strength', 'guidance'],       // Ar-Rāfi'
  24: ['strength', 'protection'],     // Al-Mu'izz
  25: ['patience', 'peace'],          // Al-Mudhill
  26: ['clarity', 'knowledge'],       // As-Samī'
  27: ['clarity', 'knowledge'],       // Al-Baṣīr
  28: ['guidance', 'strength'],       // Al-Ḥakam
  29: ['forgiveness', 'peace'],       // Al-'Adl
  30: ['healing', 'peace'],           // Al-Laṭīf
  31: ['knowledge', 'clarity'],       // Al-Khabīr
  32: ['patience', 'strength'],       // Al-Ḥalīm
  33: ['knowledge', 'guidance'],      // Al-'Aẓīm
  34: ['forgiveness', 'peace'],       // Al-Ghafūr
  35: ['provision', 'strength'],      // Ash-Shakūr
  36: ['guidance', 'strength'],       // Al-'Aliyy
  37: ['strength', 'protection'],     // Al-Kabīr
  38: ['protection', 'strength'],     // Al-Ḥafīẓ
  39: ['provision', 'strength'],      // Al-Muqīt
  40: ['clarity', 'knowledge'],       // Al-Ḥasīb
  41: ['strength', 'guidance'],       // Al-Jalīl
  42: ['forgiveness', 'peace'],       // Al-Karīm
  43: ['protection', 'clarity'],      // Ar-Raqīb
  44: ['forgiveness', 'peace'],       // Al-Mujīb
  45: ['provision', 'knowledge'],     // Al-Wāsi'
  46: ['guidance', 'knowledge'],      // Al-Ḥakīm
  47: ['peace', 'healing'],           // Al-Wadūd
  48: ['clarity', 'strength'],        // Al-Majīd
  49: ['guidance', 'strength'],       // Al-Bā'ith
  50: ['clarity', 'knowledge'],       // Ash-Shahīd
  51: ['guidance', 'knowledge'],      // Al-Ḥaqq
  52: ['protection', 'strength'],     // Al-Wakīl
  53: ['strength', 'protection'],     // Al-Qawiyy
  54: ['strength', 'protection'],     // Al-Matīn
  55: ['protection', 'peace'],        // Al-Waliyy
  56: ['provision', 'strength'],      // Al-Ḥamīd
  57: ['knowledge', 'clarity'],       // Al-Muḥṣī
  58: ['guidance', 'strength'],       // Al-Mubdi'
  59: ['guidance', 'strength'],       // Al-Mu'īd
  60: ['healing', 'peace'],           // Al-Muḥyī
  61: ['patience', 'peace'],          // Al-Mumīt
  62: ['peace', 'strength'],          // Al-Ḥayy
  63: ['strength', 'protection'],     // Al-Qayyūm
  64: ['provision', 'strength'],      // Al-Wājid
  65: ['strength', 'clarity'],        // Al-Mājid
  66: ['guidance', 'clarity'],        // Al-Wāḥid
  67: ['guidance', 'clarity'],        // Aṣ-Ṣamad
  68: ['strength', 'protection'],     // Al-Qādir
  69: ['strength', 'guidance'],       // Al-Muqtadir
  70: ['guidance', 'clarity'],        // Al-Muqaddim
  71: ['patience', 'peace'],          // Al-Mu'akhkhir
  72: ['guidance', 'clarity'],        // Al-Awwal
  73: ['peace', 'clarity'],           // Al-Ākhir
  74: ['clarity', 'knowledge'],       // Aẓ-Ẓāhir
  75: ['knowledge', 'clarity'],       // Al-Bāṭin
  76: ['guidance', 'strength'],       // Al-Wālī
  77: ['strength', 'guidance'],       // Al-Muta'ālī
  78: ['forgiveness', 'peace'],       // Al-Barr
  79: ['forgiveness', 'peace'],       // At-Tawwāb
  80: ['forgiveness', 'protection'],  // Al-Muntaqim
  81: ['forgiveness', 'peace'],       // Al-'Afuww
  82: ['peace', 'guidance'],          // Ar-Ra'ūf
  83: ['guidance', 'strength'],       // Mālik al-Mulk
  84: ['strength', 'guidance'],       // Dhū al-Jalāli wa al-Ikrām
  85: ['forgiveness', 'peace'],       // Al-Muqsiṭ
  86: ['peace', 'forgiveness'],       // Al-Jāmi'
  87: ['provision', 'strength'],      // Al-Ghaniyy
  88: ['provision', 'strength'],      // Al-Mughnī
  89: ['protection', 'strength'],     // Al-Māni'
  90: ['patience', 'healing'],        // Aḍ-Ḍārr
  91: ['provision', 'healing'],       // An-Nāfi'
  92: ['clarity', 'guidance'],        // An-Nūr
  93: ['guidance', 'clarity'],        // Al-Hādī
  94: ['guidance', 'knowledge'],      // Al-Badī'
  95: ['patience', 'strength'],       // Al-Bāqī
  96: ['guidance', 'knowledge'],      // Al-Wārith
  97: ['guidance', 'strength'],       // Ar-Rashīd
  98: ['patience', 'strength'],       // Aṣ-Ṣabūr
  99: ['peace', 'clarity'],           // (99th canonical Name per this app's list ordering)
};

function stripDefiniteArticle(arabic: string): string {
  const noDiacritics = arabic.replace(/[ًٌٍَُِّْ\s]/g, '');
  return noDiacritics.startsWith('ال') ? noDiacritics.slice(2) : noDiacritics;
}

/** Sums Maghribi abjad values letter-by-letter after stripping tashkīl/whitespace and a leading ال. */
export function calculateAbjadWithoutPrefix(arabic: string): number {
  const stripped = stripDefiniteArticle(arabic);
  return [...stripped].reduce((sum, char) => sum + (ABJAD_MAGHRIBI[char] || 0), 0);
}

function deriveElementAndPlanet(abjadValue: number): { element: ElementType; planet: string } {
  const key = (abjadValue % 7) as keyof typeof PLANETARY_RULERS;
  const rulership = PLANETARY_RULERS[key];
  return { element: rulership.element, planet: rulership.name };
}

function deriveModeOfAction(classicalFunction: IntentionCategory[]): ModeOfAction {
  const fastCategories: IntentionCategory[] = ['protection', 'strength', 'guidance', 'clarity'];
  const hiddenCategories: IntentionCategory[] = ['knowledge', 'forgiveness'];
  if (classicalFunction.some(c => fastCategories.includes(c))) return 'fast';
  if (classicalFunction.some(c => hiddenCategories.includes(c))) return 'hidden';
  return 'gradual';
}

function buildDivineNameMetadata(name: DivineName): DivineNameMetadata {
  const abjadValue = calculateAbjadWithoutPrefix(name.arabic);
  const { element, planet } = deriveElementAndPlanet(abjadValue);
  const classicalFunction = CLASSICAL_FUNCTION_BY_NUMBER[name.number] || ['peace'];
  return {
    number: name.number,
    arabic: name.arabic,
    transliteration: name.transliteration,
    abjadValue,
    element,
    planet,
    modeOfAction: deriveModeOfAction(classicalFunction),
    classicalFunction,
    meaning: { en: name.meaning.en, ar: '' },
    spiritualInfluence: { en: name.spiritualPractice.en, ar: '' },
  };
}

/** The full 99-name dataset for this feature — built once at module load. */
export const DIVINE_NAME_METADATA: DivineNameMetadata[] = DIVINE_NAMES.map(buildDivineNameMetadata);

const DIVINE_NAME_METADATA_BY_NUMBER: Map<number, DivineNameMetadata> = new Map(
  DIVINE_NAME_METADATA.map(dn => [dn.number, dn])
);

export function findDivineNameMetadataByNumber(number: number): DivineNameMetadata | undefined {
  return DIVINE_NAME_METADATA_BY_NUMBER.get(number);
}
