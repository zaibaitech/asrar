import { describe, it, expect } from 'vitest';
import * as Astronomy from 'astronomy-engine';
import { getNearestEclipse } from './ephemeris';

/**
 * Ground-truth reimplementation of the original (pre-caching)
 * getNearestEclipse algorithm — searches fresh from `date - 200 days`
 * every call, with no caching. Used to verify the cached version
 * (ephemeris.ts) returns identical results, since eclipse timing
 * directly affects real scoring rules (eclipse-proximity is a hard-fail
 * in marriage.ts) and must not silently drift due to a caching bug.
 */
function getNearestEclipseUncached(date: Date) {
  const searchWindow = new Date(date.getTime() - 200 * 24 * 60 * 60 * 1000);
  const candidates: { kind: 'lunar' | 'solar'; peakDate: Date; hoursToNearestEclipse: number }[] = [];

  let lunar = Astronomy.SearchLunarEclipse(searchWindow);
  for (let i = 0; i < 6 && lunar; i++) {
    candidates.push({
      kind: 'lunar',
      peakDate: lunar.peak.date,
      hoursToNearestEclipse: (lunar.peak.date.getTime() - date.getTime()) / (1000 * 60 * 60),
    });
    if (lunar.peak.date.getTime() > date.getTime() + 200 * 24 * 60 * 60 * 1000) break;
    lunar = Astronomy.NextLunarEclipse(lunar.peak);
  }

  let solar = Astronomy.SearchGlobalSolarEclipse(searchWindow);
  for (let i = 0; i < 6 && solar; i++) {
    candidates.push({
      kind: 'solar',
      peakDate: solar.peak.date,
      hoursToNearestEclipse: (solar.peak.date.getTime() - date.getTime()) / (1000 * 60 * 60),
    });
    if (solar.peak.date.getTime() > date.getTime() + 200 * 24 * 60 * 60 * 1000) break;
    solar = Astronomy.NextGlobalSolarEclipse(solar.peak);
  }

  candidates.sort((a, b) => Math.abs(a.hoursToNearestEclipse) - Math.abs(b.hoursToNearestEclipse));
  return candidates[0];
}

describe('getNearestEclipse caching correctness', () => {
  it('matches the uncached ground truth across a spread of dates over several years', () => {
    // Spread across ~4 years, in irregular steps (not aligned to the
    // cache's refresh boundary) to exercise repeated cache hits, misses,
    // and re-anchoring.
    const dates = [
      new Date('2024-01-15T12:00:00Z'),
      new Date('2024-06-03T12:00:00Z'),
      new Date('2024-11-22T12:00:00Z'),
      new Date('2025-02-08T12:00:00Z'),
      new Date('2025-07-13T12:00:00Z'),
      new Date('2025-12-31T12:00:00Z'),
      new Date('2026-03-19T12:00:00Z'),
      new Date('2026-07-13T12:00:00Z'),
      new Date('2026-07-24T12:00:00Z'),
      new Date('2026-09-01T12:00:00Z'),
      new Date('2027-01-01T12:00:00Z'),
      new Date('2027-08-15T12:00:00Z'),
    ];

    for (const d of dates) {
      const expected = getNearestEclipseUncached(d);
      const actual = getNearestEclipse(d);
      expect(actual.kind).toBe(expected.kind);
      expect(actual.peakDate.getTime()).toBe(expected.peakDate.getTime());
      expect(actual.hoursToNearestEclipse).toBeCloseTo(expected.hoursToNearestEclipse, 5);
    }
  });

  it('matches the uncached ground truth for consecutive daily dates (simulating a range scan)', () => {
    // A 60-day consecutive run is enough to cross at least one cache
    // refresh boundary while staying fast.
    const start = new Date('2026-06-01T12:00:00Z');
    for (let i = 0; i < 60; i++) {
      const d = new Date(start.getTime() + i * 24 * 60 * 60 * 1000);
      const expected = getNearestEclipseUncached(d);
      const actual = getNearestEclipse(d);
      expect(actual.peakDate.getTime()).toBe(expected.peakDate.getTime());
      expect(actual.hoursToNearestEclipse).toBeCloseTo(expected.hoursToNearestEclipse, 5);
    }
  });

  it('matches when queried out of chronological order (cache must not assume monotonic dates)', () => {
    const dates = [
      new Date('2026-07-13T12:00:00Z'),
      new Date('2024-01-01T12:00:00Z'),
      new Date('2027-06-01T12:00:00Z'),
      new Date('2025-03-15T12:00:00Z'),
    ];
    for (const d of dates) {
      const expected = getNearestEclipseUncached(d);
      const actual = getNearestEclipse(d);
      expect(actual.peakDate.getTime()).toBe(expected.peakDate.getTime());
    }
  });
});
