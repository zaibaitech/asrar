'use client';

import { useEffect } from 'react';
import { ElectionResult } from '@/src/lib/ikhtiyarat/types';
import { gregorianToHijri, getSunnahBadges } from '@/src/lib/ikhtiyarat/hijri';
import { TierBadge } from './TierBadge';
import { RuleRow } from './RuleRow';
import { SunnahBadges } from './SunnahBadges';
import { ikhtiyaratCopy, UiLang } from '../copy';

interface DetailSheetProps {
  result: ElectionResult;
  language: UiLang;
  onClose: () => void;
}

export function DetailSheet({ result, language, onClose }: DetailSheetProps) {
  const c = ikhtiyaratCopy[language];
  const hijri = gregorianToHijri(result.date);
  const sunnahBadges = getSunnahBadges(result.date);

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = '';
    };
  }, []);

  return (
    <div className="fixed inset-0 z-50 flex items-end sm:items-center sm:justify-center">
      <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" onClick={onClose} />
      <div className="relative w-full sm:max-w-lg max-h-[85vh] overflow-y-auto rounded-t-3xl sm:rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 shadow-2xl animate-slide-up">
        <div className="sticky top-0 bg-white dark:bg-slate-900 border-b border-slate-100 dark:border-slate-800 px-5 py-4 flex items-center justify-between">
          <div>
            <div className="text-sm font-semibold text-slate-900 dark:text-slate-100">
              {result.date.toLocaleDateString(language === 'fr' ? 'fr-FR' : 'en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}
            </div>
            <div className="text-xs text-slate-500 dark:text-slate-400">
              {c.hijriDate}: {hijri.day} {hijri.monthName[language]} ({hijri.monthName.wolof}) {hijri.year} {c.hijriEra}
            </div>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full flex items-center justify-center text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
            aria-label={c.close}
          >
            ✕
          </button>
        </div>

        <div className="p-5 space-y-4">
          <TierBadge tierInfo={result.tierInfo} language={language} score={result.score} />

          {sunnahBadges.length > 0 && (
            <div>
              <div className="text-xs uppercase tracking-wide text-slate-400 mb-2">{c.sunnahBadge}</div>
              <SunnahBadges badges={sunnahBadges} language={language} />
            </div>
          )}

          <div className="rounded-xl border border-slate-200 dark:border-slate-700 p-3">
            <div className="text-xs uppercase tracking-wide text-slate-400 mb-1">{c.bestWindow}</div>
            <div className="text-sm font-medium text-slate-900 dark:text-slate-100">
              {result.bestWindow.time.toLocaleTimeString(language === 'fr' ? 'fr-FR' : 'en-US', { hour: '2-digit', minute: '2-digit' })}
            </div>
          </div>

          <div>
            <div className="text-xs uppercase tracking-wide text-slate-400 mb-2">{c.ruleBreakdown}</div>
            <div className="rounded-xl border border-slate-200 dark:border-slate-700 px-3">
              {result.rules.map(rule => (
                <RuleRow key={rule.id} rule={rule} language={language} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
