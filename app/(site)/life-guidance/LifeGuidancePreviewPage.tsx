'use client';

import Link from 'next/link';
import { IlmHurufPanel } from '@/src/features/ilm-huruf';
import { useLanguage } from '@/src/contexts/LanguageContext';
import { lifeGuidanceStrings } from '@/src/lib/i18n/lifeGuidance';

/** Preview shell for the Life Guidance panel (flagged, noindex). */
export function LifeGuidancePreviewPage() {
  const { t, uiLanguage, dir } = useLanguage();
  const s = lifeGuidanceStrings(uiLanguage);
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900">
      <div className="sticky top-0 z-10 bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm border-b border-slate-200 dark:border-slate-700 px-4 py-3">
        <div className="max-w-2xl mx-auto flex items-center justify-between">
          <Link href="/" aria-label={s.preview.back} className="min-h-[44px] min-w-[44px] flex items-center text-sm text-indigo-700 dark:text-indigo-400 hover:underline">
            {dir === 'rtl' ? '→' : '←'}
          </Link>
          <div className="min-w-0 flex-1 text-center">
            <div className="break-words text-sm font-semibold text-slate-900 dark:text-slate-100">{t.nav.guidance}</div>
          </div>
          <div className="w-11" aria-hidden="true" />
        </div>
      </div>
      <div className="max-w-2xl mx-auto px-4 py-6">
        <IlmHurufPanel />
      </div>
    </div>
  );
}
