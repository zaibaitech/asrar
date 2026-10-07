/**
 * French mirror routes (/fr/...) for the crawlable SEO pages.
 *
 * Middleware rewrites /fr/<path> to the existing English route file and tells
 * it (via ROUTE_LANG_HEADER) that it is being served as the French URL, so the
 * page renders its existing FR copy with a /fr canonical and hreflang pairs.
 * No page components are duplicated.
 *
 * Kept free of next/headers so middleware (edge) and client code can import it.
 */
import { absoluteUrl } from './siteRoutes';

export type RouteLang = 'en' | 'fr';

/** Request header set by middleware on rewritten /fr requests. */
export const ROUTE_LANG_HEADER = 'x-asrar-route-lang';

export const FR_PREFIX = '/fr';

/** English paths that have a /fr mirror. */
export const LOCALIZED_PATHS: readonly string[] = [
  '/',
  '/ikhtiyarat',
  '/abjad',
  '/planetary-hours',
  '/planet-of-the-day',
  '/manazil',
  '/sadaqa',
  '/sadaqa-of-the-day',
  '/compatibility',
  '/name-and-mother-burj',
  '/best-day-for',
  '/best-day-for/marriage',
  '/best-day-for/travel',
  '/best-day-for/moving-home',
  '/best-day-for/business',
];

const LOCALIZED_SET = new Set(LOCALIZED_PATHS);

export function isLocalizedPath(enPath: string): boolean {
  return LOCALIZED_SET.has(enPath);
}

/** '/fr/abjad' -> '/abjad', '/fr' -> '/'; null if the path is not under /fr. */
export function stripFrPrefix(pathname: string): string | null {
  if (pathname === FR_PREFIX || pathname === `${FR_PREFIX}/`) return '/';
  if (pathname.startsWith(`${FR_PREFIX}/`)) return pathname.slice(FR_PREFIX.length).replace(/\/+$/, '') || '/';
  return null;
}

/** '/abjad' -> '/fr/abjad' (fr) or '/abjad' (en). '/' -> '/fr'. */
export function frPath(enPath: string): string {
  return enPath === '/' ? FR_PREFIX : `${FR_PREFIX}${enPath}`;
}

/**
 * Internal link for a page served in `lang`: on French URLs, links to pages that
 * have a /fr mirror point at the mirror. Keeps any ?query / #hash.
 */
export function localizeHref(href: string, lang: RouteLang): string {
  if (lang !== 'fr' || !href.startsWith('/')) return href;
  const m = href.match(/^([^?#]*)(.*)$/);
  const path = m?.[1] || '/';
  const rest = m?.[2] ?? '';
  return isLocalizedPath(path) ? `${frPath(path)}${rest}` : href;
}

/** Absolute URL of a localized page in the given language. */
export function localizedUrl(enPath: string, lang: RouteLang): string {
  return absoluteUrl(lang === 'fr' && isLocalizedPath(enPath) ? frPath(enPath) : enPath);
}

/**
 * Arabic landing pages (/ar/...). Unlike /fr these are dedicated route files
 * (app/ar/**) with their own Arabic copy around the unchanged tool, so only
 * the pages listed here get an `ar` hreflang alternate.
 */
export const AR_PATHS: Readonly<Record<string, string>> = {
  '/abjad': '/ar/abjad',
  '/planetary-hours': '/ar/planetary-hours',
  '/name-and-mother-burj': '/ar/name-and-mother-burj',
  '/sadaqa-of-the-day': '/ar/sadaqa-of-the-day',
};

/** Absolute URL of the Arabic landing page for an EN path, or null if there is none. */
export function arabicUrl(enPath: string): string | null {
  const ar = AR_PATHS[enPath];
  return ar ? absoluteUrl(ar) : null;
}

/** hreflang map (en, fr, ar when it exists, x-default -> en) for a localized page. */
export function hreflangLanguages(enPath: string): Record<string, string> {
  const ar = arabicUrl(enPath);
  return {
    en: localizedUrl(enPath, 'en'),
    fr: localizedUrl(enPath, 'fr'),
    ...(ar ? { ar } : {}),
    'x-default': localizedUrl(enPath, 'en'),
  };
}

/**
 * Metadata `alternates` block: self-canonical for the served language + hreflang pairs.
 * 'ar' is only valid for paths in AR_PATHS (the Arabic landing pages).
 */
export function localeAlternates(enPath: string, lang: RouteLang | 'ar') {
  const canonical = lang === 'ar' ? arabicUrl(enPath) ?? localizedUrl(enPath, 'en') : localizedUrl(enPath, lang);
  return {
    canonical,
    languages: hreflangLanguages(enPath),
  };
}
