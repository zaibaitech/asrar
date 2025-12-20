/**
 * ========================================
 * DIVINE TIMING API ENDPOINT
 * ========================================
 * 
 * POST /api/v1/divine-timing
 * 
 * Calculate current planetary hour, lunar mansion, and optimal timing
 * for spiritual activities based on classical Islamic astronomy.
 * 
 * Features:
 * - Real-time planetary hour calculation
 * - Lunar mansion (Manzil) detection
 * - Personal alignment scoring
 * - 24-hour timing forecast
 * - Spiritual activity recommendations
 * - Multi-language support (EN/FR/AR)
 * 
 * Uses:
 * - SunCalc for sunrise/sunset (planetary hours)
 * - Astronomy-engine for lunar position
 * - Classical Chaldean planetary order
 */

import { NextResponse } from 'next/server';
import type { 
  ApiResponse, 
  DivineTimingRequest, 
  DivineTimingResponse, 
  ApiErrorCode 
} from '../../../../src/types/api';
import type { ApiError } from '../../../../src/types/api';
import { validateCoordinates, validateLanguage, validateDate } from '../../../../src/lib/api-validation';
import { calculateAccuratePlanetaryHours, getCurrentPlanetaryHour } from '../../../../src/utils/planetaryHours';
import { getCurrentLunarMansion } from '../../../../src/lib/lunarMansions';
import { calculateSimpleDestiny } from '../../../../src/lib/server-calculations';
import type { AccuratePlanetaryHour } from '../../../../src/types/planetary';

// Default location (Makkah)
const DEFAULT_LOCATION = {
  latitude: 21.4225,
  longitude: 39.8262,
};

export async function POST(request: Request) {
  try {
    const body: DivineTimingRequest = await request.json();
    
    // Extract and validate parameters
    const language = body.language || 'en';
    const langValidation = validateLanguage(language);
    if (!langValidation.isValid) {
      return NextResponse.json<ApiResponse<null>>({
        success: false,
        error: langValidation.error as ApiError,
        timestamp: new Date().toISOString(),
      }, { status: 400 });
    }

    // Validate coordinates if provided
    let latitude = body.latitude || DEFAULT_LOCATION.latitude;
    let longitude = body.longitude || DEFAULT_LOCATION.longitude;
    
    if (body.latitude !== undefined || body.longitude !== undefined) {
      const coordValidation = validateCoordinates(latitude, longitude);
      if (!coordValidation.isValid) {
        return NextResponse.json<ApiResponse<null>>({
          success: false,
          error: coordValidation.error as ApiError,
          timestamp: new Date().toISOString(),
        }, { status: 400 });
      }
    }

    // Parse and validate datetime
    let calculationDate = new Date();
    if (body.dateTime) {
      const dateValidation = validateDate(body.dateTime);
      if (!dateValidation.isValid) {
        return NextResponse.json<ApiResponse<null>>({
          success: false,
          error: dateValidation.error as ApiError,
          timestamp: new Date().toISOString(),
        }, { status: 400 });
      }
      calculationDate = new Date(body.dateTime);
    }

    // ========================================
    // CALCULATE PLANETARY HOURS
    // ========================================
    
    const planetaryHours = calculateAccuratePlanetaryHours(
      calculationDate,
      latitude,
      longitude
    );
    
    const currentHour = getCurrentPlanetaryHour(planetaryHours);
    
    if (!currentHour) {
      return NextResponse.json<ApiResponse<null>>({
        success: false,
        error: {
          code: 'CALCULATION_ERROR' as ApiErrorCode,
          message: 'Unable to calculate current planetary hour',
        },
        timestamp: new Date().toISOString(),
      }, { status: 500 });
    }

    // ========================================
    // CALCULATE LUNAR MANSION
    // ========================================
    
    const currentMansion = getCurrentLunarMansion(calculationDate);
    const mansion = currentMansion.mansion;

    // ========================================
    // PERSONAL ALIGNMENT (if name provided)
    // ========================================
    
    let personalAlignment: DivineTimingResponse['personalAlignment'] = undefined;
    
    if (body.name) {
      try {
        const destiny = calculateSimpleDestiny(body.name);
        const userElement = destiny.element.en.toLowerCase();
        const hourElement = currentHour.planet.element;
        
        // Calculate alignment score based on elemental harmony
        const alignmentScore = calculateElementalAlignment(userElement, hourElement);
        const alignmentQuality = getAlignmentQuality(alignmentScore);
        
        // Find best upcoming hour for user's element
        const bestHour = findBestUpcomingHour(planetaryHours, userElement, calculationDate);
        
        personalAlignment = {
          userElement: destiny.element.en,
          userPlanet: destiny.burj.planet,
          alignmentScore,
          alignmentQuality,
          guidance: getAlignmentGuidance(alignmentQuality, language),
          bestUpcomingHour: bestHour ? {
            planet: bestHour.planet.name,
            startTime: bestHour.startTime.toISOString(),
            hoursFromNow: Math.round((bestHour.startTime.getTime() - calculationDate.getTime()) / (1000 * 60 * 60)),
          } : undefined,
        };
      } catch (error) {
        console.warn('Failed to calculate personal alignment:', error);
      }
    }

    // ========================================
    // SPIRITUAL GUIDANCE
    // ========================================
    
    const spiritualGuidance = getHourlyGuidance(
      currentHour.planet.name,
      mansion.nameTransliteration,
      language
    );

    // ========================================
    // UPCOMING HOURS (next 24)
    // ========================================
    
    const upcomingHours = planetaryHours
      .filter((h: AccuratePlanetaryHour) => h.startTime > calculationDate)
      .slice(0, 24)
      .map((h: AccuratePlanetaryHour) => ({
        planet: {
          name: h.planet.name,
          nameArabic: h.planet.nameArabic,
          element: h.planet.element,
        },
        startTime: h.startTime.toISOString(),
        endTime: h.endTime.toISOString(),
        isDayHour: h.isDayHour,
        recommendation: getPlanetaryRecommendation(h.planet.name, language),
      }));

    // ========================================
    // BUILD RESPONSE
    // ========================================
    
    const response: DivineTimingResponse = {
      currentHour: {
        planet: {
          name: currentHour.planet.name,
          nameArabic: currentHour.planet.nameArabic,
          element: currentHour.planet.element,
          elementArabic: currentHour.planet.elementArabic,
        },
        startTime: currentHour.startTime.toISOString(),
        endTime: currentHour.endTime.toISOString(),
        durationMinutes: currentHour.durationMinutes,
        isDayHour: currentHour.isDayHour,
      },
      
      lunarMansion: {
        number: mansion.number,
        nameArabic: mansion.nameArabic,
        nameTransliteration: mansion.nameTransliteration,
        nameEn: mansion.nameEn,
        nameFr: mansion.nameFr,
        element: mansion.element,
        planetaryRuler: mansion.planetaryRuler,
        moonPhase: currentMansion.moonPhase,
        daysInMansion: currentMansion.daysInMansion,
        spiritualFocus: language === 'fr' ? mansion.spiritualFocus.fr : mansion.spiritualFocus.en,
        favorableFor: language === 'fr' ? mansion.favorableFor.fr : mansion.favorableFor.en,
        unfavorableFor: language === 'fr' ? mansion.unfavorableFor.fr : mansion.unfavorableFor.en,
      },
      
      upcomingHours,
      personalAlignment,
      spiritualGuidance,
      
      location: {
        latitude,
        longitude,
        timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
      },
      
      calculationTime: calculationDate.toISOString(),
    };

    return NextResponse.json<ApiResponse<DivineTimingResponse>>({
      success: true,
      data: response,
      timestamp: new Date().toISOString(),
    });

  } catch (error) {
    console.error('Divine Timing API Error:', error);
    return NextResponse.json<ApiResponse<null>>({
      success: false,
      error: {
        code: 'INTERNAL_ERROR' as ApiErrorCode,
        message: error instanceof Error ? error.message : 'Internal server error',
      },
      timestamp: new Date().toISOString(),
    }, { status: 500 });
  }
}

// ============================================================================
// HELPER FUNCTIONS
// ============================================================================

/**
 * Calculate elemental alignment score (0-100)
 */
function calculateElementalAlignment(userElement: string, hourElement: string): number {
  const user = userElement.toLowerCase();
  const hour = hourElement.toLowerCase();
  
  // Perfect match
  if (user === hour) return 100;
  
  // Elemental harmony matrix (classical)
  const harmony: Record<string, Record<string, number>> = {
    fire: { air: 80, fire: 100, water: 30, earth: 50 },
    air: { fire: 80, air: 100, earth: 30, water: 50 },
    water: { earth: 80, water: 100, fire: 30, air: 50 },
    earth: { water: 80, earth: 100, air: 30, fire: 50 },
  };
  
  return harmony[user]?.[hour] || 50;
}

/**
 * Get alignment quality from score
 */
function getAlignmentQuality(score: number): 'perfect' | 'strong' | 'moderate' | 'weak' | 'opposing' {
  if (score >= 90) return 'perfect';
  if (score >= 70) return 'strong';
  if (score >= 50) return 'moderate';
  if (score >= 35) return 'weak';
  return 'opposing';
}

/**
 * Get alignment guidance text
 */
function getAlignmentGuidance(quality: string, language: string): string {
  const guidance: Record<string, Record<string, string>> = {
    perfect: {
      en: 'Excellent alignment! This is an optimal time for important activities.',
      fr: 'Alignement excellent ! C\'est un moment optimal pour les activités importantes.',
      ar: 'محاذاة ممتازة! هذا وقت مثالي للأنشطة المهمة.',
    },
    strong: {
      en: 'Strong alignment. Good time for your natural activities.',
      fr: 'Alignement fort. Bon moment pour vos activités naturelles.',
      ar: 'محاذاة قوية. وقت جيد لأنشطتك الطبيعية.',
    },
    moderate: {
      en: 'Moderate alignment. Proceed with mindfulness.',
      fr: 'Alignement modéré. Procédez avec attention.',
      ar: 'محاذاة معتدلة. تابع بوعي.',
    },
    weak: {
      en: 'Weak alignment. Consider waiting for a better hour.',
      fr: 'Alignement faible. Envisagez d\'attendre une meilleure heure.',
      ar: 'محاذاة ضعيفة. فكر في انتظار ساعة أفضل.',
    },
    opposing: {
      en: 'Opposing energies. Best to rest or do light activities.',
      fr: 'Énergies opposées. Il vaut mieux se reposer ou faire des activités légères.',
      ar: 'طاقات متعارضة. من الأفضل الراحة أو القيام بأنشطة خفيفة.',
    },
  };
  
  return guidance[quality]?.[language] || guidance[quality]?.['en'] || '';
}

/**
 * Find best upcoming hour for user's element
 */
function findBestUpcomingHour(hours: AccuratePlanetaryHour[], userElement: string, currentDate: Date) {
  const user = userElement.toLowerCase();
  
  return hours
    .filter(h => h.startTime > currentDate)
    .find(h => {
      const hourElement = h.planet.element.toLowerCase();
      // Look for same element or harmonious element
      return hourElement === user || 
        (user === 'fire' && hourElement === 'air') ||
        (user === 'air' && hourElement === 'fire') ||
        (user === 'water' && hourElement === 'earth') ||
        (user === 'earth' && hourElement === 'water');
    });
}

/**
 * Get spiritual guidance for current hour and mansion
 */
function getHourlyGuidance(planet: string, mansion: string, language: string): any {
  const planetGuidance: Record<string, Record<string, any>> = {
    Sun: {
      en: {
        currentActivity: 'Leadership, public matters, creative work, seeking success',
        avoid: 'Ego-driven decisions, confrontations with authority',
        dhikrRecommendation: {
          divineName: 'Al-Nūr (The Light)',
          divineNameArabic: 'النور',
          count: 100,
          timing: 'At sunrise or during this hour',
        },
      },
      fr: {
        currentActivity: 'Leadership, affaires publiques, travail créatif, recherche de succès',
        avoid: 'Décisions égocentriques, confrontations avec l\'autorité',
        dhikrRecommendation: {
          divineName: 'Al-Nūr (La Lumière)',
          divineNameArabic: 'النور',
          count: 100,
          timing: 'Au lever du soleil ou pendant cette heure',
        },
      },
    },
    Moon: {
      en: {
        currentActivity: 'Emotional healing, family matters, intuitive work, nurturing',
        avoid: 'Important decisions (emotions may cloud judgment)',
        dhikrRecommendation: {
          divineName: 'Al-Laṭīf (The Subtle)',
          divineNameArabic: 'اللطيف',
          count: 129,
          timing: 'At night or during this hour',
        },
      },
      fr: {
        currentActivity: 'Guérison émotionnelle, affaires familiales, travail intuitif, soins',
        avoid: 'Décisions importantes (les émotions peuvent troubler le jugement)',
        dhikrRecommendation: {
          divineName: 'Al-Laṭīf (Le Subtil)',
          divineNameArabic: 'اللطيف',
          count: 129,
          timing: 'La nuit ou pendant cette heure',
        },
      },
    },
    Mars: {
      en: {
        currentActivity: 'Physical action, courage, overcoming obstacles, protection',
        avoid: 'Anger, rash decisions, starting conflicts',
        dhikrRecommendation: {
          divineName: 'Al-Qawiyy (The All-Strong)',
          divineNameArabic: 'القوي',
          count: 116,
          timing: 'When seeking strength',
        },
      },
      fr: {
        currentActivity: 'Action physique, courage, surmonter les obstacles, protection',
        avoid: 'Colère, décisions impulsives, démarrage de conflits',
        dhikrRecommendation: {
          divineName: 'Al-Qawiyy (Le Tout-Puissant)',
          divineNameArabic: 'القوي',
          count: 116,
          timing: 'Quand on cherche la force',
        },
      },
    },
    Mercury: {
      en: {
        currentActivity: 'Communication, learning, business, writing, networking',
        avoid: 'Gossip, deceptive communication',
        dhikrRecommendation: {
          divineName: 'Al-ʿAlīm (The All-Knowing)',
          divineNameArabic: 'العليم',
          count: 150,
          timing: 'Before study or communication',
        },
      },
      fr: {
        currentActivity: 'Communication, apprentissage, affaires, écriture, réseautage',
        avoid: 'Ragots, communication trompeuse',
        dhikrRecommendation: {
          divineName: 'Al-ʿAlīm (L\'Omniscient)',
          divineNameArabic: 'العليم',
          count: 150,
          timing: 'Avant l\'étude ou la communication',
        },
      },
    },
    Jupiter: {
      en: {
        currentActivity: 'Expansion, teaching, spiritual growth, legal matters, generosity',
        avoid: 'Overindulgence, false promises',
        dhikrRecommendation: {
          divineName: 'Al-Wāsiʿ (The All-Encompassing)',
          divineNameArabic: 'الواسع',
          count: 137,
          timing: 'Thursday or during this hour',
        },
      },
      fr: {
        currentActivity: 'Expansion, enseignement, croissance spirituelle, questions juridiques, générosité',
        avoid: 'Excès, fausses promesses',
        dhikrRecommendation: {
          divineName: 'Al-Wāsiʿ (Le Tout-Embrassant)',
          divineNameArabic: 'الواسع',
          count: 137,
          timing: 'Jeudi ou pendant cette heure',
        },
      },
    },
    Venus: {
      en: {
        currentActivity: 'Love, beauty, art, relationships, harmony, pleasure',
        avoid: 'Vanity, superficial pursuits',
        dhikrRecommendation: {
          divineName: 'Al-Jamīl (The Beautiful)',
          divineNameArabic: 'الجميل',
          count: 83,
          timing: 'Friday or during this hour',
        },
      },
      fr: {
        currentActivity: 'Amour, beauté, art, relations, harmonie, plaisir',
        avoid: 'Vanité, poursuites superficielles',
        dhikrRecommendation: {
          divineName: 'Al-Jamīl (Le Beau)',
          divineNameArabic: 'الجميل',
          count: 83,
          timing: 'Vendredi ou pendant cette heure',
        },
      },
    },
    Saturn: {
      en: {
        currentActivity: 'Structure, discipline, long-term planning, serious study',
        avoid: 'Despair, excessive restriction',
        dhikrRecommendation: {
          divineName: 'Al-Ḥakīm (The All-Wise)',
          divineNameArabic: 'الحكيم',
          count: 78,
          timing: 'Saturday or during this hour',
        },
      },
      fr: {
        currentActivity: 'Structure, discipline, planification à long terme, étude sérieuse',
        avoid: 'Désespoir, restriction excessive',
        dhikrRecommendation: {
          divineName: 'Al-Ḥakīm (Le Sage)',
          divineNameArabic: 'الحكيم',
          count: 78,
          timing: 'Samedi ou pendant cette heure',
        },
      },
    },
  };
  
  const lang = language === 'fr' ? 'fr' : 'en';
  return planetGuidance[planet]?.[lang] || planetGuidance['Sun'][lang];
}

/**
 * Get brief recommendation for a planetary hour
 */
function getPlanetaryRecommendation(planet: string, language: string): string {
  const recommendations: Record<string, Record<string, string>> = {
    Sun: {
      en: 'Good for leadership and creative projects',
      fr: 'Bon pour le leadership et les projets créatifs',
    },
    Moon: {
      en: 'Good for emotional and family matters',
      fr: 'Bon pour les questions émotionnelles et familiales',
    },
    Mars: {
      en: 'Good for physical action and courage',
      fr: 'Bon pour l\'action physique et le courage',
    },
    Mercury: {
      en: 'Good for communication and learning',
      fr: 'Bon pour la communication et l\'apprentissage',
    },
    Jupiter: {
      en: 'Good for expansion and spiritual growth',
      fr: 'Bon pour l\'expansion et la croissance spirituelle',
    },
    Venus: {
      en: 'Good for love, art, and relationships',
      fr: 'Bon pour l\'amour, l\'art et les relations',
    },
    Saturn: {
      en: 'Good for discipline and long-term planning',
      fr: 'Bon pour la discipline et la planification',
    },
  };
  
  const lang = language === 'fr' ? 'fr' : 'en';
  return recommendations[planet]?.[lang] || '';
}
