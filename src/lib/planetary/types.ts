/**
 * Planetary Module Types
 * Extracted from asrar-mobile for web app integration
 */

export type Planet = 'Sun' | 'Moon' | 'Mars' | 'Mercury' | 'Jupiter' | 'Venus' | 'Saturn';
export type Element = 'fire' | 'water' | 'air' | 'earth';
export type DayOfWeek = 'Sunday' | 'Monday' | 'Tuesday' | 'Wednesday' | 'Thursday' | 'Friday' | 'Saturday';

export type ZodiacSign = 
  | 'aries' | 'taurus' | 'gemini' | 'cancer' 
  | 'leo' | 'virgo' | 'libra' | 'scorpio' 
  | 'sagittarius' | 'capricorn' | 'aquarius' | 'pisces';

export type AlignmentStatus = 'ACT' | 'MAINTAIN' | 'HOLD';

export interface PlanetInfo {
  planet: Planet;
  symbol: string;
  arabicName: string;
  element: Element;
}

export interface PlanetaryHour {
  planet: Planet;
  planetInfo: PlanetInfo;
  hourNumber: number; // 1-24
  startTime: Date;
  endTime: Date;
  isDaytime: boolean;
}

export interface PlanetaryHourData {
  dayRulerPlanet: Planet;
  dayRulerInfo: PlanetInfo;
  currentHour: PlanetaryHour;
  nextHour: PlanetaryHour;
  afterNextHour?: PlanetaryHour;
  countdownSeconds: number;
}

export interface ZodiacInfo {
  key: ZodiacSign;
  element: Element;
  symbol: string;
  arabicName: string;
}

export interface PlanetTransitInfo {
  planetKey: string;
  planetName: string;
  planetNameAr: string;
  planetSymbol: string;
  elementKey: Element;
  zodiacKey: ZodiacSign;
  zodiacSymbol: string;
  hourNumber: number;
  isDaytime: boolean;
  updatedAt: string;
  nextHourStartTime: Date;
  countdownSeconds: number;
}

export interface DayRulerInfo {
  dayName: string;
  dayNameArabic: string;
  planet: Planet;
  planetArabic: string;
  element: Element;
  elementArabic: string;
  elementEmoji: string;
  elementDescription: string;
  bestFor: string[];
  difficulty: 'Easy' | 'Moderate' | 'Advanced';
}

/**
 * Ilm Nujum Status Badge Tiers
 */
export type IlmNujumBadgeTier = 'auspicious' | 'proceed' | 'neutral' | 'cautious' | 'inauspicious';

export interface IlmNujumBadge {
  tier: IlmNujumBadgeTier;
  labelEn: string;
  labelAr: string;
  color: string;
  score: number; // 0-100
}
