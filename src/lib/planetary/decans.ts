/**
 * Faces / Decans (Wujūh / وجوه)
 * ==============================
 * Each zodiac sign is divided into three 10° decans.
 * Decan rulers follow the Chaldean order starting from Mars in Aries.
 * Based on Ptolemaic/Chaldean system used by classical Arabic astrologers
 * (Abū Maʿshar, al-Qabīṣī, Ibn Ezra).
 *
 * Score: Planet in its own face/decan = +1 dignity point
 */

import { ZodiacSign, Planet } from './types';

/**
 * Decan rulers for each zodiac sign.
 * Index 0 = 0°–10°, Index 1 = 10°–20°, Index 2 = 20°–30°
 * Follows Chaldean order: Saturn, Jupiter, Mars, Sun, Venus, Mercury, Moon (repeating)
 */
export const DECAN_RULERS: Record<ZodiacSign, [Planet, Planet, Planet]> = {
  aries:       ['Mars',    'Sun',     'Venus'],
  taurus:      ['Mercury', 'Moon',    'Saturn'],
  gemini:      ['Jupiter', 'Mars',    'Sun'],
  cancer:      ['Venus',   'Mercury', 'Moon'],
  leo:         ['Saturn',  'Jupiter', 'Mars'],
  virgo:       ['Sun',     'Venus',   'Mercury'],
  libra:       ['Moon',    'Saturn',  'Jupiter'],
  scorpio:     ['Mars',    'Sun',     'Venus'],
  sagittarius: ['Mercury', 'Moon',    'Saturn'],
  capricorn:   ['Jupiter', 'Mars',    'Sun'],
  aquarius:    ['Venus',   'Mercury', 'Moon'],
  pisces:      ['Saturn',  'Jupiter', 'Mars'],
};

/**
 * Get the decan index (0, 1, 2) for a given degree within a sign
 */
export function getDecanIndex(degree: number): 0 | 1 | 2 {
  if (degree < 10) return 0;
  if (degree < 20) return 1;
  return 2;
}

/**
 * Check if a planet is in its own face/decan at a given sign & degree
 */
export function isInOwnDecan(planet: Planet, sign: ZodiacSign, degree: number): boolean {
  const decans = DECAN_RULERS[sign];
  if (!decans) return false;
  
  const decanIdx = getDecanIndex(degree);
  return decans[decanIdx] === planet;
}

/**
 * Get the decan ruler for a given sign and degree
 */
export function getDecanRuler(sign: ZodiacSign, degree: number): Planet | null {
  const decans = DECAN_RULERS[sign];
  if (!decans) return null;
  
  const decanIdx = getDecanIndex(degree);
  return decans[decanIdx];
}
