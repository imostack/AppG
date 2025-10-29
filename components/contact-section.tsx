"use client"

import type React from "react"

import { motion } from "framer-motion"
import { ScrollReveal } from "@/components/scroll-reveal"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useState } from "react"

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
    setFormData({ name: "", email: "", message: "" })
  }

  return (
    <section id="contact" className="border-t border-border/40 px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-2xl">
        <ScrollReveal>
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-4xl font-bold text-foreground">Let's Build Something Great</h2>
            <p className="mb-2 text-lg text-muted-foreground">
              Need a custom app or partnership opportunity? Let's talk.
            </p>
            <p className="text-lg font-semibold text-primary">hello@appguts.com</p>
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="rounded-lg border border-border/40 bg-card/50 p-8 backdrop-blur-sm"
          >
            <div className="mb-6">
              <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                Name
              </label>
              <Input
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your name"
                required
                className="bg-background/50 border-border/40"
              />
            </div>

            <div className="mb-6">
              <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                Email
              </label>
              <Input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="your@email.com"
                required
                className="bg-background/50 border-border/40"
              />
            </div>

            <div className="mb-6">
              <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                Message
              </label>
              <Textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell us about your project..."
                required
                className="bg-background/50 border-border/40 min-h-32"
              />
            </div>

            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button type="submit" size="lg" className="w-full">
                Send Message
              </Button>
            </motion.div>
          </motion.form>
        </ScrollReveal>

        <ScrollReveal>
          <div className="mt-12 flex justify-center gap-6">
            <motion.a
              href="#"
              whileHover={{ scale: 1.2 }}
              className="text-2xl text-muted-foreground hover:text-primary transition-colors"
              aria-label="LinkedIn"
            >
              in
            </motion.a>
            <motion.a
              href="#"
              whileHover={{ scale: 1.2 }}
              className="text-2xl text-muted-foreground hover:text-primary transition-colors"
              aria-label="X"
            >
              𝕏
            </motion.a>
            <motion.a
              href="#"
              whileHover={{ scale: 1.2 }}
              className="text-2xl text-muted-foreground hover:text-primary transition-colors"
              aria-label="Instagram"
            >
              📷
            </motion.a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
