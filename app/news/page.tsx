import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeftIcon } from "@heroicons/react/24/outline"

export const metadata: Metadata = {
  title: "News",
  description: "Latest news and updates from App Guts. Stay informed about our products, partnerships, and company milestones.",
}

export default function NewsPage() {
  return (
    <main className="min-h-screen flex items-center justify-center px-4 py-20">
      <div className="max-w-2xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-8">
          Coming Soon
        </div>

        <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-foreground mb-6">
          News & Updates
        </h1>

        <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed mb-8">
          Stay informed about our products, partnerships, and company milestones.
          We're working on bringing you the latest updates.
        </p>

        <p className="text-muted-foreground mb-12">
          Follow us on{" "}
          <a href="https://www.linkedin.com/company/app-guts-limited/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
            LinkedIn
          </a>
          {" "}for the latest announcements.
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
