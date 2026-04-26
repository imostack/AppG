import type { Metadata } from "next"
import type { ReactNode } from "react"
import { notFound } from "next/navigation"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ScrollReveal } from "@/components/scroll-reveal"
import { Button } from "@/components/ui/button"
import { ArrowLeftIcon, ArrowRightIcon, CalendarDaysIcon, MapPinIcon, UsersIcon, BellIcon } from "lucide-react"
import Link from "next/link"

// ─── Article metadata (for SEO / OG) ─────────────────────────────────────────

const articleMeta: Record<string, { title: string; description: string }> = {
  "events-kona-launch-2026": {
    title: "Events Kona Is Live",
    description:
      "Events Kona has officially launched in Port Harcourt, Nigeria. Create events, sell tickets, and manage your audience — get started free today.",
  },
  "sell-event-tickets-online-nigeria": {
    title: "How to Sell Event Tickets Online in Nigeria (2026 Guide)",
    description:
      "Most Nigerian event organisers still rely on WhatsApp broadcasts and manual bank transfers. Here's why that's costing you — and how to do it properly.",
  },
  "events-kona-organiser-guide": {
    title: "Events Kona for Organisers: The Complete Guide",
    description:
      "Everything you need to know about creating events, setting up ticket types, managing capacity, and getting paid on Events Kona.",
  },
  "why-port-harcourt": {
    title: "Why We Started in Port Harcourt",
    description:
      "Port Harcourt has one of Nigeria's most vibrant event scenes. Here's why it was the only right place to begin — and what that means for how we build.",
  },
  "what-we-saw-at-nigerian-events": {
    title: "What We Saw at Nigerian Events Changed Everything",
    description:
      "We attended major events across Nigeria to study the ticketing experience. A Paystack receipt as a ticket. No QR codes. No validation. That night confirmed exactly why Events Kona needed to exist.",
  },
  "mayor-and-12-kings-2026": {
    title: "Mayor and the 12 Kings 2026: Port Harcourt's Biggest Comedy Night",
    description:
      "Easter Monday, April 6, 2026. EUI Centre, GRA, Port Harcourt. 16 comedians, a packed house, a red carpet that generated real buzz, and the South-South at its finest.",
  },
  "past-collaborations": {
    title: "Past Collaborations",
    description:
      "Previous partnerships and initiatives from App Guts, including the AccessRA collaboration.",
  },
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const meta = articleMeta[slug]
  if (!meta) return {}

  const url = `https://appguts.com/news/${slug}`

  return {
    title: meta.title,
    description: meta.description,
    alternates: { canonical: url },
    openGraph: {
      title: `${meta.title} | App Guts`,
      description: meta.description,
      url,
      siteName: "App Guts",
      images: [
        {
          url: "/og-image.png",
          width: 1500,
          height: 498,
          alt: meta.title,
        },
      ],
      locale: "en_NG",
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: `${meta.title} | App Guts`,
      description: meta.description,
      images: ["/og-image.png"],
    },
  }
}

// ─── Article content map ─────────────────────────────────────────────────────

const newsContent: Record<string, {
  title: string
  subtitle: string
  badge: string
  badgeColor: string
  Content: () => ReactNode
}> = {
  "events-kona-launch-2026": {
    title: "Events Kona Is Live",
    subtitle: "We launched in Port Harcourt, Nigeria. Create events, sell tickets, and grow your audience — starting today.",
    badge: "Launch",
    badgeColor: "bg-indigo-500/10 text-indigo-600 dark:text-indigo-400",
    Content: EventsKonaLaunchContent,
  },
  "sell-event-tickets-online-nigeria": {
    title: "How to Sell Event Tickets Online in Nigeria (2026 Guide)",
    subtitle: "Most Nigerian event organisers still rely on WhatsApp and bank transfers. Here's why that's costing you — and how to do it properly.",
    badge: "Guide",
    badgeColor: "bg-indigo-500/10 text-indigo-600 dark:text-indigo-400",
    Content: SellTicketsNigeriaContent,
  },
  "events-kona-organiser-guide": {
    title: "Events Kona for Organisers: The Complete Guide",
    subtitle: "Everything you need to create events, manage tickets, track revenue, and get paid on Events Kona.",
    badge: "Guide",
    badgeColor: "bg-indigo-500/10 text-indigo-600 dark:text-indigo-400",
    Content: OrganiserGuideContent,
  },
  "why-port-harcourt": {
    title: "Why We Started in Port Harcourt",
    subtitle: "Port Harcourt has one of Nigeria's most vibrant event scenes. Here's why it was the only right place to begin.",
    badge: "Story",
    badgeColor: "bg-purple-500/10 text-purple-600 dark:text-purple-400",
    Content: WhyPortHarcourtContent,
  },
  "what-we-saw-at-nigerian-events": {
    title: "What We Saw at Nigerian Events Changed Everything",
    subtitle: "We attended major events across Nigeria to study the ticketing experience. A Paystack receipt as a ticket. That night confirmed exactly why Events Kona needed to exist.",
    badge: "Story",
    badgeColor: "bg-purple-500/10 text-purple-600 dark:text-purple-400",
    Content: WhatWeSawContent,
  },
  "mayor-and-12-kings-2026": {
    title: "Mayor and the 12 Kings 2026: Port Harcourt's Biggest Comedy Night",
    subtitle: "Easter Monday, April 6, 2026. EUI Centre, GRA. 16 comedians, a packed house, and the South-South at its finest.",
    badge: "Event Recap",
    badgeColor: "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400",
    Content: MayorAndKingsContent,
  },
  "past-collaborations": {
    title: "Past Collaborations",
    subtitle: "Our previous partnership initiatives",
    badge: "Archived",
    badgeColor: "bg-muted text-muted-foreground",
    Content: PastCollaborationsContent,
  },
}

// ─── Events Kona Launch Article ───────────────────────────────────────────────

function EventsKonaLaunchContent() {
  const milestones = [
    {
      icon: BellIcon,
      date: "March 2026",
      label: "Waitlist Opened",
      description: "Early organisers signed up ahead of launch. Port Harcourt led the way.",
    },
    {
      icon: CalendarDaysIcon,
      date: "April 2026",
      label: "Platform Launched",
      description: "Events Kona is officially live — event discovery, ticketing, and community features fully available in Port Harcourt.",
    },
    {
      icon: MapPinIcon,
      date: "Starting in",
      label: "Port Harcourt, Nigeria",
      description: "Our first city. We are building deep roots in the Port Harcourt community before expanding.",
    },
  ]

  return (
    <div className="max-w-3xl mx-auto space-y-16">

      {/* Intro */}
      <ScrollReveal>
        <div className="space-y-5 text-lg text-muted-foreground leading-relaxed">
          <p>
            After months of development and private testing, we are ready to open Events Kona to the public.
            The platform has been rebuilt from the ground up — a comprehensive event discovery and ticketing
            experience built specifically for communities in Nigeria and across Africa.
          </p>
          <p>
            We are starting where we are: <strong className="text-foreground">Port Harcourt, Nigeria</strong>.
            Our goal is not to spread thin across many cities at once — it is to build something people
            genuinely rely on, right here at home, and grow from there.
          </p>
        </div>
      </ScrollReveal>

      {/* Timeline / milestones */}
      <ScrollReveal delay={0.1}>
        <div>
          <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-8">Key Dates</h2>
          <div className="space-y-6">
            {milestones.map((m, i) => {
              const Icon = m.icon
              return (
                <div key={i} className="flex gap-5 p-6 rounded-2xl border border-border/40 bg-muted/10">
                  <div className="flex-shrink-0 mt-1">
                    <div className="p-2.5 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600">
                      <Icon className="h-5 w-5 text-white" />
                    </div>
                  </div>
                  <div>
                    <div className="text-xs font-medium text-indigo-500 dark:text-indigo-400 uppercase tracking-wider mb-1">
                      {m.date}
                    </div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">{m.label}</h3>
                    <p className="text-muted-foreground leading-relaxed">{m.description}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </ScrollReveal>

      {/* Waitlist details */}
      <ScrollReveal delay={0.15}>
        <div className="p-8 sm:p-10 rounded-2xl border border-indigo-500/20 bg-gradient-to-br from-indigo-500/5 via-purple-500/5 to-transparent">
          <div className="flex items-start gap-4 mb-6">
            <div className="p-2.5 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 flex-shrink-0 mt-0.5">
              <UsersIcon className="h-5 w-5 text-white" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-2">We&apos;re Live</h2>
              <p className="text-muted-foreground leading-relaxed">
                Events Kona is now publicly available at <strong className="text-foreground">eventskona.com</strong>.
                Create a free account to start hosting events or discover what&apos;s happening in Port Harcourt.
              </p>
            </div>
          </div>
          <div className="space-y-3 text-muted-foreground">
            <div className="flex items-start gap-3">
              <div className="w-1.5 h-1.5 rounded-full bg-indigo-500 mt-2 flex-shrink-0" />
              <p>Early beta organisers who tested the platform already have full access and can continue using it.</p>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-1.5 h-1.5 rounded-full bg-indigo-500 mt-2 flex-shrink-0" />
              <p>New users can sign up instantly at eventskona.com — no waitlist, no queue.</p>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-1.5 h-1.5 rounded-full bg-indigo-500 mt-2 flex-shrink-0" />
              <p>We remain fully compliant with the Nigeria Data Protection Act (NDPA) 2023 in how we handle user data.</p>
            </div>
          </div>
        </div>
      </ScrollReveal>

      {/* Why Port Harcourt */}
      <ScrollReveal delay={0.2}>
        <div>
          <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-5">Why Port Harcourt First</h2>
          <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
            <p>
              Port Harcourt is one of Nigeria&apos;s most vibrant cities — rich in culture, events, and
              community life. It is also home. Starting here means we can listen closely, iterate quickly,
              and build something that truly fits the community before expanding to other cities.
            </p>
            <p>
              Our plan is deliberate: get Port Harcourt right first, then grow. Events Kona is not just
              another app — it is infrastructure for communities. That kind of trust is built city by city,
              not overnight.
            </p>
          </div>
        </div>
      </ScrollReveal>

      {/* CTA */}
      <ScrollReveal delay={0.25}>
        <div className="text-center p-8 sm:p-10 rounded-2xl border border-border/40 bg-muted/10">
          <h2 className="text-2xl font-bold text-foreground mb-3">Start Today</h2>
          <p className="text-muted-foreground mb-8 max-w-lg mx-auto leading-relaxed">
            Events Kona is live and free to get started. Create your account, set up your first event, and start selling tickets today.
          </p>
          <Button size="lg" asChild className="bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white px-8 h-12">
            <a href="https://eventskona.com/signup" target="_blank" rel="noopener noreferrer">
              Get Started Free
              <ArrowRightIcon className="ml-2 h-4 w-4" />
            </a>
          </Button>
        </div>
      </ScrollReveal>

    </div>
  )
}

// ─── How to Sell Event Tickets Online in Nigeria ─────────────────────────────

function SellTicketsNigeriaContent() {
  return (
    <div className="max-w-3xl mx-auto space-y-14">

      <ScrollReveal>
        <div className="space-y-5 text-lg text-muted-foreground leading-relaxed">
          <p>
            If you have organised an event in Nigeria, you already know the routine: create a flyer, share it on WhatsApp, ask people to pay into your account, then manually confirm each payment and send a ticket screenshot back. Repeat 200 times.
          </p>
          <p>
            It works — until it doesn&apos;t. Payments go untracked. Fake payment screenshots circulate. Reconciliation takes hours the night before the event. And when it&apos;s over, you have no data about who actually attended.
          </p>
          <p>
            Online ticketing solves all of this. Here is what to look for, and how to get started.
          </p>
        </div>
      </ScrollReveal>

      <ScrollReveal delay={0.1}>
        <div>
          <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-6">Why the old way is costing you</h2>
          <div className="space-y-4">
            {[
              { title: "No attendee data", body: "WhatsApp-based ticketing gives you no record of who came, what they paid, or how they found you. Every event starts from zero." },
              { title: "Fraud and fake screenshots", body: "Manual payment confirmation means any edited screenshot can get someone through your door. It happens at almost every large event." },
              { title: "Time lost on reconciliation", body: "Hours spent matching bank alerts to WhatsApp messages the day before your event is time you should spend on logistics." },
              { title: "No capacity control", body: "Without a system enforcing ticket limits, events oversell. Turning people away at the door damages your reputation permanently." },
            ].map((item) => (
              <div key={item.title} className="flex gap-4 p-5 rounded-xl border border-border/40 bg-muted/10">
                <div className="w-1.5 h-1.5 rounded-full bg-destructive mt-2.5 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-foreground mb-1">{item.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{item.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </ScrollReveal>

      <ScrollReveal delay={0.15}>
        <div>
          <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-6">What to look for in a ticketing platform</h2>
          <div className="space-y-4">
            {[
              { title: "Nigerian payment support", body: "Your platform must accept Paystack, Flutterwave, or direct bank transfer. A platform that only accepts Stripe or PayPal is useless for most of your audience." },
              { title: "Payouts in Naira", body: "Revenue should hit your Nigerian bank account quickly — not sit in a foreign wallet requiring withdrawal. Look for platforms with fast, local payout cycles." },
              { title: "Mobile-first experience", body: "Most of your attendees will buy tickets on a phone. If the checkout experience is poor on mobile, you will lose sales." },
              { title: "QR code check-in", body: "Physical ticket stubs get lost and can be duplicated. QR code scanning at the door is faster, more secure, and gives you real attendance data." },
              { title: "Organiser dashboard", body: "You need real-time visibility into how many tickets have sold, revenue to date, and how close you are to capacity — not a spreadsheet export at the end." },
            ].map((item) => (
              <div key={item.title} className="flex gap-4 p-5 rounded-xl border border-border/40 bg-muted/10">
                <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-2.5 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-foreground mb-1">{item.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{item.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </ScrollReveal>

      <ScrollReveal delay={0.2}>
        <div className="p-8 sm:p-10 rounded-2xl border border-indigo-500/20 bg-gradient-to-br from-indigo-500/5 via-purple-500/5 to-transparent">
          <h2 className="text-2xl font-bold text-foreground mb-4">Events Kona is built for exactly this</h2>
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>
              Events Kona is a Nigerian-built event ticketing and discovery platform, live in Port Harcourt. It was designed around the way Nigerian organisers and attendees actually work — not adapted from a European or American product.
            </p>
            <ul className="space-y-2">
              {[
                "Payments via Paystack — Naira only, works on every Nigerian bank",
                "Payouts directly to your local bank account",
                "QR code tickets that scan instantly at the door",
                "Live dashboard: revenue, tickets sold, capacity, payout status",
                "Multiple ticket types — Regular, VIP, Early Bird, and more",
                "Free to get started — we only earn when you do (5.5% per ticket sold)",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-sm">
                  <div className="w-1.5 h-1.5 rounded-full bg-indigo-500 mt-1.5 flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </ScrollReveal>

      <ScrollReveal delay={0.25}>
        <div>
          <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-6">How to start selling tickets on Events Kona</h2>
          <div className="space-y-4">
            {[
              { step: "1", title: "Create a free account", body: "Sign up at eventskona.com. No monthly fee, no setup cost. Your account is ready instantly." },
              { step: "2", title: "Create your event", body: "Add your event name, date, location, description, and a cover image. Takes under five minutes." },
              { step: "3", title: "Set up your ticket types", body: "Create as many ticket types as you need — Regular, VIP, Early Bird. Set the price, capacity, and sale window for each." },
              { step: "4", title: "Share your event link", body: "Every event gets a dedicated page on Events Kona. Share the link anywhere — WhatsApp, Instagram, anywhere you already have an audience." },
              { step: "5", title: "Track sales in real time", body: "Watch your dashboard as tickets sell. See revenue, capacity, and individual orders as they come in." },
              { step: "6", title: "Check in attendees", body: "At the door, use the built-in QR scanner on any phone. Each ticket scans in under a second." },
              { step: "7", title: "Get paid", body: "After your event, your payout hits your Nigerian bank account. We keep 5.5% — you keep the rest." },
            ].map((item) => (
              <div key={item.step} className="flex gap-5 p-5 rounded-xl border border-border/40 bg-muted/10">
                <div className="w-8 h-8 rounded-lg bg-indigo-500/10 text-indigo-500 font-bold text-sm flex items-center justify-center flex-shrink-0">
                  {item.step}
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">{item.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{item.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </ScrollReveal>

      <ScrollReveal delay={0.3}>
        <div className="text-center p-8 sm:p-10 rounded-2xl border border-border/40 bg-muted/10">
          <h2 className="text-2xl font-bold text-foreground mb-3">Ready to stop chasing bank alerts?</h2>
          <p className="text-muted-foreground mb-8 max-w-lg mx-auto leading-relaxed">
            Events Kona is free to start and built for Nigerian organisers. Create your first event today.
          </p>
          <Button size="lg" asChild className="bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white px-8 h-12">
            <a href="https://eventskona.com/signup" target="_blank" rel="noopener noreferrer">
              Create Your First Event
              <ArrowRightIcon className="ml-2 h-4 w-4" />
            </a>
          </Button>
        </div>
      </ScrollReveal>

    </div>
  )
}

// ─── Events Kona Organiser Guide ──────────────────────────────────────────────

function OrganiserGuideContent() {
  return (
    <div className="max-w-3xl mx-auto space-y-14">

      <ScrollReveal>
        <div className="space-y-5 text-lg text-muted-foreground leading-relaxed">
          <p>
            Events Kona is built for event organisers in Nigeria. Whether you run concerts, conferences, comedy nights, community meetups, or corporate events — this guide covers everything you need to know to get the most out of the platform.
          </p>
        </div>
      </ScrollReveal>

      <ScrollReveal delay={0.1}>
        <div>
          <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-6">What organisers can do on Events Kona</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              { title: "Create events", body: "Set up your event with a title, date, venue, description, and cover image in minutes." },
              { title: "Multiple ticket types", body: "Create Regular, VIP, Early Bird, or any custom tier — each with its own price and capacity." },
              { title: "Capacity control", body: "Set hard limits per ticket type. The system stops selling automatically when you hit capacity." },
              { title: "Live sales dashboard", body: "See revenue, tickets sold, orders, and payout status updating in real time." },
              { title: "QR code check-in", body: "Every ticket generates a unique QR code. Scan attendees at the door with any smartphone." },
              { title: "Payouts to your bank", body: "Revenue goes directly to your Nigerian bank account after the event closes." },
            ].map((item) => (
              <div key={item.title} className="p-5 rounded-xl border border-border/40 bg-muted/10">
                <h3 className="font-semibold text-foreground mb-2">{item.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </ScrollReveal>

      <ScrollReveal delay={0.15}>
        <div>
          <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-6">Setting up your first event</h2>
          <div className="space-y-3">
            {[
              { step: "1", title: "Sign up as an organiser", body: "Create your account at eventskona.com. Your organiser profile is set up instantly." },
              { step: "2", title: 'Click "Create Event"', body: "Fill in the event name, date and time, venue address, and a description. Add a cover image to make your event page stand out." },
              { step: "3", title: "Add your ticket types", body: "Create at least one ticket type. Set the name (e.g. \"Regular Entry\"), price in Naira, and how many are available. Add more types for VIP, Early Bird, etc." },
              { step: "4", title: "Publish and share", body: "Once published, your event gets a unique URL on Events Kona. Share it directly — it works perfectly on mobile for your attendees." },
              { step: "5", title: "Monitor your dashboard", body: "Check in on sales anytime. Your dashboard shows revenue to date, tickets sold per type, capacity remaining, and individual orders." },
            ].map((item) => (
              <div key={item.step} className="flex gap-5 p-5 rounded-xl border border-border/40">
                <div className="w-8 h-8 rounded-lg bg-[#7c3aed]/10 text-[#7c3aed] font-bold text-sm flex items-center justify-center flex-shrink-0">
                  {item.step}
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">{item.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{item.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </ScrollReveal>

      <ScrollReveal delay={0.2}>
        <div>
          <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-5">How payments and payouts work</h2>
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>
              Attendees pay through Paystack — the most trusted payment gateway in Nigeria. Every major bank, card, and transfer method is supported. Attendees never need to leave Events Kona to complete their purchase.
            </p>
            <p>
              Events Kona charges <strong className="text-foreground">5.5% per ticket sold</strong>. There are no monthly fees, no listing fees, and no setup costs. You only pay when you earn.
            </p>
            <p>
              After your event closes, your payout is processed to your registered Nigerian bank account. You can track your payout status directly from your organiser dashboard.
            </p>
          </div>
        </div>
      </ScrollReveal>

      <ScrollReveal delay={0.25}>
        <div>
          <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-5">Checking in attendees on event day</h2>
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>
              Every ticket purchased on Events Kona comes with a unique QR code, sent to the attendee&apos;s email and available in their account. On event day, open the Scan page in your organiser account on any smartphone and scan each QR code as attendees arrive.
            </p>
            <p>
              The scanner validates each ticket in under a second and flags duplicates automatically. No special hardware needed — just your phone.
            </p>
          </div>
        </div>
      </ScrollReveal>

      <ScrollReveal delay={0.3}>
        <div className="text-center p-8 sm:p-10 rounded-2xl border border-border/40 bg-muted/10">
          <h2 className="text-2xl font-bold text-foreground mb-3">Start organising on Events Kona</h2>
          <p className="text-muted-foreground mb-8 max-w-lg mx-auto leading-relaxed">
            Free to get started. No monthly fees. Built for Nigerian organisers.
          </p>
          <Button size="lg" asChild className="bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white px-8 h-12">
            <a href="https://eventskona.com/signup" target="_blank" rel="noopener noreferrer">
              Create Your First Event
              <ArrowRightIcon className="ml-2 h-4 w-4" />
            </a>
          </Button>
        </div>
      </ScrollReveal>

    </div>
  )
}

// ─── Why Port Harcourt ────────────────────────────────────────────────────────

function WhyPortHarcourtContent() {
  return (
    <div className="max-w-3xl mx-auto space-y-14">

      <ScrollReveal>
        <div className="space-y-5 text-lg text-muted-foreground leading-relaxed">
          <p>
            When we decided to launch Events Kona, the first question was not what to build — it was where to start. Nigeria has over 200 million people and dozens of cities with active event cultures. We could have aimed for Lagos first. It would have been the obvious move.
          </p>
          <p>
            We chose Port Harcourt. Deliberately. Here is why.
          </p>
        </div>
      </ScrollReveal>

      <ScrollReveal delay={0.1}>
        <div>
          <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-5">Port Harcourt&apos;s event scene is bigger than people think</h2>
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>
              Port Harcourt is Nigeria&apos;s oil capital, but it is also a cultural hub. The city hosts concerts, comedy shows, tech conferences, cultural festivals, youth gatherings, and corporate events every single week. The Garden City has a thriving event-going culture that consistently punches above its weight.
            </p>
            <p>
              Yet most of these events are organised the same way they were ten years ago — WhatsApp flyers, bank transfer payments, and manual check-in. The infrastructure has not caught up with the energy.
            </p>
          </div>
        </div>
      </ScrollReveal>

      <ScrollReveal delay={0.15}>
        <div>
          <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-5">It is home</h2>
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>
              App Guts is a Port Harcourt company. Our team is here. Our networks are here. When we talk to event organisers, we are talking to people in our community — people we know, whose events we attend, whose frustrations we share firsthand.
            </p>
            <p>
              That proximity matters. It means we get feedback the same day. It means we can sit with an organiser before their event and fix a problem in real time. It means the platform improves at a pace that would be impossible if we started somewhere far from our roots.
            </p>
          </div>
        </div>
      </ScrollReveal>

      <ScrollReveal delay={0.2}>
        <div>
          <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-5">Why starting local is the right strategy</h2>
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>
              There is a temptation in tech to launch everywhere at once and figure out the details later. We rejected that approach. A platform that tries to serve all of Nigeria immediately ends up serving no one particularly well.
            </p>
            <p>
              By starting in Port Harcourt, we can focus our attention, build real relationships with organisers, respond to edge cases quickly, and establish trust before expanding. Every major event platform in the world — Eventbrite included — started in one city.
            </p>
            <p>
              We are not trying to be a smaller version of Eventbrite. We are building something from the ground up for African communities, starting in the city we know best.
            </p>
          </div>
        </div>
      </ScrollReveal>

      <ScrollReveal delay={0.25}>
        <div className="p-8 sm:p-10 rounded-2xl border border-purple-500/20 bg-gradient-to-br from-purple-500/5 to-transparent">
          <h2 className="text-2xl font-bold text-foreground mb-4">What comes next</h2>
          <div className="space-y-3 text-muted-foreground leading-relaxed">
            <p>
              Port Harcourt is where Events Kona proves itself. Once we have built something that organisers and attendees in this city genuinely rely on, we will expand — to Abuja, Lagos, and beyond.
            </p>
            <p>
              The goal is not speed. The goal is depth. A platform people trust takes longer to build than a platform people merely use. We are building for the long term.
            </p>
          </div>
        </div>
      </ScrollReveal>

      <ScrollReveal delay={0.3}>
        <div className="text-center p-8 sm:p-10 rounded-2xl border border-border/40 bg-muted/10">
          <h2 className="text-2xl font-bold text-foreground mb-3">Based in Port Harcourt? Join us.</h2>
          <p className="text-muted-foreground mb-8 max-w-lg mx-auto leading-relaxed">
            If you organise or attend events in Port Harcourt, Events Kona was built for you. Get started free today.
          </p>
          <Button size="lg" asChild className="bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white px-8 h-12">
            <a href="https://eventskona.com/signup" target="_blank" rel="noopener noreferrer">
              Get Started Free
              <ArrowRightIcon className="ml-2 h-4 w-4" />
            </a>
          </Button>
        </div>
      </ScrollReveal>

    </div>
  )
}

// ─── What We Saw at Nigerian Events ──────────────────────────────────────────

function WhatWeSawContent() {
  return (
    <div className="max-w-3xl mx-auto space-y-12">
      <ScrollReveal>
        <div className="space-y-5 text-lg text-muted-foreground leading-relaxed">
          <p>A packed venue somewhere in Nigeria. Hundreds of people queuing at the gate. And one of us standing there, being asked to show a Paystack receipt as a ticket.</p>
          <p>That moment is exactly why Events Kona exists.</p>
        </div>
      </ScrollReveal>

      <ScrollReveal delay={0.1}>
        <div>
          <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-5">The night in question</h2>
          <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
            <p>We attended several major events across Nigeria specifically to study the ticketing experience from start to finish — not just to enjoy the show, but to understand how organisers handle the full cycle: purchase, entry, validation. What we found consistently was eye-opening.</p>
          </div>
        </div>
      </ScrollReveal>

      <ScrollReveal delay={0.12}>
        <div>
          <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-5">Buying the ticket</h2>
          <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
            <p>The first hurdle was the website. Banner ads everywhere. Navigation that wasn&apos;t intuitive. Ticket categories that weren&apos;t clearly labelled. By the time the purchase was complete, the wrong ticket type had been bought — not because of carelessness, but because the interface made it genuinely difficult to tell the difference between a live attendance ticket and an online streaming ticket.</p>
            <p>This isn&apos;t a small problem. A confused buyer either abandons the purchase or buys the wrong thing. Both outcomes cost the organiser money and goodwill.</p>
          </div>
          <div className="mt-6 p-5 rounded-xl border border-destructive/20 bg-destructive/5 text-sm text-muted-foreground leading-relaxed">
            <strong className="text-foreground">The reality:</strong> Ticket purchase drop-off is one of the biggest revenue leaks for Nigerian event organisers. Every extra click, every confusing label, every slow-loading page costs a sale.
          </div>
        </div>
      </ScrollReveal>

      <ScrollReveal delay={0.14}>
        <div>
          <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-5">At the gate</h2>
          <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
            <p>At the venue there was no QR code scanning at the entrance. No digital verification. The check-in process was: show us your Paystack receipt.</p>
            <p>Think about what that means in practice. A Paystack receipt is a payment confirmation email. It is not a ticket. It has no event-specific validation. It cannot tell you if that receipt has already been used to enter. It cannot tell you which ticket tier the person purchased. It cannot detect if someone forwarded the same receipt to three friends.</p>
            <p>The organisers were essentially trusting that nobody would game the system. At a sold-out show with premium ticket prices, that is a significant risk.</p>
          </div>
        </div>
      </ScrollReveal>

      <ScrollReveal delay={0.16}>
        <div>
          <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-5">The realisation</h2>
          <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
            <p>Standing at that gate, watching the queue pile up, watching venue staff squint at phone screens trying to verify payment screenshots — we weren&apos;t frustrated. We were energised. Because everything we saw was a problem we had already solved.</p>
          </div>
          <div className="mt-6 p-5 rounded-xl border border-indigo-500/20 bg-indigo-500/5 text-sm text-muted-foreground leading-relaxed">
            <strong className="text-foreground">The distinction that matters:</strong> A Paystack receipt is proof of payment. A QR-validated ticket is proof of entitlement. They are not the same thing — and the difference is everything at scale.
          </div>
        </div>
      </ScrollReveal>

      <ScrollReveal delay={0.18}>
        <div>
          <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-6">What we built instead</h2>
          <p className="text-lg text-muted-foreground leading-relaxed mb-6">Events Kona was built from the ground up to fix every problem we observed:</p>
          <div className="space-y-3">
            {[
              "Clean ticket purchase flow — no ads, no clutter, clear ticket types with descriptions",
              "Every attendee gets a unique QR code ticket — emailed instantly after purchase",
              "Organisers scan QR codes at the gate using any phone — no special hardware",
              "Each QR code can only be validated once — no forwarding, no duplicates, no fraud",
              "Ticket tier displayed on scan — staff know immediately if someone is Regular, VIP, or VVIP",
              "Real-time attendee dashboard — see who has checked in, live, from anywhere",
            ].map((item) => (
              <div key={item} className="flex items-start gap-3 p-4 rounded-xl border border-border/40 bg-muted/10">
                <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-2 flex-shrink-0" />
                <p className="text-sm text-muted-foreground leading-relaxed">{item}</p>
              </div>
            ))}
          </div>
          <p className="mt-6 text-lg text-muted-foreground leading-relaxed">We are building the infrastructure that Nigerian events deserve. Port Harcourt is where we started. But the problem we are solving exists at every event, in every city, across Nigeria.</p>
        </div>
      </ScrollReveal>

      <ScrollReveal delay={0.2}>
        <div className="text-center p-8 sm:p-10 rounded-2xl border border-border/40 bg-muted/10">
          <h2 className="text-2xl font-bold text-foreground mb-3">We&apos;re just getting started</h2>
          <p className="text-muted-foreground mb-8 max-w-lg mx-auto leading-relaxed">Events Kona is live in Port Harcourt. Create events, sell tickets properly, and manage check-in with QR codes.</p>
          <Button size="lg" asChild className="bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white px-8 h-12">
            <a href="https://eventskona.com/signup" target="_blank" rel="noopener noreferrer">
              Get Started Free
              <ArrowRightIcon className="ml-2 h-4 w-4" />
            </a>
          </Button>
        </div>
      </ScrollReveal>
    </div>
  )
}

// ─── Mayor and the 12 Kings 2026 ─────────────────────────────────────────────

function MayorAndKingsContent() {
  const lineup = [
    "Edo Pikin", "Koboko Master", "Mudiaga", "Abarie.com", "Sarkin Dariya",
    "MC Monica", "Deacon Famous", "Busy Mouth", "MC George", "MC Lozy",
    "Prof Amani", "Cpt. Edet", "Amb Induz", "Mr Nice Guy", "Warri Bros", "Chrisbee",
  ]
  return (
    <div className="max-w-3xl mx-auto space-y-12">
      <ScrollReveal>
        <div className="space-y-5 text-lg text-muted-foreground leading-relaxed">
          <p>Port Harcourt shut down on Easter Monday. If you were anywhere near Sani Abacha Road, GRA on April 6, 2026, you already know. The Mayor and the 12 Kings returned for another year — and it delivered exactly what the South-South had been waiting for.</p>
        </div>
      </ScrollReveal>

      <ScrollReveal delay={0.1}>
        <div>
          <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-5">What is The Mayor and the 12 Kings?</h2>
          <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
            <p>The Mayor and the 12 Kings is an annual comedy and entertainment event hosted by KO Baba — the comedian and media personality widely known as the Mayor of Pitakwa. The concept is simple but powerful: gather the finest comedians from across Nigeria under one roof in Port Harcourt for a royal assembly of laughter.</p>
            <p>In 2026, the theme leaned fully into the royal concept — assembling 16 acts for a night the city will talk about for months. It is widely regarded as one of the biggest comedy shows in the South-South, consistently drawing thousands of attendees from Port Harcourt and beyond.</p>
          </div>
        </div>
      </ScrollReveal>

      <ScrollReveal delay={0.12}>
        <div>
          <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-5">The red carpet experience</h2>
          <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
            <p>The red carpet kicked off around 4:00 PM and was in full swing well past 7:45 PM when the main event finally got underway. And for many attendees, the red carpet was the event.</p>
            <p>The entrance area of EUI Centre was electric. Guests arrived dressed to impress — from tailored agbadas to sharp Western outfits — each one angling for their moment in front of the cameras. Photographers lined the carpet, interviewers moved through the crowd with microphones, and content creators captured everything in real time.</p>
            <p>The energy was less &apos;waiting to get in&apos; and more &apos;this is already the party.&apos;</p>
          </div>
          <div className="mt-6 p-5 rounded-xl border border-indigo-500/20 bg-indigo-500/5 text-sm text-muted-foreground leading-relaxed">
            <strong className="text-foreground">For organisers:</strong> A well-produced red carpet isn&apos;t just a luxury — it&apos;s content generation. The Mayor&apos;s red carpet created dozens of organic social media posts before a single comedian hit the stage.
          </div>
        </div>
      </ScrollReveal>

      <ScrollReveal delay={0.14}>
        <div>
          <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-5">The outside zone: games, food & good vibes</h2>
          <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
            <p>Before entering the main hall, guests were treated to a full activation zone outside the venue. Table tennis, snooker (the beloved Nigerian table version), ludo, and other games had people forming small circles and competing while waiting. Vendors were out in numbers — food, drinks, merchandise — turning the exterior of EUI Centre into its own mini-event.</p>
            <p>This is something more Nigerian event organisers should study closely. The outside experience sets the tone. By the time guests walked into the main hall, they were already warmed up, already laughing, already in the mood.</p>
          </div>
        </div>
      </ScrollReveal>

      <ScrollReveal delay={0.16}>
        <div>
          <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-5">Opening act: Dreams Band and the next generation</h2>
          <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
            <p>By around 7:00 PM, Dreams Band took the stage and set the tone for the entire evening. The performance was scintillating — the kind of live music that reminds you why a band hits differently than a playlist. It warmed up the room in a way no DJ set could have.</p>
            <p>One of the standout calls from the MC was handing the microphone to upcoming comedians and young artists — giving the next generation a real stage, a real crowd, a real moment. Watching young acts step up in front of a packed EUI Centre was one of those quiet highlights that stays with you long after the night ends.</p>
          </div>
        </div>
      </ScrollReveal>

      <ScrollReveal delay={0.18}>
        <div>
          <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-6">The lineup: 16 comedians, one night</h2>
          <p className="text-lg text-muted-foreground leading-relaxed mb-6">The 2026 edition lived up to its name — twelve kings and then some. The full roster covered the full breadth of Nigerian comedy, from Rivers State staples to acts that travelled in from Edo, Delta, Enugu, and beyond.</p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {lineup.map((name) => (
              <div key={name} className="px-3 py-2 rounded-lg bg-muted/40 border border-border/40 text-sm font-medium text-foreground text-center">
                {name}
              </div>
            ))}
          </div>
        </div>
      </ScrollReveal>

      <ScrollReveal delay={0.2}>
        <div>
          <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-5">Egobase: brand support done right</h2>
          <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
            <p>One of the most visible brand presences on the night was Egobase, whose support was evident from the official Mayor and 12 Kings T-shirts — the Egobase branding right there on the merch. That is not an afterthought. That is the kind of integrated brand partnership that actually works.</p>
            <p>For brands looking to reach the Port Harcourt market authentically: don&apos;t just place a banner at the back of a hall. Get on the T-shirt. Be part of the story people take home.</p>
          </div>
        </div>
      </ScrollReveal>

      <ScrollReveal delay={0.22}>
        <div>
          <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-5">The verdict</h2>
          <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
            <p>The Mayor and the 12 Kings 2026 was exactly what Port Harcourt needed heading into Q2. A packed house at EUI Centre, a red carpet that generated real buzz, an outside zone that kept energy high from the moment guests arrived, and a comedy lineup that represented the region at its best.</p>
            <p>KO Baba has built something with this event that goes beyond a single night of comedy. It is an annual cultural moment for the South-South — the kind of event that people mark their calendars for months in advance and talk about long after it is over.</p>
          </div>
        </div>
      </ScrollReveal>

      <ScrollReveal delay={0.24}>
        <div className="text-center p-8 sm:p-10 rounded-2xl border border-border/40 bg-muted/10">
          <h2 className="text-2xl font-bold text-foreground mb-3">Planning an event in Port Harcourt?</h2>
          <p className="text-muted-foreground mb-8 max-w-lg mx-auto leading-relaxed">Events Kona is built for Nigerian organisers. Create your event, sell tickets, manage QR code check-in, and get paid — all in one place.</p>
          <Button size="lg" asChild className="bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white px-8 h-12">
            <a href="https://eventskona.com/signup" target="_blank" rel="noopener noreferrer">
              Create Your Event Free
              <ArrowRightIcon className="ml-2 h-4 w-4" />
            </a>
          </Button>
        </div>
      </ScrollReveal>
    </div>
  )
}

// ─── Past Collaborations Article ─────────────────────────────────────────────

function PastCollaborationsContent() {
  return (
    <ScrollReveal delay={0.2}>
      <div className="max-w-3xl mx-auto space-y-12">
        {/* Overview */}
        <div className="p-8 sm:p-12 rounded-2xl border border-border/40 bg-muted/20">
          <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-6">
            AccessRA Partnership
          </h2>
          <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
            <p>
              App Guts previously partnered with AccessRA to explore a white-label eCommerce solution
              designed for small and medium enterprises across Africa.
            </p>
            <p>
              The collaboration explored enabling businesses to launch fully branded online stores
              without the complexity and cost of building in-house engineering teams.
            </p>
            <p>
              As we focus our full efforts on building and growing our flagship platform, Events Kona,
              this collaboration is currently inactive.
            </p>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center p-8 rounded-2xl border border-border/40">
          <h2 className="text-2xl font-bold text-foreground mb-4">
            Our flagship platform
          </h2>
          <p className="text-muted-foreground mb-8 max-w-lg mx-auto leading-relaxed">
            All of our energy is now focused on Events Kona — event discovery and ticketing,
            now live in Port Harcourt, Nigeria.
          </p>
          <Button size="lg" asChild className="bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white px-8 h-12">
            <a href="https://eventskona.com/" target="_blank" rel="noopener noreferrer">
              Visit Events Kona
              <ArrowRightIcon className="ml-2 h-4 w-4" />
            </a>
          </Button>
        </div>
      </div>
    </ScrollReveal>
  )
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default async function NewsArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const article = newsContent[slug]

  if (!article) {
    notFound()
  }

  const { Content } = article

  return (
    <>
      <Header />
      <main className="min-h-screen bg-background">
        <section className="px-4 py-20 sm:py-24 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl">
            {/* Back link */}
            <ScrollReveal>
              <Link
                href="/news"
                className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-8"
              >
                <ArrowLeftIcon className="h-4 w-4" />
                Back to News
              </Link>
            </ScrollReveal>

            {/* Article Header */}
            <ScrollReveal>
              <div className="text-center mb-16">
                <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full ${article.badgeColor} text-sm font-medium mb-6`}>
                  {article.badge}
                </div>
                <h1 className="mb-6 text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-foreground">
                  {article.title}
                </h1>
                <p className="text-xl sm:text-2xl text-muted-foreground max-w-3xl mx-auto font-light leading-relaxed">
                  {article.subtitle}
                </p>
              </div>
            </ScrollReveal>

            {/* Article Content */}
            <Content />
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
