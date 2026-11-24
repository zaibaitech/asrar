/**
 * Labels that keep Wolof secondary on date-of-birth (Niane) sadaqah cards
 * and teaching videos.
 */
import type { Language } from './translations';

export function zodiacSadaqahWolofLine(lang: Language, wolofName: string): string {
  if (lang === 'fr') return `Wolof : ${wolofName}`;
  if (lang === 'ar') return `الولوفية: ${wolofName}`;
  if (lang === 'ur') return `وولوف: ${wolofName}`;
  return `Wolof: ${wolofName}`;
}

export function zodiacSadaqahInWolofLabel(lang: Language): string {
  if (lang === 'fr') return 'En wolof';
  if (lang === 'ar') return 'بالولوفية';
  if (lang === 'ur') return 'وولوف میں';
  return 'In Wolof';
}
