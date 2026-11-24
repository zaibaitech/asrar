import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { RelatedTools } from '@/src/components/seo/RelatedTools';
import { ElectionToolEmbed } from '@/app/(site)/best-day-for/ElectionToolEmbed';
import { PURPOSE_SLUGS, PURPOSES, type PurposeSlug } from '@/src/lib/ikhtiyarat/purposes';
import { urduMetadata } from '@/src/lib/urMetadata';
import { UR_COMMON } from '@/src/lib/i18n/urPages';
import { UR_BEST_DAY as C } from '@/src/lib/i18n/urNewPages';
import { UrduBody, UrduFaq, UrduHeader, UrduLinks, UrduSection, englishPageLink, otherUrduPages } from '../../_shared/UrduLanding';

export const dynamic = 'force-dynamic';

type Params = Promise<{ purpose: string }>;

function isPurpose(s: string): s is PurposeSlug {
  return (PURPOSE_SLUGS as string[]).includes(s);
}

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const { purpose } = await params;
  if (!isPurpose(purpose)) return {};
  return urduMetadata(`/best-day-for/${purpose}`);
}

export default async function Page({ params }: { params: Params }) {
  const { purpose } = await params;
  if (!isPurpose(purpose)) notFound();
  const copy = C.purposes[purpose];
  const others = PURPOSE_SLUGS.filter((s) => s !== purpose).map((s) => ({
    href: `/ur/best-day-for/${s}`,
    name: C.purposes[s].name.ur,
    desc: C.purposes[s].short.ur,
  }));

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-teal-50 to-slate-50 dark:from-slate-900 dark:via-slate-900 dark:to-slate-900">
      <UrduHeader h1={copy.h1.ur} lead={copy.lead.ur} />

      <div className="max-w-2xl mx-auto px-4">
        <ElectionToolEmbed electionType={PURPOSES[purpose].toolElection} />
        <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">{UR_COMMON.toolUiNote.ur}</p>
      </div>

      <RelatedTools pagePath={`/best-day-for/${purpose}`} lang="ur" className="max-w-2xl mx-auto px-4 pt-6" />

      <UrduBody>
        <UrduSection id="best-day-purpose-about" title={C.aboutTitle.ur}>
          <p>{C.about.ur}</p>
          <p className="text-sm text-slate-500 dark:text-slate-400">{UR_COMMON.disclaimer.ur}</p>
        </UrduSection>
        <UrduFaq id="best-day-purpose-faq" faqs={C.faqs} />
        <UrduLinks
          links={[
            { href: '/ur/best-day-for', name: C.h1.ur, desc: C.lead.ur },
            ...others,
            ...otherUrduPages('bestDayFor'),
            englishPageLink(`/best-day-for/${purpose}`, copy.name.en),
          ]}
        />
      </UrduBody>
    </div>
  );
}
