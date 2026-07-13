'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { Info } from 'lucide-react';
import { useLanguage } from '@/src/contexts/LanguageContext';
import { getUserLocation, loadLocation } from '@/src/utils/location';
import { UserLocation } from '@/src/types/planetary';
import { AdabDisclaimer } from '@/src/features/ikhtiyarat/components/AdabDisclaimer';
import { CheckDateView } from '@/src/features/ikhtiyarat/components/CheckDateView';
import { ScanDatesView } from '@/src/features/ikhtiyarat/components/ScanDatesView';
import { ikhtiyaratCopy, UiLang } from '@/src/features/ikhtiyarat/copy';

type Mode = 'check' | 'scan';

export function IkhtiyaratPage() {
  const { language } = useLanguage();
  const uiLang: UiLang = language === 'fr' ? 'fr' : 'en';
  const c = ikhtiyaratCopy[uiLang];

  const [mode, setMode] = useState<Mode>('check');
  const [location, setLocation] = useState<UserLocation | null>(null);
  const [showAbout, setShowAbout] = useState(false);

  useEffect(() => {
    const cached = loadLocation();
    if (cached) setLocation(cached);
    getUserLocation().then(setLocation);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-teal-50 to-slate-50 dark:from-slate-900 dark:via-slate-900 dark:to-slate-900">
      <div className="sticky top-0 z-10 bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm border-b border-emerald-200 dark:border-emerald-800/50 px-4 py-3">
        <div className="max-w-2xl mx-auto flex items-center justify-between">
          <Link href="/" className="text-sm text-emerald-700 dark:text-emerald-400 hover:underline">
            ←
          </Link>
          <div className="text-center">
            <div className="text-sm font-semibold text-slate-900 dark:text-slate-100">{c.title}</div>
            <div className="text-xs text-slate-500 dark:text-slate-400">{c.subtitle}</div>
          </div>
          <button
            onClick={() => setShowAbout(true)}
            aria-label={c.aboutLink}
            title={c.aboutLink}
            className="w-6 h-6 flex items-center justify-center text-emerald-700 dark:text-emerald-400 hover:text-emerald-900 dark:hover:text-emerald-200 transition-colors"
          >
            <Info className="w-4 h-4" />
          </button>
        </div>
      </div>

      <div className="max-w-2xl mx-auto px-4 py-6 space-y-4">
        <AdabDisclaimer language={uiLang} forceOpen={showAbout} onRequestClose={() => setShowAbout(false)} />

        <div className="flex rounded-xl border border-slate-200 dark:border-slate-700 p-1 bg-white/60 dark:bg-slate-800/40">
          <button
            onClick={() => setMode('check')}
            className={`flex-1 py-2 rounded-lg text-sm font-medium transition-colors ${
              mode === 'check' ? 'bg-emerald-600 text-white' : 'text-slate-600 dark:text-slate-300'
            }`}
          >
            {c.tabCheck}
          </button>
          <button
            onClick={() => setMode('scan')}
            className={`flex-1 py-2 rounded-lg text-sm font-medium transition-colors ${
              mode === 'scan' ? 'bg-emerald-600 text-white' : 'text-slate-600 dark:text-slate-300'
            }`}
          >
            {c.tabScan}
          </button>
        </div>

        {location ? (
          mode === 'check' ? (
            <CheckDateView language={uiLang} location={location} />
          ) : (
            <ScanDatesView language={uiLang} location={location} />
          )
        ) : (
          <div className="h-40 rounded-2xl bg-white/60 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-700 animate-pulse" />
        )}
      </div>
    </div>
  );
}
