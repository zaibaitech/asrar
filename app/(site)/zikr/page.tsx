import type { Metadata } from 'next';
import { cookies } from 'next/headers';
import { Suspense } from 'react';
import { ZikrPage } from './ZikrPage';
import { challengeMeta, getChallengeOGMeta } from '@/src/lib/seoConfig';
import { SITE_URL, absoluteUrl } from '@/src/lib/siteRoutes';
import { FaqSection, JsonLd, RelatedLinks, faqJsonLd } from '@/src/components/seo/SeoSections';
import { ZIKR_FAQS, ZIKR_KINDS, ZIKR_META, ZIKR_PORTAL_COPY, ZIKR_RELATED, type ZikrLang } from '@/src/lib/zikrPortal';

const baseUrl = SITE_URL;

/**
 * Zikr Portal (/zikr)
 * ===================
 * Year-round zikr hub: a server-rendered intro and zikr directory around the existing
 * tracker (ZikrPage), then an FAQ and related tools. Formerly /ramadan, which now
 * 301-redirects here (next.config.js), query string included.
 */

async function resolveLang(searchParams: Promise<{ lang?: string }>): Promise<ZikrLang> {
  const params = await searchParams;
  if (params?.lang === 'fr') return 'fr';
  if (params?.lang === 'en') return 'en';
  const cookieStore = await cookies();
  return cookieStore.get('asrar_lang')?.value === 'fr' ? 'fr' : 'en';
}

export async function generateMetadata({
  searchParams,
}: {
  searchParams: Promise<{ lang?: string; challenge?: string }>;
}): Promise<Metadata> {
  const params = await searchParams;
  const lang = await resolveLang(searchParams);

  // The zikr portal is available year-round, so the page meta is too.
  const canonical = absoluteUrl('/zikr');
  const currentMeta = ZIKR_META[lang];

  // Check for challenge-specific deep-link metadata
  const challenge = params?.challenge as keyof typeof challengeMeta | undefined;
  if (challenge && challengeMeta[challenge]) {
    const challengeMetadata = getChallengeOGMeta(challenge, lang, baseUrl);
    if (challengeMetadata) {
      return { ...challengeMetadata, alternates: { canonical, languages: { 'x-default': canonical } } };
    }
  }

  // Default page metadata with absolute URL
  const defaultImageUrl = `${baseUrl}/opengraph-image`;
  
  return {
    title: currentMeta.title,
    description: currentMeta.description,
    alternates: {
      canonical,
      languages: { 'x-default': canonical },
    },
    openGraph: {
      type: 'website',
      locale: lang === 'fr' ? 'fr_FR' : 'en_GB',
      url: `${baseUrl}/zikr${lang === 'fr' ? '?lang=fr' : ''}`,
      siteName: 'Asrār Everyday',
      title: currentMeta.title,
      description: currentMeta.description,
      images: [
        {
          url: defaultImageUrl,
          width: 1200,
          height: 630,
          alt: currentMeta.title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: currentMeta.title,
      description: currentMeta.description,
      images: [defaultImageUrl],
    },
  };
}

// Loading fallback for Suspense — matches real page layout to prevent flash
function ZikrLoading() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-yellow-50 to-orange-50 dark:from-slate-900 dark:via-slate-900 dark:to-slate-800">
      <div className="sticky top-0 z-50 bg-gradient-to-r from-amber-600 to-orange-500 px-4 py-3">
        <div className="flex items-center justify-between max-w-2xl mx-auto">
          <div className="w-8 h-8 rounded-lg bg-white/20 animate-pulse" />
          <div className="w-40 h-5 rounded bg-white/20 animate-pulse" />
          <div className="w-8 h-8 rounded-lg bg-white/20 animate-pulse" />
        </div>
      </div>
      <div className="max-w-2xl mx-auto px-4 pt-5">
        <div className="h-2 rounded-full bg-amber-200/50 dark:bg-amber-800/30 mb-6" />
        {[1, 2].map(i => (
          <div key={i} className="mb-4 rounded-xl bg-white/60 dark:bg-slate-800/40 border border-amber-200/40 dark:border-amber-700/20 p-4 animate-pulse">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-amber-200/60 dark:bg-amber-700/30" />
              <div className="flex-1 space-y-2">
                <div className="h-4 w-32 rounded bg-amber-200/60 dark:bg-amber-700/30" />
                <div className="h-3 w-48 rounded bg-amber-100/60 dark:bg-amber-800/20" />
              </div>
              <div className="w-16 h-10 rounded-lg bg-amber-200/60 dark:bg-amber-700/30" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

const CARD = 'rounded-xl border border-slate-200 dark:border-slate-700 bg-white/70 dark:bg-slate-800/40';

export default async function Page({ searchParams }: { searchParams: Promise<{ lang?: string }> }) {
  const lang = await resolveLang(searchParams);
  const c = ZIKR_PORTAL_COPY[lang];
  const faqs = ZIKR_FAQS[lang];

  return (
    <div className="bg-gradient-to-br from-amber-50 via-yellow-50 to-orange-50 dark:from-slate-900 dark:via-slate-900 dark:to-slate-800">
      <JsonLd data={faqJsonLd(faqs)} />

      <header className="max-w-2xl mx-auto px-4 pt-6 space-y-3">
        <h1 className="text-2xl font-bold text-slate-900 dark:text-slate-100">{c.h1}</h1>
        <p className="text-slate-700 dark:text-slate-300 leading-relaxed">{c.intro}</p>
      </header>

      <Suspense fallback={<ZikrLoading />}>
        <ZikrPage />
      </Suspense>

      <main className="max-w-2xl mx-auto px-4 pb-12 space-y-8">
        <section className="space-y-3" aria-labelledby="zikr-choose-heading">
          <h2 id="zikr-choose-heading" className="text-xl font-semibold text-slate-900 dark:text-slate-100">{c.chooseTitle}</h2>
          <p className="text-slate-700 dark:text-slate-300 leading-relaxed">{c.chooseIntro}</p>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {ZIKR_KINDS.map((k) => (
              <li key={k.slug} className={`${CARD} p-4 space-y-1`}>
                <h3 className="font-semibold text-slate-900 dark:text-slate-100">{k.name[lang]}</h3>
                <p className="text-sm text-slate-600 dark:text-slate-400">{k.blurb[lang]}</p>
                <a
                  href={`/zikr?challenge=${k.slug}${lang === 'fr' ? '&lang=fr' : ''}`}
                  className="inline-flex items-center min-h-[44px] text-sm font-semibold text-emerald-700 dark:text-emerald-300 hover:underline"
                >
                  {c.open}
                </a>
              </li>
            ))}
          </ul>
        </section>

        <section className="space-y-3" aria-labelledby="zikr-how-heading">
          <h2 id="zikr-how-heading" className="text-xl font-semibold text-slate-900 dark:text-slate-100">{c.howTitle}</h2>
          <ol className="list-decimal ps-5 space-y-1 text-slate-700 dark:text-slate-300 leading-relaxed">
            {c.how.map((step) => (
              <li key={step}>{step}</li>
            ))}
          </ol>
          <p className="text-sm text-slate-600 dark:text-slate-400">{c.privacyNote}</p>
        </section>

        <FaqSection id="zikr-faq-heading" title={c.faqTitle} faqs={faqs} />
        <RelatedLinks title={c.relatedTitle} links={ZIKR_RELATED[lang]} routeLang={lang} />
      </main>
    </div>
  );
}
