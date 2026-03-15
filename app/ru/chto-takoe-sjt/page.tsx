import { Metadata } from "next"
import ArticlePage from "@/components/ArticlePage"

export const metadata: Metadata = {
  title: "Что такое SJT | G&T Power",
  description:
    "Что такое Situational Judgement Test и почему этот метод работает для оценки soft skills.",
  alternates: {
    canonical: "https://gntpower.com/ru/chto-takoe-sjt",
    languages: {
      uk: "https://gntpower.com/ua/shcho-take-sjt",
    },
  },
}

export default function Page() {
  return (
    <ArticlePage
      data={{
        lang: "ru",
        h1: "Что такое Situational Judgement Test (SJT)",
        answerBlock:
          "Situational Judgement Test (SJT) — это психометрический инструмент, который оценивает поведенческие реакции человека в смоделированных реалистичных рабочих ситуациях. Он измеряет не академические знания, а способ принятия решений в практическом контексте.",
        tldr: "SJT оценивает не знания, а поведенческие решения в рабочих ситуациях.",
        definition:
          "SJT — это тест оценки ситуаций, в котором участник получает сценарии и выбирает наиболее или наименее эффективные способы действия.",
        body: [
          {
            type: "p",
            text: "Ключевая особенность SJT состоит в том, что он оценивает ситуативное суждение: способность распознавать уместное поведение в условиях неопределённости, конфликта интересов и ограниченных ресурсов.",
          },
          {
            type: "section",
            heading: "Почему бизнес использует SJT:",
            items: [
              "высокая прогностическая валидность",
              "инкрементальная валидность сверх других тестов",
              "меньший adverse impact по сравнению с тестами когнитивных способностей",
              "масштабируемость для больших групп",
            ],
          },
          {
            type: "section",
            heading:
              "В G&T Power SJT используется для оценки 4 компетенций:",
            items: [
              "системное мышление",
              "адаптивность",
              "достижение результата",
              "взаимодействие с людьми",
            ],
          },
        ],
        trustBlock: [
          "в материалах G&T Power упомянуты 102 исследования",
          "для теста приведён Cronbach's alpha 0.732",
          "метод используется в крупных организациях, государственных службах и военных структурах в мире",
        ],
        faq: [
          {
            q: "Чем SJT лучше обычного опросника?",
            a: "Он лучше воспроизводит реальные рабочие ситуации и даёт более прикладной результат.",
          },
          {
            q: "Это только для найма?",
            a: "Нет, метод подходит также для развития, кадрового резерва и формирования команд.",
          },
          {
            q: "Есть ли у метода ограничения?",
            a: "Да, качественный SJT требует хорошего job analysis и адаптации сценариев к контексту.",
          },
        ],
        cta: "Хотите увидеть, как SJT работает в G&T Power? Посмотрите демо.",
        relatedPages: [
          {
            url: "/ru/soft-skills-test-online",
            label: "Онлайн тест soft skills",
          },
          {
            url: "/ru/kak-ocenit-soft-skills-komandy",
            label: "Как оценить soft skills команды",
          },
          {
            url: "/ru/primer-otcheta-soft-skills",
            label: "Пример отчёта soft skills",
          },
          {
            url: "/ru/soft-skills-rukovoditelya",
            label: "Soft skills руководителя",
          },
          { url: "/ru/soft-skills-test", label: "Soft skills тест" },
        ],
        seoTitle: "Что такое SJT | G&T Power",
        canonical: "https://gntpower.com/ru/chto-takoe-sjt",
        hreflangAlt: {
          lang: "ua",
          url: "https://gntpower.com/ua/shcho-take-sjt",
        },
      }}
    />
  )
}
