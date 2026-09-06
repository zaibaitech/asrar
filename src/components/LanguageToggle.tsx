'use client';

import { useLanguage } from '../contexts/LanguageContext';

export default function LanguageToggle() {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="flex items-center gap-1 bg-navy-card rounded-lg p-1">
      <button
        onClick={() => setLanguage('en')}
        className={`px-3 py-1.5 rounded-md font-medium text-sm transition-all ${
          language === 'en'
            ? 'bg-gold text-navy shadow-sm'
            : 'bg-transparent text-slate-300 hover:bg-white/10'
        }`}
      >
        EN
      </button>
      <button
        onClick={() => setLanguage('fr')}
        className={`px-3 py-1.5 rounded-md font-medium text-sm transition-all ${
          language === 'fr'
            ? 'bg-gold text-navy shadow-sm'
            : 'bg-transparent text-slate-300 hover:bg-white/10'
        }`}
      >
        FR
      </button>
    </div>
  );
}
