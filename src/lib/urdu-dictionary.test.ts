import { describe, it, expect } from 'vitest';
import { readFileSync } from 'fs';
import path from 'path';
import { rawTranslations, translations, isRtl, RTL_LANGUAGES } from './translations';

/**
 * Phase 5: the shared Urdu dictionary (src/lib/i18n/ur.ts) and the guarantees about the other locales.
 * translations.test.ts covers fr completeness and ar; nothing covered ur, which is a partial
 * dictionary merged over English (withFallback) like ar.
 */
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
const ur = leaves(rawTranslations.ur);
const URDU = /[؀-ۿ]/;
const root = path.resolve(__dirname, '../..');
const catalog: Record<string, string> = JSON.parse(readFileSync(path.join(root, 'public/i18n/ur-ui.json'), 'utf8'));

describe('ur.ts (partial dictionary over English)', () => {
  it('only uses keys that exist in English (no typo or stale key silently falls back)', () => {
    expect([...ur.keys()].filter((k) => !en.has(k))).toEqual([]);
  });

  it('every value is a non-empty string, written in Urdu script, and different from the English', () => {
    const bad = [...ur.entries()].filter(([k, v]) => typeof v !== 'string' || v.trim() === '' || !URDU.test(v) || v === en.get(k));
    expect(bad.map(([k]) => k)).toEqual([]);
  });

  it('defines every navigation and common key (these appear on every Urdu page), plus the Abjad selector and About keys', () => {
    const required = [...en.keys()].filter((k) => k.startsWith('nav.') || k.startsWith('common.') || k.startsWith('abjadSystem.'));
    expect(required.length).toBeGreaterThan(40);
    expect(required.filter((k) => !ur.has(k))).toEqual([]);
  });

  it('keeps the placeholders of the English value ({name}, ${x}) in the Urdu value', () => {
    const bad = [...ur.entries()].filter(([k, v]) => {
      const ph = String(en.get(k)).match(/\{[A-Za-z0-9_]+\}/g) ?? [];
      return ph.some((p) => !String(v).includes(p));
    });
    expect(bad.map(([k]) => k)).toEqual([]);
  });

  it('never contradicts the catalog: where the English value is also a catalog key, both give the same Urdu', () => {
    const bad = [...ur.entries()].filter(([k, v]) => {
      const c = catalog[String(en.get(k))];
      return c !== undefined && c !== v;
    });
    expect(bad.map(([k, v]) => `${k}: ${String(v)} != ${catalog[String(en.get(k))]}`)).toEqual([]);
  });

  it('the merged dictionary falls back to English for every key Urdu does not define, and uses Urdu for the rest', () => {
    const merged = leaves(translations.ur);
    for (const [k, v] of en) {
      expect(merged.has(k), k).toBe(true);
      expect(merged.get(k), k).toEqual(ur.has(k) ? ur.get(k) : v);
    }
  });
});

describe('language direction', () => {
  it('Urdu and Arabic are right-to-left; English and French are not', () => {
    expect([...RTL_LANGUAGES].sort()).toEqual(['ar', 'ur']);
    expect(isRtl('ur')).toBe(true);
    expect(isRtl('ar')).toBe(true);
    expect(isRtl('en')).toBe(false);
    expect(isRtl('fr')).toBe(false);
  });

  it('the client sets document lang and dir from the chosen language (so Urdu mode on an English route is RTL)', () => {
    const src = readFileSync(path.join(root, 'src/contexts/LanguageContext.tsx'), 'utf8');
    expect(src).toContain('document.documentElement.lang = docLang');
    expect(src).toContain("document.documentElement.dir = isRtl(docLang) ? 'rtl' : 'ltr'");
  });
});

describe('other locales are not touched by Urdu', () => {
  it('the English and French dictionaries use no Urdu-only letters (ٹ ڈ ڑ ں ھ ہ ے); their Arabic letters are the Abjad values that were always there', () => {
    for (const lang of ['en', 'fr'] as const) {
      const bad = [...leaves(rawTranslations[lang]).entries()].filter(([, v]) => typeof v === 'string' && /[ٹڈڑںھہے]/.test(v));
      expect(bad.map(([k]) => `${lang}.${k}`)).toEqual([]);
    }
  });

  it('the Arabic dictionary and Arabic catalog use no Urdu-only letters (ٹ ڈ ڑ ں ھ ہ ے)', () => {
    const arUi = JSON.parse(readFileSync(path.join(root, 'public/i18n/ar-ui.json'), 'utf8')) as Record<string, string>;
    const urduOnly = /[ٹڈڑںھہے]/;
    expect(Object.entries(arUi).filter(([, v]) => urduOnly.test(v)).map(([k]) => k)).toEqual([]);
    expect([...leaves(rawTranslations.ar).entries()].filter(([, v]) => typeof v === 'string' && urduOnly.test(v)).map(([k]) => k)).toEqual([]);
  });

  it('the Urdu catalog is not loaded for other languages: the translator maps each catalog to its own language only', () => {
    const src = readFileSync(path.join(root, 'src/components/i18n/ArabicDomTranslator.tsx'), 'utf8');
    expect(src).toContain('fetch(`/i18n/${lang}-ui.json`');
    expect(src).toMatch(/ar:\s*'ar-u-nu-latn'/);
    expect(src).toMatch(/ur:\s*'ur-u-nu-latn'/);
  });
});
