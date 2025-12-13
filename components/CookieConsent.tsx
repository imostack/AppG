"use client"

import { useEffect, useState } from "react"

export default function CookieConsent() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent")
    if (!consent) {
      const timer = setTimeout(() => setVisible(true), 1000)
      return () => clearTimeout(timer)
    }
  }, [])

  const handleAccept = () => {
    localStorage.setItem("cookie-consent", "accepted")
    setVisible(false)
    // ✅ Trigger analytics or tracking scripts here (if needed)
  }

  const handleDecline = () => {
    localStorage.setItem("cookie-consent", "declined")
    setVisible(false)
    // 🚫 Do not load analytics or tracking scripts
  }

  if (!visible) return null

  return (
    <div
      className="fixed bottom-4 left-4 right-4 sm:left-6 sm:right-auto sm:max-w-md bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-700 shadow-lg rounded-2xl p-4 z-[9999] flex flex-col gap-3 sm:gap-2 sm:flex-row sm:items-center sm:justify-between transition-all duration-500 animate-fade-in"
    >
      <div className="flex flex-col gap-1">
        <p className="text-sm text-neutral-800 dark:text-neutral-200 leading-snug">
          🍪 <span className="font-semibold text-[#61022e]">App Guts</span> uses cookies to improve your experience and analyze traffic.
        </p>
        <p className="text-xs text-neutral-600 dark:text-neutral-400">
          Read our{" "}
          <a
            href="/cookie-policy"
            className="underline text-[#61022e] hover:text-[#7a0940] transition-colors"
          >
            Cookie Policy
          </a>
          .
        </p>
      </div>

      <div className="flex gap-2 mt-2 sm:mt-0">
        <button
          onClick={handleDecline}
          className="border border-neutral-300 dark:border-neutral-700 text-neutral-700 dark:text-neutral-300 px-4 py-2 rounded-xl text-sm hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
        >
          Decline
        </button>
        <button
          onClick={handleAccept}
          className="bg-[#61022e] hover:bg-[#7a0940] text-white font-medium text-sm px-4 py-2 rounded-xl shadow-md transition-colors"
        >
          Accept
        </button>
      </div>

      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in {
          animation: fade-in 0.6s ease forwards;
        }
      `}</style>
    </div>
  )
}
