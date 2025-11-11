"use client";

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import Link from "next/link"

export default function PrivacyPage() {
    return (
  <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-grow max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-24">
        <h1 className="text-4xl font-bold">App Guts Privacy Notice</h1>
        <p className="text-muted-foreground">Effective Date: November 11, 2025</p>

        <section className="space-y-2">
          <h2 className="text-2xl font-semibold">1. Introduction</h2>
          <p>
            App Guts Limited (“App Guts”, “we”, “our”, or “us”) is committed to protecting your
            privacy. This Privacy Notice explains how we collect, use, disclose, and safeguard your
            information when you use our software-as-a-service (SaaS) platforms and related
            services (collectively, the “Services”).
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-2xl font-semibold">2. Information We Collect</h2>
          <ul className="list-disc list-inside space-y-1">
            <li>
              <strong>Personal Information:</strong> Name, email address, company details, billing
              information, login credentials.
            </li>
            <li>
              <strong>Usage Data:</strong> Details on how you use our Services, including IP
              address, device type, browser type, and interaction logs.
            </li>
            <li>
              <strong>Cookies and Tracking:</strong> We use cookies and similar technologies to
              enhance user experience and analyze usage.
            </li>
          </ul>
        </section>

        <section className="space-y-2">
          <h2 className="text-2xl font-semibold">3. How We Use Your Information</h2>
          <ul className="list-disc list-inside space-y-1">
            <li>Provide, operate, and maintain the Services</li>
            <li>Process transactions and manage accounts</li>
            <li>Communicate with you regarding updates, support, and promotional offers</li>
            <li>Improve and develop new features and products</li>
            <li>Comply with legal obligations</li>
          </ul>
        </section>

        <section className="space-y-2">
          <h2 className="text-2xl font-semibold">4. Information Sharing and Disclosure</h2>
          <p>
            We may share your information with trusted partners and service providers who assist us
            in operating the Services. We do not sell your personal data to third parties. Disclosure
            may occur if required by law or to protect our rights.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-2xl font-semibold">5. Data Security</h2>
          <p>
            We implement industry-standard security measures to protect your information from
            unauthorized access, alteration, disclosure, or destruction.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-2xl font-semibold">6. Your Rights and Choices</h2>
          <p>You have the right to access, correct, or delete your personal data. Contact us to exercise these rights.</p>
        </section>

        <section className="space-y-2">
          <h2 className="text-2xl font-semibold">7. Data Retention</h2>
          <p>We retain your data as long as necessary to provide the Services and comply with legal obligations.</p>
        </section>

        <section className="space-y-2">
          <h2 className="text-2xl font-semibold">8. International Transfers</h2>
          <p>Your information may be processed in countries outside your residence. We ensure adequate protections in accordance with applicable laws.</p>
        </section>

        <section className="space-y-2">
          <h2 className="text-2xl font-semibold">9. Contact Us</h2>
          <p>For questions or concerns about this Privacy Notice, please contact us at <a href="mailto:privacy@appguts.com" className="text-primary hover:underline">privacy@appguts.com</a>.</p>
        </section>

        <Link href="/" className="text-primary hover:underline">
          ← Back to Home
        </Link>
      </main>
      <Footer />
    </div>
  )
}
