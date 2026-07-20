/**
 * Divine Name ↔ Intention — matching a life intention to the Name(s) of
 * Allah whose meaning corresponds to it, per the Quranic principle "wa
 * lillāhi al-asmāʾu al-ḥusnā fa-dʿūhu bihā" (7:180) — "and to Allah
 * belong the best names, so call upon Him by them."
 *
 * SOURCING METHODOLOGY (researched, not invented):
 * Every Name below is graded by how directly it is attested for this
 * specific intention:
 *  - 'hadith-or-quran': the Name (or the attribute it names) appears in
 *    an authentic hadith supplication or Quranic verse specifically tied
 *    to this need (e.g. Al-Ḥayy/Al-Qayyūm in the Prophet's ﷺ distress
 *    dua, Tirmidhi 3524; At-Tawwāb/Al-ʿAfuww in ʿĀʾisha's hadith,
 *    Tirmidhi 3513).
 *  - 'meaning-based': the Name's own literal Quranic meaning fits the
 *    intention directly (e.g. Ar-Razzāq = "The Provider" for provision),
 *    a legitimate and classically normal basis for duʿāʾ even without a
 *    hadith naming that exact pairing.
 * Every entry also carries its primary source citation in `sourceNote`.
 *
 * DELIBERATELY NOT INCLUDED: a numerology/abjad-value recitation count.
 * That convention (recite a Name N times, N = its abjad value) is used
 * elsewhere in this app for the separate Person-to-Divine-Name numerology
 * feature, where it is explicitly a numerology device. Carrying it into
 * this feature would misrepresent it as sunnah — mainstream scholarly
 * opinion (see e.g. IslamQA 194998) treats fixed per-Name recitation
 * counts for worldly benefit as having no basis in Quran or Sunnah, a
 * practice traced to al-Bunī's contested Shams al-Maʿārif rather than
 * authentic dhikr. This feature instead offers the Name itself (repeat
 * as often as one wishes, with sincerity and adab) and, where one
 * exists, the actual prophetic supplication that contains it.
 *
 * Name references are by `number` into src/data/divine-names.ts's
 * DIVINE_NAMES array — never duplicated here, so meaning/practice/
 * Arabic text stay single-sourced.
 */

export type DivineIntention =
  | 'provision'
  | 'healing'
  | 'distress'
  | 'protection'
  | 'guidance'
  | 'marriage'
  | 'forgiveness'
  | 'strength'
  | 'ease'
  | 'knowledge';

export interface IntentionInfo {
  id: DivineIntention;
  label: { en: string; fr: string };
  /** One-line description of the need, shown on the picker. */
  description: { en: string; fr: string };
}

export const DIVINE_INTENTIONS: IntentionInfo[] = [
  {
    id: 'provision',
    label: { en: 'Provision & Sustenance', fr: 'Subsistance et Provision' },
    description: { en: 'Rizq, livelihood, and material need', fr: 'Rizq, subsistance et besoins matériels' },
  },
  {
    id: 'healing',
    label: { en: 'Healing', fr: 'Guérison' },
    description: { en: 'Recovery from illness, physical or spiritual', fr: 'Rétablissement d\'une maladie, physique ou spirituelle' },
  },
  {
    id: 'distress',
    label: { en: 'Relief from Distress', fr: 'Soulagement de la détresse' },
    description: { en: 'Anxiety, grief, or a heavy heart', fr: "Anxiété, chagrin, ou cœur lourd" },
  },
  {
    id: 'protection',
    label: { en: 'Protection', fr: 'Protection' },
    description: { en: 'Safety from harm and fear', fr: 'Sécurité face au danger et à la peur' },
  },
  {
    id: 'guidance',
    label: { en: 'Guidance', fr: 'Guidance' },
    description: { en: 'Clarity in a decision — alongside istikhāra, not instead of it', fr: "Clarté dans une décision — en complément de l'istikhāra, pas à sa place" },
  },
  {
    id: 'marriage',
    label: { en: 'Marriage & Love', fr: 'Mariage et Amour' },
    description: { en: 'Harmony between spouses, love, and reconciliation', fr: 'Harmonie entre époux, amour et réconciliation' },
  },
  {
    id: 'forgiveness',
    label: { en: 'Forgiveness', fr: 'Pardon' },
    description: { en: 'Repentance (tawba) and seeking pardon', fr: 'Repentir (tawba) et recherche du pardon' },
  },
  {
    id: 'strength',
    label: { en: 'Strength & Patience', fr: 'Force et Patience' },
    description: { en: 'Endurance through hardship', fr: "Endurance face à l'épreuve" },
  },
  {
    id: 'ease',
    label: { en: 'Ease & Removing Obstacles', fr: 'Facilité et Levée des Obstacles' },
    description: { en: 'Opening a way through a difficult affair', fr: "Ouvrir une voie dans une affaire difficile" },
  },
  {
    id: 'knowledge',
    label: { en: 'Knowledge & Understanding', fr: 'Savoir et Compréhension' },
    description: { en: 'Increase in beneficial knowledge', fr: 'Accroissement du savoir bénéfique' },
  },
];

export interface IntentionNameEntry {
  /** Number into DIVINE_NAMES. */
  divineNameNumber: number;
  grade: 'hadith-or-quran' | 'meaning-based';
  sourceNote: { en: string; fr: string };
}

/**
 * The companion duʿāʾ shown alongside a Name where an authentic,
 * specifically-worded prophetic supplication exists for this intention —
 * more precise and more firmly sourced than reciting the Name alone.
 */
export interface CompanionDua {
  arabic: string;
  transliteration: string;
  translation: { en: string; fr: string };
  citation: string;
}

export const INTENTION_NAME_MAP: Record<DivineIntention, IntentionNameEntry[]> = {
  provision: [
    {
      divineNameNumber: 17, // Ar-Razzāq
      grade: 'hadith-or-quran',
      sourceNote: {
        en: 'Allah names Himself "ar-Razzāq" directly in Quran 51:58 — the clearest possible textual basis.',
        fr: "Allah se nomme Lui-même « ar-Razzāq » directement dans la sourate 51:58 — la base textuelle la plus claire possible.",
      },
    },
    {
      divineNameNumber: 16, // Al-Wahhāb
      grade: 'meaning-based',
      sourceNote: {
        en: '"The Bestower of gifts" (Quran 3:8) — commonly invoked alongside Ar-Razzāq for provision.',
        fr: '« Le Dispensateur de dons » (sourate 3:8) — souvent invoqué aux côtés de Ar-Razzāq pour la subsistance.',
      },
    },
    {
      divineNameNumber: 18, // Al-Fattāḥ
      grade: 'meaning-based',
      sourceNote: {
        en: '"The Opener" (Quran 34:26) — the One who opens doors of provision that appear closed.',
        fr: '« Celui qui ouvre » (sourate 34:26) — Celui qui ouvre les portes de subsistance qui paraissent fermées.',
      },
    },
  ],
  healing: [
    {
      divineNameNumber: 30, // Al-Laṭīf
      grade: 'meaning-based',
      sourceNote: {
        en: '"The Subtle, the Gentle" — widely invoked in illness for Allah\'s gentle, hidden kindness in bringing relief.',
        fr: "« Le Subtil, le Doux » — largement invoqué dans la maladie pour la douceur cachée d'Allah qui apporte le soulagement.",
      },
    },
  ],
  distress: [
    {
      divineNameNumber: 62, // Al-Ḥayy
      grade: 'hadith-or-quran',
      sourceNote: {
        en: 'The Prophet ﷺ taught: "Yā Ḥayyu yā Qayyūm, bi-raḥmatika astaghīth" (O Ever-Living, O Sustainer, by Your mercy I seek relief) — Tirmidhī 3524.',
        fr: 'Le Prophète ﷺ a enseigné : « Yā Ḥayyu yā Qayyūm, bi-raḥmatika astaghīth » (Ô Vivant, ô Soutien, par Ta miséricorde je cherche secours) — Tirmidhī 3524.',
      },
    },
    {
      divineNameNumber: 63, // Al-Qayyūm
      grade: 'hadith-or-quran',
      sourceNote: {
        en: 'Paired with Al-Ḥayy in the same prophetic supplication for distress — Tirmidhī 3524.',
        fr: 'Associé à Al-Ḥayy dans la même invocation prophétique pour la détresse — Tirmidhī 3524.',
      },
    },
  ],
  protection: [
    {
      divineNameNumber: 38, // Al-Ḥafīẓ
      grade: 'meaning-based',
      sourceNote: {
        en: '"The Preserver, the Guardian" (Quran 11:57, 34:21) — directly names the quality of protection.',
        fr: '« Le Préservateur, le Gardien » (sourates 11:57, 34:21) — nomme directement la qualité de protection.',
      },
    },
    {
      divineNameNumber: 55, // Al-Waliyy
      grade: 'meaning-based',
      sourceNote: {
        en: '"The Protecting Friend" (Quran 3:68 and elsewhere).',
        fr: '« Le Protecteur bienveillant » (sourate 3:68 et ailleurs).',
      },
    },
  ],
  guidance: [
    {
      divineNameNumber: 94, // Al-Hādī
      grade: 'meaning-based',
      sourceNote: {
        en: '"The Guide" (Quran 25:31) — literally the Name for guidance.',
        fr: '« Le Guide » (sourate 25:31) — littéralement le Nom de la guidance.',
      },
    },
    {
      divineNameNumber: 19, // Al-'Alīm
      grade: 'hadith-or-quran',
      sourceNote: {
        en: 'The istikhāra supplication itself invokes "bi-ʿilmika" (by Your knowledge) and "bi-qudratika" (by Your power) — Bukhārī 6382. This Name sits alongside istikhāra, not in place of it.',
        fr: "L'invocation d'istikhāra elle-même invoque « bi-ʿilmika » (par Ta connaissance) et « bi-qudratika » (par Ton pouvoir) — Bukhārī 6382. Ce Nom accompagne l'istikhāra, il ne la remplace pas.",
      },
    },
  ],
  marriage: [
    {
      divineNameNumber: 47, // Al-Wadūd
      grade: 'meaning-based',
      sourceNote: {
        en: '"The Most Loving" (Quran 85:14, 11:90) — the mawaddah (love) Allah places between spouses is itself named in Quran 30:21.',
        fr: '« Le Très Aimant » (sourates 85:14, 11:90) — la mawaddah (amour) qu\'Allah place entre les époux est elle-même nommée dans la sourate 30:21.',
      },
    },
  ],
  forgiveness: [
    {
      divineNameNumber: 14, // Al-Ghaffār
      grade: 'hadith-or-quran',
      sourceNote: {
        en: '"The Great Forgiver" (Quran 20:82, 71:10) — repeatedly paired with repentance in the Quran.',
        fr: '« Le Grand Pardonneur » (sourates 20:82, 71:10) — associé de façon répétée au repentir dans le Coran.',
      },
    },
    {
      divineNameNumber: 80, // At-Tawwāb
      grade: 'hadith-or-quran',
      sourceNote: {
        en: '"The Ever-Accepting of Repentance" (Quran 2:37, 2:128) — literally the Name of accepting tawba.',
        fr: '« Celui qui accepte sans cesse le repentir » (sourates 2:37, 2:128) — littéralement le Nom d\'acceptation de la tawba.',
      },
    },
    {
      divineNameNumber: 82, // Al-'Afuww
      grade: 'hadith-or-quran',
      sourceNote: {
        en: 'ʿĀʾisha reported the Prophet ﷺ taught: "Allāhumma innaka ʿAfuwwun tuḥibbu al-ʿafwa fa-ʿfu ʿannī" (O Allah, You are Pardoning, You love pardon, so pardon me) — Tirmidhī 3513.',
        fr: 'ʿĀʾisha a rapporté que le Prophète ﷺ a enseigné : « Allāhumma innaka ʿAfuwwun tuḥibbu al-ʿafwa fa-ʿfu ʿannī » (Ô Allah, Tu es Celui qui pardonne, Tu aimes le pardon, alors pardonne-moi) — Tirmidhī 3513.',
      },
    },
  ],
  strength: [
    {
      divineNameNumber: 53, // Al-Qawiyy
      grade: 'meaning-based',
      sourceNote: {
        en: '"The Most Strong" (Quran 22:40, 42:19) — invoked directly for strength.',
        fr: '« Le Très Fort » (sourates 22:40, 42:19) — invoqué directement pour la force.',
      },
    },
    {
      divineNameNumber: 8, // Al-'Azīz
      grade: 'meaning-based',
      sourceNote: {
        en: '"The Almighty" — one of the most frequently repeated Names in the Quran, invoked for might in hardship.',
        fr: "« Le Tout-Puissant » — l'un des Noms les plus fréquemment répétés dans le Coran, invoqué pour la force face à l'épreuve.",
      },
    },
  ],
  ease: [
    {
      divineNameNumber: 18, // Al-Fattāḥ
      grade: 'meaning-based',
      sourceNote: {
        en: '"The Opener, the Easer of all that is locked" (Quran 34:26) — the classical Name for opening a difficult affair.',
        fr: '« Celui qui ouvre, qui facilite tout ce qui est verrouillé » (sourate 34:26) — le Nom classique pour ouvrir une affaire difficile.',
      },
    },
    {
      divineNameNumber: 30, // Al-Laṭīf
      grade: 'meaning-based',
      sourceNote: {
        en: '"The Subtle" — the gentle, often-unseen ease Allah brings to a hard situation.',
        fr: "« Le Subtil » — la facilité douce et souvent invisible qu'Allah apporte à une situation difficile.",
      },
    },
  ],
  knowledge: [
    {
      divineNameNumber: 19, // Al-'Alīm
      grade: 'meaning-based',
      sourceNote: {
        en: '"The All-Knowing" — the source of all ʿilm (knowledge).',
        fr: "« L'Omniscient » — la source de tout ʿilm (savoir).",
      },
    },
  ],
};

/**
 * The authentic prophetic supplication shown alongside the Name(s) for
 * intentions where one exists — presented as the primary practice, with
 * the Name(s) above as the "index" pointing to it. Omitted for
 * intentions with no specifically-worded hadith/Quran supplication
 * (marriage, ease, strength) rather than inventing one.
 */
export const INTENTION_COMPANION_DUA: Partial<Record<DivineIntention, CompanionDua>> = {
  distress: {
    arabic: 'يَا حَيُّ يَا قَيُّومُ بِرَحْمَتِكَ أَسْتَغِيثُ',
    transliteration: 'Yā Ḥayyu yā Qayyūm, bi-raḥmatika astaghīth',
    translation: {
      en: 'O Ever-Living, O Sustainer of all, by Your mercy I seek relief.',
      fr: 'Ô Vivant, ô Soutien de toute chose, par Ta miséricorde je cherche secours.',
    },
    citation: 'Tirmidhī 3524',
  },
  healing: {
    arabic: 'أَذْهِبِ الْبَاسَ رَبَّ النَّاسِ، اشْفِ أَنْتَ الشَّافِي، لَا شِفَاءَ إِلَّا شِفَاؤُكَ، شِفَاءً لَا يُغَادِرُ سَقَمًا',
    transliteration: 'Adhhib al-baʾs, Rabb an-nās, ishfi anta ash-Shāfī, lā shifāʾa illā shifāʾuk, shifāʾan lā yughādiru saqamā',
    translation: {
      en: 'Remove the affliction, Lord of mankind, and heal — You are the Healer; there is no healing except Your healing, a healing that leaves no illness behind.',
      fr: "Ôte le mal, Seigneur des hommes, et guéris — Tu es le Guérisseur ; il n'y a de guérison que la Tienne, une guérison qui ne laisse aucune maladie.",
    },
    citation: 'Bukhārī 5742, Muslim 2191',
  },
  forgiveness: {
    arabic: 'اللَّهُمَّ إِنَّكَ عَفُوٌّ تُحِبُّ الْعَفْوَ فَاعْفُ عَنِّي',
    transliteration: 'Allāhumma innaka ʿAfuwwun tuḥibbu al-ʿafwa fa-ʿfu ʿannī',
    translation: {
      en: 'O Allah, You are Pardoning and You love pardon, so pardon me.',
      fr: 'Ô Allah, Tu es Celui qui pardonne et Tu aimes le pardon, alors pardonne-moi.',
    },
    citation: 'Tirmidhī 3513',
  },
  knowledge: {
    arabic: 'رَبِّ زِدْنِي عِلْمًا',
    transliteration: 'Rabbi zidnī ʿilmā',
    translation: {
      en: 'My Lord, increase me in knowledge.',
      fr: 'Mon Seigneur, accrois mon savoir.',
    },
    citation: 'Quran 20:114',
  },
};
