/**
 * Planet of the Day – Dedicated Page Client Component
 * ====================================================
 * Full guidance page for the daily ruling planet.
 */

'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import { ArrowLeft, Sun } from 'lucide-react';
import { useLanguage } from '@/src/contexts/LanguageContext';
import { PlanetOfTheDay } from '@/src/components/planetary';

// ─── All 7 planets with their day, qualities, and detailed guidance ───────────

const SEVEN_PLANETS = [
  {
    key: 'Sun',
    symbol: '☉',
    arabic: 'الشمس',
    day: { en: 'Sunday', fr: 'Dimanche' },
    dayArabic: 'الأحد',
    element: { en: 'Fire ♦ Masculine', fr: 'Feu ♦ Masculin' },
    color: 'from-yellow-400 to-orange-500',
    bg: 'bg-gradient-to-br from-yellow-50 to-orange-50 dark:from-yellow-950/30 dark:to-orange-950/20',
    border: 'border-yellow-200 dark:border-yellow-700/40',
    text: 'text-yellow-700 dark:text-yellow-400',
    qualities: {
      en: 'Vitality, authority, fame, clarity, honour, generosity, willpower',
      fr: 'Vitalité, autorité, renommée, clarté, honneur, générosité, volonté',
    },
    body: { en: 'Heart, eyes, spine', fr: 'Cœur, yeux, colonne vertébrale' },
    guidance: {
      en: 'The Sun\'s day is best for bold, visible action. Begin projects you want recognized. Seek blessings from those in authority. Make decisions that require confidence and leadership. Avoid hiding or working in secrecy — the Sun illuminates.',
      fr: 'Le jour du Soleil est idéal pour les actions audacieuses et visibles. Commencez des projets que vous voulez faire reconnaître. Cherchez les bénédictions de ceux qui ont l\'autorité. Prenez des décisions qui nécessitent confiance et leadership. Évitez de vous cacher ou de travailler en secret — le Soleil illumine.',
    },
    dhikr: 'يا نور · يا حي · يا قيوم',
    dhikrLatin: 'Yā Nūr · Yā Ḥayy · Yā Qayyūm',
    rulingSign: { en: 'Leo ♌', fr: 'Lion ♌' },
    exaltation: { en: 'Aries ♈', fr: 'Bélier ♈' },
  },
  {
    key: 'Moon',
    symbol: '☽',
    arabic: 'القمر',
    day: { en: 'Monday', fr: 'Lundi' },
    dayArabic: 'الإثنين',
    element: { en: 'Water ♦ Feminine', fr: 'Eau ♦ Féminin' },
    color: 'from-slate-300 to-blue-400',
    bg: 'bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-900/40 dark:to-blue-950/20',
    border: 'border-blue-200 dark:border-blue-700/40',
    text: 'text-blue-600 dark:text-blue-400',
    qualities: {
      en: 'Emotions, intuition, memory, nurturing, cycles, dreams, receptivity',
      fr: 'Émotions, intuition, mémoire, soin, cycles, rêves, réceptivité',
    },
    body: { en: 'Brain, stomach, uterus, fluids', fr: 'Cerveau, estomac, utérus, fluides' },
    guidance: {
      en: 'Monday is ideal for matters of the home, family, and emotional wellbeing. Engage in travel or movement — the Moon governs journeys. Practice emotional healing, prayer, and du\'ā\'. Reflect on your inner world. Avoid confrontation; the Moon\'s waters prefer calm.',
      fr: 'Le lundi est idéal pour les affaires du foyer, de la famille et du bien-être émotionnel. Engagez-vous dans le voyage ou le mouvement — la Lune gouverne les voyages. Pratiquez la guérison émotionnelle, la prière et le du\'ā\'. Réfléchissez à votre monde intérieur. Évitez les confrontations; les eaux de la Lune préfèrent le calme.',
    },
    dhikr: 'يا لطيف · يا ودود · يا رحيم',
    dhikrLatin: 'Yā Laṭīf · Yā Wadūd · Yā Raḥīm',
    rulingSign: { en: 'Cancer ♋', fr: 'Cancer ♋' },
    exaltation: { en: 'Taurus ♉', fr: 'Taureau ♉' },
  },
  {
    key: 'Mars',
    symbol: '♂',
    arabic: 'المريخ',
    day: { en: 'Tuesday', fr: 'Mardi' },
    dayArabic: 'الثلاثاء',
    element: { en: 'Fire ♦ Masculine', fr: 'Feu ♦ Masculin' },
    color: 'from-red-500 to-orange-600',
    bg: 'bg-gradient-to-br from-red-50 to-orange-50 dark:from-red-950/30 dark:to-orange-950/20',
    border: 'border-red-200 dark:border-red-700/40',
    text: 'text-red-700 dark:text-red-400',
    qualities: {
      en: 'Courage, energy, action, conflict, drive, assertion, cutting through obstacles',
      fr: 'Courage, énergie, action, conflit, dynamisme, affirmation, surmonter les obstacles',
    },
    body: { en: 'Muscles, blood, head', fr: 'Muscles, sang, tête' },
    guidance: {
      en: 'Tuesday strengthens courage and decisive action. Tackle difficult tasks requiring force or conviction. Physical training, surgery if medically required, and overcoming fears align with Mars. Channel Mars energy into productive determination — not aggression. Start with Bismillah and firm niyyah.',
      fr: 'Le mardi renforce le courage et l\'action décisive. Attaquez-vous aux tâches difficiles nécessitant de la force ou de la conviction. L\'entraînement physique, la chirurgie si médicalement nécessaire, et surmonter les peurs s\'alignent avec Mars. Canalisez l\'énergie martiale dans une détermination productive — pas dans l\'agression. Commencez par Bismillah et une niyyah ferme.',
    },
    dhikr: 'يا قوي · يا قهار · يا عزيز',
    dhikrLatin: 'Yā Qawiyy · Yā Qahhār · Yā ʿAzīz',
    rulingSign: { en: 'Aries ♈ & Scorpio ♏', fr: 'Bélier ♈ & Scorpion ♏' },
    exaltation: { en: 'Capricorn ♑', fr: 'Capricorne ♑' },
  },
  {
    key: 'Mercury',
    symbol: '☿',
    arabic: 'عطارد',
    day: { en: 'Wednesday', fr: 'Mercredi' },
    dayArabic: 'الأربعاء',
    element: { en: 'Air ♦ Neutral', fr: 'Air ♦ Neutre' },
    color: 'from-emerald-400 to-teal-500',
    bg: 'bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-emerald-950/30 dark:to-teal-950/20',
    border: 'border-emerald-200 dark:border-emerald-700/40',
    text: 'text-emerald-700 dark:text-emerald-400',
    qualities: {
      en: 'Intellect, communication, trade, learning, adaptability, writing, wit',
      fr: 'Intellect, communication, commerce, apprentissage, adaptabilité, écriture, esprit',
    },
    body: { en: 'Nervous system, hands, lungs', fr: 'Système nerveux, mains, poumons' },
    guidance: {
      en: 'Wednesday is the day of the scholar and the merchant. Ideal for studying, writing, signing contracts, teaching, and all forms of communication. Engage the mind — read, research, debate. Mercury rewards precision and clarity. This is also an excellent day for Zikr that involves recitation (tilāwah).',
      fr: 'Le mercredi est le jour de l\'érudit et du marchand. Idéal pour étudier, écrire, signer des contrats, enseigner et toutes formes de communication. Engagez l\'esprit — lisez, cherchez, débattez. Mercure récompense la précision et la clarté. C\'est aussi un excellent jour pour le Zikr impliquant la récitation (tilāwah).',
    },
    dhikr: 'يا عليم · يا حكيم · يا خبير',
    dhikrLatin: 'Yā ʿAlīm · Yā Ḥakīm · Yā Khabīr',
    rulingSign: { en: 'Gemini ♊ & Virgo ♍', fr: 'Gémeaux ♊ & Vierge ♍' },
    exaltation: { en: 'Virgo ♍', fr: 'Vierge ♍' },
  },
  {
    key: 'Jupiter',
    symbol: '♃',
    arabic: 'المشتري',
    day: { en: 'Thursday', fr: 'Jeudi' },
    dayArabic: 'الخميس',
    element: { en: 'Air ♦ Masculine', fr: 'Air ♦ Masculin' },
    color: 'from-amber-400 to-yellow-600',
    bg: 'bg-gradient-to-br from-amber-50 to-yellow-50 dark:from-amber-950/30 dark:to-yellow-950/20',
    border: 'border-amber-200 dark:border-amber-700/40',
    text: 'text-amber-700 dark:text-amber-400',
    qualities: {
      en: 'Expansion, wisdom, generosity, justice, abundance, growth, spirituality',
      fr: 'Expansion, sagesse, générosité, justice, abondance, croissance, spiritualité',
    },
    body: { en: 'Liver, hips, thighs', fr: 'Foie, hanches, cuisses' },
    guidance: {
      en: 'Thursday is the most blessed day for spiritual elevation, wealth-seeking, and expansion. Make du\'ā\' for rizq (sustenance). Begin long-term projects. Seek knowledge, visit scholars, and perform generous acts of sadaqah. Thursday night (eve of Friday) is especially blessed — use it for extra worship.',
      fr: 'Le jeudi est le jour le plus béni pour l\'élévation spirituelle, la recherche de richesse et l\'expansion. Faites du\'ā\' pour le rizq (subsistance). Commencez des projets à long terme. Cherchez la connaissance, visitez les érudits, et accomplissez des actes généreux de sadaqah. La nuit du jeudi (veille du vendredi) est particulièrement bénie — utilisez-la pour un culte supplémentaire.',
    },
    dhikr: 'يا كريم · يا وهاب · يا رزاق',
    dhikrLatin: 'Yā Karīm · Yā Wahhāb · Yā Razzāq',
    rulingSign: { en: 'Sagittarius ♐ & Pisces ♓', fr: 'Sagittaire ♐ & Poissons ♓' },
    exaltation: { en: 'Cancer ♋', fr: 'Cancer ♋' },
  },
  {
    key: 'Venus',
    symbol: '♀',
    arabic: 'الزهرة',
    day: { en: 'Friday', fr: 'Vendredi' },
    dayArabic: 'الجمعة',
    element: { en: 'Earth ♦ Feminine', fr: 'Terre ♦ Féminin' },
    color: 'from-pink-400 to-rose-500',
    bg: 'bg-gradient-to-br from-pink-50 to-rose-50 dark:from-pink-950/30 dark:to-rose-950/20',
    border: 'border-pink-200 dark:border-pink-700/40',
    text: 'text-pink-700 dark:text-pink-400',
    qualities: {
      en: 'Love, beauty, harmony, art, pleasure, relationships, grace',
      fr: 'Amour, beauté, harmonie, art, plaisir, relations, grâce',
    },
    body: { en: 'Kidneys, skin, throat', fr: 'Reins, peau, gorge' },
    guidance: {
      en: 'Friday is the most sacred day in Islam (Yawm al-Jum\'ah). Venus and Friday align in beauty, community, and gratitude. Attend Jumu\'ah, send abundant Ṣalawāt upon the Prophet ﷺ, and perform acts of beauty (charity, kind words, reconciliation). It is a day for love, forgiveness, and peace.',
      fr: 'Le vendredi est le jour le plus sacré en Islam (Yawm al-Jum\'ah). Vénus et le vendredi s\'alignent dans la beauté, la communauté et la gratitude. Assistez au Jumu\'ah, envoyez d\'abondantes Ṣalawāt sur le Prophète ﷺ, et accomplissez des actes de beauté (charité, paroles gentilles, réconciliation). C\'est un jour d\'amour, de pardon et de paix.',
    },
    dhikr: 'يا ودود · يا جميل · اللهم صل على سيدنا محمد',
    dhikrLatin: 'Yā Wadūd · Yā Jamīl · Ṣalawāt upon the Prophet ﷺ',
    rulingSign: { en: 'Taurus ♉ & Libra ♎', fr: 'Taureau ♉ & Balance ♎' },
    exaltation: { en: 'Pisces ♓', fr: 'Poissons ♓' },
  },
  {
    key: 'Saturn',
    symbol: '♄',
    arabic: 'زحل',
    day: { en: 'Saturday', fr: 'Samedi' },
    dayArabic: 'السبت',
    element: { en: 'Earth ♦ Masculine', fr: 'Terre ♦ Masculin' },
    color: 'from-slate-400 to-gray-600',
    bg: 'bg-gradient-to-br from-gray-50 to-slate-100 dark:from-gray-900/40 dark:to-slate-900/40',
    border: 'border-gray-200 dark:border-gray-600/40',
    text: 'text-gray-600 dark:text-gray-400',
    qualities: {
      en: 'Discipline, structure, patience, endurance, limitation, mastery, wisdom through hardship',
      fr: 'Discipline, structure, patience, endurance, limitation, maîtrise, sagesse par l\'épreuve',
    },
    body: { en: 'Bones, teeth, joints, skin', fr: 'Os, dents, articulations, peau' },
    guidance: {
      en: 'Saturday is governed by the slowest and most disciplined of the classical planets. It is a day for long-term commitments, serious study, and patient effort. Engage in property matters, legal affairs, and building lasting structures. Avoid rushing — Saturn rewards consistent, sustained effort over time.',
      fr: 'Le samedi est gouverné par la plus lente et la plus disciplinée des planètes classiques. C\'est un jour pour les engagements à long terme, les études sérieuses et les efforts patients. Engagez-vous dans les affaires immobilières, les affaires juridiques et la construction de structures durables. Évitez de vous précipiter — Saturne récompense les efforts constants et soutenus dans le temps.',
    },
    dhikr: 'يا صبور · يا متين · يا حافظ',
    dhikrLatin: 'Yā Ṣabūr · Yā Matīn · Yā Ḥāfiẓ',
    rulingSign: { en: 'Capricorn ♑ & Aquarius ♒', fr: 'Capricorne ♑ & Verseau ♒' },
    exaltation: { en: 'Libra ♎', fr: 'Balance ♎' },
  },
];

// ─── Component ────────────────────────────────────────────────────────────────

export function PlanetOfTheDayPage() {
  const router = useRouter();
  const { language } = useLanguage();
  const isEn = language === 'en';

  // Compute today's ruling planet (Sun=0, Mon=1...Sat=6)
  const dayOfWeek = new Date().getDay(); // 0=Sun
  const dayPlanetMap = [0, 1, 2, 3, 4, 5, 6]; // Sun=0→Sun planet, Mon=1→Moon...
  const planetOrder = ['Sun', 'Moon', 'Mars', 'Mercury', 'Jupiter', 'Venus', 'Saturn'];
  const todayPlanetKey = planetOrder[dayOfWeek];

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-slate-50 dark:from-slate-900 dark:via-amber-950/10 dark:to-slate-900">
      {/* ─── Header ─── */}
      <header className="sticky top-0 z-40 bg-white/80 dark:bg-slate-900/80 backdrop-blur-lg border-b border-amber-200 dark:border-amber-800/50">
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
            <Sun className="w-5 h-5 text-amber-500" />
            <h1 className="text-base sm:text-lg font-bold text-slate-900 dark:text-slate-100">
              {isEn ? 'Planet of the Day' : 'Planète du Jour'}
            </h1>
            <span className="text-xs font-arabic text-slate-400 dark:text-slate-500 hidden sm:inline">كوكب اليوم</span>
          </div>
          <div className="w-16" />
        </div>
      </header>

      <div className="max-w-3xl mx-auto px-4 py-6 space-y-8">

        {/* ─── Intro ─── */}
        <div className="bg-white/70 dark:bg-slate-800/60 rounded-2xl border border-amber-200/60 dark:border-amber-700/30 p-5 shadow-sm">
          <div className="flex items-start gap-3">
            <div className="text-3xl">🪐</div>
            <div>
              <h2 className="text-base font-bold text-slate-900 dark:text-slate-100 mb-1">
                {isEn ? 'The Daily Ruling Planet' : 'La Planète Gouvernante du Jour'}
                <span className="ml-2 text-sm font-arabic font-normal text-slate-400 dark:text-slate-500">كوكب اليوم</span>
              </h2>
              <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                {isEn
                  ? 'In ʿIlm al-Nujūm, each day of the week is assigned a ruling planet that colours its energy from sunrise to sunrise. This was well-known to classical Islamic scholars. The day starts at the first planetary hour after sunrise — not midnight.'
                  : 'Dans l\'ʿIlm al-Nujūm, chaque jour de la semaine est assigné une planète gouvernante qui colore son énergie du lever au lever du soleil. Cela était bien connu des érudits islamiques classiques. Le jour commence à la première heure planétaire après le lever du soleil — pas à minuit.'}
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
            {isEn ? 'Today\'s Ruling Planet' : 'Planète Gouvernante d\'Aujourd\'hui'}
          </h2>
          <PlanetOfTheDay language={language} />
        </div>

        {/* ─── Today's Detailed Guidance ─── */}
        {(() => {
          const today = SEVEN_PLANETS.find(p => p.key === todayPlanetKey);
          if (!today) return null;
          return (
            <div className={`rounded-2xl border ${today.border} ${today.bg} p-5 shadow-sm`}>
              <div className="flex items-center gap-3 mb-4">
                <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${today.color} flex items-center justify-center text-2xl text-white shadow-md`}>
                  {today.symbol}
                </div>
                <div>
                  <h2 className={`text-base font-bold ${today.text}`}>
                    {isEn ? `${today.day.en} Guidance` : `Guidance du ${today.day.fr}`}
                  </h2>
                  <p className="text-xs text-slate-500 dark:text-slate-400">
                    {today.key} <span className="font-arabic">{today.arabic}</span> · {isEn ? today.element.en : today.element.fr}
                  </p>
                </div>
              </div>
              <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed mb-4">
                {isEn ? today.guidance.en : today.guidance.fr}
              </p>
              <div className="bg-white/60 dark:bg-slate-800/40 rounded-xl p-3 border border-white/80 dark:border-slate-700/40">
                <div className="text-[10px] font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-1">
                  📿 {isEn ? 'Recommended Dhikr' : 'Dhikr Recommandé'}
                </div>
                <div className="text-base font-arabic text-slate-800 dark:text-slate-200 mb-0.5" dir="rtl">{today.dhikr}</div>
                <div className="text-xs text-slate-500 dark:text-slate-400 italic">{today.dhikrLatin}</div>
              </div>
            </div>
          );
        })()}

        {/* ─── Weekly Overview ─── */}
        <div>
          <h2 className="text-base font-bold text-slate-900 dark:text-slate-100 mb-4">
            {isEn ? '📅 The Seven Days & Their Planets' : '📅 Les Sept Jours et Leurs Planètes'}
          </h2>
          <div className="space-y-3">
            {SEVEN_PLANETS.map(planet => {
              const isToday = planet.key === todayPlanetKey;
              return (
                <div
                  key={planet.key}
                  className={`rounded-xl border p-4 transition-all ${
                    isToday
                      ? `${planet.border} ${planet.bg} ring-2 ring-offset-1 ring-offset-white dark:ring-offset-slate-900`
                      : 'border-slate-200 dark:border-slate-700 bg-white/50 dark:bg-slate-800/30'
                  }`}
                  style={isToday ? {} : {}}
                >
                  <div className="flex items-start gap-3">
                    <div className={`flex-shrink-0 w-10 h-10 rounded-full bg-gradient-to-br ${planet.color} flex items-center justify-center text-xl text-white shadow-sm`}>
                      {planet.symbol}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 flex-wrap mb-1">
                        <span className={`font-bold ${isToday ? planet.text : 'text-slate-800 dark:text-slate-200'}`}>
                          {isEn ? planet.day.en : planet.day.fr}
                        </span>
                        <span className="text-xs font-arabic text-slate-400">{planet.dayArabic}</span>
                        {isToday && (
                          <span className={`text-[10px] font-bold uppercase tracking-wide px-1.5 py-0.5 rounded-full ${planet.bg} ${planet.text} border ${planet.border}`}>
                            {isEn ? 'Today' : 'Aujourd\'hui'}
                          </span>
                        )}
                      </div>
                      <div className="flex items-baseline gap-1.5 mb-1">
                        <span className={`text-sm font-semibold ${isToday ? planet.text : 'text-slate-600 dark:text-slate-400'}`}>
                          {planet.key}
                        </span>
                        <span className="text-xs font-arabic text-slate-400">{planet.arabic}</span>
                        <span className="text-slate-300 dark:text-slate-600 text-xs">·</span>
                        <span className="text-xs text-slate-500 dark:text-slate-400">
                          {isEn ? planet.element.en : planet.element.fr}
                        </span>
                      </div>
                      <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                        {isEn ? planet.qualities.en : planet.qualities.fr}
                      </p>
                      <div className="flex items-center gap-2 mt-2 flex-wrap">
                        <span className="text-[10px] text-slate-400">📿</span>
                        <span className="text-xs font-arabic text-slate-500 dark:text-slate-400">{planet.dhikr}</span>
                      </div>
                    </div>
                  </div>
                  {isToday && (
                    <div className="mt-3 pt-3 border-t border-slate-200/60 dark:border-slate-700/40">
                      <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                        {isEn ? planet.guidance.en : planet.guidance.fr}
                      </p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* ─── Essential Dignities Primer ─── */}
        <div className="bg-white/70 dark:bg-slate-800/60 rounded-2xl border border-slate-200/60 dark:border-slate-700/30 p-5 shadow-sm">
          <h2 className="text-base font-bold text-slate-900 dark:text-slate-100 mb-3">
            {isEn ? '📐 Rulerships & Exaltations' : '📐 Gouvernances & Exaltations'}
          </h2>
          <p className="text-sm text-slate-600 dark:text-slate-400 mb-4">
            {isEn
              ? 'Each planet has a zodiac sign where it is at home (domicile/rulership) and one where it is especially powerful (exaltation).'
              : 'Chaque planète a un signe du zodiaque où elle est chez elle (domicile/gouvernance) et un où elle est particulièrement puissante (exaltation).'}
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {SEVEN_PLANETS.map(p => (
              <div key={p.key} className={`flex items-center gap-2 p-2.5 rounded-lg border ${p.border} ${p.bg}`}>
                <span className="text-lg">{p.symbol}</span>
                <div className="min-w-0 flex-1">
                  <div className={`text-xs font-semibold ${p.text}`}>{p.key}</div>
                  <div className="text-[10px] text-slate-500 dark:text-slate-400">
                    ♜ {isEn ? p.rulingSign.en : p.rulingSign.fr} · ↑ {isEn ? p.exaltation.en : p.exaltation.fr}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ─── Footer Notice ─── */}
        <div className="bg-amber-50 dark:bg-amber-950/20 rounded-xl border border-amber-200 dark:border-amber-800/40 p-4">
          <p className="text-xs text-amber-800 dark:text-amber-300 leading-relaxed">
            {isEn
              ? '⚠️ This tool provides spiritual context inspired by Islamic ʿIlm al-Nujūm. It is for reflection, not divination (kahanah) or superstition. Every day is blessed — use this as a framework to align your intentions and channel your energy mindfully. Consult qualified scholars for religious guidance.'
              : '⚠️ Cet outil fournit un contexte spirituel inspiré de l\'ʿIlm al-Nujūm islamique. C\'est pour la réflexion, pas pour la divination (kahanah) ou la superstition. Chaque jour est béni — utilisez cela comme un cadre pour aligner vos intentions et canaliser votre énergie consciemment. Consultez des érudits qualifiés pour des conseils religieux.'}
          </p>
        </div>
      </div>
    </div>
  );
}
