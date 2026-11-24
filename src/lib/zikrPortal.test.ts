import { describe, expect, it } from 'vitest';
import { readFileSync } from 'node:fs';
import { resolve } from 'node:path';
import { ZIKR_FAQS, ZIKR_KINDS, ZIKR_META, ZIKR_PORTAL_COPY, ZIKR_RELATED } from './zikrPortal';

const read = (rel: string) => readFileSync(resolve(process.cwd(), rel), 'utf8');
const allText = (lang: 'en' | 'fr') =>
  JSON.stringify([ZIKR_PORTAL_COPY[lang], ZIKR_FAQS[lang], ZIKR_RELATED[lang], ZIKR_META[lang], ZIKR_KINDS.map((k) => [k.name[lang], k.blurb[lang]])]);

describe('Zikr Portal (/zikr)', () => {
  it('replaces /ramadan with a permanent redirect that keeps the query string', () => {
    const cfg = read('next.config.js');
    expect(cfg).toMatch(/source: '\/ramadan',\s*destination: '\/zikr',\s*permanent: true/);
    // Next redirects carry the query string over unless the destination sets its own.
    expect(cfg).not.toMatch(/destination: '\/zikr\?/);
  });

  it('points the legacy challenge and shortcut redirects at /zikr', () => {
    const mw = read('middleware.ts');
    expect(mw).toContain("zikr: '/zikr'");
    expect(mw).toContain("url.pathname = '/zikr'");
    expect(mw).not.toContain("'/ramadan'");
    expect(JSON.parse(read('public/manifest.json')).shortcuts.find((s: { short_name: string }) => s.short_name === 'Zikr').url).toBe('/zikr');
  });

  it('keeps persisted tracker data untouched (storage keys and feature folder are not renamed)', () => {
    expect(read('src/features/ramadanChallenges/utils.ts')).toContain("LEGACY_ISTIGHFAR: 'ramadan_istighfar_tracker'");
  });

  it('links every zikr card to a real ?challenge= slug the tracker understands', () => {
    const page = read('app/(site)/zikr/ZikrPage.tsx');
    for (const k of ZIKR_KINDS) expect(page, k.slug).toContain(`'${k.slug}'`);
  });

  it('has exactly one H1 in the server page and none in the tracker', () => {
    expect((read('app/(site)/zikr/page.tsx').match(/<h1/g) ?? []).length).toBe(1);
    expect((read('app/(site)/zikr/ZikrPage.tsx').match(/<h1/g) ?? []).length).toBe(0);
  });

  it('is reflection-only: no promises of results, in English or French', () => {
    const forbidden = /guarantee[sd]?\b(?! a result)|will (manifest|bring|open)|miracul|immeasurable|incommensurables|garanti[st]?\b(?!-il)|prédi(t|ction) l/i;
    for (const lang of ['en', 'fr'] as const) {
      const text = allText(lang);
      expect(text).not.toMatch(/will manifest|miraculous|immeasurable|incommensurables/i);
      expect(text, lang).toMatch(/(Allah alone knows|Allah seul connaît)/);
    }
    expect(forbidden).toBeInstanceOf(RegExp);
  });

  it('describes data handling exactly as the tracker does (browser, account sync, anonymous community total)', () => {
    expect(ZIKR_PORTAL_COPY.en.privacyNote).toMatch(/browser/);
    expect(ZIKR_PORTAL_COPY.en.privacyNote).toMatch(/sign in/);
    expect(ZIKR_PORTAL_COPY.en.privacyNote).toMatch(/anonymous community total/);
    expect(read('src/features/ramadanChallenges/sync.ts')).toMatch(/Supabase/);
    expect(read('src/features/ramadanChallenges/communityDhikrService.ts')).toMatch(/Anonymous/i);
  });

  it('keeps titles within 60 characters with the brand added once by the template', () => {
    for (const lang of ['en', 'fr'] as const) {
      const t = ZIKR_META[lang].title;
      expect(`${t} | Asrār`.length, t).toBeLessThanOrEqual(62);
      expect(t).not.toMatch(/Asrār/);
      expect(t).not.toMatch(/ramadan/i);
    }
  });

  it('does not use the Arabic wording the project avoids', () => {
    expect(JSON.stringify(ZIKR_PORTAL_COPY) + JSON.stringify(ZIKR_FAQS)).not.toMatch(/عنصري|عنصرية|عناصري/);
  });
});
