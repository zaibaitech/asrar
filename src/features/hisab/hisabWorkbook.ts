/**
 * Ḥisāb workbook: the working of an existing calculation, laid out step by step.
 *
 * This module adds NO calculation and NO table. Every number comes from code
 * that already ships:
 *   - letter values: the shared abjad table (src/lib/abjad-maps.ts), passed in
 *     by the caller (Maghribi default, Mashriqi by the app-wide switch);
 *   - kabīr / ṣaghīr / ṭabʿ / burj: the same rules as buildDestiny() in
 *     src/features/ilm-huruf/core.ts (name + mother's name, ṣaghīr = digitalRoot,
 *     ṭabʿ = modIndex(total, 4), burj = modIndex(total, 12));
 *   - manzil: apply28LetterCycle() from src/utils/divineNameResonance.ts, applied
 *     to the name's own kabīr exactly as the Divine Name resonance does, and the
 *     existing LUNAR_MANSIONS list for the name of that station.
 * hisabWorkbook.test.ts asserts equality with buildDestiny() and the
 * Divine Name resonance for both abjad systems.
 */
import { ABJAD_MAGHRIBI } from '../../lib/abjad-maps';
import { urduToArabicLetters } from '../../lib/urduLetters';
import { digitalRoot } from '../../components/hadad-summary/hadad-core';
import { modIndex, ELEMENTS, BURUJ, type ElementKey, type ElementData, type BurjData } from '../ilm-huruf/core';
import { apply28LetterCycle } from '../../utils/divineNameResonance';
import { getLunarMansionByNumber, type LunarMansion } from '../../lib/lunarMansions';

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

export interface ModStep<T> {
  divisor: number;
  remainder: number;
  /** 1..divisor (a remainder of 0 counts as the last position). */
  index: number;
  entry: T;
}

export interface HisabResult {
  person: NameLetters;
  mother: NameLetters | null;
  /** Person + mother's name (mother counts 0 when not given). */
  total: number;
  saghir: number;
  /** Digit-sum chain from kabīr down to ṣaghīr, e.g. [786, 21, 3]. */
  saghirChain: number[];
  tabi: ModStep<ElementData>;
  burj: ModStep<BurjData>;
  /** From the person's own kabīr (as the app's Divine Name resonance does). */
  manzil: ModStep<LunarMansion | null>;
}

// Same normalisation as buildDestiny() / analyzeNameDestiny() in core.ts.
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

export function computeHisab(
  name: string,
  motherName: string | undefined,
  abjad: Record<string, number> = ABJAD_MAGHRIBI,
): HisabResult | null {
  const person = lettersOf(name, abjad);
  if (person.letters.length === 0) return null;
  const mother = motherName && motherName.trim() !== '' ? lettersOf(motherName, abjad) : null;
  const total = person.kabir + (mother?.kabir ?? 0);
  if (total === 0) return null;

  const tabiIdx = modIndex(total, 4) as ElementKey;
  const burjIdx = modIndex(total, 12) as BurjData['index'];
  const manzilIdx = person.kabir > 0 ? apply28LetterCycle(person.kabir) : 0;

  return {
    person,
    mother,
    total,
    saghir: digitalRoot(total),
    saghirChain: chainOf(total),
    tabi: { divisor: 4, remainder: total % 4, index: tabiIdx, entry: ELEMENTS[tabiIdx] },
    burj: { divisor: 12, remainder: total % 12, index: burjIdx, entry: BURUJ[burjIdx] },
    manzil: {
      divisor: 28,
      remainder: person.kabir % 28,
      index: manzilIdx,
      entry: manzilIdx > 0 ? getLunarMansionByNumber(manzilIdx) : null,
    },
  };
}
