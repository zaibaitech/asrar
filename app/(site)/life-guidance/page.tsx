import { notFound } from 'next/navigation';
import { LIFE_GUIDANCE_PREVIEW } from '@/src/lib/lifeGuidancePreview';
import { LifeGuidancePreviewPage } from './LifeGuidancePreviewPage';

export default function Page() {
  // Hidden (404) unless the preview flag is set at build time.
  if (!LIFE_GUIDANCE_PREVIEW) notFound();
  return <LifeGuidancePreviewPage />;
}
