import { PlanetInfo } from '../types/planetary';
import { ElementType } from '../components/hadad-summary/types';

// Existing basic planet info (for backward compatibility)
export const PLANET_INFO: Record<string, PlanetInfo> = {
  Sun: { 
    name: 'Sun', 
    nameArabic: 'الشمس', 
    element: 'fire', 
    elementArabic: 'نار' 
  },
  Moon: { 
    name: 'Moon', 
    nameArabic: 'القمر', 
    element: 'water', 
    elementArabic: 'ماء' 
  },
  Mars: { 
    name: 'Mars', 
    nameArabic: 'المريخ', 
    element: 'fire', 
    elementArabic: 'نار' 
  },
  Mercury: { 
    name: 'Mercury', 
    nameArabic: 'عطارد', 
    element: 'air', 
    elementArabic: 'هواء' 
  },
  Jupiter: { 
    name: 'Jupiter', 
    nameArabic: 'المشتري', 
    element: 'fire', 
    elementArabic: 'نار' 
  },
  Venus: { 
    name: 'Venus', 
    nameArabic: 'الزهرة', 
    element: 'earth', 
    elementArabic: 'تراب' 
  },
  Saturn: { 
    name: 'Saturn', 
    nameArabic: 'زحل', 
    element: 'earth', 
    elementArabic: 'تراب' 
  }
};

// ============================================================================
// ENHANCED PLANETARY SIGNATURES - For Calculator Module
// ============================================================================

export type PlanetType = 'Sun' | 'Moon' | 'Mars' | 'Mercury' | 'Jupiter' | 'Venus' | 'Saturn';

export interface PlanetarySignature {
  planet: PlanetType;
  planetArabic: string;
  planetTransliteration: string;
  dayOfWeek: string;
  dayArabic: string;
  hourNumber: 1 | 2 | 3 | 4 | 5 | 6 | 7;
  metal: string;
  metalArabic: string;
  color: string;
  colorArabic: string;
  element: ElementType;
  temperament: string;
  spiritualQuality: string;
  dhikrRecommendation?: {
    divineName: string;
    divineNameArabic: string;
    count: number;
    timing: string;
  };
  classicalAttributes: {
    nature: string;
    influence: string;
    realm: string;
  };
}

// The 7 Classical Planets (Al-Kawākib al-Sabʿa/الكواكب السبعة)
export const PLANETARY_SIGNATURES: Record<PlanetType, PlanetarySignature> = {
  Sun: {
    planet: 'Sun',
    planetArabic: 'الشَّمْس',
    planetTransliteration: 'Al-Shams',
    dayOfWeek: 'Sunday',
    dayArabic: 'الأَحَد',
    hourNumber: 1,
    metal: 'Gold',
    metalArabic: 'الذَّهَب',
    color: 'Golden Yellow',
    colorArabic: 'الأَصْفَر الذَّهَبِيّ',
    element: 'Fire',
    temperament: 'Hot & Dry',
    spiritualQuality: 'Divine radiance, leadership, vitality, nobility',
    dhikrRecommendation: {
      divineName: 'Al-Nūr (The Light)',
      divineNameArabic: 'النُّور',
      count: 266,
      timing: 'At sunrise or solar noon'
    },
    classicalAttributes: {
      nature: 'Masculine, diurnal, benefic',
      influence: 'Rulership, authority, life force',
      realm: 'Kings, fathers, spiritual leaders'
    }
  },
  Moon: {
    planet: 'Moon',
    planetArabic: 'القَمَر',
    planetTransliteration: 'Al-Qamar',
    dayOfWeek: 'Monday',
    dayArabic: 'الإِثْنَيْن',
    hourNumber: 2,
    metal: 'Silver',
    metalArabic: 'الفِضَّة',
    color: 'Silver White',
    colorArabic: 'الأَبْيَض الفِضِّيّ',
    element: 'Water',
    temperament: 'Cold & Moist',
    spiritualQuality: 'Receptivity, intuition, emotional depth, nurturing',
    dhikrRecommendation: {
      divineName: 'Ar-Raḥmān (The Most Merciful)',
      divineNameArabic: 'الرَّحْمٰن',
      count: 298,
      timing: 'During lunar hours, especially at night'
    },
    classicalAttributes: {
      nature: 'Feminine, nocturnal, benefic',
      influence: 'Emotions, cycles, subconscious',
      realm: 'Mothers, common people, the soul'
    }
  },
  Mars: {
    planet: 'Mars',
    planetArabic: 'المِرِّيخ',
    planetTransliteration: 'Al-Mirrīkh',
    dayOfWeek: 'Tuesday',
    dayArabic: 'الثُّلَاثَاء',
    hourNumber: 3,
    metal: 'Iron',
    metalArabic: 'الحَدِيد',
    color: 'Red',
    colorArabic: 'الأَحْمَر',
    element: 'Fire',
    temperament: 'Hot & Dry (Extreme)',
    spiritualQuality: 'Courage, action, will, spiritual struggle (jihād)',
    dhikrRecommendation: {
      divineName: 'Al-Qawiyy (The Strong)',
      divineNameArabic: 'القَوِيّ',
      count: 116,
      timing: 'Tuesday mornings or first hour after sunrise'
    },
    classicalAttributes: {
      nature: 'Masculine, nocturnal, malefic (transformative)',
      influence: 'Energy, conflict, transformation',
      realm: 'Warriors, surgeons, those who act'
    }
  },
  Mercury: {
    planet: 'Mercury',
    planetArabic: 'عُطَارِد',
    planetTransliteration: 'ʿUṭārid',
    dayOfWeek: 'Wednesday',
    dayArabic: 'الأَرْبِعَاء',
    hourNumber: 4,
    metal: 'Quicksilver (Mercury)',
    metalArabic: 'الزِّئْبَق',
    color: 'Multi-colored / Iridescent',
    colorArabic: 'مُتَعَدِّد الأَلْوَان',
    element: 'Air',
    temperament: 'Variable (adapts to neighbors)',
    spiritualQuality: 'Knowledge, communication, intellect, sacred writing',
    dhikrRecommendation: {
      divineName: 'Al-ʿAlīm (The All-Knowing)',
      divineNameArabic: 'العَلِيم',
      count: 150,
      timing: 'Wednesday mornings, ideal for study'
    },
    classicalAttributes: {
      nature: 'Neutral, convertible, benefic when well-placed',
      influence: 'Learning, commerce, travel, language',
      realm: 'Scholars, merchants, scribes, students'
    }
  },
  Jupiter: {
    planet: 'Jupiter',
    planetArabic: 'المُشْتَرِي',
    planetTransliteration: 'Al-Mushtarī',
    dayOfWeek: 'Thursday',
    dayArabic: 'الخَمِيس',
    hourNumber: 5,
    metal: 'Tin',
    metalArabic: 'القَصْدِير',
    color: 'Royal Blue / Purple',
    colorArabic: 'الأَزْرَق المَلَكِيّ',
    element: 'Fire',
    temperament: 'Hot & Moist (Moderate)',
    spiritualQuality: 'Wisdom, expansion, generosity, divine grace',
    dhikrRecommendation: {
      divineName: 'Al-Karīm (The Generous)',
      divineNameArabic: 'الكَرِيم',
      count: 270,
      timing: 'Thursday before sunset, especially for blessings'
    },
    classicalAttributes: {
      nature: 'Masculine, diurnal, benefic (great fortune)',
      influence: 'Growth, prosperity, law, philosophy',
      realm: 'Judges, teachers, religious leaders'
    }
  },
  Venus: {
    planet: 'Venus',
    planetArabic: 'الزُّهَرَة',
    planetTransliteration: 'Al-Zuhra',
    dayOfWeek: 'Friday',
    dayArabic: 'الجُمُعَة',
    hourNumber: 6,
    metal: 'Copper',
    metalArabic: 'النُّحَاس',
    color: 'Green / Rose',
    colorArabic: 'الأَخْضَر / الوَرْدِيّ',
    element: 'Earth',
    temperament: 'Cold & Moist (Moderate)',
    spiritualQuality: 'Beauty, harmony, love, divine attraction',
    dhikrRecommendation: {
      divineName: 'Al-Wadūd (The Loving)',
      divineNameArabic: 'الوَدُود',
      count: 20,
      timing: 'Friday afternoons, for harmony and peace'
    },
    classicalAttributes: {
      nature: 'Feminine, nocturnal, benefic',
      influence: 'Love, beauty, art, relationships',
      realm: 'Artists, lovers, peacemakers'
    }
  },
  Saturn: {
    planet: 'Saturn',
    planetArabic: 'زُحَل',
    planetTransliteration: 'Zuḥal',
    dayOfWeek: 'Saturday',
    dayArabic: 'السَّبْت',
    hourNumber: 7,
    metal: 'Lead',
    metalArabic: 'الرَّصَاص',
    color: 'Black / Dark Blue',
    colorArabic: 'الأَسْوَد / الأَزْرَق الدَّاكِن',
    element: 'Earth',
    temperament: 'Cold & Dry (Extreme)',
    spiritualQuality: 'Discipline, patience, divine wisdom through trials',
    dhikrRecommendation: {
      divineName: 'Al-Ḥakīm (The Wise)',
      divineNameArabic: 'الحَكِيم',
      count: 78,
      timing: 'Saturday evenings, for patience and endurance'
    },
    classicalAttributes: {
      nature: 'Masculine, diurnal, malefic (teaching through difficulty)',
      influence: 'Time, karma, structure, limitations',
      realm: 'Elders, ascetics, those who endure'
    }
  }
};

/**
 * Get planetary signature by day of week
 */
export function getPlanetByDay(day: string): PlanetarySignature | undefined {
  return Object.values(PLANETARY_SIGNATURES).find(
    p => p.dayOfWeek.toLowerCase() === day.toLowerCase()
  );
}

/**
 * Get planetary signature by hour number (1-7)
 */
export function getPlanetByHour(hour: 1 | 2 | 3 | 4 | 5 | 6 | 7): PlanetarySignature {
  return Object.values(PLANETARY_SIGNATURES).find(p => p.hourNumber === hour)!;
}

/**
 * Get planets by element
 */
export function getPlanetsByElement(element: ElementType): PlanetarySignature[] {
  return Object.values(PLANETARY_SIGNATURES).filter(p => p.element === element);
}

/**
 * Calculate planetary hour from total (simplified method)
 * Maps 1-7 cyclically based on digital root
 */
export function calculatePlanetaryHour(total: number): 1 | 2 | 3 | 4 | 5 | 6 | 7 {
  const reduced = ((total - 1) % 7) + 1;
  return reduced as 1 | 2 | 3 | 4 | 5 | 6 | 7;
}

// Classical planetary sequence by day of week
// Sunday = 0, Monday = 1, etc.
// Each sequence has 24 elements: 12 for day hours (indices 0-11), 12 for night hours (indices 12-23)
export const PLANETARY_SEQUENCES: Record<number, string[]> = {
  0: [ // Sunday - Sun's day
    // Day hours (12)
    'Sun', 'Venus', 'Mercury', 'Moon', 'Saturn', 'Jupiter', 'Mars', 'Sun', 'Venus', 'Mercury', 'Moon', 'Saturn',
    // Night hours (12)
    'Jupiter', 'Mars', 'Sun', 'Venus', 'Mercury', 'Moon', 'Saturn', 'Jupiter', 'Mars', 'Sun', 'Venus', 'Mercury'
  ],
  1: [ // Monday - Moon's day
    // Day hours (12)
    'Moon', 'Saturn', 'Jupiter', 'Mars', 'Sun', 'Venus', 'Mercury', 'Moon', 'Saturn', 'Jupiter', 'Mars', 'Sun',
    // Night hours (12)
    'Venus', 'Mercury', 'Moon', 'Saturn', 'Jupiter', 'Mars', 'Sun', 'Venus', 'Mercury', 'Moon', 'Saturn', 'Jupiter'
  ],
  2: [ // Tuesday - Mars' day
    // Day hours (12)
    'Mars', 'Sun', 'Venus', 'Mercury', 'Moon', 'Saturn', 'Jupiter', 'Mars', 'Sun', 'Venus', 'Mercury', 'Moon',
    // Night hours (12)
    'Saturn', 'Jupiter', 'Mars', 'Sun', 'Venus', 'Mercury', 'Moon', 'Saturn', 'Jupiter', 'Mars', 'Sun', 'Venus'
  ],
  3: [ // Wednesday - Mercury's day
    // Day hours (12)
    'Mercury', 'Moon', 'Saturn', 'Jupiter', 'Mars', 'Sun', 'Venus', 'Mercury', 'Moon', 'Saturn', 'Jupiter', 'Mars',
    // Night hours (12)
    'Sun', 'Venus', 'Mercury', 'Moon', 'Saturn', 'Jupiter', 'Mars', 'Sun', 'Venus', 'Mercury', 'Moon', 'Saturn'
  ],
  4: [ // Thursday - Jupiter's day
    // Day hours (12)
    'Jupiter', 'Mars', 'Sun', 'Venus', 'Mercury', 'Moon', 'Saturn', 'Jupiter', 'Mars', 'Sun', 'Venus', 'Mercury',
    // Night hours (12)
    'Moon', 'Saturn', 'Jupiter', 'Mars', 'Sun', 'Venus', 'Mercury', 'Moon', 'Saturn', 'Jupiter', 'Mars', 'Sun'
  ],
  5: [ // Friday - Venus' day
    // Day hours (12)
    'Venus', 'Mercury', 'Moon', 'Saturn', 'Jupiter', 'Mars', 'Sun', 'Venus', 'Mercury', 'Moon', 'Saturn', 'Jupiter',
    // Night hours (12)
    'Mars', 'Sun', 'Venus', 'Mercury', 'Moon', 'Saturn', 'Jupiter', 'Mars', 'Sun', 'Venus', 'Mercury', 'Moon'
  ],
  6: [ // Saturday - Saturn's day
    // Day hours (12)
    'Saturn', 'Jupiter', 'Mars', 'Sun', 'Venus', 'Mercury', 'Moon', 'Saturn', 'Jupiter', 'Mars', 'Sun', 'Venus',
    // Night hours (12)
    'Mercury', 'Moon', 'Saturn', 'Jupiter', 'Mars', 'Sun', 'Venus', 'Mercury', 'Moon', 'Saturn', 'Jupiter', 'Mars'
  ]
};
