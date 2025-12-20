/**
 * Name Destiny Analysis API Endpoint
 * POST /api/v1/name-destiny
 * 
 * Complete ʿIlm al-Ḥurūf analysis including:
 * - Kabīr (Ḥadad), Ṣaghīr, Ḥadath
 * - Element and Zodiac (Burj)
 * - Quranic verse resonance
 * - Divine Name resonance
 * - Life Path numbers (if birthDate provided)
 * - Mother's influence (if motherName provided)
 */

import { NextRequest, NextResponse } from 'next/server';
import { 
  ApiResponse, 
  NameDestinyRequest, 
  NameDestinyResponse,
  ApiErrorCode 
} from '@/src/types/api';
import {
  validateName,
  validateDate,
  validateLanguage,
  validateAbjadSystem,
  combineValidations
} from '@/src/lib/api-validation';
import { ABJAD_MAGHRIBI, ABJAD_MASHRIQI } from '@/src/lib/abjad-maps';
import { calculateSimpleDestiny, calculateAbjadTotal } from '@/src/lib/server-calculations';
import { 
  calculateTrueLifePath,
  calculateExpressionNumber,
  calculateSoulUrgeNumber,
  calculatePersonalityNumber
} from '@/src/utils/lifePathCalculator';

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
    const body: NameDestinyRequest = await request.json();
    const { name, motherName, birthDate, abjadSystem = 'maghribi', language = 'en' } = body;

    // ========================================================================
    // INPUT VALIDATION
    // ========================================================================

    const validationResult = combineValidations(
      validateName(name, 'name', true),
      validateName(motherName, 'motherName', false),
      validateDate(birthDate, 'birthDate', false),
      validateLanguage(language, false),
      validateAbjadSystem(abjadSystem, false)
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
    // SELECT ABJAD SYSTEM
    // ========================================================================

    const abjadMap = abjadSystem === 'mashriqi' ? ABJAD_MASHRIQI : ABJAD_MAGHRIBI;

    // ========================================================================
    // CORE NAME DESTINY ANALYSIS
    // ========================================================================

    // Use server-side calculation (simplified but server-compatible)
    const destinyResult = calculateSimpleDestiny(name, motherName, abjadMap);

    // ========================================================================
    // DIVINE NAME RESONANCE & QURAN RESONANCE
    // ========================================================================

    // Simple mapping: use saghir (1-9) for Divine Name
    const divineNameNumber = destinyResult.saghir;
    
    // Simple Quran resonance: use kabir mod 114 for surah
    const surahNumber = (destinyResult.kabir % 114) || 114;

    // ========================================================================
    // LIFE PATH NUMBERS (if birthDate provided)
    // ========================================================================

    let lifePathNumbers: NameDestinyResponse['lifePathNumbers'] | undefined;

    if (birthDate) {
      const date = new Date(birthDate);
      lifePathNumbers = {
        trueLifePath: calculateTrueLifePath(date),
        expressionNumber: calculateExpressionNumber(name),
        soulUrgeNumber: calculateSoulUrgeNumber(name),
        personalityNumber: calculatePersonalityNumber(name)
      };
    }

    // ========================================================================
    // MOTHER'S INFLUENCE
    // ========================================================================

    let motherInfluence: NameDestinyResponse['motherInfluence'] | undefined;

    if (motherName && destinyResult.motherKabir > 0) {
      const motherElement = destinyResult.element; // Combined element includes mother influence
      
      motherInfluence = {
        element: motherElement.en,
        elementArabic: motherElement.ar,
        kabir: destinyResult.motherKabir,
        saghir: destinyResult.saghir,
        hadath: (destinyResult.motherKabir % 4) as 0 | 1 | 2 | 3
      };
    }

    // ========================================================================
    // BUILD RESPONSE
    // ========================================================================

    const responseData: NameDestinyResponse = {
      // Core calculations
      kabir: destinyResult.kabir,
      saghir: destinyResult.saghir,
      hadath: destinyResult.hadath as 0 | 1 | 2 | 3,

      // Element data
      element: {
        index: destinyResult.element.index,
        en: destinyResult.element.en,
        fr: destinyResult.element.fr,
        ar: destinyResult.element.ar,
        icon: destinyResult.element.icon,
        qualityEn: 'Elemental Quality',
        qualityFr: 'Qualité Élémentaire'
      },

      // Zodiac data
      burj: {
        index: destinyResult.burj.index,
        en: destinyResult.burj.en,
        fr: destinyResult.burj.fr,
        ar: destinyResult.burj.ar,
        symbol: destinyResult.burj.symbol,
        planet: destinyResult.burj.planet
      },

      // Quranic resonance (simplified)
      quranResonance: {
        surahNumber: surahNumber,
        surahName: `Surah ${surahNumber}`,
        surahNameArabic: '',
        ayahNumber: (destinyResult.saghir % 10) + 1,
        totalAyahsInSurah: 0,
        quranLink: `https://quran.com/${surahNumber}`
      },

      // Divine name resonance (simplified)
      divineNameResonance: {
        number: divineNameNumber,
        arabic: '',
        transliteration: `Divine Name ${divineNameNumber}`,
        meaningEn: 'Divine Quality',
        meaningFr: 'Qualité Divine',
        spiritualInfluence: 'Spiritual guidance based on your name energy',
        spiritualInfluenceFr: 'Guidance spirituelle basée sur l\'énergie de votre nom',
        reflection: 'Reflect on this divine quality in your life',
        reflectionFr: 'Réfléchissez à cette qualité divine dans votre vie'
      },

      // Spiritual insights (simplified)
      destiny: {
        name: 'Destiny Path',
        quality: 'Your life purpose',
        description: `Your destiny number ${destinyResult.saghir} indicates your life path and purpose.`
      },

      soulUrge: {
        name: 'Soul Urge',
        quality: 'Your inner desires',
        description: `Your soul seeks expression through ${destinyResult.element.en} energy.`
      },

      personality: {
        name: 'Personality',
        quality: 'Your outer expression',
        description: `You express yourself with ${destinyResult.burj.en} characteristics.`
      },

      // Optional fields
      ...(lifePathNumbers && { lifePathNumbers }),
      ...(motherInfluence && { motherInfluence })
    };

    // ========================================================================
    // RETURN SUCCESS RESPONSE
    // ========================================================================

    const response: ApiResponse<NameDestinyResponse> = {
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

    console.error('Name Destiny API Error:', error);

    const response: ApiResponse = {
      success: false,
      error: {
        code: ApiErrorCode.CALCULATION_ERROR,
        message: 'An error occurred during name destiny calculation',
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
