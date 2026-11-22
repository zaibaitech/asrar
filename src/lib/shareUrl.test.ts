import { afterEach, describe, expect, it, vi } from 'vitest';
import { nativeOrCopySource, pageSlug, withShareUtm as shareUrl } from './shareUrl';

describe('pageSlug', () => {
  it('drops the locale prefix and joins segments', () => {
    expect(pageSlug('/ar/name-and-mother-burj')).toBe('name-and-mother-burj');
    expect(pageSlug('/fr/compatibility')).toBe('compatibility');
    expect(pageSlug('/best-day-for/marriage')).toBe('best-day-for-marriage');
    expect(pageSlug('/')).toBe('home');
    expect(pageSlug('/ur')).toBe('home');
  });
});

describe('shareUrl', () => {
  it('adds the UTM set', () => {
    const u = new URL(shareUrl('https://www.asrar.app/ar/compatibility', 'whatsapp'));
    expect(u.origin + u.pathname).toBe('https://www.asrar.app/ar/compatibility');
    expect(Object.fromEntries(u.searchParams)).toEqual({
      utm_source: 'whatsapp',
      utm_medium: 'social',
      utm_campaign: 'share',
      utm_content: 'compatibility',
    });
  });

  it('strips every query param and hash that is not allow-listed', () => {
    const u = new URL(
      shareUrl('https://www.asrar.app/ikhtiyarat/r/2026-01-01?lat=51.5&lon=-0.1&tz=Europe%2FLondon&name=Fatima&mother=Aisha#result', 'copy'),
    );
    for (const k of ['lat', 'lon', 'tz', 'name', 'mother']) expect(u.searchParams.has(k)).toBe(false);
    expect(u.hash).toBe('');
    expect(u.toString()).not.toMatch(/Fatima|Aisha|51\.5/);
  });

  it('keeps only named fixed params and never a caller utm_*', () => {
    const u = new URL(shareUrl('https://www.asrar.app/ramadan?challenge=prophetic-names&lang=fr&name=Ali&utm_source=evil', 'telegram', { keep: ['challenge', 'lang', 'utm_source'] }));
    expect(u.searchParams.get('challenge')).toBe('prophetic-names');
    expect(u.searchParams.get('lang')).toBe('fr');
    expect(u.searchParams.has('name')).toBe(false);
    expect(u.searchParams.get('utm_source')).toBe('telegram');
  });

  it('resolves relative paths against the site and sanitises utm_content', () => {
    const u = new URL(shareUrl('/fr/name-and-mother-burj', 'x', { content: 'Hello World <script>' }));
    expect(u.origin).toBe('https://www.asrar.app');
    expect(u.searchParams.get('utm_content')).toBe('hello-world-script');
  });
});

describe('nativeOrCopySource', () => {
  afterEach(() => vi.unstubAllGlobals());
  it('is copy without navigator.share and native with it', () => {
    vi.stubGlobal('navigator', {});
    expect(nativeOrCopySource()).toBe('copy');
    vi.stubGlobal('navigator', { share: () => Promise.resolve() });
    expect(nativeOrCopySource()).toBe('native');
  });
});
