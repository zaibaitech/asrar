/**
 * SEO Configuration for Asrār Everyday
 * Centralized metadata and SEO settings for the application
 */

import { translations } from './translations';

type Language = 'en' | 'fr';

/**
 * Bilingual metadata for OG tags and app store descriptions
 */
export const bilingualMeta = {
  en: {
    title: 'Asrār Everyday — Islamic Spiritual Guidance',
    // Short description for HTML meta (under 160 chars)
    shortDescription: 'Your daily Islamic spiritual companion. Explore ʿIlm al-Ḥurūf, planetary hours, spiritual challenges, Prophetic Names, and more.',
    // Full description for OG and app stores
    fullDescription: 'Your daily Islamic spiritual companion rooted in Islamic esotericism. Explore ʿIlm al-Ḥurūf (letter science), planetary hours, Ramadan challenges, 201 Prophetic Names, Ṣalawāt tracking, Divine Names, and Name Destiny analysis — in English and French.',
    ogImage: '/og-image-en.png',
    locale: 'en_GB',
    // App store long description
    appStoreDescription: `Asrār Everyday — Islamic Spiritual Guidance

Your daily Islamic spiritual companion rooted in Islamic esotericism.

Features:
• ʿIlm al-Ḥurūf — Letter & Number Science (Abjad calculator)
• ʿIlm al-Nujūm — Planetary Hours & Moment Alignment
• Spiritual Challenges — Istighfār, Ṣalawāt, Divine Names, Custom Dhikr
• 201 Holy Names of Prophet Muḥammad ﷺ (Dalāʾilu l-Khayrāt)
• Ṣalawāt Hub — Ṣalāt al-Fātiḥ, al-Nāriyya, al-Mashīshiyya, Jawharatu l-Kamāl
• Name Destiny Analysis — Spiritual meaning of your name
• Istikhāra Guidance
• Verse of the Day & Divine Name for Reflection
• Bilingual — English & French

Built by Zaibaitech Ltd · Edinburgh, Scotland`,
  },
  fr: {
    title: 'Asrār Everyday — Guidance Spirituelle Islamique',
    shortDescription: 'Votre compagnon spirituel islamique quotidien. Explorez ʿIlm al-Ḥurūf, heures planétaires, défis spirituels, Noms Prophétiques.',
    fullDescription: 'Votre compagnon spirituel islamique quotidien, ancré dans l\'ésotérisme islamique. Explorez ʿIlm al-Ḥurūf, les heures planétaires, les défis du Ramadan, les 201 Noms Prophétiques, le suivi des Ṣalawāt, les Noms Divins, l\'analyse du Destin du Nom — en français et en anglais.',
    ogImage: '/og-image-fr.png',
    locale: 'fr_FR',
    appStoreDescription: `Asrār Everyday — Guidance Spirituelle Islamique

Votre compagnon spirituel islamique quotidien, ancré dans les sciences ésotériques islamiques.

Fonctionnalités :
• ʿIlm al-Ḥurūf — Science des Lettres et des Nombres (calculateur Abjad)
• ʿIlm al-Nujūm — Heures Planétaires et Alignement du Moment
• Défis Spirituels — Istighfār, Ṣalawāt, Noms Divins, Dhikr Personnalisé
• 201 Noms Saints du Prophète Muḥammad ﷺ (Dalāʾilu l-Khayrāt)
• Hub des Ṣalawāt — Ṣalāt al-Fātiḥ, al-Nāriyya, al-Mashīshiyya, Jawharatu l-Kamāl
• Analyse du Destin du Nom — Signification spirituelle de votre prénom
• Guidance Istikhāra
• Verset du Jour & Nom Divin pour la Réflexion
• Bilingue — Français & Anglais

Développé par Zaibaitech Ltd · Édimbourg, Écosse`,
  },
};

/**
 * Challenge-specific metadata for deep links
 */
export const challengeMeta = {
  'prophetic-names': {
    en: {
      title: 'Asrār — 7-Day Rizq Abundance Challenge · 201 Prophetic Names',
      description: 'Join the 7-Day Rizq Abundance Practice authorized by Cherno Moussa Yero Sy. Recite the 201 Holy Names of Prophet Muḥammad ﷺ every morning. Experience immeasurable blessings.',
    },
    fr: {
      title: 'Asrār — Défi 7 Jours d\'Abondance du Rizq · 201 Noms Prophétiques',
      description: 'Rejoignez la pratique de 7 jours pour l\'abondance du Rizq, autorisée par Cherno Moussa Yero Sy. Récitez les 201 Noms Saints du Prophète Muḥammad ﷺ chaque matin.',
    },
  },
  'salawat': {
    en: {
      title: 'Asrār — Ṣalawāt Challenge · Blessings Upon the Prophet ﷺ',
      description: 'Track your daily Ṣalawāt and join thousands sending blessings upon Prophet Muḥammad ﷺ. Ṣalāt al-Fātiḥ, al-Nāriyya, al-Mashīshiyya and more.',
    },
    fr: {
      title: 'Asrār — Défi Ṣalawāt · Bénédictions sur le Prophète ﷺ',
      description: 'Suivez vos Ṣalawāt quotidiennes et rejoignez des milliers de personnes envoyant des bénédictions au Prophète Muḥammad ﷺ.',
    },
  },
  'istighfar': {
    en: {
      title: 'Asrār — Istighfār Challenge · Seeking Forgiveness',
      description: 'Join the Istighfār challenge and experience the peace of seeking Allah\'s forgiveness. Track your daily dhikr and transform your spiritual practice.',
    },
    fr: {
      title: 'Asrār — Défi Istighfār · Demande de Pardon',
      description: 'Rejoignez le défi Istighfār et vivez la paix de demander le pardon d\'Allah. Suivez votre dhikr quotidien et transformez votre pratique spirituelle.',
    },
  },
};

/**
 * Get SEO configuration with language-specific titles
 * @param language - The current language ('en' or 'fr')
 */
export const getSeoConfig = (language: Language = 'en') => {
  const t = translations[language];
  const meta = bilingualMeta[language];
  
  return {
    // Site configuration
    siteName: 'Asrār Everyday',
    siteDescription: meta.shortDescription,
    fullDescription: meta.fullDescription,
    baseUrl: process.env.NEXT_PUBLIC_BASE_URL || 'https://www.asrar.app',
    locale: meta.locale,
    supportedLocales: ['en_GB', 'fr_FR'],

    // Title configuration
    title: meta.title,
    titleTemplate: t.seo.titleTemplate,

    // OG Image
    ogImage: meta.ogImage,

  // Keywords
  keywords: [
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
    'islamic culture',
    'traditional islamic learning',
  ],

  // Disclaimers
  disclaimers: {
    main: 'Educational and cultural exploration tool only - not for fortune-telling, divination, or religious rulings.',
    consultation:
      'Consult qualified Islamic scholars (ʿUlamāʾ) for religious guidance and fatwas.',
    accuracy:
      'Results based on classical calculations; use for educational and cultural study only.',
  },

  // Branding colors
  theme: {
    light: '#4f46e5', // indigo-600
    dark: '#312e81', // indigo-900
  },

  // Social media
  socialMedia: {
    twitterHandle: '@AsrarEveryday',
    ogImage: meta.ogImage,
    ogImageWidth: 1200,
    ogImageHeight: 630,
  },

  // Creator/Organization info
  creator: {
    name: 'Zaibaitech Ltd',
    url: 'https://www.asrar.app',
  },

  // Categories
  category: 'Education',
  classification: 'Islamic Sciences',

  // Robots configuration
  robotsConfig: {
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

  // Structured data helpers
  getSchemaOrganization() {
    return {
      '@context': 'https://schema.org',
      '@type': 'Organization',
      name: this.siteName,
      url: this.baseUrl,
      logo: `${this.baseUrl}/logo.png`,
      description: this.siteDescription,
      sameAs: [
        // Add social media URLs here
      ],
    };
  },

  getSchemaWebSite() {
    return {
      '@context': 'https://schema.org',
      '@type': 'WebSite',
      name: this.siteName,
      url: this.baseUrl,
      potentialAction: {
        '@type': 'SearchAction',
        target: {
          '@type': 'EntryPoint',
          urlTemplate: `${this.baseUrl}/search?q={search_term_string}`,
        },
        'query-input': 'required name=search_term_string',
      },
    };
  },

  getSchemaEducationalResource() {
    return {
      '@context': 'https://schema.org',
      '@type': 'EducationalResource',
      name: this.title,
      description: this.siteDescription,
      url: this.baseUrl,
      author: {
        '@type': 'Organization',
        name: this.siteName,
      },
      publisher: {
        '@type': 'Organization',
        name: this.siteName,
      },
      inLanguage: ['en', 'fr', 'ar'],
      teaches: {
        '@type': 'DefinedTerm',
        name: 'Islamic Letter Science and Number Science',
      },
    };
  },
  };
};

// Default export for English (backward compatibility)
export const seoConfig = getSeoConfig('en');

export default seoConfig;
