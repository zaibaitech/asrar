import { describe, it, expect, vi, beforeEach } from 'vitest';
import { readFileSync } from 'fs';
import path from 'path';
import { createElement } from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import { makeCatalog } from '../components/i18n/ArabicDomTranslator';
import { marriageElectionConfig } from './ikhtiyarat/elections/marriage';
import { medicalElectionConfig } from './ikhtiyarat/elections/medical';

/** Phase 10: fixes from the external Urdu review (urdu-localization-initial-findings.md). Linguistic and safety wording only. */
const ui = vi.hoisted(() => ({ lang: 'ur' }));
vi.mock('@/src/contexts/LanguageContext', () => ({ useLanguage: () => ({ uiLanguage: ui.lang }) }));
import MedicalElectionNotice from '../features/ikhtiyarat/components/MedicalElectionNotice';
import { MEDICAL_NOTICE } from '../features/ikhtiyarat/medicalNotice';
const MEDICAL_NOTICE_UR = MEDICAL_NOTICE.ur.long;

const root = path.resolve(__dirname, '../..');
const read = (f: string) => readFileSync(path.join(root, f), 'utf8');
const raw: Record<string, string> = JSON.parse(read('public/i18n/ur-ui.json'));
const catalog = makeCatalog(raw);
const values = Object.values(raw);

describe('UI labels', () => {
  it('"Carousel" is the view toggle that returns from the all-planets grid to one planet at a time: «سلائیڈ منظر», not «ایک سیارہ»', () => {
    expect(read('src/components/planetary/PlanetTransitCard.tsx')).toMatch(/showAll\s*\n?\s*\? t\.planetTransit\.carousel\s*\n?\s*: t\.planetTransit\.seeAll/);
    expect(catalog.get('Carousel')).toBe('سلائیڈ منظر');
    expect(catalog.get('See All')).toBe('سب دیکھیں');
  });

  it('the navigation aria-label "Breadcrumb" says what it is, as on the /ur pages', () => {
    expect(catalog.get('Breadcrumb')).toBe('صفحے کا راستہ');
    expect(read('src/lib/i18n/urPages.ts')).toContain("t('Breadcrumb', 'صفحے کا راستہ')");
    expect(read('app/(site)/names/page.tsx')).toContain('aria-label="Breadcrumb"');
  });
});

describe('medical election safety notice (Urdu mode only)', () => {
  beforeEach(() => { ui.lang = 'ur'; });
  const html = (type: string) => renderToStaticMarkup(createElement(MedicalElectionNotice, { electionType: type }));

  it('shows the notice with every medical result in Urdu, and says astrology is not medical guidance', () => {
    const out = html('medical');
    expect(out).toContain('data-testid="medical-election-notice"');
    expect(out).toContain('طبی علاج کے وقت، انتخاب یا فیصلے کا تعین علمِ نجوم کی بنیاد پر نہ کریں');
    expect(out).toContain('مستند طبی ماہر سے رجوع کریں');
    expect(out).toContain('ضروری طبی امداد میں تاخیر نہ کریں');
    expect(MEDICAL_NOTICE_UR).toContain('کوئی طبی پیش گوئی نہیں');
  });

  it('shows nothing for other election types (Phase 13: the medical notice is now shown in every interface language, see urdu-phase13 and medical-safety-phase13 tests)', () => {
    expect(html('marriage')).toBe('');
    expect(html('travel')).toBe('');
    expect(html('business')).toBe('');
  });

  it('is rendered by all three medical result views', () => {
    for (const f of ['CheckDateView', 'DetailSheet', 'ScanDatesView']) {
      const src = read(`src/features/ikhtiyarat/components/${f}.tsx`);
      expect(src, f).toContain("import MedicalElectionNotice from './MedicalElectionNotice'");
      expect(src, f).toMatch(/<MedicalElectionNotice electionType=\{/);
    }
  });

  it('the traditional medical-timing sentences are attributed and none states a plain outcome; the one about treatment says it is not a medical claim', () => {
    const med = [
      "The Moon isn't forming any meaningful connection right now — traditionally, treatment begun in this state tends to come to nothing.",
      'The Moon is forming a supportive connection with Venus or Jupiter right now — a sign of a smooth course of treatment and recovery.',
      'Mercury is in a comfortable position right now, supporting a clear diagnosis.',
      'Mercury appears to be moving backward right now — a mild caution for the accuracy of a diagnosis.',
      'treatment begun now tends to come to nothing.',
      'a smooth course of treatment and recovery.',
      'supporting a clear diagnosis.',
      'supporting recovery.',
      'increased risk of a delayed, incomplete, or revised diagnosis.',
    ];
    for (const en of med) {
      const ur = raw[en];
      expect(ur, en).toMatch(/روایت/);
      expect(ur, en).not.toContain('اکثر بے نتیجہ');
    }
    expect(raw[med[0]]).toContain('یہ طبی دعویٰ نہیں');
    expect(raw[med[4]]).toContain('یہ طبی دعویٰ نہیں');
  });

  it('the Tuesday paragraph no longer ties surgery to the planet and says the decision is medical', () => {
    const k = Object.keys(raw).find((x) => x.startsWith('Tuesday strengthens courage'))!;
    expect(raw[k]).toContain('سرجری کا فیصلہ صرف طبی ضرورت اور ڈاکٹر کے مشورے پر ہونا چاہیے، دن یا سیارے کی نسبت پر نہیں');
    expect(raw[k]).not.toContain('طبی ضرورت پر سرجری، اور خوف');
  });
});

describe('outcome claims are attributed and guarantees are not made', () => {
  it('the Water-element career claim is a traditional reading, not a success guarantee', () => {
    const k = Object.keys(raw).find((x) => x.startsWith('Despite being a Water element'))!;
    expect(raw[k]).toBe('روایتی تعبیر کے مطابق، آبی مزاج رکھنے والوں کے لیے زمینی صنعتوں کو بھی قابلِ غور سمجھا جاتا ہے۔ اسے کامیابی کی ضمانت یا پیشہ منتخب کرنے کا واحد معیار نہ سمجھیں۔')
    expect(raw['Special Spiritual Blessing']).toBe('روایتی تعبیر: زمینی صنعتوں سے خاص نسبت');
    expect(values.some((v) => v.includes('منفرد روحانی عطیہ'))).toBe(false);
  });

  it('the formerly bare claims now carry «روایتی تعبیر»', () => {
    for (const en of ['Always beneficial, opens spiritual doors', 'Traditionally understood to be supported by divine help in times of need',
      'Allah grants them opportunities to learn patience and emotional mastery', 'Solar energy combined with air brings illuminating innovation']) {
      expect(raw[en], en).toContain('روایتی تعبیر');
    }
  });

  it('weekday paragraphs: Sunday asks for support (not «دعائیں لیں»), Monday «جذباتی سکون اور بہتری», Saturday «مضبوط ڈھانچے»', () => {
    const find = (p: string) => raw[Object.keys(raw).find((x) => x.startsWith(p))!];
    expect(find("The Sun's day")).toContain('بااختیار افراد کی تائید اور سرپرستی حاصل کرنے کی کوشش کریں');
    expect(find("The Sun's day")).not.toContain('دعائیں لیں');
    expect(find('Monday is ideal')).toContain('جذباتی سکون اور بہتری کے لیے نماز اور دعا');
    expect(find('Saturday is governed')).toContain('دیرپا اور مضبوط ڈھانچے تعمیر کرنے پر توجہ دیں');
  });

  it('Thursday and Friday religious statements are unchanged (held for qualified religious review)', () => {
    const find = (p: string) => raw[Object.keys(raw).find((x) => x.startsWith(p))!];
    expect(find('Thursday is the most blessed')).toContain('خاص طور پر بابرکت سمجھی جاتی ہے');
    expect(find('Friday is the most sacred')).toContain('جمعہ اسلام میں سب سے افضل دن ہے');
  });
});

describe('scoring explanation and archetypes', () => {
  it('the scoring note reads naturally and spells the last tier «اجتناب», as on the badge', () => {
    const k = Object.keys(raw).find((x) => x.startsWith('How scoring works'))!;
    expect(raw[k]).toContain('اسکور کیسے شمار ہوتا ہے');
    expect(raw[k]).toContain('0–100 کے پیمانے پر تبدیل کیا جاتا ہے');
    expect(raw[k]).toContain('(ممتاز، جیّد، مقبول، ضعیف، اجتناب)');
    expect(values.some((v) => v.includes('اجتنب)') || v.includes('اجتنب،'))).toBe(false);
    expect(catalog.get('Avoid')).toBe('اجتناب');
  });

  it('three archetype sentences use the smoother wording', () => {
    const find = (p: string) => raw[Object.keys(raw).find((x) => x.startsWith(p))!];
    expect(find('This pattern traditionally shows an easy beginning')).toContain('ایک آسان آغاز کی طرف اشارہ کرتا ہے، جو بعد میں جمود کا شکار ہو سکتا ہے');
    expect(find('This pattern traditionally shows family closeness')).toContain('مسلسل توجہ اور دیکھ بھال نہ ہو تو دوری بڑھ سکتی ہے');
    expect(find('Working relationships start smoothly')).toContain('نئے اہداف یا چیلنجز نہ ہوں تو یکسانیت پیدا ہو سکتی ہے');
  });
});

describe('Phase 11: tier names, risk wording, brand spelling', () => {
  it('each Urdu tier badge shows two words (TierBadge prints labelEn and labelAr, both go through the catalog) and the scoring note lists the second set', () => {
    const note = raw[Object.keys(raw).find((x) => x.startsWith('How scoring works'))!];
    const listed = note.match(/\(([^)]*)\)/g)!.find((g) => g.includes('ممتاز'))!;
    const bandNames = marriageElectionConfig.tiers.map((t) => catalog.get(t.labelAr));
    expect(bandNames).toEqual(['ممتاز', 'جیّد', 'مقبول', 'ضعیف', 'اجتناب']);
    for (const b of bandNames) expect(listed).toContain(b!);
    expect(marriageElectionConfig.tiers.map((t) => catalog.get(t.labelEn))).toEqual(['بہت عمدہ', 'اچھا', 'قابلِ قبول', 'کمزور', 'اجتناب']);
    expect(read('src/features/ikhtiyarat/components/TierBadge.tsx')).toMatch(/\{label\}[\s\S]*\{tierInfo\.labelAr\}/);
    // same five tiers for the medical election, in the same order
    expect(medicalElectionConfig.tiers.map((t) => t.tier)).toEqual(marriageElectionConfig.tiers.map((t) => t.tier));
  });

  it('"risk" is «خطرہ» everywhere, including the diagnosis sentence (Phase 10 had softened it to «امکان»)', () => {
    const k = 'increased risk of a delayed, incomplete, or revised diagnosis.';
    expect(raw[k]).toContain('بڑھا ہوا خطرہ');
    expect(raw[k]).toContain('روایتی تعبیر');
    for (const [en, ur] of Object.entries(raw)) if (/\brisk\b/i.test(en) && !en.startsWith('re:')) expect(ur, en).toMatch(/خطر/);
  });

  it('the standalone brand name follows the /ur pages («اسرار»); the product name "Asrār Everyday" stays Latin', () => {
    expect(catalog.get('Asrār')).toBe('اسرار');
    expect(raw['Join Asrār today']).toBe('آج ہی اسرار سے جڑیں');
    expect(raw['Asrār — Planetary Hours, Abjad & Islamic Sacred Sciences']).toMatch(/^اسرار —/);
    expect(raw['This helps us personalize your experience with Asrār Everyday']).toContain('Asrār Everyday');
  });
});
