'use client';

import { Info } from 'lucide-react';

export function TaMarbutaToggle({ value, onChange }: { value: 'ه' | 'ة'; onChange: (v: 'ه' | 'ة') => void }) {
  return (
    <div className="flex items-center gap-2 text-sm">
      <label className="text-slate-600 dark:text-slate-400">Tāʾ Marbūṭa:</label>
      <div className="flex bg-slate-100 dark:bg-slate-700 rounded-lg p-1">
        <button
          onClick={() => onChange('ه')}
          className={`px-3 py-1 rounded transition-colors ${
            value === 'ه'
              ? 'bg-white dark:bg-slate-600 shadow-sm'
              : 'hover:bg-slate-200 dark:hover:bg-slate-600'
          }`}
          title="Maghrib practice (default)"
        >
          <span className="font-arabic text-lg">ه</span>
        </button>
        <button
          onClick={() => onChange('ة')}
          className={`px-3 py-1 rounded transition-colors ${
            value === 'ة'
              ? 'bg-white dark:bg-slate-600 shadow-sm'
              : 'hover:bg-slate-200 dark:hover:bg-slate-600'
          }`}
          title="Mashreq practice"
        >
          <span className="font-arabic text-lg">ة</span>
        </button>
      </div>
      <div
        title="Choose how tāʾ marbūṭa is counted: ه (hāʾ=5, Maghrib) or ة (tāʾ=400, Mashreq)"
        className="flex items-center"
      >
        <Info className="w-4 h-4 text-slate-400 cursor-help" />
      </div>
    </div>
  );
}
