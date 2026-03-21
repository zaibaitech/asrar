/**
 * Planet Transit – Dedicated Page Client Component
 * =================================================
 * Full guidance page for planetary transits and positions.
 */

'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import { ArrowLeft, Globe } from 'lucide-react';
import { useLanguage } from '@/src/contexts/LanguageContext';
import { PlanetTransitCard } from '@/src/components/planetary';

// ─── Educational Data ──────────────────────────────────────────────────────

const DIGNITY_LEVELS = [
  {
    name: { en: 'Domicile (Rulership)', fr: 'Domicile (Gouvernance)' },
    arabic: 'البيت',
    symbol: '★★★★★',
    strength: 5,
    description: {
      en: 'The planet is in the sign it rules. Like being at home — most comfortable, powerful, and able to act freely. Its qualities express naturally and strongly.',
      fr: 'La planète est dans le signe qu\'elle gouverne. Comme être chez soi — la plus confortable, puissante, et capable d\'agir librement. Ses qualités s\'expriment naturellement et fortement.',
    },
    color: 'text-emerald-700 dark:text-emerald-400',
    bg: 'bg-emerald-50 dark:bg-emerald-950/30',
    border: 'border-emerald-200 dark:border-emerald-700/40',
  },
  {
    name: { en: 'Exaltation', fr: 'Exaltation' },
    arabic: 'الشرف',
    symbol: '★★★★',
    strength: 4,
    description: {
      en: 'The planet is in a sign where it performs exceptionally well — like a guest of honour in a welcoming household. Its best qualities are elevated and dignified.',
      fr: 'La planète est dans un signe où elle performe exceptionnellement bien — comme un invité d\'honneur dans une maison accueillante. Ses meilleures qualités sont élevées et dignes.',
    },
    color: 'text-yellow-700 dark:text-yellow-400',
    bg: 'bg-yellow-50 dark:bg-yellow-950/30',
    border: 'border-yellow-200 dark:border-yellow-700/40',
  },
  {
    name: { en: 'Triplicity', fr: 'Triplicité' },
    arabic: 'المثلث',
    symbol: '★★★',
    strength: 3,
    description: {
      en: 'The planet rules a set of three signs sharing the same element (fire, earth, air, water). Moderate strength, especially during day or night chart conditions.',
      fr: 'La planète gouverne un ensemble de trois signes partageant le même élément (feu, terre, air, eau). Force modérée, surtout pendant les conditions de thème de jour ou de nuit.',
    },
    color: 'text-blue-700 dark:text-blue-400',
    bg: 'bg-blue-50 dark:bg-blue-950/30',
    border: 'border-blue-200 dark:border-blue-700/40',
  },
  {
    name: { en: 'Term (Bounds)', fr: 'Terme (Bornes)' },
    arabic: 'الحدود',
    symbol: '★★',
    strength: 2,
    description: {
      en: 'Each sign is divided into 5 sections (terms), each ruled by a planet. A planet in its own term has minor dignity — like being in a familiar neighbourhood.',
      fr: 'Chaque signe est divisé en 5 sections (termes), chacune gouvernée par une planète. Une planète dans son propre terme a une dignité mineure — comme être dans un quartier familier.',
    },
    color: 'text-blue-600 dark:text-blue-300',
    bg: 'bg-blue-50/50 dark:bg-blue-950/20',
    border: 'border-blue-200/60 dark:border-blue-700/30',
  },
  {
    name: { en: 'Decan (Face)', fr: 'Décan (Face)' },
    arabic: 'الوجه',
    symbol: '★',
    strength: 1,
    description: {
      en: 'Each sign has three 10° sections (decans), each ruled by a planet. Being in one\'s own decan gives minimal dignity — enough to act, but not with great strength.',
      fr: 'Chaque signe a trois sections de 10° (décans), chacune gouvernée par une planète. Être dans son propre décan donne une dignité minimale — suffisant pour agir, mais pas avec grande force.',
    },
    color: 'text-slate-600 dark:text-slate-400',
    bg: 'bg-slate-50 dark:bg-slate-800/30',
    border: 'border-slate-200 dark:border-slate-700/40',
  },
  {
    name: { en: 'Detriment', fr: 'Détriment' },
    arabic: 'الهبوط',
    symbol: '▼▼',
    strength: -1,
    description: {
      en: 'The planet is in the sign opposite its domicile. Uncomfortable, weakened, unable to work with full energy. Its natural qualities are challenged or distorted.',
      fr: 'La planète est dans le signe opposé à son domicile. Mal à l\'aise, affaiblie, incapable de travailler avec toute son énergie. Ses qualités naturelles sont challengées ou distordues.',
    },
    color: 'text-orange-700 dark:text-orange-400',
    bg: 'bg-orange-50 dark:bg-orange-950/30',
    border: 'border-orange-200 dark:border-orange-700/40',
  },
  {
    name: { en: 'Fall', fr: 'Chute' },
    arabic: 'الكوكب الساقط',
    symbol: '▼▼▼',
    strength: -2,
    description: {
      en: 'The planet is in the sign opposite its exaltation. Significantly weakened. Like a king in exile — present but unable to fulfill their role. Caution advised for matters ruled by this planet.',
      fr: 'La planète est dans le signe opposé à son exaltation. Significativement affaiblie. Comme un roi en exil — présent mais incapable de remplir son rôle. Prudence conseillée pour les questions gouvernées par cette planète.',
    },
    color: 'text-red-700 dark:text-red-400',
    bg: 'bg-red-50 dark:bg-red-950/30',
    border: 'border-red-200 dark:border-red-700/40',
  },
];

const RETROGRADE_EXPLANATION = {
  en: {
    what: 'When a planet appears to move backwards through the zodiac from Earth\'s perspective. This is an optical illusion caused by differing orbital speeds, but in traditional astrology the effect is real and significant.',
    effect: 'A retrograde planet\'s energy turns inward and becomes more reflective, less direct. For example: Mercury retrograde = review communication, revisit unfinished writing, and introspect on thought patterns.',
    islamic: 'Islamic scholars of ʿIlm al-Nujūm noted retrograde (rujūʿ, رجوع) as a period where planetary influence is "weakened" or "reversed." It is a time for reflection (murājaʿah), not for beginning critical new matters.',
  },
  fr: {
    what: 'Quand une planète semble se déplacer en arrière dans le zodiaque du point de vue de la Terre. C\'est une illusion d\'optique causée par des vitesses orbitales différentes, mais en astrologie traditionnelle l\'effet est réel et significatif.',
    effect: 'L\'énergie d\'une planète rétrograde se tourne vers l\'intérieur et devient plus réflective, moins directe. Par exemple: Mercure rétrograde = revoir la communication, revisiter les écrits inachevés, et introspecter les schémas de pensée.',
    islamic: 'Les érudits islamiques de l\'ʿIlm al-Nujūm ont noté la rétrogradation (rujūʿ, رجوع) comme une période où l\'influence planétaire est "affaiblie" ou "inversée". C\'est une période de réflexion (murājaʿah), pas pour commencer de nouvelles affaires critiques.',
  },
};

const HOW_TO_READ_STEPS = [
  {
    icon: '🪐',
    title: { en: 'Pick Your Planet', fr: 'Choisissez Votre Planète' },
    desc: {
      en: 'Tap any planet in the grid to see its current zodiac sign, degree, and status.',
      fr: 'Touchez n\'importe quelle planète dans la grille pour voir son signe zodiacal actuel, son degré et son statut.',
    },
  },
  {
    icon: '♎',
    title: { en: 'Read Its Zodiac Position', fr: 'Lisez Sa Position Zodiacale' },
    desc: {
      en: 'The sign tells you the "flavour" of how the planet expresses itself and where in life its energy is focused.',
      fr: 'Le signe vous dit la "saveur" de la façon dont la planète s\'exprime et où dans la vie son énergie est focalisée.',
    },
  },
  {
    icon: '📊',
    title: { en: 'Check the Dignity', fr: 'Vérifiez la Dignité' },
    desc: {
      en: 'Domicile/Exaltation = strong beneficial influence. Detriment/Fall = weakened or challenged. Use this to calibrate timing for related matters.',
      fr: 'Domicile/Exaltation = forte influence bénéfique. Détriment/Chute = affaiblie ou challengée. Utilisez cela pour calibrer le timing des questions liées.',
    },
  },
  {
    icon: '🔄',
    title: { en: 'Note Retrograde Status', fr: 'Notez le Statut Rétrograde' },
    desc: {
      en: 'A retrograde symbol (℞) means the planet is in a reflective phase — better for review than for new beginnings in that planet\'s domain.',
      fr: 'Un symbole rétrograde (℞) signifie que la planète est dans une phase réflective — mieux pour la révision que pour de nouveaux commencements dans le domaine de cette planète.',
    },
  },
];

const ZODIAC_SYSTEMS = [
  {
    name: { en: 'Tropical Zodiac', fr: 'Zodiaque Tropical' },
    arabic: 'الفلك الشمسي',
    description: {
      en: 'Based on the seasons and the Earth\'s relationship with the Sun. Aries begins at the Spring Equinox. This is the system used in Western astrology and most Islamic classical texts on ʿIlm al-Nujūm.',
      fr: 'Basé sur les saisons et la relation de la Terre avec le Soleil. Le Bélier commence à l\'Équinoxe de Printemps. C\'est le système utilisé dans l\'astrologie occidentale et la plupart des textes classiques islamiques sur l\'ʿIlm al-Nujūm.',
    },
    color: 'text-amber-700 dark:text-amber-400',
    bg: 'bg-amber-50 dark:bg-amber-950/20',
    border: 'border-amber-200 dark:border-amber-700/40',
  },
  {
    name: { en: 'Sidereal Zodiac (Lahiri)', fr: 'Zodiaque Sidéral (Lahiri)' },
    arabic: 'الفلك النجمي',
    description: {
      en: 'Fixed to the actual star constellations. Accounts for the ~24° "precession of the equinoxes" offset accumulated over 2,000 years. Used in Vedic/Jyotish astrology. Enabled in settings for comparison.',
      fr: 'Fixé aux constellations stellaires réelles. Tient compte du décalage de ~24° de "précession des équinoxes" accumulé sur 2 000 ans. Utilisé dans l\'astrologie védique/Jyotish. Activé dans les paramètres pour comparaison.',
    },
    color: 'text-indigo-700 dark:text-indigo-400',
    bg: 'bg-indigo-50 dark:bg-indigo-950/20',
    border: 'border-indigo-200 dark:border-indigo-700/40',
  },
];

// ─── Component ────────────────────────────────────────────────────────────────

export function PlanetTransitPage() {
  const router = useRouter();
  const { language } = useLanguage();
  const isEn = language === 'en';

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-violet-50 to-slate-50 dark:from-slate-900 dark:via-indigo-950/10 dark:to-slate-900">
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
            <Globe className="w-5 h-5 text-indigo-500" />
            <h1 className="text-base sm:text-lg font-bold text-slate-900 dark:text-slate-100">
              {isEn ? 'Planetary Transits' : 'Transits Planétaires'}
            </h1>
            <span className="text-xs font-arabic text-slate-400 dark:text-slate-500 hidden sm:inline">عبور الكواكب</span>
          </div>
          <div className="w-16" />
        </div>
      </header>

      <div className="max-w-3xl mx-auto px-4 py-6 space-y-8">

        {/* ─── Intro ─── */}
        <div className="bg-white/70 dark:bg-slate-800/60 rounded-2xl border border-indigo-200/60 dark:border-indigo-700/30 p-5 shadow-sm">
          <div className="flex items-start gap-3">
            <div className="text-3xl">🌌</div>
            <div>
              <h2 className="text-base font-bold text-slate-900 dark:text-slate-100 mb-1">
                {isEn ? 'Real-Time Celestial Positions' : 'Positions Célestes en Temps Réel'}
                <span className="ml-2 text-sm font-arabic font-normal text-slate-400 dark:text-slate-500">مواضع الكواكب</span>
              </h2>
              <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                {isEn
                  ? 'This page shows the live positions of all 7 classical planets (Sun, Moon, Mercury, Venus, Mars, Jupiter, Saturn) in the zodiac, calculated using NASA JPL-based ephemeris data. Tap any planet to see its detailed dignity status, sign meaning, and guidance for that planetary energy right now.'
                  : 'Cette page montre les positions live de toutes les 7 planètes classiques (Soleil, Lune, Mercure, Vénus, Mars, Jupiter, Saturne) dans le zodiaque, calculées à l\'aide de données d\'éphéméride basées sur NASA JPL. Touchez n\'importe quelle planète pour voir son statut de dignité détaillé, la signification du signe et les conseils pour cette énergie planétaire maintenant.'}
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
            {isEn ? 'Live Planetary Positions' : 'Positions Planétaires en Direct'}
          </h2>
          <PlanetTransitCard language={language} />
        </div>

        {/* ─── How to Read ─── */}
        <div className="bg-white/70 dark:bg-slate-800/60 rounded-2xl border border-slate-200/60 dark:border-slate-700/30 p-5 shadow-sm">
          <h2 className="text-base font-bold text-slate-900 dark:text-slate-100 mb-4">
            {isEn ? '🗺️ How to Read Transits' : '🗺️ Comment Lire les Transits'}
          </h2>
          <div className="space-y-3">
            {HOW_TO_READ_STEPS.map((step, i) => (
              <div key={i} className="flex items-start gap-3">
                <div className="flex-shrink-0 w-8 h-8 bg-indigo-100 dark:bg-indigo-900/40 rounded-lg flex items-center justify-center text-base">
                  {step.icon}
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-slate-800 dark:text-slate-200">
                    {isEn ? step.title.en : step.title.fr}
                  </h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                    {isEn ? step.desc.en : step.desc.fr}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ─── Essential Dignities ─── */}
        <div>
          <h2 className="text-base font-bold text-slate-900 dark:text-slate-100 mb-2">
            {isEn ? '⚖️ Essential Dignities — The Strength System' : '⚖️ Dignités Essentielles — Le Système de Force'}
          </h2>
          <p className="text-sm text-slate-500 dark:text-slate-400 mb-4 leading-relaxed">
            {isEn
              ? 'Traditional astrology grades each planet\'s strength by its relationship to the sign it occupies. Think of it as a measure of how comfortable and effective the planet is in expressing its nature.'
              : 'L\'astrologie traditionnelle évalue la force de chaque planète par sa relation au signe qu\'elle occupe. Pensez-y comme une mesure de combien la planète est à l\'aise et efficace pour exprimer sa nature.'}
          </p>
          <div className="space-y-2">
            {DIGNITY_LEVELS.map((dignity, i) => (
              <div key={i} className={`rounded-xl border ${dignity.border} ${dignity.bg} p-3`}>
                <div className="flex items-start gap-2.5">
                  <div>
                    <div className="flex items-center gap-2 flex-wrap">
                      <span className={`text-xs font-bold ${dignity.color}`}>
                        {isEn ? dignity.name.en : dignity.name.fr}
                      </span>
                      <span className="text-xs font-arabic text-slate-400 dark:text-slate-500">{dignity.arabic}</span>
                      <span className="text-xs tracking-widest">{dignity.symbol}</span>
                    </div>
                    <p className="text-xs text-slate-600 dark:text-slate-400 mt-0.5 leading-relaxed">
                      {isEn ? dignity.description.en : dignity.description.fr}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ─── Retrograde Explained ─── */}
        <div className="bg-white/70 dark:bg-slate-800/60 rounded-2xl border border-violet-200/60 dark:border-violet-700/30 p-5 shadow-sm">
          <h2 className="text-base font-bold text-slate-900 dark:text-slate-100 mb-3 flex items-center gap-2">
            <span>🔄</span>
            <span>{isEn ? 'Retrograde (℞) Explained' : 'Rétrograde (℞) Expliqué'}</span>
            <span className="text-sm font-arabic font-normal text-slate-400">الرجوع</span>
          </h2>
          <div className="space-y-3">
            <div>
              <div className="text-xs font-semibold text-violet-700 dark:text-violet-400 uppercase tracking-wide mb-1">
                {isEn ? 'What is it?' : 'Qu\'est-ce que c\'est?'}
              </div>
              <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                {isEn ? RETROGRADE_EXPLANATION.en.what : RETROGRADE_EXPLANATION.fr.what}
              </p>
            </div>
            <div>
              <div className="text-xs font-semibold text-violet-700 dark:text-violet-400 uppercase tracking-wide mb-1">
                {isEn ? 'Effect' : 'Effet'}
              </div>
              <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                {isEn ? RETROGRADE_EXPLANATION.en.effect : RETROGRADE_EXPLANATION.fr.effect}
              </p>
            </div>
            <div className="bg-violet-50 dark:bg-violet-950/20 rounded-xl p-3 border border-violet-200/60 dark:border-violet-700/30">
              <div className="text-xs font-semibold text-violet-700 dark:text-violet-400 uppercase tracking-wide mb-1">
                {isEn ? '☪️ Islamic Context' : '☪️ Contexte Islamique'}
              </div>
              <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                {isEn ? RETROGRADE_EXPLANATION.en.islamic : RETROGRADE_EXPLANATION.fr.islamic}
              </p>
            </div>
          </div>
        </div>

        {/* ─── Zodiac Systems ─── */}
        <div className="bg-white/70 dark:bg-slate-800/60 rounded-2xl border border-slate-200/60 dark:border-slate-700/30 p-5 shadow-sm">
          <h2 className="text-base font-bold text-slate-900 dark:text-slate-100 mb-3">
            {isEn ? '🌐 Zodiac Systems' : '🌐 Systèmes Zodiacaux'}
          </h2>
          <div className="space-y-3">
            {ZODIAC_SYSTEMS.map((system, i) => (
              <div key={i} className={`rounded-xl border ${system.border} ${system.bg} p-3`}>
                <div className="flex items-center gap-2 mb-1 flex-wrap">
                  <span className={`text-sm font-bold ${system.color}`}>
                    {isEn ? system.name.en : system.name.fr}
                  </span>
                  <span className="text-xs font-arabic text-slate-400">{system.arabic}</span>
                </div>
                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                  {isEn ? system.description.en : system.description.fr}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* ─── Practical Application ─── */}
        <div className="bg-white/70 dark:bg-slate-800/60 rounded-2xl border border-slate-200/60 dark:border-slate-700/30 p-5 shadow-sm">
          <h2 className="text-base font-bold text-slate-900 dark:text-slate-100 mb-3">
            {isEn ? '🤲 Practical Islamic Use' : '🤲 Utilisation Islamique Pratique'}
          </h2>
          <div className="space-y-3">
            {[
              {
                title: { en: 'Knowing Your Timing', fr: 'Connaître Votre Timing' },
                desc: {
                  en: 'When a benefic planet (Jupiter, Venus) is in dignity and transiting your area of concern, consider it a period of openness (fatḥ). Make du\'ā\', begin projects, and act boldly.',
                  fr: 'Quand une planète bénéfique (Jupiter, Vénus) est en dignité et transite votre domaine de préoccupation, considérez cela comme une période d\'ouverture (fatḥ). Faites du\'ā\', commencez des projets, et agissez audacieusement.',
                },
                icon: '✨',
              },
              {
                title: { en: 'When Saturn or Mars are in Fall or Detriment', fr: 'Quand Saturne ou Mars sont en Chute ou Détriment' },
                desc: {
                  en: 'These are periods to exercise extra patience and caution in matters of health, finances, and conflicts. Double your Isti\'ādhah (seeking refuge in Allah) and du\'ā\'.',
                  fr: 'Ce sont des périodes pour exercer une patience et une prudence supplémentaires dans les questions de santé, de finances et de conflits. Doublez votre Isti\'ādhah (chercher refuge en Allah) et du\'ā\'.',
                },
                icon: '🛡️',
              },
              {
                title: { en: 'Retrograde Periods', fr: 'Périodes Rétrogrades' },
                desc: {
                  en: 'Use Mercury retrograde for reviewing contracts and studying. Use Venus retrograde for reflecting on relationships. Use Mars retrograde to strategize before acting.',
                  fr: 'Utilisez la rétrogradation de Mercure pour réviser les contrats et étudier. Utilisez la rétrogradation de Vénus pour réfléchir sur les relations. Utilisez la rétrogradation de Mars pour stratégiser avant d\'agir.',
                },
                icon: '🔄',
              },
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-3">
                <div className="flex-shrink-0 text-xl">{item.icon}</div>
                <div>
                  <h3 className="text-sm font-semibold text-slate-800 dark:text-slate-200">
                    {isEn ? item.title.en : item.title.fr}
                  </h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed mt-0.5">
                    {isEn ? item.desc.en : item.desc.fr}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ─── Footer Notice ─── */}
        <div className="bg-indigo-50 dark:bg-indigo-950/20 rounded-xl border border-indigo-200 dark:border-indigo-800/40 p-4">
          <p className="text-xs text-indigo-800 dark:text-indigo-300 leading-relaxed">
            {isEn
              ? '⚠️ Planetary transit data is calculated using ephemeris mathematics and is provided for spiritual reflection within the tradition of Islamic ʿIlm al-Nujūm. This is not astrology for prediction (tanjīm) or belief in planets as independent agents. Allah alone is Al-Ḥakīm, Al-ʿAlīm — the All-Wise, All-Knowing.'
              : '⚠️ Les données de transit planétaire sont calculées à l\'aide de mathématiques d\'éphéméride et sont fournies pour la réflexion spirituelle dans la tradition de l\'ʿIlm al-Nujūm islamique. Ce n\'est pas de l\'astrologie pour la prédiction (tanjīm) ou la croyance en les planètes comme agents indépendants. Allah seul est Al-Ḥakīm, Al-ʿAlīm — le Tout-Sage, le Tout-Sachant.'}
          </p>
        </div>
      </div>
    </div>
  );
}
