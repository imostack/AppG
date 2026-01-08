"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ScrollReveal } from "@/components/scroll-reveal"
import { Button } from "@/components/ui/button"
import { CheckCircle2 } from "lucide-react"
import Link from "next/link"

const solutions = [
  "Event management platforms",
  "eCommerce marketplace systems",
  "Custom SaaS products",
  "Enterprise web applications",
  "API development and integration",
  "Mobile-responsive platforms",
]

const process = [
  {
    step: "1",
    title: "Discovery",
    description: "We start by understanding your business goals, challenges, and technical requirements.",
  },
  {
    step: "2",
    title: "Planning",
    description: "Our team designs a scalable architecture tailored to your specific needs.",
  },
  {
    step: "3",
    title: "Development",
    description: "We build your platform using modern technologies and best practices.",
  },
  {
    step: "4",
    title: "Launch & Support",
    description: "We deploy your solution and provide ongoing maintenance and support.",
  },
]

export default function CustomSolutionsPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-background">
        {/* Hero Section */}
      <section className="relative overflow-hidden px-4 py-32 sm:py-40 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-5xl text-center">
          <ScrollReveal>
            <h1 className="mb-6 text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-foreground">
              Custom Solutions
            </h1>
            <p className="mb-12 text-xl sm:text-2xl text-muted-foreground max-w-3xl mx-auto font-light leading-relaxed">
              We build tailored digital platforms that solve your unique business challenges. From concept to deployment.
            </p>
            <Button
              size="lg"
              asChild
              className="bg-foreground text-background hover:bg-foreground/90 px-8 h-12 text-base font-medium"
            >
              <a href="mailto:customsolutions@appguts.com">
                Get Started
              </a>
            </Button>
          </ScrollReveal>
        </div>
      </section>

      {/* What We Build */}
      <section className="border-t border-border/40 px-4 py-32 sm:py-40 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <ScrollReveal>
            <div className="mb-20 max-w-3xl">
              <h2 className="mb-6 text-4xl sm:text-5xl font-bold tracking-tight text-foreground">
                What we build
              </h2>
              <p className="text-xl text-muted-foreground font-light leading-relaxed">
                Purpose-built platforms designed specifically for your business model and growth strategy.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 gap-4 max-w-4xl">
            {solutions.map((solution, index) => (
              <ScrollReveal key={solution} delay={index * 0.05}>
                <div className="flex items-center gap-3 p-4 rounded-lg border border-border/40 hover:border-border transition-colors">
                  <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0" />
                  <span className="text-lg text-foreground">{solution}</span>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Our Process */}
      <section className="border-t border-border/40 px-4 py-32 sm:py-40 sm:px-6 lg:px-8 bg-muted/20">
        <div className="mx-auto max-w-7xl">
          <ScrollReveal>
            <div className="mb-20 max-w-3xl">
              <h2 className="mb-6 text-4xl sm:text-5xl font-bold tracking-tight text-foreground">
                Our process
              </h2>
              <p className="text-xl text-muted-foreground font-light leading-relaxed">
                A proven approach to delivering scalable, high-quality platforms.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((item, index) => (
              <ScrollReveal key={item.step} delay={index * 0.1}>
                <div className="relative">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-xl font-bold text-primary">
                    {item.step}
                  </div>
                  <h3 className="mb-3 text-xl font-semibold text-foreground">{item.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="border-t border-border/40 px-4 py-32 sm:py-40 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <ScrollReveal>
            <h2 className="mb-6 text-4xl sm:text-5xl font-bold tracking-tight text-foreground">
              Ready to get started?
            </h2>
            <p className="mb-12 text-xl text-muted-foreground font-light leading-relaxed max-w-2xl mx-auto">
              Tell us about your project and we'll get back to you within 24 hours.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button
                size="lg"
                asChild
                className="bg-foreground text-background hover:bg-foreground/90 px-8 h-12 text-base font-medium"
              >
                <a href="mailto:customsolutions@appguts.com?subject=Custom Solution Inquiry">
                  Email Us
                </a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                asChild
                className="px-8 h-12 text-base font-medium"
              >
                <Link href="/#products">
                  View Our Products
                </Link>
              </Button>
            </div>
            <p className="mt-8 text-sm text-muted-foreground">
              Or reach us directly at <a href="mailto:customsolutions@appguts.com" className="text-foreground hover:underline">customsolutions@appguts.com</a>
            </p>
          </ScrollReveal>
        </div>
      </section>
      </main>
      <Footer />
    </>
  )
}
