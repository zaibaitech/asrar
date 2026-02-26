/**
 * Ramadan Page Client Component
 * ==============================
 * Dedicated full-page experience for Ramadan spiritual challenges.
 * Always expanded, no dropdown - immersive dhikr tracking interface.
 */

'use client';

import React, { useState, useEffect, useMemo } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { ArrowLeft, Plus, Home, Share2, Copy, Check, Moon, Sun, Flame } from 'lucide-react';
import { useLanguage } from '@/src/contexts/LanguageContext';
import { getRamadanInfo, type RamadanInfo } from '@/src/lib/hijri';
import { useRamadanChallenges, createIstighfarChallenge } from '@/src/features/ramadanChallenges/store';
import type { ChallengeType, SessionTag } from '@/src/features/ramadanChallenges/types';
import { formatNumber } from '@/src/features/ramadanChallenges/utils';
import { ChallengeCard } from '@/src/features/ramadanChallenges/components/ChallengeCard';
import { PropheticNamesCard } from '@/src/features/ramadanChallenges/components/PropheticNamesCard';
import { CommunityBanner } from '@/src/features/ramadanChallenges/components/CommunityBanner';
import { RecommenderBanner } from '@/src/features/ramadanChallenges/components/RecommenderBanner';
import { AddChallengeModal, type AddChallengeModalStep } from '@/src/features/ramadanChallenges/components/AddChallengeModal';
import { ChallengeSettingsModal } from '@/src/features/ramadanChallenges/components/ChallengeSettingsModal';
import { useCommunityDhikr } from '@/src/features/ramadanChallenges/communityDhikrService';

// ─── Translations ────────────────────────────────────────────────────────────────

const translations = {
  en: {
    title: 'Ramadan Challenges',
    day: 'Day',
    challenges: 'challenges',
    challenge: 'challenge',
    todayTotal: 'Today',
    ramadanTotal: 'Ramadan Total',
    progress: 'Progress',
    addChallenge: 'Add Challenge',
    backHome: 'Back to Home',
    share: 'Share',
    linkCopied: 'Link copied!',
    notRamadan: 'Ramadan challenges are only available during Ramadan.',
    visitHome: 'Visit Home',
    comingSoon: 'Come back during the blessed month of Ramadan!',
    streak: 'day streak',
  },
  fr: {
    title: 'Défis du Ramadan',
    day: 'Jour',
    challenges: 'défis',
    challenge: 'défi',
    todayTotal: "Aujourd'hui",
    ramadanTotal: 'Total Ramadan',
    progress: 'Progrès',
    addChallenge: 'Ajouter un défi',
    backHome: "Retour à l'accueil",
    share: 'Partager',
    linkCopied: 'Lien copié!',
    notRamadan: 'Les défis du Ramadan ne sont disponibles que pendant le Ramadan.',
    visitHome: "Visiter l'accueil",
    comingSoon: 'Revenez pendant le mois béni du Ramadan!',
    streak: 'jours consécutifs',
  },
};

// ─── Component ───────────────────────────────────────────────────────────────────

export function RamadanPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const { language } = useLanguage();
  const t = translations[language];
  
  const { state, addChallenge, removeChallenge, logCount, setTargets, getTotalRamadanProgress, getTotalTodayProgress } = useRamadanChallenges();
  
  const [showAddModal, setShowAddModal] = useState(false);
  const [initialModalStep, setInitialModalStep] = useState<AddChallengeModalStep>('SELECT_TYPE');
  const [ramadanInfo, setRamadanInfo] = useState<RamadanInfo | null>(null);
  const [mounted, setMounted] = useState(false);
  const [editingChallenge, setEditingChallenge] = useState<string | null>(null);
  const [linkCopied, setLinkCopied] = useState(false);
  const [deepLinkedChallengeType, setDeepLinkedChallengeType] = useState<ChallengeType | null>(null);

  // Live community stats (must be before any early returns)
  const communityStats = useCommunityDhikr();

  // ─── Hydration safety ───
  useEffect(() => {
    setMounted(true);
    setRamadanInfo(getRamadanInfo());
  }, []);

  // ─── Deep-link handling ───
  useEffect(() => {
    if (!state.isHydrated || !mounted) return;
    
    const challengeParam = searchParams.get('challenge');
    if (!challengeParam) return;

    const slugToType: Record<string, ChallengeType> = {
      'prophetic-names': 'PROPHETIC_NAMES',
      'istighfar': 'ISTIGHFAR',
      'salawat': 'SALAWAT',
      'divine-name': 'DIVINE_NAME',
      'custom': 'CUSTOM',
    };

    const challengeType = slugToType[challengeParam];
    if (!challengeType) return;

    const hasChallenge = state.challenges.some(c => c.type === challengeType);
    
    if (!hasChallenge) {
      if (challengeType === 'ISTIGHFAR') {
        const config = createIstighfarChallenge();
        addChallenge('ISTIGHFAR', config);
      } else {
        const typeToModalStep: Record<ChallengeType, AddChallengeModalStep> = {
          'PROPHETIC_NAMES': 'CONFIGURE_PROPHETIC_NAMES',
          'ISTIGHFAR': 'SELECT_TYPE',
          'SALAWAT': 'CONFIGURE_SALAWAT',
          'DIVINE_NAME': 'CONFIGURE_DIVINE_NAME',
          'CUSTOM': 'CONFIGURE_CUSTOM',
        };
        
        setInitialModalStep(typeToModalStep[challengeType]);
        setShowAddModal(true);
      }
    }
    
    setDeepLinkedChallengeType(challengeType);
    
    // Clean up URL parameter
    if (typeof window !== 'undefined') {
      const url = new URL(window.location.href);
      url.searchParams.delete('challenge');
      const langParam = url.searchParams.get('lang');
      if (langParam) {
        window.history.replaceState({}, '', `${url.pathname}?lang=${langParam}`);
      } else {
        window.history.replaceState({}, '', url.pathname);
      }
    }
  }, [state.isHydrated, mounted, searchParams, state.challenges, addChallenge]);

  // ─── Scroll to deep-linked challenge ───
  useEffect(() => {
    if (!deepLinkedChallengeType || !mounted) return;
    
    const challenge = state.challenges.find(c => c.type === deepLinkedChallengeType);
    if (!challenge) return;
    
    const timer = setTimeout(() => {
      const elementId = deepLinkedChallengeType === 'PROPHETIC_NAMES' 
        ? 'prophetic-names-card'
        : `challenge-card-${challenge.id}`;
      
      const element = document.getElementById(elementId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    }, 300);
    
    return () => clearTimeout(timer);
  }, [deepLinkedChallengeType, mounted, state.challenges]);

  // ─── Auto-create Istighfār challenge if no challenges exist ───
  useEffect(() => {
    if (!state.isHydrated || state.challenges.length > 0) return;
    
    const config = createIstighfarChallenge();
    addChallenge('ISTIGHFAR', config);
  }, [state.isHydrated, state.challenges.length, addChallenge]);

  // ─── Loading state (skeleton matching real layout to prevent flash) ───
  if (!mounted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-amber-50 via-yellow-50 to-orange-50 dark:from-slate-900 dark:via-slate-900 dark:to-slate-800">
        {/* Skeleton header */}
        <div className="sticky top-0 z-50 bg-gradient-to-r from-amber-600 to-orange-500 px-4 py-3">
          <div className="flex items-center justify-between max-w-2xl mx-auto">
            <div className="w-8 h-8 rounded-lg bg-white/20 animate-pulse" />
            <div className="w-40 h-5 rounded bg-white/20 animate-pulse" />
            <div className="w-8 h-8 rounded-lg bg-white/20 animate-pulse" />
          </div>
        </div>
        {/* Skeleton progress bar */}
        <div className="max-w-2xl mx-auto px-4 pt-5">
          <div className="h-2 rounded-full bg-amber-200/50 dark:bg-amber-800/30 mb-6" />
          {/* Skeleton challenge cards */}
          {[1, 2].map(i => (
            <div key={i} className="mb-4 rounded-xl bg-white/60 dark:bg-slate-800/40 border border-amber-200/40 dark:border-amber-700/20 p-4 animate-pulse">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-amber-200/60 dark:bg-amber-700/30" />
                <div className="flex-1 space-y-2">
                  <div className="h-4 w-32 rounded bg-amber-200/60 dark:bg-amber-700/30" />
                  <div className="h-3 w-48 rounded bg-amber-100/60 dark:bg-amber-800/20" />
                </div>
                <div className="w-16 h-10 rounded-lg bg-amber-200/60 dark:bg-amber-700/30" />
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  // ─── Not Ramadan state ───
  if (!ramadanInfo?.isRamadan) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-100 to-slate-200 dark:from-slate-900 dark:to-slate-800 flex items-center justify-center p-4">
        <div className="bg-white dark:bg-slate-800 rounded-2xl p-8 max-w-md text-center shadow-xl">
          <div className="text-6xl mb-4">🌙</div>
          <h1 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-2">
            {t.title}
          </h1>
          <p className="text-slate-600 dark:text-slate-400 mb-6">
            {t.comingSoon}
          </p>
          <button
            onClick={() => router.push('/')}
            className="inline-flex items-center gap-2 px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl font-medium transition-colors"
          >
            <Home className="w-5 h-5" />
            {t.visitHome}
          </button>
        </div>
      </div>
    );
  }

  // ─── Computed values ───
  const totalRamadanProgress = getTotalRamadanProgress();
  const totalTodayProgress = getTotalTodayProgress();
  const totalRamadanTarget = state.challenges.reduce((sum, c) => sum + c.ramadanTarget, 0);
  const progressPercent = totalRamadanTarget > 0 ? Math.round((totalRamadanProgress / totalRamadanTarget) * 100) : 0;

  // Calculate total streak (max across challenges)
  const totalStreak = state.challenges.reduce((max, c) => Math.max(max, c.streakDays), 0);

  // ─── Handle challenge add ───
  const handleAddChallenge = (type: ChallengeType, config: Parameters<typeof addChallenge>[1]) => {
    addChallenge(type, config);
    
    if (type === 'PROPHETIC_NAMES') {
      setTimeout(() => {
        const card = document.getElementById('prophetic-names-card');
        if (card) {
          card.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
      }, 150);
    }
  };

  // ─── Handle count log ───
  const handleLogCount = (challengeId: string) => (amount: number, session: SessionTag) => {
    logCount(challengeId, amount, session);
  };

  // ─── Handle settings save ───
  const handleSaveSettings = (challengeId: string) => (dailyTarget: number, ramadanTarget: number) => {
    setTargets(challengeId, dailyTarget, ramadanTarget);
  };

  // ─── Share functionality ───
  const handleShare = async () => {
    const shareUrl = `${process.env.NEXT_PUBLIC_BASE_URL || 'https://www.asrar.app'}/ramadan${language === 'fr' ? '?lang=fr' : ''}`;
    const shareTitle = t.title;
    const shareText = language === 'fr'
      ? '🌙 Rejoignez-moi dans mes défis spirituels du Ramadan sur Asrār!'
      : '🌙 Join me in my Ramadan spiritual challenges on Asrār!';

    if (navigator.share) {
      try {
        await navigator.share({ title: shareTitle, text: shareText, url: shareUrl });
      } catch {
        // User cancelled
      }
    } else {
      try {
        await navigator.clipboard.writeText(shareUrl);
        setLinkCopied(true);
        setTimeout(() => setLinkCopied(false), 2000);
      } catch {
        // Fallback
      }
    }
  };

  const challengeBeingEdited = editingChallenge 
    ? state.challenges.find(c => c.id === editingChallenge)
    : null;

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-yellow-50 to-orange-50 dark:from-slate-900 dark:via-slate-900 dark:to-slate-800">
      {/* ─── Header ─── */}
      <header className="sticky top-0 z-40 bg-white/80 dark:bg-slate-900/80 backdrop-blur-lg border-b border-amber-200 dark:border-amber-800/50">
        <div className="max-w-2xl mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            {/* Back button */}
            <button
              onClick={() => router.push('/')}
              className="flex items-center gap-2 px-3 py-2 -ml-3 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100 transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
              <span className="hidden sm:inline text-sm font-medium">{t.backHome}</span>
            </button>

            {/* Title */}
            <div className="flex items-center gap-2">
              <span className="text-2xl">🌙</span>
              <div className="text-center">
                <h1 className="text-lg font-bold text-amber-900 dark:text-amber-100">
                  {t.day} {ramadanInfo.dayOfRamadan}
                </h1>
              </div>
            </div>

            {/* Share button */}
            <button
              onClick={handleShare}
              className="flex items-center gap-2 px-3 py-2 -mr-3 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100 transition-colors"
            >
              {linkCopied ? (
                <>
                  <Check className="w-5 h-5 text-green-500" />
                  <span className="hidden sm:inline text-sm font-medium text-green-500">{t.linkCopied}</span>
                </>
              ) : (
                <>
                  <Share2 className="w-5 h-5" />
                  <span className="hidden sm:inline text-sm font-medium">{t.share}</span>
                </>
              )}
            </button>
          </div>
        </div>
      </header>

      {/* ─── Progress Summary ─── */}
      <div className="max-w-2xl mx-auto px-4 py-4">
        <div className="bg-white/70 dark:bg-slate-800/60 rounded-2xl border border-amber-200/60 dark:border-amber-700/30 shadow-sm overflow-hidden">
          
          {/* Top section: Stats row */}
          <div className="px-4 pt-4 pb-3">
            <div className="grid grid-cols-3 gap-3">
              {/* Today */}
              <div className="flex flex-col items-center gap-0.5">
                <span className="text-[10px] uppercase tracking-wider font-semibold text-amber-600/70 dark:text-amber-400/60">
                  {t.todayTotal}
                </span>
                <span className={`text-2xl font-bold tabular-nums ${totalTodayProgress > 0 ? 'text-amber-800 dark:text-amber-200' : 'text-slate-300 dark:text-slate-600'}`}>
                  {formatNumber(totalTodayProgress)}
                </span>
                {totalTodayProgress === 0 && (
                  <span className="text-[10px] text-amber-500/80 dark:text-amber-400/50 font-medium">
                    {language === 'fr' ? 'Ouvre un défi ↓' : 'Tap a challenge ↓'}
                  </span>
                )}
              </div>

              {/* Ramadan Total — center emphasis */}
              <div className="flex flex-col items-center gap-0.5 relative">
                <span className="text-[10px] uppercase tracking-wider font-semibold text-amber-600/70 dark:text-amber-400/60">
                  {t.ramadanTotal}
                </span>
                <span className={`text-2xl font-extrabold tabular-nums ${totalRamadanProgress > 0 ? 'text-amber-900 dark:text-amber-100' : 'text-slate-300 dark:text-slate-600'}`}>
                  {formatNumber(totalRamadanProgress)}
                </span>
                {/* Vertical dividers */}
                <div className="absolute left-0 top-1 bottom-1 w-px bg-amber-200/50 dark:bg-amber-700/30" />
                <div className="absolute right-0 top-1 bottom-1 w-px bg-amber-200/50 dark:bg-amber-700/30" />
              </div>

              {/* Streak or Progress */}
              <div className="flex flex-col items-center gap-0.5">
                {totalStreak > 0 ? (
                  <>
                    <span className="text-[10px] uppercase tracking-wider font-semibold text-orange-500/70 dark:text-orange-400/60">
                      {t.streak}
                    </span>
                    <span className="text-2xl font-bold text-orange-600 dark:text-orange-400 flex items-center gap-0.5 tabular-nums">
                      <Flame className="w-4 h-4" />
                      {totalStreak}
                    </span>
                  </>
                ) : (
                  <>
                    <span className="text-[10px] uppercase tracking-wider font-semibold text-amber-600/70 dark:text-amber-400/60">
                      {t.progress}
                    </span>
                    <span className={`text-2xl font-bold tabular-nums ${progressPercent > 0 ? 'text-emerald-600 dark:text-emerald-400' : 'text-slate-300 dark:text-slate-600'}`}>
                      {progressPercent}%
                    </span>
                  </>
                )}
              </div>
            </div>
          </div>

          {/* Progress bar section */}
          {totalRamadanTarget > 0 && (
            <div className="px-4 pb-3">
              <div className="h-2 bg-amber-100 dark:bg-slate-700 rounded-full overflow-hidden">
                <div
                  className="h-full rounded-full transition-all duration-700 ease-out"
                  style={{
                    width: `${Math.max(progressPercent > 0 ? 2 : 0, Math.min(100, progressPercent))}%`,
                    background: progressPercent > 0
                      ? 'linear-gradient(90deg, #f59e0b, #f97316, #ef4444)'
                      : 'transparent',
                  }}
                />
              </div>
              <div className="flex justify-between mt-1 text-[10px] text-amber-500/70 dark:text-amber-400/50 tabular-nums font-medium">
                <span>{formatNumber(totalRamadanProgress)}</span>
                <span>{formatNumber(totalRamadanTarget)}</span>
              </div>
            </div>
          )}

          {/* Community banner — subtle bottom strip */}
          {communityStats.todayTotal > 0 && (
            <div className="px-4 py-2 bg-gradient-to-r from-teal-50/80 to-emerald-50/80 dark:from-teal-900/20 dark:to-emerald-900/20 border-t border-teal-100 dark:border-teal-800/30 flex items-center justify-center gap-2 text-xs">
              <span className="text-teal-600 dark:text-teal-400">🌍</span>
              <span className="font-bold text-teal-700 dark:text-teal-300 tabular-nums">{communityStats.todayTotal.toLocaleString()}</span>
              <span className="text-teal-600/80 dark:text-teal-400/60">
                {language === 'fr' ? "dhikr communautaires aujourd'hui" : 'community dhikr today'}
              </span>
            </div>
          )}
        </div>
      </div>

      {/* ─── Main Content ─── */}
      <main className="max-w-2xl mx-auto px-4 pb-24 space-y-4">
        {/* Recommender Banner */}
        <RecommenderBanner challenges={state.challenges} language={language} />

        {/* Challenge Cards */}
        {state.challenges.map((challenge, index) => (
          challenge.type === 'PROPHETIC_NAMES' ? (
            <div key={challenge.id} id="prophetic-names-card">
              <PropheticNamesCard
                challenge={challenge}
                onLogSession={logCount}
                onRemove={removeChallenge}
                language={language}
              />
            </div>
          ) : (
            <div key={challenge.id} id={`challenge-card-${challenge.id}`}>
              <ChallengeCard
                challenge={challenge}
                onLogCount={handleLogCount(challenge.id)}
                onOpenSettings={() => setEditingChallenge(challenge.id)}
                language={language}
                defaultExpanded={deepLinkedChallengeType === challenge.type || index === 0}
              />
            </div>
          )
        ))}

        {/* Add Challenge Button */}
        <button
          onClick={() => { setInitialModalStep('SELECT_TYPE'); setShowAddModal(true); }}
          className="w-full flex items-center justify-center gap-2 p-4 rounded-xl border-2 border-dashed border-amber-300 dark:border-amber-600/50 text-amber-700 dark:text-amber-300 hover:bg-amber-100/50 dark:hover:bg-amber-900/30 hover:border-amber-400 dark:hover:border-amber-500 transition-all"
        >
          <Plus className="w-5 h-5" />
          <span className="font-medium">{t.addChallenge}</span>
        </button>

        {/* Community Banner */}
        <CommunityBanner stats={state.community} language={language} />
      </main>

      {/* ─── Floating Home Button ─── */}
      <div className="fixed bottom-6 right-6 z-50">
        <button
          onClick={() => router.push('/')}
          className="flex items-center justify-center w-14 h-14 bg-indigo-600 hover:bg-indigo-700 text-white rounded-full shadow-lg hover:shadow-xl transition-all"
          title={t.backHome}
        >
          <Home className="w-6 h-6" />
        </button>
      </div>

      {/* ─── Modals ─── */}
      <AddChallengeModal
        isOpen={showAddModal}
        onClose={() => setShowAddModal(false)}
        onAdd={handleAddChallenge}
        language={language}
        initialStep={initialModalStep}
      />

      {challengeBeingEdited && (
        <ChallengeSettingsModal
          isOpen={!!editingChallenge}
          onClose={() => setEditingChallenge(null)}
          challenge={challengeBeingEdited}
          onSave={handleSaveSettings(editingChallenge!)}
          language={language}
        />
      )}
    </div>
  );
}
