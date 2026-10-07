/**
 * ========================================
 * LUNAR MANSIONS (MANĀZIL AL-QAMAR)
 * ========================================
 * 
 * The 28 Lunar Mansions from classical Islamic astronomy
 * Arabic: المنازل القمرية (Al-Manāzil al-Qamariyya)
 * 
 * The Moon travels through 28 stations (manāzil) over its monthly cycle.
 * Each mansion has spiritual significance, planetary rulers, and guidance
 * for activities based on classical Islamic and pre-Islamic Arab astronomy.
 * 
 * **UPGRADED:** Now uses astronomy-engine for precise lunar position calculations
 * 
 * Sources (prefer):
 * - Al-Bīrūnī, Kitāb al-Tafhīm (names / instructional framing)
 * - Traditional Arab folk astronomy (Anwāʾ)
 * - Maghribi / classical ikhtiyārāt themes for activity adab (not guarantees)
 * - Qurʾān 10:5; 36:39–40 (Moon’s stations as āyāt)
 * - Astronomy Engine (modern tropical ecliptic calculation)
 *
 * Avoid as product copy: Picatrix/Ghāyat al-Ḥakīm talisman recipes, Būnī-style
 * operative magic, taweez, compulsion language.
 *
 * Convention: 28 equal tropical sectors (~12.857°). See /workspace Phase A note.
 * Phase B (2026-10): mansions 9–28 filled; fav/unfav remain SCHOLAR-REVIEW.
 * Election tables (marriage/travel) stay separate in src/lib/ikhtiyarat/.
 */

import * as Astronomy from 'astronomy-engine';

// ========================================
// TYPES & INTERFACES
// ========================================

export interface LunarMansion {
  number: number; // 1-28
  nameArabic: string;
  nameTransliteration: string;
  nameEn: string;
  nameFr: string;
  
  // Astronomical
  constellation: string; // Western constellation
  startDegree: number; // Ecliptic degree
  
  // Classical Associations
  element: 'Fire' | 'Earth' | 'Air' | 'Water';
  planetaryRuler: string;
  divineQuality: {
    en: string;
    fr: string;
  };
  
  // Spiritual Guidance
  spiritualFocus: {
    en: string;
    fr: string;
  };
  favorableFor: {
    en: string[];
    fr: string[];
  };
  unfavorableFor: {
    en: string[];
    fr: string[];
  };
  
  // Classical Wisdom
  classicalWisdom: {
    quote: string;
    source: string;
    scholar: string;
  };
  
  // Visual
  emoji: string;
  color: string;
}

export interface CurrentMansion {
  mansion: LunarMansion;
  moonPhase: string; // e.g., "Waxing Crescent"
  daysInMansion: number; // 0-1 (portion through mansion)
  spiritualGuidance: {
    en: string;
    fr: string;
  };
}

// ========================================
// 28 LUNAR MANSIONS DATA
// ========================================

export const LUNAR_MANSIONS: LunarMansion[] = [
  // 1. Al-Sharaṭān (The Two Signs)
  {
    number: 1,
    nameArabic: 'الشرطان',
    nameTransliteration: 'Al-Sharaṭān',
    nameEn: 'The Two Signs',
    nameFr: 'Les Deux Signes',
    constellation: 'Aries',
    startDegree: 0,
    element: 'Fire',
    planetaryRuler: 'Mars',
    divineQuality: {
      en: 'New Beginnings, Initiative',
      fr: 'Nouveaux Départs, Initiative',
    },
    spiritualFocus: {
      en: 'Starting fresh with courage and trust in Allah',
      fr: 'Commencer à neuf avec courage et confiance en Allah',
    },
    favorableFor: {
      en: ['New ventures', 'Travel', 'Medical treatment', 'Marriage'],
      fr: ['Nouvelles entreprises', 'Voyage', 'Traitement médical', 'Mariage'],
    },
    unfavorableFor: {
      en: ['Loans', 'Partnerships with strangers'],
      fr: ['Prêts', 'Partenariats avec des inconnus'],
    },
    classicalWisdom: {
      quote: 'Beginnings invite intention (niyyah) and remembrance — the Moon’s stations are signs, not decrees.',
      source: 'Educational reflection (Qurʾān 10:5)',
      scholar: 'Asrār framing',
    },
    emoji: '🌱',
    color: '#EF4444', // Red
  },

  // 2. Al-Buṭayn (The Little Belly)
  {
    number: 2,
    nameArabic: 'البطين',
    nameTransliteration: 'Al-Buṭayn',
    nameEn: 'The Little Belly',
    nameFr: 'Le Petit Ventre',
    constellation: 'Aries',
    startDegree: 12.86,
    element: 'Fire',
    planetaryRuler: 'Sun',
    divineQuality: {
      en: 'Nourishment, Growth',
      fr: 'Nourriture, Croissance',
    },
    spiritualFocus: {
      en: 'Cultivating inner strength and spiritual nourishment',
      fr: 'Cultiver la force intérieure et la nourriture spirituelle',
    },
    favorableFor: {
      en: ['Building', 'Planting', 'Business ventures', 'Seeking knowledge'],
      fr: ['Construction', 'Plantation', 'Entreprises commerciales', 'Recherche de connaissance'],
    },
    unfavorableFor: {
      en: ['Sea travel', 'Hasty decisions'],
      fr: ['Voyage en mer', 'Décisions hâtives'],
    },
    classicalWisdom: {
      quote: 'As the body needs nourishment, the heart needs what draws it nearer to Allah.',
      source: 'Educational reflection (anwāʾ theme)',
      scholar: 'Asrār framing',
    },
    emoji: '🌾',
    color: '#F59E0B', // Amber
  },

  // 3. Al-Thurayyā (The Pleiades)
  {
    number: 3,
    nameArabic: 'الثريا',
    nameTransliteration: 'Al-Thurayyā',
    nameEn: 'The Pleiades',
    nameFr: 'Les Pléiades',
    constellation: 'Taurus',
    startDegree: 25.71,
    element: 'Earth',
    planetaryRuler: 'Moon',
    divineQuality: {
      en: 'Beauty, Abundance, Gathering',
      fr: 'Beauté, Abondance, Rassemblement',
    },
    spiritualFocus: {
      en: 'Appreciating divine beauty in creation and community',
      fr: 'Apprécier la beauté divine dans la création et la communauté',
    },
    favorableFor: {
      en: ['Marriage', 'Gatherings', 'Reconciliation', 'Art and beauty'],
      fr: ['Mariage', 'Rassemblements', 'Réconciliation', 'Art et beauté'],
    },
    unfavorableFor: {
      en: ['Separation', 'Conflict', 'Harsh speech'],
      fr: ['Séparation', 'Conflit', 'Paroles dures'],
    },
    classicalWisdom: {
      quote: 'Al-Thurayyā was among the best-known stations in Arab star lore — a reminder to gather in beauty and good company.',
      source: 'Educational reflection (anwāʾ / Al-Bīrūnī tradition of naming)',
      scholar: 'Asrār framing',
    },
    emoji: '✨',
    color: '#8B5CF6', // Purple
  },

  // 4. Al-Dabarān (The Follower)
  {
    number: 4,
    nameArabic: 'الدبران',
    nameTransliteration: 'Al-Dabarān',
    nameEn: 'The Follower',
    nameFr: 'Le Suiveur',
    constellation: 'Taurus',
    startDegree: 38.57,
    element: 'Earth',
    planetaryRuler: 'Venus',
    divineQuality: {
      en: 'Loyalty, Persistence, Following Truth',
      fr: 'Loyauté, Persévérance, Suivre la Vérité',
    },
    spiritualFocus: {
      en: 'Following the prophetic example with steadfastness',
      fr: 'Suivre l\'exemple prophétique avec constance',
    },
    favorableFor: {
      en: ['Alliances', 'Long-term projects', 'Seeking teachers', 'Study'],
      fr: ['Alliances', 'Projets à long terme', 'Chercher des enseignants', 'Étude'],
    },
    unfavorableFor: {
      en: ['Breaking commitments', 'Impulsive changes'],
      fr: ['Rompre des engagements', 'Changements impulsifs'],
    },
    classicalWisdom: {
      quote: 'Al-Dabarān “follows” Thurayyā across the sky — a picture of steadfast following, not blind haste.',
      source: 'Educational reflection (star-name lore)',
      scholar: 'Asrār framing',
    },
    emoji: '🌟',
    color: '#EC4899', // Pink
  },

  // 5. Al-Haqʿah (The White Spot)
  {
    number: 5,
    nameArabic: 'الهقعة',
    nameTransliteration: 'Al-Haqʿah',
    nameEn: 'The White Spot',
    nameFr: 'La Tache Blanche',
    constellation: 'Orion',
    startDegree: 51.43,
    element: 'Air',
    planetaryRuler: 'Mercury',
    divineQuality: {
      en: 'Clarity, Purification, Truth',
      fr: 'Clarté, Purification, Vérité',
    },
    spiritualFocus: {
      en: 'Seeking clarity and purifying intentions',
      fr: 'Chercher la clarté et purifier les intentions',
    },
    favorableFor: {
      en: ['Spiritual purification', 'Learning', 'Communication', 'Writing'],
      fr: ['Purification spirituelle', 'Apprentissage', 'Communication', 'Écriture'],
    },
    unfavorableFor: {
      en: ['Deception', 'Unclear contracts', 'Confusion'],
      fr: ['Tromperie', 'Contrats peu clairs', 'Confusion'],
    },
    classicalWisdom: {
      quote: 'Clarity of intention softens confusion — seek light before you speak or sign.',
      source: 'Educational reflection',
      scholar: 'Asrār framing',
    },
    emoji: '💫',
    color: '#06B6D4', // Cyan
  },

  // 6. Al-Hanʿah (The Brand)
  {
    number: 6,
    nameArabic: 'الهنعة',
    nameTransliteration: 'Al-Hanʿah',
    nameEn: 'The Brand',
    nameFr: 'La Marque',
    constellation: 'Gemini',
    startDegree: 64.29,
    element: 'Air',
    planetaryRuler: 'Mercury',
    divineQuality: {
      en: 'Marking, Identity, Recognition',
      fr: 'Marquage, Identité, Reconnaissance',
    },
    spiritualFocus: {
      en: 'Recognizing one\'s unique spiritual purpose and calling',
      fr: 'Reconnaître son but spirituel unique et son appel',
    },
    favorableFor: {
      en: ['Establishing identity', 'Clear naming', 'Public speaking', 'Contracts'],
      fr: ['Établir l\'identité', 'Nommer avec clarté', 'Prise de parole publique', 'Contrats'],
    },
    unfavorableFor: {
      en: ['Anonymity', 'Hiding truth', 'Dishonesty'],
      fr: ['Anonymat', 'Cacher la vérité', 'Malhonnêteté'],
    },
    classicalWisdom: {
      quote: 'Names and marks in the old star calendar were for recognition — know yourself before Allah, not for show.',
      source: 'Educational reflection',
      scholar: 'Asrār framing',
    },
    emoji: '🔖',
    color: '#10B981', // Green
  },

  // 7. Al-Dhirāʿ (The Forearm)
  {
    number: 7,
    nameArabic: 'الذراع',
    nameTransliteration: 'Al-Dhirāʿ',
    nameEn: 'The Forearm',
    nameFr: 'L\'Avant-bras',
    constellation: 'Gemini',
    startDegree: 77.14,
    element: 'Air',
    planetaryRuler: 'Jupiter',
    divineQuality: {
      en: 'Reach, Extension, Generosity',
      fr: 'Portée, Extension, Générosité',
    },
    spiritualFocus: {
      en: 'Extending help to others and reaching for higher wisdom',
      fr: 'Étendre l\'aide aux autres et atteindre une sagesse supérieure',
    },
    favorableFor: {
      en: ['Charity', 'Teaching', 'Building alliances', 'Expansion'],
      fr: ['Charité', 'Enseignement', 'Construire des alliances', 'Expansion'],
    },
    unfavorableFor: {
      en: ['Selfishness', 'Hoarding', 'Isolation'],
      fr: ['Égoïsme', 'Accumulation', 'Isolation'],
    },
    classicalWisdom: {
      quote: 'The forearm that gives in charity teaches reach without grasping.',
      source: 'Educational reflection',
      scholar: 'Asrār framing',
    },
    emoji: '🤲',
    color: '#3B82F6', // Blue
  },

  // 8. Al-Nathrah (The Gap)
  {
    number: 8,
    nameArabic: 'النثرة',
    nameTransliteration: 'Al-Nathrah',
    nameEn: 'The Gap',
    nameFr: 'L\'Écart',
    constellation: 'Cancer',
    startDegree: 90,
    element: 'Water',
    planetaryRuler: 'Moon',
    divineQuality: {
      en: 'Mystery, Threshold, Sacred Space',
      fr: 'Mystère, Seuil, Espace Sacré',
    },
    spiritualFocus: {
      en: 'Contemplating the mysteries of faith and divine wisdom',
      fr: 'Contempler les mystères de la foi et de la sagesse divine',
    },
    favorableFor: {
      en: ['Meditation', 'Retreat', 'Inner work', 'Spiritual practices'],
      fr: ['Méditation', 'Retraite', 'Travail intérieur', 'Pratiques spirituelles'],
    },
    unfavorableFor: {
      en: ['Excessive worldly activity', 'Noise', 'Distraction'],
      fr: ['Activité mondaine excessive', 'Bruit', 'Distraction'],
    },
    classicalWisdom: {
      quote: 'In quiet gaps — between tasks, between breaths — remember the One who ordered the Moon’s phases.',
      source: 'Educational reflection (Qurʾān 36:39)',
      scholar: 'Asrār framing',
    },
    emoji: '🌊',
    color: '#14B8A6', // Teal
  },

  // ========================================
  // 9–28 — Phase B content fill (educational / reflection)
  // Fav/unfav: SCHOLAR-REVIEW where tagged. No magic/taweez/Picatrix.
  // Election tables remain in src/lib/ikhtiyarat/ (separate).
  // ========================================

  // 9. Al-Ṭarf (The Glance)
  // SCHOLAR-REVIEW: fav/unfav themes are educational first-pass — confirm before marketing elections.
  {
    number: 9,
    nameArabic: 'الطرف',
    nameTransliteration: 'Al-Ṭarf',
    nameEn: 'The Glance',
    nameFr: 'Le Regard',
    constellation: 'Leo',
    startDegree: 102.86,
    element: 'Fire',
    planetaryRuler: 'Sun',
    divineQuality: {
      en: 'Vision, Attentiveness',
      fr: 'Vision, Attention',
    },
    spiritualFocus: {
      en: 'Looking with care: notice what you see before you act, and ask Allah for insight without haste.',
      fr: 'Regarder avec soin : remarquer avant d’agir, et demander à Allah la clairvoyance sans précipitation.',
    },
    favorableFor: {
      en: ['Careful observation', 'Study', 'Reviewing plans', 'Seeking counsel'],
      fr: ['Observation attentive', 'Étude', 'Revoir des plans', 'Demander conseil'],
    },
    unfavorableFor: {
      en: ['Hasty judgments', 'Gossip', 'Spying on others'],
      fr: ['Jugements hâtifs', 'Médisance', 'Espionner autrui'],
    },
    classicalWisdom: {
      quote: 'Manāzil al-qamar are stations for reflection and timing adab — not prediction of the unseen.',
      source: 'Educational framing (Qurʾān 10:5; 36:39)',
      scholar: 'Asrār',
    },
    emoji: '👁️',
    color: '#F97316',
  },

  // 10. Al-Jabhah (The Forehead)
  // SCHOLAR-REVIEW: fav/unfav themes are educational first-pass — confirm before marketing elections.
  {
    number: 10,
    nameArabic: 'الجبهة',
    nameTransliteration: 'Al-Jabhah',
    nameEn: 'The Forehead',
    nameFr: 'Le Front',
    constellation: 'Leo',
    startDegree: 115.71,
    element: 'Fire',
    planetaryRuler: 'Saturn',
    divineQuality: {
      en: 'Dignity, Responsibility',
      fr: 'Dignité, Responsabilité',
    },
    spiritualFocus: {
      en: 'Carry dignity with humility — leadership here means service and clear intention before Allah.',
      fr: 'Porter la dignité avec humilité — diriger ici signifie servir et clarifier l’intention devant Allah.',
    },
    favorableFor: {
      en: ['Formal commitments', 'Teaching', 'Public trust', 'Marriage discussions'],
      fr: ['Engagements formels', 'Enseignement', 'Confiance publique', 'Discussions de mariage'],
    },
    unfavorableFor: {
      en: ['Arrogance', 'Empty show', 'Neglecting counsel'],
      fr: ['Arrogance', 'Ostentation', 'Négliger le conseil'],
    },
    classicalWisdom: {
      quote: 'Manāzil al-qamar are stations for reflection and timing adab — not prediction of the unseen.',
      source: 'Educational framing (Qurʾān 10:5; 36:39)',
      scholar: 'Asrār',
    },
    emoji: '👑',
    color: '#DC2626',
  },

  // 11. Al-Zubrah (The Mane)
  {
    number: 11,
    nameArabic: 'الزبرة',
    nameTransliteration: 'Al-Zubrah',
    nameEn: 'The Mane',
    nameFr: 'La Crinière',
    constellation: 'Leo',
    startDegree: 128.57,
    element: 'Fire',
    planetaryRuler: 'Jupiter',
    divineQuality: {
      en: 'Strength, Presence',
      fr: 'Force, Présence',
    },
    spiritualFocus: {
      en: 'Strength is a trust: use presence to protect and encourage, not to dominate.',
      fr: 'La force est un dépôt : utiliser sa présence pour protéger et encourager, non pour dominer.',
    },
    favorableFor: {
      en: ['Encouraging others', 'Steady work', 'Protecting the vulnerable', 'Long efforts'],
      fr: ['Encourager autrui', 'Travail régulier', 'Protéger les vulnérables', 'Efforts de longue haleine'],
    },
    unfavorableFor: {
      en: ['Boastfulness', 'Aggression', 'Wasting energy'],
      fr: ['Fanfaronnade', 'Agressivité', 'Gaspiller son énergie'],
    },
    classicalWisdom: {
      quote: 'Manāzil al-qamar are stations for reflection and timing adab — not prediction of the unseen.',
      source: 'Educational framing (Qurʾān 10:5; 36:39)',
      scholar: 'Asrār',
    },
    emoji: '🦁',
    color: '#7C3AED',
  },

  // 12. Al-Ṣarfah (The Changer)
  // SCHOLAR-REVIEW: fav/unfav themes are educational first-pass — confirm before marketing elections.
  {
    number: 12,
    nameArabic: 'الصرفة',
    nameTransliteration: 'Al-Ṣarfah',
    nameEn: 'The Changer',
    nameFr: 'Le Changeur',
    constellation: 'Virgo',
    startDegree: 141.43,
    element: 'Earth',
    planetaryRuler: 'Mercury',
    divineQuality: {
      en: 'Transition, Turning',
      fr: 'Transition, Tournant',
    },
    spiritualFocus: {
      en: 'Seasons turn: release what no longer serves, and turn toward what Allah has made clearer.',
      fr: 'Les saisons tournent : lâcher ce qui ne sert plus, et se tourner vers ce qu’Allah a rendu plus clair.',
    },
    favorableFor: {
      en: ['Course corrections', 'Ending harmful habits', 'Repentance', 'Reorganizing'],
      fr: ['Corrections de trajectoire', 'Mettre fin aux mauvaises habitudes', 'Tawba', 'Réorganiser'],
    },
    unfavorableFor: {
      en: ['Clinging to the obsolete', 'Forced abrupt breaks without counsel'],
      fr: ['S’accrocher à l’obsolète', 'Ruptures forcées sans conseil'],
    },
    classicalWisdom: {
      quote: 'Manāzil al-qamar are stations for reflection and timing adab — not prediction of the unseen.',
      source: 'Educational framing (Qurʾān 10:5; 36:39)',
      scholar: 'Asrār',
    },
    emoji: '🔄',
    color: '#059669',
  },

  // 13. Al-ʿAwwāʾ (The Barker)
  // SCHOLAR-REVIEW: fav/unfav themes are educational first-pass — confirm before marketing elections.
  {
    number: 13,
    nameArabic: 'العواء',
    nameTransliteration: 'Al-ʿAwwāʾ',
    nameEn: 'The Barker',
    nameFr: 'L\'Aboyeur',
    constellation: 'Virgo',
    startDegree: 154.29,
    element: 'Earth',
    planetaryRuler: 'Mars',
    divineQuality: {
      en: 'Gathering, Calling',
      fr: 'Rassemblement, Appel',
    },
    spiritualFocus: {
      en: 'Call others to what is good — a voice used for gathering and warning, not for needless noise.',
      fr: 'Appeler au bien — une voix pour rassembler et avertir, non pour faire du bruit inutile.',
    },
    favorableFor: {
      en: ['Gatherings', 'Reconciliation', 'Community work', 'Clear announcements'],
      fr: ['Rassemblements', 'Réconciliation', 'Travail communautaire', 'Annonces claires'],
    },
    unfavorableFor: {
      en: ['Spreading alarm without cause', 'Harsh speech', 'Division'],
      fr: ['Alarmer sans cause', 'Paroles dures', 'Division'],
    },
    classicalWisdom: {
      quote: 'Manāzil al-qamar are stations for reflection and timing adab — not prediction of the unseen.',
      source: 'Educational framing (Qurʾān 10:5; 36:39)',
      scholar: 'Asrār',
    },
    emoji: '🤝',
    color: '#0891B2',
  },

  // 14. Al-Simāk (The Unarmed)
  {
    number: 14,
    nameArabic: 'السماك',
    nameTransliteration: 'Al-Simāk',
    nameEn: 'The Unarmed',
    nameFr: 'Le Désarmé',
    constellation: 'Virgo',
    startDegree: 167.14,
    element: 'Earth',
    planetaryRuler: 'Venus',
    divineQuality: {
      en: 'Balance, Harvest',
      fr: 'Équilibre, Moisson',
    },
    spiritualFocus: {
      en: 'Al-Simāk al-Aʿzal (“the unarmed”) invites fair measure — harvest with gratitude, without grasping.',
      fr: 'Al-Simāk al-Aʿzal (« le désarmé ») invite à la juste mesure — moissonner avec gratitude, sans s’accrocher.',
    },
    favorableFor: {
      en: ['Fair dealing', 'Harvest and completion of work', 'Partnerships', 'Beauty with restraint'],
      fr: ['Commerce équitable', 'Moisson et achèvement du travail', 'Partenariats', 'Beauté avec retenue'],
    },
    unfavorableFor: {
      en: ['Greed', 'Unfair advantage', 'Neglecting zakāh and rights'],
      fr: ['Avidité', 'Avantage injuste', 'Négliger la zakāh et les droits'],
    },
    classicalWisdom: {
      quote: 'Manāzil al-qamar are stations for reflection and timing adab — not prediction of the unseen.',
      source: 'Educational framing (Qurʾān 10:5; 36:39)',
      scholar: 'Asrār',
    },
    emoji: '⚖️',
    color: '#8B5CF6',
  },

  // 15. Al-Ghafr (The Covering)
  // SCHOLAR-REVIEW: fav/unfav themes are educational first-pass — confirm before marketing elections.
  {
    number: 15,
    nameArabic: 'الغفر',
    nameTransliteration: 'Al-Ghafr',
    nameEn: 'The Covering',
    nameFr: 'La Couverture',
    constellation: 'Libra',
    startDegree: 180.0,
    element: 'Air',
    planetaryRuler: 'Mercury',
    divineQuality: {
      en: 'Covering, Discretion',
      fr: 'Couverture, Discrétion',
    },
    spiritualFocus: {
      en: 'Cover faults — your own and others’ — and prefer discretion over exposure.',
      fr: 'Couvrir les défauts — les siens et ceux d’autrui — et préférer la discrétion à l’exposition.',
    },
    favorableFor: {
      en: ['Forgiveness', 'Private repentance', 'Protecting privacy', 'Quiet charity'],
      fr: ['Pardon', 'Tawba privée', 'Protéger la vie privée', 'Charité discrète'],
    },
    unfavorableFor: {
      en: ['Exposing others', 'Scandal', 'Public shaming'],
      fr: ['Exposer autrui', 'Scandale', 'Humiliation publique'],
    },
    classicalWisdom: {
      quote: 'Manāzil al-qamar are stations for reflection and timing adab — not prediction of the unseen.',
      source: 'Educational framing (Qurʾān 10:5; 36:39)',
      scholar: 'Asrār',
    },
    emoji: '🕊️',
    color: '#6366F1',
  },

  // 16. Al-Zubānā (The Claws)
  // SCHOLAR-REVIEW: fav/unfav themes are educational first-pass — confirm before marketing elections.
  {
    number: 16,
    nameArabic: 'الزبانا',
    nameTransliteration: 'Al-Zubānā',
    nameEn: 'The Claws',
    nameFr: 'Les Griffes',
    constellation: 'Libra',
    startDegree: 192.86,
    element: 'Air',
    planetaryRuler: 'Jupiter',
    divineQuality: {
      en: 'Boundaries, Careful Cuts',
      fr: 'Limites, Coupures prudentes',
    },
    spiritualFocus: {
      en: 'Set boundaries with justice: cut what harms, without cruelty.',
      fr: 'Poser des limites avec justice : couper ce qui nuit, sans cruauté.',
    },
    favorableFor: {
      en: ['Clear agreements', 'Ending harmful ties with adab', 'Legal clarity', 'Self-discipline'],
      fr: ['Accords clairs', 'Mettre fin à des liens nuisibles avec adab', 'Clarté juridique', 'Autodiscipline'],
    },
    unfavorableFor: {
      en: ['Spiteful severance', 'Ambiguous contracts', 'Unnecessary conflict'],
      fr: ['Rupture vindicative', 'Contrats ambigus', 'Conflit inutile'],
    },
    classicalWisdom: {
      quote: 'Manāzil al-qamar are stations for reflection and timing adab — not prediction of the unseen.',
      source: 'Educational framing (Qurʾān 10:5; 36:39)',
      scholar: 'Asrār',
    },
    emoji: '⚖️',
    color: '#3B82F6',
  },

  // 17. Al-Iklīl (The Crown)
  {
    number: 17,
    nameArabic: 'الإكليل',
    nameTransliteration: 'Al-Iklīl',
    nameEn: 'The Crown',
    nameFr: 'La Couronne',
    constellation: 'Scorpio',
    startDegree: 205.71,
    element: 'Water',
    planetaryRuler: 'Mars',
    divineQuality: {
      en: 'Honor, Trust',
      fr: 'Honneur, Confiance',
    },
    spiritualFocus: {
      en: 'Honor is a trust worn lightly — crowns in the sky remind of responsibility, not entitlement.',
      fr: 'L’honneur est un dépôt porté avec légèreté — les couronnes du ciel rappellent la responsabilité, non le droit.',
    },
    favorableFor: {
      en: ['Keeping trusts', 'Formal roles', 'Guarding dignity', 'Responsible leadership'],
      fr: ['Garder les dépôts', 'Rôles formels', 'Préserver la dignité', 'Leadership responsable'],
    },
    unfavorableFor: {
      en: ['Pride', 'Betrayal of trust', 'Seeking status for its own sake'],
      fr: ['Orgueil', 'Trahison de confiance', 'Chercher le statut pour lui-même'],
    },
    classicalWisdom: {
      quote: 'Manāzil al-qamar are stations for reflection and timing adab — not prediction of the unseen.',
      source: 'Educational framing (Qurʾān 10:5; 36:39)',
      scholar: 'Asrār',
    },
    emoji: '👑',
    color: '#DC2626',
  },

  // 18. Al-Qalb (The Heart)
  // SCHOLAR-REVIEW: fav/unfav themes are educational first-pass — confirm before marketing elections.
  {
    number: 18,
    nameArabic: 'القلب',
    nameTransliteration: 'Al-Qalb',
    nameEn: 'The Heart',
    nameFr: 'Le Cœur',
    constellation: 'Scorpio',
    startDegree: 218.57,
    element: 'Water',
    planetaryRuler: 'Saturn',
    divineQuality: {
      en: 'Sincerity, Courage of Heart',
      fr: 'Sincérité, Courage du cœur',
    },
    spiritualFocus: {
      en: 'Return to the heart: sincerity (ikhlāṣ) before intensity — courage without crushing others.',
      fr: 'Revenir au cœur : la sincérité (ikhlāṣ) avant l’intensité — du courage sans écraser autrui.',
    },
    favorableFor: {
      en: ['Heartfelt duʿāʾ', 'Honest conversations', 'Courageous apology', 'Deep study'],
      fr: ['Duʿāʾ sincère', 'Conversations honnêtes', 'Excuses courageuses', 'Étude approfondie'],
    },
    unfavorableFor: {
      en: ['Hard-heartedness', 'Emotional recklessness', 'Crushing speech'],
      fr: ['Endurcissement du cœur', 'Imprudence émotionnelle', 'Paroles écrasantes'],
    },
    classicalWisdom: {
      quote: 'Manāzil al-qamar are stations for reflection and timing adab — not prediction of the unseen.',
      source: 'Educational framing (Qurʾān 10:5; 36:39)',
      scholar: 'Asrār',
    },
    emoji: '❤️',
    color: '#EF4444',
  },

  // 19. Al-Shawlah (The Sting)
  // SCHOLAR-REVIEW: fav/unfav themes are educational first-pass — confirm before marketing elections.
  {
    number: 19,
    nameArabic: 'الشولة',
    nameTransliteration: 'Al-Shawlah',
    nameEn: 'The Sting',
    nameFr: 'Le Dard',
    constellation: 'Scorpio',
    startDegree: 231.43,
    element: 'Water',
    planetaryRuler: 'Mercury',
    divineQuality: {
      en: 'Restraint, Defense of Dignity',
      fr: 'Retenue, Défense de la dignité',
    },
    spiritualFocus: {
      en: 'The sting is for defense, not attack — restrain the tongue and hand unless justice requires otherwise.',
      fr: 'Le dard est pour se défendre, non pour attaquer — retenir la langue et la main sauf si la justice l’exige.',
    },
    favorableFor: {
      en: ['Self-restraint', 'Protecting the weak', 'Cautious travel planning', 'Saying less'],
      fr: ['Maîtrise de soi', 'Protéger les faibles', 'Planifier un voyage avec prudence', 'Dire moins'],
    },
    unfavorableFor: {
      en: ['Retaliation for ego', 'Provocation', 'Reckless risk'],
      fr: ['Représailles pour l’ego', 'Provocation', 'Risque imprudent'],
    },
    classicalWisdom: {
      quote: 'Manāzil al-qamar are stations for reflection and timing adab — not prediction of the unseen.',
      source: 'Educational framing (Qurʾān 10:5; 36:39)',
      scholar: 'Asrār',
    },
    emoji: '🦂',
    color: '#F59E0B',
  },

  // 20. Al-Naʿāʾim (The Ostriches)
  {
    number: 20,
    nameArabic: 'النعائم',
    nameTransliteration: 'Al-Naʿāʾim',
    nameEn: 'The Ostriches',
    nameFr: 'Les Autruches',
    constellation: 'Sagittarius',
    startDegree: 244.29,
    element: 'Fire',
    planetaryRuler: 'Sun',
    divineQuality: {
      en: 'Journey, Openness',
      fr: 'Voyage, Ouverture',
    },
    spiritualFocus: {
      en: 'Wide spaces invite travel of body and heart — move with tawakkul and good company.',
      fr: 'Les grands espaces invitent au voyage du corps et du cœur — avancer avec tawakkul et bonne compagnie.',
    },
    favorableFor: {
      en: ['Travel', 'Exploration of knowledge', 'Outdoor work', 'Expanding horizons with adab'],
      fr: ['Voyage', 'Exploration du savoir', 'Travail en extérieur', 'Élargir ses horizons avec adab'],
    },
    unfavorableFor: {
      en: ['Aimless wandering', 'Leaving duties unfinished', 'Isolation from good counsel'],
      fr: ['Errance sans but', 'Laisser des devoirs inachevés', 'S’isoler du bon conseil'],
    },
    classicalWisdom: {
      quote: 'Manāzil al-qamar are stations for reflection and timing adab — not prediction of the unseen.',
      source: 'Educational framing (Qurʾān 10:5; 36:39)',
      scholar: 'Asrār',
    },
    emoji: '🦅',
    color: '#FBBF24',
  },

  // 21. Al-Baldah (The City)
  // SCHOLAR-REVIEW: fav/unfav themes are educational first-pass — confirm before marketing elections.
  {
    number: 21,
    nameArabic: 'البلدة',
    nameTransliteration: 'Al-Baldah',
    nameEn: 'The City',
    nameFr: 'La Ville',
    constellation: 'Sagittarius',
    startDegree: 257.14,
    element: 'Fire',
    planetaryRuler: 'Saturn',
    divineQuality: {
      en: 'Settlement, Order',
      fr: 'Établissement, Ordre',
    },
    spiritualFocus: {
      en: 'Cities need order and neighbors’ rights — settle what is due before chasing the next road.',
      fr: 'Les villes demandent de l’ordre et le droit des voisins — régler ce qui est dû avant de courir la route suivante.',
    },
    favorableFor: {
      en: ['Settling affairs', 'Neighborhood care', 'Local commitments', 'Organizing home'],
      fr: ['Régler ses affaires', 'Soin du voisinage', 'Engagements locaux', 'Organiser la maison'],
    },
    unfavorableFor: {
      en: ['Neglecting neighbors\' rights', 'Chaos in commitments', 'Fleeing responsibility'],
      fr: ['Négliger les droits des voisins', 'Chaos dans les engagements', 'Fuir la responsabilité'],
    },
    classicalWisdom: {
      quote: 'Manāzil al-qamar are stations for reflection and timing adab — not prediction of the unseen.',
      source: 'Educational framing (Qurʾān 10:5; 36:39)',
      scholar: 'Asrār',
    },
    emoji: '🏛️',
    color: '#84CC16',
  },

  // 22. Saʿd al-Dhābiḥ (The Fortunate Sacrificer)
  // SCHOLAR-REVIEW: fav/unfav themes are educational first-pass — confirm before marketing elections.
  {
    number: 22,
    nameArabic: 'سعد الذابح',
    nameTransliteration: 'Saʿd al-Dhābiḥ',
    nameEn: 'The Fortunate Sacrificer',
    nameFr: 'Le Sacrificateur Fortune',
    constellation: 'Capricorn',
    startDegree: 270.0,
    element: 'Earth',
    planetaryRuler: 'Jupiter',
    divineQuality: {
      en: 'Offering, Commitment',
      fr: 'Offrande, Engagement',
    },
    spiritualFocus: {
      en: 'Named among the saʿd stations: reflect on what you are willing to offer — wealth, time, ego — for Allah’s sake. (Educational theme only; not a ritual prescription.)',
      fr: 'Parmi les stations saʿd : réfléchir à ce que l’on offre — bien, temps, ego — pour Allah. (Thème éducatif seulement ; pas une prescription rituelle.)',
    },
    favorableFor: {
      en: ['Charitable giving', 'Keeping vows', 'Serious commitments', 'Simplifying lifestyle'],
      fr: ['Aumône', 'Tenir ses vœux', 'Engagements sérieux', 'Simplifier son mode de vie'],
    },
    unfavorableFor: {
      en: ['Wasteful spending', 'Empty vows', 'Harming animals or people'],
      fr: ['Dépenses gaspillées', 'Vœux vides', 'Nuire aux animaux ou aux personnes'],
    },
    classicalWisdom: {
      quote: 'Manāzil al-qamar are stations for reflection and timing adab — not prediction of the unseen.',
      source: 'Educational framing (Qurʾān 10:5; 36:39)',
      scholar: 'Asrār',
    },
    emoji: '🐏',
    color: '#22C55E',
  },

  // 23. Saʿd Bulaʿ (The Fortunate Swallower)
  // SCHOLAR-REVIEW: fav/unfav themes are educational first-pass — confirm before marketing elections.
  {
    number: 23,
    nameArabic: 'سعد بلع',
    nameTransliteration: 'Saʿd Bulaʿ',
    nameEn: 'The Fortunate Swallower',
    nameFr: 'L\'Avaleur Fortune',
    constellation: 'Capricorn',
    startDegree: 282.86,
    element: 'Earth',
    planetaryRuler: 'Saturn',
    divineQuality: {
      en: 'Depth, Absorption',
      fr: 'Profondeur, Absorption',
    },
    spiritualFocus: {
      en: 'Absorb lessons slowly: take in knowledge and counsel, then digest before speaking.',
      fr: 'Absorber les leçons lentement : prendre le savoir et le conseil, puis digérer avant de parler.',
    },
    favorableFor: {
      en: ['Deep study', 'Listening', 'Patience with difficulty', 'Inner work'],
      fr: ['Étude approfondie', 'Écoute', 'Patience dans la difficulté', 'Travail intérieur'],
    },
    unfavorableFor: {
      en: ['Swallowing anger into resentment', 'Consuming without reflection', 'Overindulgence'],
      fr: ['Avaler la colère en rancune', 'Consommer sans réflexion', 'Excès'],
    },
    classicalWisdom: {
      quote: 'Manāzil al-qamar are stations for reflection and timing adab — not prediction of the unseen.',
      source: 'Educational framing (Qurʾān 10:5; 36:39)',
      scholar: 'Asrār',
    },
    emoji: '🐋',
    color: '#10B981',
  },

  // 24. Saʿd al-Suʿūd (The Most Fortunate)
  // SCHOLAR-REVIEW: fav/unfav themes are educational first-pass — confirm before marketing elections.
  {
    number: 24,
    nameArabic: 'سعد السعود',
    nameTransliteration: 'Saʿd al-Suʿūd',
    nameEn: 'The Most Fortunate',
    nameFr: 'Le Plus Fortune',
    constellation: 'Aquarius',
    startDegree: 295.71,
    element: 'Air',
    planetaryRuler: 'Jupiter',
    divineQuality: {
      en: 'Gratitude, Hope',
      fr: 'Gratitude, Espoir',
    },
    spiritualFocus: {
      en: 'Named “most fortunate” in the star calendar — meet ease with shukr, and hardship with hope in Allah alone.',
      fr: 'Nommé « le plus fortune » dans le calendrier stellaire — accueillir l’aisance avec shukr, et l’épreuve avec espoir en Allah seul.',
    },
    favorableFor: {
      en: ['Gratitude practices', 'Beginning hopeful works', 'Reconciliation', 'Sharing ease with others'],
      fr: ['Pratiques de gratitude', 'Commencer des œuvres d’espoir', 'Réconciliation', 'Partager l’aisance'],
    },
    unfavorableFor: {
      en: ['Taking ease for granted', 'Complacency', 'Forgetting the Giver'],
      fr: ['Tenir l’aisance pour acquise', 'Complaisance', 'Oublier le Donateur'],
    },
    classicalWisdom: {
      quote: 'Manāzil al-qamar are stations for reflection and timing adab — not prediction of the unseen.',
      source: 'Educational framing (Qurʾān 10:5; 36:39)',
      scholar: 'Asrār',
    },
    emoji: '🍀',
    color: '#14B8A6',
  },

  // 25. Saʿd al-Akhbiyah (The Fortunate Tents)
  {
    number: 25,
    nameArabic: 'سعد الأخبية',
    nameTransliteration: 'Saʿd al-Akhbiyah',
    nameEn: 'The Fortunate Tents',
    nameFr: 'Les Tentes Fortunées',
    constellation: 'Aquarius',
    startDegree: 308.57,
    element: 'Air',
    planetaryRuler: 'Saturn',
    divineQuality: {
      en: 'Shelter, Hospitality',
      fr: 'Abri, Hospitalité',
    },
    spiritualFocus: {
      en: 'Tents mean shelter and guests: open your space with generosity and guard those who seek safety.',
      fr: 'Les tentes signifient abri et hôtes : ouvrir son espace avec générosité et protéger qui cherche refuge.',
    },
    favorableFor: {
      en: ['Hospitality', 'Shelter and housing matters', 'Protecting family', 'Welcoming the stranger with adab'],
      fr: ['Hospitalité', 'Questions de logement', 'Protéger la famille', 'Accueillir l’étranger avec adab'],
    },
    unfavorableFor: {
      en: ['Inhospitality', 'Neglecting dependents', 'Closing doors out of pride'],
      fr: ['Inhospitalité', 'Négliger les personnes à charge', 'Fermer sa porte par orgueil'],
    },
    classicalWisdom: {
      quote: 'Manāzil al-qamar are stations for reflection and timing adab — not prediction of the unseen.',
      source: 'Educational framing (Qurʾān 10:5; 36:39)',
      scholar: 'Asrār',
    },
    emoji: '⛺',
    color: '#06B6D4',
  },

  // 26. Al-Fargh al-Muqaddam (The Former Spout)
  // SCHOLAR-REVIEW: fav/unfav themes are educational first-pass — confirm before marketing elections.
  {
    number: 26,
    nameArabic: 'الفرغ المقدم',
    nameTransliteration: 'Al-Fargh al-Muqaddam',
    nameEn: 'The Former Spout',
    nameFr: 'Le Premier Déversoir',
    constellation: 'Pisces',
    startDegree: 321.43,
    element: 'Water',
    planetaryRuler: 'Venus',
    divineQuality: {
      en: 'Opening, Outflow',
      fr: 'Ouverture, Écoulement',
    },
    spiritualFocus: {
      en: 'The former spout of the bucket: begin letting good flow — speech, charity, and help — with measured opening.',
      fr: 'Le premier déversoir du seau : commencer à laisser couler le bien — parole, aumône, aide — avec une ouverture mesurée.',
    },
    favorableFor: {
      en: ['Starting helpful projects', 'Releasing stuck affairs', 'Marriage and union talks', 'Generosity'],
      fr: ['Démarrer des projets utiles', 'Débloquer des affaires', 'Discussions de mariage et d’union', 'Générosité'],
    },
    unfavorableFor: {
      en: ['Reckless disclosure', 'Draining resources without plan', 'Gossip as “release”'],
      fr: ['Divulgation imprudente', 'Épuiser ses ressources sans plan', 'Médisance comme « libération »'],
    },
    classicalWisdom: {
      quote: 'Manāzil al-qamar are stations for reflection and timing adab — not prediction of the unseen.',
      source: 'Educational framing (Qurʾān 10:5; 36:39)',
      scholar: 'Asrār',
    },
    emoji: '💧',
    color: '#0EA5E9',
  },

  // 27. Al-Fargh al-Muʾakhkhar (The Latter Spout)
  {
    number: 27,
    nameArabic: 'الفرغ المؤخر',
    nameTransliteration: 'Al-Fargh al-Muʾakhkhar',
    nameEn: 'The Latter Spout',
    nameFr: 'Le Second Déversoir',
    constellation: 'Pisces',
    startDegree: 334.29,
    element: 'Water',
    planetaryRuler: 'Mercury',
    divineQuality: {
      en: 'Completion, Emptying',
      fr: 'Achèvement, Vidage',
    },
    spiritualFocus: {
      en: 'The latter spout completes the pouring — finish what you opened, and empty the heart of grudges.',
      fr: 'Le second déversoir achève le versement — terminer ce que l’on a ouvert, et vider le cœur des rancunes.',
    },
    favorableFor: {
      en: ['Completing projects', 'Settling debts', 'Forgiving leftovers', 'Closing cycles cleanly'],
      fr: ['Achever des projets', 'Régler des dettes', 'Pardonner le reste', 'Clore des cycles proprement'],
    },
    unfavorableFor: {
      en: ['Leaving ends untied', 'Hoarding grudges', 'Starting too many new things'],
      fr: ['Laisser des fins en suspens', 'Garder des rancunes', 'Commencer trop de nouveautés'],
    },
    classicalWisdom: {
      quote: 'Manāzil al-qamar are stations for reflection and timing adab — not prediction of the unseen.',
      source: 'Educational framing (Qurʾān 10:5; 36:39)',
      scholar: 'Asrār',
    },
    emoji: '💧',
    color: '#3B82F6',
  },

  // 28. Baṭn al-Ḥūt (Belly of the Fish)
  // SCHOLAR-REVIEW: fav/unfav themes are educational first-pass — confirm before marketing elections.
  {
    number: 28,
    nameArabic: 'بطن الحوت',
    nameTransliteration: 'Baṭn al-Ḥūt',
    nameEn: 'Belly of the Fish',
    nameFr: 'Ventre de Poisson',
    constellation: 'Pisces',
    startDegree: 347.14,
    element: 'Water',
    planetaryRuler: 'Saturn',
    divineQuality: {
      en: 'Wholeness, Hidden Depths',
      fr: 'Totalité, Profondeurs cachées',
    },
    spiritualFocus: {
      en: 'The belly of the fish closes the circuit of twenty-eight — honor what is hidden, and seek wholeness through tawakkul.',
      fr: 'Le ventre du poisson clôt le cycle des vingt-huit — honorer ce qui est caché, et chercher la totalité par le tawakkul.',
    },
    favorableFor: {
      en: ['Quiet reflection', 'Caring for the unseen needs of others', 'Patience with the hidden', 'Integrating lessons'],
      fr: ['Réflexion tranquille', 'Soigner les besoins invisibles d’autrui', 'Patience face au caché', 'Intégrer les leçons'],
    },
    unfavorableFor: {
      en: ['Forced exposure', 'Denying the unseen', 'Despair in darkness'],
      fr: ['Exposition forcée', 'Nier l’invisible', 'Désespoir dans l’obscurité'],
    },
    classicalWisdom: {
      quote: 'Manāzil al-qamar are stations for reflection and timing adab — not prediction of the unseen.',
      source: 'Educational framing (Qurʾān 10:5; 36:39)',
      scholar: 'Asrār',
    },
    emoji: '🐟',
    color: '#6366F1',
  },
];

// ========================================
// CALCULATIONS
// ========================================

/**
 * Calculate current lunar mansion based on moon's ecliptic longitude
 * UPGRADED: Now uses astronomy-engine for accurate lunar position
 */
export function getCurrentLunarMansion(date: Date = new Date()): CurrentMansion {
  try {
    // Use astronomy-engine for precise lunar ecliptic longitude
    const eclipticLongitude = Astronomy.EclipticGeoMoon(date).lon;
    
    // Each mansion is 12.857° (360° / 28 mansions)
    const mansionIndex = Math.floor(eclipticLongitude / 12.857142857) % 28;
    
    // Calculate progress through current mansion (0-1)
    const mansionDegree = eclipticLongitude % 12.857142857;
    const daysInMansion = mansionDegree / 12.857142857;
    
    const mansion = LUNAR_MANSIONS[mansionIndex];
    
    // Get accurate moon phase from astronomy-engine
    const moonIllum = Astronomy.Illumination(Astronomy.Body.Moon, date);
    const moonPhase = getMoonPhaseFromIllumination(moonIllum.phase_fraction);
    
    return {
      mansion,
      moonPhase,
      daysInMansion,
      spiritualGuidance: mansion.spiritualFocus,
    };
  } catch (error) {
    // Fallback to simplified calculation if astronomy-engine fails
    console.warn('Astronomy engine failed, using simplified calculation:', error);
    return getFallbackLunarMansion(date);
  }
}

/**
 * Fallback simplified calculation (original method)
 */
function getFallbackLunarMansion(date: Date): CurrentMansion {
  const dayOfMonth = date.getDate();
  const mansionIndex = Math.floor((dayOfMonth - 1) * (28 / 30)) % 28;
  const daysInMansion = ((dayOfMonth - 1) % (30 / 28)) / (30 / 28);
  
  const mansion = LUNAR_MANSIONS[mansionIndex];
  const moonPhase = getMoonPhase(dayOfMonth);
  
  return {
    mansion,
    moonPhase,
    daysInMansion,
    spiritualGuidance: mansion.spiritualFocus,
  };
}

/**
 * Get moon phase name from illumination fraction (0-1)
 */
function getMoonPhaseFromIllumination(phaseFraction: number): string {
  if (phaseFraction < 0.05) return 'New Moon';
  if (phaseFraction < 0.25) return 'Waxing Crescent';
  if (phaseFraction < 0.30) return 'First Quarter';
  if (phaseFraction < 0.50) return 'Waxing Gibbous';
  if (phaseFraction < 0.55) return 'Full Moon';
  if (phaseFraction < 0.75) return 'Waning Gibbous';
  if (phaseFraction < 0.80) return 'Last Quarter';
  return 'Waning Crescent';
}

/**
 * Get moon phase name
 */
function getMoonPhase(dayOfMonth: number): string {
  if (dayOfMonth <= 1) return 'New Moon';
  if (dayOfMonth <= 7) return 'Waxing Crescent';
  if (dayOfMonth <= 9) return 'First Quarter';
  if (dayOfMonth <= 14) return 'Waxing Gibbous';
  if (dayOfMonth <= 16) return 'Full Moon';
  if (dayOfMonth <= 21) return 'Waning Gibbous';
  if (dayOfMonth <= 23) return 'Last Quarter';
  return 'Waning Crescent';
}

/**
 * Get lunar mansion by number (1-28)
 */
export function getLunarMansionByNumber(number: number): LunarMansion | null {
  if (number < 1 || number > 28) return null;
  return LUNAR_MANSIONS[number - 1];
}

/**
 * Get mansion-planetary hour synergy
 */
export function getMansionPlanetarySynergy(
  mansion: LunarMansion,
  planetaryHourPlanet: string
): {
  synergy: 'high' | 'medium' | 'low';
  explanation: { en: string; fr: string };
} {
  const hasSynergy = mansion.planetaryRuler === planetaryHourPlanet;
  
  if (hasSynergy) {
    return {
      synergy: 'high',
      explanation: {
        en: `Excellent alignment! Lunar mansion ${mansion.nameEn} is ruled by ${planetaryHourPlanet}, matching the current planetary hour.`,
        fr: `Excellent alignement ! Le manoir lunaire ${mansion.nameFr} est gouverné par ${planetaryHourPlanet}, correspondant à l'heure planétaire actuelle.`,
      },
    };
  }
  
  // Check elemental harmony
  const planetElements: Record<string, string> = {
    'Sun': 'Fire',
    'Moon': 'Water',
    'Mercury': 'Air',
    'Venus': 'Earth',
    'Mars': 'Fire',
    'Jupiter': 'Air',
    'Saturn': 'Earth',
  };
  
  const planetElement = planetElements[planetaryHourPlanet];
  const elementalHarmony = planetElement === mansion.element;
  
  if (elementalHarmony) {
    return {
      synergy: 'medium',
      explanation: {
        en: `Good harmony! ${planetaryHourPlanet} shares the ${mansion.element} element with lunar mansion ${mansion.nameEn}.`,
        fr: `Bonne harmonie ! ${planetaryHourPlanet} partage l'élément ${mansion.element} avec le manoir lunaire ${mansion.nameFr}.`,
      },
    };
  }
  
  return {
    synergy: 'low',
    explanation: {
      en: `Neutral influence. ${planetaryHourPlanet} hour and lunar mansion ${mansion.nameEn} have different energies.`,
      fr: `Influence neutre. L'heure de ${planetaryHourPlanet} et le manoir lunaire ${mansion.nameFr} ont des énergies différentes.`,
    },
  };
}
