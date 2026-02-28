-- =====================================================
-- COMMUNITY DHIKR COUNTER - DATABASE SETUP
-- =====================================================
-- Creates table and functions for tracking community-wide dhikr stats
-- Anonymous-friendly: uses fingerprints instead of user IDs
-- =====================================================

-- ─── Create Community Dhikr Logs Table ───────────────────────────────────────

CREATE TABLE IF NOT EXISTS public.community_dhikr_logs (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  fingerprint TEXT NOT NULL,
  amount INTEGER NOT NULL CHECK (amount > 0 AND amount <= 100000),
  dhikr_type TEXT NOT NULL DEFAULT 'general',
  created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL,
  date DATE DEFAULT CURRENT_DATE NOT NULL
);

-- Create indexes
CREATE INDEX IF NOT EXISTS idx_community_dhikr_logs_date 
  ON public.community_dhikr_logs(date);

CREATE INDEX IF NOT EXISTS idx_community_dhikr_logs_fingerprint 
  ON public.community_dhikr_logs(fingerprint);

CREATE INDEX IF NOT EXISTS idx_community_dhikr_logs_created_at 
  ON public.community_dhikr_logs(created_at);

-- No RLS needed - this is public community data
ALTER TABLE public.community_dhikr_logs ENABLE ROW LEVEL SECURITY;

-- Allow everyone to read (public stats)
CREATE POLICY "Anyone can view community stats"
  ON public.community_dhikr_logs FOR SELECT
  USING (true);

-- ─── Function: Get Community Stats ──────────────────────────────────────────

CREATE OR REPLACE FUNCTION public.get_community_dhikr_stats()
RETURNS TABLE (
  today_total BIGINT,
  today_users BIGINT,
  all_time_total BIGINT
) AS $$
BEGIN
  RETURN QUERY
  SELECT 
    COALESCE(SUM(CASE WHEN date = CURRENT_DATE THEN amount ELSE 0 END), 0)::BIGINT AS today_total,
    COALESCE(COUNT(DISTINCT CASE WHEN date = CURRENT_DATE THEN fingerprint END), 0)::BIGINT AS today_users,
    COALESCE(SUM(amount), 0)::BIGINT AS all_time_total
  FROM public.community_dhikr_logs;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- ─── Function: Increment Community Dhikr ────────────────────────────────────

CREATE OR REPLACE FUNCTION public.increment_community_dhikr(
  p_fingerprint TEXT,
  p_amount INTEGER,
  p_dhikr_type TEXT DEFAULT 'general'
)
RETURNS TABLE (
  today_total BIGINT,
  today_users BIGINT,
  all_time_total BIGINT
) AS $$
BEGIN
  -- Insert the dhikr log
  INSERT INTO public.community_dhikr_logs (fingerprint, amount, dhikr_type)
  VALUES (p_fingerprint, p_amount, p_dhikr_type);
  
  -- Return updated stats
  RETURN QUERY
  SELECT * FROM public.get_community_dhikr_stats();
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Add comments
COMMENT ON TABLE public.community_dhikr_logs IS 'Anonymous community dhikr tracking';
COMMENT ON FUNCTION public.get_community_dhikr_stats IS 'Get today and all-time community dhikr statistics';
COMMENT ON FUNCTION public.increment_community_dhikr IS 'Log dhikr and return updated community stats';
