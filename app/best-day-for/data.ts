import { unstable_cache } from 'next/cache';
import type { Planet } from '@/src/lib/planetary/types';
import {
  PLANET_FR,
  PURPOSES,
  REFERENCE_LOCATION,
  computeNextFavouredHours,
  computeUpcomingDates,
  getCautionLabels,
  getFavouredHourPlanets,
  getFavouredWeekdays,
  ymdInTz,
  type PurposeSlug,
} from '@/src/lib/ikhtiyarat/purposes';
import type { PageLang } from '@/src/lib/pageLang';

/**
 * The upcoming-dates scan depends only on (purpose, today's date in Makkah),
 * so it is memoised per calendar day: the key changes at Makkah midnight and
 * the list can never show a day from a previous scan. The planetary hours
 * below are computed on every request.
 */
const upcomingDatesForDay = unstable_cache(
  async (slug: PurposeSlug, todayYmd: string) => computeUpcomingDates(slug, todayYmd),
  ['best-day-for-upcoming-v1'],
  { revalidate: 86400 },
);

export async function getUpcomingDates(slug: PurposeSlug, now = new Date()) {
  return upcomingDatesForDay(slug, ymdInTz(now, REFERENCE_LOCATION.tz));
}

export function getNextFavouredHours(slug: PurposeSlug, now = new Date()) {
  return computeNextFavouredHours(slug, now);
}

export const WEEKDAYS: Record<PageLang, string[]> = {
  en: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
  fr: ['dimanche', 'lundi', 'mardi', 'mercredi', 'jeudi', 'vendredi', 'samedi'],
};

export function planetName(planet: Planet, lang: PageLang) {
  return lang === 'fr' ? PLANET_FR[planet] : planet;
}

export function capitalise(s: string) {
  return s.charAt(0).toUpperCase() + s.slice(1);
}

/** "Friday, Thursday and Monday" / "vendredi, jeudi et lundi" */
export function listJoin(items: string[], lang: PageLang) {
  const and = lang === 'fr' ? ' et ' : ' and ';
  if (items.length <= 1) return items.join('');
  return `${items.slice(0, -1).join(', ')}${and}${items[items.length - 1]}`;
}

export function formatDate(ymd: string, lang: PageLang) {
  return new Intl.DateTimeFormat(lang === 'fr' ? 'fr-FR' : 'en-GB', {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    year: 'numeric',
    timeZone: 'UTC',
  }).format(new Date(`${ymd}T12:00:00Z`));
}

export function formatTime(iso: string, lang: PageLang, withDay = false) {
  return new Intl.DateTimeFormat(lang === 'fr' ? 'fr-FR' : 'en-GB', {
    ...(withDay ? { weekday: 'short' as const } : {}),
    hour: '2-digit',
    minute: '2-digit',
    timeZone: REFERENCE_LOCATION.tz,
  }).format(new Date(iso));
}

/** Everything the page needs that is read straight out of the election config. */
export function purposeFacts(slug: PurposeSlug, lang: PageLang) {
  const def = PURPOSES[slug];
  const weekdays = getFavouredWeekdays(def.config);
  const planets = getFavouredHourPlanets(def.config);
  const cautions = getCautionLabels(def);
  const excluded = new Set([...def.hardFailRuleIds]);
  const others = def.config.rules
    .filter((r) => !excluded.has(r.id) && !r.id.endsWith('day-of-week') && !r.id.endsWith('planetary-hour'))
    .map((r) => r.label[lang]);
  return {
    def,
    weekdays: weekdays.map((w) => ({ ...w, name: WEEKDAYS[lang][w.day], detail: lang === 'fr' ? w.fr : w.en })),
    weekdayNames: weekdays.map((w) => WEEKDAYS[lang][w.day]),
    planets,
    planetNames: planets.map((p) => planetName(p, lang)),
    cautions: cautions.map((c) => c[lang]),
    others,
  };
}
