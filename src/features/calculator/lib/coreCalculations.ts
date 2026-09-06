/**
 * Core Abjad calculations — name -> letter values -> Kabīr/Ṣaghīr/zodiac.
 * Ported verbatim (formulas unchanged) to match the Deftere calculator.
 */

import { ABJAD_MAGHRIBI } from './abjadMaps';

export function normalizeArabic(text: string): string {
  if (!text) return '';
  const normalized = text.replace(/[ًٌٍَُِّْـ]/g, '');
  return normalized.replace(/\s+/g, ' ').trim();
}

export function calculateHadadKabir(
  text: string,
  abjad: Record<string, number> = ABJAD_MAGHRIBI
): number {
  if (!text) return 0;
  const normalized = normalizeArabic(text);
  let total = 0;
  for (const char of normalized) {
    const value = abjad[char];
    if (value) total += value;
  }
  return total;
}

export interface LetterValue {
  char: string;
  value: number;
}

/** Per-letter abjad values for a name, in order — used for calculation-transparency displays. */
export function getLetterBreakdown(
  text: string,
  abjad: Record<string, number> = ABJAD_MAGHRIBI
): LetterValue[] {
  const normalized = normalizeArabic(text);
  const breakdown: LetterValue[] = [];
  for (const char of normalized) {
    const value = abjad[char];
    if (value) breakdown.push({ char, value });
  }
  return breakdown;
}

export function calculateSaghir(total: number): number {
  if (total === 0) return 0;
  return 1 + ((total - 1) % 9);
}

/** Zodiac (burj) index from total, mod 12, 1-indexed (1=Aries .. 12=Pisces). */
export function calculateBurj(total: number): number {
  const remainder = total % 12;
  return remainder === 0 ? 12 : remainder;
}
