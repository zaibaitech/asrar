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
import { useSearchParams } from 'next/navigation';
import { ChevronDown, ChevronUp, Plus, Compass } from 'lucide-react';
import { getRamadanInfo, formatRamadanDay, type RamadanInfo } from '@/src/lib/hijri';
import { useRamadanChallenges, createIstighfarChallenge, createSalawatChallenge, createDivineNameChallenge } from '../store';
import { RIZQ_PRACTICE_INFO } from '../propheticNames201';
import type { ChallengeType, SessionTag } from '../types';
import { formatNumber } from '../utils';
import { ChallengeCard } from './ChallengeCard';
import { PropheticNamesCard } from './PropheticNamesCard';
import { CommunityBanner } from './CommunityBanner';
import { RecommenderBanner } from './RecommenderBanner';
import { AddChallengeModal, type AddChallengeModalStep } from './AddChallengeModal';
import { ChallengeSettingsModal } from './ChallengeSettingsModal';
import { getBestDhikrNow } from '../recommender';

// ─── Props ───────────────────────────────────────────────────────────────────────

interface RamadanHubProps {
  language?: 'en' | 'fr';
  defaultExpanded?: boolean;
}

// ─── Component ───────────────────────────────────────────────────────────────────

export function RamadanHub({ language = 'en', defaultExpanded = false }: RamadanHubProps) {
  const { state, addChallenge, removeChallenge, logCount, setTargets, getTotalProgress, getTotalTodayProgress } = useRamadanChallenges();
  const [isExpanded, setIsExpanded] = useState(defaultExpanded);
  const [showAddModal, setShowAddModal] = useState(false);
  const [initialModalStep, setInitialModalStep] = useState<AddChallengeModalStep>('SELECT_TYPE');
  const [ramadanInfo, setRamadanInfo] = useState<RamadanInfo | null>(null);
  const [mounted, setMounted] = useState(false);
  const [editingChallenge, setEditingChallenge] = useState<string | null>(null);
  const searchParams = useSearchParams();

  // Track which challenge to auto-expand based on deep-link
  const [deepLinkedChallengeType, setDeepLinkedChallengeType] = useState<ChallengeType | null>(null);

  // ─── Hydration safety ───
  useEffect(() => {
    setMounted(true);
    setRamadanInfo(getRamadanInfo());
  }, []);

  // ─── Deep-link handling: Show intro modal from shared link ───
  useEffect(() => {
    if (!state.isHydrated || !mounted) return;
    
    const challengeParam = searchParams.get('challenge');
    if (!challengeParam) return;

    // Map URL params to challenge types
    const slugToType: Record<string, ChallengeType> = {
      'prophetic-names': 'PROPHETIC_NAMES',
      'istighfar': 'ISTIGHFAR',
      'salawat': 'SALAWAT',
      'divine-name': 'DIVINE_NAME',
      'custom': 'CUSTOM',
    };

    const challengeType = slugToType[challengeParam];
    if (!challengeType) return;

    // Check if this challenge type already exists
    const hasChallenge = state.challenges.some(c => c.type === challengeType);
    
    if (!hasChallenge) {
      // For ISTIGHFAR, auto-create without modal (no config modal for it)
      if (challengeType === 'ISTIGHFAR') {
        const config = createIstighfarChallenge();
        addChallenge('ISTIGHFAR', config);
      } else {
        // Map challenge type to the appropriate modal step
        const typeToModalStep: Record<ChallengeType, AddChallengeModalStep> = {
          'PROPHETIC_NAMES': 'CONFIGURE_PROPHETIC_NAMES',
          'ISTIGHFAR': 'SELECT_TYPE', // Won't be used since we auto-create above
          'SALAWAT': 'CONFIGURE_SALAWAT',
          'DIVINE_NAME': 'CONFIGURE_DIVINE_NAME',
          'CUSTOM': 'CONFIGURE_CUSTOM',
        };
        
        setInitialModalStep(typeToModalStep[challengeType]);
        setShowAddModal(true);
      }
    }
    
    // Mark this type for auto-expansion
    setDeepLinkedChallengeType(challengeType);
    
    // Expand the hub to show challenges
    setIsExpanded(true);
    
    // Clean up URL parameter without page reload
    if (typeof window !== 'undefined') {
      const url = new URL(window.location.href);
      url.searchParams.delete('challenge');
      // Keep language param if present
      const langParam = url.searchParams.get('lang');
      if (langParam) {
        window.history.replaceState({}, '', `${url.pathname}?lang=${langParam}`);
      } else {
        window.history.replaceState({}, '', url.pathname);
      }
    }
  }, [state.isHydrated, mounted, searchParams, state.challenges]);

  // ─── Scroll to deep-linked challenge after it's rendered ───
  useEffect(() => {
    if (!deepLinkedChallengeType || !mounted) return;
    
    // Find the challenge with this type
    const challenge = state.challenges.find(c => c.type === deepLinkedChallengeType);
    if (!challenge) return;
    
    // Small delay to allow DOM to update
    const timer = setTimeout(() => {
      // For prophetic names, use the specific ID
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
    
    // Create default Istighfār challenge for new users
    const config = createIstighfarChallenge();
    addChallenge('ISTIGHFAR', config);
  }, [state.isHydrated, state.challenges.length, addChallenge]);

  // Don't render until mounted and during Ramadan
  if (!mounted || !ramadanInfo?.isRamadan) return null;

  // ─── Computed values ───
  const totalRamadanProgress = getTotalProgress();
  const totalTodayProgress = getTotalTodayProgress();
  const totalRamadanTarget = state.challenges.reduce((sum, c) => sum + (c.totalTarget || 0), 0);

  // Get current recommendation for collapsed banner
  const recommendation = getBestDhikrNow(state.challenges);

  // ─── Handle challenge add ───
  const handleAddChallenge = (type: ChallengeType, config: Parameters<typeof addChallenge>[1]) => {
    addChallenge(type, config);
    setIsExpanded(true);
    
    // Scroll to the card after it renders
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
  const handleSaveSettings = (challengeId: string) => (dailyTarget: number, totalTarget: number) => {
    setTargets(challengeId, dailyTarget, totalTarget);
  };

  // Get the challenge being edited
  const challengeBeingEdited = editingChallenge 
    ? state.challenges.find(c => c.id === editingChallenge)
    : null;

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
              <span className="font-medium">
                {language === 'fr' ? 'Ajouter un défi' : 'Add Challenge'}
              </span>
            </button>

            {/* Community Banner (at bottom) */}
            <CommunityBanner stats={state.community} language={language} />
            
            {/* Explore App Button - Always visible for easy navigation */}
            <button
              onClick={() => {
                const tabsElement = document.getElementById('app-main-tabs');
                if (tabsElement) {
                  tabsElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
              }}
              className="w-full flex items-center justify-center gap-2 p-3 rounded-xl bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white font-medium transition-all shadow-md hover:shadow-lg"
            >
              <Compass className="w-5 h-5" />
              <span>
                {language === 'fr' ? 'Explorer Asrar' : 'Explore Asrar'}
              </span>
            </button>
          </div>
        )}
      </div>

      {/* Add Challenge Modal */}
      <AddChallengeModal
        isOpen={showAddModal}
        onClose={() => setShowAddModal(false)}
        onAdd={handleAddChallenge}
        language={language}
        initialStep={initialModalStep}
      />

      {/* Challenge Settings Modal */}
      {challengeBeingEdited && (
        <ChallengeSettingsModal
          isOpen={!!editingChallenge}
          onClose={() => setEditingChallenge(null)}
          challenge={challengeBeingEdited}
          onSave={handleSaveSettings(editingChallenge!)}
          language={language}
        />
      )}
    </>
  );
}

export default RamadanHub;
