
/**
 * Accessible names of images. ArabicDomTranslator does not touch `alt` (only placeholder, title and aria-label),
 * and widening it would change the Arabic output, so Urdu alternatives are chosen here, per component.
 * Every other language keeps the text the component always had.
 */
export const IMAGE_ALT_UR = {
  /** Informative: the photo the user just picked, before saving. */
  profilePreview: 'پروفائل کی تصویر کا پیش منظر',
  /** Informative: the account photo when the profile has no name to describe it. The name itself is used when there is one. */
  profileFallback: 'پروفائل',
  /** Functional: the badge is the link to the store; same wording as the link's aria-label in the catalog. */
  googlePlayBadge: '⁦Google Play⁩ سے حاصل کریں',
  /** Informative: the portrait of the assistant, a proper name that stays in Latin letters. */
  chernoAvatar: '⁨Cherno⁩ کی تصویر',
  /** Functional: the code is what a donor scans to pay. */
  waveQr: '⁦Wave Sénégal⁩ کا QR کوڈ',
  /** Functional: the code is what a visitor scans to install the app. */
  playInstallQr: '⁨Google Play⁩ سے اسراریہ انسٹال کرنے کے لیے ⁨QR⁩ کوڈ',
} as const;

export type ImageAltKey = keyof typeof IMAGE_ALT_UR;

/** The Urdu alternative in Urdu mode, otherwise the component's own text. */
export function imageAlt(key: ImageAltKey, english: string, uiLanguage: string | undefined): string {
  return uiLanguage === 'ur' ? IMAGE_ALT_UR[key] : english;
}
