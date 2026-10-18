/**
 * "Recite N times" practice counts follow the selected Abjad system (Maghribi by default):
 * N is the Name's abjad value in that system, on every surface that shows it.
 */
import { describe, expect, it } from 'vitest';
import fs from 'node:fs';
import path from 'node:path';
import React from 'react';
import { renderToString } from 'react-dom/server';

import { ABJAD_MAGHRIBI as M, ABJAD_MASHRIQI as E } from './abjad-maps';
import { AbjadContext, AbjadProvider } from '../contexts/AbjadContext';
import { DIVINE_NAMES, getDivineNames, getDivineNameForSystem, divineNameAbjadValue } from '../data/divine-names';
import { useDivineNames } from '../hooks/useDivineNames';
import { calculateDivineNameConnection, findBestDivineNameMatches } from '../utils/divineNameConnection';
import { makeCatalog } from '../components/i18n/ArabicDomTranslator';

const ROOT = path.resolve(__dirname, '../..');
const read = (p: string) => fs.readFileSync(path.join(ROOT, p), 'utf8');
const catalog = makeCatalog(JSON.parse(read('public/i18n/ar-ui.json')));
const DARR = 91;

const recite = (n: number) => new RegExp(`^Recite ${n} times\\b`);
const recitez = (n: number) => new RegExp(`^Récitez ${n} fois\\b`);
const arabicCount = (n: number) => new RegExp(`يُردَّد الاسم ${n} مرّة`);

function Probe() {
  const n = useDivineNames().find((x) => x.number === DARR)!;
  return React.createElement('span', null, `${n.abjadValue}|${n.spiritualPractice.en}|${n.spiritualPractice.fr}`);
}
const ctx = (system: 'Maghribi' | 'Mashriqi') => ({
  system,
  systemKey: system === 'Mashriqi' ? ('mashriqi' as const) : ('maghribi' as const),
  setSystem: () => {},
  abjad: system === 'Mashriqi' ? E : M,
});

describe('aḍ-Ḍārr: 291 under Maghribi, 1001 under Mashriqi', () => {
  it('data: value, EN and FR practice text', () => {
    const west = getDivineNameForSystem(DARR)!; // default = Maghribi
    const east = getDivineNameForSystem(DARR, E)!;
    expect(west.arabic).toBe('الضَّارُّ');
    expect([west.abjadValue, east.abjadValue]).toEqual([291, 1001]);
    expect(divineNameAbjadValue('الضَّارُّ', M)).toBe(291);
    expect(divineNameAbjadValue('الضَّارُّ', E)).toBe(1001);
    expect(west.spiritualPractice.en).toMatch(recite(291));
    expect(west.spiritualPractice.fr).toMatch(recitez(291));
    expect(east.spiritualPractice.en).toMatch(recite(1001));
    expect(east.spiritualPractice.fr).toMatch(recitez(1001));
  });

  it('Arabic catalog (/ar): the same sentence with the right count in both systems', () => {
    expect(catalog.get(getDivineNameForSystem(DARR, M)!.spiritualPractice.en)).toMatch(arabicCount(291));
    expect(catalog.get(getDivineNameForSystem(DARR, E)!.spiritualPractice.en)).toMatch(arabicCount(1001));
  });

  it('switching the app-wide system updates the list used by AllDivineNamesBrowser and DivineNamePicker', () => {
    const byDefault = renderToString(React.createElement(AbjadProvider, null, React.createElement(Probe)));
    expect(byDefault).toContain('291|Recite 291 times');
    expect(byDefault).toContain('Récitez 291 fois');
    for (const [system, n] of [['Maghribi', 291], ['Mashriqi', 1001]] as const) {
      const html = renderToString(React.createElement(AbjadContext.Provider, { value: ctx(system) }, React.createElement(Probe)));
      expect(html).toContain(`${n}|Recite ${n} times`);
      expect(html).toContain(`Récitez ${n} fois`);
    }
  });

  it('Divine Name connection and matches show the count of the selected system', () => {
    const picked = DIVINE_NAMES.find((n) => n.number === DARR)!; // stored list (Mashriqi values)
    for (const [abjad, n] of [[M, 291], [E, 1001]] as const) {
      const r = calculateDivineNameConnection('x', 'يوسف', 396, picked, abjad);
      expect(r.divineName.abjadValue).toBe(n);
      expect(r.divineName.spiritualPractice.en).toMatch(recite(n));
      const m = findBestDivineNameMatches(396, abjad).find((x) => x.divineName.number === DARR)!;
      expect(m.divineName.spiritualPractice.en).toMatch(recite(n));
    }
  });
});

describe('every Name, both systems', () => {
  it('the practice count is the Name value, in EN, FR and the Arabic catalog', () => {
    for (const abjad of [M, E]) {
      for (const n of getDivineNames(abjad)) {
        expect(n.spiritualPractice.en).toMatch(recite(n.abjadValue));
        expect(n.spiritualPractice.fr).toMatch(recitez(n.abjadValue));
        const ar = catalog.get(n.spiritualPractice.en);
        expect(ar, `${n.number} ${n.transliteration}`).toMatch(arabicCount(n.abjadValue));
      }
    }
  });

  it('the Names browser and picker take the system-aware list (no stored Mashriqi list)', () => {
    for (const f of ['src/components/AllDivineNamesBrowser.tsx', 'src/components/DivineNamePicker.tsx']) {
      const s = read(f);
      expect(s).not.toMatch(/\bDIVINE_NAMES\b/);
      expect(s).toContain('useDivineNames()');
    }
    for (const f of [
      'src/components/DivineNameIntentionResultView.tsx',
      'src/components/DivineNameIntentionMatchesView.tsx',
      'src/components/DivineNameIntentionForm.tsx',
      'src/components/DivineNameInputForm.tsx',
    ]) {
      expect(read(f)).toMatch(/<(AllDivineNamesBrowser|DivineNamePicker)[^>]*names=\{divineNames\}/);
    }
  });
});
