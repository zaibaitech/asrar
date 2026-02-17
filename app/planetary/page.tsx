/**
 * Planetary Modules Page
 * Showcases the three planetary science modules ported from the mobile app
 */

'use client';

import React from 'react';
import { useLanguage } from '@/src/contexts/LanguageContext';
import { PlanetOfTheDay, PlanetaryHourCard, PlanetTransitCard } from '@/src/components/planetary';
import { getUserLocation } from '@/src/utils/location';
import type { Element } from '@/src/lib/planetary';
import type { UserLocation } from '@/src/types/planetary';

export default function PlanetaryModulesPage() {
  const { language, t } = useLanguage();

  // Example user element (in production, this would come from user profile)
  const userElement: Element | undefined = undefined; // 'fire', 'water', 'air', or 'earth'

  // User location state - fetched on mount
  const [location, setLocation] = React.useState<UserLocation | null>(null);
  const [locationLoading, setLocationLoading] = React.useState(true);

  // Fetch user's real location on mount
  React.useEffect(() => {
    async function fetchLocation() {
      try {
        const userLoc = await getUserLocation();
        setLocation(userLoc);
      } catch (error) {
        console.error('Failed to get location:', error);
        // Fallback to Makkah
        setLocation({
          latitude: 21.4225,
          longitude: 39.8262,
          cityName: 'Makkah (Default)',
          isAccurate: false
        });
      } finally {
        setLocationLoading(false);
      }
    }
    fetchLocation();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Header */}
      <div className="border-b border-slate-700 bg-slate-900/50 backdrop-blur-sm sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-white">
                {language === 'fr' ? 'Modules Planétaires' : 'Planetary Modules'}
              </h1>
              <p className="text-sm text-gray-400 mt-1">
                {language === 'fr' ? 'Science des Astres • ʿIlm al-Nujūm' : 'ʿIlm al-Nujūm - Celestial Science'}
              </p>
            </div>
            <a
              href="/"
              className="px-4 py-2 rounded-lg bg-slate-700 hover:bg-slate-600 text-white text-sm transition-colors"
            >
              {language === 'fr' ? '← Retour' : '← Back to Home'}
            </a>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Introduction */}
        <div className="mb-8 p-6 rounded-xl border border-indigo-500/30 bg-indigo-900/20 backdrop-blur-sm">
          <div className="flex items-start gap-4">
            <div className="text-4xl">🌙</div>
            <div>
              <h2 className="text-xl font-semibold text-white mb-2">
                {language === 'fr' ? 'À Propos' : 'About'}
              </h2>
              <p className="text-gray-300 text-sm leading-relaxed">
                {language === 'fr'
                  ? 'Ces trois modules sont portés directement depuis l\'application mobile Asrariya. Ils fournissent des aperçus en temps réel basés sur la science céleste islamique traditionnelle (ʿIlm al-Nujūm) et les heures planétaires chaldéennes.'
                  : 'These three modules are ported directly from the Asrariya mobile app. They provide real-time insights based on traditional Islamic celestial science (ʿIlm al-Nujūm) and Chaldean planetary hours.'
                }
              </p>
            </div>
          </div>
        </div>

        {/* Location indicator */}
        {location && (
          <div className="mb-4 flex items-center gap-2 text-sm text-gray-400">
            <span>📍</span>
            <span>
              {location.cityName}
              {!location.isAccurate && (
                <span className="ml-2 text-xs text-amber-400">
                  ({language === 'fr' ? 'position par défaut' : 'default location'})
                </span>
              )}
            </span>
          </div>
        )}

        {/* Planetary Modules Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8 items-start">
          {/* Module 1: Planet of the Day */}
          <div className="lg:col-span-2">
            <PlanetOfTheDay language={language} />
          </div>

          {/* Module 2: Planetary Hour Card */}
          <div>
            {locationLoading ? (
              <div className="rounded-xl border border-slate-700 bg-slate-800 p-6 text-center text-slate-400">
                {language === 'fr' ? 'Détection de votre position...' : 'Detecting your location...'}
              </div>
            ) : (
              <PlanetaryHourCard
                userElement={userElement}
                latitude={location?.latitude}
                longitude={location?.longitude}
                language={language}
              />
            )}
          </div>

          {/* Module 3: Planet Transit Card */}
          <div>
            <PlanetTransitCard
              language={language}
              onNavigate={() => {
                // Navigate to compatibility or detailed view
                console.log('Navigate to transit details');
              }}
            />
          </div>
        </div>

        {/* Educational Footer */}
        <div className="p-6 rounded-xl border border-slate-700 bg-slate-800/50 backdrop-blur-sm">
          <h3 className="text-lg font-semibold text-white mb-3">
            {language === 'fr' ? '⚠️ Avis Éducatif' : '⚠️ Educational Notice'}
          </h3>
          <p className="text-sm text-gray-300 leading-relaxed">
            {language === 'fr'
              ? 'Ces outils sont destinés à la réflexion et à l\'éducation, et non à la prédiction ou à la certitude. Utilisez-les pour obtenir des aperçus sur les modèles naturels créés par Allah, mais rappelez-vous toujours qu\'Allah seul connaît l\'invisible. Consultez des érudits qualifiés pour des conseils religieux.'
              : 'These tools are for reflection and education, not prediction or certainty. Use them to gain insights into natural patterns created by Allah, but always remember that only Allah knows the unseen. Consult qualified scholars for religious guidance.'
            }
          </p>
        </div>
      </div>
    </div>
  );
}
