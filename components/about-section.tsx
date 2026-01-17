"use client"

import { ScrollReveal } from "@/components/scroll-reveal"

export function AboutSection() {
  return (
    <section id="about" className="relative border-t border-border/40 px-4 py-32 sm:py-40 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Text content */}
          <ScrollReveal>
            <div>
              <h2 className="mb-8 text-5xl sm:text-6xl font-bold tracking-tight text-foreground">
                About App Guts
              </h2>
              <div className="space-y-6 text-lg sm:text-xl text-muted-foreground leading-relaxed">
                <p>
                  App Guts is a product company building platforms for African communities and businesses.
                </p>
                <p>
                  We operate Events Kona, an event discovery platform connecting communities across multiple countries, and are partnering with AccessRA to launch a white-label eCommerce marketplace for specialized retail.
                </p>
                <p>
                  Our mission is to create accessible, scalable platforms that solve real problems for people and businesses across Africa.
                </p>
              </div>

              {/* Stats */}
              <div className="mt-12 grid grid-cols-3 gap-8">
                <div>
                  <div className="text-3xl sm:text-4xl font-bold text-foreground mb-1">2</div>
                  <div className="text-sm text-muted-foreground">Live Products</div>
                </div>
                <div>
                  <div className="text-3xl sm:text-4xl font-bold text-foreground mb-1">80+</div>
                  <div className="text-sm text-muted-foreground">Active Users</div>
                </div>
                <div>
                  <div className="text-3xl sm:text-4xl font-bold text-foreground mb-1">3+</div>
                  <div className="text-sm text-muted-foreground">Countries</div>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Illustrative graphic */}
          <ScrollReveal delay={0.2}>
            <div className="relative">
              {/* Abstract illustration using shapes */}
              <div className="relative aspect-square max-w-lg mx-auto">
                {/* Background gradient orbs */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-purple-500/20 to-pink-500/20 rounded-3xl blur-3xl" />

                {/* Grid pattern */}
                <div className="absolute inset-0 opacity-10">
                  <div className="grid grid-cols-8 grid-rows-8 h-full w-full">
                    {Array.from({ length: 64 }).map((_, i) => (
                      <div key={i} className="border border-foreground/20" />
                    ))}
                  </div>
                </div>

                {/* Floating cards */}
                <div className="relative h-full flex items-center justify-center p-8">
                  {/* Card 1 - Events Kona */}
                  <div className="absolute top-8 left-8 bg-background border border-border/40 rounded-xl p-4 shadow-xl backdrop-blur-sm transform -rotate-6 hover:rotate-0 transition-transform duration-300">
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-indigo-500 to-purple-600 mb-3" />
                    <div className="w-20 h-2 bg-muted rounded mb-2" />
                    <div className="w-16 h-2 bg-muted/50 rounded" />
                  </div>

                  {/* Card 2 - AccessRA */}
                  <div className="absolute bottom-8 right-8 bg-background border border-border/40 rounded-xl p-4 shadow-xl backdrop-blur-sm transform rotate-6 hover:rotate-0 transition-transform duration-300">
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-500 to-cyan-500 mb-3" />
                    <div className="w-20 h-2 bg-muted rounded mb-2" />
                    <div className="w-16 h-2 bg-muted/50 rounded" />
                  </div>

                  {/* Center piece */}
                  <div className="bg-background border-2 border-border rounded-2xl p-8 shadow-2xl backdrop-blur-sm z-10">
                    <div className="w-32 h-32 rounded-2xl bg-gradient-to-br from-primary via-purple-500 to-pink-500 flex items-center justify-center">
                      <svg className="w-16 h-16 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
