import type { Metadata } from "next"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ArrowRightIcon } from "@heroicons/react/24/outline"

export const metadata: Metadata = {
  title: "News",
  description: "Latest news and updates from App Guts. Stay informed about our products, partnerships, and company milestones.",
  alternates: { canonical: "https://appguts.com/news" },
  openGraph: {
    title: "News & Updates | App Guts",
    description: "Latest news and updates from App Guts. Stay informed about our products, partnerships, and company milestones.",
    url: "https://appguts.com/news",
    siteName: "App Guts",
    images: [{ url: "/og-image.png", width: 1500, height: 498, alt: "App Guts News" }],
    locale: "en_NG",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "News & Updates | App Guts",
    description: "Latest news and updates from App Guts. Stay informed about our products, partnerships, and company milestones.",
    images: ["/og-image.png"],
  },
}

const newsArticles = [
  {
    slug: "events-kona-launch-2026",
    title: "Events Kona Is Live",
    description: "We have officially launched in Port Harcourt, Nigeria. Create events, sell tickets, and manage your audience — get started free today.",
    badge: "Launch",
    badgeColor: "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/20",
    date: "April 2026",
  },
  {
    slug: "sell-event-tickets-online-nigeria",
    title: "How to Sell Event Tickets Online in Nigeria (2026 Guide)",
    description: "Most Nigerian event organisers still rely on WhatsApp broadcasts and manual bank transfers. Here's why that's costing you — and how to do it properly.",
    badge: "Guide",
    badgeColor: "bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 border-indigo-500/20",
    date: "April 2026",
  },
  {
    slug: "events-kona-organiser-guide",
    title: "Events Kona for Organisers: The Complete Guide",
    description: "Everything you need to know about creating events, setting up ticket types, managing capacity, and getting paid on Events Kona.",
    badge: "Guide",
    badgeColor: "bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 border-indigo-500/20",
    date: "April 2026",
  },
  {
    slug: "why-port-harcourt",
    title: "Why We Started in Port Harcourt",
    description: "Port Harcourt has one of Nigeria's most vibrant event scenes. Here's why it was the only right place to begin — and what that means for how we build.",
    badge: "Story",
    badgeColor: "bg-purple-500/10 text-purple-600 dark:text-purple-400 border-purple-500/20",
    date: "April 2026",
  },
  {
    slug: "what-we-saw-at-nigerian-events",
    title: "What We Saw at Nigerian Events Changed Everything",
    description: "We attended major events across Nigeria to study the ticketing experience. A Paystack receipt as a ticket. No QR codes. No validation. That night confirmed exactly why Events Kona needed to exist.",
    badge: "Story",
    badgeColor: "bg-purple-500/10 text-purple-600 dark:text-purple-400 border-purple-500/20",
    date: "April 2026",
  },
  {
    slug: "mayor-and-12-kings-2026",
    title: "Mayor and the 12 Kings 2026: Port Harcourt's Biggest Comedy Night",
    description: "Easter Monday, April 6, 2026. EUI Centre, GRA, Port Harcourt. 16 comedians, a packed house, a red carpet that generated real buzz, and the South-South at its finest.",
    badge: "Event Recap",
    badgeColor: "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/20",
    date: "April 2026",
  },
  {
    slug: "past-collaborations",
    title: "Past Collaborations",
    description: "Previous partnerships and initiatives from App Guts.",
    badge: "Archived",
    badgeColor: "bg-muted text-muted-foreground border-border/40",
    date: "2025",
  },
]

export default function NewsPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-background">
        <section className="px-4 py-20 sm:py-24 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <div className="mb-12">
              <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-foreground mb-4">
                News & Updates
              </h1>
              <p className="text-xl text-muted-foreground font-light">
                Latest announcements, partnerships, and company milestones.
              </p>
            </div>

            <div className="space-y-6">
              {newsArticles.map((article) => (
                <Link
                  key={article.slug}
                  href={`/news/${article.slug}`}
                  className="block group"
                >
                  <article className="p-6 rounded-2xl border border-border/40 hover:border-border transition-all duration-200 hover:shadow-lg">
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-3">
                          <span className={`text-xs font-medium px-2.5 py-1 rounded-full border ${article.badgeColor}`}>
                            {article.badge}
                          </span>
                          <span className="text-sm text-muted-foreground">{article.date}</span>
                        </div>
                        <h2 className="text-2xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                          {article.title}
                        </h2>
                        <p className="text-muted-foreground leading-relaxed">
                          {article.description}
                        </p>
                      </div>
                      <ArrowRightIcon className="h-5 w-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all flex-shrink-0 mt-1" />
                    </div>
                  </article>
                </Link>
              ))}
            </div>

            <div className="mt-12 p-6 rounded-2xl bg-muted/30 text-center">
              <p className="text-muted-foreground">
                Follow us on{" "}
                <a
                  href="https://www.linkedin.com/company/app-guts-limited/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  LinkedIn
                </a>
                {" "}for the latest announcements.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
