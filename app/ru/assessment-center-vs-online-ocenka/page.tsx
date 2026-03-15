import { Metadata } from "next"
import ArticlePage from "@/components/ArticlePage"

export const metadata: Metadata = {
  title: "Assessment center или онлайн-оценка soft skills | G&T Power",
  description:
    "Что выбрать: assessment center или онлайн-оценку soft skills. Плюсы, минусы и практический подход.",
  alternates: {
    canonical:
      "https://gntpower.com/ru/assessment-center-vs-online-ocenka",
    languages: {
      uk: "https://gntpower.com/ua/assessment-center-vs-online-otsinka",
    },
  },
}

export default function Page() {
  return (
    <ArticlePage
      data={{
        lang: "ru",
        h1: "Assessment center или онлайн-оценка soft skills",
        answerBlock:
          "Assessment center и онлайн-оценка soft skills решают разные задачи. Assessment center даёт глубокую оценку небольшого числа кандидатов, тогда как онлайн-инструменты позволяют быстро и стандартизированно оценить большие группы сотрудников.",
        tldr: "Для больших групп онлайн SJT почти всегда эффективнее как базовый инструмент оценки.",
        definition:
          "Assessment center — это формат глубокой оценки через упражнения, кейсы и наблюдение. Онлайн-оценка — это стандартизированный цифровой способ быстро проверить поведенческие компетенции.",
        body: [
          {
            type: "section",
            heading: "Когда лучше assessment center:",
            items: [
              "небольшое число финалистов",
              "высокая цена ошибки",
              "критичные senior-роли",
              "нужно живое наблюдение",
            ],
          },
          {
            type: "section",
            heading: "Когда лучше онлайн-оценка:",
            items: [
              "большой поток кандидатов",
              "кадровый резерв",
              "массовая оценка менеджеров",
              "скрининг перед глубокой оценкой",
            ],
          },
          {
            type: "p",
            text: "Практический подход: Не \"или-или\", а правильная комбинация. Онлайн SJT можно использовать как первый или средний слой оценки, а assessment center — как следующий этап для финалистов.",
          },
        ],
        faq: [
          {
            q: "Что дешевле масштабировать?",
            a: "Онлайн-оценку.",
          },
          {
            q: "Что лучше для массовой оценки?",
            a: "Онлайн SJT.",
          },
          {
            q: "Можно ли комбинировать?",
            a: "Да, это лучшая практика.",
          },
        ],
        cta: "Хотите понять, какой формат подойдёт именно вам? Запросите короткий звонок.",
        relatedPages: [
          { url: "/ru/chto-takoe-sjt", label: "Что такое SJT" },
          {
            url: "/ru/kak-ocenit-soft-skills-komandy",
            label: "Как оценить soft skills команды",
          },
          {
            url: "/ru/ocenka-upravlencheskogo-potenciala",
            label: "Оценка управленческого потенциала",
          },
          { url: "/ru/soft-skills-test", label: "Soft skills тест" },
        ],
        seoTitle:
          "Assessment center или онлайн-оценка soft skills | G&T Power",
        canonical:
          "https://gntpower.com/ru/assessment-center-vs-online-ocenka",
        hreflangAlt: {
          lang: "ua",
          url: "https://gntpower.com/ua/assessment-center-vs-online-otsinka",
        },
      }}
    />
  )
}
