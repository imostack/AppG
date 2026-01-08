"use client"

import { useState } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ScrollReveal } from "@/components/scroll-reveal"
import { Button } from "@/components/ui/button"
import { CheckCircle2, Zap, Shield, TrendingUp, Store } from "lucide-react"
import { WaitlistDialog } from "@/components/waitlist-dialog"
import Link from "next/link"

const features = [
  {
    icon: Zap,
    title: "Launch in 3 Minutes",
    description: "Get your fully branded online store up and running in just 3 minutes. No technical expertise required.",
  },
  {
    icon: Store,
    title: "White-Label Solution",
    description: "Complete brand control. Your store, your brand, your identity. Built on the AccessRA engine.",
  },
  {
    icon: Shield,
    title: "Ownership & Control",
    description: "Long-term ownership and full control over your store. No marketplace dependency.",
  },
  {
    icon: TrendingUp,
    title: "Built for Scale",
    description: "Subscription-based with clear upgrade paths designed to grow with your business.",
  },
]

const benefits = [
  "No engineering team required",
  "Fully branded storefronts",
  "Subscription-based pricing",
  "Clear upgrade paths",
  "Complete merchant ownership",
  "Scalable infrastructure",
  "Built for Nigerian SMEs",
  "Expanding across Africa",
]

export default function AccessRAPartnershipPage() {
  const [dialogOpen, setDialogOpen] = useState(false)

  return (
    <>
      <Header />
      <main className="min-h-screen bg-background">
        {/* Hero Section */}
      <section className="relative overflow-hidden px-4 py-32 sm:py-40 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <ScrollReveal>
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 text-blue-600 dark:text-blue-400 text-sm font-medium mb-6">
                In Development
              </div>
              <h1 className="mb-6 text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-foreground">
                AccessRA Partnership
              </h1>
              <p className="mb-8 text-xl sm:text-2xl text-muted-foreground max-w-4xl mx-auto font-light leading-relaxed">
                Building Africa's next-generation white-label eCommerce platform for SMEs
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Button
                  size="lg"
                  onClick={() => setDialogOpen(true)}
                  className="bg-gradient-to-r from-blue-500 to-cyan-600 hover:from-blue-600 hover:to-cyan-700 text-white px-8 h-12 text-base font-medium shadow-lg shadow-blue-500/20"
                >
                  Join the Waitlist
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  asChild
                  className="px-8 h-12 text-base font-medium"
                >
                  <a href="https://accessra.com/" target="_blank" rel="noopener noreferrer">
                    Learn More
                  </a>
                </Button>
              </div>
            </div>
          </ScrollReveal>

          {/* Partnership Overview */}
          <ScrollReveal delay={0.2}>
            <div className="mt-20 p-8 sm:p-12 rounded-2xl border border-border/40 bg-gradient-to-br from-blue-500/5 via-cyan-500/5 to-background">
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
                About the Partnership
              </h2>
              <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
                <p>
                  App Guts Limited and AccessRA are partnering to create a revolutionary white-label eCommerce solution
                  specifically designed for small and medium enterprises in Nigeria and across Africa.
                </p>
                <p>
                  This platform empowers businesses and agencies to launch fully branded online stores without
                  the complexity and cost of building in-house engineering teams. Powered by the AccessRA engine,
                  the solution focuses on merchant ownership, scalability, and freedom from marketplace dependency.
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Key Features */}
      <section className="border-t border-border/40 px-4 py-32 sm:py-40 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <ScrollReveal>
            <div className="mb-20 max-w-3xl">
              <h2 className="mb-6 text-4xl sm:text-5xl font-bold tracking-tight text-foreground">
                Platform Features
              </h2>
              <p className="text-xl text-muted-foreground font-light leading-relaxed">
                Everything you need to launch and scale your eCommerce business.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 gap-8">
            {features.map((feature, index) => {
              const IconComponent = feature.icon
              return (
                <ScrollReveal key={feature.title} delay={index * 0.1}>
                  <div className="group relative bg-background border border-border/40 rounded-2xl p-8 hover:border-border transition-all duration-300 hover:shadow-xl">
                    {/* Gradient overlay on hover */}
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-cyan-600 opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-300" />

                    <div className="relative">
                      {/* Icon */}
                      <div className="inline-flex p-3 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-600 mb-6">
                        <IconComponent className="h-6 w-6 text-white" />
                      </div>

                      {/* Content */}
                      <h3 className="text-2xl font-semibold text-foreground mb-3">{feature.title}</h3>
                      <p className="text-base text-muted-foreground leading-relaxed">{feature.description}</p>
                    </div>
                  </div>
                </ScrollReveal>
              )
            })}
          </div>
        </div>
      </section>

      {/* Benefits Grid */}
      <section className="border-t border-border/40 px-4 py-32 sm:py-40 sm:px-6 lg:px-8 bg-muted/20">
        <div className="mx-auto max-w-7xl">
          <ScrollReveal>
            <div className="mb-20 max-w-3xl">
              <h2 className="mb-6 text-4xl sm:text-5xl font-bold tracking-tight text-foreground">
                Why AccessRA?
              </h2>
              <p className="text-xl text-muted-foreground font-light leading-relaxed">
                Built specifically for African SMEs with a focus on ownership and scalability.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl">
            {benefits.map((benefit, index) => (
              <ScrollReveal key={benefit} delay={index * 0.05}>
                <div className="flex items-center gap-3 p-4 rounded-lg border border-border/40 bg-background hover:border-border transition-colors">
                  <CheckCircle2 className="h-5 w-5 text-blue-500 flex-shrink-0" />
                  <span className="text-base text-foreground">{benefit}</span>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* The Vision */}
      <section className="border-t border-border/40 px-4 py-32 sm:py-40 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <ScrollReveal>
            <h2 className="mb-8 text-4xl sm:text-5xl font-bold tracking-tight text-foreground text-center">
              The Vision
            </h2>
            <div className="space-y-6 text-lg sm:text-xl text-muted-foreground leading-relaxed">
              <p>
                Starting in Nigeria, the AccessRA white-label eCommerce platform is designed to democratize
                online retail for businesses of all sizes. By removing technical barriers and providing
                a subscription-based model with clear upgrade paths, we're making enterprise-grade eCommerce
                accessible to everyone.
              </p>
              <p>
                Merchants retain full ownership and control over their stores, free from the constraints
                of marketplace dependency. As the platform matures, we're expanding across Africa,
                empowering thousands of businesses to compete globally while maintaining their unique brand identity.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* CTA Section */}
      <section className="border-t border-border/40 px-4 py-32 sm:py-40 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-500/5 via-cyan-500/5 to-background">
        <div className="mx-auto max-w-4xl text-center">
          <ScrollReveal>
            <h2 className="mb-6 text-4xl sm:text-5xl font-bold tracking-tight text-foreground">
              Ready to Get Started?
            </h2>
            <p className="mb-12 text-xl text-muted-foreground font-light leading-relaxed max-w-2xl mx-auto">
              Join the waitlist today and be among the first to launch your white-label store when we go live.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button
                size="lg"
                onClick={() => setDialogOpen(true)}
                className="bg-gradient-to-r from-blue-500 to-cyan-600 hover:from-blue-600 hover:to-cyan-700 text-white px-8 h-12 text-base font-medium shadow-lg shadow-blue-500/20"
              >
                Join the Waitlist
              </Button>
              <Button
                size="lg"
                variant="outline"
                asChild
                className="px-8 h-12 text-base font-medium"
              >
                <a href="mailto:hello@appguts.com?subject=AccessRA Partnership Inquiry">
                  Contact Us
                </a>
              </Button>
            </div>
            <p className="mt-8 text-sm text-muted-foreground">
              Already have questions? Reach us at <a href="mailto:hello@appguts.com" className="text-foreground hover:underline">hello@appguts.com</a>
            </p>
          </ScrollReveal>
        </div>
      </section>
      </main>
      <Footer />
      <WaitlistDialog open={dialogOpen} onOpenChange={setDialogOpen} />
    </>
  )
}
