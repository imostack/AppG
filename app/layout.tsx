import type React from "react"
import type { Metadata } from "next"
import { Inter, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { ThemeProvider } from "@/components/theme-provider"
import TawkChat from "@/components/TawkChat"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })
const geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  metadataBase: new URL("https://appguts.com"),
  title: {
    default: "App Guts Limited - Enterprise SaaS Platform",
    template: "%s | App Guts",
  },
  description:
    "App Guts Limited is a forward-thinking SaaS company empowering modern teams with scalable, intelligent digital solutions.",
  generator: "App Guts",
  applicationName: "App Guts Platform",
  keywords: [
    "SaaS",
    "App Guts",
    "Alprosel Tech",
    "enterprise software",
    "cloud platform",
    "business automation",
  ],
  authors: [{ name: "App Guts Limited", url: "https://appguts.com" }],
  openGraph: {
    title: "App Guts Limited - Enterprise SaaS Platform",
    description:
      "App Guts Limited is a forward-thinking SaaS company empowering modern teams with scalable, intelligent digital solutions.",
    url: "https://appguts.com",
    siteName: "App Guts",
    images: [
      {
        url: "/og-image.png",
        width: 1500,
        height: 498,
        alt: "App Guts - SaaS Solutions for Modern Businesses",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "App Guts Limited - Enterprise SaaS Platform",
    description:
      "App Guts Limited is a forward-thinking SaaS company empowering modern teams with scalable, intelligent digital solutions.",
    images: ["/og-image.png"],
    creator: "@appguts",
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} antialiased`}>
        <ThemeProvider>{children}</ThemeProvider>
        <TawkChat />
        <Analytics />
      </body>
    </html>
  )
}