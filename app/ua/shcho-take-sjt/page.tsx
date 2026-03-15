import { Metadata } from "next"
import ArticlePage from "@/components/ArticlePage"

export const metadata: Metadata = {
  title: "Що таке SJT | G&T Power",
  description:
    "Що таке Situational Judgement Test і чому цей метод працює для оцінки soft skills.",
  alternates: {
    canonical: "https://gntpower.com/ua/shcho-take-sjt",
    languages: {
      ru: "https://gntpower.com/ru/chto-takoe-sjt",
    },
  },
}

export default function Page() {
  return (
    <ArticlePage
      data={{
        lang: "ua",
        h1: "Що таке Situational Judgement Test (SJT)",
        answerBlock:
          "Situational Judgement Test (SJT) — це психометричний інструмент, який оцінює поведінкові реакції людини у змодельованих реалістичних робочих ситуаціях. Він вимірює не академічні знання, а спосіб прийняття рішень у практичному контексті.",
        tldr: "SJT оцінює не знання, а поведінкові рішення у робочих ситуаціях.",
        definition:
          "SJT — це тест оцінки ситуацій, у якому учасник отримує сценарії та обирає найбільш або найменш ефективні способи дії.",
        body: [
          {
            type: "p",
            text: "Ключова особливість SJT полягає в тому, що він оцінює ситуативне судження: здатність розпізнавати доречну поведінку в умовах невизначеності, конфлікту інтересів і обмежених ресурсів.",
          },
          {
            type: "section",
            heading: "Чому бізнес використовує SJT:",
            items: [
              "висока прогностична валідність",
              "інкрементальна валідність понад інші тести",
              "менший adverse impact порівняно з тестами когнітивних здібностей",
              "масштабованість для великих груп",
            ],
          },
          {
            type: "section",
            heading:
              "У G&T Power SJT використовується для оцінки 4 компетенцій:",
            items: [
              "системне мислення",
              "адаптивність",
              "досягнення результату",
              "взаємодія з людьми",
            ],
          },
        ],
        trustBlock: [
          "у матеріалах G&T Power згадано 102 дослідження",
          "для тесту наведено Cronbach's alpha 0.732",
          "метод використовується у великих організаціях, державних службах та військових структурах у світі",
        ],
        faq: [
          {
            q: "Чим SJT кращий за звичайний опитувальник?",
            a: "Він краще відтворює реальні робочі ситуації та дає більш прикладний результат.",
          },
          {
            q: "Чи це тільки для найму?",
            a: "Ні, метод підходить також для розвитку, кадрового резерву та формування команд.",
          },
          {
            q: "Чи має метод обмеження?",
            a: "Так, якісний SJT потребує хорошого job analysis і адаптації сценаріїв до контексту.",
          },
        ],
        cta: "Хочете побачити, як SJT працює у G&T Power? Подивіться демо.",
        relatedPages: [
          {
            url: "/ua/soft-skills-test-online",
            label: "Онлайн тест soft skills",
          },
          {
            url: "/ua/yak-otsinyty-soft-skills-komandy",
            label: "Як оцінити soft skills команди",
          },
          {
            url: "/ua/pryklad-zvitu-soft-skills",
            label: "Приклад звіту soft skills",
          },
          {
            url: "/ua/soft-skills-kerivnyka",
            label: "Soft skills керівника",
          },
          { url: "/ua/soft-skills-test", label: "Soft skills тест" },
        ],
        seoTitle: "Що таке SJT | G&T Power",
        canonical: "https://gntpower.com/ua/shcho-take-sjt",
        hreflangAlt: {
          lang: "ru",
          url: "https://gntpower.com/ru/chto-takoe-sjt",
        },
      }}
    />
  )
}
