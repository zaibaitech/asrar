const { createClient } = require('@supabase/supabase-js');

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://azjgakbhovanweelkezt.supabase.co',
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImF6amdha2Job3ZhbndlZWxrZXp0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjUwNDk5OTYsImV4cCI6MjA4MDYyNTk5Nn0.BL4qJKR3P8sevTOU5xaVGRqrM32cjDox592T7zGkg9E'
);

async function verifyMigration() {
  console.log('🔍 Verifying migration...\n');
  
  // Test query with mother_name column
  const { data, error } = await supabase
    .from('profiles')
    .select('id, user_id, full_name, mother_name, created_at')
    .limit(1);
  
  if (error) {
    console.log('❌ Error querying profiles:', error.message);
    if (error.message.includes('mother_name')) {
      console.log('\n⚠️  The mother_name column might not exist yet.');
      console.log('   Make sure the migration ran successfully in Supabase.');
    }
  } else {
    console.log('✅ Migration verified! mother_name column exists.');
    console.log(`📊 Found ${data.length} profile(s) in database`);
    if (data.length > 0) {
      console.log('\nSample profile structure:');
      console.log('Columns:', Object.keys(data[0]).join(', '));
    }
  }
}

verifyMigration().then(() => process.exit(0)).catch(err => {
  console.error('Error:', err);
  process.exit(1);
});
