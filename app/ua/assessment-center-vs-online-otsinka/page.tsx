import { Metadata } from "next"
import ArticlePage from "@/components/ArticlePage"

export const metadata: Metadata = {
  title: "Assessment center чи онлайн-оцінка soft skills | G&T Power",
  description:
    "Що обрати: assessment center чи онлайн-оцінку soft skills. Плюси, мінуси та практичний підхід.",
  alternates: {
    canonical:
      "https://gntpower.com/ua/assessment-center-vs-online-otsinka",
    languages: {
      ru: "https://gntpower.com/ru/assessment-center-vs-online-ocenka",
    },
  },
}

export default function Page() {
  return (
    <ArticlePage
      data={{
        lang: "ua",
        h1: "Assessment center чи онлайн-оцінка soft skills",
        answerBlock:
          "Assessment center і онлайн-оцінка soft skills вирішують різні задачі. Assessment center дає глибоку оцінку невеликої кількості кандидатів, тоді як онлайн-інструменти дозволяють швидко і стандартизовано оцінити великі групи співробітників.",
        tldr: "Для великих груп онлайн SJT майже завжди ефективніший як базовий інструмент оцінки.",
        definition:
          "Assessment center — це формат глибокої оцінки через вправи, кейси та спостереження. Онлайн-оцінка — це стандартизований цифровий спосіб швидко перевірити поведінкові компетенції.",
        body: [
          {
            type: "section",
            heading: "Коли краще assessment center:",
            items: [
              "мала кількість фіналістів",
              "висока ціна помилки",
              "критичні senior-ролі",
              "потрібне живе спостереження",
            ],
          },
          {
            type: "section",
            heading: "Коли краще онлайн-оцінка:",
            items: [
              "великий потік кандидатів",
              "кадровий резерв",
              "масова оцінка менеджерів",
              "скринінг перед глибшою оцінкою",
            ],
          },
          {
            type: "p",
            text: "Практичний підхід: Не \"або-або\", а правильна комбінація. Онлайн SJT можна використовувати як перший або середній шар оцінки, а assessment center — як наступний етап для фіналістів.",
          },
        ],
        faq: [
          {
            q: "Що дешевше масштабувати?",
            a: "Онлайн-оцінку.",
          },
          {
            q: "Що краще для масової оцінки?",
            a: "Онлайн SJT.",
          },
          {
            q: "Чи можна комбінувати?",
            a: "Так, це найкраща практика.",
          },
        ],
        cta: "Хочете зрозуміти, який формат підійде саме вам? Запросіть короткий дзвінок.",
        relatedPages: [
          { url: "/ua/shcho-take-sjt", label: "Що таке SJT" },
          {
            url: "/ua/yak-otsinyty-soft-skills-komandy",
            label: "Як оцінити soft skills команди",
          },
          {
            url: "/ua/otsinka-upravlinskoho-potentsialu",
            label: "Оцінка управлінського потенціалу",
          },
          { url: "/ua/soft-skills-test", label: "Soft skills тест" },
        ],
        seoTitle: "Assessment center чи онлайн-оцінка soft skills | G&T Power",
        canonical:
          "https://gntpower.com/ua/assessment-center-vs-online-otsinka",
        hreflangAlt: {
          lang: "ru",
          url: "https://gntpower.com/ru/assessment-center-vs-online-ocenka",
        },
      }}
    />
  )
}
