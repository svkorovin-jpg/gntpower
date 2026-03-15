"use client"
import FadeIn from "./FadeIn"
import { trackEvent } from "@/lib/analytics"
import { setAppLocale } from "@/lib/locale"

type WhySoftSkillsProps = {
  title: string
  tagline: string
  text: string
  button: string
  lang: string
}

export default function WhySoftSkills({ title, tagline, text, button, lang }: WhySoftSkillsProps) {
  return (
    <section id="what" className="bg-white border-t border-[#EDEDED] py-14 px-5 md:py-[100px] md:px-10">
      <FadeIn className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-[1fr_1.6fr] gap-10 md:gap-16 items-center">
        <div>
          <p className="text-[13px] font-bold tracking-[0.1em] uppercase text-[#308F16] mb-4">{tagline}</p>
          <h2 className="font-extrabold text-[#111] leading-[1.15] tracking-[-0.5px] mb-7" style={{ fontSize: "clamp(28px, 3vw, 42px)" }}>
            {title}
          </h2>
          <p className="text-[17px] text-[#444] leading-[1.7] mb-8">{text}</p>
          <a
            href="https://app.gntpower.com/demo"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => { setAppLocale(lang); trackEvent("cta_click", { location: "why_soft_skills", button: "demo" }) }}
            className="inline-block py-[14px] px-8 rounded-lg bg-[#308F16] text-white font-bold text-[15px] no-underline hover:bg-[#267a12] active:scale-95 transition-all duration-200"
          >
            {button}
          </a>
        </div>
        <div className="hidden md:flex items-center justify-center">
          <video
            src="/why.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-auto rounded-xl"
          />
        </div>
      </FadeIn>
    </section>
  )
}
