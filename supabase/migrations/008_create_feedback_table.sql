-- =====================================================
-- FEEDBACK TABLE
-- =====================================================
-- Stores user-submitted feedback (bug reports, suggestions, other).
-- Anonymous-friendly, matching community_dhikr_logs: no auth required
-- to submit. Write-only from the client — no public SELECT policy is
-- granted, so feedback is read back via the Supabase dashboard or the
-- service-role key, not by other users.
-- =====================================================

CREATE TABLE IF NOT EXISTS public.feedback (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  category TEXT NOT NULL DEFAULT 'other' CHECK (category IN ('bug', 'suggestion', 'other')),
  message TEXT NOT NULL CHECK (char_length(message) BETWEEN 1 AND 2000),
  email TEXT,
  page_url TEXT,
  app_language TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

CREATE INDEX IF NOT EXISTS idx_feedback_created_at ON public.feedback(created_at);
CREATE INDEX IF NOT EXISTS idx_feedback_category ON public.feedback(category);

ALTER TABLE public.feedback ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can submit feedback"
  ON public.feedback FOR INSERT
  WITH CHECK (true);

COMMENT ON TABLE public.feedback IS 'User-submitted feedback (bug reports, suggestions, other) — write-only from the client; read via Supabase dashboard/service role.';
