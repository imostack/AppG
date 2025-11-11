import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// Returns true if the user has accepted cookies
export function hasCookieConsent(): boolean {
  if (typeof window === "undefined") return false
  return localStorage.getItem("cookie-consent") === "accepted"
}
