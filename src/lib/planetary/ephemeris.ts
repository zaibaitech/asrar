/**
 * Ephemeris Service for Web
 * =========================
 * Fetches real planetary positions via Supabase Edge Function
 * which calls NASA JPL Horizons API with caching
 * 
 * Source: NASA/JPL Horizons System (authoritative ephemeris)
 * @see https://ssd-api.jpl.nasa.gov/doc/horizons.html
 */

import { Planet, ZodiacSign, Element } from './types';
import { ZODIAC_DATA } from './constants';

// ============================================================================
// CONFIGURATION
// ============================================================================

/**
 * Supabase Edge Function URL for ephemeris
 * Uses the ephemeris Edge function which fetches from NASA Horizons with caching
 */
const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL || '';
const EPHEMERIS_EDGE_FUNCTION_URL = SUPABASE_URL 
  ? `${SUPABASE_URL}/functions/v1/ephemeris`
  : '';

/**
 * Ayanamsa for Lahiri sidereal system (~24° as of 2024)
 * This is subtracted from tropical longitude to get sidereal
 */
const LAHIRI_AYANAMSA = 24.17; // degrees (approximate for 2024-2026)

/**
 * Planet codes for JPL Horizons (kept for fallback reference)
 */
const HORIZONS_PLANET_CODES: Record<string, string> = {
  sun: '10',
  moon: '301',
  mercury: '199',
  venus: '299',
  mars: '499',
  jupiter: '599',
  saturn: '699',
};

/**
 * Planet order (Chaldean sequence)
 */
const PLANET_ORDER: string[] = ['saturn', 'jupiter', 'mars', 'sun', 'venus', 'mercury', 'moon'];

/**
 * Zodiac signs in order (0-11)
 */
const ZODIAC_SIGNS: ZodiacSign[] = [
  'aries', 'taurus', 'gemini', 'cancer',
  'leo', 'virgo', 'libra', 'scorpio',
  'sagittarius', 'capricorn', 'aquarius', 'pisces',
];

// ============================================================================
// TYPES
// ============================================================================

export type ZodiacSystem = 'tropical' | 'sidereal';

export interface PlanetEphemerisData {
  planetKey: string;
  planetName: string;
  planetSymbol: string;
  longitude: number;        // Ecliptic longitude (0-360)
  sign: ZodiacSign;
  signDegree: number;       // Degree within sign (0-30)
  signMinute: number;       // Arc minute within degree
  element: Element;
  zodiacSymbol: string;
  isRetrograde?: boolean;
  source: 'ephemeris' | 'fallback';
  zodiacSystem: ZodiacSystem;
}

export interface AllPlanetEphemeris {
  planets: PlanetEphemerisData[];
  timestamp: Date;
  source: 'ephemeris' | 'fallback';
  zodiacSystem: ZodiacSystem;
}

// ============================================================================
// PLANET INFO
// ============================================================================

const PLANET_DISPLAY: Record<string, { name: string; symbol: string }> = {
  sun: { name: 'Sun', symbol: '☉' },
  moon: { name: 'Moon', symbol: '☽' },
  mercury: { name: 'Mercury', symbol: '☿' },
  venus: { name: 'Venus', symbol: '♀' },
  mars: { name: 'Mars', symbol: '♂' },
  jupiter: { name: 'Jupiter', symbol: '♃' },
  saturn: { name: 'Saturn', symbol: '♄' },
};

// ============================================================================
// CACHE
// ============================================================================

let cachedEphemeris: {
  data: AllPlanetEphemeris | null;
  fetchedAt: number;
  zodiacSystem: ZodiacSystem;
} = {
  data: null,
  fetchedAt: 0,
  zodiacSystem: 'tropical',
};

const CACHE_TTL_MS = 60 * 60 * 1000; // 1 hour (positions change slowly)

// ============================================================================
// MAIN API
// ============================================================================

/**
 * Get all planet ephemeris data
 * @param zodiacSystem - 'tropical' (default) or 'sidereal' (Lahiri)
 * @param forceRefresh - Force fetch even if cached
 */
export async function getAllPlanetEphemeris(
  zodiacSystem: ZodiacSystem = 'tropical',
  forceRefresh = false
): Promise<AllPlanetEphemeris> {
  const now = Date.now();
  
  // Check cache (only if same zodiac system)
  if (
    !forceRefresh &&
    cachedEphemeris.data &&
    cachedEphemeris.zodiacSystem === zodiacSystem &&
    now - cachedEphemeris.fetchedAt < CACHE_TTL_MS
  ) {
    return cachedEphemeris.data;
  }
  
  try {
    // Fetch from JPL Horizons
    const planets = await fetchAllPlanetsFromHorizons(zodiacSystem);
    
    const result: AllPlanetEphemeris = {
      planets,
      timestamp: new Date(),
      source: 'ephemeris',
      zodiacSystem,
    };
    
    // Update cache
    cachedEphemeris = {
      data: result,
      fetchedAt: now,
      zodiacSystem,
    };
    
    return result;
    
  } catch (error) {
    console.error('[Ephemeris] Error fetching from Edge Function:', error);
    
    // Return fallback with approximate positions
    return getFallbackEphemeris(zodiacSystem);
  }
}

// ============================================================================
// SUPABASE EDGE FUNCTION FETCHING (LIVE NASA DATA)
// ============================================================================

/**
 * Response shape from the ephemeris Edge Function
 */
interface EphemerisEdgeFunctionResponse {
  planet_id: string;
  longitude: number;
  latitude: number;
  speed: number;
  distance: number;
  zodiac_sign: string;
  zodiac_degree: number;
  is_retrograde: boolean;
  cache_status: 'HIT' | 'MISS' | 'ERROR';
  response_time_ms?: number;
}

/**
 * Fetch all planet positions via Supabase Edge Function
 * Uses NASA JPL Horizons with caching for reliability
 */
async function fetchAllPlanetsFromHorizons(
  zodiacSystem: ZodiacSystem
): Promise<PlanetEphemerisData[]> {
  // Check if Edge Function URL is configured
  if (!EPHEMERIS_EDGE_FUNCTION_URL) {
    console.warn('[Ephemeris] Edge Function URL not configured, using fallback');
    throw new Error('Edge Function not configured');
  }

  const planets: PlanetEphemerisData[] = [];
  const now = new Date();
  
  // Fetch all planets in parallel for better performance
  const fetchPromises = PLANET_ORDER.map(async (planetKey) => {
    try {
      const data = await fetchSinglePlanetFromEdgeFunction(planetKey, now, zodiacSystem);
      if (data) {
        return data;
      }
    } catch (error) {
      console.warn(`[Ephemeris] Failed to fetch ${planetKey}:`, error);
    }
    return null;
  });

  const results = await Promise.all(fetchPromises);
  
  for (const result of results) {
    if (result) {
      planets.push(result);
    }
  }
  
  // If we got at least some planets, return them
  if (planets.length > 0) {
    console.log(`[Ephemeris] Successfully fetched ${planets.length} planets from Edge Function`);
    return planets;
  }
  
  throw new Error('Failed to fetch any planet positions');
}

/**
 * Fetch a single planet's position from Edge Function
 */
async function fetchSinglePlanetFromEdgeFunction(
  planetKey: string,
  date: Date,
  zodiacSystem: ZodiacSystem
): Promise<PlanetEphemerisData | null> {
  try {
    const response = await fetch(EPHEMERIS_EDGE_FUNCTION_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        date: date.toISOString(),
        planet: planetKey,
      }),
    });
    
    if (!response.ok) {
      console.warn(`[Ephemeris] Edge Function error for ${planetKey}: ${response.status}`);
      return null;
    }
    
    const data: EphemerisEdgeFunctionResponse = await response.json();
    
    // Edge function returns tropical coordinates
    let longitude = data.longitude;
    
    // Apply ayanamsa for sidereal
    if (zodiacSystem === 'sidereal') {
      longitude = (longitude - LAHIRI_AYANAMSA + 360) % 360;
    }
    
    // Convert to sign (recalculate based on zodiac system)
    const signIndex = Math.floor(longitude / 30);
    const signDegree = Math.floor(longitude % 30);
    const signMinute = Math.round((longitude % 1) * 60);
    const sign = ZODIAC_SIGNS[signIndex];
    const zodiacInfo = ZODIAC_DATA[sign];
    const planetDisplay = PLANET_DISPLAY[planetKey];
    
    return {
      planetKey,
      planetName: planetDisplay.name,
      planetSymbol: planetDisplay.symbol,
      longitude,
      sign,
      signDegree,
      signMinute,
      element: zodiacInfo.element,
      zodiacSymbol: zodiacInfo.symbol,
      isRetrograde: data.is_retrograde,
      source: 'ephemeris',  // Using live NASA data via Edge Function
      zodiacSystem,
    };
    
  } catch (error) {
    console.error(`[Ephemeris] Error fetching ${planetKey} from Edge Function:`, error);
    return null;
  }
}

// ============================================================================
// FALLBACK DATA
// ============================================================================

/**
 * Generate fallback ephemeris when API is unavailable
 * Uses approximate positions based on average orbital periods
 */
function getFallbackEphemeris(zodiacSystem: ZodiacSystem): AllPlanetEphemeris {
  const now = new Date();
  const dayOfYear = getDayOfYear(now);
  
  // Approximate orbital periods (days) and starting positions for reference epoch
  const orbitalData: Record<string, { period: number; basePos: number }> = {
    sun: { period: 365.25, basePos: 280 },      // ~1 sign/month
    moon: { period: 27.3, basePos: 0 },         // Fast-moving
    mercury: { period: 88, basePos: 290 },
    venus: { period: 225, basePos: 310 },
    mars: { period: 687, basePos: 220 },
    jupiter: { period: 4333, basePos: 30 },     // Slow-moving
    saturn: { period: 10759, basePos: 340 },    // Very slow
  };
  
  const planets: PlanetEphemerisData[] = [];
  
  for (const planetKey of PLANET_ORDER) {
    const orbital = orbitalData[planetKey];
    if (!orbital) continue;
    
    // Calculate approximate longitude
    let longitude = (orbital.basePos + (dayOfYear / orbital.period) * 360) % 360;
    
    // Apply ayanamsa for sidereal
    if (zodiacSystem === 'sidereal') {
      longitude = (longitude - LAHIRI_AYANAMSA + 360) % 360;
    }
    
    const signIndex = Math.floor(longitude / 30);
    const signDegree = Math.floor(longitude % 30);
    const signMinute = Math.round((longitude % 1) * 60);
    const sign = ZODIAC_SIGNS[signIndex];
    const zodiacInfo = ZODIAC_DATA[sign];
    const planetDisplay = PLANET_DISPLAY[planetKey];
    
    planets.push({
      planetKey,
      planetName: planetDisplay.name,
      planetSymbol: planetDisplay.symbol,
      longitude,
      sign,
      signDegree,
      signMinute,
      element: zodiacInfo.element,
      zodiacSymbol: zodiacInfo.symbol,
      source: 'fallback',
      zodiacSystem,
    });
  }
  
  return {
    planets,
    timestamp: now,
    source: 'fallback',
    zodiacSystem,
  };
}

function getDayOfYear(date: Date): number {
  const start = new Date(date.getFullYear(), 0, 0);
  const diff = date.getTime() - start.getTime();
  return Math.floor(diff / (1000 * 60 * 60 * 24));
}
