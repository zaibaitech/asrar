import type { Metadata } from 'next';
import { AboutView } from '@/src/components/seo/InfoPageView';
import { urduMetadata } from '@/src/lib/urMetadata';

export const metadata: Metadata = urduMetadata('/about');

export default function Page() {
  return <AboutView lang="ur" />;
}
