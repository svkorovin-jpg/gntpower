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
  ]
}
