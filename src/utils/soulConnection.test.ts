import { describe, it, expect } from 'vitest';
import { calculateSoulNumber, calculateSoulConnection } from './soulConnection';
import { SOUL_CONNECTION_ARCHETYPES, SOUL_CONNECTION_SEVERITY_GROUPS, getSoulConnectionSeverity } from '../constants/soulConnectionArchetypes';

describe('calculateSoulNumber', () => {
  it('matches the mobile app reference example: محتار(649) + زينب(122) + 7 = 778, 778 mod 9 = 4', () => {
    expect(calculateSoulNumber(649, 122)).toBe(4);
  });

  it('maps a zero remainder to 9, never 0', () => {
    // Find a pair whose (k1+k2+7) is exactly divisible by 9.
    // 1 + 1 + 7 = 9 -> 9 mod 9 = 0 -> should become 9.
    expect(calculateSoulNumber(1, 1)).toBe(9);
  });

  it('always returns a value in 1-9 for a range of inputs', () => {
    for (let k1 = 0; k1 < 50; k1++) {
      for (let k2 = 0; k2 < 50; k2 += 7) {
        const n = calculateSoulNumber(k1, k2);
        expect(n).toBeGreaterThanOrEqual(1);
        expect(n).toBeLessThanOrEqual(9);
      }
    }
  });

  it('is order-independent (kabir1, kabir2) since addition commutes', () => {
    expect(calculateSoulNumber(649, 122)).toBe(calculateSoulNumber(122, 649));
  });
});

describe('calculateSoulConnection', () => {
  it('returns the full result shape with the correct soul number and severity', () => {
    const result = calculateSoulConnection('A', 'محتار', 649, 'B', 'زينب', 122);
    expect(result.mode).toBe('soul-connection');
    expect(result.soulNumber).toBe(4);
    expect(result.severity).toBe('red'); // 4 is in the red group
    expect(result.person1.kabir).toBe(649);
    expect(result.person2.kabir).toBe(122);
  });

  it('is deterministic for the same input', () => {
    const a = calculateSoulConnection('A', 'أحمد', 100, 'B', 'فاطمة', 200);
    const b = calculateSoulConnection('A', 'أحمد', 100, 'B', 'فاطمة', 200);
    expect(a.soulNumber).toBe(b.soulNumber);
    expect(a.severity).toBe(b.severity);
  });
});

describe('SOUL_CONNECTION_ARCHETYPES data completeness', () => {
  it('has exactly 9 archetypes, numbered 1-9', () => {
    const keys = Object.keys(SOUL_CONNECTION_ARCHETYPES).map(Number).sort((a, b) => a - b);
    expect(keys).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9]);
  });

  it('every archetype has non-empty EN and FR text for every field', () => {
    for (let n = 1; n <= 9; n++) {
      const a = SOUL_CONNECTION_ARCHETYPES[n];
      expect(a.number).toBe(n);
      for (const field of ['title', 'oneLine', 'watchOut', 'keyToSuccess'] as const) {
        expect(a[field].en.length).toBeGreaterThan(0);
        expect(a[field].fr.length).toBeGreaterThan(0);
      }
      for (const ctx of ['universal', 'marriage', 'friendship', 'family', 'work'] as const) {
        expect(a.meaning[ctx].en.length).toBeGreaterThan(0);
        expect(a.meaning[ctx].fr.length).toBeGreaterThan(0);
        expect(a.outlook[ctx].en.length).toBeGreaterThan(0);
        expect(a.outlook[ctx].fr.length).toBeGreaterThan(0);
      }
      expect(a.tags.length).toBeGreaterThan(0);
      for (const tag of a.tags) {
        expect(tag.en.length).toBeGreaterThan(0);
        expect(tag.fr.length).toBeGreaterThan(0);
      }
    }
  });

  it('non-marriage contexts never mention "marriage" or "mariage" (regression: meaning/outlook used to leak marriage-only wording into every context)', () => {
    const nonMarriageContexts = ['universal', 'friendship', 'family', 'work'] as const;
    for (let n = 1; n <= 9; n++) {
      const a = SOUL_CONNECTION_ARCHETYPES[n];
      for (const ctx of nonMarriageContexts) {
        for (const field of ['meaning', 'outlook'] as const) {
          expect(a[field][ctx].en.toLowerCase()).not.toContain('marriage');
          expect(a[field][ctx].fr.toLowerCase()).not.toContain('mariage');
        }
      }
    }
  });

  it('every number 1-9 is in exactly one severity group', () => {
    const allGrouped = [
      ...SOUL_CONNECTION_SEVERITY_GROUPS.green,
      ...SOUL_CONNECTION_SEVERITY_GROUPS.amber,
      ...SOUL_CONNECTION_SEVERITY_GROUPS.red,
    ].sort((a, b) => a - b);
    expect(allGrouped).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9]);
  });

  it('getSoulConnectionSeverity matches each archetype\'s own severity field', () => {
    for (let n = 1; n <= 9; n++) {
      expect(getSoulConnectionSeverity(n)).toBe(SOUL_CONNECTION_ARCHETYPES[n].severity);
    }
  });

  it('reference cases from the mobile app: 7 is green (best), 9 is red (warned against)', () => {
    expect(SOUL_CONNECTION_ARCHETYPES[7].severity).toBe('green');
    expect(SOUL_CONNECTION_ARCHETYPES[7].title.en).toBe('The Chosen Path');
    expect(SOUL_CONNECTION_ARCHETYPES[9].severity).toBe('red');
    expect(SOUL_CONNECTION_ARCHETYPES[9].title.en).toBe('The Severed Path');
  });
});
