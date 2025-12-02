// Quranic Verses Database with Abjad Values
// Selected verses with significant numerical properties

export interface QuranicVerse {
  chapter: number;
  verse: number;
  arabic: string;
  transliteration: string;
  translation: {
    en: string;
    fr: string;
  };
  abjadValue: number;
  significance: {
    en: string;
    fr: string;
  };
  keywords: string[];
}

export const QURANIC_VERSES: QuranicVerse[] = [
  {
    chapter: 1,
    verse: 1,
    arabic: "بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ",
    transliteration: "Bismi Allāhi ar-Raḥmāni ar-Raḥīm",
    translation: {
      en: "In the name of Allah, the Most Gracious, the Most Merciful",
      fr: "Au nom d'Allah, le Tout Miséricordieux, le Très Miséricordieux"
    },
    abjadValue: 786,
    significance: {
      en: "The opening verse, foundation of all recitation. 786 is the most famous sacred number in Islamic tradition.",
      fr: "Le verset d'ouverture, fondement de toute récitation. 786 est le nombre sacré le plus célèbre de la tradition islamique."
    },
    keywords: ["bismillah", "opening", "mercy", "compassion", "sacred"]
  },
  {
    chapter: 36,
    verse: 1,
    arabic: "يس",
    transliteration: "Yā Sīn",
    translation: {
      en: "Ya-Sin (Arabic letters)",
      fr: "Yā-Sīn (lettres arabes)"
    },
    abjadValue: 70,
    significance: {
      en: "The 'Heart of the Quran'. Yā=10, Sīn=60. Used for spiritual healing and protection.",
      fr: "Le 'Cœur du Coran'. Yā=10, Sīn=60. Utilisé pour la guérison spirituelle et la protection."
    },
    keywords: ["yasin", "heart", "healing", "protection", "mysterious letters"]
  },
  {
    chapter: 2,
    verse: 255,
    arabic: "اللَّهُ لَا إِلَٰهَ إِلَّا هُوَ الْحَيُّ الْقَيُّومُ",
    transliteration: "Allāhu lā ilāha illā Huwa al-Ḥayyu al-Qayyūm",
    translation: {
      en: "Allah - there is no deity except Him, the Ever-Living, the Sustainer",
      fr: "Allah - il n'y a de divinité que Lui, le Vivant, Celui qui subsiste par Lui-même"
    },
    abjadValue: 1326,
    significance: {
      en: "Ayat al-Kursi (Throne Verse) - the greatest verse for protection and divine connection.",
      fr: "Ayat al-Kursi (Verset du Trône) - le plus grand verset pour la protection et la connexion divine."
    },
    keywords: ["ayat al-kursi", "throne", "protection", "divine names", "power"]
  },
  {
    chapter: 112,
    verse: 1,
    arabic: "قُلْ هُوَ اللَّهُ أَحَدٌ",
    transliteration: "Qul Huwa Allāhu Aḥad",
    translation: {
      en: "Say: He is Allah, the One",
      fr: "Dis: Il est Allah, l'Unique"
    },
    abjadValue: 289,
    significance: {
      en: "Surah Al-Ikhlas (Sincerity) - equals one-third of the Quran in reward. Affirms divine unity.",
      fr: "Sourate Al-Ikhlas (Sincérité) - équivaut à un tiers du Coran en récompense. Affirme l'unité divine."
    },
    keywords: ["ikhlas", "oneness", "unity", "tawhid", "sincerity"]
  },
  {
    chapter: 17,
    verse: 82,
    arabic: "وَنُنَزِّلُ مِنَ الْقُرْآنِ مَا هُوَ شِفَاءٌ وَرَحْمَةٌ",
    transliteration: "Wa nunazzilu mina al-Qur'āni mā huwa shifā'un wa raḥmah",
    translation: {
      en: "And We send down from the Quran that which is healing and mercy",
      fr: "Et Nous faisons descendre du Coran ce qui est guérison et miséricorde"
    },
    abjadValue: 1028,
    significance: {
      en: "The healing verse - affirms the Quran's power to heal spiritual and physical ailments.",
      fr: "Le verset de guérison - affirme le pouvoir du Coran de guérir les maux spirituels et physiques."
    },
    keywords: ["healing", "shifaa", "mercy", "medicine", "cure"]
  },
  {
    chapter: 55,
    verse: 13,
    arabic: "فَبِأَيِّ آلَاءِ رَبِّكُمَا تُكَذِّبَانِ",
    transliteration: "Fa bi-ayyi ālā'i Rabbikumā tukadhdhiban",
    translation: {
      en: "So which of the favors of your Lord would you deny?",
      fr: "Lequel donc des bienfaits de votre Seigneur nierez-vous?"
    },
    abjadValue: 1118,
    significance: {
      en: "Repeated 31 times in Surah Ar-Rahman. A reminder of divine blessings and gratitude.",
      fr: "Répété 31 fois dans la sourate Ar-Rahman. Un rappel des bénédictions divines et de la gratitude."
    },
    keywords: ["gratitude", "blessings", "favors", "rahman", "appreciation"]
  },
  {
    chapter: 2,
    verse: 286,
    arabic: "لَا يُكَلِّفُ اللَّهُ نَفْسًا إِلَّا وُسْعَهَا",
    transliteration: "Lā yukallifu Allāhu nafsan illā wus'ahā",
    translation: {
      en: "Allah does not burden a soul beyond what it can bear",
      fr: "Allah n'impose à aucune âme une charge supérieure à sa capacité"
    },
    abjadValue: 731,
    significance: {
      en: "A verse of comfort and reassurance about divine justice and mercy in trials.",
      fr: "Un verset de réconfort et d'assurance sur la justice divine et la miséricorde dans les épreuves."
    },
    keywords: ["mercy", "burden", "capacity", "justice", "comfort"]
  },
  {
    chapter: 94,
    verse: 6,
    arabic: "إِنَّ مَعَ الْعُسْرِ يُسْرًا",
    transliteration: "Inna ma'a al-'usri yusrā",
    translation: {
      en: "Indeed, with hardship comes ease",
      fr: "Certes, avec la difficulté vient la facilité"
    },
    abjadValue: 377,
    significance: {
      en: "A promise of relief after difficulty. The verse appears twice in Surah Ash-Sharh for emphasis.",
      fr: "Une promesse de soulagement après la difficulté. Le verset apparaît deux fois dans la sourate Ash-Sharh pour l'emphase."
    },
    keywords: ["ease", "hardship", "relief", "patience", "hope"]
  },
  {
    chapter: 3,
    verse: 26,
    arabic: "قُلِ اللَّهُمَّ مَالِكَ الْمُلْكِ",
    transliteration: "Quli Allāhumma Mālika al-Mulk",
    translation: {
      en: "Say: O Allah, Owner of Sovereignty",
      fr: "Dis: Ô Allah, Maître de la Royauté"
    },
    abjadValue: 542,
    significance: {
      en: "Beginning of the verse of divine power and sovereignty. Used for seeking provision and authority.",
      fr: "Début du verset du pouvoir et de la souveraineté divins. Utilisé pour chercher la subsistance et l'autorité."
    },
    keywords: ["sovereignty", "power", "provision", "authority", "dua"]
  },
  {
    chapter: 18,
    verse: 10,
    arabic: "رَبَّنَا آتِنَا مِن لَّدُنكَ رَحْمَةً",
    transliteration: "Rabbanā ātinā min ladunka raḥmah",
    translation: {
      en: "Our Lord, grant us mercy from Yourself",
      fr: "Notre Seigneur, accorde-nous une miséricorde de Ta part"
    },
    abjadValue: 729,
    significance: {
      en: "The prayer of the youths of the cave (Ashab al-Kahf) seeking divine mercy and guidance.",
      fr: "La prière des jeunes de la caverne (Ashab al-Kahf) demandant la miséricorde et la guidance divines."
    },
    keywords: ["mercy", "dua", "cave", "guidance", "protection"]
  }
];

// Helper function to find verses by Abjad value (with tolerance)
export function findVersesByValue(value: number, tolerance: number = 50): QuranicVerse[] {
  return QURANIC_VERSES.filter(verse => 
    Math.abs(verse.abjadValue - value) <= tolerance
  ).sort((a, b) => 
    Math.abs(a.abjadValue - value) - Math.abs(b.abjadValue - value)
  );
}

// Helper function to get exact verse match
export function getExactVerseMatch(value: number): QuranicVerse | undefined {
  return QURANIC_VERSES.find(verse => verse.abjadValue === value);
}

// Helper function to search by keyword
export function searchVersesByKeyword(keyword: string): QuranicVerse[] {
  const lowerKeyword = keyword.toLowerCase();
  return QURANIC_VERSES.filter(verse =>
    verse.keywords.some(k => k.includes(lowerKeyword)) ||
    verse.arabic.includes(keyword) ||
    verse.transliteration.toLowerCase().includes(lowerKeyword)
  );
}
