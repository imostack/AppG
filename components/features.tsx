"use client"

import { motion } from "framer-motion"
import { ScrollReveal } from "@/components/scroll-reveal"
import { Button } from "@/components/ui/button"
import { RocketLaunchIcon, CalendarDaysIcon, WrenchScrewdriverIcon, ArrowRightIcon } from "@heroicons/react/24/outline"

const products = [
  {
    title: "Events Kona",
    description: "Event discovery and management platform connecting communities to memorable experiences. Our flagship product helping people find and share events.",
    icon: CalendarDaysIcon,
    gradient: "from-indigo-500 to-purple-600",
    link: "https://eventskona.com/",
    linkText: "Explore Events Kona",
    badge: "Live",
  },
  {
    title: "AccessRA eCommerce",
    description:
      "White-label eCommerce platform built in partnership with AccessRA. Launching soon for SMEs in Africa.",
    icon: RocketLaunchIcon,
    gradient: "from-blue-500 to-cyan-500",
    link: "https://appguts.com/accessra-partnership",
    linkText: "Learn More",
    badge: "Coming Soon",
  },
  {
    title: "Custom Development",
    description: "Tailored platforms and digital products designed specifically for your business needs. From concept to deployment.",
    icon: WrenchScrewdriverIcon,
    gradient: "from-purple-500 to-pink-500",
    isContact: true,
    linkText: "Start a Project",
  },
]

export function Features() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    element?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section id="products" className="relative border-t border-border/40 px-4 py-32 sm:py-40 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <ScrollReveal>
          <div className="mb-20 max-w-3xl">
            <h2 className="mb-6 text-5xl sm:text-6xl font-bold tracking-tight text-foreground">
              Our platforms
            </h2>
            <p className="text-xl sm:text-2xl text-muted-foreground font-light leading-relaxed">
              We build and partner with platforms that empower businesses and connect communities.
            </p>
          </div>
        </ScrollReveal>

        <div className="space-y-6">
          {products.map((product, index) => {
            const IconComponent = product.icon
            return (
              <ScrollReveal key={product.title} delay={index * 0.1}>
                <div className="group border border-border/40 rounded-xl p-8 hover:border-border transition-all duration-200">
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
                    <div className="flex items-start gap-6 flex-1">
                      <div className="flex-shrink-0">
                        <div className={`p-3 rounded-lg bg-gradient-to-br ${product.gradient}`}>
                          <IconComponent className="h-6 w-6 text-white" />
                        </div>
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <h3 className="text-2xl font-semibold text-foreground">{product.title}</h3>
                          {product.badge && (
                            <span className={`text-xs font-medium px-2 py-1 rounded-full ${
                              product.badge === "Live"
                                ? "bg-indigo-500/10 text-indigo-600 dark:text-indigo-400"
                                : "bg-blue-500/10 text-blue-600 dark:text-blue-400"
                            }`}>
                              {product.badge}
                            </span>
                          )}
                        </div>
                        <p className="text-muted-foreground text-lg leading-relaxed">{product.description}</p>
                      </div>
                    </div>
                    <div className="flex-shrink-0 lg:ml-8">
                      {product.isContact ? (
                        <Button
                          variant="ghost"
                          onClick={() => scrollToSection("contact")}
                          className="group/btn"
                        >
                          {product.linkText}
                          <ArrowRightIcon className="h-4 w-4 ml-2 transition-transform group-hover/btn:translate-x-1" />
                        </Button>
                      ) : (
                        <Button variant="ghost" className="group/btn" asChild>
                          <a href={product.link} target="_blank" rel="noopener noreferrer">
                            {product.linkText}
                            <ArrowRightIcon className="h-4 w-4 ml-2 transition-transform group-hover/btn:translate-x-1" />
                          </a>
                        </Button>
                      )}
                    </div>
                  </div>

                  {/* Visual content - Only show for Events Kona */}
                  {product.title === "Events Kona" && (
                    <div className="mt-8 relative">
                      {/* Browser mockup frame */}
                      <div className="rounded-xl border border-border/40 bg-background shadow-2xl overflow-hidden">
                        {/* Browser chrome */}
                        <div className="flex items-center gap-2 px-4 py-3 bg-muted/30 border-b border-border/40">
                          <div className="flex gap-1.5">
                            <div className="w-3 h-3 rounded-full bg-red-500/80" />
                            <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                            <div className="w-3 h-3 rounded-full bg-green-500/80" />
                          </div>
                          <div className="flex-1 mx-4">
                            <div className="text-xs text-muted-foreground bg-background/50 rounded px-3 py-1 text-center">
                              eventskona.com
                            </div>
                          </div>
                        </div>

                        {/* Content area */}
                        <div className="bg-gradient-to-br from-indigo-500/5 via-purple-500/5 to-violet-500/5 p-8 sm:p-12">
                          <div className="max-w-4xl mx-auto space-y-8">
                            {/* Stats grid */}
                            <div className="grid grid-cols-3 gap-4 sm:gap-8">
                              <div className="bg-background/80 backdrop-blur-sm rounded-lg p-4 sm:p-6 border border-border/40 text-center">
                                <div className="text-3xl sm:text-4xl font-bold text-indigo-600 dark:text-indigo-400 mb-1">8+</div>
                                <div className="text-xs sm:text-sm text-muted-foreground">Active Events</div>
                              </div>
                              <div className="bg-background/80 backdrop-blur-sm rounded-lg p-4 sm:p-6 border border-border/40 text-center">
                                <div className="text-3xl sm:text-4xl font-bold text-indigo-600 dark:text-indigo-400 mb-1">5K+</div>
                                <div className="text-xs sm:text-sm text-muted-foreground">Attendees</div>
                              </div>
                              <div className="bg-background/80 backdrop-blur-sm rounded-lg p-4 sm:p-6 border border-border/40 text-center">
                                <div className="text-3xl sm:text-4xl font-bold text-indigo-600 dark:text-indigo-400 mb-1">1.2K+</div>
                                <div className="text-xs sm:text-sm text-muted-foreground">Organizers</div>
                              </div>
                            </div>

                            {/* Feature highlights */}
                            <div className="bg-background/60 backdrop-blur-sm rounded-lg p-6 border border-border/40">
                              <div className="grid sm:grid-cols-2 gap-4 text-sm">
                                <div className="flex items-center gap-3">
                                  <div className="w-2 h-2 rounded-full bg-indigo-500" />
                                  <span className="text-muted-foreground">Multi-region support across Africa</span>
                                </div>
                                <div className="flex items-center gap-3">
                                  <div className="w-2 h-2 rounded-full bg-indigo-500" />
                                  <span className="text-muted-foreground">Real-time event discovery</span>
                                </div>
                                <div className="flex items-center gap-3">
                                  <div className="w-2 h-2 rounded-full bg-indigo-500" />
                                  <span className="text-muted-foreground">Integrated ticketing system</span>
                                </div>
                                <div className="flex items-center gap-3">
                                  <div className="w-2 h-2 rounded-full bg-indigo-500" />
                                  <span className="text-muted-foreground">Community-focused design</span>
                                </div>
                              </div>
                            </div>
                          </div>
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
