/**
 * Talisman Timing Calculator
 * 
 * Calculates optimal astrological times for creating talismans and performing spiritual work.
 * Integrates personal numerology with current planetary hours, lunar mansions, and zodiac alignments.
 * 
 * Based on classical Islamic and Hermetic traditions of astrological timing.
 */

import type { Planet } from './core';

export type AlignmentQuality = 'excellent' | 'good' | 'fair' | 'challenging';

export interface TimingWindow {
  startTime: Date;
  endTime: Date;
  planetaryHour: {
    planet: Planet;
    dayRuler: Planet;
  };
  lunarMansion?: {
    number: number;
    name: string;
    nameAr: string;
  };
  alignmentScore: number; // 0-100
  alignmentQuality: AlignmentQuality;
  reasons: string[];
  reasonsFr: string[];
  isCurrentWindow: boolean;
}

export interface TalismanTimingAnalysis {
  userBurj: string;
  userBurjAr: string;
  userPlanet: Planet;
  userElement: string;
  currentAlignment: TimingWindow | null;
  nextOptimalWindows: TimingWindow[]; // Next 5-7 optimal windows
  bestDay: string; // e.g., "Thursday" (user's planetary day)
  bestDayAr: string;
  bestHour: string; // e.g., "Jupiter hour"
  recommendation: string;
  recommendationFr: string;
}

/**
 * Planet rulership days (classical tradition)
 */
const PLANET_DAYS: Record<Planet, { en: string; ar: string; fr: string; dayIndex: number }> = {
  'Sun': { en: 'Sunday', ar: 'الأحد', fr: 'Dimanche', dayIndex: 0 },
  'Moon': { en: 'Monday', ar: 'الاثنين', fr: 'Lundi', dayIndex: 1 },
  'Mars': { en: 'Tuesday', ar: 'الثلاثاء', fr: 'Mardi', dayIndex: 2 },
  'Mercury': { en: 'Wednesday', ar: 'الأربعاء', fr: 'Mercredi', dayIndex: 3 },
  'Jupiter': { en: 'Thursday', ar: 'الخميس', fr: 'Jeudi', dayIndex: 4 },
  'Venus': { en: 'Friday', ar: 'الجمعة', fr: 'Vendredi', dayIndex: 5 },
  'Saturn': { en: 'Saturday', ar: 'السبت', fr: 'Samedi', dayIndex: 6 },
};

/**
 * Element harmonies (compatible elements enhance timing)
 */
const ELEMENT_HARMONIES: Record<string, string[]> = {
  'Fire': ['Fire', 'Air'],
  'Air': ['Air', 'Fire'],
  'Water': ['Water', 'Earth'],
  'Earth': ['Earth', 'Water'],
};

/**
 * Calculate alignment score based on multiple factors
 */
function calculateAlignmentScore(
  userPlanet: Planet,
  userElement: string,
  currentPlanet: Planet,
  dayRuler: Planet,
  currentElement?: string
): { score: number; reasons: string[]; reasonsFr: string[] } {
  let score = 50; // Base score
  const reasons: string[] = [];
  const reasonsFr: string[] = [];

  // Perfect planetary alignment (same planet as user's)
  if (currentPlanet === userPlanet) {
    score += 30;
    reasons.push(`${currentPlanet} hour matches your planetary ruler`);
    reasonsFr.push(`Heure ${currentPlanet} correspond à votre planète`);
  }

  // Day ruler matches user planet
  if (dayRuler === userPlanet) {
    score += 20;
    reasons.push(`${dayRuler} day enhances your energy`);
    reasonsFr.push(`Jour ${dayRuler} amplifie votre énergie`);
  }

  // Same planet hour and day (double power)
  if (currentPlanet === dayRuler) {
    score += 15;
    reasons.push(`${currentPlanet} rules both hour and day (double power)`);
    reasonsFr.push(`${currentPlanet} gouverne l'heure et le jour (double puissance)`);
  }

  // Elemental harmony
  if (currentElement && ELEMENT_HARMONIES[userElement]?.includes(currentElement)) {
    score += 10;
    reasons.push(`Elemental harmony (${userElement} ↔ ${currentElement})`);
    reasonsFr.push(`Harmonie élémentaire (${userElement} ↔ ${currentElement})`);
  }

  // Beneficial planetary aspects
  const beneficPlanets: Planet[] = ['Jupiter', 'Venus', 'Sun'];
  if (beneficPlanets.includes(currentPlanet) && !beneficPlanets.includes(userPlanet)) {
    score += 5;
    reasons.push(`${currentPlanet} brings beneficial energy`);
    reasonsFr.push(`${currentPlanet} apporte une énergie bénéfique`);
  }

  // Cap score at 100
  score = Math.min(100, score);

  return { score, reasons, reasonsFr };
}

/**
 * Determine alignment quality from score
 */
function getAlignmentQuality(score: number): AlignmentQuality {
  if (score >= 80) return 'excellent';
  if (score >= 65) return 'good';
  if (score >= 50) return 'fair';
  return 'challenging';
}

/**
 * Get planetary hour sequence for a day
 * Classical Chaldean order: Saturn, Jupiter, Mars, Sun, Venus, Mercury, Moon (repeats)
 */
const CHALDEAN_ORDER: Planet[] = ['Saturn', 'Jupiter', 'Mars', 'Sun', 'Venus', 'Mercury', 'Moon'];

function getPlanetaryHourSequence(dayRuler: Planet, hourIndex: number): Planet {
  // Find starting position based on day ruler
  const startIndex = CHALDEAN_ORDER.indexOf(dayRuler);
  // Calculate position in sequence (24-hour cycle)
  const position = (startIndex + hourIndex) % 7;
  return CHALDEAN_ORDER[position];
}

/**
 * Calculate next optimal timing windows (next 7 days)
 */
export function calculateOptimalTimingWindows(
  userPlanet: Planet,
  userElement: string,
  userBurj: string,
  userBurjAr: string,
  currentDate: Date = new Date()
): TalismanTimingAnalysis {
  const windows: TimingWindow[] = [];
  const now = currentDate;

  // Scan next 7 days for optimal windows
  for (let dayOffset = 0; dayOffset < 7; dayOffset++) {
    const date = new Date(now);
    date.setDate(date.getDate() + dayOffset);
    const dayOfWeek = date.getDay();
    
    // Get day ruler
    const dayRuler = Object.entries(PLANET_DAYS).find(
      ([_, data]) => data.dayIndex === dayOfWeek
    )?.[0] as Planet || 'Sun';

    // Check each planetary hour of the day (12 day hours + 12 night hours = 24)
    for (let hour = 0; hour < 24; hour++) {
      const startTime = new Date(date);
      startTime.setHours(hour, 0, 0, 0);
      
      const endTime = new Date(startTime);
      endTime.setHours(hour + 1, 0, 0, 0);

      // Get planetary hour ruler
      const planetaryHourRuler = getPlanetaryHourSequence(dayRuler, hour);

      // Calculate alignment
      const { score, reasons, reasonsFr } = calculateAlignmentScore(
        userPlanet,
        userElement,
        planetaryHourRuler,
        dayRuler
      );

      // Only include windows with good+ alignment (score >= 65)
      if (score >= 65) {
        windows.push({
          startTime,
          endTime,
          planetaryHour: {
            planet: planetaryHourRuler,
            dayRuler,
          },
          alignmentScore: score,
          alignmentQuality: getAlignmentQuality(score),
          reasons,
          reasonsFr,
          isCurrentWindow: startTime <= now && now < endTime,
        });
      }
    }
  }

  // Sort by alignment score (best first)
  windows.sort((a, b) => b.alignmentScore - a.alignmentScore);

  // Find current window if any
  const currentAlignment = windows.find(w => w.isCurrentWindow) || null;

  // Get next optimal windows (top 5, excluding current)
  const nextOptimalWindows = windows
    .filter(w => !w.isCurrentWindow && w.startTime > now)
    .slice(0, 5);

  // User's best day and hour
  const bestDayData = PLANET_DAYS[userPlanet];

  return {
    userBurj,
    userBurjAr,
    userPlanet,
    userElement,
    currentAlignment,
    nextOptimalWindows,
    bestDay: bestDayData.en,
    bestDayAr: bestDayData.ar,
    bestHour: `${userPlanet} hour`,
    recommendation: currentAlignment
      ? `Current alignment is ${currentAlignment.alignmentQuality}. ${currentAlignment.reasons.join('. ')}.`
      : `Next optimal window: ${nextOptimalWindows[0]?.startTime.toLocaleString('en', { weekday: 'long', hour: 'numeric', minute: '2-digit' })} (${nextOptimalWindows[0]?.planetaryHour.planet} hour)`,
    recommendationFr: currentAlignment
      ? `L'alignement actuel est ${currentAlignment.alignmentQuality === 'excellent' ? 'excellent' : currentAlignment.alignmentQuality === 'good' ? 'bon' : 'correct'}. ${currentAlignment.reasonsFr.join('. ')}.`
      : `Prochaine fenêtre optimale: ${nextOptimalWindows[0]?.startTime.toLocaleString('fr', { weekday: 'long', hour: 'numeric', minute: '2-digit' })} (heure ${nextOptimalWindows[0]?.planetaryHour.planet})`,
  };
}

/**
 * Get time until next optimal window
 */
export function getTimeUntilNextWindow(nextWindow: TimingWindow): {
  hours: number;
  minutes: number;
  formatted: string;
  formattedFr: string;
} {
  const now = new Date();
  const diffMs = nextWindow.startTime.getTime() - now.getTime();
  const diffMins = Math.floor(diffMs / 60000);
  const hours = Math.floor(diffMins / 60);
  const minutes = diffMins % 60;

  let formatted = '';
  let formattedFr = '';

  if (hours > 0) {
    formatted = `${hours}h ${minutes}m`;
    formattedFr = `${hours}h ${minutes}m`;
  } else {
    formatted = `${minutes} minutes`;
    formattedFr = `${minutes} minutes`;
  }

  return { hours, minutes, formatted, formattedFr };
}

/**
 * Export timing analysis as text
 */
export function exportTimingAnalysisAsText(
  analysis: TalismanTimingAnalysis,
  language: 'en' | 'fr' = 'en'
): string {
  const labels = {
    en: {
      title: 'Talisman Timing Analysis',
      burj: 'Your Zodiac',
      planet: 'Ruling Planet',
      element: 'Element',
      bestDay: 'Optimal Day',
      bestHour: 'Optimal Hour',
      current: 'Current Alignment',
      upcoming: 'Upcoming Optimal Windows',
      score: 'Alignment Score',
      quality: 'Quality',
      time: 'Time',
    },
    fr: {
      title: 'Analyse du Timing Talismanique',
      burj: 'Votre Signe',
      planet: 'Planète Gouvernante',
      element: 'Élément',
      bestDay: 'Jour Optimal',
      bestHour: 'Heure Optimale',
      current: 'Alignement Actuel',
      upcoming: 'Fenêtres Optimales à Venir',
      score: 'Score d\'Alignement',
      quality: 'Qualité',
      time: 'Heure',
    },
  };

  const l = labels[language];
  let text = `${l.title}\n${'='.repeat(50)}\n\n`;
  
  text += `${l.burj}: ${language === 'fr' ? analysis.userBurj : analysis.userBurj}\n`;
  text += `${l.planet}: ${analysis.userPlanet}\n`;
  text += `${l.element}: ${analysis.userElement}\n`;
  text += `${l.bestDay}: ${language === 'fr' ? analysis.bestDayAr : analysis.bestDay}\n`;
  text += `${l.bestHour}: ${analysis.bestHour}\n\n`;

  if (analysis.currentAlignment) {
    text += `${l.current}:\n`;
    text += `  ${l.score}: ${analysis.currentAlignment.alignmentScore}/100\n`;
    text += `  ${l.quality}: ${analysis.currentAlignment.alignmentQuality}\n\n`;
  }

  text += `${l.upcoming}:\n`;
  analysis.nextOptimalWindows.forEach((window, idx) => {
    const timeStr = window.startTime.toLocaleString(language, {
      weekday: 'long',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    });
    text += `${idx + 1}. ${timeStr}\n`;
    text += `   ${window.planetaryHour.planet} hour (${window.alignmentScore}/100)\n`;
  });

  return text;
}
