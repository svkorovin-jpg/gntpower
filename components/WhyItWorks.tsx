import FadeIn from "./FadeIn"
import Card3D from "./Card3D"

type WhyItWorksProps = {
  title: string
  items: string[]
}

export default function WhyItWorks({ title, items }: WhyItWorksProps) {
  return (
    <section className="bg-white border-t border-[#EDEDED] py-14 px-5 md:py-[100px] md:px-10">
      <FadeIn className="max-w-[960px] mx-auto grid grid-cols-1 md:grid-cols-[1fr_1fr_auto] gap-10 items-center">
        <div className="md:col-span-2">
          <h2 className="font-extrabold text-[#111] tracking-[-0.5px] mb-10" style={{ fontSize: "clamp(28px, 3vw, 42px)" }}>
            {title}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {items.map((item, i) => (
              <div
                key={i}
                className="flex gap-4 items-start py-5 px-6 bg-[#f7fdf4] rounded-xl border border-[#EDEDED] hover:shadow-md hover:-translate-y-0.5 transition-all duration-200"
                style={i === 2 ? { gridColumnStart: 1 } : undefined}
              >
                <img src="/BULLETgreen.svg" alt="" className="shrink-0 w-[18px] h-[18px] mt-[3px]" />
                <p className="text-[15px] text-[#333] leading-relaxed m-0">{item}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="hidden md:flex items-center justify-center">
          <Card3D intensity={6}>
            <img src="/why_works.png" alt="" className="h-[585px] w-auto" style={{ mixBlendMode: "multiply" }} />
          </Card3D>
        </div>
      </FadeIn>
    </section>
  )
}
