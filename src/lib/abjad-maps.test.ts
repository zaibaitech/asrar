import { describe, expect, it } from 'vitest';
import { ABJAD_MAGHRIBI, ABJAD_MASHRIQI, LETTER_FORMS } from './abjad-maps';
import * as Ctx from '../contexts/AbjadContext';
import * as Calc from '../features/calculator/lib/abjadMaps';
import { calculateAbjadValue } from '../features/ilm-huruf/core';
import { calculateHadadKabir } from '../features/calculator/lib/coreCalculations';
import { calculateAbjadTotal } from '../utils/soulConnection';
import { getCommonName } from './names/commonNames';

// Wikipedia "Abjad numerals" (Macdonald 1986), letter order أبجد هوز حطي كلمن سعفص قرشت ثخذ ضظغ.
const MASHRIQI_ORDER = 'ابجدهوزحطيكلمنسعفصقرشتثخذضظغ';
// Maghribi order أبجد هوز حطي كلمن صعفض قرست ثخذ ظغش.
const MAGHRIBI_ORDER = 'ابجدهوزحطيكلمنصعفضقرستثخذظغش';
const VALUES = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 200, 300, 400, 500, 600, 700, 800, 900, 1000];

describe('shared Abjad letter tables', () => {
  it('Mashriqi values follow أبجد هوز حطي كلمن سعفص قرشت ثخذ ضظغ', () => {
    [...MASHRIQI_ORDER].forEach((ch, i) => expect(ABJAD_MASHRIQI[ch], ch).toBe(VALUES[i]));
  });

  it('Maghribi values follow أبجد هوز حطي كلمن صعفض قرست ثخذ ظغش', () => {
    [...MAGHRIBI_ORDER].forEach((ch, i) => expect(ABJAD_MAGHRIBI[ch], ch).toBe(VALUES[i]));
    expect([ABJAD_MAGHRIBI['ص'], ABJAD_MAGHRIBI['ض'], ABJAD_MAGHRIBI['س'], ABJAD_MAGHRIBI['ظ'], ABJAD_MAGHRIBI['غ'], ABJAD_MAGHRIBI['ش']]).toEqual([60, 90, 300, 800, 900, 1000]);
  });

  it('one rule for hamza seats, ى and ة in both tables; bare ء counts 0', () => {
    for (const t of [ABJAD_MAGHRIBI, ABJAD_MASHRIQI]) {
      expect([t['أ'], t['إ'], t['آ'], t['ؤ'], t['ئ'], t['ى'], t['ة']]).toEqual([1, 1, 1, 6, 10, 10, 5]);
      expect(t['ء']).toBeUndefined();
      expect(Object.keys(t)).toHaveLength(28 + Object.keys(LETTER_FORMS).length);
    }
  });

  it('every module uses the same tables', () => {
    expect(Ctx.ABJAD_MAGHRIBI).toBe(ABJAD_MAGHRIBI);
    expect(Ctx.ABJAD_MASHRIQI).toBe(ABJAD_MASHRIQI);
    expect(Calc.ABJAD_MAGHRIBI).toBe(ABJAD_MAGHRIBI);
    expect(Calc.ABJAD_MASHRIQI).toBe(ABJAD_MASHRIQI);
  });

  it('basmala = 786 (Mashriqi) and 1026 (Maghribi)', () => {
    const basmala = 'بسم الله الرحمن الرحيم';
    expect(calculateAbjadValue(basmala, ABJAD_MASHRIQI)).toBe(786);
    expect(calculateAbjadValue(basmala, ABJAD_MAGHRIBI)).toBe(1026);
  });
});

describe('regression: the same total on every page', () => {
  // [Maghribi, Mashriqi]
  const EXPECTED: Record<string, [number, number]> = {
    'عائشة': [1086, 386], 'أحمد': [53, 53], 'إبراهيم': [259, 259], 'آمنة': [96, 96], 'مؤمن': [136, 136],
    'هدى': [19, 19], 'صالح': [99, 129], 'محمد': [92, 92], 'فاطمة': [135, 135], 'زينب': [69, 69],
    'حسن': [358, 118], 'يوسف': [396, 156],
  };
  for (const [name, [mag, mash]] of Object.entries(EXPECTED)) {
    it(name, () => {
      // burj (Maghribi by default), compatibility, Abjad calculator, API
      expect(calculateAbjadValue(name)).toBe(mag);
      expect(calculateAbjadValue(name, ABJAD_MASHRIQI)).toBe(mash);
      expect(calculateAbjadTotal(name, ABJAD_MAGHRIBI)).toBe(mag);
      expect(calculateAbjadTotal(name, ABJAD_MASHRIQI)).toBe(mash);
      expect(calculateHadadKabir(name)).toBe(mag);
      expect(calculateHadadKabir(name, ABJAD_MASHRIQI)).toBe(mash);
    });
  }

  it('/names pages use the same tables', () => {
    expect(getCommonName('hassan')).toMatchObject({ value: 358, mashriqiValue: 118 });
    expect(getCommonName('muhammad')).toMatchObject({ value: 92, mashriqiValue: 92 });
  });
});
