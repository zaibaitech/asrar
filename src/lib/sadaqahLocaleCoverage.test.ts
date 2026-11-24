import { describe, expect, it } from 'vitest';
import burujData from '../data/burujData.json';
import {
  ZODIAC_SADAQAH,
  ZODIAC_SIGN_ORDER,
} from '../data/zodiacSadaqahData';
import { localeList, localeText } from './localeText';
import { SADAQAH_UI_COPY, sadaqahUiCopy } from './sadaqahUiCopy';
import { abjadSystemUsedCopy } from './abjadSystemUsedCopy';
import { zodiacSadaqahInWolofLabel, zodiacSadaqahWolofLine } from './zodiacSadaqahWolofCopy';
import type { Language } from './translations';

const LANGS: Language[] = ['en', 'fr', 'ar', 'ur'];
const ARABIC_SCRIPT = /[\u0600-\u06FF]/;
const FORBIDDEN = /عنصري|عنصرية|عناصري/;

const RENDERED_MONTHLY = ['traditional', 'frequency', 'context', 'purpose', 'modern_alternatives'] as const;
const RENDERED_LIFETIME = ['traditional', 'components', 'best_timing', 'significance'] as const;

function hasLocale(obj: any, lang: Language): boolean {
  const v = obj?.[lang];
  if (typeof v === 'string') return v.trim().length > 0;
  if (Array.isArray(v)) return v.length > 0 && v.every((s) => typeof s === 'string' && s.trim());
  return false;
}

function collectSadaqahFields() {
  const rows: { path: string; obj: any }[] = [];
  const data = (burujData as any).buruj_data;
  for (const n of Object.keys(data)) {
    const sadaqah = data[n].sadaqah;
    for (const field of RENDERED_MONTHLY) {
      if (sadaqah.monthly[field]) rows.push({ path: `${n}.monthly.${field}`, obj: sadaqah.monthly[field] });
    }
    for (const field of RENDERED_LIFETIME) {
      if (sadaqah.lifetime[field]) rows.push({ path: `${n}.lifetime.${field}`, obj: sadaqah.lifetime[field] });
    }
  }
  return rows;
}

describe('sadaqah and abjad locale coverage (#121 / #122)', () => {
  it('UI chrome has a non-empty string for every key in en, fr, ar and ur', () => {
    const keys = Object.keys(SADAQAH_UI_COPY.en) as (keyof typeof SADAQAH_UI_COPY.en)[];
    expect(keys.length).toBeGreaterThan(0);
    for (const lang of LANGS) {
      const copy = sadaqahUiCopy(lang);
      for (const key of keys) {
        expect(copy[key].trim(), `${lang}.${key}`).toBeTruthy();
        if (lang === 'fr') {
          expect(copy[key], `FR ${key} leaked English`).not.toBe(SADAQAH_UI_COPY.en[key]);
        }
        if (lang === 'ar' || lang === 'ur') {
          expect(copy[key]).toMatch(ARABIC_SCRIPT);
          expect(copy[key]).not.toMatch(FORBIDDEN);
        }
      }
    }
  });

  it('rendered burujData sadaqah fields have fr, ar and ur and do not fall back to English', () => {
    const rows = collectSadaqahFields();
    expect(rows.length).toBeGreaterThan(0);
    for (const { path, obj } of rows) {
      for (const lang of LANGS) {
        expect(hasLocale(obj, lang), `missing ${lang} at ${path}`).toBe(true);
      }
      if (typeof obj.en === 'string') {
        expect(localeText(obj, 'fr'), path).not.toBe(obj.en);
        expect(localeText(obj, 'ar')).toMatch(ARABIC_SCRIPT);
        expect(localeText(obj, 'ur')).toMatch(ARABIC_SCRIPT);
        expect(localeText(obj, 'ar')).not.toBe(obj.en);
        expect(localeText(obj, 'ur')).not.toBe(obj.en);
        expect(localeText(obj, 'ar') + localeText(obj, 'ur')).not.toMatch(FORBIDDEN);
      } else {
        expect(localeList(obj, 'fr').join('|')).not.toBe(obj.en.join('|'));
        expect(localeList(obj, 'ar').join(' ')).toMatch(ARABIC_SCRIPT);
        expect(localeList(obj, 'ur').join(' ')).toMatch(ARABIC_SCRIPT);
        expect(localeList(obj, 'ar').join(' ')).not.toMatch(FORBIDDEN);
        expect(localeList(obj, 'ar').length, path).toBe(obj.en.length);
        expect(localeList(obj, 'ur').length, path).toBe(obj.en.length);
        expect(localeList(obj, 'fr').length, path).toBe(obj.en.length);
      }
    }
  });

  it('zodiac (Niane) card titles, bodies and bullets have fr, ar and ur', () => {
    for (const sign of ZODIAC_SIGN_ORDER) {
      const entry = ZODIAC_SADAQAH[sign];
      const forms = [...(entry.generalForms ?? []), ...entry.specificForms];
      for (const form of forms) {
        for (const lang of LANGS) {
          const title = localeText(form.title, lang);
          const body = localeText(form.body, lang);
          expect(title.trim(), `${sign} title ${lang}`).toBeTruthy();
          expect(body.trim(), `${sign} body ${lang}`).toBeTruthy();
          if (lang !== 'en') {
            expect(title, `${sign} title ${lang}`).not.toBe(form.title.en);
          }
          if (lang === 'ar' || lang === 'ur') {
            expect(title).toMatch(ARABIC_SCRIPT);
            expect(body).toMatch(ARABIC_SCRIPT);
          }
        }
        if (form.bullets) {
          expect(localeList(form.bullets, 'fr').length).toBe(form.bullets.en.length);
          expect(localeList(form.bullets, 'ar').join(' ')).toMatch(ARABIC_SCRIPT);
          expect(localeList(form.bullets, 'ur').join(' ')).toMatch(ARABIC_SCRIPT);
        }
      }
      // sign name
      expect(localeText({ en: entry.en, fr: entry.fr, ar: entry.ar, ur: entry.ur }, 'ar')).toMatch(ARABIC_SCRIPT);
      expect(localeText({ en: entry.en, fr: entry.fr, ar: entry.ar, ur: entry.ur }, 'ur')).toMatch(ARABIC_SCRIPT);
    }
  });

  it('does not use عنصري / عنصرية / عناصري in new sadaqah Arabic', () => {
    const blob = JSON.stringify((burujData as any).buruj_data);
    expect(blob).not.toMatch(FORBIDDEN);
  });


  it('bans guarantee, protection and amulet wording in buruj sadaqah Arabic', () => {
    const banned = /يضمن|تضمن|يحمي|تحمي|درعًا واقيًا|درعا واقيا|درعًا واقي|السُّنّة|السُّنة/;
    const hits: string[] = [];
    const walk = (obj: unknown, path: string) => {
      if (Array.isArray(obj)) {
        obj.forEach((item, i) => walk(item, `${path}[${i}]`));
        return;
      }
      if (obj && typeof obj === 'object') {
        const rec = obj as Record<string, unknown>;
        if (typeof rec.ar === 'string' && banned.test(rec.ar)) hits.push(`${path}.ar`);
        if (Array.isArray(rec.ar)) {
          rec.ar.forEach((s, i) => {
            if (typeof s === 'string' && banned.test(s)) hits.push(`${path}.ar[${i}]`);
          });
        }
        for (const [k, v] of Object.entries(rec)) {
          if (k !== 'ar') walk(v, `${path}.${k}`);
        }
      }
    };
    const data = (burujData as any).buruj_data;
    for (const n of Object.keys(data)) walk(data[n].sadaqah, n);
    expect(hits, hits.join(', ')).toEqual([]);
  });

  it('Abjad and Wolof result lines exist in all four languages', () => {
    const labels = { maghribi: 'مغربي', mashriqi: 'مشرقي' };
    const urLabels = { maghribi: 'مغربی', mashriqi: 'مشرقی' };
    expect(abjadSystemUsedCopy('fr', 'Mashriqi', labels).line).toContain('mashriqi');
    expect(abjadSystemUsedCopy('fr', 'Mashriqi', labels).change).toBe('Modifier');
    expect(abjadSystemUsedCopy('ar', 'Mashriqi', labels).line).toMatch(ARABIC_SCRIPT);
    expect(abjadSystemUsedCopy('ur', 'Mashriqi', urLabels).line).toMatch(ARABIC_SCRIPT);
    expect(abjadSystemUsedCopy('ar', 'Mashriqi', labels).change).not.toBe('Change');
    expect(abjadSystemUsedCopy('ur', 'Mashriqi', urLabels).change).not.toBe('Change');
    expect(zodiacSadaqahWolofLine('fr', 'petaw')).toBe('Wolof : petaw');
    expect(zodiacSadaqahInWolofLabel('fr')).toBe('En wolof');
    expect(zodiacSadaqahWolofLine('ar', 'petaw')).toMatch(ARABIC_SCRIPT);
    expect(zodiacSadaqahInWolofLabel('ur')).toMatch(ARABIC_SCRIPT);
  });
});
