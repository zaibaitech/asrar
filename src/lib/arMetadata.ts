import type { Metadata } from 'next';
import { headers } from 'next/headers';
import { SITE_URL } from './siteRoutes';
import { ROUTE_LANG_HEADER, isIndexableArAppPath, localeAlternates } from './i18nRoutes';
import { ogImageUrl, ogKeyForPath, OG_SIZE } from './og/urls';

/**
 * Arabic metadata for the indexable /ar app mirrors (LOCALIZED_PATHS minus the
 * 4 dedicated landing pages). Reviewed copy, Oct 2026.
 */
export const AR_META: Readonly<Record<string, { title: string; description: string }>> = {
  '/': {
    title: 'أسرار — علم الحروف والأبجد والمنازل والساعات الكوكبية',
    description: 'أدوات تأمّلية من التراث الإسلامي: حساب الأبجد، والساعات الكوكبية، ومنازل القمر، والاختيارات، والصدقة، والذكر. للتعلّم والتأمّل، لا للتنبّؤ.',
  },
  '/ikhtiyarat': {
    title: 'الاختيارات: اختر تاريخًا مباركًا',
    description: 'ابحث عن أوقات مناسبة للنكاح والسفر والانتقال والتجارة بحسب علم الاختيارات التقليدي: صاحب اليوم، والساعة الكوكبية، ومنزلة القمر. للتأمّل، مع الاستخارة والتوكّل على الله.',
  },
  '/planet-of-the-day': {
    title: 'كوكب اليوم: صاحب اليوم وساعاته',
    description: 'تعرّف إلى صاحب اليوم في التراث، وما يناسبه من أعمال وأذكار وصدقة، مع ساعاته الكوكبية بحسب موقعك.',
  },
  '/manazil': {
    title: 'منازل القمر — المنازل الثماني والعشرون',
    description: 'دليل إلى منازل القمر الثماني والعشرين في علم الأنواء والنجوم الكلاسيكي: أسماؤها ومعانيها، والمنزلة الحالية للقمر، وموضوعاتها التقليدية للتأمّل.',
  },
  '/sadaqa': {
    title: 'دليل الصدقة: بحسب اليوم والشهر الهجري والبرج',
    description: 'اقتراحات تقليدية للصدقة بحسب يوم الأسبوع وشهر الميلاد الهجري والبرج. الصدقة مقبولة في كل وقت، وهذه الأداة للتأمّل والتذكير.',
  },
  '/compatibility': {
    title: 'توافق الأسماء للزواج — حاسبة صلة الأرواح بالأبجد',
    description: 'قارن بين اسمين بطريقة «صلة الأرواح» التقليدية في علم الحروف، واقرأ النتيجة للزواج أو الصداقة أو العائلة أو العمل. للتأمّل لا للحكم؛ والاختيار بالدين والخُلق والاستخارة.',
  },
  '/best-day-for': {
    title: 'أفضل يوم لـ… النكاح والسفر والانتقال والتجارة',
    description: 'أدلّة تقليدية لاختيار الأيام المناسبة للنكاح والسفر والانتقال إلى بيت جديد والتجارة، مع التواريخ القادمة بحسب علم الاختيارات.',
  },
  '/best-day-for/marriage': {
    title: 'أفضل يوم للنكاح بحسب الاختيارات',
    description: 'التواريخ القادمة التي يراها علم الاختيارات التقليدي مناسبة لعقد النكاح، مع أسبابها. للتأمّل مع الاستخارة ومشورة الأهل.',
  },
  '/best-day-for/travel': {
    title: 'أفضل يوم للسفر بحسب الاختيارات',
    description: 'التواريخ القادمة التي يراها علم الاختيارات التقليدي مناسبة للسفر، مع صاحب اليوم ومنزلة القمر. للتأمّل والتوكّل على الله.',
  },
  '/best-day-for/moving-home': {
    title: 'أفضل يوم للانتقال إلى بيت جديد',
    description: 'التواريخ القادمة التي يراها علم الاختيارات التقليدي مناسبة للانتقال إلى بيت جديد، مع أسبابها وأذكار البركة.',
  },
  '/best-day-for/business': {
    title: 'أفضل يوم لبدء التجارة والعقود',
    description: 'التواريخ القادمة التي يراها علم الاختيارات التقليدي مناسبة لبدء مشروع أو توقيع عقد، مع صاحب اليوم والساعة الكوكبية.',
  },
};

/**
 * When the request is an indexable /ar mirror of `path`, the full Arabic metadata
 * (title, description, self-canonical, hreflang, OG/Twitter); otherwise null so
 * the page keeps its EN/FR metadata unchanged.
 */
export async function arabicMetadata(path: string): Promise<Metadata | null> {
  const h = await headers();
  if (h.get(ROUTE_LANG_HEADER) !== 'ar' || !isIndexableArAppPath(path)) return null;
  const m = AR_META[path];
  if (!m) return null;
  const alternates = localeAlternates(path, 'ar');
  const ogKey = ogKeyForPath(path);
  const imageUrl = ogKey ? ogImageUrl(ogKey, 'en') : `${SITE_URL}/opengraph-image`;
  const title = path === '/' ? m.title : `${m.title} | أسرار`;
  return {
    title: { absolute: title },
    description: m.description,
    alternates,
    openGraph: {
      type: 'website',
      url: alternates.canonical,
      siteName: 'أسرار',
      locale: 'ar_AR',
      alternateLocale: ['en_GB', 'fr_FR'],
      title,
      description: m.description,
      images: [{ url: imageUrl, ...OG_SIZE, alt: m.title }],
    },
    twitter: { card: 'summary_large_image', title, description: m.description, images: [imageUrl] },
  };
}
