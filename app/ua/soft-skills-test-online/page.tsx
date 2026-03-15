import { Metadata } from "next"
import ArticlePage from "@/components/ArticlePage"

export const metadata: Metadata = {
  title: "Онлайн тест soft skills | G&T Power",
  description:
    "Онлайн тест soft skills для оцінки поведінкових компетенцій у реалістичних робочих ситуаціях.",
  alternates: {
    canonical: "https://gntpower.com/ua/soft-skills-test-online",
    languages: {
      ru: "https://gntpower.com/ru/soft-skills-test-online",
    },
  },
}

export default function Page() {
  return (
    <ArticlePage
      data={{
        lang: "ua",
        h1: "Онлайн тест soft skills",
        answerBlock:
          "Онлайн тест soft skills дозволяє оцінити поведінкові компетенції людини через змодельовані робочі ситуації. Найбільш практичні інструменти використовують методологію SJT, де учасник обирає варіанти дій у реалістичних сценаріях.",
        tldr: "Онлайн тест soft skills показує, як людина поводиться в реальних робочих ситуаціях.",
        definition:
          "Онлайн тест soft skills — це цифровий інструмент оцінки поведінкових реакцій, а не лише знань або самооцінки.",
        body: [
          {
            type: "p",
            text: "Багато звичайних тестів показують загальні риси або самоопис. Але в роботі важливіше інше: як людина приймає рішення, реагує на зміни, взаємодіє з іншими та рухає результат у складних умовах.",
          },
          {
            type: "p",
            text: "G&T Power використовує SJT — підхід, у якому учасник проходить послідовний сюжет із реалістичних управлінських ситуацій. Різні варіанти відповіді показують різний рівень розвитку навичок.",
          },
          {
            type: "section",
            heading: "Що вимірюється:",
            items: [
              "системне мислення",
              "адаптивність",
              "досягнення результату",
              "взаємодія з людьми",
            ],
          },
          {
            type: "section",
            heading: "Що отримує учасник:",
            items: [
              "індивідуальний профіль компетенцій",
              "порівняння з видатним результатом",
              "рекомендації для розвитку",
              "краще розуміння ролей і задач, що йому підходять",
            ],
          },
        ],
        faq: [
          {
            q: "Це тест знань?",
            a: "Ні, це оцінка поведінкових реакцій у робочих ситуаціях.",
          },
          {
            q: "Чи підходить тест для розвитку?",
            a: "Так, результати можна використовувати для індивідуального плану розвитку.",
          },
          {
            q: "Чи підходить це для компаній?",
            a: "Так, інструмент підходить як для окремих людей, так і для командної оцінки.",
          },
        ],
        cta: "Пройдіть демо та подивіться, як виглядає ваш профіль soft skills.",
        relatedPages: [
          { url: "/ua/shcho-take-sjt", label: "Що таке SJT" },
          {
            url: "/ua/pryklad-zvitu-soft-skills",
            label: "Приклад звіту soft skills",
          },
          { url: "/ua/rozvytok-soft-skills", label: "Розвиток soft skills" },
          {
            url: "/ua/yak-zrozumity-svoi-sylni-storony",
            label: "Як зрозуміти свої сильні сторони",
          },
          { url: "/ua/soft-skills-test", label: "Soft skills тест" },
        ],
        seoTitle: "Онлайн тест soft skills | G&T Power",
        canonical: "https://gntpower.com/ua/soft-skills-test-online",
        hreflangAlt: {
          lang: "ru",
          url: "https://gntpower.com/ru/soft-skills-test-online",
        },
      }}
    />
  )
}
