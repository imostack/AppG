"use client"

import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { ArrowRightIcon } from "@heroicons/react/24/outline"

// Pre-calculate positions to avoid hydration mismatch
const nodePositions = [0, 1, 2, 3, 4, 5].map((i) => {
  const angle = (i * 60) * (Math.PI / 180)
  const radius = 140
  return {
    x: Math.cos(angle) * radius,
    y: Math.sin(angle) * radius,
  }
})

const particlePositions = [...Array(8)].map((_, i) => ({
  x: Math.cos(i * 45 * Math.PI / 180) * 120,
  y: Math.sin(i * 45 * Math.PI / 180) * 120,
}))

export function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    element?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section id="home" className="relative overflow-hidden px-4 py-20 sm:py-24 lg:py-28 sm:px-6 lg:px-8">
      {/* Simplified Background - Mobile-friendly */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        {/* Gradient orbs - smaller, no animation on mobile */}
        <div className="absolute top-0 right-0 h-[300px] w-[300px] lg:h-[400px] lg:w-[400px] rounded-full bg-primary/5 blur-2xl" />
        <div className="absolute bottom-0 left-0 h-[300px] w-[300px] lg:h-[400px] lg:w-[400px] rounded-full bg-purple-500/5 blur-2xl" />

        {/* Floating geometric shapes - desktop only */}
        <div className="hidden lg:block">
          <div className="absolute top-1/4 right-1/4 w-20 h-20 border-2 border-indigo-500/20 rounded-lg" />
          <div className="absolute bottom-1/3 left-1/4 w-16 h-16 border-2 border-purple-500/20 rounded-full" />
          <div className="absolute top-1/2 left-1/3 w-12 h-12 bg-gradient-to-br from-indigo-500/10 to-purple-500/10 rounded-lg" />
        </div>
      </div>

      <div className="mx-auto max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center lg:text-left"
          >
            {/* Main Headline - Platform Builder Positioning */}
            <h1 className="mb-8 text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-foreground leading-[1.1]">
              Digital platforms
              <br />
              <span className="text-muted-foreground">that power Africa</span>
            </h1>

            {/* Subtitle - Clear value prop */}
            <p className="mb-12 text-lg sm:text-xl text-muted-foreground lg:max-w-lg font-light leading-relaxed">
              App Guts builds scalable digital platforms for communities and businesses across Africa. Events Kona is our flagship product.
            </p>

            {/* CTA Buttons - Product focused */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center mb-12">
              <Button
                size="lg"
                onClick={() => scrollToSection("products")}
                className="bg-foreground text-background hover:bg-foreground/90 px-8 h-12 text-base font-medium"
              >
                Explore our products
                <ArrowRightIcon className="ml-2 h-4 w-4" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => scrollToSection("about")}
                className="px-8 h-12 text-base font-medium"
              >
                About App Guts
              </Button>
            </div>

            {/* Product badges */}
            <div className="flex flex-wrap justify-center lg:justify-start items-center gap-6 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-indigo-500" />
                <span className="font-medium">Events Kona — Flagship</span>
              </div>
            </div>
          </motion.div>

          {/* Tech Illustration - Desktop only, simplified */}
          <div className="relative hidden lg:block">
            <div className="relative aspect-square max-w-lg mx-auto">
              {/* Central Hub - No animation */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-32 h-32 rounded-3xl bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 shadow-2xl shadow-indigo-500/20" />
              </div>

              {/* Orbiting Nodes - Static */}
              {nodePositions.map((pos, i) => (
                <div
                  key={i}
                  className="absolute top-1/2 left-1/2"
                  style={{
                    transform: `translate(${pos.x - 24}px, ${pos.y - 24}px)`,
                  }}
                >
                  <div className="w-12 h-12 rounded-xl bg-background border-2 border-indigo-500/40 shadow-lg flex items-center justify-center">
                    <div className="w-6 h-6 rounded-lg bg-gradient-to-br from-indigo-400 to-purple-400" />
                  </div>
                </div>
              ))}

              {/* Connecting Lines */}
              <svg className="absolute inset-0 w-full h-full" style={{ overflow: 'visible' }}>
                <defs>
                  <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="rgb(99, 102, 241)" stopOpacity="0.2" />
                    <stop offset="100%" stopColor="rgb(168, 85, 247)" stopOpacity="0.2" />
                  </linearGradient>
                </defs>
                {nodePositions.map((pos, i) => (
                  <line
                    key={i}
                    x1="200"
                    y1="200"
                    x2={pos.x + 200}
                    y2={pos.y + 200}
                    stroke="url(#lineGradient)"
                    strokeWidth="2"
                  />
                ))}
              </svg>

              {/* Data Particles */}
              {particlePositions.map((pos, i) => (
                <div
                  key={`particle-${i}`}
                  className="absolute w-2 h-2 rounded-full bg-indigo-400/30"
                  style={{
                    left: '50%',
                    top: '50%',
                    transform: `translate(${pos.x}px, ${pos.y}px)`,
                  }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
