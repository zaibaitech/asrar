/**
 * Color Resonance API Endpoint
 * Provides healing colors, chakra alignment, and visual therapy recommendations
 * based on element and burj (zodiac sign)
 * 
 * POST /api/v1/color-resonance
 */

import { NextRequest, NextResponse } from 'next/server';
import type { ApiResponse, ColorResonanceRequest, ColorResonanceResponse } from '../../../../src/types/api';
import { validateName, validateLanguage, validateAbjadSystem, combineValidations } from '../../../../src/lib/api-validation';
import { ABJAD_MAGHRIBI, ABJAD_MASHRIQI } from '../../../../src/lib/abjad-maps';
import { calculateAbjadTotal, getElement, getBurj } from '../../../../src/lib/server-calculations';
import { getColorResonanceByElement, getBurjColorEnhancement, getElementQualityByIndex } from '../../../../src/lib/server-data';
import { transliterateLatinToArabic } from '../../../../src/lib/text-normalize';

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

export async function POST(request: NextRequest) {
  try {
    const body: ColorResonanceRequest = await request.json();
    
    // Extract parameters with defaults
    const {
      name,
      element: providedElement,
      burj: providedBurj,
      calculateFromName = false,
      abjadSystem = 'maghribi',
      language = 'en'
    } = body;

    // =================================================================
    // VALIDATION
    // =================================================================

    // Validate language and abjadSystem first
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

    const abjadValidation = validateAbjadSystem(abjadSystem);
    if (!abjadValidation.isValid) {
      const response: ApiResponse = {
        success: false,
        error: {
          code: 'INVALID_ABJAD_SYSTEM',
          message: typeof abjadValidation.error === 'string' ? abjadValidation.error : 'Invalid Abjad system'
        },
        timestamp: new Date().toISOString()
      };
      return NextResponse.json(response, { status: 400, headers });
    }

    // Determine if we need a name
    const needsName = calculateFromName || (!providedElement && !providedBurj);

    if (needsName && !name) {
      const response: ApiResponse = {
        success: false,
        error: {
          code: 'MISSING_REQUIRED_FIELD',
          message: 'Name is required when calculateFromName is true or when element/burj are not provided'
        },
        timestamp: new Date().toISOString()
      };
      return NextResponse.json(response, { status: 400, headers });
    }

    // Validate name if provided
    if (name) {
      const nameValidation = validateName(name);
      if (!nameValidation.isValid) {
        const response: ApiResponse = {
          success: false,
          error: {
            code: 'INVALID_NAME',
            message: typeof nameValidation.error === 'string' ? nameValidation.error : 'Invalid name'
          },
          timestamp: new Date().toISOString()
        };
        return NextResponse.json(response, { status: 400, headers });
      }
    }

    // =================================================================
    // CALCULATION
    // =================================================================

    let elementIndex: number;
    let burjNumber: number;

    if (calculateFromName || (!providedElement && !providedBurj && name)) {
      // Calculate from name
      // Select the appropriate Abjad map
      const abjadMap = abjadSystem === 'mashriqi' ? ABJAD_MASHRIQI : ABJAD_MAGHRIBI;
      
      // Transliterate if needed (Latin/French → Arabic)
      const normalized = language === 'ar'
        ? name!
        : transliterateLatinToArabic(name!).primary;
        
      const abjadTotal = calculateAbjadTotal(normalized, abjadMap);
      const elementData = getElement(abjadTotal);
      const burjData = getBurj(abjadTotal);
      elementIndex = elementData.index;
      burjNumber = burjData.index;
    } else {
      // Use provided values or defaults
      if (providedElement) {
        const elementMap: Record<string, number> = {
          'fire': 1,
          'air': 2,
          'water': 3,
          'earth': 4
        };
        elementIndex = elementMap[providedElement] || 1;
      } else {
        elementIndex = 1; // Default to Fire
      }

      if (providedBurj) {
        burjNumber = Math.max(1, Math.min(12, providedBurj)); // Clamp to 1-12
      } else {
        burjNumber = 1; // Default to Aries
      }
    }

    // =================================================================
    // DATA RETRIEVAL
    // =================================================================

    const colorData = getColorResonanceByElement(elementIndex);
    const elementData = getElementQualityByIndex(elementIndex);
    const burjEnhancement = getBurjColorEnhancement(burjNumber);

    if (!colorData || !elementData) {
      const response: ApiResponse = {
        success: false,
        error: {
          code: 'CALCULATION_ERROR',
          message: 'Unable to retrieve color resonance data'
        },
        timestamp: new Date().toISOString()
      };
      return NextResponse.json(response, { status: 500, headers });
    }

    // =================================================================
    // BURJ NAMES (for display)
    // =================================================================

    const BURJ_NAMES: Record<number, { en: string; ar: string; fr: string; symbol: string }> = {
      1: { en: 'Aries', ar: 'الحمل', fr: 'Bélier', symbol: '♈' },
      2: { en: 'Taurus', ar: 'الثور', fr: 'Taureau', symbol: '♉' },
      3: { en: 'Gemini', ar: 'الجوزاء', fr: 'Gémeaux', symbol: '♊' },
      4: { en: 'Cancer', ar: 'السرطان', fr: 'Cancer', symbol: '♋' },
      5: { en: 'Leo', ar: 'الأسد', fr: 'Lion', symbol: '♌' },
      6: { en: 'Virgo', ar: 'العذراء', fr: 'Vierge', symbol: '♍' },
      7: { en: 'Libra', ar: 'الميزان', fr: 'Balance', symbol: '♎' },
      8: { en: 'Scorpio', ar: 'العقرب', fr: 'Scorpion', symbol: '♏' },
      9: { en: 'Sagittarius', ar: 'القوس', fr: 'Sagittaire', symbol: '♐' },
      10: { en: 'Capricorn', ar: 'الجدي', fr: 'Capricorne', symbol: '♑' },
      11: { en: 'Aquarius', ar: 'الدلو', fr: 'Verseau', symbol: '♒' },
      12: { en: 'Pisces', ar: 'الحوت', fr: 'Poissons', symbol: '♓' }
    };

    const burjInfo = BURJ_NAMES[burjNumber];

    // =================================================================
    // BUILD RESPONSE
    // =================================================================

    const langKey = language as 'en' | 'fr' | 'ar';
    
    // Get element name in requested language
    const elementName = langKey === 'ar' ? elementData.ar : 
                       langKey === 'fr' ? elementData.fr : 
                       elementData.en;

    const burjName = langKey === 'ar' ? burjInfo.ar :
                    langKey === 'fr' ? burjInfo.fr :
                    burjInfo.en;

    // Build primary color object
    const primaryColorName = langKey === 'ar' ? colorData.primaryColor.nameAr :
                            langKey === 'fr' ? colorData.primaryColor.nameFr :
                            colorData.primaryColor.name;

    // Build secondary color (first in array)
    const secondaryColor = colorData.secondaryColors[0];
    const secondaryColorName = langKey === 'ar' ? secondaryColor.nameAr :
                              langKey === 'fr' ? secondaryColor.nameFr :
                              secondaryColor.name;

    // Supportive colors from secondary array
    const supportiveColors = colorData.secondaryColors.map((color, index) => {
      const colorName = langKey === 'ar' ? color.nameAr :
                       langKey === 'fr' ? color.nameFr :
                       color.name;
      
      const occasions: Record<string, { en: string; fr: string; ar: string }> = {
        '0': { 
          en: 'Use during creative work', 
          fr: 'Utiliser pendant le travail créatif',
          ar: 'استخدم أثناء العمل الإبداعي'
        },
        '1': { 
          en: 'Wear for confidence boost', 
          fr: 'Porter pour renforcer la confiance',
          ar: 'ارتدي لتعزيز الثقة'
        }
      };

      return {
        name: colorName,
        hex: color.hex,
        occasion: occasions[index.toString()]?.[langKey] || occasions['0'][langKey]
      };
    });

    // Chakra information
    const chakraName = langKey === 'ar' ? colorData.chakra.nameAr :
                      langKey === 'fr' ? colorData.chakra.nameFr :
                      colorData.chakra.name;

    const chakraLocation = langKey === 'ar' ? colorData.chakra.locationAr :
                          langKey === 'fr' ? colorData.chakra.locationFr :
                          colorData.chakra.location;

    // Visual therapy recommendations
    const therapyRecommendations = colorData.visualTherapy[langKey];

    // Color meditation prompt
    const meditationPrompts: Record<string, string> = {
      en: `Close your eyes and visualize ${primaryColorName} light surrounding you. Feel its healing energy flowing through your ${chakraName} chakra.`,
      fr: `Fermez les yeux et visualisez la lumière ${primaryColorName} vous entourer. Sentez son énergie curative circuler à travers votre chakra ${chakraName}.`,
      ar: `أغلق عينيك وتصور ضوء ${primaryColorName} يحيط بك. اشعر بطاقته الشفائية تتدفق عبر شاكرا ${chakraName}.`
    };

    // Environmental suggestions (general + burj-specific)
    const environmentalSuggestions = [
      ...therapyRecommendations,
    ];

    // If burj enhancement exists, add it
    if (burjEnhancement) {
      const burjMeaning = burjEnhancement.meaning[langKey];
      const burjColorSuggestion: Record<string, string> = {
        en: `Incorporate ${burjMeaning.toLowerCase()} into your daily environment`,
        fr: `Incorporez ${burjMeaning.toLowerCase()} dans votre environnement quotidien`,
        ar: `أدمج ${burjMeaning} في بيئتك اليومية`
      };
      environmentalSuggestions.push(burjColorSuggestion[langKey]);
    }

    // Balancing practices
    const balancingPractices: Record<string, string[]> = {
      en: [
        `Meditate daily on your ${chakraName} chakra`,
        `Wear ${primaryColorName} clothing or accessories`,
        `Surround yourself with ${primaryColorName} objects`,
        `Practice color breathing with ${primaryColorName}`,
      ],
      fr: [
        `Méditez quotidiennement sur votre chakra ${chakraName}`,
        `Portez des vêtements ou accessoires ${primaryColorName}`,
        `Entourez-vous d'objets ${primaryColorName}`,
        `Pratiquez la respiration colorée avec ${primaryColorName}`,
      ],
      ar: [
        `تأمل يومياً على شاكرا ${chakraName}`,
        `ارتدي ملابس أو إكسسوارات ${primaryColorName}`,
        `أحط نفسك بأشياء ${primaryColorName}`,
        `مارس التنفس الملون مع ${primaryColorName}`,
      ]
    };

    // Primary color meaning and usage
    const primaryColorMeaning: Record<string, string> = {
      en: `${elementName} element's primary healing color`,
      fr: `Couleur de guérison primaire de l'élément ${elementName}`,
      ar: `اللون الشفائي الأساسي لعنصر ${elementName}`
    };

    const primaryColorUsage: Record<string, string> = {
      en: 'Use this color during meditation, healing work, and spiritual practices',
      fr: 'Utilisez cette couleur pendant la méditation, le travail de guérison et les pratiques spirituelles',
      ar: 'استخدم هذا اللون أثناء التأمل وعمل الشفاء والممارسات الروحية'
    };

    const secondaryColorMeaning: Record<string, string> = {
      en: `Complementary color for ${elementName} balance`,
      fr: `Couleur complémentaire pour l'équilibre de ${elementName}`,
      ar: `لون تكميلي لتوازن ${elementName}`
    };

    const secondaryColorUsage: Record<string, string> = {
      en: 'Use for grounding and balancing your primary element energy',
      fr: 'Utilisez pour ancrer et équilibrer l\'énergie de votre élément primaire',
      ar: 'استخدم لتأريض وموازنة طاقة عنصرك الأساسي'
    };

    const responseData: ColorResonanceResponse = {
      element: {
        name: elementName,
        icon: elementData.icon
      },
      burj: {
        name: burjName,
        symbol: burjInfo.symbol
      },
      healingColors: {
        primary: {
          name: primaryColorName,
          hex: colorData.primaryColor.hex,
          meaning: primaryColorMeaning[langKey],
          usage: primaryColorUsage[langKey]
        },
        secondary: {
          name: secondaryColorName,
          hex: secondaryColor.hex,
          meaning: secondaryColorMeaning[langKey],
          usage: secondaryColorUsage[langKey]
        },
        supportive: supportiveColors
      },
      chakraAlignment: {
        primaryChakra: {
          name: chakraName,
          position: chakraLocation,
          color: colorData.chakra.color,
          benefits: colorData.healingProperties[langKey]
        },
        balancingPractices: balancingPractices[langKey]
      },
      visualTherapy: {
        recommendations: therapyRecommendations,
        colorMeditation: meditationPrompts[langKey],
        environmentalSuggestions: environmentalSuggestions
      }
    };

    const response: ApiResponse<ColorResonanceResponse> = {
      success: true,
      data: responseData,
      timestamp: new Date().toISOString()
    };

    return NextResponse.json(response, { headers });

  } catch (error: any) {
    console.error('Color Resonance API Error:', error);
    
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
