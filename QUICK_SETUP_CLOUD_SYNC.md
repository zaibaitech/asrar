# ✅ QUICK SETUP - Ramadan Dhikr Cloud Sync

## 🎯 One-Time Setup (5 Minutes)

### Step 1: Run Database Migrations

You need to run 2 SQL migrations:

#### Migration 1: Personal Progress Sync

1. **Open** https://supabase.com/dashboard/project/azjgakbhovanweelkezt/sql
2. **Click** "+ New Query"
3. **Copy & Paste** this SQL from `006_create_ramadan_challenges_table.sql`:

```sql
-- Run this entire block:

CREATE TABLE IF NOT EXISTS public.ramadan_challenges (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL,
  challenges JSONB NOT NULL DEFAULT '[]'::jsonb,
  last_synced_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL,
  CONSTRAINT unique_user_challenges UNIQUE(user_id)
);

CREATE INDEX IF NOT EXISTS idx_ramadan_challenges_user_id ON public.ramadan_challenges(user_id);
CREATE INDEX IF NOT EXISTS idx_ramadan_challenges_updated_at ON public.ramadan_challenges(updated_at);

ALTER TABLE public.ramadan_challenges ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can view own challenges" ON public.ramadan_challenges FOR SELECT USING (auth.uid() = user_id);
CREATE POLICY "Users can insert own challenges" ON public.ramadan_challenges FOR INSERT WITH CHECK (auth.uid() = user_id);
CREATE POLICY "Users can update own challenges" ON public.ramadan_challenges FOR UPDATE USING (auth.uid() = user_id) WITH CHECK (auth.uid() = user_id);
CREATE POLICY "Users can delete own challenges" ON public.ramadan_challenges FOR DELETE USING (auth.uid() = user_id);

CREATE OR REPLACE FUNCTION public.update_ramadan_challenges_updated_at()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = timezone('utc'::text, now());
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER update_ramadan_challenges_updated_at
  BEFORE UPDATE ON public.ramadan_challenges
  FOR EACH ROW
  EXECUTE FUNCTION public.update_ramadan_challenges_updated_at();
```

4. **Click** "Run" (▶️)
5. **Wait** for "Success" message

#### Migration 2: Community Counter (if not already set up)

If the community counter isn't working, run this (copy from `007_create_community_dhikr.sql`):

**Check first** if it exists:
```sql
SELECT * FROM community_dhikr_logs LIMIT 1;
```

If you get an error "relation does not exist", then run the full migration from the file.

### Step 2: Verify Setup

Run in SQL Editor:
```sql
SELECT * FROM ramadan_challenges;
```

Should return `0 rows` (table is empty, which is correct!)

---

## ✨ How It Works

### When Logged In:
- ✅ Saves to localStorage (instant)
- ✅ Auto-syncs to cloud (every 2 seconds)
- ✅ Merges data from all devices
- ✅ Works offline, syncs when online

### When Logged Out:
- ✅ Still works 100% offline
- ✅ Syncs when you log in later

---

## 🧪 Test It Now

### Test 1: Single Device
1. Open app while logged in
2. Add some dhikr (+100)
3. Open browser console (F12)
4. Look for: `[RamadanChallenges] Synced successfully`
5. Refresh page → Progress persists ✅

### Test 2: Multiple Devices
1. **Phone**: Login → Add +500 dhikr
2. **Computer**: Login → You should see the +500
3. **Computer**: Add +300 more (total: 800)
4. **Phone**: Refresh → Should show 800 total ✅

---

## 🔍 Troubleshooting

### "Not syncing"
Check browser console for:
- ✅ `[RamadanChallenges] User authenticated - syncing with cloud...`
- ❌ Any error messages

If you see errors:
1. Verify migration ran successfully
2. Check you're logged in (user icon in top-right)
3. Check `.env` has Supabase credentials

### "Duplicate challenges"
Run in browser console:
```javascript
localStorage.removeItem('ramadan_challenges_v2')
```
Then refresh page to load from cloud.

---

## 📝 Summary

**What Was Built:**
- ✅ Database table for cloud storage
- ✅ Automatic sync on all changes
- ✅ Intelligent merge logic
- ✅ Offline-first architecture

**Files Created:**
- `supabase/migrations/006_create_ramadan_challenges_table.sql`
- `src/features/ramadanChallenges/sync.ts`
- Updated: `src/features/ramadanChallenges/store.tsx`

**Result:**
Your Ramadan dhikr progress now syncs across ALL your devices! 🎉

---

**Next:** Run the SQL migration above, then test on multiple devices!
