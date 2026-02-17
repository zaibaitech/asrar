/**
 * Egyptian/Ptolemaic Terms (Ḥudūd / حدود)
 * =========================================
 * Traditional planetary bounds for each zodiac sign.
 * Each sign is divided into 5 unequal segments, each ruled by a planet.
 * Based on Ptolemy's Tetrabiblos, consistent with classical Arabic sources
 * (al-Bīrūnī, Ibn Ezra, Abū Maʿshar).
 *
 * Score: Planet in its own terms = +2 dignity points
 */

import { ZodiacSign, Planet } from './types';

export interface TermBound {
  planet: Planet;
  start: number; // inclusive
  end: number;   // exclusive
}

/**
 * Egyptian Terms table — the standard in Islamic-era astrology.
 * Format: each sign maps to 5 bounds [start°, end°) ruled by a planet.
 */
export const EGYPTIAN_TERMS: Record<ZodiacSign, TermBound[]> = {
  aries: [
    { planet: 'Jupiter', start: 0, end: 6 },
    { planet: 'Venus',   start: 6, end: 12 },
    { planet: 'Mercury', start: 12, end: 20 },
    { planet: 'Mars',    start: 20, end: 25 },
    { planet: 'Saturn',  start: 25, end: 30 },
  ],
  taurus: [
    { planet: 'Venus',   start: 0, end: 8 },
    { planet: 'Mercury', start: 8, end: 14 },
    { planet: 'Jupiter', start: 14, end: 22 },
    { planet: 'Saturn',  start: 22, end: 27 },
    { planet: 'Mars',    start: 27, end: 30 },
  ],
  gemini: [
    { planet: 'Mercury', start: 0, end: 6 },
    { planet: 'Jupiter', start: 6, end: 12 },
    { planet: 'Venus',   start: 12, end: 17 },
    { planet: 'Mars',    start: 17, end: 24 },
    { planet: 'Saturn',  start: 24, end: 30 },
  ],
  cancer: [
    { planet: 'Mars',    start: 0, end: 7 },
    { planet: 'Venus',   start: 7, end: 13 },
    { planet: 'Mercury', start: 13, end: 19 },
    { planet: 'Jupiter', start: 19, end: 26 },
    { planet: 'Saturn',  start: 26, end: 30 },
  ],
  leo: [
    { planet: 'Jupiter', start: 0, end: 6 },
    { planet: 'Venus',   start: 6, end: 11 },
    { planet: 'Saturn',  start: 11, end: 18 },
    { planet: 'Mercury', start: 18, end: 24 },
    { planet: 'Mars',    start: 24, end: 30 },
  ],
  virgo: [
    { planet: 'Mercury', start: 0, end: 7 },
    { planet: 'Venus',   start: 7, end: 17 },
    { planet: 'Jupiter', start: 17, end: 21 },
    { planet: 'Mars',    start: 21, end: 28 },
    { planet: 'Saturn',  start: 28, end: 30 },
  ],
  libra: [
    { planet: 'Saturn',  start: 0, end: 6 },
    { planet: 'Mercury', start: 6, end: 14 },
    { planet: 'Jupiter', start: 14, end: 21 },
    { planet: 'Venus',   start: 21, end: 28 },
    { planet: 'Mars',    start: 28, end: 30 },
  ],
  scorpio: [
    { planet: 'Mars',    start: 0, end: 7 },
    { planet: 'Venus',   start: 7, end: 11 },
    { planet: 'Mercury', start: 11, end: 19 },
    { planet: 'Jupiter', start: 19, end: 24 },
    { planet: 'Saturn',  start: 24, end: 30 },
  ],
  sagittarius: [
    { planet: 'Jupiter', start: 0, end: 12 },
    { planet: 'Venus',   start: 12, end: 17 },
    { planet: 'Mercury', start: 17, end: 21 },
    { planet: 'Saturn',  start: 21, end: 26 },
    { planet: 'Mars',    start: 26, end: 30 },
  ],
  capricorn: [
    { planet: 'Mercury', start: 0, end: 7 },
    { planet: 'Jupiter', start: 7, end: 14 },
    { planet: 'Venus',   start: 14, end: 22 },
    { planet: 'Saturn',  start: 22, end: 26 },
    { planet: 'Mars',    start: 26, end: 30 },
  ],
  aquarius: [
    { planet: 'Mercury', start: 0, end: 7 },
    { planet: 'Venus',   start: 7, end: 13 },
    { planet: 'Jupiter', start: 13, end: 20 },
    { planet: 'Mars',    start: 20, end: 25 },
    { planet: 'Saturn',  start: 25, end: 30 },
  ],
  pisces: [
    { planet: 'Venus',   start: 0, end: 12 },
    { planet: 'Jupiter', start: 12, end: 16 },
    { planet: 'Mercury', start: 16, end: 19 },
    { planet: 'Mars',    start: 19, end: 28 },
    { planet: 'Saturn',  start: 28, end: 30 },
  ],
};

/**
 * Check if a planet is in its own terms (ḥadd) at a given sign & degree
 */
export function isInOwnTerms(planet: Planet, sign: ZodiacSign, degree: number): boolean {
  const bounds = EGYPTIAN_TERMS[sign];
  if (!bounds) return false;

  const bound = bounds.find(b => degree >= b.start && degree < b.end);
  return bound?.planet === planet;
}

/**
 * Get the term ruler for a given sign and degree
 */
export function getTermRuler(sign: ZodiacSign, degree: number): Planet | null {
  const bounds = EGYPTIAN_TERMS[sign];
  if (!bounds) return null;

  const bound = bounds.find(b => degree >= b.start && degree < b.end);
  return bound?.planet ?? null;
}
