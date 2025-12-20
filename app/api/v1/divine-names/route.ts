import { NextRequest, NextResponse } from 'next/server';
import type { ApiResponse, DivineNamesRequest, DivineNamesResponse } from '../../../../src/types/api';
import { ApiErrorCode } from '../../../../src/types/api';
import { validateName, validateLanguage, validateAbjadSystem, combineValidations } from '../../../../src/lib/api-validation';
import { ABJAD_MAGHRIBI, ABJAD_MASHRIQI } from '../../../../src/lib/abjad-maps';
import {
  calculateAbjadTotal,
  getElement,
  calculateDivineNameResonance,
  getDivineNameByNumber,
  getSpiritualStationByNumber,
  getElementQualityByIndex
} from '../../../../src/lib/server-calculations';
import { transliterateLatinToArabic } from '../../../../src/lib/text-normalize';

/**
 * POST /api/v1/divine-names
 * Divine Names (Asmā' Allāh al-Ḥusnā) Analysis Endpoint
 * 
 * Calculates alignment with the 99 Beautiful Names of Allah,
 * provides spiritual practices, Dhikr recommendations, and
 * personalized guidance based on name resonance.
 */
export async function POST(request: NextRequest) {
  try {
    const body: DivineNamesRequest = await request.json();
    
    // ========================================================================
    // VALIDATION
    // ========================================================================
    
    const validation = combineValidations(
      validateName(body.name, 'name'),
      body.motherName ? validateName(body.motherName, 'motherName') : { isValid: true },
      validateLanguage(body.language || 'en'),
      validateAbjadSystem(body.abjadSystem || 'maghribi')
    );
    
    if (!validation.isValid) {
      return NextResponse.json<ApiResponse>({
        success: false,
        error: validation.error || {
          code: ApiErrorCode.INVALID_NAME,
          message: 'Validation failed'
        },
        timestamp: new Date().toISOString()
      }, { status: 400 });
    }
    
    // ========================================================================
    // SETUP
    // ========================================================================
    
    const language = body.language || 'en';
    const abjadSystem = body.abjadSystem || 'maghribi';
    const abjadMap = abjadSystem === 'maghribi' ? ABJAD_MAGHRIBI : ABJAD_MASHRIQI;
    
    // Convert names to Arabic if needed
    const personArabic = /[\u0600-\u06FF]/.test(body.name)
      ? body.name
      : transliterateLatinToArabic(body.name).primary;
    
    const motherArabic = body.motherName
      ? (/[\u0600-\u06FF]/.test(body.motherName)
        ? body.motherName
        : transliterateLatinToArabic(body.motherName).primary)
      : '';
    
    // ========================================================================
    // CALCULATIONS
    // ========================================================================
    
    const personTotal = calculateAbjadTotal(personArabic, abjadMap);
    const motherTotal = motherArabic ? calculateAbjadTotal(motherArabic, abjadMap) : 0;
    const combinedTotal = personTotal + motherTotal;
    
    const kabir = combinedTotal;
    const saghir = kabir % 9 === 0 ? 9 : kabir % 9;
    const divineNameNumber = kabir % 99 === 0 ? 99 : kabir % 99;
    
    // Get element for additional context
    const element = getElement(combinedTotal);
    const elementQuality = getElementQualityByIndex(element.index);
    
    // ========================================================================
    // DIVINE NAME RESONANCE
    // ========================================================================
    
    const primaryDivineName = calculateDivineNameResonance(kabir);
    if (!primaryDivineName) {
      throw new Error('Could not calculate Divine Name resonance');
    }
    
    // Secondary resonances
    const secondaryFromSaghir = getDivineNameByNumber(saghir * 11); // Multiply for variation
    const spiritualStation = getSpiritualStationByNumber(saghir);
    
    // ========================================================================
    // SPIRITUAL PRACTICES
    // ========================================================================
    
    // Dhikr recommendations based on Divine Name
    const dhikrRecommendations = {
      en: `Recite "${primaryDivineName.transliteration}" (${primaryDivineName.arabic})`,
      fr: `Récitez "${primaryDivineName.transliteration}" (${primaryDivineName.arabic})`,
      ar: `اذكر "${primaryDivineName.transliteration}" (${primaryDivineName.arabic})`
    };
    
    // Repetition count (traditionally use the Abjad value)
    const repetitionCount = divineNameNumber;
    
    // Best times for practice
    const bestTimes = {
      en: [
        'After Fajr prayer (before sunrise)',
        'Between Maghrib and Isha',
        'Last third of the night (Tahajjud time)',
        `${Math.floor(divineNameNumber / 10)} times daily`
      ],
      fr: [
        'Après la prière de Fajr (avant le lever du soleil)',
        'Entre Maghrib et Isha',
        'Dernier tiers de la nuit (heure de Tahajjud)',
        `${Math.floor(divineNameNumber / 10)} fois par jour`
      ],
      ar: [
        'بعد صلاة الفجر (قبل شروق الشمس)',
        'بين المغرب والعشاء',
        'الثلث الأخير من الليل (وقت التهجد)',
        `${Math.floor(divineNameNumber / 10)} مرات يوميا`
      ]
    };
    
    // Additional practices based on element and spiritual station
    const additionalPractices = {
      en: [
        `Contemplate the meaning: "${primaryDivineName.meaningEn}"`,
        spiritualStation ? `Practice ${spiritualStation.en}` : 'Engage in regular contemplation',
        elementQuality ? `Cultivate ${elementQuality.qualities.en.slice(0, 2).join(' and ')}` : 'Maintain balance',
        'Keep a spiritual journal of insights received'
      ],
      fr: [
        `Contemplez le sens: "${primaryDivineName.meaningFr}"`,
        spiritualStation ? `Pratiquez ${spiritualStation.fr}` : 'Engagez-vous dans une contemplation régulière',
        elementQuality ? `Cultivez ${elementQuality.qualities.fr.slice(0, 2).join(' et ')}` : 'Maintenez l\'équilibre',
        'Tenez un journal spirituel des idées reçues'
      ],
      ar: [
        `تأمل في المعنى: "${primaryDivineName.meaningAr || primaryDivineName.meaningEn}"`,
        spiritualStation ? `مارس ${spiritualStation.ar}` : 'انخرط في التأمل المنتظم',
        elementQuality ? `نمّ ${elementQuality.qualities.ar.slice(0, 2).join(' و')}` : 'حافظ على التوازن',
        'احتفظ بمذكرة روحية للرؤى المتلقاة'
      ]
    };
    
    // ========================================================================
    // BUILD RESPONSE
    // ========================================================================
    
    const response: DivineNamesResponse = {
      personName: body.name,
      personNameArabic: personArabic,
      
      calculations: {
        kabir,
        saghir,
        divineNameNumber
      },
      
      primaryDivineName: {
        number: primaryDivineName.number,
        arabic: primaryDivineName.arabic,
        transliteration: primaryDivineName.transliteration,
        meaning: language === 'ar' && primaryDivineName.meaningAr 
          ? primaryDivineName.meaningAr 
          : language === 'fr' 
          ? primaryDivineName.meaningFr 
          : primaryDivineName.meaningEn,
        spiritualInfluence: language === 'ar' && primaryDivineName.spiritualInfluenceAr
          ? primaryDivineName.spiritualInfluenceAr
          : language === 'fr'
          ? primaryDivineName.spiritualInfluenceFr
          : primaryDivineName.spiritualInfluence,
        reflection: language === 'ar' && primaryDivineName.reflectionAr
          ? primaryDivineName.reflectionAr
          : language === 'fr'
          ? primaryDivineName.reflectionFr
          : primaryDivineName.reflection
      },
      
      secondaryDivineNames: secondaryFromSaghir ? {
        fromSaghir: {
          number: secondaryFromSaghir.number,
          arabic: secondaryFromSaghir.arabic,
          transliteration: secondaryFromSaghir.transliteration,
          meaning: language === 'ar' && secondaryFromSaghir.meaningAr
            ? secondaryFromSaghir.meaningAr
            : language === 'fr'
            ? secondaryFromSaghir.meaningFr
            : secondaryFromSaghir.meaningEn
        }
      } : undefined,
      
      spiritualPractices: {
        dhikrRecommendation: dhikrRecommendations[language],
        repetitionCount,
        bestTimes: bestTimes[language],
        additionalPractices: additionalPractices[language]
      },
      
      element: {
        name: language === 'ar' ? element.ar : language === 'fr' ? element.fr : element.en,
        icon: element.icon,
        qualities: elementQuality 
          ? elementQuality.qualities[language === 'ar' ? 'ar' : language === 'fr' ? 'fr' : 'en']
          : []
      }
    };
    
    // ========================================================================
    // RETURN SUCCESS
    // ========================================================================
    
    return NextResponse.json<ApiResponse<DivineNamesResponse>>({
      success: true,
      data: response,
      timestamp: new Date().toISOString()
    });
    
  } catch (error) {
    console.error('Divine Names API Error:', error);
    
    return NextResponse.json<ApiResponse>({
      success: false,
      error: {
        code: ApiErrorCode.INTERNAL_ERROR,
        message: 'An error occurred while processing Divine Names analysis',
        details: error instanceof Error ? error.message : 'Unknown error'
      },
      timestamp: new Date().toISOString()
    }, { status: 500 });
  }
}

// Enable CORS
export async function OPTIONS() {
  return new NextResponse(null, {
    status: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type, Authorization',
    },
  });
}
