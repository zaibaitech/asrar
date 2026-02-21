import Script from 'next/script'
import './globals.css'
import type { Metadata, Viewport } from 'next'
import { AbjadProvider } from '../src/contexts/AbjadContext'
import { LanguageProvider } from '../src/contexts/LanguageContext'
import { AuthProvider } from '../src/contexts/AuthContext'
import { RamadanChallengesProvider } from '../src/features/ramadanChallenges'
import { getSeoConfig, bilingualMeta } from '../src/lib/seoConfig'

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
  alternates: {
    canonical: baseUrl,
    languages: {
      'en-GB': baseUrl,
      'fr-FR': `${baseUrl}?lang=fr`,
    },
  },
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
        url: '/og-image-en.png',
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
    images: ['/og-image-en.png'],
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
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
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