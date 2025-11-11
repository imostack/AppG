"use client";

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import Link from "next/link"

export default function TermsPage() {
  return (
    
    <div className="min-h-screen px-4 py-20 sm:px-6 lg:px-8">
         <Header />

      <div className="mx-auto max-w-3xl space-y-6">
        <h1 className="text-4xl font-bold">App Guts Terms of Service</h1>
        <p className="text-muted-foreground">Effective Date: November 11, 2025</p>

        <section className="space-y-2">
          <h2 className="text-2xl font-semibold">1. Acceptance of Terms</h2>
          <p>By using App Guts services (“Services”), you agree to these Terms of Service (“Terms”).</p>
        </section>

        <section className="space-y-2">
          <h2 className="text-2xl font-semibold">2. Use of Services</h2>
          <ul className="list-disc list-inside space-y-1">
            <li>You must provide accurate information and keep your account credentials confidential.</li>
            <li>You agree to use the Services in compliance with applicable laws and regulations.</li>
          </ul>
        </section>

        <section className="space-y-2">
          <h2 className="text-2xl font-semibold">3. Subscription and Payment</h2>
          <p>Services are provided on a subscription basis as described in your agreement. Payments are due as per the agreed schedule. Non-payment may result in suspension or termination.</p>
        </section>

        <section className="space-y-2">
          <h2 className="text-2xl font-semibold">4. Intellectual Property</h2>
          <p>All intellectual property rights in the Services and content are owned by App Guts or our licensors. You are granted a limited, non-exclusive license to use the Services.</p>
        </section>

        <section className="space-y-2">
          <h2 className="text-2xl font-semibold">5. Confidentiality</h2>
          <p>You and App Guts agree to keep confidential any non-public information exchanged during the course of using the Services.</p>
        </section>

        <section className="space-y-2">
          <h2 className="text-2xl font-semibold">6. Limitation of Liability</h2>
          <p>To the fullest extent permitted by law, App Guts is not liable for indirect, incidental, or consequential damages arising from your use of the Services.</p>
        </section>

        <section className="space-y-2">
          <h2 className="text-2xl font-semibold">7. Termination</h2>
          <p>Either party may terminate the agreement upon written notice. Upon termination, your access to Services will cease.</p>
        </section>

        <section className="space-y-2">
          <h2 className="text-2xl font-semibold">8. Governing Law</h2>
          <p>These Terms are governed by applicable laws.</p>
        </section>

        <section className="space-y-2">
          <h2 className="text-2xl font-semibold">9. Changes to Terms</h2>
          <p>We may update these Terms from time to time. We will notify you of significant changes.</p>
        </section>

        <section className="space-y-2">
          <h2 className="text-2xl font-semibold">10. Contact Us</h2>
          <p>For any questions or disputes regarding these Terms, please contact <a href="mailto:support@appguts.com" className="text-primary hover:underline">support@appguts.com</a>.</p>
        </section>

        <Link href="/" className="text-primary hover:underline">
          ← Back to Home
        </Link>
      </div>
      <Footer />
    </div>
  )
}
