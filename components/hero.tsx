"use client"

import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { ArrowRightIcon } from "@heroicons/react/24/outline"

export function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    element?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section
      id="home"
      className="relative overflow-hidden px-4 py-20 sm:py-24 lg:py-28 sm:px-6 lg:px-8"
    >
      {/* Background orbs */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-0 right-0 h-[300px] w-[300px] lg:h-[500px] lg:w-[500px] rounded-full bg-primary/5 blur-3xl" />
        <div className="absolute bottom-0 left-0 h-[300px] w-[300px] lg:h-[400px] lg:w-[400px] rounded-full bg-purple-500/5 blur-3xl" />
      </div>

      <div className="mx-auto max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* ── Left: headline + CTAs ── */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center lg:text-left"
          >
            <h1 className="mb-8 text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-foreground leading-[1.1]">
              Building platforms
              <br />
              <span className="text-muted-foreground">that power communities</span>
            </h1>

            <p className="mb-12 text-lg sm:text-xl text-muted-foreground lg:max-w-lg font-light leading-relaxed">
              App Guts develops modern SaaS platforms for creators, organizers, and businesses.
              Events Kona is our flagship — event discovery, ticketing, and community management
              built for Africa.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center mb-12">
              <Button
                size="lg"
                onClick={() => scrollToSection("products")}
                className="bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white px-8 h-12 text-base font-medium shadow-lg shadow-indigo-500/20"
              >
                Explore Events Kona
                <ArrowRightIcon className="ml-2 h-4 w-4" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => scrollToSection("about")}
                className="px-8 h-12 text-base font-medium"
              >
                Our Story
              </Button>
            </div>

            <div className="flex flex-wrap justify-center lg:justify-start items-center gap-6 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-indigo-500 animate-pulse" />
                <span className="font-medium">Events Kona — Waitlist open Mar 6</span>
              </div>
            </div>
          </motion.div>

          {/* ── Right: Events Kona organiser dashboard mockup ── */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative hidden lg:block"
          >
            {/* Glow layer */}
            <div className="absolute -inset-4 bg-gradient-to-br from-indigo-500/10 via-purple-500/8 to-transparent rounded-3xl blur-2xl pointer-events-none" />

            {/* ── Dashboard frame ── */}
            <div className="relative rounded-2xl border border-border/50 bg-background shadow-2xl shadow-indigo-500/10 overflow-hidden">

              {/* Browser chrome */}
              <div className="flex items-center gap-2 px-4 py-3 border-b border-border/40 bg-muted/20">
                <div className="flex gap-1.5 shrink-0">
                  <div className="w-3 h-3 rounded-full bg-red-400/50" />
                  <div className="w-3 h-3 rounded-full bg-yellow-400/50" />
                  <div className="w-3 h-3 rounded-full bg-green-400/50" />
                </div>
                <div className="flex-1 mx-2 px-3 py-1 rounded-md bg-muted text-[11px] text-muted-foreground font-mono tracking-tight">
                  eventskona.com/my-events
                </div>
              </div>

              {/* App header bar */}
              <div className="px-4 py-3 bg-[#7c3aed] flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded-md bg-white/20 flex items-center justify-center">
                    <div className="w-3 h-3 rounded-sm bg-white/80" />
                  </div>
                  <span className="text-white font-bold text-sm tracking-tight">Events Kona</span>
                </div>
                <span className="text-white/60 text-xs">Organiser Dashboard</span>
              </div>

              {/* Dashboard body */}
              <div className="p-5 space-y-4">

                {/* Event title + status */}
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-[10px] text-muted-foreground uppercase tracking-wide mb-1">Active Event</p>
                    <h3 className="font-bold text-foreground text-sm leading-snug">
                      PHC Tech Summit 2026
                    </h3>
                    <p className="text-[11px] text-muted-foreground mt-0.5">
                      Apr 12 · Trans Amadi, Port Harcourt
                    </p>
                  </div>
                  <div className="flex items-center gap-1.5 bg-emerald-500/10 text-emerald-600 text-[11px] font-semibold px-2.5 py-1 rounded-full shrink-0">
                    <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                    Live
                  </div>
                </div>

                {/* 3 stat cards */}
                <div className="grid grid-cols-3 gap-2">
                  <div className="rounded-xl bg-muted/40 p-3 text-center">
                    <p className="text-sm font-bold text-foreground">₦2.3M</p>
                    <p className="text-[10px] text-muted-foreground mt-0.5">Revenue</p>
                  </div>
                  <div className="rounded-xl bg-muted/40 p-3 text-center">
                    <p className="text-sm font-bold text-foreground">322</p>
                    <p className="text-[10px] text-muted-foreground mt-0.5">Tickets Sold</p>
                  </div>
                  <div className="rounded-xl bg-[#7c3aed]/10 p-3 text-center border border-[#7c3aed]/20">
                    <p className="text-sm font-bold text-[#7c3aed]">₦185k</p>
                    <p className="text-[10px] text-muted-foreground mt-0.5">Payout Ready</p>
                  </div>
                </div>

                {/* Capacity bar */}
                <div>
                  <div className="flex justify-between text-[11px] mb-1.5">
                    <span className="text-muted-foreground">Capacity</span>
                    <span className="font-semibold text-foreground">322 / 500 · 64% full</span>
                  </div>
                  <div className="h-2 w-full rounded-full bg-muted overflow-hidden">
                    <div className="h-full w-[64%] rounded-full bg-gradient-to-r from-indigo-500 to-purple-500" />
                  </div>
                </div>

                {/* Ticket type breakdown */}
                <div className="space-y-2.5 pt-1 border-t border-border/30">
                  <p className="text-[10px] text-muted-foreground uppercase tracking-wide">Ticket Breakdown</p>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-[#7c3aed]" />
                      <span className="text-xs font-medium text-foreground">VIP Ticket</span>
                    </div>
                    <div className="flex items-center gap-4 text-xs">
                      <span className="text-muted-foreground">35 sold</span>
                      <span className="font-semibold text-foreground w-16 text-right">₦25,000</span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-indigo-400" />
                      <span className="text-xs font-medium text-foreground">Regular Entry</span>
                    </div>
                    <div className="flex items-center gap-4 text-xs">
                      <span className="text-muted-foreground">287 sold</span>
                      <span className="font-semibold text-foreground w-16 text-right">₦5,000</span>
                    </div>
                  </div>
                </div>

                {/* Payout CTA row */}
                <div className="flex items-center justify-between pt-1 border-t border-border/30">
                  <span className="text-[11px] text-muted-foreground">Next payout after event closes</span>
                  <div className="text-[11px] font-semibold text-[#7c3aed] flex items-center gap-1">
                    Withdraw ₦185,000
                    <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                      <path d="M2 5h6M5 2l3 3-3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                </div>

              </div>
            </div>

            {/* ── Floating "ticket sold" notification ── */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 1.1 }}
              className="absolute -bottom-5 -right-5 z-10 bg-background border border-border/60 rounded-xl shadow-xl shadow-black/10 p-3 w-52"
            >
              <div className="flex items-start gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-[#7c3aed]/10 flex items-center justify-center shrink-0 text-base">
                  🎟
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-xs font-semibold text-foreground leading-tight">New ticket sold</p>
                  <p className="text-[10px] text-muted-foreground mt-0.5 truncate">
                    Tunde A. — VIP · ₦25,000
                  </p>
                  <p className="text-[10px] text-indigo-500 mt-0.5 font-medium">Just now</p>
                </div>
                <div className="w-4 h-4 rounded-full bg-emerald-500/15 flex items-center justify-center shrink-0 mt-0.5">
                  <svg width="8" height="8" viewBox="0 0 8 8" fill="none">
                    <path d="M1.5 4l2 2 3-3" stroke="#22c55e" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </div>
            </motion.div>

          </motion.div>
        </div>
      </div>
    </section>
  )
}
