'use client';

import { useEffect, useMemo, useState } from 'react';
import { ExternalLink } from 'lucide-react';
import { CalculatorResult } from './CalculatorResult';
import { analyzeText } from '../lib/textAnalysis';
import { QURAN_META } from '../lib/quranMeta';
import { useCalculatorTranslations, type CalculatorLocale } from '../i18n';

/**
 * The reverse direction of Qur'anic Resonance (ResonanceResult.tsx): instead
 * of deriving a verse from a name's Kabīr, this picks a specific verse and
 * computes its own Abjad value — fetching the Arabic text via the same
 * /api/quran-ayah route, then running it through the same analyzeText()
 * pipeline used for Name/Phrase/General, rendered with the same
 * CalculatorResult component.
 */
export function QuranVerseResult({ locale, surah, ayah }: { locale: CalculatorLocale; surah: number; ayah: number }) {
  const { t } = useCalculatorTranslations(locale);
  const surahMeta = QURAN_META[surah];

  const [ayahText, setAyahText] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let cancelled = false;
    setLoading(true);
    setAyahText(null);
    fetch(`/api/quran-ayah/${surah}/${ayah}`)
      .then((r) => r.json())
      .then((data) => {
        if (!cancelled) setAyahText(data.text ?? null);
      })
      .catch(() => {
        if (!cancelled) setAyahText(null);
      })
      .finally(() => {
        if (!cancelled) setLoading(false);
      });
    return () => {
      cancelled = true;
    };
  }, [surah, ayah]);

  const profile = useMemo(() => (ayahText ? analyzeText(ayahText) : null), [ayahText]);

  return (
    <div className="flex flex-col gap-3">
      <div className="flex flex-col items-center gap-1.5 rounded-2xl border border-indigo-200 bg-white px-4 py-5 text-center dark:border-indigo-800 dark:bg-slate-800">
        <p className="text-xs font-medium uppercase tracking-[0.15em] text-slate-500">{t('quranVerseResultTitle')}</p>
        {surahMeta && (
          <>
            <p dir="rtl" className="text-3xl text-indigo-600 dark:text-indigo-400 font-arabic">
              {surahMeta.nameAr}
            </p>
            <p className="text-lg font-semibold text-slate-900 dark:text-slate-100">{surahMeta.name}</p>
          </>
        )}
        <span className="rounded-full border border-indigo-200 dark:border-indigo-800 px-3 py-1 text-sm text-indigo-600 dark:text-indigo-400">
          {t('ayahOfLabel', { ayah, total: surahMeta?.totalAyahs ?? ayah })}
        </span>
        <a
          href={`https://quran.com/${surah}/${ayah}`}
          target="_blank"
          rel="noreferrer"
          className="mt-1 flex items-center gap-1.5 text-sm text-indigo-600 dark:text-indigo-400"
        >
          <ExternalLink size={13} aria-hidden />
          {t('readFullVerseLabel')}
        </a>
      </div>

      {loading && <p className="text-base text-slate-500">{t('loadingVerse')}</p>}
      {!loading && !ayahText && <p className="text-base text-slate-500">{t('quranTextLoadError')}</p>}
      {!loading && profile && <CalculatorResult locale={locale} profile={profile} calcType="quran" />}
    </div>
  );
}
