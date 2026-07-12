import { describe, it, expect } from 'vitest';
import { getPlanetPosition, getMoonElongation, getMoonSunSeparation, getMoonPhaseDirection, angleDiff } from './ephemeris';

const EDINBURGH = { lat: 55.95, lon: -3.19 };

describe('getPlanetPosition', () => {
  it('places the Moon in Cancer on 2026-07-13 (Edinburgh, BST)', () => {
    const d = new Date('2026-07-13T12:00:00+01:00');
    const moon = getPlanetPosition('Moon', d);
    expect(moon.sign).toBe('cancer');
    expect(moon.degreeInSign).toBeGreaterThan(0);
    expect(moon.degreeInSign).toBeLessThan(15.5);
  });

  it('computes Saturn near 14.6° Aries on 2026-07-13', () => {
    const d = new Date('2026-07-13T12:00:00+01:00');
    const saturn = getPlanetPosition('Saturn', d);
    expect(saturn.sign).toBe('aries');
    expect(saturn.degreeInSign).toBeGreaterThan(14);
    expect(saturn.degreeInSign).toBeLessThan(15);
  });

  it('places the Moon in Libra on 2026-07-20 (via combusta band)', () => {
    const d = new Date('2026-07-20T12:00:00+01:00');
    const moon = getPlanetPosition('Moon', d);
    expect(moon.sign).toBe('libra');
    expect(moon.longitude).toBeGreaterThanOrEqual(195);
    expect(moon.longitude).toBeLessThan(225);
  });

  it('is deterministic for the same input', () => {
    const d = new Date('2026-07-13T12:00:00+01:00');
    const a = getPlanetPosition('Venus', d);
    const b = getPlanetPosition('Venus', d);
    expect(a.longitude).toBe(b.longitude);
    expect(a.isRetrograde).toBe(b.isRetrograde);
  });
});

describe('getMoonElongation / separation / phase direction', () => {
  it('is in the dark-moon band (315-360) all day on 2026-07-13', () => {
    for (const h of [0, 6, 12, 18, 23]) {
      const d = new Date(`2026-07-13T${String(h).padStart(2, '0')}:00:00+01:00`);
      const elong = getMoonElongation(d);
      expect(elong).toBeGreaterThanOrEqual(315);
      expect(elong).toBeLessThanOrEqual(360);
      expect(getMoonPhaseDirection(d)).toBe('waning');
    }
  });

  it('moves from under-the-beams toward combustion through 2026-07-13', () => {
    const morning = getMoonSunSeparation(new Date('2026-07-13T06:00:00+01:00'));
    const night = getMoonSunSeparation(new Date('2026-07-13T23:00:00+01:00'));
    expect(morning).toBeGreaterThan(8.5);
    expect(night).toBeLessThan(8.5);
    expect(night).toBeLessThan(morning);
  });

  it('is waxing with elongation ~78° at midday on 2026-07-20', () => {
    const d = new Date('2026-07-20T12:00:00+01:00');
    const elong = getMoonElongation(d);
    expect(getMoonPhaseDirection(d)).toBe('waxing');
    expect(elong).toBeGreaterThan(70);
    expect(elong).toBeLessThan(90);
  });

  it('clears the beams and waxes favorably by 2026-07-16 to 07-18', () => {
    for (const day of [16, 17, 18]) {
      const d = new Date(`2026-07-${day}T12:00:00+01:00`);
      expect(getMoonPhaseDirection(d)).toBe('waxing');
      const elong = getMoonElongation(d);
      expect(elong).toBeGreaterThan(17); // clear of beams
    }
  });
});

describe('angleDiff', () => {
  it('returns signed shortest angular difference', () => {
    expect(angleDiff(10, 350)).toBeCloseTo(20, 5);
    expect(angleDiff(350, 10)).toBeCloseTo(-20, 5);
    expect(angleDiff(180, 0)).toBeCloseTo(180, 5);
  });
});
