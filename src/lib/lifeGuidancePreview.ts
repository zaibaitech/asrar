/**
 * Life Guidance (the ʿIlm al-Ḥurūf panel) is a preview. It is hidden unless
 * NEXT_PUBLIC_LIFE_GUIDANCE_PREVIEW is "true" (or "1") at build time, so with
 * the variable unset production is unchanged. The preview route /life-guidance
 * is noindex and is not in the sitemap.
 */
export const LIFE_GUIDANCE_PREVIEW =
  process.env.NEXT_PUBLIC_LIFE_GUIDANCE_PREVIEW === 'true' ||
  process.env.NEXT_PUBLIC_LIFE_GUIDANCE_PREVIEW === '1';
