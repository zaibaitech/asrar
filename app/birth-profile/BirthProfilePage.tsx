/**
 * Birth Profile – Dedicated Page Client Component
 * ================================================
 * A personal natal-lite ʿIlm al-Nujūm snapshot: Sun/Moon/Ascendant signs,
 * all 7 classical planets with real essential-dignity conditions, the
 * Moon's lunar mansion, the day ruler, and a dominant element/planet/
 * temperament synthesis — computed entirely by src/lib/planetary/birthProfile.ts
 * from this app's own local ephemeris (no network dependency, works
 * instantly for any historical date).
 */

'use client';

import { useMemo, useState } from 'react';
import { useRouter } from 'next/navigation';
import { ArrowLeft, Sparkles, MapPin, Moon as MoonIcon, RotateCcw } from 'lucide-react';
import { useLanguage } from '@/src/contexts/LanguageContext';
import { getUserLocation } from '@/src/utils/location';
import {
  computeBirthProfile,
  PLANET_INFO,
  ZODIAC_DATA,
  ELEMENT_ARABIC,
  ELEMENT_EMOJI,
  ELEMENT_DESCRIPTIONS,
  getSimplifiedStatus,
  getSimplePracticeHint,
  type BirthProfileResult,
  type Planet,
  type Element,
} from '@/src/lib/planetary';
import { DignityDetailPanel } from '@/src/components/planetary';

const COPY = {
  en: {
    backToHome: 'Back to Home',
    title: 'Birth Profile',
    subtitle: 'Wilādah',
    introTitle: 'Your Personal ʿIlm al-Nujūm Snapshot',
    introBody:
      "Enter your date of birth (and, if you know it, the exact time and place) to see your Sun and Moon signs, the Moon's lunar mansion at your birth, the day that ruled your birth date, and each classical planet's real astronomical condition that day — computed instantly from this app's own ephemeris, not a network call.",
    dateLabel: 'Date of birth',
    timeKnownLabel: 'I know my exact time of birth',
    timeKnownHelper: 'Unlocks your Ascendant/Descendant — otherwise skipped, since it needs a precise time to mean anything.',
    timeLabel: 'Time of birth (local)',
    locationLabel: 'Birth location',
    latLabel: 'Latitude',
    lonLabel: 'Longitude',
    timezoneLabel: 'Timezone',
    useMyLocation: 'Use my current location',
    locating: 'Locating…',
    calculate: 'Calculate My Birth Profile',
    newProfile: 'New profile',
    summaryTitle: 'Birth Summary',
    sunLabel: 'Sun',
    moonLabel: 'Moon',
    ascendantLabel: 'Ascendant',
    descendantLabel: 'Descendant',
    ascendantUnavailable: 'Add your exact birth time to see this.',
    lunarMansionTitle: 'Lunar Mansion at Birth',
    mansionOf28: (n: number) => `Mansion ${n} of 28`,
    favorableFor: 'Favorable for',
    unfavorableFor: 'Less favorable for',
    moonPhaseLabel: 'Moon phase at birth',
    dayRulerTitle: 'Day Ruler',
    bestForLabel: 'Best for',
    planetsTitle: 'The 7 Classical Planets',
    planetsSubtitle: 'Tap any planet for its full dignity breakdown',
    retrogradeLabel: 'Retrograde',
    synthesisTitle: 'Your Elemental Imprint',
    dominantElementLabel: 'Dominant element',
    dominantPlanetLabel: 'Dominant planet',
    temperamentLabel: 'Temperament',
    practiceHintLabel: 'Suggested practice',
    disclaimer:
      'A reflective, educational snapshot in the ʿIlm al-Nujūm tradition — not a predictive horoscope, a religious ruling, or a substitute for istikhāra and consultation with trusted scholars.',
    temperamentNames: {
      'hot-dry': 'Hot & Dry',
      'hot-moist': 'Hot & Moist',
      'cold-moist': 'Cold & Moist',
      'cold-dry': 'Cold & Dry',
    } as Record<string, string>,
  },
  fr: {
    backToHome: "Retour à l'accueil",
    title: 'Profil de Naissance',
    subtitle: 'Wilādah',
    introTitle: 'Votre Aperçu Personnel de ʿIlm al-Nujūm',
    introBody:
      "Entrez votre date de naissance (et, si vous les connaissez, l'heure et le lieu exacts) pour découvrir vos signes solaire et lunaire, la demeure lunaire de la Lune à votre naissance, le jour qui régnait sur votre date de naissance, et l'état astronomique réel de chaque planète classique ce jour-là — calculé instantanément grâce à l'éphéméride propre à cette application, sans appel réseau.",
    dateLabel: 'Date de naissance',
    timeKnownLabel: 'Je connais mon heure de naissance exacte',
    timeKnownHelper: "Débloque votre Ascendant/Descendant — sinon ignoré, car cela nécessite une heure précise pour être significatif.",
    timeLabel: 'Heure de naissance (locale)',
    locationLabel: 'Lieu de naissance',
    latLabel: 'Latitude',
    lonLabel: 'Longitude',
    timezoneLabel: 'Fuseau horaire',
    useMyLocation: 'Utiliser ma position actuelle',
    locating: 'Localisation…',
    calculate: 'Calculer Mon Profil de Naissance',
    newProfile: 'Nouveau profil',
    summaryTitle: 'Résumé de Naissance',
    sunLabel: 'Soleil',
    moonLabel: 'Lune',
    ascendantLabel: 'Ascendant',
    descendantLabel: 'Descendant',
    ascendantUnavailable: 'Ajoutez votre heure de naissance exacte pour voir ceci.',
    lunarMansionTitle: 'Demeure Lunaire à la Naissance',
    mansionOf28: (n: number) => `Demeure ${n} sur 28`,
    favorableFor: 'Favorable pour',
    unfavorableFor: 'Moins favorable pour',
    moonPhaseLabel: 'Phase lunaire à la naissance',
    dayRulerTitle: 'Régent du Jour',
    bestForLabel: 'Idéal pour',
    planetsTitle: 'Les 7 Planètes Classiques',
    planetsSubtitle: 'Touchez une planète pour son analyse complète de dignité',
    retrogradeLabel: 'Rétrograde',
    synthesisTitle: 'Votre Empreinte Élémentaire',
    dominantElementLabel: 'Élément dominant',
    dominantPlanetLabel: 'Planète dominante',
    temperamentLabel: 'Tempérament',
    practiceHintLabel: 'Pratique suggérée',
    disclaimer:
      "Un aperçu réflexif et éducatif dans la tradition de l'ʿIlm al-Nujūm — pas un horoscope prédictif, un jugement religieux, ni un substitut à l'istikhāra et à la consultation de savants de confiance.",
    temperamentNames: {
      'hot-dry': 'Chaud et Sec',
      'hot-moist': 'Chaud et Humide',
      'cold-moist': 'Froid et Humide',
      'cold-dry': 'Froid et Sec',
    } as Record<string, string>,
  },
};

const PLANET_ORDER: Planet[] = ['Saturn', 'Jupiter', 'Mars', 'Sun', 'Venus', 'Mercury', 'Moon'];

function signLabel(sign: keyof typeof ZODIAC_DATA, degree: number, lang: 'en' | 'fr') {
  const info = ZODIAC_DATA[sign];
  const name = sign.charAt(0).toUpperCase() + sign.slice(1);
  return `${info.symbol} ${name} ${degree.toFixed(1)}°`;
}

export function BirthProfilePage() {
  const router = useRouter();
  const { language } = useLanguage();
  const lang: 'en' | 'fr' = language === 'fr' ? 'fr' : 'en';
  const c = COPY[lang];

  const todayIso = new Date().toISOString().slice(0, 10);
  const [dateOfBirth, setDateOfBirth] = useState('');
  const [timeKnown, setTimeKnown] = useState(false);
  const [timeOfBirth, setTimeOfBirth] = useState('12:00');
  const [latitude, setLatitude] = useState('');
  const [longitude, setLongitude] = useState('');
  const [timezone, setTimezone] = useState(() => Intl.DateTimeFormat().resolvedOptions().timeZone);
  const [locating, setLocating] = useState(false);
  const [result, setResult] = useState<BirthProfileResult | null>(null);
  const [selectedPlanet, setSelectedPlanet] = useState<Planet | null>(null);

  const timezones = useMemo(() => {
    try {
      return Intl.supportedValuesOf('timeZone');
    } catch {
      return [timezone];
    }
  }, [timezone]);

  async function handleUseMyLocation() {
    setLocating(true);
    try {
      const loc = await getUserLocation();
      setLatitude(loc.latitude.toFixed(4));
      setLongitude(loc.longitude.toFixed(4));
      setTimezone(Intl.DateTimeFormat().resolvedOptions().timeZone);
    } finally {
      setLocating(false);
    }
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!dateOfBirth) return;
    const lat = Number(latitude);
    const lon = Number(longitude);
    if (!Number.isFinite(lat) || !Number.isFinite(lon)) return;

    const [year, month, day] = dateOfBirth.split('-').map(Number);
    const [hour, minute] = timeOfBirth.split(':').map(Number);

    setResult(
      computeBirthProfile({
        dateOfBirth: new Date(year, month - 1, day),
        timeOfBirth: { hour, minute },
        timeKnown,
        latitude: lat,
        longitude: lon,
        timezone,
      }),
    );
  }

  function handleReset() {
    setResult(null);
  }

  const canSubmit = Boolean(dateOfBirth) && latitude.trim() !== '' && longitude.trim() !== '';

  return (
    <div className="min-h-screen bg-gradient-to-br from-violet-50 via-indigo-50 to-slate-50 dark:from-slate-900 dark:via-indigo-950/10 dark:to-slate-900">
      <header className="sticky top-0 z-40 bg-white/80 dark:bg-slate-900/80 backdrop-blur-lg border-b border-indigo-200 dark:border-indigo-800/50">
        <div className="max-w-3xl mx-auto px-4 py-3 flex items-center justify-between">
          <button
            onClick={() => router.push('/')}
            className="flex items-center gap-2 px-3 py-2 -ml-3 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100 transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            <span className="text-sm font-medium hidden sm:inline">{c.backToHome}</span>
          </button>
          <div className="flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-violet-500" />
            <h1 className="text-base sm:text-lg font-bold text-slate-900 dark:text-slate-100">{c.title}</h1>
            <span className="text-xs font-arabic text-slate-400 dark:text-slate-500 hidden sm:inline">ولادة</span>
          </div>
          <div className="w-16" />
        </div>
      </header>

      <div className="max-w-3xl mx-auto px-4 py-6 space-y-6">
        {!result && (
          <div className="bg-white/70 dark:bg-slate-800/60 rounded-2xl border border-violet-200/60 dark:border-violet-700/30 p-5 shadow-sm">
            <div className="flex items-start gap-3">
              <div className="text-3xl">🌟</div>
              <div>
                <h2 className="text-base font-bold text-slate-900 dark:text-slate-100 mb-1">{c.introTitle}</h2>
                <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">{c.introBody}</p>
              </div>
            </div>
          </div>
        )}

        {!result ? (
          <form
            onSubmit={handleSubmit}
            className="bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 p-5 shadow-sm space-y-4"
          >
            <label className="block">
              <span className="text-sm font-medium text-slate-700 dark:text-slate-300">{c.dateLabel}</span>
              <input
                type="date"
                required
                max={todayIso}
                value={dateOfBirth}
                onChange={(e) => setDateOfBirth(e.target.value)}
                className="mt-1 w-full rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 px-3 py-2 text-sm text-slate-900 dark:text-slate-100 dark:[color-scheme:dark]"
              />
            </label>

            <label className="flex items-center gap-2">
              <input
                type="checkbox"
                checked={timeKnown}
                onChange={(e) => setTimeKnown(e.target.checked)}
                className="h-4 w-4 rounded border-slate-300 text-violet-600 focus:ring-violet-500"
              />
              <span className="text-sm font-medium text-slate-700 dark:text-slate-300">{c.timeKnownLabel}</span>
            </label>
            <p className="text-xs text-slate-500 dark:text-slate-400 -mt-2">{c.timeKnownHelper}</p>

            {timeKnown && (
              <label className="block">
                <span className="text-sm font-medium text-slate-700 dark:text-slate-300">{c.timeLabel}</span>
                <input
                  type="time"
                  value={timeOfBirth}
                  onChange={(e) => setTimeOfBirth(e.target.value)}
                  className="mt-1 w-full rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 px-3 py-2 text-sm text-slate-900 dark:text-slate-100 dark:[color-scheme:dark]"
                />
              </label>
            )}

            <div className="border-t border-slate-100 dark:border-slate-700 pt-4 space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium text-slate-700 dark:text-slate-300">{c.locationLabel}</span>
                <button
                  type="button"
                  onClick={handleUseMyLocation}
                  disabled={locating}
                  className="flex items-center gap-1.5 text-xs font-medium text-violet-600 dark:text-violet-400 disabled:opacity-50"
                >
                  <MapPin size={13} aria-hidden />
                  {locating ? c.locating : c.useMyLocation}
                </button>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <label className="block">
                  <span className="text-xs text-slate-500 dark:text-slate-400">{c.latLabel}</span>
                  <input
                    type="number"
                    step="any"
                    min={-90}
                    max={90}
                    required
                    value={latitude}
                    onChange={(e) => setLatitude(e.target.value)}
                    className="mt-1 w-full rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 px-3 py-2 text-sm text-slate-900 dark:text-slate-100"
                  />
                </label>
                <label className="block">
                  <span className="text-xs text-slate-500 dark:text-slate-400">{c.lonLabel}</span>
                  <input
                    type="number"
                    step="any"
                    min={-180}
                    max={180}
                    required
                    value={longitude}
                    onChange={(e) => setLongitude(e.target.value)}
                    className="mt-1 w-full rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 px-3 py-2 text-sm text-slate-900 dark:text-slate-100"
                  />
                </label>
              </div>

              <label className="block">
                <span className="text-xs text-slate-500 dark:text-slate-400">{c.timezoneLabel}</span>
                <select
                  value={timezone}
                  onChange={(e) => setTimezone(e.target.value)}
                  className="mt-1 w-full rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 px-3 py-2 text-sm text-slate-900 dark:text-slate-100"
                >
                  {timezones.map((tz) => (
                    <option key={tz} value={tz}>
                      {tz}
                    </option>
                  ))}
                </select>
              </label>
            </div>

            <button
              type="submit"
              disabled={!canSubmit}
              className="w-full rounded-xl bg-gradient-to-r from-violet-600 to-indigo-600 px-4 py-3 text-sm font-semibold text-white disabled:opacity-40"
            >
              {c.calculate}
            </button>
          </form>
        ) : (
          <BirthProfileResults result={result} lang={lang} c={c} onReset={handleReset} onSelectPlanet={setSelectedPlanet} />
        )}
      </div>

      {selectedPlanet && result && (
        <DignityDetailPanel
          planet={selectedPlanet}
          sign={result.planets.find((p) => p.planet === selectedPlanet)!.position.sign}
          degree={result.planets.find((p) => p.planet === selectedPlanet)!.position.degreeInSign}
          isDay={result.isDay}
          isRetrograde={result.planets.find((p) => p.planet === selectedPlanet)!.position.isRetrograde}
          language={lang}
          onClose={() => setSelectedPlanet(null)}
        />
      )}
    </div>
  );
}

function BirthProfileResults({
  result,
  lang,
  c,
  onReset,
  onSelectPlanet,
}: {
  result: BirthProfileResult;
  lang: 'en' | 'fr';
  c: (typeof COPY)['en'];
  onReset: () => void;
  onSelectPlanet: (planet: Planet) => void;
}) {
  const mansion = result.lunarMansion.mansion;
  const dominantElementInfo = ELEMENT_DESCRIPTIONS[result.dominantElement];
  const dominantTier = getSimplifiedStatus(
    result.planets.find((p) => p.planet === result.dominantPlanet)!.dignity,
    result.dominantPlanet,
    result.planets.find((p) => p.planet === result.dominantPlanet)!.position.sign,
  );
  const practiceHint = getSimplePracticeHint(dominantTier.tier, result.dominantPlanet);

  return (
    <div className="space-y-4">
      <button
        onClick={onReset}
        className="flex items-center gap-1.5 text-sm font-medium text-slate-400 dark:text-slate-500"
      >
        <RotateCcw size={13} aria-hidden />
        {c.newProfile}
      </button>

      {/* Summary */}
      <div className="rounded-2xl border border-violet-200 dark:border-violet-800 bg-white dark:bg-slate-800 p-5 shadow-sm">
        <p className="text-xs font-semibold uppercase tracking-wide text-violet-500 mb-3">{c.summaryTitle}</p>
        <div className="grid grid-cols-2 gap-3 text-sm">
          <div>
            <p className="text-slate-500 dark:text-slate-400">{c.sunLabel}</p>
            <p className="font-semibold text-slate-900 dark:text-slate-100">
              {signLabel(result.sun.position.sign, result.sun.position.degreeInSign, lang)}
            </p>
          </div>
          <div>
            <p className="text-slate-500 dark:text-slate-400">{c.moonLabel}</p>
            <p className="font-semibold text-slate-900 dark:text-slate-100">
              {signLabel(result.moon.position.sign, result.moon.position.degreeInSign, lang)}
            </p>
          </div>
          <div>
            <p className="text-slate-500 dark:text-slate-400">{c.ascendantLabel}</p>
            <p className="font-semibold text-slate-900 dark:text-slate-100">
              {result.ascendant ? signLabel(result.ascendant.sign, result.ascendant.degreeInSign, lang) : '—'}
            </p>
          </div>
          <div>
            <p className="text-slate-500 dark:text-slate-400">{c.descendantLabel}</p>
            <p className="font-semibold text-slate-900 dark:text-slate-100">
              {result.descendant ? signLabel(result.descendant.sign, result.descendant.degreeInSign, lang) : '—'}
            </p>
          </div>
        </div>
        {!result.ascendant && <p className="mt-3 text-xs text-slate-500 dark:text-slate-400">{c.ascendantUnavailable}</p>}
      </div>

      {/* Lunar Mansion */}
      <div
        className="rounded-2xl border p-5 shadow-sm"
        style={{ borderColor: mansion.color + '60', backgroundColor: mansion.color + '0d' }}
      >
        <div className="flex items-center gap-2 mb-1">
          <span className="text-2xl">{mansion.emoji}</span>
          <div>
            <p className="text-xs font-semibold uppercase tracking-wide" style={{ color: mansion.color }}>
              {c.lunarMansionTitle}
            </p>
            <p className="font-semibold text-slate-900 dark:text-slate-100">
              {mansion.nameTransliteration} <span dir="rtl" className="font-arabic">({mansion.nameArabic})</span> — {c.mansionOf28(mansion.number)}
            </p>
          </div>
        </div>
        <p className="text-sm text-slate-600 dark:text-slate-300 mt-2">{mansion.spiritualFocus[lang]}</p>
        <p className="text-xs text-slate-500 dark:text-slate-400 mt-2">
          {c.favorableFor}: {mansion.favorableFor[lang].join(', ')}
        </p>
        <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
          {c.unfavorableFor}: {mansion.unfavorableFor[lang].join(', ')}
        </p>
        <p className="text-xs italic text-slate-500 dark:text-slate-400 mt-3 border-t border-slate-200/50 dark:border-slate-700/50 pt-2">
          {c.moonPhaseLabel}: {result.lunarMansion.moonPhase}
        </p>
      </div>

      {/* Day Ruler */}
      <div className="rounded-2xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 p-5 shadow-sm">
        <p className="text-xs font-semibold uppercase tracking-wide text-slate-500 mb-2">{c.dayRulerTitle}</p>
        <div className="flex items-center gap-2">
          <span className="text-xl">{result.dayRuler.elementEmoji}</span>
          <p className="font-semibold text-slate-900 dark:text-slate-100">
            {result.dayRuler.dayName} — {PLANET_INFO[result.dayRuler.planet].symbol} {result.dayRuler.planet}{' '}
            <span dir="rtl" className="font-arabic text-slate-500">
              ({result.dayRuler.planetArabic})
            </span>
          </p>
        </div>
        <p className="text-sm text-slate-600 dark:text-slate-300 mt-2">{result.dayRuler.elementDescription}</p>
        <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">{c.bestForLabel}: {result.dayRuler.bestFor.join(', ')}</p>
      </div>

      {/* 7 Planets */}
      <div className="rounded-2xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 p-5 shadow-sm">
        <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">{c.planetsTitle}</p>
        <p className="text-xs text-slate-500 dark:text-slate-400 mb-3">{c.planetsSubtitle}</p>
        <div className="divide-y divide-slate-100 dark:divide-slate-700">
          {PLANET_ORDER.map((planet) => {
            const entry = result.planets.find((p) => p.planet === planet)!;
            const status = getSimplifiedStatus(entry.dignity, planet, entry.position.sign);
            return (
              <button
                key={planet}
                type="button"
                onClick={() => onSelectPlanet(planet)}
                className="w-full flex items-center justify-between py-2.5 text-left"
              >
                <span className="flex items-center gap-2">
                  <span className="text-lg">{PLANET_INFO[planet].symbol}</span>
                  <span className="text-sm font-medium text-slate-900 dark:text-slate-100">{planet}</span>
                  {entry.position.isRetrograde && (
                    <span className="text-[10px] rounded-full bg-red-50 dark:bg-red-950/40 text-red-600 dark:text-red-400 px-1.5 py-0.5">
                      {c.retrogradeLabel}
                    </span>
                  )}
                </span>
                <span className="flex items-center gap-2 text-sm">
                  <span className="text-slate-500 dark:text-slate-400">
                    {signLabel(entry.position.sign, entry.position.degreeInSign, lang)}
                  </span>
                  <span className="font-medium" style={{ color: status.color }}>
                    {lang === 'fr' ? statusLabelFr(status.tier) : status.labelEn}
                  </span>
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Synthesis */}
      <div className="rounded-2xl border border-indigo-200 dark:border-indigo-800 bg-gradient-to-br from-indigo-50 to-violet-50 dark:from-indigo-950/30 dark:to-violet-950/30 p-5 shadow-sm">
        <p className="text-xs font-semibold uppercase tracking-wide text-indigo-500 mb-3">{c.synthesisTitle}</p>
        <div className="grid grid-cols-2 gap-3 text-sm mb-3">
          <div>
            <p className="text-slate-500 dark:text-slate-400">{c.dominantElementLabel}</p>
            <p className="font-semibold text-slate-900 dark:text-slate-100">
              {ELEMENT_EMOJI[result.dominantElement]} {elementLabel(result.dominantElement, lang)}{' '}
              <span dir="rtl" className="font-arabic text-slate-500">
                ({ELEMENT_ARABIC[result.dominantElement]})
              </span>
            </p>
          </div>
          <div>
            <p className="text-slate-500 dark:text-slate-400">{c.dominantPlanetLabel}</p>
            <p className="font-semibold text-slate-900 dark:text-slate-100">
              {PLANET_INFO[result.dominantPlanet].symbol} {result.dominantPlanet}
            </p>
          </div>
          <div>
            <p className="text-slate-500 dark:text-slate-400">{c.temperamentLabel}</p>
            <p className="font-semibold text-slate-900 dark:text-slate-100">{c.temperamentNames[result.temperament]}</p>
          </div>
        </div>
        <p className="text-sm text-slate-600 dark:text-slate-300">{dominantElementInfo}</p>
        <div className="mt-3 border-t border-indigo-200/50 dark:border-indigo-800/50 pt-3">
          <p className="text-xs font-medium text-slate-500 dark:text-slate-400">{c.practiceHintLabel}</p>
          <p className="text-sm text-slate-700 dark:text-slate-200">{practiceHint.hint}</p>
        </div>
      </div>

      <p className="text-xs leading-relaxed text-slate-500 dark:text-slate-400 px-1">{c.disclaimer}</p>
    </div>
  );
}

function elementLabel(element: Element, lang: 'en' | 'fr'): string {
  const labels: Record<Element, { en: string; fr: string }> = {
    fire: { en: 'Fire', fr: 'Feu' },
    water: { en: 'Water', fr: 'Eau' },
    air: { en: 'Air', fr: 'Air' },
    earth: { en: 'Earth', fr: 'Terre' },
  };
  return labels[element][lang];
}

function statusLabelFr(tier: 'said' | 'mutadil' | 'mahdhur'): string {
  const labels: Record<string, string> = { said: 'Auspicieux', mutadil: 'Modéré', mahdhur: 'Prudence' };
  return labels[tier];
}
