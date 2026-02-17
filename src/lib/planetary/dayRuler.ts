/**
 * Day Ruler Utilities
 * Extracted from asrar-mobile for web app integration
 */

import { 
  Planet, 
  Element, 
  DayRulerInfo 
} from './types';
import { 
  DAY_RULERS, 
  DAY_NAMES, 
  DAY_NAMES_ARABIC, 
  PLANET_INFO,
  ELEMENT_ARABIC,
  ELEMENT_EMOJI,
  ELEMENT_DESCRIPTIONS,
  ELEMENT_BEST_FOR
} from './constants';

/**
 * Get complete day ruler info for a given date
 */
export function getDayRulerInfo(date: Date): DayRulerInfo {
  const dayOfWeek = date.getDay();
  const dayName = DAY_NAMES[dayOfWeek];
  const planet = DAY_RULERS[dayOfWeek];
  const planetInfo = PLANET_INFO[planet];
  const element = planetInfo.element;
  
  return {
    dayName,
    dayNameArabic: DAY_NAMES_ARABIC[dayName],
    planet,
    planetArabic: planetInfo.arabicName,
    element,
    elementArabic: ELEMENT_ARABIC[element],
    elementEmoji: ELEMENT_EMOJI[element],
    elementDescription: ELEMENT_DESCRIPTIONS[element],
    bestFor: ELEMENT_BEST_FOR[element],
    difficulty: getDifficultyForElement(element),
  };
}

/**
 * Get difficulty level based on element
 * This is a simplified version - can be enhanced with actual logic
 */
function getDifficultyForElement(element: Element): 'Easy' | 'Moderate' | 'Advanced' {
  // Simplified mapping - customize based on your needs
  switch (element) {
    case 'fire':
    case 'air':
      return 'Moderate';
    case 'water':
      return 'Easy';
    case 'earth':
      return 'Advanced';
    default:
      return 'Moderate';
  }
}
