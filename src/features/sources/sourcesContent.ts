/**
 * Structure of the "Show the working + sources" layer (preview only): which
 * references each step has, their status, Qur'an refs and links. ALL visible
 * text (labels, notes, reference texts) lives in the i18n files
 * src/lib/i18n/lifeGuidance/{en,fr,ar,ur}.ts, so a wording change is a
 * translation edit only. EN is the reference; FR, AR and UR are drafts until the
 * Language Reviewer signs them off (docs/i18n/life-guidance-l10n.md).
 *
 * Source rules (set by Mario): never invent a citation or page number. Each
 * reference carries a status:
 *   'cited-in-repo' - taken from a comment in this repository's own source; the
 *                     original has NOT been re-checked here;
 *   'attributed'    - a named classical source whose text was read; the edition is linked;
 *   'quran'         - a Qur'an reference; the Arabic is fetched from the bundled
 *                     Tanzil text (/api/quran-verse), never typed in;
 *   'to-verify'     - a direction only; book, chapter and page still have to be
 *                     confirmed against a printed edition by a reviewer.
 */
import type { Language } from '../../lib/translations';
import { LIFE_GUIDANCE_STRINGS } from '../../lib/i18n/lifeGuidance';

export type StepId = 'letters' | 'kabir' | 'saghir' | 'tabi' | 'burj' | 'manzil' | 'lettersMansions';
export type Lang = Language;
export const LANGS: readonly Lang[] = ['en', 'fr', 'ar', 'ur'];
type L4 = Record<Lang, string>;

export type RefStatus = 'cited-in-repo' | 'quran' | 'to-verify' | 'attributed';

export interface SourceRef {
  status: RefStatus;
  /** Reference text in every UI language (from the i18n files). */
  text: L4;
  /** For status 'quran': surah and ayah, fetched verbatim from Tanzil. */
  quran?: { surah: number; ayah: number };
  /** Optional link to the edition used. */
  url?: string;
  /** Optional further links (dictionary entries, editions). */
  urls?: readonly string[];
}

export interface StepSource {
  /** What the step does, in one plain sentence, in every UI language. */
  note: L4;
  refs: SourceRef[];
}

/** Per step: status, Qur'an ref and links of each reference, in the order of the i18n refs. */
const REF_META: Record<StepId, Omit<SourceRef, 'text'>[]> = {
  letters: [{ status: 'cited-in-repo' }, { status: 'to-verify' }],
  kabir: [{ status: 'to-verify' }],
  saghir: [{ status: 'to-verify' }],
  tabi: [{ status: 'cited-in-repo' }, { status: 'to-verify' }],
  burj: [{ status: 'to-verify' }, { status: 'to-verify' }],
  manzil: [
    { status: 'quran', quran: { surah: 36, ayah: 39 } },
    { status: 'quran', quran: { surah: 10, ayah: 5 } },
    { status: 'cited-in-repo' },
    { status: 'to-verify' },
  ],
  lettersMansions: [
    { status: 'attributed', url: 'https://ablibrary.net/books/10942' },
    {
      status: 'attributed',
      urls: [
        'https://usul.ai/ar/t/anwa-fi-mawasim',
        'https://read.shamela.ws/book/9093/18',
        'https://shamela.ws/book/9093/115',
        'https://www.islamweb.net/ar/library/content/122/4221/شرط',
        'https://www.islamweb.net/ar/library/content/122/5047/طرف',
        'https://www.islamweb.net/ar/library/content/122/3398/زبن',
        'https://www.islamweb.net/ar/library/content/122/6200/فرغ',
        'https://arabiclexicon.hawramani.com/رشا/',
        'https://www.laneslexicon.com/word/فرغ/n33640',
      ],
    },
  ],
};

const STEP_IDS: StepId[] = ['letters', 'kabir', 'saghir', 'tabi', 'burj', 'manzil', 'lettersMansions'];
const S = (lang: Lang) => LIFE_GUIDANCE_STRINGS[lang].sources;
const l4 = (pick: (lang: Lang) => string): L4 => Object.fromEntries(LANGS.map((l) => [l, pick(l)])) as L4;

export const SOURCES: Record<StepId, StepSource> = Object.fromEntries(
  STEP_IDS.map((id) => [
    id,
    {
      note: l4((l) => S(l).notes[id]),
      refs: REF_META[id].map((meta, i) => ({ ...meta, text: l4((l) => S(l).refs[id][i]) })),
    },
  ]),
) as Record<StepId, StepSource>;

type LabelKey = Exclude<keyof ReturnType<typeof S>, 'steps' | 'notes' | 'refs' | 'elements' | 'zodiac'>;
const LABEL_KEYS: LabelKey[] = [
  'title', 'notCounted', 'showSource', 'hideSource', 'attributed', 'toVerify', 'citedInRepo', 'quranSrc',
  'total', 'remainder', 'preview', 'manzilToday', 'manzilNatal', 'buniEdition', 'position', 'order', 'tileToday',
];

/** UI labels as `LABELS.key[lang]` (and `LABELS.steps[id][lang]`), read from the i18n files. */
export const LABELS = {
  ...(Object.fromEntries(LABEL_KEYS.map((key) => [key, l4((l) => S(l)[key])])) as Record<LabelKey, L4>),
  steps: Object.fromEntries(STEP_IDS.map((id) => [id, l4((l) => S(l).steps[id])])) as Record<StepId, L4>,
};

/** Element and zodiac names in every UI language (Urdu included). */
export const elementName = (element: string, lang: Lang): string =>
  S(lang).elements[element as keyof ReturnType<typeof S>['elements']] ?? element;
export const zodiacName = (key: string, lang: Lang): string =>
  S(lang).zodiac[key as keyof ReturnType<typeof S>['zodiac']] ?? key;
