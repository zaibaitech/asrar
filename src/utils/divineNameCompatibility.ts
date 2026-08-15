/**
 * Divine Name Compatibility algorithms — ported from a mobile-app spec.
 * Two independent pure functions, kept separate per the spec (different
 * inputs/outputs, don't merge): calculateDivineNameIntentionCompatibility
 * and calculatePersonDivineNameCompatibility.
 */

import {
  type DivineNameMetadata,
  type IntentionCategory,
  type ElementType,
  type AlignmentTier,
  type NameActionEffect,
  type DivineNameIntentionCompatibility,
  type PersonDivineNameCompatibility,
  RELATED_INTENTION_GROUPS,
} from '../constants/divineNameCompatibilityData';
import { calculateSoulNumber } from './soulConnection';
import { getElementFromAbjadTotal } from './relationshipCompatibility';

// ============================================================================
// Divine Name <-> Intention
// ============================================================================

export function hasRelatedFunction(
  nameFunctions: IntentionCategory[],
  targetIntention: IntentionCategory,
): boolean {
  return (RELATED_INTENTION_GROUPS[targetIntention] || []).some(rel => nameFunctions.includes(rel));
}

const CATEGORY_LABEL: Record<IntentionCategory, { en: string; fr: string }> = {
  clarity: { en: 'clarity', fr: 'clarté' },
  patience: { en: 'patience', fr: 'patience' },
  provision: { en: 'provision', fr: 'subsistance' },
  healing: { en: 'healing', fr: 'guérison' },
  protection: { en: 'protection', fr: 'protection' },
  guidance: { en: 'guidance', fr: 'guidance' },
  strength: { en: 'strength', fr: 'force' },
  peace: { en: 'peace', fr: 'paix' },
  knowledge: { en: 'knowledge', fr: 'savoir' },
  forgiveness: { en: 'forgiveness', fr: 'pardon' },
};

export const ALIGNMENT_LABEL: Record<AlignmentTier, { en: string; fr: string }> = {
  optimal: { en: 'Optimal', fr: 'Optimal' },
  suitable: { en: 'Suitable', fr: 'Adapté' },
  neutral: { en: 'Neutral', fr: 'Neutre' },
  'not-recommended': { en: 'Not Recommended', fr: 'Non recommandé' },
};

/** Bilingual (en/fr) guidance text for the current web UI's sourceNote field, keyed the same way as `guidanceKey`. */
export function buildGuidanceTextEnFr(
  divineName: DivineNameMetadata,
  intention: IntentionCategory,
  alignment: AlignmentTier,
): { en: string; fr: string } {
  const cat = CATEGORY_LABEL[intention];
  switch (alignment) {
    case 'optimal':
      return {
        en: `${divineName.transliteration} is classically invoked for ${cat.en} — a direct match for this intention.`,
        fr: `${divineName.transliteration} est classiquement invoqué pour la ${cat.fr} — une correspondance directe avec cette intention.`,
      };
    case 'suitable':
      return {
        en: `${divineName.transliteration} is not classically tied to ${cat.en} directly, but its meaning closely relates to it.`,
        fr: `${divineName.transliteration} n'est pas classiquement lié à la ${cat.fr} directement, mais son sens s'en rapproche.`,
      };
    case 'not-recommended':
      return {
        en: `${divineName.transliteration}'s classical function doesn't align closely with ${cat.en}. Consider one of the alternatives below.`,
        fr: `La fonction classique de ${divineName.transliteration} ne correspond pas étroitement à la ${cat.fr}. Envisagez l'une des alternatives ci-dessous.`,
      };
    case 'neutral':
    default:
      return {
        en: `${divineName.transliteration} has no strong classical association with ${cat.en}, and no closer alternative was found.`,
        fr: `${divineName.transliteration} n'a pas d'association classique forte avec la ${cat.fr}, et aucune alternative plus proche n'a été trouvée.`,
      };
  }
}

export function calculateDivineNameIntentionCompatibility(
  divineName: DivineNameMetadata,
  intention: IntentionCategory,
  allDivineNames: DivineNameMetadata[],
): DivineNameIntentionCompatibility {
  const isOptimal = divineName.classicalFunction.includes(intention);
  const isSuitable = hasRelatedFunction(divineName.classicalFunction, intention);

  let alignment: AlignmentTier;
  let alternativeSuggestions: DivineNameMetadata[] | undefined;

  if (isOptimal) {
    alignment = 'optimal';
  } else if (isSuitable) {
    alignment = 'suitable';
  } else {
    alternativeSuggestions = allDivineNames
      .filter(dn => dn.classicalFunction.includes(intention))
      .slice(0, 3);
    alignment = alternativeSuggestions.length > 0 ? 'not-recommended' : 'neutral';
  }

  const guidanceEnFr = buildGuidanceTextEnFr(divineName, intention, alignment);

  return {
    type: 'divine-intention',
    divineName,
    intention,
    alignment,
    guidance: { en: guidanceEnFr.en, ar: '' },
    guidanceKey: `${intention}.${alignment}`,
    alternativeSuggestions,
  };
}

/** Convenience used when wiring into src/constants/divineNameIntentions.ts's existing sourceNote:{en,fr} shape. */
export function calculateDivineNameIntentionCompatibilityEnFr(
  divineName: DivineNameMetadata,
  intention: IntentionCategory,
  allDivineNames: DivineNameMetadata[],
): { result: DivineNameIntentionCompatibility; sourceNote: { en: string; fr: string } } {
  const result = calculateDivineNameIntentionCompatibility(divineName, intention, allDivineNames);
  const sourceNote = buildGuidanceTextEnFr(divineName, intention, result.alignment);
  return { result, sourceNote };
}

// ============================================================================
// Person <-> Divine Name
// ============================================================================

function isComplementaryPair(a: ElementType, b: ElementType): boolean {
  return (a === 'fire' && b === 'air') || (a === 'air' && b === 'fire')
    || (a === 'water' && b === 'earth') || (a === 'earth' && b === 'water');
}

function isOpposingPair(a: ElementType, b: ElementType): boolean {
  return (a === 'fire' && b === 'water') || (a === 'water' && b === 'fire')
    || (a === 'air' && b === 'earth') || (a === 'earth' && b === 'air');
}

/**
 * modeOfAction is accepted for signature fidelity with the mobile spec but,
 * same as the mobile pseudocode this was ported from, doesn't currently
 * change the branching — only the element pairing does.
 */
export function analyzeNameAction(
  personElement: ElementType,
  nameElement: ElementType,
  _modeOfAction: DivineNameMetadata['modeOfAction'],
): { effect: NameActionEffect } {
  if (personElement === nameElement) return { effect: 'strengthens' };       // Taqwiyah
  if (isComplementaryPair(personElement, nameElement)) return { effect: 'stabilizes' }; // Muʿāwanah
  if (isOpposingPair(personElement, nameElement)) return { effect: 'tempers' };         // Tadbīr bi-l-Ḍidd
  return { effect: 'challenges' };                                                       // Taṣrīf/Taḥwīl
}

export function calculatePersonDivineNameCompatibility(
  personAbjad: number,
  divineName: DivineNameMetadata,
): PersonDivineNameCompatibility {
  const spiritualDestiny = calculateSoulNumber(personAbjad, divineName.abjadValue);
  const personElement = getElementFromAbjadTotal(personAbjad);
  const { effect } = analyzeNameAction(personElement, divineName.element, divineName.modeOfAction);

  return {
    type: 'person-divine-name',
    personAbjad,
    personElement,
    divineName,
    spiritualDestiny,
    effect,
  };
}
