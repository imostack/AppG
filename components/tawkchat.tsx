"use client"

import { useEffect } from "react"

export default function TawkChat() {
  useEffect(() => {
    if (typeof window === "undefined") return
    if (document.getElementById("tawk-script")) return // prevent duplicates

    const s1 = document.createElement("script")
    s1.id = "tawk-script"
    s1.async = true
    s1.src = "https://embed.tawk.to/69021e3cb22c021953b669ac/1j8o4c7mn"
    s1.charset = "UTF-8"
    s1.setAttribute("crossorigin", "*")

    document.body.appendChild(s1)
  }, [])

  return null
}