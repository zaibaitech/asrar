import { describe, it, expect } from 'vitest';
import * as Astronomy from 'astronomy-engine';
import { computeBirthProfile } from './birthProfile';

function normDeg(d: number): number {
  const x = d % 360;
  return x < 0 ? x + 360 : x;
}

function circularDiff(a: number, b: number): number {
  const x = normDeg(a - b);
  return Math.min(x, 360 - x);
}

/**
 * Independent ground truth for the Ascendant: scan the ecliptic (latitude
 * 0) for where astronomy-engine's own (trusted) Horizon() altitude crosses
 * zero on the eastern side (azimuth 0-180, N=0/E=90/S=180 convention).
 * This exists because the closed-form RAMC/obliquity formula this module
 * uses is easy to get exactly backwards (ascendant vs descendant) without
 * an external check — see the comment on ascendantLongitude() in
 * birthProfile.ts for the bug this caught.
 */
function findAscendantByScan(utcDate: Date, latitude: number, longitude: number, obliquityDeg: number): number | null {
  const observer = new Astronomy.Observer(latitude, longitude, 0);
  const obliquityRad = (obliquityDeg * Math.PI) / 180;

  function altAz(lonDeg: number) {
    const lam = (lonDeg * Math.PI) / 180;
    const decDeg = (Math.asin(Math.sin(obliquityRad) * Math.sin(lam)) * 180) / Math.PI;
    const raDeg = (Math.atan2(Math.cos(obliquityRad) * Math.sin(lam), Math.cos(lam)) * 180) / Math.PI;
    const raHours = ((raDeg / 15) + 24) % 24;
    const hor = Astronomy.Horizon(utcDate, observer, raHours, decDeg, 'normal');
    return { altitude: hor.altitude, azimuth: hor.azimuth };
  }

  const samples: { lon: number; altitude: number; azimuth: number }[] = [];
  for (let lon = 0; lon < 360; lon += 0.1) samples.push({ lon, ...altAz(lon) });

  for (let i = 0; i < samples.length; i++) {
    const a = samples[i];
    const b = samples[(i + 1) % samples.length];
    if ((a.altitude < 0) !== (b.altitude < 0)) {
      const t = a.altitude / (a.altitude - b.altitude);
      const lon = normDeg(a.lon + t * 0.1);
      const az = t < 0.5 ? a.azimuth : b.azimuth;
      if (az > 0 && az < 180) return lon;
    }
  }
  return null;
}

describe('computeBirthProfile — Ascendant/Descendant', () => {
  it('matches an independent horizon-scan ground truth (Gambia, 2026-01-30 20:00 UTC+0)', () => {
    const utcDate = new Date(Date.UTC(2026, 0, 30, 20, 0, 0));
    const trueAsc = findAscendantByScan(utcDate, 13.437, -16.6812, 23.4392911);
    const r = computeBirthProfile({
      dateOfBirth: new Date(2026, 0, 30),
      timeOfBirth: { hour: 20, minute: 0 },
      timeKnown: true,
      latitude: 13.437,
      longitude: -16.6812,
      timezone: 'Africa/Banjul',
    });
    expect(trueAsc).not.toBeNull();
    expect(circularDiff(r.ascendant!.longitude, trueAsc!)).toBeLessThan(2);
    expect(r.ascendant?.sign).toBe('leo');
  });

  it('matches on a second, unrelated case (Casablanca, 1990-03-21 14:30 UTC+0)', () => {
    const utcDate = new Date(Date.UTC(1990, 2, 21, 14, 30, 0));
    const trueAsc = findAscendantByScan(utcDate, 33.5731, -7.5898, 23.4406);
    const r = computeBirthProfile({
      dateOfBirth: new Date(1990, 2, 21),
      timeOfBirth: { hour: 14, minute: 30 },
      timeKnown: true,
      latitude: 33.5731,
      longitude: -7.5898,
      timezone: 'Africa/Casablanca',
    });
    expect(trueAsc).not.toBeNull();
    expect(circularDiff(r.ascendant!.longitude, trueAsc!)).toBeLessThan(2);
  });

  it('descendant is always exactly 180deg from ascendant', () => {
    const r = computeBirthProfile({
      dateOfBirth: new Date(2026, 0, 30),
      timeOfBirth: { hour: 20, minute: 0 },
      timeKnown: true,
      latitude: 13.437,
      longitude: -16.6812,
      timezone: 'Africa/Banjul',
    });
    expect(normDeg(r.descendant!.longitude - r.ascendant!.longitude)).toBeCloseTo(180, 5);
  });

  it('are null when the time of birth is not known', () => {
    const r = computeBirthProfile({
      dateOfBirth: new Date(1990, 2, 21),
      timeKnown: false,
      latitude: 33.5731,
      longitude: -7.5898,
      timezone: 'Africa/Casablanca',
    });
    expect(r.ascendant).toBeNull();
    expect(r.descendant).toBeNull();
  });
});

describe('computeBirthProfile — general shape', () => {
  it('returns all 7 classical planets with a dignity result each', () => {
    const r = computeBirthProfile({
      dateOfBirth: new Date(1990, 2, 21),
      timeKnown: false,
      latitude: 33.5731,
      longitude: -7.5898,
      timezone: 'Africa/Casablanca',
    });
    expect(r.planets).toHaveLength(7);
    for (const entry of r.planets) {
      expect(entry.dignity.totalScore).toBeGreaterThanOrEqual(-10);
      expect(entry.dignity.totalScore).toBeLessThanOrEqual(10);
    }
    expect(r.sun.position.sign).toBe('aries'); // March 21 is right at the Aries ingress
    expect(['fire', 'water', 'air', 'earth']).toContain(r.dominantElement);
    expect(r.planets.map((p) => p.planet)).toContain(r.dominantPlanet);
  });
});
