/**
 * Divine Name ↔ Intention — matching a life intention to the Name(s) of
 * Allah whose meaning corresponds to it, per the Quranic principle "wa
 * lillāhi al-asmāʾu al-ḥusnā fa-dʿūhu bihā" (7:180) — "and to Allah
 * belong the best names, so call upon Him by them."
 *
 * MATCHING METHODOLOGY: INTENTION_NAME_MAP below is now computed, not
 * hand-typed — for each DivineIntention, every one of the 99 Names is run
 * through calculateDivineNameIntentionCompatibility (src/utils/
 * divineNameCompatibility.ts) against its classicalFunction tags (see
 * src/constants/divineNameCompatibilityData.ts for that per-Name table and
 * its own sourcing note). Names whose classicalFunction directly includes
 * the intention are graded 'optimal'; names that only match through a
 * related-category fallback (e.g. clarity↔knowledge) are graded 'suitable'.
 * This replaces the previous static, hand-picked 1-3-entry
 * hadith-or-quran/meaning-based list.
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
 * exists, the actual prophetic supplication in INTENTION_COMPANION_DUA
 * below — that supplication list is untouched by this change and remains
 * the most rigorously hadith/Quran-sourced content in this feature.
 *
 * Name references are by `number` into src/data/divine-names.ts's
 * DIVINE_NAMES array — never duplicated here, so meaning/practice/
 * Arabic text stay single-sourced.
 */

import {
  DIVINE_NAME_METADATA,
  DIVINE_INTENTION_TO_CATEGORY,
} from './divineNameCompatibilityData';
import { calculateDivineNameIntentionCompatibilityEnFr } from '../utils/divineNameCompatibility';

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

export const INTENTION_EMOJI: Record<DivineIntention, string> = {
  provision: '🌾',
  healing: '💚',
  distress: '😔',
  protection: '🛡️',
  guidance: '🧭',
  marriage: '💍',
  forgiveness: '🤲',
  strength: '💪',
  ease: '🕊️',
  knowledge: '📖',
};

export interface IntentionNameEntry {
  /** Number into DIVINE_NAMES. */
  divineNameNumber: number;
  /** 'hadith-or-quran'/'meaning-based' are no longer produced by INTENTION_NAME_MAP (kept in the union in case older callers still branch on them); 'optimal'/'suitable' are this feature's current classicalFunction-based tiers. */
  grade: 'hadith-or-quran' | 'meaning-based' | 'optimal' | 'suitable';
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

export const INTENTION_NAME_MAP: Record<DivineIntention, IntentionNameEntry[]> = buildIntentionNameMap();

function buildIntentionNameMap(): Record<DivineIntention, IntentionNameEntry[]> {
  const result = {} as Record<DivineIntention, IntentionNameEntry[]>;

  (Object.keys(DIVINE_INTENTION_TO_CATEGORY) as DivineIntention[]).forEach((intention) => {
    const category = DIVINE_INTENTION_TO_CATEGORY[intention];

    const scored = DIVINE_NAME_METADATA.map((divineName) => {
      const { result: compat, sourceNote } = calculateDivineNameIntentionCompatibilityEnFr(
        divineName,
        category,
        DIVINE_NAME_METADATA,
      );
      return { divineName, compat, sourceNote };
    });

    const optimal = scored.filter((s) => s.compat.alignment === 'optimal');
    const suitable = scored.filter((s) => s.compat.alignment === 'suitable');

    result[intention] = [...optimal, ...suitable]
      .slice(0, 5)
      .map((s) => ({
        divineNameNumber: s.divineName.number,
        grade: s.compat.alignment as 'optimal' | 'suitable',
        sourceNote: s.sourceNote,
      }));
  });

  return result;
}

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
