'use client';

import { useState } from 'react';
import { UrfBadge as UrfBadgeData } from '@/src/lib/ikhtiyarat/urf';
import { UiLang } from '../copy';

// Deliberately distinct from SunnahBadges' TONE_COLOR palette (green/blue/amber)
// so the two layers never look like the same kind of verdict — this is
// Custom (ʿUrf), not fiqh or the astro score.
const TONE_COLOR: Record<UrfBadgeData['tone'], string> = {
  positive: '#8B5CF6',
  neutral: '#6366F1',
  caution: '#D97706',
};

export function UrfBadge({ badge, language }: { badge: UrfBadgeData; language: UiLang }) {
  const [open, setOpen] = useState(false);
  const color = TONE_COLOR[badge.tone];

  return (
    <div className="relative inline-block">
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="px-3 py-1.5 min-h-[36px] rounded-full border text-xs font-medium"
        style={{ backgroundColor: `${color}12`, borderColor: `${color}40`, color }}
      >
        {badge.label[language]} <span dir="rtl" lang="ar" className="font-arabic opacity-70">{badge.label.ar}</span>
      </button>
      {open && (
        <>
          <div className="fixed inset-0 z-40" onClick={() => setOpen(false)} />
          <div className="absolute z-50 bottom-full left-1/2 -translate-x-1/2 mb-2 w-64 max-w-[80vw] p-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 shadow-xl text-left">
            <p className="text-xs text-slate-600 dark:text-slate-300">{badge.note[language]}</p>
            <p dir="rtl" lang="ar" className="font-arabic text-xs text-slate-400 mt-1">{badge.note.ar}</p>
          </div>
        </>
      )}
    </div>
  );
}
