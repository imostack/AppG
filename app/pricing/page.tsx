// app/pricing/page.tsx
import Menubar from "@/components/menubar"
import NavigationMenu from "@/components/navigation-menu"
import { Footer } from "@/components/footer"

export default function PricingPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Menubar />
       <NavigationMenu />

       <main className="flex-grow max-w-5xl mx-auto p-6 pt-24">
        <h1 className="text-3xl font-bold mb-6 text-center">Pricing</h1>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="p-6 border rounded-xl shadow-md flex flex-col items-center">
            <h2 className="text-xl font-semibold mb-2">Basic</h2>
            <p className="text-2xl font-bold mb-4">$4/mo</p>
            <ul className="mb-4 text-sm text-neutral-700 dark:text-neutral-300">
             <li>1 automated SaaS workflow</li>
      <li>Email support for onboarding</li>
      <li>Basic analytics dashboard</li>
            </ul>
            <button className="bg-[#61022e] hover:bg-[#7a0940] text-white px-4 py-2 rounded-lg">
              Choose Basic
            </button>
          </div>

          <div className="p-6 border rounded-xl shadow-md flex flex-col items-center">
            <h2 className="text-xl font-semibold mb-2">Pro</h2>
            <p className="text-2xl font-bold mb-4">$15/mo</p>
            <ul className="mb-4 text-sm text-neutral-700 dark:text-neutral-300">
              <li>All Basic features</li>
      <li>5 automated SaaS workflows</li>
      <li>Advanced analytics dashboard</li>
      <li>Priority email support</li>
      <li>WhatsApp AI integration</li>
            </ul>
            <button className="bg-[#61022e] hover:bg-[#7a0940] text-white px-4 py-2 rounded-lg">
              Choose Pro
            </button>
          </div>

          <div className="p-6 border rounded-xl shadow-md flex flex-col items-center">
            <h2 className="text-xl font-semibold mb-2">Enterprise</h2>
            <p className="text-2xl font-bold mb-4">Custom</p>
            <ul className="mb-4 text-sm text-neutral-700 dark:text-neutral-300">
               <li>All Pro features</li>
      <li>Unlimited SaaS workflows</li>
      <li>Dedicated account manager</li>
      <li>Custom integrations</li>
      <li>White-label branding options</li>
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
