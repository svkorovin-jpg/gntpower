import { Metadata } from "next"
import ArticlePage from "@/components/ArticlePage"

export const metadata: Metadata = {
  title: "Оцінка управлінського потенціалу | G&T Power",
  description:
    "Як зрозуміти, хто готовий до нової ролі: оцінка управлінського потенціалу на основі поведінкових компетенцій.",
  alternates: {
    canonical: "https://gntpower.com/ua/otsinka-upravlinskoho-potentsialu",
    languages: {
      ru: "https://gntpower.com/ru/ocenka-upravlencheskogo-potenciala",
    },
  },
}

export default function Page() {
  return (
    <ArticlePage
      data={{
        lang: "ua",
        h1: "Оцінка управлінського потенціалу",
        answerBlock:
          "Оцінка управлінського потенціалу дозволяє зрозуміти, чи готова людина до керівної ролі. Для цього аналізуються поведінкові компетенції: системне мислення, адаптивність, здатність досягати результату та ефективна взаємодія з людьми.",
        tldr: "Минулі результати важливі, але для нової ролі потрібно окремо оцінювати управлінську поведінку.",
        definition:
          "Управлінський потенціал — це здатність людини ефективно діяти в новій ролі, коли зростає складність задач, рівень невизначеності та обсяг взаємодії з людьми.",
        body: [
          {
            type: "p",
            text: "Людина може бути сильним індивідуальним виконавцем, але не кожен сильний виконавець автоматично стає сильним керівником. Нова роль вимагає пріоритизації, координації, впливу, толерантності до змін і здатності бачити загальну картину.",
          },
          {
            type: "section",
            heading: "G&T Power допомагає:",
            items: [
              "побачити сильні сторони кандидата",
              "оцінити зони розвитку",
              "порівняти профіль з вимогами ролі або типової задачі",
              "підтримати рішення щодо кадрового резерву, просування та розвитку",
            ],
          },
        ],
        faq: [
          {
            q: "Чому минулих результатів недостатньо?",
            a: "Тому що нова роль часто вимагає іншого набору поведінкових навичок.",
          },
          {
            q: "Для чого це використовувати?",
            a: "Для кадрового резерву, внутрішнього відбору, succession planning та розвитку керівників.",
          },
          {
            q: "Чи можна поєднувати з інтерв'ю?",
            a: "Так, це один із найкращих практичних форматів.",
          },
        ],
        cta: "Потрібно зрозуміти, кого підвищувати, а кого розвивати? Запросіть демо G&T Power.",
        relatedPages: [
          {
            url: "/ua/yak-vyznachyty-lideriv-u-komandi",
            label: "Як визначити лідерів у команді",
          },
          {
            url: "/ua/yak-otsinyty-soft-skills-komandy",
            label: "Як оцінити soft skills команди",
          },
          {
            url: "/ua/pryklad-zvitu-soft-skills",
            label: "Приклад звіту soft skills",
          },
          { url: "/ua/shcho-take-sjt", label: "Що таке SJT" },
          { url: "/ua/leadership-assessment", label: "Оцінка лідерства" },
        ],
        seoTitle: "Оцінка управлінського потенціалу | G&T Power",
        canonical:
          "https://gntpower.com/ua/otsinka-upravlinskoho-potentsialu",
        hreflangAlt: {
          lang: "ru",
          url: "https://gntpower.com/ru/ocenka-upravlencheskogo-potenciala",
        },
      }}
    />
  )
}
