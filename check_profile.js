const { createClient } = require('@supabase/supabase-js');

const supabase = createClient(
  'https://azjgakbhovanweelkezt.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImF6amdha2Job3ZhbndlZWxrZXp0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjUwNDk5OTYsImV4cCI6MjA4MDYyNTk5Nn0.BL4qJKR3P8sevTOU5xaVGRqrM32cjDox592T7zGkg9E'
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
