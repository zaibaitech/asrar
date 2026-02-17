/**
 * Ilm Nujum Status Badge Component
 * Displays qualitative status instead of numerical percentage
 */

import React from 'react';
import { IlmNujumBadge as IlmNujumBadgeType } from '@/src/lib/planetary';
import { translations } from '@/src/lib/translations';

interface IlmNujumBadgeProps {
  badge: IlmNujumBadgeType;
  showScore?: boolean;
  language?: 'en' | 'fr';
}

export function IlmNujumBadge({ badge, showScore = false, language = 'en' }: IlmNujumBadgeProps) {
  const t = translations[language].planetary.ilmNujum as Record<string, string>;
  const label = t[badge.tier] || badge.labelEn;

  return (
    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border backdrop-blur-sm"
         style={{ 
           backgroundColor: `${badge.color}15`, 
           borderColor: `${badge.color}50` 
         }}>
      {/* Pulsing status dot */}
      <div className="relative w-2 h-2">
        <div className="absolute inset-0 rounded-full animate-pulse-live" 
             style={{ backgroundColor: badge.color }}
        />
        <div className="absolute inset-0 rounded-full" 
             style={{ backgroundColor: badge.color }}
        />
      </div>
      
      {/* Labels */}
      <div className="flex items-center gap-2 text-sm font-medium">
        <span style={{ color: badge.color }}>
          {label}
        </span>
        {showScore && (
          <span className="text-xs opacity-70" style={{ color: badge.color }}>
            ({badge.score}%)
          </span>
        )}
      </div>
    </div>
  );
}
