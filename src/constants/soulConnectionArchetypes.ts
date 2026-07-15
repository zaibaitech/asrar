/**
 * Soul Connection (Spiritual-Destiny, mod-9) archetype content — ported
 * verbatim from asrar-mobile's constants/translations.ts `soul.archetypes`
 * block (marriage context), NOT from the older numeric scoreMap that used
 * to live in relationshipCompatibility.ts. The mobile app treats these two
 * as separate systems; the archetype layer below is what its actual
 * "Soul Connection" screen renders, and is the one the user asked to match.
 *
 * English and French text is copied verbatim from the mobile source.
 * Arabic does not exist there (confirmed by exhaustive search of the
 * mobile repo's translations.ts) — omitted here rather than invented, per
 * explicit user direction. Do not add Arabic strings to this file without
 * a real source.
 */

export type SoulConnectionSeverity = 'green' | 'amber' | 'red';

export interface SoulConnectionArchetype {
  number: number; // 1-9
  severity: SoulConnectionSeverity;
  tags: { en: string; fr: string }[];
  title: { en: string; fr: string };
  oneLine: { en: string; fr: string };
  meaning: { en: string; fr: string };
  marriageOutlook: { en: string; fr: string };
  watchOut: { en: string; fr: string };
  keyToSuccess: { en: string; fr: string };
}

/** Good/caution/difficult grouping, per the mobile app's severity field — the only "compatible or not" judgment this metric carries (it is not blended into any weighted score). */
export const SOUL_CONNECTION_SEVERITY_GROUPS: Record<SoulConnectionSeverity, number[]> = {
  green: [2, 5, 7, 8],
  amber: [1],
  red: [3, 4, 6, 9],
};

export const SOUL_CONNECTION_ARCHETYPES: Record<number, SoulConnectionArchetype> = {
  1: {
    number: 1,
    severity: 'amber',
    tags: [
      { en: 'Grounded', fr: 'Ancré' },
      { en: 'Stability', fr: 'Stabilité' },
      { en: 'Renewal', fr: 'Renouvellement' },
    ],
    title: { en: 'The Grounded Path', fr: 'Le Chemin Ancré' },
    oneLine: {
      en: 'May start easy; later can feel stagnant',
      fr: 'Peut commencer facilement ; plus tard peut sembler stagnant',
    },
    meaning: {
      en: 'This pattern traditionally shows an easy beginning that may later feel stagnant, especially in growth and provision. Emotional connection can cool over time if not actively tended.',
      fr: "Ce motif montre traditionnellement un début facile qui peut plus tard sembler stagnant, surtout en croissance et provision. Le lien émotionnel peut se refroidir avec le temps s'il n'est pas activement entretenu.",
    },
    marriageOutlook: {
      en: 'Marriage may start smoothly but requires intentional renewal to avoid complacency. Focus on shared goals and gratitude practices.',
      fr: 'Le mariage peut commencer en douceur mais nécessite un renouvellement intentionnel pour éviter la complaisance. Concentrez-vous sur des objectifs partagés et des pratiques de gratitude.',
    },
    watchOut: {
      en: 'Emotional coldness and taking each other for granted. Growth in provision may slow without conscious effort.',
      fr: "Froideur émotionnelle et tenir l'autre pour acquis. La croissance en provision peut ralentir sans effort conscient.",
    },
    keyToSuccess: {
      en: 'Shared spiritual goals, regular renewal practices, gratitude, and acts of charity (sadaqah) together.',
      fr: 'Objectifs spirituels partagés, pratiques de renouvellement régulières, gratitude et actes de charité (sadaqah) ensemble.',
    },
  },
  2: {
    number: 2,
    severity: 'green',
    tags: [
      { en: 'Harmony', fr: 'Harmonie' },
      { en: 'Cooperation', fr: 'Coopération' },
      { en: 'Companionship', fr: 'Camaraderie' },
    ],
    title: { en: 'The Harmonious Bond', fr: 'Le Lien Harmonieux' },
    oneLine: {
      en: 'Traditionally good for cooperation',
      fr: 'Traditionnellement bon pour la coopération',
    },
    meaning: {
      en: 'Traditionally considered favorable for marriage. This pattern supports natural cooperation, companionship, and mutual understanding. Balance flows more easily than opposition.',
      fr: "Traditionnellement considéré comme favorable au mariage. Ce motif soutient la coopération naturelle, la camaraderie et la compréhension mutuelle. L'équilibre coule plus facilement que l'opposition.",
    },
    marriageOutlook: {
      en: 'Marriage is traditionally supported. Companionship and teamwork are natural strengths. Guard against dependency.',
      fr: 'Le mariage est traditionnellement soutenu. La camaraderie et le travail d\'équipe sont des forces naturelles. Gardez-vous contre la dépendance.',
    },
    watchOut: {
      en: 'Over-dependency and avoiding difficult conversations. One partner may lean too heavily on the other.',
      fr: "Sur-dépendance et éviter les conversations difficiles. Un partenaire peut trop s'appuyer sur l'autre.",
    },
    keyToSuccess: {
      en: 'Clear communication, shared responsibility, and maintaining individual growth alongside partnership.',
      fr: 'Communication claire, responsabilité partagée et maintien de la croissance individuelle aux côtés du partenariat.',
    },
  },
  3: {
    number: 3,
    severity: 'red',
    tags: [
      { en: 'Friction', fr: 'Friction' },
      { en: 'Patience', fr: 'Patience' },
      { en: 'Discipline', fr: 'Discipline' },
    ],
    title: { en: 'The Friction Path', fr: 'Le Chemin de Friction' },
    oneLine: {
      en: 'Often difficult; tension and strain',
      fr: 'Souvent difficile ; tension et pression',
    },
    meaning: {
      en: 'This pattern is traditionally associated with difficulty. Tension, frequent disagreements, and financial pressure may arise. Requires significant patience and discipline.',
      fr: 'Ce motif est traditionnellement associé à la difficulté. Des tensions, des désaccords fréquents et des pressions financières peuvent surgir. Nécessite une patience et une discipline significatives.',
    },
    marriageOutlook: {
      en: 'Marriage may face continuous challenges. Strain in provision and emotional harmony often requires outside support and spiritual discipline.',
      fr: 'Le mariage peut faire face à des défis continus. La pression en provision et harmonie émotionnelle nécessite souvent un soutien extérieur et une discipline spirituelle.',
    },
    watchOut: {
      en: 'Constant arguments, financial instability, and emotional burnout. This path tests endurance.',
      fr: "Arguments constants, instabilité financière et épuisement émotionnel. Ce chemin teste l'endurance.",
    },
    keyToSuccess: {
      en: 'Patience (sabr), structured routines, spiritual discipline, and wise counsel from trusted elders.',
      fr: "Patience (sabr), routines structurées, discipline spirituelle et conseil sage d'aînés de confiance.",
    },
  },
  4: {
    number: 4,
    severity: 'red',
    tags: [
      { en: 'Burden', fr: 'Fardeau' },
      { en: 'Health', fr: 'Santé' },
      { en: 'Maturity', fr: 'Maturité' },
    ],
    title: { en: 'The Burdened Path', fr: 'Le Chemin Chargé' },
    oneLine: {
      en: 'Heavy trials; health and strain',
      fr: 'Épreuves lourdes ; santé et pression',
    },
    meaning: {
      en: 'Traditionally seen as a heavy path. Health concerns, emotional strain, and a sense of burden may be present, especially if one partner has unresolved emotional patterns.',
      fr: 'Traditionnellement vu comme un chemin lourd. Des préoccupations de santé, une pression émotionnelle et un sens de fardeau peuvent être présents, surtout si un partenaire a des schémas émotionnels non résolus.',
    },
    marriageOutlook: {
      en: 'Marriage may feel like a test. Health (physical or emotional) often becomes a central concern. Requires emotional maturity and calm.',
      fr: 'Le mariage peut sembler une épreuve. La santé (physique ou émotionnelle) devient souvent une préoccupation centrale. Nécessite maturité émotionnelle et calme.',
    },
    watchOut: {
      en: 'Burnout, neglecting physical or mental wellbeing, and resentment building from unspoken burdens.',
      fr: 'Épuisement, négligence du bien-être physique ou mental, et ressentiment accumulé par des fardeaux non exprimés.',
    },
    keyToSuccess: {
      en: 'Focus on health (physical and emotional), emotional maturity, calm daily routines, and seeking therapeutic support when needed.',
      fr: 'Se concentrer sur la santé (physique et émotionnelle), maturité émotionnelle, routines quotidiennes calmes et rechercher un soutien thérapeutique si nécessaire.',
    },
  },
  5: {
    number: 5,
    severity: 'green',
    tags: [
      { en: 'Blessed', fr: 'Béni' },
      { en: 'Growth', fr: 'Croissance' },
      { en: 'Gratitude', fr: 'Gratitude' },
    ],
    title: { en: 'The Blessed Path', fr: 'Le Chemin Béni' },
    oneLine: {
      en: 'Traditionally blessed; harmony and growth',
      fr: 'Traditionnellement béni ; harmonie et croissance',
    },
    meaning: {
      en: 'Traditionally considered very favorable. Associated with blessing, natural harmony, children, and spiritual growth. Balance and abundance may flow more easily.',
      fr: "Traditionnellement considéré comme très favorable. Associé à la bénédiction, l'harmonie naturelle, les enfants et la croissance spirituelle. L'équilibre et l'abondance peuvent couler plus facilement.",
    },
    marriageOutlook: {
      en: 'Marriage is traditionally blessed. Harmony, children, and shared spiritual life are often supported. Guard against excess and distraction.',
      fr: "Le mariage est traditionnellement béni. L'harmonie, les enfants et la vie spirituelle partagée sont souvent soutenus. Gardez-vous contre l'excès et la distraction.",
    },
    watchOut: {
      en: 'Distraction from blessings, excess in comfort, and taking abundance for granted.',
      fr: 'Distraction des bénédictions, excès dans le confort et tenir l\'abondance pour acquise.',
    },
    keyToSuccess: {
      en: 'Gratitude practices, structured spiritual life together, and using blessings to support others.',
      fr: 'Pratiques de gratitude, vie spirituelle structurée ensemble et utiliser les bénédictions pour soutenir les autres.',
    },
  },
  6: {
    number: 6,
    severity: 'red',
    tags: [
      { en: 'Trial', fr: 'Épreuve' },
      { en: 'Forgiveness', fr: 'Pardon' },
      { en: 'Self-work', fr: 'Travail sur soi' },
    ],
    title: { en: 'The Trial Path', fr: "Le Chemin d'Épreuve" },
    oneLine: {
      en: 'Quarrels and ego tests',
      fr: "Querelles et tests d'ego",
    },
    meaning: {
      en: 'This pattern traditionally shows recurring quarrels and discord. Tests of anger, pride, and ego are common. Patterns may repeat until inner work is done.',
      fr: 'Ce motif montre traditionnellement des querelles récurrentes et de la discorde. Des tests de colère, d\'orgueil et d\'ego sont courants. Les schémas peuvent se répéter jusqu\'à ce que le travail intérieur soit fait.',
    },
    marriageOutlook: {
      en: 'Marriage often involves power struggles and repeated conflicts. Both partners must work on self-awareness and forgiveness.',
      fr: 'Le mariage implique souvent des luttes de pouvoir et des conflits répétés. Les deux partenaires doivent travailler sur la conscience de soi et le pardon.',
    },
    watchOut: {
      en: 'Power struggles, recurring arguments, and cycles of blame. Pride and unresolved anger amplify friction.',
      fr: "Luttes de pouvoir, arguments récurrents et cycles de blâme. L'orgueil et la colère non résolue amplifient la friction.",
    },
    keyToSuccess: {
      en: 'Conflict resolution skills, self-work (especially anger and ego), forgiveness practices, and regular spiritual remembrance (dhikr).',
      fr: 'Compétences en résolution de conflits, travail sur soi (surtout colère et ego), pratiques de pardon et rappel spirituel régulier (dhikr).',
    },
  },
  7: {
    number: 7,
    severity: 'green',
    tags: [
      { en: 'Chosen', fr: 'Choisi' },
      { en: 'Blessed', fr: 'Béni' },
      { en: 'Alignment', fr: 'Alignement' },
    ],
    title: { en: 'The Chosen Path', fr: 'Le Chemin Choisi' },
    oneLine: {
      en: 'Traditionally best; blessings after obstacles',
      fr: 'Traditionnellement le meilleur ; bénédictions après obstacles',
    },
    meaning: {
      en: 'Traditionally considered the most favorable for marriage. May face obstacles before union, but strong blessings and alignment often follow. Spiritual harmony is deep.',
      fr: "Traditionnellement considéré comme le plus favorable au mariage. Peut faire face à des obstacles avant l'union, mais de fortes bénédictions et un alignement suivent souvent. L'harmonie spirituelle est profonde.",
    },
    marriageOutlook: {
      en: 'Marriage is traditionally highly blessed. Challenges before union often make the bond stronger. This path carries spiritual favor.',
      fr: "Le mariage est traditionnellement très béni. Les défis avant l'union renforcent souvent le lien. Ce chemin porte une faveur spirituelle.",
    },
    watchOut: {
      en: 'Pride in the blessing, external interference before union, and assuming ease means no effort is needed.',
      fr: "Orgueil dans la bénédiction, interférence externe avant l'union et supposer que la facilité signifie qu'aucun effort n'est nécessaire.",
    },
    keyToSuccess: {
      en: 'Humility, trust in divine timing, gratitude, and alignment in spiritual values.',
      fr: 'Humilité, confiance dans le timing divin, gratitude et alignement dans les valeurs spirituelles.',
    },
  },
  8: {
    number: 8,
    severity: 'green',
    tags: [
      { en: 'Patience', fr: 'Patience' },
      { en: 'Long-term', fr: 'Long terme' },
      { en: 'Wisdom', fr: 'Sagesse' },
    ],
    title: { en: 'The Path of Patience', fr: 'Le Chemin de Patience' },
    oneLine: {
      en: 'Very good long-term; early struggles',
      fr: 'Très bon à long terme ; luttes initiales',
    },
    meaning: {
      en: 'This pattern is traditionally very good for the long term, but early misunderstandings are common. Patience (sabr) transforms this into a strong, enduring bond.',
      fr: 'Ce motif est traditionnellement très bon à long terme, mais les malentendus précoces sont courants. La patience (sabr) transforme cela en un lien fort et durable.',
    },
    marriageOutlook: {
      en: "Marriage starts with confusion or misjudgment but becomes very strong over time. Patience is the key to unlocking this bond's strength.",
      fr: 'Le mariage commence avec confusion ou mauvais jugement mais devient très fort avec le temps. La patience est la clé pour déverrouiller la force de ce lien.',
    },
    watchOut: {
      en: 'Judging the relationship too quickly in the beginning. Early friction may cause premature endings.',
      fr: 'Juger la relation trop rapidement au début. La friction précoce peut causer des fins prématurées.',
    },
    keyToSuccess: {
      en: 'Patience (sabr), emotional intelligence, gentle communication, and giving time for mutual understanding to deepen.',
      fr: 'Patience (sabr), intelligence émotionnelle, communication douce et donner du temps pour que la compréhension mutuelle s\'approfondisse.',
    },
  },
  9: {
    number: 9,
    severity: 'red',
    tags: [
      { en: 'Caution', fr: 'Prudence' },
      { en: 'Guidance', fr: 'Conseil' },
      { en: 'Protection', fr: 'Protection' },
    ],
    title: { en: 'The Severed Path', fr: 'Le Chemin Rompu' },
    oneLine: {
      en: 'Traditionally warned against',
      fr: 'Traditionnellement déconseillé',
    },
    meaning: {
      en: 'Traditionally warned against for binding marriage. Associated with severe hardship, sudden breaks, and recurring harm patterns. Requires extreme caution and guidance.',
      fr: 'Traditionnellement déconseillé pour le mariage contraignant. Associé à des difficultés sévères, des ruptures soudaines et des schémas de préjudice récurrents. Nécessite une extrême prudence et des conseils.',
    },
    marriageOutlook: {
      en: 'Marriage is traditionally discouraged under this pattern. If already in this bond, increase spiritual protection practices and seek wise counsel.',
      fr: 'Le mariage est traditionnellement découragé sous ce motif. Si déjà dans ce lien, augmentez les pratiques de protection spirituelle et cherchez un conseil avisé.',
    },
    watchOut: {
      en: 'Sudden separations, recurring harm cycles, and patterns that repeat despite efforts. This path requires vigilance.',
      fr: 'Séparations soudaines, cycles de préjudice récurrents et schémas qui se répètent malgré les efforts. Ce chemin nécessite vigilance.',
    },
    keyToSuccess: {
      en: 'Do not panic if this appears. Seek counsel from trusted spiritual guides. If already bound, increase protection practices (duʿāʾ, charity, guidance). Avoid fatalistic thinking — free will and divine mercy remain.',
      fr: "Ne paniquez pas si cela apparaît. Cherchez conseil auprès de guides spirituels de confiance. Si déjà lié, augmentez les pratiques de protection (duʿāʾ, charité, conseil). Évitez la pensée fataliste — le libre arbitre et la miséricorde divine demeurent.",
    },
  },
};

export const SOUL_CONNECTION_SEVERITY_COLOR: Record<SoulConnectionSeverity, string> = {
  green: '#22c55e',
  amber: '#f59e0b',
  red: '#ef4444',
};

export function getSoulConnectionSeverity(soulNumber: number): SoulConnectionSeverity {
  for (const [severity, numbers] of Object.entries(SOUL_CONNECTION_SEVERITY_GROUPS) as [SoulConnectionSeverity, number[]][]) {
    if (numbers.includes(soulNumber)) return severity;
  }
  // Should be unreachable — every 1-9 value is covered above — but keep a
  // safe fallback rather than throwing on an unexpected input.
  return 'amber';
}
