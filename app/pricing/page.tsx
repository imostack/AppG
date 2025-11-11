// app/pricing/page.tsx
import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { Footer } from "@/components/footer"

export default function PricingPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-grow max-w-5xl mx-auto p-6">
        <h1 className="text-3xl font-bold mb-6 text-center">Pricing</h1>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="p-6 border rounded-xl shadow-md flex flex-col items-center">
            <h2 className="text-xl font-semibold mb-2">Basic</h2>
            <p className="text-2xl font-bold mb-4">$4/mo</p>
            <ul className="mb-4 text-sm text-neutral-700 dark:text-neutral-300">
              <li>Feature A</li>
              <li>Feature B</li>
            </ul>
            <button className="bg-[#61022e] hover:bg-[#7a0940] text-white px-4 py-2 rounded-lg">
              Choose Basic
            </button>
          </div>

          <div className="p-6 border rounded-xl shadow-md flex flex-col items-center">
            <h2 className="text-xl font-semibold mb-2">Pro</h2>
            <p className="text-2xl font-bold mb-4">$15/mo</p>
            <ul className="mb-4 text-sm text-neutral-700 dark:text-neutral-300">
              <li>Everything in Basic</li>
              <li>Feature C</li>
              <li>Feature D</li>
            </ul>
            <button className="bg-[#61022e] hover:bg-[#7a0940] text-white px-4 py-2 rounded-lg">
              Choose Pro
            </button>
          </div>

          <div className="p-6 border rounded-xl shadow-md flex flex-col items-center">
            <h2 className="text-xl font-semibold mb-2">Enterprise</h2>
            <p className="text-2xl font-bold mb-4">Custom</p>
            <ul className="mb-4 text-sm text-neutral-700 dark:text-neutral-300">
              <li>All Pro Features</li>
              <li>Dedicated Support</li>
              <li>Custom Integrations</li>
            </ul>
            <button className="bg-[#61022e] hover:bg-[#7a0940] text-white px-4 py-2 rounded-lg">
              Contact Sales
            </button>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
