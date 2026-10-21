import { describe, it, expect } from 'vitest';
import { readFileSync } from 'fs';
import path from 'path';
import { calculatorEn, divineNamePickerEn, nameFieldEn } from '../features/calculator/i18n/en';
import { calculatorUr, divineNamePickerUr, nameFieldUr } from '../features/calculator/i18n/ur';
import { QURAN_META } from '../features/calculator/lib/quranMeta';
import { makeCatalog } from '../components/i18n/ArabicDomTranslator';

/** Native Urdu review, sheet 2 (passes 1–3): reviewed strings and drafts can be told apart. */
const root = path.resolve(__dirname, '../..');
const read = (f: string) => readFileSync(path.join(root, f), 'utf8');
const status = JSON.parse(read('scripts/i18n/ur/review_status.json'));
const json: Record<string, string> = JSON.parse(read('public/i18n/ur-ui.json'));
const catalog = makeCatalog(json);
type Row = { en: string; ur: string; status: string };

describe('Urdu review status', () => {
  it('every sheet-2 row (2,336) carries a reviewed status (the 21 Oct source-fix drafts were reviewed in Batch 16)', () => {
    const rows = Object.values(status.sheet2) as { status: string; source_fix?: string }[];
    expect(rows).toHaveLength(2336);
    for (const r of rows) {
      if (r.source_fix && r.status === 'draft') continue; // new English text, new Urdu draft (listed for the Language Reviewer)
      expect(r.status).toMatch(/^reviewed(-corrected|-kept|-flagged)?$/);
    }
    // Batch 16 (pass 5): the re-drafted source-fix rows were reviewed, so none is left as a draft.
    expect(rows.filter((r) => r.status === 'draft')).toEqual([]);
  });

  it('Batch 13 and Batch 14 are reviewed (pass 3) and in the catalog', () => {
    for (const r of [...status.batch13, ...status.batch14, ...status.batch14_extra] as Row[]) {
      expect(r.status).toMatch(/^reviewed/);
      expect(json[r.en], r.en).toBe(r.ur);
    }
    expect(read('src/features/calculator/i18n/ur.ts')).toContain('STATUS: REVIEWED');
  });

  it('Batch 15 (calculator result data, practice-hint meanings) is reviewed (pass 4) and wired into the catalog', () => {
    expect(status.batch15.length).toBe(180);
    for (const r of status.batch15 as Row[]) {
      expect(r.status).toMatch(/^reviewed/);
      expect(json[r.en], r.en).toBe(r.ur);
    }
    const n = (s: string) => (status.batch15 as Row[]).filter((r) => r.status === s).length;
    expect(n('reviewed-corrected')).toBe(16);
    expect(n('reviewed-corrected (optional)')).toBe(8);
    for (const r of status.pass3_reviewer_data as Row[]) expect(json[r.en], r.en).toBe(r.ur);
  });

  it('pass 4 shared keys: Prophet-name glosses and the confidence label get forms that fit both uses', () => {
    expect(json['The Witness']).toBe('گواہ'); // also Shāhid, propheticNames201.ts
    expect(json['The Last']).toBe('سب سے آخری'); // also ʿĀqib
    expect(json['The One']).toBe('ایک'); // also Wāḥid
    expect(json['Confidence']).toBe('اعتماد'); // also IlmHurufPanel "Confidence: 87%"
    expect(json['The Creator']).toBe('خالق، پیدا کرنے والا'); // Divine gloss of al-Khāliq only
    expect(json['The Creative']).toBe('تخلیق کار'); // human title (archetype 3, numerology 3, station 3)
    expect(json['Creativity, expression, joy. Threefold harmony of body, mind, and spirit.']).toBe('تخلیقی صلاحیت، اظہار اور خوشی۔ جسم، ذہن اور روح: تینوں کی ہم آہنگی۔');
    expect(json['Karma']).toBe('مکافاتِ عمل');
    expect(json['Creativity, expression, joy. Threefold harmony of body, mind, and spirit.']).not.toMatch(/تثلیث/);
  });

  it('the calculator Urdu locale only has keys from en.ts, and all 192 interface strings resolve', () => {
    const sets: [Record<string, unknown>, Record<string, unknown>][] = [
      [calculatorEn, calculatorUr],
      [nameFieldEn, nameFieldUr],
      [divineNamePickerEn, divineNamePickerUr],
    ];
    let n = 0;
    for (const [en, ur] of sets) {
      for (const k of Object.keys(ur)) expect(en, k).toHaveProperty(k);
      for (const [k, v] of Object.entries(en)) {
        for (const s of Array.isArray(v) ? v : [v]) {
          n++;
          const filled = String(s).replace('{themes}', 'The Light, and The Guide').replace(/\{\w+\}/g, '7');
          const out = catalog.get(filled);
          expect(out, `${k}: ${filled}`).toBeTruthy();
          expect(out, k).toMatch(/[\u0600-\u06FF]/);
        }
      }
    }
    expect(n).toBe(193); // 192 + divineNamePicker.close (source fix CL)
  });

  it('13.125: the spiritual-reflection sentence stays Urdu (no English list of glosses)', () => {
    const out = catalog.get(
      'The numerical correspondences in this analysis surface themes of The Most Merciful, The King, The Sovereign, and The Creator — themes to hold in personal reflection and dhikr, not a statement about your destiny or spiritual rank.',
    );
    expect(out).toContain('اوپر درج صفات');
    expect(out).not.toMatch(/[A-Za-z]/);
  });

  it('practice nights use the «درمیانی رات» convention (incl. 14.E1)', () => {
    for (const r of [...status.batch14, ...status.batch14_extra] as Row[]) expect(r.ur).toMatch(/ کی درمیانی رات/);
    expect(json['Wednesday night']).toBe('منگل اور بدھ کی درمیانی رات');
  });
});

describe('Ramadan card and practice hint (pass 3)', () => {
  it('the transliteration line becomes the Urdu meaning, not the Arabic again', () => {
    expect(json['Astaghfirullāh']).toBe('اللہ سے مغفرت مانگنا');
    expect(json['I seek forgiveness from Allah']).toBe('اللہ سے مغفرت مانگنا');
    expect(read('scripts/i18n/ur/catalog_ai_draft_ui.py')).toContain("('ramadan', 'Astaghfirullāh', 'اللہ سے مغفرت مانگنا')");
  });
  it('all session tags have Urdu', () => {
    const tags: Record<string, string> = {
      Fajr: 'فجر', 'Ḍuḥā / Morning': 'چاشت / صبح', 'Ẓuhr': 'ظہر', 'ʿAṣr': 'عصر',
      'Maghrib / Ifṭār': 'مغرب / افطار', 'ʿIshāʾ / Tarāwīḥ': 'عشاء / تراویح', Other: 'دیگر',
    };
    for (const [en, ur] of Object.entries(tags)) expect(json[en], en).toBe(ur);
  });
  it('CompactPracticeHint shows only the meaning in Urdu UI; other languages keep transliteration — meaning', () => {
    const src = read('src/components/planetary/CompactPracticeHint.tsx');
    expect(src).toContain("useLanguage().uiLanguage === 'ur'");
    expect(src).toContain('{isUrduUi ? meaning : <>{transliteration} <span');
  });
});

describe('Surah list (pass 3)', () => {
  it('Urdu UI shows the Arabic surah names from QURAN_META; others keep the Latin names', () => {
    const src = read('src/features/calculator/components/CalculatorTypeForm.tsx');
    expect(src).toContain('{num}. {isUrduUi ? meta.nameAr : meta.name}');
    expect(Object.keys(QURAN_META)).toHaveLength(114);
    for (const m of Object.values(QURAN_META)) expect(m.nameAr).toMatch(/^[\u0600-\u06FF ]+$/);
  });
});

describe('Urdu review sheet 3 (passes 6–8: Batches 17–25)', () => {
  const rows = status.sheet3 as (Row & { id: string })[];
  it('all 838 rows are reviewed (Batches 17–25: 101 corrections + 49 optional applied) and the catalog serves the reviewed Urdu', () => {
    expect(rows).toHaveLength(838);
    expect(rows.every((r) => r.status.startsWith('reviewed'))).toBe(true);
    expect(rows.filter((r) => r.status === 'reviewed-corrected')).toHaveLength(101);
    expect(rows.filter((r) => r.status === 'reviewed-corrected (optional)')).toHaveLength(49);
    expect(rows.filter((r) => json[r.en] !== r.ur).map((r) => r.id)).toEqual([]);
  });
  it('priority rows: Thursday night, hedging, medical qualifier and vows', () => {
    const ur = (id: string) => json[rows.find((r) => r.id === id)!.en];
    expect(ur('17.32')).toContain('جمعرات اور جمعہ کی درمیانی رات (شبِ جمعہ)');
    expect(ur('17.14')).toContain('مبارک سمجھی جاتی ہے');
    expect(ur('18.5')).toBe('طبی علاج (معالج کے مشورے سے)');
    expect(ur('19.76')).toBe('عہد و پیمان کی پاسداری');
    const all = rows.map((r) => json[r.en]).join('\n');
    expect(all).not.toMatch(/منتوں|منّت|(^|\s)منت(\s|$)|نذر|عنصریت|ہلکے پن سے|نالہ/);
  });
  it('pass 7 priority rows: no evil-eye «نظر», protection sought from Allah, health hedged', () => {
    const ur = (id: string) => json[rows.find((r) => r.id === id)!.en];
    for (const id of ['20.3', '20.21', '20.35', '20.43', '20.49']) expect(ur(id)).not.toContain('سخت نظر');
    expect(ur('20.43')).toContain('روایت میں اسے');
    for (const id of ['21.110', '21.112']) expect(ur(id)).toContain('اللہ کی حفاظت طلب');
    expect(ur('21.59')).toContain('روایت میں اس نمونے کے ساتھ');
    expect(ur('21.104')).toContain('مضبوط ہو سکتی ہے');
    expect(ur('21.113')).toContain('سامنا ہو سکتا ہے');
    expect(Object.values(json).join('\n')).toContain('ساعتِ کواکب');
  });
  it('pass 8 priority rows: no healing powers, no fortune-telling, no rizq from people', () => {
    const ur = (id: string) => json[rows.find((r) => r.id === id)!.en];
    for (const id of ['23.6', '23.9', '23.115', '24.3', '24.5', '24.6', '24.90', '24.91', '24.94', '24.97', '24.105']) expect(ur(id), id).not.toContain('شفا');
    for (const id of ['24.94', '24.97']) expect(ur(id)).toContain('طبی علاج کا بدل نہیں');
    expect(ur('24.74')).not.toContain('مستقبل بینی');
    expect(ur('22.106')).not.toContain('رزق');
    expect(ur('25.13')).toContain('روایتی نقطۂ نظر سے');
  });
  it('no AI-drafted result text is left unreviewed (every catalog_ai_draft.py key has a reviewed row)', () => {
    const reviewed = new Set<string>();
    for (const v of Object.values(status)) {
      const list = Array.isArray(v) ? v : v && typeof v === 'object' ? Object.values(v) : [];
      for (const e of list as { en?: string; status?: string }[]) if (e && e.en && e.status?.startsWith('reviewed')) reviewed.add(e.en);
    }
    const draft = read('scripts/i18n/ur/catalog_ai_draft.py');
    const keys = [...draft.matchAll(/^\s+\('(?:career-ui|rules|arch|manzil|career|potd)',\s*(['"])((?:\\.|(?!\1).)*)\1,/gm)].map((m) => m[2].replace(/\\(['"\\])/g, '$1'));
    expect(keys.length).toBe(896);
    expect(keys.filter((k) => !reviewed.has(k))).toEqual([]);
  });
});
