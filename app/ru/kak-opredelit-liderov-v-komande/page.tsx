import { Metadata } from "next"
import ArticlePage from "@/components/ArticlePage"

export const metadata: Metadata = {
  title: "Как определить лидеров в команде | G&T Power",
  description:
    "Как определить будущих лидеров в команде на основе поведенческих компетенций.",
  alternates: {
    canonical:
      "https://gntpower.com/ru/kak-opredelit-liderov-v-komande",
    languages: {
      uk: "https://gntpower.com/ua/yak-vyznachyty-lideriv-u-komandi",
    },
  },
}

export default function Page() {
  return (
    <ArticlePage
      data={{
        lang: "ru",
        h1: "Как определить лидеров в команде",
        answerBlock:
          "Будущих лидеров в команде можно определить через оценку поведенческих компетенций. Важно смотреть не только на опыт, а на системное мышление, адаптивность, способность достигать результата и эффективное взаимодействие с людьми.",
        tldr: "Не каждый сильный специалист автоматически является будущим сильным руководителем.",
        definition:
          "Лидерский потенциал — это сочетание поведенческих характеристик, которые помогают человеку вести других, принимать решения и действовать в условиях сложности.",
        body: [
          {
            type: "p",
            text: "Во многих компаниях будущих лидеров определяют интуитивно: по стажу, уверенности, харизме или субъективному впечатлению. Но этого недостаточно.",
          },
          {
            type: "section",
            heading: "Лучше смотреть на:",
            items: [
              "способность видеть общую картину",
              "поведение в условиях неопределённости",
              "умение приоритизировать и двигать результат",
              "качество взаимодействия с людьми",
            ],
          },
          {
            type: "section",
            heading: "Практически хороший подход:",
            items: [
              "оценка поведенческих компетенций",
              "интервью",
              "данные о результатах в роли",
            ],
          },
        ],
        faq: [
          {
            q: "Почему стажа недостаточно?",
            a: "Потому что стаж не всегда означает готовность к новой сложности роли.",
          },
          {
            q: "Подходит ли это для кадрового резерва?",
            a: "Да, это один из самых типичных сценариев использования.",
          },
          {
            q: "Нужно ли комбинировать методы?",
            a: "Да, это лучшая практика.",
          },
        ],
        cta: "Хотите системно находить будущих лидеров? Запросите демо G&T Power.",
        relatedPages: [
          {
            url: "/ru/ocenka-upravlencheskogo-potenciala",
            label: "Оценка управленческого потенциала",
          },
          {
            url: "/ru/soft-skills-rukovoditelya",
            label: "Soft skills руководителя",
          },
          { url: "/ru/chto-takoe-sjt", label: "Что такое SJT" },
          { url: "/ru/leadership-assessment", label: "Оценка лидерства" },
        ],
        seoTitle: "Как определить лидеров в команде | G&T Power",
        canonical:
          "https://gntpower.com/ru/kak-opredelit-liderov-v-komande",
        hreflangAlt: {
          lang: "ua",
          url: "https://gntpower.com/ua/yak-vyznachyty-lideriv-u-komandi",
        },
      }}
    />
  )
}
