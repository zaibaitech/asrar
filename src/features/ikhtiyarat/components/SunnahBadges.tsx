'use client';

import { useState } from 'react';
import { SunnahBadge } from '@/src/lib/ikhtiyarat/hijri';
import { UiLang } from '../copy';

const TONE_COLOR: Record<SunnahBadge['tone'], string> = {
  positive: '#22C55E',
  neutral: '#3B82F6',
  caution: '#F59E0B',
};

export function SunnahBadges({ badges, language }: { badges: SunnahBadge[]; language: UiLang }) {
  const [openId, setOpenId] = useState<string | null>(null);

  if (badges.length === 0) return null;

  return (
    <div className="flex flex-wrap gap-2">
      {badges.map(badge => {
        const color = TONE_COLOR[badge.tone];
        const isOpen = openId === badge.id;
        return (
          <div key={badge.id} className="relative">
            <button
              type="button"
              onClick={() => setOpenId(isOpen ? null : badge.id)}
              className="px-3 py-1.5 min-h-[36px] rounded-full border text-xs font-medium"
              style={{ backgroundColor: `${color}12`, borderColor: `${color}40`, color }}
            >
              {badge.label[language]} <span dir="rtl" lang="ar" className="font-arabic opacity-70">{badge.label.ar}</span>
            </button>
            {isOpen && (
              <>
                <div className="fixed inset-0 z-40" onClick={() => setOpenId(null)} />
                <div className="absolute z-50 bottom-full left-1/2 -translate-x-1/2 mb-2 w-64 max-w-[80vw] p-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 shadow-xl text-left">
                  <p className="text-xs text-slate-600 dark:text-slate-300">{badge.note[language]}</p>
                  <p dir="rtl" lang="ar" className="font-arabic text-xs text-slate-400 mt-1">{badge.note.ar}</p>
                </div>
              </>
            )}
          </div>
        );
      })}
    </div>
  );
}
