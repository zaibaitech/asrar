/**
 * Planetary Hours – Dedicated Page Client Component
 * ==================================================
 * Full guidance page for the Chaldean planetary hour system.
 */

'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import { ArrowLeft, Clock, Sun, Moon } from 'lucide-react';
import { useLanguage } from '@/src/contexts/LanguageContext';
import { PlanetaryHourCard } from '@/src/components/planetary';
import { getUserLocation, loadLocation } from '@/src/utils/location';

// ─── Planet data for the guide ────────────────────────────────────────────────

const PLANET_GUIDE = [
  {
    key: 'Sun',
    symbol: '☉',
    arabic: 'الشمس',
    day: { en: 'Sunday', fr: 'Dimanche' },
    element: { en: 'Fire', fr: 'Feu' },
    color: 'from-yellow-400 to-orange-500',
    bg: 'bg-yellow-50 dark:bg-yellow-950/30',
    border: 'border-yellow-200 dark:border-yellow-700/40',
    text: 'text-yellow-700 dark:text-yellow-400',
    bestFor: {
      en: ['Leadership decisions', 'Visibility & reputation', 'Official matters', 'Seeking authority', 'Spiritual elevation'],
      fr: ['Décisions de direction', 'Visibilité & réputation', 'Affaires officielles', 'Recherche d\'autorité', 'Élévation spirituelle'],
    },
    avoid: {
      en: ['Hidden dealings', 'Submissive requests'],
      fr: ['Affaires cachées', 'Requêtes soumises'],
    },
    dhikr: { en: 'Yā Nūr (يا نور) · Yā Ḥayy (يا حي)', fr: 'Yā Nūr (يا نور) · Yā Ḥayy (يا حي)' },
  },
  {
    key: 'Moon',
    symbol: '☽',
    arabic: 'القمر',
    day: { en: 'Monday', fr: 'Lundi' },
    element: { en: 'Water', fr: 'Eau' },
    color: 'from-slate-300 to-slate-500',
    bg: 'bg-slate-50 dark:bg-slate-900/40',
    border: 'border-slate-200 dark:border-slate-600/40',
    text: 'text-slate-600 dark:text-slate-400',
    bestFor: {
      en: ['Travel & movement', 'Emotional healing', 'Family matters', 'Dreams & intuition', 'New beginnings'],
      fr: ['Voyage & mouvement', 'Guérison émotionnelle', 'Affaires familiales', 'Rêves & intuition', 'Nouveaux débuts'],
    },
    avoid: {
      en: ['Starting long projects', 'Confrontations'],
      fr: ['Démarrer de longs projets', 'Confrontations'],
    },
    dhikr: { en: 'Yā Laṭīf (يا لطيف) · Yā Wudd (يا ودود)', fr: 'Yā Laṭīf (يا لطيف) · Yā Wudd (يا ودود)' },
  },
  {
    key: 'Mars',
    symbol: '♂',
    arabic: 'المريخ',
    day: { en: 'Tuesday', fr: 'Mardi' },
    element: { en: 'Fire', fr: 'Feu' },
    color: 'from-red-500 to-orange-600',
    bg: 'bg-red-50 dark:bg-red-950/30',
    border: 'border-red-200 dark:border-red-700/40',
    text: 'text-red-700 dark:text-red-400',
    bestFor: {
      en: ['Courage & action', 'Physical work', 'Overcoming obstacles', 'Surgery (if needed)', 'Cutting ties'],
      fr: ['Courage & action', 'Travail physique', 'Surmonter les obstacles', 'Chirurgie (si nécessaire)', 'Couper les liens'],
    },
    avoid: {
      en: ['Marriage proposals', 'Peace negotiations', 'Financial decisions'],
      fr: ['Demandes en mariage', 'Négociations de paix', 'Décisions financières'],
    },
    dhikr: { en: 'Yā Qawiyy (يا قوي) · Yā Qahhār (يا قهار)', fr: 'Yā Qawiyy (يا قوي) · Yā Qahhār (يا قهار)' },
  },
  {
    key: 'Mercury',
    symbol: '☿',
    arabic: 'عطارد',
    day: { en: 'Wednesday', fr: 'Mercredi' },
    element: { en: 'Air', fr: 'Air' },
    color: 'from-emerald-400 to-teal-500',
    bg: 'bg-emerald-50 dark:bg-emerald-950/30',
    border: 'border-emerald-200 dark:border-emerald-700/40',
    text: 'text-emerald-700 dark:text-emerald-400',
    bestFor: {
      en: ['Study & learning', 'Writing & communication', 'Trade & contracts', 'Teaching', 'Mental work'],
      fr: ['Étude & apprentissage', 'Écriture & communication', 'Commerce & contrats', 'Enseignement', 'Travail mental'],
    },
    avoid: {
      en: ['Heavy manual labor', 'Extreme physical exertion'],
      fr: ['Travail manuel intense', 'Exertion physique extrême'],
    },
    dhikr: { en: 'Yā ʿAlīm (يا عليم) · Yā Ḥakīm (يا حكيم)', fr: 'Yā ʿAlīm (يا عليم) · Yā Ḥakīm (يا حكيم)' },
  },
  {
    key: 'Jupiter',
    symbol: '♃',
    arabic: 'المشتري',
    day: { en: 'Thursday', fr: 'Jeudi' },
    element: { en: 'Air', fr: 'Air' },
    color: 'from-amber-400 to-yellow-600',
    bg: 'bg-amber-50 dark:bg-amber-950/30',
    border: 'border-amber-200 dark:border-amber-700/40',
    text: 'text-amber-700 dark:text-amber-400',
    bestFor: {
      en: ['Wealth & abundance', 'Expansion & growth', 'Spiritual elevation', 'Long journeys', 'Higher education'],
      fr: ['Richesse & abondance', 'Expansion & croissance', 'Élévation spirituelle', 'Longs voyages', 'Enseignement supérieur'],
    },
    avoid: {
      en: ['Restrictive work', 'Confrontations'],
      fr: ['Travail restrictif', 'Confrontations'],
    },
    dhikr: { en: 'Yā Karīm (يا كريم) · Yā Wahhāb (يا وهاب)', fr: 'Yā Karīm (يا كريم) · Yā Wahhāb (يا وهاب)' },
  },
  {
    key: 'Venus',
    symbol: '♀',
    arabic: 'الزهرة',
    day: { en: 'Friday', fr: 'Vendredi' },
    element: { en: 'Earth', fr: 'Terre' },
    color: 'from-pink-400 to-rose-500',
    bg: 'bg-pink-50 dark:bg-pink-950/30',
    border: 'border-pink-200 dark:border-pink-700/40',
    text: 'text-pink-700 dark:text-pink-400',
    bestFor: {
      en: ['Love & relationships', 'Beauty & art', 'Harmony & peace', 'Social gatherings', 'Gratitude & du\'ā\''],
      fr: ['Amour & relations', 'Beauté & art', 'Harmonie & paix', 'Rassemblements sociaux', 'Gratitude & du\'ā\''],
    },
    avoid: {
      en: ['Aggressive negotiations', 'Confrontational meetings'],
      fr: ['Négociations agressives', 'Réunions conflictuelles'],
    },
    dhikr: { en: 'Yā Wadūd (يا ودود) · Yā Jamīl (يا جميل)', fr: 'Yā Wadūd (يا ودود) · Yā Jamīl (يا جميل)' },
  },
  {
    key: 'Saturn',
    symbol: '♄',
    arabic: 'زحل',
    day: { en: 'Saturday', fr: 'Samedi' },
    element: { en: 'Earth', fr: 'Terre' },
    color: 'from-slate-400 to-gray-600',
    bg: 'bg-gray-50 dark:bg-gray-900/40',
    border: 'border-gray-200 dark:border-gray-600/40',
    text: 'text-gray-600 dark:text-gray-400',
    bestFor: {
      en: ['Long-term planning', 'Discipline & structure', 'Land & property', 'Legal matters', 'Endurance practices'],
      fr: ['Planification à long terme', 'Discipline & structure', 'Terrain & propriété', 'Affaires juridiques', 'Pratiques d\'endurance'],
    },
    avoid: {
      en: ['Starting new ventures', 'Social events', 'Quick decisions'],
      fr: ['Démarrer de nouvelles aventures', 'Événements sociaux', 'Décisions rapides'],
    },
    dhikr: { en: 'Yā Ṣabūr (يا صبور) · Yā Matīn (يا متين)', fr: 'Yā Ṣabūr (يا صبور) · Yā Matīn (يا متين)' },
  },
];

// ─── Component ────────────────────────────────────────────────────────────────

export function PlanetaryHoursPage() {
  const router = useRouter();
  const { language } = useLanguage();
  const [latitude, setLatitude] = React.useState<number | undefined>(undefined);
  const [longitude, setLongitude] = React.useState<number | undefined>(undefined);

  React.useEffect(() => {
    const cached = loadLocation();
    if (cached) {
      setLatitude(cached.latitude);
      setLongitude(cached.longitude);
    }
    getUserLocation().then(loc => {
      setLatitude(loc.latitude);
      setLongitude(loc.longitude);
    }).catch(() => {});
  }, []);

  const isEn = language === 'en';

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-slate-50 dark:from-slate-900 dark:via-indigo-950/20 dark:to-slate-900">
      {/* ─── Header ─── */}
      <header className="sticky top-0 z-40 bg-white/80 dark:bg-slate-900/80 backdrop-blur-lg border-b border-indigo-200 dark:border-indigo-800/50">
        <div className="max-w-3xl mx-auto px-4 py-3 flex items-center justify-between">
          <button
            onClick={() => router.push('/')}
            className="flex items-center gap-2 px-3 py-2 -ml-3 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100 transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            <span className="text-sm font-medium hidden sm:inline">
              {isEn ? 'Back to Home' : 'Retour à l\'accueil'}
            </span>
          </button>
          <div className="flex items-center gap-2">
            <Clock className="w-5 h-5 text-indigo-500" />
            <h1 className="text-base sm:text-lg font-bold text-slate-900 dark:text-slate-100">
              {isEn ? 'Planetary Hours' : 'Heures Planétaires'}
            </h1>
            <span className="text-xs font-arabic text-slate-400 dark:text-slate-500 hidden sm:inline">الساعات الفلكية</span>
          </div>
          <div className="w-16" />
        </div>
      </header>

      <div className="max-w-3xl mx-auto px-4 py-6 space-y-8">

        {/* ─── Intro ─── */}
        <div className="bg-white/70 dark:bg-slate-800/60 rounded-2xl border border-indigo-200/60 dark:border-indigo-700/30 p-5 shadow-sm">
          <div className="flex items-start gap-3">
            <div className="text-3xl">⏰</div>
            <div>
              <h2 className="text-base font-bold text-slate-900 dark:text-slate-100 mb-1">
                {isEn ? 'What are Planetary Hours?' : 'Que sont les Heures Planétaires?'}
                <span className="ml-2 text-sm font-arabic font-normal text-slate-400 dark:text-slate-500">الساعات الكوكبية</span>
              </h2>
              <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                {isEn
                  ? 'In ʿIlm al-Nujūm (Islamic celestial science), each day and night is divided into 12 unequal hours ruled by the seven classical planets in the Chaldean order: Saturn → Jupiter → Mars → Sun → Venus → Mercury → Moon. The length of each hour changes daily with sunrise and sunset.'
                  : 'Dans l\'ʿIlm al-Nujūm (science céleste islamique), chaque jour et nuit est divisé en 12 heures inégales gouvernées par les sept planètes classiques dans l\'ordre chaldéen : Saturne → Jupiter → Mars → Soleil → Vénus → Mercure → Lune. La durée de chaque heure change quotidiennement avec le lever et le coucher du soleil.'}
              </p>
              <p className="text-xs text-indigo-600 dark:text-indigo-400 mt-2 font-medium">
                {isEn
                  ? '⚠️ For reflection & spiritual timing — not prediction. Only Allah knows the unseen.'
                  : '⚠️ Pour la réflexion & le timing spirituel — pas de prédiction. Seul Allah connaît l\'invisible.'}
              </p>
            </div>
          </div>
        </div>

        {/* ─── Live Card ─── */}
        <div>
          <h2 className="text-sm font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-3 flex items-center gap-2">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
            </span>
            {isEn ? 'Current Planetary Hour' : 'Heure Planétaire Actuelle'}
          </h2>
          <PlanetaryHourCard
            latitude={latitude}
            longitude={longitude}
            language={language}
          />
        </div>

        {/* ─── How to Use ─── */}
        <div className="bg-white/70 dark:bg-slate-800/60 rounded-2xl border border-slate-200/60 dark:border-slate-700/30 p-5 shadow-sm">
          <h2 className="text-base font-bold text-slate-900 dark:text-slate-100 mb-4">
            {isEn ? '🗓 How to Use Planetary Hours' : '🗓 Comment Utiliser les Heures Planétaires'}
          </h2>
          <div className="space-y-3">
            {[
              {
                step: '1',
                en: 'Check the current planetary hour above — note the ruling planet, element, and remaining time.',
                fr: 'Vérifiez l\'heure planétaire actuelle ci-dessus — notez la planète gouvernante, l\'élément et le temps restant.',
              },
              {
                step: '2',
                en: 'Match your intended action to the planet\'s strengths (see guide below). Schedule important activities during supportive hours.',
                fr: 'Faites correspondre votre action prévue aux forces de la planète (voir guide ci-dessous). Planifiez les activités importantes pendant les heures favorables.',
              },
              {
                step: '3',
                en: 'Begin with Bismillah and the relevant dhikr for that planet. Your intention (niyyah) is what matters most.',
                fr: 'Commencez par Bismillah et le dhikr pertinent pour cette planète. Votre intention (niyyah) est ce qui compte le plus.',
              },
              {
                step: '4',
                en: 'Use "See All Hours" to plan ahead. The first hour of the day is ruled by that day\'s planet.',
                fr: 'Utilisez "Voir toutes les heures" pour planifier à l\'avance. La première heure du jour est gouvernée par la planète de ce jour.',
              },
            ].map(item => (
              <div key={item.step} className="flex gap-3">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-indigo-100 dark:bg-indigo-900/40 text-indigo-700 dark:text-indigo-400 text-xs font-bold flex items-center justify-center">
                  {item.step}
                </div>
                <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                  {isEn ? item.en : item.fr}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* ─── Planet-by-Planet Guide ─── */}
        <div>
          <h2 className="text-base font-bold text-slate-900 dark:text-slate-100 mb-4">
            {isEn ? '🪐 Planetary Hour Guide' : '🪐 Guide des Heures Planétaires'}
          </h2>
          <div className="space-y-3">
            {PLANET_GUIDE.map(planet => (
              <div key={planet.key} className={`rounded-xl border ${planet.border} ${planet.bg} p-4`}>
                <div className="flex items-start gap-3">
                  {/* Planet symbol badge */}
                  <div className={`flex-shrink-0 w-10 h-10 rounded-full bg-gradient-to-br ${planet.color} flex items-center justify-center text-xl text-white font-bold shadow-sm`}>
                    {planet.symbol}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-baseline gap-2 flex-wrap mb-2">
                      <span className={`font-bold text-base ${planet.text}`}>{planet.key}</span>
                      <span className="text-sm font-arabic text-slate-400 dark:text-slate-500">{planet.arabic}</span>
                      <span className="text-xs text-slate-400 dark:text-slate-500">·</span>
                      <span className="text-xs text-slate-500 dark:text-slate-400">{isEn ? planet.day.en : planet.day.fr}</span>
                      <span className="text-xs text-slate-400 dark:text-slate-500">·</span>
                      <span className="text-xs text-slate-500 dark:text-slate-400">{isEn ? planet.element.en : planet.element.fr}</span>
                    </div>

                    {/* Best For */}
                    <div className="mb-2">
                      <div className="text-[10px] font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-1">
                        {isEn ? 'Best for' : 'Idéal pour'}
                      </div>
                      <div className="flex flex-wrap gap-1">
                        {(isEn ? planet.bestFor.en : planet.bestFor.fr).map((tag, i) => (
                          <span key={i} className={`text-xs px-2 py-0.5 rounded-full ${planet.bg} ${planet.text} border ${planet.border}`}>
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Dhikr recommendation */}
                    <div className="flex items-center gap-1.5 mt-2">
                      <span className="text-xs text-slate-500 dark:text-slate-400">📿</span>
                      <span className="text-xs font-arabic text-slate-600 dark:text-slate-400">
                        {isEn ? planet.dhikr.en : planet.dhikr.fr}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ─── Chaldean Order ─── */}
        <div className="bg-white/70 dark:bg-slate-800/60 rounded-2xl border border-slate-200/60 dark:border-slate-700/30 p-5 shadow-sm">
          <h2 className="text-base font-bold text-slate-900 dark:text-slate-100 mb-3">
            {isEn ? '📐 The Chaldean Order' : '📐 L\'Ordre Chaldéen'}
          </h2>
          <p className="text-sm text-slate-600 dark:text-slate-400 mb-4">
            {isEn
              ? 'The 7 planets cycle in this fixed sequence, each hour ruled by the next planet:'
              : 'Les 7 planètes se succèdent dans cette séquence fixe, chaque heure gouvernée par la planète suivante:'}
          </p>
          <div className="flex items-center gap-1 flex-wrap">
            {PLANET_GUIDE.map((p, i) => (
              <React.Fragment key={p.key}>
                <div className={`flex items-center gap-1 px-2 py-1 rounded-lg text-sm ${p.bg} ${p.border} border`}>
                  <span>{p.symbol}</span>
                  <span className={`font-medium ${p.text}`}>{p.key}</span>
                </div>
                {i < PLANET_GUIDE.length - 1 && (
                  <span className="text-slate-400 dark:text-slate-600">→</span>
                )}
              </React.Fragment>
            ))}
          </div>
          <p className="text-xs text-slate-400 dark:text-slate-500 mt-3">
            {isEn
              ? 'After Saturn, the cycle repeats from ♄ → ♃ → ♂ → ☉ → ♀ → ☿ → ☽ → ♄...'
              : 'Après Saturne, le cycle se répète depuis ♄ → ♃ → ♂ → ☉ → ♀ → ☿ → ☽ → ♄...'}
          </p>
        </div>

        {/* ─── Footer Notice ─── */}
        <div className="bg-amber-50 dark:bg-amber-950/20 rounded-xl border border-amber-200 dark:border-amber-800/40 p-4">
          <p className="text-xs text-amber-800 dark:text-amber-300 leading-relaxed">
            {isEn
              ? '⚠️ Planetary hours are a traditional tool for reflection and spiritual timing used by Islamic scholars (ʿulamā\'). They are not a form of divination (kahanah). Use them to align your efforts with natural rhythms, always relying on tawakkul (trust in Allah). Consult qualified scholars for religious rulings.'
              : '⚠️ Les heures planétaires sont un outil traditionnel de réflexion et de timing spirituel utilisé par les érudits islamiques (ʿulamā\'). Ce n\'est pas une forme de divination (kahanah). Utilisez-les pour aligner vos efforts avec les rythmes naturels, en vous appuyant toujours sur tawakkul (confiance en Allah). Consultez des érudits qualifiés pour des avis religieux.'}
          </p>
        </div>
      </div>
    </div>
  );
}
