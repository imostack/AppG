import type { Metadata } from "next"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "App Guts Limited Privacy Policy. Learn how we collect, use, and protect your personal data in compliance with the Nigeria Data Protection Act (NDPA) 2023 and NDPR.",
  alternates: { canonical: "https://appguts.com/privacy" },
  robots: { index: true, follow: true },
}

const sections = [
  {
    id: "1",
    title: "1. Introduction and Data Controller",
    content: (
      <>
        <p>
          App Guts Limited (&ldquo;App Guts&rdquo;, &ldquo;we&rdquo;, &ldquo;our&rdquo;, or &ldquo;us&rdquo;) is
          committed to protecting your personal data. This Privacy Policy explains how we collect, use, store, disclose,
          and safeguard your information when you use our website (appguts.com) and our platforms, including Events Kona
          (eventskona.com) (collectively, the &ldquo;Services&rdquo;).
        </p>
        <p>
          App Guts Limited is the <strong>Data Controller</strong> for personal data processed through our Services. We
          are registered in Nigeria and operate in accordance with the <strong>Nigeria Data Protection Act (NDPA) 2023</strong>,
          the <strong>Nigeria Data Protection Regulation (NDPR) 2019</strong>, and the guidelines issued by the
          <strong> National Information Technology Development Agency (NITDA)</strong>.
        </p>
        <p>
          <strong>Effective Date:</strong> March 4, 2026<br />
          <strong>Last Updated:</strong> March 4, 2026
        </p>
      </>
    ),
  },
  {
    id: "2",
    title: "2. Data We Collect",
    content: (
      <>
        <p>We collect the following categories of personal data, only as necessary for the purposes described below:</p>
        <h3 className="text-lg font-semibold text-foreground mt-4 mb-2">a. Waitlist Registration (Events Kona)</h3>
        <p>
          When you join the Events Kona waitlist, we collect your <strong>name</strong> and <strong>email address</strong>.
          This is the minimum required to notify you when the platform opens. We do not collect payment information, phone
          numbers, or government ID at this stage, in compliance with our NDPR pre-launch obligations.
        </p>
        <h3 className="text-lg font-semibold text-foreground mt-4 mb-2">b. Website Usage Data</h3>
        <p>
          We automatically collect limited technical data when you visit our website, including your IP address (anonymised
          where possible), device type, browser type, and pages visited. This data is used solely to improve the website
          and is not linked to your personal identity.
        </p>
        <h3 className="text-lg font-semibold text-foreground mt-4 mb-2">c. Communications</h3>
        <p>
          If you contact us via email (e.g. support@appguts.com), we retain your message and contact details to respond
          to your enquiry.
        </p>
        <h3 className="text-lg font-semibold text-foreground mt-4 mb-2">d. Cookies</h3>
        <p>
          We use cookies to improve your experience. Please see our{" "}
          <Link href="/cookie-policy" className="text-primary hover:underline">
            Cookie Policy
          </Link>{" "}
          for full details.
        </p>
      </>
    ),
  },
  {
    id: "3",
    title: "3. Lawful Basis for Processing",
    content: (
      <>
        <p>Under the NDPA 2023, we process your personal data only where we have a lawful basis to do so:</p>
        <ul className="list-disc list-inside space-y-2 mt-3">
          <li><strong>Consent:</strong> When you join the Events Kona waitlist, you explicitly consent to us contacting you with updates about the platform launch. You may withdraw this consent at any time.</li>
          <li><strong>Legitimate Interests:</strong> We process limited usage data to improve our website and platform performance, where this does not override your fundamental rights.</li>
          <li><strong>Legal Obligation:</strong> We may process or retain data where required to comply with applicable Nigerian law.</li>
        </ul>
        <p className="mt-3">
          We do not use your personal data for automated decision-making or profiling.
        </p>
      </>
    ),
  },
  {
    id: "4",
    title: "4. How We Use Your Information",
    content: (
      <ul className="list-disc list-inside space-y-2">
        <li>To notify you when Events Kona launches or when your waitlist position is confirmed</li>
        <li>To respond to your enquiries and provide support</li>
        <li>To improve our website and platforms through anonymised analytics</li>
        <li>To comply with our legal and regulatory obligations under Nigerian law</li>
        <li>To send you relevant updates about App Guts products (only where you have consented)</li>
      </ul>
    ),
  },
  {
    id: "5",
    title: "5. Data Sharing and Disclosure",
    content: (
      <>
        <p>
          We do not sell your personal data to any third party. We may share your data only in the following limited
          circumstances:
        </p>
        <ul className="list-disc list-inside space-y-2 mt-3">
          <li><strong>Service Providers:</strong> We use trusted third-party tools (e.g. email delivery providers, analytics) that process data on our behalf under strict data processing agreements. These providers are contractually bound to handle your data in accordance with the NDPA and NDPR.</li>
          <li><strong>Legal Requirements:</strong> We may disclose your data if required by law, court order, or lawful authority in Nigeria.</li>
          <li><strong>Business Transfer:</strong> In the event of a merger, acquisition, or sale of assets, your data may be transferred to the successor entity, who will be bound by this Privacy Policy.</li>
        </ul>
      </>
    ),
  },
  {
    id: "6",
    title: "6. Your Rights Under the NDPA and NDPR",
    content: (
      <>
        <p>As a data subject under Nigerian law, you have the following rights:</p>
        <ul className="list-disc list-inside space-y-2 mt-3">
          <li><strong>Right of Access:</strong> You may request a copy of the personal data we hold about you.</li>
          <li><strong>Right to Rectification:</strong> You may request correction of inaccurate or incomplete data.</li>
          <li><strong>Right to Erasure:</strong> You may request deletion of your personal data where there is no lawful basis for continued processing.</li>
          <li><strong>Right to Withdraw Consent:</strong> Where processing is based on your consent, you may withdraw it at any time without affecting processing carried out before withdrawal.</li>
          <li><strong>Right to Object:</strong> You may object to processing carried out on the basis of our legitimate interests.</li>
          <li><strong>Right to Data Portability:</strong> You may request your data in a structured, machine-readable format.</li>
          <li><strong>Right to Restriction:</strong> You may request that we restrict processing of your data in certain circumstances.</li>
        </ul>
        <p className="mt-4">
          To exercise any of these rights, contact us at{" "}
          <a href="mailto:privacy@appguts.com" className="text-primary hover:underline">
            privacy@appguts.com
          </a>
          . We will respond within 30 days.
        </p>
      </>
    ),
  },
  {
    id: "7",
    title: "7. Data Retention",
    content: (
      <>
        <p>We retain your personal data only for as long as necessary:</p>
        <ul className="list-disc list-inside space-y-2 mt-3">
          <li><strong>Waitlist data</strong> (name, email) is retained until the Events Kona platform launches and you either create an account or request deletion, or for a maximum of 12 months after the platform goes live, whichever is earlier.</li>
          <li><strong>Support communications</strong> are retained for up to 24 months for quality and legal purposes.</li>
          <li><strong>Usage analytics data</strong> is retained in anonymised form for up to 24 months.</li>
        </ul>
        <p className="mt-3">
          After the applicable retention period, your data is securely deleted or anonymised.
        </p>
      </>
    ),
  },
  {
    id: "8",
    title: "8. International Data Transfers",
    content: (
      <p>
        Our third-party service providers may process data outside Nigeria. Where this occurs, we ensure that appropriate
        safeguards are in place — including standard contractual clauses or equivalent mechanisms — to protect your data
        in accordance with the NDPA 2023 and NDPR requirements for cross-border data transfers.
      </p>
    ),
  },
  {
    id: "9",
    title: "9. Data Security",
    content: (
      <p>
        We implement appropriate technical and organisational measures to protect your personal data from unauthorised
        access, loss, destruction, or disclosure. These include encrypted data transmission (HTTPS), access controls
        limited to authorised personnel, and regular security reviews. While we take all reasonable precautions, no
        method of transmission over the internet is 100% secure.
      </p>
    ),
  },
  {
    id: "10",
    title: "10. Data Protection Officer",
    content: (
      <p>
        In accordance with the NDPA 2023, we have designated a Data Protection Officer (DPO) responsible for overseeing
        compliance with data protection obligations. You may contact our DPO at{" "}
        <a href="mailto:privacy@appguts.com" className="text-primary hover:underline">
          privacy@appguts.com
        </a>{" "}
        for any data protection queries or concerns.
      </p>
    ),
  },
  {
    id: "11",
    title: "11. Filing a Complaint with NITDA",
    content: (
      <p>
        If you believe your data protection rights have been violated and we have not adequately resolved your concern,
        you have the right to lodge a complaint with the <strong>National Information Technology Development Agency
        (NITDA)</strong>, the data protection regulatory authority in Nigeria. NITDA can be reached at{" "}
        <a
          href="https://nitda.gov.ng"
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary hover:underline"
        >
          nitda.gov.ng
        </a>
        .
      </p>
    ),
  },
  {
    id: "12",
    title: "12. Children's Privacy",
    content: (
      <p>
        Our Services are not directed at children under the age of 13. We do not knowingly collect personal data from
        children. If you believe a child has provided us with personal data, please contact us at{" "}
        <a href="mailto:privacy@appguts.com" className="text-primary hover:underline">
          privacy@appguts.com
        </a>{" "}
        and we will delete the information promptly.
      </p>
    ),
  },
  {
    id: "13",
    title: "13. Changes to This Privacy Policy",
    content: (
      <p>
        We may update this Privacy Policy from time to time to reflect changes in our practices, Services, or legal
        requirements. Where changes are material, we will notify you by email (where we hold your contact details) or by
        posting a prominent notice on our website. The &ldquo;Last Updated&rdquo; date at the top of this page indicates when
        the most recent revision was made. Continued use of our Services after changes are posted constitutes your
        acceptance of the updated Policy.
      </p>
    ),
  },
  {
    id: "14",
    title: "14. Contact Us",
    content: (
      <>
        <p>For any questions, requests, or concerns about this Privacy Policy or how we handle your data, please contact:</p>
        <div className="mt-4 space-y-1 text-muted-foreground">
          <p><strong className="text-foreground">App Guts Limited</strong></p>
          <p>Data Protection Officer</p>
          <p>
            Email:{" "}
            <a href="mailto:privacy@appguts.com" className="text-primary hover:underline">
              privacy@appguts.com
            </a>
          </p>
          <p>Port Harcourt, Rivers State, Nigeria</p>
        </div>
      </>
    ),
  },
]

export default function PrivacyPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-background">
        <div className="mx-auto max-w-3xl px-4 py-20 sm:px-6 lg:px-8">
          {/* Page header */}
          <div className="mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-muted/50 text-xs font-medium text-muted-foreground mb-6">
              NDPA 2023 &amp; NDPR Compliant
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-foreground mb-4">
              Privacy Policy
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
