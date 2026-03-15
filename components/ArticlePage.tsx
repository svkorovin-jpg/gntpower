import Link from "next/link"
import AppLink from "./AppLink"

export type FaqItem = { q: string; a: string }

export type BodyBlock =
  | { type: "p"; text: string }
  | { type: "ul"; items: string[] }
  | { type: "ol"; items: string[] }
  | { type: "h3"; text: string }
  | { type: "section"; heading: string; items: string[] }

export type ArticlePageData = {
  lang: "ua" | "ru"
  h1: string
  answerBlock: string
  tldr: string
  definition: string
  body: BodyBlock[]
  whatYouGet?: string[]
  trustBlock?: string[]
  dataSecurity?: string[]
  faq: FaqItem[]
  cta: string
  relatedPages: { url: string; label: string }[]
  // For JSON-LD
  seoTitle: string
  canonical: string
  hreflangAlt: { lang: string; url: string }
}

function buildJsonLd(data: ArticlePageData) {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "headline": data.h1,
        "url": data.canonical,
        "publisher": {
          "@type": "Organization",
          "name": "G&T Power",
          "url": "https://gntpower.com",
        },
      },
      {
        "@type": "FAQPage",
        "mainEntity": data.faq.map((item) => ({
          "@type": "Question",
          "name": item.q,
          "acceptedAnswer": { "@type": "Answer", "text": item.a },
        })),
      },
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "G&T Power",
            "item": `https://gntpower.com/${data.lang}`,
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": data.h1,
            "item": data.canonical,
          },
        ],
      },
    ],
  }
}

export default function ArticlePage({ data }: { data: ArticlePageData }) {
  const demoUrl = "https://app.gntpower.com/demo"
  const homeUrl = `/${data.lang}`
  const t = {
    demo:        data.lang === "ua" ? "Спробувати демо"        : "Попробовать демо",
    back:        data.lang === "ua" ? "G&T Power"               : "G&T Power",
    shortAnswer: data.lang === "ua" ? "Коротка відповідь"       : "Короткий ответ",
    tldrLabel:   "TL;DR",
    definition:  data.lang === "ua" ? "Визначення"              : "Определение",
    faqTitle:    data.lang === "ua" ? "Часті запитання"         : "Часто задаваемые вопросы",
    related:     data.lang === "ua" ? "Читайте також"           : "Читайте также",
    whatYouGet:  data.lang === "ua" ? "Що ви отримаєте"         : "Что вы получите",
    trust:       data.lang === "ua" ? "Надійність методу"       : "Надёжность метода",
    security:    data.lang === "ua" ? "Безпека даних"           : "Безопасность данных",
  }

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(buildJsonLd(data)) }}
      />

      {/* Nav */}
      <div className="bg-white border-b border-[#EDEDED] px-6 py-4 flex items-center justify-between">
        <Link href={homeUrl} className="no-underline">
          <img src="/photo.png" alt="G&T Power" className="h-10 w-auto" />
        </Link>
        <AppLink
          href={demoUrl}
          lang={data.lang}
          className="py-2 px-5 text-[14px] font-semibold rounded-[6px] bg-[#308F16] text-white no-underline hover:bg-[#267a12] transition-colors duration-200"
        >
          {t.demo}
        </AppLink>
      </div>

      {/* Breadcrumb */}
      <div className="bg-white border-b border-[#EDEDED] px-6 py-3">
        <div className="max-w-[860px] mx-auto flex gap-2 text-[13px] text-[#888]">
          <Link href={homeUrl} className="hover:text-[#308F16] transition-colors">{t.back}</Link>
          <span>/</span>
          <span className="text-[#444]">{data.h1}</span>
        </div>
      </div>

      {/* Hero */}
      <section className="bg-gradient-to-br from-[#308F16] to-[#63AF4F] text-white py-12 px-6 md:py-16">
        <div className="max-w-[860px] mx-auto">
          <h1 className="text-[clamp(26px,3.5vw,46px)] font-extrabold leading-[1.15] tracking-[-0.5px] mb-5">
            {data.h1}
          </h1>
          <div className="inline-flex items-start gap-3 bg-white/15 rounded-lg px-4 py-3 max-w-[640px]">
            <span className="text-[11px] font-bold uppercase tracking-wider text-white/70 shrink-0 pt-0.5">{t.tldrLabel}</span>
            <span className="text-[14px] text-white leading-snug">{data.tldr}</span>
          </div>
        </div>
      </section>

      {/* Answer block */}
      <section className="py-8 px-6 bg-[#f7fdf4] border-b border-[#c8e6bf]">
        <div className="max-w-[860px] mx-auto">
          <p className="text-[11px] font-bold uppercase tracking-wider text-[#308F16] mb-2">{t.shortAnswer}</p>
          <p className="text-[17px] text-[#222] leading-[1.8]">{data.answerBlock}</p>
        </div>
      </section>

      {/* Definition */}
      <section className="py-7 px-6 bg-white border-b border-[#EDEDED]">
        <div className="max-w-[860px] mx-auto">
          <div className="border-l-4 border-[#308F16] pl-5">
            <p className="text-[11px] font-bold uppercase tracking-wider text-[#308F16] mb-1">{t.definition}</p>
            <p className="text-[16px] text-[#444] leading-relaxed">{data.definition}</p>
          </div>
        </div>
      </section>

      {/* Body */}
      <section className="py-12 px-6 bg-white">
        <div className="max-w-[860px] mx-auto space-y-5">
          {data.body.map((block, i) => {
            if (block.type === "p")
              return <p key={i} className="text-[17px] text-[#444] leading-[1.8]">{block.text}</p>
            if (block.type === "ul")
              return (
                <ul key={i} className="list-disc pl-6 space-y-1.5 text-[16px] text-[#444]">
                  {block.items.map((item, j) => <li key={j}>{item}</li>)}
                </ul>
              )
            if (block.type === "ol")
              return (
                <ol key={i} className="list-decimal pl-6 space-y-1.5 text-[16px] text-[#444]">
                  {block.items.map((item, j) => <li key={j}>{item}</li>)}
                </ol>
              )
            if (block.type === "h3")
              return <h3 key={i} className="text-[20px] font-bold text-[#111] pt-3">{block.text}</h3>
            if (block.type === "section")
              return (
                <div key={i} className="pt-2">
                  <h3 className="text-[18px] font-bold text-[#111] mb-3">{block.heading}</h3>
                  <ul className="list-disc pl-6 space-y-1.5 text-[16px] text-[#444]">
                    {block.items.map((item, j) => <li key={j}>{item}</li>)}
                  </ul>
                </div>
              )
            return null
          })}

          {data.whatYouGet && (
            <div className="mt-4 rounded-xl bg-[#f7fdf4] border border-[#c8e6bf] p-6">
              <h3 className="text-[17px] font-bold text-[#111] mb-3">{t.whatYouGet}</h3>
              <ul className="space-y-2">
                {data.whatYouGet.map((item, i) => (
                  <li key={i} className="flex items-center gap-2 text-[15px] text-[#444]">
                    <span className="text-[#308F16] font-bold shrink-0">✓</span>{item}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {data.trustBlock && (
            <div className="mt-4 rounded-xl bg-[#f9fafb] border border-[#EDEDED] p-6">
              <h3 className="text-[17px] font-bold text-[#111] mb-3">{t.trust}</h3>
              <ul className="space-y-2">
                {data.trustBlock.map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-[15px] text-[#444]">
                    <span className="text-[#308F16] shrink-0 mt-0.5">—</span>{item}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {data.dataSecurity && (
            <div className="mt-4 rounded-xl bg-[#f9fafb] border border-[#EDEDED] p-6">
              <h3 className="text-[17px] font-bold text-[#111] mb-3">{t.security}</h3>
              <ul className="space-y-2">
                {data.dataSecurity.map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-[15px] text-[#444]">
                    <span className="text-[#308F16] shrink-0 mt-0.5">✓</span>{item}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </section>

      {/* FAQ */}
      <section className="py-12 px-6 bg-[#f9fafb] border-t border-[#EDEDED]">
        <div className="max-w-[860px] mx-auto">
          <h2 className="text-[24px] font-extrabold text-[#111] mb-8">{t.faqTitle}</h2>
          <div className="space-y-6">
            {data.faq.map((item, i) => (
              <div key={i} className="border-b border-[#EDEDED] pb-5 last:border-0">
                <p className="font-bold text-[16px] text-[#111] mb-2">{item.q}</p>
                <p className="text-[15px] text-[#555] leading-relaxed">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-14 px-6 bg-gradient-to-br from-[#308F16] to-[#63AF4F] text-center">
        <div className="max-w-[560px] mx-auto">
          <p className="text-[20px] font-bold text-white mb-6 leading-snug">{data.cta}</p>
          <AppLink
            href={demoUrl}
            lang={data.lang}
            className="inline-block py-4 px-10 rounded-lg bg-white text-[#308F16] font-bold text-[16px] no-underline hover:bg-gray-50 transition-colors duration-200"
          >
            {t.demo}
          </AppLink>
        </div>
      </section>

      {/* Related pages */}
      {data.relatedPages.length > 0 && (
        <section className="py-12 px-6 bg-white border-t border-[#EDEDED]">
          <div className="max-w-[860px] mx-auto">
            <h2 className="text-[20px] font-bold text-[#111] mb-6">{t.related}</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {data.relatedPages.map((page) => (
                <Link
                  key={page.url}
                  href={page.url}
                  className="rounded-xl border border-[#EDEDED] px-5 py-4 text-[15px] font-medium text-[#308F16] no-underline hover:border-[#308F16] hover:bg-[#f7fdf4] transition-all duration-150 flex items-center gap-2"
                >
                  <span className="shrink-0">→</span>{page.label}
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </main>
  )
}
