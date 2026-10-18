import Script from 'next/script'
import { AbjadProvider } from '../../contexts/AbjadContext'
import { LanguageProvider } from '../../contexts/LanguageContext'
import { AuthProvider } from '../../contexts/AuthContext'
import { RamadanChallengesProvider } from '../../features/ramadanChallenges'
import ClarityScript from '../analytics/ClarityScript'
import AnalyticsClickTracker from '../analytics/AnalyticsClickTracker'
import { arabicUi } from '../../lib/rootFonts'

/**
 * The one <html>/<head>/<body> shell shared by the three root layouts
 * (app/(site), app/(ar), app/(ur)). Each root layout only decides the
 * document language/direction that the server renders; everything else is
 * identical so the pages look and behave the same.
 */
export default function RootShell({
  lang,
  dir,
  headScript,
  children,
}: {
  lang: 'en' | 'ar' | 'ur'
  dir: 'ltr' | 'rtl'
  /** Optional inline script run before first paint (URL-dependent adjustments). */
  headScript?: string
  children: React.ReactNode
}) {
  return (
    <html lang={lang} dir={dir} className={arabicUi.variable} suppressHydrationWarning>
      <head>
        {headScript ? <script dangerouslySetInnerHTML={{ __html: headScript }} /> : null}
        <link rel="apple-touch-icon" sizes="180x180" href="/icons/icon-192x192.png" />
        <link rel="apple-touch-icon" sizes="152x152" href="/icons/icon-152x152.png" />
        <link rel="apple-touch-icon" sizes="144x144" href="/icons/icon-144x144.png" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="apple-mobile-web-app-title" content="Asrār" />
      </head>
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-VTWVCR2EJN"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-VTWVCR2EJN');
        `}
      </Script>
      <ClarityScript />
      <AnalyticsClickTracker />
      <body className="bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100">
        <AuthProvider>
          <LanguageProvider>
            <AbjadProvider>
              <RamadanChallengesProvider>
                {children}
              </RamadanChallengesProvider>
            </AbjadProvider>
          </LanguageProvider>
        </AuthProvider>
      </body>
    </html>
  )
}
