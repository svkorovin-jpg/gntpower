"use client"
import { setAppLocale } from "@/lib/locale"

type AppLinkProps = {
  href: string
  lang: string
  className?: string
  children: React.ReactNode
}

export default function AppLink({ href, lang, className, children }: AppLinkProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      onClick={() => setAppLocale(lang)}
      className={className}
    >
      {children}
    </a>
  )
}
