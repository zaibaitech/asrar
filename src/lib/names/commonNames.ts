/**
 * Curated common Muslim names for the /names SEO pages.
 *
 * Arabic spellings come from the calculator's own transliteration database
 * (src/features/calculator/lib/nameTransliterations.ts), so a page shows
 * exactly the value the "Who Am I?" calculator gives when the visitor picks
 * that name. Values are computed with the calculator's own functions
 * (calculateAbjadValue / calculateBurujRemainder); nothing is hard-coded.
 *
 * First slice deliberately avoids names whose spelling contains hamza
 * forms (أ إ آ ء ؤ ئ) or alif maqṣūra (ى): the calculator's letter table
 * does not count them, so e.g. Ahmad / Ibrahim / Aisha / Musa would show a
 * value that needs a scholar's decision first (see PR notes).
 */
import { nameTransliterations } from '@/src/features/calculator/lib/nameTransliterations';
import {
  BURJ_NAMES_AR,
  BURJ_NAMES_EN,
  calculateBurujRemainder,
  getBurujData,
} from '@/src/features/istikhara/calculations';
import { ZODIAC_SADAQAH, ZODIAC_SIGN_ORDER } from '@/src/data/zodiacSadaqahData';

/**
 * Maghribi letter values, matching the calculator's ABJAD_MAGHRIBI in
 * AbjadContext (the table Istikhārat al-Asmāʾ uses). Kept as a plain
 * server-safe constant: AbjadContext is a client module and cannot be
 * imported into these SEO pages. Letters that differ between Maghribi and
 * Mashriqi (ṣād 300 vs 90, etc.) are listed so Mashriqi comparison works.
 */
const MAGHRIBI: Record<string, number> = {
  ا: 1, ب: 2, ج: 3, د: 4, ه: 5, و: 6, ز: 7, ح: 8, ط: 9,
  ي: 10, ك: 20, ل: 30, م: 40, ن: 50, س: 60, ع: 70, ف: 80, ص: 300,
  ق: 100, ر: 200, ش: 300, ت: 400, ث: 500, خ: 600, ذ: 700, ض: 800, ظ: 900, غ: 1000,
  ة: 5,
};
const MASHRIQI: Record<string, number> = { ...MAGHRIBI, ص: 90 };

function abjadSum(text: string, table: Record<string, number>): number {
  const normalized = text.replace(/[ًٌٍَُِّْ]/g, '').replace(/\s+/g, '');
  return [...normalized].reduce((sum, ch) => sum + (table[ch] || 0), 0);
}

export interface CommonNameDef {
  slug: string;
  /** Display spelling used in titles. */
  name: string;
  /** Latin key in nameTransliterations used to look up the Arabic spelling. */
  latinKey: string;
  gender: 'm' | 'f';
}

export const COMMON_NAMES: readonly CommonNameDef[] = [
  { slug: 'muhammad', name: 'Muhammad', latinKey: 'muhammad', gender: 'm' },
  { slug: 'ali', name: 'Ali', latinKey: 'ali', gender: 'm' },
  { slug: 'umar', name: 'Umar', latinKey: 'umar', gender: 'm' },
  { slug: 'hassan', name: 'Hassan', latinKey: 'hassan', gender: 'm' },
  { slug: 'husayn', name: 'Husayn', latinKey: 'husayn', gender: 'm' },
  { slug: 'yusuf', name: 'Yusuf', latinKey: 'yusuf', gender: 'm' },
  { slug: 'khalid', name: 'Khalid', latinKey: 'khalid', gender: 'm' },
  { slug: 'abdullah', name: 'Abdullah', latinKey: 'abdullah', gender: 'm' },
  { slug: 'fatima', name: 'Fatima', latinKey: 'fatima', gender: 'f' },
  { slug: 'khadija', name: 'Khadija', latinKey: 'khadija', gender: 'f' },
  { slug: 'maryam', name: 'Maryam', latinKey: 'maryam', gender: 'f' },
  { slug: 'zaynab', name: 'Zaynab', latinKey: 'zaynab', gender: 'f' },
];

/** Mothers' names used in the "with common mothers' names" table. */
export const MOTHER_SLUGS = ['fatima', 'khadija', 'maryam', 'zaynab'] as const;

const TASHKEEL = /[\u064B-\u0652]/g;

export function stripTashkeel(s: string): string {
  return s.replace(TASHKEEL, '');
}

export interface LetterValue {
  letter: string;
  value: number;
}

export interface CommonName extends CommonNameDef {
  /** Vocalised spelling from the transliteration database. */
  arabic: string;
  /** Unvocalised spelling. */
  arabicPlain: string;
  /** Abjad total as the calculator computes it (Maghribi table). */
  value: number;
  /** Total with the Mashriqi table (for the "same in both systems?" note). */
  mashriqiValue: number;
  letters: LetterValue[];
  /** Latin spellings in the database that map to the same Arabic name. */
  variants: string[];
}

function titleCase(s: string) {
  return s.charAt(0).toUpperCase() + s.slice(1);
}

function build(def: CommonNameDef): CommonName {
  const entry = nameTransliterations.find((n) => n.latin === def.latinKey);
  if (!entry) throw new Error(`No transliteration entry for ${def.latinKey}`);
  const arabicPlain = stripTashkeel(entry.arabic);
  const key = arabicPlain.replace(/\s+/g, '');
  const variants = [
    ...new Set(
      nameTransliterations
        .filter((n) => stripTashkeel(n.arabic).replace(/\s+/g, '') === key)
        .map((n) => titleCase(n.latin)),
    ),
  ];
  return {
    ...def,
    arabic: entry.arabic,
    arabicPlain,
    value: abjadSum(entry.arabic, MAGHRIBI),
    mashriqiValue: abjadSum(entry.arabic, MASHRIQI),
    letters: [...key].map((letter) => ({ letter, value: MAGHRIBI[letter] ?? 0 })),
    variants,
  };
}

let cache: CommonName[] | null = null;

export function getCommonNames(): CommonName[] {
  if (!cache) cache = COMMON_NAMES.map(build);
  return cache;
}

export function getCommonName(slug: string): CommonName | undefined {
  return getCommonNames().find((n) => n.slug === slug);
}

export interface BurjPairing {
  mother: CommonName;
  total: number;
  remainder: number;
  burjEn: string;
  burjAr: string;
  burjTranslit: string;
  element: string;
  blessedDay: string;
}

/** Burj for `name` paired with each common mother's name, via the calculator's own functions. */
export function burjWithMothers(name: CommonName): BurjPairing[] {
  return MOTHER_SLUGS.map((slug) => {
    const mother = getCommonName(slug)!;
    const remainder = calculateBurujRemainder(name.value, mother.value);
    const profile = getBurujData(remainder);
    const i = remainder - 1;
    return {
      mother,
      total: name.value + mother.value,
      remainder,
      burjEn: BURJ_NAMES_EN[i],
      burjAr: BURJ_NAMES_AR[i],
      burjTranslit: ZODIAC_SADAQAH[ZODIAC_SIGN_ORDER[i]].translit,
      element: profile.element,
      blessedDay: profile.blessed_day.day.en,
    };
  });
}
