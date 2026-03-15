import { Metadata } from "next"
import ArticlePage from "@/components/ArticlePage"

export const metadata: Metadata = {
  title: "Soft skills керівника | G&T Power",
  description:
    "Які soft skills керівника дійсно впливають на результат і як їх оцінювати.",
  alternates: {
    canonical: "https://gntpower.com/ua/soft-skills-kerivnyka",
    languages: {
      ru: "https://gntpower.com/ru/soft-skills-rukovoditelya",
    },
  },
}

export default function Page() {
  return (
    <ArticlePage
      data={{
        lang: "ua",
        h1: "Soft skills керівника",
        answerBlock:
          "Soft skills керівника визначають його здатність ефективно працювати з людьми, приймати рішення в складних ситуаціях і досягати результату. Найважливішими компетенціями є системне мислення, адаптивність, досягнення результату та взаємодія з людьми.",
        tldr: "Сильний керівник — це не лише досвід, а поведінка в умовах складності та змін.",
        definition:
          "Soft skills керівника — це поведінкові компетенції, які впливають на якість рішень, комунікацію, координацію та здатність вести людей до результату.",
        body: [
          {
            type: "p",
            text: "Керівник може бути дуже сильним функціонально, але втрачати ефективність у новій ролі через слабку пріоритизацію, погану комунікацію, низьку гнучкість або невміння діяти в невизначеності.",
          },
          {
            type: "section",
            heading: "4 ключові компетенції в G&T Power:",
            items: [
              "системне мислення",
              "адаптивність",
              "досягнення результату",
              "взаємодія з людьми",
            ],
          },
          {
            type: "p",
            text: "Оцінювати їх краще через робочі сценарії, а не лише через самоопис або враження від співбесіди.",
          },
        ],
        faq: [
          {
            q: "Чому саме ці 4 компетенції?",
            a: "Вони дають практичну картину того, як керівник думає, діє та працює з іншими людьми.",
          },
          {
            q: "Чи це корисно тільки для топів?",
            a: "Ні, це також корисно для middle managers і кадрового резерву.",
          },
          {
            q: "Чи можна використовувати для розвитку?",
            a: "Так, профіль можна перетворити на план розвитку.",
          },
        ],
        cta: "Подивіться, як виглядає профіль soft skills керівника в G&T Power.",
        relatedPages: [
          {
            url: "/ua/otsinka-upravlinskoho-potentsialu",
            label: "Оцінка управлінського потенціалу",
          },
          {
            url: "/ua/yak-vyznachyty-lideriv-u-komandi",
            label: "Як визначити лідерів у команді",
          },
          { url: "/ua/shcho-take-sjt", label: "Що таке SJT" },
          { url: "/ua/leadership-assessment", label: "Оцінка лідерства" },
        ],
        seoTitle: "Soft skills керівника | G&T Power",
        canonical: "https://gntpower.com/ua/soft-skills-kerivnyka",
        hreflangAlt: {
          lang: "ru",
          url: "https://gntpower.com/ru/soft-skills-rukovoditelya",
        },
      }}
    />
  )
}
