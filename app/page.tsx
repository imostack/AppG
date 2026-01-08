import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { Features } from "@/components/features"
import { WhyAppGuts } from "@/components/why-app-guts"
import { AboutSection } from "@/components/about-section"
import { ContactSection } from "@/components/contact-section"
import { WaitlistBanner } from "@/components/waitlist-banner"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <Hero />
      <Features />
      <WhyAppGuts />
      <AboutSection />
      <ContactSection />
      <WaitlistBanner />
      <Footer />
    </main>
  )
}
