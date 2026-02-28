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
    spiritualChallenge: 'Spiritual Challenge',
  },
  fr: {
    day: 'Jour',
    today: "Aujourd'hui",
    total: 'Total',
    viewChallenges: 'Voir les défis',
    spiritualChallenge: 'Défi Spirituel',
  },
};

// ─── Component ───────────────────────────────────────────────────────────────────

export function RamadanBannerMini({ language = 'en' }: RamadanBannerMiniProps) {
  const t = translations[language];
  const { state, addChallenge, getTotalTodayProgress, getTotalProgress } = useRamadanChallenges();
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

  // Don't render if not mounted
  if (!mounted) return null;

  // ─── Computed values ───
  const totalTodayProgress = getTotalTodayProgress();
  const totalProgress = getTotalProgress();
  const totalTarget = state.challenges.reduce((sum, c) => sum + (c.totalTarget || 0), 0);
  const progressPercent = totalTarget > 0 ? Math.round((totalProgress / totalTarget) * 100) : 0;
  const totalStreak = state.challenges.reduce((max, c) => Math.max(max, c.streakDays || 0), 0);

  return (
    <Link
      href="/ramadan"
      className="block bg-gradient-to-br from-amber-50 via-yellow-50 to-orange-50 dark:from-amber-950/40 dark:via-yellow-950/30 dark:to-orange-950/30 rounded-xl border border-amber-200 dark:border-amber-700/50 px-4 py-3 sm:px-6 sm:py-4 hover:bg-amber-100/40 dark:hover:bg-amber-900/20 transition-colors"
    >
      <div className="flex items-center justify-between">
        {/* Left: Icon/Day/Stats */}
        <div className="flex items-center gap-3 flex-1 min-w-0">
          {/* Show moon/day only if Ramadan, else show generic icon */}
          <div className="relative flex-shrink-0">
            {ramadanInfo?.isRamadan ? (
              <>
                <div className="absolute inset-0 bg-amber-400 rounded-full opacity-50 animate-pulse" style={{ width: 28, height: 28 }} />
                <span className="relative z-10 text-2xl">🌙</span>
              </>
            ) : (
                <span className="relative z-10 text-2xl">✨</span>
            )}
          </div>
          {/* Text content */}
          <div className="min-w-0 flex-1">
            <div className="flex items-center gap-2 flex-wrap">
              <h3 className="text-base sm:text-lg font-bold text-amber-900 dark:text-amber-100">
                {ramadanInfo?.isRamadan
                  ? `${t.day} ${ramadanInfo.dayOfRamadan}`
                  : t.spiritualChallenge}
              </h3>
              {totalStreak > 0 && (
                <span className="inline-flex items-center gap-1 px-1.5 py-0.5 bg-orange-100 dark:bg-orange-900/40 text-orange-600 dark:text-orange-400 text-xs font-bold rounded-full">
                  <Flame className="w-3 h-3" />
                  {totalStreak}
                </span>
              )}
            </div>
            <p className="text-xs sm:text-sm text-amber-700 dark:text-amber-300">
              {t.today}: <span className="font-semibold">{formatNumber(totalTodayProgress)}</span>
              {' · '}{t.total}: <span className="font-semibold">{formatNumber(totalProgress)}</span>
              {totalTarget > 0 && (
                <span className="text-amber-500"> · {progressPercent}%</span>
              )}
            </p>
          </div>
        </div>
        {/* Right: View link + Arrow */}
        <div className="flex items-center gap-2 flex-shrink-0">
          <span className="text-sm font-medium text-amber-700 dark:text-amber-300 hidden sm:inline">
            {t.viewChallenges}
          </span>
          <ChevronRight className="w-5 h-5 text-amber-500" />
        </div>
      </div>
    </Link>
  );
}

export default RamadanBannerMini;
