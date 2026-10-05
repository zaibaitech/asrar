/**
 * URLs of the branded share-card images (1200×630 PNG, Open Graph / Twitter /
 * WhatsApp previews). Rendered by app/og/page/[key] and app/og/ikhtiyarat/[date].
 * No next/headers here so metadata helpers and client code can both import it.
 */
import { SITE_URL } from '../siteRoutes';

export type OgLang = 'en' | 'fr';

export const OG_SIZE = { width: 1200, height: 630 } as const;

/** Cards for the SEO pages, keyed by a short id (see src/lib/og/pageCards.ts). */
export const OG_PAGE_KEYS = [
  'ikhtiyarat',
  'abjad',
  'planetary-hours',
  'planet-of-the-day',
  'compatibility',
  'name-and-mother-burj',
  'sadaqa',
  'sadaqa-of-the-day',
  'best-day-for',
  'best-day-for-marriage',
  'best-day-for-travel',
  'best-day-for-moving-home',
  'best-day-for-business',
] as const;

export type OgPageKey = (typeof OG_PAGE_KEYS)[number];

export function isOgPageKey(key: string): key is OgPageKey {
  return (OG_PAGE_KEYS as readonly string[]).includes(key);
}

/** '/best-day-for/travel' -> 'best-day-for-travel'; null when the page has no card. */
export function ogKeyForPath(path: string): OgPageKey | null {
  const key = path.replace(/^\/+/, '').replace(/\//g, '-');
  return isOgPageKey(key) ? key : null;
}

/** UTC calendar day, used as a daily cache key for cards whose content changes by day. */
export function utcYmd(date = new Date()): string {
  return date.toISOString().slice(0, 10);
}

/** Cards that show something that changes by day (today's sadaqa, next favourable date). */
const DAILY_KEYS = new Set<OgPageKey>([
  'sadaqa-of-the-day',
  'best-day-for',
  'best-day-for-marriage',
  'best-day-for-travel',
  'best-day-for-moving-home',
  'best-day-for-business',
]);

/**
 * Absolute URL of a page card. Daily cards carry ?d=<UTC day> so WhatsApp /
 * Facebook caches (which key on the image URL) pick up a fresh card each day.
 */
export function ogImageUrl(key: OgPageKey, lang: OgLang, now = new Date()): string {
  const params = new URLSearchParams();
  if (lang === 'fr') params.set('lang', 'fr');
  if (DAILY_KEYS.has(key)) params.set('d', utcYmd(now));
  const qs = params.toString();
  return `${SITE_URL}/og/page/${key}${qs ? `?${qs}` : ''}`;
}

/** Absolute URL of an ikhtiyārāt share-link result card (same params as /ikhtiyarat/r/[date]). */
export function ogIkhtiyaratResultUrl(
  date: string,
  params: { lat?: string; lon?: string; tz?: string; election?: string; lang?: string },
): string {
  const q = new URLSearchParams();
  for (const k of ['lat', 'lon', 'tz', 'election'] as const) {
    if (params[k]) q.set(k, params[k] as string);
  }
  if (params.lang === 'fr') q.set('lang', 'fr');
  return `${SITE_URL}/og/ikhtiyarat/${encodeURIComponent(date)}?${q.toString()}`;
}
