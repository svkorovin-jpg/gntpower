import FadeIn from "./FadeIn"

type Column = {
  heading: string
  items: string[]
}

type ForWhoProps = {
  title: string
  managers: Column
  participants: Column
}

function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="list-none p-0 m-0">
      {items.map((item, i) => (
        <li key={i} className="flex gap-3 items-start mb-4 text-[15px] text-[#333] leading-[1.5]">
          <img src="/BULLETgreen.svg" width="18" height="18" className="shrink-0 mt-[2px]" alt="" />
          {item}
        </li>
      ))}
    </ul>
  )
}

export default function ForWho({ title, managers, participants }: ForWhoProps) {
  return (
    <section id="who" className="bg-white border-t border-b border-[#EDEDED] py-14 px-5 md:py-[100px] md:px-10">
      <FadeIn className="max-w-[960px] mx-auto">
        <h2 className="font-extrabold text-[#111] tracking-[-0.5px] mb-10 md:mb-12" style={{ fontSize: "clamp(28px, 3vw, 42px)" }}>
          {title}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-[1fr_1fr_auto] gap-6 items-center">
          {[managers, participants].map((col) => (
            <div
              key={col.heading}
              className="bg-[#f7fdf4] rounded-2xl p-8 md:p-10 border border-[#EDEDED] self-stretch hover:shadow-md transition-shadow duration-200"
            >
              <h3 className="text-[20px] font-bold text-[#308F16] mb-7">{col.heading}</h3>
              <BulletList items={col.items} />
            </div>
          ))}
          <img src="/what_for.png" alt="" className="hidden md:block h-[480px] w-auto" style={{ mixBlendMode: "multiply" }} />
        </div>
      </FadeIn>
    </section>
  )
}
