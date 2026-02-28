/**
 * Community Banner Component
 * ===========================
 * Displays real-time community-wide dhikr statistics from Supabase.
 * Falls back to prop-based stats if the API is unavailable.
 */

'use client';

import React, { useMemo } from 'react';
import type { CommunityStats } from '../types';
import { formatNumber } from '../utils';
import { useCommunityDhikr } from '../communityDhikrService';

interface CommunityBannerProps {
  stats?: CommunityStats;
  language?: 'en' | 'fr';
  compact?: boolean;
}

export function CommunityBanner({ stats, language = 'en', compact = false }: CommunityBannerProps) {
  // Use live community stats from Supabase
  const liveStats = useCommunityDhikr();

  // Prefer live data; fall back to prop (mock) only if live is empty
  const todayTotal = liveStats.todayTotal > 0 ? liveStats.todayTotal : (stats?.todayTotal ?? 0);
  const activeUsers = liveStats.todayUsers > 0 ? liveStats.todayUsers : (stats?.activeUsers ?? 0);
  const allTimeTotal = liveStats.allTimeTotal;

  const formattedToday = useMemo(() => formatNumber(todayTotal), [todayTotal]);
  const formattedAllTime = useMemo(() => formatNumber(allTimeTotal), [allTimeTotal]);
  const formattedUsers = useMemo(() => formatNumber(activeUsers), [activeUsers]);

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
        {allTimeTotal > 0 && (
          <p className="text-xs text-teal-500 dark:text-teal-400 mt-0.5 font-medium">
            {language === 'fr' 
              ? `Total cumulé : ${formattedAllTime} dhikr`
              : `All-time total: ${formattedAllTime} dhikr`
            }
          </p>
        )}
        {/* Active users hidden as requested */}
      </div>
    </div>
  );
}

export default CommunityBanner;
