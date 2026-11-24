import type { Metadata } from 'next';
import { AboutView, infoPageMetadata } from '@/src/components/seo/InfoPageView';
import { ABOUT_META } from '@/src/lib/infoPageCopy';

export const metadata: Metadata = infoPageMetadata('/about', 'ar', ABOUT_META.ar);

export default function Page() {
  return <AboutView lang="ar" />;
}
