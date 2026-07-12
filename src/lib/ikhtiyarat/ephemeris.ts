/**
 * Ikhtiyārāt Ephemeris — local, date-arbitrary planetary positions
 * ==================================================================
 * Unlike src/lib/planetary/ephemeris.ts (which fetches "now" from a
 * Supabase Edge Function → JPL Horizons, 1h-cached), electional astrology
 * needs to evaluate arbitrary past/future dates across month-long ranges.
 * That is a poor fit for a network-fetched "now" API, so this module
 * computes positions locally via `astronomy-engine` (already a dependency,
 * already used the same way for the Moon in src/lib/lunarMansions.ts).
 *
 * astronomy-engine accuracy for the Moon is sub-arcsecond and for the
 * major planets is within a few arcseconds of JPL Horizons — comfortably
 * inside the 0.01° target in the spec.
 *
 * IMPORTANT: everything here is time-varying by design (retrograde,
 * phase, applying aspects). Do NOT import this into
 * src/lib/planetary/dignities.ts or let its static domicile/exaltation
 * tables assume any of these values — see the historical bug fixed in
 * commits 2802e8e / 03a054a where a time-varying condition tier got
 * conflated with a static essential-dignity label. This module and the
 * static dignity tables must stay on opposite sides of that line.
 */

import * as Astronomy from 'astronomy-engine';
import { Planet, ZodiacSign } from '../planetary/types';

export const CLASSICAL_PLANETS: Planet[] = ['Sun', 'Moon', 'Mercury', 'Venus', 'Mars', 'Jupiter', 'Saturn'];

const ZODIAC_ORDER: ZodiacSign[] = [
  'aries', 'taurus', 'gemini', 'cancer', 'leo', 'virgo',
  'libra', 'scorpio', 'sagittarius', 'capricorn', 'aquarius', 'pisces',
];

/** A planet's real geocentric apparent ecliptic position at an instant. */
export interface PlanetPosition {
  planet: Planet;
  /** Apparent geocentric ecliptic longitude, 0-360, tropical. */
  longitude: number;
  sign: ZodiacSign;
  /** Degree within sign, 0-29.999... */
  degreeInSign: number;
  /** True instantaneous ecliptic longitude speed in deg/day (negative = retrograde). */
  speedDegPerDay: number;
  isRetrograde: boolean;
}

function normalizeDegrees(deg: number): number {
  const d = deg % 360;
  return d < 0 ? d + 360 : d;
}

/** Signed shortest angular difference a-b in range (-180, 180]. */
export function angleDiff(a: number, b: number): number {
  let d = normalizeDegrees(a - b);
  if (d > 180) d -= 360;
  return d;
}

function eclipticLongitudeOf(planet: Planet, date: Date): number {
  if (planet === 'Sun') {
    return normalizeDegrees(Astronomy.SunPosition(date).elon);
  }
  if (planet === 'Moon') {
    return normalizeDegrees(Astronomy.EclipticGeoMoon(date).lon);
  }
  const body = planet as Astronomy.Body;
  const eq = Astronomy.GeoVector(body, date, true);
  return normalizeDegrees(Astronomy.Ecliptic(eq).elon);
}

function signOf(longitude: number): { sign: ZodiacSign; degreeInSign: number } {
  const idx = Math.floor(longitude / 30) % 12;
  return { sign: ZODIAC_ORDER[idx], degreeInSign: longitude - idx * 30 };
}

/**
 * Instantaneous ecliptic longitude speed via central finite difference.
 * A 6-hour half-step is small relative to every classical planet's period
 * (including the Moon's ~13°/day motion) so this is stable and cheap.
 */
function speedDegPerDay(planet: Planet, date: Date): number {
  const halfStepMs = 6 * 60 * 60 * 1000;
  const before = new Date(date.getTime() - halfStepMs);
  const after = new Date(date.getTime() + halfStepMs);
  const lonBefore = eclipticLongitudeOf(planet, before);
  const lonAfter = eclipticLongitudeOf(planet, after);
  const stepDays = (2 * halfStepMs) / (1000 * 60 * 60 * 24);
  return angleDiff(lonAfter, lonBefore) / stepDays;
}

export function getPlanetPosition(planet: Planet, date: Date): PlanetPosition {
  const longitude = eclipticLongitudeOf(planet, date);
  const { sign, degreeInSign } = signOf(longitude);
  const speed = speedDegPerDay(planet, date);
  return {
    planet,
    longitude,
    sign,
    degreeInSign,
    speedDegPerDay: speed,
    isRetrograde: speed < 0,
  };
}

export function getAllPlanetPositions(date: Date): Record<Planet, PlanetPosition> {
  const result = {} as Record<Planet, PlanetPosition>;
  for (const planet of CLASSICAL_PLANETS) {
    result[planet] = getPlanetPosition(planet, date);
  }
  return result;
}

/** Moon's elongation from the Sun, 0-360, measured eastward (0 = new moon, 180 = full moon). */
export function getMoonElongation(date: Date): number {
  const sun = eclipticLongitudeOf('Sun', date);
  const moon = eclipticLongitudeOf('Moon', date);
  return normalizeDegrees(moon - sun);
}

export type MoonPhaseDirection = 'waxing' | 'waning';

/** Elongation 0-180 = waxing (moving away from conjunction toward full); 180-360 = waning. */
export function getMoonPhaseDirection(date: Date): MoonPhaseDirection {
  return getMoonElongation(date) < 180 ? 'waxing' : 'waning';
}

/** Unsigned angular separation between Moon and Sun (0-180), for combustion/beams checks. */
export function getMoonSunSeparation(date: Date): number {
  const elong = getMoonElongation(date);
  return elong <= 180 ? elong : 360 - elong;
}

export interface EclipseProximity {
  /** Hours to the nearest lunar or solar eclipse peak (signed: negative = in the past). */
  hoursToNearestEclipse: number;
  kind: 'lunar' | 'solar';
  peakDate: Date;
}

/**
 * Finds the nearest lunar/solar eclipse to `date` by searching both
 * forward and (via a lookback window) backward, returning whichever is closer.
 */
export function getNearestEclipse(date: Date): EclipseProximity {
  const searchWindow = new Date(date.getTime() - 200 * 24 * 60 * 60 * 1000);

  const nextLunar = Astronomy.SearchLunarEclipse(searchWindow);
  const nextSolar = Astronomy.SearchGlobalSolarEclipse(searchWindow);

  const candidates: EclipseProximity[] = [];

  let lunar = nextLunar;
  for (let i = 0; i < 6 && lunar; i++) {
    candidates.push({
      kind: 'lunar',
      peakDate: lunar.peak.date,
      hoursToNearestEclipse: (lunar.peak.date.getTime() - date.getTime()) / (1000 * 60 * 60),
    });
    if (lunar.peak.date.getTime() > date.getTime() + 200 * 24 * 60 * 60 * 1000) break;
    lunar = Astronomy.NextLunarEclipse(lunar.peak);
  }

  let solar = nextSolar;
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
