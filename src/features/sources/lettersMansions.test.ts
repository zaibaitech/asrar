import { describe, it, expect } from 'vitest';
import { BUNI_TABLE, letterOrder, lettersMansions } from './lettersMansions';
import { ABJAD_MAGHRIBI, ABJAD_MASHRIQI, LETTER_FORMS } from '../../lib/abjad-maps';
import { DIVINE_RESONANCE_TABLE } from '../calculator/lib/divineResonance';
import { LUNAR_MANSIONS } from '../../lib/lunarMansions';

const base = (t: Record<string, number>) => Object.keys(t).filter((c) => !(c in LETTER_FORMS));
const strip = (s: string) => s.replace(/[\u064B-\u0652\u0670\u0640]/g, '').replace(/\s+/g, ' ');

describe("al-Būnī's letters ↔ mansions table (Shams al-Maʿārif, ch. 2)", () => {
  it('has 28 entries; all 28 letters and all 28 mansion names are unique', () => {
    expect(BUNI_TABLE).toHaveLength(28);
    expect(new Set(BUNI_TABLE.map(([l]) => l)).size).toBe(28);
    expect(new Set(BUNI_TABLE.map(([, n]) => n)).size).toBe(28);
  });

  it('the 28 letters are exactly the 28 base letters of BOTH abjad tables, so the table is the same under Maghribi and Mashriqi', () => {
    const letters = [...letterOrder()].sort();
    expect(letters).toEqual(base(ABJAD_MAGHRIBI).sort());
    expect(letters).toEqual(base(ABJAD_MASHRIQI).sort());
  });

  it('is in Mashriqi abjad order (ascending Mashriqi value) and matches the Divine Name resonance letter order', () => {
    const values = letterOrder().map((l) => ABJAD_MASHRIQI[l]);
    expect(values).toEqual([...values].sort((a, b) => a - b));
    letterOrder().forEach((l, i) => expect(DIVINE_RESONANCE_TABLE[i + 1].letter).toBe(l));
  });

  it('every entry maps to the app\u2019s mansion of the same number; spellings match except the 6 known variants', () => {
    expect(LUNAR_MANSIONS).toHaveLength(28);
    const variants: number[] = [];
    BUNI_TABLE.forEach(([, name], i) => {
      expect(LUNAR_MANSIONS[i].number).toBe(i + 1);
      if (strip(LUNAR_MANSIONS[i].nameArabic) !== name) variants.push(i + 1);
    });
    // 1 الشرطين/الشرطان, 9 الطرفة/الطرف, 16 الزبانا/الزبانى, 26-27 الفرع/الفرغ, 28 الرشا = بطن الحوت
    expect(variants).toEqual([1, 9, 16, 26, 27, 28]);
  });

  it('looks letters up by the table, with hamza seats, ة and ى folded, once per distinct letter', () => {
    const rows = lettersMansions('أحمد');
    expect(rows.map((r) => [r.letter, r.number])).toEqual([['ا', 1], ['ح', 8], ['م', 13], ['د', 4]]);
    rows.forEach((r) => expect(r.mansion.number).toBe(r.number));
    expect(lettersMansions('إبراهيم').map((r) => r.letter)).toEqual(['ا', 'ب', 'ر', 'ه', 'ي', 'م']);
    expect(lettersMansions('فاطمة').map((r) => r.letter)).toEqual(['ف', 'ا', 'ط', 'م', 'ه']); // ة → ه
    expect(lettersMansions('موسى').map((r) => r.letter)).toEqual(['م', 'و', 'س', 'ي']); // ى → ي
    expect(lettersMansions('ممم')).toHaveLength(1);
    expect(lettersMansions('abc')).toEqual([]);
  });

  it('gives the same rows whichever abjad setting is selected (no abjad table is consulted)', () => {
    expect(lettersMansions.length).toBe(1);
    expect(lettersMansions('صالح').map((r) => r.number)).toEqual([18, 1, 12, 8]);
  });
});
