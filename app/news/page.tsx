import type { Metadata } from "next"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ArrowRightIcon } from "@heroicons/react/24/outline"

export const metadata: Metadata = {
  title: "News",
  description: "Latest news and updates from App Guts. Stay informed about our products, partnerships, and company milestones.",
}

const newsArticles = [
  {
    slug: "events-kona-launch-2026",
    title: "Events Kona Is Launching",
    description: "Waitlist opens March 6, 2026. Platform goes live in April, starting in Port Harcourt, Nigeria. Here's everything you need to know.",
    badge: "Announcement",
    badgeColor: "bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 border-indigo-500/20",
    date: "March 2026",
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
