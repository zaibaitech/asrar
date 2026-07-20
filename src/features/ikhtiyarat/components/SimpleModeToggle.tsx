'use client';

import { UiLang } from '../copy';
import { ikhtiyaratCopy } from '../copy';

export function SimpleModeToggle({ simple, onChange, language }: { simple: boolean; onChange: (value: boolean) => void; language: UiLang }) {
  const c = ikhtiyaratCopy[language];
  return (
    <div className="inline-flex rounded-lg border border-slate-200 dark:border-slate-700 p-0.5 bg-white/60 dark:bg-slate-800/40 text-xs">
      <button
        onClick={() => onChange(true)}
        className={`px-2.5 py-1 rounded-md font-medium transition-colors ${
          simple ? 'bg-emerald-600 text-white' : 'text-slate-500 dark:text-slate-400'
        }`}
      >
        {c.simpleModeLabel}
      </button>
      <button
        onClick={() => onChange(false)}
        className={`px-2.5 py-1 rounded-md font-medium transition-colors ${
          !simple ? 'bg-emerald-600 text-white' : 'text-slate-500 dark:text-slate-400'
        }`}
      >
        {c.detailedModeLabel}
      </button>
    </div>
  );
}
