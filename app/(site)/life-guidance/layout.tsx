import type { Metadata } from 'next';

// Preview only: never indexed, not in the sitemap. Static, like the other noindex pages.
export const dynamic = 'force-static';

export const metadata: Metadata = {
  title: 'Life Guidance (preview)',
  robots: { index: false, follow: false },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
