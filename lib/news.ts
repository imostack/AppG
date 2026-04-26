import { cache } from "react"
import { supabase } from "./supabase"
export type { ContentBlock } from "./content-blocks"
import type { ContentBlock } from "./content-blocks"

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

// ─── Fetch helpers ────────────────────────────────────────────────────────────

export async function getPublishedArticles(): Promise<ArticleSummary[]> {
  try {
    const { data, error } = await supabase
      .from("news_articles")
      .select("slug, title, description, badge, badge_color, date_label, created_at")
      .eq("published", true)
      .order("created_at", { ascending: false })

    if (error) return []
    return (data ?? []) as ArticleSummary[]
  } catch {
    return []
  }
}

// cache() deduplicates calls within a single request (generateMetadata + page component)
export const getArticleBySlug = cache(async (slug: string): Promise<DBArticle | null> => {
  try {
    const { data, error } = await supabase
      .from("news_articles")
      .select("*")
      .eq("slug", slug)
      .eq("published", true)
      .single()

    if (error) return null
    return data as DBArticle
  } catch {
    return null
  }
})
