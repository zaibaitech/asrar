import { describe, it, expect } from 'vitest';
import { readFileSync } from 'fs';
import path from 'path';
import { calculatorEn, divineNamePickerEn, nameFieldEn } from '../features/calculator/i18n/en';
import { calculatorUr, divineNamePickerUr, nameFieldUr } from '../features/calculator/i18n/ur';

/** Native Urdu review, sheet 2: reviewed strings and the Batch 13/14 drafts can be told apart. */
const root = path.resolve(__dirname, '../..');
const read = (f: string) => readFileSync(path.join(root, f), 'utf8');
const status = JSON.parse(read('scripts/i18n/ur/review_status.json'));
const catalog: Record<string, string> = JSON.parse(read('public/i18n/ur-ui.json'));

describe('Urdu review status', () => {
  it('every sheet-2 row (2,336) carries a reviewed status', () => {
    const rows = Object.values(status.sheet2) as { status: string }[];
    expect(rows).toHaveLength(2336);
    for (const r of rows) expect(r.status).toMatch(/^reviewed(-corrected|-kept|-flagged)?$/);
    expect(rows.filter((r) => r.status === 'reviewed-corrected').length).toBeGreaterThanOrEqual(415);
  });

  it('Batch 13 (/ur/abjad calculator UI) and Batch 14 (practice nights) are drafts and are in the catalog', () => {
    for (const r of [...status.batch13, ...status.batch14]) {
      expect(r.status).toBe('draft');
      expect(catalog[r.en], r.en).toBe(r.ur);
    }
    expect(status.batch14.map((r: { en: string }) => r.en)).toContain('Thursday midnight (Friday night)');
  });

  it('the calculator Urdu locale only has keys from en.ts and covers every key that had no Urdu', () => {
    const sets: [Record<string, unknown>, Record<string, unknown>][] = [
      [calculatorEn, calculatorUr],
      [nameFieldEn, nameFieldUr],
      [divineNamePickerEn, divineNamePickerUr],
    ];
    for (const [en, ur] of sets) {
      for (const k of Object.keys(ur)) expect(en, k).toHaveProperty(k);
      for (const [k, v] of Object.entries(en)) {
        for (const s of Array.isArray(v) ? v : [v]) {
          if (/\{\w+\}/.test(String(s))) continue;
          expect(catalog[String(s)], `${k}: ${s}`).toBeTruthy();
        }
      }
    }
    expect(read('src/features/calculator/i18n/ur.ts')).toContain('DRAFT — NOT REVIEWED');
  });

  it('practice nights use the «درمیانی رات» convention', () => {
    for (const r of status.batch14) expect(r.ur).toMatch(/ کی درمیانی رات/);
  });
});
