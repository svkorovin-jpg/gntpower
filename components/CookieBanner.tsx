"use client"
import { useEffect, useState } from "react"
import { usePathname } from "next/navigation"

const t = {
  ru: {
    text: "Мы используем Google Analytics для анализа трафика. Данные анонимизированы.",
    privacy: "Политика конфиденциальности",
    accept: "Принять",
    decline: "Отклонить",
    privacyHref: "/ru/privacy",
  },
  en: {
    text: "We use Google Analytics to analyse traffic. Data is anonymised.",
    privacy: "Privacy Policy",
    accept: "Accept",
    decline: "Decline",
    privacyHref: "/en/privacy",
  },
  ua: {
    text: "Ми використовуємо Google Analytics для аналізу трафіку. Дані анонімізовані.",
    privacy: "Політика конфіденційності",
    accept: "Прийняти",
    decline: "Відхилити",
    privacyHref: "/ua/privacy",
  },
}

function detectLang(pathname: string): keyof typeof t {
  if (pathname.startsWith("/ru")) return "ru"
  if (pathname.startsWith("/ua")) return "ua"
  return "en"
}

export default function CookieBanner() {
  const pathname = usePathname()
  const [visible, setVisible] = useState(false)
  const lang = detectLang(pathname)
  const strings = t[lang]

  useEffect(() => {
    const consent = localStorage.getItem("cookie_consent")
    if (!consent) {
      setVisible(true)
    } else if (consent === "granted") {
      window.gtag?.("consent", "update", { analytics_storage: "granted" })
    }
  }, [])

  function accept() {
    localStorage.setItem("cookie_consent", "granted")
    window.gtag?.("consent", "update", { analytics_storage: "granted" })
    setVisible(false)
  }

  function decline() {
    localStorage.setItem("cookie_consent", "denied")
    setVisible(false)
  }

  if (!visible) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-[#111] text-white px-5 py-4 flex flex-col sm:flex-row items-center gap-4 justify-between shadow-2xl">
      <p className="text-[13px] text-[#ccc] m-0 leading-relaxed">
        {strings.text}{" "}
        <a href={strings.privacyHref} className="text-[#63AF4F] underline hover:text-[#308F16]">
          {strings.privacy}
        </a>
      </p>
      <div className="flex gap-3 shrink-0">
        <button
          onClick={decline}
          className="px-5 py-2 rounded-lg text-[13px] font-medium border border-white/20 text-[#aaa] hover:bg-white/10 transition-colors"
        >
          {strings.decline}
        </button>
        <button
          onClick={accept}
          className="px-5 py-2 rounded-lg text-[13px] font-bold bg-[#308F16] text-white hover:bg-[#267312] transition-colors"
        >
          {strings.accept}
        </button>
      </div>
    </div>
  )
}
