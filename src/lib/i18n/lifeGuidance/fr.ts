/** Life Guidance preview strings, French. DRAFT: see docs/i18n/life-guidance-l10n.md. */
import type { LifeGuidanceStrings } from './en';

export const fr: LifeGuidanceStrings = {
  preview: {
    pageTitle: 'Guidance de vie (aperçu)',
    back: 'Retour',
  },
  sources: {
    title: "Voir le calcul + sources",
    notCounted: "non compté",
    showSource: "Voir la source",
    hideSource: "Masquer la source",
    attributed: "attribué",
    toVerify: "à vérifier",
    citedInRepo: "cité dans le code, non revérifié",
    quranSrc: "Coran (texte Tanzil)",
    total: "Total",
    remainder: "reste",
    preview: "Aperçu. Les sources « à vérifier » ne sont pas encore confirmées.",
    steps: {
      letters: "1 · Lettres et valeurs",
      kabir: "2 · Kabīr (somme)",
      saghir: "3 · Ṣaghīr (racine)",
      tabi: "4 · Ṭabʿ (÷ 4)",
      burj: "5 · Burj (÷ 12)",
      manzil: "6 · Manzil (la Lune)",
      lettersMansions: "Les lettres et leurs demeures",
    },
    manzilToday: "Le manzil d’aujourd’hui",
    manzilNatal: "Manzil de naissance (date, heure et lieu requis) : Profil de naissance",
    buniEdition: "dans l’édition citée",
    position: "demeure",
    order: "Ordre abjad mashriqi, fixe (indépendant de votre réglage maghribi / mashriqi)",
    tileToday: " · aujourd’hui",
    elements: {
      fire: "Feu",
      earth: "Terre",
      air: "Air",
      water: "Eau",
    },
    zodiac: {
      aries: "Bélier",
      taurus: "Taureau",
      gemini: "Gémeaux",
      cancer: "Cancer",
      leo: "Lion",
      virgo: "Vierge",
      libra: "Balance",
      scorpio: "Scorpion",
      sagittarius: "Sagittaire",
      capricorn: "Capricorne",
      aquarius: "Verseau",
      pisces: "Poissons",
    },
    notes: {
      letters: "Chaque lettre reçoit sa valeur de la table abjad commune à l’application (ḥisāb al-jummal). Le maghribi est le réglage par défaut ; le mashriqi ne diffère que pour س ص ش ض ظ غ.",
      kabir: "Le kabīr (الكبير) est la simple somme des valeurs des lettres. Avec le nom de la mère, les deux sommes sont additionnées.",
      saghir: "Le ṣaghīr (الصغير) est le kabīr réduit en additionnant ses chiffres jusqu’à ce qu’il n’en reste qu’un (1 à 9).",
      tabi: "Ṭabʿ (الطبع) : le kabīr divisé par 4. Le reste donne l’élément (1 Feu, 2 Terre, 3 Air, 4 ou 0 Eau). Il se lit sur le total, non sur les lettres : il ne dépend donc d’aucune table lettre-élément.",
      burj: "Burj (البرج) : le kabīr divisé par 12. Le reste donne le signe du zodiaque dans l’ordre (1 Bélier … 12 Poissons ; 0 compte pour 12).",
      manzil: "Le manzil (المنزل) n’est jamais que la position réelle de la Lune parmi les 28 demeures : sa longitude écliptique, calculée avec astronomy-engine, tombe dans l’un des 28 secteurs égaux de 12,857° comptés depuis 0° du zodiaque. La demeure du jour est affichée ici. La demeure de naissance demande la date, l’heure et le lieu de naissance : voir Profil de naissance. Le nom n’intervient pas dans le manzil.",
      lettersMansions: "Chaque lettre du nom est placée à côté de la demeure que lui donne la table attribuée à al-Būnī (attribution discutée), dans l’ordre abjad mashriqi (de la première à la dernière lettre). La table est fixe : elle ne change pas avec le réglage maghribi / mashriqi. C’est une correspondance traditionnelle décrite dans la littérature des asrār, non une correspondance astronomique (pour la position réelle de la Lune, voir Manzil (la Lune)). La demeure est reliée à la liste de l’application par son numéro. Les noms arabes affichés suivent l’orthographe standard de l’application ; l’édition citée en écrit six autrement (demeures 1, 9, 16, 26, 27 et 28), ce qui est signalé sous ces lignes.",
    },
    refs: {
      letters: [
        "Les valeurs et les deux ordres des lettres (أبجد هوز حطي كلمن سعفص قرشت ثخذ ضظغ / صعفض قرست ثخذ ظغش) sont documentés dans src/lib/abjad-maps.ts, qui cite Wikipédia « Abjad numerals » (d’après Macdonald 1986) et l’Encyclopaedia Iranica « Abjad » (G. Krotkoff, 1982). Non revérifié ici.",
        "Il manque encore, pour la bibliothèque de sources, un texte arabe classique donnant l’ordre maghribi, avec sa page.",
      ],
      kabir: [
        "Additionner les lettres du nom (et du nom de la mère) est la pratique courante du jafr / ḥisāb al-jummal. Ouvrage, chapitre et page : à vérifier.",
      ],
      saghir: [
        "Source de la réduction du kabīr à un seul chiffre dans le ḥisāb classique : à vérifier. L’application utilise la même réduction dans tous ses outils.",
      ],
      tabi: [
        "La règle et son ordre des éléments sont décrits comme convention maghribie dans src/features/ilm-huruf/core.ts. Non revérifié ici.",
        "Le texte classique pour ÷ 4 et cet ordre des éléments : à vérifier.",
      ],
      burj: [
        "Le texte classique pour ÷ 12 appliqué au total d’un nom : à vérifier.",
        "Pour les signes eux-mêmes, al-Bīrūnī, Kitāb al-Tafhīm li-awāʾil ṣināʿat al-tanjīm, est la référence générale citée dans src/lib/lunarMansions.ts. Chapitre et page : à vérifier.",
      ],
      manzil: [
        "Le Coran parle des demeures de la lune (manāzil) :",
        "et dans",
        "La liste des 28 demeures cite al-Bīrūnī, Kitāb al-Tafhīm, et l’astronomie arabe des anwāʾ dans src/lib/lunarMansions.ts, qui précise aussi que la convention retenue ici est celle de 28 secteurs tropicaux égaux. Non revérifié.",
        "Le point de départ des 28 secteurs (ici 0° Bélier tropical) et l’usage de secteurs égaux par les sources classiques : à vérifier.",
      ],
      lettersMansions: [
        "Table attribuée à al-Būnī dans Shams al-Maʿārif al-Kubrā, al-faṣl al-thānī. Son attribution à al-Būnī (m. 622/1225, ou 630/1232 selon Ḥājjī Khalīfa) est discutée par la recherche moderne. Édition : Muʾassasat al-Nūr, Beyrouth, telle que sur ablibrary.net ; les 28 entrées ont été vérifiées aux pp. 16 à 19 de cette édition.",
        "Les noms des demeures suivent Lisān al-ʿArab (ش-ر-ط الشرطان ; ط-ر-ف الطرف ; ز-ب-ن الزباني ; ف-ر-غ فرغ الدلو المقدَّم / المؤخَّر, abrégé dans l’application en الفرغ المقدم / المؤخر ; ر-ش-و الرِّشاء, c’est-à-dire بطن الحوت) et Ibn Qutayba, Kitāb al-Anwāʾ fī Mawāsim al-ʿArab, dont les titres portent الشرطان, الطرف et الزبانى, et «الفرغ الأول / الفرغ الثانى / الحوت» pour 26 à 28. Aucun numéro de page n’est cité.",
      ],
    },
  },
};
