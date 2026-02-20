/**
 * Recommender Banner Component
 * =============================
 * Shows the "Best Dhikr Right Now" recommendation
 * based on current time window and user's challenges.
 */

'use client';

import React from 'react';
import type { Challenge } from '../types';
import { getBestDhikrNow, getCurrentTimeWindow } from '../recommender';

interface RecommenderBannerProps {
  challenges: Challenge[];
  language?: 'en' | 'fr';
}

export function RecommenderBanner({ challenges, language = 'en' }: RecommenderBannerProps) {
  const recommendation = getBestDhikrNow(challenges);
  const { name: timeWindow, nameAr: timeWindowAr } = getCurrentTimeWindow();

  // No active challenges
  if (!recommendation.challenge) {
    return (
      <div className="flex items-center gap-3 p-3 rounded-lg bg-teal-50 dark:bg-teal-900/20 border border-teal-200 dark:border-teal-700/50">
        <span className="text-lg">✨</span>
        <div className="flex-1">
          <p className="text-sm font-medium text-teal-700 dark:text-teal-300">
            {language === 'fr' ? 'Ajoutez un défi pour commencer' : 'Add a challenge to get started'}
          </p>
          <p className="text-xs text-teal-600 dark:text-teal-400">
            {timeWindow} · <span className="font-arabic">{timeWindowAr}</span>
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="flex items-center gap-3 p-3 rounded-lg bg-teal-50 dark:bg-teal-900/20 border border-teal-200 dark:border-teal-700/50">
      <span className="text-lg">✨</span>
      <div className="flex-1 min-w-0">
        <p className="text-sm text-teal-700 dark:text-teal-300">
          {language === 'fr' ? "Recommandé maintenant:" : "Best dhikr now:"}{' '}
          <span className="font-semibold text-teal-800 dark:text-teal-200">{recommendation.challenge.transliteration}</span>
          {' · '}
          <span className="text-teal-600 dark:text-teal-400">{timeWindow}</span>
        </p>
      </div>
    </div>
  );
}

export default RecommenderBanner;
