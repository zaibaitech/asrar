'use client';

import Link from 'next/link';
import { IlmHurufPanel } from '@/src/features/ilm-huruf';
import { useLanguage } from '@/src/contexts/LanguageContext';

/** Preview shell for the Life Guidance panel (flagged, noindex). */
export function LifeGuidancePreviewPage() {
  const { t } = useLanguage();
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900">
      <div className="sticky top-0 z-10 bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm border-b border-slate-200 dark:border-slate-700 px-4 py-3">
        <div className="max-w-2xl mx-auto flex items-center justify-between">
          <Link href="/" className="min-h-[44px] min-w-[44px] flex items-center text-sm text-indigo-700 dark:text-indigo-400 hover:underline">
            ←
          </Link>
          <div className="text-center">
            <div className="text-sm font-semibold text-slate-900 dark:text-slate-100">{t.nav.guidance}</div>
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
