import type { Metadata } from "next"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/24/outline"
import { openRoles } from "./data"

export const metadata: Metadata = {
  title: "Careers",
  description: "Join the App Guts team. We're building platforms that connect communities and empower businesses across Africa.",
  alternates: { canonical: "https://appguts.com/careers" },
  openGraph: {
    title: "Careers | App Guts",
    description: "Join the App Guts team. We're building platforms that connect communities and empower businesses across Africa.",
    url: "https://appguts.com/careers",
    siteName: "App Guts",
    images: [{ url: "/og-image.png", width: 1500, height: 498, alt: "App Guts — Careers" }],
    locale: "en_NG",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Careers | App Guts",
    description: "Join the App Guts team. We're building platforms that connect communities and empower businesses across Africa.",
    images: ["/og-image.png"],
  },
}

export default function CareersPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen px-4 py-20">
      <div className="max-w-3xl mx-auto">

        {/* Back link */}
        <div className="mb-10">
          <Button variant="ghost" asChild className="text-muted-foreground hover:text-foreground -ml-2">
            <Link href="/">
              <ArrowLeftIcon className="mr-2 h-4 w-4" />
              Back to Home
            </Link>
          </Button>
        </div>

        {/* Header */}
        <div className="mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold uppercase tracking-wide mb-5">
            {openRoles.length} open position{openRoles.length !== 1 ? "s" : ""}
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-foreground mb-4">
            Careers at App Guts
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed">
            We build digital platforms that connect communities and empower businesses across Africa.
            When we hire, we hire people who care about craft and move with urgency.
          </p>
        </div>

        {/* Job cards */}
        <div className="space-y-4">
          {openRoles.map((role) => (
            <Link key={role.id} href={`/careers/${role.id}`} className="block group">
              <div className="border border-border rounded-2xl p-6 bg-card hover:border-primary/50 hover:shadow-sm transition-all">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1 min-w-0">
                    <h2 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors mb-2">
                      {role.title}
                    </h2>
                    <div className="flex flex-wrap gap-2 mb-3">
                      <span className="text-xs font-medium px-2.5 py-1 rounded-full bg-primary/10 text-primary">
                        {role.type}
                      </span>
                      <span className="text-xs font-medium px-2.5 py-1 rounded-full bg-muted text-muted-foreground">
                        {role.team}
                      </span>
                      <span className="text-xs font-medium px-2.5 py-1 rounded-full bg-muted text-muted-foreground">
                        {role.location}
                      </span>
                    </div>
                    <p className="text-sm text-muted-foreground line-clamp-2">{role.summary}</p>
                  </div>
                  <ArrowRightIcon className="h-5 w-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all shrink-0 mt-1" />
                </div>
                <p className="text-xs text-muted-foreground mt-4">Posted {role.posted}</p>
              </div>
            </Link>
          ))}
        </div>

        {/* Footer note */}
        <p className="text-center text-sm text-muted-foreground mt-16">
          Don&apos;t see a role that fits?{" "}
          <a href="mailto:careers@appguts.com" className="text-primary hover:underline font-medium">
            Send us your portfolio anyway
          </a>
          {" "}— we keep great people on file.
        </p>

      </div>
    </main>
    <Footer />
    </>
  )
}
