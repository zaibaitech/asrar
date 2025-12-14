import { createClient } from '@supabase/supabase-js';
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export async function GET(request: NextRequest) {
  const requestUrl = new URL(request.url);
  const code = requestUrl.searchParams.get('code');
  const next = requestUrl.searchParams.get('next') || '/';

  if (code) {
    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
    const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;
    
    const supabase = createClient(supabaseUrl, supabaseAnonKey, {
      auth: {
        persistSession: true,
        autoRefreshToken: true,
      },
    });

    try {
      const { error } = await supabase.auth.exchangeCodeForSession(code);
      
      if (error) {
        console.error('Error exchanging code for session:', error);
        return NextResponse.redirect(new URL('/auth?error=email-confirmation-failed', requestUrl.origin));
      }

      // Successfully confirmed email
      return NextResponse.redirect(new URL(next, requestUrl.origin));
    } catch (err) {
      console.error('Unexpected error during email confirmation:', err);
      return NextResponse.redirect(new URL('/auth?error=unexpected-error', requestUrl.origin));
    }
  }

  // No code provided, redirect to auth page
  return NextResponse.redirect(new URL('/auth?error=no-code', requestUrl.origin));
}
