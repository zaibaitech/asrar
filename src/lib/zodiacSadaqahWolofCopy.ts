/**
 * Labels that keep Wolof secondary on date-of-birth (Niane) sadaqah cards
 * and teaching videos.
 */
import type { Language } from './translations';

/** Script forms already used in card titles/bodies. Do not invent new names. */
const WOLOF_SCRIPT: Record<string, { ar: string; ur: string }> = {
  petaw: { ar: 'بيتاو', ur: 'پیتاو' },
  laakh: { ar: 'لاخ', ur: 'لاخ' },
  'Cheb Yap': { ar: 'شب ياب', ur: 'چیب یاپ' },
};

export function zodiacSadaqahWolofLine(lang: Language, wolofName: string): string {
  if (lang === 'fr') return `Wolof : ${wolofName}`;
  if (lang === 'ar') {
    const script = WOLOF_SCRIPT[wolofName]?.ar ?? wolofName;
    return `(الولوفية: ${script})`;
  }
  if (lang === 'ur') {
    const script = WOLOF_SCRIPT[wolofName]?.ur ?? wolofName;
    return `(وولوف: ${script})`;
  }
  return `Wolof: ${wolofName}`;
}

export function zodiacSadaqahInWolofLabel(lang: Language): string {
  if (lang === 'fr') return 'En wolof';
  if (lang === 'ar') return 'بالولوفية';
  if (lang === 'ur') return 'وولوف میں';
  return 'In Wolof';
}
