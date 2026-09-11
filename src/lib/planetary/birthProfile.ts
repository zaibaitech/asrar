/**
 * Birth Profile — a personal natal-lite snapshot for ʿIlm al-Nujūm.
 * =====================================================================
 * Sun/Moon/Ascendant signs, all 7 classical planets with their real
 * essential-dignity condition, the Moon's lunar mansion, the day ruler,
 * and a dominant-element/planet/temperament synthesis.
 *
 * Deliberately reuses this app's own, already-more-accurate primitives
 * rather than re-deriving anything:
 *  - getAllPlanetPositions() (ikhtiyarat/ephemeris.ts) — local
 *    astronomy-engine positions, no network dependency, sub-arcsecond
 *    Moon accuracy — works instantly for any historical date.
 *  - calculateDignities() (dignities.ts) — the full classical 5-fold
 *    dignity system (exaltation/domicile/triplicity/terms/face), not
 *    just the simplified 4-tier table this feature could have used.
 *  - getCurrentLunarMansion() (lunarMansions.ts) — all 28 manāzil with
 *    real classical content (favorable/unfavorable activities, a cited
 *    source), keyed off the same real Moon longitude.
 *  - getDayRulerInfo() (dayRuler.ts) — the existing Chaldean day-ruler
 *    lookup.
 *
 * The only genuinely new astronomy here is the Ascendant/Descendant,
 * which none of the above compute (this app's own
 * astrologicalCompatibility.ts deliberately never computes an Ascendant,
 * since it requires an exact birth time/place to be meaningful — so it
 * is only ever returned here when the caller supplies a known time).
 */

import * as Astronomy from 'astronomy-engine';
import SunCalc from 'suncalc';
import { Planet, ZodiacSign, Element } from './types';
import type { DayRulerInfo } from './types';
import { PLANET_RULERSHIPS } from './constants';
import { getAllPlanetPositions, CLASSICAL_PLANETS, type PlanetPosition } from '../ikhtiyarat/ephemeris';
import { calculateDignities, type DignityResult } from './dignities';
import { getCurrentLunarMansion, type CurrentMansion } from '../lunarMansions';
import { getDayRulerInfo } from './dayRuler';

export type Temperament = 'hot-dry' | 'hot-moist' | 'cold-moist' | 'cold-dry';

const TEMPERAMENT_BY_ELEMENT: Record<Element, Temperament> = {
  fire: 'hot-dry',
  air: 'hot-moist',
  water: 'cold-moist',
  earth: 'cold-dry',
};

const ZODIAC_ORDER: ZodiacSign[] = [
  'aries', 'taurus', 'gemini', 'cancer', 'leo', 'virgo',
  'libra', 'scorpio', 'sagittarius', 'capricorn', 'aquarius', 'pisces',
];

const ELEMENT_OF_SIGN: Record<ZodiacSign, Element> = {
  aries: 'fire', leo: 'fire', sagittarius: 'fire',
  taurus: 'earth', virgo: 'earth', capricorn: 'earth',
  gemini: 'air', libra: 'air', aquarius: 'air',
  cancer: 'water', scorpio: 'water', pisces: 'water',
};

export interface BirthAngle {
  sign: ZodiacSign;
  degreeInSign: number;
  longitude: number;
  element: Element;
}

export interface BirthPlanetEntry {
  planet: Planet;
  position: PlanetPosition;
  dignity: DignityResult;
}

export interface BirthProfileInput {
  /** Birth date, in the birth place's local calendar (only Y/M/D is used unless timeKnown). */
  dateOfBirth: Date;
  /** Local time of day at the birth place — only consulted when timeKnown. */
  timeOfBirth?: { hour: number; minute: number };
  timeKnown: boolean;
  latitude: number;
  longitude: number;
  /** IANA timezone of the birth place, e.g. "Africa/Dakar". */
  timezone: string;
}

export interface BirthProfileResult {
  utcDateTime: Date;
  /** Whether the birth instant fell between sunrise and sunset at the birth place — exposed so UI can re-derive a planet's full DignityResult (e.g. for a detail panel) without recomputing this. */
  isDay: boolean;
  sun: BirthPlanetEntry;
  moon: BirthPlanetEntry;
  ascendant: BirthAngle | null;
  descendant: BirthAngle | null;
  /** All 7 classical planets, Chaldean order (Saturn..Moon). */
  planets: BirthPlanetEntry[];
  lunarMansion: CurrentMansion;
  dayRuler: DayRulerInfo;
  dominantElement: Element;
  dominantPlanet: Planet;
  temperament: Temperament;
}

function normalizeDegrees(deg: number): number {
  const d = deg % 360;
  return d < 0 ? d + 360 : d;
}

function longitudeToAngle(longitude: number): BirthAngle {
  const lon = normalizeDegrees(longitude);
  const idx = Math.floor(lon / 30) % 12;
  const sign = ZODIAC_ORDER[idx];
  return { sign, degreeInSign: lon - idx * 30, longitude: lon, element: ELEMENT_OF_SIGN[sign] };
}

/**
 * Mean obliquity of the ecliptic (IAU 1980 polynomial), in degrees.
 * T is in Julian centuries of Terrestrial Time from J2000.0 — using TT
 * (astronomy-engine's own AstroTime.tt) rather than UT is the technically
 * correct input for this formula, though the UT/TT difference (~1 minute)
 * has no visible effect on a result reported to the nearest degree.
 */
function meanObliquityDeg(date: Date): number {
  const time = new Astronomy.AstroTime(date);
  const T = time.tt / 36525;
  return 23.4392911 - 0.0130042 * T - 0.00000164 * T * T + 0.000000504 * T * T * T;
}

/**
 * Ascendant ecliptic longitude at a given UTC instant and geographic
 * location, via the standard GAST + obliquity + spherical-trig formula.
 * astronomy-engine's SiderealTime() gives apparent sidereal time (GAST,
 * nutation-corrected) — a more accurate input than the mean-GMST
 * polynomial a from-scratch implementation would otherwise need.
 */
function ascendantLongitude(utcDate: Date, latitude: number, longitude: number): number {
  const gastDeg = Astronomy.SiderealTime(utcDate) * 15;
  const lstDeg = normalizeDegrees(gastDeg + longitude);
  const obliquityDeg = meanObliquityDeg(utcDate);

  const lstRad = (lstDeg * Math.PI) / 180;
  const obliquityRad = (obliquityDeg * Math.PI) / 180;
  const latRad = (latitude * Math.PI) / 180;

  const numerator = -Math.cos(lstRad);
  const denominator = Math.sin(obliquityRad) * Math.tan(latRad) + Math.cos(obliquityRad) * Math.sin(lstRad);

  // This form of the RAMC/obliquity formula (as also used, unfixed, in the
  // Asrāriya mobile app's ascendant code) yields the point 180° from the
  // true Ascendant. Verified independently by scanning the ecliptic for
  // where astronomy-engine's own (trusted) Horizon() altitude crosses zero
  // on the eastern horizon: for a known test case (13.437N, 16.6812W,
  // 2026-01-30 20:00 UTC+0) the true rising point is ecliptic longitude
  // ~144.9° (Leo) — this formula alone gives ~324.3° (Aquarius), the
  // setting point 180° away. Adding 180° corrects it.
  const raw = (Math.atan2(numerator, denominator) * 180) / Math.PI;
  return normalizeDegrees(raw + 180);
}

/** True when the UTC instant falls between that location's sunrise and sunset — needed for triplicity dignity (day/night rulers differ). */
function isDaytimeAt(utcDate: Date, latitude: number, longitude: number): boolean {
  try {
    const times = SunCalc.getTimes(utcDate, latitude, longitude);
    if (!times.sunrise || !times.sunset) return true;
    return utcDate >= times.sunrise && utcDate < times.sunset;
  } catch {
    return true;
  }
}

function rulerOf(sign: ZodiacSign): Planet | null {
  for (const planet of CLASSICAL_PLANETS) {
    if (PLANET_RULERSHIPS[planet]?.includes(sign)) return planet;
  }
  return null;
}

/** Most frequent element among the chart's main points (Sun, Moon, Ascendant when known). Ties favor Sun's element. */
function computeDominantElement(sunSign: ZodiacSign, moonSign: ZodiacSign, ascendant: BirthAngle | null): Element {
  const points = [ELEMENT_OF_SIGN[sunSign], ELEMENT_OF_SIGN[moonSign], ...(ascendant ? [ascendant.element] : [])];
  const counts: Record<Element, number> = { fire: 0, water: 0, air: 0, earth: 0 };
  for (const el of points) counts[el]++;
  let best: Element = ELEMENT_OF_SIGN[sunSign];
  let bestCount = -1;
  (Object.keys(counts) as Element[]).forEach((el) => {
    if (counts[el] > bestCount) {
      best = el;
      bestCount = counts[el];
    }
  });
  return best;
}

/**
 * The planet with the most weight in this chart: its own real dignity
 * score, plus a bonus for ruling the Sun/Moon/Ascendant sign or being
 * today's day ruler — so "dominant" reflects actual classical condition,
 * not just which sign happens to repeat most.
 */
function computeDominantPlanet(
  entries: BirthPlanetEntry[],
  sunSign: ZodiacSign,
  moonSign: ZodiacSign,
  ascendant: BirthAngle | null,
  dayRulerPlanet: Planet,
): Planet {
  const sunRuler = rulerOf(sunSign);
  const moonRuler = rulerOf(moonSign);
  const ascRuler = ascendant ? rulerOf(ascendant.sign) : null;

  let best = entries[0];
  let bestScore = -Infinity;
  for (const entry of entries) {
    let score = entry.dignity.totalScore;
    if (entry.planet === sunRuler) score += 6;
    if (entry.planet === moonRuler) score += 4;
    if (ascRuler && entry.planet === ascRuler) score += 3;
    if (entry.planet === dayRulerPlanet) score += 2;
    if (score > bestScore) {
      bestScore = score;
      best = entry;
    }
  }
  return best.planet;
}

/** Combine a local calendar date with an optional local time, then convert to the true UTC instant using the birth place's IANA timezone. */
function toUtcDateTime(input: BirthProfileInput): Date {
  const { dateOfBirth, timeOfBirth, timeKnown, timezone } = input;
  const hour = timeKnown && timeOfBirth ? timeOfBirth.hour : 12;
  const minute = timeKnown && timeOfBirth ? timeOfBirth.minute : 0;

  // Build a UTC "wall clock" Date carrying the local Y/M/D/H/M, then find
  // that timezone's actual offset at this date (handles DST) and shift by
  // it — the same pattern used by CalculatorTypeForm/hijri.ts elsewhere in
  // this app for turning a local date input into a real UTC instant.
  const asIfUTC = new Date(Date.UTC(
    dateOfBirth.getFullYear(), dateOfBirth.getMonth(), dateOfBirth.getDate(), hour, minute, 0,
  ));

  const formatter = new Intl.DateTimeFormat('en-US', {
    timeZone: timezone,
    year: 'numeric', month: '2-digit', day: '2-digit',
    hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false,
  });
  const parts = formatter.formatToParts(asIfUTC);
  const get = (type: string) => Number(parts.find((p) => p.type === type)?.value ?? 0);
  const asLocalWallClock = new Date(Date.UTC(get('year'), get('month') - 1, get('day'), get('hour') % 24, get('minute'), get('second')));
  const offsetMs = asLocalWallClock.getTime() - asIfUTC.getTime();

  return new Date(asIfUTC.getTime() - offsetMs);
}

export function computeBirthProfile(input: BirthProfileInput): BirthProfileResult {
  const utcDateTime = toUtcDateTime(input);
  const isDay = isDaytimeAt(utcDateTime, input.latitude, input.longitude);

  const positions = getAllPlanetPositions(utcDateTime);
  const entries: BirthPlanetEntry[] = CLASSICAL_PLANETS.map((planet) => {
    const position = positions[planet];
    const dignity = calculateDignities(planet, position.sign, position.degreeInSign, isDay, position.isRetrograde);
    return { planet, position, dignity };
  });

  const sun = entries.find((e) => e.planet === 'Sun')!;
  const moon = entries.find((e) => e.planet === 'Moon')!;

  let ascendant: BirthAngle | null = null;
  let descendant: BirthAngle | null = null;
  if (input.timeKnown) {
    const ascLon = ascendantLongitude(utcDateTime, input.latitude, input.longitude);
    ascendant = longitudeToAngle(ascLon);
    descendant = longitudeToAngle(ascLon + 180);
  }

  const lunarMansion = getCurrentLunarMansion(utcDateTime);
  const dayRuler = getDayRulerInfo(input.dateOfBirth);

  const dominantElement = computeDominantElement(sun.position.sign, moon.position.sign, ascendant);
  const dominantPlanet = computeDominantPlanet(entries, sun.position.sign, moon.position.sign, ascendant, dayRuler.planet);
  const temperament = TEMPERAMENT_BY_ELEMENT[dominantElement];

  return {
    utcDateTime,
    isDay,
    sun,
    moon,
    ascendant,
    descendant,
    planets: entries,
    lunarMansion,
    dayRuler,
    dominantElement,
    dominantPlanet,
    temperament,
  };
}
