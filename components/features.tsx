"use client"

import { motion } from "framer-motion"
import { ScrollReveal } from "@/components/scroll-reveal"
import { Button } from "@/components/ui/button"

const products = [
  {
    title: "AccessRA",
    description:
      "A powerful partner platform offering multiple SaaS tools including eCommerce, school management, HR, and POS.",
    icon: "🚀",
  },
  {
    title: "Events Kona",
    description: "A smart and simple event listing platform helping people discover and share experiences.",
    icon: "🎉",
  },
  {
    title: "Custom Apps on Request",
    description: "Need something unique? We design and build tailored digital products that fit your business goals.",
    icon: "⚙️",
  },
]

export function Features() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    element?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section id="products" className="border-t border-border/40 px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <ScrollReveal>
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-4xl font-bold text-foreground">Our Products & Partners</h2>
            <p className="text-lg text-muted-foreground">Innovative solutions built for your success</p>
          </div>
        </ScrollReveal>

        <div className="grid gap-8 md:grid-cols-3">
          {products.map((product, index) => (
            <ScrollReveal key={product.title} delay={index * 0.1}>
              <motion.div
                whileHover={{ y: -5, borderColor: "var(--color-primary)" }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
                className="rounded-lg border border-border/40 bg-card/50 p-6 backdrop-blur-sm hover:shadow-lg hover:shadow-primary/10 transition-shadow flex flex-col h-full"
              >
                <div className="mb-4 text-4xl">{product.icon}</div>
                <h3 className="mb-2 text-lg font-semibold text-foreground">{product.title}</h3>
                <p className="mb-6 text-muted-foreground flex-grow">{product.description}</p>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button
                    variant="outline"
                    className="w-full bg-transparent"
                    onClick={() => {
                      if (product.title === "Custom Apps on Request") {
                        scrollToSection("contact")
                      }
                    }}
                    asChild={product.title !== "Custom Apps on Request"}
                  >
                    {product.title === "AccessRA" ? (
                      <a href="https://accessra.com/" target="_blank" rel="noopener noreferrer">
                        Visit AccessRA
                      </a>
                    ) : product.title === "Events Kona" ? (
                      <a href="#" target="_blank" rel="noopener noreferrer">
                        Explore Events Kona
                      </a>
                    ) : (
                      <span>Request a Custom App</span>
                    )}
                  </Button>
                </motion.div>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
