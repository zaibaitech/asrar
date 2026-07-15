import React from 'react';
import { SoulConnectionResult } from '../types/compatibility';
import { SOUL_CONNECTION_ARCHETYPES, SOUL_CONNECTION_SEVERITY_COLOR } from '../constants/soulConnectionArchetypes';
import { SoulConnectionRing } from './SoulConnectionRing';
import { Sparkles, Users, Info, ChevronDown, ChevronUp } from 'lucide-react';

interface SoulConnectionViewProps {
  result: SoulConnectionResult;
  language?: 'en' | 'fr' | 'ar';
}

const COPY = {
  en: {
    title: 'Soul Connection',
    subtitle: 'A traditional soul-resonance marker',
    independentChip: 'Independent metric',
    meaning: 'Meaning',
    marriageOutlook: 'Marriage Outlook',
    watchOut: 'Watch Out',
    keyToSuccess: 'Key to Success',
    howCalculated: 'How this number is calculated',
    constant: 'Constant',
    formulaNote: 'We add the two name values, add 7, then reduce to a number 1–9.',
    disclaimer: 'A reflection tool from traditional teachings — it does not replace faith, free will, or wise counsel.',
  },
  fr: {
    title: "Connexion d'Âme",
    subtitle: "Un marqueur traditionnel de résonance de l'âme",
    independentChip: 'Métrique indépendante',
    meaning: 'Signification',
    marriageOutlook: 'Perspective du Mariage',
    watchOut: 'Attention',
    keyToSuccess: 'Clé du Succès',
    howCalculated: 'Comment ce nombre est calculé',
    constant: 'Constante',
    formulaNote: 'Nous additionnons les deux valeurs de noms, ajoutons 7, puis réduisons à un nombre 1–9.',
    disclaimer: 'Un outil de réflexion des enseignements traditionnels — il ne remplace ni la foi, ni le libre arbitre, ni le conseil avisé.',
  },
  // No verbatim Arabic exists in the mobile source for this content — see
  // src/constants/soulConnectionArchetypes.ts doc comment. Fall back to
  // English structure with the fixed UI labels only (not the archetype
  // body text, which stays EN/FR).
  ar: {
    title: 'Soul Connection',
    subtitle: 'A traditional soul-resonance marker',
    independentChip: 'Independent metric',
    meaning: 'Meaning',
    marriageOutlook: 'Marriage Outlook',
    watchOut: 'Watch Out',
    keyToSuccess: 'Key to Success',
    howCalculated: 'How this number is calculated',
    constant: 'Constant',
    formulaNote: 'We add the two name values, add 7, then reduce to a number 1–9.',
    disclaimer: 'A reflection tool from traditional teachings — it does not replace faith, free will, or wise counsel.',
  },
};

export function SoulConnectionView({ result, language = 'en' }: SoulConnectionViewProps) {
  const [showCalculation, setShowCalculation] = React.useState(false);
  // Archetype body text only exists in en/fr — treat 'ar' as 'en' for
  // content lookups while still using the (English-fallback) COPY.ar labels above.
  const contentLang: 'en' | 'fr' = language === 'fr' ? 'fr' : 'en';
  const c = COPY[language] ?? COPY.en;

  const archetype = SOUL_CONNECTION_ARCHETYPES[result.soulNumber];
  const color = SOUL_CONNECTION_SEVERITY_COLOR[archetype.severity];

  return (
    <div className="space-y-6 p-8 bg-white dark:bg-slate-900 rounded-xl shadow-lg border border-slate-200 dark:border-slate-700">

      {/* Header */}
      <div className="text-center space-y-3">
        <div className="flex items-center justify-center gap-3">
          <div className="p-2 rounded-full" style={{ backgroundColor: `${color}22` }}>
            <Sparkles className="w-6 h-6" style={{ color }} />
          </div>
          <h2 className="text-3xl font-bold text-slate-900 dark:text-slate-50">{c.title}</h2>
        </div>
        <p className="text-sm text-slate-500 dark:text-slate-400">{c.subtitle}</p>
        <span
          className="inline-block px-3 py-1 rounded-full text-xs font-semibold"
          style={{ backgroundColor: `${color}18`, color }}
        >
          {c.independentChip}
        </span>

        <div className="flex items-center justify-center gap-3 text-xl font-semibold pt-2">
          <span className="text-purple-600 dark:text-purple-400">{result.person1.name}</span>
          <Users className="w-5 h-5 text-slate-400 dark:text-slate-500" />
          <span className="text-rose-600 dark:text-rose-400">{result.person2.name}</span>
        </div>
      </div>

      {/* Ring + number + archetype title */}
      <div className="flex flex-col items-center py-4">
        <div className="relative flex items-center justify-center" style={{ width: 140, height: 140 }}>
          <SoulConnectionRing value={result.soulNumber} size={140} activeColor={color} />
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <span className="text-5xl font-bold" style={{ color }}>{result.soulNumber}</span>
          </div>
        </div>
        <h3 className="mt-3 text-lg font-bold" style={{ color }}>
          {archetype.title[contentLang]}
        </h3>
        <p className="mt-1 text-sm text-slate-600 dark:text-slate-400 text-center max-w-sm">
          {archetype.oneLine[contentLang]}
        </p>
      </div>

      {/* Tags */}
      <div className="flex flex-wrap justify-center gap-2">
        {archetype.tags.map((tag, i) => (
          <span
            key={i}
            className="px-3 py-1 rounded-full text-xs font-medium"
            style={{ backgroundColor: `${color}15`, color }}
          >
            {tag[contentLang]}
          </span>
        ))}
      </div>

      {/* Meaning blocks */}
      <div className="space-y-4">
        <div className="p-5 rounded-xl border" style={{ borderColor: '#3b82f640', backgroundColor: '#3b82f60c' }}>
          <h4 className="font-bold text-sm mb-2" style={{ color: '#3b82f6' }}>{c.meaning}</h4>
          <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed">{archetype.meaning[contentLang]}</p>
        </div>

        <div className="p-5 rounded-xl border" style={{ borderColor: '#8b5cf640', backgroundColor: '#8b5cf60c' }}>
          <h4 className="font-bold text-sm mb-2" style={{ color: '#8b5cf6' }}>{c.marriageOutlook}</h4>
          <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed">{archetype.marriageOutlook[contentLang]}</p>
        </div>

        <div className="p-5 rounded-xl border" style={{ borderColor: '#f59e0b40', backgroundColor: '#f59e0b0c' }}>
          <h4 className="font-bold text-sm mb-2" style={{ color: '#f59e0b' }}>{c.watchOut}</h4>
          <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed">{archetype.watchOut[contentLang]}</p>
        </div>

        <div className="p-5 rounded-xl border" style={{ borderColor: '#22c55e40', backgroundColor: '#22c55e0c' }}>
          <h4 className="font-bold text-sm mb-2" style={{ color: '#22c55e' }}>{c.keyToSuccess}</h4>
          <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed">{archetype.keyToSuccess[contentLang]}</p>
        </div>
      </div>

      {/* Disclaimer */}
      <div className="flex items-start gap-3 p-4 bg-slate-50 dark:bg-slate-800/60 rounded-xl border border-slate-200 dark:border-slate-700">
        <Info className="w-5 h-5 text-slate-500 flex-shrink-0 mt-0.5" />
        <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">{c.disclaimer}</p>
      </div>

      {/* Collapsible calculation breakdown */}
      <div>
        <button
          onClick={() => setShowCalculation(!showCalculation)}
          className="w-full flex items-center justify-between p-4 bg-slate-50 dark:bg-slate-800/60 rounded-xl border border-slate-200 dark:border-slate-700 hover:shadow-md transition-all"
        >
          <span className="font-semibold text-sm text-slate-700 dark:text-slate-300">{c.howCalculated}</span>
          {showCalculation ? (
            <ChevronUp className="w-5 h-5 text-slate-500" />
          ) : (
            <ChevronDown className="w-5 h-5 text-slate-500" />
          )}
        </button>

        {showCalculation && (
          <div className="mt-3 p-4 bg-slate-50 dark:bg-slate-800/40 rounded-xl border border-slate-200 dark:border-slate-700 space-y-2">
            <div className="flex justify-between text-sm">
              <span dir="rtl" lang="ar" className="font-arabic text-slate-600 dark:text-slate-400">{result.person1.arabicName}</span>
              <span className="font-semibold text-slate-900 dark:text-slate-100">{result.person1.kabir}</span>
            </div>
            <div className="flex justify-between text-sm">
              <span dir="rtl" lang="ar" className="font-arabic text-slate-600 dark:text-slate-400">{result.person2.arabicName}</span>
              <span className="font-semibold text-slate-900 dark:text-slate-100">{result.person2.kabir}</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-slate-600 dark:text-slate-400">{c.constant}</span>
              <span className="font-semibold text-slate-900 dark:text-slate-100">+7</span>
            </div>
            <div className="pt-2 border-t border-slate-200 dark:border-slate-700 text-center">
              <p className="font-mono text-sm font-semibold" style={{ color }}>
                ({result.person1.kabir} + {result.person2.kabir} + 7) mod 9 = {result.soulNumber}
              </p>
              <p className="mt-2 text-xs text-slate-500 dark:text-slate-400 italic">{c.formulaNote}</p>
            </div>
          </div>
        )}
      </div>

    </div>
  );
}
