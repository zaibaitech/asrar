/**
 * Middleware for Asrār Everyday
 * 
 * Handles:
 * 1. Language detection from URL params, cookies, or Accept-Language header
 * 2. Sets language cookie for server-side rendering of correct OG tags
 */

import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

const SUPPORTED_LANGUAGES = ['en', 'fr'] as const;
type Language = typeof SUPPORTED_LANGUAGES[number];
const DEFAULT_LANGUAGE: Language = 'en';
const LANGUAGE_COOKIE = 'asrar_lang';

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
  const response = NextResponse.next();
  
  // Detect language
  const language = detectLanguage(request);
  
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
