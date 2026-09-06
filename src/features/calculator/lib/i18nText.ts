/** Small trilingual text tuple shared across the calculator's data files. */
export interface TriText {
  en: string;
  fr: string;
  ar: string;
}

export type Locale = 'en' | 'fr' | 'ar';

export function pick(locale: Locale, t: TriText): string {
  return t[locale];
}

export const ELEMENT_NAME: Record<string, TriText> = {
  fire: { en: 'Fire', fr: 'Feu', ar: 'النار' },
  earth: { en: 'Earth', fr: 'Terre', ar: 'التراب' },
  air: { en: 'Air', fr: 'Air', ar: 'الهواء' },
  water: { en: 'Water', fr: 'Eau', ar: 'الماء' },
};
