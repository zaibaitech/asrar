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
 * forms (أ إ آ ء ؤ ئ) or alif maqṣūra (ى). Since the shared letter table
 * (src/lib/abjad-maps.ts) counts hamza seats and ى as their letters, such
 * names could be added later.
 */
import { nameTransliterations } from '@/src/features/calculator/lib/nameTransliterations';
import {
  BURJ_NAMES_AR,
  BURJ_NAMES_EN,
  calculateBurujRemainder,
  getBurujData,
} from '@/src/features/istikhara/calculations';
import { ZODIAC_SADAQAH, ZODIAC_SIGN_ORDER } from '@/src/data/zodiacSadaqahData';
import { ABJAD_MAGHRIBI, ABJAD_MASHRIQI } from '@/src/lib/abjad-maps';

/** Letter values from the app's single shared table (server-safe module). */
const MAGHRIBI = ABJAD_MAGHRIBI;
const MASHRIQI = ABJAD_MASHRIQI;

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
