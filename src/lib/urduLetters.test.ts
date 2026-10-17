import { describe, expect, it } from 'vitest';
import { urduToArabicLetters } from './urduLetters';
import { ABJAD_MAGHRIBI, ABJAD_MASHRIQI } from './abjad-maps';
import { calculateAbjadValue } from '../features/ilm-huruf/core';
import { calculateHadadKabir, getLetterBreakdown } from '../features/calculator/lib/coreCalculations';
import { calculateAbjadTotal } from '../utils/soulConnection';
import { calculateIstikhara } from '../features/istikhara/calculations';
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

  it('the burj from names typed in Urdu matches the Arabic spelling', () => {
    const ur = calculateIstikhara('علی', 'فاطمہ');
    const ar = calculateIstikhara('علي', 'فاطمة');
    expect(ur.combinedTotal).toBe(245);
    expect(ur.burujRemainder).toBe(ar.burujRemainder);
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
    expect(calculateAbjadValue('أحمد')).toBe(52);
    expect(calculateHadadKabir('أحمد', ABJAD_MAGHRIBI)).toBe(53);
    expect(calculateIstikhara('علي', 'فاطمة').combinedTotal).toBe(245);
  });
});
