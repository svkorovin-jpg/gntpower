import { Metadata } from "next"
import ArticlePage from "@/components/ArticlePage"

export const metadata: Metadata = {
  title: "Оценка управленческого потенциала | G&T Power",
  description:
    "Как понять, кто готов к новой роли: оценка управленческого потенциала на основе поведенческих компетенций.",
  alternates: {
    canonical:
      "https://gntpower.com/ru/ocenka-upravlencheskogo-potenciala",
    languages: {
      uk: "https://gntpower.com/ua/otsinka-upravlinskoho-potentsialu",
    },
  },
}

export default function Page() {
  return (
    <ArticlePage
      data={{
        lang: "ru",
        h1: "Оценка управленческого потенциала",
        answerBlock:
          "Оценка управленческого потенциала позволяет понять, готов ли человек к руководящей роли. Для этого анализируются поведенческие компетенции: системное мышление, адаптивность, способность достигать результата и эффективное взаимодействие с людьми.",
        tldr: "Прошлые результаты важны, но для новой роли нужно отдельно оценивать управленческое поведение.",
        definition:
          "Управленческий потенциал — это способность человека эффективно действовать в новой роли, когда растёт сложность задач, уровень неопределённости и объём взаимодействия с людьми.",
        body: [
          {
            type: "p",
            text: "Человек может быть сильным индивидуальным исполнителем, но не каждый сильный исполнитель автоматически становится сильным руководителем. Новая роль требует приоритизации, координации, влияния, терпимости к изменениям и способности видеть общую картину.",
          },
          {
            type: "section",
            heading: "G&T Power помогает:",
            items: [
              "увидеть сильные стороны кандидата",
              "оценить зоны развития",
              "сравнить профиль с требованиями роли или типовой задачи",
              "поддержать решения по кадровому резерву, продвижению и развитию",
            ],
          },
        ],
        faq: [
          {
            q: "Почему прошлых результатов недостаточно?",
            a: "Потому что новая роль часто требует другого набора поведенческих навыков.",
          },
          {
            q: "Для чего это использовать?",
            a: "Для кадрового резерва, внутреннего отбора, succession planning и развития руководителей.",
          },
          {
            q: "Можно ли сочетать с интервью?",
            a: "Да, это один из лучших практических форматов.",
          },
        ],
        cta: "Нужно понять, кого повышать, а кого развивать? Запросите демо G&T Power.",
        relatedPages: [
          {
            url: "/ru/kak-opredelit-liderov-v-komande",
            label: "Как определить лидеров в команде",
          },
          {
            url: "/ru/kak-ocenit-soft-skills-komandy",
            label: "Как оценить soft skills команды",
          },
          {
            url: "/ru/primer-otcheta-soft-skills",
            label: "Пример отчёта soft skills",
          },
          { url: "/ru/chto-takoe-sjt", label: "Что такое SJT" },
          { url: "/ru/leadership-assessment", label: "Оценка лидерства" },
        ],
        seoTitle: "Оценка управленческого потенциала | G&T Power",
        canonical:
          "https://gntpower.com/ru/ocenka-upravlencheskogo-potenciala",
        hreflangAlt: {
          lang: "ua",
          url: "https://gntpower.com/ua/otsinka-upravlinskoho-potentsialu",
        },
      }}
    />
  )
}
