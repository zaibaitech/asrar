/**
 * Compact Practice Hint Component
 * ================================
 * Shows a brief dhikr recommendation on planetary cards.
 * Encourages users to explore full guidance in the mobile app.
 *
 * Design: Subtle teaser that doesn't overwhelm the main card content.
 */

'use client';

import React from 'react';
import type { Planet } from '@/src/lib/planetary';
import type { SimplifiedTier } from '@/src/lib/planetary/dignities';
import { getSimplePracticeHint } from '@/src/lib/planetary/practice-hints';

interface CompactPracticeHintProps {
  /** Simplified dignity tier */
  tier: SimplifiedTier;
  /** Planet for tier-specific guidance */
  planet: Planet;
  /** Display language */
  language?: 'en' | 'fr';
  /** Optional className for custom styling */
  className?: string;
}

/**
 * A compact practice hint that shows:
 * - Dhikr name (Arabic + transliteration)
 * - Brief purpose
 * - App teaser
 */
export function CompactPracticeHint({
  tier,
  planet,
  language = 'en',
  className = '',
}: CompactPracticeHintProps) {
  const hint = getSimplePracticeHint(tier, planet);

  // Colors based on tier
  const tierStyles = {
    said: {
      bg: 'bg-emerald-50/50 dark:bg-emerald-900/20',
      border: 'border-emerald-200/60 dark:border-emerald-500/30',
      icon: 'text-emerald-600 dark:text-emerald-400',
      text: 'text-emerald-700 dark:text-emerald-300',
      muted: 'text-emerald-500 dark:text-emerald-400/70',
    },
    mutadil: {
      bg: 'bg-amber-50/50 dark:bg-amber-900/20',
      border: 'border-amber-200/60 dark:border-amber-500/30',
      icon: 'text-amber-600 dark:text-amber-400',
      text: 'text-amber-700 dark:text-amber-300',
      muted: 'text-amber-500 dark:text-amber-400/70',
    },
    mahdhur: {
      bg: 'bg-rose-50/50 dark:bg-rose-900/20',
      border: 'border-rose-200/60 dark:border-rose-500/30',
      icon: 'text-rose-600 dark:text-rose-400',
      text: 'text-rose-700 dark:text-rose-300',
      muted: 'text-rose-500 dark:text-rose-400/70',
    },
  };

  const styles = tierStyles[tier];

  // Translations for app teaser
  const appTeaser = language === 'fr' 
    ? 'Plus dans l\'app Asrār' 
    : 'More in Asrār app';

  return (
    <div 
      className={`
        ${styles.bg} ${styles.border}
        border rounded-lg px-3 py-2
        ${className}
      `}
    >
      {/* Dhikr recommendation */}
      <div className="flex items-center gap-2">
        <span className={`text-sm ${styles.icon}`}>🤲</span>
        <span className={`text-base font-arabic ${styles.text}`}>
          {hint.nameAr}
        </span>
        <span className={`text-sm ${styles.muted}`}>
          {hint.name}
        </span>
        <span className="text-slate-400 dark:text-slate-500">·</span>
        <span className="text-xs text-slate-500 dark:text-slate-400 truncate">
          {hint.hint}
        </span>
      </div>

      {/* App teaser */}
      <div className="flex items-center gap-1.5 mt-1">
        <span className="text-xs">📱</span>
        <span className="text-xs text-slate-400 dark:text-slate-500 italic">
          {appTeaser}
        </span>
      </div>
    </div>
  );
}

export default CompactPracticeHint;
