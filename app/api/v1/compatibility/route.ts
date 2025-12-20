/**
 * Compatibility Analysis API Endpoint
 * POST /api/v1/compatibility
 * 
 * Complete relationship compatibility analysis including:
 * - Spiritual-Destiny Method (Mod-9)
 * - Elemental-Temperament Method (Mod-4)
 * - Planetary-Cosmic Method (Mod-7)
 * - Four-Layer Deep Analysis (optional, requires mother names)
 * - Overall score and recommendation
 */

import { NextRequest, NextResponse } from 'next/server';
import { 
  ApiResponse, 
  CompatibilityRequest, 
  CompatibilityResponse,
  ApiErrorCode 
} from '@/src/types/api';
import {
  validateName,
  validateLanguage,
  combineValidations
} from '@/src/lib/api-validation';
import { 
  analyzeRelationshipCompatibility,
  getElementFromAbjadTotal
} from '@/src/utils/relationshipCompatibility';
import {
  analyzeFourLayerCompatibility
} from '@/src/utils/fourLayerCompatibility';
import { ABJAD_MAGHRIBI } from '@/src/lib/abjad-maps';
import { transliterateLatinToArabic, normalizeArabic } from '@/src/lib/text-normalize';

// Helper function to calculate Abjad value
function calculateAbjadValue(arabicText: string, abjadMap: Record<string, number>): number {
  const normalized = normalizeArabic(arabicText);
  return [...normalized].reduce((sum, char) => sum + (abjadMap[char] || 0), 0);
}

// ============================================================================
// CORS HEADERS FOR MOBILE APP
// ============================================================================

const corsHeaders = {
  'Access-Control-Allow-Origin': '*', // Configure for production
  'Access-Control-Allow-Methods': 'POST, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type, Authorization',
};

// ============================================================================
// OPTIONS HANDLER (CORS Preflight)
// ============================================================================

export async function OPTIONS() {
  return NextResponse.json({}, { headers: corsHeaders });
}

// ============================================================================
// POST HANDLER
// ============================================================================

export async function POST(request: NextRequest) {
  try {
    // Parse request body
    const body: CompatibilityRequest = await request.json();
    const { person1, person2, analysisMode = 'four-layer', language = 'en' } = body;

    // ========================================================================
    // INPUT VALIDATION
    // ========================================================================

    const validationResult = combineValidations(
      validateName(person1?.name, 'person1.name', true),
      validateName(person2?.name, 'person2.name', true),
      validateName(person1?.motherName, 'person1.motherName', false),
      validateName(person2?.motherName, 'person2.motherName', false),
      validateLanguage(language, false)
    );

    if (!validationResult.isValid) {
      const response: ApiResponse = {
        success: false,
        error: validationResult.error,
        timestamp: new Date().toISOString()
      };
      return NextResponse.json(response, { status: 400, headers: corsHeaders });
    }

    // ========================================================================
    // CORE COMPATIBILITY CALCULATION - BASIC 3 METHODS
    // ========================================================================

    // Convert names to Arabic if needed
    const person1Arabic = /[\u0600-\u06FF]/.test(person1.name) 
      ? person1.name 
      : transliterateLatinToArabic(person1.name).primary;
    
    const person2Arabic = /[\u0600-\u06FF]/.test(person2.name)
      ? person2.name
      : transliterateLatinToArabic(person2.name).primary;

    // Calculate Abjad totals and elements
    const person1Total = calculateAbjadValue(person1Arabic, ABJAD_MAGHRIBI);
    const person1Element = getElementFromAbjadTotal(person1Total);
    
    const person2Total = calculateAbjadValue(person2Arabic, ABJAD_MAGHRIBI);
    const person2Element = getElementFromAbjadTotal(person2Total);

    const basicCompatibility = analyzeRelationshipCompatibility(
      person1.name,
      person1Arabic,
      person1Total,
      person1Element,
      person2.name,
      person2Arabic,
      person2Total,
      person2Element
    );

    // ========================================================================
    // FOUR-LAYER ANALYSIS (if mode is four-layer AND both mother names provided)
    // ========================================================================

    let fourLayerAnalysis: CompatibilityResponse['fourLayerAnalysis'] | undefined;

    if (analysisMode === 'four-layer' && person1.motherName && person2.motherName) {
      // Convert mother names to Arabic if needed
      const person1MotherArabic = /[\u0600-\u06FF]/.test(person1.motherName)
        ? person1.motherName
        : transliterateLatinToArabic(person1.motherName).primary;
      
      const person2MotherArabic = /[\u0600-\u06FF]/.test(person2.motherName)
        ? person2.motherName
        : transliterateLatinToArabic(person2.motherName).primary;

      const fourLayerResult = analyzeFourLayerCompatibility(
        person1.name,
        person1Arabic,
        person1MotherArabic,
        person2.name,
        person2Arabic,
        person2MotherArabic,
        ABJAD_MAGHRIBI
      );

      fourLayerAnalysis = {
        layer1_dailyLife: fourLayerResult.layers.layer1 ? {
          score: fourLayerResult.layers.layer1.percentage,
          elements: `${fourLayerResult.layers.layer1.element1}-${fourLayerResult.layers.layer1.element2}`,
          description: language === 'fr' 
            ? fourLayerResult.layers.layer1.descriptionFrench
            : fourLayerResult.layers.layer1.description
        } : undefined,
        layer2_emotional: fourLayerResult.layers.layer2 ? {
          score: fourLayerResult.layers.layer2.percentage,
          elements: `${fourLayerResult.layers.layer2.element1}-${fourLayerResult.layers.layer2.element2}`,
          description: language === 'fr'
            ? fourLayerResult.layers.layer2.descriptionFrench
            : fourLayerResult.layers.layer2.description
        } : undefined,
        layer3_crossDynamicA: fourLayerResult.layers.layer3 ? {
          score: fourLayerResult.layers.layer3.percentage,
          elements: `${fourLayerResult.layers.layer3.element1}-${fourLayerResult.layers.layer3.element2}`,
          description: language === 'fr'
            ? fourLayerResult.layers.layer3.descriptionFrench
            : fourLayerResult.layers.layer3.description
        } : undefined,
        layer4_crossDynamicB: fourLayerResult.layers.layer4 ? {
          score: fourLayerResult.layers.layer4.percentage,
          elements: `${fourLayerResult.layers.layer4.element1}-${fourLayerResult.layers.layer4.element2}`,
          description: language === 'fr'
            ? fourLayerResult.layers.layer4.descriptionFrench
            : fourLayerResult.layers.layer4.description
        } : undefined
      };
    }

    // ========================================================================
    // CALCULATE OVERALL SCORE AND QUALITY
    // ========================================================================

    // Calculate weighted average of all methods
    let totalScore = basicCompatibility.overallScore;
    let methodCount = 3; // Default: 3 basic methods

    if (fourLayerAnalysis) {
      // Include four-layer scores in average (only if present)
      if (fourLayerAnalysis.layer1_dailyLife) {
        totalScore += fourLayerAnalysis.layer1_dailyLife.score;
        methodCount++;
      }
      if (fourLayerAnalysis.layer2_emotional) {
        totalScore += fourLayerAnalysis.layer2_emotional.score;
        methodCount++;
      }
      if (fourLayerAnalysis.layer3_crossDynamicA) {
        totalScore += fourLayerAnalysis.layer3_crossDynamicA.score;
        methodCount++;
      }
      if (fourLayerAnalysis.layer4_crossDynamicB) {
        totalScore += fourLayerAnalysis.layer4_crossDynamicB.score;
        methodCount++;
      }
    }

    const overallScore = Math.round(totalScore / methodCount);

    // Determine overall quality
    let overallQuality: 'excellent' | 'good' | 'moderate' | 'challenging';
    if (overallScore >= 85) {
      overallQuality = 'excellent';
    } else if (overallScore >= 70) {
      overallQuality = 'good';
    } else if (overallScore >= 55) {
      overallQuality = 'moderate';
    } else {
      overallQuality = 'challenging';
    }

    // ========================================================================
    // BUILD RECOMMENDATION
    // ========================================================================

    let recommendation: string;
    let recommendationFrench: string;
    let recommendationArabic: string;

    switch (overallQuality) {
      case 'excellent':
        recommendation = 'This is an exceptional match with strong compatibility across multiple dimensions. The relationship has excellent potential for harmony and mutual growth.';
        recommendationFrench = 'Ceci est une correspondance exceptionnelle avec une forte compatibilité à travers plusieurs dimensions. La relation a un excellent potentiel d\'harmonie et de croissance mutuelle.';
        recommendationArabic = 'هذا تطابق استثنائي مع توافق قوي عبر أبعاد متعددة. العلاقة لديها إمكانات ممتازة للانسجام والنمو المتبادل.';
        break;
      case 'good':
        recommendation = 'This is a promising match with solid compatibility. While there may be some differences, they can complement each other well with mutual understanding.';
        recommendationFrench = 'Ceci est une correspondance prometteuse avec une compatibilité solide. Bien qu\'il puisse y avoir quelques différences, ils peuvent bien se compléter avec une compréhension mutuelle.';
        recommendationArabic = 'هذا تطابق واعد مع توافق قوي. بينما قد تكون هناك بعض الاختلافات، يمكنهم التكامل بشكل جيد مع التفاهم المتبادل.';
        break;
      case 'moderate':
        recommendation = 'This match shows moderate compatibility. Success will require effort, communication, and willingness to understand and appreciate differences.';
        recommendationFrench = 'Cette correspondance montre une compatibilité modérée. Le succès nécessitera des efforts, de la communication et une volonté de comprendre et d\'apprécier les différences.';
        recommendationArabic = 'يظهر هذا التطابق توافقاً معتدلاً. سيتطلب النجاح جهداً وتواصلاً واستعداداً لفهم وتقدير الاختلافات.';
        break;
      case 'challenging':
        recommendation = 'This match presents significant challenges. While not impossible, it will require conscious effort, patience, and deep commitment from both individuals.';
        recommendationFrench = 'Cette correspondance présente des défis importants. Bien que non impossible, cela nécessitera un effort conscient, de la patience et un engagement profond des deux individus.';
        recommendationArabic = 'يقدم هذا التطابق تحديات كبيرة. على الرغم من أنه ليس مستحيلاً، سيتطلب جهداً واعياً وصبراً والتزاماً عميقاً من كلا الطرفين.';
        break;
    }

    // ========================================================================
    // BUILD RESPONSE
    // ========================================================================

    const responseData: CompatibilityResponse = {
      overallScore,
      overallQuality,

      methods: {
        spiritualDestiny: {
          score: basicCompatibility.methods.spiritualDestiny.score,
          remainder: basicCompatibility.methods.spiritualDestiny.remainder,
          quality: basicCompatibility.methods.spiritualDestiny.quality,
          description: basicCompatibility.methods.spiritualDestiny.description,
          descriptionFrench: basicCompatibility.methods.spiritualDestiny.descriptionFrench,
          descriptionArabic: basicCompatibility.methods.spiritualDestiny.descriptionArabic
        },

        elementalTemperament: {
          score: basicCompatibility.methods.elementalTemperament.score,
          elements: [
            basicCompatibility.person1.element,
            basicCompatibility.person2.element
          ] as [string, string],
          chemistry: basicCompatibility.methods.elementalTemperament.quality,
          description: basicCompatibility.methods.elementalTemperament.description,
          descriptionFrench: basicCompatibility.methods.elementalTemperament.descriptionFrench,
          descriptionArabic: basicCompatibility.methods.elementalTemperament.descriptionArabic
        },

        planetaryCosmic: {
          score: basicCompatibility.methods.planetaryCosmic.score,
          planets: [
            basicCompatibility.methods.planetaryCosmic.person1Planet.name,
            basicCompatibility.methods.planetaryCosmic.person2Planet.name
          ] as [string, string],
          relationship: basicCompatibility.methods.planetaryCosmic.relationship,
          description: basicCompatibility.methods.planetaryCosmic.description,
          descriptionFrench: basicCompatibility.methods.planetaryCosmic.descriptionFrench,
          descriptionArabic: basicCompatibility.methods.planetaryCosmic.descriptionArabic
        }
      },

      ...(fourLayerAnalysis && { fourLayerAnalysis }),

      recommendation: language === 'ar' ? recommendationArabic : language === 'fr' ? recommendationFrench : recommendation,
      ...(language !== 'en' && { recommendationFrench }),
      ...(language !== 'en' && { recommendationArabic })
    };

    // ========================================================================
    // RETURN SUCCESS RESPONSE
    // ========================================================================

    const response: ApiResponse<CompatibilityResponse> = {
      success: true,
      data: responseData,
      timestamp: new Date().toISOString()
    };

    return NextResponse.json(response, { 
      status: 200,
      headers: corsHeaders
    });

  } catch (error: any) {
    // ========================================================================
    // ERROR HANDLING
    // ========================================================================

    console.error('Compatibility API Error:', error);

    const response: ApiResponse = {
      success: false,
      error: {
        code: ApiErrorCode.CALCULATION_ERROR,
        message: 'An error occurred during compatibility calculation',
        details: process.env.NODE_ENV === 'development' ? error.message : undefined
      },
      timestamp: new Date().toISOString()
    };

    return NextResponse.json(response, { 
      status: 500,
      headers: corsHeaders
    });
  }
}
