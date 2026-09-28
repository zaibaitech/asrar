/**
 * Planetary Incense (Bakhūr)
 * ==========================
 * Traditional planet-to-incense correspondences from the classical
 * Arabic/Hermetic astro-talismanic tradition (the suffumigation lists
 * found in works such as Ghāyat al-Ḥakīm and their later European
 * transmission). Only plant, resin, and mineral ingredients are used
 * here — no animal-derived items, in keeping with the rest of the app.
 *
 * Each planet gets one recommended blend, shown the same way as its
 * recommended dhikr: a quick, always-visible suggestion rather than a
 * full technical breakdown.
 */

import type { Planet } from './types';

export interface IncenseBlend {
  /** Ingredient names in Arabic */
  arabicName: string;
  /** Ingredient names, transliterated */
  transliteration: string;
  /** Ingredients in plain English */
  ingredients: string;
  /** Why this blend suits the planet */
  purpose: string;
}

export const PLANET_INCENSE: Record<Planet, IncenseBlend> = {
  Sun: {
    arabicName: 'لُبَان وَمِسْك',
    transliteration: 'Lubān wa Misk',
    ingredients: 'Frankincense + Musk',
    purpose: 'For radiance, success, and vitality',
  },
  Moon: {
    arabicName: 'كَافُور وَصَنْدَل أَبْيَض',
    transliteration: 'Kāfūr wa Ṣandal Abyaḍ',
    ingredients: 'Camphor + White Sandalwood',
    purpose: 'For calm, receptivity, and inner quiet',
  },
  Mars: {
    arabicName: 'صَنْدَل أَصْفَر وَلُبَان',
    transliteration: 'Ṣandal Aṣfar wa Lubān',
    ingredients: 'Yellow Sandalwood + Frankincense',
    purpose: 'For courage and steady resolve',
  },
  Mercury: {
    arabicName: 'مَصْطَكَى وَلُبَان',
    transliteration: 'Maṣṭakā wa Lubān',
    ingredients: 'Mastic + Frankincense',
    purpose: 'For clarity of mind and ease in speech',
  },
  Jupiter: {
    arabicName: 'صَنْدَل أَصْفَر وَعُود',
    transliteration: 'Ṣandal Aṣfar wa ʿŪd',
    ingredients: 'Yellow Sandalwood + Agarwood (ʿŪd)',
    purpose: 'For abundance, expansion, and barakah',
  },
  Venus: {
    arabicName: 'مِسْك وَوَرْد',
    transliteration: 'Misk wa Ward',
    ingredients: 'Musk + Rose',
    purpose: 'For harmony and softened hearts',
  },
  Saturn: {
    arabicName: 'لُبَان وَمَيْعَة سَائِلَة',
    transliteration: 'Lubān wa Mayʿah Sāʾilah',
    ingredients: 'Frankincense + Liquid Storax',
    purpose: 'For grounding, patience, and steadiness',
  },
};

/** Get the recommended incense blend for a planet. */
export function getPlanetIncense(planet: Planet): IncenseBlend {
  return PLANET_INCENSE[planet];
}
