import "./globals.css"
import { Inter } from "next/font/google"
import Script from "next/script"

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
      </body>
    </html>
  )
}