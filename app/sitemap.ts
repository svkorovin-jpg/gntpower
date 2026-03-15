import { MetadataRoute } from "next"

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: "https://gntpower.com/ua", lastModified: new Date(), changeFrequency: "monthly", priority: 1 },
    { url: "https://gntpower.com/ru", lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
    { url: "https://gntpower.com/en", lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: "https://gntpower.com/ua/soft-skills-test", lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
    { url: "https://gntpower.com/ru/soft-skills-test", lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: "https://gntpower.com/en/soft-skills-test", lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: "https://gntpower.com/ua/leadership-assessment", lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
    { url: "https://gntpower.com/ru/leadership-assessment", lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: "https://gntpower.com/en/leadership-assessment", lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: "https://gntpower.com/ua/team-assessment", lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
    { url: "https://gntpower.com/ru/team-assessment", lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: "https://gntpower.com/en/team-assessment", lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    // Career assessment landing pages
    { url: "https://gntpower.com/ua/soft-skills-career-assessment", lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
    { url: "https://gntpower.com/ru/soft-skills-career-assessment", lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
    // Article pages UA
    { url: "https://gntpower.com/ua/yak-otsinyty-soft-skills-komandy", lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: "https://gntpower.com/ua/soft-skills-test-online", lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: "https://gntpower.com/ua/shcho-take-sjt", lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: "https://gntpower.com/ua/otsinka-upravlinskoho-potentsialu", lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: "https://gntpower.com/ua/assessment-center-vs-online-otsinka", lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: "https://gntpower.com/ua/soft-skills-kerivnyka", lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: "https://gntpower.com/ua/rozvytok-soft-skills", lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: "https://gntpower.com/ua/yak-zrozumity-svoi-sylni-storony", lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: "https://gntpower.com/ua/yak-vyznachyty-lideriv-u-komandi", lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: "https://gntpower.com/ua/pryklad-zvitu-soft-skills", lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    // Article pages RU
    { url: "https://gntpower.com/ru/kak-ocenit-soft-skills-komandy", lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: "https://gntpower.com/ru/soft-skills-test-online", lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: "https://gntpower.com/ru/chto-takoe-sjt", lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: "https://gntpower.com/ru/ocenka-upravlencheskogo-potenciala", lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: "https://gntpower.com/ru/assessment-center-vs-online-ocenka", lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: "https://gntpower.com/ru/soft-skills-rukovoditelya", lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: "https://gntpower.com/ru/razvitie-soft-skills", lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: "https://gntpower.com/ru/kak-ponyat-svoi-silnye-storony", lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: "https://gntpower.com/ru/kak-opredelit-liderov-v-komande", lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: "https://gntpower.com/ru/primer-otcheta-soft-skills", lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
  ]
}
