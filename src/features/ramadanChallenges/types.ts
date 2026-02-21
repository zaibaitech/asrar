/**
 * Ramadan Spiritual Challenge Types
 * ==================================
 * Data models for the multi-challenge hub supporting:
 * - Istighfār, Ṣalawāt, Divine Name, Custom, and Prophetic Names challenges
 * - Session logging with prayer-time tags
 * - Streak tracking
 * - Community aggregation (mock until backend ready)
 */

// ─── Challenge Types ─────────────────────────────────────────────────────────────

export type ChallengeType = 'ISTIGHFAR' | 'SALAWAT' | 'DIVINE_NAME' | 'CUSTOM' | 'PROPHETIC_NAMES';

export type SessionTag =
  | 'Fajr'
  | 'Ḍuḥā / Morning'
  | 'Ẓuhr'
  | 'ʿAṣr'
  | 'Maghrib / Ifṭār'
  | 'ʿIshāʾ / Tarāwīḥ'
  | 'Other';

// ─── Session Log ─────────────────────────────────────────────────────────────────

export interface SessionLog {
  /** ISO date string "YYYY-MM-DD" */
  date: string;
  /** Prayer time or session tag */
  session: SessionTag;
  /** Number of recitations logged */
  count: number;
  /** ISO timestamp when logged */
  timestamp: string;
}

// ─── Challenge ───────────────────────────────────────────────────────────────────

export interface Challenge {
  /** Unique identifier (UUID) */
  id: string;
  /** Challenge category */
  type: ChallengeType;
  /** Display title (e.g., "Ramadan Istighfār") */
  title: string;
  /** Primary Arabic text for the dhikr */
  arabicText: string;
  /** Latin transliteration */
  transliteration: string;
  /** English/French meaning (optional) */
  meaning?: string;
  /** Daily recitation target */
  dailyTarget: number;
  /** Total target for the entire Ramadan (30 days) */
  ramadanTarget: number;
  /** Progress made today (resets at midnight) */
  todayProgress: number;
  /** Total progress across all of Ramadan */
  ramadanProgress: number;
  /** Consecutive days with at least 1 recitation logged */
  streakDays: number;
  /** Last date a recitation was logged (ISO "YYYY-MM-DD") */
  lastLoggedDate: string | null;
  /** Quick-tap amounts for fast logging */
  quickAddPresets: number[];
  /** Full session log history */
  sessionLogs: SessionLog[];
  /** ISO timestamp of challenge creation */
  createdAt: string;
}

// ─── Challenge Presets ───────────────────────────────────────────────────────────

export interface SalawatVariant {
  id: string;
  arabicText: string;
  transliteration: string;
  meaning: string;
}

/** Extended Ṣalawāt Preset with full metadata */
export interface SalawatPreset {
  id: string;
  title: string;
  tradition: string;
  arabicText: string;
  transliteration: string;
  meaning: string;
  quickAddPresets: number[];
  recommendedDaily: number;
  note: string;
}

export interface DivineNameOption {
  id: string;
  arabicName: string;
  transliteration: string;
  meaning: string;
}

// ─── Community Stats (Mock) ──────────────────────────────────────────────────────

export interface CommunityStats {
  /** Total dhikr completed by all users today */
  todayTotal: number;
  /** Total dhikr completed this Ramadan */
  ramadanTotal: number;
  /** Number of active participants */
  activeUsers: number;
  /** Last updated timestamp */
  lastUpdated: string;
}

// ─── Store State ─────────────────────────────────────────────────────────────────

export interface RamadanChallengesState {
  /** List of active challenges */
  challenges: Challenge[];
  /** Community statistics (mock/real) */
  community: CommunityStats;
  /** Whether state has been hydrated from localStorage */
  isHydrated: boolean;
  /** Current date for day reset detection */
  currentDate: string;
}

// ─── Store Actions ───────────────────────────────────────────────────────────────

export type RamadanChallengesAction =
  | { type: 'HYDRATE'; payload: { challenges: Challenge[]; currentDate: string } }
  | { type: 'ADD_CHALLENGE'; payload: Challenge }
  | { type: 'REMOVE_CHALLENGE'; payload: { id: string } }
  | { type: 'LOG_COUNT'; payload: { id: string; amount: number; session: SessionTag } }
  | { type: 'SET_TARGETS'; payload: { id: string; dailyTarget: number; ramadanTarget: number } }
  | { type: 'RESET_TODAY'; payload: { currentDate: string } }
  | { type: 'UPDATE_COMMUNITY'; payload: CommunityStats };

// ─── Preset Data ─────────────────────────────────────────────────────────────────

/** Legacy Ṣalawāt variants (kept for backward compatibility) */
export const SALAWAT_VARIANTS: SalawatVariant[] = [
  {
    id: 'simple',
    arabicText: 'اللّٰهُمَّ صَلِّ عَلَىٰ مُحَمَّد',
    transliteration: 'Allāhumma ṣalli ʿalā Muḥammad',
    meaning: 'O Allah, send blessings upon Muhammad',
  },
  {
    id: 'sayyidina',
    arabicText: 'اللّٰهُمَّ صَلِّ عَلَىٰ سَيِّدِنَا مُحَمَّد',
    transliteration: 'Allāhumma ṣalli ʿalā Sayyidinā Muḥammad',
    meaning: 'O Allah, send blessings upon our Master Muhammad',
  },
  {
    id: 'karam',
    arabicText: 'اللّٰهُمَّ صَلِّ عَلَىٰ الْمَوْصُوفِ بِالْكَرَمِ وَالْجُود',
    transliteration: 'Allāhumma ṣalli ʿalā al-mawṣūf bil-karam wal-jūd',
    meaning: 'O Allah, send blessings upon the one described with generosity and munificence',
  },
];

/** Extended Ṣalawāt Presets with full metadata and authentic texts */
export const SALAWAT_PRESETS: SalawatPreset[] = [
  {
    id: 'salawat_ibrahimiyya',
    title: 'Ṣalāt al-Ibrāhīmiyya',
    tradition: 'Prophetic Ḥadīth · Ṣaḥīḥ al-Bukhārī',
    arabicText: `اللَّهُمَّ صَلِّ عَلَى مُحَمَّدٍ وَعَلَى آلِ مُحَمَّدٍ
كَمَا صَلَّيْتَ عَلَى إِبْرَاهِيمَ وَعَلَى آلِ إِبْرَاهِيمَ
إِنَّكَ حَمِيدٌ مَجِيدٌ
اللَّهُمَّ بَارِكْ عَلَى مُحَمَّدٍ وَعَلَى آلِ مُحَمَّدٍ
كَمَا بَارَكْتَ عَلَى إِبْرَاهِيمَ وَعَلَى آلِ إِبْرَاهِيمَ
إِنَّكَ حَمِيدٌ مَجِيدٌ`,
    transliteration: `Allāhumma ṣalli ʿalā Muḥammadin wa ʿalā āli Muḥammad,
kamā ṣallayta ʿalā Ibrāhīma wa ʿalā āli Ibrāhīm,
innaka Ḥamīdun Majīd.
Allāhumma bārik ʿalā Muḥammadin wa ʿalā āli Muḥammad,
kamā bārakta ʿalā Ibrāhīma wa ʿalā āli Ibrāhīm,
innaka Ḥamīdun Majīd.`,
    meaning: 'O Allah, send blessings upon Muḥammad and the family of Muḥammad, as You sent blessings upon Ibrāhīm and the family of Ibrāhīm — verily You are Most Praiseworthy, Most Glorious. O Allah, send grace upon Muḥammad and the family of Muḥammad, as You sent grace upon Ibrāhīm and the family of Ibrāhīm — verily You are Most Praiseworthy, Most Glorious.',
    quickAddPresets: [10, 33, 100, 313, 500, 1000],
    recommendedDaily: 100,
    note: 'The most authentic ṣalawāt, taught by the Prophet ﷺ himself. Recited in every Ṣalāh.',
  },
  {
    id: 'salawat_simple',
    title: 'Ṣalāt Mufrada · Simple Blessing',
    tradition: 'Universal · All Schools',
    arabicText: `اللَّهُمَّ صَلِّ وَسَلِّمْ وَبَارِكْ عَلَى سَيِّدِنَا مُحَمَّدٍ`,
    transliteration: `Allāhumma ṣalli wa sallim wa bārik ʿalā Sayyidinā Muḥammad`,
    meaning: 'O Allah, send blessings, peace, and grace upon our master Muḥammad.',
    quickAddPresets: [33, 100, 313, 500, 1000, 3000],
    recommendedDaily: 500,
    note: 'The shortest complete ṣalawāt — ideal for high-count daily dhikr sessions.',
  },
  {
    id: 'salawat_fatih',
    title: 'Ṣalāt al-Fātiḥ · The Opener',
    tradition: 'Ṭarīqa Tijāniyya · Shaykh Muḥammad al-Bakrī',
    arabicText: `اللَّهُمَّ صَلِّ عَلَى سَيِّدِنَا مُحَمَّدٍ الْفَاتِحِ لِمَا أُغْلِقَ
وَالْخَاتِمِ لِمَا سَبَقَ نَاصِرِ الْحَقِّ بِالْحَقِّ
وَالْهَادِي إِلَى صِرَاطِكَ الْمُسْتَقِيمِ
وَعَلَى آلِهِ حَقَّ قَدْرِهِ وَمِقْدَارِهِ الْعَظِيمِ`,
    transliteration: `Allāhumma ṣalli ʿalā Sayyidinā Muḥammadini l-fātiḥi limā ughliq,
wal-khātimi limā sabaqa, nāṣiri l-ḥaqqi bil-ḥaqq,
wal-hādī ilā ṣirāṭika l-mustaqīm,
wa ʿalā ālihi ḥaqqa qadrihi wa miqdārihil-ʿaẓīm.`,
    meaning: 'O Allah, send blessings upon our master Muḥammad — the Opener of what was closed, the Seal of what came before, the Helper of Truth through Truth, the Guide to Your straight path — and upon his family, blessings worthy of his immense station and grandeur.',
    quickAddPresets: [7, 33, 100, 313, 500, 1000],
    recommendedDaily: 100,
    note: 'Central wird of the Tijāniyya order. Especially beloved in West African Sufi communities.',
  },
  {
    id: 'salawat_nariyya',
    title: 'Ṣalāt al-Nāriyya · Prayer of Relief',
    tradition: 'Imam al-Qurṭubī · Also known as Ṣalāt al-Tafrijiyya',
    arabicText: `اللَّهُمَّ صَلِّ صَلَاةً كَامِلَةً وَسَلِّمْ سَلَامًا تَامًّا
عَلَى سَيِّدِنَا مُحَمَّدٍ الَّذِي تَنْحَلُّ بِهِ الْعُقَدُ
وَتَنْفَرِجُ بِهِ الْكُرَبُ وَتُقْضَى بِهِ الْحَوَائِجُ
وَتُنَالُ بِهِ الرَّغَائِبُ وَحُسْنُ الْخَوَاتِمِ
وَيُسْتَسْقَى الْغَمَامُ بِوَجْهِهِ الْكَرِيمِ
وَعَلَى آلِهِ وَصَحْبِهِ فِي كُلِّ لَمْحَةٍ وَنَفَسٍ
بِعَدَدِ كُلِّ مَعْلُومٍ لَكَ`,
    transliteration: `Allāhumma ṣalli ṣalātan kāmilatan wa sallim salāman tāmman
ʿalā Sayyidinā Muḥammadini lladhī tanḥallu bihil-ʿuqad,
wa tanfariju bihil-kurab, wa tuqḍā bihil-ḥawāʾij,
wa tunālu bihir-raghāʾib, wa ḥusnu l-khawātim,
wa yustasqā l-ghamāmu bi-wajhihil-karīm,
wa ʿalā ālihi wa ṣaḥbihī fī kulli lamḥatin wa nafas,
bi-ʿadadi kulli maʿlūmin lak.`,
    meaning: 'O Allah, bestow complete blessings and perfect peace upon our master Muḥammad — through whom knots are untied, distress is relieved, needs are fulfilled, desires are attained, and good endings are granted; through whose noble face rain is sought — and upon his family and companions in every moment and breath, equal in number to all that is known to You.',
    quickAddPresets: [11, 33, 100, 313, 444, 1000],
    recommendedDaily: 11,
    note: 'Known for alleviating difficulties. Traditionally recited 11 times for relief, or 4,444 times for major opening.',
  },
  {
    id: 'salawat_mashishiyya',
    title: 'Ṣalāt al-Mashīshiyya',
    tradition: 'Shaykh ʿAbd al-Salām ibn Mashīsh · Shādhilī tradition',
    arabicText: `اللَّهُمَّ صَلِّ عَلَى مَنْ مِنْهُ انْشَقَّتِ الأَسْرَارُ
وَانْفَلَقَتِ الأَنْوَارُ
وَفِيهِ ارْتَقَتِ الحَقَائِقُ
وَتَنَزَّلَتْ عُلُومُ آدَمَ فَأَعْجَزَ الخَلَائِقَ
وَلَهُ تَضَاءَلَتِ الفُهُومُ
فَلَمْ يُدْرِكْهُ مِنَّا سَابِقٌ وَلَا لَاحِقٌ`,
    transliteration: `Allāhumma ṣalli ʿalā man minhu nshaqqatil-asrār,
wa nfalaqatil-anwār,
wa fīhi rtaqatil-ḥaqāʾiq,
wa tanazzalat ʿulūmu Ādam fa-aʿjazal-khalāʾiq,
wa lahu taḍāʾalatil-fuhūm,
fa-lam yudrikhu minnā sābiqun wa lā lāḥiq.`,
    meaning: 'O Allah, send blessings upon the one from whom secrets split open, lights dawned, realities ascended, and the sciences of Ādam descended — bewildering all creation. Before him, all understanding falls short — none among us, first or last, can fully reach him.',
    quickAddPresets: [7, 33, 100, 313, 500, 1000],
    recommendedDaily: 100,
    note: 'The sublime prayer of Shaykh Ibn Mashīsh, spiritual guide of Imam al-Shādhilī. Widely recited in the Maghrib and West Africa.',
  },
  {
    id: 'salawat_jawharatul_kamal',
    title: 'Jawharatu l-Kamāl · Jewel of Perfection',
    tradition: 'Ṭarīqa Tijāniyya · Shaykh Aḥmad al-Tijānī',
    arabicText: `اللَّهُمَّ صَلِّ وَسَلِّمْ عَلَى عَيْنِ الرَّحْمَةِ الرَّبَّانِيَّةِ
وَالْيَاقُوتَةِ الْمُتَحَقِّقَةِ الْحَائِطَةِ بِمَرْكَزِ الْفُهُومِ وَالْمَعَانِي
وَنُورِ الْأَكْوَانِ الْمُتَكَوِّنَةِ الْآدَمِيِّ صَاحِبِ الْحَقِّ الرَّبَّانِيِّ
الْبَرْقِ الْأَسْطَعِ بِمُزُونِ الْأَرْبَاحِ الْمَالِئَةِ لِكُلِّ مُتَعَرِّضٍ وَالْبُحُورِ وَالْأَوَانِي
وَصَلِّ وَسَلِّمْ عَلَى عَيْنِ الْحَقِّ الَّتِي تَتَجَلَّى مِنْهَا عُرُوشُ الْحَقَائِقِ
عَيْنِ الْمَعَارِفِ الْأَقْوَمِ صِرَاطِكَ التَّامِّ الأَفْخَمِ
اللَّهُمَّ صَلِّ وَسَلِّمْ عَلَيْهِ وَعَلَى آلِهِ صَلَاةً تُعَرِّفُنَا بِهَا إِيَّاهُ`,
    transliteration: `Allāhumma ṣalli wa sallim ʿalā ʿayni r-raḥmati r-rabbāniyya,
wal-yāqūtati l-mutaḥaqqiqati l-ḥāʾiṭati bi-markazi l-fuhūmi wal-maʿānī,
wa nūri l-akwāni l-mutakawwinati l-ādamīyyi ṣāḥibi l-ḥaqqi r-rabbānī,
al-barqi l-asṭaʿi bi-muzūni l-arbāḥi l-māliʾati li-kulli mutaʿarriḍin wal-buḥūri wal-awānī.
Wa ṣalli wa sallim ʿalā ʿayni l-ḥaqqi llatī tatajallā minhā ʿurūshu l-ḥaqāʾiq,
ʿayni l-maʿārifi l-aqwam, ṣirāṭika t-tāmmi l-afkham.
Allāhumma ṣalli wa sallim ʿalayhi wa ʿalā ālihi ṣalātan tuʿarrifunā bihā iyyāh.`,
    meaning: 'O Allah, send blessings and peace upon the Essence of Divine Mercy — the realized ruby encompassing the centre of understanding and meaning — the light of all created realms, the human bearer of Divine Truth, the most radiant lightning in the clouds of profit that fills every seeker, all oceans and vessels. Send blessings and peace upon the Eye of Truth from which the thrones of realities manifest — the most upright source of gnosis, Your most complete and magnificent path. O Allah, send blessings and peace upon him and his family — blessings through which You make him known to us.',
    quickAddPresets: [7, 12, 33, 100, 313, 500],
    recommendedDaily: 12,
    note: 'The most exalted ṣalawāt of the Tijāniyya — recited 12 times daily in the wāẓifa. Requires respectful intention and attentiveness.',
  },
];

/** Pre-defined Divine Names for challenge */
export const DIVINE_NAME_OPTIONS: DivineNameOption[] = [
  { id: 'rahim', arabicName: 'يَا رَحِيم', transliteration: 'Yā Raḥīm', meaning: 'O Most Merciful' },
  { id: 'razzaq', arabicName: 'يَا رَزَّاق', transliteration: 'Yā Razzāq', meaning: 'O Provider' },
  { id: 'ghaffar', arabicName: 'يَا غَفَّار', transliteration: 'Yā Ghaffār', meaning: 'O Ever-Forgiving' },
  { id: 'latif', arabicName: 'يَا لَطِيف', transliteration: 'Yā Laṭīf', meaning: 'O Most Subtle' },
  { id: 'wadud', arabicName: 'يَا وَدُود', transliteration: 'Yā Wadūd', meaning: 'O Most Loving' },
  { id: 'kareem', arabicName: 'يَا كَرِيم', transliteration: 'Yā Karīm', meaning: 'O Most Generous' },
  { id: 'fattah', arabicName: 'يَا فَتَّاح', transliteration: 'Yā Fattāḥ', meaning: 'O Opener' },
  { id: 'nur', arabicName: 'يَا نُور', transliteration: 'Yā Nūr', meaning: 'O Light' },
];

/** Session tags in order of prayer times */
export const SESSION_TAGS: SessionTag[] = [
  'Fajr',
  'Ḍuḥā / Morning',
  'Ẓuhr',
  'ʿAṣr',
  'Maghrib / Ifṭār',
  'ʿIshāʾ / Tarāwīḥ',
  'Other',
];

/** Default quick-add amounts */
export const DEFAULT_QUICK_ADD_PRESETS = [33, 100, 313, 500, 1000];
