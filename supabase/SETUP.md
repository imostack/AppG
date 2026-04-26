# News Agent Setup — Step by Step

## 1. Run the SQL migration

In your Supabase dashboard → SQL Editor, paste and run:
  supabase/migrations/001_news_articles.sql

## 2. Add env vars to App-Guts-Main (.env.local)

```
NEXT_PUBLIC_SUPABASE_URL=https://xuedzdlwwfahmwijqcqg.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=<your anon key from Supabase → Settings → API>
```

The anon key is safe to expose publicly — RLS ensures it can only read published articles.

## 3. Get a Tavily API key

Sign up free at https://tavily.com — free tier is enough (1,000 searches/month).

## 4. Deploy the Edge Function

Install Supabase CLI if you haven't: https://supabase.com/docs/guides/cli

```bash
supabase login
supabase link --project-ref xuedzdlwwfahmwijqcqg
supabase functions deploy news-agent --project-ref xuedzdlwwfahmwijqcqg
```

## 5. Set Edge Function secrets

In Supabase dashboard → Edge Functions → news-agent → Secrets, add:

| Secret name               | Value                                              |
|---------------------------|----------------------------------------------------|
| ANTHROPIC_API_KEY         | Your Claude API key (already in Events-Kona .env)  |
| TAVILY_API_KEY            | From step 3                                        |
| CRON_SECRET               | Any random string — copy from Events-Kona .env     |
| NOTIFICATION_EMAIL        | hello@appguts.com (or your personal email)         |
| SMTP_HOST                 | Your AWS SES SMTP endpoint                         |
| SMTP_PORT                 | 587                                                |
| SMTP_USER                 | Your SMTP username                                 |
| SMTP_PASS                 | Your SMTP password                                 |

Note: SMTP secrets are optional. If not set, the agent still runs — you just won't
get email notifications. Check Supabase → Edge Functions → Logs instead.

## 6. Schedule with pg_cron

In Supabase → SQL Editor, run:

```sql
-- Schedule the news agent to run every day at 1:00 AM UTC (2 AM WAT)
SELECT cron.schedule(
  'news-agent-daily',
  '0 1 * * *',
  $$
  SELECT net.http_post(
    url        := 'https://xuedzdlwwfahmwijqcqg.supabase.co/functions/v1/news-agent',
    headers    := jsonb_build_object(
                    'Content-Type',  'application/json',
                    'Authorization', 'Bearer <YOUR_CRON_SECRET>'
                  ),
    body       := jsonb_build_object('secret', '<YOUR_CRON_SECRET>')
  ) AS request_id;
  $$
);
```

Replace <YOUR_CRON_SECRET> with the same value you set in step 5.

To confirm the schedule is registered:
```sql
SELECT * FROM cron.job;
```

To remove it:
```sql
SELECT cron.unschedule('news-agent-daily');
```

## 7. Test the agent manually

Trigger it once to verify everything works:

```bash
curl -X POST https://xuedzdlwwfahmwijqcqg.supabase.co/functions/v1/news-agent \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer <YOUR_CRON_SECRET>" \
  -d '{"secret":"<YOUR_CRON_SECRET>"}'
```

Expected response: { "ok": true, "slug": "...", "title": "..." }

Then go to Supabase → Table Editor → news_articles to see the draft row.

## 8. Publishing a draft

The agent inserts articles with published = false. To publish:
1. Supabase → Table Editor → news_articles
2. Find the row (published = false)
3. Click the cell → set to true → save

The article appears on appguts.com/news immediately (no deploy needed).

## 9. Vercel env vars for production

Add to your Vercel project (Settings → Environment Variables):
- NEXT_PUBLIC_SUPABASE_URL
- NEXT_PUBLIC_SUPABASE_ANON_KEY
