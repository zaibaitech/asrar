/**
 * Web Push subscription API (stage P2)
 * ====================================
 * POST   - create/update a subscription  { subscription, timezone?, locale?, topics?, deliveryHour? }
 * DELETE - remove a subscription          { endpoint }
 *
 * Anonymous: stores no user id, IP, or location. Writes use the Supabase
 * service-role key only (push_subscriptions has RLS with no client policies).
 * If VAPID keys or the service-role key are not configured, the feature is
 * off and both methods return { enabled: false } without touching the DB.
 */
import { NextRequest, NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';
import { isPushEnabled } from '@/src/lib/push/config';
import { validateEndpoint, validateSubscribeBody } from '@/src/lib/push/validation';
import { clientKey, createRateLimiter } from '@/src/lib/push/rateLimit';

export const dynamic = 'force-dynamic';

const allow = createRateLimiter(10, 60_000);
const MAX_BODY_BYTES = 4096;

function getServiceSupabase() {
  return createClient(process.env.NEXT_PUBLIC_SUPABASE_URL!, process.env.SUPABASE_SERVICE_ROLE_KEY!, {
    auth: { persistSession: false },
  });
}

const off = () => NextResponse.json({ success: false, enabled: false }, { status: 200 });
const bad = (error: string, status = 400) => NextResponse.json({ success: false, error }, { status });

async function readJson(request: NextRequest): Promise<unknown | undefined> {
  const text = await request.text();
  if (text.length > MAX_BODY_BYTES) return undefined;
  try {
    return JSON.parse(text);
  } catch {
    return undefined;
  }
}

export async function POST(request: NextRequest) {
  if (!isPushEnabled()) return off();
  if (!allow(clientKey(request.headers))) return bad('Too many requests', 429);

  const body = await readJson(request);
  if (body === undefined) return bad('Invalid JSON');
  const parsed = validateSubscribeBody(body);
  if (!parsed.ok) return bad(parsed.error);

  try {
    const { error } = await getServiceSupabase()
      .from('push_subscriptions')
      .upsert({ ...parsed.value, updated_at: new Date().toISOString(), fail_count: 0 }, { onConflict: 'endpoint' });
    if (error) {
      console.error('[push/subscribe] upsert error:', error.message);
      return bad('Failed to save subscription', 500);
    }
    return NextResponse.json({ success: true, enabled: true });
  } catch (e) {
    console.error('[push/subscribe] unexpected error');
    return bad('Internal server error', 500);
  }
}

export async function DELETE(request: NextRequest) {
  if (!isPushEnabled()) return off();
  if (!allow(clientKey(request.headers))) return bad('Too many requests', 429);

  const body = (await readJson(request)) as Record<string, unknown> | undefined;
  const endpoint = validateEndpoint(body?.endpoint);
  if (!endpoint.ok) return bad(endpoint.error);

  try {
    const { error } = await getServiceSupabase().from('push_subscriptions').delete().eq('endpoint', endpoint.value);
    if (error) {
      console.error('[push/subscribe] delete error:', error.message);
      return bad('Failed to remove subscription', 500);
    }
    return NextResponse.json({ success: true, enabled: true });
  } catch (e) {
    console.error('[push/subscribe] unexpected error');
    return bad('Internal server error', 500);
  }
}
