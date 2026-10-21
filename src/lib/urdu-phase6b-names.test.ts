import { describe, it, expect } from 'vitest';
import { readFileSync } from 'fs';
import path from 'path';
import { renderToStaticMarkup } from 'react-dom/server';
import { createElement } from 'react';
import { COMMON_NAMES, burjWithMothers, getCommonName, type CommonName } from './names/commonNames';
import { BURJ_UR, urFaqs, urHow, urIntro, urNote, urPairingsHeading, urPairingsNote, urSpellings, urValueHeading } from './names/urdu';
import { ZODIAC_SADAQAH } from '../data/zodiacSadaqahData';
import { makeCatalog } from '../components/i18n/ArabicDomTranslator';

/** Phase 6B: /names/[slug] sentences are whole Urdu templates (a client swap), not per-node catalog lookups. */
const root = path.resolve(__dirname, '../..');
const read = (f: string) => readFileSync(path.join(root, f), 'utf8');
const catalog = makeCatalog(JSON.parse(read('public/i18n/ur-ui.json')));
const URDU = /[؀-ۿ]/;
const names = COMMON_NAMES.map((d) => getCommonName(d.slug)!) as CommonName[];
const breakdown = (n: CommonName) => n.letters.map((l) => `${l.letter} (${l.value})`).join(' + ');
const facts = (n: CommonName) => ({ name: n.name, arabicPlain: n.arabicPlain, value: n.value, mashriqiValue: n.mashriqiValue, variants: n.variants, slug: n.slug, breakdown: breakdown(n) });
const fatimaOf = (n: CommonName) => burjWithMothers(n).find((p) => p.mother.slug === 'fatima');
/** Latin words that may stay: the names themselves, transliterations the English page also prints, the calculator's name. */
const TRANSLITS = Object.values(ZODIAC_SADAQAH).map((z) => z.translit);
const LATIN_OK = (n: CommonName) => new Set([...n.variants, n.name, ...TRANSLITS, 'Fatima', 'Who', 'Am', 'I'].flatMap((w) => w.split(/[^A-Za-zĀāḤḥŪūʿʾ]+/)).map((w) => w.toLowerCase()));

describe('burj names', () => {
  it('Urdu names are the catalog\'s own zodiac names, in the remainder order 1..12 of the English page', () => {
    const en = burjWithMothers(names[0]).map((p) => p.burjEn);
    expect(new Set(Object.keys(BURJ_UR))).toEqual(new Set(['Aries', 'Taurus', 'Gemini', 'Cancer', 'Leo', 'Virgo', 'Libra', 'Scorpio', 'Sagittarius', 'Capricorn', 'Aquarius', 'Pisces']));
    for (const [e, u] of Object.entries(BURJ_UR)) expect(catalog.get(e), e).toBe(u);
    for (const e of en) expect(BURJ_UR[e], e).toBeTruthy();
  });
});

describe('Urdu FAQ templates, all 12 names', () => {
  it('every answer keeps the name, the value, the breakdown numbers and the Arabic spelling; no English sentence is left', () => {
    for (const n of names) {
      const faqs = urFaqs(facts(n), fatimaOf(n));
      expect(faqs.length).toBe(n.variants.filter((v) => v.toLowerCase() !== n.slug).length ? 4 : 3);
      const all = faqs.map((f) => `${f.q} ${f.a}`).join(' ');
      expect(all, n.slug).toContain(String(n.value));
      expect(faqs[0].a).toContain(n.arabicPlain);
      for (const l of n.letters) expect(faqs[0].a, `${n.slug} ${l.letter}`).toContain(`${l.letter} (${l.value})`);
      expect(faqs[0].a).toContain(`= ${n.value}`);
      const ok = LATIN_OK(n);
      const stray = (all.match(/[A-Za-zĀāḤḥŪūʿʾ]{2,}/g) ?? []).filter((w) => !ok.has(w.toLowerCase()) && !['al', 'ḥamal', 'ḥūt', 'hamal'].includes(w.toLowerCase()));
      expect(stray, n.slug).toEqual([]);
      faqs.forEach((f) => { expect(f.q).toMatch(URDU); expect(f.a).toMatch(URDU); });
    }
  });

  it('the worked example uses the right sum, remainder and burj (Muhammad + Fatima = 92 + 135 = 227, remainder 11, Aquarius)', () => {
    const m = getCommonName('muhammad')!;
    const a = urFaqs(facts(m), fatimaOf(m))[1].a;
    expect(a).toContain('92 + 135 = 227، باقی 11، یعنی دلو۔');
    expect(a).toContain('1 حمل ہے اور 12 حوت');
    expect(a).not.toMatch(/al-Ḥamal|al-Ḥūt|al-Dalw/); // no Latin glosses in the Urdu sentence (review sheet 2: 3.164, 9.78)
  });

  it('the example is left out for Fatima herself (as in English) and the variants question names the right spellings', () => {
    const f = getCommonName('fatima')!;
    expect(urFaqs(facts(f), fatimaOf(f))[1].a).not.toContain('مثال کے طور پر');
    const m = getCommonName('muhammad')!;
    const q = urFaqs(facts(m), fatimaOf(m))[2].q;
    const [v1, v2] = m.variants.filter((v) => v.toLowerCase() !== m.slug);
    expect(q).toBe(`کیا ${v1} اور ${v2} کا نتیجہ Muhammad جیسا ہی ہوتا ہے؟`);
  });

  it('the burj answer keeps the reflection-not-prediction framing and "Allah alone knows the unseen"', () => {
    const last = urFaqs(facts(names[0]), undefined).at(-1)!;
    expect(last.a).toContain('غور و فکر');
    expect(last.a).toContain('غیب کا علم صرف اللہ کو ہے');
    expect(last.a.startsWith('نہیں')).toBe(true);
    expect(urHow).toContain('پیش گوئی کے لیے نہیں');
    expect(urHow).toContain('غیب کا علم صرف اللہ کو ہے');
  });
});

describe('Urdu sentence pieces', () => {
  it('headings and notes carry the dynamic name and numbers', () => {
    expect(urValueHeading('Ali')).toBe('Ali کی ابجد قیمت');
    expect(urPairingsHeading('Ali')).toBe('عام والدہ کے ناموں کے ساتھ Ali کا برج');
    expect(urNote.mashriqiDiffers(1234)).toContain('1234');
    expect(urSpellings(['Mohamed', 'Mohammed']).list).toBe('Mohamed، Mohammed');
    for (const t of [urIntro.before, urIntro.after, urNote.maghribi, urPairingsNote.before, urPairingsNote.after, urHow]) expect(t).toMatch(URDU);
    expect(urHow).toContain('12');
  });
});

describe('page wiring', () => {
  const src = read('app/(site)/names/[slug]/page.tsx');
  it('English stays the default child of every swap (crawlers and en/fr/ar), Urdu is the `ur` prop, JSON-LD stays English', () => {
    expect(src.match(/<ByUiLanguage/g)!.length).toBe(9);
    expect(src).toContain('<JsonLd data={faqJsonLd(faqs)} />');
    expect(src).toContain('Frequently asked questions');
    expect(src).toContain('In ḥisāb al-jummal the name {n.name}');
  });

  it('ByUiLanguage shows the Urdu fragment only when the interface language is Urdu', () => {
    const c = read('src/components/i18n/ByUiLanguage.tsx');
    expect(c).toContain("uiLanguage === 'ur' ? ur : children");
    expect(c).toContain("'use client'");
  });

  it('the Urdu fragments render with the real components (FAQ markup, name isolated with <bdi>)', () => {
    const n = getCommonName('muhammad')!;
    const html = renderToStaticMarkup(createElement('div', null, urFaqs(facts(n), fatimaOf(n)).map((f) => createElement('p', { key: f.q }, f.q + f.a))));
    expect(html).toContain('92');
    expect(src).toContain('<bdi>{n.name}</bdi>');
  });
});

describe('home page SEO shell (Urdu mode)', () => {
  it('the heading, intro and every public tool description resolve to Urdu; the Prophetic Names are named in Urdu (review sheet 2: 1.28)', () => {
    const routes = read('src/lib/siteRoutes.ts');
    const descriptions = [...routes.matchAll(/^\s{4}description: (?:'((?:[^'\\]|\\.)*)'|"((?:[^"\\]|\\.)*)"),$/gm)].map((m) => (m[1] ?? m[2]).replace(/\\'/g, "'"));
    expect(descriptions.length).toBe(17);
    for (const d of descriptions) expect(catalog.get(d), d).toMatch(URDU);
    expect(catalog.get('Asrār — Planetary Hours, Abjad & Islamic Sacred Sciences')).toMatch(URDU);
    const dhikr = catalog.get('Track your dhikr: Istighfār, Ṣalawāt, Divine Names and the 201 Prophetic Names practice.')!;
    expect(dhikr).toContain('نبی کریم ﷺ کے 201 اسمائے مبارکہ');
    expect(dhikr).toContain('اسمائے حسنیٰ');
    expect(catalog.get('The 28 lunar mansions: today’s manzil, Arabic names, spiritual focus, and links to birth profile and ikhtiyārāt. For reflection.')).toContain('اٹھائیس');
  });
});
