'use client';

import { useState } from 'react';
import { evaluateDateRange } from '@/src/lib/ikhtiyarat/engine';
import { marriageElectionConfig } from '@/src/lib/ikhtiyarat/elections/marriage';
import { travelElectionConfig } from '@/src/lib/ikhtiyarat/elections/travel';
import { businessElectionConfig } from '@/src/lib/ikhtiyarat/elections/business';
import { medicalElectionConfig } from '@/src/lib/ikhtiyarat/elections/medical';
import { ElectionResult, ElectionType, ElectionRulesConfig } from '@/src/lib/ikhtiyarat/types';
import { UserLocation } from '@/src/types/planetary';
import { toLocalDateString } from '@/src/lib/localDate';
import { CalendarHeatmap } from './CalendarHeatmap';
import { DetailSheet } from './DetailSheet';
import { TierBadge } from './TierBadge';
import { ikhtiyaratCopy, UiLang } from '../copy';

function addMonths(d: Date, months: number): Date {
  const copy = new Date(d);
  copy.setMonth(copy.getMonth() + months);
  return copy;
}

const MAX_SCAN_MONTHS = 12;

const CONFIG_BY_ELECTION_TYPE: Record<ElectionType, ElectionRulesConfig> = {
  marriage: marriageElectionConfig,
  travel: travelElectionConfig,
  business: businessElectionConfig,
  medical: medicalElectionConfig,
};

export function ScanDatesView({
  language,
  location,
  electionType = 'marriage',
}: {
  language: UiLang;
  location: UserLocation;
  electionType?: ElectionType;
}) {
  const c = ikhtiyaratCopy[language];
  const config = CONFIG_BY_ELECTION_TYPE[electionType];
  const today = new Date();
  const [startStr, setStartStr] = useState(toLocalDateString(today));
  const [endStr, setEndStr] = useState(toLocalDateString(addMonths(today, 3)));
  const [results, setResults] = useState<ElectionResult[]>([]);
  const [selectedDay, setSelectedDay] = useState<ElectionResult | null>(null);
  const [loading, setLoading] = useState(false);
  const [rangeError, setRangeError] = useState<string | null>(null);

  const tz = Intl.DateTimeFormat().resolvedOptions().timeZone;

  function handleScan() {
    const start = new Date(`${startStr}T00:00:00`);
    const end = new Date(`${endStr}T00:00:00`);

    if (end < start) {
      setRangeError(language === 'fr' ? 'La date de fin doit suivre la date de début.' : 'End date must be after start date.');
      return;
    }
    if (end > addMonths(start, MAX_SCAN_MONTHS)) {
      setRangeError(language === 'fr' ? 'La période maximale est de 12 mois.' : 'Maximum range is 12 months.');
      return;
    }
    setRangeError(null);
    setLoading(true);

    setTimeout(() => {
      const scanResults = evaluateDateRange(start, end, location.latitude, location.longitude, tz, electionType, config);
      setResults(scanResults);
      setLoading(false);
    }, 0);
  }

  const topFive = [...results]
    .filter(r => !r.hasHardFail)
    .sort((a, b) => b.score - a.score)
    .slice(0, 5);

  return (
    <div className="space-y-4">
      <div className="rounded-2xl border border-slate-200 dark:border-slate-700 bg-white/60 dark:bg-slate-800/40 p-4 space-y-3">
        <div className="grid grid-cols-2 gap-3">
          <label className="block">
            <span className="text-xs font-medium text-slate-500 dark:text-slate-400">{c.scanRangeStart}</span>
            <input
              type="date"
              value={startStr}
              onChange={e => setStartStr(e.target.value)}
              className="mt-1 w-full rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 px-3 py-2 text-sm text-slate-900 dark:text-slate-100"
            />
          </label>
          <label className="block">
            <span className="text-xs font-medium text-slate-500 dark:text-slate-400">{c.scanRangeEnd}</span>
            <input
              type="date"
              value={endStr}
              onChange={e => setEndStr(e.target.value)}
              className="mt-1 w-full rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 px-3 py-2 text-sm text-slate-900 dark:text-slate-100"
            />
          </label>
        </div>
        {rangeError && <p className="text-xs text-red-500">{rangeError}</p>}
        <button
          onClick={handleScan}
          disabled={loading}
          className="w-full py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 disabled:opacity-60 text-white text-sm font-semibold transition-colors active:scale-[0.98]"
        >
          {loading ? c.loading : c.scanButton}
        </button>
      </div>

      {topFive.length > 0 && (
        <div className="rounded-2xl border border-slate-200 dark:border-slate-700 bg-white/60 dark:bg-slate-800/40 p-4 space-y-2">
          <div className="text-xs uppercase tracking-wide text-slate-400 mb-1">{c.topFive}</div>
          {topFive.map(r => (
            <button
              key={r.date.toISOString()}
              onClick={() => setSelectedDay(r)}
              className="w-full flex items-center justify-between rounded-xl border border-slate-200 dark:border-slate-700 px-3 py-2 hover:bg-slate-50 dark:hover:bg-slate-800/60 transition-colors"
            >
              <span className="text-sm text-slate-900 dark:text-slate-100">
                {r.date.toLocaleDateString(language === 'fr' ? 'fr-FR' : 'en-US', { weekday: 'short', month: 'short', day: 'numeric' })}
              </span>
              <TierBadge tierInfo={r.tierInfo} language={language} score={r.score} />
            </button>
          ))}
        </div>
      )}

      {results.length > 0 && (
        <div className="rounded-2xl border border-slate-200 dark:border-slate-700 bg-white/60 dark:bg-slate-800/40 p-4">
          <CalendarHeatmap results={results} language={language} onSelectDay={setSelectedDay} />
        </div>
      )}

      {selectedDay && <DetailSheet result={selectedDay} language={language} onClose={() => setSelectedDay(null)} />}
    </div>
  );
}
