/**
 * Quran Resonance API Endpoint
 * Calculates Quranic Surah/Ayah resonance based on name or number
 * Uses AlQuran Cloud API for complete Surah metadata
 */

import { NextResponse } from 'next/server';
import type { ApiResponse, QuranResonanceRequest, QuranResonanceResponse } from '../../../../src/types/api';
import { validateName, validateLanguage, validateAbjadSystem, combineValidations } from '../../../../src/lib/api-validation';
import { calculateAbjadTotal, getElement } from '../../../../src/lib/server-calculations';
import { ABJAD_MAGHRIBI, ABJAD_MASHRIQI } from '../../../../src/lib/abjad-maps';
import { transliterateLatinToArabic } from '../../../../src/lib/text-normalize';

// ============================================================================
// QURAN SURAH THEMES (114 Surahs)
// ============================================================================

const SURAH_THEMES: Record<number, { en: string; fr: string; ar: string }> = {
  1: { en: 'The Opening, Foundation of Faith', fr: 'L\'Ouverture, Fondation de la Foi', ar: 'الفاتحة، أساس الإيمان' },
  2: { en: 'Guidance and Law', fr: 'Guidance et Loi', ar: 'الهداية والشريعة' },
  3: { en: 'Family of Imran, Patience', fr: 'Famille d\'Imran, Patience', ar: 'آل عمران، الصبر' },
  4: { en: 'Justice and Rights', fr: 'Justice et Droits', ar: 'العدل والحقوق' },
  5: { en: 'Contracts and Covenants', fr: 'Contrats et Alliances', ar: 'العقود والمواثيق' },
  6: { en: 'Divine Signs in Creation', fr: 'Signes Divins dans la Création', ar: 'الآيات الإلهية في الخلق' },
  7: { en: 'Divine Heights and Wisdom', fr: 'Hauteurs Divines et Sagesse', ar: 'الأعراف والحكمة' },
  8: { en: 'Spoils of War, Trust in God', fr: 'Butin de Guerre, Confiance en Dieu', ar: 'الأنفال، التوكل على الله' },
  9: { en: 'Repentance and Sincerity', fr: 'Repentir et Sincérité', ar: 'التوبة والإخلاص' },
  10: { en: 'Divine Mercy and Guidance', fr: 'Miséricorde Divine et Guidance', ar: 'الرحمة الإلهية والهداية' },
  // Add more as needed - these are examples
};

// Default theme for surahs not in the map
const getDefaultTheme = (surahNumber: number): { en: string; fr: string; ar: string } => ({
  en: `Surah ${surahNumber}: Divine Wisdom and Guidance`,
  fr: `Sourate ${surahNumber}: Sagesse Divine et Guidance`,
  ar: `سورة ${surahNumber}: الحكمة الإلهية والهداية`
});

// ============================================================================
// HELPER FUNCTIONS
// ============================================================================

/**
 * Fetch Surah data from AlQuran Cloud API
 */
async function fetchSurahData(surahNumber: number): Promise<any> {
  try {
    const response = await fetch(`https://api.alquran.cloud/v1/surah/${surahNumber}`, {
      headers: { 'Accept': 'application/json' }
    });
    
    if (!response.ok) {
      throw new Error(`AlQuran API returned ${response.status}`);
    }
    
    const data = await response.json();
    
    if (data.code !== 200 || !data.data) {
      throw new Error('Invalid response from AlQuran API');
    }
    
    return data.data;
  } catch (error) {
    console.error('Error fetching Surah data:', error);
    // Return fallback data
    return {
      number: surahNumber,
      name: `Surah ${surahNumber}`,
      englishName: `Surah ${surahNumber}`,
      numberOfAyahs: 1,
      revelationType: 'Unknown'
    };
  }
}

/**
 * Generate spiritual message based on Surah theme
 */
function generateSpiritualMessage(surahNumber: number, surahName: string, language: 'en' | 'fr' | 'ar'): string {
  const messages: Record<string, Record<number, string>> = {
    en: {
      1: 'Your path opens with divine guidance - seek the straight path in all matters.',
      2: 'You are aligned with guidance and divine law - follow the light of truth.',
      3: 'Patience and steadfastness are your strengths - trust in divine wisdom.',
    },
    fr: {
      1: 'Votre chemin s\'ouvre avec la guidance divine - cherchez le droit chemin en toutes choses.',
      2: 'Vous êtes aligné avec la guidance et la loi divine - suivez la lumière de la vérité.',
      3: 'La patience et la constance sont vos forces - ayez confiance en la sagesse divine.',
    },
    ar: {
      1: 'يفتح طريقك بالهداية الإلهية - اسلك الصراط المستقيم في كل الأمور.',
      2: 'أنت متوافق مع الهداية والشريعة الإلهية - اتبع نور الحق.',
      3: 'الصبر والثبات هما قوتك - توكل على الحكمة الإلهية.',
    }
  };
  
  const defaultMessages = {
    en: `Reflect on the wisdom of ${surahName} - its teachings illuminate your path.`,
    fr: `Réfléchissez à la sagesse de ${surahName} - ses enseignements illuminent votre chemin.`,
    ar: `تأمل في حكمة ${surahName} - تعاليمها تنير طريقك.`
  };
  
  return messages[language]?.[surahNumber] || defaultMessages[language];
}

/**
 * Generate practical guidance
 */
function generatePracticalGuidance(surahNumber: number, language: 'en' | 'fr' | 'ar'): string {
  const guidance: Record<string, string> = {
    en: 'Recite this Surah daily for spiritual alignment. Reflect on its verses during meditation.',
    fr: 'Récitez cette Sourate quotidiennement pour l\'alignement spirituel. Réfléchissez à ses versets pendant la méditation.',
    ar: 'اقرأ هذه السورة يوميا للتوافق الروحي. تأمل في آياتها أثناء التأمل.'
  };
  
  return guidance[language];
}

/**
 * Generate reflection prompt
 */
function generateReflectionPrompt(surahName: string, ayahNumber: number, language: 'en' | 'fr' | 'ar'): string {
  const prompts: Record<string, string> = {
    en: `Contemplate verse ${ayahNumber} of ${surahName}. What message does it hold for your current journey?`,
    fr: `Contemplez le verset ${ayahNumber} de ${surahName}. Quel message détient-il pour votre voyage actuel?`,
    ar: `تأمل في الآية ${ayahNumber} من ${surahName}. ما هي الرسالة التي تحملها لرحلتك الحالية؟`
  };
  
  return prompts[language];
}

// ============================================================================
// POST HANDLER
// ============================================================================

export async function POST(request: Request) {
  try {
    const body: QuranResonanceRequest = await request.json();
    
    // ========================================================================
    // VALIDATION
    // ========================================================================
    
    const language = body.language || 'en';
    const abjadSystem = body.abjadSystem || 'maghribi';
    
    // Validate language and abjad system
    const languageValidation = validateLanguage(language);
    const abjadValidation = validateAbjadSystem(abjadSystem);
    
    const combinedValidation = combineValidations(languageValidation, abjadValidation);
    if (!combinedValidation.isValid) {
      return NextResponse.json({
        success: false,
        error: {
          code: 'VALIDATION_ERROR',
          message: 'Invalid input parameters',
          details: combinedValidation.error
        },
        timestamp: new Date().toISOString()
      } as ApiResponse, { status: 400 });
    }
    
    // Validate input
    if (!body.input || body.input.trim().length === 0) {
      return NextResponse.json({
        success: false,
        error: {
          code: 'VALIDATION_ERROR',
          message: 'Input is required',
          details: 'Please provide a name or number'
        },
        timestamp: new Date().toISOString()
      } as ApiResponse, { status: 400 });
    }
    
    // ========================================================================
    // DETERMINE INPUT TYPE & CALCULATE VALUE
    // ========================================================================
    
    const input = body.input.trim();
    let inputType: 'name' | 'number' = body.inputType || 'name';
    let numericalValue: number;
    
    // Auto-detect input type if not specified
    if (!body.inputType) {
      const isNumeric = /^\d+$/.test(input);
      inputType = isNumeric ? 'number' : 'name';
    }
    
    if (inputType === 'number') {
      numericalValue = parseInt(input, 10);
      
      if (isNaN(numericalValue) || numericalValue < 1) {
        return NextResponse.json({
          success: false,
          error: {
            code: 'VALIDATION_ERROR',
            message: 'Invalid number',
            details: 'Number must be a positive integer'
          },
          timestamp: new Date().toISOString()
        } as ApiResponse, { status: 400 });
      }
    } else {
      // Calculate from name
      const nameValidation = validateName(input);
      if (!nameValidation.isValid) {
        return NextResponse.json({
          success: false,
          error: {
            code: 'VALIDATION_ERROR',
            message: 'Invalid name',
            details: nameValidation.error
          },
          timestamp: new Date().toISOString()
        } as ApiResponse, { status: 400 });
      }
      
      const abjadMap = abjadSystem === 'maghribi' ? ABJAD_MAGHRIBI : ABJAD_MASHRIQI;
      
      // Convert to Arabic if needed
      const arabicName = /[\u0600-\u06FF]/.test(input)
        ? input
        : transliterateLatinToArabic(input).primary;
      
      numericalValue = calculateAbjadTotal(arabicName, abjadMap);
    }
    
    // ========================================================================
    // CALCULATE RESONANCES
    // ========================================================================
    
    const kabir = numericalValue;
    const saghir = kabir % 9 === 0 ? 9 : kabir % 9;
    
    // Primary resonance: Surah number (1-114)
    const primarySurahNumber = ((kabir - 1) % 114) + 1;
    
    // Secondary resonance from saghir (1-9)
    const secondarySurahBySaghir = ((saghir - 1) % 114) + 1;
    
    // Element-based resonance
    const element = getElement(kabir);
    const elementSurahNumber = ((element.index - 1) * 28 + 1); // Distribute across Quran
    
    // ========================================================================
    // FETCH SURAH DATA FROM API
    // ========================================================================
    
    const primarySurahData = await fetchSurahData(primarySurahNumber);
    
    // Calculate Ayah number within the Surah
    const primaryAyahNumber = ((kabir - 1) % primarySurahData.numberOfAyahs) + 1;
    
    // ========================================================================
    // BUILD RESPONSE
    // ========================================================================
    
    const theme = SURAH_THEMES[primarySurahNumber] || getDefaultTheme(primarySurahNumber);
    
    const response: QuranResonanceResponse = {
      input: input,
      inputType: inputType,
      numericalValue: numericalValue,
      
      primaryResonance: {
        surahNumber: primarySurahNumber,
        surahName: primarySurahData.englishName || `Surah ${primarySurahNumber}`,
        surahNameArabic: primarySurahData.name || '',
        ayahNumber: primaryAyahNumber,
        totalAyahs: primarySurahData.numberOfAyahs || 1,
        link: `https://quran.com/${primarySurahNumber}/${primaryAyahNumber}`
      },
      
      thematicConnections: {
        surahTheme: theme[language as keyof typeof theme],
        spiritualMessage: generateSpiritualMessage(primarySurahNumber, primarySurahData.englishName, language),
        practicalGuidance: generatePracticalGuidance(primarySurahNumber, language)
      },
      
      additionalResonances: {
        bySaghir: {
          surahNumber: secondarySurahBySaghir,
          surahName: `Surah ${secondarySurahBySaghir}`,
          ayahNumber: saghir
        },
        byElement: {
          surahNumber: elementSurahNumber,
          surahName: `Surah ${elementSurahNumber}`,
          ayahNumber: element.index
        }
      },
      
      reflectionPrompt: generateReflectionPrompt(primarySurahData.englishName, primaryAyahNumber, language)
    };
    
    // ========================================================================
    // RETURN SUCCESS
    // ========================================================================
    
    return NextResponse.json({
      success: true,
      data: response,
      timestamp: new Date().toISOString()
    } as ApiResponse<QuranResonanceResponse>);
    
  } catch (error: any) {
    console.error('Quran Resonance API Error:', error);
    
    return NextResponse.json({
      success: false,
      error: {
        code: 'INTERNAL_ERROR',
        message: 'An error occurred while processing Quran resonance',
        details: error.message
      },
      timestamp: new Date().toISOString()
    } as ApiResponse, { status: 500 });
  }
}

// ============================================================================
// ENABLE CORS
// ============================================================================

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
