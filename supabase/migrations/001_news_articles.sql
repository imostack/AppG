-- Run this in your Supabase SQL Editor
-- Project: same Supabase project used by Events Kona

CREATE TABLE IF NOT EXISTS news_articles (
  id           UUID        DEFAULT gen_random_uuid() PRIMARY KEY,
  slug         TEXT        UNIQUE NOT NULL,
  title        TEXT        NOT NULL,
  subtitle     TEXT        NOT NULL DEFAULT '',
  description  TEXT        NOT NULL DEFAULT '',
  badge        TEXT        NOT NULL DEFAULT 'News',
  badge_color  TEXT        NOT NULL DEFAULT 'bg-indigo-500/10 text-indigo-600 dark:text-indigo-400',
  date_label   TEXT        NOT NULL DEFAULT '',
  published    BOOLEAN     NOT NULL DEFAULT FALSE,
  content_blocks JSONB     NOT NULL DEFAULT '[]'::jsonb,
  created_at   TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at   TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- Auto-update updated_at on every row change
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER news_articles_updated_at
  BEFORE UPDATE ON news_articles
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

-- Indexes
CREATE INDEX IF NOT EXISTS news_articles_slug_idx        ON news_articles (slug);
CREATE INDEX IF NOT EXISTS news_articles_published_idx   ON news_articles (published, created_at DESC);

-- Row Level Security
ALTER TABLE news_articles ENABLE ROW LEVEL SECURITY;

-- Anyone (incl. anon) can read published articles
CREATE POLICY "published_articles_public_read"
  ON news_articles
  FOR SELECT
  TO anon, authenticated
  USING (published = TRUE);

-- Service role (Edge Function) can do everything — bypasses RLS by default
-- No extra policy needed for service role.

-- Enable pg_net extension (needed for pg_cron → Edge Function HTTP calls)
CREATE EXTENSION IF NOT EXISTS pg_net;
