/**
 * Essential & Accidental Dignities (Al-Karāmāt / الكرامات)
 * =========================================================
 * Complete dignity calculation based on traditional Ptolemaic & Arabic sources.
 * Implements the 7 classical essential dignities/debilities:
 *
 *   شرف  Sharaf     — Exaltation      +5
 *   بيت  Bayt       — Domicile        +5
 *   مثلثة Muthallatha — Triplicity     +3
 *   حد   Ḥadd       — Terms/Bounds    +2
 *   وجه  Wajh       — Face/Decan      +1
 *   غريب Gharīb     — Peregrine        0
 *   هبوط Hubūṭ      — Fall            -4
 *   ضارّ  Ḍārr       — Detriment       -5
 *
 * Sources: Ptolemy (Tetrabiblos), al-Bīrūnī, Ibn Ezra, Abū Maʿshar, al-Qabīṣī
 */

import { Planet, ZodiacSign, Element } from './types';
import { PLANET_RULERSHIPS, ZODIAC_DATA } from './constants';
import { isInOwnTerms } from './terms-bounds';
import { isInOwnDecan } from './decans';

// ============================================================================
// TYPES
// ============================================================================

/** Primary dignity identifier (Arabic name) */
export type DignityType =
  | 'sharaf'      // Exaltation
  | 'bayt'        // Domicile
  | 'muthallatha' // Triplicity
  | 'hadd'        // Terms
  | 'wajh'        // Face/Decan
  | 'gharib'      // Peregrine
  | 'hubut'       // Fall
  | 'darr';       // Detriment

/** Overall condition tier based on combined score */
export type ConditionTier =
  | 'musharraf'   // Exalted      (+8 to +10)
  | 'qawi'        // Strong       (+5 to +7)
  | 'said'        // Favourable   (+2 to +4)
  | 'mutadil'     // Moderate     (-1 to +1)
  | 'nahs'        // Challenging  (-2 to -4)
  | 'daif'        // Weak         (-5 to -7)
  | 'mubtala';    // Afflicted    (-8 to -10)

/** A single dignity finding */
export interface DignityEntry {
  type: DignityType;
  score: number;
  labelAr: string;
  transliteration: string;
  labelEn: string;
  labelFr: string;
}

/** Full result from calculateDignities() */
export interface DignityResult {
  /** The primary (highest-magnitude) dignity */
  primary: DignityEntry;
  /** All dignities that apply (may have multiple) */
  all: DignityEntry[];
  /** Net score from all dignities */
  totalScore: number;
  /** Overall condition tier */
  condition: ConditionTier;
  /** Condition tier metadata */
  conditionLabel: {
    ar: string;
    transliteration: string;
    en: string;
    fr: string;
    color: string;
  };
  /** Is planet retrograde (weakens dignity) */
  isRetrograde: boolean;
}

// ============================================================================
// DIGNITY METADATA
// ============================================================================

const DIGNITY_INFO: Record<DignityType, Omit<DignityEntry, 'score'>> = {
  sharaf:      { type: 'sharaf',      labelAr: 'شَرَف',    transliteration: 'Sharaf',      labelEn: 'Exalted',    labelFr: 'Exalté' },
  bayt:        { type: 'bayt',        labelAr: 'بَيْت',    transliteration: 'Bayt',        labelEn: 'Domicile',   labelFr: 'Domicile' },
  muthallatha: { type: 'muthallatha', labelAr: 'مُثَلَّثَة', transliteration: 'Muthallatha', labelEn: 'Triplicity', labelFr: 'Triplicité' },
  hadd:        { type: 'hadd',        labelAr: 'حَدّ',     transliteration: 'Ḥadd',        labelEn: 'Terms',      labelFr: 'Termes' },
  wajh:        { type: 'wajh',        labelAr: 'وَجْه',    transliteration: 'Wajh',        labelEn: 'Face',       labelFr: 'Face' },
  gharib:      { type: 'gharib',      labelAr: 'غَرِيب',   transliteration: 'Gharīb',      labelEn: 'Peregrine',  labelFr: 'Pèlerin' },
  hubut:       { type: 'hubut',       labelAr: 'هُبُوط',   transliteration: 'Hubūṭ',       labelEn: 'Fall',       labelFr: 'Chute' },
  darr:        { type: 'darr',        labelAr: 'ضَارّ',    transliteration: 'Ḍārr',        labelEn: 'Detriment',  labelFr: 'Détriment' },
};

// ============================================================================
// CONDITION TIER METADATA
// ============================================================================

const CONDITION_INFO: Record<ConditionTier, { ar: string; transliteration: string; en: string; fr: string; color: string }> = {
  musharraf: { ar: 'مُشَرَّف', transliteration: 'Musharraf', en: 'Exalted',     fr: 'Exalté',       color: '#D4AF37' },
  qawi:      { ar: 'قَوِي',   transliteration: 'Qawī',     en: 'Strong',      fr: 'Fort',         color: '#22C55E' },
  said:      { ar: 'سَعِيد',  transliteration: 'Saʿīd',    en: 'Favourable',  fr: 'Favorable',    color: '#14B8A6' },
  mutadil:   { ar: 'مُعْتَدِل', transliteration: 'Muʿtadil',  en: 'Moderate',    fr: 'Modéré',       color: '#3B82F6' },
  nahs:      { ar: 'نَحْس',   transliteration: 'Naḥs',     en: 'Challenging', fr: 'Difficile',    color: '#F59E0B' },
  daif:      { ar: 'ضَعِيف',  transliteration: 'Ḍaʿīf',    en: 'Weak',        fr: 'Faible',       color: '#EF4444' },
  mubtala:   { ar: 'مُبْتَلى',  transliteration: 'Mubtalā',  en: 'Afflicted',   fr: 'Affligé',      color: '#991B1B' },
};

// ============================================================================
// EXALTATION TABLE (Sharaf)
// ============================================================================

/** Exaltation sign and classical exaltation degree for each planet */
const EXALTATIONS: Record<Planet, { sign: ZodiacSign; degree: number }> = {
  Sun:     { sign: 'aries',     degree: 19 },
  Moon:    { sign: 'taurus',    degree: 3 },
  Mercury: { sign: 'virgo',     degree: 15 },
  Venus:   { sign: 'pisces',    degree: 27 },
  Mars:    { sign: 'capricorn', degree: 28 },
  Jupiter: { sign: 'cancer',    degree: 15 },
  Saturn:  { sign: 'libra',     degree: 21 },
};

// ============================================================================
// FALL TABLE (Hubūṭ) — opposite signs of exaltation
// ============================================================================

const FALLS: Record<Planet, ZodiacSign> = {
  Sun:     'libra',
  Moon:    'scorpio',
  Mercury: 'pisces',
  Venus:   'virgo',
  Mars:    'cancer',
  Jupiter: 'capricorn',
  Saturn:  'aries',
};

// ============================================================================
// DETRIMENT TABLE (Ḍārr) — signs opposite to domicile
// ============================================================================

const DETRIMENTS: Record<Planet, ZodiacSign[]> = {
  Sun:     ['aquarius'],
  Moon:    ['capricorn'],
  Mars:    ['libra', 'taurus'],
  Mercury: ['sagittarius', 'pisces'],
  Jupiter: ['gemini', 'virgo'],
  Venus:   ['aries', 'scorpio'],
  Saturn:  ['cancer', 'leo'],
};

// ============================================================================
// TRIPLICITY RULERS (Muthallatha) — Day & Night rulers by element
// ============================================================================

interface TriplicityRule {
  element: Element;
  dayRuler: Planet;
  nightRuler: Planet;
  participatingRuler: Planet; // Classical third ruler
}

/**
 * Dorothean triplicity rulers — the system preferred in Islamic astrology
 */
const TRIPLICITY_RULERS: TriplicityRule[] = [
  { element: 'fire',  dayRuler: 'Sun',     nightRuler: 'Jupiter', participatingRuler: 'Saturn' },
  { element: 'earth', dayRuler: 'Venus',   nightRuler: 'Moon',    participatingRuler: 'Mars' },
  { element: 'air',   dayRuler: 'Saturn',  nightRuler: 'Mercury', participatingRuler: 'Jupiter' },
  { element: 'water', dayRuler: 'Venus',   nightRuler: 'Mars',    participatingRuler: 'Moon' },
];

// ============================================================================
// CALCULATION
// ============================================================================

/**
 * Check if a planet is in its domicile (own ruling sign)
 */
function isInDomicile(planet: Planet, sign: ZodiacSign): boolean {
  return PLANET_RULERSHIPS[planet]?.includes(sign) ?? false;
}

/**
 * Check if a planet is exalted in the given sign
 */
function isExalted(planet: Planet, sign: ZodiacSign): boolean {
  return EXALTATIONS[planet]?.sign === sign;
}

/**
 * Check if a planet is in fall
 */
function isInFall(planet: Planet, sign: ZodiacSign): boolean {
  return FALLS[planet] === sign;
}

/**
 * Check if a planet is in detriment
 */
function isInDetriment(planet: Planet, sign: ZodiacSign): boolean {
  return DETRIMENTS[planet]?.includes(sign) ?? false;
}

/**
 * Check if a planet is a triplicity ruler for the sign's element
 */
function isTriplicityRuler(planet: Planet, sign: ZodiacSign, isDay: boolean): boolean {
  const signElement = ZODIAC_DATA[sign]?.element;
  if (!signElement) return false;

  const rule = TRIPLICITY_RULERS.find(r => r.element === signElement);
  if (!rule) return false;

  if (isDay && rule.dayRuler === planet) return true;
  if (!isDay && rule.nightRuler === planet) return true;
  // Participating ruler always counts (weaker, but still a dignity)
  if (rule.participatingRuler === planet) return true;

  return false;
}

/**
 * Build a DignityEntry from type and score
 */
function makeDignity(type: DignityType, score: number): DignityEntry {
  return { ...DIGNITY_INFO[type], score };
}

/**
 * Map total score → condition tier
 */
function getConditionTier(score: number): ConditionTier {
  if (score >= 8) return 'musharraf';
  if (score >= 5) return 'qawi';
  if (score >= 2) return 'said';
  if (score >= -1) return 'mutadil';
  if (score >= -4) return 'nahs';
  if (score >= -7) return 'daif';
  return 'mubtala';
}

/**
 * Calculate all essential dignities for a planet at a given position.
 *
 * @param planet     - Planet name (e.g. 'Venus')
 * @param sign       - Zodiac sign key (e.g. 'pisces')
 * @param degree     - Degree within sign (0-29)
 * @param isDay      - Whether it is currently daytime (affects triplicity)
 * @param isRetrograde - Whether the planet is retrograde (-2 penalty)
 * @returns Full dignity result with scores, labels, and condition tier
 */
export function calculateDignities(
  planet: Planet,
  sign: ZodiacSign,
  degree: number,
  isDay: boolean = true,
  isRetrograde: boolean = false,
): DignityResult {
  const dignities: DignityEntry[] = [];

  // ── Essential Dignities (positive) ──────────────────────
  if (isExalted(planet, sign)) {
    dignities.push(makeDignity('sharaf', 5));
  }
  if (isInDomicile(planet, sign)) {
    dignities.push(makeDignity('bayt', 5));
  }
  if (isTriplicityRuler(planet, sign, isDay)) {
    dignities.push(makeDignity('muthallatha', 3));
  }
  if (isInOwnTerms(planet, sign, degree)) {
    dignities.push(makeDignity('hadd', 2));
  }
  if (isInOwnDecan(planet, sign, degree)) {
    dignities.push(makeDignity('wajh', 1));
  }

  // ── Debilities (negative) ──────────────────────────────
  if (isInFall(planet, sign)) {
    dignities.push(makeDignity('hubut', -4));
  }
  if (isInDetriment(planet, sign)) {
    dignities.push(makeDignity('darr', -5));
  }

  // ── Peregrine check ────────────────────────────────────
  // A planet with no essential dignity at all is peregrine
  if (dignities.length === 0) {
    dignities.push(makeDignity('gharib', 0));
  }

  // ── Net score ──────────────────────────────────────────
  let totalScore = dignities.reduce((sum, d) => sum + d.score, 0);

  // Retrograde penalty (traditional: weakens the planet)
  if (isRetrograde) {
    totalScore -= 2;
  }

  // Clamp to -10 … +10
  totalScore = Math.max(-10, Math.min(10, totalScore));

  // ── Primary dignity (highest absolute score) ───────────
  const sorted = [...dignities].sort((a, b) => Math.abs(b.score) - Math.abs(a.score));
  const primary = sorted[0];

  // ── Condition tier ─────────────────────────────────────
  const condition = getConditionTier(totalScore);

  return {
    primary,
    all: dignities,
    totalScore,
    condition,
    conditionLabel: CONDITION_INFO[condition],
    isRetrograde,
  };
}

/**
 * Get the exaltation info for a planet (for tooltip display)
 */
export function getExaltationInfo(planet: Planet): { sign: ZodiacSign; degree: number } | null {
  return EXALTATIONS[planet] ?? null;
}

/**
 * Quick helper: is this planet dignified (score > 0)?
 */
export function isDignified(planet: Planet, sign: ZodiacSign, degree: number, isDay: boolean): boolean {
  const result = calculateDignities(planet, sign, degree, isDay);
  return result.totalScore > 0;
}

/**
 * Quick helper: is this planet debilitated (score < 0)?
 */
export function isDebilitated(planet: Planet, sign: ZodiacSign, degree: number, isDay: boolean): boolean {
  const result = calculateDignities(planet, sign, degree, isDay);
  return result.totalScore < 0;
}

// ============================================================================
// SIMPLIFIED 3-TIER STATUS (User-Facing)
// ============================================================================

/**
 * Simplified status tier for user-facing display
 * Maps the 8 dignities and 7 condition tiers to just 3 simple levels
 */
export type SimplifiedTier = 'said' | 'mutadil' | 'mahdhur';

/** Simplified status result for user-facing display */
export interface SimplifiedStatus {
  tier: SimplifiedTier;
  labelAr: string;
  labelEn: string;
  reason: string;
  guidance: string;
  color: string;
  icon: string;
}

/** Mapping from dignity types to simplified tiers */
const DIGNITY_TO_TIER: Record<DignityType, SimplifiedTier> = {
  sharaf:      'said',     // Exalted → Auspicious
  bayt:        'said',     // Domicile → Auspicious
  muthallatha: 'said',     // Triplicity → Auspicious (strong)
  hadd:        'mutadil',  // Terms → Moderate
  wajh:        'mutadil',  // Face → Moderate
  gharib:      'mutadil',  // Peregrine → Moderate
  hubut:       'mahdhur',  // Fall → Cautious
  darr:        'mahdhur',  // Detriment → Cautious
};

/** Simplified tier metadata */
const SIMPLIFIED_TIER_INFO: Record<SimplifiedTier, { labelAr: string; labelEn: string; color: string; icon: string; guidance: string }> = {
  said: {
    labelAr: 'سَعِيد',
    labelEn: 'Auspicious',
    color: '#22C55E',
    icon: '●',
    guidance: 'Excellent for prayers, zikr, and new intentions',
  },
  mutadil: {
    labelAr: 'مُعْتَدِل',
    labelEn: 'Moderate',
    color: '#3B82F6',
    icon: '●',
    guidance: 'Suitable for regular practice and reflection',
  },
  mahdhur: {
    labelAr: 'مَحْذُور',
    labelEn: 'Cautious',
    color: '#F59E0B',
    icon: '⚠',
    guidance: 'Focus on istighfar and protective adhkār',
  },
};

/** Maps dignity type to user-friendly English description */
function getDignityDescription(dignityType: DignityType): string {
  switch (dignityType) {
    case 'sharaf':      return 'exalted';
    case 'bayt':        return 'at home';
    case 'muthallatha': return 'strong';
    case 'hadd':        return 'comfortable';
    case 'wajh':        return 'comfortable';
    case 'gharib':      return 'neutral';
    case 'hubut':       return 'weakened';
    case 'darr':        return 'weakened';
  }
}

/**
 * Get simplified 3-tier status from full dignity result
 * This converts the complex dignity calculation to a user-friendly status
 */
export function getSimplifiedStatus(
  result: DignityResult,
  planet: string,
  sign: string,
): SimplifiedStatus {
  const primaryDignity = result.primary.type;
  const tier = DIGNITY_TO_TIER[primaryDignity];
  const tierInfo = SIMPLIFIED_TIER_INFO[tier];
  
  // Build user-friendly reason
  const description = getDignityDescription(primaryDignity);
  const reason = `${planet} is ${description} in ${sign}`;
  
  return {
    tier,
    labelAr: tierInfo.labelAr,
    labelEn: tierInfo.labelEn,
    reason,
    guidance: tierInfo.guidance,
    color: tierInfo.color,
    icon: tierInfo.icon,
  };
}

/**
 * Quick helper to get simplified status directly from planet position
 */
export function calculateSimplifiedStatus(
  planet: Planet,
  sign: ZodiacSign,
  degree: number,
  isDay: boolean = true,
  isRetrograde: boolean = false,
): SimplifiedStatus {
  const result = calculateDignities(planet, sign, degree, isDay, isRetrograde);
  
  // Capitalize planet and sign for display
  const planetDisplay = planet;
  const signDisplay = sign.charAt(0).toUpperCase() + sign.slice(1);
  
  return getSimplifiedStatus(result, planetDisplay, signDisplay);
}

// Re-export types and metadata for consumers
export { 
  CONDITION_INFO, 
  DIGNITY_INFO, 
  EXALTATIONS, 
  FALLS, 
  DETRIMENTS,
  SIMPLIFIED_TIER_INFO,
  DIGNITY_TO_TIER,
};
