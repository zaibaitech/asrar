import { describe, it, expect } from 'vitest';
import { LIFE_GUIDANCE_STRINGS, LIFE_GUIDANCE_REVIEW } from './index';
import { SOURCES, LABELS, LANGS } from '../../../features/sources/sourcesContent';
import { ELEMENT_NAME } from '../../../features/calculator/lib/i18nText';
import { ZODIAC_IDENTITY_MAP } from '../../../features/calculator/lib/zodiac';

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

  it('every source note, reference text and label resolves to a non-empty string in en, fr, ar and ur', () => {
    expect(LANGS).toEqual(['en', 'fr', 'ar', 'ur']);
    for (const [step, src] of Object.entries(SOURCES)) {
      for (const l of LANGS) {
        expect(src.note[l]?.trim(), `${step}.note.${l}`).toBeTruthy();
        src.refs.forEach((r, i) => expect(r.text[l]?.trim(), `${step}.refs[${i}].${l}`).toBeTruthy());
      }
    }
    for (const [key, v] of Object.entries(LABELS)) {
      const recs = key === 'steps' ? Object.values(v as Record<string, Record<string, string>>) : [v as Record<string, string>];
      for (const rec of recs) for (const l of LANGS) expect(rec[l]?.trim(), `${key}.${l}`).toBeTruthy();
    }
  });
  it('element and zodiac names in en, fr and ar match the app\u2019s existing data (no drift)', () => {
    for (const l of ['en', 'fr', 'ar'] as const) {
      for (const [k, v] of Object.entries(LIFE_GUIDANCE_STRINGS[l].sources.elements)) expect(v).toBe(ELEMENT_NAME[k][l]);
      for (const [k, v] of Object.entries(LIFE_GUIDANCE_STRINGS[l].sources.zodiac))
        expect(v).toBe(ZODIAC_IDENTITY_MAP[k as keyof typeof ZODIAC_IDENTITY_MAP][l]);
    }
  });
});
