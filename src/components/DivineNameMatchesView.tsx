import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { DivineNameMatch } from '../utils/divineNameConnection';
import { DivineNameConnectionResult } from '../types/compatibility';
import { calculateDivineNameConnection } from '../utils/divineNameConnection';
import { SOUL_CONNECTION_SEVERITY_COLOR, SoulConnectionSeverity } from '../constants/soulConnectionArchetypes';
import { COMPAT_THEME } from '../constants/compatibilityTheme';
import { DivineNameConnectionView } from './DivineNameConnectionView';

interface DivineNameMatchesViewProps {
  person: { name: string; arabicName: string; kabir: number };
  matches: DivineNameMatch[];
  language?: 'en' | 'fr' | 'ar';
}

const SEVERITY_LABEL: Record<SoulConnectionSeverity, { en: string; fr: string }> = {
  green: { en: 'Strong resonance', fr: 'Résonance forte' },
  amber: { en: 'Workable resonance', fr: 'Résonance praticable' },
  red: { en: 'Needs discipline', fr: 'Demande de la discipline' },
};

export function DivineNameMatchesView({ person, matches, language = 'en' }: DivineNameMatchesViewProps) {
  const contentLang: 'en' | 'fr' = language === 'fr' ? 'fr' : 'en';
  const isFrench = language === 'fr';
  const [expandedNumber, setExpandedNumber] = useState<number | null>(matches[0]?.divineName.number ?? null);

  const greenMatches = matches.filter(m => m.severity === 'green');
  const topMatches = greenMatches.length > 0 ? greenMatches : matches.slice(0, 9);

  return (
    <div
      className="rounded-3xl overflow-hidden"
      style={{ background: COMPAT_THEME.cardBg, border: `1px solid ${COMPAT_THEME.cardBorder}`, boxShadow: '0 10px 40px rgba(49,46,129,.06)' }}
    >
      <div className="max-w-2xl mx-auto px-6 py-14" style={{ color: COMPAT_THEME.ink }}>
        <header className="text-center mb-10">
          <div className="font-technical text-[11px] tracking-[4px] font-bold" style={{ color: COMPAT_THEME.indigo }}>
            {isFrench ? 'ASRĀR · COMPATIBILITÉ' : 'ASRĀR · COMPATIBILITY'}
          </div>
          <h1 className="font-display font-semibold text-4xl mt-3.5 leading-tight">
            {isFrench ? 'Vos Meilleurs Noms' : 'Your Best Names'}
          </h1>
          <p className="text-sm mt-2.5" style={{ color: COMPAT_THEME.muted }}>
            {isFrench
              ? `${greenMatches.length} sur 99 Noms résonnent fortement avec ${person.name}`
              : `${greenMatches.length} of 99 Names resonate strongly with ${person.name}`}
          </p>
        </header>

        <div className="space-y-3">
          {topMatches.map(match => {
            const isExpanded = expandedNumber === match.divineName.number;
            const color = SOUL_CONNECTION_SEVERITY_COLOR[match.severity];
            const result: DivineNameConnectionResult = calculateDivineNameConnection(
              person.name, person.arabicName, person.kabir, match.divineName
            );
            return (
              <div key={match.divineName.number} className="rounded-2xl overflow-hidden" style={{ border: `1px solid ${COMPAT_THEME.surfaceBorder}` }}>
                <button
                  type="button"
                  onClick={() => setExpandedNumber(isExpanded ? null : match.divineName.number)}
                  className="w-full flex items-center justify-between gap-3 px-5 py-4 text-left transition-colors"
                  style={{ background: COMPAT_THEME.surface }}
                >
                  <div className="flex items-center gap-3 min-w-0">
                    <span
                      className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center font-technical font-bold text-sm text-white"
                      style={{ background: color }}
                    >
                      {match.soulNumber}
                    </span>
                    <div className="min-w-0">
                      <div className="flex items-center gap-2">
                        <span className="font-technical text-sm font-bold" style={{ color: COMPAT_THEME.indigo }}>
                          {match.divineName.transliteration}
                        </span>
                        <span dir="rtl" lang="ar" className="font-arabic text-lg">{match.divineName.arabic}</span>
                      </div>
                      <div className="text-xs" style={{ color }}>
                        {SEVERITY_LABEL[match.severity][contentLang]}
                      </div>
                    </div>
                  </div>
                  {isExpanded ? <ChevronUp className="w-4 h-4 flex-shrink-0" style={{ color: COMPAT_THEME.muted }} /> : <ChevronDown className="w-4 h-4 flex-shrink-0" style={{ color: COMPAT_THEME.muted }} />}
                </button>
                {isExpanded && (
                  <div className="px-5 pb-5" style={{ background: '#FFFFFF' }}>
                    <DivineNameConnectionView result={result} language={language} compact />
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
