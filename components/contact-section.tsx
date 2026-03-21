"use client"

import { Mail, ExternalLink } from "lucide-react"

function LinkedInIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  )
}

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  )
}
import { ScrollReveal } from "@/components/scroll-reveal"

export function ContactSection() {
  return (
    <section
      id="contact"
      className="relative border-t border-border/40 px-4 py-20 sm:py-24 lg:py-28 sm:px-6 lg:px-8"
    >
      <div className="mx-auto max-w-7xl">
        <ScrollReveal>
          <div className="mb-14">
            <p className="text-xs font-semibold text-muted-foreground uppercase tracking-widest mb-4">
              Get in touch
            </p>
            <h2 className="text-5xl sm:text-6xl font-bold tracking-tight text-foreground max-w-2xl leading-[1.1]">
              Let&apos;s talk
            </h2>
          </div>
        </ScrollReveal>

        <div className="grid sm:grid-cols-2 gap-6 max-w-3xl">

          {/* Path 1 — Organisers & Attendees */}
          <ScrollReveal delay={0.1}>
            <a
              href="https://eventskona.com"
              target="_blank"
              rel="noopener noreferrer"
              className="group block rounded-2xl border border-border/50 bg-background p-7 hover:border-[#7c3aed]/40 hover:shadow-lg hover:shadow-[#7c3aed]/5 transition-all duration-300"
            >
              <div className="w-10 h-10 rounded-xl bg-[#7c3aed]/10 flex items-center justify-center mb-5">
                <span className="text-lg">🎟</span>
              </div>
              <h3 className="text-base font-bold text-foreground mb-2">
                Event organisers &amp; attendees
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-5">
                Want to host or attend events on Events Kona? Join the waitlist — Port Harcourt
                launches April 2026.
              </p>
              <div className="flex items-center gap-1.5 text-sm font-semibold text-[#7c3aed]">
                Join the waitlist
                <ExternalLink className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </div>
            </a>
          </ScrollReveal>

          {/* Path 2 — Everyone else */}
          <ScrollReveal delay={0.2}>
            <a
              href="mailto:hello@appguts.com"
              className="group block rounded-2xl border border-border/50 bg-background p-7 hover:border-border hover:shadow-lg hover:shadow-black/5 transition-all duration-300"
            >
              <div className="w-10 h-10 rounded-xl bg-muted flex items-center justify-center mb-5">
                <Mail className="w-5 h-5 text-muted-foreground" />
              </div>
              <h3 className="text-base font-bold text-foreground mb-2">
                Partnerships, press &amp; investors
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-5">
                Building something that aligns with what we&apos;re doing? We&apos;re open to
                conversations that move Africa&apos;s tech ecosystem forward.
              </p>
              <div className="flex items-center gap-1.5 text-sm font-semibold text-foreground">
                hello@appguts.com
                <ExternalLink className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </div>
            </a>
          </ScrollReveal>

        </div>

        {/* Social + support row */}
        <ScrollReveal delay={0.3}>
          <div className="mt-14 pt-10 border-t border-border/40 flex flex-wrap items-center gap-6 text-sm text-muted-foreground">
            <a
              href="https://www.linkedin.com/company/app-guts-limited/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-foreground transition-colors"
            >
              <LinkedInIcon className="w-4 h-4" />
              LinkedIn
            </a>
            <a
              href="https://www.instagram.com/appguts"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-foreground transition-colors"
            >
              <InstagramIcon className="w-4 h-4" />
              Instagram
            </a>
            <span className="text-border">·</span>
            <a
              href="mailto:support@appguts.com"
              className="hover:text-foreground transition-colors"
            >
              support@appguts.com
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
