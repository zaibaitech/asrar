import React, { useState, useMemo } from 'react';
import { ChevronDown, ChevronUp, Search } from 'lucide-react';
import { DIVINE_NAMES } from '../data/divine-names';
import { COMPAT_THEME, COMPAT_TINTS } from '../constants/compatibilityTheme';

interface AllDivineNamesBrowserProps {
  language?: 'en' | 'fr' | 'ar';
}

/** Strips scholarly transliteration diacritics so a plain-ASCII search like "latif" matches "Al-Laṭīf" — mirrors DivineNamePicker.tsx's own helper. */
function foldDiacritics(s: string): string {
  return s.normalize('NFD').replace(/[̀-ͯ]/g, '').replace(/[ʿʾ]/g, '');
}

/**
 * Browse the full 99 Names, independent of the 10 curated intentions
 * above. Deliberately NOT sourced/graded per-intention the way
 * INTENTION_NAME_MAP is — this is a plain reference list (meaning +
 * general spiritual practice, both already vetted in divine-names.ts),
 * not a claim that these are the specific classical Names for any one
 * intention. Kept visually distinct (collapsed by default, below a
 * "Browse all 99 Names" toggle) so it never reads as part of the
 * intention recommendation itself.
 */
export function AllDivineNamesBrowser({ language = 'en' }: AllDivineNamesBrowserProps) {
  const contentLang: 'en' | 'fr' = language === 'fr' ? 'fr' : 'en';
  const isFrench = contentLang === 'fr';
  const [expanded, setExpanded] = useState(false);
  const [query, setQuery] = useState('');
  const [openNumber, setOpenNumber] = useState<number | null>(null);

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
    <div className="mt-6">
      <button
        type="button"
        onClick={() => setExpanded(!expanded)}
        className="w-full flex items-center justify-between gap-3 px-4.5 py-3.5 rounded-2xl transition-colors"
        style={{ background: COMPAT_THEME.surface, border: `1px solid ${COMPAT_THEME.surfaceBorder}` }}
      >
        <div className="text-left">
          <div className="font-technical text-sm font-bold" style={{ color: COMPAT_THEME.indigo }}>
            {isFrench ? 'Parcourir les 99 Noms' : 'Browse all 99 Names'}
          </div>
          <div className="text-xs mt-0.5" style={{ color: COMPAT_THEME.muted }}>
            {isFrench
              ? "Référence générale — pas une recommandation spécifique à cette intention"
              : 'General reference — not a recommendation specific to this intention'}
          </div>
        </div>
        {expanded ? <ChevronUp className="w-4 h-4 flex-shrink-0" style={{ color: COMPAT_THEME.muted }} /> : <ChevronDown className="w-4 h-4 flex-shrink-0" style={{ color: COMPAT_THEME.muted }} />}
      </button>

      {expanded && (
        <div className="mt-3">
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

          <div className="space-y-2 max-h-[32rem] overflow-y-auto pr-1">
            {results.length === 0 && (
              <p className="text-sm text-center py-6" style={{ color: COMPAT_THEME.muted }}>
                {isFrench ? 'Aucun nom trouvé' : 'No names found'}
              </p>
            )}
            {results.map(name => {
              const isOpen = openNumber === name.number;
              return (
                <div key={name.number} className="rounded-xl overflow-hidden" style={{ border: `1px solid ${COMPAT_THEME.surfaceBorder}` }}>
                  <button
                    type="button"
                    onClick={() => setOpenNumber(isOpen ? null : name.number)}
                    className="w-full flex items-center justify-between gap-3 px-4 py-3 text-left transition-colors"
                    style={{ background: isOpen ? COMPAT_THEME.surface : '#FFFFFF' }}
                  >
                    <div className="flex items-center gap-3 min-w-0">
                      <span className="flex-shrink-0 text-xs font-technical" style={{ color: COMPAT_THEME.muted }}>{name.number}</span>
                      <div className="min-w-0">
                        <div className="flex items-center gap-2">
                          <span className="font-technical text-sm font-bold" style={{ color: COMPAT_THEME.indigo }}>{name.transliteration}</span>
                          <span dir="rtl" lang="ar" className="font-arabic text-lg">{name.arabic}</span>
                        </div>
                        <div className="text-xs truncate" style={{ color: COMPAT_THEME.muted }}>{name.translation[contentLang]}</div>
                      </div>
                    </div>
                    {isOpen ? <ChevronUp className="w-4 h-4 flex-shrink-0" style={{ color: COMPAT_THEME.muted }} /> : <ChevronDown className="w-4 h-4 flex-shrink-0" style={{ color: COMPAT_THEME.muted }} />}
                  </button>
                  {isOpen && (
                    <div className="px-4 pb-4 space-y-3" style={{ background: '#FFFFFF' }}>
                      <Section label={isFrench ? 'Signification' : 'Meaning'} text={name.meaning[contentLang]} tint="blue" />
                      <Section label={isFrench ? 'Pratique Spirituelle' : 'Spiritual Practice'} text={name.spiritualPractice[contentLang]} tint="violet" />
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}

function Section({ label, text, tint }: { label: string; text: string; tint: keyof typeof COMPAT_TINTS }) {
  const t = COMPAT_TINTS[tint];
  return (
    <section className="rounded-xl px-4 py-3" style={{ background: t.bg, border: `1px solid ${t.border}` }}>
      <div className="font-technical text-[12px] font-bold mb-1" style={{ color: t.label }}>{label}</div>
      <p className="text-[14px] leading-[1.6] m-0" style={{ color: COMPAT_THEME.ink }}>{text}</p>
    </section>
  );
}
