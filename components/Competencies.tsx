import Image from "next/image"
import FadeIn from "./FadeIn"
import Card3D from "./Card3D"

const ICONS = ["🧩", "🎯", "⚡", "🤝"]
const IMAGES: (string | null)[] = ["/systemic.png", "/result.png", "/adapt.png", "/comms.png"]

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
    <section className="bg-white py-14 px-5 md:py-[100px] md:px-10">
      <FadeIn>
        <h2
          className="font-extrabold text-[#111] tracking-[-0.5px] mb-12 md:mb-[60px] text-center"
          style={{ fontSize: "clamp(28px, 3vw, 42px)" }}
        >
          {title}
        </h2>
        <div className="flex flex-col gap-6 max-w-[1100px] mx-auto">
          {items.map((item, i) => {
            const imageLeft = i % 2 === 0
            const imgSrc = IMAGES[i]
            const imageBlock = (
              <div className="flex items-center justify-center bg-[#f0faea] rounded-2xl min-h-[372px] flex-1">
                {imgSrc ? (
                  <div className="relative w-full h-[372px]">
                    <Image
                      src={imgSrc}
                      alt={item.title}
                      fill
                      className="object-contain p-6"
                      style={{ mixBlendMode: "multiply" }}
                    />
                  </div>
                ) : (
                  <span className="text-[80px] leading-none">{ICONS[i]}</span>
                )}
              </div>
            )
            const textBlock = (
              <div className="flex flex-col justify-center flex-[1.5] px-2 md:px-8 py-6 md:py-0">
                <h3 className="text-[33px] font-bold text-[#111] mb-3">{item.title}</h3>
                <p className="text-[24px] text-[#555] leading-relaxed m-0">{item.text}</p>
              </div>
            )
            return (
              <Card3D
                key={i}
                className="bg-[#f7fdf4] border border-[#EDEDED] rounded-2xl overflow-hidden hover:shadow-lg flex flex-col md:flex-row"
              >
                {imageLeft ? (
                  <>
                    {imageBlock}
                    {textBlock}
                  </>
                ) : (
                  <>
                    <div className="md:hidden">{imageBlock}</div>
                    {textBlock}
                    <div className="hidden md:flex flex-1">{imageBlock}</div>
                  </>
                )}
              </Card3D>
            )
          })}
        </div>
      </FadeIn>
    </section>
  )
}
