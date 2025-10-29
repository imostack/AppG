"use client"

import { motion } from "framer-motion"
import { ScrollReveal } from "@/components/scroll-reveal"

const reasons = [
  {
    title: "Innovation",
    description: "Cutting-edge technology and creative solutions",
    icon: "💡",
  },
  {
    title: "Scalability",
    description: "Solutions that grow with your business",
    icon: "📈",
  },
  {
    title: "Partnership",
    description: "Trusted collaborations for mutual success",
    icon: "🤝",
  },
]

export function WhyAppGuts() {
  return (
    <section className="border-t border-border/40 px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <ScrollReveal>
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-4xl font-bold text-foreground">Why App Guts?</h2>
            <p className="text-lg text-muted-foreground">
             App Guts has merged with Alprosel Tech to form a stronger, unified brand focused on delivering innovative and scalable digital solutions for modern users.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid gap-8 md:grid-cols-3">
          {reasons.map((reason, index) => (
            <ScrollReveal key={reason.title} delay={index * 0.1}>
              <motion.div
                whileHover={{ y: -5 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
                className="rounded-lg border border-border/40 bg-card/50 p-8 backdrop-blur-sm hover:shadow-lg hover:shadow-primary/10 transition-shadow text-center"
              >
                <div className="mb-4 text-5xl">{reason.icon}</div>
                <h3 className="mb-2 text-xl font-semibold text-foreground">{reason.title}</h3>
                <p className="text-muted-foreground">{reason.description}</p>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
