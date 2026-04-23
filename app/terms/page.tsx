import type { Metadata } from "next"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "App Guts Limited Terms of Service. Read the terms governing your use of App Guts platforms including Events Kona. Governed by the laws of the Federal Republic of Nigeria.",
  alternates: { canonical: "https://appguts.com/terms" },
  robots: { index: true, follow: true },
}

const sections = [
  {
    id: "1",
    title: "1. Acceptance of Terms",
    content: (
      <p>
        By accessing or using any App Guts Limited (&ldquo;App Guts&rdquo;, &ldquo;we&rdquo;, &ldquo;our&rdquo;, or
        &ldquo;us&rdquo;) website, platform, or service — including appguts.com and Events Kona (eventskona.com) —
        you agree to be bound by these Terms of Service (&ldquo;Terms&rdquo;). If you do not agree to these Terms, you
        must not use our Services. These Terms form a legally binding agreement between you and App Guts Limited, a
        company registered in Nigeria.
      </p>
    ),
  },
  {
    id: "2",
    title: "2. Our Services",
    content: (
      <>
        <p>App Guts Limited operates the following platforms:</p>
        <ul className="list-disc list-inside space-y-2 mt-3">
          <li>
            <strong>appguts.com</strong> — Our company website, providing information about App Guts and its products.
          </li>
          <li>
            <strong>Events Kona (eventskona.com)</strong> — A live event discovery, ticketing, and community management
            platform, available in Port Harcourt, Nigeria.
          </li>
        </ul>
        <p className="mt-3">
          Additional platforms may be added in future. Any new services will be subject to these Terms or supplementary
          terms notified to you at the time of launch.
        </p>
      </>
    ),
  },
  {
    id: "3",
    title: "3. Eligibility",
    content: (
      <p>
        You must be at least 18 years old to use our Services. By using our Services, you represent that you meet
        this age requirement. Where you use our Services on behalf of an organisation, you represent that you have
        the authority to bind that organisation to these Terms.
      </p>
    ),
  },
  {
    id: "4",
    title: "4. Events Kona — Platform Terms",
    content: (
      <>
        <p>By creating an account or using Events Kona:</p>
        <ul className="list-disc list-inside space-y-2 mt-3">
          <li>You consent to App Guts contacting you with updates about the platform via the email address provided.</li>
          <li>Access to specific features may vary based on your account type (attendee, organiser).</li>
          <li>App Guts reserves the right to modify, suspend, or discontinue the Events Kona platform at any time without liability.</li>
          <li>Your data is handled in accordance with our <Link href="/privacy" className="text-primary hover:underline">Privacy Policy</Link> and complies with the Nigeria Data Protection Act (NDPA) 2023.</li>
        </ul>
      </>
    ),
  },
  {
    id: "5",
    title: "5. Events Kona — Organiser Responsibilities",
    content: (
      <>
        <p>When Events Kona launches publicly, event organisers who use the platform to create and sell tickets agree to:</p>
        <ul className="list-disc list-inside space-y-2 mt-3">
          <li>Provide accurate, truthful event information including date, venue, and ticket price.</li>
          <li>Honour tickets sold through the platform and deliver the event as advertised.</li>
          <li>Comply with all applicable Nigerian laws, including consumer protection regulations.</li>
          <li>Not use the platform for fraudulent, misleading, or illegal events.</li>
          <li>Process refunds and handle attendee disputes in good faith.</li>
        </ul>
        <p className="mt-3">
          App Guts reserves the right to remove events or suspend organiser accounts that violate these obligations.
        </p>
      </>
    ),
  },
  {
    id: "6",
    title: "6. Acceptable Use",
    content: (
      <>
        <p>You agree not to use our Services to:</p>
        <ul className="list-disc list-inside space-y-2 mt-3">
          <li>Violate any applicable Nigerian or international law or regulation.</li>
          <li>Engage in fraud, deception, or any activity that could harm other users or App Guts.</li>
          <li>Transmit malware, spam, or any harmful content.</li>
          <li>Attempt to gain unauthorised access to our systems or other users&apos; accounts.</li>
          <li>Scrape, crawl, or collect data from our platforms without written permission.</li>
          <li>Infringe the intellectual property rights of App Guts or any third party.</li>
        </ul>
      </>
    ),
  },
  {
    id: "7",
    title: "7. Intellectual Property",
    content: (
      <p>
        All intellectual property rights in App Guts platforms, including software, design, content, logos, and
        trademarks, are owned by or licensed to App Guts Limited. You are granted a limited, non-exclusive,
        non-transferable licence to use our Services for their intended purpose. You may not reproduce, redistribute,
        modify, or create derivative works from our intellectual property without prior written consent from App Guts.
      </p>
    ),
  },
  {
    id: "8",
    title: "8. Payments and Refunds (Events Kona)",
    content: (
      <p>
        When ticketing functionality is live on Events Kona, ticket transactions are processed through integrated
        payment providers. App Guts is not responsible for payment processor failures or errors. Refund policies for
        specific events are set by the event organiser. App Guts may facilitate refund disputes but is not liable for
        refunds owed by organisers. Specific payment and fee terms will be published in the Events Kona platform at launch.
      </p>
    ),
  },
  {
    id: "9",
    title: "9. Disclaimer of Warranties",
    content: (
      <p>
        Our Services are provided on an &ldquo;as is&rdquo; and &ldquo;as available&rdquo; basis without warranties of
        any kind, express or implied. App Guts does not warrant that the Services will be uninterrupted, error-free, or
        free from viruses or other harmful components. Platform features are provided without any guarantee of
        uninterrupted availability or specific functionality.
      </p>
    ),
  },
  {
    id: "10",
    title: "10. Limitation of Liability",
    content: (
      <p>
        To the fullest extent permitted by Nigerian law, App Guts Limited shall not be liable for any indirect,
        incidental, special, consequential, or punitive damages arising from your use of or inability to use the
        Services, including loss of profits, data, or goodwill. Our total aggregate liability for any claim arising
        from your use of the Services shall not exceed the amount you paid to App Guts in the 12 months preceding the
        claim, or NGN 10,000 where no payment was made.
      </p>
    ),
  },
  {
    id: "11",
    title: "11. Termination",
    content: (
      <p>
        App Guts may suspend or terminate your access to the Services at any time if you violate these Terms or for
        any other reason at our sole discretion, with or without notice. You may also stop using our Services at any
        time. Upon termination, provisions of these Terms that by their nature should survive (including intellectual
        property, limitation of liability, and governing law) shall continue to apply.
      </p>
    ),
  },
  {
    id: "12",
    title: "12. Governing Law and Dispute Resolution",
    content: (
      <>
        <p>
          These Terms are governed by and construed in accordance with the laws of the{" "}
          <strong>Federal Republic of Nigeria</strong>. Any dispute arising from or relating to these Terms or our
          Services shall first be resolved through good-faith negotiation. If negotiation fails, disputes shall be
          referred to mediation in accordance with the applicable rules of the Lagos Court of Arbitration or a
          mutually agreed mediator. Where mediation fails, disputes shall be finally resolved by the competent
          courts of Nigeria.
        </p>
        <p className="mt-3">
          Nothing in this clause limits your right to report concerns to regulatory authorities, including NITDA.
        </p>
      </>
    ),
  },
  {
    id: "13",
    title: "13. Changes to These Terms",
    content: (
      <p>
        App Guts may update these Terms from time to time. We will notify you of material changes by posting an
        updated version on this page with a revised effective date. Where we hold your contact details, we will also
        send you an email notification. Continued use of our Services after changes are posted constitutes your
        acceptance of the updated Terms.
      </p>
    ),
  },
  {
    id: "14",
    title: "14. Contact",
    content: (
      <>
        <p>For any questions about these Terms, please contact:</p>
        <div className="mt-4 space-y-1 text-muted-foreground">
          <p><strong className="text-foreground">App Guts Limited</strong></p>
          <p>Port Harcourt, Rivers State, Nigeria</p>
          <p>
            Email:{" "}
            <a href="mailto:support@appguts.com" className="text-primary hover:underline">
              support@appguts.com
            </a>
          </p>
        </div>
      </>
    ),
  },
]

export default function TermsPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-background">
        <div className="mx-auto max-w-3xl px-4 py-20 sm:px-6 lg:px-8">
          {/* Page header */}
          <div className="mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-muted/50 text-xs font-medium text-muted-foreground mb-6">
              Governed by Nigerian Law
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-foreground mb-4">
              Terms of Service
            </h1>
            <p className="text-muted-foreground">
              Effective Date: March 4, 2026 &nbsp;·&nbsp; Last Updated: March 4, 2026
            </p>
          </div>

          {/* Sections */}
          <div className="space-y-10">
            {sections.map((section) => (
              <section key={section.id} className="border-t border-border/40 pt-8">
                <h2 className="text-xl font-semibold text-foreground mb-4">{section.title}</h2>
                <div className="space-y-3 text-muted-foreground leading-relaxed text-base">
                  {section.content}
                </div>
              </section>
            ))}
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
