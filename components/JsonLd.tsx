type JsonLdProps = {
  lang: "ua" | "ru" | "en"
}

const DATA = {
  ua: {
    name: "G&T Power — Soft Skills оцінка",
    description: "Науково обґрунтований спосіб оцінки чотирьох лідерських компетенцій для менеджерів і учасників.",
    url: "https://gntpower.com/ua",
    price: "8500",
    priceCurrency: "UAH",
  },
  ru: {
    name: "G&T Power — оценка Soft Skills",
    description: "Научно обоснованный способ оценки четырёх лидерских компетенций для менеджеров и участников.",
    url: "https://gntpower.com/ru",
    price: "170",
    priceCurrency: "EUR",
  },
  en: {
    name: "G&T Power — Soft Skills Assessment",
    description: "A scientifically sound way to assess four leadership competencies for managers and participants.",
    url: "https://gntpower.com/en",
    price: "170",
    priceCurrency: "EUR",
  },
}

export default function JsonLd({ lang }: JsonLdProps) {
  const d = DATA[lang]

  const organization = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "G&T Power",
    url: "https://gntpower.com",
    logo: "https://gntpower.com/photo.png",
    contactPoint: {
      "@type": "ContactPoint",
      email: "info@gntpower.com",
      contactType: "customer service",
    },
  }

  const product = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: d.name,
    description: d.description,
    url: d.url,
    image: "https://gntpower.com/og-image.png",
    brand: { "@type": "Brand", name: "G&T Power" },
    offers: {
      "@type": "Offer",
      price: d.price,
      priceCurrency: d.priceCurrency,
      availability: "https://schema.org/InStock",
      url: "https://app.gntpower.com/demo",
    },
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organization) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(product) }}
      />
    </>
  )
}
