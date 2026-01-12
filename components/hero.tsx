"use client"

import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { ArrowRightIcon } from "@heroicons/react/24/outline"

export function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    element?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section id="home" className="relative overflow-hidden px-4 py-32 sm:py-40 lg:py-48 sm:px-6 lg:px-8">
      {/* Animated Tech Background */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        {/* Gradient orbs */}
        <div className="absolute top-0 right-0 h-[600px] w-[600px] rounded-full bg-primary/5 blur-3xl animate-pulse" />
        <div className="absolute bottom-0 left-0 h-[600px] w-[600px] rounded-full bg-purple-500/5 blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />

        {/* Floating geometric shapes */}
        <motion.div
          className="absolute top-1/4 right-1/4 w-20 h-20 border-2 border-indigo-500/20 rounded-lg"
          animate={{
            y: [0, -20, 0],
            rotate: [0, 90, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-1/3 left-1/4 w-16 h-16 border-2 border-purple-500/20 rounded-full"
          animate={{
            y: [0, 30, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute top-1/2 left-1/3 w-12 h-12 bg-gradient-to-br from-indigo-500/10 to-purple-500/10 rounded-lg"
          animate={{
            x: [0, 40, 0],
            rotate: [0, -90, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Grid pattern overlay */}
        <div className="absolute inset-0 opacity-[0.03]">
          <div className="h-full w-full" style={{
            backgroundImage: `linear-gradient(currentColor 1px, transparent 1px), linear-gradient(90deg, currentColor 1px, transparent 1px)`,
            backgroundSize: '50px 50px',
          }} />
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
            {/* Main Headline - Anthropic Style */}
            <h1 className="mb-8 text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-foreground leading-[1.1]">
              Digital products
              <br />
              <span className="text-muted-foreground">for modern business</span>
            </h1>

            {/* Subtitle */}
            <p className="mb-12 text-lg sm:text-xl text-muted-foreground lg:max-w-lg font-light leading-relaxed">
              Building scalable platforms that connect people to experiences and businesses to growth.
            </p>

            {/* CTA Buttons - Cleaner Style */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center mb-12">
              <Button
                size="lg"
                onClick={() => scrollToSection("contact")}
                className="bg-foreground text-background hover:bg-foreground/90 px-8 h-12 text-base font-medium"
              >
                Get Started
                <ArrowRightIcon className="ml-2 h-4 w-4" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => scrollToSection("products")}
                className="px-8 h-12 text-base font-medium"
              >
                View Products
              </Button>
            </div>

            {/* Company Logos/Badges - Minimal */}
            {/* <div className="flex flex-wrap justify-center lg:justify-start items-center gap-6 text-sm text-muted-foreground">
              <span className="font-medium">Events Kona</span>
              <span className="text-border">•</span>
              <span className="font-medium">AccessRA Partnership</span>
              <span className="text-border">•</span>
              <span className="font-medium">Enterprise SaaS</span>
            </div> */}
          </motion.div>

          {/* Animated Tech Illustration */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative hidden lg:block"
          >
            <div className="relative aspect-square max-w-lg mx-auto">
              {/* Central Hub - Simplified for Safari */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-32 h-32 rounded-3xl bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 shadow-2xl shadow-indigo-500/20 animate-spin-slow" />
              </div>

              {/* Orbiting Nodes - Simplified for Safari */}
              {[0, 1, 2, 3, 4, 5].map((i) => {
                const angle = (i * 60) * (Math.PI / 180)
                const radius = 140
                const x = Math.cos(angle) * radius
                const y = Math.sin(angle) * radius

                return (
                  <div
                    key={i}
                    className="absolute top-1/2 left-1/2"
                    style={{
                      transform: `translate(${x - 24}px, ${y - 24}px)`,
                    }}
                  >
                    <div className="w-12 h-12 rounded-xl bg-background border-2 border-indigo-500/40 shadow-lg flex items-center justify-center backdrop-blur-sm">
                      <div className="w-6 h-6 rounded-lg bg-gradient-to-br from-indigo-400 to-purple-400" />
                    </div>
                  </div>
                )
              })}

              {/* Connecting Lines - Simplified for Safari compatibility */}
              <svg className="absolute inset-0 w-full h-full" style={{ overflow: 'visible' }}>
                <defs>
                  <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="rgb(99, 102, 241)" stopOpacity="0.2" />
                    <stop offset="100%" stopColor="rgb(168, 85, 247)" stopOpacity="0.2" />
                  </linearGradient>
                </defs>
                {[0, 1, 2, 3, 4, 5].map((i) => {
                  const angle = (i * 60) * (Math.PI / 180)
                  const radius = 140
                  const x = Math.cos(angle) * radius + 200
                  const y = Math.sin(angle) * radius + 200

                  return (
                    <line
                      key={i}
                      x1="200"
                      y1="200"
                      x2={x}
                      y2={y}
                      stroke="url(#lineGradient)"
                      strokeWidth="2"
                    />
                  )
                })}
              </svg>

              {/* Data Particles - Simplified for Safari */}
              {[...Array(8)].map((_, i) => (
                <div
                  key={`particle-${i}`}
                  className="absolute w-2 h-2 rounded-full bg-indigo-400/30"
                  style={{
                    left: '50%',
                    top: '50%',
                    transform: `translate(${Math.cos(i * 45 * Math.PI / 180) * 120}px, ${Math.sin(i * 45 * Math.PI / 180) * 120}px)`,
                  }}
                />
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
