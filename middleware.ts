/**
 * Middleware for Asrār Everyday
 * 
 * Handles:
 * 1. Language detection from URL params, cookies, or Accept-Language header
 * 2. Sets language cookie for server-side rendering of correct OG tags
 * 3. French mirror routes: /fr/<path> is rewritten to the English route file
 *    with ROUTE_LANG_HEADER=fr (FR copy, /fr canonical, hreflang), and
 *    ?lang=fr on an EN page that has a mirror 301s to its /fr URL.
 */

import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { ROUTE_LANG_HEADER, frPath, isArAppPath, isIndexableArAppPath, isIndexableUrPath, isLocalizedPath, isUrPath, stripArPrefix, stripFrPrefix } from './src/lib/i18nRoutes';

const SUPPORTED_LANGUAGES = ['en', 'fr', 'ar'] as const;
type Language = typeof SUPPORTED_LANGUAGES[number];
const DEFAULT_LANGUAGE: Language = 'en';
const LANGUAGE_COOKIE = 'asrar_lang';

/** Old manifest shortcut ids -> the routes the shortcuts now point to directly. */
const LEGACY_SHORTCUTS: Record<string, string> = {
  'planetary-hours': '/planetary-hours',
  zikr: '/ramadan',
};

/**
 * Detect language from request
 */
function detectLanguage(request: NextRequest): Language {
  // 1. Check URL param: ?lang=fr
  const urlLang = request.nextUrl.searchParams.get('lang');
  if (urlLang && SUPPORTED_LANGUAGES.includes(urlLang as Language)) {
    return urlLang as Language;
  }

  // 2. Check existing cookie
  const cookieLang = request.cookies.get(LANGUAGE_COOKIE)?.value;
  if (cookieLang && SUPPORTED_LANGUAGES.includes(cookieLang as Language)) {
    return cookieLang as Language;
  }

  // 3. Check Accept-Language header
  const acceptLanguage = request.headers.get('accept-language') || '';
  if (acceptLanguage.toLowerCase().startsWith('fr')) {
    return 'fr';
  }

  // 4. Default to English
  return DEFAULT_LANGUAGE;
}

export function middleware(request: NextRequest) {
  // Redirect legacy /?challenge=... links to /ramadan?challenge=...
  const challengeParam = request.nextUrl.searchParams.get('challenge');
  if (challengeParam && request.nextUrl.pathname === '/') {
    const url = request.nextUrl.clone();
    url.pathname = '/ramadan';
    // searchParams (challenge, lang) are preserved automatically
    return NextResponse.redirect(url, 301);
  }

  // Legacy PWA manifest shortcuts (/?shortcut=planetary-hours, /?shortcut=zikr)
  // that installed apps may still have cached: send them to the real pages.
  const shortcutParam = request.nextUrl.searchParams.get('shortcut');
  if (shortcutParam && request.nextUrl.pathname === '/') {
    const target = LEGACY_SHORTCUTS[shortcutParam];
    if (target) {
      const url = request.nextUrl.clone();
      url.pathname = target;
      url.searchParams.delete('shortcut');
      return NextResponse.redirect(url, 301);
    }
  }

  const { pathname, searchParams } = request.nextUrl;
  const langParam = searchParams.get('lang');

  // Requests never get to choose the route language themselves.
  const requestHeaders = new Headers(request.headers);
  requestHeaders.delete(ROUTE_LANG_HEADER);

  let response: NextResponse;
  let language: Language;

  const frTarget = stripFrPrefix(pathname);
  const arTarget = stripArPrefix(pathname);
  if (arTarget !== null && isArAppPath(arTarget)) {
    // /ar/... app mirror: the EN page re-exported under app/(ar), Arabic UI, RTL. Mirrors of the
    // localized SEO pages are indexable; the others (birth profile etc.) stay noindex.
    if (langParam) {
      const url = request.nextUrl.clone();
      url.searchParams.delete('lang');
      if (langParam === 'en') url.pathname = arTarget;
      if (langParam === 'fr') url.pathname = frPath(arTarget);
      response = NextResponse.redirect(url, 301);
      language = (SUPPORTED_LANGUAGES as readonly string[]).includes(langParam) ? (langParam as Language) : 'ar';
    } else {
      // The /ar/<path> route files live in app/(ar) (own root layout: lang="ar"
      // dir="rtl" from the server) and re-export the EN page, so no rewrite.
      requestHeaders.set(ROUTE_LANG_HEADER, 'ar');
      response = NextResponse.next({ request: { headers: requestHeaders } });
      if (!isIndexableArAppPath(arTarget)) response.headers.set('X-Robots-Tag', 'noindex, follow');
      language = detectLanguage(request);
    }
  } else if (frTarget !== null && isLocalizedPath(frTarget)) {
    // /fr/... mirror. ?lang= on a /fr URL is redundant (fr) or a request for
    // the English page (en): redirect so each language has one clean URL.
    if (langParam === 'en' || langParam === 'fr') {
      const url = request.nextUrl.clone();
      url.searchParams.delete('lang');
      if (langParam === 'en') url.pathname = frTarget;
      response = NextResponse.redirect(url, 301);
      language = langParam;
    } else {
      const url = request.nextUrl.clone();
      url.pathname = frTarget;
      requestHeaders.set(ROUTE_LANG_HEADER, 'fr');
      response = NextResponse.rewrite(url, { request: { headers: requestHeaders } });
      // The URL decides this page's language; keep the visitor's own
      // preference cookie as it was (same detection as any other page).
      language = detectLanguage(request);
    }
  } else if (langParam === 'fr' && isLocalizedPath(pathname)) {
    // Legacy ?lang=fr on an EN URL that now has a French mirror.
    const url = request.nextUrl.clone();
    url.searchParams.delete('lang');
    url.pathname = frPath(pathname);
    response = NextResponse.redirect(url, 301);
    language = 'fr';
  } else {
    response = NextResponse.next({ request: { headers: requestHeaders } });
    // Urdu pages (app/ur/**): noindex (also set in their metadata), except the reviewed,
    // allow-listed pages (INDEXABLE_UR_PATHS: /ur/abjad only).
    if (isUrPath(pathname) && !isIndexableUrPath(pathname)) response.headers.set('X-Robots-Tag', 'noindex, follow');
    language = detectLanguage(request);
  }
  
  // Set language cookie for server-side rendering
  // This helps generateMetadata read the user's language preference
  response.cookies.set(LANGUAGE_COOKIE, language, {
    path: '/',
    maxAge: 60 * 60 * 24 * 365, // 1 year
    sameSite: 'lax',
  });

  return response;
}

// Only run middleware on specific paths (not on static files, api routes, etc.)
export const config = {
  matcher: [
    /*
     * Match all request paths except:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - api routes
     * - static assets
     */
    '/((?!_next/static|_next/image|favicon.ico|api|.*\\..*).*)' 
  ],
};
