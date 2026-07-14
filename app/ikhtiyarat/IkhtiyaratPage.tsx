'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { Info, ChevronDown } from 'lucide-react';
import { useLanguage } from '@/src/contexts/LanguageContext';
import { getUserLocation, loadLocation } from '@/src/utils/location';
import { UserLocation } from '@/src/types/planetary';
import { AdabDisclaimer } from '@/src/features/ikhtiyarat/components/AdabDisclaimer';
import { CheckDateView } from '@/src/features/ikhtiyarat/components/CheckDateView';
import { ScanDatesView } from '@/src/features/ikhtiyarat/components/ScanDatesView';
import { ikhtiyaratCopy, subtitleArabic, UiLang } from '@/src/features/ikhtiyarat/copy';
import { ElectionType } from '@/src/lib/ikhtiyarat/types';

type Mode = 'check' | 'scan';

/**
 * Every election type the dropdown offers, in display order. Adding a new
 * election type (business, moving house, ...) means adding its id here
 * plus an electionType<Id> copy key — no other change to this component.
 */
const ELECTION_TYPE_OPTIONS: ElectionType[] = ['marriage', 'travel', 'business'];

function isElectionType(value: string | null): value is ElectionType {
  return value !== null && (ELECTION_TYPE_OPTIONS as string[]).includes(value);
}

export function IkhtiyaratPage() {
  const { language } = useLanguage();
  const uiLang: UiLang = language === 'fr' ? 'fr' : 'en';
  const c = ikhtiyaratCopy[uiLang];
  const searchParams = useSearchParams();
  const electionFromUrl = searchParams.get('election');

  const [mode, setMode] = useState<Mode>('check');
  const [electionType, setElectionType] = useState<ElectionType>(
    isElectionType(electionFromUrl) ? electionFromUrl : 'marriage',
  );
  const [location, setLocation] = useState<UserLocation | null>(null);
  const [showAbout, setShowAbout] = useState(false);

  useEffect(() => {
    const cached = loadLocation();
    if (cached) setLocation(cached);
    getUserLocation().then(setLocation);
  }, []);

  const electionTypeLabel: Record<ElectionType, string> = {
    marriage: c.electionTypeMarriage,
    travel: c.electionTypeTravel,
    business: c.electionTypeBusiness,
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-teal-50 to-slate-50 dark:from-slate-900 dark:via-slate-900 dark:to-slate-900">
      <div className="sticky top-0 z-10 bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm border-b border-emerald-200 dark:border-emerald-800/50 px-4 py-3">
        <div className="max-w-2xl mx-auto flex items-center justify-between">
          <Link href="/" className="text-sm text-emerald-700 dark:text-emerald-400 hover:underline">
            ←
          </Link>
          <div className="text-center">
            <div className="text-sm font-semibold text-slate-900 dark:text-slate-100">{c.title}</div>
            <div className="text-xs text-slate-500 dark:text-slate-400">
              {c.subtitle} · <span dir="rtl" lang="ar" className="font-arabic">{subtitleArabic}</span>
            </div>
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

        <label className="block">
          <span className="text-xs font-medium text-slate-500 dark:text-slate-400">{c.electionTypeLabel}</span>
          <div className="relative mt-1">
            <select
              value={electionType}
              onChange={e => setElectionType(e.target.value as ElectionType)}
              className="w-full appearance-none rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 px-3 py-2.5 pr-9 text-sm font-medium text-slate-900 dark:text-slate-100"
            >
              {ELECTION_TYPE_OPTIONS.map(type => (
                <option key={type} value={type}>
                  {electionTypeLabel[type]}
                </option>
              ))}
            </select>
            <ChevronDown className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
          </div>
        </label>

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
            <CheckDateView language={uiLang} location={location} electionType={electionType} />
          ) : (
            <ScanDatesView language={uiLang} location={location} electionType={electionType} />
          )
        ) : (
          <div className="h-40 rounded-2xl bg-white/60 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-700 animate-pulse" />
        )}
      </div>
    </div>
  );
}
