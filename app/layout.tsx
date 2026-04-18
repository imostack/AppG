import type React from "react"
import type { Metadata, Viewport } from "next"
import { Inter } from 'next/font/google'
import { Analytics } from "@vercel/analytics/next"
import { ThemeProvider } from "@/components/theme-provider"
import CookieConsent from "@/components/CookieConsent"
import Script from "next/script"
import "./globals.css"

const inter = Inter({ subsets: ['latin'] })

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  viewportFit: "cover",
}

export const metadata: Metadata = {
  metadataBase: new URL("https://appguts.com"),
  title: {
    default: "App Guts Limited — Building Platforms That Power Communities",
    template: "%s | App Guts",
  },
  description:
    "App Guts Limited builds modern SaaS platforms for African communities, creators, and businesses. Our flagship product Events Kona is an event discovery and ticketing platform launching in Port Harcourt, Nigeria in April 2026.",
  generator: "Next.js",
  applicationName: "App Guts",
  keywords: [
    "App Guts",
    "Events Kona",
    "event ticketing Nigeria",
    "event discovery Port Harcourt",
    "SaaS platforms Africa",
    "African tech startup",
    "event management Nigeria",
    "Nigerian event platform",
    "Port Harcourt events",
    "buy event tickets Nigeria",
    "platform builder Africa",
    "App Guts Limited",
    "events Port Harcourt",
    "ticketing platform Nigeria",
  ],
  authors: [{ name: "App Guts Limited", url: "https://appguts.com" }],
  creator: "App Guts Limited",
  publisher: "App Guts Limited",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://appguts.com/",
  },
  appleWebApp: {
    statusBarStyle: "default",
    title: "App Guts",
  },
  formatDetection: {
    telephone: false,
  },
  openGraph: {
    title: "App Guts Limited — Building Platforms That Power Communities",
    description:
      "App Guts builds modern SaaS platforms for African communities, creators, and businesses. Events Kona — event discovery and ticketing — launches in Port Harcourt, Nigeria, April 2026. Join the waitlist.",
    url: "https://appguts.com",
    siteName: "App Guts",
    images: [
      {
        url: "/og-image.png",
        width: 1500,
        height: 498,
        alt: "App Guts Limited — Building Platforms That Power Communities",
      },
    ],
    locale: "en_NG",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "App Guts Limited — Building Platforms That Power Communities",
    description:
      "App Guts builds SaaS platforms for African communities. Events Kona launches in Port Harcourt, Nigeria, April 2026. Join the waitlist on March 6.",
    images: ["/og-image.png"],
    creator: "@appguts",
    site: "@appguts",
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
    other: [
      { rel: "icon", type: "image/png", sizes: "32x32", url: "/favicon-32x32.png" },
      { rel: "icon", type: "image/png", sizes: "16x16", url: "/favicon-16x16.png" },
    ],
  },
  manifest: "/site.webmanifest",
  category: "technology",
}

// JSON-LD structured data
const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "App Guts Limited",
  url: "https://appguts.com",
  logo: "https://appguts.com/logo-light.png",
  description:
    "App Guts Limited builds modern SaaS platforms for African communities, creators, and businesses.",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Port Harcourt",
    addressRegion: "Rivers State",
    addressCountry: "NG",
  },
  contactPoint: {
    "@type": "ContactPoint",
    email: "support@appguts.com",
    contactType: "customer support",
  },
  sameAs: [
    "https://www.linkedin.com/company/app-guts-limited/",
    "https://www.instagram.com/appguts",
  ],
}

const softwareSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "Events Kona",
  applicationCategory: "EventApplication",
  operatingSystem: "Web",
  description:
    "Events Kona is an event discovery, ticketing, and community management platform launching in Port Harcourt, Nigeria in April 2026.",
  offers: {
    "@type": "Offer",
    availability: "https://schema.org/PreOrder",
    url: "https://eventskona.com",
  },
  author: {
    "@type": "Organization",
    name: "App Guts Limited",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <Script
          id="schema-org"
          type="application/ld+json"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([organizationSchema, softwareSchema]),
          }}
        />
      </head>
      <body className={`${inter.className} antialiased`} suppressHydrationWarning>
        <ThemeProvider>
          {children}
          <CookieConsent />
        </ThemeProvider>

        <Analytics />
      </body>
    </html>
  )
}
