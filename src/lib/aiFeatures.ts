/**
 * AI Chat and AI Analysis are disabled by default (everywhere, including dev).
 * Re-enable by setting NEXT_PUBLIC_AI_CHAT_ENABLED=true (or 1) at build time.
 * The code stays in place: AIChat / AIAnalysis render nothing and the
 * /api/ai-chat and /api/ai-analysis routes return 404 while this is off.
 */
export const AI_CHAT_ENABLED =
  process.env.NEXT_PUBLIC_AI_CHAT_ENABLED === 'true' ||
  process.env.NEXT_PUBLIC_AI_CHAT_ENABLED === '1';
