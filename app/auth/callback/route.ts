import { createClient } from '@supabase/supabase-js';
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import type { Database } from '@/src/types/database.types';

export async function GET(request: NextRequest) {
  const requestUrl = new URL(request.url);
  const code = requestUrl.searchParams.get('code');
  const next = requestUrl.searchParams.get('next');

  if (code) {
    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
    const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;
    
    const supabase = createClient<Database>(supabaseUrl, supabaseAnonKey, {
      auth: {
        persistSession: true,
        autoRefreshToken: true,
        detectSessionInUrl: true,
        flowType: 'pkce',
      },
    });

    try {
      // Exchange code for session
      const { data: sessionData, error: sessionError } = await supabase.auth.exchangeCodeForSession(code);
      
      if (sessionError) {
        console.error('Error exchanging code for session:', sessionError);
        return NextResponse.redirect(new URL('/auth?error=email-confirmation-failed', requestUrl.origin));
      }

      if (!sessionData?.session?.user) {
        console.error('No session or user after code exchange');
        return NextResponse.redirect(new URL('/auth?error=no-session', requestUrl.origin));
      }

      const userId = sessionData.session.user.id;
      console.log(`Email verified successfully for user: ${userId}`);

      // Check if user has a profile
      const { data: profile, error: profileError } = await supabase
        .from('profiles')
        .select('id, full_name, date_of_birth')
        .eq('id', userId)
        .maybeSingle() as { 
          data: { id: string; full_name: string | null; date_of_birth: string | null } | null; 
          error: any 
        };

      if (profileError) {
        console.error('Error checking profile:', profileError);
      }

      // Determine redirect destination
      let redirectPath = '/';
      
      if (next) {
        // Honor explicit next parameter if provided
        redirectPath = next;
      } else if (!profile || !profile.full_name || !profile.date_of_birth) {
        // No profile or incomplete profile → redirect to setup
        console.log('No profile found or incomplete, redirecting to profile setup');
        redirectPath = '/profile/setup?verified=true';
      } else {
        // Profile exists and is complete → redirect to home/dashboard
        console.log('Profile found, redirecting to home');
        redirectPath = '/?verified=true';
      }

      return NextResponse.redirect(new URL(redirectPath, requestUrl.origin));
      
    } catch (err) {
      console.error('Unexpected error during email confirmation:', err);
      return NextResponse.redirect(new URL('/auth?error=unexpected-error', requestUrl.origin));
    }
  }

  // No code provided, redirect to auth page
  console.error('No code parameter provided in callback URL');
  return NextResponse.redirect(new URL('/auth?error=no-code', requestUrl.origin));
}
