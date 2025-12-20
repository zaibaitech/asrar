/**
 * Prayer Times API Endpoint
 * Provides accurate Islamic prayer times for any location
 * 
 * POST /api/v1/prayer-times
 */

import { NextRequest, NextResponse } from 'next/server';
import type { ApiResponse, PrayerTimesRequest, PrayerTimesResponse } from '../../../../src/types/api';
import { validateCoordinates, validateLanguage, validateDate } from '../../../../src/lib/api-validation';
import { Coordinates, CalculationMethod, PrayerTimes as AdhanPrayerTimes, Qibla } from 'adhan';
import { calculatePrayerTimes, getCurrentPrayerPeriod } from '../../../../src/lib/prayerTimes';

// CORS headers
const headers = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'POST, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type',
  'Content-Type': 'application/json',
};

export async function OPTIONS() {
  return NextResponse.json({}, { headers });
}

// Calculation method mapping
const CALCULATION_METHODS: Record<string, () => any> = {
  'MuslimWorldLeague': () => CalculationMethod.MuslimWorldLeague(),
  'ISNA': () => CalculationMethod.NorthAmerica(),
  'Egyptian': () => CalculationMethod.Egyptian(),
  'UmmAlQura': () => CalculationMethod.UmmAlQura(),
  'Karachi': () => CalculationMethod.Karachi(),
  'Tehran': () => CalculationMethod.Tehran(),
  'Jafari': () => CalculationMethod.Tehran(), // Jafari uses Tehran method
  'Gulf': () => CalculationMethod.Kuwait(),
  'Kuwait': () => CalculationMethod.Kuwait(),
  'Qatar': () => CalculationMethod.Qatar(),
  'Singapore': () => CalculationMethod.Singapore(),
  'France': () => CalculationMethod.MoonsightingCommittee(),
  'Turkey': () => CalculationMethod.Turkey(),
  'Dubai': () => CalculationMethod.Dubai(),
  'MoonsightingCommittee': () => CalculationMethod.MoonsightingCommittee(),
  'NorthAmerica': () => CalculationMethod.NorthAmerica(),
};

export async function POST(request: NextRequest) {
  try {
    const body: PrayerTimesRequest = await request.json();
    
    // Extract parameters
    const {
      latitude,
      longitude,
      date: dateString,
      calculationMethod = 'MuslimWorldLeague',
      timezone,
      language = 'en'
    } = body;

    // =================================================================
    // VALIDATION
    // =================================================================

    // Validate coordinates
    const coordValidation = validateCoordinates(latitude, longitude);
    if (!coordValidation.isValid) {
      const response: ApiResponse = {
        success: false,
        error: {
          code: 'INVALID_COORDINATES',
          message: typeof coordValidation.error === 'string' ? coordValidation.error : 'Invalid coordinates'
        },
        timestamp: new Date().toISOString()
      };
      return NextResponse.json(response, { status: 400, headers });
    }

    // Validate language
    const langValidation = validateLanguage(language);
    if (!langValidation.isValid) {
      const response: ApiResponse = {
        success: false,
        error: {
          code: 'INVALID_LANGUAGE',
          message: typeof langValidation.error === 'string' ? langValidation.error : 'Invalid language'
        },
        timestamp: new Date().toISOString()
      };
      return NextResponse.json(response, { status: 400, headers });
    }

    // Parse date (default to today)
    let targetDate = new Date();
    if (dateString) {
      const dateValidation = validateDate(dateString);
      if (!dateValidation.isValid) {
        const response: ApiResponse = {
          success: false,
          error: {
            code: 'INVALID_DATE',
            message: typeof dateValidation.error === 'string' ? dateValidation.error : 'Invalid date'
          },
          timestamp: new Date().toISOString()
        };
        return NextResponse.json(response, { status: 400, headers });
      }
      targetDate = new Date(dateString);
    }

    // Validate calculation method
    if (calculationMethod && !CALCULATION_METHODS[calculationMethod]) {
      const response: ApiResponse = {
        success: false,
        error: {
          code: 'CALCULATION_ERROR',
          message: `Invalid calculation method. Supported methods: ${Object.keys(CALCULATION_METHODS).join(', ')}`
        },
        timestamp: new Date().toISOString()
      };
      return NextResponse.json(response, { status: 400, headers });
    }

    // =================================================================
    // CALCULATION
    // =================================================================

    // Create coordinates
    const coordinates = new Coordinates(latitude, longitude);

    // Get calculation method
    const method = CALCULATION_METHODS[calculationMethod]();

    // Calculate prayer times using existing library
    const prayerTimes = calculatePrayerTimes(targetDate, coordinates, method);

    // Get current prayer period
    const currentPeriod = getCurrentPrayerPeriod(targetDate, coordinates);

    // Calculate Qibla direction (angle from North)
    // Type assertion needed as Qibla constructor signature may not be properly typed
    const qibla = new (Qibla as any)(coordinates);
    const qiblaDirection = qibla.direction;
    
    // Fix: Handle NaN or null qibla direction
    const qiblaDegrees = !isNaN(qiblaDirection) && qiblaDirection !== null 
      ? Math.round(qiblaDirection * 100) / 100 
      : null;

    // Determine cardinal direction for Qibla
    const getCardinalDirection = (degrees: number | null): string => {
      if (degrees === null) return language === 'ar' ? 'غير متاح' : language === 'fr' ? 'Non disponible' : 'N/A';
      
      const directions = ['North', 'Northeast', 'East', 'Southeast', 'South', 'Southwest', 'West', 'Northwest'];
      const directionsAr = ['شمال', 'شمال شرق', 'شرق', 'جنوب شرق', 'جنوب', 'جنوب غرب', 'غرب', 'شمال غرب'];
      const directionsFr = ['Nord', 'Nord-Est', 'Est', 'Sud-Est', 'Sud', 'Sud-Ouest', 'Ouest', 'Nord-Ouest'];
      
      const index = Math.round(degrees / 45) % 8;
      
      if (language === 'ar') return directionsAr[index];
      if (language === 'fr') return directionsFr[index];
      return directions[index];
    };

    // =================================================================
    // FORMAT RESPONSE
    // =================================================================

    // Helper function to format time
    const formatTime = (date: Date): string => {
      return date.toISOString();
    };

    const formatLocalTime = (date: Date): string => {
      const hours = date.getHours().toString().padStart(2, '0');
      const minutes = date.getMinutes().toString().padStart(2, '0');
      return `${hours}:${minutes}`;
    };

    // Special times descriptions
    const getSpecialTimeDescription = (name: string): string => {
      const descriptions: Record<string, Record<string, string>> = {
        tahajjud: {
          en: 'Last third of the night - optimal for du\'a',
          fr: 'Dernier tiers de la nuit - optimal pour le du\'a',
          ar: 'الثلث الأخير من الليل - الأمثل للدعاء'
        },
        ishraq: {
          en: '15 minutes after sunrise - Sunnah prayer time',
          fr: '15 minutes après le lever du soleil - temps de prière Sunnah',
          ar: '15 دقيقة بعد شروق الشمس - وقت صلاة السنة'
        },
        duha: {
          en: 'Mid-morning - prayer of the penitent',
          fr: 'Milieu de matinée - prière des repentants',
          ar: 'منتصف الصباح - صلاة التائبين'
        }
      };
      return descriptions[name]?.[language] || descriptions[name]?.en || '';
    };

    // Get timezone string
    const timezoneString = timezone || Intl.DateTimeFormat().resolvedOptions().timeZone;

    // Build response
    const responseData: PrayerTimesResponse = {
      location: {
        latitude,
        longitude,
        timezone: timezoneString
      },
      date: targetDate.toISOString().split('T')[0],
      calculationMethod,
      
      prayers: {
        fajr: {
          time: formatTime(prayerTimes.fajr),
          localTime: formatLocalTime(prayerTimes.fajr)
        },
        sunrise: {
          time: formatTime(prayerTimes.sunrise),
          localTime: formatLocalTime(prayerTimes.sunrise)
        },
        dhuhr: {
          time: formatTime(prayerTimes.dhuhr),
          localTime: formatLocalTime(prayerTimes.dhuhr)
        },
        asr: {
          time: formatTime(prayerTimes.asr),
          localTime: formatLocalTime(prayerTimes.asr)
        },
        maghrib: {
          time: formatTime(prayerTimes.maghrib),
          localTime: formatLocalTime(prayerTimes.maghrib)
        },
        isha: {
          time: formatTime(prayerTimes.isha),
          localTime: formatLocalTime(prayerTimes.isha)
        }
      },
      
      specialTimes: {
        tahajjud: {
          time: formatTime(prayerTimes.tahajjud),
          localTime: formatLocalTime(prayerTimes.tahajjud),
          description: getSpecialTimeDescription('tahajjud')
        },
        ishraq: {
          time: formatTime(prayerTimes.ishraq),
          localTime: formatLocalTime(prayerTimes.ishraq),
          description: getSpecialTimeDescription('ishraq')
        },
        duha: {
          time: formatTime(prayerTimes.duha),
          localTime: formatLocalTime(prayerTimes.duha),
          description: getSpecialTimeDescription('duha')
        }
      },
      
      qiblaDirection: {
        degrees: qiblaDegrees,
        direction: getCardinalDirection(qiblaDegrees)
      },
      
      currentPrayer: {
        current: currentPeriod.current,
        next: currentPeriod.next,
        nextTime: formatTime(currentPeriod.nextTime),
        timeUntil: currentPeriod.timeUntil,
        spiritualGuidance: language === 'fr' ? currentPeriod.spiritualGuidance.fr : currentPeriod.spiritualGuidance.en
      }
    };

    const response: ApiResponse<PrayerTimesResponse> = {
      success: true,
      data: responseData,
      timestamp: new Date().toISOString()
    };

    return NextResponse.json(response, { headers });

  } catch (error: any) {
    console.error('Prayer Times API Error:', error);
    
    const response: ApiResponse = {
      success: false,
      error: {
        code: 'INTERNAL_ERROR',
        message: error.message || 'Internal server error'
      },
      timestamp: new Date().toISOString()
    };

    return NextResponse.json(response, { status: 500, headers });
  }
}
