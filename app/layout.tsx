import type React from "react"
import type { Metadata } from "next"
import { Inter, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { ThemeProvider } from "@/components/theme-provider"
import Script from "next/script"
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
        url: "/og-image.png", // /public/og-image.png
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
        <Analytics />

        {/* ✅ Tawk.to Live Chat Script */}
        <Script id="tawk-to" strategy="afterInteractive">
          {`
            var Tawk_API = Tawk_API || {}, Tawk_LoadStart = new Date();
            (function() {
              var s1 = document.createElement("script"),
                  s0 = document.getElementsByTagName("script")[0];
              s1.async = true;
              s1.src = 'https://embed.tawk.to/69021e3cb22c021953b669ac/1j8o4c7mn';
              s1.charset = 'UTF-8';
              s1.setAttribute('crossorigin', '*');
              s0.parentNode.insertBefore(s1, s0);
            })();
          `}
        </Script>
      </body>
    </html>
  )
}