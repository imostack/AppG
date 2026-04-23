"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export function MobileNav() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="md:hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="inline-flex items-center justify-center rounded-md p-2 text-foreground hover:bg-card transition-colors"
      >
        <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
          />
        </svg>
      </button>

      {isOpen && (
        <div className="absolute left-0 right-0 top-16 border-b border-border/40 bg-background/95 backdrop-blur-md">
          <div className="space-y-1 px-4 py-4">
            <Link
              href="/#products"
              className="block rounded-md px-3 py-2 text-sm text-muted-foreground hover:text-foreground hover:bg-card transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Products
            </Link>
            <Link
              href="/#about"
              className="block rounded-md px-3 py-2 text-sm text-muted-foreground hover:text-foreground hover:bg-card transition-colors"
              onClick={() => setIsOpen(false)}
            >
              About
            </Link>
            <Link
              href="/#contact"
              className="block rounded-md px-3 py-2 text-sm text-muted-foreground hover:text-foreground hover:bg-card transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </Link>
            <div className="border-t border-border/40 pt-4 mt-4">
              <Button className="w-full bg-gradient-to-r from-primary to-purple-700 hover:from-primary/90 hover:to-purple-700/90" asChild>
                <a href="https://eventskona.com/waitlist" target="_blank" rel="noopener noreferrer">Join Waitlist</a>
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
