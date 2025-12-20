/**
 * Complete spiritual data for server-side API calculations
 * Divine Names (99), Quran Metadata (114 Surahs), Spiritual Stations, Element Qualities
 */

import type { DivineName, QuranResonance, ElementQuality, SpiritualStation } from './server-calculations';

// ============================================================================
// DIVINE NAMES (99 Beautiful Names of Allah)
// ============================================================================

export const DIVINE_NAMES_DATA: DivineName[] = [
  {
    number: 1,
    arabic: 'الرَّحْمَنُ',
    transliteration: 'Ar Rahmaan',
    meaningEn: 'The Beneficent',
    meaningFr: 'Le Tout Miséricordieux',
    meaningAr: 'الرَّحْمَنُ',
    spiritualInfluence: 'The Beneficent',
    spiritualInfluenceFr: 'Le Tout Miséricordieux',
    spiritualInfluenceAr: 'الرَّحْمَنُ',
    reflection: 'Reflect upon the Divine quality of The Beneficent in your life.',
    reflectionFr: 'Réfléchissez à la qualité divine de Le Tout Miséricordieux dans votre vie.',
    reflectionAr: 'تأمل في الصفة الإلهية الرَّحْمَنُ في حياتك'
  },
  {
    number: 2,
    arabic: 'الرَّحِيمُ',
    transliteration: 'Ar Raheem',
    meaningEn: 'The Merciful',
    meaningFr: 'Le Très Miséricordieux',
    meaningAr: 'الرَّحِيمُ',
    spiritualInfluence: 'The Merciful',
    spiritualInfluenceFr: 'Le Très Miséricordieux',
    spiritualInfluenceAr: 'الرَّحِيمُ',
    reflection: 'Reflect upon the Divine quality of The Merciful in your life.',
    reflectionFr: 'Réfléchissez à la qualité divine de Le Très Miséricordieux dans votre vie.',
    reflectionAr: 'تأمل في الصفة الإلهية الرَّحِيمُ في حياتك'
  },
  {
    number: 3,
    arabic: 'الْمَلِكُ',
    transliteration: 'Al Malik',
    meaningEn: 'The King / Eternal Lord',
    meaningFr: 'Le Roi',
    meaningAr: 'الْمَلِكُ',
    spiritualInfluence: 'The King / Eternal Lord',
    spiritualInfluenceFr: 'Le Roi',
    spiritualInfluenceAr: 'الْمَلِكُ',
    reflection: 'Reflect upon the Divine quality of The King / Eternal Lord in your life.',
    reflectionFr: 'Réfléchissez à la qualité divine de Le Roi dans votre vie.',
    reflectionAr: 'تأمل في الصفة الإلهية الْمَلِكُ في حياتك'
  },
  {
    number: 4,
    arabic: 'الْقُدُّوسُ',
    transliteration: 'Al Quddus',
    meaningEn: 'The Purest',
    meaningFr: 'Le Très Saint',
    meaningAr: 'الْقُدُّوسُ',
    spiritualInfluence: 'The Purest',
    spiritualInfluenceFr: 'Le Très Saint',
    spiritualInfluenceAr: 'الْقُدُّوسُ',
    reflection: 'Reflect upon the Divine quality of The Purest in your life.',
    reflectionFr: 'Réfléchissez à la qualité divine de Le Très Saint dans votre vie.',
    reflectionAr: 'تأمل في الصفة الإلهية الْقُدُّوسُ في حياتك'
  },
  {
    number: 5,
    arabic: 'السَّلاَمُ',
    transliteration: 'As Salaam',
    meaningEn: 'The Source of Peace',
    meaningFr: 'La Paix',
    meaningAr: 'السَّلاَمُ',
    spiritualInfluence: 'The Source of Peace',
    spiritualInfluenceFr: 'La Paix',
    spiritualInfluenceAr: 'السَّلاَمُ',
    reflection: 'Reflect upon the Divine quality of The Source of Peace in your life.',
    reflectionFr: 'Réfléchissez à la qualité divine de La Paix dans votre vie.',
    reflectionAr: 'تأمل في الصفة الإلهية السَّلاَمُ في حياتك'
  },
  {
    number: 6,
    arabic: 'الْمُؤْمِنُ',
    transliteration: 'Al Mu\'min',
    meaningEn: 'The inspirer of faith',
    meaningFr: 'Le Fidèle',
    meaningAr: 'الْمُؤْمِنُ',
    spiritualInfluence: 'The inspirer of faith',
    spiritualInfluenceFr: 'Le Fidèle',
    spiritualInfluenceAr: 'الْمُؤْمِنُ',
    reflection: 'Reflect upon the Divine quality of The inspirer of faith in your life.',
    reflectionFr: 'Réfléchissez à la qualité divine de Le Fidèle dans votre vie.',
    reflectionAr: 'تأمل في الصفة الإلهية الْمُؤْمِنُ في حياتك'
  },
  {
    number: 7,
    arabic: 'الْمُهَيْمِنُ',
    transliteration: 'Al Muhaymin',
    meaningEn: 'The Guardian',
    meaningFr: 'Le Gardien',
    meaningAr: 'الْمُهَيْمِنُ',
    spiritualInfluence: 'The Guardian',
    spiritualInfluenceFr: 'Le Gardien',
    spiritualInfluenceAr: 'الْمُهَيْمِنُ',
    reflection: 'Reflect upon the Divine quality of The Guardian in your life.',
    reflectionFr: 'Réfléchissez à la qualité divine de Le Gardien dans votre vie.',
    reflectionAr: 'تأمل في الصفة الإلهية الْمُهَيْمِنُ في حياتك'
  },
  {
    number: 8,
    arabic: 'الْعَزِيزُ',
    transliteration: 'Al Azeez',
    meaningEn: 'The Precious / The Most Mighty',
    meaningFr: 'Le Tout-Puissant',
    meaningAr: 'الْعَزِيزُ',
    spiritualInfluence: 'The Precious / The Most Mighty',
    spiritualInfluenceFr: 'Le Tout-Puissant',
    spiritualInfluenceAr: 'الْعَزِيزُ',
    reflection: 'Reflect upon the Divine quality of The Precious / The Most Mighty in your life.',
    reflectionFr: 'Réfléchissez à la qualité divine de Le Tout-Puissant dans votre vie.',
    reflectionAr: 'تأمل في الصفة الإلهية الْعَزِيزُ في حياتك'
  },
  {
    number: 9,
    arabic: 'الْجَبَّارُ',
    transliteration: 'Al Jabbaar',
    meaningEn: 'The Compeller',
    meaningFr: 'Le Contraignant',
    meaningAr: 'الْجَبَّارُ',
    spiritualInfluence: 'The Compeller',
    spiritualInfluenceFr: 'Le Contraignant',
    spiritualInfluenceAr: 'الْجَبَّارُ',
    reflection: 'Reflect upon the Divine quality of The Compeller in your life.',
    reflectionFr: 'Réfléchissez à la qualité divine de Le Contraignant dans votre vie.',
    reflectionAr: 'تأمل في الصفة الإلهية الْجَبَّارُ في حياتك'
  },
  {
    number: 10,
    arabic: 'الْمُتَكَبِّرُ',
    transliteration: 'Al Mutakabbir',
    meaningEn: 'The Greatest',
    meaningFr: 'Le Superbe',
    meaningAr: 'الْمُتَكَبِّرُ',
    spiritualInfluence: 'The Greatest',
    spiritualInfluenceFr: 'Le Superbe',
    spiritualInfluenceAr: 'الْمُتَكَبِّرُ',
    reflection: 'Reflect upon the Divine quality of The Greatest in your life.',
    reflectionFr: 'Réfléchissez à la qualité divine de Le Superbe dans votre vie.',
    reflectionAr: 'تأمل في الصفة الإلهية الْمُتَكَبِّرُ في حياتك'
  },
  {
    number: 11,
    arabic: 'الْخَالِقُ',
    transliteration: 'Al Khaaliq',
    meaningEn: 'The Creator',
    meaningFr: 'Le Créateur',
    meaningAr: 'الْخَالِقُ',
    spiritualInfluence: 'The Creator',
    spiritualInfluenceFr: 'Le Créateur',
    spiritualInfluenceAr: 'الْخَالِقُ',
    reflection: 'Reflect upon the Divine quality of The Creator in your life.',
    reflectionFr: 'Réfléchissez à la qualité divine de Le Créateur dans votre vie.',
    reflectionAr: 'تأمل في الصفة الإلهية الْخَالِقُ في حياتك'
  },
  {
    number: 12,
    arabic: 'الْبَارِئُ',
    transliteration: 'Al Baari',
    meaningEn: 'The Maker of Order',
    meaningFr: 'Celui qui donne un commencement à toute chose',
    meaningAr: 'الْبَارِئُ',
    spiritualInfluence: 'The Maker of Order',
    spiritualInfluenceFr: 'Celui qui donne un commencement à toute chose',
    spiritualInfluenceAr: 'الْبَارِئُ',
    reflection: 'Reflect upon the Divine quality of The Maker of Order in your life.',
    reflectionFr: 'Réfléchissez à la qualité divine de Celui qui donne un commencement à toute chose dans votre vie.',
    reflectionAr: 'تأمل في الصفة الإلهية الْبَارِئُ في حياتك'
  },
  {
    number: 13,
    arabic: 'الْمُصَوِّرُ',
    transliteration: 'Al Musawwir',
    meaningEn: 'The Shaper of Beauty',
    meaningFr: 'Le Formateur',
    meaningAr: 'الْمُصَوِّرُ',
    spiritualInfluence: 'The Shaper of Beauty',
    spiritualInfluenceFr: 'Le Formateur',
    spiritualInfluenceAr: 'الْمُصَوِّرُ',
    reflection: 'Reflect upon the Divine quality of The Shaper of Beauty in your life.',
    reflectionFr: 'Réfléchissez à la qualité divine de Le Formateur dans votre vie.',
    reflectionAr: 'تأمل في الصفة الإلهية الْمُصَوِّرُ في حياتك'
  },
  {
    number: 14,
    arabic: 'الْغَفَّارُ',
    transliteration: 'Al Ghaffaar',
    meaningEn: 'The Forgiving',
    meaningFr: 'Celui qui ne cesse de pardonner',
    meaningAr: 'الْغَفَّارُ',
    spiritualInfluence: 'The Forgiving',
    spiritualInfluenceFr: 'Celui qui ne cesse de pardonner',
    spiritualInfluenceAr: 'الْغَفَّارُ',
    reflection: 'Reflect upon the Divine quality of The Forgiving in your life.',
    reflectionFr: 'Réfléchissez à la qualité divine de Celui qui ne cesse de pardonner dans votre vie.',
    reflectionAr: 'تأمل في الصفة الإلهية الْغَفَّارُ في حياتك'
  },
  {
    number: 15,
    arabic: 'الْقَهَّارُ',
    transliteration: 'Al Qahhaar',
    meaningEn: 'The Subduer',
    meaningFr: 'Le Dominateur',
    meaningAr: 'الْقَهَّارُ',
    spiritualInfluence: 'The Subduer',
    spiritualInfluenceFr: 'Le Dominateur',
    spiritualInfluenceAr: 'الْقَهَّارُ',
    reflection: 'Reflect upon the Divine quality of The Subduer in your life.',
    reflectionFr: 'Réfléchissez à la qualité divine de Le Dominateur dans votre vie.',
    reflectionAr: 'تأمل في الصفة الإلهية الْقَهَّارُ في حياتك'
  },
  {
    number: 16,
    arabic: 'الْوَهَّابُ',
    transliteration: 'Al Wahhaab',
    meaningEn: 'The Giver of All',
    meaningFr: 'Le Donateur',
    meaningAr: 'الْوَهَّابُ',
    spiritualInfluence: 'The Giver of All',
    spiritualInfluenceFr: 'Le Donateur',
    spiritualInfluenceAr: 'الْوَهَّابُ',
    reflection: 'Reflect upon the Divine quality of The Giver of All in your life.',
    reflectionFr: 'Réfléchissez à la qualité divine de Le Donateur dans votre vie.',
    reflectionAr: 'تأمل في الصفة الإلهية الْوَهَّابُ في حياتك'
  },
  {
    number: 17,
    arabic: 'الرَّزَّاقُ',
    transliteration: 'Ar Razzaaq',
    meaningEn: 'The Sustainer',
    meaningFr: 'Celui qui accorde la subsistance',
    meaningAr: 'الرَّزَّاقُ',
    spiritualInfluence: 'The Sustainer',
    spiritualInfluenceFr: 'Celui qui accorde la subsistance',
    spiritualInfluenceAr: 'الرَّزَّاقُ',
    reflection: 'Reflect upon the Divine quality of The Sustainer in your life.',
    reflectionFr: 'Réfléchissez à la qualité divine de Celui qui accorde la subsistance dans votre vie.',
    reflectionAr: 'تأمل في الصفة الإلهية الرَّزَّاقُ في حياتك'
  },
  {
    number: 18,
    arabic: 'الْفَتَّاحُ',
    transliteration: 'Al Fattaah',
    meaningEn: 'The Opener',
    meaningFr: 'Celui qui ouvre',
    meaningAr: 'الْفَتَّاحُ',
    spiritualInfluence: 'The Opener',
    spiritualInfluenceFr: 'Celui qui ouvre',
    spiritualInfluenceAr: 'الْفَتَّاحُ',
    reflection: 'Reflect upon the Divine quality of The Opener in your life.',
    reflectionFr: 'Réfléchissez à la qualité divine de Celui qui ouvre dans votre vie.',
    reflectionAr: 'تأمل في الصفة الإلهية الْفَتَّاحُ في حياتك'
  },
  {
    number: 19,
    arabic: 'اَلْعَلِيْمُ',
    transliteration: 'Al \'Aleem',
    meaningEn: 'The Knower of all',
    meaningFr: 'L\'Omniscient',
    meaningAr: 'اَلْعَلِيْمُ',
    spiritualInfluence: 'The Knower of all',
    spiritualInfluenceFr: 'L\'Omniscient',
    spiritualInfluenceAr: 'اَلْعَلِيْمُ',
    reflection: 'Reflect upon the Divine quality of The Knower of all in your life.',
    reflectionFr: 'Réfléchissez à la qualité divine de L\'Omniscient dans votre vie.',
    reflectionAr: 'تأمل في الصفة الإلهية اَلْعَلِيْمُ في حياتك'
  },
  {
    number: 20,
    arabic: 'الْقَابِضُ',
    transliteration: 'Al Qaabid',
    meaningEn: 'The Constrictor',
    meaningFr: 'Celui qui restreint',
    meaningAr: 'الْقَابِضُ',
    spiritualInfluence: 'The Constrictor',
    spiritualInfluenceFr: 'Celui qui restreint',
    spiritualInfluenceAr: 'الْقَابِضُ',
    reflection: 'Reflect upon the Divine quality of The Constrictor in your life.',
    reflectionFr: 'Réfléchissez à la qualité divine de Celui qui restreint dans votre vie.',
    reflectionAr: 'تأمل في الصفة الإلهية الْقَابِضُ في حياتك'
  },
  {
    number: 21,
    arabic: 'الْبَاسِطُ',
    transliteration: 'Al Baasit',
    meaningEn: 'The Reliever',
    meaningFr: 'Celui qui étend',
    meaningAr: 'الْبَاسِطُ',
    spiritualInfluence: 'The Reliever',
    spiritualInfluenceFr: 'Celui qui étend',
    spiritualInfluenceAr: 'الْبَاسِطُ',
    reflection: 'Reflect upon the Divine quality of The Reliever in your life.',
    reflectionFr: 'Réfléchissez à la qualité divine de Celui qui étend dans votre vie.',
    reflectionAr: 'تأمل في الصفة الإلهية الْبَاسِطُ في حياتك'
  },
  {
    number: 22,
    arabic: 'الْخَافِضُ',
    transliteration: 'Al Khaafid',
    meaningEn: 'The Abaser',
    meaningFr: 'Celui qui abaisse',
    meaningAr: 'الْخَافِضُ',
    spiritualInfluence: 'The Abaser',
    spiritualInfluenceFr: 'Celui qui abaisse',
    spiritualInfluenceAr: 'الْخَافِضُ',
    reflection: 'Reflect upon the Divine quality of The Abaser in your life.',
    reflectionFr: 'Réfléchissez à la qualité divine de Celui qui abaisse dans votre vie.',
    reflectionAr: 'تأمل في الصفة الإلهية الْخَافِضُ في حياتك'
  },
  {
    number: 23,
    arabic: 'الرَّافِعُ',
    transliteration: 'Ar Raafi\'',
    meaningEn: 'The Exalter',
    meaningFr: 'Celui qui élève',
    meaningAr: 'الرَّافِعُ',
    spiritualInfluence: 'The Exalter',
    spiritualInfluenceFr: 'Celui qui élève',
    spiritualInfluenceAr: 'الرَّافِعُ',
    reflection: 'Reflect upon the Divine quality of The Exalter in your life.',
    reflectionFr: 'Réfléchissez à la qualité divine de Celui qui élève dans votre vie.',
    reflectionAr: 'تأمل في الصفة الإلهية الرَّافِعُ في حياتك'
  },
  {
    number: 24,
    arabic: 'الْمُعِزُّ',
    transliteration: 'Al Mu\'iz',
    meaningEn: 'The Bestower of Honour',
    meaningFr: 'Celui qui donne la puissance',
    meaningAr: 'الْمُعِزُّ',
    spiritualInfluence: 'The Bestower of Honour',
    spiritualInfluenceFr: 'Celui qui donne la puissance',
    spiritualInfluenceAr: 'الْمُعِزُّ',
    reflection: 'Reflect upon the Divine quality of The Bestower of Honour in your life.',
    reflectionFr: 'Réfléchissez à la qualité divine de Celui qui donne la puissance dans votre vie.',
    reflectionAr: 'تأمل في الصفة الإلهية الْمُعِزُّ في حياتك'
  },
  {
    number: 25,
    arabic: 'المُذِلُّ',
    transliteration: 'Al Mudhil',
    meaningEn: 'The Humiliator',
    meaningFr: 'Celui qui avilit',
    meaningAr: 'المُذِلُّ',
    spiritualInfluence: 'The Humiliator',
    spiritualInfluenceFr: 'Celui qui avilit',
    spiritualInfluenceAr: 'المُذِلُّ',
    reflection: 'Reflect upon the Divine quality of The Humiliator in your life.',
    reflectionFr: 'Réfléchissez à la qualité divine de Celui qui avilit dans votre vie.',
    reflectionAr: 'تأمل في الصفة الإلهية المُذِلُّ في حياتك'
  },
  {
    number: 26,
    arabic: 'السَّمِيعُ',
    transliteration: 'As Samee\'',
    meaningEn: 'The Hearer of all',
    meaningFr: 'L\'Audient',
    meaningAr: 'السَّمِيعُ',
    spiritualInfluence: 'The Hearer of all',
    spiritualInfluenceFr: 'L\'Audient',
    spiritualInfluenceAr: 'السَّمِيعُ',
    reflection: 'Reflect upon the Divine quality of The Hearer of all in your life.',
    reflectionFr: 'Réfléchissez à la qualité divine de L\'Audient dans votre vie.',
    reflectionAr: 'تأمل في الصفة الإلهية السَّمِيعُ في حياتك'
  },
  {
    number: 27,
    arabic: 'الْبَصِيرُ',
    transliteration: 'Al Baseer',
    meaningEn: 'The Seer of all',
    meaningFr: 'Le Clairvoyant',
    meaningAr: 'الْبَصِيرُ',
    spiritualInfluence: 'The Seer of all',
    spiritualInfluenceFr: 'Le Clairvoyant',
    spiritualInfluenceAr: 'الْبَصِيرُ',
    reflection: 'Reflect upon the Divine quality of The Seer of all in your life.',
    reflectionFr: 'Réfléchissez à la qualité divine de Le Clairvoyant dans votre vie.',
    reflectionAr: 'تأمل في الصفة الإلهية الْبَصِيرُ في حياتك'
  },
  {
    number: 28,
    arabic: 'الْحَكَمُ',
    transliteration: 'Al Hakam',
    meaningEn: 'The Judge',
    meaningFr: 'Le Juge',
    meaningAr: 'الْحَكَمُ',
    spiritualInfluence: 'The Judge',
    spiritualInfluenceFr: 'Le Juge',
    spiritualInfluenceAr: 'الْحَكَمُ',
    reflection: 'Reflect upon the Divine quality of The Judge in your life.',
    reflectionFr: 'Réfléchissez à la qualité divine de Le Juge dans votre vie.',
    reflectionAr: 'تأمل في الصفة الإلهية الْحَكَمُ في حياتك'
  },
  {
    number: 29,
    arabic: 'الْعَدْلُ',
    transliteration: 'Al \'Adl',
    meaningEn: 'The Just',
    meaningFr: 'Le Juste',
    meaningAr: 'الْعَدْلُ',
    spiritualInfluence: 'The Just',
    spiritualInfluenceFr: 'Le Juste',
    spiritualInfluenceAr: 'الْعَدْلُ',
    reflection: 'Reflect upon the Divine quality of The Just in your life.',
    reflectionFr: 'Réfléchissez à la qualité divine de Le Juste dans votre vie.',
    reflectionAr: 'تأمل في الصفة الإلهية الْعَدْلُ في حياتك'
  },
  {
    number: 30,
    arabic: 'اللَّطِيفُ',
    transliteration: 'Al Lateef',
    meaningEn: 'The Subtle One',
    meaningFr: 'Le Subtil',
    meaningAr: 'اللَّطِيفُ',
    spiritualInfluence: 'The Subtle One',
    spiritualInfluenceFr: 'Le Subtil',
    spiritualInfluenceAr: 'اللَّطِيفُ',
    reflection: 'Reflect upon the Divine quality of The Subtle One in your life.',
    reflectionFr: 'Réfléchissez à la qualité divine de Le Subtil dans votre vie.',
    reflectionAr: 'تأمل في الصفة الإلهية اللَّطِيفُ في حياتك'
  },
  {
    number: 31,
    arabic: 'الْخَبِيرُ',
    transliteration: 'Al Khabeer',
    meaningEn: 'The All Aware',
    meaningFr: 'Le Bien Informé',
    meaningAr: 'الْخَبِيرُ',
    spiritualInfluence: 'The All Aware',
    spiritualInfluenceFr: 'Le Bien Informé',
    spiritualInfluenceAr: 'الْخَبِيرُ',
    reflection: 'Reflect upon the Divine quality of The All Aware in your life.',
    reflectionFr: 'Réfléchissez à la qualité divine de Le Bien Informé dans votre vie.',
    reflectionAr: 'تأمل في الصفة الإلهية الْخَبِيرُ في حياتك'
  },
  {
    number: 32,
    arabic: 'الْحَلِيمُ',
    transliteration: 'Al Haleem',
    meaningEn: 'The Forebearing',
    meaningFr: 'Le Longanime',
    meaningAr: 'الْحَلِيمُ',
    spiritualInfluence: 'The Forebearing',
    spiritualInfluenceFr: 'Le Longanime',
    spiritualInfluenceAr: 'الْحَلِيمُ',
    reflection: 'Reflect upon the Divine quality of The Forebearing in your life.',
    reflectionFr: 'Réfléchissez à la qualité divine de Le Longanime dans votre vie.',
    reflectionAr: 'تأمل في الصفة الإلهية الْحَلِيمُ في حياتك'
  },
  {
    number: 33,
    arabic: 'الْعَظِيمُ',
    transliteration: 'Al \'Azeem',
    meaningEn: 'The Maginificent',
    meaningFr: 'Le Magnifique',
    meaningAr: 'الْعَظِيمُ',
    spiritualInfluence: 'The Maginificent',
    spiritualInfluenceFr: 'Le Magnifique',
    spiritualInfluenceAr: 'الْعَظِيمُ',
    reflection: 'Reflect upon the Divine quality of The Maginificent in your life.',
    reflectionFr: 'Réfléchissez à la qualité divine de Le Magnifique dans votre vie.',
    reflectionAr: 'تأمل في الصفة الإلهية الْعَظِيمُ في حياتك'
  },
  {
    number: 34,
    arabic: 'الْغَفُورُ',
    transliteration: 'Al Ghafoor',
    meaningEn: 'The Great Forgiver',
    meaningFr: 'Le Pardonneur',
    meaningAr: 'الْغَفُورُ',
    spiritualInfluence: 'The Great Forgiver',
    spiritualInfluenceFr: 'Le Pardonneur',
    spiritualInfluenceAr: 'الْغَفُورُ',
    reflection: 'Reflect upon the Divine quality of The Great Forgiver in your life.',
    reflectionFr: 'Réfléchissez à la qualité divine de Le Pardonneur dans votre vie.',
    reflectionAr: 'تأمل في الصفة الإلهية الْغَفُورُ في حياتك'
  },
  {
    number: 35,
    arabic: 'الشَّكُورُ',
    transliteration: 'Ash Shakoor',
    meaningEn: 'The Rewarder of Thankfulness',
    meaningFr: 'Le Reconnaissant',
    meaningAr: 'الشَّكُورُ',
    spiritualInfluence: 'The Rewarder of Thankfulness',
    spiritualInfluenceFr: 'Le Reconnaissant',
    spiritualInfluenceAr: 'الشَّكُورُ',
    reflection: 'Reflect upon the Divine quality of The Rewarder of Thankfulness in your life.',
    reflectionFr: 'Réfléchissez à la qualité divine de Le Reconnaissant dans votre vie.',
    reflectionAr: 'تأمل في الصفة الإلهية الشَّكُورُ في حياتك'
  },
  {
    number: 36,
    arabic: 'الْعَلِيُّ',
    transliteration: 'Al \'Aliyy',
    meaningEn: 'The Highest',
    meaningFr: 'Le Très Haut',
    meaningAr: 'الْعَلِيُّ',
    spiritualInfluence: 'The Highest',
    spiritualInfluenceFr: 'Le Très Haut',
    spiritualInfluenceAr: 'الْعَلِيُّ',
    reflection: 'Reflect upon the Divine quality of The Highest in your life.',
    reflectionFr: 'Réfléchissez à la qualité divine de Le Très Haut dans votre vie.',
    reflectionAr: 'تأمل في الصفة الإلهية الْعَلِيُّ في حياتك'
  },
  {
    number: 37,
    arabic: 'الْكَبِيرُ',
    transliteration: 'Al Kabeer',
    meaningEn: 'The Greatest',
    meaningFr: 'Le Grand',
    meaningAr: 'الْكَبِيرُ',
    spiritualInfluence: 'The Greatest',
    spiritualInfluenceFr: 'Le Grand',
    spiritualInfluenceAr: 'الْكَبِيرُ',
    reflection: 'Reflect upon the Divine quality of The Greatest in your life.',
    reflectionFr: 'Réfléchissez à la qualité divine de Le Grand dans votre vie.',
    reflectionAr: 'تأمل في الصفة الإلهية الْكَبِيرُ في حياتك'
  },
  {
    number: 38,
    arabic: 'الْحَفِيظُ',
    transliteration: 'Al Hafeez',
    meaningEn: 'The Preserver',
    meaningFr: 'Le Préservateur',
    meaningAr: 'الْحَفِيظُ',
    spiritualInfluence: 'The Preserver',
    spiritualInfluenceFr: 'Le Préservateur',
    spiritualInfluenceAr: 'الْحَفِيظُ',
    reflection: 'Reflect upon the Divine quality of The Preserver in your life.',
    reflectionFr: 'Réfléchissez à la qualité divine de Le Préservateur dans votre vie.',
    reflectionAr: 'تأمل في الصفة الإلهية الْحَفِيظُ في حياتك'
  },
  {
    number: 39,
    arabic: 'المُقيِت',
    transliteration: 'Al Muqeet',
    meaningEn: 'The Nourisher',
    meaningFr: 'Le Gardien',
    meaningAr: 'المُقيِت',
    spiritualInfluence: 'The Nourisher',
    spiritualInfluenceFr: 'Le Gardien',
    spiritualInfluenceAr: 'المُقيِت',
    reflection: 'Reflect upon the Divine quality of The Nourisher in your life.',
    reflectionFr: 'Réfléchissez à la qualité divine de Le Gardien dans votre vie.',
    reflectionAr: 'تأمل في الصفة الإلهية المُقيِت في حياتك'
  },
  {
    number: 40,
    arabic: 'الْحسِيبُ',
    transliteration: 'Al Haseeb',
    meaningEn: 'The Reckoner',
    meaningFr: 'Celui qui tient compte',
    meaningAr: 'الْحسِيبُ',
    spiritualInfluence: 'The Reckoner',
    spiritualInfluenceFr: 'Celui qui tient compte',
    spiritualInfluenceAr: 'الْحسِيبُ',
    reflection: 'Reflect upon the Divine quality of The Reckoner in your life.',
    reflectionFr: 'Réfléchissez à la qualité divine de Celui qui tient compte dans votre vie.',
    reflectionAr: 'تأمل في الصفة الإلهية الْحسِيبُ في حياتك'
  },
  {
    number: 41,
    arabic: 'الْجَلِيلُ',
    transliteration: 'Al Jaleel',
    meaningEn: 'The Majestic',
    meaningFr: 'Le Majestueux',
    meaningAr: 'الْجَلِيلُ',
    spiritualInfluence: 'The Majestic',
    spiritualInfluenceFr: 'Le Majestueux',
    spiritualInfluenceAr: 'الْجَلِيلُ',
    reflection: 'Reflect upon the Divine quality of The Majestic in your life.',
    reflectionFr: 'Réfléchissez à la qualité divine de Le Majestueux dans votre vie.',
    reflectionAr: 'تأمل في الصفة الإلهية الْجَلِيلُ في حياتك'
  },
  {
    number: 42,
    arabic: 'الْكَرِيمُ',
    transliteration: 'Al Kareem',
    meaningEn: 'The Generous',
    meaningFr: 'Le Généreux',
    meaningAr: 'الْكَرِيمُ',
    spiritualInfluence: 'The Generous',
    spiritualInfluenceFr: 'Le Généreux',
    spiritualInfluenceAr: 'الْكَرِيمُ',
    reflection: 'Reflect upon the Divine quality of The Generous in your life.',
    reflectionFr: 'Réfléchissez à la qualité divine de Le Généreux dans votre vie.',
    reflectionAr: 'تأمل في الصفة الإلهية الْكَرِيمُ في حياتك'
  },
  {
    number: 43,
    arabic: 'الرَّقِيبُ',
    transliteration: 'Ar Raqeeb',
    meaningEn: 'The Watchful One',
    meaningFr: 'Le Vigilant',
    meaningAr: 'الرَّقِيبُ',
    spiritualInfluence: 'The Watchful One',
    spiritualInfluenceFr: 'Le Vigilant',
    spiritualInfluenceAr: 'الرَّقِيبُ',
    reflection: 'Reflect upon the Divine quality of The Watchful One in your life.',
    reflectionFr: 'Réfléchissez à la qualité divine de Le Vigilant dans votre vie.',
    reflectionAr: 'تأمل في الصفة الإلهية الرَّقِيبُ في حياتك'
  },
  {
    number: 44,
    arabic: 'الْمُجِيبُ',
    transliteration: 'Al Mujeeb ',
    meaningEn: 'The Responder to Prayer',
    meaningFr: 'Celui qui exauce',
    meaningAr: 'الْمُجِيبُ',
    spiritualInfluence: 'The Responder to Prayer',
    spiritualInfluenceFr: 'Celui qui exauce',
    spiritualInfluenceAr: 'الْمُجِيبُ',
    reflection: 'Reflect upon the Divine quality of The Responder to Prayer in your life.',
    reflectionFr: 'Réfléchissez à la qualité divine de Celui qui exauce dans votre vie.',
    reflectionAr: 'تأمل في الصفة الإلهية الْمُجِيبُ في حياتك'
  },
  {
    number: 45,
    arabic: 'الْوَاسِعُ',
    transliteration: 'Al Waasi\'',
    meaningEn: 'The All Comprehending',
    meaningFr: 'L\'Ample',
    meaningAr: 'الْوَاسِعُ',
    spiritualInfluence: 'The All Comprehending',
    spiritualInfluenceFr: 'L\'Ample',
    spiritualInfluenceAr: 'الْوَاسِعُ',
    reflection: 'Reflect upon the Divine quality of The All Comprehending in your life.',
    reflectionFr: 'Réfléchissez à la qualité divine de L\'Ample dans votre vie.',
    reflectionAr: 'تأمل في الصفة الإلهية الْوَاسِعُ في حياتك'
  },
  {
    number: 46,
    arabic: 'الْحَكِيمُ',
    transliteration: 'Al Hakeem',
    meaningEn: 'The Perfectly Wise',
    meaningFr: 'Le Sage',
    meaningAr: 'الْحَكِيمُ',
    spiritualInfluence: 'The Perfectly Wise',
    spiritualInfluenceFr: 'Le Sage',
    spiritualInfluenceAr: 'الْحَكِيمُ',
    reflection: 'Reflect upon the Divine quality of The Perfectly Wise in your life.',
    reflectionFr: 'Réfléchissez à la qualité divine de Le Sage dans votre vie.',
    reflectionAr: 'تأمل في الصفة الإلهية الْحَكِيمُ في حياتك'
  },
  {
    number: 47,
    arabic: 'الْوَدُودُ',
    transliteration: 'Al Wudood',
    meaningEn: 'The Loving One',
    meaningFr: 'Le Bien-Aimant',
    meaningAr: 'الْوَدُودُ',
    spiritualInfluence: 'The Loving One',
    spiritualInfluenceFr: 'Le Bien-Aimant',
    spiritualInfluenceAr: 'الْوَدُودُ',
    reflection: 'Reflect upon the Divine quality of The Loving One in your life.',
    reflectionFr: 'Réfléchissez à la qualité divine de Le Bien-Aimant dans votre vie.',
    reflectionAr: 'تأمل في الصفة الإلهية الْوَدُودُ في حياتك'
  },
  {
    number: 48,
    arabic: 'الْمَجِيدُ',
    transliteration: 'Al Majeed',
    meaningEn: 'The Most Glorious One',
    meaningFr: 'Le Glorieux',
    meaningAr: 'الْمَجِيدُ',
    spiritualInfluence: 'The Most Glorious One',
    spiritualInfluenceFr: 'Le Glorieux',
    spiritualInfluenceAr: 'الْمَجِيدُ',
    reflection: 'Reflect upon the Divine quality of The Most Glorious One in your life.',
    reflectionFr: 'Réfléchissez à la qualité divine de Le Glorieux dans votre vie.',
    reflectionAr: 'تأمل في الصفة الإلهية الْمَجِيدُ في حياتك'
  },
  {
    number: 49,
    arabic: 'الْبَاعِثُ',
    transliteration: 'Al Baa\'ith',
    meaningEn: 'The Resurrector',
    meaningFr: 'Celui qui ressuscite',
    meaningAr: 'الْبَاعِثُ',
    spiritualInfluence: 'The Resurrector',
    spiritualInfluenceFr: 'Celui qui ressuscite',
    spiritualInfluenceAr: 'الْبَاعِثُ',
    reflection: 'Reflect upon the Divine quality of The Resurrector in your life.',
    reflectionFr: 'Réfléchissez à la qualité divine de Celui qui ressuscite dans votre vie.',
    reflectionAr: 'تأمل في الصفة الإلهية الْبَاعِثُ في حياتك'
  },
  {
    number: 50,
    arabic: 'الشَّهِيدُ',
    transliteration: 'Ash Shaheed',
    meaningEn: 'The Witness',
    meaningFr: 'Le Témoin',
    meaningAr: 'الشَّهِيدُ',
    spiritualInfluence: 'The Witness',
    spiritualInfluenceFr: 'Le Témoin',
    spiritualInfluenceAr: 'الشَّهِيدُ',
    reflection: 'Reflect upon the Divine quality of The Witness in your life.',
    reflectionFr: 'Réfléchissez à la qualité divine de Le Témoin dans votre vie.',
    reflectionAr: 'تأمل في الصفة الإلهية الشَّهِيدُ في حياتك'
  },
  {
    number: 51,
    arabic: 'الْحَقُّ',
    transliteration: 'Al Haqq',
    meaningEn: 'The Truth',
    meaningFr: 'La Vérité',
    meaningAr: 'الْحَقُّ',
    spiritualInfluence: 'The Truth',
    spiritualInfluenceFr: 'La Vérité',
    spiritualInfluenceAr: 'الْحَقُّ',
    reflection: 'Reflect upon the Divine quality of The Truth in your life.',
    reflectionFr: 'Réfléchissez à la qualité divine de La Vérité dans votre vie.',
    reflectionAr: 'تأمل في الصفة الإلهية الْحَقُّ في حياتك'
  },
  {
    number: 52,
    arabic: 'الْوَكِيلُ',
    transliteration: 'Al Wakeel',
    meaningEn: 'The Trustee',
    meaningFr: 'Le Garant',
    meaningAr: 'الْوَكِيلُ',
    spiritualInfluence: 'The Trustee',
    spiritualInfluenceFr: 'Le Garant',
    spiritualInfluenceAr: 'الْوَكِيلُ',
    reflection: 'Reflect upon the Divine quality of The Trustee in your life.',
    reflectionFr: 'Réfléchissez à la qualité divine de Le Garant dans votre vie.',
    reflectionAr: 'تأمل في الصفة الإلهية الْوَكِيلُ في حياتك'
  },
  {
    number: 53,
    arabic: 'الْقَوِيُّ',
    transliteration: 'Al Qawiyy',
    meaningEn: 'The Possessor of all strength',
    meaningFr: 'Le Fort',
    meaningAr: 'الْقَوِيُّ',
    spiritualInfluence: 'The Possessor of all strength',
    spiritualInfluenceFr: 'Le Fort',
    spiritualInfluenceAr: 'الْقَوِيُّ',
    reflection: 'Reflect upon the Divine quality of The Possessor of all strength in your life.',
    reflectionFr: 'Réfléchissez à la qualité divine de Le Fort dans votre vie.',
    reflectionAr: 'تأمل في الصفة الإلهية الْقَوِيُّ في حياتك'
  },
  {
    number: 54,
    arabic: 'الْمَتِينُ',
    transliteration: 'Al Mateen',
    meaningEn: 'The Forceful',
    meaningFr: 'Le Très Fort',
    meaningAr: 'الْمَتِينُ',
    spiritualInfluence: 'The Forceful',
    spiritualInfluenceFr: 'Le Très Fort',
    spiritualInfluenceAr: 'الْمَتِينُ',
    reflection: 'Reflect upon the Divine quality of The Forceful in your life.',
    reflectionFr: 'Réfléchissez à la qualité divine de Le Très Fort dans votre vie.',
    reflectionAr: 'تأمل في الصفة الإلهية الْمَتِينُ في حياتك'
  },
  {
    number: 55,
    arabic: 'الْوَلِيُّ',
    transliteration: 'Al Waliyy',
    meaningEn: 'The Protector',
    meaningFr: 'Le Maître',
    meaningAr: 'الْوَلِيُّ',
    spiritualInfluence: 'The Protector',
    spiritualInfluenceFr: 'Le Maître',
    spiritualInfluenceAr: 'الْوَلِيُّ',
    reflection: 'Reflect upon the Divine quality of The Protector in your life.',
    reflectionFr: 'Réfléchissez à la qualité divine de Le Maître dans votre vie.',
    reflectionAr: 'تأمل في الصفة الإلهية الْوَلِيُّ في حياتك'
  },
  {
    number: 56,
    arabic: 'الْحَمِيدُ',
    transliteration: 'Al Hameed',
    meaningEn: 'The Praised',
    meaningFr: 'Le Digne de louange',
    meaningAr: 'الْحَمِيدُ',
    spiritualInfluence: 'The Praised',
    spiritualInfluenceFr: 'Le Digne de louange',
    spiritualInfluenceAr: 'الْحَمِيدُ',
    reflection: 'Reflect upon the Divine quality of The Praised in your life.',
    reflectionFr: 'Réfléchissez à la qualité divine de Le Digne de louange dans votre vie.',
    reflectionAr: 'تأمل في الصفة الإلهية الْحَمِيدُ في حياتك'
  },
  {
    number: 57,
    arabic: 'الْمُحْصِي',
    transliteration: 'Al Muhsi',
    meaningEn: 'The Appraiser',
    meaningFr: 'Celui qui compte toute chose',
    meaningAr: 'الْمُحْصِي',
    spiritualInfluence: 'The Appraiser',
    spiritualInfluenceFr: 'Celui qui compte toute chose',
    spiritualInfluenceAr: 'الْمُحْصِي',
    reflection: 'Reflect upon the Divine quality of The Appraiser in your life.',
    reflectionFr: 'Réfléchissez à la qualité divine de Celui qui compte toute chose dans votre vie.',
    reflectionAr: 'تأمل في الصفة الإلهية الْمُحْصِي في حياتك'
  },
  {
    number: 58,
    arabic: 'الْمُبْدِئُ',
    transliteration: 'Al Mubdi',
    meaningEn: 'The Originator',
    meaningFr: 'Celui qui crée en premier',
    meaningAr: 'الْمُبْدِئُ',
    spiritualInfluence: 'The Originator',
    spiritualInfluenceFr: 'Celui qui crée en premier',
    spiritualInfluenceAr: 'الْمُبْدِئُ',
    reflection: 'Reflect upon the Divine quality of The Originator in your life.',
    reflectionFr: 'Réfléchissez à la qualité divine de Celui qui crée en premier dans votre vie.',
    reflectionAr: 'تأمل في الصفة الإلهية الْمُبْدِئُ في حياتك'
  },
  {
    number: 59,
    arabic: 'الْمُعِيدُ',
    transliteration: 'Al Mu\'eed',
    meaningEn: 'The Restorer',
    meaningFr: 'Celui qui redonne vie',
    meaningAr: 'الْمُعِيدُ',
    spiritualInfluence: 'The Restorer',
    spiritualInfluenceFr: 'Celui qui redonne vie',
    spiritualInfluenceAr: 'الْمُعِيدُ',
    reflection: 'Reflect upon the Divine quality of The Restorer in your life.',
    reflectionFr: 'Réfléchissez à la qualité divine de Celui qui redonne vie dans votre vie.',
    reflectionAr: 'تأمل في الصفة الإلهية الْمُعِيدُ في حياتك'
  },
  {
    number: 60,
    arabic: 'الْمُحْيِي',
    transliteration: 'Al Muhiy',
    meaningEn: 'The Giver of life',
    meaningFr: 'Celui qui donne la vie',
    meaningAr: 'الْمُحْيِي',
    spiritualInfluence: 'The Giver of life',
    spiritualInfluenceFr: 'Celui qui donne la vie',
    spiritualInfluenceAr: 'الْمُحْيِي',
    reflection: 'Reflect upon the Divine quality of The Giver of life in your life.',
    reflectionFr: 'Réfléchissez à la qualité divine de Celui qui donne la vie dans votre vie.',
    reflectionAr: 'تأمل في الصفة الإلهية الْمُحْيِي في حياتك'
  },
  {
    number: 61,
    arabic: 'اَلْمُمِيتُ',
    transliteration: 'Al Mumeet',
    meaningEn: 'The Taker of life',
    meaningFr: 'Celui qui donne la mort',
    meaningAr: 'اَلْمُمِيتُ',
    spiritualInfluence: 'The Taker of life',
    spiritualInfluenceFr: 'Celui qui donne la mort',
    spiritualInfluenceAr: 'اَلْمُمِيتُ',
    reflection: 'Reflect upon the Divine quality of The Taker of life in your life.',
    reflectionFr: 'Réfléchissez à la qualité divine de Celui qui donne la mort dans votre vie.',
    reflectionAr: 'تأمل في الصفة الإلهية اَلْمُمِيتُ في حياتك'
  },
  {
    number: 62,
    arabic: 'الْحَيُّ',
    transliteration: 'Al Haiyy',
    meaningEn: 'The Ever Living',
    meaningFr: 'Le Vivant',
    meaningAr: 'الْحَيُّ',
    spiritualInfluence: 'The Ever Living',
    spiritualInfluenceFr: 'Le Vivant',
    spiritualInfluenceAr: 'الْحَيُّ',
    reflection: 'Reflect upon the Divine quality of The Ever Living in your life.',
    reflectionFr: 'Réfléchissez à la qualité divine de Le Vivant dans votre vie.',
    reflectionAr: 'تأمل في الصفة الإلهية الْحَيُّ في حياتك'
  },
  {
    number: 63,
    arabic: 'الْقَيُّومُ',
    transliteration: 'Al Qayyoom',
    meaningEn: 'The Self Existing',
    meaningFr: 'Celui qui subsiste par Lui-même',
    meaningAr: 'الْقَيُّومُ',
    spiritualInfluence: 'The Self Existing',
    spiritualInfluenceFr: 'Celui qui subsiste par Lui-même',
    spiritualInfluenceAr: 'الْقَيُّومُ',
    reflection: 'Reflect upon the Divine quality of The Self Existing in your life.',
    reflectionFr: 'Réfléchissez à la qualité divine de Celui qui subsiste par Lui-même dans votre vie.',
    reflectionAr: 'تأمل في الصفة الإلهية الْقَيُّومُ في حياتك'
  },
  {
    number: 64,
    arabic: 'الْوَاجِدُ',
    transliteration: 'Al Waajid',
    meaningEn: 'The Finder',
    meaningFr: 'Celui qui trouve',
    meaningAr: 'الْوَاجِدُ',
    spiritualInfluence: 'The Finder',
    spiritualInfluenceFr: 'Celui qui trouve',
    spiritualInfluenceAr: 'الْوَاجِدُ',
    reflection: 'Reflect upon the Divine quality of The Finder in your life.',
    reflectionFr: 'Réfléchissez à la qualité divine de Celui qui trouve dans votre vie.',
    reflectionAr: 'تأمل في الصفة الإلهية الْوَاجِدُ في حياتك'
  },
  {
    number: 65,
    arabic: 'الْمَاجِدُ',
    transliteration: 'Al Maajid',
    meaningEn: 'The Glorious',
    meaningFr: 'Le Noble',
    meaningAr: 'الْمَاجِدُ',
    spiritualInfluence: 'The Glorious',
    spiritualInfluenceFr: 'Le Noble',
    spiritualInfluenceAr: 'الْمَاجِدُ',
    reflection: 'Reflect upon the Divine quality of The Glorious in your life.',
    reflectionFr: 'Réfléchissez à la qualité divine de Le Noble dans votre vie.',
    reflectionAr: 'تأمل في الصفة الإلهية الْمَاجِدُ في حياتك'
  },
  {
    number: 66,
    arabic: 'الْواحِدُ',
    transliteration: 'Al Waahid',
    meaningEn: 'The Only One',
    meaningFr: 'L\'Unique',
    meaningAr: 'الْواحِدُ',
    spiritualInfluence: 'The Only One',
    spiritualInfluenceFr: 'L\'Unique',
    spiritualInfluenceAr: 'الْواحِدُ',
    reflection: 'Reflect upon the Divine quality of The Only One in your life.',
    reflectionFr: 'Réfléchissez à la qualité divine de L\'Unique dans votre vie.',
    reflectionAr: 'تأمل في الصفة الإلهية الْواحِدُ في حياتك'
  },
  {
    number: 67,
    arabic: 'اَلاَحَدُ',
    transliteration: 'Al Ahad',
    meaningEn: 'The One',
    meaningFr: 'L\'Un',
    meaningAr: 'اَلاَحَدُ',
    spiritualInfluence: 'The One',
    spiritualInfluenceFr: 'L\'Un',
    spiritualInfluenceAr: 'اَلاَحَدُ',
    reflection: 'Reflect upon the Divine quality of The One in your life.',
    reflectionFr: 'Réfléchissez à la qualité divine de L\'Un dans votre vie.',
    reflectionAr: 'تأمل في الصفة الإلهية اَلاَحَدُ في حياتك'
  },
  {
    number: 68,
    arabic: 'الصَّمَدُ',
    transliteration: 'As Samad',
    meaningEn: 'The Supreme Provider',
    meaningFr: 'Le Soutien universel',
    meaningAr: 'الصَّمَدُ',
    spiritualInfluence: 'The Supreme Provider',
    spiritualInfluenceFr: 'Le Soutien universel',
    spiritualInfluenceAr: 'الصَّمَدُ',
    reflection: 'Reflect upon the Divine quality of The Supreme Provider in your life.',
    reflectionFr: 'Réfléchissez à la qualité divine de Le Soutien universel dans votre vie.',
    reflectionAr: 'تأمل في الصفة الإلهية الصَّمَدُ في حياتك'
  },
  {
    number: 69,
    arabic: 'الْقَادِرُ',
    transliteration: 'Al Qaadir',
    meaningEn: 'The Powerful',
    meaningFr: 'Le Puissant',
    meaningAr: 'الْقَادِرُ',
    spiritualInfluence: 'The Powerful',
    spiritualInfluenceFr: 'Le Puissant',
    spiritualInfluenceAr: 'الْقَادِرُ',
    reflection: 'Reflect upon the Divine quality of The Powerful in your life.',
    reflectionFr: 'Réfléchissez à la qualité divine de Le Puissant dans votre vie.',
    reflectionAr: 'تأمل في الصفة الإلهية الْقَادِرُ في حياتك'
  },
  {
    number: 70,
    arabic: 'الْمُقْتَدِرُ',
    transliteration: 'Al Muqtadir',
    meaningEn: 'The Creator of all power',
    meaningFr: 'Le Très Puissant',
    meaningAr: 'الْمُقْتَدِرُ',
    spiritualInfluence: 'The Creator of all power',
    spiritualInfluenceFr: 'Le Très Puissant',
    spiritualInfluenceAr: 'الْمُقْتَدِرُ',
    reflection: 'Reflect upon the Divine quality of The Creator of all power in your life.',
    reflectionFr: 'Réfléchissez à la qualité divine de Le Très Puissant dans votre vie.',
    reflectionAr: 'تأمل في الصفة الإلهية الْمُقْتَدِرُ في حياتك'
  },
  {
    number: 71,
    arabic: 'الْمُقَدِّمُ',
    transliteration: 'Al Muqaddim',
    meaningEn: 'The Expediter',
    meaningFr: 'Celui qui avance',
    meaningAr: 'الْمُقَدِّمُ',
    spiritualInfluence: 'The Expediter',
    spiritualInfluenceFr: 'Celui qui avance',
    spiritualInfluenceAr: 'الْمُقَدِّمُ',
    reflection: 'Reflect upon the Divine quality of The Expediter in your life.',
    reflectionFr: 'Réfléchissez à la qualité divine de Celui qui avance dans votre vie.',
    reflectionAr: 'تأمل في الصفة الإلهية الْمُقَدِّمُ في حياتك'
  },
  {
    number: 72,
    arabic: 'الْمُؤَخِّرُ',
    transliteration: 'Al Mu’akhir',
    meaningEn: 'The Delayer',
    meaningFr: 'Celui qui retarde',
    meaningAr: 'الْمُؤَخِّرُ',
    spiritualInfluence: 'The Delayer',
    spiritualInfluenceFr: 'Celui qui retarde',
    spiritualInfluenceAr: 'الْمُؤَخِّرُ',
    reflection: 'Reflect upon the Divine quality of The Delayer in your life.',
    reflectionFr: 'Réfléchissez à la qualité divine de Celui qui retarde dans votre vie.',
    reflectionAr: 'تأمل في الصفة الإلهية الْمُؤَخِّرُ في حياتك'
  },
  {
    number: 73,
    arabic: 'الأوَّلُ',
    transliteration: 'Al Awwal',
    meaningEn: 'The First',
    meaningFr: 'Le Premier',
    meaningAr: 'الأوَّلُ',
    spiritualInfluence: 'The First',
    spiritualInfluenceFr: 'Le Premier',
    spiritualInfluenceAr: 'الأوَّلُ',
    reflection: 'Reflect upon the Divine quality of The First in your life.',
    reflectionFr: 'Réfléchissez à la qualité divine de Le Premier dans votre vie.',
    reflectionAr: 'تأمل في الصفة الإلهية الأوَّلُ في حياتك'
  },
  {
    number: 74,
    arabic: 'الآخِرُ',
    transliteration: 'Al Aakhir',
    meaningEn: 'The Last',
    meaningFr: 'Le Dernier',
    meaningAr: 'الآخِرُ',
    spiritualInfluence: 'The Last',
    spiritualInfluenceFr: 'Le Dernier',
    spiritualInfluenceAr: 'الآخِرُ',
    reflection: 'Reflect upon the Divine quality of The Last in your life.',
    reflectionFr: 'Réfléchissez à la qualité divine de Le Dernier dans votre vie.',
    reflectionAr: 'تأمل في الصفة الإلهية الآخِرُ في حياتك'
  },
  {
    number: 75,
    arabic: 'الظَّاهِرُ',
    transliteration: 'Az Zaahir',
    meaningEn: 'The Manifest',
    meaningFr: 'L\'Apparent',
    meaningAr: 'الظَّاهِرُ',
    spiritualInfluence: 'The Manifest',
    spiritualInfluenceFr: 'L\'Apparent',
    spiritualInfluenceAr: 'الظَّاهِرُ',
    reflection: 'Reflect upon the Divine quality of The Manifest in your life.',
    reflectionFr: 'Réfléchissez à la qualité divine de L\'Apparent dans votre vie.',
    reflectionAr: 'تأمل في الصفة الإلهية الظَّاهِرُ في حياتك'
  },
  {
    number: 76,
    arabic: 'الْبَاطِنُ',
    transliteration: 'Al Baatin',
    meaningEn: 'The Hidden',
    meaningFr: 'Le Caché',
    meaningAr: 'الْبَاطِنُ',
    spiritualInfluence: 'The Hidden',
    spiritualInfluenceFr: 'Le Caché',
    spiritualInfluenceAr: 'الْبَاطِنُ',
    reflection: 'Reflect upon the Divine quality of The Hidden in your life.',
    reflectionFr: 'Réfléchissez à la qualité divine de Le Caché dans votre vie.',
    reflectionAr: 'تأمل في الصفة الإلهية الْبَاطِنُ في حياتك'
  },
  {
    number: 77,
    arabic: 'الْوَالِي',
    transliteration: 'Al Waali',
    meaningEn: 'The Governor',
    meaningFr: 'Le Maître',
    meaningAr: 'الْوَالِي',
    spiritualInfluence: 'The Governor',
    spiritualInfluenceFr: 'Le Maître',
    spiritualInfluenceAr: 'الْوَالِي',
    reflection: 'Reflect upon the Divine quality of The Governor in your life.',
    reflectionFr: 'Réfléchissez à la qualité divine de Le Maître dans votre vie.',
    reflectionAr: 'تأمل في الصفة الإلهية الْوَالِي في حياتك'
  },
  {
    number: 78,
    arabic: 'الْمُتَعَالِي',
    transliteration: 'Al Muta’ali',
    meaningEn: 'The Supreme One',
    meaningFr: 'Le Très Elevé',
    meaningAr: 'الْمُتَعَالِي',
    spiritualInfluence: 'The Supreme One',
    spiritualInfluenceFr: 'Le Très Elevé',
    spiritualInfluenceAr: 'الْمُتَعَالِي',
    reflection: 'Reflect upon the Divine quality of The Supreme One in your life.',
    reflectionFr: 'Réfléchissez à la qualité divine de Le Très Elevé dans votre vie.',
    reflectionAr: 'تأمل في الصفة الإلهية الْمُتَعَالِي في حياتك'
  },
  {
    number: 79,
    arabic: 'الْبَرُّ',
    transliteration: 'Al Barr',
    meaningEn: 'The Doer of Good',
    meaningFr: 'Le Bon',
    meaningAr: 'الْبَرُّ',
    spiritualInfluence: 'The Doer of Good',
    spiritualInfluenceFr: 'Le Bon',
    spiritualInfluenceAr: 'الْبَرُّ',
    reflection: 'Reflect upon the Divine quality of The Doer of Good in your life.',
    reflectionFr: 'Réfléchissez à la qualité divine de Le Bon dans votre vie.',
    reflectionAr: 'تأمل في الصفة الإلهية الْبَرُّ في حياتك'
  },
  {
    number: 80,
    arabic: 'التَّوَابُ',
    transliteration: 'At Tawwaab',
    meaningEn: 'The Guide to Repentence',
    meaningFr: 'Celui qui accepte le repentir',
    meaningAr: 'التَّوَابُ',
    spiritualInfluence: 'The Guide to Repentence',
    spiritualInfluenceFr: 'Celui qui accepte le repentir',
    spiritualInfluenceAr: 'التَّوَابُ',
    reflection: 'Reflect upon the Divine quality of The Guide to Repentence in your life.',
    reflectionFr: 'Réfléchissez à la qualité divine de Celui qui accepte le repentir dans votre vie.',
    reflectionAr: 'تأمل في الصفة الإلهية التَّوَابُ في حياتك'
  },
  {
    number: 81,
    arabic: 'الْمُنْتَقِمُ',
    transliteration: 'Al Muntaqim',
    meaningEn: 'The Avenger',
    meaningFr: 'Le Vengeur',
    meaningAr: 'الْمُنْتَقِمُ',
    spiritualInfluence: 'The Avenger',
    spiritualInfluenceFr: 'Le Vengeur',
    spiritualInfluenceAr: 'الْمُنْتَقِمُ',
    reflection: 'Reflect upon the Divine quality of The Avenger in your life.',
    reflectionFr: 'Réfléchissez à la qualité divine de Le Vengeur dans votre vie.',
    reflectionAr: 'تأمل في الصفة الإلهية الْمُنْتَقِمُ في حياتك'
  },
  {
    number: 82,
    arabic: 'العَفُوُّ',
    transliteration: 'Al Afuww',
    meaningEn: 'The Forgiver',
    meaningFr: 'Celui qui efface',
    meaningAr: 'العَفُوُّ',
    spiritualInfluence: 'The Forgiver',
    spiritualInfluenceFr: 'Celui qui efface',
    spiritualInfluenceAr: 'العَفُوُّ',
    reflection: 'Reflect upon the Divine quality of The Forgiver in your life.',
    reflectionFr: 'Réfléchissez à la qualité divine de Celui qui efface dans votre vie.',
    reflectionAr: 'تأمل في الصفة الإلهية العَفُوُّ في حياتك'
  },
  {
    number: 83,
    arabic: 'الرَّؤُوفُ',
    transliteration: 'Ar Ra’oof',
    meaningEn: 'The Clement',
    meaningFr: 'Le Très Bienveillant',
    meaningAr: 'الرَّؤُوفُ',
    spiritualInfluence: 'The Clement',
    spiritualInfluenceFr: 'Le Très Bienveillant',
    spiritualInfluenceAr: 'الرَّؤُوفُ',
    reflection: 'Reflect upon the Divine quality of The Clement in your life.',
    reflectionFr: 'Réfléchissez à la qualité divine de Le Très Bienveillant dans votre vie.',
    reflectionAr: 'تأمل في الصفة الإلهية الرَّؤُوفُ في حياتك'
  },
  {
    number: 84,
    arabic: 'مَالِكُ الْمُلْكِ',
    transliteration: 'Maalik Ul Mulk',
    meaningEn: 'The Owner / Soverign of All',
    meaningFr: 'Le Possesseur de la souveraineté',
    meaningAr: 'مَالِكُ الْمُلْكِ',
    spiritualInfluence: 'The Owner / Soverign of All',
    spiritualInfluenceFr: 'Le Possesseur de la souveraineté',
    spiritualInfluenceAr: 'مَالِكُ الْمُلْكِ',
    reflection: 'Reflect upon the Divine quality of The Owner / Soverign of All in your life.',
    reflectionFr: 'Réfléchissez à la qualité divine de Le Possesseur de la souveraineté dans votre vie.',
    reflectionAr: 'تأمل في الصفة الإلهية مَالِكُ الْمُلْكِ في حياتك'
  },
  {
    number: 85,
    arabic: 'ذُوالْجَلاَلِ وَالإكْرَامِ',
    transliteration: 'Dhu Al Jalaali Wa Al Ikraam',
    meaningEn: 'Possessor of Majesty and Bounty',
    meaningFr: 'Le Majestueux et le Généreux',
    meaningAr: 'ذُوالْجَلاَلِ وَالإكْرَامِ',
    spiritualInfluence: 'Possessor of Majesty and Bounty',
    spiritualInfluenceFr: 'Le Majestueux et le Généreux',
    spiritualInfluenceAr: 'ذُوالْجَلاَلِ وَالإكْرَامِ',
    reflection: 'Reflect upon the Divine quality of Possessor of Majesty and Bounty in your life.',
    reflectionFr: 'Réfléchissez à la qualité divine de Le Majestueux et le Généreux dans votre vie.',
    reflectionAr: 'تأمل في الصفة الإلهية ذُوالْجَلاَلِ وَالإكْرَامِ في حياتك'
  },
  {
    number: 86,
    arabic: 'الْمُقْسِطُ',
    transliteration: 'Al Muqsit',
    meaningEn: 'The Equitable One',
    meaningFr: 'L\'Equitable',
    meaningAr: 'الْمُقْسِطُ',
    spiritualInfluence: 'The Equitable One',
    spiritualInfluenceFr: 'L\'Equitable',
    spiritualInfluenceAr: 'الْمُقْسِطُ',
    reflection: 'Reflect upon the Divine quality of The Equitable One in your life.',
    reflectionFr: 'Réfléchissez à la qualité divine de L\'Equitable dans votre vie.',
    reflectionAr: 'تأمل في الصفة الإلهية الْمُقْسِطُ في حياتك'
  },
  {
    number: 87,
    arabic: 'الْجَامِعُ',
    transliteration: 'Al Jaami\'',
    meaningEn: 'The Gatherer',
    meaningFr: 'Celui qui réunit',
    meaningAr: 'الْجَامِعُ',
    spiritualInfluence: 'The Gatherer',
    spiritualInfluenceFr: 'Celui qui réunit',
    spiritualInfluenceAr: 'الْجَامِعُ',
    reflection: 'Reflect upon the Divine quality of The Gatherer in your life.',
    reflectionFr: 'Réfléchissez à la qualité divine de Celui qui réunit dans votre vie.',
    reflectionAr: 'تأمل في الصفة الإلهية الْجَامِعُ في حياتك'
  },
  {
    number: 88,
    arabic: 'الْغَنِيُّ',
    transliteration: 'Al Ghaniyy',
    meaningEn: 'The Rich One',
    meaningFr: 'Celui qui se suffit à Lui-même',
    meaningAr: 'الْغَنِيُّ',
    spiritualInfluence: 'The Rich One',
    spiritualInfluenceFr: 'Celui qui se suffit à Lui-même',
    spiritualInfluenceAr: 'الْغَنِيُّ',
    reflection: 'Reflect upon the Divine quality of The Rich One in your life.',
    reflectionFr: 'Réfléchissez à la qualité divine de Celui qui se suffit à Lui-même dans votre vie.',
    reflectionAr: 'تأمل في الصفة الإلهية الْغَنِيُّ في حياتك'
  },
  {
    number: 89,
    arabic: 'الْمُغْنِي',
    transliteration: 'Al Mughi',
    meaningEn: 'The Enricher',
    meaningFr: 'Celui qui enrichit',
    meaningAr: 'الْمُغْنِي',
    spiritualInfluence: 'The Enricher',
    spiritualInfluenceFr: 'Celui qui enrichit',
    spiritualInfluenceAr: 'الْمُغْنِي',
    reflection: 'Reflect upon the Divine quality of The Enricher in your life.',
    reflectionFr: 'Réfléchissez à la qualité divine de Celui qui enrichit dans votre vie.',
    reflectionAr: 'تأمل في الصفة الإلهية الْمُغْنِي في حياتك'
  },
  {
    number: 90,
    arabic: 'اَلْمَانِعُ',
    transliteration: 'Al Maani\'',
    meaningEn: 'The Preventer of harm',
    meaningFr: 'Celui qui empêche',
    meaningAr: 'اَلْمَانِعُ',
    spiritualInfluence: 'The Preventer of harm',
    spiritualInfluenceFr: 'Celui qui empêche',
    spiritualInfluenceAr: 'اَلْمَانِعُ',
    reflection: 'Reflect upon the Divine quality of The Preventer of harm in your life.',
    reflectionFr: 'Réfléchissez à la qualité divine de Celui qui empêche dans votre vie.',
    reflectionAr: 'تأمل في الصفة الإلهية اَلْمَانِعُ في حياتك'
  },
  {
    number: 91,
    arabic: 'الضَّارَّ',
    transliteration: 'Ad Daaarr',
    meaningEn: 'The Creator of the harmful',
    meaningFr: 'Celui qui peut nuire',
    meaningAr: 'الضَّارَّ',
    spiritualInfluence: 'The Creator of the harmful',
    spiritualInfluenceFr: 'Celui qui peut nuire',
    spiritualInfluenceAr: 'الضَّارَّ',
    reflection: 'Reflect upon the Divine quality of The Creator of the harmful in your life.',
    reflectionFr: 'Réfléchissez à la qualité divine de Celui qui peut nuire dans votre vie.',
    reflectionAr: 'تأمل في الصفة الإلهية الضَّارَّ في حياتك'
  },
  {
    number: 92,
    arabic: 'النَّافِعُ',
    transliteration: 'An Naafi’',
    meaningEn: 'The Bestower of Benefits',
    meaningFr: 'Celui qui accorde le profit',
    meaningAr: 'النَّافِعُ',
    spiritualInfluence: 'The Bestower of Benefits',
    spiritualInfluenceFr: 'Celui qui accorde le profit',
    spiritualInfluenceAr: 'النَّافِعُ',
    reflection: 'Reflect upon the Divine quality of The Bestower of Benefits in your life.',
    reflectionFr: 'Réfléchissez à la qualité divine de Celui qui accorde le profit dans votre vie.',
    reflectionAr: 'تأمل في الصفة الإلهية النَّافِعُ في حياتك'
  },
  {
    number: 93,
    arabic: 'النُّورُ',
    transliteration: 'An Noor',
    meaningEn: 'The Light',
    meaningFr: 'La Lumière',
    meaningAr: 'النُّورُ',
    spiritualInfluence: 'The Light',
    spiritualInfluenceFr: 'La Lumière',
    spiritualInfluenceAr: 'النُّورُ',
    reflection: 'Reflect upon the Divine quality of The Light in your life.',
    reflectionFr: 'Réfléchissez à la qualité divine de La Lumière dans votre vie.',
    reflectionAr: 'تأمل في الصفة الإلهية النُّورُ في حياتك'
  },
  {
    number: 94,
    arabic: 'الْهَادِي',
    transliteration: 'Al Haadi',
    meaningEn: 'The Guider',
    meaningFr: 'Le Guide',
    meaningAr: 'الْهَادِي',
    spiritualInfluence: 'The Guider',
    spiritualInfluenceFr: 'Le Guide',
    spiritualInfluenceAr: 'الْهَادِي',
    reflection: 'Reflect upon the Divine quality of The Guider in your life.',
    reflectionFr: 'Réfléchissez à la qualité divine de Le Guide dans votre vie.',
    reflectionAr: 'تأمل في الصفة الإلهية الْهَادِي في حياتك'
  },
  {
    number: 95,
    arabic: 'الْبَدِيعُ',
    transliteration: 'Al Badi\'',
    meaningEn: 'The Originator',
    meaningFr: 'Le Novateur',
    meaningAr: 'الْبَدِيعُ',
    spiritualInfluence: 'The Originator',
    spiritualInfluenceFr: 'Le Novateur',
    spiritualInfluenceAr: 'الْبَدِيعُ',
    reflection: 'Reflect upon the Divine quality of The Originator in your life.',
    reflectionFr: 'Réfléchissez à la qualité divine de Le Novateur dans votre vie.',
    reflectionAr: 'تأمل في الصفة الإلهية الْبَدِيعُ في حياتك'
  },
  {
    number: 96,
    arabic: 'اَلْبَاقِي',
    transliteration: 'Al Baaqi',
    meaningEn: 'The Everlasting One',
    meaningFr: 'Celui qui demeure',
    meaningAr: 'اَلْبَاقِي',
    spiritualInfluence: 'The Everlasting One',
    spiritualInfluenceFr: 'Celui qui demeure',
    spiritualInfluenceAr: 'اَلْبَاقِي',
    reflection: 'Reflect upon the Divine quality of The Everlasting One in your life.',
    reflectionFr: 'Réfléchissez à la qualité divine de Celui qui demeure dans votre vie.',
    reflectionAr: 'تأمل في الصفة الإلهية اَلْبَاقِي في حياتك'
  },
  {
    number: 97,
    arabic: 'الْوَارِثُ',
    transliteration: 'Al Waarith',
    meaningEn: 'The Inhertior',
    meaningFr: 'L\'Héritier',
    meaningAr: 'الْوَارِثُ',
    spiritualInfluence: 'The Inhertior',
    spiritualInfluenceFr: 'L\'Héritier',
    spiritualInfluenceAr: 'الْوَارِثُ',
    reflection: 'Reflect upon the Divine quality of The Inhertior in your life.',
    reflectionFr: 'Réfléchissez à la qualité divine de L\'Héritier dans votre vie.',
    reflectionAr: 'تأمل في الصفة الإلهية الْوَارِثُ في حياتك'
  },
  {
    number: 98,
    arabic: 'الرَّشِيدُ',
    transliteration: 'Ar Rasheed',
    meaningEn: 'The Most Righteous Guide',
    meaningFr: 'Celui qui dirige',
    meaningAr: 'الرَّشِيدُ',
    spiritualInfluence: 'The Most Righteous Guide',
    spiritualInfluenceFr: 'Celui qui dirige',
    spiritualInfluenceAr: 'الرَّشِيدُ',
    reflection: 'Reflect upon the Divine quality of The Most Righteous Guide in your life.',
    reflectionFr: 'Réfléchissez à la qualité divine de Celui qui dirige dans votre vie.',
    reflectionAr: 'تأمل في الصفة الإلهية الرَّشِيدُ في حياتك'
  },
  {
    number: 99,
    arabic: 'الصَّبُورُ',
    transliteration: 'As Saboor',
    meaningEn: 'The Patient One',
    meaningFr: 'Le Patient',
    meaningAr: 'الصَّبُورُ',
    spiritualInfluence: 'The Patient One',
    spiritualInfluenceFr: 'Le Patient',
    spiritualInfluenceAr: 'الصَّبُورُ',
    reflection: 'Reflect upon the Divine quality of The Patient One in your life.',
    reflectionFr: 'Réfléchissez à la qualité divine de Le Patient dans votre vie.',
    reflectionAr: 'تأمل في الصفة الإلهية الصَّبُورُ في حياتك'
  }
];
// QURAN METADATA (114 Surahs)
// ============================================================================

export const QURAN_META: {
  [key: number]: { name: string; nameAr: string; totalAyahs: number };
} = {
  1: { name: "Al-Fatihah", nameAr: "الفاتحة", totalAyahs: 7 },
  2: { name: "Al-Baqarah", nameAr: "البقرة", totalAyahs: 286 },
  3: { name: "Aal-Imran", nameAr: "آل عمران", totalAyahs: 200 },
  4: { name: "An-Nisa", nameAr: "النساء", totalAyahs: 176 },
  5: { name: "Al-Ma'idah", nameAr: "المائدة", totalAyahs: 120 },
  6: { name: "Al-An'am", nameAr: "الأنعام", totalAyahs: 165 },
  7: { name: "Al-A'raf", nameAr: "الأعراف", totalAyahs: 206 },
  8: { name: "Al-Anfal", nameAr: "الأنفال", totalAyahs: 75 },
  9: { name: "At-Tawbah", nameAr: "التوبة", totalAyahs: 129 },
  10: { name: "Yunus", nameAr: "يونس", totalAyahs: 109 },
  11: { name: "Hud", nameAr: "هود", totalAyahs: 123 },
  12: { name: "Yusuf", nameAr: "يوسف", totalAyahs: 111 },
  13: { name: "Ar-Ra'd", nameAr: "الرعد", totalAyahs: 43 },
  14: { name: "Ibrahim", nameAr: "إبراهيم", totalAyahs: 52 },
  15: { name: "Al-Hijr", nameAr: "الحجر", totalAyahs: 99 },
  16: { name: "An-Nahl", nameAr: "النحل", totalAyahs: 128 },
  17: { name: "Al-Isra", nameAr: "الإسراء", totalAyahs: 111 },
  18: { name: "Al-Kahf", nameAr: "الكهف", totalAyahs: 110 },
  19: { name: "Maryam", nameAr: "مريم", totalAyahs: 98 },
  20: { name: "Taha", nameAr: "طه", totalAyahs: 135 },
  21: { name: "Al-Anbiya", nameAr: "الأنبياء", totalAyahs: 112 },
  22: { name: "Al-Hajj", nameAr: "الحج", totalAyahs: 78 },
  23: { name: "Al-Mu'minun", nameAr: "المؤمنون", totalAyahs: 118 },
  24: { name: "An-Nur", nameAr: "النور", totalAyahs: 64 },
  25: { name: "Al-Furqan", nameAr: "الفرقان", totalAyahs: 77 },
  26: { name: "Ash-Shu'ara", nameAr: "الشعراء", totalAyahs: 227 },
  27: { name: "An-Naml", nameAr: "النمل", totalAyahs: 93 },
  28: { name: "Al-Qasas", nameAr: "القصص", totalAyahs: 88 },
  29: { name: "Al-Ankabut", nameAr: "العنكبوت", totalAyahs: 69 },
  30: { name: "Ar-Rum", nameAr: "الروم", totalAyahs: 60 },
  31: { name: "Luqman", nameAr: "لقمان", totalAyahs: 34 },
  32: { name: "As-Sajdah", nameAr: "السجدة", totalAyahs: 30 },
  33: { name: "Al-Ahzab", nameAr: "الأحزاب", totalAyahs: 73 },
  34: { name: "Saba", nameAr: "سبأ", totalAyahs: 54 },
  35: { name: "Fatir", nameAr: "فاطر", totalAyahs: 45 },
  36: { name: "Ya-Sin", nameAr: "يس", totalAyahs: 83 },
  37: { name: "As-Saffat", nameAr: "الصافات", totalAyahs: 182 },
  38: { name: "Sad", nameAr: "ص", totalAyahs: 88 },
  39: { name: "Az-Zumar", nameAr: "الزمر", totalAyahs: 75 },
  40: { name: "Ghafir", nameAr: "غافر", totalAyahs: 85 },
  41: { name: "Fussilat", nameAr: "فصلت", totalAyahs: 54 },
  42: { name: "Ash-Shura", nameAr: "الشورى", totalAyahs: 53 },
  43: { name: "Az-Zukhruf", nameAr: "الزخرف", totalAyahs: 89 },
  44: { name: "Ad-Dukhan", nameAr: "الدخان", totalAyahs: 59 },
  45: { name: "Al-Jathiyah", nameAr: "الجاثية", totalAyahs: 37 },
  46: { name: "Al-Ahqaf", nameAr: "الأحقاف", totalAyahs: 35 },
  47: { name: "Muhammad", nameAr: "محمد", totalAyahs: 38 },
  48: { name: "Al-Fath", nameAr: "الفتح", totalAyahs: 29 },
  49: { name: "Al-Hujurat", nameAr: "الحجرات", totalAyahs: 18 },
  50: { name: "Qaf", nameAr: "ق", totalAyahs: 45 },
  51: { name: "Adh-Dhariyat", nameAr: "الذاريات", totalAyahs: 60 },
  52: { name: "At-Tur", nameAr: "الطور", totalAyahs: 49 },
  53: { name: "An-Najm", nameAr: "النجم", totalAyahs: 62 },
  54: { name: "Al-Qamar", nameAr: "القمر", totalAyahs: 55 },
  55: { name: "Ar-Rahman", nameAr: "الرحمن", totalAyahs: 78 },
  56: { name: "Al-Waqiah", nameAr: "الواقعة", totalAyahs: 96 },
  57: { name: "Al-Hadid", nameAr: "الحديد", totalAyahs: 29 },
  58: { name: "Al-Mujadila", nameAr: "المجادلة", totalAyahs: 22 },
  59: { name: "Al-Hashr", nameAr: "الحشر", totalAyahs: 24 },
  60: { name: "Al-Mumtahanah", nameAr: "الممتحنة", totalAyahs: 13 },
  61: { name: "As-Saff", nameAr: "الصف", totalAyahs: 14 },
  62: { name: "Al-Jumu'ah", nameAr: "الجمعة", totalAyahs: 11 },
  63: { name: "Al-Munafiqun", nameAr: "المنافقون", totalAyahs: 11 },
  64: { name: "At-Taghabun", nameAr: "التغابن", totalAyahs: 18 },
  65: { name: "At-Talaq", nameAr: "الطلاق", totalAyahs: 12 },
  66: { name: "At-Tahrim", nameAr: "التحريم", totalAyahs: 12 },
  67: { name: "Al-Mulk", nameAr: "الملك", totalAyahs: 30 },
  68: { name: "Al-Qalam", nameAr: "القلم", totalAyahs: 52 },
  69: { name: "Al-Haqqah", nameAr: "الحاقة", totalAyahs: 52 },
  70: { name: "Al-Ma'arij", nameAr: "المعارج", totalAyahs: 44 },
  71: { name: "Nuh", nameAr: "نوح", totalAyahs: 28 },
  72: { name: "Al-Jinn", nameAr: "الجن", totalAyahs: 28 },
  73: { name: "Al-Muzzammil", nameAr: "المزمل", totalAyahs: 20 },
  74: { name: "Al-Muddaththir", nameAr: "المدثر", totalAyahs: 56 },
  75: { name: "Al-Qiyamah", nameAr: "القيامة", totalAyahs: 40 },
  76: { name: "Al-Insan", nameAr: "الإنسان", totalAyahs: 31 },
  77: { name: "Al-Mursalat", nameAr: "المرسلات", totalAyahs: 50 },
  78: { name: "An-Naba", nameAr: "النبأ", totalAyahs: 40 },
  79: { name: "An-Nazi'at", nameAr: "النازعات", totalAyahs: 46 },
  80: { name: "Abasa", nameAr: "عبس", totalAyahs: 42 },
  81: { name: "At-Takwir", nameAr: "التكوير", totalAyahs: 29 },
  82: { name: "Al-Infitar", nameAr: "الإنفطار", totalAyahs: 19 },
  83: { name: "Al-Mutaffifin", nameAr: "المطففين", totalAyahs: 36 },
  84: { name: "Al-Inshiqaq", nameAr: "الإنشقاق", totalAyahs: 25 },
  85: { name: "Al-Buruj", nameAr: "البروج", totalAyahs: 22 },
  86: { name: "At-Tariq", nameAr: "الطارق", totalAyahs: 17 },
  87: { name: "Al-A'la", nameAr: "الأعلى", totalAyahs: 19 },
  88: { name: "Al-Ghashiyah", nameAr: "الغاشية", totalAyahs: 26 },
  89: { name: "Al-Fajr", nameAr: "الفجر", totalAyahs: 30 },
  90: { name: "Al-Balad", nameAr: "البلد", totalAyahs: 20 },
  91: { name: "Ash-Shams", nameAr: "الشمس", totalAyahs: 15 },
  92: { name: "Al-Lail", nameAr: "الليل", totalAyahs: 21 },
  93: { name: "Ad-Duhaa", nameAr: "الضحى", totalAyahs: 11 },
  94: { name: "Ash-Sharh", nameAr: "الشرح", totalAyahs: 8 },
  95: { name: "At-Tin", nameAr: "التين", totalAyahs: 8 },
  96: { name: "Al-Alaq", nameAr: "العلق", totalAyahs: 19 },
  97: { name: "Al-Qadr", nameAr: "القدر", totalAyahs: 5 },
  98: { name: "Al-Bayyinah", nameAr: "البينة", totalAyahs: 8 },
  99: { name: "Az-Zalzalah", nameAr: "الزلزلة", totalAyahs: 8 },
  100: { name: "Al-Adiyat", nameAr: "العاديات", totalAyahs: 11 },
  101: { name: "Al-Qari'ah", nameAr: "القارعة", totalAyahs: 11 },
  102: { name: "At-Takathur", nameAr: "التكاثر", totalAyahs: 8 },
  103: { name: "Al-Asr", nameAr: "العصر", totalAyahs: 3 },
  104: { name: "Al-Humazah", nameAr: "الهمزة", totalAyahs: 9 },
  105: { name: "Al-Fil", nameAr: "الفيل", totalAyahs: 5 },
  106: { name: "Quraish", nameAr: "قريش", totalAyahs: 4 },
  107: { name: "Al-Ma'un", nameAr: "الماعون", totalAyahs: 7 },
  108: { name: "Al-Kawthar", nameAr: "الكوثر", totalAyahs: 3 },
  109: { name: "Al-Kafirun", nameAr: "الكافرون", totalAyahs: 6 },
  110: { name: "An-Nasr", nameAr: "النصر", totalAyahs: 3 },
  111: { name: "Al-Masad", nameAr: "المسد", totalAyahs: 5 },
  112: { name: "Al-Ikhlas", nameAr: "الإخلاص", totalAyahs: 4 },
  113: { name: "Al-Falaq", nameAr: "الفلق", totalAyahs: 5 },
  114: { name: "An-Nas", nameAr: "الناس", totalAyahs: 6 }
};

// ============================================================================
// SPIRITUAL STATIONS (9 Maqamat)
// ============================================================================

export const SPIRITUAL_STATIONS: SpiritualStation[] = [
  {
    number: 1,
    en: 'Tawbah (Repentance)',
    fr: 'Tawbah (Repentir)',
    ar: 'التوبة',
    description: {
      en: 'The station of returning to the Divine, acknowledging missteps, and seeking renewal through sincere repentance.',
      fr: 'La station du retour vers le Divin, reconnaissant les faux pas et cherchant le renouvellement par un repentir sincère.',
      ar: 'مقام العودة إلى الله، والاعتراف بالزلات، والسعي للتجديد من خلال التوبة الصادقة'
    }
  },
  {
    number: 2,
    en: 'Zuhd (Asceticism)',
    fr: 'Zuhd (Ascétisme)',
    ar: 'الزهد',
    description: {
      en: 'The station of detachment from worldly desires, focusing on spiritual enrichment over material accumulation.',
      fr: 'La station du détachement des désirs mondains, se concentrant sur l\'enrichissement spirituel plutôt que sur l\'accumulation matérielle.',
      ar: 'مقام الانفصال عن الرغبات الدنيوية، والتركيز على الإثراء الروحي بدلاً من التراكم المادي'
    }
  },
  {
    number: 3,
    en: 'Tawakkul (Trust)',
    fr: 'Tawakkul (Confiance)',
    ar: 'التوكل',
    description: {
      en: 'The station of complete reliance on Divine providence, trusting in Allah\'s plan while taking necessary action.',
      fr: 'La station de la confiance totale en la providence divine, faisant confiance au plan d\'Allah tout en prenant les mesures nécessaires.',
      ar: 'مقام الاعتماد الكامل على العناية الإلهية، والثقة في خطة الله مع اتخاذ الإجراءات اللازمة'
    }
  },
  {
    number: 4,
    en: 'Ridha (Contentment)',
    fr: 'Ridha (Contentement)',
    ar: 'الرضا',
    description: {
      en: 'The station of deep satisfaction with Divine decree, accepting all circumstances with grace and gratitude.',
      fr: 'La station de satisfaction profonde avec le décret divin, acceptant toutes les circonstances avec grâce et gratitude.',
      ar: 'مقام الرضا العميق بالقضاء الإلهي، وقبول جميع الظروف بنعمة وامتنان'
    }
  },
  {
    number: 5,
    en: 'Sabr (Patience)',
    fr: 'Sabr (Patience)',
    ar: 'الصبر',
    description: {
      en: 'The station of steadfast endurance, maintaining composure and faith through trials and tribulations.',
      fr: 'La station de l\'endurance ferme, maintenant le calme et la foi à travers les épreuves et les tribulations.',
      ar: 'مقام الثبات الراسخ، والحفاظ على الهدوء والإيمان من خلال المحن والشدائد'
    }
  },
  {
    number: 6,
    en: 'Shukr (Gratitude)',
    fr: 'Shukr (Gratitude)',
    ar: 'الشكر',
    description: {
      en: 'The station of profound thankfulness, recognizing and appreciating Divine blessings in all aspects of life.',
      fr: 'La station de gratitude profonde, reconnaissant et appréciant les bénédictions divines dans tous les aspects de la vie.',
      ar: 'مقام الشكر العميق، والاعتراف بالنعم الإلهية وتقديرها في جميع جوانب الحياة'
    }
  },
  {
    number: 7,
    en: 'Khawf (Fear)',
    fr: 'Khawf (Crainte)',
    ar: 'الخوف',
    description: {
      en: 'The station of reverential awe, maintaining consciousness of Divine majesty and accountability.',
      fr: 'La station de la crainte révérencielle, maintenant la conscience de la majesté divine et de la responsabilité.',
      ar: 'مقام الخشية الوقورة، والحفاظ على الوعي بالجلال الإلهي والمسؤولية'
    }
  },
  {
    number: 8,
    en: 'Raja\' (Hope)',
    fr: 'Raja\' (Espoir)',
    ar: 'الرجاء',
    description: {
      en: 'The station of hopeful expectation, trusting in Divine mercy and maintaining optimism in Allah\'s grace.',
      fr: 'La station de l\'attente pleine d\'espoir, faisant confiance à la miséricorde divine et maintenant l\'optimisme dans la grâce d\'Allah.',
      ar: 'مقام التوقع المأمول، والثقة في الرحمة الإلهية والحفاظ على التفاؤل في نعمة الله'
    }
  },
  {
    number: 9,
    en: 'Mahabbah (Love)',
    fr: 'Mahabbah (Amour)',
    ar: 'المحبة',
    description: {
      en: 'The highest station of Divine love, where the heart is filled with pure devotion and spiritual connection.',
      fr: 'La plus haute station de l\'amour divin, où le cœur est rempli de dévotion pure et de connexion spirituelle.',
      ar: 'أعلى مقام المحبة الإلهية، حيث يمتلئ القلب بالتفاني الخالص والاتصال الروحي'
    }
  }
];

// ============================================================================
// ELEMENT QUALITIES (Enhanced)
// ============================================================================

export const ELEMENT_QUALITIES: ElementQuality[] = [
  {
    index: 1,
    en: 'Fire',
    fr: 'Feu',
    ar: 'نار',
    icon: '🔥',
    qualities: {
      en: ['Passionate', 'Dynamic', 'Courageous', 'Leadership', 'Initiative', 'Transformative'],
      fr: ['Passionné', 'Dynamique', 'Courageux', 'Leadership', 'Initiative', 'Transformateur'],
      ar: ['شغوف', 'ديناميكي', 'شجاع', 'قيادي', 'مبادر', 'تحويلي']
    },
    challenges: {
      en: ['Impatience', 'Impulsiveness', 'Aggression', 'Burnout'],
      fr: ['Impatience', 'Impulsivité', 'Agressivité', 'Épuisement'],
      ar: ['عدم الصبر', 'التهور', 'العدوانية', 'الإرهاق']
    }
  },
  {
    index: 2,
    en: 'Air',
    fr: 'Air',
    ar: 'هواء',
    icon: '💨',
    qualities: {
      en: ['Intellectual', 'Communicative', 'Adaptable', 'Social', 'Analytical', 'Free-spirited'],
      fr: ['Intellectuel', 'Communicatif', 'Adaptable', 'Social', 'Analytique', 'Libre d\'esprit'],
      ar: ['فكري', 'تواصلي', 'قابل للتكيف', 'اجتماعي', 'تحليلي', 'حر الروح']
    },
    challenges: {
      en: ['Overthinking', 'Detachment', 'Inconsistency', 'Superficiality'],
      fr: ['Trop de réflexion', 'Détachement', 'Inconsistance', 'Superficialité'],
      ar: ['الإفراط في التفكير', 'الانفصال', 'عدم الاتساق', 'السطحية']
    }
  },
  {
    index: 3,
    en: 'Water',
    fr: 'Eau',
    ar: 'ماء',
    icon: '💧',
    qualities: {
      en: ['Emotional', 'Intuitive', 'Nurturing', 'Empathetic', 'Healing', 'Deep'],
      fr: ['Émotionnel', 'Intuitif', 'Nourricier', 'Empathique', 'Guérisseur', 'Profond'],
      ar: ['عاطفي', 'حدسي', 'رعاية', 'متعاطف', 'شفائي', 'عميق']
    },
    challenges: {
      en: ['Over-sensitivity', 'Moodiness', 'Overwhelm', 'Boundary issues'],
      fr: ['Hypersensibilité', 'Humeur changeante', 'Submersion', 'Problèmes de limites'],
      ar: ['الحساسية المفرطة', 'تقلب المزاج', 'الغمر', 'مشاكل الحدود']
    }
  },
  {
    index: 4,
    en: 'Earth',
    fr: 'Terre',
    ar: 'تراب',
    icon: '🌍',
    qualities: {
      en: ['Grounded', 'Practical', 'Reliable', 'Patient', 'Stable', 'Methodical'],
      fr: ['Ancré', 'Pratique', 'Fiable', 'Patient', 'Stable', 'Méthodique'],
      ar: ['متأصل', 'عملي', 'موثوق', 'صبور', 'مستقر', 'منهجي']
    },
    challenges: {
      en: ['Stubbornness', 'Rigidity', 'Materialism', 'Resistance to change'],
      fr: ['Entêtement', 'Rigidité', 'Matérialisme', 'Résistance au changement'],
      ar: ['العناد', 'الجمود', 'المادية', 'مقاومة التغيير']
    }
  }
];

// ============================================================================
// COLOR RESONANCE DATA (Element & Chakra Mappings)
// ============================================================================

export interface ColorResonance {
  primaryColor: { hex: string; name: string; nameAr: string; nameFr: string };
  secondaryColors: { hex: string; name: string; nameAr: string; nameFr: string }[];
  chakra: {
    number: number;
    name: string;
    nameAr: string;
    nameFr: string;
    location: string;
    locationAr: string;
    locationFr: string;
    color: string;
  };
  healingProperties: {
    en: string[];
    fr: string[];
    ar: string[];
  };
  visualTherapy: {
    en: string[];
    fr: string[];
    ar: string[];
  };
}

export const ELEMENT_COLOR_MAP: Record<number, ColorResonance> = {
  // Fire Element (1)
  1: {
    primaryColor: { hex: '#FF4500', name: 'Fiery Orange-Red', nameAr: 'برتقالي-أحمر ناري', nameFr: 'Orange-Rouge Ardent' },
    secondaryColors: [
      { hex: '#FFD700', name: 'Golden Yellow', nameAr: 'أصفر ذهبي', nameFr: 'Jaune Doré' },
      { hex: '#DC143C', name: 'Crimson', nameAr: 'قرمزي', nameFr: 'Cramoisi' }
    ],
    chakra: {
      number: 3,
      name: 'Solar Plexus',
      nameAr: 'الضفيرة الشمسية',
      nameFr: 'Plexus Solaire',
      location: 'Above navel',
      locationAr: 'فوق السرة',
      locationFr: 'Au-dessus du nombril',
      color: '#FFD700'
    },
    healingProperties: {
      en: ['Boosts vitality and energy', 'Enhances confidence and willpower', 'Stimulates creativity and passion', 'Supports transformation'],
      fr: ['Augmente la vitalité et l\'énergie', 'Renforce la confiance et la volonté', 'Stimule la créativité et la passion', 'Soutient la transformation'],
      ar: ['يعزز الحيوية والطاقة', 'يعزز الثقة وقوة الإرادة', 'يحفز الإبداع والشغف', 'يدعم التحول']
    },
    visualTherapy: {
      en: ['Meditate on flames or sunrise', 'Wear orange/red clothing during important tasks', 'Surround yourself with warm tones', 'Use candle gazing (Trataka)'],
      fr: ['Méditez sur les flammes ou le lever du soleil', 'Portez des vêtements orange/rouges pendant les tâches importantes', 'Entourez-vous de tons chauds', 'Pratiquez la méditation de la bougie (Trataka)'],
      ar: ['تأمل في اللهب أو شروق الشمس', 'ارتدي ملابس برتقالية/حمراء أثناء المهام المهمة', 'أحط نفسك بالألوان الدافئة', 'استخدم التحديق في الشموع (تراتاكا)']
    }
  },
  
  // Air Element (2)
  2: {
    primaryColor: { hex: '#87CEEB', name: 'Sky Blue', nameAr: 'أزرق سماوي', nameFr: 'Bleu Ciel' },
    secondaryColors: [
      { hex: '#E0FFFF', name: 'Light Cyan', nameAr: 'سماوي فاتح', nameFr: 'Cyan Clair' },
      { hex: '#B0E0E6', name: 'Powder Blue', nameAr: 'أزرق بودرة', nameFr: 'Bleu Poudre' }
    ],
    chakra: {
      number: 5,
      name: 'Throat',
      nameAr: 'الحلق',
      nameFr: 'Gorge',
      location: 'Throat center',
      locationAr: 'مركز الحلق',
      locationFr: 'Centre de la gorge',
      color: '#87CEEB'
    },
    healingProperties: {
      en: ['Enhances communication and expression', 'Promotes clarity of thought', 'Supports freedom and flexibility', 'Encourages intellectual growth'],
      fr: ['Améliore la communication et l\'expression', 'Favorise la clarté de la pensée', 'Soutient la liberté et la flexibilité', 'Encourage la croissance intellectuelle'],
      ar: ['يعزز التواصل والتعبير', 'يعزز وضوح الفكر', 'يدعم الحرية والمرونة', 'يشجع النمو الفكري']
    },
    visualTherapy: {
      en: ['Gaze at clear skies or clouds', 'Wear blue/cyan during communication', 'Practice breath awareness with blue visualization', 'Decorate workspace with airy colors'],
      fr: ['Contemplez le ciel dégagé ou les nuages', 'Portez du bleu/cyan pendant la communication', 'Pratiquez la conscience respiratoire avec visualisation bleue', 'Décorez l\'espace de travail avec des couleurs aérées'],
      ar: ['تأمل في السماء الصافية أو الغيوم', 'ارتدي الأزرق/السماوي أثناء التواصل', 'مارس الوعي بالتنفس مع التصور الأزرق', 'زين مكان العمل بالألوان الهوائية']
    }
  },
  
  // Water Element (3)
  3: {
    primaryColor: { hex: '#4682B4', name: 'Deep Blue', nameAr: 'أزرق عميق', nameFr: 'Bleu Profond' },
    secondaryColors: [
      { hex: '#20B2AA', name: 'Light Sea Green', nameAr: 'أخضر بحري فاتح', nameFr: 'Vert Mer Clair' },
      { hex: '#708090', name: 'Slate Gray', nameAr: 'رمادي أردوازي', nameFr: 'Gris Ardoise' }
    ],
    chakra: {
      number: 2,
      name: 'Sacral',
      nameAr: 'العجزي',
      nameFr: 'Sacré',
      location: 'Lower abdomen',
      locationAr: 'أسفل البطن',
      locationFr: 'Bas-ventre',
      color: '#FF6347'
    },
    healingProperties: {
      en: ['Deepens emotional awareness', 'Enhances intuition and empathy', 'Promotes healing and cleansing', 'Supports flow and adaptability'],
      fr: ['Approfondit la conscience émotionnelle', 'Améliore l\'intuition et l\'empathie', 'Favorise la guérison et le nettoyage', 'Soutient le flux et l\'adaptabilité'],
      ar: ['يعمق الوعي العاطفي', 'يعزز الحدس والتعاطف', 'يعزز الشفاء والتطهير', 'يدعم التدفق والتكيف']
    },
    visualTherapy: {
      en: ['Meditate near water (ocean, river, fountain)', 'Wear blue/teal during emotional work', 'Take ritual baths with intention', 'Use flowing water sounds for meditation'],
      fr: ['Méditez près de l\'eau (océan, rivière, fontaine)', 'Portez du bleu/sarcelle pendant le travail émotionnel', 'Prenez des bains rituels avec intention', 'Utilisez des sons d\'eau courante pour la méditation'],
      ar: ['تأمل بالقرب من الماء (محيط، نهر، نافورة)', 'ارتدي الأزرق/الفيروزي أثناء العمل العاطفي', 'خذ حمامات طقوسية بنية', 'استخدم أصوات الماء المتدفق للتأمل']
    }
  },
  
  // Earth Element (4)
  4: {
    primaryColor: { hex: '#8B4513', name: 'Earthy Brown', nameAr: 'بني ترابي', nameFr: 'Brun Terreux' },
    secondaryColors: [
      { hex: '#228B22', name: 'Forest Green', nameAr: 'أخضر غابة', nameFr: 'Vert Forêt' },
      { hex: '#D2691E', name: 'Terracotta', nameAr: 'تراكوتا', nameFr: 'Terre Cuite' }
    ],
    chakra: {
      number: 1,
      name: 'Root',
      nameAr: 'الجذر',
      nameFr: 'Racine',
      location: 'Base of spine',
      locationAr: 'قاعدة العمود الفقري',
      locationFr: 'Base de la colonne',
      color: '#8B0000'
    },
    healingProperties: {
      en: ['Grounds and stabilizes energy', 'Enhances security and safety', 'Promotes physical health and vitality', 'Supports manifestation and abundance'],
      fr: ['Ancre et stabilise l\'énergie', 'Renforce la sécurité', 'Favorise la santé physique et la vitalité', 'Soutient la manifestation et l\'abondance'],
      ar: ['يؤرض ويستقر الطاقة', 'يعزز الأمن والسلامة', 'يعزز الصحة الجسدية والحيوية', 'يدعم التجلي والوفرة']
    },
    visualTherapy: {
      en: ['Walk barefoot on earth/grass', 'Wear brown/green during grounding work', 'Meditate with stones or crystals', 'Spend time in nature and forests'],
      fr: ['Marchez pieds nus sur terre/herbe', 'Portez du brun/vert pendant le travail d\'ancrage', 'Méditez avec des pierres ou des cristaux', 'Passez du temps dans la nature et les forêts'],
      ar: ['امشِ حافي القدمين على الأرض/العشب', 'ارتدي البني/الأخضر أثناء عمل التأريض', 'تأمل مع الحجارة أو البلورات', 'اقضِ وقتاً في الطبيعة والغابات']
    }
  }
};

export const BURJ_COLOR_ENHANCEMENT: Record<number, { colors: string[]; meaning: { en: string; fr: string; ar: string } }> = {
  1: { colors: ['#FF0000'], meaning: { en: 'Bold red for Aries courage', fr: 'Rouge audacieux pour le courage du Bélier', ar: 'أحمر جريء لشجاعة الحمل' } },
  2: { colors: ['#90EE90'], meaning: { en: 'Soft green for Taurus stability', fr: 'Vert doux pour la stabilité du Taureau', ar: 'أخضر ناعم لاستقرار الثور' } },
  3: { colors: ['#FFFF00'], meaning: { en: 'Bright yellow for Gemini communication', fr: 'Jaune vif pour la communication des Gémeaux', ar: 'أصفر مشرق لتواصل الجوزاء' } },
  4: { colors: ['#C0C0C0'], meaning: { en: 'Silver for Cancer intuition', fr: 'Argenté pour l\'intuition du Cancer', ar: 'فضي لحدس السرطان' } },
  5: { colors: ['#FFD700'], meaning: { en: 'Gold for Leo radiance', fr: 'Or pour le rayonnement du Lion', ar: 'ذهبي لإشراق الأسد' } },
  6: { colors: ['#8B4513'], meaning: { en: 'Earth tones for Virgo practicality', fr: 'Tons terreux pour la praticité de la Vierge', ar: 'ألوان ترابية لعملية العذراء' } },
  7: { colors: ['#FFC0CB'], meaning: { en: 'Pink for Libra harmony', fr: 'Rose pour l\'harmonie de la Balance', ar: 'وردي لتناغم الميزان' } },
  8: { colors: ['#8B0000'], meaning: { en: 'Deep red for Scorpio intensity', fr: 'Rouge profond pour l\'intensité du Scorpion', ar: 'أحمر عميق لشدة العقرب' } },
  9: { colors: ['#800080'], meaning: { en: 'Purple for Sagittarius wisdom', fr: 'Violet pour la sagesse du Sagittaire', ar: 'بنفسجي لحكمة القوس' } },
  10: { colors: ['#2F4F4F'], meaning: { en: 'Dark gray for Capricorn discipline', fr: 'Gris foncé pour la discipline du Capricorne', ar: 'رمادي داكن لانضباط الجدي' } },
  11: { colors: ['#00CED1'], meaning: { en: 'Turquoise for Aquarius innovation', fr: 'Turquoise pour l\'innovation du Verseau', ar: 'فيروزي لابتكار الدلو' } },
  12: { colors: ['#9370DB'], meaning: { en: 'Lavender for Pisces spirituality', fr: 'Lavande pour la spiritualité des Poissons', ar: 'لافندر لروحانية الحوت' } }
};

// ============================================================================
// HELPER FUNCTIONS FOR DATA RETRIEVAL
// ============================================================================

/**
 * Get Divine Name by number (1-99)
 */
export function getDivineNameByNumber(number: number): DivineName | undefined {
  return DIVINE_NAMES_DATA.find(name => name.number === number);
}

/**
 * Calculate Divine Name resonance based on value (mod 99)
 */
export function calculateDivineNameResonance(value: number): DivineName | undefined {
  if (value <= 0) return undefined;
  let remainder = value % 99;
  if (remainder === 0) remainder = 99;
  return getDivineNameByNumber(remainder);
}

/**
 * Compute Quranic Resonance from total value
 */
export function computeQuranResonance(total: number): QuranResonance | null {
  if (total <= 0) return null;

  // Calculate Surah number (1-114)
  let surahNum = total % 114;
  if (surahNum === 0) surahNum = 114;

  const surahData = QURAN_META[surahNum];
  if (!surahData) return null;

  const totalAyahs = surahData.totalAyahs;

  // Calculate Ayah number (1 to totalAyahs)
  let ayahNum = total % totalAyahs;
  if (ayahNum === 0) ayahNum = totalAyahs;

  const quranLink = `https://quran.com/${surahNum}/${ayahNum}`;

  return {
    surahNumber: surahNum,
    surahName: surahData.name,
    surahNameArabic: surahData.nameAr,
    ayahNumber: ayahNum,
    totalAyahsInSurah: totalAyahs,
    quranLink
  };
}

/**
 * Get Spiritual Station by number (1-9)
 */
export function getSpiritualStationByNumber(number: number): SpiritualStation | undefined {
  return SPIRITUAL_STATIONS.find(station => station.number === number);
}

/**
 * Get Element Quality by index (1-4)
 */
export function getElementQualityByIndex(index: number): ElementQuality | undefined {
  return ELEMENT_QUALITIES.find(element => element.index === index);
}

/**
 * Get Color Resonance by element index (1-4)
 */
export function getColorResonanceByElement(elementIndex: number): ColorResonance | undefined {
  return ELEMENT_COLOR_MAP[elementIndex];
}

/**
 * Get Burj color enhancement by burj number (1-12)
 */
export function getBurjColorEnhancement(burjNumber: number): { colors: string[]; meaning: { en: string; fr: string; ar: string } } | undefined {
  return BURJ_COLOR_ENHANCEMENT[burjNumber];
}
