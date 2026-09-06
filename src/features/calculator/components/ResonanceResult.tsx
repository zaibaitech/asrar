'use client';

import { useEffect, useMemo, useState } from 'react';
import { Copy, ExternalLink } from 'lucide-react';
import { Card } from './Card';
import { pick, type Locale } from '../lib/i18nText';
import { computeDivineResonance } from '../lib/divineResonance';
import { computeQuranResonance } from '../lib/quranResonance';
import { InfoDisclosure } from './InfoDisclosure';
import type { CalculationType } from './calculatorTypes';
import { useCalculatorTranslations, type CalculatorLocale } from '../i18n';

function SectionTitle({ children }: { children: React.ReactNode }) {
  return <p className="text-sm font-semibold text-indigo-600 dark:text-indigo-400">{children}</p>;
}

export function ResonanceResult({
  locale,
  calcType,
  personName,
  motherName,
}: {
  locale: CalculatorLocale;
  calcType: Extract<CalculationType, 'divineResonance' | 'quranicResonance'>;
  personName: string;
  motherName: string;
}) {
  const { t } = useCalculatorTranslations(locale);
  const uiLocale = locale as Locale;

  // Both calculators key off the person's own Kabīr (mother's name is
  // collected for consistency with the traditional two-name input pattern,
  // but isn't consumed by either of these two specific calculations).
  const personResonance = useMemo(() => computeDivineResonance(personName), [personName]);
  const divine = calcType === 'divineResonance' ? personResonance : null;

  const quran = useMemo(
    () => (calcType === 'quranicResonance' && personResonance ? computeQuranResonance(personResonance.total) : null),
    [calcType, personResonance]
  );

  const [ayahText, setAyahText] = useState<string | null>(null);
  const [ayahLoading, setAyahLoading] = useState(false);

  useEffect(() => {
    if (!quran) return;
    let cancelled = false;
    setAyahLoading(true);
    setAyahText(null);
    fetch(`/api/quran-ayah/${quran.surahNumber}/${quran.ayahNumber}`)
      .then((r) => r.json())
      .then((data) => {
        if (!cancelled) setAyahText(data.text ?? null);
      })
      .catch(() => {
        if (!cancelled) setAyahText(null);
      })
      .finally(() => {
        if (!cancelled) setAyahLoading(false);
      });
    return () => {
      cancelled = true;
    };
  }, [quran]);

  return (
    <div className="flex flex-col gap-3">
      {/* Header — name(s) analyzed */}
      <div className="flex flex-col items-center gap-1 rounded-2xl border border-indigo-200 dark:border-indigo-800 bg-white dark:bg-slate-800 px-4 py-5 text-center">
        <p dir="rtl" lang="ar" className="text-3xl font-medium text-indigo-600 dark:text-indigo-400 font-arabic">
          {personName}
        </p>
        {motherName && (
          <p dir="rtl" lang="ar" className="text-base text-slate-500 dark:text-slate-400 font-arabic">
            {motherName}
          </p>
        )}
      </div>

      {calcType === 'divineResonance' &&
        (divine ? (
          <>
            <Card className="flex flex-col items-center gap-2 text-center">
              <SectionTitle>{t('divineResonanceTitle')}</SectionTitle>
              <p className="text-xs text-slate-500">{t('divineResonanceSubtitle')}</p>
              <p dir="rtl" className="mt-2 text-4xl text-indigo-600 dark:text-indigo-400 font-arabic">
                {divine.entry.nameTashkeel}
              </p>
              <p className="text-lg font-semibold text-slate-900 dark:text-slate-100">{divine.entry.transliteration}</p>
              <p className="text-sm text-slate-500 dark:text-slate-400">{pick(uiLocale, divine.entry.translation)}</p>
              <span dir="rtl" className="mt-1 flex h-9 w-9 items-center justify-center rounded-full bg-indigo-100 dark:bg-indigo-900/40 text-lg text-indigo-600 dark:text-indigo-400 font-arabic">
                {divine.entry.letter}
              </span>
              <p className="mt-1 text-xs italic text-slate-500">{t('divineResonanceAbjadNote')}</p>

              <div className="mt-2 w-full border-t border-slate-100 dark:border-white/5 pt-2">
                <InfoDisclosure label={t('howItWasDerived')} icon="chevron">
                  <div className="flex flex-col gap-1.5">
                    <div className="flex justify-between">
                      <span>{t('abjadTotalLabel')}</span>
                      <span className="text-slate-700 dark:text-slate-200">{divine.total}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>{t('resonanceIndexLabel')}</span>
                      <span className="text-slate-700 dark:text-slate-200">{divine.index}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>{t('resonantLetterLabel')}</span>
                      <span dir="rtl" className="text-indigo-600 dark:text-indigo-400 font-arabic">
                        {divine.entry.letter}
                      </span>
                    </div>
                    <div className="mt-1 flex flex-wrap justify-center gap-1.5">
                      {divine.breakdown.map((lv, i) => (
                        <span key={i} className="flex flex-col items-center rounded-lg bg-indigo-50 dark:bg-indigo-900/30 px-2 py-1">
                          <span dir="rtl" className="text-sm text-indigo-600 dark:text-indigo-400 font-arabic">
                            {lv.char}
                          </span>
                          <span className="text-[10px] text-slate-500 dark:text-slate-400">{lv.value}</span>
                        </span>
                      ))}
                    </div>
                  </div>
                </InfoDisclosure>
              </div>
            </Card>

            <Card className="flex flex-col gap-2">
              <SectionTitle>{t('dhikrOptionalLabel')}</SectionTitle>
              <div className="flex items-center gap-2">
                <span className="text-xs text-slate-500 dark:text-slate-400">{t('dhikrSuggestedCountLabel')}:</span>
                <span className="text-2xl font-bold text-indigo-600 dark:text-indigo-400">{divine.dhikrCount}</span>
                <span dir="rtl" className="text-lg text-slate-600 dark:text-slate-300 font-arabic">
                  يا {divine.entry.name}
                </span>
              </div>
              <p className="text-xs leading-relaxed text-slate-500 dark:text-slate-400">{t('divineResonanceDhikrDescription')}</p>
              <p className="text-xs leading-relaxed text-slate-500">{t('divineNameEsotericNote')}</p>
            </Card>
          </>
        ) : (
          <p className="text-sm text-slate-500">{t('noLetters')}</p>
        ))}

      {calcType === 'quranicResonance' &&
        (quran ? (
          <Card className="flex flex-col items-center gap-2 text-center">
            <SectionTitle>{t('quranicResonanceTitle')}</SectionTitle>
            <p className="text-xs text-slate-500">{t('quranicResonanceSubtitle')}</p>
            <p dir="rtl" className="mt-2 text-3xl text-indigo-600 dark:text-indigo-400 font-arabic">
              {quran.surahNameArabic}
            </p>
            <p className="text-lg font-semibold text-slate-900 dark:text-slate-100">{quran.surahName}</p>
            <span className="rounded-full border border-indigo-200 dark:border-indigo-800 px-3 py-1 text-xs text-indigo-600 dark:text-indigo-400">
              {t('ayahOfLabel', { ayah: quran.ayahNumber, total: quran.totalAyahsInSurah })}
            </span>

            <div className="mt-3 w-full rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 px-3 py-3 text-left">
              <div className="mb-2 flex items-center justify-between">
                <span className="text-[10px] font-semibold uppercase tracking-wide text-slate-500">{t('arabicTextLabel')}</span>
                {ayahText && (
                  <button
                    type="button"
                    onClick={() => navigator.clipboard?.writeText(ayahText)}
                    aria-label={t('arabicTextLabel')}
                    className="text-slate-500"
                  >
                    <Copy size={14} aria-hidden />
                  </button>
                )}
              </div>
              {ayahLoading && <p className="text-xs text-slate-500">{t('loadingVerse')}</p>}
              {!ayahLoading && ayahText && (
                <p dir="rtl" className="text-right text-xl leading-relaxed text-slate-900 dark:text-slate-100 font-arabic">
                  {ayahText}
                </p>
              )}
              {!ayahLoading && !ayahText && <p className="text-xs text-slate-500">{t('quranTextLoadError')}</p>}
            </div>

            <a
              href={quran.quranLink}
              target="_blank"
              rel="noreferrer"
              className="mt-2 flex items-center gap-1.5 rounded-xl border border-indigo-200 dark:border-indigo-800 px-3 py-2 text-sm text-indigo-600 dark:text-indigo-400"
            >
              <ExternalLink size={14} aria-hidden />
              {t('readFullVerseLabel')}
            </a>

            <p className="mt-2 text-xs italic leading-relaxed text-slate-500">{t('quranResonanceReflectionNote')}</p>
          </Card>
        ) : (
          <p className="text-sm text-slate-500">{t('noLetters')}</p>
        ))}
    </div>
  );
}
