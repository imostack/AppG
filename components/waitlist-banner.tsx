"use client"

import { useState } from "react"
import { ScrollReveal } from "@/components/scroll-reveal"
import { Button } from "@/components/ui/button"
import { ArrowRightIcon } from "@heroicons/react/24/outline"
import { WaitlistDialog } from "@/components/waitlist-dialog"

export function WaitlistBanner() {
  const [dialogOpen, setDialogOpen] = useState(false)

  return (
    <section className="relative border-t border-border/40 px-4 py-20 sm:py-24 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-cyan-500/5 to-background" />

      <div className="relative mx-auto max-w-5xl">
        <ScrollReveal>
          <div className="text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 text-blue-600 dark:text-blue-400 text-sm font-medium mb-6">
              Coming Soon
            </div>
            <h2 className="mb-6 text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground">
              Launch Your Store in 3 Minutes
            </h2>
            <p className="mb-10 text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto font-light leading-relaxed">
              Join the waitlist for our white-label eCommerce platform. Built for African SMEs, powered by AccessRA.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button
                size="lg"
                onClick={() => setDialogOpen(true)}
                className="bg-gradient-to-r from-blue-500 to-cyan-600 hover:from-blue-600 hover:to-cyan-700 text-white px-8 h-12 text-base font-medium shadow-lg shadow-blue-500/20"
              >
                Join the Waitlist
                <ArrowRightIcon className="ml-2 h-4 w-4" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                asChild
                className="px-8 h-12 text-base font-medium"
              >
                <a href="/accessra-partnership">
                  Learn More
                </a>
              </Button>
            </div>

            <WaitlistDialog open={dialogOpen} onOpenChange={setDialogOpen} />
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
