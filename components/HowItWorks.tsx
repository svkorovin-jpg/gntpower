import FadeIn from "./FadeIn"

type Props = {
  title: string
  intro: string
  items: string[]
}

export default function HowItWorks({ title, intro, items }: Props) {
  const isOdd = items.length % 2 !== 0

  return (
    <section className="bg-white border-t border-[#EDEDED] py-14 px-5 md:py-[100px] md:px-10">
      <FadeIn className="max-w-[860px] mx-auto">
        <h2 className="font-extrabold text-[#111] tracking-[-0.5px] mb-5" style={{ fontSize: "clamp(28px, 3vw, 42px)" }}>
          {title}
        </h2>
        <p className="text-[18px] md:text-[20px] font-semibold text-[#222] leading-relaxed mb-10 md:mb-14">{intro}</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {items.map((item, i) => {
            const isLast = i === items.length - 1
            return (
              <div
                key={i}
                className="relative flex flex-col gap-3 py-6 px-6 bg-[#f7fdf4] rounded-2xl border border-[#EDEDED] overflow-hidden hover:shadow-md hover:-translate-y-0.5 transition-all duration-200"
                style={
                  isLast && isOdd
                    ? { gridColumn: "1 / -1", maxWidth: "calc(50% - 8px)", marginInline: "auto", width: "100%" }
                    : undefined
                }
              >
                <span
                  className="absolute top-2 right-4 font-extrabold leading-none tracking-[-3px] select-none pointer-events-none"
                  style={{ fontSize: "72px", color: "#308F16", opacity: 0.07 }}
                  aria-hidden="true"
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="text-[28px] font-extrabold leading-none tracking-[-1px] text-[#308F16]">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p className="text-[15px] text-[#333] leading-relaxed m-0">{item}</p>
              </div>
            )
          })}
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-12">
          {["/Rectangle_124.png", "/Rectangle_125.jpg", "/Rectangle_126.jpg", "/Rectangle_127.jpg"].map((src, i) => (
            <img key={i} src={src} alt="" className="w-full h-[140px] md:h-[180px] object-cover rounded-2xl hover:scale-[1.02] transition-transform duration-200" />
          ))}
        </div>
      </FadeIn>
    </section>
  )
}
