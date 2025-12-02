// 99 Names of Allah (Asmā' al-Ḥusnā) with Abjad Values
// Based on classical Islamic tradition and Ilm al-Huruf

export interface DivineName {
  number: number;
  arabic: string;
  transliteration: string;
  translation: {
    en: string;
    fr: string;
  };
  abjadValue: number;
  meaning: {
    en: string;
    fr: string;
  };
  spiritualPractice: {
    en: string;
    fr: string;
  };
  keywords: string[];
}

export const DIVINE_NAMES: DivineName[] = [
  {
    number: 1,
    arabic: "الرَّحْمَن",
    transliteration: "Ar-Raḥmān",
    translation: { en: "The Most Gracious", fr: "Le Tout Miséricordieux" },
    abjadValue: 298,
    meaning: {
      en: "The One whose mercy encompasses all creation, providing for all beings without exception.",
      fr: "Celui dont la miséricorde englobe toute la création, pourvoyant à tous les êtres sans exception."
    },
    spiritualPractice: {
      en: "Recite 100 times after Fajr to increase compassion and receive divine mercy.",
      fr: "Récitez 100 fois après Fajr pour augmenter la compassion et recevoir la miséricorde divine."
    },
    keywords: ["mercy", "compassion", "grace", "universal love"]
  },
  {
    number: 2,
    arabic: "الرَّحِيم",
    transliteration: "Ar-Raḥīm",
    translation: { en: "The Most Merciful", fr: "Le Très Miséricordieux" },
    abjadValue: 258,
    meaning: {
      en: "The One whose specific mercy is for believers, providing guidance and forgiveness.",
      fr: "Celui dont la miséricorde spécifique est pour les croyants, fournissant guidance et pardon."
    },
    spiritualPractice: {
      en: "Recite 100 times for seeking forgiveness and divine compassion in difficulties.",
      fr: "Récitez 100 fois pour chercher le pardon et la compassion divine dans les difficultés."
    },
    keywords: ["mercy", "forgiveness", "compassion", "loving"]
  },
  {
    number: 3,
    arabic: "الْمَلِك",
    transliteration: "Al-Malik",
    translation: { en: "The King", fr: "Le Roi" },
    abjadValue: 90,
    meaning: {
      en: "The Sovereign Lord, Master of all dominion, to whom all authority belongs.",
      fr: "Le Seigneur Souverain, Maître de tout pouvoir, à qui appartient toute autorité."
    },
    spiritualPractice: {
      en: "Recite frequently to gain respect and authority in righteous matters.",
      fr: "Récitez fréquemment pour gagner respect et autorité dans les affaires justes."
    },
    keywords: ["sovereignty", "kingship", "dominion", "authority"]
  },
  {
    number: 4,
    arabic: "الْقُدُّوس",
    transliteration: "Al-Quddūs",
    translation: { en: "The Most Holy", fr: "Le Très Saint" },
    abjadValue: 170,
    meaning: {
      en: "The Absolutely Pure, free from any defect or imperfection, transcendent above all creation.",
      fr: "L'Absolument Pur, exempt de tout défaut ou imperfection, transcendant au-dessus de toute création."
    },
    spiritualPractice: {
      en: "Recite for spiritual purification and protection from negative influences.",
      fr: "Récitez pour la purification spirituelle et la protection contre les influences négatives."
    },
    keywords: ["holiness", "purity", "transcendence", "perfection"]
  },
  {
    number: 5,
    arabic: "السَّلَام",
    transliteration: "As-Salām",
    translation: { en: "The Source of Peace", fr: "La Source de Paix" },
    abjadValue: 131,
    meaning: {
      en: "The Bestower of peace and security, free from all defects and flaws.",
      fr: "Le Dispensateur de paix et de sécurité, exempt de tous défauts et imperfections."
    },
    spiritualPractice: {
      en: "Recite 160 times for inner peace and protection from harm.",
      fr: "Récitez 160 fois pour la paix intérieure et la protection contre le mal."
    },
    keywords: ["peace", "safety", "security", "tranquility"]
  },
  {
    number: 6,
    arabic: "الْمُؤْمِن",
    transliteration: "Al-Mu'min",
    translation: { en: "The Granter of Security", fr: "Le Donneur de Sécurité" },
    abjadValue: 136,
    meaning: {
      en: "The One who grants faith and security, removing fear from the hearts of believers.",
      fr: "Celui qui accorde la foi et la sécurité, enlevant la peur des cœurs des croyants."
    },
    spiritualPractice: {
      en: "Recite for protection from fear and to strengthen faith.",
      fr: "Récitez pour la protection contre la peur et pour renforcer la foi."
    },
    keywords: ["faith", "security", "trust", "protection"]
  },
  {
    number: 7,
    arabic: "الْمُهَيْمِن",
    transliteration: "Al-Muhaymin",
    translation: { en: "The Guardian", fr: "Le Gardien" },
    abjadValue: 145,
    meaning: {
      en: "The Protector and Overseer who witnesses all things and guards His creation.",
      fr: "Le Protecteur et Surveillant qui témoigne de toutes choses et garde Sa création."
    },
    spiritualPractice: {
      en: "Recite for divine protection and to overcome fear of creation.",
      fr: "Récitez pour la protection divine et pour surmonter la peur de la création."
    },
    keywords: ["guardian", "protector", "overseer", "witness"]
  },
  {
    number: 8,
    arabic: "الْعَزِيز",
    transliteration: "Al-'Azīz",
    translation: { en: "The Almighty", fr: "Le Tout-Puissant" },
    abjadValue: 94,
    meaning: {
      en: "The Invincible and Dominant One, whom nothing can overcome or defeat.",
      fr: "L'Invincible et Dominant, que rien ne peut vaincre ou défaire."
    },
    spiritualPractice: {
      en: "Recite 40 times after Fajr for gaining strength and overcoming difficulties.",
      fr: "Récitez 40 fois après Fajr pour gagner force et surmonter les difficultés."
    },
    keywords: ["might", "power", "strength", "invincibility"]
  },
  {
    number: 9,
    arabic: "الْجَبَّار",
    transliteration: "Al-Jabbār",
    translation: { en: "The Compeller", fr: "Le Contraignant" },
    abjadValue: 206,
    meaning: {
      en: "The Irresistible One who repairs what is broken and compels all to His will.",
      fr: "L'Irrésistible qui répare ce qui est brisé et contraint tous à Sa volonté."
    },
    spiritualPractice: {
      en: "Recite for healing of physical and spiritual ailments, and mending broken matters.",
      fr: "Récitez pour la guérison des maux physiques et spirituels, et la réparation des affaires brisées."
    },
    keywords: ["compeller", "restorer", "healer", "irresistible"]
  },
  {
    number: 10,
    arabic: "الْمُتَكَبِّر",
    transliteration: "Al-Mutakabbir",
    translation: { en: "The Supreme", fr: "Le Suprême" },
    abjadValue: 662,
    meaning: {
      en: "The One who is supremely great, above all creation in majesty and glory.",
      fr: "Celui qui est suprêmement grand, au-dessus de toute création en majesté et gloire."
    },
    spiritualPractice: {
      en: "Recite to humble the ego and recognize divine supremacy.",
      fr: "Récitez pour humilier l'ego et reconnaître la suprématie divine."
    },
    keywords: ["supreme", "majestic", "great", "transcendent"]
  },
  {
    number: 11,
    arabic: "الْخَالِق",
    transliteration: "Al-Khāliq",
    translation: { en: "The Creator", fr: "Le Créateur" },
    abjadValue: 731,
    meaning: {
      en: "The One who brings everything into existence from non-existence according to perfect measure.",
      fr: "Celui qui fait passer toute chose de la non-existence à l'existence selon une mesure parfaite."
    },
    spiritualPractice: {
      en: "Recite for creativity, bringing new blessings, and for women seeking children.",
      fr: "Récitez pour la créativité, l'apport de nouvelles bénédictions, et pour les femmes cherchant des enfants."
    },
    keywords: ["creator", "originator", "maker", "creation"]
  },
  {
    number: 12,
    arabic: "الْبَارِئ",
    transliteration: "Al-Bāri'",
    translation: { en: "The Evolver", fr: "L'Évoluteur" },
    abjadValue: 213,
    meaning: {
      en: "The One who evolves and shapes creation, bringing order from chaos.",
      fr: "Celui qui fait évoluer et façonne la création, apportant l'ordre du chaos."
    },
    spiritualPractice: {
      en: "Recite for bringing order to chaotic situations and personal transformation.",
      fr: "Récitez pour apporter l'ordre aux situations chaotiques et la transformation personnelle."
    },
    keywords: ["evolver", "shaper", "developer", "order"]
  },
  {
    number: 13,
    arabic: "الْمُصَوِّر",
    transliteration: "Al-Muṣawwir",
    translation: { en: "The Fashioner", fr: "Le Façonneur" },
    abjadValue: 336,
    meaning: {
      en: "The One who shapes and forms creation in perfect harmony and beauty.",
      fr: "Celui qui modèle et forme la création en parfaite harmonie et beauté."
    },
    spiritualPractice: {
      en: "Recite for beauty in character and for pregnant women for a beautiful healthy child.",
      fr: "Récitez pour la beauté du caractère et pour les femmes enceintes pour un bel enfant en bonne santé."
    },
    keywords: ["fashioner", "designer", "form-giver", "beauty"]
  },
  {
    number: 14,
    arabic: "الْغَفَّار",
    transliteration: "Al-Ghaffār",
    translation: { en: "The Oft-Forgiving", fr: "Le Très Pardonneur" },
    abjadValue: 1281,
    meaning: {
      en: "The One who continuously forgives all sins for those who seek forgiveness with sincerity.",
      fr: "Celui qui pardonne continuellement tous les péchés à ceux qui cherchent le pardon avec sincérité."
    },
    spiritualPractice: {
      en: "Recite frequently for forgiveness of sins and purification of the heart.",
      fr: "Récitez fréquemment pour le pardon des péchés et la purification du cœur."
    },
    keywords: ["forgiveness", "pardon", "mercy", "absolution"]
  },
  {
    number: 15,
    arabic: "الْقَهَّار",
    transliteration: "Al-Qahhār",
    translation: { en: "The Subduer", fr: "Le Dominateur" },
    abjadValue: 306,
    meaning: {
      en: "The Irresistible One who has power over all things and subdues all creation.",
      fr: "L'Irrésistible qui a pouvoir sur toutes choses et soumet toute création."
    },
    spiritualPractice: {
      en: "Recite for overcoming enemies and subduing the nafs (ego).",
      fr: "Récitez pour vaincre les ennemis et soumettre le nafs (ego)."
    },
    keywords: ["subduer", "dominant", "conqueror", "overwhelming"]
  },
  {
    number: 16,
    arabic: "الْوَهَّاب",
    transliteration: "Al-Wahhāb",
    translation: { en: "The Bestower", fr: "Le Donneur" },
    abjadValue: 14,
    meaning: {
      en: "The One who continuously bestows gifts and blessings without expecting return.",
      fr: "Celui qui accorde continuellement des dons et des bénédictions sans attendre de retour."
    },
    spiritualPractice: {
      en: "Recite 40 times after Fajr for increase in provision and blessings.",
      fr: "Récitez 40 fois après Fajr pour l'augmentation de la subsistance et des bénédictions."
    },
    keywords: ["bestower", "giver", "generous", "gifts"]
  },
  {
    number: 17,
    arabic: "الرَّزَّاق",
    transliteration: "Ar-Razzāq",
    translation: { en: "The Provider", fr: "Le Pourvoyeur" },
    abjadValue: 308,
    meaning: {
      en: "The One who provides all sustenance, both material and spiritual, to all creation.",
      fr: "Celui qui fournit toute subsistance, matérielle et spirituelle, à toute création."
    },
    spiritualPractice: {
      en: "Recite 308 times for provision and to remove poverty.",
      fr: "Récitez 308 fois pour la subsistance et pour éliminer la pauvreté."
    },
    keywords: ["provider", "sustainer", "provision", "rizq"]
  },
  {
    number: 18,
    arabic: "الْفَتَّاح",
    transliteration: "Al-Fattāḥ",
    translation: { en: "The Opener", fr: "L'Ouvreur" },
    abjadValue: 489,
    meaning: {
      en: "The One who opens doors of opportunity, knowledge, and divine understanding.",
      fr: "Celui qui ouvre les portes d'opportunité, de connaissance et de compréhension divine."
    },
    spiritualPractice: {
      en: "Recite for opening of closed doors, both worldly and spiritual.",
      fr: "Récitez pour l'ouverture des portes fermées, mondaines et spirituelles."
    },
    keywords: ["opener", "revealer", "victory", "success"]
  },
  {
    number: 19,
    arabic: "الْعَلِيم",
    transliteration: "Al-'Alīm",
    translation: { en: "The All-Knowing", fr: "Le Très Savant" },
    abjadValue: 150,
    meaning: {
      en: "The One whose knowledge encompasses all things, past, present, and future.",
      fr: "Celui dont la connaissance englobe toutes choses, passé, présent et futur."
    },
    spiritualPractice: {
      en: "Recite for increase in knowledge and understanding of divine wisdom.",
      fr: "Récitez pour l'augmentation de la connaissance et la compréhension de la sagesse divine."
    },
    keywords: ["knowledge", "all-knowing", "omniscient", "wisdom"]
  },
  {
    number: 20,
    arabic: "الْقَابِض",
    transliteration: "Al-Qābiḍ",
    translation: { en: "The Withholder", fr: "Le Restricteur" },
    abjadValue: 903,
    meaning: {
      en: "The One who withholds and constricts, testing through difficulty and scarcity.",
      fr: "Celui qui retient et restreint, éprouvant par la difficulté et la rareté."
    },
    spiritualPractice: {
      en: "Recite with Al-Bāsiṭ for balance in giving and withholding.",
      fr: "Récitez avec Al-Bāsiṭ pour l'équilibre entre donner et retenir."
    },
    keywords: ["withholder", "constrictor", "testing", "patience"]
  }
];

// Helper functions
export function findDivineNameByValue(value: number): DivineName | undefined {
  return DIVINE_NAMES.find(name => name.abjadValue === value);
}

export function findSimilarDivineNames(value: number, tolerance: number = 20): DivineName[] {
  return DIVINE_NAMES
    .filter(name => Math.abs(name.abjadValue - value) <= tolerance)
    .sort((a, b) => Math.abs(a.abjadValue - value) - Math.abs(b.abjadValue - value));
}

export function searchDivineNamesByKeyword(keyword: string): DivineName[] {
  const lower = keyword.toLowerCase();
  return DIVINE_NAMES.filter(name =>
    name.keywords.some(k => k.includes(lower)) ||
    name.transliteration.toLowerCase().includes(lower) ||
    name.translation.en.toLowerCase().includes(lower) ||
    name.translation.fr.toLowerCase().includes(lower)
  );
}

// Note: This is the first 20 names. The full 99 names can be added progressively.
// The database is designed to be easily extensible.
