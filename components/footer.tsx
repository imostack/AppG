"use client"

import Image from "next/image"
import { useTheme } from "@/components/theme-provider"

export function Footer() {
  const { theme } = useTheme()

  return (
    <footer className="border-t border-border/40 bg-card/50 px-4 py-12 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-8 md:grid-cols-4">
          {/* --- Logo + Description --- */}
          <div>
            <div className="mb-4 flex items-center gap-2">
              <div className="relative flex items-center">
                {/* Light logo */}
                <Image
                  src="/logo-light.png"
                  alt="App Guts Light Logo"
                  width={140}
                  height={140}
                  className={`h-8 w-auto sm:h-10 transition-opacity duration-300 ${
                    theme === "dark" ? "opacity-0 absolute" : "opacity-100"
                  }`}
                />

                {/* Dark logo */}
                <Image
                  src="/logo-dark.png"
                  alt="App Guts Dark Logo"
                  width={140}
                  height={140}
                  className={`h-8 w-auto sm:h-10 transition-opacity duration-300 ${
                    theme === "dark" ? "opacity-100" : "opacity-0 absolute"
                  }`}
                />
              </div>
            </div>
            <p className="text-sm text-muted-foreground">
              Building digital products that power everyday life.
            </p>
          </div>

          {/* --- Products --- */}
          <div>
            <h4 className="mb-4 font-semibold text-foreground">Products</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="#products" className="hover:text-foreground transition-colors">
                  AccessRA
                </a>
              </li>
              <li>
                <a href="#products" className="hover:text-foreground transition-colors">
                  Events Kona
                </a>
              </li>
              <li>
                <a href="#products" className="hover:text-foreground transition-colors">
                  Custom Apps
                </a>
              </li>
            </ul>
          </div>

          {/* --- Company --- */}
          <div>
            <h4 className="mb-4 font-semibold text-foreground">Company</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="#about" className="hover:text-foreground transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  Careers
                </a>
              </li>
            </ul>
          </div>

          {/* --- Legal --- */}
          <div>
            <h4 className="mb-4 font-semibold text-foreground">Legal</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  Privacy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  Terms
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-foreground transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* --- Bottom Bar --- */}
        <div className="mt-8 border-t border-border/40 pt-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
            <p>&copy; 2025 App Guts Limited. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}