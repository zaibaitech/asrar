/**
 * Shared API Types for Asrār Backend
 * Standardized request/response structures for mobile app consumption
 */

// ============================================================================
// STANDARD API RESPONSE WRAPPER
// ============================================================================

export interface ApiResponse<T = any> {
  success: boolean;
  data?: T;
  error?: ApiError;
  timestamp: string;
}

export interface ApiError {
  code: string;
  message: string;
  details?: any;
}

// ============================================================================
// NAME DESTINY API TYPES
// ============================================================================

export interface NameDestinyRequest {
  name: string;
  motherName?: string;
  birthDate?: string; // ISO 8601 format
  abjadSystem?: 'maghribi' | 'mashriqi';
  language?: 'en' | 'fr' | 'ar';
}

export interface NameDestinyResponse {
  // Core calculations
  kabir: number;
  saghir: number;
  hadath: number;
  
  // Element data
  element: {
    index: 1 | 2 | 3 | 4;
    en: string;
    fr: string;
    ar: string;
    icon: string;
    qualityEn: string;
    qualityFr: string;
  };
  
  // Zodiac data
  burj: {
    index: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
    en: string;
    fr: string;
    ar: string;
    symbol: string;
    planet: string;
  };
  
  // Quranic resonance
  quranResonance: {
    surahNumber: number;
    surahName: string;
    surahNameArabic: string;
    ayahNumber: number;
    totalAyahsInSurah: number;
    quranLink: string;
  };
  
  // Divine name resonance
  divineNameResonance: {
    number: number;
    arabic: string;
    transliteration: string;
    meaningEn: string;
    meaningFr: string;
    spiritualInfluence: string;
    spiritualInfluenceFr: string;
    reflection: string;
    reflectionFr: string;
  };
  
  // Numerology (if birthDate provided)
  lifePathNumbers?: {
    trueLifePath: number;
    expressionNumber: number;
    soulUrgeNumber: number;
    personalityNumber: number;
  };
  
  // Mother's influence (if motherName provided)
  motherInfluence?: {
    element: string;
    elementArabic: string;
    kabir: number;
    saghir: number;
    hadath: number;
  };
  
  // Spiritual insights
  destiny: {
    name: string;
    quality: string;
    description: string;
  };
  
  soulUrge: {
    name: string;
    quality: string;
    description: string;
  };
  
  personality: {
    name: string;
    quality: string;
    description: string;
  };
}

// ============================================================================
// ISTIKHARA API TYPES
// ============================================================================

export interface IstikharaRequest {
  personName: string;
  motherName: string;
  language?: 'en' | 'fr' | 'ar';
}

export interface IstikharaResponse {
  personTotal: number;
  motherTotal: number;
  combinedTotal: number;
  burujRemainder: number;
  // Return full buruj profile - let client handle language selection
  burujProfile: any; // BurujProfile from istikhara/types.ts
  repetitionCount: number;
}

// ============================================================================
// COMPATIBILITY API TYPES
// ============================================================================

export interface CompatibilityRequest {
  person1: {
    name: string;
    motherName?: string;
  };
  person2: {
    name: string;
    motherName?: string;
  };
  analysisMode?: 'basic' | 'four-layer';
  language?: 'en' | 'fr' | 'ar';
}

export interface CompatibilityResponse {
  overallScore: number;
  overallQuality: 'excellent' | 'good' | 'moderate' | 'challenging';
  
  methods: {
    spiritualDestiny: {
      score: number;
      remainder: number;
      quality: string;
      description: string;
      descriptionFrench?: string;
      descriptionArabic?: string;
    };
    
    elementalTemperament: {
      score: number;
      elements: [string, string];
      chemistry: string;
      description: string;
      descriptionFrench?: string;
      descriptionArabic?: string;
    };
    
    planetaryCosmic: {
      score: number;
      planets: [string, string];
      relationship: string;
      description: string;
      descriptionFrench?: string;
      descriptionArabic?: string;
    };
  };
  
  fourLayerAnalysis?: {
    layer1_dailyLife?: {
      score: number;
      elements: string;
      description: string;
    };
    layer2_emotional?: {
      score: number;
      elements: string;
      description: string;
    };
    layer3_crossDynamicA?: {
      score: number;
      elements: string;
      description: string;
    };
    layer4_crossDynamicB?: {
      score: number;
      elements: string;
      description: string;
    };
  };
  
  recommendation: string;
  recommendationFrench?: string;
  recommendationArabic?: string;
}

// ============================================================================
// PHASE 2: DIVINE NAMES ANALYSIS API TYPES
// ============================================================================

export interface DivineNamesRequest {
  name: string;
  motherName?: string;
  abjadSystem?: 'maghribi' | 'mashriqi';
  language?: 'en' | 'fr' | 'ar';
}

export interface DivineNamesResponse {
  personName: string;
  personNameArabic: string;
  calculations: {
    kabir: number;
    saghir: number;
    divineNameNumber: number; // 1-99
  };
  
  primaryDivineName: {
    number: number;
    arabic: string;
    transliteration: string;
    meaning: string;
    spiritualInfluence: string;
    reflection: string;
  };
  
  secondaryDivineNames?: {
    fromSaghir: {
      number: number;
      arabic: string;
      transliteration: string;
      meaning: string;
    };
    fromElement?: {
      number: number;
      arabic: string;
      transliteration: string;
      meaning: string;
    };
  };
  
  spiritualPractices: {
    dhikrRecommendation: string;
    repetitionCount: number;
    bestTimes: string[];
    additionalPractices: string[];
  };
  
  element: {
    name: string;
    icon: string;
    qualities: string[];
  };
}

// ============================================================================
// PHASE 2: LIFE PATH ANALYSIS API TYPES
// ============================================================================

export interface LifePathRequest {
  name: string;
  birthDate: string; // ISO 8601 format (required)
  birthTime?: string; // HH:MM format (optional)
  abjadSystem?: 'maghribi' | 'mashriqi';
  language?: 'en' | 'fr' | 'ar';
}

export interface LifePathResponse {
  personName: string;
  birthDate: string;
  
  coreNumbers: {
    lifePathNumber: number;
    expressionNumber: number;
    soulUrgeNumber: number;
    personalityNumber: number;
    birthdayNumber: number;
  };
  
  interpretations: {
    lifePath: {
      title: string;
      description: string;
      strengths: string[];
      challenges: string[];
      careerPaths: string[];
    };
    expression: {
      title: string;
      description: string;
      talents: string[];
    };
    soulUrge: {
      title: string;
      description: string;
      innerDesires: string[];
    };
    personality: {
      title: string;
      description: string;
      firstImpression: string;
    };
  };
  
  spiritualGuidance: {
    divineNameResonance: {
      number: number;
      arabic: string;
      meaning: string;
    };
    quranVerse: {
      surah: string;
      ayah: number;
      link: string;
    };
  };
}

// ============================================================================
// PHASE 2: QURAN RESONANCE API TYPES
// ============================================================================

export interface QuranResonanceRequest {
  input: string; // Can be name or number
  inputType?: 'name' | 'number'; // Auto-detect if not provided
  abjadSystem?: 'maghribi' | 'mashriqi';
  language?: 'en' | 'fr' | 'ar';
}

export interface QuranResonanceResponse {
  input: string;
  inputType: 'name' | 'number';
  numericalValue: number;
  
  primaryResonance: {
    surahNumber: number;
    surahName: string;
    surahNameArabic: string;
    ayahNumber: number;
    totalAyahs: number;
    link: string;
  };
  
  thematicConnections: {
    surahTheme: string;
    spiritualMessage: string;
    practicalGuidance: string;
  };
  
  additionalResonances?: {
    bySaghir: {
      surahNumber: number;
      surahName: string;
      ayahNumber: number;
    };
    byElement?: {
      surahNumber: number;
      surahName: string;
      ayahNumber: number;
    };
  };
  
  reflectionPrompt: string;
}

// ============================================================================
// PHASE 2: COLOR RESONANCE API TYPES
// ============================================================================

export interface ColorResonanceRequest {
  name?: string;
  element?: 'fire' | 'air' | 'water' | 'earth';
  burj?: number; // 1-12
  calculateFromName?: boolean; // If true, calculate element/burj from name
  abjadSystem?: 'maghribi' | 'mashriqi';
  language?: 'en' | 'fr' | 'ar';
}

export interface ColorResonanceResponse {
  element: {
    name: string;
    icon: string;
  };
  burj: {
    name: string;
    symbol: string;
  };
  
  healingColors: {
    primary: {
      name: string;
      hex: string;
      meaning: string;
      usage: string;
    };
    secondary: {
      name: string;
      hex: string;
      meaning: string;
      usage: string;
    };
    supportive: Array<{
      name: string;
      hex: string;
      occasion: string;
    }>;
  };
  
  chakraAlignment: {
    primaryChakra: {
      name: string;
      position: string;
      color: string;
      benefits: string[];
    };
    balancingPractices: string[];
  };
  
  visualTherapy: {
    recommendations: string[];
    colorMeditation: string;
    environmentalSuggestions: string[];
  };
}

// ============================================================================
// PHASE 3: PRAYER TIMES API TYPES
// ============================================================================

export interface PrayerTimesRequest {
  latitude: number;
  longitude: number;
  date?: string; // ISO 8601 format, defaults to today
  calculationMethod?: 'MuslimWorldLeague' | 'ISNA' | 'Egyptian' | 'UmmAlQura' | 'Karachi' | 'Tehran' | 'Jafari' | 'Gulf' | 'Kuwait' | 'Qatar' | 'Singapore' | 'France' | 'Turkey' | 'Dubai' | 'MoonsightingCommittee' | 'NorthAmerica';
  timezone?: string; // e.g., "America/New_York", "Asia/Riyadh"
  language?: 'en' | 'fr' | 'ar';
}

export interface PrayerTimesResponse {
  location: {
    latitude: number;
    longitude: number;
    timezone: string;
  };
  date: string; // ISO 8601
  calculationMethod: string;
  
  prayers: {
    fajr: {
      time: string; // ISO 8601
      localTime: string; // HH:mm format
    };
    sunrise: {
      time: string;
      localTime: string;
    };
    dhuhr: {
      time: string;
      localTime: string;
    };
    asr: {
      time: string;
      localTime: string;
    };
    maghrib: {
      time: string;
      localTime: string;
    };
    isha: {
      time: string;
      localTime: string;
    };
  };
  
  specialTimes: {
    tahajjud: {
      time: string;
      localTime: string;
      description: string;
    };
    ishraq: {
      time: string;
      localTime: string;
      description: string;
    };
    duha: {
      time: string;
      localTime: string;
      description: string;
    };
  };
  
  qiblaDirection: {
    degrees: number | null;
    direction: string; // e.g., "Northeast"
  };
  
  currentPrayer: {
    current: string; // e.g., "Dhuhr" or "Between Prayers"
    next: string;
    nextTime: string;
    timeUntil: string;
    spiritualGuidance: string;
  };
}

// ============================================================================
// ============================================================================
// DIVINE TIMING API TYPES
// ============================================================================

export interface DivineTimingRequest {
  // Location for planetary hour calculations
  latitude?: number;
  longitude?: number;
  
  // Date/time for calculations (defaults to now)
  dateTime?: string; // ISO 8601
  
  // Optional: Personal data for alignment scoring
  name?: string;
  birthDate?: string; // ISO 8601
  
  // Language preference
  language?: 'en' | 'fr' | 'ar';
}

export interface DivineTimingResponse {
  // Current timing data
  currentHour: {
    planet: {
      name: string;
      nameArabic: string;
      element: string;
      elementArabic: string;
    };
    startTime: string; // ISO 8601
    endTime: string; // ISO 8601
    durationMinutes: number;
    isDayHour: boolean;
  };
  
  // Lunar mansion data
  lunarMansion: {
    number: number;
    nameArabic: string;
    nameTransliteration: string;
    nameEn: string;
    nameFr: string;
    element: string;
    planetaryRuler: string;
    moonPhase: string;
    daysInMansion: number;
    spiritualFocus: string; // Language-specific
    favorableFor: string[]; // Language-specific
    unfavorableFor: string[]; // Language-specific
  };
  
  // Next 24 hours (all planetary hours)
  upcomingHours: Array<{
    planet: {
      name: string;
      nameArabic: string;
      element: string;
    };
    startTime: string;
    endTime: string;
    isDayHour: boolean;
    recommendation?: string; // Language-specific
  }>;
  
  // Personal alignment (if name provided)
  personalAlignment?: {
    userElement: string;
    userPlanet: string;
    alignmentScore: number; // 0-100
    alignmentQuality: 'perfect' | 'strong' | 'moderate' | 'weak' | 'opposing';
    guidance: string; // Language-specific
    bestUpcomingHour?: {
      planet: string;
      startTime: string;
      hoursFromNow: number;
    };
  };
  
  // Spiritual guidance
  spiritualGuidance: {
    currentActivity: string; // Language-specific
    avoid: string; // Language-specific
    dhikrRecommendation?: {
      divineName: string;
      divineNameArabic: string;
      count: number;
      timing: string;
    };
  };
  
  // Location info
  location: {
    latitude: number;
    longitude: number;
    timezone?: string;
  };
  
  // Calculation metadata
  calculationTime: string; // ISO 8601
}

// VALIDATION ERROR CODES
// ============================================================================

export enum ApiErrorCode {
  INVALID_NAME = 'INVALID_NAME',
  INVALID_DATE = 'INVALID_DATE',
  INVALID_LANGUAGE = 'INVALID_LANGUAGE',
  INVALID_ABJAD_SYSTEM = 'INVALID_ABJAD_SYSTEM',
  MISSING_REQUIRED_FIELD = 'MISSING_REQUIRED_FIELD',
  INVALID_SCRIPT = 'INVALID_SCRIPT',
  NAME_TOO_LONG = 'NAME_TOO_LONG',
  INVALID_COORDINATES = 'INVALID_COORDINATES',
  CALCULATION_ERROR = 'CALCULATION_ERROR',
  INTERNAL_ERROR = 'INTERNAL_ERROR',
}
