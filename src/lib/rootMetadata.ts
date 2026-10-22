import type { Metadata, Viewport } from 'next'
import { getSeoConfig, bilingualMeta } from './seoConfig'

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://www.asrar.app'

// Get SEO config for default language (English)
const seoConfig = getSeoConfig('en');

export const rootViewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#4f46e5' },
    { media: '(prefers-color-scheme: dark)', color: '#312e81' },
  ],
}

export const rootMetadata: Metadata = {
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
        url: `${baseUrl}/opengraph-image?v=2`,
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
    images: [`${baseUrl}/opengraph-image?v=2`],
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
