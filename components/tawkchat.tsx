"use client"

import { useEffect } from "react"

export default function TawkChat() {
  useEffect(() => {
    const script = document.createElement("script")
    script.async = true
    script.src = "https://embed.tawk.to/69021e3cb22c021953b669ac/1j8o4c7mn"
    script.charset = "UTF-8"
    script.setAttribute("crossorigin", "*")
    document.body.appendChild(script)

    return () => {
      document.body.removeChild(script)
    }
  }, [])

  return null
}