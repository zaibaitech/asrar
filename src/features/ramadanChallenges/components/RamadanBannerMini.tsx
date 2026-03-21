/**
 * Ramadan Banner Mini Component
 * ==============================
 * Single-line banner for Ramadan challenges - links to /ramadan page.
 */

'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { ChevronRight, Flame } from 'lucide-react';
import { getRamadanInfo, type RamadanInfo } from '@/src/lib/hijri';
import { useRamadanChallenges, createIstighfarChallenge } from '../store';
import { formatNumber } from '../utils';
import { useCommunityDhikr } from '../communityDhikrService';

// ─── Props ───────────────────────────────────────────────────────────────────────

interface RamadanBannerMiniProps {
  language?: 'en' | 'fr';
}

// ─── Translations ────────────────────────────────────────────────────────────────

const translations = {
  en: {
    day: 'Day',
    today: 'Today',
    total: 'Total',
    viewChallenges: 'View Challenges',
    spiritualChallenge: 'Zikr Challenge',
  },
  fr: {
    day: 'Jour',
    today: "Aujourd'hui",
    total: 'Total',
    viewChallenges: 'Voir les défis',
    spiritualChallenge: 'Défi de Zikr',
  },
};

// ─── Component ───────────────────────────────────────────────────────────────────

export function RamadanBannerMini({ language = 'en' }: RamadanBannerMiniProps) {
  const t = translations[language];
  const { state, addChallenge, getTotalTodayProgress, getTotalProgress } = useRamadanChallenges();
  const communityStats = useCommunityDhikr();
  const [ramadanInfo, setRamadanInfo] = useState<RamadanInfo | null>(null);
  const [mounted, setMounted] = useState(false);

  // ─── Hydration safety ───
  useEffect(() => {
    setMounted(true);
    setRamadanInfo(getRamadanInfo());
  }, []);

  // ─── Auto-create Istighfār challenge if no challenges exist ───
  useEffect(() => {
    if (!state.isHydrated || state.challenges.length > 0) return;
    
    const config = createIstighfarChallenge();
    addChallenge('ISTIGHFAR', config);
  }, [state.isHydrated, state.challenges.length, addChallenge]);

  // Don't render if not mounted or not hydrated
  if (!mounted || !state.isHydrated) return null;

  // ─── Computed values ───
  const totalTodayProgress = getTotalTodayProgress();
  const totalProgress = getTotalProgress();
  const totalTarget = state.challenges.reduce((sum, c) => sum + (c.totalTarget || 0), 0);
  const progressPercent = totalTarget > 0 ? Math.round(((totalProgress || 0) / totalTarget) * 100) : 0;
  const totalStreak = state.challenges.reduce((max, c) => Math.max(max, c.streakDays || 0), 0);

  return (
    <Link
      href="/ramadan"
      className="block bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-emerald-950/40 dark:to-teal-950/30 rounded-xl border border-emerald-200 dark:border-emerald-700/50 px-4 py-3 sm:px-6 sm:py-4 hover:bg-emerald-100/40 dark:hover:bg-emerald-900/20 transition-colors"
    >
      <div className="flex items-center justify-between">
        {/* Left: Icon/Day/Stats */}
        <div className="flex items-center gap-3 flex-1 min-w-0">
          {/* Zikr icon with pulse */}
          <div className="relative flex-shrink-0">
            <div className="absolute inset-0 bg-emerald-400 rounded-full opacity-50 animate-pulse" style={{ width: 28, height: 28 }} />
            <span className="relative z-10 text-2xl">📿</span>
          </div>
          {/* Text content */}
          <div className="min-w-0 flex-1">
            <div className="flex items-center gap-2 flex-wrap">
              <h3 className="text-base sm:text-lg font-bold text-emerald-900 dark:text-emerald-100">
                {t.spiritualChallenge}
              </h3>
              {totalStreak > 0 && (
                <span className="inline-flex items-center gap-1 px-1.5 py-0.5 bg-orange-100 dark:bg-orange-900/40 text-orange-600 dark:text-orange-400 text-xs font-bold rounded-full">
                  <Flame className="w-3 h-3" />
                  {totalStreak}
                </span>
              )}
            </div>
            <p className="text-xs sm:text-sm text-emerald-700 dark:text-emerald-300">
              {t.today}: <span className="font-semibold">{formatNumber(totalTodayProgress)}</span>
              {' · '}{t.total}: <span className="font-semibold">{formatNumber(totalProgress)}</span>
              {totalTarget > 0 && (
                <span className="text-emerald-500"> · {progressPercent}%</span>
              )}
            </p>
            {communityStats.allTimeTotal > 0 && (
              <p className="text-xs text-teal-600 dark:text-teal-400 font-medium">
                🌍 {formatNumber(communityStats.allTimeTotal)} {language === 'fr' ? 'dhikr communautaires' : 'community dhikr'}
              </p>
            )}
          </div>
        </div>
        {/* Right: View link + Arrow */}
        <div className="flex items-center gap-2 flex-shrink-0">
          <span className="text-sm font-medium text-emerald-700 dark:text-emerald-300 hidden sm:inline">
            {t.viewChallenges}
          </span>
          <ChevronRight className="w-5 h-5 text-emerald-500" />
        </div>
      </div>
    </Link>
  );
}

export default RamadanBannerMini;
