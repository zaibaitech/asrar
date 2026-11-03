import { describe, it, expect } from 'vitest';
import { computeHisab } from './hisabWorkbook';
import { buildDestiny } from '../ilm-huruf/core';
import { calculateDivineNameResonance } from '../../utils/divineNameResonance';
import { ABJAD_MAGHRIBI, ABJAD_MASHRIQI } from '../../lib/abjad-maps';

const cases: [string, string | undefined][] = [
  ['محمد', undefined],
  ['فاطمة', 'خديجة'],
  ['عبد الرحمن', 'عائشة'],
  ['صالح', 'سارة'], // letters whose value differs between the two systems
  ['غشض', undefined],
  ['أحمد', 'آمنة'],
  ['مَرْيَم', 'زينب'],
];

describe('ḥisāb workbook equals the existing calculations', () => {
  for (const [sysName, table] of [['Maghribi', ABJAD_MAGHRIBI], ['Mashriqi', ABJAD_MASHRIQI]] as const) {
    for (const [name, mother] of cases) {
      it(`${sysName}: ${name}${mother ? ' + ' + mother : ''}`, () => {
        const h = computeHisab(name, mother, table)!;
        const d = buildDestiny(name, mother, table);
        expect(h.person.kabir).toBe(d.personKabir);
        expect(h.mother?.kabir ?? 0).toBe(d.motherKabir);
        expect(h.total).toBe(d.totalKabir);
        expect(h.saghir).toBe(d.saghir);
        expect(h.saghirChain[h.saghirChain.length - 1]).toBe(d.saghir);
        expect(h.tabi.index).toBe(d.tabhIdx);
        expect(h.tabi.entry).toBe(d.element);
        expect(h.burj.index).toBe(d.burjIdx);
        expect(h.burj.entry).toBe(d.burj);
        const r = calculateDivineNameResonance(name, table);
        expect(h.manzil.index).toBe(r!.resonanceIndex);
        expect(h.manzil.entry?.number).toBe(h.manzil.index);
      });
    }
  }

  it('Maghribi and Mashriqi differ only through the shared table', () => {
    const a = computeHisab('صالح', undefined, ABJAD_MAGHRIBI)!;
    const b = computeHisab('صالح', undefined, ABJAD_MASHRIQI)!;
    expect(a.total).not.toBe(b.total);
  });

  it('returns null for empty or non-letter input; marks uncounted characters', () => {
    expect(computeHisab('', undefined)).toBeNull();
    expect(computeHisab('   ', undefined)).toBeNull();
    expect(computeHisab('abc', undefined)).toBeNull();
    const h = computeHisab('ءآدم', undefined)!;
    expect(h.person.letters.find((l) => l.char === 'ء')?.counted).toBe(false);
  });

  it('a remainder of 0 counts as the last position (Water / Pisces / 28)', () => {
    // 4 → Water (tabʿ), 12 → Pisces (burj), 28 → station 28
    expect(computeHisab('د', undefined)!.tabi.index).toBe(4);
    expect(computeHisab('يب', undefined)!.burj.index).toBe(12);
    expect(computeHisab('كح', undefined)!.manzil.index).toBe(28);
  });
});
