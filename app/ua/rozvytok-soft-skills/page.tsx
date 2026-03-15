import { Metadata } from "next"
import ArticlePage from "@/components/ArticlePage"

export const metadata: Metadata = {
  title: "Розвиток soft skills | G&T Power",
  description:
    "Як розвивати soft skills не навмання, а на основі даних і профілю компетенцій.",
  alternates: {
    canonical: "https://gntpower.com/ua/rozvytok-soft-skills",
    languages: {
      ru: "https://gntpower.com/ru/razvitie-soft-skills",
    },
  },
}

export default function Page() {
  return (
    <ArticlePage
      data={{
        lang: "ua",
        h1: "Розвиток soft skills",
        answerBlock:
          "Розвиток soft skills починається з розуміння власного профілю компетенцій. Після оцінки сильних сторін і зон розвитку можна сформувати конкретний план розвитку і відстежувати прогрес.",
        tldr: "Спочатку оцінка, потім план розвитку, а не навпаки.",
        definition:
          "Розвиток soft skills — це цілеспрямована робота над поведінковими навичками, які впливають на ефективність у роботі.",
        body: [
          {
            type: "section",
            heading:
              "Без оцінки розвиток часто перетворюється на набір загальних побажань. Дані потрібні, щоб зрозуміти:",
            items: [
              "що вже є сильною стороною",
              "де є реальний gap",
              "яка роль або задача є цільовою",
              "як виміряти прогрес",
            ],
          },
          {
            type: "section",
            heading: "Правильна послідовність:",
            items: [
              "оцінити поточний профіль",
              "зрозуміти цільову роль або задачу",
              "знайти розрив між \"є\" і \"потрібно\"",
              "побудувати план розвитку",
              "перевірити прогрес",
            ],
          },
        ],
        faq: [
          {
            q: "Чому не починати одразу з тренінгу?",
            a: "Бо без оцінки важко зрозуміти, що саме треба розвивати.",
          },
          {
            q: "Чи дає G&T Power рекомендації?",
            a: "Так, матеріали продукту прямо передбачають рекомендації для розвитку та коучингу.",
          },
          {
            q: "Чи можна використовувати це для команд?",
            a: "Так, дані можна застосовувати і на рівні команди.",
          },
        ],
        cta: "Хочете будувати розвиток на основі даних? Почніть з демо G&T Power.",
        relatedPages: [
          {
            url: "/ua/soft-skills-test-online",
            label: "Онлайн тест soft skills",
          },
          {
            url: "/ua/pryklad-zvitu-soft-skills",
            label: "Приклад звіту soft skills",
          },
          {
            url: "/ua/yak-zrozumity-svoi-sylni-storony",
            label: "Як зрозуміти свої сильні сторони",
          },
          { url: "/ua/soft-skills-test", label: "Soft skills тест" },
        ],
        seoTitle: "Розвиток soft skills | G&T Power",
        canonical: "https://gntpower.com/ua/rozvytok-soft-skills",
        hreflangAlt: {
          lang: "ru",
          url: "https://gntpower.com/ru/razvitie-soft-skills",
        },
      }}
    />
  )
}
