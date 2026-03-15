import { Metadata } from "next"
import ArticlePage from "@/components/ArticlePage"

export const metadata: Metadata = {
  title: "Как понять свои сильные стороны | G&T Power",
  description:
    "Как понять свои сильные стороны в работе через оценку поведенческих реакций.",
  alternates: {
    canonical: "https://gntpower.com/ru/kak-ponyat-svoi-silnye-storony",
    languages: {
      ua: "https://gntpower.com/ua/yak-zrozumity-svoi-sylni-storony",
    },
  },
}

export default function Page() {
  return (
    <ArticlePage
      data={{
        lang: "ru",
        h1: "Как понять свои сильные стороны",
        answerBlock:
          "Чтобы понять свои сильные стороны, нужно оценить, как вы ведёте себя в реальных рабочих ситуациях. Именно поведенческие реакции лучше всего показывают, в каких ролях человек может быть наиболее эффективным.",
        tldr: "Сильные стороны — это не только то, что вам нравится, а то, что стабильно проявляется в работе.",
        definition:
          "Сильные стороны в работе — это устойчивые паттерны поведения, которые помогают человеку быть эффективным в определённых задачах и ролях.",
        body: [
          {
            type: "section",
            heading:
              "Самоанализ полезен, но часто недостаточен. Человек может недооценивать или переоценивать себя. Структурированная поведенческая оценка позволяет лучше понять:",
            items: [
              "как вы принимаете решения",
              "как реагируете на изменения",
              "как достигаете результата",
              "как взаимодействуете с другими",
            ],
          },
          {
            type: "section",
            heading: "Это помогает:",
            items: [
              "лучше выбирать роль",
              "понять направление развития",
              "увидеть, где вы даёте наибольшую ценность",
            ],
          },
        ],
        faq: [
          {
            q: "Почему самооценки недостаточно?",
            a: "Потому что она не всегда отражает реальное поведение в сложных ситуациях.",
          },
          {
            q: "Для чего это полезно?",
            a: "Для карьерных решений, развития и выбора задач.",
          },
          {
            q: "Может ли это помочь перед новой ролью?",
            a: "Да, именно тогда это особенно полезно.",
          },
        ],
        cta: "Узнайте свой профиль сильных сторон через демо G&T Power.",
        relatedPages: [
          {
            url: "/ru/soft-skills-test-online",
            label: "Онлайн тест soft skills",
          },
          { url: "/ru/razvitie-soft-skills", label: "Развитие soft skills" },
          {
            url: "/ru/primer-otcheta-soft-skills",
            label: "Пример отчёта soft skills",
          },
          { url: "/ru/soft-skills-test", label: "Soft skills тест" },
        ],
        seoTitle: "Как понять свои сильные стороны | G&T Power",
        canonical: "https://gntpower.com/ru/kak-ponyat-svoi-silnye-storony",
        hreflangAlt: {
          lang: "ua",
          url: "https://gntpower.com/ua/yak-zrozumity-svoi-sylni-storony",
        },
      }}
    />
  )
}
