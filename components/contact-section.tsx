"use client"

import type React from "react"

import { Linkedin, Instagram } from "lucide-react"
import { motion } from "framer-motion"
import { ScrollReveal } from "@/components/scroll-reveal"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { PaperAirplaneIcon } from "@heroicons/react/24/outline"
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
    <section id="contact" className="relative border-t border-border/40 px-4 py-20 sm:py-24 lg:py-28 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-4xl">
        <ScrollReveal>
          <div className="mb-16">
            <h2 className="mb-8 text-5xl sm:text-6xl font-bold tracking-tight text-foreground">
              Get in touch
            </h2>
            <p className="text-xl sm:text-2xl text-muted-foreground font-light leading-relaxed mb-8">
              Ready to get started? Tell us about your project and we'll help you find the right solution.
            </p>
            <Button size="lg" asChild className="bg-gradient-to-r from-primary to-purple-700 hover:from-primary/90 hover:to-purple-700/90 shadow-lg shadow-primary/20 text-base px-8 h-12">
              <a href="https://onboarding.appguts.com" target="_blank" rel="noopener noreferrer">
                Start Your Project
                <PaperAirplaneIcon className="ml-2 h-5 w-5" />
              </a>
            </Button>
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <div className="flex flex-col sm:flex-row gap-8 text-muted-foreground">
            <div className="flex-1">
              <h3 className="text-lg font-semibold text-foreground mb-2">Follow us</h3>
              <div className="space-y-2">
                <a href="https://www.linkedin.com/company/app-guts-limited/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-foreground transition-colors">
                  <Linkedin className="w-5 h-5" />
                  <span>LinkedIn</span>
                </a>
                <a href="https://www.instagram.com/appguts" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-foreground transition-colors">
                  <Instagram className="w-5 h-5" />
                  <span>Instagram</span>
                </a>
              </div>
            </div>
            <div className="flex-1">
              <h3 className="text-lg font-semibold text-foreground mb-2">Support</h3>
              <a href="mailto:support@appguts.com" className="hover:text-foreground transition-colors">
                support@appguts.com
              </a>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
