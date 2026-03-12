import FadeIn from "./FadeIn"

type AudiencesProps = {
  title: string
  subtitle: string
  items: string[]
}

export default function Audiences({ title, subtitle, items }: AudiencesProps) {
  return (
    <section id="who" className="bg-white border-t border-b border-[#EDEDED] py-14 px-5 md:py-[100px] md:px-10">
      <FadeIn className="max-w-[960px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20 items-center">
        <div>
          <p className="text-[13px] font-bold tracking-[0.1em] uppercase text-[#308F16] mb-3">{subtitle}</p>
          <h2 className="font-extrabold text-[#111] tracking-[-0.5px] mb-10" style={{ fontSize: "clamp(28px, 3vw, 42px)" }}>
            {title}
          </h2>
          <div className="flex flex-col gap-4">
            {items.map((item, i) => (
              <div
                key={i}
                className="flex gap-4 items-start bg-[#f7fdf4] border border-[#EDEDED] rounded-xl py-4 px-5 hover:shadow-md hover:-translate-y-0.5 transition-all duration-200"
              >
                <div className="shrink-0 w-8 h-8 rounded-full bg-[#308F16] text-white font-extrabold text-[15px] flex items-center justify-center">
                  {i + 1}
                </div>
                <p className="text-[15px] text-[#333] leading-[1.55] m-0 pt-1">{item}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="hidden md:flex items-center justify-center">
          <img src="/audience.png" alt="" className="w-full h-auto" style={{ mixBlendMode: "multiply" }} />
        </div>
      </FadeIn>
    </section>
  )
}
