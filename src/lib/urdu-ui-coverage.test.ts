import { describe, it, expect } from 'vitest';
import { readFileSync } from 'fs';
import path from 'path';
import { makeCatalog } from '../components/i18n/ArabicDomTranslator';
import { PLANETARY_ZIKR } from './planetaryZikr';
import { PLANET_INCENSE } from './planetary/incense';
import { LUNAR_MANSIONS } from './lunarMansions';
import { ABJAD_FAQS, PLANETARY_HOURS_FAQS, PLANET_OF_THE_DAY_FAQS } from './seo/toolFaqs';

/**
 * Regression tests for the Urdu localization audit (Oct 2026).
 *
 * The Urdu UI is an exact-match catalog (English text node -> Urdu), so a string that is added or
 * reworded in the app without a catalog entry silently stays English on /ur and in Urdu mode.
 * These tests use the same lookup the browser uses (makeCatalog) and check the strings that the
 * browser audit found untranslated, plus the places where Arabic must come from the data files
 * (Divine Names, lunar mansion names, incense names, the Qur'an line) instead of a translation.
 */
const root = path.resolve(__dirname, '../..');
const read = (rel: string) => readFileSync(path.join(root, rel), 'utf8');
const raw: Record<string, string> = JSON.parse(read('public/i18n/ur-ui.json'));
const catalog = makeCatalog(raw);
const arabicScript = /[؀-ۿ]/;
const translated = (en: string) => {
  const ur = catalog.get(en);
  return ur !== undefined && ur !== en && arabicScript.test(ur);
};
const untranslated = (list: string[]) => [...new Set(list)].filter((s) => !translated(s));

describe('Urdu UI: strings that the audit found in English', () => {
  it('home menu, About, Abjad system panel (hard-coded English in MobileMenu / AbjadSystemSelector)', () => {
    expect(
      untranslated([
        'About This App', 'Close menu', 'Back', 'Abjad System', 'Current Mode:', 'Western', 'Eastern',
        'Maghribi System:', 'Mashriqi System:', 'Version 1.0 • © 2025',
        'Traditional method of the Maghreb (Morocco to Libya), al-Andalus and West Africa (ش=1000, غ=900)',
        'Eastern method used in Egypt, the Middle East and Asia (ش=300, غ=1000)',
      ]),
    ).toEqual([]);
    expect(catalog.get('About This App')).toBe('اس ایپ کے بارے میں');
    expect(catalog.get('Current Mode:')).toBe('موجودہ نظام:');
  });

  it('planet-transit toggle, Tasbih counter and related-tools headings', () => {
    expect(
      untranslated(['Carousel', 'Tasbih Counter', 'Tap to count', 'Log Progress', 'Related tools', 'Frequently asked questions', 'Birth Profile']),
    ).toEqual([]);
  });

  it('exalted / at-home status titles resolve through the sentence patterns', () => {
    for (const en of ['سَعِيد Auspicious — Jupiter is exalted in Cancer', 'سَعِيد Auspicious — Venus is at home in Libra', 'Venus is at home in Libra']) {
      const ur = catalog.get(en);
      expect(ur && arabicScript.test(ur), en).toBe(true);
      expect(ur, en).not.toMatch(/Jupiter|Venus|Cancer|Libra/);
    }
  });

  it('page FAQs added for SEO are translated', () => {
    const all = [ABJAD_FAQS, PLANETARY_HOURS_FAQS, PLANET_OF_THE_DAY_FAQS].flatMap((f) => f.en.flatMap((x) => [x.q, x.a]));
    expect(untranslated(all)).toEqual([]);
  });
});

describe('Urdu UI: Arabic comes from the data files, not from a translation', () => {
  it('dhikr names of the planetary-day list use the Arabic written in planetaryZikr.ts', () => {
    const bad: string[] = [];
    for (const z of Object.values(PLANETARY_ZIKR)) {
      for (const e of z.zikr ?? []) {
        if (e.arabicName && raw[e.name] !== undefined && raw[e.name] !== e.arabicName) bad.push(`${e.name}: ${raw[e.name]} != ${e.arabicName}`);
        if (e.benefit) expect(translated(e.benefit), e.benefit).toBe(true);
      }
    }
    expect(bad).toEqual([]);
  });

  it('incense blends: Arabic name from incense.ts, ingredients and purpose translated', () => {
    for (const b of Object.values(PLANET_INCENSE)) {
      const v = raw[b.transliteration];
      if (v !== undefined) expect(v, b.transliteration).toMatch(/[\u0600-\u06FF]/);
      expect(translated(b.ingredients), b.ingredients).toBe(true);
      expect(translated(b.purpose), b.purpose).toBe(true);
    }
  });

  it('all 28 lunar mansion names are never replaced by anything but the Arabic of lunarMansions.ts', () => {
    expect(LUNAR_MANSIONS).toHaveLength(28);
    for (const m of LUNAR_MANSIONS) expect([undefined, m.nameArabic], m.nameTransliteration).toContain(raw[m.nameTransliteration]);
  });

  it('the Qur\'an line on the Ramadan page is the verified Arabic (same as ar-ui.json), not a translation', () => {
    const ar = JSON.parse(read('public/i18n/ar-ui.json'));
    expect(raw['Remember Me, and I will remember you.']).toBe(ar['Remember Me, and I will remember you.']);
  });

  it('Divine Name glosses next to the 99 Names stay untranslated on purpose', () => {
    expect(raw['The Provider']).toBeUndefined();
    expect(raw['Ar-Razzāq']).toBeUndefined();
  });
});

describe('Urdu catalog hygiene', () => {
  it('never uses the Arabic word that reads as "racist" for elements (عنصري/عنصرية)', () => {
    expect(Object.values(raw).filter((v) => /عنصري|عنصرية/.test(v))).toEqual([]);
  });
});
