import { describe, expect, it } from 'vitest';
import { rawTranslations, translations } from '../translations';

type Tree = Record<string, unknown>;
const isObj = (v: unknown): v is Tree => typeof v === 'object' && v !== null && !Array.isArray(v);

function leaves(t: unknown, prefix = ''): Map<string, unknown> {
  const out = new Map<string, unknown>();
  if (!isObj(t)) return out;
  for (const [k, v] of Object.entries(t)) {
    const key = prefix ? `${prefix}.${k}` : k;
    if (isObj(v)) leaves(v, key).forEach((val, kk) => out.set(kk, val));
    else out.set(key, v);
  }
  return out;
}

const en = leaves(rawTranslations.en);
const fr = leaves(rawTranslations.fr);
const ar = leaves(rawTranslations.ar);

describe('translations: missing keys', () => {
  it('fr has every en key (fr is a complete language)', () => {
    const missing = [...en.keys()].filter((k) => !fr.has(k));
    expect(missing).toEqual([]);
  });

  it('ar only uses keys that exist in en (no typos / stale keys)', () => {
    const unknown = [...ar.keys()].filter((k) => !en.has(k));
    expect(unknown).toEqual([]);
  });

  it('ar values are non-empty and contain Arabic script (when the English has words)', () => {
    const bad = [...ar.entries()].filter(
      ([k, v]) =>
        typeof v === 'string' &&
        (v.trim() === '' ||
          (/[A-Za-z]{3}/.test(String(en.get(k))) &&
            !/[\u0600-\u06FF]/.test(v) &&
            // kept identical on purpose: transliterations and brand names
            !(v === en.get(k) && (/[āīūḥṣḍṭẓʿʾ]/.test(v) || /^(Telegram|X \(Twitter\))$/.test(v))))),
    );
    expect(bad.map(([k]) => k)).toEqual([]);
  });

  it('ar core UI sections are complete (common, calculator, profile, onboarding)', () => {
    for (const section of ['common', 'calculator', 'profile', 'onboarding']) {
      const missing = [...en.keys()].filter((k) => k.startsWith(`${section}.`) && !ar.has(k));
      expect({ section, missing }).toEqual({ section, missing: [] });
    }
  });

  it('merged ar falls back to English for every missing key', () => {
    const merged = leaves(translations.ar);
    for (const [k, v] of en) {
      expect(merged.has(k)).toBe(true);
      if (!ar.has(k)) expect(merged.get(k)).toEqual(v);
    }
  });

  it('ar covers every en key', () => {
    const missing = [...en.keys()].filter((k) => !ar.has(k));
    expect(missing).toEqual([]);
  });
});
