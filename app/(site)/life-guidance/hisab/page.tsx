import { notFound } from 'next/navigation';
import { LIFE_GUIDANCE_PREVIEW } from '@/src/lib/lifeGuidancePreview';
import { HisabPreviewPage } from './HisabPreviewPage';

export default function Page() {
  // Hidden (404) unless the preview flag is set at build time. noindex via ../layout.tsx.
  if (!LIFE_GUIDANCE_PREVIEW) notFound();
  return <HisabPreviewPage />;
}
