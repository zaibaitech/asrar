import { describe, expect, it } from 'vitest';
import { readFileSync } from 'node:fs';
import { resolve } from 'node:path';
import sitemap from '../../app/sitemap';
import { INFO_PAGES } from './siteRoutes';
import {
  ABOUT_COPY,
  ABOUT_LEAD,
  ABOUT_LEADS,
  METHOD_COPY,
  METHODOLOGY_LEAD,
  localizeInfoHref,
} from './infoPageCopy';
import { AR_PATHS, INDEXABLE_UR_PATHS, LOCALIZED_PATHS, UR_PATHS, hreflangLanguages } from './i18nRoutes';

const read = (rel: string) => readFileSync(resolve(process.cwd(), rel), 'utf8');
const wordCount = (s: string) => s.trim().split(/\s+/).length;
const REGIONAL = /West African|Senegalese|Gambia|Gambian|Wolof|sarax|Tamxarit|Gamo|Korité|Tabaski|ouest-africain|sénégalais|africain de l.ouest/i;
const FORBIDDEN_AR = /عنصري|عنصرية|عناصري/;

describe('About and Methodology information pages', () => {
  it('exports 40–60 word answer-first English leads', () => {
    expect(wordCount(ABOUT_LEAD)).toBeGreaterThanOrEqual(40);
    expect(wordCount(ABOUT_LEAD)).toBeLessThanOrEqual(60);
    expect(wordCount(METHODOLOGY_LEAD)).toBeGreaterThanOrEqual(40);
    expect(wordCount(METHODOLOGY_LEAD)).toBeLessThanOrEqual(60);
  });

  it('lists EN/FR/AR/UR /about and /methodology in the sitemap, with lastModified and full hreflang', () => {
    const urls = sitemap().map((e) => e.url);
    expect(INFO_PAGES.map((p) => p.path).sort()).toEqual(['/about', '/methodology']);
    for (const path of ['/about', '/methodology']) {
      expect(LOCALIZED_PATHS).toContain(path);
      expect(AR_PATHS[path]).toBe(`/ar${path}`);
      expect(UR_PATHS[path]).toBe(`/ur${path}`);
      expect(INDEXABLE_UR_PATHS).toContain(path);
      expect(urls).toContain(`https://www.asrar.app${path}`);
      expect(urls).toContain(`https://www.asrar.app/fr${path}`);
      expect(urls).toContain(`https://www.asrar.app/ar${path}`);
      expect(urls).toContain(`https://www.asrar.app/ur${path}`);
      const entry = sitemap().find((e) => e.url === `https://www.asrar.app${path}`);
      expect(entry?.lastModified, path).toBeInstanceOf(Date);
      const langs = hreflangLanguages(path);
      expect(langs.en).toContain(path);
      expect(langs.fr).toContain(`/fr${path}`);
      expect(langs.ar).toContain(`/ar${path}`);
      expect(langs['x-default']).toBe(langs.en);
      expect(langs.ur).toContain(`/ur${path}`);
    }
  });

  it('gives each locale page a single H1 via the shared view, and AboutPage or WebPage JSON-LD with a breadcrumb', () => {
    const view = read('src/components/seo/InfoPageView.tsx');
    expect(view.match(/<h1 /g)?.length).toBe(1);
    expect(view).toContain("'AboutPage'");
    expect(view).toContain("'WebPage'");
    expect(view).toContain("'BreadcrumbList'");
    expect(read('app/(site)/about/page.tsx')).toContain('infoPageMetadata(PATH, lang, ABOUT_META[lang])');
    expect(read('app/(site)/methodology/page.tsx')).toContain('infoPageMetadata(PATH, lang, METHODOLOGY_META[lang])');
    expect(read('app/(ar)/ar/about/page.tsx')).toContain('lang="ar"');
    expect(read('app/(ar)/ar/methodology/page.tsx')).toContain('lang="ar"');
    expect(read('app/(ur)/ur/about/page.tsx')).toContain('urduMetadata');
    expect(read('app/(ur)/ur/methodology/page.tsx')).toContain('urduMetadata');
  });

  it('links both pages from the app footer in EN, FR, AR and UR, with the existing footer hover style', () => {
    const footer = read('asrar-everyday-app.tsx');
    expect(footer).toMatch(/href=\{uiLanguage === 'fr' \? '\/fr\/about'/);
    expect(footer).toMatch(/'\/fr\/methodology'/);
    expect(footer).toMatch(/'\/ar\/about'/);
    expect(footer).toMatch(/'\/ar\/methodology'/);
    expect(footer).toMatch(/'\/ur\/about'/);
    expect(footer).toMatch(/'\/ur\/methodology'/);
    expect(footer).toMatch(/hover:text-purple-600 dark:hover:text-purple-400 transition-colors/);
  });

  it('points Organization JSON-LD at /about and does not invent a contact channel or scholar', () => {
    const org = read('src/components/seo/HomeJsonLd.tsx');
    expect(org).toContain("url: absoluteUrl('/about')");
    expect(org).toContain('description:');
    const about = JSON.stringify(ABOUT_COPY);
    expect(about).toContain('zaibaitech.com');
    expect(read('src/components/seo/InfoPageView.tsx')).toContain('FACEBOOK_PAGE_URL');
    expect(about).not.toMatch(/@AsrarEveryday|security@zaibaitech/);
    const methodEn = METHOD_COPY.en;
    const methodText = [methodEn.abjadTitle, ...methodEn.abjadParts, methodEn.sadaqaP1, ...methodEn.sadaqaP2Parts, methodEn.notTitle, ...methodEn.notParts].join(' ');
    expect(methodText).toMatch(/Maghribi/);
    expect(methodText).toMatch(/Mashriqi/);
    expect([...methodEn.hoursParts].join(' ')).toMatch(/Chaldean/);
    expect([...methodEn.manazilParts].join(' ')).toMatch(/Al-Bīrūnī/);
    expect(methodEn.quranP).toMatch(/Tanzil quran-simple/);
    expect([...methodEn.sadaqaP2Parts].join(' ')).toMatch(/Serigne Mahdiou Niane/);
    expect(methodEn.notTitle).toMatch(/What this is not/);
    expect([...methodEn.notParts].join(' ')).toMatch(/not a prediction engine[\s\S]*geomancy/);
    expect(JSON.stringify(METHOD_COPY)).not.toMatch(/Ibn Qutayba/);
  });

  it('frames sadaqah as voluntary charity in all four languages, with two neutral systems, and no regional cultural wording', () => {
    const blob = JSON.stringify({ ABOUT_COPY, METHOD_COPY, ABOUT_LEADS });
    expect(blob).not.toMatch(REGIONAL);
    expect(blob).not.toMatch(FORBIDDEN_AR);
    expect(METHOD_COPY.en.sadaqaP1).toMatch(/voluntary charity/);
    expect(METHOD_COPY.fr.sadaqaP1).toMatch(/charité volontaire/);
    expect(METHOD_COPY.ar.sadaqaP1).toMatch(/عطاء طوعي|صدقة/);
    expect(METHOD_COPY.ur.sadaqaP1).toMatch(/رضاکارانہ خیرات/);
    expect(METHOD_COPY.en.sadaqaP2Parts.join(' ')).toMatch(/date-of-birth guidance/);
    expect(METHOD_COPY.en.sadaqaP2Parts.join(' ')).toMatch(/mother.s-name burj guidance/i);
    expect(METHOD_COPY.en.sadaqaP1).toMatch(/for reflection, not as a prediction/);
    expect(ABOUT_COPY.en.whatP1).toMatch(/voluntary charity for those in need/);
    expect(JSON.stringify(ABOUT_COPY)).not.toMatch(/Edinburgh|Scotland|Édimbourg|Écosse|إدنبرة|أسكتلندا|ایڈنبرا|اسکاٹ لینڈ/);
    expect(localizeInfoHref('/about', 'fr')).toBe('/fr/about');
    expect(localizeInfoHref('/methodology', 'ar')).toBe('/ar/methodology');
    expect(localizeInfoHref('/methodology', 'ur')).toBe('/ur/methodology');
  });
});
