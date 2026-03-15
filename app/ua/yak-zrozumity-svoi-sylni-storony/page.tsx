import { Metadata } from "next"
import ArticlePage from "@/components/ArticlePage"

export const metadata: Metadata = {
  title: "Як зрозуміти свої сильні сторони | G&T Power",
  description:
    "Як зрозуміти свої сильні сторони у роботі через оцінку поведінкових реакцій.",
  alternates: {
    canonical: "https://gntpower.com/ua/yak-zrozumity-svoi-sylni-storony",
    languages: {
      ru: "https://gntpower.com/ru/kak-ponyat-svoi-silnye-storony",
    },
  },
}

export default function Page() {
  return (
    <ArticlePage
      data={{
        lang: "ua",
        h1: "Як зрозуміти свої сильні сторони",
        answerBlock:
          "Щоб зрозуміти свої сильні сторони, потрібно оцінити, як ви поводитесь у реальних робочих ситуаціях. Саме поведінкові реакції найкраще показують, у яких ролях людина може бути найбільш ефективною.",
        tldr: "Сильні сторони — це не лише те, що вам подобається, а те, що стабільно проявляється в роботі.",
        definition:
          "Сильні сторони у роботі — це стійкі патерни поведінки, які допомагають людині бути ефективною в певних задачах і ролях.",
        body: [
          {
            type: "section",
            heading:
              "Самоаналіз корисний, але часто недостатній. Людина може недооцінювати або переоцінювати себе. Структурована поведінкова оцінка дозволяє краще зрозуміти:",
            items: [
              "як ви приймаєте рішення",
              "як реагуєте на зміни",
              "як досягаєте результату",
              "як взаємодієте з іншими",
            ],
          },
          {
            type: "section",
            heading: "Це допомагає:",
            items: [
              "краще обирати роль",
              "зрозуміти напрям розвитку",
              "побачити, де ви даєте найбільшу цінність",
            ],
          },
        ],
        faq: [
          {
            q: "Чому самооцінки недостатньо?",
            a: "Бо вона не завжди відображає реальну поведінку в складних ситуаціях.",
          },
          {
            q: "Для чого це корисно?",
            a: "Для кар'єрних рішень, розвитку та вибору задач.",
          },
          {
            q: "Чи може це допомогти перед новою роллю?",
            a: "Так, саме тоді це особливо корисно.",
          },
        ],
        cta: "Дізнайтеся свій профіль сильних сторін через демо G&T Power.",
        relatedPages: [
          {
            url: "/ua/soft-skills-test-online",
            label: "Онлайн тест soft skills",
          },
          { url: "/ua/rozvytok-soft-skills", label: "Розвиток soft skills" },
          {
            url: "/ua/pryklad-zvitu-soft-skills",
            label: "Приклад звіту soft skills",
          },
          { url: "/ua/soft-skills-test", label: "Soft skills тест" },
        ],
        seoTitle: "Як зрозуміти свої сильні сторони | G&T Power",
        canonical:
          "https://gntpower.com/ua/yak-zrozumity-svoi-sylni-storony",
        hreflangAlt: {
          lang: "ru",
          url: "https://gntpower.com/ru/kak-ponyat-svoi-silnye-storony",
        },
      }}
    />
  )
}
