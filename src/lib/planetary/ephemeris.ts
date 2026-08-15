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
//
// Used whenever the Horizons Edge Function is unreachable. The previous
// version modeled every body (including Mercury/Venus) as an independent
// linear "average motion" curve with its own arbitrary base position. That
// has no physical link between an inferior planet and the Sun's longitude,
// so it could (and did) place Venus on the opposite side of the sky from
// the Sun — impossible, since Venus's max elongation from the Sun is ~47°
// and Mercury's is ~28°.
//
// This replacement uses NASA JPL's published low-precision Keplerian
// elements ("Keplerian Elements for Approximate Positions of the Major
// Planets", valid 1800-2050 AD, https://ssd.jpl.nasa.gov/planets/approx_pos.html):
// each body's heliocentric ecliptic position is computed from its actual
// orbital elements (semi-major axis, eccentricity, inclination, mean
// longitude, longitude of perihelion, longitude of ascending node) and
// their secular rates, then converted to a geocentric ecliptic longitude by
// vector subtraction against Earth's own heliocentric position. Mercury and
// Venus naturally stay within their true elongation limits because that's
// a consequence of the real orbital geometry, not an artificial clamp.
// Good to roughly 1 arcminute for the inner planets and a few arcminutes
// for the outer planets over this date range.
//
// The Moon isn't in that table (it orbits Earth, not the Sun), so it uses a
// separate abbreviated lunar-longitude series (the ~15 largest periodic
// terms of Brown's lunar theory, per Meeus's "Astronomical Algorithms"),
// accurate to roughly 0.3°.
// ============================================================================

interface KeplerianElements {
  a0: number; aDot: number;       // semi-major axis (AU), AU/century
  e0: number; eDot: number;       // eccentricity, /century
  i0: number; iDot: number;       // inclination (deg), deg/century
  l0: number; lDot: number;       // mean longitude (deg), deg/century
  peri0: number; periDot: number; // longitude of perihelion (deg), deg/century
  node0: number; nodeDot: number; // longitude of ascending node (deg), deg/century
}

/** JPL low-precision elements, epoch J2000, valid 1800-2050 AD. */
const KEPLERIAN_ELEMENTS: Record<string, KeplerianElements> = {
  mercury: {
    a0: 0.38709927, aDot: 0.00000037,
    e0: 0.20563593, eDot: 0.00001906,
    i0: 7.00497902, iDot: -0.00594749,
    l0: 252.25032350, lDot: 149472.67411175,
    peri0: 77.45779628, periDot: 0.16047689,
    node0: 48.33076593, nodeDot: -0.12534081,
  },
  venus: {
    a0: 0.72333566, aDot: 0.00000390,
    e0: 0.00677672, eDot: -0.00004107,
    i0: 3.39467605, iDot: -0.00078890,
    l0: 181.97909950, lDot: 58517.81538729,
    peri0: 131.60246718, periDot: 0.00268329,
    node0: 76.67984255, nodeDot: -0.27769418,
  },
  earth: {
    a0: 1.00000261, aDot: 0.00000562,
    e0: 0.01671123, eDot: -0.00004392,
    i0: -0.00001531, iDot: -0.01294668,
    l0: 100.46457166, lDot: 35999.37244981,
    peri0: 102.93768193, periDot: 0.32327364,
    node0: 0, nodeDot: 0,
  },
  mars: {
    a0: 1.52371034, aDot: 0.00001847,
    e0: 0.09339410, eDot: 0.00007882,
    i0: 1.84969142, iDot: -0.00813131,
    l0: -4.55343205, lDot: 19140.30268499,
    peri0: -23.94362959, periDot: 0.44441088,
    node0: 49.55953891, nodeDot: -0.29257343,
  },
  jupiter: {
    a0: 5.20288700, aDot: -0.00011607,
    e0: 0.04838624, eDot: -0.00013253,
    i0: 1.30439695, iDot: -0.00183714,
    l0: 34.39644051, lDot: 3034.74612775,
    peri0: 14.72847983, periDot: 0.21252668,
    node0: 100.47390909, nodeDot: 0.20469106,
  },
  saturn: {
    a0: 9.53667594, aDot: -0.00125060,
    e0: 0.05386179, eDot: -0.00050991,
    i0: 2.48599187, iDot: 0.00193609,
    l0: 49.95424423, lDot: 1222.49362201,
    peri0: 92.59887831, periDot: -0.41897216,
    node0: 113.66242448, nodeDot: -0.28867794,
  },
};

const DEG_TO_RAD = Math.PI / 180;
const RAD_TO_DEG = 180 / Math.PI;

function normalizeDegrees(deg: number): number {
  return ((deg % 360) + 360) % 360;
}

/** Julian centuries since J2000.0 (JD 2451545.0), from a JS Date (UTC). */
function julianCenturiesSinceJ2000(date: Date): number {
  const julianDate = date.getTime() / 86400000 + 2440587.5;
  return (julianDate - 2451545.0) / 36525;
}

/** Solves Kepler's equation M = E - e*sin(E) for the eccentric anomaly E, via Newton-Raphson (JPL's degrees-based iteration). */
function solveKeplerEquation(meanAnomalyDeg: number, eccentricity: number): number {
  const eStarDeg = RAD_TO_DEG * eccentricity;
  let E = meanAnomalyDeg + eStarDeg * Math.sin(meanAnomalyDeg * DEG_TO_RAD);
  for (let i = 0; i < 10; i++) {
    const deltaM = meanAnomalyDeg - (E - eStarDeg * Math.sin(E * DEG_TO_RAD));
    const deltaE = deltaM / (1 - eccentricity * Math.cos(E * DEG_TO_RAD));
    E += deltaE;
    if (Math.abs(deltaE) < 1e-7) break;
  }
  return E;
}

/** Heliocentric ecliptic (J2000) position in AU for a body's Keplerian elements at T centuries since J2000. */
function heliocentricEclipticPosition(elements: KeplerianElements, T: number): { x: number; y: number; z: number } {
  const a = elements.a0 + elements.aDot * T;
  const e = elements.e0 + elements.eDot * T;
  const i = elements.i0 + elements.iDot * T;
  const L = elements.l0 + elements.lDot * T;
  const peri = elements.peri0 + elements.periDot * T; // longitude of perihelion (ϖ)
  const node = elements.node0 + elements.nodeDot * T; // longitude of ascending node (Ω)

  const argPeri = peri - node; // argument of perihelion (ω)
  let meanAnomaly = normalizeDegrees(L - peri);
  if (meanAnomaly > 180) meanAnomaly -= 360;

  const E = solveKeplerEquation(meanAnomaly, e);

  // Position in the orbital plane
  const xOrbit = a * (Math.cos(E * DEG_TO_RAD) - e);
  const yOrbit = a * Math.sqrt(1 - e * e) * Math.sin(E * DEG_TO_RAD);

  // Rotate by argument of perihelion, inclination, and node into the ecliptic frame
  const cosArgPeri = Math.cos(argPeri * DEG_TO_RAD);
  const sinArgPeri = Math.sin(argPeri * DEG_TO_RAD);
  const cosNode = Math.cos(node * DEG_TO_RAD);
  const sinNode = Math.sin(node * DEG_TO_RAD);
  const cosI = Math.cos(i * DEG_TO_RAD);
  const sinI = Math.sin(i * DEG_TO_RAD);

  const x =
    (cosArgPeri * cosNode - sinArgPeri * sinNode * cosI) * xOrbit +
    (-sinArgPeri * cosNode - cosArgPeri * sinNode * cosI) * yOrbit;
  const y =
    (cosArgPeri * sinNode + sinArgPeri * cosNode * cosI) * xOrbit +
    (-sinArgPeri * sinNode + cosArgPeri * cosNode * cosI) * yOrbit;
  const z = (sinArgPeri * sinI) * xOrbit + (cosArgPeri * sinI) * yOrbit;

  return { x, y, z };
}

/** Geocentric ecliptic longitude (deg, 0-360) for the Sun or a planet, at T centuries since J2000. */
function geocentricEclipticLongitude(planetKey: string, T: number): number {
  const earth = heliocentricEclipticPosition(KEPLERIAN_ELEMENTS.earth, T);

  if (planetKey === 'sun') {
    // The Sun's geocentric position is just the negative of Earth's heliocentric position.
    return normalizeDegrees(Math.atan2(-earth.y, -earth.x) * RAD_TO_DEG);
  }

  const elements = KEPLERIAN_ELEMENTS[planetKey];
  if (!elements) return 0;

  const body = heliocentricEclipticPosition(elements, T);
  const geoX = body.x - earth.x;
  const geoY = body.y - earth.y;
  return normalizeDegrees(Math.atan2(geoY, geoX) * RAD_TO_DEG);
}

/**
 * Abbreviated lunar ecliptic longitude (deg, 0-360) — mean longitude plus the
 * largest periodic terms of Brown's lunar theory (Meeus, "Astronomical
 * Algorithms", ch. 47, truncated series). Accurate to roughly 0.3°.
 */
function moonEclipticLongitude(T: number): number {
  const Lp = 218.3164477 + 481267.88123421 * T; // mean longitude
  const D = 297.8501921 + 445267.1114034 * T;   // mean elongation from the Sun
  const M = 357.5291092 + 35999.0502909 * T;    // Sun's mean anomaly
  const Mp = 134.9633964 + 477198.8675055 * T;  // Moon's mean anomaly
  const F = 93.2720950 + 483202.0175233 * T;    // argument of latitude

  const d2r = DEG_TO_RAD;
  const sin = (deg: number) => Math.sin(deg * d2r);

  const longitude =
    Lp +
    6.288774 * sin(Mp) +
    1.274027 * sin(2 * D - Mp) +
    0.658314 * sin(2 * D) +
    0.213618 * sin(2 * Mp) -
    0.185116 * sin(M) -
    0.114332 * sin(2 * F) +
    0.058793 * sin(2 * D - 2 * Mp) +
    0.057066 * sin(2 * D - M - Mp) +
    0.053322 * sin(2 * D + Mp) +
    0.045758 * sin(2 * D - M) -
    0.040923 * sin(M - Mp) -
    0.034720 * sin(D) -
    0.030383 * sin(M + Mp) +
    0.015327 * sin(2 * D - 2 * F) -
    0.012528 * sin(Mp + 2 * F);

  return normalizeDegrees(longitude);
}

/**
 * Generate fallback ephemeris when the Horizons Edge Function is unavailable.
 * Uses real orbital mechanics (see block comment above) rather than
 * independent linear approximations, so inferior planets stay within their
 * true elongation from the Sun.
 */
function getFallbackEphemeris(zodiacSystem: ZodiacSystem): AllPlanetEphemeris {
  const now = new Date();
  const T = julianCenturiesSinceJ2000(now);

  const planets: PlanetEphemerisData[] = [];

  for (const planetKey of PLANET_ORDER) {
    let longitude = planetKey === 'moon' ? moonEclipticLongitude(T) : geocentricEclipticLongitude(planetKey, T);

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
