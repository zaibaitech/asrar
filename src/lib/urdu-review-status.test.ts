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
  it('every sheet-2 row (2,336) carries a reviewed status', () => {
    const rows = Object.values(status.sheet2) as { status: string }[];
    expect(rows).toHaveLength(2336);
    for (const r of rows) expect(r.status).toMatch(/^reviewed(-corrected|-kept|-flagged)?$/);
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
    expect(n('reviewed-corrected')).toBe(15);
    expect(n('reviewed-corrected (optional)')).toBe(8);
    for (const r of status.pass3_reviewer_data as Row[]) expect(json[r.en], r.en).toBe(r.ur);
  });

  it('pass 4 shared keys: Prophet-name glosses and the confidence label get forms that fit both uses', () => {
    expect(json['The Witness']).toBe('گواہ'); // also Shāhid, propheticNames201.ts
    expect(json['The Last']).toBe('سب سے آخری'); // also ʿĀqib
    expect(json['The One']).toBe('ایک'); // also Wāḥid
    expect(json['Confidence']).toBe('اعتماد'); // also IlmHurufPanel "Confidence: 87%"
    expect(json['The Creator']).toBe('تخلیق کرنے والا'); // reviewer fallback until the EN split; never «خالق»
    expect(json['Creativity, expression, joy. Sacred trinity of body, mind, and spirit.']).toBe('تخلیقی صلاحیت، اظہار اور خوشی۔ جسم، ذہن اور روح: تینوں کی ہم آہنگی۔');
    expect(json['Karma']).toBe('مکافاتِ عمل');
    expect(json['Creativity, expression, joy. Sacred trinity of body, mind, and spirit.']).not.toMatch(/تثلیث/);
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
    expect(n).toBe(192);
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
