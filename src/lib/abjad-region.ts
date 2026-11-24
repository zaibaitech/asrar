/**
 * Region default for the Abjad letter-table switch.
 *
 * Maghribi is used in the Maghreb and West Africa; Mashriqi everywhere else
 * (including Egypt and Sudan). The list is a starting point and can be adjusted.
 *
 * Only the derived system ('maghribi' | 'mashriqi') is ever written to a cookie
 * or sent to the client. The country code and IP are never stored or passed to
 * analytics.
 */
import type { AbjadSystemKey } from './abjad-maps';

/** Capitalised label used by AbjadContext / localStorage. */
export type AbjadSystemTitle = 'Maghribi' | 'Mashriqi';

/** ISO 3166-1 alpha-2 countries whose traditional table is Maghribi. */
export const MAGHRIBI_COUNTRY_CODES = [
  'MA', // Morocco
  'DZ', // Algeria
  'TN', // Tunisia
  'LY', // Libya
  'MR', // Mauritania
  'EH', // Western Sahara
  'SN', // Senegal
  'GM', // Gambia
  'ML', // Mali
  'GN', // Guinea
  'GW', // Guinea-Bissau
  'NE', // Niger
  'NG', // Nigeria
  'BF', // Burkina Faso
  'CI', // Côte d'Ivoire
  'GH', // Ghana
  'SL', // Sierra Leone
  'LR', // Liberia
  'TD', // Chad
  'CM', // Cameroon
  'BJ', // Benin
  'TG', // Togo
] as const;

const MAGHRIBI_COUNTRIES = new Set<string>(MAGHRIBI_COUNTRY_CODES);

/** Region-derived default. Set by middleware only when the visitor has no saved choice. */
export const ABJAD_DEFAULT_COOKIE = 'abjad_default';

/** Explicit user choice (mirrors localStorage). Always wins over the region default. */
export const ABJAD_PREF_COOKIE = 'abjad_pref';

export function abjadSystemForCountry(
  country: string | null | undefined
): AbjadSystemKey {
  const code = country?.trim().toUpperCase();
  if (code && MAGHRIBI_COUNTRIES.has(code)) return 'maghribi';
  return 'mashriqi';
}

export function parseAbjadSystemKey(value: unknown): AbjadSystemKey | null {
  if (typeof value !== 'string') return null;
  const v = value.trim().toLowerCase();
  return v === 'maghribi' || v === 'mashriqi' ? v : null;
}

export function systemKeyToTitle(key: AbjadSystemKey): AbjadSystemTitle {
  return key === 'mashriqi' ? 'Mashriqi' : 'Maghribi';
}

export function systemTitleToKey(system: AbjadSystemTitle): AbjadSystemKey {
  return system === 'Mashriqi' ? 'mashriqi' : 'maghribi';
}

/**
 * Visitor-facing default for the switch:
 * explicit user choice > region default > Mashriqi.
 */
export function resolvePreferredAbjadSystem(opts: {
  saved: AbjadSystemTitle | null | undefined;
  regionDefault: AbjadSystemKey | null | undefined;
}): AbjadSystemTitle {
  if (opts.saved === 'Maghribi' || opts.saved === 'Mashriqi') return opts.saved;
  if (opts.regionDefault === 'maghribi') return 'Maghribi';
  return 'Mashriqi';
}

export function readCookie(cookieHeader: string | undefined, name: string): string | undefined {
  if (!cookieHeader) return undefined;
  for (const part of cookieHeader.split(';')) {
    const trimmed = part.trim();
    const eq = trimmed.indexOf('=');
    if (eq === -1) continue;
    if (trimmed.slice(0, eq) === name) {
      try {
        return decodeURIComponent(trimmed.slice(eq + 1));
      } catch {
        return trimmed.slice(eq + 1);
      }
    }
  }
  return undefined;
}

const REGION_COOKIE_MAX_AGE = 60 * 60 * 24 * 30; // 30 days
const PREF_COOKIE_MAX_AGE = 60 * 60 * 24 * 365; // 1 year

type CookieReader = { get(name: string): { value: string } | undefined };
type CookieWriter = {
  set(name: string, value: string, options: { path: string; maxAge: number; sameSite: 'lax' }): void;
};

/**
 * If the visitor has not saved a choice, set `abjad_default` to the system
 * derived from `x-vercel-ip-country`. Does nothing when a pref cookie is present.
 * Never writes the country code.
 */
export function applyAbjadRegionDefaultCookie(
  request: { cookies: CookieReader; headers: { get(name: string): string | null } },
  response: { cookies: CookieWriter }
): void {
  if (parseAbjadSystemKey(request.cookies.get(ABJAD_PREF_COOKIE)?.value)) return;
  const system = abjadSystemForCountry(request.headers.get('x-vercel-ip-country'));
  const existing = parseAbjadSystemKey(request.cookies.get(ABJAD_DEFAULT_COOKIE)?.value);
  if (existing === system) return;
  response.cookies.set(ABJAD_DEFAULT_COOKIE, system, {
    path: '/',
    maxAge: REGION_COOKIE_MAX_AGE,
    sameSite: 'lax',
  });
}

export function writeAbjadPrefCookie(system: AbjadSystemTitle): void {
  try {
    if (typeof document === 'undefined') return;
    document.cookie = `${ABJAD_PREF_COOKIE}=${systemTitleToKey(system)};path=/;max-age=${PREF_COOKIE_MAX_AGE};samesite=lax`;
  } catch {
    // private mode: the in-memory choice still applies
  }
}

export function readRegionAbjadDefault(cookieHeader?: string): AbjadSystemKey | null {
  const header =
    cookieHeader ?? (typeof document === 'undefined' ? undefined : document.cookie);
  return parseAbjadSystemKey(readCookie(header, ABJAD_DEFAULT_COOKIE));
}
