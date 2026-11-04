import type { Metadata } from 'next';
import { en } from '@/src/lib/i18n/lifeGuidance/en';

// Preview only: never indexed, not in the sitemap. Static, like the other noindex pages.
export const dynamic = 'force-static';

export const metadata: Metadata = {
  title: en.preview.pageTitle,
  robots: { index: false, follow: false },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
