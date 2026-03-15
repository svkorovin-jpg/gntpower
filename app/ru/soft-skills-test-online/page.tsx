import { Metadata } from "next"
import ArticlePage from "@/components/ArticlePage"

export const metadata: Metadata = {
  title: "Онлайн тест soft skills | G&T Power",
  description:
    "Онлайн тест soft skills для оценки поведенческих компетенций в реалистичных рабочих ситуациях.",
  alternates: {
    canonical: "https://gntpower.com/ru/soft-skills-test-online",
    languages: {
      ua: "https://gntpower.com/ua/soft-skills-test-online",
    },
  },
}

export default function Page() {
  return (
    <ArticlePage
      data={{
        lang: "ru",
        h1: "Онлайн тест soft skills",
        answerBlock:
          "Онлайн тест soft skills позволяет оценить поведенческие компетенции человека через смоделированные рабочие ситуации. Наиболее практичные инструменты используют методологию SJT, где участник выбирает варианты действий в реалистичных сценариях.",
        tldr: "Онлайн тест soft skills показывает, как человек ведёт себя в реальных рабочих ситуациях.",
        definition:
          "Онлайн тест soft skills — это цифровой инструмент оценки поведенческих реакций, а не только знаний или самооценки.",
        body: [
          {
            type: "p",
            text: "Многие обычные тесты показывают общие черты или самоописание. Но в работе важнее другое: как человек принимает решения, реагирует на изменения, взаимодействует с другими и двигает результат в сложных условиях.",
          },
          {
            type: "p",
            text: "G&T Power использует SJT — подход, в котором участник проходит последовательный сюжет из реалистичных управленческих ситуаций. Разные варианты ответа показывают разный уровень развития навыков.",
          },
          {
            type: "section",
            heading: "Что измеряется:",
            items: [
              "системное мышление",
              "адаптивность",
              "достижение результата",
              "взаимодействие с людьми",
            ],
          },
          {
            type: "section",
            heading: "Что получает участник:",
            items: [
              "индивидуальный профиль компетенций",
              "сравнение с выдающимся результатом",
              "рекомендации по развитию",
              "лучшее понимание ролей и задач, которые ему подходят",
            ],
          },
        ],
        faq: [
          {
            q: "Это тест знаний?",
            a: "Нет, это оценка поведенческих реакций в рабочих ситуациях.",
          },
          {
            q: "Подходит ли тест для развития?",
            a: "Да, результаты можно использовать для индивидуального плана развития.",
          },
          {
            q: "Подходит ли это для компаний?",
            a: "Да, инструмент подходит как для отдельных людей, так и для командной оценки.",
          },
        ],
        cta: "Пройдите демо и посмотрите, как выглядит ваш профиль soft skills.",
        relatedPages: [
          { url: "/ru/chto-takoe-sjt", label: "Что такое SJT" },
          {
            url: "/ru/primer-otcheta-soft-skills",
            label: "Пример отчёта soft skills",
          },
          { url: "/ru/razvitie-soft-skills", label: "Развитие soft skills" },
          {
            url: "/ru/kak-ponyat-svoi-silnye-storony",
            label: "Как понять свои сильные стороны",
          },
          { url: "/ru/soft-skills-test", label: "Soft skills тест" },
        ],
        seoTitle: "Онлайн тест soft skills | G&T Power",
        canonical: "https://gntpower.com/ru/soft-skills-test-online",
        hreflangAlt: {
          lang: "ua",
          url: "https://gntpower.com/ua/soft-skills-test-online",
        },
      }}
    />
  )
}
