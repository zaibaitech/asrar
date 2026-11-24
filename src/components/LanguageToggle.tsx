'use client';

import { usePathname } from 'next/navigation';
import { useLanguage } from '../contexts/LanguageContext';
import type { Language } from '../lib/translations';
import { toLang, trackEvent } from '../lib/analytics';
import { equivalentLocalePath } from '../lib/i18nRoutes';

const OPTIONS: { code: Language; label: string; title: string }[] = [
  { code: 'en', label: 'EN', title: 'English' },
  { code: 'fr', label: 'FR', title: 'Français' },
  { code: 'ar', label: 'AR', title: 'العربية' },
  { code: 'ur', label: 'اردو', title: 'اردو' },
];

function optionClass(active: boolean): string {
  return `px-3 py-1.5 rounded-md font-medium text-sm transition-all ${
    active
      ? 'bg-indigo-600 text-white shadow-sm'
      : 'bg-transparent text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
  }`;
}

export default function LanguageToggle() {
  const { uiLanguage, setLanguage } = useLanguage();
  const pathname = usePathname() || '/';

  const switchTo = (code: Language) => {
    if (code !== uiLanguage) trackEvent('language_switch', { from: toLang(uiLanguage), to: toLang(code) });
    setLanguage(code);
  };

  return (
    <div className="flex items-center gap-1 bg-slate-100 dark:bg-slate-800 rounded-lg p-1">
      {OPTIONS.map((o) => {
        const href = equivalentLocalePath(pathname, o.code);
        const active = uiLanguage === o.code;
        const className = optionClass(active);
        if (href) {
          return (
            <a
              key={o.code}
              href={href}
              hrefLang={o.code}
              title={o.title}
              aria-pressed={active}
              className={className}
              onClick={() => switchTo(o.code)}
            >
              {o.label}
            </a>
          );
        }
        return (
          <button
            key={o.code}
            type="button"
            onClick={() => switchTo(o.code)}
            title={o.title}
            aria-pressed={active}
            className={className}
          >
            {o.label}
          </button>
        );
      })}
    </div>
  );
}
