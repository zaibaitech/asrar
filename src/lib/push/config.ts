/**
 * Web Push feature flag. The feature is OFF (all push endpoints no-op)
 * unless every required env var is present, so merging is safe before
 * the VAPID keys / service-role key are configured in Vercel.
 */
export interface PushConfig {
  publicKey: string;
  privateKey: string;
  subject: string;
  cronSecret: string | null;
}

export function getPushConfig(env: NodeJS.ProcessEnv = process.env): PushConfig | null {
  const publicKey = env.NEXT_PUBLIC_VAPID_PUBLIC_KEY?.trim();
  const privateKey = env.VAPID_PRIVATE_KEY?.trim();
  const subject = env.VAPID_SUBJECT?.trim();
  if (!publicKey || !privateKey || !subject) return null;
  // CRON_SECRET is only required by the P4 sender; subscribing works without it.
  return { publicKey, privateKey, subject, cronSecret: env.CRON_SECRET?.trim() || null };
}

export function isPushEnabled(env: NodeJS.ProcessEnv = process.env): boolean {
  return getPushConfig(env) !== null && !!env.NEXT_PUBLIC_SUPABASE_URL && !!env.SUPABASE_SERVICE_ROLE_KEY;
}
