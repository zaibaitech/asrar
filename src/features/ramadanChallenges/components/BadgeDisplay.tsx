/**
 * Badge Display Component
 * =======================
 * Shows earned badges with rarity styling
 */

'use client';

import React from 'react';
import type { Badge } from '../badges';
import { getBadgeRarityColor, getBadgeRarityBorder } from '../badges';

interface BadgeDisplayProps {
  badge: Badge;
  language?: 'en' | 'fr';
  size?: 'sm' | 'md' | 'lg';
  showDescription?: boolean;
}

export function BadgeDisplay({ 
  badge, 
  language = 'en', 
  size = 'md',
  showDescription = false,
}: BadgeDisplayProps) {
  const sizeClasses = {
    sm: 'w-12 h-12 text-2xl',
    md: 'w-16 h-16 text-3xl',
    lg: 'w-20 h-20 text-4xl',
  };

  const name = language === 'fr' ? badge.nameFr : badge.nameEn;
  const description = language === 'fr' ? badge.descriptionFr : badge.descriptionEn;

  return (
    <div className="flex flex-col items-center gap-2">
      <div 
        className={`${sizeClasses[size]} flex items-center justify-center rounded-full border-2 ${getBadgeRarityBorder(badge.rarity)} bg-white dark:bg-slate-800 transition-transform hover:scale-110`}
        title={description}
      >
        <span>{badge.icon}</span>
      </div>
      {showDescription && (
        <div className="text-center">
          <p className={`text-xs font-semibold ${getBadgeRarityColor(badge.rarity)}`}>
            {name}
          </p>
          <p className="text-[10px] text-slate-500 dark:text-slate-400">
            {description}
          </p>
        </div>
      )}
    </div>
  );
}

interface BadgeGridProps {
  badges: Badge[];
  language?: 'en' | 'fr';
  maxDisplay?: number;
}

export function BadgeGrid({ badges, language = 'en', maxDisplay }: BadgeGridProps) {
  const displayBadges = maxDisplay ? badges.slice(0, maxDisplay) : badges;
  const remaining = maxDisplay ? Math.max(0, badges.length - maxDisplay) : 0;

  if (badges.length === 0) {
    return (
      <div className="text-center py-8 text-slate-500 dark:text-slate-400">
        <p className="text-sm">
          {language === 'fr' 
            ? 'Aucun badge gagné pour l\'instant. Continuez votre défi!'
            : 'No badges earned yet. Keep going!'}
        </p>
      </div>
    );
  }

  return (
    <div className="flex flex-wrap gap-4 justify-center items-start">
      {displayBadges.map((badge) => (
        <BadgeDisplay 
          key={badge.id} 
          badge={badge} 
          language={language}
          showDescription
        />
      ))}
      {remaining > 0 && (
        <div className="w-16 h-16 flex items-center justify-center rounded-full border-2 border-dashed border-slate-300 dark:border-slate-600 bg-slate-50 dark:bg-slate-800">
          <span className="text-sm font-semibold text-slate-500">+{remaining}</span>
        </div>
      )}
    </div>
  );
}
