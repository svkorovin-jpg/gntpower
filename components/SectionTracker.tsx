"use client"
import { useEffect } from "react"
import { trackEvent } from "@/lib/analytics"

const SECTIONS = [
  { id: "what", name: "why_soft_skills" },
  { id: "who", name: "audiences" },
  { id: "result", name: "what_you_get" },
  { id: "prices", name: "pricing" },
  { id: "contact", name: "contact" },
]

export default function SectionTracker() {
  useEffect(() => {
    const seen = new Set<string>()
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !seen.has(entry.target.id)) {
            seen.add(entry.target.id)
            const section = SECTIONS.find((s) => s.id === entry.target.id)
            if (section) trackEvent("section_view", { section: section.name })
          }
        })
      },
      { threshold: 0.3 }
    )

    SECTIONS.forEach(({ id }) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })

    return () => observer.disconnect()
  }, [])

  return null
}
