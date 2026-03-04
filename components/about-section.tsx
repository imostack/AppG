"use client"

import { ScrollReveal } from "@/components/scroll-reveal"

export function AboutSection() {
  return (
    <section id="about" className="relative border-t border-border/40 px-4 py-20 sm:py-24 lg:py-28 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Text content */}
          <ScrollReveal>
            <div>
              <h2 className="mb-8 text-5xl sm:text-6xl font-bold tracking-tight text-foreground">
                Our Story
              </h2>
              <div className="space-y-6 text-lg sm:text-xl text-muted-foreground leading-relaxed">
                <p>
                  App Guts is a technology company building SaaS platforms and digital tools for African communities, creators, and businesses.
                </p>
                <p>
                 Our flagship product, Events Kona, is an event discovery, ticketing, and event management platform launching in Port Harcourt, Nigeria. It enables organizers to create events, sell tickets, and manage audiences through a modern platform built specifically for local realities.
                </p>
                <p>
                 Events Kona is the first platform in a broader vision to build infrastructure that powers how African communities connect, organize, and grow online.
                </p>
                <p>We believe Africa’s creators and organizers deserve technology designed for their environment from day one — not solutions adapted from markets that look nothing like ours.</p>
              </div>

              {/* Stats */}
              <div className="mt-12 grid grid-cols-3 gap-8">
                <div>
                  <div className="text-3xl sm:text-4xl font-bold text-foreground mb-1">1</div>
                  <div className="text-sm text-muted-foreground">Flagship Platform</div>
                </div>
                <div>
                  <div className="text-3xl sm:text-4xl font-bold text-foreground mb-1">Apr 2026</div>
                  <div className="text-sm text-muted-foreground">Going Live</div>
                </div>
                <div>
                  <div className="text-3xl sm:text-4xl font-bold text-foreground mb-1">PHC</div>
                  <div className="text-sm text-muted-foreground">Port Harcourt, NG</div>
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

                  {/* Card 2 - Coming Soon */}
                  <div className="absolute bottom-8 right-8 bg-background border border-dashed border-border/40 rounded-xl p-4 shadow-xl backdrop-blur-sm transform rotate-6 hover:rotate-0 transition-transform duration-300">
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-muted to-muted/50 mb-3 flex items-center justify-center">
                      <span className="text-xs text-muted-foreground font-medium">+</span>
                    </div>
                    <div className="w-20 h-2 bg-muted/40 rounded mb-2" />
                    <div className="w-12 h-2 bg-muted/20 rounded" />
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
