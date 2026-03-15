import { Metadata } from "next"
import ArticlePage from "@/components/ArticlePage"

export const metadata: Metadata = {
  title: "Пример отчёта оценки soft skills | G&T Power",
  description:
    "Что именно получает заказчик: индивидуальный, командный и сравнительный отчёты G&T Power.",
  alternates: {
    canonical: "https://gntpower.com/ru/primer-otcheta-soft-skills",
    languages: {
      ua: "https://gntpower.com/ua/pryklad-zvitu-soft-skills",
    },
  },
}

export default function Page() {
  return (
    <ArticlePage
      data={{
        lang: "ru",
        h1: "Пример отчёта оценки soft skills",
        answerBlock:
          "Отчёт оценки soft skills показывает индивидуальный профиль компетенций, сравнение с эталонными результатами и рекомендации по развитию. Такой отчёт помогает принимать кадровые решения и строить план развития сотрудников.",
        tldr: "Именно отчёт показывает, полезен ли инструмент для бизнеса на практике.",
        definition:
          "Отчёт оценки soft skills — это структурированный профиль компетенций и навыков, который помогает понять сильные стороны, разрывы и соответствие роли или задаче.",
        body: [
          {
            type: "section",
            heading: "Что входит в отчёты G&T Power:",
            items: [
              "индивидуальный профиль компетенций и навыков",
              "командный профиль",
              "сравнение с выдающимся результатом",
              "сравнение с профилем типовых задач",
              "рекомендации по развитию и коучингу",
            ],
          },
          {
            type: "section",
            heading: "Зачем это бизнесу:",
            items: [
              "подбор",
              "продвижение",
              "развитие",
              "формирование команд",
              "кадровые решения на основе данных",
            ],
          },
        ],
        dataSecurity: [
          "ответы хранятся в AWS в обезличенном виде",
          "отчёты не хранятся на сервере",
          "отчёты формируются после завершения теста или по запросу",
        ],
        faq: [
          {
            q: "Какие отчёты есть?",
            a: "Индивидуальный, командный и сравнительный.",
          },
          {
            q: "Есть ли сравнение с эталоном?",
            a: "Да, в материалах есть сравнение с выдающимся результатом и профилями типовых задач.",
          },
          {
            q: "Как решается безопасность данных?",
            a: "Ответы хранятся в AWS в обезличенном виде, а отчёты не хранятся постоянно.",
          },
        ],
        cta: "Хотите увидеть пример реального отчёта? Запросите демо или пример профиля.",
        relatedPages: [
          {
            url: "/ru/soft-skills-test-online",
            label: "Онлайн тест soft skills",
          },
          {
            url: "/ru/kak-ocenit-soft-skills-komandy",
            label: "Как оценить soft skills команды",
          },
          { url: "/ru/razvitie-soft-skills", label: "Развитие soft skills" },
          { url: "/ru/chto-takoe-sjt", label: "Что такое SJT" },
          { url: "/ru/team-assessment", label: "Оценка команды" },
        ],
        seoTitle: "Пример отчёта оценки soft skills | G&T Power",
        canonical: "https://gntpower.com/ru/primer-otcheta-soft-skills",
        hreflangAlt: {
          lang: "ua",
          url: "https://gntpower.com/ua/pryklad-zvitu-soft-skills",
        },
      }}
    />
  )
}
