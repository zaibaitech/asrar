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

/** Every language a route can be served in (ar = /ar app mirror, noindex for now). */
export type AnyRouteLang = RouteLang | 'ar';

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

/**
 * Absolute URL of the Arabic version of an EN path: its dedicated landing page
 * (AR_PATHS), or for every other localized page its /ar app mirror. null otherwise.
 */
export function arabicUrl(enPath: string): string | null {
  const ar = AR_PATHS[enPath];
  if (ar) return absoluteUrl(ar);
  if (isLocalizedPath(enPath)) return absoluteUrl(enPath === '/' ? '/ar' : `/ar${enPath}`);
  return null;
}

/** hreflang map (en, fr, ar when it exists, ur for the reviewed Urdu pages, x-default -> en) for a localized page. */
export function hreflangLanguages(enPath: string): Record<string, string> {
  const ar = arabicUrl(enPath);
  const ur = indexableUrduUrl(enPath);
  return {
    en: localizedUrl(enPath, 'en'),
    fr: localizedUrl(enPath, 'fr'),
    ...(ar ? { ar } : {}),
    ...(ur ? { ur } : {}),
    'x-default': localizedUrl(enPath, 'en'),
  };
}

/**
 * Metadata `alternates` block: self-canonical for the served language + hreflang pairs.
 * 'ar' is valid for every localized path (landing page or /ar app mirror).
 */
export function localeAlternates(enPath: string, lang: RouteLang | 'ar') {
  const canonical = lang === 'ar' ? arabicUrl(enPath) ?? localizedUrl(enPath, 'en') : localizedUrl(enPath, lang);
  return {
    canonical,
    languages: hreflangLanguages(enPath),
  };
}

/* ------------------------------------------------------------------------ */
/* /ar app mirror (Stage 0).                                                 */
/*                                                                           */
/* /ar/<path> for a localized page WITHOUT a dedicated Arabic landing file   */
/* (AR_PATHS) is rewritten by middleware to the English route with           */
/* ROUTE_LANG_HEADER=ar: the same page with the Arabic UI strings, RTL.      */
/* Mirrors of LOCALIZED_PATHS pages are indexable, with Arabic metadata,     */
/* self-canonical, hreflang and sitemap entries. The AR_MIRROR_EXTRA mirrors */
/* (personal / EN-only pages) stay noindex (X-Robots-Tag). The 4 AR_PATHS    */
/* landing pages keep their own route files.                                 */
/* ------------------------------------------------------------------------ */

export const AR_PREFIX = '/ar';

/** '/ar/ikhtiyarat' -> '/ikhtiyarat', '/ar' -> '/'; null if not under /ar. */
export function stripArPrefix(pathname: string): string | null {
  if (pathname === AR_PREFIX || pathname === `${AR_PREFIX}/`) return '/';
  if (pathname.startsWith(`${AR_PREFIX}/`)) return pathname.slice(AR_PREFIX.length).replace(/\/+$/, '') || '/';
  return null;
}

/** Localized EN paths served through the /ar app mirror (everything except the dedicated landing pages). */
/** EN-only pages (no /fr mirror) that also get an /ar app mirror (noindex: personal or not yet localized). */
export const AR_MIRROR_EXTRA: readonly string[] = ['/99-names-of-allah', '/planet-transit', '/birth-profile'];

/** /ar app mirrors that are indexable: the localized pages (not AR_MIRROR_EXTRA). */
export function isIndexableArAppPath(enPath: string): boolean {
  return isLocalizedPath(enPath) && !(enPath in AR_PATHS);
}

export function isArAppPath(enPath: string): boolean {
  return (isLocalizedPath(enPath) || AR_MIRROR_EXTRA.includes(enPath)) && !(enPath in AR_PATHS);
}

/** '/ikhtiyarat' -> '/ar/ikhtiyarat', '/' -> '/ar'. For dedicated landing pages, their AR_PATHS URL. */
export function arAppPath(enPath: string): string {
  if (AR_PATHS[enPath]) return AR_PATHS[enPath];
  return enPath === '/' ? AR_PREFIX : `${AR_PREFIX}${enPath}`;
}

/* ------------------------------------------------------------------------ */
/* Urdu (/ur/...), phase 1 — under native review.                            */
/*                                                                           */
/* Dedicated route files (app/ur/**) with Urdu copy around the unchanged     */
/* tool component, like the /ar landing pages. Every /ur page is noindex and */
/* out of the sitemap and hreflang, EXCEPT the allow-listed pages in         */
/* INDEXABLE_UR_PATHS (only /ur/abjad), which are indexable, in the sitemap  */
/* and paired with EN/FR/AR through hreflang `ur`.                           */
/* ------------------------------------------------------------------------ */

export const UR_PREFIX = '/ur';

/** EN path -> its Urdu page. */
export const UR_PATHS: Readonly<Record<string, string>> = {
  '/': '/ur',
  '/name-and-mother-burj': '/ur/name-and-mother-burj',
  '/compatibility': '/ur/compatibility',
  '/abjad': '/ur/abjad',
  '/planetary-hours': '/ur/planetary-hours',
  '/planet-of-the-day': '/ur/planet-of-the-day',
  '/ikhtiyarat': '/ur/ikhtiyarat',
};

/** '/ur/abjad' -> '/abjad', '/ur' -> '/'; null if the path is not under /ur. */
export function stripUrPrefix(pathname: string): string | null {
  if (pathname === UR_PREFIX || pathname === `${UR_PREFIX}/`) return '/';
  if (pathname.startsWith(`${UR_PREFIX}/`)) return pathname.slice(UR_PREFIX.length).replace(/\/+$/, '') || '/';
  return null;
}

/** True for any URL under /ur. */
export function isUrPath(pathname: string): boolean {
  return stripUrPrefix(pathname) !== null;
}

/**
 * Indexable-Urdu allow-list (21 Oct 2026): EN paths whose Urdu page has passed the native review
 * and is indexable, with hreflang `ur` both ways and a sitemap entry. Every other /ur page keeps
 * the noindex default (layout metadata + X-Robots-Tag in middleware).
 */
export const INDEXABLE_UR_PATHS: readonly string[] = ['/abjad'];

/** True when the EN path's Urdu page is on the allow-list. */
export function isIndexableUrEnPath(enPath: string): boolean {
  return INDEXABLE_UR_PATHS.includes(enPath) && enPath in UR_PATHS;
}

/** True for an allow-listed /ur URL ('/ur/abjad'); false for every other /ur URL. */
export function isIndexableUrPath(pathname: string): boolean {
  const en = stripUrPrefix(pathname);
  return en !== null && isIndexableUrEnPath(en) && pathname.replace(/\/+$/, '') === UR_PATHS[en];
}

/** Absolute URL of the indexable Urdu page for an EN path, or null. */
export function indexableUrduUrl(enPath: string): string | null {
  return isIndexableUrEnPath(enPath) ? absoluteUrl(UR_PATHS[enPath]) : null;
}
