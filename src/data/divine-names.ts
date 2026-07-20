// 99 Names of Allah (Asmā' al-Ḥusnā) with Abjad Values
// Based on classical Islamic tradition and Ilm al-Huruf
//
// Arabic text and order verified against the AlAdhan API's asmaAlHusna
// endpoint (widely-used compilation drawn from the hadith of al-Walid in
// Jāmiʿ at-Tirmidhi, no. 3507). Abjad values were computed programmatically
// (drop the leading "ال" definite article, sum root letters via the
// standard Mashriqi table, hamza-seated letters counted by their seat —
// ؤ as و, ئ as ي, أ/إ/آ as ا) and cross-checked against every value already
// established elsewhere in this codebase (e.g. src/lib/planetary/
// practice-hints.ts's PLANET_DHIKR counts) plus all values already present
// in this file before extension — zero mismatches. #84 and #85 are
// multi-word compound Names (Mālik al-Mulk, Dhū al-Jalāli wa al-Ikrām) and
// keep their full literal spelling rather than dropping an embedded "ال",
// since there is no single unambiguous prefix article to remove.
//
// Every spiritualPractice states the Name's own abjad value as the
// recitation count — the well-established ʿIlm al-Ḥurūf convention of
// reciting a Name according to its own numerical value (already the
// pattern this app uses elsewhere, e.g. Yā Laṭīf recited 129 times in
// practice-hints.ts). Six of the original 20 entries previously cited an
// unrelated round number (e.g. "100 times", "40 times") with no known
// source; normalized to their own abjad value for consistency rather than
// preserved as unverified alternates. practice-hints.ts's Yā Qawiyy=41 is
// a known, separately-documented exception (a shorter invocation form,
// not one of these 99 canonical Names) — kept as-is there, not ported here.
//
// Each entry also notes 33 or 99 repetitions as a shorter-practice
// alternative — the two most universal, well-documented tasbih counts
// across Sufi practice generally (33 = a third of a 99-bead tasbih, 99 =
// one full round), not attributed to any single Name or scholar. Researched
// but deliberately NOT included: a per-Name alternate-count table from a
// named scholar. Al-Ghazali's Al-Maqsad al-Asna (the definitive classical
// work on these 99 Names) teaches embodying each Name's meaning, not
// numeric wazifa counts. Imam ʿAbdullah ibn ʿAlawī al-Ḥaddād's Wird al-Laṭīf
// and Rātib al-Ḥaddād, and the Tijāniyyah "wazīfa" (this app's own declared
// West African lineage — see practice-hints.ts), are real and authentic but
// are fixed daily litanies, not a per-Name counting system. No verifiable,
// scholar-attributed table of alternate counts per Name was found.

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
      en: "Recite 298 times after Fajr to increase compassion and receive divine mercy. For a shorter practice, 33 or 99 repetitions is also a widely used count.",
      fr: "Récitez 298 fois après Fajr pour augmenter la compassion et recevoir la miséricorde divine. Pour une pratique plus courte, 33 ou 99 répétitions est également un compte largement utilisé."
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
      en: "Recite 258 times for seeking forgiveness and divine compassion in difficulties. For a shorter practice, 33 or 99 repetitions is also a widely used count.",
      fr: "Récitez 258 fois pour chercher le pardon et la compassion divine dans les difficultés. Pour une pratique plus courte, 33 ou 99 répétitions est également un compte largement utilisé."
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
      en: "Recite 90 times daily to gain respect and authority in righteous matters. For a shorter practice, 33 or 99 repetitions is also a widely used count.",
      fr: "Récitez 90 fois quotidiennement pour gagner respect et autorité dans les affaires justes. Pour une pratique plus courte, 33 ou 99 répétitions est également un compte largement utilisé."
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
      en: "Recite 170 times for spiritual purification and protection from negative influences. For a shorter practice, 33 or 99 repetitions is also a widely used count.",
      fr: "Récitez 170 fois pour la purification spirituelle et la protection contre les influences négatives. Pour une pratique plus courte, 33 ou 99 répétitions est également un compte largement utilisé."
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
      en: "Recite 131 times for inner peace and protection from harm. For a shorter practice, 33 or 99 repetitions is also a widely used count.",
      fr: "Récitez 131 fois pour la paix intérieure et la protection contre le mal. Pour une pratique plus courte, 33 ou 99 répétitions est également un compte largement utilisé."
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
      en: "Recite 136 times for protection from fear and to strengthen faith. For a shorter practice, 33 or 99 repetitions is also a widely used count.",
      fr: "Récitez 136 fois pour la protection contre la peur et pour renforcer la foi. Pour une pratique plus courte, 33 ou 99 répétitions est également un compte largement utilisé."
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
      en: "Recite 145 times for divine protection and to overcome fear of creation. For a shorter practice, 33 or 99 repetitions is also a widely used count.",
      fr: "Récitez 145 fois pour la protection divine et pour surmonter la peur de la création. Pour une pratique plus courte, 33 ou 99 répétitions est également un compte largement utilisé."
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
      en: "Recite 94 times after Fajr for gaining strength and overcoming difficulties. For a shorter practice, 33 or 99 repetitions is also a widely used count.",
      fr: "Récitez 94 fois après Fajr pour gagner force et surmonter les difficultés. Pour une pratique plus courte, 33 ou 99 répétitions est également un compte largement utilisé."
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
      en: "Recite 206 times for healing of physical and spiritual ailments, and mending broken matters. For a shorter practice, 33 or 99 repetitions is also a widely used count.",
      fr: "Récitez 206 fois pour la guérison des maux physiques et spirituels, et la réparation des affaires brisées. Pour une pratique plus courte, 33 ou 99 répétitions est également un compte largement utilisé."
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
      en: "Recite 662 times to humble the ego and recognize divine supremacy. For a shorter practice, 33 or 99 repetitions is also a widely used count.",
      fr: "Récitez 662 fois pour humilier l'ego et reconnaître la suprématie divine. Pour une pratique plus courte, 33 ou 99 répétitions est également un compte largement utilisé."
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
      en: "Recite 731 times for creativity, bringing new blessings, and for women seeking children. For a shorter practice, 33 or 99 repetitions is also a widely used count.",
      fr: "Récitez 731 fois pour la créativité, l'apport de nouvelles bénédictions, et pour les femmes cherchant des enfants. Pour une pratique plus courte, 33 ou 99 répétitions est également un compte largement utilisé."
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
      en: "Recite 213 times for bringing order to chaotic situations and personal transformation. For a shorter practice, 33 or 99 repetitions is also a widely used count.",
      fr: "Récitez 213 fois pour apporter l'ordre aux situations chaotiques et la transformation personnelle. Pour une pratique plus courte, 33 ou 99 répétitions est également un compte largement utilisé."
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
      en: "Recite 336 times for beauty in character and for pregnant women for a beautiful healthy child. For a shorter practice, 33 or 99 repetitions is also a widely used count.",
      fr: "Récitez 336 fois pour la beauté du caractère et pour les femmes enceintes pour un bel enfant en bonne santé. Pour une pratique plus courte, 33 ou 99 répétitions est également un compte largement utilisé."
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
      en: "Recite 1281 times over a sustained practice for forgiveness of sins and purification of the heart. For a shorter practice, 33 or 99 repetitions is also a widely used count.",
      fr: "Récitez 1281 fois au cours d'une pratique soutenue pour le pardon des péchés et la purification du cœur. Pour une pratique plus courte, 33 ou 99 répétitions est également un compte largement utilisé."
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
      en: "Recite 306 times for overcoming enemies and subduing the nafs (ego). For a shorter practice, 33 or 99 repetitions is also a widely used count.",
      fr: "Récitez 306 fois pour vaincre les ennemis et soumettre le nafs (ego). Pour une pratique plus courte, 33 ou 99 répétitions est également un compte largement utilisé."
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
      en: "Recite 14 times after Fajr for increase in provision and blessings. For a shorter practice, 33 or 99 repetitions is also a widely used count.",
      fr: "Récitez 14 fois après Fajr pour l'augmentation de la subsistance et des bénédictions. Pour une pratique plus courte, 33 ou 99 répétitions est également un compte largement utilisé."
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
      en: "Recite 308 times for provision and to remove poverty. For a shorter practice, 33 or 99 repetitions is also a widely used count.",
      fr: "Récitez 308 fois pour la subsistance et pour éliminer la pauvreté. Pour une pratique plus courte, 33 ou 99 répétitions est également un compte largement utilisé."
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
      en: "Recite 489 times for opening of closed doors, both worldly and spiritual. For a shorter practice, 33 or 99 repetitions is also a widely used count.",
      fr: "Récitez 489 fois pour l'ouverture des portes fermées, mondaines et spirituelles. Pour une pratique plus courte, 33 ou 99 répétitions est également un compte largement utilisé."
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
      en: "Recite 150 times for increase in knowledge and understanding of divine wisdom. For a shorter practice, 33 or 99 repetitions is also a widely used count.",
      fr: "Récitez 150 fois pour l'augmentation de la connaissance et la compréhension de la sagesse divine. Pour une pratique plus courte, 33 ou 99 répétitions est également un compte largement utilisé."
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
      en: "Recite 903 times, or paired with Al-Bāsiṭ, for balance in giving and withholding. For a shorter practice, 33 or 99 repetitions is also a widely used count.",
      fr: "Récitez 903 fois, ou associé à Al-Bāsiṭ, pour l'équilibre entre donner et retenir. Pour une pratique plus courte, 33 ou 99 répétitions est également un compte largement utilisé."
    },
    keywords: ["withholder", "constrictor", "testing", "patience"]
  },
  {
    number: 21,
    arabic: "الْبَاسِط",
    transliteration: "Al-Bāsiṭ",
    translation: { en: "The Extender", fr: "Celui qui Étend" },
    abjadValue: 72,
    meaning: {
      en: "The One who extends provision, opens doors, and grants abundance to whom He wills.",
      fr: "Celui qui étend la provision, ouvre les portes et accorde l'abondance à qui Il veut."
    },
    spiritualPractice: {
      en: "Recite 72 times, or paired with Al-Qābiḍ, for balance, or alone for expansion in provision and relief. For a shorter practice, 33 or 99 repetitions is also a widely used count.",
      fr: "Récitez 72 fois, ou associé à Al-Qābiḍ, pour l'équilibre, ou seul pour l'expansion de la provision et le soulagement. Pour une pratique plus courte, 33 ou 99 répétitions est également un compte largement utilisé."
    },
    keywords: ["extender", "expander", "abundance", "relief"]
  },
  {
    number: 22,
    arabic: "الْخَافِض",
    transliteration: "Al-Khāfiḍ",
    translation: { en: "The Abaser", fr: "Celui qui Abaisse" },
    abjadValue: 1481,
    meaning: {
      en: "The One who lowers the arrogant and humbles false pride, restoring rightful order.",
      fr: "Celui qui abaisse les arrogants et humilie le faux orgueil, rétablissant l'ordre juste."
    },
    spiritualPractice: {
      en: "Recite 1481 times, or paired with Ar-Rāfiʿ, for protection from arrogance and against oppressive people. For a shorter practice, 33 or 99 repetitions is also a widely used count.",
      fr: "Récitez 1481 fois, ou associé à Ar-Rāfiʿ, pour la protection contre l'arrogance et les gens oppressifs. Pour une pratique plus courte, 33 ou 99 répétitions est également un compte largement utilisé."
    },
    keywords: ["abaser", "humbler", "justice", "protection"]
  },
  {
    number: 23,
    arabic: "الرَّافِع",
    transliteration: "Ar-Rāfiʿ",
    translation: { en: "The Exalter", fr: "Celui qui Élève" },
    abjadValue: 351,
    meaning: {
      en: "The One who raises the sincere in rank, honor, and closeness to Him.",
      fr: "Celui qui élève les sincères en rang, honneur et proximité avec Lui."
    },
    spiritualPractice: {
      en: "Recite 351 times for elevation in status, resolving difficulties, and gaining respect. For a shorter practice, 33 or 99 repetitions is also a widely used count.",
      fr: "Récitez 351 fois pour l'élévation de statut, la résolution de difficultés et gagner du respect. Pour une pratique plus courte, 33 ou 99 répétitions est également un compte largement utilisé."
    },
    keywords: ["exalter", "elevator", "honor", "rank"]
  },
  {
    number: 24,
    arabic: "الْمُعِزّ",
    transliteration: "Al-Muʿizz",
    translation: { en: "The Bestower of Honor", fr: "Celui qui Honore" },
    abjadValue: 117,
    meaning: {
      en: "The One who grants honor and strength to whomever He wills, regardless of outward means.",
      fr: "Celui qui accorde honneur et force à qui Il veut, indépendamment des moyens apparents."
    },
    spiritualPractice: {
      en: "Recite 117 times, or paired with Al-Mudhill, for dignity and to counter humiliation from others. For a shorter practice, 33 or 99 repetitions is also a widely used count.",
      fr: "Récitez 117 fois, ou associé à Al-Mudhill, pour la dignité et pour contrer l'humiliation des autres. Pour une pratique plus courte, 33 ou 99 répétitions est également un compte largement utilisé."
    },
    keywords: ["honor", "dignity", "strength", "esteem"]
  },
  {
    number: 25,
    arabic: "الْمُذِلّ",
    transliteration: "Al-Mudhill",
    translation: { en: "The Humiliator", fr: "Celui qui Humilie" },
    abjadValue: 770,
    meaning: {
      en: "The One who humbles the arrogant and removes false honor from those who transgress.",
      fr: "Celui qui humilie les arrogants et retire le faux honneur de ceux qui transgressent."
    },
    spiritualPractice: {
      en: "Recite 770 times for protection from oppressors and to seek justice against wrongdoing. For a shorter practice, 33 or 99 repetitions is also a widely used count.",
      fr: "Récitez 770 fois pour la protection contre les oppresseurs et pour chercher justice contre l'injustice. Pour une pratique plus courte, 33 ou 99 répétitions est également un compte largement utilisé."
    },
    keywords: ["humiliator", "justice", "protection", "humbling"]
  },
  {
    number: 26,
    arabic: "السَّمِيع",
    transliteration: "As-Samīʿ",
    translation: { en: "The All-Hearing", fr: "Celui qui Entend Tout" },
    abjadValue: 180,
    meaning: {
      en: "The One who hears all sounds and supplications, however faint, without exception.",
      fr: "Celui qui entend tous les sons et supplications, même les plus faibles, sans exception."
    },
    spiritualPractice: {
      en: "Recite 180 times when your duʿāʾ feels unheard, trusting that He hears every whispered plea. For a shorter practice, 33 or 99 repetitions is also a widely used count.",
      fr: "Récitez 180 fois quand votre duʿāʾ semble inentendu, en faisant confiance qu'Il entend chaque supplique. Pour une pratique plus courte, 33 ou 99 répétitions est également un compte largement utilisé."
    },
    keywords: ["hearing", "listener", "attentive", "prayer"]
  },
  {
    number: 27,
    arabic: "الْبَصِير",
    transliteration: "Al-Baṣīr",
    translation: { en: "The All-Seeing", fr: "Celui qui Voit Tout" },
    abjadValue: 302,
    meaning: {
      en: "The One who sees all things, seen and unseen, with perfect and complete awareness.",
      fr: "Celui qui voit toutes choses, visibles et invisibles, avec une conscience parfaite et complète."
    },
    spiritualPractice: {
      en: "Recite 302 times for guidance in matters requiring discernment and clear insight. For a shorter practice, 33 or 99 repetitions is also a widely used count.",
      fr: "Récitez 302 fois pour la guidance dans les affaires nécessitant discernement et clarté. Pour une pratique plus courte, 33 ou 99 répétitions est également un compte largement utilisé."
    },
    keywords: ["seeing", "watchful", "insight", "awareness"]
  },
  {
    number: 28,
    arabic: "الْحَكَم",
    transliteration: "Al-Ḥakam",
    translation: { en: "The Judge", fr: "L'Arbitre" },
    abjadValue: 68,
    meaning: {
      en: "The One whose judgment is final and perfectly just, ruling over all disputes.",
      fr: "Celui dont le jugement est final et parfaitement juste, arbitrant tous les différends."
    },
    spiritualPractice: {
      en: "Recite 68 times when seeking fair resolution to a dispute or an unjust situation. For a shorter practice, 33 or 99 repetitions is also a widely used count.",
      fr: "Récitez 68 fois en cherchant une résolution juste à un différend ou une situation injuste. Pour une pratique plus courte, 33 ou 99 répétitions est également un compte largement utilisé."
    },
    keywords: ["judge", "arbiter", "justice", "ruling"]
  },
  {
    number: 29,
    arabic: "الْعَدْل",
    transliteration: "Al-ʿAdl",
    translation: { en: "The Just", fr: "Le Juste" },
    abjadValue: 104,
    meaning: {
      en: "The One whose every decree is perfectly balanced and free of any inequity.",
      fr: "Celui dont chaque décret est parfaitement équilibré et exempt de toute iniquité."
    },
    spiritualPractice: {
      en: "Recite 104 times to cultivate fairness in one's own dealings and trust in divine justice. For a shorter practice, 33 or 99 repetitions is also a widely used count.",
      fr: "Récitez 104 fois pour cultiver l'équité dans ses propres affaires et la confiance en la justice divine. Pour une pratique plus courte, 33 ou 99 répétitions est également un compte largement utilisé."
    },
    keywords: ["justice", "fairness", "equity", "balance"]
  },
  {
    number: 30,
    arabic: "اللَّطِيف",
    transliteration: "Al-Laṭīf",
    translation: { en: "The Subtle One", fr: "Le Subtil" },
    abjadValue: 129,
    meaning: {
      en: "The One whose kindness reaches His creation in ways too subtle to perceive, easing hardship gently.",
      fr: "Celui dont la bonté atteint Sa création de manières trop subtiles à percevoir, allégeant les difficultés avec douceur."
    },
    spiritualPractice: {
      en: "Recite 129 times for gentle ease through difficulty and unseen relief. For a shorter practice, 33 or 99 repetitions is also a widely used count.",
      fr: "Récitez 129 fois pour un soulagement doux à travers la difficulté et un secours invisible. Pour une pratique plus courte, 33 ou 99 répétitions est également un compte largement utilisé."
    },
    keywords: ["subtle", "gentle", "kindness", "ease"]
  },
  {
    number: 31,
    arabic: "الْخَبِير",
    transliteration: "Al-Khabīr",
    translation: { en: "The All-Aware", fr: "Celui qui Connaît Tout" },
    abjadValue: 812,
    meaning: {
      en: "The One who is intimately acquainted with the inner reality of all things.",
      fr: "Celui qui connaît intimement la réalité intérieure de toutes choses."
    },
    spiritualPractice: {
      en: "Recite 812 times for clarity when a situation's true nature is hidden from you. For a shorter practice, 33 or 99 repetitions is also a widely used count.",
      fr: "Récitez 812 fois pour la clarté quand la vraie nature d'une situation vous est cachée. Pour une pratique plus courte, 33 ou 99 répétitions est également un compte largement utilisé."
    },
    keywords: ["aware", "informed", "perceptive", "knowledge"]
  },
  {
    number: 32,
    arabic: "الْحَلِيم",
    transliteration: "Al-Ḥalīm",
    translation: { en: "The Forbearing", fr: "Le Longanime" },
    abjadValue: 88,
    meaning: {
      en: "The One who delays punishment out of mercy, giving space for repentance and correction.",
      fr: "Celui qui retarde la punition par miséricorde, laissant place au repentir et à la correction."
    },
    spiritualPractice: {
      en: "Recite 88 times for patience with others and to soften a quick temper. For a shorter practice, 33 or 99 repetitions is also a widely used count.",
      fr: "Récitez 88 fois pour la patience envers les autres et pour adoucir un tempérament vif. Pour une pratique plus courte, 33 ou 99 répétitions est également un compte largement utilisé."
    },
    keywords: ["forbearing", "patient", "gentle", "mercy"]
  },
  {
    number: 33,
    arabic: "الْعَظِيم",
    transliteration: "Al-ʿAẓīm",
    translation: { en: "The Magnificent", fr: "Le Magnifique" },
    abjadValue: 1020,
    meaning: {
      en: "The One whose greatness has no limit and before whom all creation is humbled.",
      fr: "Celui dont la grandeur n'a pas de limite et devant qui toute création est humble."
    },
    spiritualPractice: {
      en: "Recite 1020 times to restore a sense of awe and humility before divine majesty. For a shorter practice, 33 or 99 repetitions is also a widely used count.",
      fr: "Récitez 1020 fois pour restaurer un sentiment de crainte révérencielle et d'humilité devant la majesté divine. Pour une pratique plus courte, 33 ou 99 répétitions est également un compte largement utilisé."
    },
    keywords: ["magnificent", "great", "majestic", "awe"]
  },
  {
    number: 34,
    arabic: "الْغَفُور",
    transliteration: "Al-Ghafūr",
    translation: { en: "The Great Forgiver", fr: "Le Grand Pardonneur" },
    abjadValue: 1286,
    meaning: {
      en: "The One whose forgiveness covers and conceals sin completely for the repentant.",
      fr: "Celui dont le pardon couvre et dissimule complètement le péché pour celui qui se repent."
    },
    spiritualPractice: {
      en: "Recite 1286 times over a sustained practice, seeking forgiveness and covering of past faults. For a shorter practice, 33 or 99 repetitions is also a widely used count.",
      fr: "Récitez 1286 fois au cours d'une pratique soutenue, en cherchant le pardon et la dissimulation des fautes passées. Pour une pratique plus courte, 33 ou 99 répétitions est également un compte largement utilisé."
    },
    keywords: ["forgiving", "pardon", "covering", "mercy"]
  },
  {
    number: 35,
    arabic: "الشَّكُور",
    transliteration: "Ash-Shakūr",
    translation: { en: "The Appreciative", fr: "Le Reconnaissant" },
    abjadValue: 526,
    meaning: {
      en: "The One who rewards even small good deeds abundantly and acknowledges every effort.",
      fr: "Celui qui récompense abondamment même les petites bonnes actions et reconnaît chaque effort."
    },
    spiritualPractice: {
      en: "Recite 526 times to cultivate gratitude and to seek reward for small acts of good. For a shorter practice, 33 or 99 repetitions is also a widely used count.",
      fr: "Récitez 526 fois pour cultiver la gratitude et chercher la récompense pour de petits actes de bien. Pour une pratique plus courte, 33 ou 99 répétitions est également un compte largement utilisé."
    },
    keywords: ["grateful", "rewarding", "appreciative", "gratitude"]
  },
  {
    number: 36,
    arabic: "الْعَلِيّ",
    transliteration: "Al-ʿAliyy",
    translation: { en: "The Most High", fr: "Le Très-Haut" },
    abjadValue: 110,
    meaning: {
      en: "The One exalted absolutely above all creation in status, power, and being.",
      fr: "Celui exalté absolument au-dessus de toute création en statut, pouvoir et être."
    },
    spiritualPractice: {
      en: "Recite 110 times for elevation in rank and to seek closeness to what is highest and purest. For a shorter practice, 33 or 99 repetitions is also a widely used count.",
      fr: "Récitez 110 fois pour l'élévation de rang et pour rechercher la proximité avec ce qui est le plus haut et le plus pur. Pour une pratique plus courte, 33 ou 99 répétitions est également un compte largement utilisé."
    },
    keywords: ["exalted", "high", "supreme", "transcendent"]
  },
  {
    number: 37,
    arabic: "الْكَبِير",
    transliteration: "Al-Kabīr",
    translation: { en: "The Greatest", fr: "Le Plus Grand" },
    abjadValue: 232,
    meaning: {
      en: "The One whose greatness surpasses every measure of created greatness.",
      fr: "Celui dont la grandeur surpasse toute mesure de grandeur créée."
    },
    spiritualPractice: {
      en: "Recite 232 times to remember true scale and proportion when a worldly matter feels overwhelming. For a shorter practice, 33 or 99 repetitions is also a widely used count.",
      fr: "Récitez 232 fois pour retrouver la juste mesure quand une affaire terrestre semble accablante. Pour une pratique plus courte, 33 ou 99 répétitions est également un compte largement utilisé."
    },
    keywords: ["great", "greatest", "immense", "supreme"]
  },
  {
    number: 38,
    arabic: "الْحَفِيظ",
    transliteration: "Al-Ḥafīẓ",
    translation: { en: "The Preserver", fr: "Le Préservateur" },
    abjadValue: 998,
    meaning: {
      en: "The One who protects and preserves all things from loss, harm, and decay.",
      fr: "Celui qui protège et préserve toutes choses de la perte, du mal et du déclin."
    },
    spiritualPractice: {
      en: "Recite 998 times for protection of oneself, one's family, health, and memory. For a shorter practice, 33 or 99 repetitions is also a widely used count.",
      fr: "Récitez 998 fois pour la protection de soi-même, de sa famille, de sa santé et de sa mémoire. Pour une pratique plus courte, 33 ou 99 répétitions est également un compte largement utilisé."
    },
    keywords: ["preserver", "protector", "guardian", "safekeeping"]
  },
  {
    number: 39,
    arabic: "الْمُقِيت",
    transliteration: "Al-Muqīt",
    translation: { en: "The Nourisher", fr: "Le Nourricier" },
    abjadValue: 550,
    meaning: {
      en: "The One who provides sustenance and nourishment sufficient for every created being.",
      fr: "Celui qui fournit subsistance et nourriture suffisantes à chaque être créé."
    },
    spiritualPractice: {
      en: "Recite 550 times when seeking sustenance, sufficiency, and provision for one's needs. For a shorter practice, 33 or 99 repetitions is also a widely used count.",
      fr: "Récitez 550 fois en cherchant subsistance, suffisance et provision pour ses besoins. Pour une pratique plus courte, 33 ou 99 répétitions est également un compte largement utilisé."
    },
    keywords: ["nourisher", "sustainer", "provision", "sufficiency"]
  },
  {
    number: 40,
    arabic: "الْحسِيب",
    transliteration: "Al-Ḥasīb",
    translation: { en: "The Reckoner", fr: "Celui qui Compte" },
    abjadValue: 80,
    meaning: {
      en: "The One who accounts for every deed with perfect precision and is sufficient for those who trust Him.",
      fr: "Celui qui comptabilise chaque acte avec une précision parfaite et suffit à ceux qui Lui font confiance."
    },
    spiritualPractice: {
      en: "Recite 80 times for sufficiency in a difficult matter and trust that He accounts for all things. For a shorter practice, 33 or 99 repetitions is also a widely used count.",
      fr: "Récitez 80 fois pour la suffisance dans une affaire difficile et la confiance qu'Il tient compte de tout. Pour une pratique plus courte, 33 ou 99 répétitions est également un compte largement utilisé."
    },
    keywords: ["reckoner", "accountant", "sufficient", "trust"]
  },
  {
    number: 41,
    arabic: "الْجَلِيل",
    transliteration: "Al-Jalīl",
    translation: { en: "The Majestic", fr: "Le Majestueux" },
    abjadValue: 73,
    meaning: {
      en: "The One possessing absolute majesty, dignity, and grandeur beyond comprehension.",
      fr: "Celui possédant une majesté, dignité et grandeur absolues au-delà de la compréhension."
    },
    spiritualPractice: {
      en: "Recite 73 times to cultivate reverence and dignified bearing in one's own conduct. For a shorter practice, 33 or 99 repetitions is also a widely used count.",
      fr: "Récitez 73 fois pour cultiver la révérence et une conduite digne dans son propre comportement. Pour une pratique plus courte, 33 ou 99 répétitions est également un compte largement utilisé."
    },
    keywords: ["majestic", "dignity", "grandeur", "reverence"]
  },
  {
    number: 42,
    arabic: "الْكَرِيم",
    transliteration: "Al-Karīm",
    translation: { en: "The Generous", fr: "Le Généreux" },
    abjadValue: 270,
    meaning: {
      en: "The One who gives generously and honorably, without being asked and without limit.",
      fr: "Celui qui donne généreusement et honorablement, sans qu'on le lui demande et sans limite."
    },
    spiritualPractice: {
      en: "Recite 270 times for generosity of provision, character, and honorable treatment from others. For a shorter practice, 33 or 99 repetitions is also a widely used count.",
      fr: "Récitez 270 fois pour la générosité de provision, de caractère et un traitement honorable des autres. Pour une pratique plus courte, 33 ou 99 répétitions est également un compte largement utilisé."
    },
    keywords: ["generous", "noble", "bountiful", "honorable"]
  },
  {
    number: 43,
    arabic: "الرَّقِيب",
    transliteration: "Ar-Raqīb",
    translation: { en: "The Watchful", fr: "Le Vigilant" },
    abjadValue: 312,
    meaning: {
      en: "The One who watches over all things constantly, missing nothing at any moment.",
      fr: "Celui qui veille constamment sur toutes choses, ne manquant rien à aucun moment."
    },
    spiritualPractice: {
      en: "Recite 312 times to cultivate mindfulness (murāqabah) of being watched in every action. For a shorter practice, 33 or 99 repetitions is also a widely used count.",
      fr: "Récitez 312 fois pour cultiver la conscience (murāqabah) d'être observé dans chaque action. Pour une pratique plus courte, 33 ou 99 répétitions est également un compte largement utilisé."
    },
    keywords: ["watchful", "vigilant", "observer", "mindfulness"]
  },
  {
    number: 44,
    arabic: "الْمُجِيب",
    transliteration: "Al-Mujīb",
    translation: { en: "The Responsive", fr: "Celui qui Répond" },
    abjadValue: 55,
    meaning: {
      en: "The One who answers the call of every supplicant, in the way and time He chooses.",
      fr: "Celui qui répond à l'appel de chaque suppliant, de la manière et au moment qu'Il choisit."
    },
    spiritualPractice: {
      en: "Recite 55 times while making duʿāʾ, especially in moments of sincere need. For a shorter practice, 33 or 99 repetitions is also a widely used count.",
      fr: "Récitez 55 fois. Récitez en faisant duʿāʾ, surtout dans les moments de besoin sincère. Pour une pratique plus courte, 33 ou 99 répétitions est également un compte largement utilisé."
    },
    keywords: ["responsive", "answerer", "prayer", "response"]
  },
  {
    number: 45,
    arabic: "الْوَاسِع",
    transliteration: "Al-Wāsiʿ",
    translation: { en: "The All-Encompassing", fr: "Celui qui Embrasse Tout" },
    abjadValue: 137,
    meaning: {
      en: "The One whose mercy, knowledge, and provision encompass all things without limit.",
      fr: "Celui dont la miséricorde, la connaissance et la provision embrassent toutes choses sans limite."
    },
    spiritualPractice: {
      en: "Recite 137 times when feeling constrained, to open oneself to unseen possibility. For a shorter practice, 33 or 99 repetitions is also a widely used count.",
      fr: "Récitez 137 fois en cas de sentiment de contrainte, pour s'ouvrir à des possibilités invisibles. Pour une pratique plus courte, 33 ou 99 répétitions est également un compte largement utilisé."
    },
    keywords: ["vast", "encompassing", "boundless", "expansive"]
  },
  {
    number: 46,
    arabic: "الْحَكِيم",
    transliteration: "Al-Ḥakīm",
    translation: { en: "The Perfectly Wise", fr: "Le Parfaitement Sage" },
    abjadValue: 78,
    meaning: {
      en: "The One whose every decree carries perfect wisdom, even when hidden from us.",
      fr: "Celui dont chaque décret porte une sagesse parfaite, même lorsqu'elle nous est cachée."
    },
    spiritualPractice: {
      en: "Recite 78 times for wisdom in decision-making and acceptance of what cannot be changed. For a shorter practice, 33 or 99 repetitions is also a widely used count.",
      fr: "Récitez 78 fois pour la sagesse dans la prise de décision et l'acceptation de ce qui ne peut être changé. Pour une pratique plus courte, 33 ou 99 répétitions est également un compte largement utilisé."
    },
    keywords: ["wise", "wisdom", "judicious", "insight"]
  },
  {
    number: 47,
    arabic: "الْوَدُود",
    transliteration: "Al-Wadūd",
    translation: { en: "The Most Loving", fr: "Le Très Aimant" },
    abjadValue: 20,
    meaning: {
      en: "The One whose love for His righteous servants is sincere, constant, and freely given.",
      fr: "Celui dont l'amour pour Ses serviteurs vertueux est sincère, constant et librement donné."
    },
    spiritualPractice: {
      en: "Recite 20 times to soften hearts, restore affection, and strengthen bonds of love. For a shorter practice, 33 or 99 repetitions is also a widely used count.",
      fr: "Récitez 20 fois pour adoucir les cœurs, restaurer l'affection et renforcer les liens d'amour. Pour une pratique plus courte, 33 ou 99 répétitions est également un compte largement utilisé."
    },
    keywords: ["loving", "affection", "devotion", "warmth"]
  },
  {
    number: 48,
    arabic: "الْمَجِيد",
    transliteration: "Al-Majīd",
    translation: { en: "The Most Glorious", fr: "Le Très Glorieux" },
    abjadValue: 57,
    meaning: {
      en: "The One whose glory and nobility are perfect and beyond all comparison.",
      fr: "Celui dont la gloire et la noblesse sont parfaites et sans comparaison possible."
    },
    spiritualPractice: {
      en: "Recite 57 times to seek honor, glory, and a noble outcome in one's affairs. For a shorter practice, 33 or 99 repetitions is also a widely used count.",
      fr: "Récitez 57 fois pour rechercher honneur, gloire et une issue noble dans ses affaires. Pour une pratique plus courte, 33 ou 99 répétitions est également un compte largement utilisé."
    },
    keywords: ["glorious", "noble", "honored", "majestic"]
  },
  {
    number: 49,
    arabic: "الْبَاعِث",
    transliteration: "Al-Bāʿith",
    translation: { en: "The Resurrector", fr: "Celui qui Ressuscite" },
    abjadValue: 573,
    meaning: {
      en: "The One who will raise all creation after death and who awakens hearts from heedlessness.",
      fr: "Celui qui ressuscitera toute la création après la mort et qui réveille les cœurs de l'insouciance."
    },
    spiritualPractice: {
      en: "Recite 573 times to awaken motivation, renewal, and a fresh start after stagnation. For a shorter practice, 33 or 99 repetitions is also a widely used count.",
      fr: "Récitez 573 fois pour éveiller la motivation, le renouveau et un nouveau départ après la stagnation. Pour une pratique plus courte, 33 ou 99 répétitions est également un compte largement utilisé."
    },
    keywords: ["resurrector", "awakener", "renewal", "revival"]
  },
  {
    number: 50,
    arabic: "الشَّهِيد",
    transliteration: "Ash-Shahīd",
    translation: { en: "The Witness", fr: "Le Témoin" },
    abjadValue: 319,
    meaning: {
      en: "The One who witnesses all things directly, at every place and every moment.",
      fr: "Celui qui témoigne de toutes choses directement, en tout lieu et à tout moment."
    },
    spiritualPractice: {
      en: "Recite 319 times to find comfort that no wrong goes unseen and no good deed unwitnessed. For a shorter practice, 33 or 99 repetitions is also a widely used count.",
      fr: "Récitez 319 fois pour trouver réconfort qu'aucun tort ne passe inaperçu ni aucune bonne action sans témoin. Pour une pratique plus courte, 33 ou 99 répétitions est également un compte largement utilisé."
    },
    keywords: ["witness", "observer", "testimony", "presence"]
  },
  {
    number: 51,
    arabic: "الْحَقّ",
    transliteration: "Al-Ḥaqq",
    translation: { en: "The Truth", fr: "La Vérité" },
    abjadValue: 108,
    meaning: {
      en: "The One whose existence and reality are absolute, the ultimate standard of all truth.",
      fr: "Celui dont l'existence et la réalité sont absolues, l'étalon ultime de toute vérité."
    },
    spiritualPractice: {
      en: "Recite 108 times when seeking clarity, honesty, and firmness upon what is true. For a shorter practice, 33 or 99 repetitions is also a widely used count.",
      fr: "Récitez 108 fois en cherchant clarté, honnêteté et fermeté sur ce qui est vrai. Pour une pratique plus courte, 33 ou 99 répétitions est également un compte largement utilisé."
    },
    keywords: ["truth", "reality", "certainty", "honesty"]
  },
  {
    number: 52,
    arabic: "الْوَكِيل",
    transliteration: "Al-Wakīl",
    translation: { en: "The Trustee", fr: "Le Garant" },
    abjadValue: 66,
    meaning: {
      en: "The One who is sufficient as a guardian and disposer of affairs for those who rely on Him.",
      fr: "Celui qui suffit comme gardien et dispositeur des affaires pour ceux qui s'en remettent à Lui."
    },
    spiritualPractice: {
      en: "Recite 66 times when placing full trust (tawakkul) in an outcome beyond your control. For a shorter practice, 33 or 99 repetitions is also a widely used count.",
      fr: "Récitez 66 fois. Récitez en plaçant une confiance totale (tawakkul) dans une issue hors de votre contrôle. Pour une pratique plus courte, 33 ou 99 répétitions est également un compte largement utilisé."
    },
    keywords: ["trustee", "guardian", "reliance", "trust"]
  },
  {
    number: 53,
    arabic: "الْقَوِيّ",
    transliteration: "Al-Qawiyy",
    translation: { en: "The Most Strong", fr: "Le Très Fort" },
    abjadValue: 116,
    meaning: {
      en: "The One possessing complete and unshakable strength, unlike any creature's power.",
      fr: "Celui possédant une force complète et inébranlable, différente de tout pouvoir créé."
    },
    spiritualPractice: {
      en: "Recite 116 times for inner strength and resilience in hardship. For a shorter practice, 33 or 99 repetitions is also a widely used count.",
      fr: "Récitez 116 fois pour la force intérieure et la résilience dans l'épreuve. Pour une pratique plus courte, 33 ou 99 répétitions est également un compte largement utilisé."
    },
    keywords: ["strong", "powerful", "strength", "resilience"]
  },
  {
    number: 54,
    arabic: "الْمَتِين",
    transliteration: "Al-Matīn",
    translation: { en: "The Forceful", fr: "Le Ferme" },
    abjadValue: 500,
    meaning: {
      en: "The One whose power is unwavering firmness, needing no effort or exertion.",
      fr: "Celui dont le pouvoir est une fermeté inébranlable, ne nécessitant aucun effort."
    },
    spiritualPractice: {
      en: "Recite 500 times for steadfastness and firm resolve when facing a difficult trial. For a shorter practice, 33 or 99 repetitions is also a widely used count.",
      fr: "Récitez 500 fois pour la fermeté et la résolution ferme face à une épreuve difficile. Pour une pratique plus courte, 33 ou 99 répétitions est également un compte largement utilisé."
    },
    keywords: ["firm", "forceful", "steadfast", "unwavering"]
  },
  {
    number: 55,
    arabic: "الْوَلِيّ",
    transliteration: "Al-Waliyy",
    translation: { en: "The Protecting Friend", fr: "L'Ami Protecteur" },
    abjadValue: 46,
    meaning: {
      en: "The One who is the true guardian and close friend of the believers, protecting their affairs.",
      fr: "Celui qui est le véritable gardien et ami proche des croyants, protégeant leurs affaires."
    },
    spiritualPractice: {
      en: "Recite 46 times for divine protection and closeness in times of loneliness or vulnerability. For a shorter practice, 33 or 99 repetitions is also a widely used count.",
      fr: "Récitez 46 fois pour la protection divine et la proximité dans les moments de solitude ou de vulnérabilité. Pour une pratique plus courte, 33 ou 99 répétitions est également un compte largement utilisé."
    },
    keywords: ["protector", "friend", "guardian", "closeness"]
  },
  {
    number: 56,
    arabic: "الْحَمِيد",
    transliteration: "Al-Ḥamīd",
    translation: { en: "The Praiseworthy", fr: "Le Digne de Louange" },
    abjadValue: 62,
    meaning: {
      en: "The One who is inherently worthy of all praise, in every state and circumstance.",
      fr: "Celui qui est intrinsèquement digne de toute louange, en tout état et en toute circonstance."
    },
    spiritualPractice: {
      en: "Recite 62 times to cultivate gratitude and a habit of praise in ease and hardship alike. For a shorter practice, 33 or 99 repetitions is also a widely used count.",
      fr: "Récitez 62 fois pour cultiver la gratitude et l'habitude de la louange, dans l'aisance comme dans l'épreuve. Pour une pratique plus courte, 33 ou 99 répétitions est également un compte largement utilisé."
    },
    keywords: ["praiseworthy", "praised", "gratitude", "commendable"]
  },
  {
    number: 57,
    arabic: "الْمُحْصِي",
    transliteration: "Al-Muḥṣī",
    translation: { en: "The Appraiser", fr: "Celui qui Dénombre" },
    abjadValue: 148,
    meaning: {
      en: "The One who counts and knows the exact number and detail of all things, however small.",
      fr: "Celui qui compte et connaît le nombre et le détail exacts de toutes choses, si petites soient-elles."
    },
    spiritualPractice: {
      en: "Recite 148 times to find peace that nothing done in sincerity, however small, is ever lost. For a shorter practice, 33 or 99 repetitions is also a widely used count.",
      fr: "Récitez 148 fois pour trouver la paix que rien de fait avec sincérité, si petit soit-il, n'est jamais perdu. Pour une pratique plus courte, 33 ou 99 répétitions est également un compte largement utilisé."
    },
    keywords: ["appraiser", "counter", "precise", "detail"]
  },
  {
    number: 58,
    arabic: "الْمُبْدِئ",
    transliteration: "Al-Mubdiʾ",
    translation: { en: "The Originator", fr: "L'Initiateur" },
    abjadValue: 56,
    meaning: {
      en: "The One who began all of creation from nothing, without any prior model.",
      fr: "Celui qui a commencé toute la création à partir de rien, sans aucun modèle préalable."
    },
    spiritualPractice: {
      en: "Recite 56 times when starting something new and seeking a strong, blessed beginning. For a shorter practice, 33 or 99 repetitions is also a widely used count.",
      fr: "Récitez 56 fois. Récitez en commençant quelque chose de nouveau et en cherchant un début fort et béni. Pour une pratique plus courte, 33 ou 99 répétitions est également un compte largement utilisé."
    },
    keywords: ["originator", "initiator", "beginning", "creation"]
  },
  {
    number: 59,
    arabic: "الْمُعِيد",
    transliteration: "Al-Muʿīd",
    translation: { en: "The Restorer", fr: "Celui qui Restaure" },
    abjadValue: 124,
    meaning: {
      en: "The One who will restore all creation after its ending, just as He originated it.",
      fr: "Celui qui restaurera toute la création après sa fin, tout comme Il l'a créée."
    },
    spiritualPractice: {
      en: "Recite 124 times when seeking to restore something lost — health, a relationship, or a state of ease. For a shorter practice, 33 or 99 repetitions is also a widely used count.",
      fr: "Récitez 124 fois en cherchant à restaurer quelque chose de perdu — santé, relation ou état de paix. Pour une pratique plus courte, 33 ou 99 répétitions est également un compte largement utilisé."
    },
    keywords: ["restorer", "renewer", "returning", "restoration"]
  },
  {
    number: 60,
    arabic: "الْمُحْيِي",
    transliteration: "Al-Muḥyī",
    translation: { en: "The Giver of Life", fr: "Celui qui Donne la Vie" },
    abjadValue: 68,
    meaning: {
      en: "The One who gives life to bodies and, spiritually, brings hearts to life through faith.",
      fr: "Celui qui donne la vie aux corps et, spirituellement, ranime les cœurs par la foi."
    },
    spiritualPractice: {
      en: "Recite 68 times to seek renewal of spirit and vitality in a period of heaviness. For a shorter practice, 33 or 99 repetitions is also a widely used count.",
      fr: "Récitez 68 fois pour chercher le renouveau de l'esprit et de la vitalité dans une période de lourdeur. Pour une pratique plus courte, 33 ou 99 répétitions est également un compte largement utilisé."
    },
    keywords: ["life-giver", "vitality", "renewal", "revival"]
  },
  {
    number: 61,
    arabic: "الْمُمِيت",
    transliteration: "Al-Mumīt",
    translation: { en: "The Taker of Life", fr: "Celui qui Ôte la Vie" },
    abjadValue: 490,
    meaning: {
      en: "The One who ordains the death of every living thing at its appointed time.",
      fr: "Celui qui décrète la mort de tout être vivant en son temps déterminé."
    },
    spiritualPractice: {
      en: "Recite 490 times to reflect on mortality and reorder priorities toward what truly matters. For a shorter practice, 33 or 99 repetitions is also a widely used count.",
      fr: "Récitez 490 fois pour méditer sur la mortalité et réorienter ses priorités vers l'essentiel. Pour une pratique plus courte, 33 ou 99 répétitions est également un compte largement utilisé."
    },
    keywords: ["mortality", "ending", "reflection", "impermanence"]
  },
  {
    number: 62,
    arabic: "الْحَيّ",
    transliteration: "Al-Ḥayy",
    translation: { en: "The Ever-Living", fr: "Le Vivant Éternel" },
    abjadValue: 18,
    meaning: {
      en: "The One whose life is eternal, without beginning or end, sustaining all other life.",
      fr: "Celui dont la vie est éternelle, sans début ni fin, soutenant toute autre vie."
    },
    spiritualPractice: {
      en: "Recite 18 times, or paired with Al-Qayyūm, for vitality, healing, and enduring strength. For a shorter practice, 33 or 99 repetitions is also a widely used count.",
      fr: "Récitez 18 fois, ou associé à Al-Qayyūm, pour la vitalité, la guérison et une force durable. Pour une pratique plus courte, 33 ou 99 répétitions est également un compte largement utilisé."
    },
    keywords: ["living", "eternal", "vitality", "enduring"]
  },
  {
    number: 63,
    arabic: "الْقَيُّوم",
    transliteration: "Al-Qayyūm",
    translation: { en: "The Self-Subsisting", fr: "Celui qui Subsiste par Lui-Même" },
    abjadValue: 156,
    meaning: {
      en: "The One who sustains all existence while depending on nothing and no one.",
      fr: "Celui qui soutient toute existence tout en ne dépendant de rien ni de personne."
    },
    spiritualPractice: {
      en: "Recite 156 times when feeling unsteady, to anchor yourself in what alone truly sustains. For a shorter practice, 33 or 99 repetitions is also a widely used count.",
      fr: "Récitez 156 fois en cas d'instabilité, pour vous ancrer en ce qui seul soutient véritablement. Pour une pratique plus courte, 33 ou 99 répétitions est également un compte largement utilisé."
    },
    keywords: ["self-sustaining", "sustainer", "stability", "foundation"]
  },
  {
    number: 64,
    arabic: "الْوَاجِد",
    transliteration: "Al-Wājid",
    translation: { en: "The Finder", fr: "Celui qui Trouve" },
    abjadValue: 14,
    meaning: {
      en: "The One who lacks nothing and finds whatever He wills without any search.",
      fr: "Celui à qui rien ne manque et qui trouve ce qu'Il veut sans aucune recherche."
    },
    spiritualPractice: {
      en: "Recite 14 times when seeking something lost — an object, an answer, or a way forward. For a shorter practice, 33 or 99 repetitions is also a widely used count.",
      fr: "Récitez 14 fois en cherchant quelque chose de perdu — un objet, une réponse ou une voie à suivre. Pour une pratique plus courte, 33 ou 99 répétitions est également un compte largement utilisé."
    },
    keywords: ["finder", "self-sufficient", "discovery", "abundance"]
  },
  {
    number: 65,
    arabic: "الْمَاجِد",
    transliteration: "Al-Mājid",
    translation: { en: "The Glorious", fr: "Le Glorieux" },
    abjadValue: 48,
    meaning: {
      en: "The One of perfect nobility, generosity, and glory combined in absolute measure.",
      fr: "Celui d'une noblesse, générosité et gloire parfaites réunies dans une mesure absolue."
    },
    spiritualPractice: {
      en: "Recite 48 times to seek nobility of character and a generous, glorious outcome. For a shorter practice, 33 or 99 repetitions is also a widely used count.",
      fr: "Récitez 48 fois pour rechercher la noblesse de caractère et une issue généreuse et glorieuse. Pour une pratique plus courte, 33 ou 99 répétitions est également un compte largement utilisé."
    },
    keywords: ["glorious", "noble", "magnificent", "generous"]
  },
  {
    number: 66,
    arabic: "الْواحِد",
    transliteration: "Al-Wāḥid",
    translation: { en: "The One", fr: "L'Unique" },
    abjadValue: 19,
    meaning: {
      en: "The One who is singular in His essence, without partner, equal, or division.",
      fr: "Celui qui est unique dans Son essence, sans associé, égal ni division."
    },
    spiritualPractice: {
      en: "Recite 19 times to affirm tawḥīd (divine oneness) and unify a scattered heart and mind. For a shorter practice, 33 or 99 repetitions is also a widely used count.",
      fr: "Récitez 19 fois pour affirmer le tawḥīd (l'unicité divine) et unifier un cœur et un esprit dispersés. Pour une pratique plus courte, 33 ou 99 répétitions est également un compte largement utilisé."
    },
    keywords: ["one", "unique", "unity", "singular"]
  },
  {
    number: 67,
    arabic: "اَلاَحَد",
    transliteration: "Al-Aḥad",
    translation: { en: "The Unique", fr: "L'Unique Absolu" },
    abjadValue: 13,
    meaning: {
      en: "The One utterly indivisible and incomparable, unlike anything in creation.",
      fr: "Celui absolument indivisible et incomparable, différent de tout dans la création."
    },
    spiritualPractice: {
      en: "Recite 13 times alongside Al-Wāḥid to deepen certainty in God's absolute oneness. For a shorter practice, 33 or 99 repetitions is also a widely used count.",
      fr: "Récitez 13 fois, ou associé à Al-Wāḥid, pour approfondir la certitude en l'unicité absolue de Dieu. Pour une pratique plus courte, 33 ou 99 répétitions est également un compte largement utilisé."
    },
    keywords: ["unique", "indivisible", "incomparable", "singular"]
  },
  {
    number: 68,
    arabic: "الصَّمَد",
    transliteration: "Aṣ-Ṣamad",
    translation: { en: "The Eternal Refuge", fr: "Le Refuge Éternel" },
    abjadValue: 134,
    meaning: {
      en: "The One depended upon by all creation, while He depends on nothing whatsoever.",
      fr: "Celui dont dépend toute la création, alors qu'Il ne dépend de rien."
    },
    spiritualPractice: {
      en: "Recite 134 times when in need, turning to the One true, sufficient refuge for every matter. For a shorter practice, 33 or 99 repetitions is also a widely used count.",
      fr: "Récitez 134 fois en cas de besoin, en vous tournant vers l'unique refuge véritable et suffisant. Pour une pratique plus courte, 33 ou 99 répétitions est également un compte largement utilisé."
    },
    keywords: ["refuge", "self-sufficient", "eternal", "dependence"]
  },
  {
    number: 69,
    arabic: "الْقَادِر",
    transliteration: "Al-Qādir",
    translation: { en: "The Powerful", fr: "Le Puissant" },
    abjadValue: 305,
    meaning: {
      en: "The One capable of all things, with power that meets no obstacle or limitation.",
      fr: "Celui capable de toutes choses, dont le pouvoir ne rencontre aucun obstacle ni limitation."
    },
    spiritualPractice: {
      en: "Recite 305 times when a matter feels impossible, to remember nothing is beyond His power. For a shorter practice, 33 or 99 repetitions is also a widely used count.",
      fr: "Récitez 305 fois quand une affaire semble impossible, pour vous rappeler que rien n'est hors de Son pouvoir. Pour une pratique plus courte, 33 ou 99 répétitions est également un compte largement utilisé."
    },
    keywords: ["powerful", "capable", "able", "omnipotent"]
  },
  {
    number: 70,
    arabic: "الْمُقْتَدِر",
    transliteration: "Al-Muqtadir",
    translation: { en: "The Creator of Power", fr: "Le Dominateur Absolu" },
    abjadValue: 744,
    meaning: {
      en: "The One who exercises total power with complete authority over how and when things occur.",
      fr: "Celui qui exerce un pouvoir total avec une autorité complète sur le comment et le quand des choses."
    },
    spiritualPractice: {
      en: "Recite 744 times for authority and command over a difficult or chaotic situation. For a shorter practice, 33 or 99 repetitions is also a widely used count.",
      fr: "Récitez 744 fois pour l'autorité et la maîtrise d'une situation difficile ou chaotique. Pour une pratique plus courte, 33 ou 99 répétitions est également un compte largement utilisé."
    },
    keywords: ["powerful", "authority", "command", "dominion"]
  },
  {
    number: 71,
    arabic: "الْمُقَدِّم",
    transliteration: "Al-Muqaddim",
    translation: { en: "The Expediter", fr: "Celui qui Avance" },
    abjadValue: 184,
    meaning: {
      en: "The One who brings forward whom and whatever He wills, ahead of its expected time.",
      fr: "Celui qui fait avancer qui et ce qu'Il veut, avant son moment attendu."
    },
    spiritualPractice: {
      en: "Recite 184 times when seeking to move a stalled matter forward or to advance in rank. For a shorter practice, 33 or 99 repetitions is also a widely used count.",
      fr: "Récitez 184 fois en cherchant à faire avancer une affaire bloquée ou à progresser en rang. Pour une pratique plus courte, 33 ou 99 répétitions est également un compte largement utilisé."
    },
    keywords: ["advancer", "expediter", "progress", "forward"]
  },
  {
    number: 72,
    arabic: "الْمُؤَخِّر",
    transliteration: "Al-Muʾakhkhir",
    translation: { en: "The Delayer", fr: "Celui qui Retarde" },
    abjadValue: 846,
    meaning: {
      en: "The One who delays whom and whatever He wills, with wisdom hidden in the timing.",
      fr: "Celui qui retarde qui et ce qu'Il veut, avec une sagesse cachée dans le moment choisi."
    },
    spiritualPractice: {
      en: "Recite 846 times for patience and trust when something you want is delayed. For a shorter practice, 33 or 99 repetitions is also a widely used count.",
      fr: "Récitez 846 fois pour la patience et la confiance quand quelque chose que vous désirez est retardé. Pour une pratique plus courte, 33 ou 99 répétitions est également un compte largement utilisé."
    },
    keywords: ["delayer", "patience", "timing", "trust"]
  },
  {
    number: 73,
    arabic: "الأوَّل",
    transliteration: "Al-Awwal",
    translation: { en: "The First", fr: "Le Premier" },
    abjadValue: 37,
    meaning: {
      en: "The One who exists before all things, with no beginning before Him.",
      fr: "Celui qui existe avant toutes choses, sans aucun commencement avant Lui."
    },
    spiritualPractice: {
      en: "Recite 37 times when beginning a new phase, seeking a foundation rooted in what is eternal. For a shorter practice, 33 or 99 repetitions is also a widely used count.",
      fr: "Récitez 37 fois. Récitez en commençant une nouvelle phase, en cherchant une fondation ancrée dans l'éternel. Pour une pratique plus courte, 33 ou 99 répétitions est également un compte largement utilisé."
    },
    keywords: ["first", "beginning", "origin", "foundation"]
  },
  {
    number: 74,
    arabic: "الآخِر",
    transliteration: "Al-Ākhir",
    translation: { en: "The Last", fr: "Le Dernier" },
    abjadValue: 801,
    meaning: {
      en: "The One who remains after all things end, with no end following Him.",
      fr: "Celui qui demeure après la fin de toutes choses, sans aucune fin après Lui."
    },
    spiritualPractice: {
      en: "Recite 801 times for perspective on what truly lasts, beyond the temporary and fleeting. For a shorter practice, 33 or 99 repetitions is also a widely used count.",
      fr: "Récitez 801 fois pour une perspective sur ce qui dure vraiment, au-delà du temporaire et de l'éphémère. Pour une pratique plus courte, 33 ou 99 répétitions est également un compte largement utilisé."
    },
    keywords: ["last", "eternal", "ending", "permanence"]
  },
  {
    number: 75,
    arabic: "الظَّاهِر",
    transliteration: "Aẓ-Ẓāhir",
    translation: { en: "The Manifest", fr: "L'Apparent" },
    abjadValue: 1106,
    meaning: {
      en: "The One whose signs are evident throughout all of creation, visible to those who reflect.",
      fr: "Celui dont les signes sont évidents à travers toute la création, visibles pour qui réfléchit."
    },
    spiritualPractice: {
      en: "Recite 1106 times to see divine signs more clearly in everyday life and nature. For a shorter practice, 33 or 99 repetitions is also a widely used count.",
      fr: "Récitez 1106 fois pour voir plus clairement les signes divins dans la vie quotidienne et la nature. Pour une pratique plus courte, 33 ou 99 répétitions est également un compte largement utilisé."
    },
    keywords: ["manifest", "evident", "apparent", "signs"]
  },
  {
    number: 76,
    arabic: "الْبَاطِن",
    transliteration: "Al-Bāṭin",
    translation: { en: "The Hidden", fr: "Le Caché" },
    abjadValue: 62,
    meaning: {
      en: "The One whose true essence is beyond perception, hidden from every created sense.",
      fr: "Celui dont l'essence véritable est au-delà de la perception, cachée de tout sens créé."
    },
    spiritualPractice: {
      en: "Recite 62 times to seek inward, hidden knowledge and closeness beyond outward appearances. For a shorter practice, 33 or 99 repetitions is also a widely used count.",
      fr: "Récitez 62 fois pour rechercher une connaissance intérieure, cachée, au-delà des apparences. Pour une pratique plus courte, 33 ou 99 répétitions est également un compte largement utilisé."
    },
    keywords: ["hidden", "inner", "unseen", "esoteric"]
  },
  {
    number: 77,
    arabic: "الْوَالِي",
    transliteration: "Al-Wāli",
    translation: { en: "The Governor", fr: "Le Gouverneur" },
    abjadValue: 47,
    meaning: {
      en: "The One who governs and administers the affairs of all creation with complete authority.",
      fr: "Celui qui gouverne et administre les affaires de toute la création avec une autorité complète."
    },
    spiritualPractice: {
      en: "Recite 47 times for order and good governance in one's own household or responsibilities. For a shorter practice, 33 or 99 repetitions is also a widely used count.",
      fr: "Récitez 47 fois pour l'ordre et une bonne gestion dans son propre foyer ou ses responsabilités. Pour une pratique plus courte, 33 ou 99 répétitions est également un compte largement utilisé."
    },
    keywords: ["governor", "administrator", "authority", "order"]
  },
  {
    number: 78,
    arabic: "الْمُتَعَالِي",
    transliteration: "Al-Mutaʿālī",
    translation: { en: "The Supreme One", fr: "Le Très Élevé" },
    abjadValue: 551,
    meaning: {
      en: "The One utterly exalted above every limitation, comparison, or created attribute.",
      fr: "Celui absolument exalté au-dessus de toute limitation, comparaison ou attribut créé."
    },
    spiritualPractice: {
      en: "Recite 551 times to rise above petty concerns and reconnect with what is truly transcendent. For a shorter practice, 33 or 99 repetitions is also a widely used count.",
      fr: "Récitez 551 fois pour s'élever au-dessus des préoccupations mesquines et se reconnecter au transcendant. Pour une pratique plus courte, 33 ou 99 répétitions est également un compte largement utilisé."
    },
    keywords: ["supreme", "transcendent", "exalted", "sublime"]
  },
  {
    number: 79,
    arabic: "الْبَرّ",
    transliteration: "Al-Barr",
    translation: { en: "The Source of All Goodness", fr: "La Source de Tout Bien" },
    abjadValue: 202,
    meaning: {
      en: "The One whose goodness and kindness toward His creation is expansive and unceasing.",
      fr: "Celui dont la bonté et la bienveillance envers Sa création sont vastes et incessantes."
    },
    spiritualPractice: {
      en: "Recite 202 times to invite goodness into one's affairs and to become a source of good to others. For a shorter practice, 33 or 99 repetitions is also a widely used count.",
      fr: "Récitez 202 fois pour inviter le bien dans ses affaires et devenir soi-même source de bien pour les autres. Pour une pratique plus courte, 33 ou 99 répétitions est également un compte largement utilisé."
    },
    keywords: ["good", "kind", "beneficent", "righteous"]
  },
  {
    number: 80,
    arabic: "التَّوَاب",
    transliteration: "At-Tawwāb",
    translation: { en: "The Guide to Repentance", fr: "Celui qui Accepte le Repentir" },
    abjadValue: 409,
    meaning: {
      en: "The One who repeatedly accepts the repentance of His servants, however often they return.",
      fr: "Celui qui accepte à maintes reprises le repentir de Ses serviteurs, aussi souvent qu'ils reviennent."
    },
    spiritualPractice: {
      en: "Recite 409 times when seeking sincere repentance (tawbah) and a fresh start after wrongdoing. For a shorter practice, 33 or 99 repetitions is also a widely used count.",
      fr: "Récitez 409 fois en cherchant un repentir sincère (tawbah) et un nouveau départ après une faute. Pour une pratique plus courte, 33 ou 99 répétitions est également un compte largement utilisé."
    },
    keywords: ["repentance", "returning", "forgiveness", "renewal"]
  },
  {
    number: 81,
    arabic: "الْمُنْتَقِم",
    transliteration: "Al-Muntaqim",
    translation: { en: "The Avenger", fr: "Le Vengeur" },
    abjadValue: 630,
    meaning: {
      en: "The One who justly requites wrongdoing and defends the oppressed against oppressors.",
      fr: "Celui qui rétribue justement le mal et défend les opprimés contre les oppresseurs."
    },
    spiritualPractice: {
      en: "Recite 630 times when seeking justice against persistent wrongdoing, with patience and restraint. For a shorter practice, 33 or 99 repetitions is also a widely used count.",
      fr: "Récitez 630 fois en cherchant justice contre un tort persistant, avec patience et retenue. Pour une pratique plus courte, 33 ou 99 répétitions est également un compte largement utilisé."
    },
    keywords: ["justice", "requital", "avenger", "accountability"]
  },
  {
    number: 82,
    arabic: "العَفُوّ",
    transliteration: "Al-ʿAfuww",
    translation: { en: "The Pardoner", fr: "Celui qui Pardonne" },
    abjadValue: 156,
    meaning: {
      en: "The One who erases sin entirely, as though it had never been committed.",
      fr: "Celui qui efface entièrement le péché, comme s'il n'avait jamais été commis."
    },
    spiritualPractice: {
      en: "Recite 156 times seeking complete pardon, and to cultivate the habit of pardoning others. For a shorter practice, 33 or 99 repetitions is also a widely used count.",
      fr: "Récitez 156 fois en cherchant un pardon complet, et pour cultiver l'habitude de pardonner aux autres. Pour une pratique plus courte, 33 ou 99 répétitions est également un compte largement utilisé."
    },
    keywords: ["pardon", "forgiveness", "erasure", "mercy"]
  },
  {
    number: 83,
    arabic: "الرَّؤُوف",
    transliteration: "Ar-Raʾūf",
    translation: { en: "The Clement", fr: "Le Clément" },
    abjadValue: 292,
    meaning: {
      en: "The One whose tenderness and gentle compassion soften even the harshest hardship.",
      fr: "Celui dont la tendresse et la douce compassion adoucissent même les épreuves les plus dures."
    },
    spiritualPractice: {
      en: "Recite 292 times for gentleness with oneself and others in a season of hardship. For a shorter practice, 33 or 99 repetitions is also a widely used count.",
      fr: "Récitez 292 fois pour la douceur envers soi-même et les autres dans une période difficile. Pour une pratique plus courte, 33 ou 99 répétitions est également un compte largement utilisé."
    },
    keywords: ["clement", "tender", "compassionate", "gentle"]
  },
  {
    number: 84,
    arabic: "مَالِكُ الْمُلْك",
    transliteration: "Mālik al-Mulk",
    translation: { en: "Owner of All Sovereignty", fr: "Maître de la Royauté" },
    abjadValue: 212,
    meaning: {
      en: "The One who owns and grants dominion to whomever He wills, and removes it as He wills.",
      fr: "Celui qui possède et accorde la royauté à qui Il veut, et la retire comme Il veut."
    },
    spiritualPractice: {
      en: "Recite 212 times for authority in one's affairs and acceptance of shifts in fortune. For a shorter practice, 33 or 99 repetitions is also a widely used count.",
      fr: "Récitez 212 fois pour l'autorité dans ses affaires et l'acceptation des changements de fortune. Pour une pratique plus courte, 33 ou 99 répétitions est également un compte largement utilisé."
    },
    keywords: ["sovereignty", "dominion", "ownership", "authority"]
  },
  {
    number: 85,
    arabic: "ذُوالْجَلاَلِ وَالإكْرَام",
    transliteration: "Dhū al-Jalāli wa al-Ikrām",
    translation: { en: "Lord of Majesty and Generosity", fr: "Le Maître de la Majesté et de la Générosité" },
    abjadValue: 1100,
    meaning: {
      en: "The One who combines absolute majesty with boundless generosity toward His creation.",
      fr: "Celui qui unit majesté absolue et générosité sans limite envers Sa création."
    },
    spiritualPractice: {
      en: "Recite 1100 times for a combination of dignity and generosity in one's own character. For a shorter practice, 33 or 99 repetitions is also a widely used count.",
      fr: "Récitez 1100 fois pour unir dignité et générosité dans son propre caractère. Pour une pratique plus courte, 33 ou 99 répétitions est également un compte largement utilisé."
    },
    keywords: ["majesty", "generosity", "honor", "bounty"]
  },
  {
    number: 86,
    arabic: "الْمُقْسِط",
    transliteration: "Al-Muqsiṭ",
    translation: { en: "The Equitable", fr: "L'Équitable" },
    abjadValue: 209,
    meaning: {
      en: "The One who establishes perfect equity in all His judgments and dealings.",
      fr: "Celui qui établit une équité parfaite dans tous Ses jugements et Ses affaires."
    },
    spiritualPractice: {
      en: "Recite 209 times when seeking a fair, balanced resolution between two parties. For a shorter practice, 33 or 99 repetitions is also a widely used count.",
      fr: "Récitez 209 fois en cherchant une résolution juste et équilibrée entre deux parties. Pour une pratique plus courte, 33 ou 99 répétitions est également un compte largement utilisé."
    },
    keywords: ["equitable", "fair", "balanced", "just"]
  },
  {
    number: 87,
    arabic: "الْجَامِع",
    transliteration: "Al-Jāmiʿ",
    translation: { en: "The Gatherer", fr: "Celui qui Rassemble" },
    abjadValue: 114,
    meaning: {
      en: "The One who will gather all creation together, and who unites what is scattered.",
      fr: "Celui qui rassemblera toute la création, et qui unit ce qui est dispersé."
    },
    spiritualPractice: {
      en: "Recite 114 times to reunite a scattered family, community, or a fragmented state of mind. For a shorter practice, 33 or 99 repetitions is also a widely used count.",
      fr: "Récitez 114 fois pour réunir une famille dispersée, une communauté ou un esprit fragmenté. Pour une pratique plus courte, 33 ou 99 répétitions est également un compte largement utilisé."
    },
    keywords: ["gatherer", "unifier", "reunion", "assembly"]
  },
  {
    number: 88,
    arabic: "الْغَنِيّ",
    transliteration: "Al-Ghaniyy",
    translation: { en: "The Self-Sufficient", fr: "Le Riche par Lui-Même" },
    abjadValue: 1060,
    meaning: {
      en: "The One utterly free of any need, possessing complete and total riches.",
      fr: "Celui absolument libre de tout besoin, possédant une richesse complète et totale."
    },
    spiritualPractice: {
      en: "Recite 1060 times for contentment (qināʿah) and freedom from dependence on others. For a shorter practice, 33 or 99 repetitions is also a widely used count.",
      fr: "Récitez 1060 fois pour le contentement (qināʿah) et la liberté vis-à-vis de la dépendance envers les autres. Pour une pratique plus courte, 33 ou 99 répétitions est également un compte largement utilisé."
    },
    keywords: ["self-sufficient", "rich", "independent", "content"]
  },
  {
    number: 89,
    arabic: "الْمُغْنِي",
    transliteration: "Al-Mughnī",
    translation: { en: "The Enricher", fr: "Celui qui Enrichit" },
    abjadValue: 1100,
    meaning: {
      en: "The One who enriches and grants sufficiency to whomever He wills.",
      fr: "Celui qui enrichit et accorde la suffisance à qui Il veut."
    },
    spiritualPractice: {
      en: "Recite 1100 times when seeking financial ease, sufficiency, and freedom from want. For a shorter practice, 33 or 99 repetitions is also a widely used count.",
      fr: "Récitez 1100 fois en cherchant l'aisance financière, la suffisance et la libération du besoin. Pour une pratique plus courte, 33 ou 99 répétitions est également un compte largement utilisé."
    },
    keywords: ["enricher", "provider", "sufficiency", "wealth"]
  },
  {
    number: 90,
    arabic: "اَلْمَانِع",
    transliteration: "Al-Māniʿ",
    translation: { en: "The Preventer of Harm", fr: "Celui qui Empêche le Mal" },
    abjadValue: 161,
    meaning: {
      en: "The One who withholds harm from His servants and protects them from what would injure them.",
      fr: "Celui qui préserve Ses serviteurs du mal et les protège de ce qui pourrait leur nuire."
    },
    spiritualPractice: {
      en: "Recite 161 times for protection from harm, danger, and calamity. For a shorter practice, 33 or 99 repetitions is also a widely used count.",
      fr: "Récitez 161 fois pour la protection contre le mal, le danger et le malheur. Pour une pratique plus courte, 33 ou 99 répétitions est également un compte largement utilisé."
    },
    keywords: ["preventer", "protector", "shield", "safety"]
  },
  {
    number: 91,
    arabic: "الضَّارَّ",
    transliteration: "Aḍ-Ḍārr",
    translation: { en: "The One Who Creates Harm", fr: "Celui qui Crée le Préjudice" },
    abjadValue: 1001,
    meaning: {
      en: "The One who permits hardship to occur as a test, trial, or consequence, within His wisdom.",
      fr: "Celui qui permet l'épreuve comme test, procès ou conséquence, dans Sa sagesse."
    },
    spiritualPractice: {
      en: "Recite 1001 times for perspective when facing hardship, trusting the wisdom behind it. For a shorter practice, 33 or 99 repetitions is also a widely used count.",
      fr: "Récitez 1001 fois pour une perspective face à l'épreuve, en faisant confiance à la sagesse qui la sous-tend. Pour une pratique plus courte, 33 ou 99 répétitions est également un compte largement utilisé."
    },
    keywords: ["trial", "hardship", "wisdom", "test"]
  },
  {
    number: 92,
    arabic: "النَّافِع",
    transliteration: "An-Nāfiʿ",
    translation: { en: "The Bestower of Benefit", fr: "Celui qui Accorde le Bienfait" },
    abjadValue: 201,
    meaning: {
      en: "The One from whom all true benefit flows, in this life and the next.",
      fr: "Celui de qui découle tout bienfait véritable, dans cette vie et la suivante."
    },
    spiritualPractice: {
      en: "Recite 201 times when seeking benefit and blessing in an undertaking or decision. For a shorter practice, 33 or 99 repetitions is also a widely used count.",
      fr: "Récitez 201 fois en cherchant bienfait et bénédiction dans une entreprise ou une décision. Pour une pratique plus courte, 33 ou 99 répétitions est également un compte largement utilisé."
    },
    keywords: ["beneficial", "benefit", "advantageous", "blessing"]
  },
  {
    number: 93,
    arabic: "النُّور",
    transliteration: "An-Nūr",
    translation: { en: "The Light", fr: "La Lumière" },
    abjadValue: 256,
    meaning: {
      en: "The One who illuminates the heavens, the earth, and the hearts of the guided.",
      fr: "Celui qui illumine les cieux, la terre et les cœurs des bien-guidés."
    },
    spiritualPractice: {
      en: "Recite 256 times for clarity, guidance, and light in a time of confusion. For a shorter practice, 33 or 99 repetitions is also a widely used count.",
      fr: "Récitez 256 fois pour la clarté, la guidance et la lumière en période de confusion. Pour une pratique plus courte, 33 ou 99 répétitions est également un compte largement utilisé."
    },
    keywords: ["light", "illumination", "clarity", "guidance"]
  },
  {
    number: 94,
    arabic: "الْهَادِي",
    transliteration: "Al-Hādī",
    translation: { en: "The Guide", fr: "Le Guide" },
    abjadValue: 20,
    meaning: {
      en: "The One who guides whom He wills to the straight path and true understanding.",
      fr: "Celui qui guide qui Il veut vers le droit chemin et la véritable compréhension."
    },
    spiritualPractice: {
      en: "Recite 20 times when seeking direction and guidance at a crossroads in life. For a shorter practice, 33 or 99 repetitions is also a widely used count.",
      fr: "Récitez 20 fois en cherchant direction et guidance à un carrefour de la vie. Pour une pratique plus courte, 33 ou 99 répétitions est également un compte largement utilisé."
    },
    keywords: ["guide", "direction", "guidance", "path"]
  },
  {
    number: 95,
    arabic: "الْبَدِيع",
    transliteration: "Al-Badīʿ",
    translation: { en: "The Incomparable Originator", fr: "L'Innovateur Incomparable" },
    abjadValue: 86,
    meaning: {
      en: "The One who creates without any precedent or prior example to follow.",
      fr: "Celui qui crée sans aucun précédent ni exemple antérieur à suivre."
    },
    spiritualPractice: {
      en: "Recite 86 times when seeking creative insight or an unprecedented solution to a problem. For a shorter practice, 33 or 99 repetitions is also a widely used count.",
      fr: "Récitez 86 fois en cherchant une intuition créative ou une solution inédite à un problème. Pour une pratique plus courte, 33 ou 99 répétitions est également un compte largement utilisé."
    },
    keywords: ["originator", "innovator", "unprecedented", "creative"]
  },
  {
    number: 96,
    arabic: "اَلْبَاقِي",
    transliteration: "Al-Bāqī",
    translation: { en: "The Everlasting", fr: "L'Éternel Subsistant" },
    abjadValue: 113,
    meaning: {
      en: "The One whose existence continues forever, unaffected by the passing of time.",
      fr: "Celui dont l'existence se poursuit éternellement, non affectée par le passage du temps."
    },
    spiritualPractice: {
      en: "Recite 113 times for perspective on what endures, beyond what is temporary and passing. For a shorter practice, 33 or 99 repetitions is also a widely used count.",
      fr: "Récitez 113 fois pour une perspective sur ce qui perdure, au-delà de ce qui est temporaire et passager. Pour une pratique plus courte, 33 ou 99 répétitions est également un compte largement utilisé."
    },
    keywords: ["everlasting", "eternal", "enduring", "permanent"]
  },
  {
    number: 97,
    arabic: "الْوَارِث",
    transliteration: "Al-Wārith",
    translation: { en: "The Inheritor", fr: "L'Héritier" },
    abjadValue: 707,
    meaning: {
      en: "The One who remains and inherits all things after every creation has perished.",
      fr: "Celui qui demeure et hérite de toutes choses après la disparition de toute création."
    },
    spiritualPractice: {
      en: "Recite 707 times for detachment from what is temporary and trust in what truly remains. For a shorter practice, 33 or 99 repetitions is also a widely used count.",
      fr: "Récitez 707 fois pour le détachement de ce qui est temporaire et la confiance en ce qui demeure vraiment. Pour une pratique plus courte, 33 ou 99 répétitions est également un compte largement utilisé."
    },
    keywords: ["inheritor", "remaining", "legacy", "permanence"]
  },
  {
    number: 98,
    arabic: "الرَّشِيد",
    transliteration: "Ar-Rashīd",
    translation: { en: "The Guide to the Right Path", fr: "Celui qui Guide avec Droiture" },
    abjadValue: 514,
    meaning: {
      en: "The One whose guidance leads infallibly to what is right, without any misdirection.",
      fr: "Celui dont la guidance mène infailliblement vers ce qui est juste, sans aucune erreur."
    },
    spiritualPractice: {
      en: "Recite 514 times when seeking sound judgment and the right decision in a complex matter. For a shorter practice, 33 or 99 repetitions is also a widely used count.",
      fr: "Récitez 514 fois en cherchant un jugement sain et la bonne décision dans une affaire complexe. Pour une pratique plus courte, 33 ou 99 répétitions est également un compte largement utilisé."
    },
    keywords: ["rightly-guided", "wise", "sound", "judgment"]
  },
  {
    number: 99,
    arabic: "الصَّبُور",
    transliteration: "Aṣ-Ṣabūr",
    translation: { en: "The Patient", fr: "Le Patient" },
    abjadValue: 298,
    meaning: {
      en: "The One who withholds swift punishment with perfect patience, giving time for return.",
      fr: "Celui qui retient un châtiment rapide avec une patience parfaite, laissant le temps de revenir."
    },
    spiritualPractice: {
      en: "Recite 298 times for patience (ṣabr) in prolonged hardship or waiting. For a shorter practice, 33 or 99 repetitions is also a widely used count.",
      fr: "Récitez 298 fois pour la patience (ṣabr) dans une épreuve ou une attente prolongée. Pour une pratique plus courte, 33 ou 99 répétitions est également un compte largement utilisé."
    },
    keywords: ["patient", "enduring", "steadfast", "perseverance"]
  }
];

// Helper functions
export function findDivineNameByValue(value: number): DivineName | undefined {
  return DIVINE_NAMES.find(name => name.abjadValue === value);
}

export function findDivineNameByNumber(number: number): DivineName | undefined {
  return DIVINE_NAMES.find(name => name.number === number);
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

