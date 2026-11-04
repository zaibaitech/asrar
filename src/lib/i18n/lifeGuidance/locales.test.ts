import { describe, it, expect } from 'vitest';
import { LIFE_GUIDANCE_STRINGS, LIFE_GUIDANCE_REVIEW } from './index';

type Tree = Record<string, unknown>;
const leaves = (t: unknown, p = '', out = new Map<string, unknown>()): Map<string, unknown> => {
  for (const [k, v] of Object.entries(t as Tree)) {
    const key = p ? `${p}.${k}` : k;
    if (v && typeof v === 'object' && !Array.isArray(v)) leaves(v, key, out);
    else out.set(key, v);
  }
  return out;
};
const ARABIC = /[\u0600-\u06FF]/;
const FORBIDDEN = /عنصري|عنصرية|عناصري|سخت نظر/;

describe('Life Guidance strings: every key in every locale', () => {
  const en = leaves(LIFE_GUIDANCE_STRINGS.en);
  for (const lang of ['fr', 'ar', 'ur'] as const) {
    const tree = leaves(LIFE_GUIDANCE_STRINGS[lang]);
    it(`${lang} has exactly the en keys, all non-empty`, () => {
      expect([...tree.keys()].sort()).toEqual([...en.keys()].sort());
      for (const [k, v] of tree) {
        const ref = en.get(k);
        if (Array.isArray(ref)) {
          expect(Array.isArray(v) && v.length === ref.length, k).toBe(true);
          (v as string[]).forEach((s) => expect(s.trim(), k).not.toBe(''));
        } else expect(String(v).trim(), k).not.toBe('');
      }
    });
  }
  it('ar and ur are in Arabic script (Urdu uses the same RTL setup)', () => {
    for (const lang of ['ar', 'ur'] as const)
      for (const [k, v] of leaves(LIFE_GUIDANCE_STRINGS[lang])) {
        for (const s of [v].flat() as string[]) expect(ARABIC.test(s), `${lang}:${k}`).toBe(true);
      }
  });
  it('no forbidden wording in any locale', () => {
    for (const lang of ['en', 'fr', 'ar', 'ur'] as const)
      for (const [k, v] of leaves(LIFE_GUIDANCE_STRINGS[lang])) expect(FORBIDDEN.test(String(v)), `${lang}:${k}`).toBe(false);
  });
  it('machine translations are never marked reviewed', () => {
    expect(LIFE_GUIDANCE_REVIEW).toEqual({ en: 'reference', fr: 'draft', ar: 'draft', ur: 'draft' });
  });
});
