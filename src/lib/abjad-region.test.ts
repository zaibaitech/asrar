import { describe, expect, it } from 'vitest';
import { NextRequest } from 'next/server';
import { middleware } from '../../middleware';
import {
  ABJAD_DEFAULT_COOKIE,
  ABJAD_PREF_COOKIE,
  MAGHRIBI_COUNTRY_CODES,
  abjadSystemForCountry,
  applyAbjadRegionDefaultCookie,
  parseAbjadSystemKey,
  readCookie,
  resolvePreferredAbjadSystem,
} from './abjad-region';

function cookieValue(res: { cookies: { get(name: string): { value: string } | undefined } }, name: string) {
  return res.cookies.get(name)?.value;
}

describe('country → Abjad system mapping', () => {
  it('maps the Maghreb and West Africa to Maghribi', () => {
    expect(MAGHRIBI_COUNTRY_CODES).toHaveLength(22);
    for (const code of MAGHRIBI_COUNTRY_CODES) {
      expect(abjadSystemForCountry(code), code).toBe('maghribi');
      expect(abjadSystemForCountry(code.toLowerCase()), code).toBe('maghribi');
    }
    expect(abjadSystemForCountry(' SN ')).toBe('maghribi');
  });

  it('maps everyone else, including Egypt and Sudan, and unknown input, to Mashriqi', () => {
    for (const code of ['GB', 'US', 'FR', 'EG', 'SD', 'SA', 'AE', 'PK', 'IN', 'TR', 'ID', 'XX', '', '  ']) {
      expect(abjadSystemForCountry(code), code).toBe('mashriqi');
    }
    expect(abjadSystemForCountry(null)).toBe('mashriqi');
    expect(abjadSystemForCountry(undefined)).toBe('mashriqi');
  });
});

describe('visitor default precedence: user choice > region > Mashriqi', () => {
  it('an explicit saved choice always wins', () => {
    expect(resolvePreferredAbjadSystem({ saved: 'Mashriqi', regionDefault: 'maghribi' })).toBe('Mashriqi');
    expect(resolvePreferredAbjadSystem({ saved: 'Maghribi', regionDefault: 'mashriqi' })).toBe('Maghribi');
  });

  it('with no saved choice, uses the region default, else Mashriqi', () => {
    expect(resolvePreferredAbjadSystem({ saved: null, regionDefault: 'maghribi' })).toBe('Maghribi');
    expect(resolvePreferredAbjadSystem({ saved: null, regionDefault: 'mashriqi' })).toBe('Mashriqi');
    expect(resolvePreferredAbjadSystem({ saved: null, regionDefault: null })).toBe('Mashriqi');
    expect(resolvePreferredAbjadSystem({ saved: undefined, regionDefault: undefined })).toBe('Mashriqi');
    expect(resolvePreferredAbjadSystem({ saved: 'garbage' as never, regionDefault: 'maghribi' })).toBe('Maghribi');
  });
});

describe('cookie helpers and middleware', () => {
  it('parses only maghribi/mashriqi (any case)', () => {
    expect(parseAbjadSystemKey('Mashriqi')).toBe('mashriqi');
    expect(parseAbjadSystemKey('MAGHRIBI')).toBe('maghribi');
    expect(parseAbjadSystemKey('abjad_default=mashriqi')).toBeNull();
    expect(parseAbjadSystemKey('GB')).toBeNull();
    expect(parseAbjadSystemKey(undefined)).toBeNull();
  });

  it('reads a named cookie and never treats other values as a system', () => {
    expect(readCookie(`${ABJAD_DEFAULT_COOKIE}=maghribi; other=1`, ABJAD_DEFAULT_COOKIE)).toBe('maghribi');
    expect(readCookie('foo=bar', ABJAD_DEFAULT_COOKIE)).toBeUndefined();
  });

  it('middleware sets abjad_default from x-vercel-ip-country and never writes the country', async () => {
    const sn = await middleware(
      new NextRequest('https://www.asrar.app/abjad', {
        headers: { 'x-vercel-ip-country': 'SN' },
      })
    );
    expect(cookieValue(sn, ABJAD_DEFAULT_COOKIE)).toBe('maghribi');
    expect(sn.headers.get('set-cookie') ?? '').not.toMatch(/SN|Senegal|x-vercel-ip-country/i);

    const gb = await middleware(
      new NextRequest('https://www.asrar.app/abjad', {
        headers: { 'x-vercel-ip-country': 'GB' },
      })
    );
    expect(cookieValue(gb, ABJAD_DEFAULT_COOKIE)).toBe('mashriqi');

    const unknown = await middleware(new NextRequest('https://www.asrar.app/abjad'));
    expect(cookieValue(unknown, ABJAD_DEFAULT_COOKIE)).toBe('mashriqi');
  });

  it('does not set or change abjad_default when the visitor already has a preference cookie', async () => {
    const req = new NextRequest('https://www.asrar.app/abjad', {
      headers: {
        'x-vercel-ip-country': 'SN',
        cookie: `${ABJAD_PREF_COOKIE}=mashriqi`,
      },
    });
    const res = await middleware(req);
    expect(cookieValue(res, ABJAD_DEFAULT_COOKIE)).toBeUndefined();

    // Helper: existing region cookie is left alone when a pref is present
    const bag = new Map<string, string>();
    applyAbjadRegionDefaultCookie(
      {
        cookies: { get: (n) => (n === ABJAD_PREF_COOKIE ? { value: 'maghribi' } : undefined) },
        headers: { get: () => 'GB' },
      },
      { cookies: { set: (n, v) => void bag.set(n, v) } }
    );
    expect(bag.size).toBe(0);
  });
});
