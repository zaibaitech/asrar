// buruj.ts - Zodiac Signs (Burūj/البروج) Constants
// Based on classical Islamic astronomy and ʿIlm al-Ḥurūf tradition

import { ElementType } from '../components/hadad-summary/types';

export type BurjIndex = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;

export type Modality = 'Cardinal' | 'Fixed' | 'Mutable';

export interface BurjCalculation {
  burjIndex: BurjIndex;
  burjName: {
    en: string;
    ar: string;
    transliteration: string;
  };
  element: ElementType;
  modality: Modality;
  planetaryRuler: string;
  planetaryRulerAr: string;
  symbolism: string;
  spiritualQuality: string;
  temperament: string;
  season: string;
  classicalReference: {
    source: string;
    citation: string;
  };
}

// The 12 Burūj (Zodiac Signs) - Classical Islamic tradition
export const BURUJ: Record<BurjIndex, BurjCalculation> = {
  1: {
    burjIndex: 1,
    burjName: {
      en: 'Aries',
      ar: 'الحَمَل',
      transliteration: 'Al-Ḥamal'
    },
    element: 'Fire',
    modality: 'Cardinal',
    planetaryRuler: 'Mars',
    planetaryRulerAr: 'المِرِّيخ',
    symbolism: 'The Ram - Initiative and new beginnings',
    spiritualQuality: 'Courage, pioneering spirit, leadership',
    temperament: 'Hot & Dry (Choleric)',
    season: 'Spring Equinox',
    classicalReference: {
      source: 'Al-Bīrūnī - Al-Qānūn al-Masʿūdī',
      citation: 'First of the fire triplicity, initiating the zodiacal cycle'
    }
  },
  2: {
    burjIndex: 2,
    burjName: {
      en: 'Taurus',
      ar: 'الثَّوْر',
      transliteration: 'Al-Thawr'
    },
    element: 'Earth',
    modality: 'Fixed',
    planetaryRuler: 'Venus',
    planetaryRulerAr: 'الزُّهَرَة',
    symbolism: 'The Bull - Stability and material mastery',
    spiritualQuality: 'Patience, perseverance, groundedness',
    temperament: 'Cold & Dry (Melancholic)',
    season: 'Mid-Spring',
    classicalReference: {
      source: 'Al-Bīrūnī - Al-Qānūn al-Masʿūdī',
      citation: 'Fixed earth, representing stability and fertility'
    }
  },
  3: {
    burjIndex: 3,
    burjName: {
      en: 'Gemini',
      ar: 'الجَوْزَاء',
      transliteration: 'Al-Jawzāʾ'
    },
    element: 'Air',
    modality: 'Mutable',
    planetaryRuler: 'Mercury',
    planetaryRulerAr: 'عُطَارِد',
    symbolism: 'The Twins - Duality and communication',
    spiritualQuality: 'Intellectual curiosity, adaptability, exchange',
    temperament: 'Hot & Moist (Sanguine)',
    season: 'Late Spring',
    classicalReference: {
      source: 'Ibn Sīnā - Al-Ishārāt wal-Tanbīhāt',
      citation: 'Mutable air, facilitating communication between realms'
    }
  },
  4: {
    burjIndex: 4,
    burjName: {
      en: 'Cancer',
      ar: 'السَّرَطَان',
      transliteration: 'Al-Saraṭān'
    },
    element: 'Water',
    modality: 'Cardinal',
    planetaryRuler: 'Moon',
    planetaryRulerAr: 'القَمَر',
    symbolism: 'The Crab - Protection and nurturing',
    spiritualQuality: 'Emotional depth, intuition, caring',
    temperament: 'Cold & Moist (Phlegmatic)',
    season: 'Summer Solstice',
    classicalReference: {
      source: 'Al-Qazwīnī - ʿAjāʾib al-Makhlūqāt',
      citation: 'Cardinal water, initiating emotional tides'
    }
  },
  5: {
    burjIndex: 5,
    burjName: {
      en: 'Leo',
      ar: 'الأَسَد',
      transliteration: 'Al-Asad'
    },
    element: 'Fire',
    modality: 'Fixed',
    planetaryRuler: 'Sun',
    planetaryRulerAr: 'الشَّمْس',
    symbolism: 'The Lion - Majesty and creative expression',
    spiritualQuality: 'Nobility, generosity, radiance',
    temperament: 'Hot & Dry (Choleric)',
    season: 'Mid-Summer',
    classicalReference: {
      source: 'Al-Bīrūnī - Al-Qānūn al-Masʿūdī',
      citation: 'Fixed fire, representing the heart of solar power'
    }
  },
  6: {
    burjIndex: 6,
    burjName: {
      en: 'Virgo',
      ar: 'السُّنْبُلَة',
      transliteration: 'Al-Sunbula'
    },
    element: 'Earth',
    modality: 'Mutable',
    planetaryRuler: 'Mercury',
    planetaryRulerAr: 'عُطَارِد',
    symbolism: 'The Maiden - Purity and service',
    spiritualQuality: 'Discernment, refinement, dedication',
    temperament: 'Cold & Dry (Melancholic)',
    season: 'Late Summer',
    classicalReference: {
      source: 'Al-Ṣūfī - Kitāb Ṣuwar al-Kawākib',
      citation: 'Mutable earth, the harvest and practical wisdom'
    }
  },
  7: {
    burjIndex: 7,
    burjName: {
      en: 'Libra',
      ar: 'المِيزَان',
      transliteration: 'Al-Mīzān'
    },
    element: 'Air',
    modality: 'Cardinal',
    planetaryRuler: 'Venus',
    planetaryRulerAr: 'الزُّهَرَة',
    symbolism: 'The Scales - Balance and harmony',
    spiritualQuality: 'Justice, equilibrium, beauty',
    temperament: 'Hot & Moist (Sanguine)',
    season: 'Autumn Equinox',
    classicalReference: {
      source: 'Al-Qazwīnī - ʿAjāʾib al-Makhlūqāt',
      citation: 'Cardinal air, initiating social balance'
    }
  },
  8: {
    burjIndex: 8,
    burjName: {
      en: 'Scorpio',
      ar: 'العَقْرَب',
      transliteration: 'Al-ʿAqrab'
    },
    element: 'Water',
    modality: 'Fixed',
    planetaryRuler: 'Mars',
    planetaryRulerAr: 'المِرِّيخ',
    symbolism: 'The Scorpion - Transformation and depth',
    spiritualQuality: 'Intensity, regeneration, hidden wisdom',
    temperament: 'Cold & Moist (Phlegmatic)',
    season: 'Mid-Autumn',
    classicalReference: {
      source: 'Ibn ʿArabī - Futūḥāt al-Makkiyya',
      citation: 'Fixed water, representing deep spiritual transformation'
    }
  },
  9: {
    burjIndex: 9,
    burjName: {
      en: 'Sagittarius',
      ar: 'القَوْس',
      transliteration: 'Al-Qaws'
    },
    element: 'Fire',
    modality: 'Mutable',
    planetaryRuler: 'Jupiter',
    planetaryRulerAr: 'المُشْتَرِي',
    symbolism: 'The Archer - Quest for truth and expansion',
    spiritualQuality: 'Wisdom-seeking, optimism, faith',
    temperament: 'Hot & Dry (Choleric)',
    season: 'Late Autumn',
    classicalReference: {
      source: 'Al-Kindī - Fī al-Ashiʿa',
      citation: 'Mutable fire, the arrow of divine aspiration'
    }
  },
  10: {
    burjIndex: 10,
    burjName: {
      en: 'Capricorn',
      ar: 'الجَدْي',
      transliteration: 'Al-Jadī'
    },
    element: 'Earth',
    modality: 'Cardinal',
    planetaryRuler: 'Saturn',
    planetaryRulerAr: 'زُحَل',
    symbolism: 'The Goat - Ambition and discipline',
    spiritualQuality: 'Mastery, responsibility, endurance',
    temperament: 'Cold & Dry (Melancholic)',
    season: 'Winter Solstice',
    classicalReference: {
      source: 'Al-Bīrūnī - Al-Qānūn al-Masʿūdī',
      citation: 'Cardinal earth, initiating structured manifestation'
    }
  },
  11: {
    burjIndex: 11,
    burjName: {
      en: 'Aquarius',
      ar: 'الدَّلْو',
      transliteration: 'Al-Dalw'
    },
    element: 'Air',
    modality: 'Fixed',
    planetaryRuler: 'Saturn',
    planetaryRulerAr: 'زُحَل',
    symbolism: 'The Water-Bearer - Innovation and community',
    spiritualQuality: 'Humanitarianism, vision, revolution',
    temperament: 'Hot & Moist (Sanguine)',
    season: 'Mid-Winter',
    classicalReference: {
      source: 'Ibn Sīnā - Al-Shifāʾ',
      citation: 'Fixed air, pouring forth divine knowledge'
    }
  },
  12: {
    burjIndex: 12,
    burjName: {
      en: 'Pisces',
      ar: 'الحُوت',
      transliteration: 'Al-Ḥūt'
    },
    element: 'Water',
    modality: 'Mutable',
    planetaryRuler: 'Jupiter',
    planetaryRulerAr: 'المُشْتَرِي',
    symbolism: 'The Fish - Transcendence and compassion',
    spiritualQuality: 'Mysticism, empathy, dissolution of ego',
    temperament: 'Cold & Moist (Phlegmatic)',
    season: 'Late Winter',
    classicalReference: {
      source: 'Al-Ghazālī - Mishkāt al-Anwār',
      citation: 'Mutable water, completing the cycle in divine unity'
    }
  }
};

/**
 * Calculate Burj from Kabīr (total Abjad value)
 * Formula: (kabir % 12), where 0 = 12
 */
export function calculateBurj(kabir: number): BurjCalculation {
  const remainder = kabir % 12;
  const burjIndex = (remainder === 0 ? 12 : remainder) as BurjIndex;
  return BURUJ[burjIndex];
}

/**
 * Get all Burūj of a specific element
 */
export function getBurujByElement(element: ElementType): BurjCalculation[] {
  return Object.values(BURUJ).filter(burj => burj.element === element);
}

/**
 * Get all Burūj of a specific modality
 */
export function getBurujByModality(modality: Modality): BurjCalculation[] {
  return Object.values(BURUJ).filter(burj => burj.modality === modality);
}
