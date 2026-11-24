import type { Metadata } from 'next';
import { MethodologyView, infoPageMetadata } from '@/src/components/seo/InfoPageView';
import { METHODOLOGY_META } from '@/src/lib/infoPageCopy';

export const metadata: Metadata = infoPageMetadata('/methodology', 'ar', METHODOLOGY_META.ar);

export default function Page() {
  return <MethodologyView lang="ar" />;
}
