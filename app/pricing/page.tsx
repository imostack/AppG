// app/pricing/page.tsx
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { CheckIcon } from "@heroicons/react/24/solid"

export default function PricingPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

       <main className="flex-grow max-w-5xl mx-auto p-6 pt-24">
        <h1 className="text-3xl font-bold mb-6 text-center">Pricing</h1>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="p-6 border rounded-xl shadow-md flex flex-col items-center">
            <h2 className="text-xl font-semibold mb-2">Basic</h2>
            <p className="text-2xl font-bold mb-4">$4/mo</p>
            <ul className="mb-4 space-y-2">
  <li className="flex items-center gap-2 text-neutral-700 dark:text-neutral-300">
    <CheckIcon className="w-5 h-5 text-[#61022e]" />
    1 automated SaaS workflow
  </li>
  <li className="flex items-center gap-2 text-neutral-700 dark:text-neutral-300">
    <CheckIcon className="w-5 h-5 text-[#61022e]" />
    Email support for onboarding
  </li>
  <li className="flex items-center gap-2 text-neutral-700 dark:text-neutral-300">
    <CheckIcon className="w-5 h-5 text-[#61022e]" />
    Basic analytics dashboard </li>
            </ul>
            <button className="bg-[#61022e] hover:bg-[#7a0940] text-white px-4 py-2 rounded-lg">
              Choose Basic
            </button>
          </div>

          <div className="p-6 border rounded-xl shadow-md flex flex-col items-center">
            <h2 className="text-xl font-semibold mb-2">Pro</h2>
            <p className="text-2xl font-bold mb-4">$15/mo</p>
           <ul className="mb-4 space-y-2">
  <li className="flex items-center gap-2 text-neutral-700 dark:text-neutral-300">
    <CheckIcon className="w-5 h-5 text-[#61022e]" />All Basic features</li>
      <li className="flex items-center gap-2 text-neutral-700 dark:text-neutral-300">
    <CheckIcon className="w-5 h-5 text-[#61022e]" />5 automated SaaS workflows</li>
      <li className="flex items-center gap-2 text-neutral-700 dark:text-neutral-300">
    <CheckIcon className="w-5 h-5 text-[#61022e]" />Advanced analytics dashboard</li>
      <li className="flex items-center gap-2 text-neutral-700 dark:text-neutral-300">
    <CheckIcon className="w-5 h-5 text-[#61022e]" />Priority email support</li>
      <li className="flex items-center gap-2 text-neutral-700 dark:text-neutral-300">
    <CheckIcon className="w-5 h-5 text-[#61022e]" />WhatsApp AI integration</li>
            </ul>
            <button className="bg-[#61022e] hover:bg-[#7a0940] text-white px-4 py-2 rounded-lg">
              Choose Pro
            </button>
          </div>

          <div className="p-6 border rounded-xl shadow-md flex flex-col items-center">
            <h2 className="text-xl font-semibold mb-2">Enterprise</h2>
            <p className="text-2xl font-bold mb-4">Custom</p>
            <ul className="mb-4 space-y-2">
                <li className="flex items-center gap-2 text-neutral-700 dark:text-neutral-300">
    <CheckIcon className="w-5 h-5 text-[#61022e]" />All Pro features</li>
       <li className="flex items-center gap-2 text-neutral-700 dark:text-neutral-300">
    <CheckIcon className="w-5 h-5 text-[#61022e]" />Unlimited SaaS workflows</li>
       <li className="flex items-center gap-2 text-neutral-700 dark:text-neutral-300">
    <CheckIcon className="w-5 h-5 text-[#61022e]" />Dedicated account manager</li>
       <li className="flex items-center gap-2 text-neutral-700 dark:text-neutral-300">
    <CheckIcon className="w-5 h-5 text-[#61022e]" />Custom integrations</li>
       <li className="flex items-center gap-2 text-neutral-700 dark:text-neutral-300">
    <CheckIcon className="w-5 h-5 text-[#61022e]" />White-label branding options</li>
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
