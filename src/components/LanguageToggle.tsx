'use client';

import { useLanguage } from '../contexts/LanguageContext';
import type { Language } from '../lib/translations';
import { toLang, trackEvent } from '../lib/analytics';

const OPTIONS: { code: Language; label: string; title: string }[] = [
  { code: 'en', label: 'EN', title: 'English' },
  { code: 'fr', label: 'FR', title: 'Français' },
  { code: 'ar', label: 'AR', title: 'العربية' },
  { code: 'ur', label: 'اردو', title: 'اردو' },
];

export default function LanguageToggle() {
  const { uiLanguage, setLanguage } = useLanguage();

  return (
    <div className="flex items-center gap-1 bg-slate-100 dark:bg-slate-800 rounded-lg p-1">
      {OPTIONS.map((o) => (
        <button
          key={o.code}
          onClick={() => {
            if (o.code !== uiLanguage) trackEvent('language_switch', { from: toLang(uiLanguage), to: toLang(o.code) });
            setLanguage(o.code);
          }}
          title={o.title}
          aria-pressed={uiLanguage === o.code}
          className={`px-3 py-1.5 rounded-md font-medium text-sm transition-all ${
            uiLanguage === o.code
              ? 'bg-indigo-600 text-white shadow-sm'
              : 'bg-transparent text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
          }`}
        >
          {o.label}
        </button>
      ))}
    </div>
  );
}
