/**
 * Life Guidance preview strings for every UI language (en, fr, ar, ur).
 * Every locale file is typed against en.ts, so a missing key is a type error;
 * locales.test.ts checks the same at runtime. EN is the reference; FR, AR and
 * UR are drafts until the Language Reviewer signs them off (list in
 * docs/i18n/life-guidance-l10n.md). Urdu is RTL like Arabic.
 */
import type { Language } from '../../translations';
import { en, type LifeGuidanceStrings } from './en';
import { fr } from './fr';
import { ar } from './ar';
import { ur } from './ur';

export const LIFE_GUIDANCE_STRINGS: Record<Language, LifeGuidanceStrings> = { en, fr, ar, ur };

/** Review status per locale. Never set 'reviewed' without the Language Reviewer's sign-off. */
export const LIFE_GUIDANCE_REVIEW: Record<Language, 'reference' | 'draft' | 'reviewed'> = {
  en: 'reference',
  fr: 'draft',
  ar: 'draft',
  ur: 'draft',
};

export const lifeGuidanceStrings = (lang: Language): LifeGuidanceStrings => LIFE_GUIDANCE_STRINGS[lang] ?? en;
export type { LifeGuidanceStrings };
