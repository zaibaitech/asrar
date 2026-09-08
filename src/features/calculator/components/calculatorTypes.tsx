import { User, FileText, Hand, Type, Sparkles, BookOpen, HandCoins, CalendarHeart } from 'lucide-react';

export type CalculationType =
  | 'name'
  | 'phrase'
  | 'dhikr'
  | 'general'
  | 'divineResonance'
  | 'quranicResonance'
  | 'sadaqah'
  | 'sadaqahDay';

export const ALL_CALCULATION_TYPES: CalculationType[] = [
  'name',
  'phrase',
  'dhikr',
  'general',
  'divineResonance',
  'quranicResonance',
  'sadaqah',
  'sadaqahDay',
];

/** Types that need both a person's name and a mother's name, vs. the single-field types below. */
export const TWO_NAME_TYPES: CalculationType[] = ['divineResonance', 'quranicResonance'];

/** Types with their own dedicated input (not a name/phrase text field or the two-name form). */
export const DATE_OF_BIRTH_TYPES: CalculationType[] = ['sadaqah', 'sadaqahDay'];

export type CategoryKey = 'textAnalysis' | 'divine' | 'quran' | 'guidance';

export const CATEGORIES: { key: CategoryKey; Icon: typeof User; labelKey: string }[] = [
  { key: 'textAnalysis', Icon: FileText, labelKey: 'categoryTextAnalysis' },
  { key: 'divine', Icon: Sparkles, labelKey: 'categoryDivine' },
  { key: 'quran', Icon: BookOpen, labelKey: 'categoryQuran' },
  { key: 'guidance', Icon: HandCoins, labelKey: 'categoryGuidance' },
];

export const CALCULATION_TYPES: {
  type: CalculationType;
  Icon: typeof User;
  titleKey: string;
  subtitleKey: string;
  category: CategoryKey;
}[] = [
  { type: 'name', Icon: User, titleKey: 'typeName', subtitleKey: 'typeNameSubtitle', category: 'textAnalysis' },
  { type: 'phrase', Icon: FileText, titleKey: 'typePhrase', subtitleKey: 'typePhraseSubtitle', category: 'textAnalysis' },
  { type: 'general', Icon: Type, titleKey: 'typeGeneral', subtitleKey: 'typeGeneralSubtitle', category: 'textAnalysis' },
  { type: 'dhikr', Icon: Hand, titleKey: 'typeDhikr', subtitleKey: 'typeDhikrSubtitle', category: 'divine' },
  {
    type: 'divineResonance',
    Icon: Sparkles,
    titleKey: 'typeDivineResonance',
    subtitleKey: 'typeDivineResonanceSubtitle',
    category: 'divine',
  },
  {
    type: 'quranicResonance',
    Icon: BookOpen,
    titleKey: 'typeQuranicResonance',
    subtitleKey: 'typeQuranicResonanceSubtitle',
    category: 'quran',
  },
  {
    type: 'sadaqah',
    Icon: HandCoins,
    titleKey: 'typeSadaqah',
    subtitleKey: 'typeSadaqahSubtitle',
    category: 'guidance',
  },
  {
    type: 'sadaqahDay',
    Icon: CalendarHeart,
    titleKey: 'typeSadaqahDay',
    subtitleKey: 'typeSadaqahDaySubtitle',
    category: 'guidance',
  },
];
