/**
 * One app-wide Abjad system (Maghribi by default, Mashriqi on request).
 *
 * - every tool's calculation takes the selected table and follows it,
 * - the default is Maghribi everywhere (functions, context, API),
 * - the choice is remembered (localStorage helpers),
 * - no typed-in letter table is left outside src/lib/abjad-maps.ts.
 */
import { describe, expect, it } from 'vitest';
import fs from 'node:fs';
import path from 'node:path';
import React from 'react';
import { renderToString } from 'react-dom/server';

import {
  ABJAD_MAGHRIBI as M,
  ABJAD_MASHRIQI as E,
  getAbjadMap,
  resolveAbjadSystem,
  abjadSystemOfMap,
} from './abjad-maps';
import {
  AbjadProvider,
  useAbjad,
  loadSavedAbjadSystem,
  saveAbjadSystem,
  ABJAD_SYSTEM_STORAGE_KEY,
} from '../contexts/AbjadContext';

// tools
import { analyzeText, computeNameInsights } from '../features/calculator/lib/textAnalysis';
import { getLetterBreakdown } from '../features/calculator/lib/coreCalculations';
import { computeDivineResonance } from '../features/calculator/lib/divineResonance';
import { DIVINE_NAMES as CALC_NAMES, getCalculatorDivineNames, nearestDivineNames } from '../features/calculator/lib/divineNames';
import { calculateIstikhara, recalculateIstikharaForSystem, calculateIstikharaFromBirthDate } from '../features/istikhara/calculations';
import { calculateSoulConnection, calculateAbjadTotal as soulTotal } from '../utils/soulConnection';
import { calculateDivineNameConnection, findBestDivineNameMatches } from '../utils/divineNameConnection';
import {
  DIVINE_NAME_METADATA,
  DIVINE_NAME_METADATA_MASHRIQI,
  getDivineNameMetadata,
  findDivineNameMetadataByNumber,
  calculateAbjadWithoutPrefix,
} from '../constants/divineNameCompatibilityData';
import { DIVINE_NAMES, getDivineNames, getDivineNameForSystem, divineNameAbjadValue } from '../data/divine-names';
import { analyzeNameDestiny, buildDestiny, calculateAbjadValue } from '../features/ilm-huruf/core';
import { calculateDivineNameResonance, calculateAbjadTotal as resonanceTotal, ABJAD_KABIR } from '../utils/divineNameResonance';
import * as enhanced from '../utils/enhancedLifePath';
import * as lifePath from '../utils/lifePathCalculator';
import { ABJAD as HADAD_ABJAD } from '../components/hadad-summary/hadad-core';
import { calculateSimpleDestiny } from './server-calculations';
import { analyzeFourLayerCompatibility } from '../utils/fourLayerCompatibility';

const sum = (s: string, t: Record<string, number>) => [...s].reduce((a, c) => a + (t[c] || 0), 0);

describe('shared table helpers', () => {
  it('resolves any input to a system, defaulting to Maghribi', () => {
    expect(resolveAbjadSystem(undefined)).toBe('maghribi');
    expect(resolveAbjadSystem('Maghribi')).toBe('maghribi');
    expect(resolveAbjadSystem('Mashriqi')).toBe('mashriqi');
    expect(resolveAbjadSystem('mashriqi')).toBe('mashriqi');
    expect(resolveAbjadSystem('nonsense')).toBe('maghribi');
    expect(getAbjadMap()).toBe(M);
    expect(getAbjadMap('mashriqi')).toBe(E);
    expect(abjadSystemOfMap(E)).toBe('mashriqi');
    expect(abjadSystemOfMap(M)).toBe('maghribi');
  });
});

describe('the choice: default Maghribi, remembered, shared', () => {
  it('server-renders Maghribi before any saved choice is read', () => {
    function Probe() {
      const { system, systemKey, abjad } = useAbjad();
      return React.createElement('span', null, `${system}|${systemKey}|${abjad === M ? 'M' : 'E'}`);
    }
    const html = renderToString(React.createElement(AbjadProvider, null, React.createElement(Probe)));
    expect(html).toContain('Maghribi|maghribi|M');
  });

  it('saves and loads the choice (localStorage key "abjadSystem")', () => {
    const store = new Map<string, string>();
    const storage = { getItem: (k: string) => store.get(k) ?? null, setItem: (k: string, v: string) => void store.set(k, v) };
    expect(loadSavedAbjadSystem(storage)).toBeNull(); // nothing saved → the Maghribi default
    saveAbjadSystem(storage, 'Mashriqi');
    expect(store.get(ABJAD_SYSTEM_STORAGE_KEY)).toBe('Mashriqi');
    expect(loadSavedAbjadSystem(storage)).toBe('Mashriqi');
    saveAbjadSystem(storage, 'Maghribi');
    expect(loadSavedAbjadSystem(storage)).toBe('Maghribi');
    store.set(ABJAD_SYSTEM_STORAGE_KEY, 'garbage');
    expect(loadSavedAbjadSystem(storage)).toBeNull();
    // storage that throws (private mode) never breaks the app
    const broken = { getItem: () => { throw new Error('x'); }, setItem: () => { throw new Error('x'); } };
    expect(loadSavedAbjadSystem(broken)).toBeNull();
    expect(() => saveAbjadSystem(broken, 'Mashriqi')).not.toThrow();
  });
});

// يوسف: Maghribi 396, Mashriqi 156. حسن: 358 / 118. محمد: 92 in both.
describe('every tool follows the selected table (default Maghribi)', () => {
  it('Abjad calculator', () => {
    expect(analyzeText('يوسف')!.kabir).toBe(396);
    expect(analyzeText('يوسف', M)!.kabir).toBe(396);
    const east = analyzeText('يوسف', E)!;
    expect(east.kabir).toBe(156);
    expect(east.system).toBe('mashriqi');
    expect(east.letterFrequency.find((f) => f.letter === 'س')!.value).toBe(60);
    expect(analyzeText('يوسف')!.letterFrequency.find((f) => f.letter === 'س')!.value).toBe(300);
    expect(getLetterBreakdown('يوسف', E).map((l) => l.value)).toEqual([10, 6, 60, 80]);
    // divine-name matches use the same system as the profile
    const insE = computeNameInsights(east);
    for (const m of insE.divineNameMatches) expect(m.abjadValue).toBe(sum(m.arabic.replace(/[\u064B-\u0652\u0670\u0640\s]/g, ''), E));
    const eastValues = new Set(getCalculatorDivineNames(E).map((n) => n.abjadValue));
    for (const m of nearestDivineNames(156, 3, E)) expect(eastValues.has(m.abjadValue)).toBe(true);
  });

  it('calculator Divine Names: Mashriqi reproduces the stored values except the five hamza-seat Names', () => {
    const east = getCalculatorDivineNames(E);
    const changed = east.filter((n, i) => n.abjadValue !== CALC_NAMES[i].abjadValue).map((n) => n.number);
    expect(changed).toEqual([6, 12, 58, 72, 83]); // المؤمن البارئ المبدئ المؤخر الرؤوف: hamza seat now counted (#88 rule)
    expect(getCalculatorDivineNames().find((n) => n.number === 88)!.abjadValue).toBe(991); // الغني: غ 900 in Maghribi
  });

  it('Divine Name resonance (calculator and ʿilm al-ḥurūf)', () => {
    expect(computeDivineResonance('يوسف', E)!.total).toBe(156);
    expect(computeDivineResonance('يوسف')!.total).toBe(396);
    expect(calculateDivineNameResonance('يوسف', E)!.abjadTotal).toBe(156);
    expect(calculateDivineNameResonance('يوسف')!.abjadTotal).toBe(396);
    expect(resonanceTotal('يوسف')).toBe(396);
    expect(ABJAD_KABIR).toBe(E);
  });

  it('burj from name and mother (Istikhara)', () => {
    const west = calculateIstikhara('يوسف', 'فاطمة');
    expect([west.personTotal, west.motherTotal]).toEqual([396, 135]);
    const east = recalculateIstikharaForSystem(west, E);
    expect([east.personTotal, east.motherTotal]).toEqual([156, 135]);
    expect(east.burujRemainder).toBe((156 + 135) % 12 || 12);
    expect(recalculateIstikharaForSystem(east, M)).toEqual(west);
    const dob = calculateIstikharaFromBirthDate('1990-05-17');
    expect(recalculateIstikharaForSystem(dob, E)).toBe(dob); // birth-date results don't total letters
  });

  it('compatibility: soul connection and four-layer', () => {
    const k = (s: string, t: Record<string, number>) => soulTotal(s, t);
    const west = calculateSoulConnection('a', 'يوسف', k('يوسف', M), 'b', 'حسن', k('حسن', M));
    const east = calculateSoulConnection('a', 'يوسف', k('يوسف', E), 'b', 'حسن', k('حسن', E));
    expect([west.person1.kabir, west.person2.kabir]).toEqual([396, 358]);
    expect([east.person1.kabir, east.person2.kabir]).toEqual([156, 118]);
    const fw = analyzeFourLayerCompatibility('a', 'يوسف', 'فاطمة', 'b', 'حسن', 'زينب', M);
    const fe = analyzeFourLayerCompatibility('a', 'يوسف', 'فاطمة', 'b', 'حسن', 'زينب', E);
    expect(JSON.stringify(fw)).not.toEqual(JSON.stringify(fe));
  });

  it('divine-name compatibility: Name values, matches and intention metadata follow the system', () => {
    const salam = DIVINE_NAMES.find((n) => n.transliteration.includes('Salām'))!;
    const west = calculateDivineNameConnection('a', 'يوسف', 396, salam);
    const east = calculateDivineNameConnection('a', 'يوسف', 156, salam, E);
    expect(east.divineName.abjadValue).toBe(salam.abjadValue); // stored values are Mashriqi
    expect(west.divineName.abjadValue).toBe(divineNameAbjadValue(salam.arabic, M));
    expect(west.divineName.abjadValue).not.toBe(east.divineName.abjadValue);
    const mWest = findBestDivineNameMatches(396);
    const mEast = findBestDivineNameMatches(156, E);
    expect(mWest.find((x) => x.divineName.number === salam.number)!.divineName.abjadValue).toBe(west.divineName.abjadValue);
    expect(mEast.find((x) => x.divineName.number === salam.number)!.divineName.abjadValue).toBe(salam.abjadValue);
    expect(getDivineNameMetadata()).toBe(DIVINE_NAME_METADATA);
    expect(getDivineNameMetadata(E)).toBe(DIVINE_NAME_METADATA_MASHRIQI);
    expect(findDivineNameMetadataByNumber(salam.number, E)!.abjadValue).toBe(calculateAbjadWithoutPrefix(salam.arabic, E));
    expect(findDivineNameMetadataByNumber(salam.number)!.abjadValue).toBe(calculateAbjadWithoutPrefix(salam.arabic, M));
  });

  it('Divine Names data: Mashriqi reproduces every stored value and practice count; Maghribi updates both', () => {
    const east = getDivineNames(E);
    east.forEach((n, i) => {
      expect(n.abjadValue).toBe(DIVINE_NAMES[i].abjadValue);
      expect(n.spiritualPractice).toEqual(DIVINE_NAMES[i].spiritualPractice);
    });
    for (const n of getDivineNames()) {
      expect(n.abjadValue).toBe(divineNameAbjadValue(n.arabic, M));
      expect(n.spiritualPractice.en).toContain(`Recite ${n.abjadValue} times`);
      expect(n.spiritualPractice.fr).toContain(`Récitez ${n.abjadValue} fois`);
    }
    expect(getDivineNameForSystem(1)).toBe(getDivineNames()[0]);
  });

  it('ʿilm al-ḥurūf panel: name destiny, mother, buildDestiny', () => {
    expect(calculateAbjadValue('يوسف')).toBe(396);
    expect(calculateAbjadValue('يوسف', E)).toBe(156);
    expect(analyzeNameDestiny('يوسف', E).kabir).toBe(156);
    const d = buildDestiny('يوسف', 'فاطمة', E);
    expect([d.personKabir, d.motherKabir, d.totalKabir]).toEqual([156, 135, 291]);
    expect(buildDestiny('يوسف', 'فاطمة').totalKabir).toBe(531);
    // buildDestiny loads the resonance module lazily (require), which vitest's ESM
    // runner can't resolve; the module itself is tested above, the wiring here.
    expect(fs.readFileSync(path.join(ROOT, 'src/features/ilm-huruf/core.ts'), 'utf8')).toContain(
      'calculateDivineNameResonance(personName, abjad)'
    );
  });

  it('life path numbers (enhanced and simple calculators), same formulas', () => {
    const r = (n: number) => lifePath.reduceToSingleDigit(n);
    expect(enhanced.calculateAbjadTotal('يوسف')).toBe(396);
    expect(enhanced.calculateAbjadTotal('يوسف', E)).toBe(156);
    expect(enhanced.calculateExpressionNumber('يوسف', E)).toBe(r(156));
    expect(enhanced.calculateExpressionNumber('يوسف')).toBe(r(396));
    expect(lifePath.calculateExpressionNumber('يوسف', E)).toBe(r(156));
    expect(lifePath.calculateExpressionNumber('يوسف')).toBe(r(396));
    const all = enhanced.calculateEnhancedLifePath('يوسف', new Date('1990-05-17'), undefined, 'فاطمة', E);
    expect(all.expressionNumber).toBe(r(156));
    expect(all.maternalInfluence).toBe(enhanced.calculateMaternalInfluence('يوسف', 'فاطمة', E));
    expect(lifePath.calculateAllLifePathNumbers('يوسف', 'فاطمة', '', new Date('1990-05-17'), E).expressionNumber).toBe(r(156));
    // names without the six differing letters are the same in both systems
    expect(enhanced.calculateExpressionNumber('محمد')).toBe(enhanced.calculateExpressionNumber('محمد', E));
  });

  it('hadad-core table and server calculations use the shared table', () => {
    expect(HADAD_ABJAD).toBe(M);
    expect(calculateSimpleDestiny('يوسف').kabir).toBe(396);
    expect(calculateSimpleDestiny('يوسف', undefined, E).kabir).toBe(156);
  });
});

// ---------------------------------------------------------------------------
// API routes accept abjadSystem and default to Maghribi
// ---------------------------------------------------------------------------
async function post(mod: { POST: (r: any) => Promise<Response> }, body: unknown) {
  const res = await mod.POST(new Request('http://x/api', { method: 'POST', body: JSON.stringify(body), headers: { 'content-type': 'application/json' } }) as any);
  return { status: res.status, json: (await res.json()) as any };
}

describe('API routes: abjadSystem parameter, default Maghribi', () => {
  it('istikhara', async () => {
    const mod = await import('../../app/api/v1/istikhara/route');
    const def = await post(mod, { personName: 'يوسف', motherName: 'فاطمة' });
    const east = await post(mod, { personName: 'يوسف', motherName: 'فاطمة', abjadSystem: 'mashriqi' });
    expect(def.json.data.personTotal).toBe(396);
    expect(east.json.data.personTotal).toBe(156);
    expect((await post(mod, { personName: 'يوسف', motherName: 'فاطمة', abjadSystem: 'x' })).status).toBe(400);
  });

  it('compatibility', async () => {
    const mod = await import('../../app/api/v1/compatibility/route');
    const body = { person1: { name: 'يوسف' }, person2: { name: 'حسن' }, analysisMode: 'basic' };
    const def = await post(mod, body);
    const west = await post(mod, { ...body, abjadSystem: 'maghribi' });
    const east = await post(mod, { ...body, abjadSystem: 'mashriqi' });
    expect(def.status).toBe(200);
    expect(JSON.stringify(def.json.data)).toBe(JSON.stringify(west.json.data));
    expect(JSON.stringify(east.json.data)).not.toBe(JSON.stringify(west.json.data));
    expect((await post(mod, { ...body, abjadSystem: 'x' })).status).toBe(400);
  });

  it('name-destiny (core and life path numbers)', async () => {
    const mod = await import('../../app/api/v1/name-destiny/route');
    const def = await post(mod, { name: 'يوسف', birthDate: '1990-05-17' });
    const east = await post(mod, { name: 'يوسف', birthDate: '1990-05-17', abjadSystem: 'mashriqi' });
    expect(def.json.data.kabir).toBe(396);
    expect(east.json.data.kabir).toBe(156);
    expect(def.json.data.lifePathNumbers.expressionNumber).toBe(lifePath.reduceToSingleDigit(396));
    expect(east.json.data.lifePathNumbers.expressionNumber).toBe(lifePath.reduceToSingleDigit(156));
  });

  it('divine-timing validates abjadSystem', async () => {
    const mod = await import('../../app/api/v1/divine-timing/route');
    expect((await post(mod, { name: 'يوسف', abjadSystem: 'x' })).status).toBe(400);
    expect((await post(mod, { name: 'يوسف', abjadSystem: 'mashriqi' })).status).toBe(200);
  });
});

// ---------------------------------------------------------------------------
// Inventory guards
// ---------------------------------------------------------------------------
const ROOT = path.resolve(__dirname, '../..');
function walk(dir: string, out: string[] = []): string[] {
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    if (['node_modules', '.next', 'archive'].includes(e.name)) continue;
    const p = path.join(dir, e.name);
    if (e.isDirectory()) walk(p, out);
    else if (/\.(ts|tsx)$/.test(e.name) && !/\.test\.ts$/.test(e.name)) out.push(p);
  }
  return out;
}

describe('inventory guards', () => {
  it('no typed-in Abjad letter table outside src/lib/abjad-maps.ts', () => {
    const typed = /['"]غ['"]\s*:\s*(1000|900)\b/;
    const offenders = [...walk(path.join(ROOT, 'src')), ...walk(path.join(ROOT, 'app'))]
      .filter((f) => !f.endsWith(path.join('src', 'lib', 'abjad-maps.ts')))
      .filter((f) => typed.test(fs.readFileSync(f, 'utf8')))
      .map((f) => path.relative(ROOT, f));
    expect(offenders).toEqual([]);
  });

  it('every client calculator reads the app-wide system', () => {
    const files = [
      'src/features/calculator/components/CalculatorTypeForm.tsx',
      'src/features/calculator/components/QuranVerseResult.tsx',
      'src/features/calculator/components/ResonanceResult.tsx',
      'src/features/calculator/components/DivineNamePicker.tsx',
      'src/features/istikhara/components/IstikharaForm.tsx',
      'src/features/istikhara/components/IstikharaPanel.tsx',
      'src/features/compatibility/CompatibilityPanel.tsx',
      'src/components/DivineNameMatchesView.tsx',
      'src/components/SoulConnectionView.tsx',
      'src/features/ilm-huruf/IlmHurufPanel.tsx',
    ];
    for (const f of files) expect(fs.readFileSync(path.join(ROOT, f), 'utf8'), f).toMatch(/useAbjad\(\)/);
  });

  it('the shared selector sits next to the /abjad, /compatibility and burj calculators', () => {
    for (const f of ['app/(site)/abjad/AbjadCalculator.tsx', 'app/(site)/compatibility/page.tsx', 'app/(site)/name-and-mother-burj/BurjCalculator.tsx']) {
      expect(fs.readFileSync(path.join(ROOT, f), 'utf8'), f).toContain('<AbjadSystemSelector compact');
    }
  });
});

describe('static SEO copy matches the Maghribi default', () => {
  const root = path.resolve(__dirname, '..', '..');
  const src = (rel: string) => fs.readFileSync(path.join(root, rel), 'utf8');

  it('no page says ghayn is the 1000 letter without naming the Mashriqi order', () => {
    for (const rel of ['app/(site)/abjad/page.tsx', 'app/(ar)/ar/abjad/page.tsx', 'app/(site)/names/page.tsx', 'src/lib/i18n/urPages.ts']) {
      const text = src(rel);
      expect(text, rel).not.toMatch(/up to ghayn (at )?1000\.|jusqu\\'à ghayn à 1000\.|حتى الغين 1000\.|غ 1000 تک۔|… ghayn 1000\)/);
      expect(text, rel).toMatch(/shīn (at )?1000|shīn, worth 1000|الشين وقيمتها 1000|شین \(ش\) ہے جس کی قیمت 1000|shīn à 1000/);
    }
  });

  it('region wording: Maghribi is the Maghreb/al-Andalus/West Africa, never "North Africa"', () => {
    const files = [
      'src/lib/i18n/en.ts', 'src/lib/i18n/fr.ts', 'src/lib/i18n/ar.ts', 'src/lib/i18n/urPages.ts',
      'src/components/AbjadSystemSelector.tsx', 'src/components/GlossaryModal.tsx',
      'app/(site)/abjad/page.tsx', 'app/(ar)/ar/abjad/page.tsx', 'app/(site)/compatibility/page.tsx',
      'src/features/ilm-huruf/education/NameDestinyLearningCenter.tsx',
      'src/features/ilm-huruf/education/NameDestinyGlossary.tsx',
      'scripts/i18n/ur/catalog_source.py',
    ];
    for (const rel of files) {
      expect(src(rel), rel).not.toMatch(/North(ern)?[ /&-]*(and |& )?(West )?Africa|Afrique du Nord|شمال أفريقيا|شمالی (و|اور) مغربی افریقہ|شمالی افریقی/);
    }
    expect(src('src/lib/i18n/en.ts')).toContain('Maghribi (the Maghreb, al-Andalus & West Africa) · Mashriqi (Egypt, the Middle East & Asia)');
  });

  it('Name Destiny learning centre shows the shared Maghribi table', () => {
    const lc = src('src/features/ilm-huruf/education/NameDestinyLearningCenter.tsx');
    for (const v of ['ص=60*', 'ض=90*', 'س=300*', 'ظ=800*', 'غ=900*', 'ش=1000*']) expect(lc).toContain(v);
    expect(lc).not.toMatch(/ص=300|ش=300,|غ=1000<|س=60,/);
  });

  it('/99-names-of-allah lists Maghribi values and states the table', () => {
    const page = src('app/(site)/99-names-of-allah/page.tsx');
    expect(page).toMatch(/getDivineNames\(ABJAD_MAGHRIBI\)/);
    expect(page).not.toMatch(/standard Mashriqi table|and use the Mashriqi table\./);
    // الصبور (99) without "al-": Maghribi 268, Mashriqi 298 (the stored value)
    expect(getDivineNameForSystem(99, M)?.abjadValue).toBe(268);
    expect(getDivineNameForSystem(99, E)?.abjadValue).toBe(DIVINE_NAMES.find((n) => n.number === 99)?.abjadValue);
  });
});
