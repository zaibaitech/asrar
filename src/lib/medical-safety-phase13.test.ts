import { describe, it, expect, vi, beforeEach } from 'vitest';
import { readFileSync } from 'fs';
import path from 'path';
import { createElement } from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import { makeCatalog } from '../components/i18n/ArabicDomTranslator';

/** Phase 13: medical-election safety notice, shared page, share text/card, Zodiac Man body parts, Arabic void-of-course. */
const ui = vi.hoisted(() => ({ lang: 'ur' }));
vi.mock('@/src/contexts/LanguageContext', () => ({ useLanguage: () => ({ uiLanguage: ui.lang }) }));
vi.mock('next/navigation', () => ({ notFound: () => { throw new Error('NOT_FOUND'); } }));
import MedicalElectionNotice from '../features/ikhtiyarat/components/MedicalElectionNotice';
import { MEDICAL_NOTICE, MEDICAL_NOTICE_STATUS, descriptionWithCaution, ogFooterFor, shareTextFor } from '../features/ikhtiyarat/medicalNotice';
import { ZODIAC_MAN_BODY_PART } from './ikhtiyarat/zodiacMan';
import { getMedicalBadges } from './ikhtiyarat/medicalBadges';
import { medicalElectionConfig } from './ikhtiyarat/elections/medical';
import { evaluateElection } from './ikhtiyarat/engine';
import SharedResultPage, { generateMetadata } from '../../app/(site)/ikhtiyarat/r/[date]/page';

const root = path.resolve(__dirname, '../..');
const read = (f: string) => readFileSync(path.join(root, f), 'utf8');
const AR = /[؀-ۿ]/, LATIN = /[A-Za-z]/;
const text = (html: string) => html.replace(/<[^>]*>/g, ' ').replace(/&#x27;/g, "'").replace(/\s+/g, ' ').trim();
const LANGS = ['en', 'ur', 'fr', 'ar'] as const;

describe('single source of truth', () => {
  it('has a long text, a short caution and an occasion label in all four languages, in the right script, marked as an unapproved draft', () => {
    expect(MEDICAL_NOTICE_STATUS).toMatch(/not approved/);
    for (const l of LANGS) for (const f of ['long', 'short', 'occasion'] as const) expect(MEDICAL_NOTICE[l][f].length, `${l}.${f}`).toBeGreaterThan(10);
    for (const l of ['ur', 'ar'] as const) for (const f of ['long', 'short', 'occasion'] as const) { expect(MEDICAL_NOTICE[l][f]).toMatch(AR); expect(MEDICAL_NOTICE[l][f]).not.toMatch(LATIN); }
    for (const l of ['en', 'fr'] as const) for (const f of ['long', 'short', 'occasion'] as const) expect(MEDICAL_NOTICE[l][f]).not.toMatch(AR);
  });

  it('every long text carries the three required ideas: traditional interpretation not a medical prediction, do not use it to decide treatment, see a qualified professional and do not delay care', () => {
    expect(MEDICAL_NOTICE.en.long).toMatch(/traditional astrological interpretation, not a clinically validated medical prediction/);
    expect(MEDICAL_NOTICE.en.long).toMatch(/choose, delay, stop or replace treatment/);
    expect(MEDICAL_NOTICE.en.long).toMatch(/qualified healthcare professional, and do not delay necessary care/);
    expect(MEDICAL_NOTICE.fr.long).toMatch(/interprétation astrologique traditionnelle, et non une prédiction médicale validée cliniquement/);
    expect(MEDICAL_NOTICE.fr.long).toMatch(/choisir, retarder, arrêter ou remplacer un traitement/);
    expect(MEDICAL_NOTICE.fr.long).toMatch(/professionnel de santé qualifié et ne retardez pas les soins nécessaires/);
    expect(MEDICAL_NOTICE.ar.long).toMatch(/تفسير فلكي تقليدي، وليست تنبؤًا طبيًا مثبتًا سريريًا/);
    expect(MEDICAL_NOTICE.ar.long).toMatch(/لاختيار العلاج أو تأخيره أو إيقافه أو الاستعاضة عنه/);
    expect(MEDICAL_NOTICE.ar.long).toMatch(/مختصًا صحيًا مؤهلًا، ولا تؤخّر الرعاية الطبية الضرورية/);
    expect(MEDICAL_NOTICE.ur.long).toMatch(/روایتی علمِ نجوم کی تعبیر ہے، کوئی طبی پیش گوئی نہیں/);
    expect(MEDICAL_NOTICE.ur.long).toMatch(/مستند طبی ماہر سے رجوع کریں، اور ضروری طبی امداد میں تاخیر نہ کریں/);
  });

  it('the Urdu long notice is word for word the one shipped in Phase 10 (its wording is not part of this change)', () => {
    expect(MEDICAL_NOTICE.ur.long).toBe('طبی علاج کے وقت، انتخاب یا فیصلے کا تعین علمِ نجوم کی بنیاد پر نہ کریں۔ تشخیص اور علاج کے لیے مستند طبی ماہر سے رجوع کریں، اور ضروری طبی امداد میں تاخیر نہ کریں۔ یہ نتیجہ روایتی علمِ نجوم کی تعبیر ہے، کوئی طبی پیش گوئی نہیں۔');
  });
});

describe('in-app notice component', () => {
  const html = (type: string) => renderToStaticMarkup(createElement(MedicalElectionNotice, { electionType: type }));
  beforeEach(() => { ui.lang = 'ur'; });

  it('renders for medical in every interface language, with the matching text, language and direction', () => {
    for (const l of LANGS) {
      ui.lang = l;
      const out = html('medical');
      expect(out, l).toContain('data-testid="medical-election-notice"');
      expect(out, l).toContain(`lang="${l}"`);
      expect(out, l).toContain(`dir="${l === 'ur' || l === 'ar' ? 'rtl' : 'ltr'}"`);
      expect(text(out), l).toBe(MEDICAL_NOTICE[l].long);
      expect(out, l).toContain('role="note"');
    }
  });

  it('renders for no other election type, in any language', () => {
    for (const l of LANGS) { ui.lang = l; for (const t of ['marriage', 'travel', 'business', 'businessStart', 'home', 'education']) expect(html(t), `${l}/${t}`).toBe(''); }
  });

  it('is wired into the three medical result views and uses logical alignment (text-start) so RTL reads from the right', () => {
    for (const f of ['CheckDateView', 'DetailSheet', 'ScanDatesView']) expect(read(`src/features/ikhtiyarat/components/${f}.tsx`), f).toMatch(/<MedicalElectionNotice electionType=\{/);
    expect(read('src/features/ikhtiyarat/components/MedicalNoticeText.tsx')).toMatch(/text-start/);
  });
});

describe('shared-result page and metadata', () => {
  const sp = (extra: Record<string, string>) => Promise.resolve({ lat: '55.95', lon: '-3.19', tz: 'Europe/London', ...extra });
  const params = Promise.resolve({ date: '2026-11-10' });
  const page = async (extra: Record<string, string>) => renderToStaticMarkup(await SharedResultPage({ params, searchParams: sp(extra) }));
  const meta = async (extra: Record<string, string>) => generateMetadata({ params, searchParams: sp(extra) });

  it('medical, English: occasion label and the full notice are in the page body, once; robots/canonical/alternates are not set by the page', async () => {
    const out = await page({ election: 'medical' });
    expect(text(out)).toContain(MEDICAL_NOTICE.en.occasion);
    expect(out.split('data-testid="medical-election-notice"').length - 1).toBe(1);
    expect(text(out)).toContain(MEDICAL_NOTICE.en.long);
    const m = await meta({ election: 'medical' });
    expect(m.robots).toBeUndefined();
    expect(m.alternates).toBeUndefined();
  });

  it('medical, French (?lang=fr): the French occasion label and notice, lang="fr" dir="ltr"', async () => {
    const out = await page({ election: 'medical', lang: 'fr' });
    expect(text(out)).toContain(MEDICAL_NOTICE.fr.occasion);
    expect(text(out)).toContain(MEDICAL_NOTICE.fr.long);
    expect(out).toContain('lang="fr" dir="ltr"');
  });

  it('non-medical election types render no notice and no occasion label, and keep the old description exactly', async () => {
    for (const election of ['marriage', 'travel', 'business', 'home', 'education']) {
      const out = await page({ election });
      expect(out).not.toContain('medical-election-notice');
      expect(text(out)).not.toContain(MEDICAL_NOTICE.en.occasion);
      const m = await meta({ election });
      expect(m.description).toMatch(/^2026-11-10 — .+ \(\d+\/100\) for .+, per classical ikhtiyārāt\.$/);
      expect(m.description).not.toMatch(/medical advice/i);
    }
  });

  it('medical metadata: the short caution is appended to description, og and twitter descriptions; title is unchanged', async () => {
    for (const lang of ['en', 'fr'] as const) {
      const m = await meta({ election: 'medical', ...(lang === 'fr' ? { lang: 'fr' } : {}) });
      expect(m.description!.endsWith(MEDICAL_NOTICE[lang].short)).toBe(true);
      expect((m.openGraph as { description?: string }).description).toBe(m.description);
      expect((m.twitter as { description?: string }).description).toBe(m.description);
      expect(m.title).toBe(lang === 'fr' ? 'Résultat Ikhtiyārāt' : 'Ikhtiyārāt Result');
    }
  });

  it('Urdu and Arabic readers of the English shared page get the notice through the DOM catalogs (exact text of the node)', () => {
    const ur = makeCatalog(JSON.parse(read('public/i18n/ur-ui.json')));
    const ar = makeCatalog(JSON.parse(read('public/i18n/ar-ui.json')));
    expect(ur.get(MEDICAL_NOTICE.en.long)).toBe(MEDICAL_NOTICE.ur.long);
    expect(ur.get(MEDICAL_NOTICE.en.occasion)).toBe(MEDICAL_NOTICE.ur.occasion);
    expect(ar.get(MEDICAL_NOTICE.en.long)).toBe(MEDICAL_NOTICE.ar.long);
    expect(ar.get(MEDICAL_NOTICE.en.occasion)).toBe(MEDICAL_NOTICE.ar.occasion);
  });
});

describe('share text, metadata helper and share-card footer', () => {
  const base = { dateOnly: '2026-11-10', tierLabel: 'Acceptable', score: 49 };
  it('medical share text carries the caution, in English or French; every other type is unchanged', () => {
    expect(shareTextFor({ ...base, electionType: 'medical', language: 'en' })).toBe('2026-11-10 — Acceptable (49/100). Traditional astrological reading — not medical advice.');
    expect(shareTextFor({ ...base, electionType: 'medical', language: 'fr' })).toBe('2026-11-10 — Acceptable (49/100). Lecture astrologique traditionnelle — pas un avis médical.');
    for (const t of ['marriage', 'travel', 'business', 'businessStart', 'home', 'education']) expect(shareTextFor({ ...base, electionType: t, language: 'en' })).toBe('2026-11-10 — Acceptable (49/100)');
  });

  it('CheckDateView builds its share text with the helper', () => {
    expect(read('src/features/ikhtiyarat/components/CheckDateView.tsx')).toContain('text: shareTextFor({ dateOnly, tierLabel, score: result.score, electionType, language }),');
  });

  it('card footer: medical gets the caution in front of the existing footer, other types are byte-identical', () => {
    const en = 'For reflection, not prediction · Only Allah knows the unseen';
    expect(ogFooterFor(en, 'medical', 'en')).toBe(`Traditional reading, not medical advice · ${en}`);
    expect(ogFooterFor('Pour la réflexion', 'medical', 'fr')).toBe('Lecture traditionnelle, pas un avis médical · Pour la réflexion');
    for (const t of ['marriage', 'travel', 'business', 'home', 'education', undefined]) expect(ogFooterFor(en, t, 'en')).toBe(en);
    expect(descriptionWithCaution('x', 'marriage', 'en')).toBe('x');
    expect(read('app/og/ikhtiyarat/[date]/route.tsx')).toContain('ogFooterFor(');
  });
});

describe('Zodiac Man body parts and the medical note', () => {
  const signs = Object.keys(ZODIAC_MAN_BODY_PART) as (keyof typeof ZODIAC_MAN_BODY_PART)[];
  it('all 12 signs have English, French, Arabic and Urdu names in the right script', () => {
    expect(signs.length).toBe(12);
    for (const s of signs) {
      const b = ZODIAC_MAN_BODY_PART[s];
      for (const l of LANGS) expect(b[l].length, `${s}.${l}`).toBeGreaterThan(2);
      expect(b.ar).toMatch(AR); expect(b.ar).not.toMatch(LATIN);
      expect(b.ur).toMatch(AR); expect(b.ur).not.toMatch(LATIN);
      expect(b.en).not.toMatch(AR); expect(b.fr).not.toMatch(AR);
    }
    expect(new Set(signs.map((s) => ZODIAC_MAN_BODY_PART[s].ar)).size).toBe(12);
    expect(new Set(signs.map((s) => ZODIAC_MAN_BODY_PART[s].ur)).size).toBe(12);
  });

  const result = evaluateElection({ datetime: new Date(Date.UTC(2026, 5, 3, 9, 0, 0)), lat: 55.95, lon: -3.19, tz: 'Europe/London', electionType: 'medical' } as never, medicalElectionConfig);
  it('each language note uses its own body-part name: no English in Arabic or Urdu, French stays French', () => {
    for (const s of signs) {
      const note = getMedicalBadges(result, s as never).find((b) => b.id === 'zodiac-man-caution')!.note;
      const b = ZODIAC_MAN_BODY_PART[s];
      expect(note.en).toContain(b.en);
      expect(note.fr).toContain(b.fr);
      expect(note.ar).toContain(b.ar); expect(note.ar).not.toMatch(LATIN);
      expect(note.ur).toContain(b.ur!); expect(note.ur).not.toMatch(LATIN);
    }
  });

  it('the Urdu note keeps the safety statement (informational only, follow qualified medical advice) and SunnahBadges shows it in Urdu mode', () => {
    const note = getMedicalBadges(result, 'aries' as never)[0].note;
    expect(note.ur).toContain('یہ محض معلومات ہیں');
    expect(note.ur).toContain('مستند طبی ماہر کے مشورے پر عمل کریں');
    expect(read('src/features/ikhtiyarat/components/SunnahBadges.tsx')).toContain('pickLabel(badge.note, language, uiLanguage)');
    expect(note.en).toContain('always follow qualified medical advice');
  });
});

describe('Arabic Simple-mode void-of-course sentence', () => {
  const ar = JSON.parse(read('public/i18n/ar-ui.json')) as Record<string, string>;
  const key = "The Moon isn't forming any meaningful connection right now — traditionally, treatment begun in this state tends to come to nothing.";
  it('is hedged like the English "tends" and like the Detailed-mode Arabic sentence, and keeps «وتقليديًا»', () => {
    expect(ar[key]).toBe('القمر لا يكوّن الآن أي اتّصال ذي معنى — وتقليديًا، العلاج الذي يبدأ في هذه الحال يميل إلى ألّا يُثمر.');
    expect(ar['Moon has no applying aspect before leaving its current sign — void of course, treatment begun now tends to come to nothing.']).toContain('يميل إلى ألا يثمر');
  });
  it('only that sentence changed: the journey and work siblings are untouched (outside the approved scope)', () => {
    const siblings = Object.entries(ar).filter(([k]) => k.startsWith("The Moon isn't forming any meaningful connection right now — traditionally,") && k !== key);
    expect(siblings.length).toBeGreaterThanOrEqual(2);
    expect(siblings.filter(([, v]) => v.includes('لا يُثمر')).length).toBe(2);
  });
});

describe('SEO and indexing safeguards are untouched', () => {
  it('no robots, sitemap, hreflang, canonical or middleware file is referenced by the medical-safety change', () => {
    for (const f of ['app/robots.ts', 'app/sitemap.ts', 'middleware.ts']) expect(read(f)).not.toMatch(/medicalNotice|MedicalNotice/);
    expect(read('app/(site)/ikhtiyarat/r/[date]/page.tsx')).not.toMatch(/robots|canonical|alternates|hreflang/);
  });
});
