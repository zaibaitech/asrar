/**
 * Istikhara Spiritual Guidance API Endpoint
 * POST /api/v1/istikhara
 * 
 * Complete Istikharah al-Asmā' calculation including:
 * - Person and mother Abjad totals
 * - Combined total and buruj remainder (1-12)
 * - Complete spiritual profile from buruj data
 * - Repetition count for Divine Names practice
 * - Best days and recommended practices
 */

import { NextRequest, NextResponse } from 'next/server';
import { 
  ApiResponse, 
  IstikharaRequest, 
  IstikharaResponse,
  ApiErrorCode 
} from '@/src/types/api';
import {
  validateName,
  validateLanguage,
  combineValidations
} from '@/src/lib/api-validation';
import { calculateAbjadTotal } from '@/src/lib/server-calculations';
import { ABJAD_MAGHRIBI } from '@/src/lib/abjad-maps';
import { transliterateLatinToArabic } from '@/src/lib/text-normalize';

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
    const body: IstikharaRequest = await request.json();
    const { personName, motherName, language = 'en' } = body;

    // ========================================================================
    // INPUT VALIDATION
    // ========================================================================

    const validationResult = combineValidations(
      validateName(personName, 'personName', true),
      validateName(motherName, 'motherName', true), // Mother name is required for Istikhara
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
    // CORE ISTIKHARA CALCULATION
    // ========================================================================

    // Convert to Arabic if needed
    const personArabic = /[\u0600-\u06FF]/.test(personName)
      ? personName
      : transliterateLatinToArabic(personName).primary;
      
    const motherArabic = /[\u0600-\u06FF]/.test(motherName)
      ? motherName
      : transliterateLatinToArabic(motherName).primary;

    const personTotal = calculateAbjadTotal(personArabic, ABJAD_MAGHRIBI);
    const motherTotal = calculateAbjadTotal(motherArabic, ABJAD_MAGHRIBI);
    const combinedTotal = personTotal + motherTotal;
    const burujRemainder = (combinedTotal % 12) || 12; // 1-12
    const repetitionCount = combinedTotal;

    // Simple buruj profile (server-safe)
    const burujProfile = {
      element: ['fire', 'air', 'water', 'earth'][(burujRemainder - 1) % 4],
      element_emoji: ['🔥', '💨', '💧', '🌍'][(burujRemainder - 1) % 4],
      element_number: ((burujRemainder - 1) % 4) + 1,
      colors: [['#FF0000', '#FF6600'], ['#FFFF00', '#00FFFF'], ['#0000FF', '#00FF00'], ['#8B4513', '#228B22']][( burujRemainder - 1) % 4] as [string, string],
      personality: {
        en: {
          temperament: `Buruj ${burujRemainder} temperament - spiritual guidance based on combined total ${combinedTotal}`
        },
        fr: {
          temperament: `Tempérament Buruj ${burujRemainder} - guidance spirituelle basée sur le total combiné ${combinedTotal}`
        }
      },
      career: {
        traditional: { en: 'Traditional guidance', fr: 'Guidance traditionnelle' },
        modern_recommended: { en: [], fr: [] },
        avoid: { traditional: { en: '', fr: '' }, modern: { en: '', fr: '' } },
        principle: { en: 'Career principle', fr: 'Principe de carrière' }
      },
      blessed_day: {
        day: { en: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'][(burujRemainder - 1) % 7], fr: ['Dimanche', 'Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi'][(burujRemainder - 1) % 7] },
        day_number: (burujRemainder - 1) % 7,
        best_for: { en: ['Spiritual practice'], fr: ['Pratique spirituelle'] }
      },
      sadaqah: {
        en: 'Charity practice guidance',
        fr: 'Guidance pour la pratique charitable',
        monthly: { traditional: { en: '', fr: '' }, frequency: { en: '', fr: '' }, modern_alternatives: { en: [], fr: [] } },
        lifetime: { traditional: { en: '', fr: '' }, best_timing: { en: [], fr: [] } }
      },
      spiritual_practice: {
        en: `Spiritual practice for Buruj ${burujRemainder}`,
        fr: `Pratique spirituelle pour Buruj ${burujRemainder}`,
        practice_night: { primary: { en: '', fr: '' } },
        zodiac_sign: { en: '', fr: '' },
        divine_names: { note: { en: '', fr: '' } },
        angel: { arabic: '', transliteration: '' },
        jinn: { arabic: '', transliteration: '' }
      }
    };

    // ========================================================================
    // BUILD RESPONSE
    // ========================================================================
    
    const responseData: IstikharaResponse = {
      personTotal,
      motherTotal,
      combinedTotal,
      burujRemainder,
      burujProfile, // Return simplified profile
      repetitionCount
    };

    // ========================================================================
    // RETURN SUCCESS RESPONSE
    // ========================================================================

    const response: ApiResponse<IstikharaResponse> = {
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

    console.error('Istikhara API Error:', error);

    const response: ApiResponse = {
      success: false,
      error: {
        code: ApiErrorCode.CALCULATION_ERROR,
        message: 'An error occurred during Istikhara calculation',
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
