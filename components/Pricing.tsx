"use client"
import { trackEvent } from "@/lib/analytics"

type Plan = {
  name: string
  price: string | null
  features: string[]
  cta: string
  link: string
  highlight?: boolean
}

type PricingProps = {
  title: string
  plans: Plan[]
}

export default function Pricing({ title, plans }: PricingProps) {
  return (
    <section id="prices" className="bg-white border-t border-[#EDEDED] py-14 px-5 md:py-[100px] md:px-10">
      <div className="max-w-[960px] mx-auto">
        <h2
          className="font-extrabold text-[#111] tracking-[-0.5px] mb-12 text-center"
          style={{ fontSize: "clamp(28px, 3vw, 42px)" }}
        >
          {title}
        </h2>

        <div className="border border-[#EDEDED] rounded-2xl overflow-hidden grid grid-cols-1 md:grid-cols-[repeat(auto-fit,minmax(300px,1fr))]">
          {plans.map((plan, i) => (
            <div
              key={i}
              className="flex flex-col p-10 md:p-12"
              style={{
                background: plan.highlight ? "#308F16" : "#fff",
                color: plan.highlight ? "#fff" : "#111",
                borderTop: i > 0 ? "1px solid #EDEDED" : "none",
              }}
            >
              <h3
                className="text-[22px] font-bold mb-5"
                style={{ color: plan.highlight ? "#fff" : "#111" }}
              >
                {plan.name}
              </h3>

              {plan.price ? (
                <div
                  className="text-[52px] font-extrabold tracking-[-2px] leading-none mb-9"
                  style={{ color: plan.highlight ? "#fff" : "#308F16" }}
                >
                  {plan.price}
                </div>
              ) : (
                <div className="mb-9" />
              )}

              <ul className="list-none p-0 mt-0 mb-10 flex-1">
                {plan.features.map((f, j) => (
                  <li key={j} className="flex gap-3 items-start mb-4 text-[15px] leading-[1.5]">
                    <img
                      src="/BULLETgreen.svg"
                      width="18"
                      height="18"
                      className="shrink-0 mt-[2px]"
                      style={{ filter: plan.highlight ? "brightness(0) invert(1)" : "none" }}
                      alt=""
                    />
                    {f}
                  </li>
                ))}
              </ul>

              <a
                href={plan.link}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackEvent("cta_click", { location: "pricing", plan: plan.name })}
                className="block py-4 px-6 rounded-lg font-bold text-[15px] no-underline text-center"
                style={{
                  background: plan.highlight ? "#fff" : "#308F16",
                  color: plan.highlight ? "#308F16" : "#fff",
                }}
              >
                {plan.cta}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
