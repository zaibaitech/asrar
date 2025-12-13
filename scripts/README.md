# Utility Scripts

This directory contains utility scripts for database operations and testing.

## Prerequisites

Create a `.env` file in the root directory with your Supabase credentials:

```bash
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
```

**⚠️ SECURITY WARNING**: Never commit `.env` files or hardcode credentials in scripts!

## Available Scripts

### check_profile.js
Checks the profiles table and displays current user profile information.

```bash
node check_profile.js
```

### verify_migration.js
Verifies that database migrations have been applied successfully.

```bash
node verify_migration.js
```

## Troubleshooting

If you get an error about missing credentials:
1. Make sure `.env` file exists in the project root
2. Ensure it contains both `NEXT_PUBLIC_SUPABASE_URL` and `NEXT_PUBLIC_SUPABASE_ANON_KEY`
3. Run the script again
