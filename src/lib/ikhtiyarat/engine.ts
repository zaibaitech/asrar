/**
 * Ikhtiyārāt scoring engine — pure, framework-free.
 *
 * Election-type-agnostic: given a rules config (e.g. elections/marriage.ts)
 * and an ElectionInput, computes a RuleContext (shared ephemeris/aspect data)
 * once, runs every rule against it, and aggregates to a score/tier.
 *
 * Sub-daily resolution: evaluates every 3 hours across the calendar day
 * (in the given lat/lon's local time, derived from tz) and reports the
 * best-scoring window, since the Moon can move enough in a day to flip a
 * verdict (e.g. clearing combustion by evening).
 */

import { Planet } from '../planetary/types';
import { getAllPlanetPositions, getMoonElongation, getMoonPhaseDirection, getMoonSunSeparation, getNearestEclipse } from './ephemeris';
import { getMoonApplyingAspects } from './aspects';
import { getAllPlanetaryHoursForDay } from '../planetary/planetaryHours';
import SunCalc from 'suncalc';
import { ElectionInput, ElectionResult, ElectionRulesConfig, RuleContext, RuleResult, WindowScore } from './types';

const STEP_HOURS = 3;
const DEFAULT_CIVIL_HOURS = { startHour: 8, endHour: 22 };

function buildRuleContext(datetime: Date, lat: number, lon: number): RuleContext {
  const positions = getAllPlanetPositions(datetime);
  const moonElongation = getMoonElongation(datetime);
  const moonSunSeparation = getMoonSunSeparation(datetime);
  const moonPhaseDirection = getMoonPhaseDirection(datetime);
  const dayOfWeek = datetime.getDay();
  const nearestEclipse = getNearestEclipse(datetime);
  const applyingAspects = getMoonApplyingAspects(datetime);

  let planetaryHourPlanet: Planet | null = null;
  let isDaytime = false;
  try {
    const sunTimes = SunCalc.getTimes(datetime, lat, lon);
    if (sunTimes.sunrise && sunTimes.sunset) {
      isDaytime = datetime >= sunTimes.sunrise && datetime < sunTimes.sunset;
      const nextDay = new Date(datetime.getTime() + 24 * 60 * 60 * 1000);
      const nextSunTimes = SunCalc.getTimes(nextDay, lat, lon);
      const nextSunrise = nextSunTimes.sunrise ?? new Date(sunTimes.sunrise.getTime() + 24 * 60 * 60 * 1000);
      const { hours, currentHourIndex } = getAllPlanetaryHoursForDay(sunTimes.sunrise, sunTimes.sunset, nextSunrise, datetime);
      if (currentHourIndex >= 0) {
        planetaryHourPlanet = hours[currentHourIndex].planet;
      }
    }
  } catch {
    planetaryHourPlanet = null;
  }

  return {
    datetime,
    lat,
    lon,
    positions,
    moonElongation,
    moonSunSeparation,
    moonPhaseDirection,
    dayOfWeek,
    planetaryHourPlanet,
    nearestEclipseHours: nearestEclipse ? nearestEclipse.hoursToNearestEclipse : Infinity,
    applyingAspects,
    isDaytime,
  };
}

function evaluateWindow(datetime: Date, lat: number, lon: number, config: ElectionRulesConfig): WindowScore {
  const ctx = buildRuleContext(datetime, lat, lon);
  const rules: RuleResult[] = [];
  let score = 0;
  let hasHardFail = false;

  for (const rule of config.rules) {
    const result = rule.evaluate(ctx);
    if (!result) continue;
    rules.push(result);
    score += result.points;
    if (result.status === 'hardfail') hasHardFail = true;
  }

  return { time: datetime, score, rules, hasHardFail };
}

/** Start-of-day in the given IANA timezone, expressed as the actual UTC instant of local midnight. */
function startOfLocalDay(datetime: Date, tz: string): Date {
  const parts = new Intl.DateTimeFormat('en-US', {
    timeZone: tz,
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: false,
  }).formatToParts(datetime);
  const get = (type: string) => Number(parts.find(p => p.type === type)!.value);

  // `datetime` reinterpreted as if its tz wall-clock components were UTC —
  // the delta between this and `datetime` itself is exactly tz's offset
  // (including DST) at this instant.
  const asIfUTC = new Date(Date.UTC(get('year'), get('month') - 1, get('day'), get('hour'), get('minute'), get('second')));
  const offsetMs = asIfUTC.getTime() - datetime.getTime();

  // Local midnight expressed as UTC calendar components, then shifted by
  // that offset to land on the real UTC instant of local midnight.
  const localMidnightAsUTCComponents = new Date(Date.UTC(get('year'), get('month') - 1, get('day'), 0, 0, 0));
  return new Date(localMidnightAsUTCComponents.getTime() - offsetMs);
}

export function evaluateElection(input: ElectionInput, config: ElectionRulesConfig): ElectionResult {
  const dayStart = startOfLocalDay(input.datetime, input.tz);
  const windows: WindowScore[] = [];

  // h (the loop offset) equals local hour-of-day by construction, since
  // dayStart is local midnight — used below to filter to civil hours
  // without any further timezone math.
  for (let h = 0; h < 24; h += STEP_HOURS) {
    const t = new Date(dayStart.getTime() + h * 60 * 60 * 1000);
    windows.push(evaluateWindow(t, input.lat, input.lon, config));
  }

  windows.sort((a, b) => a.time.getTime() - b.time.getTime());

  const { startHour, endHour } = config.civilHoursRange ?? DEFAULT_CIVIL_HOURS;
  const inCivilHours = (w: WindowScore) => {
    const h = Math.round((w.time.getTime() - dayStart.getTime()) / (60 * 60 * 1000));
    return h >= startHour && h < endHour;
  };

  // Prefer windows within civil hours; fall back to the full day only if
  // none fall in that range (shouldn't happen with the default 8-22 range
  // and a 3-hour step, but kept defensive for narrower future configs).
  const civilWindows = windows.filter(inCivilHours);
  const candidateWindows = civilWindows.length > 0 ? civilWindows : windows;

  // Within the candidate set, prefer the best-scoring window that has no
  // hard fail — a date is only truly "Avoid" if every candidate window
  // hard-fails. This is what lets a date be "good in the morning, bad by
  // evening" (or vice versa) resolve to its best window rather than being
  // dragged down by its worst one.
  const cleanWindows = candidateWindows.filter(w => !w.hasHardFail);
  const bestWindow = cleanWindows.length > 0
    ? cleanWindows.reduce((best, w) => (w.score > best.score ? w : best))
    : candidateWindows.reduce((best, w) => (w.score > best.score ? w : best), candidateWindows[0]);

  const tierInfo = config.scoreToTier(bestWindow.score, bestWindow.hasHardFail);

  return {
    electionType: config.electionType,
    date: dayStart,
    score: bestWindow.score,
    tier: tierInfo.tier,
    tierInfo,
    hasHardFail: bestWindow.hasHardFail,
    rules: bestWindow.rules,
    bestWindow,
    allWindows: windows,
    isLeastAfflicted: bestWindow.hasHardFail,
  };
}

/** Scan a date range (inclusive) and evaluate each day — used by the "Find Best Dates" scanner. */
export function evaluateDateRange(
  startDate: Date,
  endDate: Date,
  lat: number,
  lon: number,
  tz: string,
  electionType: ElectionInput['electionType'],
  config: ElectionRulesConfig,
): ElectionResult[] {
  const results: ElectionResult[] = [];
  let t = new Date(startDate);

  while (t.getTime() <= endDate.getTime()) {
    results.push(evaluateElection({ datetime: t, lat, lon, tz, electionType }, config));
    t = new Date(t.getTime() + 24 * 60 * 60 * 1000);
  }

  return results;
}

/** Find the N nearest dates (searching both forward and backward from the given date) that beat a minimum tier threshold. */
export function findNearestBetterDates(
  input: ElectionInput,
  config: ElectionRulesConfig,
  count: number,
  maxSearchDays = 60,
): ElectionResult[] {
  const found: ElectionResult[] = [];
  const baseline = evaluateElection(input, config);

  for (let offset = 1; offset <= maxSearchDays && found.length < count; offset++) {
    for (const sign of [1, -1] as const) {
      const candidateDate = new Date(input.datetime.getTime() + sign * offset * 24 * 60 * 60 * 1000);
      const result = evaluateElection({ ...input, datetime: candidateDate }, config);
      if (!result.hasHardFail && result.score > baseline.score) {
        found.push(result);
        if (found.length >= count) break;
      }
    }
  }

  return found
    .sort((a, b) => b.score - a.score || Math.abs(a.date.getTime() - input.datetime.getTime()) - Math.abs(b.date.getTime() - input.datetime.getTime()))
    .slice(0, count);
}
