/**
 * "Letters and their mansions": each letter of a name set beside the lunar
 * mansion that stands at the same position (1 to 28) in the 28-letter order.
 *
 * What is in the repo, and what is not:
 *   - IN: the 28 letters in abjad order (the shared abjad table, ranked by value);
 *     the numbered list of the 28 mansions (src/lib/lunarMansions.ts, 1 = al-Sharaṭān);
 *     the app's 28-position abjad cycle (apply28LetterCycle, Divine Name resonance).
 *   - NOT in the repo: a stored letter ↔ mansion table, or any source for one.
 * So this view pairs position k with position k and nothing more. The pairing,
 * and its ordering, are marked "to verify" in the UI (see sourcesContent.ts).
 *
 * Ordering used: ABJAD order of the selected system (rank by abjad value in the
 * shared table), not the alphabetical (hijāʾī) order. Maghribi and Mashriqi
 * differ at 6 positions (15, 18, 21, 26, 27, 28). NOTE: the Divine Name
 * resonance table (calculator/lib/divineResonance.ts) lists its letters in
 * the MASHRIQI order whichever system is selected; this view follows the
 * selected system instead. Flagged for Mario in the PR.
 */
import { LETTER_FORMS } from '../../lib/abjad-maps';
import { urduToArabicLetters } from '../../lib/urduLetters';
import { LUNAR_MANSIONS, type LunarMansion } from '../../lib/lunarMansions';

/** The 28 base letters in abjad order for the given table (hamza seats and ة are not separate letters). */
export function abjadOrder(abjad: Record<string, number>): string[] {
  return Object.keys(abjad)
    .filter((ch) => !(ch in LETTER_FORMS))
    .sort((a, b) => abjad[a] - abjad[b]);
}

export interface LetterMansionRow {
  /** Base letter (أ إ آ → ا, ؤ → و, ئ ى → ي, ة → ه). */
  letter: string;
  value: number;
  /** 1 to 28: place of the letter in abjad order. */
  position: number;
  mansion: LunarMansion;
}

/** One row per distinct letter of the text, in order of first appearance. */
export function lettersMansions(text: string, abjad: Record<string, number>): LetterMansionRow[] {
  const order = abjadOrder(abjad);
  const rows: LetterMansionRow[] = [];
  const seen = new Set<string>();
  for (const raw of [...urduToArabicLetters(text).replace(/[ًٌٍَُِّْ]/g, '').replace(/\s+/g, '')]) {
    const letter = LETTER_FORMS[raw] ?? raw;
    const idx = order.indexOf(letter);
    if (idx < 0 || seen.has(letter)) continue;
    seen.add(letter);
    rows.push({ letter, value: abjad[letter], position: idx + 1, mansion: LUNAR_MANSIONS[idx] });
  }
  return rows;
}
