import Script from 'next/script'
import './globals.css'
import type { Metadata, Viewport } from 'next'
import { AbjadProvider } from '../src/contexts/AbjadContext'
import { LanguageProvider } from '../src/contexts/LanguageContext'
import { AuthProvider } from '../src/contexts/AuthContext'
import { RamadanChallengesProvider } from '../src/features/ramadanChallenges'
import ClarityScript from '../src/components/analytics/ClarityScript'
import { getSeoConfig, bilingualMeta } from '../src/lib/seoConfig'
import { AR_PATHS } from '../src/lib/i18nRoutes'
import localFont from 'next/font/local'

// Central Arabic UI font: Noto Naskh Arabic (Arabic subset, variable weight),
// self-hosted and restricted by unicode-range to Arabic glyphs so Latin text
// keeps the system sans. Not preloaded, so EN/FR pages never download it.
// Applied via html[lang="ar"] in globals.css.
const arabicUi = localFont({
  src: '../src/fonts/NotoNaskhArabic-arabic-var.woff2',
  weight: '400 700',
  display: 'swap',
  preload: false,
  variable: '--font-arabic-ui',
  adjustFontFallback: false,
  declarations: [{ prop: 'unicode-range', value: 'U+0600-06FF, U+0750-077F, U+0870-0891, U+0897-08E1, U+08E3-08FF, U+200C-200E, U+2010-2011, U+204F, U+2E41, U+FB50-FDFF, U+FE70-FE74, U+FE76-FEFC, U+102E0-102FB, U+10E60-10E7E, U+10EC2-10EC7, U+10EC9-10EEE, U+10EF0-10EFF, U+1EE00-1EE03, U+1EE05-1EE1F, U+1EE21-1EE22, U+1EE24, U+1EE27, U+1EE29-1EE32, U+1EE34-1EE37, U+1EE39, U+1EE3B, U+1EE42, U+1EE47, U+1EE49, U+1EE4B, U+1EE4D-1EE4F, U+1EE51-1EE52, U+1EE54, U+1EE57, U+1EE59, U+1EE5B, U+1EE5D, U+1EE5F, U+1EE61-1EE62, U+1EE64, U+1EE67-1EE6A, U+1EE6C-1EE72, U+1EE74-1EE77, U+1EE79-1EE7C, U+1EE7E, U+1EE80-1EE89, U+1EE8B-1EE9B, U+1EEA1-1EEA3, U+1EEA5-1EEA9, U+1EEAB-1EEBB, U+1EEF0-1EEF1' }],
})


const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://www.asrar.app'

// Get SEO config for default language (English)
const seoConfig = getSeoConfig('en');

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#4f46e5' },
    { media: '(prefers-color-scheme: dark)', color: '#312e81' },
  ],
}

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: bilingualMeta.en.title,
    template: '%s | Asrār',
  },
  description: bilingualMeta.en.shortDescription,
  manifest: '/manifest.json',
  appleWebApp: {
    capable: true,
    statusBarStyle: 'black-translucent',
    title: 'Asrār',
    startupImage: [
      { url: '/icons/icon-512x512.png' },
    ],
  },
  keywords: [
    'ilm al nujum',
    'planetary hours',
    'islamic astrology',
    'divine timing',
    'abjad',
    'ilm al huruf',
    'ilm al adad',
    'islamic numerology',
    'arabic letters',
    'huruf',
    'adad',
    'islamic sciences',
    'sufism',
    'tijani',
    'west african islam',
    'islamic esotericism',
    'gematria',
    'abjad calculator',
    'jafr',
    'letter science',
    'number science',
    'prophetic names',
    '201 names',
    'dalail khayrat',
    'salawat',
    'rizq abundance',
    'spiritual guidance',
    'dhikr tracker',
    'istighfar',
    'name destiny',
    'istikhara',
  ],
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      'max-snippet': -1,
      'max-image-preview': 'large',
      'max-video-preview': -1,
    },
  },
  // No root canonical/hreflang: each public page sets its own self-canonical
  // and, for pages with a /fr mirror, its own en/fr/x-default hreflang.
  openGraph: {
    type: 'website',
    locale: 'en_GB',
    alternateLocale: ['fr_FR'],
    url: baseUrl,
    siteName: 'Asrār Everyday',
    title: bilingualMeta.en.title,
    description: bilingualMeta.en.fullDescription,
    images: [
      {
        url: `${baseUrl}/opengraph-image`,
        width: 1200,
        height: 630,
        alt: 'Asrār — Planetary Hours, Abjad Calculator & Islamic Sacred Sciences',
        type: 'image/png',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: bilingualMeta.en.title,
    description: bilingualMeta.en.fullDescription,
    images: [`${baseUrl}/opengraph-image`],
    creator: '@AsrarEveryday',
  },
  authors: [
    {
      name: 'Zaibaitech Ltd',
      url: 'https://www.asrar.app',
    },
  ],
  creator: 'Zaibaitech Ltd',
  publisher: 'Zaibaitech Ltd',
  category: 'Education',
  classification: 'Islamic Sciences',
  verification: {
    google: 'cKJUPwjQfpSLgwfXAEShaT8kpfvMx1lQ06UNBPXCYgM',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" dir="ltr" className={arabicUi.variable} suppressHydrationWarning>
      <head>
        {/*
          Document language/direction from the URL, applied before first paint.
          Done here instead of reading headers() so the 15 static routes
          (/names/*, /99-names-of-allah, /ar landing pages…) stay static.
          /ar app mirror -> ar + rtl, /fr/* -> fr; everything else keeps en/ltr.
          The 4 dedicated Arabic landing pages (app/ar/**) set their own
          lang/dir per container and are left exactly as they were.
        */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var L=${JSON.stringify(Object.values(AR_PATHS))},p=location.pathname.replace(/\\/+$/,'')||'/',d=document.documentElement;if((p==='/ar'||p.indexOf('/ar/')===0)&&L.indexOf(p)<0){d.lang='ar';d.dir='rtl'}else if(p==='/fr'||p.indexOf('/fr/')===0){d.lang='fr'}}catch(e){}})();`,
          }}
        />
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