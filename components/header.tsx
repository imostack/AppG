"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { MobileNav } from "@/components/mobile-nav"
import { ThemeToggle } from "@/components/theme-toggle"
import { motion } from "framer-motion"
import { useTheme } from "@/components/theme-provider"

export function Header() {
  const { theme } = useTheme()

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="sticky top-0 z-50 border-b border-border/40 bg-background/80 backdrop-blur-md"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* --- LOGO --- */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex items-center gap-2"
          >
            <div className="relative flex items-center">
              {/* Light logo */}
              <Image
                src="/logo-light.png"
                alt="App Guts Light Logo"
                width={140}
                height={140}
                priority
                className={`h-10 w-auto sm:h-12 md:h-14 transition-opacity duration-300 ${
                  theme === "dark" ? "opacity-0 absolute" : "opacity-100"
                }`}
              />

              {/* Dark logo */}
              <Image
                src="/logo-dark.png"
                alt="App Guts Dark Logo"
                width={140}
                height={140}
                priority
                className={`h-10 w-auto sm:h-12 md:h-14 transition-opacity duration-300 ${
                  theme === "dark" ? "opacity-100" : "opacity-0 absolute"
                }`}
              />
            </div>
          </motion.div>

          {/* --- NAV LINKS --- */}
          <nav className="hidden gap-8 md:flex">
            {["Home", "Products", "About", "Contact"].map((item, index) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 + index * 0.05 }}
              >
                <Link
                  href={`#${item.toLowerCase()}`}
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  {item}
                </Link>
              </motion.div>
            ))}
          </nav>

          {/* --- RIGHT ACTIONS (THEME + AUTH) --- */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="hidden gap-3 md:flex items-center"
          >
            <ThemeToggle />
            <Button variant="ghost" asChild>
              <Link href="/sign-in">Sign In</Link>
            </Button>
            <Button asChild>
              <Link href="/sign-up">Get Started</Link>
            </Button>
          </motion.div>

          <MobileNav />
        </div>
      </div>
    </motion.header>
  )
}