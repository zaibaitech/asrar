/**
 * Community Dhikr API
 * ====================
 * GET  - Fetch current community-wide dhikr stats
 * POST - Log dhikr and atomically increment community counters
 *
 * Anonymous-friendly: uses a browser fingerprint instead of auth.
 */

import { NextRequest, NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';

// Server-side Supabase client (uses service role or anon key)
function getSupabase() {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
  if (!url || !key) return null;
  return createClient(url, key);
}

// ─── GET /api/v1/community-dhikr ─────────────────────────────────────────────

export async function GET() {
  const supabase = getSupabase();
  if (!supabase) {
    return NextResponse.json(
      { success: false, error: 'Database not configured' },
      { status: 503 }
    );
  }

  try {
    const { data, error } = await supabase.rpc('get_community_dhikr_stats');

    if (error) {
      console.error('[community-dhikr] GET error:', error);
      return NextResponse.json(
        { success: false, error: 'Failed to fetch stats' },
        { status: 500 }
      );
    }

    const stats = data?.[0] || { today_total: 0, today_users: 0, all_time_total: 0 };

    return NextResponse.json({
      success: true,
      data: {
        todayTotal: Number(stats.today_total),
        todayUsers: Number(stats.today_users),
        allTimeTotal: Number(stats.all_time_total),
        lastUpdated: new Date().toISOString(),
      },
    });
  } catch (e) {
    console.error('[community-dhikr] Unexpected error:', e);
    return NextResponse.json(
      { success: false, error: 'Internal server error' },
      { status: 500 }
    );
  }
}

// ─── POST /api/v1/community-dhikr ────────────────────────────────────────────

interface IncrementBody {
  fingerprint: string;
  amount: number;
  dhikrType?: string;
}

export async function POST(request: NextRequest) {
  const supabase = getSupabase();
  if (!supabase) {
    return NextResponse.json(
      { success: false, error: 'Database not configured' },
      { status: 503 }
    );
  }

  try {
    const body: IncrementBody = await request.json();

    // Validate
    if (!body.fingerprint || typeof body.fingerprint !== 'string') {
      return NextResponse.json(
        { success: false, error: 'Missing fingerprint' },
        { status: 400 }
      );
    }
    if (!body.amount || typeof body.amount !== 'number' || body.amount <= 0 || body.amount > 100000) {
      return NextResponse.json(
        { success: false, error: 'Invalid amount (must be 1-100000)' },
        { status: 400 }
      );
    }

    const dhikrType = body.dhikrType || 'general';

    const { data, error } = await supabase.rpc('increment_community_dhikr', {
      p_fingerprint: body.fingerprint,
      p_amount: body.amount,
      p_dhikr_type: dhikrType,
    });

    if (error) {
      console.error('[community-dhikr] POST error:', error);
      return NextResponse.json(
        { success: false, error: 'Failed to log dhikr' },
        { status: 500 }
      );
    }

    const stats = data?.[0] || { today_total: 0, today_users: 0, all_time_total: 0 };

    return NextResponse.json({
      success: true,
      data: {
        todayTotal: Number(stats.today_total),
        todayUsers: Number(stats.today_users),
        allTimeTotal: Number(stats.all_time_total),
        lastUpdated: new Date().toISOString(),
      },
    });
  } catch (e) {
    console.error('[community-dhikr] Unexpected error:', e);
    return NextResponse.json(
      { success: false, error: 'Internal server error' },
      { status: 500 }
    );
  }
}
