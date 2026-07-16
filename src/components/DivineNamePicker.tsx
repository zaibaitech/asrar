'use client';

import React, { useState, useMemo } from 'react';
import { Search } from 'lucide-react';
import { DIVINE_NAMES, DivineName } from '../data/divine-names';
import { COMPAT_THEME } from '../constants/compatibilityTheme';

interface DivineNamePickerProps {
  selected: DivineName | null;
  onSelect: (name: DivineName) => void;
  language?: 'en' | 'fr' | 'ar';
}

/** Strips scholarly transliteration diacritics (ā/ḥ/ṣ/ṭ/ẓ/ʿ/ʾ/etc.) so a plain-ASCII search like "latif" matches "Al-Laṭīf". */
function foldDiacritics(s: string): string {
  return s.normalize('NFD').replace(/[̀-ͯ]/g, '').replace(/[ʿʾ]/g, '');
}

export function DivineNamePicker({ selected, onSelect, language = 'en' }: DivineNamePickerProps) {
  const isFrench = language === 'fr';
  const [query, setQuery] = useState('');

  const results = useMemo(() => {
    const q = foldDiacritics(query.trim().toLowerCase());
    if (!q) return DIVINE_NAMES;
    return DIVINE_NAMES.filter(name =>
      foldDiacritics(name.transliteration.toLowerCase()).includes(q) ||
      name.translation.en.toLowerCase().includes(q) ||
      name.translation.fr.toLowerCase().includes(q) ||
      name.keywords.some(k => k.includes(q))
    );
  }, [query]);

  return (
    <div>
      <div className="relative mb-3">
        <div className="absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none">
          <Search className="w-4 h-4" style={{ color: COMPAT_THEME.muted }} />
        </div>
        <input
          type="text"
          value={query}
          onChange={e => setQuery(e.target.value)}
          placeholder={isFrench ? 'Rechercher : Ar-Raḥmān, Lumière, guérison...' : 'Search: Ar-Raḥmān, Light, healing...'}
          className="w-full pl-10 pr-4 py-2.5 rounded-lg text-sm focus:outline-none focus:ring-1"
          style={{ background: '#FFFFFF', border: `1px solid ${COMPAT_THEME.line}`, color: COMPAT_THEME.ink }}
        />
      </div>

      <div
        className="rounded-xl max-h-72 overflow-y-auto divide-y"
        style={{ border: `1px solid ${COMPAT_THEME.surfaceBorder}`, background: '#FFFFFF' }}
      >
        {results.length === 0 && (
          <p className="text-sm text-center py-6" style={{ color: COMPAT_THEME.muted }}>
            {isFrench ? 'Aucun nom trouvé' : 'No names found'}
          </p>
        )}
        {results.map(name => {
          const active = selected?.number === name.number;
          return (
            <button
              key={name.number}
              type="button"
              onClick={() => onSelect(name)}
              className="w-full flex items-center justify-between gap-3 px-4 py-3 text-left transition-colors"
              style={{
                background: active ? COMPAT_THEME.surface : 'transparent',
                borderColor: COMPAT_THEME.line,
              }}
            >
              <div className="min-w-0">
                <div className="flex items-center gap-2">
                  <span className="font-technical text-sm font-bold" style={{ color: COMPAT_THEME.indigo }}>
                    {name.transliteration}
                  </span>
                  <span dir="rtl" lang="ar" className="font-arabic text-lg" style={{ color: COMPAT_THEME.ink }}>
                    {name.arabic}
                  </span>
                </div>
                <div className="text-xs truncate" style={{ color: COMPAT_THEME.muted }}>
                  {name.translation[isFrench ? 'fr' : 'en']}
                </div>
              </div>
              {active && (
                <span
                  className="flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center text-xs font-bold"
                  style={{ background: COMPAT_THEME.ctaGradient, color: '#fff' }}
                >
                  ✓
                </span>
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
}
