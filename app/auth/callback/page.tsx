"use client"

import { useEffect } from "react"
import { useRouter } from "next/navigation"
import { supabase } from "@/lib/supabaseClient"

export default function AuthCallbackPage() {
  const router = useRouter()

  useEffect(() => {
    const handleSession = async () => {
      // Get the current session (user info)
      const { data, error } = await supabase.auth.getSession()

      if (error) {
        console.error("Error fetching session:", error)
        router.push("/sign-in")
        return
      }

      if (data.session) {
        // ✅ If user is logged in, redirect to dashboard
        router.replace("/dashboard")
      } else {
        // 🚫 If no session (e.g., invalid link), back to login
        router.replace("/sign-in")
      }
    }

    handleSession()
  }, [router])

  return (
    <div className="flex items-center justify-center min-h-screen text-muted-foreground">
      <p>Verifying your session, please wait...</p>
    </div>
  )
}
