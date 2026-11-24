/**
 * Labels that keep Wolof secondary on date-of-birth (Niane) sadaqah cards
 * and teaching videos. EN/FR wording is fixed. Arabic and Urdu fall back
 * to English until reviewed strings exist.
 */
import type { Language } from './translations';

export function zodiacSadaqahWolofLine(lang: Language, wolofName: string): string {
  if (lang === 'fr') return `Wolof : ${wolofName}`;
  return `Wolof: ${wolofName}`;
}

export function zodiacSadaqahInWolofLabel(lang: Language): string {
  if (lang === 'fr') return 'En wolof';
  return 'In Wolof';
}
