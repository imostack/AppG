"use client"

import { ScrollReveal } from "@/components/scroll-reveal"
import { Button } from "@/components/ui/button"
import { RocketLaunchIcon, CalendarDaysIcon, ArrowRightIcon } from "@heroicons/react/24/outline"

const products = [
  {
    title: "Events Kona",
    description: "Event discovery and management platform connecting communities to memorable experiences across Africa. Browse events, purchase tickets, and connect with your community.",
    icon: CalendarDaysIcon,
    gradient: "from-indigo-500 to-purple-600",
    link: "https://eventskona.com/",
    linkText: "Visit Events Kona",
    badge: "Live",
    features: [
      "Multi-region event discovery",
      "Integrated ticketing & payments",
      "Community-driven platform",
      "Mobile-first experience"
    ]
  },
  {
    title: "AccessRA Platform",
    description:
      "White-label eCommerce marketplace for rare goods and specialized retail. Built in partnership with AccessRA to serve SMEs across Africa with enterprise-grade commerce tools.",
    icon: RocketLaunchIcon,
    gradient: "from-blue-500 to-cyan-500",
    link: "https://appguts.com/accessra-partnership",
    linkText: "Learn about AccessRA",
    badge: "Coming Soon",
    features: [
      "White-label commerce platform",
      "Multi-vendor marketplace",
      "Inventory & order management",
      "Secure payment processing"
    ]
  },
]

export function Features() {
  return (
    <section id="products" className="relative border-t border-border/40 px-4 py-32 sm:py-40 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <ScrollReveal>
          <div className="mb-20 max-w-3xl">
            <h2 className="mb-6 text-5xl sm:text-6xl font-bold tracking-tight text-foreground">
              Products
            </h2>
            <p className="text-xl sm:text-2xl text-muted-foreground font-light leading-relaxed">
              Platforms connecting communities to experiences and businesses to growth.
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
                              <span className={`text-xs font-medium px-2.5 py-1 rounded-full ${
                                product.badge === "Live"
                                  ? "bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 border border-indigo-500/20"
                                  : "bg-blue-500/10 text-blue-600 dark:text-blue-400 border border-blue-500/20"
                              }`}>
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
                          <div className="text-4xl font-bold text-foreground mb-2">8+</div>
                          <div className="text-sm text-muted-foreground">Active Events</div>
                        </div>
                        <div className="text-center border-l border-r border-border/40">
                          <div className="text-4xl font-bold text-foreground mb-2">80+</div>
                          <div className="text-sm text-muted-foreground">Attendees</div>
                        </div>
                        <div className="text-center">
                          <div className="text-4xl font-bold text-foreground mb-2">50+</div>
                          <div className="text-sm text-muted-foreground">Organizers</div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </ScrollReveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
