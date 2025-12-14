import { createClient } from '@supabase/supabase-js';
import dotenv from 'dotenv';

dotenv.config();

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseKey) {
  console.error('❌ Missing Supabase credentials in .env file');
  process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseKey);

async function testSignup() {
  console.log('🔍 Testing Supabase Signup Flow\n');
  console.log('URL:', supabaseUrl);
  console.log('');

  try {
    // Test 1: Check if profiles table exists
    console.log('📋 Step 1: Checking profiles table...');
    const { data: profileData, error: profileError } = await supabase
      .from('profiles')
      .select('count')
      .limit(1);
    
    if (profileError) {
      console.log('❌ Profiles table error:', profileError.message);
      console.log('   Code:', profileError.code);
      console.log('\n📝 The profiles table might not exist or RLS policies block access.');
      console.log('   Go to: https://app.supabase.com/project/azjgakbhovanweelkezt/sql');
      console.log('   Run the migrations from: supabase/migrations/\n');
      return;
    }
    
    console.log('✅ Profiles table accessible\n');
    
    // Test 2: Try actual signup
    const testEmail = `test${Date.now()}@example.com`;
    const testPassword = 'TestPassword123!';
    
    console.log('🧪 Step 2: Testing signup...');
    console.log('   Email:', testEmail);
    console.log('   Redirect:', 'https://www.asrar.app/auth/callback\n');
    
    const { data, error } = await supabase.auth.signUp({
      email: testEmail,
      password: testPassword,
      options: {
        emailRedirectTo: 'https://www.asrar.app/auth/callback',
      },
    });
    
    if (error) {
      console.log('❌ SIGNUP FAILED');
      console.log('   Error:', error.message);
      console.log('   Status:', error.status);
      console.log('   Code:', error.code || 'N/A');
      console.log('\n📝 Common causes:');
      console.log('   1. Email confirmations are required (check Supabase Auth settings)');
      console.log('   2. Database trigger failed (check function logs)');
      console.log('   3. RLS policies blocking profile creation');
      console.log('   4. Redirect URL not whitelisted\n');
      console.log('Full error:', JSON.stringify(error, null, 2));
    } else {
      console.log('✅ SIGNUP SUCCESSFUL!');
      console.log('   User ID:', data.user?.id);
      console.log('   Email:', data.user?.email);
      console.log('   Confirmed:', data.user?.email_confirmed_at ? 'Yes' : 'Pending');
      console.log('\n📧 Check email for confirmation link (if enabled)');
      
      // Test 3: Check if profile was created
      if (data.user?.id) {
        console.log('\n🔍 Step 3: Checking if profile was created...');
        const { data: profile, error: fetchError } = await supabase
          .from('profiles')
          .select('*')
          .eq('user_id', data.user.id)
          .single();
        
        if (fetchError) {
          console.log('❌ Profile not found:', fetchError.message);
          console.log('   The trigger might have failed!');
        } else {
          console.log('✅ Profile created successfully!');
          console.log('   Profile ID:', profile.id);
          console.log('   Created at:', profile.created_at);
        }
      }
    }
    
  } catch (err) {
    console.error('\n💥 Unexpected error:', err.message);
    console.error(err);
  }
}

testSignup();
