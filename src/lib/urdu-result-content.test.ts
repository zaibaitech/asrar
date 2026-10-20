import { describe, it, expect } from 'vitest';
import { readFileSync } from 'fs';
import path from 'path';
import { makeCatalog } from '../components/i18n/ArabicDomTranslator';
import { LUNAR_MANSIONS } from './lunarMansions';
import { ZODIAC_SADAQAH } from '../data/zodiacSadaqahData';
import { evaluateElection } from './ikhtiyarat/engine';
import { marriageElectionConfig, marriageElectionConfigStrictHourRuler } from './ikhtiyarat/elections/marriage';
import { travelElectionConfig, travelElectionConfigStrictHourRuler } from './ikhtiyarat/elections/travel';
import { businessElectionConfig, businessElectionConfigStrictHourRuler } from './ikhtiyarat/elections/business';
import { educationElectionConfig, educationElectionConfigStrictHourRuler } from './ikhtiyarat/elections/education';
import { medicalElectionConfig, medicalElectionConfigStrictHourRuler } from './ikhtiyarat/elections/medical';
import { homeElectionConfig, homeElectionConfigStrictHourRuler } from './ikhtiyarat/elections/home';
import type { ElectionRulesConfig } from './ikhtiyarat/types';

/**
 * Phase 3 of the Urdu audit: result content that used to reach Urdu users in English.
 * Uses the same lookup as the browser (makeCatalog). English is the source; nothing here
 * changes a calculation, only whether its text resolves to Urdu.
 */
const root = path.resolve(__dirname, '../..');
const raw: Record<string, string> = JSON.parse(readFileSync(path.join(root, 'public/i18n/ur-ui.json'), 'utf8'));
const catalog = makeCatalog(raw);
const urduScript = /[؀-ۿ]/;
const translated = (en: string) => {
  const ur = catalog.get(en.trim());
  return ur !== undefined && ur !== en.trim() && urduScript.test(ur);
};

type Json = { [k: string]: Json } | Json[] | string | number | null | undefined;
function strings(o: Json, skip: Set<string>, out: string[] = []): string[] {
  if (typeof o === 'string') out.push(o);
  else if (Array.isArray(o)) o.forEach((v) => strings(v, skip, out));
  else if (o && typeof o === 'object') for (const [k, v] of Object.entries(o)) if (!skip.has(k)) strings(v, skip, out);
  return out;
}
const hasWords = (s: string) => /[A-Za-z]{3}/.test(s);
const burj = JSON.parse(readFileSync(path.join(root, 'src/data/burujData.json'), 'utf8')).buruj_data as Record<string, Record<string, Json>>;
const SKIP = new Set(['fr', 'arabic', 'transliteration', 'icon', 'reference', 'buruj', 'element', 'colors', 'element_emoji']);
const uniqueEn = (pick: (b: Record<string, Json>) => Json) =>
  [...new Set(Object.values(burj).flatMap((b) => strings(pick(b), SKIP)).filter(hasWords))];

describe('catalog structure', () => {
  it('every pattern compiles, every value is non-empty, every $N refers to a capture group', () => {
    const problems: string[] = [];
    for (const [k, v] of Object.entries(raw)) {
      if (typeof v !== 'string' || v.trim() === '') problems.push(`empty: ${k}`);
      if (!k.startsWith('re:')) continue;
      let groups = -1;
      try {
        groups = new RegExp(`${k.slice(3)}|`).exec('')!.length - 1;
      } catch {
        problems.push(`bad regex: ${k}`);
        continue;
      }
      for (const m of v.matchAll(/\$p?(\d)/g)) if (Number(m[1]) > groups) problems.push(`$${m[1]} but ${groups} groups: ${k}`);
    }
    expect(problems).toEqual([]);
  });
});

describe('Burj result tabs (burujData.json): Personality, Blessed Day, Career, Charity', () => {
  for (const area of ['personality', 'blessed_day', 'career', 'sadaqah']) {
    it(`${area}: every English string resolves to Urdu`, () => {
      const missing = uniqueEn((b) => b[area]).filter((s) => !translated(s));
      expect(missing).toEqual([]);
    });
  }
});

describe('Burj result: Divine Names & dhikr tab (spiritual_practice)', () => {
  const sp = (pick: (s: Record<string, Json>) => Json) => uniqueEn((b) => pick(b.spiritual_practice as Record<string, Json>));
  const untranslated = (list: string[]) => list.filter((s) => !translated(s));

  it('zodiac labels, practice times, etiquette steps and the dhikr instruction templates are translated', () => {
    expect(untranslated(sp((s) => s.zodiac_sign))).toEqual([]);
    expect(untranslated(sp((s) => s.practice_night))).toEqual([]);
    expect(untranslated(sp((s) => s.calculation_method))).toEqual([]);
    const instr = sp((s) => s.instructions);
    expect(untranslated(instr.filter((s) => !/^Recite the (Angel|Jinn) name:/.test(s)))).toEqual([]);
  });

  it('dhikr instruction templates keep the transliterated text and the "hadad" rule', () => {
    const ur = catalog.get("Recite the Quranic verse (Maliki yawmi al-din) (repeat Hadad times: your name + mother's name)")!;
    expect(ur).toContain('Maliki yawmi al-din');
    expect(ur).toContain('حدد');
    const names = catalog.get("Recite Divine Names (Ya Maliku Ya Quddus) (repeat Hadad times: your name + mother's name)")!;
    expect(names).toContain('Ya Maliku Ya Quddus');
    expect(names).toContain('اسمائے الٰہی');
  });

  it('deliberately NOT translated (needs subject-matter review): angel and jinn names/descriptions, Divine Name glosses, English renderings of Fātiḥa verses', () => {
    const left = untranslated([
      ...sp((s) => s.angel), ...sp((s) => s.jinn), ...sp((s) => s.divine_names), ...sp((s) => s.quranic_verse),
      ...sp((s) => s.instructions).filter((s) => /^Recite the (Angel|Jinn) name:/.test(s)),
    ]);
    expect(left.length).toBeGreaterThan(0); // documented gap in scripts/i18n/ur/still_english.md
    expect(translated('O Opener, O Provider')).toBe(false);
    expect(translated('Guide us to the straight path')).toBe(false);
    expect(translated('Gabriel (Jibril)')).toBe(false);
  });
});

describe('Charity tab (zodiacSadaqahData.ts) and the Sadaqah tab labels', () => {
  it('every English text of the 12 signs resolves to Urdu', () => {
    const en = [...new Set(strings(ZODIAC_SADAQAH as unknown as Json, new Set(['fr', 'ar', 'id', 'videoId', 'altVideoId', 'translit'])).filter(hasWords))];
    // the sign names themselves ("Aries") are plain catalog entries; the video ids are skipped above
    expect(en.filter((s) => !translated(s))).toEqual([]);
  });

  it('dynamic labels keep their variable: "Sadaqah Guidance — Aquarius"', () => {
    const ur = catalog.get('Sadaqah Guidance — Aquarius')!;
    expect(ur).toContain('دلو');
    expect(ur).not.toMatch(/Aquarius|Sadaqah/);
    expect(catalog.get('Show 6 more traits')).toContain('6');
    expect(catalog.get('227 times')).toContain('227');
    expect(catalog.get('Focus your energy on Friday. This is your most spiritually aligned day for important decisions and new beginnings.')).toContain('جمعہ');
  });
});

describe('Lunar mansion titles: Urdu gloss traced to the Arabic source name', () => {
  const byGloss = (g: string) => LUNAR_MANSIONS.find((m) => m.nameEn === g)!;
  it.each([
    ['The Little Belly', 'البطين', 'چھوٹا پیٹ'],
    ['The Follower', 'الدبران', 'پیچھے آنے والا'],
    ['The Brand', 'الهنعة', 'نشان'],
    ['The Fortunate Tents', 'سعد الأخبية', 'سعد الاخبیہ (خیمے)'],
  ])('%s (%s) → %s', (gloss, arabic, urdu) => {
    expect(byGloss(gloss).nameArabic).toBe(arabic);
    expect(raw[gloss]).toBe(urdu);
  });

  it('the Monday guidance no longer contains the ungrammatical «پانی سکون پسند» sentence', () => {
    const en = Object.keys(raw).find((k) => k.includes("the Moon's waters prefer calm"))!;
    expect(en).toBeDefined();
    expect(raw[en]).not.toContain('پانی سکون پسند');
    expect(raw[en]).toContain('ٹکراؤ سے بچیں');
  });
});

describe('Ikhtiyārāt rules, Detailed mode: labels and dynamic sentences', () => {
  const configs: [string, ElectionRulesConfig][] = [
    ['marriage', marriageElectionConfig], ['marriageS', marriageElectionConfigStrictHourRuler],
    ['travel', travelElectionConfig], ['travelS', travelElectionConfigStrictHourRuler],
    ['business', businessElectionConfig], ['businessS', businessElectionConfigStrictHourRuler],
    ['education', educationElectionConfig], ['educationS', educationElectionConfigStrictHourRuler],
    ['medical', medicalElectionConfig], ['medicalS', medicalElectionConfigStrictHourRuler],
    ['home', homeElectionConfig], ['homeS', homeElectionConfigStrictHourRuler],
  ];
  // Latin that is allowed to stay: an internal review flag, a file name that the source text itself prints,
  // and the transliteration of the quoted du'ā'.
  const ALLOWED = /\[SCHOLAR-REVIEW\]|business\.ts|Allāhumma bārik li-ummatī fī bukūrihā|Maliki|Ya \w+/g;

  it('every rule label and detail the engine produces over 150 dates resolves to Urdu with its numbers intact', () => {
    const seen = new Map<string, string>();
    for (const [type, cfg] of configs) {
      for (let i = 0; i < 150; i += 1) {
        const datetime = new Date(Date.UTC(2026, 0, 1 + i * 7, 9, 0, 0));
        const r = evaluateElection({ datetime, lat: 55.95, lon: -3.19, tz: 'Europe/London', electionType: type.replace('S', '') } as never, cfg);
        for (const w of r.allWindows) for (const rule of w.rules) {
          seen.set(rule.label_en, rule.label_en);
          seen.set(rule.detail_en, rule.detail_en);
        }
      }
    }
    expect(seen.size).toBeGreaterThan(100);
    const bad: string[] = [];
    for (const en of seen.keys()) {
      const ur = catalog.get(en.trim());
      if (!ur || ur === en.trim() || !urduScript.test(ur)) { bad.push(`missing: ${en}`); continue; }
      const leftover = ur.replace(ALLOWED, '').match(/[A-Za-z]{3,}/g);
      if (leftover) bad.push(`English left (${leftover.join(',')}): ${en}`);
      const nums = en.match(/-?\d+(\.\d+)?/g) ?? [];
      for (const n of nums) if (!ur.includes(n.replace(/^-/, ''))) bad.push(`number ${n} lost: ${en}`);
    }
    expect(bad).toEqual([]);
  }, 120_000);

  it('terms follow the glossary: اتصال for applying, ہبوط/وبال, محترق, بیت — and the aspect names', () => {
    const t = (s: string) => catalog.get(s)!;
    expect(t('Moon applying to a trine with Jupiter, orb 3.2°.')).toBe('قمر کا مشتری کے ساتھ تثلیث میں اتصال، زاویائی فرق 3.2°۔');
    expect(t('Moon applying to a square with Saturn, orb 1.5°.')).toContain('تربیع');
    expect(t('Moon in Cancer — domicile.')).toContain('بیت');
    expect(t('Moon in Scorpio — fall.')).toContain('ہبوط');
    expect(t('Venus is 0.4° from the Sun — combust.')).toContain('محترق');
  });
});
