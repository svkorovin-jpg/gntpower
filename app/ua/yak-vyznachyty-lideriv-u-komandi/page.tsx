import { Metadata } from "next"
import ArticlePage from "@/components/ArticlePage"

export const metadata: Metadata = {
  title: "Як визначити лідерів у команді | G&T Power",
  description:
    "Як визначити майбутніх лідерів у команді на основі поведінкових компетенцій.",
  alternates: {
    canonical: "https://gntpower.com/ua/yak-vyznachyty-lideriv-u-komandi",
    languages: {
      ru: "https://gntpower.com/ru/kak-opredelit-liderov-v-komande",
    },
  },
}

export default function Page() {
  return (
    <ArticlePage
      data={{
        lang: "ua",
        h1: "Як визначити лідерів у команді",
        answerBlock:
          "Майбутніх лідерів у команді можна визначити через оцінку поведінкових компетенцій. Важливо дивитися не тільки на досвід, а на системне мислення, адаптивність, здатність досягати результату та ефективну взаємодію з людьми.",
        tldr: "Не кожен сильний спеціаліст автоматично є майбутнім сильним керівником.",
        definition:
          "Лідерський потенціал — це поєднання поведінкових характеристик, які допомагають людині вести інших, приймати рішення та діяти в умовах складності.",
        body: [
          {
            type: "p",
            text: "У багатьох компаніях майбутніх лідерів визначають інтуїтивно: по стажу, впевненості, харизмі або суб'єктивному враженню. Але цього недостатньо.",
          },
          {
            type: "section",
            heading: "Краще дивитися на:",
            items: [
              "здатність бачити загальну картину",
              "поведінку в умовах невизначеності",
              "вміння пріоритизувати і рухати результат",
              "якість взаємодії з людьми",
            ],
          },
          {
            type: "section",
            heading: "Практично хороший підхід:",
            items: [
              "оцінка поведінкових компетенцій",
              "інтерв'ю",
              "дані про результати у ролі",
            ],
          },
        ],
        faq: [
          {
            q: "Чому стажу недостатньо?",
            a: "Бо стаж не завжди означає готовність до нової складності ролі.",
          },
          {
            q: "Чи це підходить для кадрового резерву?",
            a: "Так, це один із найтиповіших сценаріїв використання.",
          },
          {
            q: "Чи потрібно комбінувати методи?",
            a: "Так, це найкраща практика.",
          },
        ],
        cta: "Хочете системно знайти майбутніх лідерів? Запросіть демо G&T Power.",
        relatedPages: [
          {
            url: "/ua/otsinka-upravlinskoho-potentsialu",
            label: "Оцінка управлінського потенціалу",
          },
          {
            url: "/ua/soft-skills-kerivnyka",
            label: "Soft skills керівника",
          },
          { url: "/ua/shcho-take-sjt", label: "Що таке SJT" },
          { url: "/ua/leadership-assessment", label: "Оцінка лідерства" },
        ],
        seoTitle: "Як визначити лідерів у команді | G&T Power",
        canonical:
          "https://gntpower.com/ua/yak-vyznachyty-lideriv-u-komandi",
        hreflangAlt: {
          lang: "ru",
          url: "https://gntpower.com/ru/kak-opredelit-liderov-v-komande",
        },
      }}
    />
  )
}
