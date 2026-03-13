import { MetadataRoute } from "next"

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: "https://gntpower.vercel.app/ua", lastModified: new Date(), changeFrequency: "monthly", priority: 1 },
    { url: "https://gntpower.vercel.app/ru", lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
    { url: "https://gntpower.vercel.app/en", lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
  ]
}
