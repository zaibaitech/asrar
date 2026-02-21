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
  'divine-name': {
    en: {
      title: 'Asrār — Divine Name Challenge · 99 Names of Allah',
      description: 'Invoke the Beautiful Names of Allah with daily tracking. Experience the blessings of calling upon Allah by His Most Beautiful Names.',
    },
    fr: {
      title: 'Asrār — Défi Nom Divin · 99 Noms d\'Allah',
      description: 'Invoquez les Beaux Noms d\'Allah avec un suivi quotidien. Vivez les bénédictions d\'appeler Allah par Ses Plus Beaux Noms.',
    },
  },
  'custom': {
    en: {
      title: 'Asrār — Custom Dhikr Challenge · Personal Spiritual Practice',
      description: 'Create your personal dhikr challenge and track your spiritual journey. Join thousands in daily remembrance of Allah.',
    },
    fr: {
      title: 'Asrār — Défi Dhikr Personnalisé · Pratique Spirituelle Personnelle',
      description: 'Créez votre défi dhikr personnel et suivez votre parcours spirituel. Rejoignez des milliers dans le rappel quotidien d\'Allah.',
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
