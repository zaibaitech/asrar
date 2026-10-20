import { describe, it, expect } from 'vitest';
import { readFileSync } from 'fs';
import path from 'path';

/**
 * Phase 4 of the Urdu audit: review of the 896 AI-drafted result texts (catalog_ai_draft.py).
 * scripts/i18n/ur/phase4_review.json records what was reviewed, corrected and flagged. These tests keep
 * that record honest: it must describe the catalog as it is (no stale "after" text), the group totals
 * must match the draft file, and the terms found wrong must not come back.
 */
const root = path.resolve(__dirname, '../..');
const read = (rel: string) => readFileSync(path.join(root, rel), 'utf8');
const raw: Record<string, string> = JSON.parse(read('public/i18n/ur-ui.json'));
const log = JSON.parse(read('scripts/i18n/ur/phase4_review.json')) as {
  groups: Record<string, { total: number; reviewed: number }>;
  corrections: { group: string; en: string; before: string; after: string; reason: string }[];
  flags: { group: string; en: string; ur: string; reason: string }[];
};
const draft = read('scripts/i18n/ur/catalog_ai_draft.py');
const countIn = (group: string) => (draft.match(new RegExp(`^\\s+\\('${group}',`, 'gm')) ?? []).length;

describe('Phase 4 review record', () => {
  it('the original AI draft still has 896 entries in the six groups', () => {
    const counts = Object.fromEntries(['career-ui', 'rules', 'arch', 'manzil', 'career', 'potd'].map((g) => [g, countIn(g)]));
    expect(counts).toEqual({ 'career-ui': 23, rules: 86, arch: 148, manzil: 277, career: 355, potd: 7 });
  });

  it('every reviewed group has its real total and was reviewed in full', () => {
    for (const [g, v] of Object.entries(log.groups)) {
      expect(v.total, g).toBe(countIn(g));
      expect(v.reviewed, g).toBe(v.total);
    }
  });

  it('each correction is what the catalog now says, differs from the old text, and gives a reason', () => {
    const stale = log.corrections.filter((c) => raw[c.en] !== c.after || c.before === c.after || !c.reason.trim());
    expect(stale.map((c) => c.en.slice(0, 60))).toEqual([]);
    expect(log.corrections.every((c) => c.group in log.groups)).toBe(true);
  });

  it('each flagged entry exists in the catalog with the Urdu that is flagged, and says why', () => {
    const bad = log.flags.filter((f) => raw[f.en] !== f.ur || !f.reason.trim());
    expect(bad.map((f) => f.en.slice(0, 60))).toEqual([]);
    expect(new Set(log.flags.map((f) => f.en)).size).toBe(log.flags.length);
  });
});
