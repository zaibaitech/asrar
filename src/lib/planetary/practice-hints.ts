/**
 * Spiritual Practice Hints
 * ========================
 * Simple practice recommendations based on planetary dignity.
 * Full personalized guidance available in the Asrār mobile app.
 *
 * Based on:
 * - Classical ʿIlm al-Nujūm (Science of Celestial Influences)
 * - West African Maghribi tradition
 * - Traditional Sufi practices (Tijani, Shadhili, Qadiri lineages)
 */

import type { Planet } from './types';
import type { SimplifiedTier } from './dignities';

// ============================================================================
// TYPES
// ============================================================================

export interface PracticeHint {
  /** Divine Name in Arabic */
  arabicName: string;
  /** Transliteration */
  transliteration: string;
  /** English meaning */
  meaning: string;
  /** Recommended count (optional) */
  count?: number;
  /** Brief instruction */
  instruction: string;
}

export interface TierGuidance {
  /** Main practice recommendation */
  primary: PracticeHint;
  /** Brief guidance text */
  guidance: string;
  /** Arabic guidance */
  guidanceAr: string;
}

// ============================================================================
// PLANET-SPECIFIC DHIKR (for favorable conditions)
// ============================================================================

/**
 * Each planet has a corresponding Divine Name from classical sources.
 * Used when the planet is in a favorable dignity (Saʿīd tier).
 */
const PLANET_DHIKR: Record<Planet, PracticeHint> = {
  Sun: {
    arabicName: 'يَا نُور',
    transliteration: 'Yā Nūr',
    meaning: 'O Light',
    count: 256,
    instruction: 'For clarity and spiritual illumination',
  },
  Moon: {
    arabicName: 'يَا رَحْمَٰن',
    transliteration: 'Yā Raḥmān',
    meaning: 'O Most Merciful',
    count: 298,
    instruction: 'For ease in transitions and emotional balance',
  },
  Mars: {
    arabicName: 'يَا قَوِيّ',
    transliteration: 'Yā Qawiyy',
    meaning: 'O Most Strong',
    count: 41,
    instruction: 'For inner strength and resilience',
  },
  Mercury: {
    arabicName: 'يَا عَلِيم',
    transliteration: 'Yā ʿAlīm',
    meaning: 'O All-Knowing',
    count: 150,
    instruction: 'For clarity and beneficial knowledge',
  },
  Jupiter: {
    arabicName: 'يَا رَزَّاق',
    transliteration: 'Yā Razzāq',
    meaning: 'O Provider',
    count: 308,
    instruction: 'For provision and barakah',
  },
  Venus: {
    arabicName: 'يَا وَدُود',
    transliteration: 'Yā Wadūd',
    meaning: 'O Most Loving',
    count: 20,
    instruction: 'For harmony and softening hearts',
  },
  Saturn: {
    arabicName: 'يَا صَبُور',
    transliteration: 'Yā Ṣabūr',
    meaning: 'O Most Patient',
    count: 298,
    instruction: 'For patience and steadfastness',
  },
};

// ============================================================================
// PROTECTIVE PRACTICES (for challenging conditions)
// ============================================================================

/**
 * When a planet is in Hubūṭ (Fall) or Ḍārr (Detriment), use protective practices.
 * These soften difficulties and provide spiritual fortification.
 */
const PROTECTIVE_DHIKR: PracticeHint[] = [
  {
    arabicName: 'يَا لَطِيف',
    transliteration: 'Yā Laṭīf',
    meaning: 'O Most Subtle, Most Kind',
    count: 129,
    instruction: 'Softens difficulties and eases hardship',
  },
  {
    arabicName: 'أَسْتَغْفِرُ اللهَ',
    transliteration: 'Astaghfirullāh',
    meaning: 'I seek forgiveness from Allah',
    count: 70,
    instruction: 'Universal spiritual cleansing',
  },
];

/**
 * Universal practices recommended regardless of planetary state.
 */
const UNIVERSAL_DHIKR: PracticeHint = {
  arabicName: 'صَلَاة عَلَى النَّبِي',
  transliteration: 'Ṣalawāt',
  meaning: 'Blessings upon the Prophet ﷺ',
  count: 100,
  instruction: 'Always beneficial, opens spiritual doors',
};

// ============================================================================
// TIER GUIDANCE
// ============================================================================

/**
 * Get practice guidance based on dignity tier and planet.
 *
 * @param tier - Simplified dignity tier (said/mutadil/mahdhur)
 * @param planet - The planet being considered
 * @returns Practice hint with guidance
 */
export function getPracticeHint(
  tier: SimplifiedTier,
  planet: Planet
): TierGuidance {
  switch (tier) {
    case 'said':
      // Auspicious - use planet-specific dhikr
      return {
        primary: PLANET_DHIKR[planet],
        guidance: `Excellent time for ${PLANET_DHIKR[planet].instruction.toLowerCase()}`,
        guidanceAr: 'وقت مبارك للذكر والعبادة',
      };

    case 'mutadil':
      // Moderate - use universal practice
      return {
        primary: UNIVERSAL_DHIKR,
        guidance: 'Steady practice brings consistent benefit',
        guidanceAr: 'المداومة على الذكر تجلب البركة',
      };

    case 'mahdhur':
      // Cautious - use protective dhikr
      return {
        primary: PROTECTIVE_DHIKR[0], // Yā Laṭīf
        guidance: 'Focus on protection and istighfār',
        guidanceAr: 'التوجه للحماية والاستغفار',
      };
  }
}

/**
 * Get a simple one-liner practice hint for display.
 *
 * @param tier - Simplified dignity tier
 * @param planet - The planet
 * @returns Object with hint text and Arabic
 */
export function getSimplePracticeHint(
  tier: SimplifiedTier,
  planet: Planet
): { hint: string; hintAr: string; name: string; nameAr: string } {
  const guidance = getPracticeHint(tier, planet);

  return {
    hint: guidance.primary.instruction,
    hintAr: guidance.guidanceAr,
    name: guidance.primary.transliteration,
    nameAr: guidance.primary.arabicName,
  };
}

// Export for use in components
export {
  PLANET_DHIKR,
  PROTECTIVE_DHIKR,
  UNIVERSAL_DHIKR,
};
