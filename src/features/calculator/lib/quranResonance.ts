/**
 * Qur'anic Resonance — connects a name's Kabīr total to the Qur'an's own
 * structure (114 surahs, each with a fixed ayah count).
 *
 * Algorithm:
 * 1. Surah number = kabir mod 114 (0 maps to 114, the last surah)
 * 2. Ayah number = kabir mod (ayah count of that surah) (0 maps to the last ayah)
 */

import { QURAN_META } from './quranMeta';

export interface QuranResonanceResult {
  surahNumber: number;
  surahName: string;
  surahNameArabic: string;
  ayahNumber: number;
  totalAyahsInSurah: number;
  quranLink: string;
}

export function computeQuranResonance(kabir: number): QuranResonanceResult | null {
  if (!Number.isFinite(kabir) || kabir <= 0) return null;

  let surahNumber = kabir % 114;
  if (surahNumber === 0) surahNumber = 114;

  const surah = QURAN_META[surahNumber];
  if (!surah) return null;

  let ayahNumber = kabir % surah.totalAyahs;
  if (ayahNumber === 0) ayahNumber = surah.totalAyahs;

  return {
    surahNumber,
    surahName: surah.name,
    surahNameArabic: surah.nameAr,
    ayahNumber,
    totalAyahsInSurah: surah.totalAyahs,
    quranLink: `https://quran.com/${surahNumber}/${ayahNumber}`,
  };
}
