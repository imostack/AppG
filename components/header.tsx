"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { MobileNav } from "@/components/mobile-nav"
import { ThemeToggle } from "@/components/theme-toggle"
import { motion, useScroll, useTransform } from "framer-motion"
import { useTheme } from "@/components/theme-provider"

export function Header() {
  const { theme } = useTheme()
  const { scrollY } = useScroll()
  const headerOpacity = useTransform(scrollY, [0, 100], [0.8, 0.95])

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      style={{
        backgroundColor: theme === "dark"
          ? `rgba(13, 17, 23, ${headerOpacity})`
          : `rgba(255, 255, 255, ${headerOpacity})`
      }}
      className="sticky top-0 z-50 border-b border-border/40 backdrop-blur-xl supports-[backdrop-filter]:bg-background/60"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 sm:h-18 items-center justify-between">
          {/* --- LOGO --- */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex items-center gap-2"
          >
            <Link href="/#home" className="relative flex items-center group">
              {/* Light logo */}
              <Image
                src="/logo-light.png"
                alt="App Guts Light Logo"
                width={140}
                height={140}
                priority
                className={`h-10 w-auto sm:h-12 md:h-14 transition-all duration-300 group-hover:scale-105 ${
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
                className={`h-10 w-auto sm:h-12 md:h-14 transition-all duration-300 group-hover:scale-105 ${
                  theme === "dark" ? "opacity-100" : "opacity-0 absolute"
                }`}
              />
            </Link>
          </motion.div>

          {/* --- NAV LINKS --- */}
          <nav className="hidden gap-1 md:flex">
            {[
              { label: "Products", href: "/#products" },
              { label: "About", href: "/#about" },
              { label: "Custom Solutions", href: "/custom-solutions" },
            ].map((item, index) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 + index * 0.05 }}
              >
                <Link
                  href={item.href}
                  className="relative px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors rounded-lg hover:bg-primary/5 group"
                >
                  {item.label}
                  <span className="absolute bottom-0 left-1/2 h-0.5 w-0 bg-gradient-to-r from-primary to-purple-600 transition-all duration-300 group-hover:w-3/4 group-hover:left-1/8 -translate-x-1/2" />
                </Link>
              </motion.div>
            ))}
          </nav>

          {/* --- RIGHT ACTIONS (THEME + AUTH) --- */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex items-center gap-2 sm:gap-3"
          >
            <ThemeToggle />
            <div className="hidden md:flex items-center gap-2">
              <Button asChild className="bg-gradient-to-r from-primary to-purple-700 hover:from-primary/90 hover:to-purple-700/90 shadow-lg shadow-primary/20">
                <a href="mailto:hello@appguts.com">Contact</a>
              </Button>
            </div>
          </motion.div>

          <MobileNav />
        </div>
      </div>
    </motion.header>
  )
}