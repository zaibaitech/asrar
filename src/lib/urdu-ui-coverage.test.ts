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

  it('all 28 lunar mansion names render as the name of lunarMansions.ts, in Urdu letter forms in the Urdu UI (R2; the card keeps its own Arabic line)', () => {
    expect(LUNAR_MANSIONS).toHaveLength(28);
    // R2 (review sheet 2, 9.7–9.27): a name mentioned in Urdu text takes Urdu letter forms (ی ک ہ, no hamza seat).
    const urduForm = (a: string) =>
      a.replace(/[ًٌٍَُِّْ]/g, '').replace(/[أإآ]/g, 'ا').replace(/ي/g, 'ی').replace(/ك/g, 'ک').replace(/ة/g, 'ہ').replace(/ه/g, 'ہ');
    for (const m of LUNAR_MANSIONS) {
      expect([undefined, m.nameArabic, urduForm(m.nameArabic)], m.nameTransliteration).toContain(raw[m.nameTransliteration]);
    }
  });

  it('the Ramadan card quotes: the Arabic verse is printed from the data (data-no-ar), so the meaning line is an Urdu meaning, not the verse again (review sheet 2, Q2)', () => {
    const card = read('src/features/ramadanChallenges/components/ChallengeCard.tsx');
    expect(card).toContain("{ en: 'Remember Me, and I will remember you.', ar: 'فَاذْكُرُونِي أَذْكُرْكُمْ' }");
    expect(raw['Remember Me, and I will remember you.']).toBe('تم مجھے یاد کرو، میں تمہیں یاد کروں گا۔ (البقرہ: 152)');
    expect(raw['Glorify Allah morning and evening.']).toBe('اور صبح و شام اس کی تسبیح کرتے رہو۔ (الاحزاب: 42)');
    expect(raw['Hearts find rest in the remembrance of Allah.']).toBe('سن رکھو! اللہ کے ذکر ہی سے دلوں کو اطمینان ملتا ہے۔ (الرعد: 28)');
    expect(raw['The dhikr of Allah is the greatest.']).toBe('اور اللہ کا ذکر سب سے بڑی چیز ہے۔ (العنکبوت: 45)');
    // none of the four meaning lines repeats the Arabic verse
    for (const k of ['Remember Me, and I will remember you.', 'Glorify Allah morning and evening.', 'Hearts find rest in the remembrance of Allah.', 'The dhikr of Allah is the greatest.']) {
      expect(raw[k], k).not.toMatch(/[ًٌٍَُِّْ]|ي|ك|ة/);
    }
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
