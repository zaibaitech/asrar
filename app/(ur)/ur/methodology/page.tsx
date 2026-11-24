import type { Metadata } from 'next';
import { MethodologyView } from '@/src/components/seo/InfoPageView';
import { urduMetadata } from '@/src/lib/urMetadata';

export const metadata: Metadata = urduMetadata('/methodology');

export default function Page() {
  return <MethodologyView lang="ur" />;
}
