import { headers } from 'next/headers'
import './globals.css'
import RootShell from '../../src/components/layout/RootShell'
import { rootMetadata, rootViewport } from '../../src/lib/rootMetadata'
import { ROUTE_LANG_HEADER } from '../../src/lib/i18nRoutes'

export const viewport = rootViewport
export const metadata = rootMetadata

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  // /fr/* is the English route files rewritten by middleware with
  // ROUTE_LANG_HEADER=fr: only the document language changes, so the server
  // renders <html lang="fr"> for those requests. Every /fr route is already
  // dynamic (its page reads the same header). The routes that are statically
  // rendered set `dynamic = 'force-static'` (headers() is empty there), so they
  // keep rendering lang="en" at build time exactly as before.
  // (/ar and /ur have their own root layouts.)
  const lang = headers().get(ROUTE_LANG_HEADER) === 'fr' ? 'fr' : 'en'
  return (
    <RootShell
      lang={lang}
      dir="ltr"
      // Kept as a fallback for any static or cached HTML served under /fr.
      headScript={`(function(){try{var p=location.pathname;if(p==='/fr'||p.indexOf('/fr/')===0)document.documentElement.lang='fr'}catch(e){}})();`}
    >
      {children}
    </RootShell>
  )
}
