"use client"

import { motion } from "framer-motion"
import { ScrollReveal } from "@/components/scroll-reveal"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export function AboutSection() {
  return (
    <section id="about" className="border-t border-border/40 px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-4xl">
        <ScrollReveal>
          <div className="text-center">
            <h2 className="mb-6 text-4xl font-bold text-foreground">About App Guts</h2>
            <p className="mb-8 text-lg text-muted-foreground leading-relaxed">
              App Guts Limited is a forward-thinking SaaS company expanding its reach as Alprosel Tech integrates into its operations. This transition unites proven technical expertise with a product-driven vision to deliver scalable, intelligent digital solutions.
            </p>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button asChild>
                <Link href="#">Learn More About the Merger</Link>
              </Button>
            </motion.div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
