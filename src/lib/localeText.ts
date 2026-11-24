import type { Language } from './translations';

export type LocaleText = { en: string; fr: string; ar?: string; ur?: string };
export type LocaleList = { en: string[]; fr: string[]; ar?: string[]; ur?: string[] };

/** Pick a localized string from an en/fr/(ar)/(ur) object. Falls back to English only if missing. */
export function localeText(obj: LocaleText, lang: Language): string {
  const value = obj[lang];
  if (typeof value === 'string' && value.trim()) return value;
  return obj.en;
}

export function localeList(obj: LocaleList, lang: Language): string[] {
  const value = obj[lang];
  if (Array.isArray(value) && value.length > 0) return value;
  return obj.en;
}
