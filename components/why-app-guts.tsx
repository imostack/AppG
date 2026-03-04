"use client"

import { ScrollReveal } from "@/components/scroll-reveal"
import { RocketIcon, MixIcon, LightningBoltIcon } from "@radix-ui/react-icons"

const reasons = [
  {
    title: "The Problem",
    description: "Creators and organizers across Africa manage events with fragmented tools — WhatsApp broadcasts, manual payment tracking, and platforms built for other markets. The infrastructure they need simply doesn't exist for them.",
    icon: MixIcon,
    gradient: "from-rose-500 to-orange-500",
    tag: "The gap",
  },
  {
    title: "The Opportunity",
    description: "Africa has a generation of organizers, creators, and community builders ready to grow. They need modern, reliable platforms that understand local payments, local context, and local scale.",
    icon: LightningBoltIcon,
    gradient: "from-indigo-500 to-purple-600",
    tag: "The moment",
  },
  {
    title: "Our Answer",
    description: "App Guts builds the infrastructure. Events Kona is our first platform. We are starting with event discovery and ticketing in Port Harcourt, and building from there — city by city, platform by platform.",
    icon: RocketIcon,
    gradient: "from-emerald-500 to-teal-600",
    tag: "The mission",
  },
]

export function WhyAppGuts() {
  return (
    <section className="relative border-t border-border/40 px-4 py-20 sm:py-24 lg:py-28 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <ScrollReveal>
          <div className="mb-20 max-w-3xl">
            <h2 className="mb-6 text-5xl sm:text-6xl font-bold tracking-tight text-foreground">
              Why We Exist
            </h2>
            <p className="text-xl sm:text-2xl text-muted-foreground font-light leading-relaxed">
              African communities deserve platforms built for their reality — not adapted from someone else&apos;s.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid gap-6 md:grid-cols-3">
          {reasons.map((reason, index) => {
            const IconComponent = reason.icon
            return (
              <ScrollReveal key={reason.title} delay={index * 0.1}>
                <div className="group relative bg-background border border-border/40 rounded-2xl p-8 hover:border-border transition-all duration-300 hover:shadow-xl">
                  <div className={`absolute inset-0 bg-gradient-to-br ${reason.gradient} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-300`} />

                  <div className="relative">
                    <div className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${reason.gradient} mb-6`}>
                      <IconComponent className="h-6 w-6 text-white" />
                    </div>

                    <h3 className="text-2xl font-semibold text-foreground mb-3">{reason.title}</h3>
                    <p className="text-base text-muted-foreground leading-relaxed mb-4">{reason.description}</p>

                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-muted/50 text-xs font-medium text-muted-foreground">
                      <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-br ${reason.gradient}`} />
                      {reason.tag}
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
