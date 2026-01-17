"use client"

import { ScrollReveal } from "@/components/scroll-reveal"
import { RocketIcon, LightningBoltIcon, CubeIcon } from "@radix-ui/react-icons"

const capabilities = [
  {
    title: "Community-First Design",
    description: "Our platforms are built to connect people, from event discovery to commerce experiences that bring communities together.",
    icon: RocketIcon,
    gradient: "from-indigo-500 to-purple-600",
    stats: "User-focused",
  },
  {
    title: "Africa-Ready Infrastructure",
    description: "Built specifically for African markets with multi-region support, local payment integration, and mobile-first experiences.",
    icon: CubeIcon,
    gradient: "from-blue-500 to-cyan-600",
    stats: "Multi-region",
  },
  {
    title: "Enterprise Scale",
    description: "Our platforms are designed to grow from hundreds to millions of users with robust infrastructure and reliable performance.",
    icon: LightningBoltIcon,
    gradient: "from-purple-500 to-pink-600",
    stats: "Production-ready",
  },
]

export function WhyAppGuts() {
  return (
    <section className="relative border-t border-border/40 px-4 py-20 sm:py-24 lg:py-28 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <ScrollReveal>
          <div className="mb-20 max-w-3xl">
            <h2 className="mb-6 text-5xl sm:text-6xl font-bold tracking-tight text-foreground">
              Why App Guts
            </h2>
            <p className="text-xl sm:text-2xl text-muted-foreground font-light leading-relaxed">
              We build platforms designed for African markets that scale from day one.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid gap-6 md:grid-cols-3">
          {capabilities.map((capability, index) => {
            const IconComponent = capability.icon
            return (
              <ScrollReveal key={capability.title} delay={index * 0.1}>
                <div className="group relative bg-background border border-border/40 rounded-2xl p-8 hover:border-border transition-all duration-300 hover:shadow-xl">
                  {/* Gradient overlay on hover */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${capability.gradient} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-300`} />

                  <div className="relative">
                    {/* Icon */}
                    <div className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${capability.gradient} mb-6`}>
                      <IconComponent className="h-6 w-6 text-white" />
                    </div>

                    {/* Content */}
                    <h3 className="text-2xl font-semibold text-foreground mb-3">{capability.title}</h3>
                    <p className="text-base text-muted-foreground leading-relaxed mb-4">{capability.description}</p>

                    {/* Stats badge */}
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-muted/50 text-xs font-medium text-muted-foreground">
                      <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-br ${capability.gradient}`} />
                      {capability.stats}
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
