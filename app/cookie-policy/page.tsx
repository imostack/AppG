import type { Metadata } from "next"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export const metadata: Metadata = {
  title: "Cookie Policy",
  description:
    "App Guts Limited Cookie Policy. Understand how we use cookies and similar technologies on appguts.com and Events Kona. Your rights under the Nigeria Data Protection Act 2023.",
  alternates: { canonical: "https://appguts.com/cookie-policy" },
  robots: { index: true, follow: true },
}

const cookieTypes = [
  {
    name: "Strictly Necessary Cookies",
    status: "Always Active",
    statusStyle: "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400",
    description:
      "These cookies are essential for the website to function correctly. They enable core features such as page navigation, security, and accessibility. Without these cookies, the site cannot operate properly.",
    examples: [
      "Session management and page routing",
      "Security and fraud prevention",
      "User preference storage (e.g. dark mode)",
      "Cookie consent record",
    ],
  },
  {
    name: "Analytics Cookies",
    status: "Optional",
    statusStyle: "bg-muted text-muted-foreground",
    description:
      "These cookies help us understand how visitors interact with our website by collecting anonymised information. We use this data to improve site performance and content. No personally identifiable information is collected through analytics cookies.",
    examples: [
      "Vercel Analytics — page view counts and navigation paths",
      "Device type and browser version (anonymised)",
      "Time spent on pages and exit points",
    ],
  },
  {
    name: "Third-Party Cookies",
    status: "Optional",
    statusStyle: "bg-muted text-muted-foreground",
    description:
      "Some pages on our site may embed content or tools from third-party services. These services may set their own cookies subject to their own privacy policies. We limit third-party integrations and do not sell data to advertisers.",
    examples: [
      "Embedded social media content (e.g. LinkedIn posts)",
      "Customer support tools (if enabled)",
    ],
  },
]

export default function CookiePolicyPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-background">
        <div className="mx-auto max-w-3xl px-4 py-20 sm:px-6 lg:px-8">
          {/* Page header */}
          <div className="mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-muted/50 text-xs font-medium text-muted-foreground mb-6">
              NDPA 2023 Compliant
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-foreground mb-4">
              Cookie Policy
            </h1>
            <p className="text-muted-foreground">
              Effective Date: March 4, 2026 &nbsp;·&nbsp; Last Updated: March 4, 2026
            </p>
          </div>

          <div className="space-y-10">
            {/* Section 1 */}
            <section className="border-t border-border/40 pt-8">
              <h2 className="text-xl font-semibold text-foreground mb-4">1. What Are Cookies?</h2>
              <div className="space-y-3 text-muted-foreground leading-relaxed text-base">
                <p>
                  Cookies are small text files that are stored on your device when you visit a website. They are widely
                  used to make websites work efficiently, to remember your preferences, and to provide information to
                  website owners about how their sites are used.
                </p>
                <p>
                  This Cookie Policy applies to <strong className="text-foreground">appguts.com</strong> and any App
                  Guts Limited service, including the Events Kona waitlist. It explains what cookies we use, why we use
                  them, and your rights to control them under the{" "}
                  <strong className="text-foreground">Nigeria Data Protection Act (NDPA) 2023</strong>.
                </p>
              </div>
            </section>

            {/* Section 2 — Cookie type cards */}
            <section className="border-t border-border/40 pt-8">
              <h2 className="text-xl font-semibold text-foreground mb-6">2. Cookies We Use</h2>
              <div className="space-y-4">
                {cookieTypes.map((cookie) => (
                  <div
                    key={cookie.name}
                    className="border border-border/40 rounded-2xl p-6 bg-background hover:border-border transition-colors duration-200"
                  >
                    <div className="flex flex-wrap items-center gap-3 mb-3">
                      <h3 className="text-base font-semibold text-foreground">{cookie.name}</h3>
                      <span className={`text-xs font-medium px-2.5 py-1 rounded-full ${cookie.statusStyle}`}>
                        {cookie.status}
                      </span>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-4">{cookie.description}</p>
                    <ul className="space-y-1.5">
                      {cookie.examples.map((ex) => (
                        <li key={ex} className="text-sm text-muted-foreground flex items-start gap-2">
                          <span className="mt-1.5 shrink-0 w-1.5 h-1.5 rounded-full bg-border" />
                          {ex}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </section>

            {/* Section 3 */}
            <section className="border-t border-border/40 pt-8">
              <h2 className="text-xl font-semibold text-foreground mb-4">3. Your Consent</h2>
              <div className="space-y-3 text-muted-foreground leading-relaxed text-base">
                <p>
                  In accordance with the <strong className="text-foreground">Nigeria Data Protection Act 2023</strong>{" "}
                  and the Nigeria Data Protection Regulation (NDPR) 2019, we request your consent before placing
                  optional cookies on your device. A cookie consent notice is displayed when you first visit our site.
                </p>
                <p>
                  You may accept all cookies, reject optional cookies, or customise your preferences at any time. Your
                  consent choices are stored locally and respected on future visits. Strictly necessary cookies do not
                  require consent as they are essential for the site to function.
                </p>
                <p>
                  You may withdraw your consent at any time by clearing your cookies in your browser settings or by
                  contacting us at{" "}
                  <a href="mailto:privacy@appguts.com" className="text-primary hover:underline">
                    privacy@appguts.com
                  </a>
                  .
                </p>
              </div>
            </section>

            {/* Section 4 */}
            <section className="border-t border-border/40 pt-8">
              <h2 className="text-xl font-semibold text-foreground mb-4">4. Managing Cookies in Your Browser</h2>
              <div className="space-y-3 text-muted-foreground leading-relaxed text-base">
                <p>
                  Most browsers allow you to manage cookie preferences through their settings. Please note that
                  disabling certain cookies may affect the functionality of our website.
                </p>
                <ul className="list-disc list-inside space-y-2 mt-3">
                  <li>
                    <strong className="text-foreground">Google Chrome</strong> — Settings → Privacy and Security →
                    Cookies and other site data
                  </li>
                  <li>
                    <strong className="text-foreground">Mozilla Firefox</strong> — Options → Privacy &amp; Security →
                    Cookies and Site Data
                  </li>
                  <li>
                    <strong className="text-foreground">Safari</strong> — Preferences → Privacy → Manage Website Data
                  </li>
                  <li>
                    <strong className="text-foreground">Microsoft Edge</strong> — Settings → Cookies and site
                    permissions → Manage and delete cookies
                  </li>
                </ul>
              </div>
            </section>

            {/* Section 5 */}
            <section className="border-t border-border/40 pt-8">
              <h2 className="text-xl font-semibold text-foreground mb-4">5. Changes to This Policy</h2>
              <div className="space-y-3 text-muted-foreground leading-relaxed text-base">
                <p>
                  We may update this Cookie Policy from time to time to reflect changes in technology, legislation, or
                  our services. Any updates will be posted on this page with a revised effective date. We encourage you
                  to review this page periodically.
                </p>
              </div>
            </section>

            {/* Section 6 */}
            <section className="border-t border-border/40 pt-8">
              <h2 className="text-xl font-semibold text-foreground mb-4">6. Contact Us</h2>
              <div className="space-y-3 text-muted-foreground leading-relaxed text-base">
                <p>
                  If you have any questions about our use of cookies or this Cookie Policy, please contact our Data
                  Protection Officer:
                </p>
                <div className="mt-4 space-y-1">
                  <p>
                    <strong className="text-foreground">App Guts Limited</strong>
                  </p>
                  <p>Port Harcourt, Rivers State, Nigeria</p>
                  <p>
                    Email:{" "}
                    <a href="mailto:privacy@appguts.com" className="text-primary hover:underline">
                      privacy@appguts.com
                    </a>
                  </p>
                </div>
                <p className="mt-4">
                  For more information on how we handle your personal data, please read our{" "}
                  <Link href="/privacy" className="text-primary hover:underline">
                    Privacy Policy
                  </Link>
                  .
                </p>
              </div>
            </section>
          </div>

          {/* Back nav */}
          <div className="mt-16 pt-8 border-t border-border/40">
            <Link href="/" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              ← Back to Home
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
