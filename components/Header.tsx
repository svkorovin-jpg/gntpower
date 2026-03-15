"use client"
import { useEffect, useState } from "react"
import { trackEvent } from "@/lib/analytics"
import { setAppLocale } from "@/lib/locale"

type NavMessages = {
  what: string
  who: string
  result: string
  prices: string
  contact: string
  demo: string
  key: string
}

type HeaderProps = {
  nav: NavMessages
  lang: "en" | "ua" | "ru"
}

const LANG_LABELS: Record<string, string> = { ua: "УКР", ru: "РУС", en: "ENG" }
const LANG_ORDER = ["ua", "ru", "en"] as const

export default function Header({ nav, lang }: HeaderProps) {
  const [scrolled, setScrolled] = useState(false)
  const [langOpen, setLangOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  useEffect(() => {
    if (!langOpen) return
    const close = () => setLangOpen(false)
    document.addEventListener("click", close)
    return () => document.removeEventListener("click", close)
  }, [langOpen])

  return (
    <header
      className={`sticky top-0 z-[100] bg-white border-b border-[#EDEDED] px-4 md:px-10 flex items-center justify-between h-[70px] md:h-[150px] transition-shadow duration-300 ${
        scrolled ? "shadow-md" : ""
      }`}
    >
      {/* Logo */}
      <a href={`/${lang}`} className="no-underline shrink-0">
        <img
          src="/photo.png"
          alt="G&T Power"
          className="h-12 md:h-[112px] w-auto rounded-[6px] block"
        />
      </a>

      {/* Nav links — hidden on mobile */}
      <nav className="hidden md:flex gap-8 list-none m-0 p-0">
        {[
          { label: nav.what, anchor: "what" },
          { label: nav.who, anchor: "who" },
          { label: nav.result, anchor: "result" },
          { label: nav.prices, anchor: "prices" },
          { label: nav.contact, anchor: "contact" },
        ].map(({ label, anchor }) => (
          <a
            key={anchor}
            href={`#${anchor}`}
            className="text-[14px] font-medium text-[#111] no-underline tracking-[0.02em] uppercase hover:text-[#308F16] transition-colors duration-200"
          >
            {label}
          </a>
        ))}
      </nav>

      {/* Right side: language switcher + CTAs */}
      <div className="flex items-center gap-3 md:gap-4">
        {/* Language switcher */}
        <div className="relative" onClick={(e) => e.stopPropagation()}>
          <button
            onClick={() => setLangOpen((v) => !v)}
            className="flex items-center gap-1 text-[13px] font-bold text-[#308F16] uppercase border-b-2 border-[#308F16] pb-[2px] bg-transparent cursor-pointer select-none"
          >
            {LANG_LABELS[lang]}
            <span className={`text-[10px] transition-transform duration-200 ${langOpen ? "rotate-180" : ""}`}>▼</span>
          </button>
          {langOpen && (
            <div className="absolute top-full right-0 mt-2 bg-white border border-[#EDEDED] rounded-lg shadow-lg overflow-hidden z-50">
              {LANG_ORDER.filter((l) => l !== lang).map((l) => (
                <a
                  key={l}
                  href={`/${l}`}
                  onClick={() => trackEvent("language_switch", { from: lang, to: l })}
                  className="block px-4 py-2 text-[13px] font-medium text-[#555] uppercase no-underline hover:bg-[#f7fdf4] hover:text-[#308F16] transition-colors duration-150"
                >
                  {LANG_LABELS[l]}
                </a>
              ))}
            </div>
          )}
        </div>

        {/* Client area icon */}
        <a
          href="https://client.gntpower.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center w-10 h-10 rounded-full border-2 border-[#308F16] shrink-0 hover:bg-[#308F16] transition-colors duration-200 group"
        >
          <img
            src="/lk.svg"
            alt="Client area"
            width="22"
            height="22"
            className="group-hover:brightness-0 group-hover:invert transition-all duration-200"
          />
        </a>

        {/* Demo button — hidden on mobile */}
        <a
          href="https://app.gntpower.com/demo"
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => { setAppLocale(lang); trackEvent("cta_click", { location: "header", button: "demo" }) }}
          className="hidden md:inline-block py-[10px] px-5 text-[14px] font-semibold rounded-[6px] bg-[#308F16] text-white no-underline whitespace-nowrap hover:bg-[#267a12] transition-colors duration-200"
        >
          {nav.demo}
        </a>
      </div>
    </header>
  )
}
