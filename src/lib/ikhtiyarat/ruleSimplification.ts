/**
 * Plain-language translations of every rule's technical detail text, for
 * users with no astrology background. Consumed only by RuleRow.tsx when
 * the UI's Simple/Detailed toggle is set to Simple — the technical
 * detail_en/detail_fr strings in each elections/*.ts config are
 * untouched and remain the default ("Detailed") view.
 *
 * Deliberately keyed by rule id + status rather than re-parsing the
 * dynamic numeric detail text (degrees, signs, orbs) — most rules only
 * have 2-4 meaningfully distinct outcomes (hard fail / penalty fired /
 * bonus fired / neutral), and a beginner doesn't need "orb 6.4°," they
 * need "the Moon and Saturn are in a tense position right now." Rules
 * that report a genuinely different message per branch (e.g. Moon
 * dignity's domicile vs. exaltation vs. neutral) get multiple entries
 * keyed by id AND points, since two different "bonus" outcomes can carry
 * different plain-language explanations.
 *
 * If a rule's id has no entry here, RuleRow falls back to the technical
 * detail text even in Simple mode — safer than guessing wrong, and a
 * signal (via the dev-only completeness test) that this file needs an
 * entry for any newly-added rule.
 */

import { RuleResult } from './types';

export type SimplifiedTone = 'good' | 'caution' | 'neutral';

interface SimplifiedEntry {
  points?: number;
  tone: SimplifiedTone;
  en: string;
  fr: string;
}

/** Keyed by rule id -> list of possible outcomes, matched by exact points value first, then by status-based fallback. */
const SIMPLIFICATIONS: Record<string, SimplifiedEntry[]> = {
  // ===== MARRIAGE =====
  'dark-moon': [
    { tone: 'caution', points: 0, en: 'The Moon is in its darkest phase right before a new moon — traditionally a time to wait, not begin.', fr: 'La Lune est dans sa phase la plus sombre juste avant une nouvelle lune — traditionnellement un moment pour attendre, pas pour commencer.' },
  ],
  'moon-combust': [
    { tone: 'caution', points: 0, en: 'The Moon is too close to the Sun right now and appears "hidden" — this weakens its influence.', fr: 'La Lune est actuellement trop proche du Soleil et semble "cachée" — cela affaiblit son influence.' },
  ],
  'moon-void-of-course': [
    { tone: 'caution', points: 0, en: 'The Moon isn\'t forming any meaningful connection with another planet right now — traditionally, things begun in this state tend to fizzle out.', fr: "La Lune ne forme actuellement aucune connexion significative avec une autre planète — traditionnellement, ce qui commence dans cet état a tendance à ne pas aboutir." },
  ],
  'moon-malefic-hard-aspect': [
    { tone: 'caution', points: 0, en: 'The Moon is in a tense position with Saturn or Mars right now — a traditional warning sign for this kind of start.', fr: "La Lune est actuellement dans une position tendue avec Saturne ou Mars — un signe d'avertissement traditionnel pour ce type de commencement." },
  ],
  'eclipse-proximity': [
    { tone: 'caution', points: 0, en: 'A solar or lunar eclipse is happening within a day of this date — traditionally treated as an unsettled period to avoid for major beginnings.', fr: "Une éclipse solaire ou lunaire a lieu à moins d'un jour de cette date — traditionnellement considérée comme une période instable à éviter pour les grands commencements." },
  ],
  'under-the-beams': [
    { tone: 'caution', points: -15, en: 'The Moon is close enough to the Sun to be dimmed, though not fully hidden — a mild weakening.', fr: "La Lune est suffisamment proche du Soleil pour être atténuée, sans être totalement cachée — un affaiblissement léger." },
  ],
  'moon-waning': [
    { tone: 'caution', points: -20, en: 'The Moon is shrinking in light right now (waning) — traditionally less favorable for starting something new.', fr: "La Lune décroît actuellement en lumière — traditionnellement moins favorable pour commencer quelque chose de nouveau." },
  ],
  'via-combusta': [
    { tone: 'caution', points: -15, en: 'The Moon is passing through a stretch of the zodiac traditionally considered turbulent (the "burning path").', fr: 'La Lune traverse actuellement une portion du zodiaque traditionnellement considérée comme turbulente (la « voie brûlante »).' },
  ],
  'moon-fall-detriment': [
    { tone: 'caution', points: -10, en: "The Moon is in a sign where it traditionally expresses its qualities less comfortably.", fr: "La Lune se trouve dans un signe où elle exprime traditionnellement ses qualités avec moins d'aisance." },
  ],
  'venus-combust': [
    { tone: 'caution', points: -10, en: 'Venus — the planet of love and harmony — is too close to the Sun right now and appears "hidden," weakening its supportive influence.', fr: "Vénus — la planète de l'amour et de l'harmonie — est actuellement trop proche du Soleil et semble « cachée », ce qui affaiblit son influence bienveillante." },
  ],
  'venus-retrograde': [
    { tone: 'caution', points: -15, en: 'Venus appears to be moving backward right now — traditionally a caution for matters of love and relationships.', fr: "Vénus semble actuellement se déplacer à rebours — traditionnellement une prudence pour les affaires de cœur et les relations." },
  ],
  'venus-fall-detriment': [
    { tone: 'caution', points: -8, en: 'Venus is in a sign where it traditionally expresses its qualities less comfortably.', fr: "Vénus se trouve dans un signe où elle exprime traditionnellement ses qualités avec moins d'aisance." },
  ],
  'mercury-retrograde': [
    { tone: 'caution', points: -5, en: 'Mercury appears to be moving backward right now — a mild caution specifically for the paperwork/contract side of things.', fr: "Mercure semble actuellement se déplacer à rebours — une prudence légère spécifiquement pour la partie contrat/formalités." },
  ],
  'moon-separating-benefics': [
    { tone: 'neutral', points: -5, en: "The Moon isn't currently connecting with either of the two traditionally supportive planets (Venus or Jupiter).", fr: "La Lune ne se connecte actuellement à aucune des deux planètes traditionnellement bienveillantes (Vénus ou Jupiter)." },
  ],
  'moon-waxing-clear': [
    { tone: 'good', points: 20, en: 'The Moon is growing in light and clear of the Sun\'s glare right now — one of the most favorable classical signs for a fresh start.', fr: "La Lune croît actuellement en lumière et est dégagée de l'éclat du Soleil — l'un des signes classiques les plus favorables pour un nouveau départ." },
  ],
  'moon-dignity': [
    { tone: 'good', points: 12, en: 'The Moon is in a sign it traditionally feels very at home in.', fr: 'La Lune se trouve dans un signe où elle se sent traditionnellement très à son aise.' },
    { tone: 'good', points: 15, en: 'The Moon is in the sign of its greatest traditional strength.', fr: 'La Lune se trouve dans le signe de sa plus grande force traditionnelle.' },
    { tone: 'good', points: 8, en: 'The Moon is in a sign that gives it a mild traditional boost here.', fr: 'La Lune se trouve dans un signe qui lui donne ici un léger avantage traditionnel.' },
  ],
  'moon-applying-benefic': [
    { tone: 'good', points: 12, en: 'The Moon is forming a supportive connection with Venus, the planet of love and harmony, right now.', fr: "La Lune forme actuellement une connexion favorable avec Vénus, la planète de l'amour et de l'harmonie." },
    { tone: 'good', points: 10, en: 'The Moon is forming a supportive connection with Jupiter, the planet of growth and good fortune, right now.', fr: 'La Lune forme actuellement une connexion favorable avec Jupiter, la planète de la croissance et de la bonne fortune.' },
  ],
  'venus-dignified': [
    { tone: 'good', points: 8, en: 'Venus is in a sign it traditionally feels very at home in.', fr: 'Vénus se trouve dans un signe où elle se sent traditionnellement très à son aise.' },
    { tone: 'good', points: 10, en: 'Venus is in the sign of its greatest traditional strength.', fr: 'Vénus se trouve dans le signe de sa plus grande force traditionnelle.' },
  ],
  'day-of-week': [
    { tone: 'good', points: 10, en: 'This falls on Friday — the day most recommended in Islamic tradition for this occasion.', fr: 'Ceci tombe un vendredi — le jour le plus recommandé dans la tradition islamique pour cette occasion.' },
    { tone: 'good', points: 8, en: 'This falls on Thursday, a day traditionally seen as favorable.', fr: 'Ceci tombe un jeudi, un jour traditionnellement considéré comme favorable.' },
    { tone: 'good', points: 6, en: 'This falls on Monday, a day traditionally seen as mildly favorable.', fr: 'Ceci tombe un lundi, un jour traditionnellement considéré comme légèrement favorable.' },
  ],
  'planetary-hour': [
    { tone: 'good', points: 6, en: 'This specific time window aligns with a planetary hour traditionally seen as supportive.', fr: 'Ce créneau horaire précis coïncide avec une heure planétaire traditionnellement considérée comme favorable.' },
  ],
  'lunar-mansion': [
    { tone: 'good', points: 6, en: 'The Moon is passing through a lunar "station" traditionally considered favorable for this occasion.', fr: 'La Lune traverse actuellement une « station » lunaire traditionnellement considérée comme favorable pour cette occasion.' },
    { tone: 'caution', points: -6, en: 'The Moon is passing through a lunar "station" traditionally considered less favorable for this occasion.', fr: 'La Lune traverse actuellement une « station » lunaire traditionnellement considérée comme moins favorable pour cette occasion.' },
  ],

  // ===== TRAVEL =====
  'travel-moon-void-of-course': [
    { tone: 'caution', points: 0, en: "The Moon isn't forming any meaningful connection right now — traditionally, a journey begun in this state tends to come to nothing.", fr: "La Lune ne forme actuellement aucune connexion significative — traditionnellement, un voyage commencé dans cet état tend à n'aboutir à rien." },
  ],
  'travel-moon-malefic-hard-aspect': [
    { tone: 'caution', points: 0, en: 'The Moon is in a tense position with Saturn or Mars right now — a traditional warning of danger or delay en route.', fr: "La Lune est actuellement dans une position tendue avec Saturne ou Mars — un avertissement traditionnel de danger ou de retard en chemin." },
  ],
  'travel-moon-combust': [
    { tone: 'caution', points: 0, en: 'The Moon is too close to the Sun right now and appears "hidden" — this weakens the traveler\'s own influence in the chart.', fr: 'La Lune est actuellement trop proche du Soleil et semble « cachée » — cela affaiblit l\'influence du voyageur lui-même dans le ciel.' },
  ],
  'travel-moon-modality': [
    { tone: 'good', points: 12, en: 'The Moon is in a sign associated with quick movement — traditionally favorable for setting out.', fr: 'La Lune se trouve dans un signe associé au mouvement rapide — traditionnellement favorable pour partir.' },
    { tone: 'caution', points: -8, en: 'The Moon is in a sign associated with staying put — traditionally a caution for travel, suggesting possible delay.', fr: 'La Lune se trouve dans un signe associé à l\'immobilité — traditionnellement une prudence pour le voyage, suggérant un retard possible.' },
  ],
  'travel-mercury-retrograde': [
    { tone: 'caution', points: -8, en: 'Mercury appears to be moving backward right now — traditionally linked to itinerary changes, lost documents, or mix-ups.', fr: "Mercure semble actuellement se déplacer à rebours — traditionnellement associé à des changements d'itinéraire, des documents perdus, ou des malentendus." },
  ],
  'travel-moon-waxing': [
    { tone: 'good', points: 8, en: 'The Moon is growing in light right now — traditionally favorable for setting out and making progress.', fr: 'La Lune croît actuellement en lumière — traditionnellement favorable pour partir et progresser.' },
  ],
  'travel-moon-applying-to-benefic': [
    { tone: 'good', points: 10, en: 'The Moon is forming a supportive connection with Venus or Jupiter right now — a sign of a smooth, well-supported journey.', fr: 'La Lune forme actuellement une connexion favorable avec Vénus ou Jupiter — un signe de voyage fluide et bien soutenu.' },
  ],
  'travel-planetary-hour': [
    { tone: 'good', points: 6, en: 'This specific time window aligns with a planetary hour traditionally seen as supportive for travel.', fr: 'Ce créneau horaire précis coïncide avec une heure planétaire traditionnellement considérée comme favorable au voyage.' },
  ],
  'travel-sunnah-bukur': [
    { tone: 'good', points: 8, en: 'This is an early-morning departure — the Prophet ﷺ asked Allah to bless the early mornings of his ummah.', fr: 'Ceci est un départ matinal — le Prophète ﷺ a demandé à Allah de bénir les matins de son ummah.' },
  ],
  'travel-lunar-mansion': [
    { tone: 'good', points: 6, en: 'The Moon is passing through a lunar "station" traditionally considered favorable for travel.', fr: 'La Lune traverse actuellement une « station » lunaire traditionnellement considérée comme favorable au voyage.' },
    { tone: 'caution', points: -6, en: 'The Moon is passing through a lunar "station" traditionally considered less favorable for travel.', fr: 'La Lune traverse actuellement une « station » lunaire traditionnellement considérée comme moins favorable au voyage.' },
  ],
  'travel-mercury-dignified': [
    { tone: 'good', points: 4, en: 'Mercury is in a comfortable position right now, supporting clear plans and communication.', fr: 'Mercure se trouve actuellement dans une position confortable, favorable à des plans clairs et à la communication.' },
  ],
  'travel-day-of-week': [
    { tone: 'good', points: 5, en: 'This falls on Wednesday, a day traditionally linked to travel and communication.', fr: 'Ceci tombe un mercredi, un jour traditionnellement lié au voyage et à la communication.' },
  ],

  // ===== BUSINESS =====
  'business-mercury-retrograde': [
    { tone: 'caution', points: 0, en: 'Mercury appears to be moving backward right now — the single most-cited traditional caution against signing contracts or starting negotiations.', fr: "Mercure semble actuellement se déplacer à rebours — la mise en garde traditionnelle la plus citée contre la signature de contrats ou l'ouverture de négociations." },
  ],
  'business-moon-void-of-course': [
    { tone: 'caution', points: 0, en: "The Moon isn't forming any meaningful connection right now — traditionally, a deal begun in this state tends to come to nothing.", fr: "La Lune ne forme actuellement aucune connexion significative — traditionnellement, une affaire commencée dans cet état tend à n'aboutir à rien." },
  ],
  'business-mercury-combust': [
    { tone: 'caution', points: 0, en: 'Mercury is too close to the Sun right now and appears "hidden" — this weakens the deal\'s own significator.', fr: 'Mercure est actuellement trop proche du Soleil et semble « caché » — cela affaiblit le significateur de l\'affaire elle-même.' },
  ],
  'business-moon-malefic-hard-aspect': [
    { tone: 'caution', points: -10, en: 'The Moon is in a tense position with Saturn or Mars right now — a traditional warning of dispute or a deal turning sour.', fr: "La Lune est actuellement dans une position tendue avec Saturne ou Mars — un avertissement traditionnel de litige ou d'affaire qui tourne mal." },
  ],
  'business-moon-waxing': [
    { tone: 'good', points: 10, en: 'The Moon is growing in light right now — traditionally favorable for starting and growing a venture.', fr: 'La Lune croît actuellement en lumière — traditionnellement favorable pour commencer et développer une entreprise.' },
  ],
  'business-moon-applying-to-jupiter': [
    { tone: 'good', points: 12, en: 'The Moon is forming a supportive connection with Jupiter right now — traditionally the planet of profit and gain.', fr: 'La Lune forme actuellement une connexion favorable avec Jupiter — traditionnellement la planète du profit et du gain.' },
  ],
  'business-moon-applying-to-venus': [
    { tone: 'good', points: 6, en: 'The Moon is forming a supportive connection with Venus right now — favorable for amicable dealing between both sides.', fr: 'La Lune forme actuellement une connexion favorable avec Vénus — favorable à des échanges cordiaux entre les deux parties.' },
  ],
  'business-mercury-dignified': [
    { tone: 'good', points: 10, en: 'Mercury is in a sign it traditionally feels very at home in — strong for negotiation and paperwork.', fr: 'Mercure se trouve dans un signe où il se sent traditionnellement très à son aise — favorable à la négociation et aux documents.' },
  ],
  'business-mercury-free-of-affliction': [
    { tone: 'good', points: 4, en: 'Mercury is in a comfortable position right now, free of traditional weaknesses.', fr: 'Mercure se trouve actuellement dans une position confortable, libre des faiblesses traditionnelles.' },
  ],
  'business-planetary-hour': [
    { tone: 'good', points: 6, en: 'This specific time window aligns with a planetary hour traditionally seen as supportive for business.', fr: 'Ce créneau horaire précis coïncide avec une heure planétaire traditionnellement considérée comme favorable aux affaires.' },
  ],
  'business-day-of-week': [
    { tone: 'good', points: 5, en: 'This falls on Wednesday or Thursday — days traditionally linked to negotiation and profit.', fr: 'Ceci tombe un mercredi ou un jeudi — des jours traditionnellement liés à la négociation et au profit.' },
  ],

  // ===== MEDICAL =====
  'medical-moon-void-of-course': [
    { tone: 'caution', points: 0, en: "The Moon isn't forming any meaningful connection right now — traditionally, treatment begun in this state tends to come to nothing.", fr: "La Lune ne forme actuellement aucune connexion significative — traditionnellement, un traitement commencé dans cet état tend à n'aboutir à rien." },
  ],
  'medical-moon-combust': [
    { tone: 'caution', points: 0, en: 'The Moon is too close to the Sun right now and appears "hidden" — traditionally, this weakens the body\'s own vital force in the chart.', fr: 'La Lune est actuellement trop proche du Soleil et semble « cachée » — cela affaiblit traditionnellement la force vitale du corps dans le ciel.' },
  ],
  'medical-moon-malefic-hard-aspect': [
    { tone: 'caution', points: 0, en: 'The Moon is in a tense position with Saturn or Mars right now — a traditional warning of complication or slow healing.', fr: "La Lune est actuellement dans une position tendue avec Saturne ou Mars — un avertissement traditionnel de complication ou de cicatrisation lente." },
  ],
  'medical-moon-waxing': [
    { tone: 'good', points: 10, en: 'The Moon is growing in light right now — traditionally favorable for treatments meant to build up or strengthen the body.', fr: 'La Lune croît actuellement en lumière — traditionnellement favorable aux traitements destinés à fortifier le corps.' },
  ],
  'medical-moon-applying-to-benefic': [
    { tone: 'good', points: 12, en: 'The Moon is forming a supportive connection with Venus or Jupiter right now — a sign of a smooth course of treatment and recovery.', fr: 'La Lune forme actuellement une connexion favorable avec Vénus ou Jupiter — un signe de traitement et de rétablissement fluides.' },
  ],
  'medical-jupiter-dignified': [
    { tone: 'good', points: 8, en: 'Jupiter — the traditional significator of recovery — is in a comfortable position right now.', fr: 'Jupiter — le significateur traditionnel du rétablissement — se trouve actuellement dans une position confortable.' },
  ],
  'medical-mercury-free-of-affliction': [
    { tone: 'good', points: 4, en: 'Mercury is in a comfortable position right now, supporting a clear diagnosis.', fr: 'Mercure se trouve actuellement dans une position confortable, favorable à un diagnostic clair.' },
  ],
  'medical-mercury-retrograde': [
    { tone: 'caution', points: -6, en: 'Mercury appears to be moving backward right now — a mild caution for the accuracy of a diagnosis.', fr: "Mercure semble actuellement se déplacer à rebours — une prudence légère quant à la précision d'un diagnostic." },
  ],
  'medical-planetary-hour': [
    { tone: 'good', points: 6, en: 'This specific time window aligns with a planetary hour traditionally seen as supportive for health matters.', fr: 'Ce créneau horaire précis coïncide avec une heure planétaire traditionnellement considérée comme favorable pour la santé.' },
  ],
  'medical-day-of-week': [
    { tone: 'good', points: 5, en: 'This falls on Monday or Thursday — days traditionally linked to the body and to recovery.', fr: 'Ceci tombe un lundi ou un jeudi — des jours traditionnellement liés au corps et au rétablissement.' },
  ],

  // ===== HOME =====
  'home-moon-void-of-course': [
    { tone: 'caution', points: 0, en: "The Moon isn't forming any meaningful connection right now — traditionally, work begun in this state tends to come to nothing.", fr: "La Lune ne forme actuellement aucune connexion significative — traditionnellement, un ouvrage commencé dans cet état tend à n'aboutir à rien." },
  ],
  'home-moon-combust': [
    { tone: 'caution', points: 0, en: 'The Moon is too close to the Sun right now and appears "hidden" — this weakens the matter\'s own significator.', fr: 'La Lune est actuellement trop proche du Soleil et semble « cachée » — cela affaiblit le significateur de l\'affaire elle-même.' },
  ],
  'home-moon-malefic-hard-aspect': [
    { tone: 'caution', points: 0, en: 'The Moon is in a tense position with Mars right now — a traditional warning of accident or damage during construction.', fr: "La Lune est actuellement dans une position tendue avec Mars — un avertissement traditionnel d'accident ou de dommage pendant la construction." },
  ],
  'home-moon-modality': [
    { tone: 'good', points: 12, en: 'The Moon is in a sign associated with stability — traditionally favorable for something meant to last.', fr: "La Lune se trouve dans un signe associé à la stabilité — traditionnellement favorable pour quelque chose destiné à durer." },
    { tone: 'caution', points: -8, en: 'The Moon is in a sign associated with change and impermanence — the opposite of what a lasting foundation calls for.', fr: "La Lune se trouve dans un signe associé au changement et à l'impermanence — l'inverse de ce qu'exige une fondation durable." },
  ],
  'home-moon-waxing': [
    { tone: 'good', points: 8, en: 'The Moon is growing in light right now — traditionally favorable for building and growing a household.', fr: 'La Lune croît actuellement en lumière — traditionnellement favorable pour bâtir et faire grandir un foyer.' },
  ],
  'home-moon-applying-to-benefic': [
    { tone: 'good', points: 10, en: 'The Moon is forming a supportive connection with Venus or Jupiter right now — a sign of a settled, well-supported household.', fr: 'La Lune forme actuellement une connexion favorable avec Vénus ou Jupiter — un signe de foyer stable et bien soutenu.' },
  ],
  'home-saturn-dignified': [
    { tone: 'good', points: 10, en: 'Saturn — the traditional significator of land and foundations — is in a sign it feels very at home in.', fr: 'Saturne — le significateur traditionnel du terrain et des fondations — se trouve dans un signe où il se sent très à son aise.' },
  ],
  'home-saturn-free-of-affliction': [
    { tone: 'good', points: 4, en: 'Saturn is in a comfortable position right now, supporting a solid foundation.', fr: 'Saturne se trouve actuellement dans une position confortable, favorable à une fondation solide.' },
  ],
  'home-saturn-retrograde': [
    { tone: 'caution', points: -8, en: 'Saturn appears to be moving backward right now — traditionally linked to delays, cost overruns, or rework.', fr: 'Saturne semble actuellement se déplacer à rebours — traditionnellement associé à des retards, des dépassements de coûts, ou des reprises.' },
  ],
  'home-planetary-hour': [
    { tone: 'good', points: 6, en: 'This specific time window aligns with a planetary hour traditionally seen as supportive for foundations and building.', fr: 'Ce créneau horaire précis coïncide avec une heure planétaire traditionnellement considérée comme favorable aux fondations et à la construction.' },
  ],
  'home-day-of-week': [
    { tone: 'good', points: 5, en: 'This falls on Saturday or Thursday — days traditionally linked to foundations and a supported household.', fr: 'Ceci tombe un samedi ou un jeudi — des jours traditionnellement liés aux fondations et à un foyer soutenu.' },
  ],

  // ===== EDUCATION =====
  'education-mercury-retrograde': [
    { tone: 'caution', points: 0, en: 'Mercury appears to be moving backward right now — the same traditional caution cited against contracts applies to starting serious study.', fr: "Mercure semble actuellement se déplacer à rebours — la même prudence traditionnelle citée pour les contrats s'applique au commencement d'études sérieuses." },
  ],
  'education-moon-void-of-course': [
    { tone: 'caution', points: 0, en: "The Moon isn't forming any meaningful connection right now — traditionally, study begun in this state tends to come to nothing.", fr: "La Lune ne forme actuellement aucune connexion significative — traditionnellement, des études commencées dans cet état tendent à n'aboutir à rien." },
  ],
  'education-mercury-combust': [
    { tone: 'caution', points: 0, en: 'Mercury is too close to the Sun right now and appears "hidden" — this weakens the significator of the intellect and study itself.', fr: 'Mercure est actuellement trop proche du Soleil et semble « caché » — cela affaiblit le significateur de l\'intellect et des études.' },
  ],
  'education-moon-applying-to-jupiter': [
    { tone: 'good', points: 12, en: 'The Moon is forming a supportive connection with Jupiter right now — traditionally the planet of wisdom and comprehension.', fr: 'La Lune forme actuellement une connexion favorable avec Jupiter — traditionnellement la planète de la sagesse et de la compréhension.' },
  ],
  'education-moon-applying-to-mercury': [
    { tone: 'good', points: 8, en: 'The Moon is forming a supportive connection with Mercury right now — favorable for retention and a receptive mind.', fr: 'La Lune forme actuellement une connexion favorable avec Mercure — favorable à la rétention et à un esprit réceptif.' },
  ],
  'education-moon-malefic-hard-aspect': [
    { tone: 'caution', points: -10, en: 'The Moon is in a tense position with Saturn or Mars right now — a traditional warning of frustration or blocked progress.', fr: "La Lune est actuellement dans une position tendue avec Saturne ou Mars — un avertissement traditionnel de frustration ou de blocage." },
  ],
  'education-mercury-dignified': [
    { tone: 'good', points: 10, en: 'Mercury is in a sign it traditionally feels very at home in — strong for comprehension and memory.', fr: 'Mercure se trouve dans un signe où il se sent traditionnellement très à son aise — favorable à la compréhension et à la mémoire.' },
  ],
  'education-jupiter-free-of-affliction': [
    { tone: 'good', points: 4, en: 'Jupiter is in a comfortable position right now, supporting comprehension and wisdom.', fr: 'Jupiter se trouve actuellement dans une position confortable, favorable à la compréhension et à la sagesse.' },
  ],
  'education-planetary-hour': [
    { tone: 'good', points: 6, en: 'This specific time window aligns with a planetary hour traditionally seen as supportive for study.', fr: 'Ce créneau horaire précis coïncide avec une heure planétaire traditionnellement considérée comme favorable aux études.' },
  ],
  'education-day-of-week': [
    { tone: 'good', points: 5, en: 'This falls on Wednesday or Thursday — days traditionally linked to the intellect and wisdom.', fr: "Ceci tombe un mercredi ou un jeudi — des jours traditionnellement liés à l'intellect et à la sagesse." },
  ],
};

/** Generic "pass" fallback per family of rule id prefixes, used when a rule fired neutrally (status 'pass', points 0) and no more specific entry matches on points. */
const GENERIC_PASS_HINT = { tone: 'neutral' as SimplifiedTone, en: 'No concern here — this factor looks neutral for this date.', fr: 'Rien à signaler ici — ce facteur semble neutre pour cette date.' };

/**
 * Returns the plain-language explanation for a fired rule, or null if no
 * simplification exists for this id/points combination — callers should
 * fall back to the technical detail_en/detail_fr in that case.
 */
export function getSimplifiedRuleText(rule: RuleResult, lang: 'en' | 'fr'): { tone: SimplifiedTone; text: string } | null {
  const entries = SIMPLIFICATIONS[rule.id];
  if (!entries) return null;

  const exact = entries.find(e => e.points === rule.points);
  if (exact) return { tone: exact.tone, text: lang === 'fr' ? exact.fr : exact.en };

  // Neutral/pass outcomes (points === 0, status 'pass') that don't have
  // their own explicit entry (e.g. "Mercury is direct" / "not applicable")
  // all collapse to the same reassuring generic hint rather than needing
  // a bespoke sentence for every planet's "nothing happening" case.
  if (rule.status === 'pass' && rule.points === 0) {
    return { tone: GENERIC_PASS_HINT.tone, text: lang === 'fr' ? GENERIC_PASS_HINT.fr : GENERIC_PASS_HINT.en };
  }

  return null;
}
