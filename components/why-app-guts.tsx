"use client"

import { ScrollReveal } from "@/components/scroll-reveal"
import { RocketIcon, LightningBoltIcon, CubeIcon } from "@radix-ui/react-icons"

const capabilities = [
  {
    title: "Event Platforms",
    description: "Full-featured event discovery and management systems that bring communities together.",
    icon: RocketIcon,
    gradient: "from-indigo-500 to-purple-600",
    stats: "5K+ users",
  },
  {
    title: "eCommerce Solutions",
    description: "White-label marketplace platforms for specialized retail, starting with rare goods and collectibles.",
    icon: CubeIcon,
    gradient: "from-blue-500 to-cyan-600",
    stats: "Enterprise ready",
  },
  {
    title: "Custom Platforms",
    description: "Purpose-built SaaS products designed and developed specifically for your business model.",
    icon: LightningBoltIcon,
    gradient: "from-purple-500 to-pink-600",
    stats: "Tailored solutions",
  },
]

export function WhyAppGuts() {
  return (
    <section className="relative border-t border-border/40 px-4 py-32 sm:py-40 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <ScrollReveal>
          <div className="mb-20 max-w-3xl">
            <h2 className="mb-6 text-5xl sm:text-6xl font-bold tracking-tight text-foreground">
              Built for scale
            </h2>
            <p className="text-xl sm:text-2xl text-muted-foreground font-light leading-relaxed">
              From event platforms to enterprise tools, our products are designed to grow with your business.
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
