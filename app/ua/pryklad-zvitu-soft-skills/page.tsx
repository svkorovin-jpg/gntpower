import { Metadata } from "next"
import ArticlePage from "@/components/ArticlePage"

export const metadata: Metadata = {
  title: "Приклад звіту оцінки soft skills | G&T Power",
  description:
    "Що саме отримує замовник: індивідуальний, командний і порівняльний звіти G&T Power.",
  alternates: {
    canonical: "https://gntpower.com/ua/pryklad-zvitu-soft-skills",
    languages: {
      ru: "https://gntpower.com/ru/primer-otcheta-soft-skills",
    },
  },
}

export default function Page() {
  return (
    <ArticlePage
      data={{
        lang: "ua",
        h1: "Приклад звіту оцінки soft skills",
        answerBlock:
          "Звіт оцінки soft skills показує індивідуальний профіль компетенцій, порівняння з еталонними результатами та рекомендації для розвитку. Такий звіт допомагає приймати кадрові рішення і будувати план розвитку співробітників.",
        tldr: "Саме звіт показує, чи є інструмент справді корисним для бізнесу.",
        definition:
          "Звіт оцінки soft skills — це структурований профіль компетенцій і навичок, який допомагає зрозуміти сильні сторони, прогалини та відповідність ролі або задачі.",
        body: [
          {
            type: "section",
            heading: "Що входить у звіти G&T Power:",
            items: [
              "індивідуальний профіль компетенцій та навичок",
              "командний профіль",
              "порівняння з видатним результатом",
              "порівняння з профілем типових задач",
              "рекомендації для розвитку та коучингу",
            ],
          },
          {
            type: "section",
            heading: "Навіщо це бізнесу:",
            items: [
              "підбір",
              "просування",
              "розвиток",
              "формування команд",
              "кадрові рішення на основі даних",
            ],
          },
        ],
        dataSecurity: [
          "відповіді зберігаються в AWS у знеособленому вигляді",
          "звіти не зберігаються на сервері",
          "звіти формуються після завершення тесту або за запитом",
        ],
        faq: [
          {
            q: "Які звіти є?",
            a: "Індивідуальний, командний і порівняльний.",
          },
          {
            q: "Чи є порівняння з еталоном?",
            a: "Так, у матеріалах є порівняння з видатним результатом і профілями типових задач.",
          },
          {
            q: "Як вирішується безпека даних?",
            a: "Відповіді зберігаються в AWS у знеособленому вигляді, а звіти не зберігаються постійно.",
          },
        ],
        cta: "Хочете побачити приклад реального звіту? Запросіть демо або приклад профілю.",
        relatedPages: [
          {
            url: "/ua/soft-skills-test-online",
            label: "Онлайн тест soft skills",
          },
          {
            url: "/ua/yak-otsinyty-soft-skills-komandy",
            label: "Як оцінити soft skills команди",
          },
          { url: "/ua/rozvytok-soft-skills", label: "Розвиток soft skills" },
          { url: "/ua/shcho-take-sjt", label: "Що таке SJT" },
          { url: "/ua/team-assessment", label: "Оцінка команди" },
        ],
        seoTitle: "Приклад звіту оцінки soft skills | G&T Power",
        canonical: "https://gntpower.com/ua/pryklad-zvitu-soft-skills",
        hreflangAlt: {
          lang: "ru",
          url: "https://gntpower.com/ru/primer-otcheta-soft-skills",
        },
      }}
    />
  )
}
