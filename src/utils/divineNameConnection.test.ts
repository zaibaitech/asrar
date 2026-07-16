import { describe, it, expect } from 'vitest';
import { calculateDivineNameConnection, findBestDivineNameMatches } from './divineNameConnection';
import { DIVINE_NAMES } from '../data/divine-names';
import { calculateSoulNumber } from './soulConnection';

describe('DIVINE_NAMES dataset completeness', () => {
  it('has exactly 99 names, numbered 1-99 with no gaps or duplicates', () => {
    const numbers = DIVINE_NAMES.map(n => n.number).sort((a, b) => a - b);
    expect(numbers).toEqual(Array.from({ length: 99 }, (_, i) => i + 1));
  });

  it('every name has a positive abjadValue and non-empty EN/FR text in every field', () => {
    for (const name of DIVINE_NAMES) {
      expect(name.abjadValue).toBeGreaterThan(0);
      expect(name.arabic.length).toBeGreaterThan(0);
      expect(name.transliteration.length).toBeGreaterThan(0);
      expect(name.translation.en.length).toBeGreaterThan(0);
      expect(name.translation.fr.length).toBeGreaterThan(0);
      expect(name.meaning.en.length).toBeGreaterThan(0);
      expect(name.meaning.fr.length).toBeGreaterThan(0);
      expect(name.spiritualPractice.en.length).toBeGreaterThan(0);
      expect(name.spiritualPractice.fr.length).toBeGreaterThan(0);
      expect(name.keywords.length).toBeGreaterThan(0);
    }
  });

  it('matches known reference abjad values already established elsewhere in the codebase', () => {
    // From src/lib/planetary/practice-hints.ts PLANET_DHIKR (independently authored) and
    // src/constants/soulConnectionArchetypes.ts's UNIVERSAL_DHIKR.
    const known: Record<string, number> = {
      'Ar-Raḥmān': 298,   // Yā Nūr's Sun-dhikr counterpart; Ar-Rahman itself
      'Al-Laṭīf': 129,
      'Ar-Razzāq': 308,
      'Al-Wadūd': 20,
      'Aṣ-Ṣabūr': 298,
      'An-Nūr': 256,
    };
    for (const [transliteration, expected] of Object.entries(known)) {
      const match = DIVINE_NAMES.find(n => n.transliteration === transliteration);
      expect(match, `expected to find ${transliteration} in the dataset`).toBeDefined();
      expect(match!.abjadValue).toBe(expected);
    }
  });

  it('every spiritualPractice states the Name\'s own abjad value as the recitation count (regression: 6 entries used to cite an unrelated round number like "100" or "40")', () => {
    for (const name of DIVINE_NAMES) {
      expect(
        name.spiritualPractice.en.includes(String(name.abjadValue)),
        `#${name.number} ${name.transliteration}: expected spiritualPractice.en to mention its own abjadValue (${name.abjadValue}), got: "${name.spiritualPractice.en}"`
      ).toBe(true);
      expect(
        name.spiritualPractice.fr.includes(String(name.abjadValue)),
        `#${name.number} ${name.transliteration}: expected spiritualPractice.fr to mention its own abjadValue (${name.abjadValue}), got: "${name.spiritualPractice.fr}"`
      ).toBe(true);
    }
  });
});

describe('calculateDivineNameConnection', () => {
  it('uses the exact same mod-9 formula as person-to-person Soul Connection', () => {
    const divineName = DIVINE_NAMES.find(n => n.number === 1)!; // Ar-Rahman, abjadValue 298
    const personKabir = 649; // same reference value used in soulConnection.test.ts
    const result = calculateDivineNameConnection('Test', 'اختبار', personKabir, divineName);
    expect(result.soulNumber).toBe(calculateSoulNumber(personKabir, divineName.abjadValue));
    expect(result.mode).toBe('divine-name-connection');
    expect(result.person.kabir).toBe(personKabir);
    expect(result.divineName).toBe(divineName);
  });

  it('never returns 0 — always maps to 9', () => {
    // Find a divine name + kabir combination where (kabir + abjad + 7) % 9 === 0
    const divineName = DIVINE_NAMES[0];
    const kabir = 9 - ((divineName.abjadValue + 7) % 9); // engineered to hit remainder 0
    const result = calculateDivineNameConnection('T', 'ت', kabir, divineName);
    expect(result.soulNumber).toBeGreaterThanOrEqual(1);
    expect(result.soulNumber).toBeLessThanOrEqual(9);
  });
});

describe('findBestDivineNameMatches', () => {
  it('returns all 99 names, sorted with green severity first', () => {
    const matches = findBestDivineNameMatches(649);
    expect(matches).toHaveLength(99);

    const severityOrder = matches.map(m => m.severity);
    const firstAmberIndex = severityOrder.indexOf('amber');
    const firstRedIndex = severityOrder.indexOf('red');
    const lastGreenIndex = severityOrder.lastIndexOf('green');

    if (firstAmberIndex !== -1 && lastGreenIndex !== -1) {
      expect(lastGreenIndex).toBeLessThan(firstAmberIndex);
    }
    if (firstRedIndex !== -1 && firstAmberIndex !== -1) {
      expect(firstAmberIndex).toBeLessThanOrEqual(firstRedIndex);
    }
  });

  it('every match is internally consistent with calculateDivineNameConnection', () => {
    const personKabir = 122;
    const matches = findBestDivineNameMatches(personKabir);
    for (const match of matches) {
      const direct = calculateDivineNameConnection('T', 'ت', personKabir, match.divineName);
      expect(match.soulNumber).toBe(direct.soulNumber);
      expect(match.severity).toBe(direct.severity);
    }
  });
});
