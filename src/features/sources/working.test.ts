import { describe, it, expect } from 'vitest';
import { buildWorking } from './working';
import { analyzeText } from '../calculator/lib/textAnalysis';
import { calculateIstikhara, getBurujData } from '../istikhara/calculations';
import { buildDestiny } from '../ilm-huruf/core';
import { ABJAD_MAGHRIBI, ABJAD_MASHRIQI } from '../../lib/abjad-maps';

/**
 * Consistency guard: the "Show the working" layer, /abjad, Who Am I and the
 * ilm-huruf panel must give the same kabīr, ṣaghīr, ṭabʿ and burj for the same
 * input under both abjad systems. If one of them is changed, this fails.
 */
const cases: [string, string | undefined][] = [
  ['محمد', undefined],
  ['فاطمة', 'خديجة'],
  ['عبد الرحمن', 'عائشة'],
  ['صالح', 'سارة'], // letters whose value differs between the two systems
  ['غشض', 'ظس'],
  ['أحمد', 'آمنة'],
  ['مَرْيَم', 'زينب'],
  ['يوسف', 'مريم'],
];

describe('working layer == live calculators', () => {
  for (const [sysName, table] of [['Maghribi', ABJAD_MAGHRIBI], ['Mashriqi', ABJAD_MASHRIQI]] as const) {
    for (const [name, mother] of cases) {
      it(`${sysName}: ${name}${mother ? ' + ' + mother : ''}`, () => {
        const w = buildWorking(name, mother, table)!;

        // /abjad (name only)
        const a = analyzeText(name, table)!;
        const wOnly = buildWorking(name, undefined, table)!;
        expect(wOnly.total).toBe(a.kabir);
        expect(wOnly.saghir).toBe(a.saghir);
        expect(wOnly.burj.index).toBe(a.burjIndex);
        expect(wOnly.tabi.element).toBe(a.element.toLowerCase());

        // Who Am I (needs the mother)
        if (mother) {
          const i = calculateIstikhara(name, mother, table);
          expect(w.person.kabir).toBe(i.personTotal);
          expect(w.mother!.kabir).toBe(i.motherTotal);
          expect(w.total).toBe(i.combinedTotal);
          expect(w.burj.index).toBe(i.burujRemainder);
          // Who Am I's burj element is the ṭabʿ (total ÷ 4): same thing, by construction.
          expect(getBurujData(i.burujRemainder).element).toBe(w.tabi.element);
        }

        // ilm-huruf panel
        const d = buildDestiny(name, mother, table);
        expect(w.total).toBe(d.totalKabir);
        expect(w.saghir).toBe(d.saghir);
        expect(w.burj.index).toBe(d.burjIdx);
        expect(w.tabi.names.en).toBe(d.element.en);
        expect(w.saghirChain[w.saghirChain.length - 1]).toBe(w.saghir);
      });
    }
  }

  it('returns null for empty or non-letter input and marks uncounted characters', () => {
    expect(buildWorking('', undefined)).toBeNull();
    expect(buildWorking('abc', undefined)).toBeNull();
    expect(buildWorking('ءآدم', undefined)!.person.letters.find((l) => l.char === 'ء')?.counted).toBe(false);
  });

  it('a remainder of 0 counts as the last position (burj 12)', () => {
    expect(buildWorking('يب', undefined)!.burj.index).toBe(12); // 12
  });
});
