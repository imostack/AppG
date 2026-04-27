import type { Metadata } from "next"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ArrowRightIcon, CheckIcon } from "lucide-react"
import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
  title: "Pricing",
  description: "Events Kona is free to start. No monthly fees, no setup costs. We charge 5.5% only on paid ticket sales — you keep the rest.",
  alternates: { canonical: "https://appguts.com/pricing" },
  openGraph: {
    title: "Pricing | App Guts",
    description: "Events Kona is free to start. No monthly fees, no setup costs. We charge 5.5% only on paid ticket sales.",
    url: "https://appguts.com/pricing",
    siteName: "App Guts",
    images: [{ url: "/og-image.png", width: 1500, height: 498, alt: "Events Kona Pricing" }],
    locale: "en_NG",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Pricing | App Guts",
    description: "Events Kona is free to start. No monthly fees. 5.5% only on paid ticket sales.",
    images: ["/og-image.png"],
  },
}

const included = [
  "Unlimited events",
  "Multiple ticket types per event (Regular, VIP, Early Bird, etc.)",
  "Unique QR code for every ticket",
  "QR code check-in scanner on any phone",
  "Live sales dashboard — revenue, capacity, orders in real time",
  "Payouts to your Nigerian bank account",
  "Event discovery listing on Events Kona",
  "Attendee management and order history",
  "Free events cost you absolutely nothing",
]

const faqs = [
  {
    q: "Who pays the 5.5% fee?",
    a: "The fee is deducted from your payout as the organiser. You set your ticket price, attendees pay that price, and we deduct 5.5% before transferring your balance to your bank account.",
  },
  {
    q: "What about free events?",
    a: "If your tickets are ₦0, we charge nothing. Zero. Free events are completely free for both you and your attendees.",
  },
  {
    q: "When do I get paid?",
    a: "Payouts are processed after your event closes. You can track your payout status in real time from your organiser dashboard.",
  },
  {
    q: "Is there a limit on how many tickets I can sell?",
    a: "No platform limit. You set your own capacity per ticket type and we enforce it automatically — but the ceiling is yours to define.",
  },
  {
    q: "What payment methods do attendees use?",
    a: "Payments are processed via Paystack. Attendees can pay with any Nigerian bank card, bank transfer, or USSD. All major banks are supported.",
  },
  {
    q: "Will pricing change in the future?",
    a: "We will always give existing organisers advance notice before any pricing change. Our goal is to keep Events Kona affordable for the communities we serve.",
  },
]

export default function PricingPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-background">

        {/* Hero */}
        <section className="px-4 pt-20 pb-16 sm:pt-28 sm:pb-20 sm:px-6 lg:px-8 text-center">
          <div className="mx-auto max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 text-xs font-medium border border-emerald-500/20 mb-6">
              No monthly fees. Ever.
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-foreground mb-5">
              We earn when you earn.
            </h1>
            <p className="text-xl text-muted-foreground font-light max-w-xl mx-auto">
              Events Kona is free to start. We only charge a small fee on paid ticket sales — nothing else.
            </p>
          </div>
        </section>

        {/* Pricing card */}
        <section className="px-4 pb-16 sm:pb-20 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <div className="grid sm:grid-cols-2 gap-6">

              {/* Free events */}
              <div className="p-8 rounded-2xl border border-border/40 bg-muted/10">
                <div className="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-4">Free Events</div>
                <div className="text-5xl font-bold text-foreground mb-2">₦0</div>
                <p className="text-muted-foreground text-sm mb-6">When your tickets are free, we charge nothing. Zero platform fee for free events.</p>
                <div className="space-y-2.5">
                  {["Create unlimited free events", "QR code check-in included", "Attendee management included", "No hidden charges"].map((item) => (
                    <div key={item} className="flex items-center gap-2.5 text-sm text-muted-foreground">
                      <CheckIcon className="h-4 w-4 text-emerald-500 flex-shrink-0" />
                      {item}
                    </div>
                  ))}
                </div>
              </div>

              {/* Paid events */}
              <div className="p-8 rounded-2xl border border-indigo-500/30 bg-gradient-to-br from-indigo-500/5 via-purple-500/5 to-transparent relative overflow-hidden">
                <div className="absolute top-4 right-4 text-xs font-medium px-2.5 py-1 rounded-full bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 border border-indigo-500/20">
                  Paid events
                </div>
                <div className="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-4">Per ticket sold</div>
                <div className="flex items-end gap-2 mb-2">
                  <div className="text-5xl font-bold text-foreground">5.5%</div>
                </div>
                <p className="text-muted-foreground text-sm mb-6">
                  A single flat fee per paid ticket. No monthly subscription, no listing fee, no setup cost.
                </p>
                <div className="space-y-2.5">
                  {["Paystack-powered checkout", "Instant payout to your Nigerian bank", "Real-time sales dashboard", "Unlimited ticket types"].map((item) => (
                    <div key={item} className="flex items-center gap-2.5 text-sm text-muted-foreground">
                      <CheckIcon className="h-4 w-4 text-indigo-500 flex-shrink-0" />
                      {item}
                    </div>
                  ))}
                </div>
              </div>

            </div>

            {/* Example calculation */}
            <div className="mt-6 p-6 rounded-2xl border border-border/40 bg-muted/10 text-center">
              <p className="text-sm text-muted-foreground">
                Example: You sell <strong className="text-foreground">100 tickets at ₦5,000</strong> each.
                Total revenue: ₦500,000. Our fee: <strong className="text-foreground">₦27,500</strong>.
                You receive: <strong className="text-foreground">₦472,500</strong>.
              </p>
            </div>
          </div>
        </section>

        {/* What's included */}
        <section className="px-4 pb-20 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-3 text-center">Everything included</h2>
            <p className="text-muted-foreground text-center mb-10">No add-ons, no tiers. Every organiser gets the full platform.</p>
            <div className="grid sm:grid-cols-2 gap-3">
              {included.map((item) => (
                <div key={item} className="flex items-start gap-3 p-4 rounded-xl border border-border/40 bg-muted/10">
                  <CheckIcon className="h-4 w-4 text-emerald-500 flex-shrink-0 mt-0.5" />
                  <p className="text-sm text-muted-foreground">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="px-4 pb-20 sm:px-6 lg:px-8 border-t border-border/40 pt-16">
          <div className="mx-auto max-w-2xl">
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-10 text-center">Common questions</h2>
            <div className="space-y-6">
              {faqs.map((faq) => (
                <div key={faq.q}>
                  <h3 className="font-semibold text-foreground mb-2">{faq.q}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="px-4 pb-24 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center p-10 rounded-2xl border border-border/40 bg-muted/10">
            <h2 className="text-2xl font-bold text-foreground mb-3">Start for free today</h2>
            <p className="text-muted-foreground mb-8">
              Create your account, build your first event, and start selling tickets — no upfront cost.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button size="lg" asChild className="bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white px-8 h-12">
                <a href="https://eventskona.com/signup" target="_blank" rel="noopener noreferrer">
                  Get Started Free
                  <ArrowRightIcon className="ml-2 h-4 w-4" />
                </a>
              </Button>
              <Button size="lg" variant="outline" asChild className="h-12">
                <Link href="/#contact">Talk to us</Link>
              </Button>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  )
}
