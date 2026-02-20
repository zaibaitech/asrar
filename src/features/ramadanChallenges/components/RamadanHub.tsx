/**
 * Ramadan Hub Component
 * ======================
 * Main container for the multi-challenge Ramadan spiritual system.
 * Replaces the single Istighfār banner with a full challenge hub.
 *
 * Features:
 * - Collapsed banner with user's total progress
 * - Expanded view with all active challenges
 * - Add challenge modal
 * - Automatic migration of existing Istighfār data
 */

'use client';

import React, { useState, useEffect, useMemo } from 'react';
import { ChevronDown, ChevronUp, Plus } from 'lucide-react';
import { getRamadanInfo, formatRamadanDay, type RamadanInfo } from '@/src/lib/hijri';
import { useRamadanChallenges, createIstighfarChallenge } from '../store';
import type { ChallengeType, SessionTag } from '../types';
import { formatNumber } from '../utils';
import { ChallengeCard } from './ChallengeCard';
import { CommunityBanner } from './CommunityBanner';
import { RecommenderBanner } from './RecommenderBanner';
import { AddChallengeModal } from './AddChallengeModal';
import { getBestDhikrNow } from '../recommender';

// ─── Props ───────────────────────────────────────────────────────────────────────

interface RamadanHubProps {
  language?: 'en' | 'fr';
  defaultExpanded?: boolean;
}

// ─── Component ───────────────────────────────────────────────────────────────────

export function RamadanHub({ language = 'en', defaultExpanded = false }: RamadanHubProps) {
  const { state, addChallenge, logCount, getTotalRamadanProgress, getTotalTodayProgress } = useRamadanChallenges();
  const [isExpanded, setIsExpanded] = useState(defaultExpanded);
  const [showAddModal, setShowAddModal] = useState(false);
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
    
    // Create default Istighfār challenge for new users
    const config = createIstighfarChallenge();
    addChallenge('ISTIGHFAR', config);
  }, [state.isHydrated, state.challenges.length, addChallenge]);

  // Don't render until mounted and during Ramadan
  if (!mounted || !ramadanInfo?.isRamadan) return null;

  // ─── Computed values ───
  const totalRamadanProgress = getTotalRamadanProgress();
  const totalTodayProgress = getTotalTodayProgress();
  const totalRamadanTarget = state.challenges.reduce((sum, c) => sum + c.ramadanTarget, 0);

  // Get current recommendation for collapsed banner
  const recommendation = getBestDhikrNow(state.challenges);

  // ─── Handle challenge add ───
  const handleAddChallenge = (type: ChallengeType, config: Parameters<typeof addChallenge>[1]) => {
    addChallenge(type, config);
  };

  // ─── Handle count log ───
  const handleLogCount = (challengeId: string) => (amount: number, session: SessionTag) => {
    logCount(challengeId, amount, session);
  };

  return (
    <>
      <div className="bg-gradient-to-br from-amber-50 via-yellow-50 to-orange-50 dark:from-amber-950/40 dark:via-yellow-950/30 dark:to-orange-950/30 rounded-xl border border-amber-200 dark:border-amber-700/50 overflow-hidden transition-all duration-300 animate-in">
        
        {/* ─── Collapsed Banner ─── */}
        <div
          className="p-5 cursor-pointer hover:bg-amber-100/40 dark:hover:bg-amber-900/20 transition-colors"
          onClick={() => setIsExpanded(!isExpanded)}
        >
          <div className="flex items-center justify-between">
            {/* Left: Moon icon + title */}
            <div className="flex items-center gap-3 flex-1 min-w-0">
              <div className="relative flex-shrink-0">
                <div className="absolute inset-0 bg-amber-400 rounded-full opacity-60 animate-pulse" style={{ width: 28, height: 28 }} />
                <span className="relative z-10 text-2xl">🌙</span>
              </div>
              <div className="min-w-0 flex-1">
                <div className="flex items-center gap-2 flex-wrap">
                  <h3 className="text-lg font-bold text-amber-900 dark:text-amber-100">
                    {language === 'fr' ? 'Ramadan Jour' : 'Ramadan Day'} {ramadanInfo.dayOfRamadan}
                  </h3>
                </div>
                <p className="text-sm text-amber-700 dark:text-amber-300 mt-0.5">
                  {state.challenges.length} {language === 'fr' 
                    ? (state.challenges.length === 1 ? 'défi actif' : 'défis actifs')
                    : (state.challenges.length === 1 ? 'challenge' : 'challenges')
                  }
                  {' · '}{language === 'fr' ? "Aujourd'hui:" : 'Today:'} {formatNumber(totalTodayProgress)}
                  {totalRamadanTarget > 0 && (
                    <span className="text-amber-500 dark:text-amber-500">
                      {' · '}{Math.round((totalRamadanProgress / totalRamadanTarget) * 100)}%
                    </span>
                  )}
                </p>
              </div>
            </div>

            {/* Right: Chevron */}
            <div className="flex items-center gap-2">
              {isExpanded ? (
                <ChevronUp className="w-5 h-5 text-amber-500" />
              ) : (
                <ChevronDown className="w-5 h-5 text-amber-500" />
              )}
            </div>
          </div>
        </div>

        {/* ─── Expanded Content ─── */}
        {isExpanded && (
          <div className="px-5 pb-5 space-y-4 animate-in slide-in-from-top-2 duration-200">
            {/* Recommender Banner */}
            <RecommenderBanner challenges={state.challenges} language={language} />

            {/* Challenge Cards */}
            {state.challenges.map((challenge, index) => (
              <ChallengeCard
                key={challenge.id}
                challenge={challenge}
                onLogCount={handleLogCount(challenge.id)}
                language={language}
                defaultExpanded={index === 0}
              />
            ))}

            {/* Add Challenge Button */}
            <button
              onClick={() => setShowAddModal(true)}
              className="w-full flex items-center justify-center gap-2 p-4 rounded-xl border-2 border-dashed border-amber-300 dark:border-amber-600/50 text-amber-700 dark:text-amber-300 hover:bg-amber-100/50 dark:hover:bg-amber-900/30 hover:border-amber-400 dark:hover:border-amber-500 transition-all"
            >
              <Plus className="w-5 h-5" />
              <span className="font-medium">
                {language === 'fr' ? 'Ajouter un défi' : 'Add Challenge'}
              </span>
            </button>

            {/* Community Banner (at bottom) */}
            <CommunityBanner stats={state.community} language={language} />
          </div>
        )}
      </div>

      {/* Add Challenge Modal */}
      <AddChallengeModal
        isOpen={showAddModal}
        onClose={() => setShowAddModal(false)}
        onAdd={handleAddChallenge}
        language={language}
      />
    </>
  );
}

export default RamadanHub;
