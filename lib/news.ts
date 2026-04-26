import { cache } from "react"
export type { ContentBlock } from "./content-blocks"
import type { ContentBlock } from "./content-blocks"

// Uses Supabase REST API directly via fetch — no JS client, no client-side bundle risk.
const SUPABASE_URL     = process.env.NEXT_PUBLIC_SUPABASE_URL!
const SUPABASE_ANON_KEY = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!

const headers = {
  Authorization: `Bearer ${SUPABASE_ANON_KEY}`,
  apikey: SUPABASE_ANON_KEY,
}

export type DBArticle = {
  id: string
  slug: string
  title: string
  subtitle: string
  description: string
  badge: string
  badge_color: string
  date_label: string
  published: boolean
  content_blocks: ContentBlock[]
  created_at: string
}

export type ArticleSummary = Pick<
  DBArticle,
  "slug" | "title" | "description" | "badge" | "badge_color" | "date_label" | "created_at"
>

export async function getPublishedArticles(): Promise<ArticleSummary[]> {
  try {
    const res = await fetch(
      `${SUPABASE_URL}/rest/v1/news_articles?published=eq.true&select=slug,title,description,badge,badge_color,date_label,created_at&order=created_at.desc`,
      { headers, next: { revalidate: 3600 } } as RequestInit
    )
    if (!res.ok) return []
    return res.json()
  } catch {
    return []
  }
}

export const getArticleBySlug = cache(async (slug: string): Promise<DBArticle | null> => {
  try {
    const res = await fetch(
      `${SUPABASE_URL}/rest/v1/news_articles?slug=eq.${encodeURIComponent(slug)}&published=eq.true&select=*&limit=1`,
      { headers, next: { revalidate: 3600 } } as RequestInit
    )
    if (!res.ok) return null
    const data: DBArticle[] = await res.json()
    return data[0] ?? null
  } catch {
    return null
  }
})
