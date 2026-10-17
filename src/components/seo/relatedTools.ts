/**
 * Data for the compact "Related tools" block shown just below a tool's results on the
 * crawlable SEO pages, to give visitors an obvious next step.
 *
 * Plain server-rendered links, styled with the same card classes the SEO
 * pages already use (rounded-xl border, bg-white/70, emerald link text).
 * Links stay in the language of the URL being served: /ar pages link to /ar
 * pages, /fr pages to /fr mirrors, falling back to English only where a page
 * has no localized version. Names reuse the tool names already translated in
 * the repo (Arabic landing links, AR_META and public/i18n/ar-ui.json).
 */
import { arAppPath, isLocalizedPath, localizeHref, AR_PATHS } from '@/src/lib/i18nRoutes';

export type ToolsLang = 'en' | 'fr' | 'ar';

export type ToolKey =
  | 'burj'
  | 'compatibility'
  | 'abjad'
  | 'hours'
  | 'planetOfDay'
  | 'ikhtiyarat'
  | 'manazil'
  | 'sadaqa'
  | 'sadaqaDay'
  | 'marriage'
  | 'travel'
  | 'moving'
  | 'business';

const TOOLS: Record<ToolKey, { path: string; name: Record<ToolsLang, string> }> = {
  burj: {
    path: '/name-and-mother-burj',
    name: { en: "Your Burj from Your Name & Mother's Name", fr: 'Votre burj par votre nom et celui de votre mère', ar: 'برجك من اسمك واسم أمك' },
  },
  compatibility: {
    path: '/compatibility',
    name: { en: 'Name Compatibility for Marriage', fr: 'Compatibilité des prénoms pour le mariage', ar: 'توافق الأسماء للزواج' },
  },
  abjad: {
    path: '/abjad',
    name: { en: 'Abjad Calculator', fr: 'Calculateur Abjad', ar: 'حساب الجمل' },
  },
  hours: {
    path: '/planetary-hours',
    name: { en: 'Planetary Hours Today', fr: "Heures planétaires aujourd'hui", ar: 'ساعات الكواكب اليوم' },
  },
  planetOfDay: {
    path: '/planet-of-the-day',
    name: { en: 'Planet of the Day', fr: 'Planète du jour', ar: 'كوكب اليوم' },
  },
  ikhtiyarat: {
    path: '/ikhtiyarat',
    name: { en: 'Best Dates (Ikhtiyārāt)', fr: 'Meilleures dates (Ikhtiyārāt)', ar: 'أفضل التواريخ (الاختيارات)' },
  },
  manazil: {
    path: '/manazil',
    name: { en: 'Lunar Mansions (Manāzil)', fr: 'Demeures lunaires (Manāzil)', ar: 'منازل القمر' },
  },
  sadaqa: {
    path: '/sadaqa',
    name: { en: 'Sadaqa Guide', fr: 'Guide de la sadaqa', ar: 'دليل الصدقة' },
  },
  sadaqaDay: {
    path: '/sadaqa-of-the-day',
    name: { en: 'Sadaqa of the Day', fr: 'Sadaqa du jour', ar: 'صدقة اليوم' },
  },
  marriage: {
    path: '/best-day-for/marriage',
    name: { en: 'Best Day for Nikah (Marriage)', fr: 'Meilleur jour pour le nikāḥ', ar: 'أفضل يوم لعقد النكاح' },
  },
  travel: {
    path: '/best-day-for/travel',
    name: { en: 'Best Day to Travel', fr: 'Jour favorable pour voyager', ar: 'أفضل يوم للسفر' },
  },
  moving: {
    path: '/best-day-for/moving-home',
    name: { en: 'Best Day to Move Home', fr: 'Jour favorable pour déménager', ar: 'أفضل يوم للانتقال إلى بيت جديد' },
  },
  business: {
    path: '/best-day-for/business',
    name: { en: 'Best Day to Start a Business', fr: 'Jour favorable pour commencer une affaire', ar: 'أفضل يوم لبدء التجارة والعقود' },
  },
};

/** Which 3–4 tools each page points to (keyed by the page's English path). */
export const RELATED_TOOLS: Readonly<Record<string, readonly ToolKey[]>> = {
  '/name-and-mother-burj': ['compatibility', 'abjad', 'hours', 'planetOfDay'],
  '/compatibility': ['burj', 'abjad', 'marriage', 'ikhtiyarat'],
  '/abjad': ['burj', 'compatibility', 'planetOfDay', 'hours'],
  '/planetary-hours': ['planetOfDay', 'ikhtiyarat', 'manazil', 'burj'],
  '/planet-of-the-day': ['hours', 'ikhtiyarat', 'manazil', 'sadaqaDay'],
  '/ikhtiyarat': ['hours', 'planetOfDay', 'manazil', 'marriage'],
  '/best-day-for/marriage': ['compatibility', 'ikhtiyarat', 'hours', 'burj'],
  '/best-day-for/travel': ['ikhtiyarat', 'hours', 'planetOfDay', 'sadaqaDay'],
  '/best-day-for/moving-home': ['ikhtiyarat', 'hours', 'planetOfDay', 'sadaqaDay'],
  '/best-day-for/business': ['ikhtiyarat', 'hours', 'planetOfDay', 'sadaqaDay'],
  '/manazil': ['hours', 'planetOfDay', 'ikhtiyarat', 'abjad'],
  '/sadaqa': ['sadaqaDay', 'burj', 'planetOfDay', 'compatibility'],
  '/sadaqa-of-the-day': ['sadaqa', 'planetOfDay', 'burj', 'hours'],
};

export const RELATED_TOOLS_TITLE: Record<ToolsLang, string> = { en: 'Related tools', fr: 'Outils associés', ar: 'أدوات ذات صلة' };

/** URL of `enPath` for a page served in `routeLang` (English when there is no localized version). */
export function relatedToolHref(enPath: string, routeLang: ToolsLang): string {
  if (routeLang === 'ar') return enPath in AR_PATHS || isLocalizedPath(enPath) ? arAppPath(enPath) : enPath;
  return localizeHref(enPath, routeLang);
}

/** The links for a page: [href, name] pairs, in the page's language. */
export function relatedToolLinks(pagePath: string, lang: ToolsLang, routeLang: ToolsLang = lang): [string, string][] {
  return (RELATED_TOOLS[pagePath] ?? []).map((k) => [relatedToolHref(TOOLS[k].path, routeLang), TOOLS[k].name[lang]]);
}
