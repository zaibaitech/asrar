/**
 * Community Banner Component
 * ===========================
 * Displays community-wide dhikr statistics.
 * Currently using mock data; designed to be pluggable for real backend.
 */

'use client';

import React, { useMemo } from 'react';
import type { CommunityStats } from '../types';
import { formatNumber } from '../utils';

interface CommunityBannerProps {
  stats: CommunityStats;
  language?: 'en' | 'fr';
  compact?: boolean;
}

export function CommunityBanner({ stats, language = 'en', compact = false }: CommunityBannerProps) {
  const formattedToday = useMemo(() => formatNumber(stats.todayTotal), [stats.todayTotal]);
  const formattedUsers = useMemo(() => formatNumber(stats.activeUsers), [stats.activeUsers]);

  if (compact) {
    return (
      <div className="flex items-center gap-2 text-xs">
        <span className="text-teal-600 dark:text-teal-400">🌍</span>
        <span className="text-slate-600 dark:text-slate-300">
          <span className="font-semibold text-teal-600 dark:text-teal-400">{formattedToday}</span>
          {' '}
          {language === 'fr' ? "dhikr aujourd'hui" : 'dhikr today'}
        </span>
      </div>
    );
  }

  return (
    <div className="flex items-start gap-3 p-3 rounded-lg bg-gradient-to-r from-teal-50 to-cyan-50 dark:from-teal-900/20 dark:to-cyan-900/20 border border-teal-200/70 dark:border-teal-700/40">
      <span className="text-xl mt-0.5">🌍</span>
      <div className="flex-1">
        <div className="flex items-baseline gap-1.5 flex-wrap">
          <span className="text-2xl font-bold text-teal-600 dark:text-teal-400 tabular-nums">
            {formattedToday}
          </span>
          <span className="text-sm text-slate-600 dark:text-slate-300">
            {language === 'fr' ? "dhikr complétés par la communauté aujourd'hui" : 'dhikr completed by the community today'}
          </span>
        </div>
        <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
          {language === 'fr' 
            ? `Rejoignez ${formattedUsers} adorateurs ce Ramadan`
            : `Join ${formattedUsers} worshippers this Ramadan`
          }
        </p>
      </div>
    </div>
  );
}

export default CommunityBanner;
