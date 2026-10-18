import type { Metadata } from 'next';
import { RelatedTools } from '@/src/components/seo/RelatedTools';
import { AbjadCalculator } from '@/app/(site)/abjad/AbjadCalculator';
import { urduMetadata } from '@/src/lib/urMetadata';
import { UR_ABJAD as C, UR_COMMON } from '@/src/lib/i18n/urPages';
import { UrduBody, UrduFaq, UrduHeader, UrduLinks, UrduSection, englishPageLink, otherUrduPages, UrduSpellingNote } from '../_shared/UrduLanding';

const EN_PATH = '/abjad';

export const metadata: Metadata = urduMetadata(EN_PATH);

export default function Page() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
      <UrduHeader h1={C.h1.ur} lead={C.lead.ur} />

      {/* The same calculator as /abjad, unchanged. */}
      <div className="max-w-3xl mx-auto px-4">
        <AbjadCalculator />
      </div>

      <RelatedTools pagePath={EN_PATH} lang="ur" className="max-w-2xl mx-auto px-4 pt-6" />

      <UrduBody>
        <UrduSection id="abjad-what" title={C.whatTitle.ur}>
          <p>{C.what.ur}</p>
        </UrduSection>
        <UrduSection id="abjad-orders" title={C.ordersTitle.ur}>
          <p>{C.orders.ur}</p>
        </UrduSection>
        <UrduSection id="abjad-how" title={C.howTitle.ur}>
          <p>{C.how.ur}</p>
          <p>{C.example.ur}</p>
          <UrduSpellingNote />
          <p className="text-sm text-slate-500 dark:text-slate-400">{UR_COMMON.disclaimer.ur}</p>
        </UrduSection>
        <UrduFaq id="abjad-faq" faqs={C.faqs} />
        <UrduLinks links={[...otherUrduPages('abjad'), englishPageLink(EN_PATH, 'Abjad Calculator')]} />
      </UrduBody>
    </div>
  );
}
