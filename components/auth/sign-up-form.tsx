"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { motion } from "framer-motion"

export function SignUpForm() {
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000))
    setIsLoading(false)
  }

  return (
    <motion.form
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      onSubmit={handleSubmit}
      className="space-y-4"
    >
      <div className="space-y-2">
        <Label htmlFor="name" className="text-foreground">
          Full Name
        </Label>
        <Input
          id="name"
          type="text"
          placeholder="John Doe"
          required
          className="bg-card border-border/40 text-foreground placeholder:text-muted-foreground"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="email" className="text-foreground">
          Email
        </Label>
        <Input
          id="email"
          type="email"
          placeholder="you@example.com"
          required
          className="bg-card border-border/40 text-foreground placeholder:text-muted-foreground"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="password" className="text-foreground">
          Password
        </Label>
        <Input
          id="password"
          type="password"
          placeholder="••••••••"
          required
          className="bg-card border-border/40 text-foreground placeholder:text-muted-foreground"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="confirm" className="text-foreground">
          Confirm Password
        </Label>
        <Input
          id="confirm"
          type="password"
          placeholder="••••••••"
          required
          className="bg-card border-border/40 text-foreground placeholder:text-muted-foreground"
        />
      </div>

      <Button type="submit" className="w-full" disabled={isLoading}>
        {isLoading ? "Creating account..." : "Create account"}
      </Button>

      <div className="relative">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t border-border/40" />
        </div>
        <div className="relative flex justify-center text-sm">
          <span className="bg-background px-2 text-muted-foreground">Or sign up with</span>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-3">
        <Button variant="outline" type="button" className="border-border/40 bg-transparent">
          Google
        </Button>
        <Button variant="outline" type="button" className="border-border/40 bg-transparent">
          GitHub
        </Button>
      </div>

      <p className="text-xs text-muted-foreground text-center">
        By signing up, you agree to our{" "}
        <a href="#" className="text-primary hover:text-primary/80 transition-colors">
          Terms of Service
        </a>{" "}
        and{" "}
        <a href="#" className="text-primary hover:text-primary/80 transition-colors">
          Privacy Policy
        </a>
      </p>
    </motion.form>
  )
}
