"use client"

import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { SignInForm } from "@/components/auth/sign-in-form"
import { ArrowLeft } from "lucide-react"

export default function SignInPage() {
  const router = useRouter()

  return (
    <div className="relative min-h-screen flex items-center justify-center px-4 py-12">
      {/* Back button */}
      <button
        onClick={() => router.back()}
        className="absolute top-6 left-6 flex items-center text-sm text-muted-foreground hover:text-foreground transition-colors"
      >
        <ArrowLeft className="w-4 h-4 mr-2" />
        Back
      </button>

      <div className="w-full max-w-md">
        <div className="mb-8 text-center">
          <div className="mb-4 flex justify-center">
            {/* Clickable logo with theme support */}
            <Link href="/">
              <Image
                src="/logo-light.png"
                alt="App Guts Logo"
                width={40}
                height={40}
                className="block dark:hidden"
                priority
              />
              <Image
                src="/logo-dark.png"
                alt="App Guts Logo"
                width={40}
                height={40}
                className="hidden dark:block"
                priority
              />
            </Link>
          </div>

          <h1 className="text-3xl font-bold text-foreground">Welcome back</h1>
          <p className="mt-2 text-muted-foreground">Sign in to your App Guts account</p>
        </div>

        <SignInForm />

        <p className="mt-6 text-center text-sm text-muted-foreground">
          Don't have an account?{" "}
          <Link
            href="/sign-up"
            className="font-medium text-primary hover:text-primary/80 transition-colors"
          >
            Sign up
          </Link>
        </p>
      </div>
    </div>
  )
}
