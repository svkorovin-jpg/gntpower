import { NextRequest, NextResponse } from "next/server"

const LOCALES = ["en", "ua", "ru"] as const
type Locale = (typeof LOCALES)[number]

function detectLocale(request: NextRequest): Locale {
  const header = request.headers.get("accept-language") ?? ""
  // Parse "uk,ru;q=0.9,en;q=0.8" → ["uk", "ru", "en"]
  const preferred = header
    .split(",")
    .map((part) => part.split(";")[0].trim().toLowerCase().slice(0, 2))

  for (const lang of preferred) {
    if (lang === "uk") return "ua"
    if (lang === "ru") return "ru"
    if (lang === "en") return "en"
  }
  return "en" // default fallback
}

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl

  // Only redirect the root path
  if (pathname !== "/") return NextResponse.next()

  const locale = detectLocale(request)
  return NextResponse.redirect(new URL(`/${locale}`, request.url))
}

export const config = {
  matcher: ["/"],
}
