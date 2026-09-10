/**
 * Feedback API
 * ============
 * POST - Submit user feedback (bug report, suggestion, or other).
 *
 * Anonymous-friendly, like /api/v1/community-dhikr: no auth required.
 * Writes through a server-side Supabase client, preferring the service
 * role key when configured (the "feedback" table's RLS otherwise only
 * grants INSERT, never SELECT, to the anon role — see migration 008).
 */

import { NextRequest, NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';

function getSupabase() {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
  if (!url || !key) return null;
  return createClient(url, key);
}

const CATEGORIES = ['bug', 'suggestion', 'other'] as const;
type Category = (typeof CATEGORIES)[number];

function isCategory(value: unknown): value is Category {
  return typeof value === 'string' && (CATEGORIES as readonly string[]).includes(value);
}

interface FeedbackBody {
  category?: string;
  message?: string;
  email?: string;
  pageUrl?: string;
  language?: string;
}

export async function POST(request: NextRequest) {
  const supabase = getSupabase();
  if (!supabase) {
    return NextResponse.json({ success: false, error: 'Database not configured' }, { status: 503 });
  }

  try {
    const body: FeedbackBody = await request.json();

    const message = typeof body.message === 'string' ? body.message.trim() : '';
    if (!message || message.length > 2000) {
      return NextResponse.json(
        { success: false, error: 'Message must be between 1 and 2000 characters' },
        { status: 400 },
      );
    }

    const category: Category = isCategory(body.category) ? body.category : 'other';
    const email = typeof body.email === 'string' && body.email.trim() ? body.email.trim().slice(0, 320) : null;
    const pageUrl = typeof body.pageUrl === 'string' ? body.pageUrl.slice(0, 500) : null;
    const appLanguage = typeof body.language === 'string' ? body.language.slice(0, 10) : null;

    const { error } = await supabase.from('feedback').insert({
      category,
      message,
      email,
      page_url: pageUrl,
      app_language: appLanguage,
    });

    if (error) {
      console.error('[feedback] insert error:', error);
      return NextResponse.json({ success: false, error: 'Failed to submit feedback' }, { status: 500 });
    }

    return NextResponse.json({ success: true });
  } catch (e) {
    console.error('[feedback] Unexpected error:', e);
    return NextResponse.json({ success: false, error: 'Internal server error' }, { status: 500 });
  }
}
