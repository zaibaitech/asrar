/**
 * Interpretive framing for Person <-> Divine Name Connection results.
 *
 * Unlike Soul Connection (person-to-person), there's no marriage/
 * friendship/family/work archetype here — the reading pairs the severity
 * tier (green/amber/red, from the same mod-9 formula) with the Divine
 * Name's own real content already in divine-names.ts (meaning +
 * spiritualPractice). This file only supplies the 3 tier-level framings
 * that describe HOW to approach that Name's practice given the resonance
 * quality — original content written for the web app, since the mobile
 * app has no equivalent feature to port from.
 */

import { SoulConnectionSeverity } from './soulConnectionArchetypes';

export const DIVINE_NAME_RESONANCE_FRAMING: Record<SoulConnectionSeverity, { en: string; fr: string }> = {
  green: {
    en: 'This resonance flows naturally — practice with this Name tends to bring swift, tangible ease. A wonderful one to return to often.',
    fr: 'Cette résonance coule naturellement — la pratique de ce Nom tend à apporter un soulagement rapide et tangible. Un merveilleux Nom à retrouver souvent.',
  },
  amber: {
    en: 'This resonance is workable but benefits from consistency — steady, regular practice over time is what unlocks its full effect.',
    fr: "Cette résonance est praticable mais bénéficie de la constance — une pratique régulière et soutenue dans le temps est ce qui en déverrouille le plein effet.",
  },
  red: {
    en: "This resonance calls for extra patience and discipline — approach this Name's practice with sincere intention, and consider pairing it with istighfār.",
    fr: "Cette résonance demande davantage de patience et de discipline — abordez la pratique de ce Nom avec une intention sincère, et envisagez de l'associer à l'istighfār.",
  },
};
