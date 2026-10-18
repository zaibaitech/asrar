import { describe, expect, it } from 'vitest';
import { urduToArabicLetters } from './urduLetters';
import { ABJAD_MAGHRIBI, ABJAD_MASHRIQI } from './abjad-maps';
import { calculateAbjadValue } from '../features/ilm-huruf/core';
import { calculateHadadKabir, getLetterBreakdown } from '../features/calculator/lib/coreCalculations';
import { calculateAbjadTotal } from '../utils/soulConnection';
import { calculateIstikhara } from '../features/istikhara/calculations';
import { analyzeText } from '../features/calculator/lib/textAnalysis';
import { calculateLetterElementDistribution } from '../utils/relationshipCompatibility';
import { DIVINE_NAMES } from '../data/divine-names';
import { nameTransliterations } from '../data/nameTransliterations';
import { QURANIC_VERSES } from '../data/quranic-verses';

const MAPS = { maghribi: ABJAD_MAGHRIBI, mashriqi: ABJAD_MASHRIQI };

/** Every name-calculation entry point the /ur tools use. */
function totals(s: string) {
  return Object.fromEntries(
    Object.entries(MAPS).map(([k, m]) => [k, [calculateAbjadValue(s, m), calculateHadadKabir(s, m), calculateAbjadTotal(s, m)]]),
  );
}

describe('urduToArabicLetters', () => {
  it('maps the Urdu letters to Arabic', () => {
    expect(urduToArabicLetters('علی')).toBe('علي');
    expect(urduToArabicLetters('کریم')).toBe('كريم');
    expect(urduToArabicLetters('فاطمہ')).toBe('فاطمة');
    expect(urduToArabicLetters('عائشہ صدیقہ')).toBe('عائشة صديقة');
    expect(urduToArabicLetters('مہر')).toBe('مهر'); // medial ہ → ه
    expect(urduToArabicLetters('فاطمۃ')).toBe('فاطمة');
    expect(urduToArabicLetters('فاطمہُ')).toBe('فاطمةُ'); // final even before a haraka
    expect(urduToArabicLetters('بھائی')).toBe('بهائي');
    expect(urduToArabicLetters('نغمۂ')).toBe('نغمه');
    expect(urduToArabicLetters('بے')).toBe('بي');
  });

  it('leaves ٹ ڈ ڑ ں (no Abjad value) as they are', () => {
    expect(urduToArabicLetters('ٹڈڑں')).toBe('ٹڈڑں');
  });
});

describe('Urdu-typed names count like their Arabic spelling', () => {
  it('علی = 110, same as علي', () => {
    expect(calculateAbjadValue('علی')).toBe(110);
    expect(totals('علی')).toEqual(totals('علي'));
  });

  it('فاطمہ = فاطمة (word-final ہ counts as ة)', () => {
    expect(calculateAbjadValue('فاطمہ')).toBe(135);
    expect(totals('فاطمہ')).toEqual(totals('فاطمة'));
    expect(getLetterBreakdown('فاطمہ')).toEqual(getLetterBreakdown('فاطمة'));
  });

  it('کریم, خدیجہ, یوسف, عائشہ match the Arabic spelling', () => {
    for (const [ur, ar] of [['کریم', 'كريم'], ['خدیجہ', 'خديجة'], ['یوسف', 'يوسف'], ['عائشہ', 'عائشة']]) {
      expect(totals(ur)).toEqual(totals(ar));
    }
  });

  it('Urdu-typed totals with the shared table (#88): Maghribi / Mashriqi', () => {
    expect([calculateAbjadValue('یوسف'), calculateAbjadValue('یوسف', ABJAD_MASHRIQI)]).toEqual([396, 156]);
    expect([calculateAbjadValue('عائشہ'), calculateAbjadValue('عائشہ', ABJAD_MASHRIQI)]).toEqual([1086, 386]);
    expect(calculateHadadKabir('یوسف')).toBe(396);
  });

  it('the burj from names typed in Urdu matches the Arabic spelling', () => {
    const ur = calculateIstikhara('علی', 'فاطمہ');
    const ar = calculateIstikhara('علي', 'فاطمة');
    expect(ur.combinedTotal).toBe(245);
    expect(ur.burujRemainder).toBe(ar.burujRemainder);
  });
});

describe('اللہ counts exactly like الله (Mario, Oct 2026)', () => {
  it('converts the Name to الله, not اللة', () => {
    expect(urduToArabicLetters('اللہ')).toBe('الله');
    expect(urduToArabicLetters('عبداللہ')).toBe('عبدالله');
    expect(urduToArabicLetters('عبد اللہ')).toBe('عبد الله');
    expect(urduToArabicLetters('اللّٰہ')).toBe('اللّٰه');
    expect(urduToArabicLetters('ٱللہ')).toBe('ٱلله');
    expect(urduToArabicLetters('اللہ دتہ')).toBe('الله دتة');
    // other word-final ہ still → ة
    expect(urduToArabicLetters('فاطمہ')).toBe('فاطمة');
  });

  it('same total and elements as الله / عبدالله', () => {
    for (const [ur, ar] of [['اللہ', 'الله'], ['عبداللہ', 'عبدالله']]) {
      expect(totals(ur)).toEqual(totals(ar));
      expect(calculateLetterElementDistribution(ur)).toEqual(calculateLetterElementDistribution(ar));
      expect(analyzeText(ur)?.elemental).toEqual(analyzeText(ar)?.elemental);
    }
    expect(calculateAbjadValue('اللہ')).toBe(66);
    expect(calculateAbjadValue('عبداللہ')).toBe(142);
  });
});

describe('Urdu-only letters without an Abjad value stay at zero', () => {
  it('پ چ ژ گ ٹ ڈ ڑ ں count 0', () => {
    for (const ch of ['پ', 'چ', 'ژ', 'گ', 'ٹ', 'ڈ', 'ڑ', 'ں']) {
      expect(urduToArabicLetters(ch)).toBe(ch);
      expect(calculateAbjadValue(ch)).toBe(0);
      expect(calculateHadadKabir(ch)).toBe(0);
    }
    expect(calculateAbjadValue('پروین')).toBe(266); // پ = 0
  });
});

describe('regression: Arabic input is unchanged', () => {
  const arabic = [
    ...DIVINE_NAMES.map((n) => n.arabic),
    ...nameTransliterations.map((n) => n.arabic),
    ...QURANIC_VERSES.map((v) => v.arabic),
    'محمد', 'مُحَمَّد', 'علي', 'فاطمة', 'خديجة', 'عبد الرحمن', 'أحمد', 'زينب', 'مريم', 'عائشة', 'ةهيك',
  ];

  it('the conversion returns every Arabic string as is', () => {
    for (const s of arabic) expect(urduToArabicLetters(s)).toBe(s);
  });

  it('known totals are the same as before the change', () => {
    // Values computed on the branch before this change.
    expect(calculateAbjadValue('محمد')).toBe(92);
    expect(calculateAbjadValue('مُحَمَّد')).toBe(92);
    expect(calculateAbjadValue('علي')).toBe(110);
    expect(calculateAbjadValue('فاطمة')).toBe(135);
    expect(calculateAbjadValue('كريم')).toBe(270);
    expect(calculateAbjadValue('خديجة')).toBe(622);
    expect(calculateAbjadValue('عبد الرحمن')).toBe(405);
    // أحمد: 52 before the shared table (#88), which counts أ as ا
    expect(calculateAbjadValue('أحمد')).toBe(53);
    expect(calculateHadadKabir('أحمد', ABJAD_MAGHRIBI)).toBe(53);
    expect(calculateIstikhara('علي', 'فاطمة').combinedTotal).toBe(245);
  });
});
