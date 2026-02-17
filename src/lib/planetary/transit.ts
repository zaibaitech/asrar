/**
 * Planet Transit Utilities
 * Extracted from asrar-mobile/services/PlanetTransitService.ts
 */

import { 
  Planet, 
  ZodiacSign, 
  PlanetTransitInfo 
} from './types';
import { 
  PLANET_RULERSHIPS, 
  ZODIAC_DATA,
  PLANET_INFO,
  CHALDEAN_ORDER
} from './constants';
import { PlanetaryHourData } from './types';

/**
 * Get primary zodiac sign ruled by a planet
 */
export function getPrimaryZodiacForPlanet(planet: Planet): ZodiacSign {
  if (!planet || !PLANET_RULERSHIPS[planet]) {
    console.warn(`[PlanetTransit] Invalid planet: ${planet}, defaulting to Leo`);
    return 'leo';
  }
  const rulerships = PLANET_RULERSHIPS[planet];
  return rulerships[0]; // Return primary rulership
}

/**
 * Get current planet transit information
 * Based on the current planetary hour
 */
export function getPlanetTransitNow(
  planetaryData: PlanetaryHourData,
  now: Date = new Date()
): PlanetTransitInfo | null {
  try {
    if (!planetaryData || !planetaryData.currentHour) {
      console.warn('[PlanetTransit] No planetary data available');
      return null;
    }
    
    const { currentHour, nextHour, countdownSeconds } = planetaryData;
    const { planet, planetInfo, hourNumber, isDaytime } = currentHour;
    
    if (!planet || !planetInfo) {
      console.warn('[PlanetTransit] Invalid currentHour data');
      return null;
    }
    
    // Get zodiac sign for this planet (primary rulership)
    const zodiacKey = getPrimaryZodiacForPlanet(planet);
    const zodiacInfo = ZODIAC_DATA[zodiacKey];
    
    return {
      planetKey: planet.toLowerCase(),
      planetName: planet,
      planetNameAr: planetInfo.arabicName,
      planetSymbol: planetInfo.symbol,
      elementKey: planetInfo.element,
      zodiacKey,
      zodiacSymbol: zodiacInfo.symbol,
      hourNumber,
      isDaytime,
      updatedAt: now.toISOString(),
      nextHourStartTime: nextHour.startTime,
      countdownSeconds,
    };
  } catch (error) {
    console.error('[PlanetTransit] Error getting transit data:', error);
    return null;
  }
}

/**
 * Get all planet transits
 * Returns transit info for all 7 classical planets
 */
export function getAllPlanetTransits(now: Date = new Date()): PlanetTransitInfo[] {
  const transits: PlanetTransitInfo[] = [];
  
  for (const planet of CHALDEAN_ORDER) {
    const planetInfo = PLANET_INFO[planet];
    const zodiacKey = getPrimaryZodiacForPlanet(planet);
    const zodiacInfo = ZODIAC_DATA[zodiacKey];
    
    transits.push({
      planetKey: planet.toLowerCase(),
      planetName: planet,
      planetNameAr: planetInfo.arabicName,
      planetSymbol: planetInfo.symbol,
      elementKey: planetInfo.element,
      zodiacKey,
      zodiacSymbol: zodiacInfo.symbol,
      hourNumber: 0,
      isDaytime: true,
      updatedAt: now.toISOString(),
      nextHourStartTime: new Date(),
      countdownSeconds: 0,
    });
  }
  
  return transits;
}

/**
 * Get zodiac info by key
 */
export function getZodiacInfo(zodiacKey: ZodiacSign) {
  return ZODIAC_DATA[zodiacKey];
}
