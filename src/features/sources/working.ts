/**
 * The working of an existing calculation, step by step:
 * letters → values → kabīr → ṣaghīr → ṭabʿ → burj.
 *
 * This module adds NO calculation and NO table. Every number comes from code
 * the live calculators already use:
 *   - letter values: the shared abjad table (src/lib/abjad-maps.ts), passed in
 *     by the caller (Maghribi default; Mashriqi by the app-wide switch);
 *   - ṣaghīr: digitalRoot (hadad-core), the same reduction as /abjad;
 *   - ṭabʿ: total ÷ 4 via hadathRemainder / hadathToElement (hadad-core),
 *     the rule /abjad's analyzeText() already computes;
 *   - burj: calculateBurujRemainder() (Who Am I) and zodiacFromBurjIndex()
 *     (/abjad), i.e. total ÷ 12 with 0 counting as 12.
 * Manzil is NOT part of the name arithmetic. The only manzil is the Moon's
 * real position among the 28 mansions (see MoonManzil.tsx).
 * working.test.ts asserts equality with /abjad, Who Am I and the ilm-huruf
 * buildDestiny() for both abjad systems, so the three cannot drift apart.
 */
import { ABJAD_MAGHRIBI } from '../../lib/abjad-maps';
import { urduToArabicLetters } from '../../lib/urduLetters';
import { digitalRoot, hadathRemainder, hadathToElement } from '../../components/hadad-summary/hadad-core';
import { calculateBurujRemainder } from '../istikhara/calculations';
import { zodiacFromBurjIndex, type ZodiacIdentity } from '../calculator/lib/zodiac';
import { ELEMENT_NAME } from '../calculator/lib/i18nText';
import { ELEMENT_EMOJI, type ElementType } from '../calculator/lib/textAnalysis';

export interface LetterRow {
  char: string;
  /** Value from the abjad table; 0 when the character is not a counted letter. */
  value: number;
  counted: boolean;
}

export interface NameLetters {
  letters: LetterRow[];
  kabir: number;
}

export interface WorkingResult {
  person: NameLetters;
  mother: NameLetters | null;
  /** Person + mother's name (the mother counts 0 when not given). */
  total: number;
  saghir: number;
  /** Digit-sum chain from kabīr down to ṣaghīr, e.g. [786, 21, 3]. */
  saghirChain: number[];
  /** Ṭabʿ: total ÷ 4. Remainder 1 Fire, 2 Earth, 3 Air, 0 Water. */
  tabi: { remainder: number; element: ElementType; names: { en: string; fr: string; ar: string }; emoji: string };
  /** Burj: total ÷ 12, remainder 0 counting as 12. */
  burj: { remainder: number; index: number; zodiac: ZodiacIdentity };
}

// Same normalisation as the other calculators (see calculateAbjadValue in ilm-huruf/core.ts).
function normalise(text: string): string[] {
  return [...urduToArabicLetters(text).replace(/[ًٌٍَُِّْ]/g, '').replace(/\s+/g, '')];
}

export function lettersOf(text: string, abjad: Record<string, number>): NameLetters {
  const letters = normalise(text).map((char) => {
    const value = abjad[char] || 0;
    return { char, value, counted: value > 0 };
  });
  return { letters, kabir: letters.reduce((s, l) => s + l.value, 0) };
}

function chainOf(n: number): number[] {
  const chain = [n];
  while (chain[chain.length - 1] >= 10) {
    chain.push([...String(chain[chain.length - 1])].reduce((s, d) => s + Number(d), 0));
  }
  return chain;
}

export function buildWorking(
  name: string,
  motherName: string | undefined,
  abjad: Record<string, number> = ABJAD_MAGHRIBI,
): WorkingResult | null {
  const person = lettersOf(name, abjad);
  if (person.letters.length === 0) return null;
  const mother = motherName && motherName.trim() !== '' ? lettersOf(motherName, abjad) : null;
  const total = person.kabir + (mother?.kabir ?? 0);
  if (total === 0) return null;

  const remainder4 = hadathRemainder(total);
  const element = hadathToElement(remainder4).toLowerCase() as ElementType;
  const burjIndex = calculateBurujRemainder(person.kabir, mother?.kabir ?? 0);

  return {
    person,
    mother,
    total,
    saghir: digitalRoot(total),
    saghirChain: chainOf(total),
    tabi: { remainder: remainder4, element, names: ELEMENT_NAME[element], emoji: ELEMENT_EMOJI[element] },
    burj: { remainder: total % 12, index: burjIndex, zodiac: zodiacFromBurjIndex(burjIndex)! },
  };
}
