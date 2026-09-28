/**
 * Compact Incense Hint Component
 * ===============================
 * Shows the traditional recommended bakhūr (incense) blend for a
 * planet, right alongside its recommended dhikr. Static per planet —
 * unlike dhikr, incense correspondence doesn't depend on the current
 * dignity tier, only on which planet is being shown.
 */

'use client';

import React from 'react';
import type { Planet } from '@/src/lib/planetary';
import { getPlanetIncense } from '@/src/lib/planetary/incense';
import { translations } from '@/src/lib/translations';

interface CompactIncenseHintProps {
  planet: Planet;
  language?: 'en' | 'fr';
  className?: string;
}

export function CompactIncenseHint({
  planet,
  language = 'en',
  className = '',
}: CompactIncenseHintProps) {
  const blend = getPlanetIncense(planet);
  const t = translations[language].planetary.incense;

  return (
    <div className={`bg-orange-50/60 dark:bg-orange-900/20 border border-orange-200/70 dark:border-orange-500/30 rounded-xl px-3.5 py-3 ${className}`}>
      <div className="text-[11px] font-semibold uppercase tracking-wide text-orange-600 dark:text-orange-400">
        🪔 {t.recommendedBakhoor}
      </div>

      <div className="mt-1.5" dir="rtl" lang="ar">
        <span className="font-arabic text-xl leading-relaxed text-orange-800 dark:text-orange-200">
          {blend.arabicName}
        </span>
      </div>
      <div className="text-sm text-slate-600 dark:text-slate-400">
        {blend.transliteration} <span className="text-slate-400 dark:text-slate-500">— {blend.ingredients}</span>
      </div>

      <p className="text-xs text-slate-500 dark:text-slate-400 mt-1.5 leading-relaxed">
        {blend.purpose}
      </p>
    </div>
  );
}

export default CompactIncenseHint;
