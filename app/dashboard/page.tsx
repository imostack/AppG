"use client"

import { useEffect } from "react"
import { useRouter } from "next/navigation"
import { useAuth } from "@/hooks/useAuth"

export default function DashboardPage() {
  const { user, loading } = useAuth()
  const router = useRouter()

  useEffect(() => {
    if (!loading && !user) {
      router.push("/sign-in") // redirect if not logged in
    }
  }, [user, loading, router])

  if (loading) return <p>Loading...</p>

  return (
    <div>
      <h1>Welcome, {user?.email}</h1>
      <p>Your dashboard will be Live soon. Please check back later.</p>
    </div>
  )
}
