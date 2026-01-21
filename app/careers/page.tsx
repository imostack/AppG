import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeftIcon } from "@heroicons/react/24/outline"

export const metadata: Metadata = {
  title: "Careers",
  description: "Join the App Guts team. We're building platforms that connect communities and empower businesses across Africa.",
}

export default function CareersPage() {
  return (
    <main className="min-h-screen flex items-center justify-center px-4 py-20">
      <div className="max-w-2xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-8">
          Coming Soon
        </div>

        <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-foreground mb-6">
          Join Our Team
        </h1>

        <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed mb-8">
          We're building platforms that connect communities and empower businesses across Africa.
          We're not currently hiring, but check back soon for open positions.
        </p>

        <p className="text-muted-foreground mb-12">
          Interested in working with us? Send your CV to{" "}
          <a href="mailto:careers@appguts.com" className="text-primary hover:underline">
            careers@appguts.com
          </a>
        </p>

        <Button variant="outline" asChild>
          <Link href="/">
            <ArrowLeftIcon className="mr-2 h-4 w-4" />
            Back to Home
          </Link>
        </Button>
      </div>
    </main>
  )
}
