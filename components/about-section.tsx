"use client"

import { ScrollReveal } from "@/components/scroll-reveal"

const milestones = [
  {
    year: "2024",
    label: "Idea born in Port Harcourt",
    detail: "Watched local event organisers struggle with tools built for other markets.",
    done: true,
  },
  {
    year: "2025",
    label: "Events Kona built from scratch",
    detail: "Designed and engineered entirely in-house for Nigerian organisers.",
    done: true,
  },
  {
    year: "Mar 6, 2026",
    label: "Waitlist opens",
    detail: "First organiser sign-ups. Port Harcourt goes first.",
    done: true,
  },
  {
    year: "Apr 2026",
    label: "Final testing",
    detail: "Organiser cohort testing underway. Public launch coming soon.",
    done: false,
    active: true,
  },
  {
    year: "2026 →",
    label: "Next platform",
    detail: "Events Kona is one of several platforms we're building for African communities.",
    done: false,
  },
]

export function AboutSection() {
  return (
    <section
      id="about"
      className="relative border-t border-border/40 px-4 py-20 sm:py-24 lg:py-28 sm:px-6 lg:px-8"
    >
      <div className="mx-auto max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* ── Left: story copy ── */}
          <ScrollReveal>
            <div>
              <h2 className="mb-8 text-5xl sm:text-6xl font-bold tracking-tight text-foreground">
                Our Story
              </h2>

              <div className="space-y-6 text-lg sm:text-xl text-muted-foreground leading-relaxed">
                <p>
                  App Guts is a technology company building SaaS platforms and digital tools
                  for African communities, creators, and businesses.
                </p>
                <p>
                  Our flagship product, Events Kona, is an event discovery, ticketing, and
                  management platform launching in Port Harcourt, Nigeria — built to work the
                  way Nigerian organisers actually work, not adapted from markets that look
                  nothing like ours.
                </p>
                <p>
                  Events Kona is the first platform in a broader vision to build infrastructure
                  that powers how African communities connect, organise, and grow online.
                </p>
              </div>

              {/* 3 human stats */}
              <div className="mt-12 grid grid-cols-3 gap-8 border-t border-border/40 pt-10">
                <div>
                  <div className="text-3xl sm:text-4xl font-bold text-foreground mb-1">2024</div>
                  <div className="text-sm text-muted-foreground">Year Founded</div>
                </div>
                <div>
                  <div className="text-3xl sm:text-4xl font-bold text-foreground mb-1">PHC</div>
                  <div className="text-sm text-muted-foreground">Built in Port Harcourt</div>
                </div>
                <div>
                  <div className="text-3xl sm:text-4xl font-bold text-foreground mb-1">100%</div>
                  <div className="text-sm text-muted-foreground">African-built</div>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* ── Right: milestone timeline ── */}
          <ScrollReveal delay={0.2}>
            <div className="relative">

              {/* Glow */}
              <div className="absolute -inset-4 bg-gradient-to-br from-indigo-500/8 via-purple-500/6 to-transparent rounded-3xl blur-2xl pointer-events-none" />

              {/* Timeline card */}
              <div className="relative rounded-2xl border border-border/50 bg-background shadow-xl shadow-black/5 overflow-hidden">

                {/* Card header */}
                <div className="px-6 py-4 border-b border-border/40 bg-muted/20">
                  <p className="text-xs font-semibold text-muted-foreground uppercase tracking-widest">
                    How we got here
                  </p>
                </div>

                {/* Milestones */}
                <div className="px-6 py-5 space-y-0">
                  {milestones.map((m, i) => (
                    <div key={i} className="relative flex gap-4">
                      {/* Vertical line */}
                      {i < milestones.length - 1 && (
                        <div className="absolute left-[13px] top-7 bottom-0 w-px bg-border/60" />
                      )}

                      {/* Dot */}
                      <div className="shrink-0 mt-1 relative z-10">
                        {m.done ? (
                          <div className="w-7 h-7 rounded-full bg-[#7c3aed]/10 border border-[#7c3aed]/30 flex items-center justify-center">
                            <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                              <path
                                d="M2 5.5l2 2 4-4"
                                stroke="#7c3aed"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>
                          </div>
                        ) : m.active ? (
                          <div className="w-7 h-7 rounded-full bg-indigo-500/15 border-2 border-indigo-500 flex items-center justify-center">
                            <div className="w-2 h-2 rounded-full bg-indigo-500 animate-pulse" />
                          </div>
                        ) : (
                          <div className="w-7 h-7 rounded-full bg-muted border border-border/60 flex items-center justify-center">
                            <div className="w-2 h-2 rounded-full bg-border" />
                          </div>
                        )}
                      </div>

                      {/* Content */}
                      <div className={`pb-6 flex-1 ${i === milestones.length - 1 ? "pb-2" : ""}`}>
                        <div className="flex items-center gap-2 flex-wrap mb-0.5">
                          <span
                            className={`text-xs font-mono font-semibold ${
                              m.active
                                ? "text-indigo-500"
                                : m.done
                                ? "text-[#7c3aed]"
                                : "text-muted-foreground"
                            }`}
                          >
                            {m.year}
                          </span>
                          {m.active && (
                            <span className="text-[10px] bg-indigo-500/10 text-indigo-500 font-semibold px-2 py-0.5 rounded-full">
                              Next
                            </span>
                          )}
                        </div>
                        <p
                          className={`text-sm font-semibold leading-snug mb-0.5 ${
                            m.done || m.active ? "text-foreground" : "text-muted-foreground"
                          }`}
                        >
                          {m.label}
                        </p>
                        <p className="text-xs text-muted-foreground leading-relaxed">
                          {m.detail}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Floating location badge */}
              <div className="absolute -bottom-4 -left-4 bg-background border border-border/60 rounded-xl shadow-lg px-4 py-2.5 flex items-center gap-2.5">
                <span className="text-lg">🇳🇬</span>
                <div>
                  <p className="text-xs font-semibold text-foreground leading-tight">Port Harcourt, Nigeria</p>
                  <p className="text-[10px] text-muted-foreground">Where it all started</p>
                </div>
              </div>

            </div>
          </ScrollReveal>

        </div>
      </div>
    </section>
  )
}
