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
    title: 'Asrār Everyday — Unlock Divine Timing & Sacred Sciences ✨',
    // Short description for HTML meta (under 160 chars)
    shortDescription: 'Discover ʿIlm al-Nujūm planetary hours, Abjad numerology, 201 Prophetic Names & spiritual challenges. Your Islamic esoteric companion.',
    // Full description for OG and app stores
    fullDescription: 'Align your actions with cosmic rhythms! ʿIlm al-Nujūm reveals the optimal planetary hour for every intention. Plus: Abjad calculator, 201 Prophetic Names for Rizq, Ṣalawāt tracking, Divine Name resonance & Name Destiny analysis. Ancient wisdom, modern interface.',
    ogImage: '/og-image-en.png',
    locale: 'en_GB',
    // App store long description
    appStoreDescription: `Asrār Everyday — Unlock Divine Timing & Sacred Sciences ✨

Your gateway to Islamic esoteric sciences — ancient wisdom in a modern interface.

🌙 ʿIlm al-Nujūm — Planetary Hours
Know the perfect moment for every intention. Real-time planetary hour guidance for love, wealth, protection, travel, and spiritual work.

🔢 ʿIlm al-Ḥurūf — Letter & Number Science
Calculate Abjad values, discover name compatibility, and unlock the secrets hidden in Arabic letters.

📿 Spiritual Challenges
Track Istighfār, Ṣalawāt, Divine Names & custom dhikr with beautiful progress tracking.

🌟 201 Prophetic Names (Dalāʾilu l-Khayrāt)
The sacred practice for Rizq abundance, authorized by the masters.

💫 Ṣalawāt Hub
Ṣalāt al-Fātiḥ, al-Nāriyya, al-Mashīshiyya, Jawharatu l-Kamāl — all in one place.

🎯 Name Destiny Analysis
Discover the spiritual blueprint encoded in your name.

🤲 Istikhāra Guidance
Divine consultation made simple.

Available in English & French.

Built by Zaibaitech Ltd · Edinburgh, Scotland`,
  },
  fr: {
    title: 'Asrār Everyday — Sciences Sacrées & Timing Divin ✨',
    shortDescription: 'Découvrez ʿIlm al-Nujūm (heures planétaires), numérologie Abjad, 201 Noms Prophétiques & défis spirituels. Sagesse ésotérique.',
    fullDescription: 'Alignez vos actions avec les rythmes cosmiques ! ʿIlm al-Nujūm révèle l\'heure planétaire optimale pour chaque intention. Plus : calculateur Abjad, 201 Noms Prophétiques pour le Rizq, suivi des Ṣalawāt, résonance des Noms Divins & analyse du Destin. Sagesse ancienne, interface moderne.',
    ogImage: '/og-image-fr.png',
    locale: 'fr_FR',
    appStoreDescription: `Asrār Everyday — Sciences Sacrées & Timing Divin ✨

Votre portail vers les sciences ésotériques islamiques — sagesse ancienne, interface moderne.

🌙 ʿIlm al-Nujūm — Heures Planétaires
Connaissez le moment parfait pour chaque intention. Guidance en temps réel pour l'amour, la richesse, la protection, les voyages et le travail spirituel.

🔢 ʿIlm al-Ḥurūf — Science des Lettres et des Nombres
Calculez les valeurs Abjad, découvrez la compatibilité des noms et dévoilez les secrets cachés dans les lettres arabes.

📿 Défis Spirituels
Suivez Istighfār, Ṣalawāt, Noms Divins & dhikr personnalisé avec un suivi visuel élégant.

🌟 201 Noms Prophétiques (Dalāʾilu l-Khayrāt)
La pratique sacrée pour l'abondance du Rizq, autorisée par les maîtres.

💫 Hub des Ṣalawāt
Ṣalāt al-Fātiḥ, al-Nāriyya, al-Mashīshiyya, Jawharatu l-Kamāl — tout en un seul endroit.

🎯 Analyse du Destin du Nom
Découvrez le plan spirituel encodé dans votre prénom.

🤲 Guidance Istikhāra
La consultation divine simplifiée.

Disponible en français et en anglais.

Développé par Zaibaitech Ltd · Édimbourg, Écosse`,
  },
};

/**
 * Challenge-specific metadata for deep links
 * Each challenge has bilingual metadata with OG images
 */
export const challengeMeta = {
  'prophetic-names': {
    en: {
      title: '201 Prophetic Names Challenge — Asrār Ramadan',
      description: 'Join me in reciting the 201 Holy Names of Prophet Muḥammad ﷺ this Ramadan. Experience immeasurable blessings and Rizq abundance.',
      image: '/og/prophetic-names.jpg',
    },
    fr: {
      title: 'Défi 201 Noms Prophétiques — Asrār Ramadan',
      description: 'Rejoignez-moi pour réciter les 201 Noms Saints du Prophète Muḥammad ﷺ ce Ramadan. Vivez des bénédictions et une abondance de Rizq.',
      image: '/og/prophetic-names.jpg',
    },
  },
  'salawat': {
    en: {
      title: 'Ṣalawāt Challenge — Asrār Ramadan',
      description: 'Join me in reciting Ṣalawāt this Ramadan. Track your daily dhikr with Asrār.',
      image: '/og/salawat.jpg',
    },
    fr: {
      title: 'Défi Ṣalawāt — Asrār Ramadan',
      description: 'Rejoignez-moi pour réciter les Ṣalawāt ce Ramadan. Suivez votre dhikr quotidien avec Asrār.',
      image: '/og/salawat.jpg',
    },
  },
  'istighfar': {
    en: {
      title: 'Istighfār Challenge — Asrār Ramadan',
      description: 'Join me in seeking Allah\'s forgiveness this Ramadan. Track your daily Istighfār with Asrār.',
      image: '/og/istighfar.jpg',
    },
    fr: {
      title: 'Défi Istighfār — Asrār Ramadan',
      description: 'Rejoignez-moi pour demander le pardon d\'Allah ce Ramadan. Suivez votre Istighfār quotidien avec Asrār.',
      image: '/og/istighfar.jpg',
    },
  },
  'divine-name': {
    en: {
      title: 'Divine Name Challenge — Asrār Ramadan',
      description: 'Join me in invoking the 99 Names of Allah this Ramadan. Track your daily dhikr with Asrār.',
      image: '/og/divine-name.jpg',
    },
    fr: {
      title: 'Défi Nom Divin — Asrār Ramadan',
      description: 'Rejoignez-moi pour invoquer les 99 Noms d\'Allah ce Ramadan. Suivez votre dhikr quotidien avec Asrār.',
      image: '/og/divine-name.jpg',
    },
  },
  'custom': {
    en: {
      title: 'Custom Dhikr Challenge — Asrār Ramadan',
      description: 'Join me in my personal dhikr practice this Ramadan. Track your spiritual journey with Asrār.',
      image: '/og/custom.jpg',
    },
    fr: {
      title: 'Défi Dhikr Personnalisé — Asrār Ramadan',
      description: 'Rejoignez-moi dans ma pratique personnelle de dhikr ce Ramadan. Suivez votre parcours spirituel avec Asrār.',
      image: '/og/custom.jpg',
    },
  },
  'debt-relief': {
    en: {
      title: 'Debt Relief Wird — Asrār Ramadan',
      description: 'Join me in reciting this sacred Qurʾānic verse 1000× after ʿIshāʾ for relief from debt and fast repayment.',
      image: '/og/debt-relief.jpg',
    },
    fr: {
      title: 'Wird pour le Soulagement des Dettes — Asrār Ramadan',
      description: 'Rejoignez-moi pour réciter ce verset sacré du Qour\'ān 1000× après ʿIshāʾ pour le soulagement des dettes et le remboursement rapide.',
      image: '/og/debt-relief.jpg',
    },
  },
};

/**
 * Helper to generate full OpenGraph metadata for a challenge
 * @param challengeSlug - The challenge slug (e.g., 'salawat')
 * @param language - The current language
 * @param baseUrl - The base URL of the site
 * @returns OpenGraph metadata object
 */
export function getChallengeOGMeta(
  challengeSlug: keyof typeof challengeMeta,
  language: Language = 'en',
  baseUrl: string = 'https://www.asrar.app'
) {
  const meta = challengeMeta[challengeSlug]?.[language];
  if (!meta) {
    return null;
  }

  const langParam = language === 'fr' ? '&lang=fr' : '';
  const url = `${baseUrl}/ramadan?challenge=${challengeSlug}${langParam}`;

  return {
    title: meta.title,
    description: meta.description,
    openGraph: {
      type: 'website' as const,
      locale: language === 'fr' ? 'fr_FR' : 'en_GB',
      url,
      siteName: 'Asrār Everyday',
      title: meta.title,
      description: meta.description,
      images: [
        {
          url: meta.image,
          width: 1200,
          height: 630,
          alt: meta.title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image' as const,
      title: meta.title,
      description: meta.description,
      images: [meta.image],
    },
  };
}

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
