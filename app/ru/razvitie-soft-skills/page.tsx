import { Metadata } from "next"
import ArticlePage from "@/components/ArticlePage"

export const metadata: Metadata = {
  title: "Развитие soft skills | G&T Power",
  description:
    "Как развивать soft skills не вслепую, а на основе данных и профиля компетенций.",
  alternates: {
    canonical: "https://gntpower.com/ru/razvitie-soft-skills",
    languages: {
      uk: "https://gntpower.com/ua/rozvytok-soft-skills",
    },
  },
}

export default function Page() {
  return (
    <ArticlePage
      data={{
        lang: "ru",
        h1: "Развитие soft skills",
        answerBlock:
          "Развитие soft skills начинается с понимания собственного профиля компетенций. После оценки сильных сторон и зон развития можно сформировать конкретный план развития и отслеживать прогресс.",
        tldr: "Сначала оценка, потом план развития, а не наоборот.",
        definition:
          "Развитие soft skills — это целенаправленная работа над поведенческими навыками, которые влияют на эффективность в работе.",
        body: [
          {
            type: "section",
            heading:
              "Без оценки развитие часто превращается в набор общих пожеланий. Данные нужны, чтобы понять:",
            items: [
              "что уже является сильной стороной",
              "где есть реальный gap",
              "какая роль или задача является целевой",
              "как измерить прогресс",
            ],
          },
          {
            type: "section",
            heading: "Правильная последовательность:",
            items: [
              "оценить текущий профиль",
              "понять целевую роль или задачу",
              "найти разрыв между \"есть\" и \"нужно\"",
              "построить план развития",
              "проверить прогресс",
            ],
          },
        ],
        faq: [
          {
            q: "Почему не начинать сразу с тренинга?",
            a: "Потому что без оценки трудно понять, что именно нужно развивать.",
          },
          {
            q: "Даёт ли G&T Power рекомендации?",
            a: "Да, материалы продукта прямо предусматривают рекомендации по развитию и коучингу.",
          },
          {
            q: "Можно ли использовать это для команд?",
            a: "Да, данные можно применять и на уровне команды.",
          },
        ],
        cta: "Хотите строить развитие на основе данных? Начните с демо G&T Power.",
        relatedPages: [
          {
            url: "/ru/soft-skills-test-online",
            label: "Онлайн тест soft skills",
          },
          {
            url: "/ru/primer-otcheta-soft-skills",
            label: "Пример отчёта soft skills",
          },
          {
            url: "/ru/kak-ponyat-svoi-silnye-storony",
            label: "Как понять свои сильные стороны",
          },
          { url: "/ru/soft-skills-test", label: "Soft skills тест" },
        ],
        seoTitle: "Развитие soft skills | G&T Power",
        canonical: "https://gntpower.com/ru/razvitie-soft-skills",
        hreflangAlt: {
          lang: "ua",
          url: "https://gntpower.com/ua/rozvytok-soft-skills",
        },
      }}
    />
  )
}
