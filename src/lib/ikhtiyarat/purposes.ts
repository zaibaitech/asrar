/**
 * "Best day for …" purpose pages (/best-day-for/*): a thin, read-only layer
 * over the existing ikhtiyārāt election configs. Nothing here adds rules or
 * religious content — favoured weekdays, favoured planetary hours and caution
 * labels are all read back out of the election configs themselves, so the
 * landing pages can never drift from what the /ikhtiyarat tool scores.
 */

import SunCalc from 'suncalc';
import { evaluateDateRange } from './engine';
import { marriageElectionConfig } from './elections/marriage';
import { travelElectionConfig } from './elections/travel';
import { businessElectionConfig } from './elections/business';
import { homeElectionConfig } from './elections/home';
import type { ElectionRulesConfig, ElectionType, RuleContext, Tier } from './types';
import type { Planet } from '../planetary/types';
import { getAllPlanetaryHoursForDay } from '../planetary/planetaryHours';

export type PurposeSlug = 'marriage' | 'travel' | 'moving-home' | 'business';

export const PURPOSE_SLUGS: PurposeSlug[] = ['marriage', 'travel', 'moving-home', 'business'];

export interface PurposeDef {
  slug: PurposeSlug;
  /** Election type preselected when linking to / embedding the /ikhtiyarat tool. */
  toolElection: ElectionType;
  config: ElectionRulesConfig;
  /** Rule ids in this config that can hard-fail a window (labels are read from the config). */
  hardFailRuleIds: string[];
}

export const PURPOSES: Record<PurposeSlug, PurposeDef> = {
  marriage: {
    slug: 'marriage',
    toolElection: 'marriage',
    config: marriageElectionConfig,
    hardFailRuleIds: ['dark-moon', 'moon-combust', 'moon-void-of-course', 'moon-malefic-hard-aspect', 'eclipse-proximity'],
  },
  travel: {
    slug: 'travel',
    toolElection: 'travel',
    config: travelElectionConfig,
    hardFailRuleIds: ['travel-moon-void-of-course', 'travel-moon-malefic-hard-aspect', 'travel-moon-combust'],
  },
  'moving-home': {
    slug: 'moving-home',
    toolElection: 'home',
    config: homeElectionConfig,
    hardFailRuleIds: ['home-moon-void-of-course', 'home-moon-combust', 'home-moon-malefic-hard-aspect'],
  },
  business: {
    slug: 'business',
    // "Starting a Business" uses exactly the Business/Contracts rules (see CheckDateView.tsx).
    toolElection: 'businessStart',
    config: businessElectionConfig,
    hardFailRuleIds: ['business-mercury-retrograde', 'business-moon-void-of-course', 'business-mercury-combust'],
  },
};

/** Reference location for the server-computed dates: Makkah, the same fallback the app uses when geolocation is unavailable. */
export const REFERENCE_LOCATION = { lat: 21.4225, lon: 39.8262, tz: 'Asia/Riyadh', nameEn: 'Makkah', nameFr: 'La Mecque' };

const PLANETS: Planet[] = ['Sun', 'Moon', 'Mars', 'Mercury', 'Jupiter', 'Venus', 'Saturn'];

export const PLANET_FR: Record<Planet, string> = {
  Sun: 'Soleil', Moon: 'Lune', Mars: 'Mars', Mercury: 'Mercure', Jupiter: 'Jupiter', Venus: 'Vénus', Saturn: 'Saturne',
};

function findRule(config: ElectionRulesConfig, suffix: string) {
  return config.rules.find((r) => r.id === suffix || r.id.endsWith(`-${suffix}`));
}

export interface FavouredWeekday {
  day: number; // 0 = Sunday
  points: number;
  en: string;
  fr: string;
}

/**
 * The weekdays the config's day-of-week rule rewards, with the rule's own
 * EN/FR explanation. Day-of-week rules read only ctx.dayOfWeek.
 */
export function getFavouredWeekdays(config: ElectionRulesConfig): FavouredWeekday[] {
  const rule = findRule(config, 'day-of-week');
  if (!rule) return [];
  const out: FavouredWeekday[] = [];
  for (let day = 0; day < 7; day++) {
    const r = rule.evaluate({ dayOfWeek: day } as RuleContext);
    if (r && r.status === 'bonus') out.push({ day, points: r.points, en: r.detail_en, fr: r.detail_fr });
  }
  return out.sort((a, b) => b.points - a.points || a.day - b.day);
}

/**
 * The planets whose hours the config's planetary-hour rule rewards. These
 * rules read only ctx.planetaryHourPlanet when strictHourRuler is off (the
 * production default for every config used here).
 */
export function getFavouredHourPlanets(config: ElectionRulesConfig): Planet[] {
  const rule = findRule(config, 'planetary-hour');
  if (!rule || config.strictHourRuler) return [];
  return PLANETS.filter((planet) => {
    const r = rule.evaluate({ planetaryHourPlanet: planet } as RuleContext);
    return r?.status === 'bonus';
  });
}

/** EN/FR labels of the rules that can rule a moment out entirely, straight from the config. */
export function getCautionLabels(def: PurposeDef): { en: string; fr: string }[] {
  return def.hardFailRuleIds
    .map((id) => def.config.rules.find((r) => r.id === id))
    .filter((r): r is NonNullable<typeof r> => Boolean(r))
    .map((r) => ({ en: r.label.en, fr: r.label.fr }));
}

/** Calendar date (YYYY-MM-DD) of an instant in a timezone. */
export function ymdInTz(date: Date, tz: string): string {
  return new Intl.DateTimeFormat('en-CA', { timeZone: tz, year: 'numeric', month: '2-digit', day: '2-digit' }).format(date);
}

export interface UpcomingDate {
  /** YYYY-MM-DD in the reference timezone. */
  ymd: string;
  /** ISO instant of the day's best window. */
  bestWindowIso: string;
  tier: Tier;
  tierEn: string;
  tierFr: string;
  score: number;
  /** Planet ruling the hour of the best window, when it is one of the favoured hours. */
  hourPlanet: Planet | null;
}

const GOOD_TIERS: ReadonlySet<Tier> = new Set(['excellent', 'good', 'acceptable']);

/**
 * The next days (from today, in the reference timezone) that the existing
 * engine rates Acceptable or better with no hard fail — exactly the same
 * evaluateDateRange() call the "Find Best Dates" scanner makes. Returns
 * plain JSON so it can be cached by date.
 */
export function computeUpcomingDates(slug: PurposeSlug, todayYmd: string, horizonDays = 90, count = 5): UpcomingDate[] {
  const def = PURPOSES[slug];
  const { lat, lon, tz } = REFERENCE_LOCATION;
  // Noon UTC on the reference date is the same calendar day in Makkah (UTC+3).
  const start = new Date(`${todayYmd}T12:00:00Z`);
  const end = new Date(start.getTime() + (horizonDays - 1) * 24 * 60 * 60 * 1000);
  const favouredHours = new Set(getFavouredHourPlanets(def.config));
  const results = evaluateDateRange(start, end, lat, lon, tz, def.config.electionType, def.config);

  return results
    .filter((r) => !r.hasHardFail && GOOD_TIERS.has(r.tier))
    .slice(0, count)
    .map((r) => {
      const hourRule = r.bestWindow.rules.find((x) => x.id.endsWith('planetary-hour'));
      const planet = PLANETS.find((p) => hourRule?.status === 'bonus' && hourRule.detail_en.includes(`hour of ${p}`)) ?? null;
      return {
        ymd: ymdInTz(r.bestWindow.time, tz),
        bestWindowIso: r.bestWindow.time.toISOString(),
        tier: r.tier,
        tierEn: r.tierInfo.labelEn,
        tierFr: r.tierInfo.labelFr,
        score: r.score,
        hourPlanet: planet && favouredHours.has(planet) ? planet : null,
      };
    });
}

export interface FavouredHour {
  planet: Planet;
  startIso: string;
  endIso: string;
}

/**
 * The next planetary hours (Chaldean order, sunrise-to-sunset division, as on
 * /planetary-hours) ruled by one of the purpose's favoured planets, at the
 * reference location, starting from `now`.
 */
export function computeNextFavouredHours(slug: PurposeSlug, now: Date, count = 6): FavouredHour[] {
  const planets = new Set(getFavouredHourPlanets(PURPOSES[slug].config));
  const { lat, lon } = REFERENCE_LOCATION;
  const out: FavouredHour[] = [];
  const DAY = 24 * 60 * 60 * 1000;

  // Start from yesterday's planetary day so the hours before today's sunrise are covered.
  for (let offset = -1; offset <= 2 && out.length < count; offset++) {
    const base = new Date(now.getTime() + offset * DAY);
    const times = SunCalc.getTimes(base, lat, lon);
    const next = SunCalc.getTimes(new Date(base.getTime() + DAY), lat, lon);
    if (!times.sunrise || !times.sunset || !next.sunrise) continue;
    const { hours } = getAllPlanetaryHoursForDay(times.sunrise, times.sunset, next.sunrise, now);
    for (const h of hours) {
      if (h.endTime <= now || !planets.has(h.planet)) continue;
      if (out.some((o) => o.startIso === h.startTime.toISOString())) continue;
      out.push({ planet: h.planet, startIso: h.startTime.toISOString(), endIso: h.endTime.toISOString() });
      if (out.length >= count) break;
    }
  }
  return out;
}
