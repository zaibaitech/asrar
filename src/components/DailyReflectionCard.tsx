'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { useRamadanChallenges } from '../features/ramadanChallenges';
import { useCommunityDhikr } from '../features/ramadanChallenges/communityDhikrService';

export function DailyReflectionCard({ isCollapsed, onToggleCollapse }: { isCollapsed: boolean; onToggleCollapse: () => void }) {
  const { language } = useLanguage();

  // Get Zikr challenge stats
  const { getTotalTodayProgress, state } = useRamadanChallenges();
  const communityStats = useCommunityDhikr();

  // Challenges-only totals — consistent with what challenge cards display
  const challengesTotal = state.challenges.reduce((sum, c) => sum + (c.totalProgress || 0), 0);
  const totalTarget = state.challenges.reduce((sum, c) => sum + (c.totalTarget || 0), 0);
  const progressPercent = totalTarget > 0 ? Math.round((challengesTotal / totalTarget) * 100) : 0;

  // Today = challenges today + planetary zikr tasbih done today
  const [todayDhikr, setTodayDhikr] = useState(0);
  useEffect(() => {
    const refresh = () => {
      const challengesToday = getTotalTodayProgress();
      let planetaryToday = 0;
      try {
        const stored = JSON.parse(localStorage.getItem('planetary_zikr_today') || '{}');
        const today = new Date().toISOString().slice(0, 10);
        if (stored.date === today) planetaryToday = stored.count || 0;
      } catch { /* ignore */ }
      setTodayDhikr(challengesToday + planetaryToday);
    };
    refresh();
    window.addEventListener('planetaryZikrUpdate', refresh);
    return () => window.removeEventListener('planetaryZikrUpdate', refresh);
  }, [state.challenges, getTotalTodayProgress]);


  const hasTotal = challengesTotal > 0;
  const hasToday = todayDhikr > 0;

  return (
    <Link
      href="/ramadan"
      prefetch
      className="block bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-emerald-950/40 dark:to-teal-950/30 rounded-xl border border-emerald-200 dark:border-emerald-700/50 overflow-hidden transition-all duration-300 hover:bg-emerald-100/40 dark:hover:bg-emerald-900/20 shadow-sm"
    >
      <div className="px-4 py-3.5 sm:px-5 sm:py-4">
        <div className="flex items-center justify-between gap-3">
          <div className="flex items-center gap-2.5 sm:gap-3 flex-1 min-w-0">
            <div className="relative flex-shrink-0">
              <div className="absolute inset-0 bg-emerald-400 rounded-full opacity-60 animate-pulse" style={{ width: '28px', height: '28px' }}></div>
              <span className="relative z-10 text-xl sm:text-2xl">📿</span>
            </div>

            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2 flex-wrap">
                <h3 className="text-sm sm:text-base font-bold text-emerald-900 dark:text-emerald-100 leading-tight">
                  {language === 'fr' ? 'Défi de Zikr' : 'Zikr Challenge'}
                </h3>
                <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[10px] sm:text-xs font-medium bg-emerald-600 text-white font-arabic">
                  ذِكْر
                </span>
              </div>

              {hasTotal || hasToday ? (
                <p className="text-xs sm:text-sm text-emerald-600 dark:text-emerald-400 mt-1 font-medium">
                  {hasToday && (
                    <>
                      📿 {todayDhikr.toLocaleString()} {language === 'fr' ? "aujourd'hui" : 'today'}
                      {hasTotal && <span className="mx-1.5 opacity-40">·</span>}
                    </>
                  )}
                  {hasTotal && (
                    <>
                      {challengesTotal.toLocaleString()} {language === 'fr' ? 'total' : 'total'}
                      {totalTarget > 0 && progressPercent > 0 && (
                        <span className="text-emerald-500 dark:text-emerald-300 ml-1.5">({progressPercent}%)</span>
                      )}
                    </>
                  )}
                </p>
              ) : (
                <p className="text-xs sm:text-sm mt-1 font-medium text-emerald-600 dark:text-emerald-300">
                  ✨ {language === 'fr' ? 'Commence ton zikr quotidien !' : 'Start your daily zikr!'}
                </p>
              )}
            </div>
          </div>

          <div className="flex items-center gap-2 sm:gap-3 flex-shrink-0">
            {communityStats.allTimeTotal > 0 && (
              <div className="flex flex-col items-end leading-tight">
                <span className="text-[10px] sm:text-xs text-teal-600 dark:text-teal-400 font-medium">
                  🌍 {language === 'fr' ? 'Communauté' : 'Community'}
                </span>
                <span className="text-lg sm:text-xl font-bold text-teal-700 dark:text-teal-300 tabular-nums">
                  {communityStats.allTimeTotal >= 1_000_000
                    ? `${(communityStats.allTimeTotal / 1_000_000).toFixed(1).replace(/\.0$/, '')}M`
                    : communityStats.allTimeTotal >= 1_000
                    ? `${(communityStats.allTimeTotal / 1_000).toFixed(1).replace(/\.0$/, '')}K`
                    : communityStats.allTimeTotal.toLocaleString()}
                </span>
              </div>
            )}
            <div className="p-1.5 sm:p-2 hover:bg-emerald-200/50 dark:hover:bg-emerald-800/50 rounded-lg transition-colors">
              <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 text-emerald-600 dark:text-emerald-400" />
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}
