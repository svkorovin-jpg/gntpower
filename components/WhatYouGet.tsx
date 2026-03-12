import FadeIn from "./FadeIn"

type WhatYouGetProps = {
  title: string
  intro: string
  text: string
}

export default function WhatYouGet({ title, intro, text }: WhatYouGetProps) {
  return (
    <section id="result" className="bg-white border-t border-[#EDEDED] py-14 px-5 md:py-[100px] md:px-10">
      <FadeIn className="max-w-[960px] mx-auto grid grid-cols-1 md:grid-cols-[1fr_1.56fr] gap-10 md:gap-16 items-center">
        <div>
          <h2 className="font-extrabold text-[#111] tracking-[-0.5px] mb-8" style={{ fontSize: "clamp(28px, 3vw, 42px)" }}>
            {title}
          </h2>
          <p className="text-[18px] md:text-[20px] font-semibold text-[#222] leading-relaxed mb-5">{intro}</p>
          <p className="text-[15px] md:text-[17px] text-[#555] leading-[1.7]">{text}</p>
        </div>
        <div className="hidden md:flex items-center justify-center">
          <video src="/whatyouget1.mp4" autoPlay loop muted playsInline className="w-full h-auto rounded-xl" />
        </div>
      </FadeIn>
    </section>
  )
}
