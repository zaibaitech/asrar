import '../(site)/globals.css'
import RootShell from '../../src/components/layout/RootShell'
import { rootMetadata, rootViewport } from '../../src/lib/rootMetadata'

export const viewport = rootViewport
export const metadata = rootMetadata

/** Root layout for /ur/**: the server renders lang="ur" dir="rtl" (all /ur pages stay noindex via app/(ur)/ur/layout.tsx). */
export default function UrduRootLayout({ children }: { children: React.ReactNode }) {
  return (
    <RootShell lang="ur" dir="rtl">
      {children}
    </RootShell>
  )
}
