-- =====================================================
-- PUSH SUBSCRIPTIONS (self-hosted Web Push, stage P2)
-- =====================================================
-- One row per browser push subscription. Deliberately anonymous:
-- no user id, no name, no email, no location. Only what is needed to
-- deliver a reminder at the right local hour in the right language.
--
-- RLS is enabled with NO policies for anon/authenticated, so the public
-- (anon) key can neither read nor write this table. All writes go through
-- /api/push/subscribe using the service-role key, which bypasses RLS.
-- =====================================================

CREATE TABLE IF NOT EXISTS public.push_subscriptions (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  endpoint TEXT NOT NULL UNIQUE CHECK (char_length(endpoint) BETWEEN 1 AND 1000 AND endpoint LIKE 'https://%'),
  p256dh TEXT NOT NULL CHECK (char_length(p256dh) BETWEEN 1 AND 200),
  auth TEXT NOT NULL CHECK (char_length(auth) BETWEEN 1 AND 100),
  timezone TEXT NOT NULL DEFAULT 'UTC' CHECK (char_length(timezone) BETWEEN 1 AND 64),
  locale TEXT NOT NULL DEFAULT 'en' CHECK (locale IN ('en', 'fr', 'ar')),
  topics TEXT[] NOT NULL DEFAULT ARRAY['sadaqa']::TEXT[]
    CHECK (topics <@ ARRAY['sadaqa', 'planetary', 'manzil', 'best-day']::TEXT[]),
  delivery_hour SMALLINT NOT NULL DEFAULT 7 CHECK (delivery_hour BETWEEN 6 AND 21),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL,
  -- Used by the P4 sender for daily caps and 404/410 cleanup.
  last_sent_at TIMESTAMP WITH TIME ZONE,
  fail_count SMALLINT NOT NULL DEFAULT 0
);

CREATE INDEX IF NOT EXISTS idx_push_subscriptions_delivery
  ON public.push_subscriptions(delivery_hour, timezone);

ALTER TABLE public.push_subscriptions ENABLE ROW LEVEL SECURITY;

-- Belt and braces: no table privileges for client roles at all.
REVOKE ALL ON public.push_subscriptions FROM anon, authenticated;

COMMENT ON TABLE public.push_subscriptions IS 'Anonymous Web Push subscriptions. No public policies; server (service role) only.';
