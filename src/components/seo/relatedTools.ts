/**
 * Data for the compact "Related tools" block shown just below a tool's results on the
 * crawlable SEO pages, to give visitors an obvious next step.
 *
 * Plain server-rendered links, styled with the same card classes the SEO
 * pages already use (rounded-xl border, bg-white/70, emerald link text).
 * Links stay in the language of the URL being served: /ar pages link to /ar
 * pages, /fr pages to /fr mirrors, falling back to English only where a page
 * has no localized version. Names reuse the tool names already translated in
 * the repo (Arabic landing links, AR_META and public/i18n/ar-ui.json); Urdu
 * names are hand-translated (docs/i18n/ur-review.md).
 */
import { arAppPath, isLocalizedPath, localizeHref, AR_PATHS, UR_PATHS } from '@/src/lib/i18nRoutes';
import type { Tool } from '@/src/lib/analytics';

export type ToolsLang = 'en' | 'fr' | 'ar' | 'ur';

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
    name: { en: "Your Burj from Your Name & Mother's Name", fr: 'Votre burj par votre nom et celui de votre mère', ar: 'برجك من اسمك واسم أمك', ur: 'اپنے نام اور والدہ کے نام سے برج' },
  },
  compatibility: {
    path: '/compatibility',
    name: { en: 'Name Compatibility for Marriage', fr: 'Compatibilité des prénoms pour le mariage', ar: 'توافق الأسماء للزواج', ur: 'ناموں کی ابجد کا موازنہ (ثقافتی غور و فکر)' },
  },
  abjad: {
    path: '/abjad',
    name: { en: 'Abjad Calculator', fr: 'Calculateur Abjad', ar: 'حساب الجمل', ur: 'ابجد کیلکولیٹر' },
  },
  hours: {
    path: '/planetary-hours',
    name: { en: 'Planetary Hours Today', fr: "Heures planétaires aujourd'hui", ar: 'ساعات الكواكب اليوم', ur: 'آج کی ساعاتِ کواکب' },
  },
  planetOfDay: {
    path: '/planet-of-the-day',
    name: { en: 'Planet of the Day', fr: 'Planète du jour', ar: 'كوكب اليوم', ur: 'آج کا سیارہ' },
  },
  ikhtiyarat: {
    path: '/ikhtiyarat',
    name: { en: 'Best Dates (Ikhtiyārāt)', fr: 'Meilleures dates (Ikhtiyārāt)', ar: 'أفضل التواريخ (الاختيارات)', ur: 'مناسب تاریخوں کا انتخاب (اختیارات)' },
  },
  manazil: {
    path: '/manazil',
    name: { en: 'Lunar Mansions (Manāzil)', fr: 'Demeures lunaires (Manāzil)', ar: 'منازل القمر', ur: 'منازلِ قمر' },
  },
  sadaqa: {
    path: '/sadaqa',
    name: { en: 'Sadaqa Guide', fr: 'Guide de la sadaqa', ar: 'دليل الصدقة', ur: 'صدقے کی رہنمائی' },
  },
  sadaqaDay: {
    path: '/sadaqa-of-the-day',
    name: { en: 'Sadaqa of the Day', fr: 'Sadaqa du jour', ar: 'صدقة اليوم', ur: 'آج کا صدقہ' },
  },
  marriage: {
    path: '/best-day-for/marriage',
    name: { en: 'Best Day for Nikah (Marriage)', fr: 'Meilleur jour pour le nikāḥ', ar: 'أفضل يوم لعقد النكاح', ur: 'نکاح کے لیے روایتی طور پر مناسب دن' },
  },
  travel: {
    path: '/best-day-for/travel',
    name: { en: 'Best Day to Travel', fr: 'Jour favorable pour voyager', ar: 'أفضل يوم للسفر', ur: 'سفر کے لیے روایتی طور پر مناسب دن' },
  },
  moving: {
    path: '/best-day-for/moving-home',
    name: { en: 'Best Day to Move Home', fr: 'Jour favorable pour déménager', ar: 'أفضل يوم للانتقال إلى بيت جديد', ur: 'نئے گھر میں منتقل ہونے کا روایتی طور پر مناسب دن' },
  },
  business: {
    path: '/best-day-for/business',
    name: { en: 'Best Day to Start a Business', fr: 'Jour favorable pour commencer une affaire', ar: 'أفضل يوم لبدء التجارة والعقود', ur: 'کاروبار شروع کرنے کا روایتی طور پر مناسب دن' },
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

export const RELATED_TOOLS_TITLE: Record<ToolsLang, string> = { en: 'Related tools', fr: 'Outils associés', ar: 'أدوات ذات صلة', ur: 'متعلقہ ٹولز' };

/** URL of `enPath` for a page served in `routeLang` (English when there is no localized version). */
export function relatedToolHref(enPath: string, routeLang: ToolsLang): string {
  if (routeLang === 'ar') return enPath in AR_PATHS || isLocalizedPath(enPath) ? arAppPath(enPath) : enPath;
  // /ur pages link to the other /ur pages (English where there is no Urdu page yet).
  if (routeLang === 'ur') return UR_PATHS[enPath] ?? enPath;
  return localizeHref(enPath, routeLang);
}

/** The links for a page: [href, name] pairs, in the page's language. */
export function relatedToolLinks(pagePath: string, lang: ToolsLang, routeLang: ToolsLang = lang): [string, string][] {
  return (RELATED_TOOLS[pagePath] ?? []).map((k) => [relatedToolHref(TOOLS[k].path, routeLang), TOOLS[k].name[lang]]);
}

/** GA4 tool id of each link target (for related_tool_click). */
export const TOOL_EVENT_ID: Record<ToolKey, Tool> = {
  burj: 'burj',
  compatibility: 'compatibility',
  abjad: 'abjad',
  hours: 'planetary_hours',
  planetOfDay: 'planet_of_the_day',
  ikhtiyarat: 'ikhtiyarat',
  manazil: 'manazil',
  sadaqa: 'sadaqa',
  sadaqaDay: 'sadaqa',
  marriage: 'best_day_for',
  travel: 'best_day_for',
  moving: 'best_day_for',
  business: 'best_day_for',
};

/** GA4 tool id of the page a block is on (keyed by its English path). */
export function pageEventId(pagePath: string): Tool | undefined {
  if (pagePath.startsWith('/best-day-for')) return 'best_day_for';
  const key = (Object.keys(TOOLS) as ToolKey[]).find((k) => TOOLS[k].path === pagePath);
  return key ? TOOL_EVENT_ID[key] : undefined;
}

/** The links for a page with their GA4 target id: [href, name, toolId]. */
export function relatedToolLinksWithIds(pagePath: string, lang: ToolsLang, routeLang: ToolsLang = lang): [string, string, Tool][] {
  return (RELATED_TOOLS[pagePath] ?? []).map((k) => [relatedToolHref(TOOLS[k].path, routeLang), TOOLS[k].name[lang], TOOL_EVENT_ID[k]]);
}
