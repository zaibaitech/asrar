/**
 * Soul Connection (Spiritual-Destiny, mod-9) archetype content — the core
 * identity fields (title, oneLine, tags, severity, watchOut, keyToSuccess)
 * were ported verbatim from asrar-mobile's constants/translations.ts
 * `soul.archetypes` block (marriage context), NOT from the older numeric
 * scoreMap that used to live in relationshipCompatibility.ts. These stay
 * constant across contexts — they describe the number's fundamental
 * nature and don't reference any one relationship type.
 *
 * `meaning` and `outlook` are both per-context (universal/marriage/
 * friendship/family/work) and are original content written for the web
 * app — the mobile source only had the marriage framing.
 * `meaning.marriage` / `outlook.marriage` reproduce that ported text
 * (lightly reworded where it hardcoded the word "marriage" so the field
 * reads correctly when accessed under its own key); the other four
 * contexts recast the same underlying archetype for that relationship
 * type. Earlier versions had a single shared `meaning` string that still
 * said "marriage" regardless of the selected context — this fixes that.
 *
 * English and French text for the ported fields is copied verbatim from
 * the mobile source. Arabic does not exist there (confirmed by exhaustive
 * search of the mobile repo's translations.ts) — omitted here rather than
 * invented, per explicit user direction. Do not add Arabic strings to this
 * file without a real source.
 */

export type SoulConnectionSeverity = 'green' | 'amber' | 'red';

export type RelationshipContext = 'universal' | 'marriage' | 'friendship' | 'family' | 'work';

export interface RelationshipContextConfig {
  id: RelationshipContext;
  icon: string;
  label: { en: string; fr: string };
}

/** Selector config for the context switcher shown on the Soul Connection result. */
export const RELATIONSHIP_CONTEXTS: RelationshipContextConfig[] = [
  { id: 'universal', icon: '✨', label: { en: 'Universal', fr: 'Universel' } },
  { id: 'marriage', icon: '💍', label: { en: 'Marriage', fr: 'Mariage' } },
  { id: 'friendship', icon: '🤝', label: { en: 'Friendship', fr: 'Amitié' } },
  { id: 'family', icon: '👪', label: { en: 'Family', fr: 'Famille' } },
  { id: 'work', icon: '💼', label: { en: 'Work', fr: 'Travail' } },
];

/** Section label shown above the outlook text, per context. */
export const RELATIONSHIP_CONTEXT_OUTLOOK_LABEL: Record<RelationshipContext, { en: string; fr: string }> = {
  universal: { en: 'Outlook', fr: 'Perspective' },
  marriage: { en: 'Marriage Outlook', fr: 'Perspective du Mariage' },
  friendship: { en: 'Friendship Outlook', fr: "Perspective de l'Amitié" },
  family: { en: 'Family Outlook', fr: 'Perspective Familiale' },
  work: { en: 'Work Outlook', fr: 'Perspective Professionnelle' },
};

export interface SoulConnectionArchetype {
  number: number; // 1-9
  severity: SoulConnectionSeverity;
  tags: { en: string; fr: string }[];
  title: { en: string; fr: string };
  oneLine: { en: string; fr: string };
  meaning: Record<RelationshipContext, { en: string; fr: string }>;
  outlook: Record<RelationshipContext, { en: string; fr: string }>;
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
      universal: {
        en: 'This pattern traditionally shows an easy, comfortable beginning that can settle into stagnation if never renewed.',
        fr: "Ce motif montre traditionnellement un début facile et confortable qui peut s'installer dans la stagnation s'il n'est jamais renouvelé.",
      },
      marriage: {
        en: 'This pattern traditionally shows an easy beginning that may later feel stagnant, especially in growth and shared provision.',
        fr: "Ce motif montre traditionnellement un début facile qui peut plus tard sembler stagnant, surtout en croissance et provision partagée.",
      },
      friendship: {
        en: 'This pattern traditionally shows a friendship that starts with natural ease but can quietly stagnate without renewal.',
        fr: "Ce motif montre traditionnellement une amitié qui commence avec une aisance naturelle mais peut stagner discrètement sans renouvellement.",
      },
      family: {
        en: 'This pattern traditionally shows family closeness that begins easily but can fade into distance without active care.',
        fr: "Ce motif montre traditionnellement une proximité familiale qui commence facilement mais peut s'estomper en distance sans attention active.",
      },
      work: {
        en: 'This pattern traditionally shows a working relationship that starts smoothly but can plateau without new goals.',
        fr: "Ce motif montre traditionnellement une relation de travail qui commence en douceur mais peut plafonner sans nouveaux objectifs.",
      },
    },
    outlook: {
      universal: {
        en: 'This connection often starts with ease and comfort, but can settle into routine if never renewed. Shared purpose and intentional effort keep it alive.',
        fr: "Ce lien commence souvent avec aisance et confort, mais peut s'installer dans la routine s'il n'est jamais renouvelé. Un but partagé et un effort intentionnel le maintiennent vivant.",
      },
      marriage: {
        en: 'Marriage may start smoothly but requires intentional renewal to avoid complacency. Focus on shared goals and gratitude practices.',
        fr: 'Le mariage peut commencer en douceur mais nécessite un renouvellement intentionnel pour éviter la complaisance. Concentrez-vous sur des objectifs partagés et des pratiques de gratitude.',
      },
      friendship: {
        en: 'Friendships under this pattern begin naturally and comfortably, but may drift into routine without shared activities or new experiences. Regular effort keeps the connection warm.',
        fr: "Les amitiés sous ce motif commencent naturellement et confortablement, mais peuvent glisser vers la routine sans activités partagées ou nouvelles expériences. Un effort régulier garde le lien chaleureux.",
      },
      family: {
        en: 'Family ties here tend to feel steady and dependable, though closeness can fade into distance if never actively nurtured. Checking in regularly keeps the bond warm.',
        fr: "Les liens familiaux ici tendent à sembler stables et fiables, bien que la proximité puisse s'estomper en distance si jamais entretenue activement. Prendre régulièrement des nouvelles garde le lien chaleureux.",
      },
      work: {
        en: 'Working relationships start smoothly and productively, but can grow stale without new goals or challenges. Revisit shared objectives regularly to avoid complacency.',
        fr: "Les relations de travail commencent en douceur et de manière productive, mais peuvent stagner sans nouveaux objectifs ou défis. Revisitez régulièrement les objectifs partagés pour éviter la complaisance.",
      },
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
      universal: {
        en: 'Traditionally considered a favorable pattern — natural cooperation and mutual understanding flow more easily than opposition.',
        fr: "Traditionnellement considéré comme un motif favorable — la coopération naturelle et la compréhension mutuelle coulent plus facilement que l'opposition.",
      },
      marriage: {
        en: 'Traditionally considered favorable for marriage. This pattern supports natural cooperation, companionship, and mutual understanding.',
        fr: "Traditionnellement considéré comme favorable au mariage. Ce motif soutient la coopération naturelle, la camaraderie et la compréhension mutuelle.",
      },
      friendship: {
        en: 'Traditionally considered a favorable pattern for friendship — ease, cooperation, and mutual understanding come naturally.',
        fr: "Traditionnellement considéré comme un motif favorable pour l'amitié — aisance, coopération et compréhension mutuelle viennent naturellement.",
      },
      family: {
        en: 'Traditionally considered a favorable pattern for family bonds — natural cooperation and understanding tend to prevail over conflict.',
        fr: "Traditionnellement considéré comme un motif favorable pour les liens familiaux — la coopération naturelle et la compréhension tendent à prévaloir sur le conflit.",
      },
      work: {
        en: 'Traditionally considered a favorable pattern for collaboration — natural cooperation and mutual understanding support the partnership.',
        fr: "Traditionnellement considéré comme un motif favorable pour la collaboration — la coopération naturelle et la compréhension mutuelle soutiennent le partenariat.",
      },
    },
    outlook: {
      universal: {
        en: 'This bond naturally supports cooperation and ease. Two people connected this way tend to understand each other quickly, though one may lean too heavily on the other.',
        fr: "Ce lien soutient naturellement la coopération et l'aisance. Deux personnes ainsi liées ont tendance à se comprendre rapidement, bien que l'une puisse trop s'appuyer sur l'autre.",
      },
      marriage: {
        en: 'Marriage is traditionally supported. Companionship and teamwork are natural strengths. Guard against dependency.',
        fr: 'Le mariage est traditionnellement soutenu. La camaraderie et le travail d\'équipe sont des forces naturelles. Gardez-vous contre la dépendance.',
      },
      friendship: {
        en: "A naturally easy, low-friction friendship — you tend to understand each other quickly and rarely clash. Watch that neither friend becomes overly reliant on the other.",
        fr: "Une amitié naturellement facile et peu conflictuelle — vous avez tendance à vous comprendre rapidement et vous vous heurtez rarement. Veillez à ce qu'aucun des deux amis ne devienne trop dépendant de l'autre.",
      },
      family: {
        en: 'Family members connected this way tend to get along with little friction and genuine mutual understanding. Encourage each other\'s independence alongside the closeness.',
        fr: "Les membres de la famille ainsi liés ont tendance à bien s'entendre avec peu de friction et une compréhension mutuelle sincère. Encouragez l'indépendance de chacun aux côtés de la proximité.",
      },
      work: {
        en: 'A cooperative, low-conflict working relationship where tasks divide naturally. Guard against one person carrying too much of the shared workload.',
        fr: "Une relation de travail coopérative et peu conflictuelle où les tâches se répartissent naturellement. Veillez à ce qu'une seule personne ne porte pas trop la charge de travail partagée.",
      },
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
      universal: {
        en: 'Traditionally associated with difficulty — tension, frequent disagreements, and pressure may arise, requiring patience and discipline.',
        fr: "Traditionnellement associé à la difficulté — tension, désaccords fréquents et pression peuvent surgir, nécessitant patience et discipline.",
      },
      marriage: {
        en: 'Traditionally associated with difficulty in marriage. Tension, frequent disagreements, and financial pressure may arise.',
        fr: "Traditionnellement associé à la difficulté dans le mariage. Des tensions, des désaccords fréquents et des pressions financières peuvent surgir.",
      },
      friendship: {
        en: 'Traditionally associated with difficulty — frequent small frictions and mismatched expectations may test the friendship.',
        fr: "Traditionnellement associé à la difficulté — de fréquentes petites frictions et des attentes mal alignées peuvent tester l'amitié.",
      },
      family: {
        en: 'Traditionally associated with difficulty — recurring tension, sometimes over responsibilities, may strain the family bond.',
        fr: "Traditionnellement associé à la difficulté — une tension récurrente, parfois liée aux responsabilités, peut tendre le lien familial.",
      },
      work: {
        en: 'Traditionally associated with difficulty — friction over resources, deadlines, or decisions may strain the partnership.',
        fr: "Traditionnellement associé à la difficulté — des frictions sur les ressources, les délais ou les décisions peuvent tendre le partenariat.",
      },
    },
    outlook: {
      universal: {
        en: 'This connection often carries tension and frequent friction. Patience and structure are needed to keep disagreements from escalating.',
        fr: "Ce lien porte souvent une tension et une friction fréquente. La patience et la structure sont nécessaires pour éviter que les désaccords ne s'intensifient.",
      },
      marriage: {
        en: 'Marriage may face continuous challenges. Strain in provision and emotional harmony often requires outside support and spiritual discipline.',
        fr: 'Le mariage peut faire face à des défis continus. La pression en provision et harmonie émotionnelle nécessite souvent un soutien extérieur et une discipline spirituelle.',
      },
      friendship: {
        en: 'Friendships under this pattern can feel effortful — frequent small disagreements and mismatched expectations are common. The bond can hold, but needs conscious care.',
        fr: "Les amitiés sous ce motif peuvent sembler exigeantes en effort — de fréquents petits désaccords et des attentes mal alignées sont courants. Le lien peut tenir, mais demande une attention consciente.",
      },
      family: {
        en: 'Family ties here often carry recurring tension, sometimes over money or responsibilities. Structure, patience, and outside support help ease the strain.',
        fr: "Les liens familiaux ici portent souvent une tension récurrente, parfois liée à l'argent ou aux responsabilités. Structure, patience et soutien extérieur aident à apaiser la pression.",
      },
      work: {
        en: 'Professional partnerships under this pattern often hit friction over resources, deadlines, or decisions. Clear agreements and structured communication reduce the strain.',
        fr: "Les partenariats professionnels sous ce motif rencontrent souvent des frictions concernant les ressources, les délais ou les décisions. Des accords clairs et une communication structurée réduisent la pression.",
      },
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
      universal: {
        en: 'Traditionally seen as a heavy pattern — health concerns and emotional strain may be present, especially without emotional maturity.',
        fr: "Traditionnellement vu comme un motif lourd — des préoccupations de santé et une pression émotionnelle peuvent être présentes, surtout sans maturité émotionnelle.",
      },
      marriage: {
        en: 'Traditionally seen as a heavy path for marriage. Health concerns and emotional strain may be present.',
        fr: "Traditionnellement vu comme un chemin lourd pour le mariage. Des préoccupations de santé et une pression émotionnelle peuvent être présentes.",
      },
      friendship: {
        en: "Traditionally seen as a heavy pattern — one friend's stress or unresolved struggles may surface within the bond.",
        fr: "Traditionnellement vu comme un motif lourd — le stress ou les luttes non résolues d'un ami peuvent surgir au sein du lien.",
      },
      family: {
        en: 'Traditionally seen as a heavy pattern — caretaking or shared hardship, often tied to health, may mark the family bond.',
        fr: "Traditionnellement vu comme un motif lourd — des soins ou une épreuve partagée, souvent liés à la santé, peuvent marquer le lien familial.",
      },
      work: {
        en: 'Traditionally seen as a heavy pattern — stress or burnout risk may surface within the working relationship.',
        fr: "Traditionnellement vu comme un motif lourd — un risque de stress ou d'épuisement peut surgir au sein de la relation de travail.",
      },
    },
    outlook: {
      universal: {
        en: 'This bond often carries a sense of weight — health, stress, or emotional burden tend to surface. Maturity and calm help carry it well.',
        fr: "Ce lien porte souvent un sentiment de poids — santé, stress ou fardeau émotionnel ont tendance à surgir. Maturité et calme aident à bien le porter.",
      },
      marriage: {
        en: 'Marriage may feel like a test. Health (physical or emotional) often becomes a central concern. Requires emotional maturity and calm.',
        fr: 'Le mariage peut sembler une épreuve. La santé (physique ou émotionnelle) devient souvent une préoccupation centrale. Nécessite maturité émotionnelle et calme.',
      },
      friendship: {
        en: 'Friendships here can feel heavy at times, often surfacing one person\'s stress or unresolved struggles. Steady, patient support matters more than constant closeness.',
        fr: "Les amitiés ici peuvent parfois sembler lourdes, faisant souvent surgir le stress ou les luttes non résolues de l'un des deux. Un soutien stable et patient compte plus qu'une proximité constante.",
      },
      family: {
        en: 'Family bonds under this pattern often involve caretaking or shared hardship — health concerns are common threads. Calm routines and honest communication ease the load.',
        fr: "Les liens familiaux sous ce motif impliquent souvent des soins ou une épreuve partagée — les préoccupations de santé sont un fil conducteur commun. Des routines calmes et une communication honnête allègent la charge.",
      },
      work: {
        en: 'Working relationships here can feel draining, with stress or burnout as recurring risks. Clear boundaries and realistic workloads protect the partnership.',
        fr: "Les relations de travail ici peuvent sembler épuisantes, le stress ou l'épuisement professionnel étant des risques récurrents. Des limites claires et une charge de travail réaliste protègent le partenariat.",
      },
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
      universal: {
        en: 'Traditionally considered very favorable — blessing, natural harmony, and growth tend to flow more easily.',
        fr: "Traditionnellement considéré comme très favorable — bénédiction, harmonie naturelle et croissance ont tendance à couler plus facilement.",
      },
      marriage: {
        en: 'Traditionally considered very favorable for marriage. Associated with blessing, natural harmony, children, and spiritual growth.',
        fr: "Traditionnellement considéré comme très favorable au mariage. Associé à la bénédiction, l'harmonie naturelle, les enfants et la croissance spirituelle.",
      },
      friendship: {
        en: 'Traditionally considered very favorable — trust, harmony, and mutual growth tend to flow naturally in this friendship.',
        fr: "Traditionnellement considéré comme très favorable — confiance, harmonie et croissance mutuelle ont tendance à couler naturellement dans cette amitié.",
      },
      family: {
        en: 'Traditionally considered very favorable — warmth, harmony, and shared growth tend to mark this family bond.',
        fr: "Traditionnellement considéré comme très favorable — chaleur, harmonie et croissance partagée ont tendance à marquer ce lien familial.",
      },
      work: {
        en: 'Traditionally considered very favorable — harmony and productive growth tend to flow naturally in this partnership.',
        fr: "Traditionnellement considéré comme très favorable — harmonie et croissance productive ont tendance à couler naturellement dans ce partenariat.",
      },
    },
    outlook: {
      universal: {
        en: 'This connection is traditionally favorable — harmony, growth, and ease tend to flow naturally between the two. Gratitude keeps the blessing from being taken for granted.',
        fr: "Ce lien est traditionnellement favorable — harmonie, croissance et aisance ont tendance à couler naturellement entre les deux. La gratitude évite que la bénédiction ne soit tenue pour acquise.",
      },
      marriage: {
        en: 'Marriage is traditionally blessed. Harmony, children, and shared spiritual life are often supported. Guard against excess and distraction.',
        fr: "Le mariage est traditionnellement béni. L'harmonie, les enfants et la vie spirituelle partagée sont souvent soutenus. Gardez-vous contre l'excès et la distraction.",
      },
      friendship: {
        en: 'A genuinely blessed friendship — trust, ease, and mutual growth come naturally. Keep showing up for each other so the bond doesn\'t drift into complacency.',
        fr: "Une amitié véritablement bénie — confiance, aisance et croissance mutuelle viennent naturellement. Continuez à être présents l'un pour l'autre pour que le lien ne glisse pas vers la complaisance.",
      },
      family: {
        en: 'Family ties here tend to be a source of real blessing — warmth, support, and shared growth. Nurture the bond actively rather than assuming it as given.',
        fr: "Les liens familiaux ici tendent à être une source de véritable bénédiction — chaleur, soutien et croissance partagée. Entretenez le lien activement plutôt que de le tenir pour acquis.",
      },
      work: {
        en: 'A productive, mutually beneficial working relationship where success tends to come naturally. Stay grounded and avoid overconfidence as things go well.',
        fr: "Une relation de travail productive et mutuellement bénéfique où le succès a tendance à venir naturellement. Restez ancré et évitez l'excès de confiance quand les choses vont bien.",
      },
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
      universal: {
        en: 'Traditionally shows recurring quarrels and discord — tests of anger, pride, and ego are common until inner work is done.',
        fr: "Montre traditionnellement des querelles récurrentes et de la discorde — des tests de colère, d'orgueil et d'ego sont courants jusqu'à ce que le travail intérieur soit fait.",
      },
      marriage: {
        en: 'Traditionally shows recurring quarrels and discord in marriage. Tests of anger, pride, and ego are common.',
        fr: "Montre traditionnellement des querelles récurrentes et de la discorde dans le mariage. Des tests de colère, d'orgueil et d'ego sont courants.",
      },
      friendship: {
        en: 'Traditionally shows recurring small quarrels — tests of pride and ego may repeat until self-awareness grows.',
        fr: "Montre traditionnellement de petites querelles récurrentes — des tests d'orgueil et d'ego peuvent se répéter jusqu'à ce que la conscience de soi grandisse.",
      },
      family: {
        en: 'Traditionally shows recurring discord — old patterns of pride and ego may resurface until addressed with forgiveness.',
        fr: "Montre traditionnellement une discorde récurrente — de vieux schémas d'orgueil et d'ego peuvent resurgir jusqu'à être abordés avec pardon.",
      },
      work: {
        en: 'Traditionally shows recurring friction — tests of ego and power may repeat until clear roles and respect are established.',
        fr: "Montre traditionnellement une friction récurrente — des tests d'ego et de pouvoir peuvent se répéter jusqu'à ce que des rôles clairs et le respect soient établis.",
      },
    },
    outlook: {
      universal: {
        en: 'This bond tends to surface recurring friction tied to pride and ego. Self-awareness on both sides is what breaks the cycle.',
        fr: "Ce lien tend à faire surgir une friction récurrente liée à l'orgueil et à l'ego. La conscience de soi des deux côtés est ce qui brise le cycle.",
      },
      marriage: {
        en: 'Marriage often involves power struggles and repeated conflicts. Both partners must work on self-awareness and forgiveness.',
        fr: 'Le mariage implique souvent des luttes de pouvoir et des conflits répétés. Les deux partenaires doivent travailler sur la conscience de soi et le pardon.',
      },
      friendship: {
        en: "Friendships here often involve repeated small conflicts, sometimes over who's 'right.' Letting go of ego keeps the friendship from wearing thin.",
        fr: "Les amitiés ici impliquent souvent des petits conflits répétés, parfois sur qui a « raison ». Lâcher l'ego évite que l'amitié ne s'use.",
      },
      family: {
        en: 'Family relationships under this pattern often carry old, recurring disagreements. Forgiveness and honest self-reflection are what finally shift the pattern.',
        fr: "Les relations familiales sous ce motif portent souvent de vieux désaccords récurrents. Le pardon et une réflexion honnête sur soi sont ce qui finit par changer le schéma.",
      },
      work: {
        en: 'Working relationships here can involve power struggles or clashing egos. Clear roles and mutual respect prevent recurring conflict.',
        fr: "Les relations de travail ici peuvent impliquer des luttes de pouvoir ou des egos qui s'affrontent. Des rôles clairs et un respect mutuel préviennent les conflits récurrents.",
      },
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
      universal: {
        en: 'Traditionally considered the most favorable of all patterns — early obstacles often give way to strong blessings and alignment.',
        fr: "Traditionnellement considéré comme le plus favorable de tous les motifs — les obstacles précoces cèdent souvent la place à de fortes bénédictions et un alignement.",
      },
      marriage: {
        en: 'Traditionally considered the most favorable for marriage. May face obstacles early on, but strong blessings and alignment often follow.',
        fr: "Traditionnellement considéré comme le plus favorable au mariage. Peut faire face à des obstacles précoces, mais de fortes bénédictions et un alignement suivent souvent.",
      },
      friendship: {
        en: 'Traditionally considered one of the most favorable patterns for friendship — early distance often resolves into deep loyalty.',
        fr: "Traditionnellement considéré comme l'un des motifs les plus favorables pour l'amitié — la distance précoce se résout souvent en une profonde loyauté.",
      },
      family: {
        en: 'Traditionally considered one of the most favorable patterns for family bonds — early difficulty often gives way to lasting depth.',
        fr: "Traditionnellement considéré comme l'un des motifs les plus favorables pour les liens familiaux — la difficulté précoce cède souvent la place à une profondeur durable.",
      },
      work: {
        en: 'Traditionally considered one of the most favorable patterns for partnership — early friction often resolves into a highly aligned collaboration.',
        fr: "Traditionnellement considéré comme l'un des motifs les plus favorables pour le partenariat — la friction précoce se résout souvent en une collaboration très alignée.",
      },
    },
    outlook: {
      universal: {
        en: 'Traditionally the most favorable connection — early obstacles often give way to a deep, aligned bond. Trust the process rather than forcing it.',
        fr: "Traditionnellement le lien le plus favorable — les obstacles précoces cèdent souvent la place à un lien profond et aligné. Faites confiance au processus plutôt que de le forcer.",
      },
      marriage: {
        en: 'Marriage is traditionally highly blessed. Challenges before union often make the bond stronger. This path carries spiritual favor.',
        fr: "Le mariage est traditionnellement très béni. Les défis avant l'union renforcent souvent le lien. Ce chemin porte une faveur spirituelle.",
      },
      friendship: {
        en: 'One of the strongest friendship patterns — any early distance or misunderstanding tends to resolve into a deeply loyal bond. Let it develop at its own pace.',
        fr: "L'un des motifs d'amitié les plus forts — toute distance ou malentendu précoce a tendance à se résoudre en un lien profondément loyal. Laissez-le se développer à son propre rythme.",
      },
      family: {
        en: 'Family bonds here often carry real depth, even if the relationship faced early distance or difficulty. What follows tends to be lasting and meaningful.',
        fr: "Les liens familiaux ici portent souvent une réelle profondeur, même si la relation a connu une distance ou une difficulté précoce. Ce qui suit tend à être durable et significatif.",
      },
      work: {
        en: 'A strong working alliance — early friction or slow starts often lead to a highly effective, trusted partnership. Give it time to align.',
        fr: "Une alliance de travail solide — les frictions précoces ou les débuts lents mènent souvent à un partenariat très efficace et de confiance. Donnez-lui le temps de s'aligner.",
      },
    },
    watchOut: {
      en: 'Pride in the blessing, external interference early on, and assuming ease means no effort is needed.',
      fr: "Orgueil dans la bénédiction, interférence externe précoce et supposer que la facilité signifie qu'aucun effort n'est nécessaire.",
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
      universal: {
        en: 'Traditionally very good for the long term, though early misunderstandings are common — patience transforms this into a strong bond.',
        fr: "Traditionnellement très bon à long terme, bien que les malentendus précoces soient courants — la patience transforme cela en un lien fort.",
      },
      marriage: {
        en: 'Traditionally very good for marriage over the long term, though early misunderstandings are common.',
        fr: "Traditionnellement très bon pour le mariage à long terme, bien que les malentendus précoces soient courants.",
      },
      friendship: {
        en: 'Traditionally very good for the long term — early awkwardness is common, but patience often builds a lasting friendship.',
        fr: "Traditionnellement très bon à long terme — la maladresse précoce est courante, mais la patience construit souvent une amitié durable.",
      },
      family: {
        en: 'Traditionally very good for the long term — early distance is common, but the family bond tends to deepen with time.',
        fr: "Traditionnellement très bon à long terme — la distance précoce est courante, mais le lien familial tend à s'approfondir avec le temps.",
      },
      work: {
        en: 'Traditionally very good for the long term — early friction is common, but patience often builds a highly reliable partnership.',
        fr: "Traditionnellement très bon à long terme — la friction précoce est courante, mais la patience construit souvent un partenariat très fiable.",
      },
    },
    outlook: {
      universal: {
        en: 'This connection often starts with confusion or misjudgment but strengthens significantly with time. Patience is what unlocks its real depth.',
        fr: "Ce lien commence souvent avec confusion ou mauvais jugement mais se renforce considérablement avec le temps. La patience est ce qui déverrouille sa véritable profondeur.",
      },
      marriage: {
        en: "Marriage starts with confusion or misjudgment but becomes very strong over time. Patience is the key to unlocking this bond's strength.",
        fr: 'Le mariage commence avec confusion ou mauvais jugement mais devient très fort avec le temps. La patience est la clé pour déverrouiller la force de ce lien.',
      },
      friendship: {
        en: "Friendships here can start awkwardly or take time to click, but often become some of the most enduring bonds. Don't judge it too early.",
        fr: "Les amitiés ici peuvent commencer maladroitement ou prendre du temps à s'installer, mais deviennent souvent parmi les liens les plus durables. Ne jugez pas trop tôt.",
      },
      family: {
        en: 'Family relationships under this pattern may start with distance or misunderstanding but tend to deepen meaningfully over the years. Give the bond time.',
        fr: "Les relations familiales sous ce motif peuvent commencer avec distance ou malentendu mais tendent à s'approfondir significativement au fil des années. Donnez du temps au lien.",
      },
      work: {
        en: 'Working relationships here often start rocky — mismatched expectations or slow trust-building — but tend to become highly reliable partnerships over time.',
        fr: "Les relations de travail ici commencent souvent difficilement — attentes mal alignées ou confiance lente à s'établir — mais tendent à devenir des partenariats très fiables avec le temps.",
      },
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
      universal: {
        en: 'Traditionally warned against for binding commitments — associated with severe hardship, sudden breaks, and recurring harm.',
        fr: "Traditionnellement déconseillé pour les engagements contraignants — associé à des difficultés sévères, des ruptures soudaines et des préjudices récurrents.",
      },
      marriage: {
        en: 'Traditionally warned against for marriage. Associated with severe hardship, sudden breaks, and recurring harm patterns.',
        fr: "Traditionnellement déconseillé pour le mariage. Associé à des difficultés sévères, des ruptures soudaines et des schémas de préjudice récurrents.",
      },
      friendship: {
        en: 'Traditionally warned against for close, binding friendship — sudden falling-outs and recurring hurt are associated risks.',
        fr: "Traditionnellement déconseillé pour une amitié proche et contraignante — ruptures soudaines et blessures récurrentes sont des risques associés.",
      },
      family: {
        en: 'Traditionally associated with real difficulty in family bonds — estrangement and recurring conflict are common risks.',
        fr: "Traditionnellement associé à une réelle difficulté dans les liens familiaux — éloignement et conflits récurrents sont des risques courants.",
      },
      work: {
        en: 'Traditionally warned against for binding partnership — sudden fallout and recurring breakdowns in trust are associated risks.',
        fr: "Traditionnellement déconseillé pour un partenariat contraignant — ruptures soudaines et effondrements récurrents de la confiance sont des risques associés.",
      },
    },
    outlook: {
      universal: {
        en: 'Traditionally a difficult pattern, associated with sudden breaks and recurring strain. Extreme caution and spiritual protection are advised.',
        fr: "Traditionnellement un motif difficile, associé à des ruptures soudaines et une pression récurrente. Une extrême prudence et une protection spirituelle sont conseillées.",
      },
      marriage: {
        en: 'Marriage is traditionally discouraged under this pattern. If already in this bond, increase spiritual protection practices and seek wise counsel.',
        fr: 'Le mariage est traditionnellement découragé sous ce motif. Si déjà dans ce lien, augmentez les pratiques de protection spirituelle et cherchez un conseil avisé.',
      },
      friendship: {
        en: "Friendships under this pattern can be prone to sudden falling-outs or repeated hurt. Approach with awareness, and don't ignore recurring red flags.",
        fr: "Les amitiés sous ce motif peuvent être sujettes à des ruptures soudaines ou des blessures répétées. Abordez-les avec conscience, et n'ignorez pas les signaux d'alarme récurrents.",
      },
      family: {
        en: 'Family ties here can carry real difficulty, including estrangement or repeated conflict. Seek wise counsel and increase protective practices rather than forcing closeness.',
        fr: "Les liens familiaux ici peuvent porter une réelle difficulté, y compris l'éloignement ou des conflits répétés. Cherchez un conseil avisé et augmentez les pratiques de protection plutôt que de forcer la proximité.",
      },
      work: {
        en: 'Professional partnerships under this pattern carry real risk — sudden fallout or repeated breakdowns in trust are common. Proceed with caution and clear agreements.',
        fr: "Les partenariats professionnels sous ce motif portent un risque réel — ruptures soudaines ou effondrements répétés de la confiance sont courants. Procédez avec prudence et des accords clairs.",
      },
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
