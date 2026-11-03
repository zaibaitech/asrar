/**
 * "Letters and their mansions": each letter of a name set beside the lunar
 * mansion that al-Būnī gives it. A fixed table, attributed to al-Būnī, Shams
 * al-Maʿārif al-Kubrā, ch. 2 (entries 1 to 28 checked against pp. 16 to 19 of the
 * ablibrary.net edition, https://ablibrary.net/book_content/b/10942/16).
 *
 * It follows the MASHRIQI abjad order (ا ب ج د ه و ز ح ط ي ك ل م ن س ع ف ص ق ر ش ت ث خ ذ ض ظ غ)
 * and is INDEPENDENT of the user's Maghribi / Mashriqi setting: letter n goes
 * with mansion n, always. It is a spiritual correspondence between letters and
 * the mansions, not an astronomical one; the Moon's real mansion is computed
 * elsewhere (MoonManzil). This module adds no calculation.
 *
 * The mansion is identified by NUMBER (1 to 28) and read from the app's own
 * list (src/lib/lunarMansions.ts). The Arabic name SHOWN is the app's spelling,
 * the standard lexical form (Ibn Qutayba, Kitāb al-Anwāʾ; Lisān al-ʿArab). Six
 * names are written differently in al-Būnī's edition; BUNI_TABLE keeps his
 * spelling for attribution and the view notes it per row:
 *   1 الشرطين (oblique case) = الشرطان, 9 الطرفة = الطرف, 16 الزبانا = الزبانى,
 *   26 and 27 الفرع (ʿayn) = الفرغ (ghayn), 28 الرشا = بطن الحوت (also الرشاء).
 * The numbered mansion is the same one in every case.
 */
import { LETTER_FORMS } from '../../lib/abjad-maps';
import { urduToArabicLetters } from '../../lib/urduLetters';
import { LUNAR_MANSIONS, type LunarMansion } from '../../lib/lunarMansions';

/** Mansion number (index + 1) → [letter, al-Būnī's name for the mansion]. */
export const BUNI_TABLE: readonly (readonly [letter: string, name: string])[] = [
  ['ا', 'الشرطين'], ['ب', 'البطين'], ['ج', 'الثريا'], ['د', 'الدبران'], ['ه', 'الهقعة'],
  ['و', 'الهنعة'], ['ز', 'الذراع'], ['ح', 'النثرة'], ['ط', 'الطرفة'], ['ي', 'الجبهة'],
  ['ك', 'الزبرة'], ['ل', 'الصرفة'], ['م', 'العواء'], ['ن', 'السماك'], ['س', 'الغفر'],
  ['ع', 'الزبانا'], ['ف', 'الإكليل'], ['ص', 'القلب'], ['ق', 'الشولة'], ['ر', 'النعائم'],
  ['ش', 'البلدة'], ['ت', 'سعد الذابح'], ['ث', 'سعد بلع'], ['خ', 'سعد السعود'], ['ذ', 'سعد الأخبية'],
  ['ض', 'الفرع المقدم'], ['ظ', 'الفرع المؤخر'], ['غ', 'الرشا'],
];

const stripMarks = (t: string): string => t.replace(/[\u064B-\u0652\u0670\u0640]/g, '');

const INDEX_BY_LETTER: Readonly<Record<string, number>> = Object.fromEntries(BUNI_TABLE.map(([l], i) => [l, i + 1]));

/** The 28 letters in the table's order (the Mashriqi abjad order). */
export const letterOrder = (): string[] => BUNI_TABLE.map(([l]) => l);

export interface LetterMansionRow {
  /** Base letter (أ إ آ → ا, ؤ → و, ئ ى → ي, ة → ه). */
  letter: string;
  /** Mansion number, 1 to 28. */
  number: number;
  /** al-Būnī's name for the mansion, exactly as in his table. */
  buniName: string;
  /** True where al-Būnī's edition spells the name differently from the app (6 mansions). */
  buniDiffers: boolean;
  /** The same numbered mansion in the app's list. */
  mansion: LunarMansion;
}

/** One row per distinct letter of the text, in order of first appearance. */
export function lettersMansions(text: string): LetterMansionRow[] {
  const rows: LetterMansionRow[] = [];
  const seen = new Set<string>();
  for (const raw of [...urduToArabicLetters(text).replace(/[ًٌٍَُِّْ]/g, '').replace(/\s+/g, '')]) {
    const letter = LETTER_FORMS[raw] ?? raw;
    const number = INDEX_BY_LETTER[letter];
    if (!number || seen.has(letter)) continue;
    seen.add(letter);
    const mansion = LUNAR_MANSIONS[number - 1];
    const buniName = BUNI_TABLE[number - 1][1];
    rows.push({ letter, number, buniName, buniDiffers: stripMarks(mansion.nameArabic) !== buniName, mansion });
  }
  return rows;
}
