import React from 'react';
import { AstrologicalCompatibility } from '../types/compatibility';
import { CompatibilityGauge } from './CompatibilityGauge';
import { Heart, Users, Info, AlertTriangle } from 'lucide-react';
import { getScoreRange } from '../constants/compatibilitySimpleLanguage';
import { ZODIAC_DATA } from '../lib/planetary/constants';

interface AstrologicalCompatibilityViewProps {
  compatibility: AstrologicalCompatibility;
  language?: 'en' | 'fr' | 'ar';
}

const COPY = {
  en: {
    title: 'How Well Do You Match?',
    disclaimer: 'General astrological compatibility (Sun sign, Moon sign, Venus-Mars) — not a classical ʿIlm al-Nujūm technique. Classical Islamic astrology times a marriage rather than scores two birthdates against each other; see the Ikhtiyārāt (Best Dates) feature for that.',
    matchStrength: 'Your Match Strength',
    breakdown: 'Breakdown',
    sunSign: 'Sun Sign',
    moonSign: 'Moon Sign',
    venusMars: 'Attraction (Venus–Mars)',
    uncertainNote: "One birth date falls close to a Moon sign change — without an exact birth time, the Moon sign shown may not be exact.",
  },
  fr: {
    title: 'Quelle Est Votre Compatibilité ?',
    disclaimer: "Compatibilité astrologique générale (signe solaire, lunaire, Vénus-Mars) — ce n'est pas une technique classique de ʿIlm al-Nujūm. L'astrologie islamique classique choisit le moment du mariage plutôt que de comparer deux dates de naissance ; voir la fonctionnalité Ikhtiyārāt (Meilleures Dates) pour cela.",
    matchStrength: 'Force de Votre Compatibilité',
    breakdown: 'Détail',
    sunSign: 'Signe Solaire',
    moonSign: 'Signe Lunaire',
    venusMars: 'Attraction (Vénus-Mars)',
    uncertainNote: "Une des dates de naissance est proche d'un changement de signe lunaire — sans heure de naissance exacte, le signe lunaire affiché pourrait être imprécis.",
  },
  ar: {
    title: 'ما مدى توافقكما؟',
    disclaimer: 'توافق فلكي عام (برج الشمس، برج القمر، الزهرة-المريخ) — وليس أسلوبًا كلاسيكيًا من علم النجوم. علم النجوم الإسلامي الكلاسيكي يختار وقت الزواج بدلاً من مقارنة تاريخي ميلاد — راجع ميزة الاختيارات (أفضل التواريخ) لذلك.',
    matchStrength: 'قوة التوافق',
    breakdown: 'التفاصيل',
    sunSign: 'برج الشمس',
    moonSign: 'برج القمر',
    venusMars: 'الانجذاب (الزهرة-المريخ)',
    uncertainNote: 'أحد تاريخي الميلاد قريب من تغيّر برج القمر — دون وقت ميلاد دقيق، قد لا يكون برج القمر المعروض دقيقًا.',
  },
};

const qualityColors: Record<AstrologicalCompatibility['overallQuality'], string> = {
  'excellent': 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400 border-green-200 dark:border-green-800',
  'very-good': 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400 border-blue-200 dark:border-blue-800',
  'good': 'bg-sky-100 text-sky-800 dark:bg-sky-900/30 dark:text-sky-400 border-sky-200 dark:border-sky-800',
  'moderate': 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400 border-yellow-200 dark:border-yellow-800',
  'challenging': 'bg-orange-100 text-orange-800 dark:bg-orange-900/30 dark:text-orange-400 border-orange-200 dark:border-orange-800',
};

export function AstrologicalCompatibilityView({ compatibility, language = 'en' }: AstrologicalCompatibilityViewProps) {
  const c = COPY[language];
  const { person1, person2, methods, overallScore, overallQuality } = compatibility;
  const scoreRange = getScoreRange(overallScore, language);

  return (
    <div className="space-y-8 p-8 bg-white dark:bg-slate-900 rounded-xl shadow-lg border border-slate-200 dark:border-slate-700">

      {/* Header */}
      <div className="text-center space-y-4">
        <div className="flex items-center justify-center gap-3">
          <Heart className="w-10 h-10 text-rose-500" />
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-slate-50">
            {c.title}
          </h2>
        </div>

        <div className="flex items-center justify-center gap-4 text-2xl font-semibold">
          <span className="text-purple-600 dark:text-purple-400">{person1.name}</span>
          <Users className="w-6 h-6 text-slate-400 dark:text-slate-500" />
          <span className="text-rose-600 dark:text-rose-400">{person2.name}</span>
        </div>
      </div>

      {/* Not-ʿIlm-al-Nujūm disclaimer */}
      <div className="flex items-start gap-3 p-4 bg-slate-50 dark:bg-slate-800/60 rounded-xl border border-slate-200 dark:border-slate-700">
        <Info className="w-5 h-5 text-slate-500 flex-shrink-0 mt-0.5" />
        <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">{c.disclaimer}</p>
      </div>

      {/* Overall Score */}
      <div className="flex flex-col items-center py-8 bg-gradient-to-br from-purple-50 to-rose-50 dark:from-purple-950/30 dark:to-rose-950/30 rounded-xl border border-purple-200 dark:border-purple-800">
        <h3 className="text-xl font-bold text-slate-900 dark:text-slate-50 mb-4">
          {c.matchStrength}
        </h3>

        <CompatibilityGauge score={overallScore} size="lg" />

        <div className={`mt-5 px-6 py-3 rounded-full font-bold text-lg border-2 ${qualityColors[overallQuality]}`}>
          {scoreRange.icon} {scoreRange.label}
        </div>

        <p className="mt-3 text-sm text-slate-600 dark:text-slate-400 text-center max-w-md">
          {scoreRange.description}
        </p>
      </div>

      {/* Breakdown */}
      <div className="space-y-5">
        <h3 className="text-xl font-bold text-slate-900 dark:text-slate-50">{c.breakdown}</h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          {/* Sun Sign */}
          <div className="p-6 bg-amber-50 dark:bg-amber-950/30 rounded-xl border border-amber-200 dark:border-amber-800 space-y-4">
            <div className="flex items-center justify-center">
              <CompatibilityGauge score={methods.sunSign.score} size="md" />
            </div>
            <div className="text-center">
              <h4 className="font-bold text-slate-900 dark:text-slate-50 text-lg mb-1">
                ☀️ {c.sunSign}
              </h4>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                {ZODIAC_DATA[methods.sunSign.person1Sign].symbol} {methods.sunSign.person1Sign} × {ZODIAC_DATA[methods.sunSign.person2Sign].symbol} {methods.sunSign.person2Sign}
              </p>
            </div>
            <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
              {methods.sunSign.description}
            </p>
          </div>

          {/* Moon Sign */}
          <div className="p-6 bg-indigo-50 dark:bg-indigo-950/30 rounded-xl border border-indigo-200 dark:border-indigo-800 space-y-4">
            <div className="flex items-center justify-center">
              <CompatibilityGauge score={methods.moonSign.score} size="md" />
            </div>
            <div className="text-center">
              <h4 className="font-bold text-slate-900 dark:text-slate-50 text-lg mb-1">
                🌙 {c.moonSign}
              </h4>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                {ZODIAC_DATA[methods.moonSign.person1Sign].symbol} {methods.moonSign.person1Sign} × {ZODIAC_DATA[methods.moonSign.person2Sign].symbol} {methods.moonSign.person2Sign}
              </p>
            </div>
            <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
              {methods.moonSign.description}
            </p>
            {methods.moonSign.uncertain && (
              <div className="flex items-start gap-2 p-2.5 bg-amber-100 dark:bg-amber-950/40 rounded-lg border border-amber-300 dark:border-amber-800">
                <AlertTriangle className="w-4 h-4 text-amber-600 dark:text-amber-400 flex-shrink-0 mt-0.5" />
                <p className="text-xs text-amber-800 dark:text-amber-300">{c.uncertainNote}</p>
              </div>
            )}
          </div>

          {/* Venus-Mars */}
          <div className="p-6 bg-rose-50 dark:bg-rose-950/30 rounded-xl border border-rose-200 dark:border-rose-800 space-y-4">
            <div className="flex items-center justify-center">
              <CompatibilityGauge score={methods.venusMars.score} size="md" />
            </div>
            <div className="text-center">
              <h4 className="font-bold text-slate-900 dark:text-slate-50 text-lg mb-1">
                💫 {c.venusMars}
              </h4>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                ♀ {methods.venusMars.person1VenusSign} × ♂ {methods.venusMars.person2MarsSign}
              </p>
            </div>
            <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
              {methods.venusMars.description}
            </p>
          </div>

        </div>
      </div>

    </div>
  );
}
