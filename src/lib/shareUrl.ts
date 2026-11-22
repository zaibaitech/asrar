/**
 * Outbound share links with UTM attribution.
 *
 * Shared links used to arrive in GA as "Direct" (WhatsApp and most apps send
 * no referrer). Every URL we hand to navigator.share, the clipboard or a
 * WhatsApp/Telegram/X/Facebook intent goes through `withShareUtm()`, which adds
 *   utm_source=<whatsapp|facebook|x|telegram|copy|native>
 *   utm_medium=social
 *   utm_campaign=share
 *   utm_content=<page slug>
 *
 * PRIVACY: the shared URL is rebuilt from the origin + path only. Every
 * existing query parameter and the #hash are dropped unless the caller names
 * it in `keep` (fixed enum values such as ?challenge=<slug> or ?lang=fr).
 * Never keep a parameter that can hold user input (names, mother's names,
 * birth data, dates, locations, typed text, results).
 */

export const SHARE_SOURCES = ['whatsapp', 'facebook', 'x', 'telegram', 'copy', 'native'] as const;
export type ShareSource = (typeof SHARE_SOURCES)[number];

export const SITE_URL = 'https://www.asrar.app';

const LOCALE_PREFIXES = new Set(['ar', 'fr', 'ur']);

/** Only lower-case slug characters, so utm_content can never carry free text. */
function cleanSlug(s: string): string {
  return s
    .toLowerCase()
    .replace(/[^a-z0-9-]+/g, '-')
    .replace(/-{2,}/g, '-')
    .replace(/^-|-$/g, '')
    .slice(0, 100);
}

/** "/ar/name-and-mother-burj" -> "name-and-mother-burj"; "/" -> "home"; "/best-day-for/marriage" -> "best-day-for-marriage". */
export function pageSlug(pathname: string): string {
  const parts = pathname.split('/').filter(Boolean);
  if (parts.length && LOCALE_PREFIXES.has(parts[0])) parts.shift();
  const slug = cleanSlug(parts.join('-'));
  return slug || 'home';
}

export type ShareUrlOptions = {
  /** Query params to keep from the input URL. Only fixed, non-user values. */
  keep?: readonly string[];
  /** Override utm_content (sanitised to a slug). Defaults to the page slug. */
  content?: string;
};

/** Absolute, UTM-tagged share URL with every non-allow-listed param removed. */
export function withShareUtm(url: string, source: ShareSource, { keep = [], content }: ShareUrlOptions = {}): string {
  let parsed: URL;
  try {
    parsed = new URL(url, SITE_URL);
  } catch {
    parsed = new URL(SITE_URL);
  }
  const out = new URL(parsed.origin + parsed.pathname);
  for (const key of keep) {
    if (key.startsWith('utm_')) continue;
    const value = parsed.searchParams.get(key);
    if (value !== null) out.searchParams.set(key, value);
  }
  out.searchParams.set('utm_source', source);
  out.searchParams.set('utm_medium', 'social');
  out.searchParams.set('utm_campaign', 'share');
  out.searchParams.set('utm_content', content ? cleanSlug(content) || pageSlug(parsed.pathname) : pageSlug(parsed.pathname));
  return out.toString();
}

/** Source for the common "navigator.share, else copy to clipboard" pattern. */
export function nativeOrCopySource(): ShareSource {
  return typeof navigator !== 'undefined' && typeof navigator.share === 'function' ? 'native' : 'copy';
}

/** The current page (origin + path, no query or hash), for "share this page" buttons. */
export function currentPageUrl(): string {
  if (typeof window === 'undefined') return SITE_URL;
  return window.location.origin + window.location.pathname;
}
