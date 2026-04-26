import { createClient } from "https://esm.sh/@supabase/supabase-js@2"

const SUPABASE_URL            = Deno.env.get("SUPABASE_URL")!
const SUPABASE_SERVICE_ROLE_KEY = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!
const ANTHROPIC_API_KEY       = Deno.env.get("ANTHROPIC_API_KEY")!
const TAVILY_API_KEY          = Deno.env.get("TAVILY_API_KEY")!
const CRON_SECRET             = Deno.env.get("CRON_SECRET") ?? ""
const NOTIFICATION_EMAIL      = Deno.env.get("NOTIFICATION_EMAIL") ?? "hello@appguts.com"
const SMTP_HOST               = Deno.env.get("SMTP_HOST") ?? ""
const SMTP_PORT               = parseInt(Deno.env.get("SMTP_PORT") ?? "587")
const SMTP_USER               = Deno.env.get("SMTP_USER") ?? ""
const SMTP_PASS               = Deno.env.get("SMTP_PASS") ?? ""

// Topics to rotate through daily
const SEARCH_TOPICS = [
  "event technology Nigeria 2026",
  "African entertainment events news 2026",
  "Port Harcourt events culture Nigeria",
  "Nigerian concert ticketing industry 2026",
  "live events Africa digital innovation",
  "event management trends Africa 2026",
  "humanoid robots AI events technology 2026",
  "Nigerian startup tech news 2026",
  "South-South Nigeria entertainment events",
  "online ticketing Africa challenges solutions",
]

const SYSTEM_PROMPT = `You are a content writer for App Guts, a Nigerian SaaS company based in Port Harcourt. Their flagship product is Events Kona (eventskona.com) — a live event ticketing and discovery platform now live in Port Harcourt, Nigeria.

Write engaging, factual blog articles for appguts.com/news that:
1. Cover real news stories accurately — never invent statistics, quotes, or facts
2. Find an organic angle that connects to the Nigerian event industry or Events Kona
3. End with a CTA pointing readers to eventskona.com/signup

Tone: plain, confident editorial voice. Think The Information meets Substack but for the African tech/events space. No hype, no generic filler.

Return ONLY valid JSON — no markdown fences, no explanation — in this exact shape:
{
  "slug": "kebab-case-unique-slug-max-60-chars",
  "title": "Compelling article title (under 80 chars)",
  "subtitle": "One sentence angle summary (under 120 chars)",
  "description": "SEO meta description (under 160 chars)",
  "badge": "One of: News | Guide | Story | Event Tech | Analysis | Recap",
  "badge_color": "One of: bg-blue-500/10 text-blue-600 dark:text-blue-400 | bg-purple-500/10 text-purple-600 dark:text-purple-400 | bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 | bg-indigo-500/10 text-indigo-600 dark:text-indigo-400",
  "date_label": "Month Year e.g. April 2026",
  "content_blocks": []
}

Content block types available (use a mix):
- { "type": "paragraph", "text": "..." }
- { "type": "heading", "text": "..." }
- { "type": "subheading", "text": "..." }
- { "type": "bullets", "items": ["..."], "variant": "default|pro|con" }
- { "type": "steps", "items": [{ "step": "1", "title": "...", "body": "..." }] }
- { "type": "feature_cards", "items": [{ "title": "...", "body": "..." }], "columns": 1 }
- { "type": "callout", "text": "...", "label": "optional bold prefix", "variant": "info|tip|warning" }
- { "type": "quote", "text": "...", "attribution": "optional source" }
- { "type": "tag_grid", "items": ["name1", "name2"] }
- { "type": "cta", "heading": "...", "body": "...", "button_text": "...", "button_href": "https://eventskona.com/signup" }

Rules:
- Minimum 7 blocks, maximum 16
- Always include at least 3 paragraph blocks
- Always end with exactly one cta block linking to eventskona.com/signup
- Only state facts from the provided search results`

Deno.serve(async (_req) => {
  try {
    // ── 1. Pick a topic and search ────────────────────────────────────────────
    const topic = SEARCH_TOPICS[new Date().getDate() % SEARCH_TOPICS.length]

    const searchRes = await fetch("https://api.tavily.com/search", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        api_key: TAVILY_API_KEY,
        query: topic,
        search_depth: "basic",
        max_results: 5,
        include_answer: false,
        include_raw_content: false,
      }),
    })

    if (!searchRes.ok) throw new Error(`Tavily failed: ${searchRes.statusText}`)

    const searchData = await searchRes.json()
    const stories = (searchData.results ?? [])
      .map((r: { title: string; url: string; content: string }) =>
        `Title: ${r.title}\nURL: ${r.url}\nSummary: ${r.content?.slice(0, 500)}`
      )
      .join("\n\n---\n\n")

    if (!stories) throw new Error("No search results returned")

    // ── 2. Write article with Claude ──────────────────────────────────────────
    const claudeRes = await fetch("https://api.anthropic.com/v1/messages", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-api-key": ANTHROPIC_API_KEY,
        "anthropic-version": "2023-06-01",
      },
      body: JSON.stringify({
        model: "claude-sonnet-4-6",
        max_tokens: 4096,
        system: SYSTEM_PROMPT,
        messages: [{
          role: "user",
          content: `Search topic: "${topic}"\n\nSearch results:\n\n${stories}\n\nWrite the article. Return ONLY the JSON object — nothing else.`,
        }],
      }),
    })

    if (!claudeRes.ok) throw new Error(`Claude failed: ${claudeRes.statusText}`)

    const claudeData = await claudeRes.json()
    const rawText = claudeData.content?.[0]?.text?.trim() ?? ""

    // Strip markdown code fences if Claude wraps in them
    const jsonStr = rawText.replace(/^```(?:json)?\n?/, "").replace(/\n?```$/, "")
    const article = JSON.parse(jsonStr)

    // ── 3. Insert into Supabase as draft ──────────────────────────────────────
    const supabase = createClient(SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY)

    // Avoid slug collisions
    const { data: existing } = await supabase
      .from("news_articles")
      .select("id")
      .eq("slug", article.slug)
      .maybeSingle()

    if (existing) {
      article.slug = `${article.slug}-${Date.now()}`
    }

    const { error: insertError } = await supabase.from("news_articles").insert({
      slug:           article.slug,
      title:          article.title,
      subtitle:       article.subtitle,
      description:    article.description,
      badge:          article.badge,
      badge_color:    article.badge_color,
      date_label:     article.date_label,
      published:      false,
      content_blocks: article.content_blocks,
    })

    if (insertError) throw insertError

    // ── 4. Send email notification ────────────────────────────────────────────
    if (SMTP_HOST && SMTP_USER && SMTP_PASS) {
      await sendNotification(article.title, article.slug).catch((e) =>
        console.error("Email notification failed (non-fatal):", e)
      )
    }

    console.log(`[news-agent] Draft created: "${article.title}" → slug: ${article.slug}`)

    return new Response(
      JSON.stringify({ ok: true, slug: article.slug, title: article.title }),
      { headers: { "Content-Type": "application/json" } }
    )
  } catch (err) {
    console.error("[news-agent] Error:", err)
    return new Response(JSON.stringify({ ok: false, error: String(err) }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    })
  }
})

// ── Email notification via SMTP ───────────────────────────────────────────────

async function sendNotification(title: string, slug: string) {
  const { SMTPClient } = await import("https://deno.land/x/denomailer@1.6.0/mod.ts")

  const client = new SMTPClient({
    connection: {
      hostname: SMTP_HOST,
      port: SMTP_PORT,
      tls: false,
      auth: { username: SMTP_USER, password: SMTP_PASS },
    },
  })

  await client.send({
    from: "App Guts Agent <noreply@appguts.com>",
    to: NOTIFICATION_EMAIL,
    subject: `[Draft Ready] ${title}`,
    content: [
      `A new article draft was written by the news agent.`,
      ``,
      `Title:   ${title}`,
      `Preview: https://appguts.com/news/${slug}`,
      ``,
      `To PUBLISH: Go to Supabase → Table Editor → news_articles`,
      `            Find slug "${slug}" → set published = true`,
      ``,
      `To REJECT:  Delete the row.`,
      ``,
      `— App Guts News Agent`,
    ].join("\n"),
  })

  await client.close()
}
