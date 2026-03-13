import Image from "next/image"
import FadeIn from "./FadeIn"

const ICONS = ["🧩", "🎯", "⚡", "🤝"]

type CompetencyItem = {
  title: string
  text: string
}

type CompetenciesProps = {
  title: string
  items: CompetencyItem[]
}

export default function Competencies({ title, items }: CompetenciesProps) {
  return (
    <section className="bg-white py-14 px-5 md:py-[100px] md:px-10 text-center">
      <FadeIn>
        <h2 className="font-extrabold text-[#111] tracking-[-0.5px] mb-12 md:mb-[60px]" style={{ fontSize: "clamp(28px, 3vw, 42px)" }}>
          {title}
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-[1100px] mx-auto">
          {items.map((item, i) => (
            <div
              key={i}
              className="bg-[#f7fdf4] border border-[#EDEDED] rounded-2xl p-8 md:p-10 text-left hover:shadow-md hover:-translate-y-1 transition-all duration-200"
            >
              {i === 0 ? (
                <div className="mb-5 w-[64px] h-[64px] relative">
                  <Image
                    src="/systemic.png"
                    alt={item.title}
                    fill
                    className="object-contain"
                    style={{ mixBlendMode: "multiply" }}
                  />
                </div>
              ) : (
                <div className="text-[36px] leading-none mb-5">{ICONS[i]}</div>
              )}
              <h3 className="text-[18px] font-bold text-[#111] mb-3">{item.title}</h3>
              <p className="text-[15px] text-[#555] leading-relaxed m-0">{item.text}</p>
            </div>
          ))}
        </div>
      </FadeIn>
    </section>
  )
}
