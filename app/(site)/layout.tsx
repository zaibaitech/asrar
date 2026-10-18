import './globals.css'
import RootShell from '../../src/components/layout/RootShell'
import { rootMetadata, rootViewport } from '../../src/lib/rootMetadata'

export const viewport = rootViewport
export const metadata = rootMetadata

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <RootShell
      lang="en"
      dir="ltr"
      // /fr/* is the English route files rewritten by middleware: only the
      // document language changes. (/ar and /ur have their own root layouts.)
      headScript={`(function(){try{var p=location.pathname;if(p==='/fr'||p.indexOf('/fr/')===0)document.documentElement.lang='fr'}catch(e){}})();`}
    >
      {children}
    </RootShell>
  )
}
