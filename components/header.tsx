"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { MobileNav } from "@/components/mobile-nav"
import { ThemeToggle } from "@/components/theme-toggle"
import { useTheme } from "@/components/theme-provider"

export function Header() {
  const { theme } = useTheme()

  return (
    <header className="sticky top-0 z-50 border-b border-border/40 bg-background/95 sm:backdrop-blur-sm sm:bg-background/90">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 sm:h-18 items-center justify-between">

          {/* --- LOGO --- */}
          <div className="flex items-center gap-2">
            <Link href="/#home" className="relative flex items-center group">
              <Image
                src="/logo-light.png"
                alt="App Guts"
                width={180}
                height={180}
                priority
                className={`h-14 w-auto sm:h-16 md:h-20 transition-opacity duration-300 group-hover:scale-105 ${
                  theme === "dark" ? "opacity-0 absolute" : "opacity-100"
                }`}
              />
              <Image
                src="/logo-dark.png"
                alt="App Guts"
                width={180}
                height={180}
                priority
                className={`h-14 w-auto sm:h-16 md:h-20 transition-opacity duration-300 group-hover:scale-105 ${
                  theme === "dark" ? "opacity-100" : "opacity-0 absolute"
                }`}
              />
            </Link>
          </div>

          {/* --- NAV LINKS --- */}
          <nav className="hidden gap-1 md:flex">
            {[
              { label: "Products", href: "/#products" },
              { label: "About", href: "/#about" },
              { label: "Contact", href: "/#contact" },
            ].map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="relative px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors rounded-lg hover:bg-primary/5 group"
              >
                {item.label}
                <span className="absolute bottom-0 left-1/2 h-0.5 w-0 bg-gradient-to-r from-primary to-purple-600 transition-all duration-300 group-hover:w-3/4 -translate-x-1/2" />
              </Link>
            ))}
          </nav>

          {/* --- RIGHT ACTIONS --- */}
          <div className="flex items-center gap-2 sm:gap-3">
            <ThemeToggle />
            <div className="hidden md:flex items-center gap-2">
              <Button asChild className="bg-gradient-to-r from-primary to-purple-700 hover:from-primary/90 hover:to-purple-700/90 shadow-lg shadow-primary/20">
                <a href="https://eventskona.com/waitlist" target="_blank" rel="noopener noreferrer">Join Waitlist</a>
              </Button>
            </div>
          </div>

          <MobileNav />
        </div>
      </div>
    </header>
  )
}
