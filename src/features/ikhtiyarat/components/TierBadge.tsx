'use client';

import { TierInfo } from '@/src/lib/ikhtiyarat/types';
import { UiLang } from '../copy';

export function TierBadge({ tierInfo, language, score }: { tierInfo: TierInfo; language: UiLang; score: number }) {
  const label = language === 'fr' ? tierInfo.labelFr : tierInfo.labelEn;
  return (
    <span
      className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border backdrop-blur-sm"
      style={{ backgroundColor: `${tierInfo.color}12`, borderColor: `${tierInfo.color}40` }}
    >
      <span className="w-2 h-2 rounded-full" style={{ backgroundColor: tierInfo.color }} />
      <span className="text-sm font-semibold" style={{ color: tierInfo.color }}>
        {label}
      </span>
      <span className="font-arabic text-xs opacity-70" style={{ color: tierInfo.color }}>
        {tierInfo.labelAr}
      </span>
      <span className="text-xs opacity-60" style={{ color: tierInfo.color }}>
        {score}/100
      </span>
    </span>
  );
}
