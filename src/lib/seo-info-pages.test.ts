import { describe, expect, it } from 'vitest';
import { readFileSync } from 'node:fs';
import { resolve } from 'node:path';
import sitemap from '../../app/sitemap';
import { INFO_PAGES } from './siteRoutes';
import { ABOUT_LEAD, METHODOLOGY_LEAD } from './infoPageCopy';

const read = (rel: string) => readFileSync(resolve(process.cwd(), rel), 'utf8');
const wordCount = (s: string) => s.trim().split(/\s+/).length;

describe('About and Methodology information pages', () => {
  it('exports 40–60 word answer-first leads', () => {
    expect(wordCount(ABOUT_LEAD)).toBeGreaterThanOrEqual(40);
    expect(wordCount(ABOUT_LEAD)).toBeLessThanOrEqual(60);
    expect(wordCount(METHODOLOGY_LEAD)).toBeGreaterThanOrEqual(40);
    expect(wordCount(METHODOLOGY_LEAD)).toBeLessThanOrEqual(60);
  });

  it('lists /about and /methodology in the sitemap with lastModified, and not as /fr mirrors', () => {
    const urls = sitemap().map((e) => e.url);
    expect(INFO_PAGES.map((p) => p.path).sort()).toEqual(['/about', '/methodology']);
    expect(urls).toContain('https://www.asrar.app/about');
    expect(urls).toContain('https://www.asrar.app/methodology');
    expect(urls.some((u) => u.includes('/fr/about') || u.endsWith('/fr/methodology'))).toBe(false);
    for (const path of ['/about', '/methodology']) {
      const entry = sitemap().find((e) => e.url === `https://www.asrar.app${path}`);
      expect(entry?.lastModified, path).toBeInstanceOf(Date);
    }
  });

  it('gives each page a single H1, a canonical, and AboutPage or WebPage JSON-LD with a breadcrumb', () => {
    const about = read('app/(site)/about/page.tsx');
    const method = read('app/(site)/methodology/page.tsx');
    expect(about.match(/<h1 /g)?.length).toBe(1);
    expect(method.match(/<h1 /g)?.length).toBe(1);
    expect(about).toContain("canonical: absoluteUrl(PATH)");
    expect(method).toContain("canonical: absoluteUrl(PATH)");
    expect(about).toContain("'AboutPage'");
    expect(method).toContain("'WebPage'");
    expect(about).toContain("'BreadcrumbList'");
    expect(method).toContain("'BreadcrumbList'");
  });

  it('links both pages from the app footer with the existing footer hover style', () => {
    const footer = read('asrar-everyday-app.tsx');
    expect(footer).toMatch(/href="\/about"/);
    expect(footer).toMatch(/href="\/methodology"/);
    expect(footer).toMatch(/hover:text-purple-600 dark:hover:text-purple-400 transition-colors/);
  });

  it('points Organization JSON-LD at /about and does not invent a contact channel or scholar', () => {
    const org = read('src/components/seo/HomeJsonLd.tsx');
    expect(org).toContain("url: absoluteUrl('/about')");
    expect(org).toContain('description:');
    const about = read('app/(site)/about/page.tsx');
    expect(about).toContain('zaibaitech.com');
    expect(about).toContain('FACEBOOK_PAGE_URL');
    expect(about).not.toMatch(/@AsrarEveryday|security@zaibaitech/);
    const method = read('app/(site)/methodology/page.tsx');
    expect(method).toMatch(/Maghribi/);
    expect(method).toMatch(/Mashriqi/);
    expect(method).toMatch(/Chaldean/);
    expect(method).toMatch(/Al-Bīrūnī/);
    expect(method).toMatch(/Tanzil quran-simple/);
    expect(method).toMatch(/Serigne Mahdiou Niane/);
    expect(method).toMatch(/What this is not/);
    expect(method).toMatch(/not a prediction engine[\s\S]*geomancy/);
    expect(method).not.toMatch(/Ibn Qutayba/);
  });

  it('frames sadaqah as voluntary charity, with two neutral systems, and no regional cultural wording', () => {
    const about = read('app/(site)/about/page.tsx');
    const method = read('app/(site)/methodology/page.tsx');
    const pages = [ABOUT_LEAD, METHODOLOGY_LEAD, about, method].join('\n');
    expect(pages).not.toMatch(/West African|Senegalese|Gambia|Gambian|Wolof|sarax|Tamxarit|Gamo|Korité|Tabaski/i);
    expect(method).toMatch(/voluntary charity/);
    expect(method).toMatch(/date-of-birth guidance/);
    expect(method).toMatch(/mother(?:&apos;|')s-name burj guidance/i);
    expect(method).toMatch(/for reflection, not as a prediction/);
    expect(about).toMatch(/voluntary charity for those in need/);
  });
});
