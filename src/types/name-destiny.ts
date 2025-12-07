/**
 * Name Destiny Module Type Definitions
 * Supports dual-mode approach: General Name Analysis vs Personal Profile
 */

export type NameDestinyMode = 'general' | 'personal';

export interface NameDestinyInput {
  mode: NameDestinyMode;
  name: string;
  nameArabic?: string;
  mothersName?: string;        // Optional for general mode
  mothersNameArabic?: string;  // Optional for general mode
}

export interface ElementData {
  symbol: string;
  nameEn: string;
  nameFr: string;
  nameAr: string;
  qualities: string;
  color: string;
}

export interface LetterGeometry {
  type: string;
  description: string;
}

export interface BurujData {
  nameEn: string;
  nameFr: string;
  nameAr: string;
  planet: string;
  element: string;
  qualities: string;
}

export interface LifePathData {
  number: number;
  meaning: string;
  guidance: string;
}

export interface GeneralNameResults {
  mode: 'general';
  name: string;
  nameValue: number;
  digitalRoot: number;
  inherentElement: ElementData;  // Generic element of the name
  letterGeometry: LetterGeometry;
  nameMeaning?: string;
  generalCharacteristics: string;
  
  // Upgrade prompt data
  canUpgradeToPersonal: true;
  upgradeMessage: {
    titleEn: string;
    titleFr: string;
    titleAr: string;
    benefitsEn: string[];
    benefitsFr: string[];
  };
}

export interface PersonalProfileResults {
  mode: 'personal';
  name: string;
  mothersName: string;
  nameValue: number;
  mothersValue: number;
  combinedValue: number;
  personalTab: ElementData;      // Unique to this person
  personalBuruj: BurujData;
  blessedDay: string;
  lifePath: LifePathData;
  geometry: LetterGeometry;
  
  // Complete personal data
  divineNameResonance?: string[];
  spiritualGuidance?: string;
  colorResonance?: {
    primary: string;
    secondary: string;
  };
}

export type NameDestinyResults = GeneralNameResults | PersonalProfileResults;
