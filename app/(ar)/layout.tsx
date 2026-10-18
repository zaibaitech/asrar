import '../(site)/globals.css'
import RootShell from '../../src/components/layout/RootShell'
import { rootMetadata, rootViewport } from '../../src/lib/rootMetadata'
import { AR_PATHS } from '../../src/lib/i18nRoutes'

export const viewport = rootViewport
export const metadata = rootMetadata

/**
 * Root layout for /ar/**: the server renders lang="ar" dir="rtl".
 * The 4 dedicated Arabic landing pages (AR_PATHS) are hand-written Arabic; every
 * other /ar page is the English tool page translated on the client
 * (ArabicDomTranslator), so its first paint stays hidden until that is done.
 */
export default function ArabicRootLayout({ children }: { children: React.ReactNode }) {
  const landing = JSON.stringify(Object.values(AR_PATHS))
  return (
    <RootShell
      lang="ar"
      dir="rtl"
      headScript={`(function(){try{var L=${landing},p=location.pathname.replace(/\\/+$/,'')||'/';if(L.indexOf(p)<0)document.documentElement.setAttribute('data-ar-pending','')}catch(e){}})();`}
    >
      {children}
    </RootShell>
  )
}
