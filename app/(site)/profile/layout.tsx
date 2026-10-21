import type { Metadata } from 'next';

// Static at build time: the (site) root layout reads the /fr route header, and
// force-static keeps this route static (headers() is empty here, so lang="en").
export const dynamic = 'force-static';

export const metadata: Metadata = {
  title: 'Profile',
  robots: { index: false, follow: false },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
