const { createClient } = require('@supabase/supabase-js');
require('dotenv').config();

if (!process.env.NEXT_PUBLIC_SUPABASE_URL || !process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY) {
  console.error('❌ Error: Supabase credentials not found in environment variables');
  console.log('Please set NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_ANON_KEY');
  process.exit(1);
}

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
);

async function checkProfiles() {
  console.log('Checking profiles table...\n');
  
  // Get current user
  const { data: { user }, error: authError } = await supabase.auth.getUser();
  if (authError) {
    console.log('Not authenticated:', authError.message);
    return;
  }
  
  console.log('Current user ID:', user?.id);
  console.log('Current user email:', user?.email);
  console.log('');
  
  // Check if profile exists
  const { data: profile, error: profileError } = await supabase
    .from('profiles')
    .select('*')
    .eq('user_id', user.id)
    .single();
  
  if (profileError) {
    console.log('Profile error:', profileError.message);
    console.log('Error code:', profileError.code);
    console.log('');
    
    // Check if table has mother_name column
    const { data: allProfiles, error: allError } = await supabase
      .from('profiles')
      .select('*')
      .limit(1);
    
    if (allError) {
      console.log('Cannot query profiles table:', allError.message);
    } else if (allProfiles && allProfiles.length > 0) {
      console.log('Sample profile columns:', Object.keys(allProfiles[0]));
    } else {
      console.log('No profiles found in table');
    }
  } else {
    console.log('Profile found!');
    console.log('Profile data:', JSON.stringify(profile, null, 2));
  }
}

checkProfiles().then(() => process.exit(0)).catch(err => {
  console.error('Error:', err);
  process.exit(1);
});
