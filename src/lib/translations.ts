/**
 * UI strings for the web app. One file per language in ./i18n/.
 * en and fr are complete; ar and ur are partial and fall back to English per key.
 */
import { en } from './i18n/en';
import { fr } from './i18n/fr';
import { ar } from './i18n/ar';
import { ur } from './i18n/ur';
import { withFallback } from './i18n/fallback';

export const translations = {
  en,
  fr,
  ar: withFallback(en, ar),
  ur: withFallback(en, ur),
};

/** Raw per-language trees (ar/ur unmerged) for tests and tooling. */
export const rawTranslations = { en, fr, ar, ur };

export type Language = keyof typeof translations;
export type TranslationKeys = typeof translations.en;

/** Languages written right-to-left. */
export const RTL_LANGUAGES: readonly Language[] = ['ar', 'ur'];
export const isRtl = (lang: string): boolean => (RTL_LANGUAGES as readonly string[]).includes(lang);
