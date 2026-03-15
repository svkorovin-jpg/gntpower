import { Metadata } from "next"
import ArticlePage from "@/components/ArticlePage"

export const metadata: Metadata = {
  title: "Soft skills руководителя | G&T Power",
  description:
    "Какие soft skills руководителя действительно влияют на результат и как их оценивать.",
  alternates: {
    canonical: "https://gntpower.com/ru/soft-skills-rukovoditelya",
    languages: {
      ua: "https://gntpower.com/ua/soft-skills-kerivnyka",
    },
  },
}

export default function Page() {
  return (
    <ArticlePage
      data={{
        lang: "ru",
        h1: "Soft skills руководителя",
        answerBlock:
          "Soft skills руководителя определяют его способность эффективно работать с людьми, принимать решения в сложных ситуациях и достигать результата. Наиболее важными компетенциями являются системное мышление, адаптивность, достижение результата и взаимодействие с людьми.",
        tldr: "Сильный руководитель — это не только опыт, но и поведение в условиях сложности и изменений.",
        definition:
          "Soft skills руководителя — это поведенческие компетенции, которые влияют на качество решений, коммуникацию, координацию и способность вести людей к результату.",
        body: [
          {
            type: "p",
            text: "Руководитель может быть очень сильным функционально, но терять эффективность в новой роли из-за слабой приоритизации, плохой коммуникации, низкой гибкости или неумения действовать в неопределённости.",
          },
          {
            type: "section",
            heading: "4 ключевые компетенции в G&T Power:",
            items: [
              "системное мышление",
              "адаптивность",
              "достижение результата",
              "взаимодействие с людьми",
            ],
          },
          {
            type: "p",
            text: "Оценивать их лучше через рабочие сценарии, а не только через самоописание или впечатление от собеседования.",
          },
        ],
        faq: [
          {
            q: "Почему именно эти 4 компетенции?",
            a: "Они дают практическую картину того, как руководитель думает, действует и работает с другими людьми.",
          },
          {
            q: "Это полезно только для топов?",
            a: "Нет, это также полезно для middle managers и кадрового резерва.",
          },
          {
            q: "Можно ли использовать для развития?",
            a: "Да, профиль можно превратить в план развития.",
          },
        ],
        cta: "Посмотрите, как выглядит профиль soft skills руководителя в G&T Power.",
        relatedPages: [
          {
            url: "/ru/ocenka-upravlencheskogo-potenciala",
            label: "Оценка управленческого потенциала",
          },
          {
            url: "/ru/kak-opredelit-liderov-v-komande",
            label: "Как определить лидеров в команде",
          },
          { url: "/ru/chto-takoe-sjt", label: "Что такое SJT" },
          { url: "/ru/leadership-assessment", label: "Оценка лидерства" },
        ],
        seoTitle: "Soft skills руководителя | G&T Power",
        canonical: "https://gntpower.com/ru/soft-skills-rukovoditelya",
        hreflangAlt: {
          lang: "ua",
          url: "https://gntpower.com/ua/soft-skills-kerivnyka",
        },
      }}
    />
  )
}
