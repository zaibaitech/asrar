/**
 * Urdu letters -> their Arabic equivalents, before an Abjad count.
 *
 * Urdu keyboards type ی، ک، ہ… (different Unicode letters from Arabic ي، ك،
 * ه), which have no Abjad value, so «علی» used to count as 100 instead of 110.
 * This maps them to the Arabic letters (approved by Mario, Oct 2026; mapping as
 * recommended by the native reviewer, docs/i18n/ur-review.md Q7):
 *
 *   ی ے → ي      ک → ك      ھ ۂ → ه
 *   ہ ۃ → ة at the end of a word (the Urdu spelling of tāʾ marbūṭa, so
 *          فاطمہ counts exactly like فاطمة), ه elsewhere (مہر → مهر)
 *
 * ٹ ڈ ڑ ں (and پ چ ژ گ) have no Abjad value and stay uncounted, as before.
 *
 * Only those Urdu code points are touched: any text without them (every
 * Arabic or Latin input) is returned unchanged, so existing results do not
 * change.
 */
const URDU_LETTERS = /[\u06CC\u06D2\u06A9\u06BE\u06C2\u06C1\u06C3]/;
/** Arabic-script letters (not marks): what counts as "the word continues". */
const LETTER = /[\u0620-\u064A\u066E-\u066F\u0671-\u06D3\u06D5\u06EE-\u06EF\u06FA-\u06FC\u06FF]/;
/** Harakāt and other combining marks that can sit after a letter. */
const MARK = /[\u064B-\u065F\u0670\u06D6-\u06ED]/;

const SIMPLE: Readonly<Record<string, string>> = {
  '\u06CC': '\u064A', // ی → ي
  '\u06D2': '\u064A', // ے → ي
  '\u06A9': '\u0643', // ک → ك
  '\u06BE': '\u0647', // ھ → ه
  '\u06C2': '\u0647', // ۂ → ه
};

export function urduToArabicLetters(text: string): string {
  if (!text || !URDU_LETTERS.test(text)) return text;
  const chars = [...text];
  let out = '';
  for (let i = 0; i < chars.length; i++) {
    const ch = chars[i];
    const simple = SIMPLE[ch];
    if (simple) {
      out += simple;
    } else if (ch === '\u06C1' || ch === '\u06C3') {
      // ہ / ۃ: word-final → ة, otherwise → ه
      let j = i + 1;
      while (j < chars.length && MARK.test(chars[j])) j++;
      const final = j >= chars.length || !LETTER.test(chars[j]);
      out += final ? '\u0629' : '\u0647';
    } else {
      out += ch;
    }
  }
  return out;
}
