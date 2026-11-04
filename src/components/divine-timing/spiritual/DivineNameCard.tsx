'use client';

import { useLanguage } from '../../../contexts/LanguageContext';
import { Sparkles, Book } from 'lucide-react';
import { useState } from 'react';

interface DivineNameCardProps {
  planetName: string;
  divineNameData: {
    number: number;
    arabic: string;
    transliteration: string;
    meaningEn: string;
    meaningFr: string;
    spiritualQuality: string;
    spiritualQualityFr: string;
    dhikrCount: number;
    significance: string;
    significanceFr: string;
  };
  secondaryNames?: Array<{
    number: number;
    arabic: string;
    transliteration: string;
    meaningEn: string;
    meaningFr: string;
  }>;
  onOpenDhikr?: () => void;
}

export function DivineNameCard({
  planetName,
  divineNameData,
  secondaryNames,
  onOpenDhikr
}: DivineNameCardProps) {
  const { t, language, uiLanguage } = useLanguage();
  const isFr = language === 'fr';
  // On /ar the verified Arabic from the data is shown directly; the English gloss
  // is not machine-translated through the runtime catalog.
  const isArabicUi = uiLanguage === 'ar';
  const [showDetails, setShowDetails] = useState(false);

  return (
    <div className="relative overflow-hidden rounded-2xl border border-slate-200 dark:border-slate-700/50 p-6 bg-white/60 dark:bg-slate-800/40">
      {/* Islamic Geometric Pattern Overlay */}
      <div className="absolute inset-0 opacity-5 dark:opacity-10 pointer-events-none">
        <div className="absolute inset-0" style={{
          backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 10px, currentColor 10px, currentColor 11px)',
          color: 'currentColor'
        }}></div>
      </div>

      {/* Content */}
      <div className="relative z-10">
        {/* Header */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
            <span className="text-sm font-medium text-indigo-900 dark:text-indigo-200">
              {isFr ? 'Nom Divin' : 'Divine Name'}
            </span>
          </div>
          <span className="text-xs text-indigo-600 dark:text-indigo-400 font-medium">
            #{divineNameData.number}
          </span>
        </div>

        {/* Arabic Name - Large and Beautiful */}
        <div className="text-center mb-4">
          <div 
            className="text-5xl md:text-6xl font-arabic text-indigo-900 dark:text-indigo-100 mb-2 leading-relaxed"
            style={{ fontFamily: 'Amiri, Scheherazade, serif' }}
          >
            {divineNameData.arabic}
          </div>
          <div className="text-xl md:text-2xl text-indigo-700 dark:text-indigo-300 font-medium mb-1">
            {divineNameData.transliteration}
          </div>
          {!isArabicUi && (
            <div className="text-lg text-indigo-600 dark:text-indigo-400">
              {isFr ? divineNameData.meaningFr : divineNameData.meaningEn}
            </div>
          )}
        </div>

        {/* Spiritual Quality */}
        <div className="mb-4 p-3 bg-white/50 dark:bg-slate-900/30 rounded-xl border border-slate-200/50 dark:border-slate-700/30">
          <div className="text-sm text-indigo-900 dark:text-indigo-100 text-center">
            ✨ {isFr ? divineNameData.spiritualQualityFr : divineNameData.spiritualQuality}
          </div>
        </div>

        {/* Dhikr Count Suggestion */}
        <div className="mb-4 flex items-center justify-center gap-2 text-sm text-indigo-700 dark:text-indigo-300">
          <Book className="w-4 h-4" />
          <span>
            {isFr ? 'Récitation recommandée' : 'Recommended recitation'}: {divineNameData.dhikrCount}x
          </span>
        </div>

        {/* Significance - Expandable */}
        <div>
          <button
            onClick={() => setShowDetails(!showDetails)}
            className="w-full text-sm text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300 transition-colors flex items-center justify-center gap-1 mb-2 min-h-[44px]"
          >
            <span>{showDetails ? '▼' : '▶'}</span>
            <span>{isFr ? 'Signification spirituelle' : 'Spiritual Significance'}</span>
          </button>
          
          {showDetails && (
            <div className="mt-3 p-4 bg-white/60 dark:bg-slate-900/40 rounded-xl border border-slate-200/50 dark:border-slate-700/30 text-sm text-indigo-800 dark:text-indigo-200 leading-relaxed ">
              {isFr ? divineNameData.significanceFr : divineNameData.significance}
              
              {/* Secondary Names */}
              {secondaryNames && secondaryNames.length > 0 && (
                <div className="mt-4 pt-4 border-t border-slate-200/50 dark:border-slate-700/30">
                  <div className="text-xs text-indigo-600 dark:text-indigo-400 mb-2 font-medium">
                    {isFr ? 'Noms associés:' : 'Related Names:'}
                  </div>
                  <div className="space-y-1">
                    {secondaryNames.map((name) => (
                      <div key={name.number} className="flex items-center gap-2 text-xs">
                        <span className="font-arabic text-base">{name.arabic}</span>
                        <span>({name.transliteration}{!isArabicUi && <> - {isFr ? name.meaningFr : name.meaningEn}</>})</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Action Button */}
        {onOpenDhikr && (
          <button
            onClick={onOpenDhikr}
            className="mt-4 w-full py-3 text-white rounded-xl font-medium transition-all shadow-sm bg-emerald-600 hover:bg-emerald-700 min-h-[44px]"
          >
            📿 {isFr ? 'Commencer le Dhikr' : 'Begin Dhikr'}
          </button>
        )}
      </div>
    </div>
  );
}
