"use client"

import { ScrollReveal } from "@/components/scroll-reveal"
import { Button } from "@/components/ui/button"
import { ArrowRightIcon } from "@heroicons/react/24/outline"

export function WaitlistBanner() {
  return (
    <section className="relative border-t border-border/40 px-4 py-20 sm:py-24 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 via-purple-500/5 to-background" />

      <div className="relative mx-auto max-w-5xl">
        <ScrollReveal>
          <div className="text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 text-sm font-medium mb-6">
              Waitlist Open — March 6, 2026
            </div>
            <h2 className="mb-6 text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground">
              Events Kona Is Launching
            </h2>
            <p className="mb-10 text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto font-light leading-relaxed">
              The waitlist opens March 6, 2026. Events Kona goes live in April, starting in Port Harcourt, Nigeria. Be among the first in.
            </p>
            <Button
              size="lg"
              asChild
              className="bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white px-8 h-12 text-base font-medium shadow-lg shadow-indigo-500/20"
            >
              <a href="https://eventskona.com/" target="_blank" rel="noopener noreferrer">
                Join the Waitlist
                <ArrowRightIcon className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
