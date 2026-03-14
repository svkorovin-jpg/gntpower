import "./globals.css"
import { Inter } from "next/font/google"
import Script from "next/script"
import CookieBanner from "../components/CookieBanner"

const inter = Inter({
  subsets: ["latin", "cyrillic"],
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="uk">
      <head>

        {/* Consent Mode v2 — must run before GA */}
        <Script id="gtag-consent-init" strategy="beforeInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('consent', 'default', {
              analytics_storage: 'denied',
              ad_storage: 'denied',
              wait_for_update: 500
            });
          `}
        </Script>

        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-YX41Z4PE1W"
          strategy="afterInteractive"
        />

        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-YX41Z4PE1W');
          `}
        </Script>

      </head>

      <body className={inter.className}>
        {children}
        <CookieBanner />
      </body>
    </html>
  )
}
