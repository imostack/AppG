"use client"

import { ScrollReveal } from "@/components/scroll-reveal"
import { Button } from "@/components/ui/button"
import { CalendarDaysIcon, ArrowRightIcon } from "@heroicons/react/24/outline"

const products = [
  {
    title: "Events Kona",
    description: "Our flagship platform for event discovery, ticketing, and community experiences across Africa. Now with a massive platform upgrade — new users can join the waitlist at eventskona.com.",
    icon: CalendarDaysIcon,
    gradient: "from-indigo-500 to-purple-600",
    link: "https://eventskona.com/",
    linkText: "Visit Events Kona",
    badge: "Flagship",
    features: [
      "Multi-region event discovery",
      "Integrated ticketing & payments",
      "Community-driven platform",
      "Mobile-first experience"
    ]
  },
]

export function Features() {
  return (
    <section id="products" className="relative border-t border-border/40 px-4 py-20 sm:py-24 lg:py-28 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <ScrollReveal>
          <div className="mb-20 max-w-3xl">
            <h2 className="mb-6 text-5xl sm:text-6xl font-bold tracking-tight text-foreground">
              Products
            </h2>
            <p className="text-xl sm:text-2xl text-muted-foreground font-light leading-relaxed">
              We build platforms that connect communities and power businesses across Africa.
            </p>
          </div>
        </ScrollReveal>

        <div className="space-y-8">
          {products.map((product, index) => {
            const IconComponent = product.icon
            return (
              <ScrollReveal key={product.title} delay={index * 0.1}>
                <div className="group border border-border/40 rounded-2xl overflow-hidden hover:border-border transition-all duration-200 hover:shadow-xl">
                  {/* Header */}
                  <div className="p-8 pb-6">
                    <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
                      <div className="flex items-start gap-6 flex-1">
                        <div className="flex-shrink-0">
                          <div className={`p-3 rounded-xl bg-gradient-to-br ${product.gradient}`}>
                            <IconComponent className="h-7 w-7 text-white" />
                          </div>
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-3">
                            <h3 className="text-3xl font-semibold text-foreground">{product.title}</h3>
                            {product.badge && (
                              <span className="text-xs font-medium px-2.5 py-1 rounded-full bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 border border-indigo-500/20">
                                {product.badge}
                              </span>
                            )}
                          </div>
                          <p className="text-muted-foreground text-lg leading-relaxed mb-6">{product.description}</p>

                          {/* Features list */}
                          <div className="grid sm:grid-cols-2 gap-3">
                            {product.features.map((feature, i) => (
                              <div key={i} className="flex items-center gap-2 text-sm">
                                <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-br ${product.gradient}`} />
                                <span className="text-muted-foreground">{feature}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                      <div className="flex-shrink-0 lg:ml-8">
                        <Button variant="default" className="group/btn w-full sm:w-auto" asChild>
                          <a href={product.link} target="_blank" rel="noopener noreferrer">
                            {product.linkText}
                            <ArrowRightIcon className="h-4 w-4 ml-2 transition-transform group-hover/btn:translate-x-1" />
                          </a>
                        </Button>
                      </div>
                    </div>
                  </div>

                  {/* Stats showcase - Only show for Events Kona */}
                  {product.title === "Events Kona" && (
                    <div className="border-t border-border/40 bg-gradient-to-br from-indigo-500/5 via-purple-500/5 to-transparent p-8">
                      <div className="grid grid-cols-3 gap-6">
                        <div className="text-center">
                          <div className="text-2xl font-bold text-foreground mb-2">Mar 6, 2026</div>
                          <div className="text-sm text-muted-foreground">Waitlist Opens</div>
                        </div>
                        <div className="text-center border-l border-r border-border/40">
                          <div className="text-2xl font-bold text-foreground mb-2">April 2026</div>
                          <div className="text-sm text-muted-foreground">Platform Goes Live</div>
                        </div>
                        <div className="text-center">
                          <div className="text-2xl font-bold text-foreground mb-2">Port Harcourt</div>
                          <div className="text-sm text-muted-foreground">First City, Nigeria</div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </ScrollReveal>
            )
          })}
        </div>

        {/* More platforms placeholder */}
        <ScrollReveal delay={0.2}>
          <div className="mt-6 border border-dashed border-border/40 rounded-2xl p-8 text-center">
            <p className="text-sm text-muted-foreground">More platforms in development</p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
