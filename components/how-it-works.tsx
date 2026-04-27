import { ScrollReveal } from "@/components/scroll-reveal"

const steps = [
  {
    number: "01",
    title: "Create your event",
    body: "Sign up free, fill in your event details, and set your ticket types and prices. Takes under five minutes. No monthly fee, no setup cost.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="4" width="18" height="18" rx="2" /><line x1="16" y1="2" x2="16" y2="6" /><line x1="8" y1="2" x2="8" y2="6" /><line x1="3" y1="10" x2="21" y2="10" /><line x1="12" y1="14" x2="12" y2="18" /><line x1="10" y1="16" x2="14" y2="16" />
      </svg>
    ),
  },
  {
    number: "02",
    title: "Share your link and sell tickets",
    body: "Every event gets a dedicated page on Events Kona. Share it on WhatsApp, Instagram, or anywhere your audience already is. Attendees pay securely via Paystack.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="18" cy="5" r="3" /><circle cx="6" cy="12" r="3" /><circle cx="18" cy="19" r="3" /><line x1="8.59" y1="13.51" x2="15.42" y2="17.49" /><line x1="15.41" y1="6.51" x2="8.59" y2="10.49" />
      </svg>
    ),
  },
  {
    number: "03",
    title: "Scan QR codes, get paid",
    body: "Every ticket is a unique QR code. Scan attendees at the gate using any smartphone — no special hardware. Your payout hits your Nigerian bank account after the event.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="7" height="7" /><rect x="14" y="3" width="7" height="7" /><rect x="3" y="14" width="7" height="7" /><rect x="5" y="5" width="3" height="3" /><rect x="16" y="5" width="3" height="3" /><rect x="5" y="16" width="3" height="3" /><line x1="14" y1="14" x2="14" y2="14" /><line x1="17" y1="14" x2="21" y2="14" /><line x1="14" y1="17" x2="14" y2="21" /><line x1="17" y1="17" x2="17" y2="21" /><line x1="21" y1="17" x2="21" y2="21" />
      </svg>
    ),
  },
]

export function HowItWorks() {
  return (
    <section className="px-4 py-20 sm:py-28 sm:px-6 lg:px-8 bg-muted/20">
      <div className="mx-auto max-w-5xl">

        <ScrollReveal>
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 text-xs font-medium border border-indigo-500/20 mb-4">
              Simple by design
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground mb-4">
              Up and running in minutes
            </h2>
            <p className="text-lg text-muted-foreground max-w-xl mx-auto">
              No training needed. If you can share a WhatsApp message, you can run your event on Events Kona.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid sm:grid-cols-3 gap-8 sm:gap-6">
          {steps.map((step, i) => (
            <ScrollReveal key={step.number} delay={i * 0.1}>
              <div className="relative flex flex-col h-full p-7 rounded-2xl border border-border/40 bg-background hover:border-border hover:shadow-md transition-all duration-200">

                {/* Step number */}
                <div className="text-5xl font-bold text-border/60 mb-4 leading-none select-none">
                  {step.number}
                </div>

                {/* Icon */}
                <div className="p-2.5 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 text-white w-fit mb-4">
                  {step.icon}
                </div>

                {/* Content */}
                <h3 className="text-lg font-semibold text-foreground mb-2">{step.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed flex-1">{step.body}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={0.3}>
          <div className="mt-12 text-center">
            <a
              href="https://eventskona.com/signup"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-indigo-500 to-purple-600 text-white text-sm font-semibold hover:opacity-90 transition-opacity"
            >
              Create your first event — it&apos;s free
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </a>
          </div>
        </ScrollReveal>

      </div>
    </section>
  )
}
