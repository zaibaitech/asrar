/**
 * Search for the Divine Name pickers: Latin transliteration and EN/FR meaning (as before), plus
 * Arabic- and Urdu-script input (native Urdu review, sheet 2, items 2.19 / 7.225: the Urdu
 * placeholder «الرحمن، نور، شفا…» used to find nothing).
 *
 * Arabic/Urdu input is compared on a folded "search form":
 *   - Urdu letters → Arabic (urduToArabicLetters: ی→ي، ک→ك، ہ→ه/ة …),
 *   - harakāt, tanwīn, shadda, sukūn, dagger alif and tatweel removed,
 *   - alef forms (أ إ آ ٱ) → ا, hamza seats ؤ → و and ئ → ي, bare ء dropped, ى → ي, ة → ه,
 *   - a leading vocative «يا» and the article «ال» dropped,
 * and also on its consonant skeleton (every ا removed), so «رحمان» finds «الرَّحْمَن» and «رحمٰن».
 * A few common Urdu/Arabic meaning words (شفا، رحمت، رزق…) are mapped to the English keywords.
 * Only used for matching: nothing here changes what is displayed or any Abjad value.
 */
import { urduToArabicLetters } from './urduLetters';

const ARABIC_SCRIPT = /[\u0600-\u06FF\u0750-\u077F\uFB50-\uFDFF\uFE70-\uFEFF]/;
const MARKS = /[\u064B-\u065F\u0670\u06D6-\u06ED\u0640]/g;

/** Strips scholarly transliteration diacritics (ā/ḥ/ṣ/ṭ/ẓ/ʿ/ʾ) so "latif" matches "Al-Laṭīf". */
export function foldLatin(s: string): string {
  return s.normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/[ʿʾ]/g, '');
}

export function hasArabicScript(s: string): boolean {
  return ARABIC_SCRIPT.test(s);
}

/** The folded Arabic search form of one word or phrase (see the header). */
export function arabicSearchForm(input: string): string {
  let s = urduToArabicLetters(input.normalize('NFC')).replace(MARKS, '');
  s = s
    .replace(/[أإآٱ]/g, 'ا')
    .replace(/ؤ/g, 'و')
    .replace(/ئ/g, 'ي')
    .replace(/ء/g, '')
    .replace(/ى/g, 'ي')
    .replace(/ة/g, 'ه')
    .replace(/[^\u0621-\u064A\s]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
  const words = s.split(' ').filter(Boolean);
  if (words.length > 1 && words[0] === 'يا') words.shift();
  return words.map((w) => (w.length > 3 && w.startsWith('ال') ? w.slice(2) : w)).join(' ');
}

const skeleton = (s: string) => s.replace(/ا/g, '');

/** Urdu / Arabic meaning words → English keywords or translation words of the Names. */
const MEANING_WORDS: Record<string, string[]> = {
  'شفا': ['healer', 'healing'],
  'رحمت': ['mercy', 'merciful', 'compassion'],
  'رحم': ['mercy', 'merciful', 'compassion'],
  'مغفرت': ['forgiv', 'pardon'],
  'بخشش': ['forgiv', 'pardon'],
  'معافی': ['forgiv', 'pardon'],
  'نور': ['light'],
  'روشنی': ['light'],
  'رزق': ['rizq', 'provision', 'provider', 'sustainer'],
  'روزی': ['rizq', 'provision', 'provider', 'sustainer'],
  'حفاظت': ['protect', 'guardian', 'safekeeping'],
  'تحفظ': ['protect', 'guardian', 'safekeeping'],
  'علم': ['knowledge', 'all-knowing', 'omniscient'],
  'حکمت': ['wisdom', 'wise'],
  'صبر': ['patien'],
  'عدل': ['justice', 'just'],
  'انصاف': ['justice', 'fairness', 'equity'],
  'عزت': ['honor', 'dignity', 'esteem'],
  'طاقت': ['strength', 'power', 'might'],
  'قوت': ['strength', 'power', 'might'],
  'سلامتی': ['peace'],
  'سکون': ['peace', 'tranquility'],
  'امن': ['peace', 'security', 'safety'],
  'محبت': ['loving', 'love'],
  'ہدایت': ['guidance', 'guide'],
  'شکر': ['gratitude', 'grateful', 'appreciative'],
  'فتح': ['victory', 'opener'],
  'کامیابی': ['success', 'victory'],
  'آسانی': ['ease', 'relief'],
  'خالق': ['creator', 'creation'],
  'غنا': ['self-sufficient', 'sufficiency', 'rich'],
};
const MEANING_FORMS: [string, string[]][] = Object.entries(MEANING_WORDS).map(([k, v]) => [arabicSearchForm(k), v]);

export interface SearchableDivineName {
  arabic: string;
  transliteration: string;
  translation?: { en: string; fr: string };
  keywords?: string[];
}

/** True when the Name matches the query, typed in Latin, Arabic or Urdu script. */
export function matchesDivineNameQuery(name: SearchableDivineName, rawQuery: string): boolean {
  const query = rawQuery.trim();
  if (!query) return true;
  if (!hasArabicScript(query)) {
    const q = foldLatin(query.toLowerCase());
    return (
      foldLatin(name.transliteration.toLowerCase()).includes(q) ||
      (name.translation?.en.toLowerCase().includes(q) ?? false) ||
      (name.translation?.fr.toLowerCase().includes(q) ?? false) ||
      (name.keywords?.some((k) => k.includes(q)) ?? false)
    );
  }
  const q = arabicSearchForm(query);
  if (!q) return false;
  const target = arabicSearchForm(name.arabic);
  if (target.includes(q)) return true;
  const qs = skeleton(q);
  if (qs.length >= 2 && skeleton(target).includes(qs)) return true;
  const meanings = MEANING_FORMS.filter(([k]) => q === k || (q.length >= 3 && k.startsWith(q))).flatMap(([, v]) => v);
  if (!meanings.length) return false;
  const haystack = [name.translation?.en.toLowerCase() ?? '', ...(name.keywords ?? [])];
  return meanings.some((m) => haystack.some((h) => h.includes(m)));
}
