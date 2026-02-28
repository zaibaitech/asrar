-- =====================================================
-- RAMADAN CHALLENGES TABLE
-- =====================================================
-- Stores user's Ramadan dhikr challenges and progress
-- Syncs across devices when authenticated
-- =====================================================

-- Create ramadan_challenges table
CREATE TABLE IF NOT EXISTS public.ramadan_challenges (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL,
  
  -- Challenge data (stored as JSONB for flexibility)
  challenges JSONB NOT NULL DEFAULT '[]'::jsonb,
  
  -- Metadata
  last_synced_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL,
  
  -- Ensure one record per user
  CONSTRAINT unique_user_challenges UNIQUE(user_id)
);

-- Create indexes
CREATE INDEX IF NOT EXISTS idx_ramadan_challenges_user_id 
  ON public.ramadan_challenges(user_id);

CREATE INDEX IF NOT EXISTS idx_ramadan_challenges_updated_at 
  ON public.ramadan_challenges(updated_at);

-- Enable Row Level Security
ALTER TABLE public.ramadan_challenges ENABLE ROW LEVEL SECURITY;

-- RLS Policies: Users can only access their own challenges
CREATE POLICY "Users can view own challenges"
  ON public.ramadan_challenges FOR SELECT
  USING (auth.uid() = user_id);

CREATE POLICY "Users can insert own challenges"
  ON public.ramadan_challenges FOR INSERT
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update own challenges"
  ON public.ramadan_challenges FOR UPDATE
  USING (auth.uid() = user_id)
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can delete own challenges"
  ON public.ramadan_challenges FOR DELETE
  USING (auth.uid() = user_id);

-- Trigger to update updated_at timestamp
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

-- Add comments
COMMENT ON TABLE public.ramadan_challenges IS 'Stores user Ramadan dhikr challenges with cross-device sync';
COMMENT ON COLUMN public.ramadan_challenges.challenges IS 'Array of challenge objects stored as JSONB';
COMMENT ON COLUMN public.ramadan_challenges.last_synced_at IS 'Timestamp of last successful sync from client';
