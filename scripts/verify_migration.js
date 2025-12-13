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
