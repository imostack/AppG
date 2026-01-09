import type React from "react"
import type { Metadata, Viewport } from "next"
import { Inter } from 'next/font/google'
import { Analytics } from "@vercel/analytics/next"
import { ThemeProvider } from "@/components/theme-provider"
import Script from "next/script"
import CookieConsent from "@/components/CookieConsent"
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
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "App Guts",
  },
  formatDetection: {
    telephone: false,
  },
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
        <ThemeProvider>
          {children}
          {/* ✅ Cookie Consent banner appears globally */}
          <CookieConsent />
        </ThemeProvider>

        <Analytics />

        {/* ✅ Tawk.to script - lazyOnload prevents React 19 crash */}
        {/* <Script
          id="tawk-to"
          strategy="lazyOnload"
          dangerouslySetInnerHTML={{
            __html: `
              var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
              (function(){
                var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
                s1.async=true;
                s1.src='https://embed.tawk.to/69021e3cb22c021953b669ac/1j8o4c7mn';
                s1.charset='UTF-8';
                s1.setAttribute('crossorigin','*');
                s0.parentNode.insertBefore(s1,s0);
              })();
            `
          }}
        /> */}
      </body>
    </html>
  )
}
