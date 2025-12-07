/**
 * AI Analysis Service
 * Handles communication with the AI analysis API
 */

export interface AnalysisRequest {
  calculationData: any;
  analysisType: 'name-destiny' | 'life-path' | 'compatibility' | 'divine-timing' | 'daily-reflection' | 'general';
  language?: 'ar' | 'en';
}

export interface AnalysisResponse {
  analysis: string;
  timestamp: string;
  analysisType: string;
  language: string;
  error?: string;
}

/**
 * Request AI analysis for calculation results
 */
export async function requestAIAnalysis(request: AnalysisRequest): Promise<AnalysisResponse> {
  try {
    const response = await fetch('/api/ai-analysis', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(request),
    });

    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.error || 'Failed to get AI analysis');
    }

    return await response.json();
  } catch (error: any) {
    console.error('AI Analysis Request Error:', error);
    throw error;
  }
}

/**
 * Format name/destiny calculation data for AI analysis
 */
export function formatNameDestinyData(
  name: string,
  motherName: string,
  birthDate: string,
  results: any
) {
  return {
    personalInfo: {
      name,
      motherName,
      birthDate,
    },
    numbers: {
      totalValue: results.totalValue,
      modulo9: results.totalValue % 9 || 9,
      letterCount: results.letterCount,
    },
    elements: results.elementDistribution,
    element: results.element,
    planetaryInfluences: results.planetaryInfluences,
    letterBreakdown: results.letterBreakdown,
  };
}

/**
 * Format life path calculation data for AI analysis
 */
export function formatLifePathData(birthDate: string, results: any) {
  return {
    birthDate,
    lifePathNumber: results.lifePathNumber,
    calculation: results.calculation,
    traits: results.traits,
    strengths: results.strengths,
    challenges: results.challenges,
  };
}

/**
 * Format compatibility calculation data for AI analysis
 */
export function formatCompatibilityData(
  person1: { name: string; birthDate: string; results: any },
  person2: { name: string; birthDate: string; results: any },
  compatibilityScore: number
) {
  return {
    person1: {
      name: person1.name,
      birthDate: person1.birthDate,
      number: person1.results.totalValue % 9 || 9,
      element: person1.results.element,
      elements: person1.results.elementDistribution,
    },
    person2: {
      name: person2.name,
      birthDate: person2.birthDate,
      number: person2.results.totalValue % 9 || 9,
      element: person2.results.element,
      elements: person2.results.elementDistribution,
    },
    compatibilityScore,
    elementalBalance: {
      harmony: compatibilityScore > 70,
      complementary: Math.abs((person1.results.totalValue % 9 || 9) - (person2.results.totalValue % 9 || 9)) <= 3,
    },
  };
}

/**
 * Format divine timing data for AI analysis
 */
export function formatDivineTimingData(date: string, results: any) {
  return {
    date,
    dayNumber: results.dayNumber,
    planetaryHour: results.planetaryHour,
    divineNames: results.divineNames,
    energyLevel: results.energyLevel,
    recommendations: results.recommendations,
  };
}

/**
 * Format daily reflection data for AI analysis
 */
export function formatDailyReflectionData(date: string, userData: any) {
  return {
    date,
    userProfile: userData,
    dayEnergy: calculateDayEnergy(date),
    personalYear: calculatePersonalYear(userData.birthDate, date),
  };
}

function calculateDayEnergy(dateStr: string): number {
  const date = new Date(dateStr);
  const day = date.getDate();
  const month = date.getMonth() + 1;
  const year = date.getFullYear();
  
  const sum = day + month + year;
  return (sum % 9) || 9;
}

function calculatePersonalYear(birthDateStr: string, currentDateStr: string): number {
  const birthDate = new Date(birthDateStr);
  const currentDate = new Date(currentDateStr);
  
  const birthDay = birthDate.getDate();
  const birthMonth = birthDate.getMonth() + 1;
  const currentYear = currentDate.getFullYear();
  
  const sum = birthDay + birthMonth + currentYear;
  return (sum % 9) || 9;
}

/**
 * Parse markdown-style AI response for better display
 */
export function parseAIResponse(text: string): {
  title?: string;
  sections: Array<{ heading: string; content: string }>;
  rawText: string;
} {
  const lines = text.split('\n');
  const sections: Array<{ heading: string; content: string }> = [];
  let currentSection: { heading: string; content: string } | null = null;
  let title: string | undefined;

  for (const line of lines) {
    // Check for headings
    if (line.startsWith('# ')) {
      title = line.replace('# ', '').trim();
    } else if (line.startsWith('## ') || line.startsWith('**') && line.includes('**:')) {
      // Save previous section
      if (currentSection) {
        sections.push(currentSection);
      }
      // Start new section
      const heading = line.replace('## ', '').replace(/\*\*/g, '').replace(':', '').trim();
      currentSection = { heading, content: '' };
    } else if (currentSection && line.trim()) {
      currentSection.content += line + '\n';
    }
  }

  // Add last section
  if (currentSection) {
    sections.push(currentSection);
  }

  return {
    title,
    sections,
    rawText: text,
  };
}
