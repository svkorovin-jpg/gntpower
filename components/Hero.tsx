"use client"
import FadeIn from "./FadeIn"
import { trackEvent } from "@/lib/analytics"

type HeroProps = {
  title: string
  subtitle: string
  description: string
  button: string
  buttonSecondary: string
}

export default function Hero({ title, subtitle, description, button, buttonSecondary }: HeroProps) {
  return (
    <section
      id="what"
      className="relative overflow-hidden text-white text-center pt-16 pb-14 px-5 md:pt-[120px] md:pb-[100px] md:px-10"
      style={{ background: "linear-gradient(135deg, #308F16 0%, #63AF4F 100%)" }}
    >
      <img src="/greensun.svg" aria-hidden="true" className="absolute top-[-60px] left-[-60px] w-[696px] h-[696px] opacity-25 pointer-events-none brightness-0 invert hidden md:block" />
      <img src="/greensun.svg" aria-hidden="true" className="absolute bottom-[-40px] right-[60px] w-[182px] h-[182px] opacity-[0.15] pointer-events-none brightness-0 invert hidden md:block" />

      <FadeIn className="relative max-w-[820px] mx-auto">
        <h1 className="font-extrabold leading-[1.1] tracking-[-1px] mb-6" style={{ fontSize: "clamp(36px, 5vw, 64px)" }}>
          {title}
        </h1>
        <p className="text-lg md:text-xl leading-relaxed opacity-90 max-w-[600px] mx-auto mb-5">{subtitle}</p>
        <p className="text-sm md:text-base leading-relaxed opacity-75 max-w-[520px] mx-auto mb-10 md:mb-12">{description}</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href="https://app.gntpower.com/demo"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackEvent("cta_click", { location: "hero", button: "demo" })}
            className="w-full sm:w-auto py-4 px-9 text-base font-bold rounded-lg bg-white text-[#308F16] no-underline shadow-lg text-center hover:bg-gray-50 hover:shadow-xl active:scale-95 transition-all duration-200"
          >
            {button}
          </a>
          <a
            href="https://app.gntpower.com/"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackEvent("cta_click", { location: "hero", button: "key" })}
            className="w-full sm:w-auto py-4 px-9 text-base font-bold rounded-lg bg-transparent text-white no-underline border-2 border-white/60 text-center hover:bg-white/10 active:scale-95 transition-all duration-200"
          >
            {buttonSecondary}
          </a>
        </div>
      </FadeIn>
    </section>
  )
}
