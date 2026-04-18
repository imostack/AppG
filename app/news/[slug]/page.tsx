import type { Metadata } from "next"
import type { ReactNode } from "react"
import { notFound } from "next/navigation"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ScrollReveal } from "@/components/scroll-reveal"
import { Button } from "@/components/ui/button"
import { ArrowLeftIcon, ArrowRightIcon, CalendarDaysIcon, MapPinIcon, UsersIcon, BellIcon } from "lucide-react"
import Link from "next/link"

// ─── Article metadata (for SEO / OG) ─────────────────────────────────────────

const articleMeta: Record<string, { title: string; description: string }> = {
  "events-kona-launch-2026": {
    title: "Events Kona Is Launching",
    description:
      "Waitlist opens March 6, 2026. Platform goes live in April — starting in Port Harcourt, Nigeria. Here's everything you need to know.",
  },
  "past-collaborations": {
    title: "Past Collaborations",
    description:
      "Previous partnerships and initiatives from App Guts, including the AccessRA collaboration.",
  },
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string }
}): Promise<Metadata> {
  const meta = articleMeta[params.slug]
  if (!meta) return {}

  const url = `https://appguts.com/news/${params.slug}`

  return {
    title: meta.title,
    description: meta.description,
    alternates: { canonical: url },
    openGraph: {
      title: `${meta.title} | App Guts`,
      description: meta.description,
      url,
      siteName: "App Guts",
      images: [
        {
          url: "/og-image.png",
          width: 1500,
          height: 498,
          alt: meta.title,
        },
      ],
      locale: "en_NG",
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: `${meta.title} | App Guts`,
      description: meta.description,
      images: ["/og-image.png"],
    },
  }
}

// ─── Article content map ─────────────────────────────────────────────────────

const newsContent: Record<string, {
  title: string
  subtitle: string
  badge: string
  badgeColor: string
  Content: () => ReactNode
}> = {
  "events-kona-launch-2026": {
    title: "Events Kona Is Launching",
    subtitle: "Waitlist opens March 6, 2026. Platform goes live in April — starting in Port Harcourt, Nigeria.",
    badge: "Announcement",
    badgeColor: "bg-indigo-500/10 text-indigo-600 dark:text-indigo-400",
    Content: EventsKonaLaunchContent,
  },
  "past-collaborations": {
    title: "Past Collaborations",
    subtitle: "Our previous partnership initiatives",
    badge: "Archived",
    badgeColor: "bg-muted text-muted-foreground",
    Content: PastCollaborationsContent,
  },
}

// ─── Events Kona Launch Article ───────────────────────────────────────────────

function EventsKonaLaunchContent() {
  const milestones = [
    {
      icon: BellIcon,
      date: "March 6, 2026",
      label: "Waitlist Opens",
      description: "Sign up at eventskona.com to secure your spot. Existing beta testers retain full access.",
    },
    {
      icon: CalendarDaysIcon,
      date: "April 2026",
      label: "Platform Goes Live",
      description: "Events Kona officially launches — event discovery, ticketing, and community features fully available.",
    },
    {
      icon: MapPinIcon,
      date: "Starting in",
      label: "Port Harcourt, Nigeria",
      description: "Our first city. We are building deep roots in the Port Harcourt community before expanding.",
    },
  ]

  return (
    <div className="max-w-3xl mx-auto space-y-16">

      {/* Intro */}
      <ScrollReveal>
        <div className="space-y-5 text-lg text-muted-foreground leading-relaxed">
          <p>
            After months of development and private testing, we are ready to open Events Kona to the public.
            The platform has been rebuilt from the ground up — a comprehensive event discovery and ticketing
            experience built specifically for communities in Nigeria and across Africa.
          </p>
          <p>
            We are starting where we are: <strong className="text-foreground">Port Harcourt, Nigeria</strong>.
            Our goal is not to spread thin across many cities at once — it is to build something people
            genuinely rely on, right here at home, and grow from there.
          </p>
        </div>
      </ScrollReveal>

      {/* Timeline / milestones */}
      <ScrollReveal delay={0.1}>
        <div>
          <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-8">Key Dates</h2>
          <div className="space-y-6">
            {milestones.map((m, i) => {
              const Icon = m.icon
              return (
                <div key={i} className="flex gap-5 p-6 rounded-2xl border border-border/40 bg-muted/10">
                  <div className="flex-shrink-0 mt-1">
                    <div className="p-2.5 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600">
                      <Icon className="h-5 w-5 text-white" />
                    </div>
                  </div>
                  <div>
                    <div className="text-xs font-medium text-indigo-500 dark:text-indigo-400 uppercase tracking-wider mb-1">
                      {m.date}
                    </div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">{m.label}</h3>
                    <p className="text-muted-foreground leading-relaxed">{m.description}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </ScrollReveal>

      {/* Waitlist details */}
      <ScrollReveal delay={0.15}>
        <div className="p-8 sm:p-10 rounded-2xl border border-indigo-500/20 bg-gradient-to-br from-indigo-500/5 via-purple-500/5 to-transparent">
          <div className="flex items-start gap-4 mb-6">
            <div className="p-2.5 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 flex-shrink-0 mt-0.5">
              <UsersIcon className="h-5 w-5 text-white" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-2">About the Waitlist</h2>
              <p className="text-muted-foreground leading-relaxed">
                The waitlist opens on <strong className="text-foreground">March 6, 2026</strong> at eventskona.com.
                New users who sign up will join the list and receive access when we go live in April.
              </p>
            </div>
          </div>
          <div className="space-y-3 text-muted-foreground">
            <div className="flex items-start gap-3">
              <div className="w-1.5 h-1.5 rounded-full bg-indigo-500 mt-2 flex-shrink-0" />
              <p>Existing beta users who have been testing the platform can continue to log in and use it.</p>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-1.5 h-1.5 rounded-full bg-indigo-500 mt-2 flex-shrink-0" />
              <p>New users will enter their details and join the waitlist — access granted when the platform opens in April.</p>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-1.5 h-1.5 rounded-full bg-indigo-500 mt-2 flex-shrink-0" />
              <p>We are complying with NDPR guidelines — no broad user data collection before the official launch.</p>
            </div>
          </div>
        </div>
      </ScrollReveal>

      {/* Why Port Harcourt */}
      <ScrollReveal delay={0.2}>
        <div>
          <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-5">Why Port Harcourt First</h2>
          <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
            <p>
              Port Harcourt is one of Nigeria&apos;s most vibrant cities — rich in culture, events, and
              community life. It is also home. Starting here means we can listen closely, iterate quickly,
              and build something that truly fits the community before expanding to other cities.
            </p>
            <p>
              Our plan is deliberate: get Port Harcourt right first, then grow. Events Kona is not just
              another app — it is infrastructure for communities. That kind of trust is built city by city,
              not overnight.
            </p>
          </div>
        </div>
      </ScrollReveal>

      {/* CTA */}
      <ScrollReveal delay={0.25}>
        <div className="text-center p-8 sm:p-10 rounded-2xl border border-border/40 bg-muted/10">
          <h2 className="text-2xl font-bold text-foreground mb-3">Be First In</h2>
          <p className="text-muted-foreground mb-8 max-w-lg mx-auto leading-relaxed">
            The waitlist opens March 6. Head to eventskona.com to sign up and secure your spot before we go live in April.
          </p>
          <Button size="lg" asChild className="bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white px-8 h-12">
            <a href="https://eventskona.com/waitlist" target="_blank" rel="noopener noreferrer">
              Join the Waitlist at Events Kona
              <ArrowRightIcon className="ml-2 h-4 w-4" />
            </a>
          </Button>
        </div>
      </ScrollReveal>

    </div>
  )
}

// ─── Past Collaborations Article ─────────────────────────────────────────────

function PastCollaborationsContent() {
  return (
    <ScrollReveal delay={0.2}>
      <div className="max-w-3xl mx-auto space-y-12">
        {/* Overview */}
        <div className="p-8 sm:p-12 rounded-2xl border border-border/40 bg-muted/20">
          <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-6">
            AccessRA Partnership
          </h2>
          <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
            <p>
              App Guts previously partnered with AccessRA to explore a white-label eCommerce solution
              designed for small and medium enterprises across Africa.
            </p>
            <p>
              The collaboration explored enabling businesses to launch fully branded online stores
              without the complexity and cost of building in-house engineering teams.
            </p>
            <p>
              As we focus our full efforts on building and growing our flagship platform, Events Kona,
              this collaboration is currently inactive.
            </p>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center p-8 rounded-2xl border border-border/40">
          <h2 className="text-2xl font-bold text-foreground mb-4">
            Our flagship platform
          </h2>
          <p className="text-muted-foreground mb-8 max-w-lg mx-auto leading-relaxed">
            All of our energy is now focused on Events Kona — event discovery and ticketing,
            launching in Port Harcourt in April 2026.
          </p>
          <Button size="lg" asChild className="bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white px-8 h-12">
            <a href="https://eventskona.com/" target="_blank" rel="noopener noreferrer">
              Visit Events Kona
              <ArrowRightIcon className="ml-2 h-4 w-4" />
            </a>
          </Button>
        </div>
      </div>
    </ScrollReveal>
  )
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function NewsArticlePage({ params }: { params: { slug: string } }) {
  const article = newsContent[params.slug]

  if (!article) {
    notFound()
  }

  const { Content } = article

  return (
    <>
      <Header />
      <main className="min-h-screen bg-background">
        <section className="px-4 py-20 sm:py-24 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl">
            {/* Back link */}
            <ScrollReveal>
              <Link
                href="/news"
                className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-8"
              >
                <ArrowLeftIcon className="h-4 w-4" />
                Back to News
              </Link>
            </ScrollReveal>

            {/* Article Header */}
            <ScrollReveal>
              <div className="text-center mb-16">
                <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full ${article.badgeColor} text-sm font-medium mb-6`}>
                  {article.badge}
                </div>
                <h1 className="mb-6 text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-foreground">
                  {article.title}
                </h1>
                <p className="text-xl sm:text-2xl text-muted-foreground max-w-3xl mx-auto font-light leading-relaxed">
                  {article.subtitle}
                </p>
              </div>
            </ScrollReveal>

            {/* Article Content */}
            <Content />
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
