import type { Metadata } from "next"
import Header from "../../components/Header"
import Hero from "../../components/Hero"
import WhySoftSkills from "../../components/WhySoftSkills"
import Competencies from "../../components/Competencies"
import Audiences from "../../components/Audiences"
import ForWho from "../../components/ForWho"
import WhyItWorks from "../../components/WhyItWorks"
import HowItWorks from "../../components/HowItWorks"
import WhatYouGet from "../../components/WhatYouGet"
import Pricing from "../../components/Pricing"
import ContactCTA from "../../components/ContactCTA"
import Footer from "../../components/Footer"
import SectionTracker from "../../components/SectionTracker"
import { messages } from "../../messages/ru"

export const metadata: Metadata = {
  title: "G&T Power — Оцените свои Soft Skills",
  description: "Научно обоснованный способ оценки четырёх лидерских компетенций. Узнайте свои суперсилы и получите детализированный отчёт.",
  alternates: {
    canonical: "https://gntpower.com/ru",
    languages: { "uk": "https://gntpower.com/ua", "ru": "https://gntpower.com/ru", "en": "https://gntpower.com/en" },
  },
  openGraph: {
    title: "G&T Power — Оцените свои Soft Skills",
    description: "Научно обоснованный способ оценки четырёх лидерских компетенций.",
    url: "https://gntpower.com/ru",
    siteName: "G&T Power",
    locale: "ru_RU",
    type: "website",
  },
}

export default function Page() {
  return (
    <main>
      <SectionTracker />
      <Header nav={messages.nav} lang="ru" />
      <Hero
        title={messages.hero.title}
        subtitle={messages.hero.subtitle}
        description={messages.hero.description}
        button={messages.hero.button}
        buttonSecondary={messages.hero.buttonSecondary}
      />
      <WhySoftSkills
        title={messages.whySoftSkills.title}
        tagline={messages.whySoftSkills.tagline}
        text={messages.whySoftSkills.text}
        button={messages.whySoftSkills.button}
      />
      <Competencies
        title={messages.competencies.title}
        items={messages.competencies.items}
      />
      <Audiences
        title={messages.audiences.title}
        subtitle={messages.audiences.subtitle}
        items={messages.audiences.items}
      />
      <ForWho
        title={messages.forwho.title}
        managers={messages.forwho.managers}
        participants={messages.forwho.participants}
      />
      <WhyItWorks
        title={messages.whyItWorks.title}
        items={messages.whyItWorks.items}
      />
      <HowItWorks
        title={messages.how.title}
        intro={messages.how.intro}
        items={messages.how.items}
      />
      <WhatYouGet
        title={messages.whatYouGet.title}
        intro={messages.whatYouGet.intro}
        text={messages.whatYouGet.text}
      />
      <Pricing
        title={messages.pricing.title}
        plans={messages.pricing.plans}
      />
      <ContactCTA
        title={messages.contact.title}
        subtitle={messages.contact.subtitle}
        button={messages.contact.button}
        email={messages.contact.email}
        emailSubject={messages.contact.emailSubject}
      />
      <Footer />
    </main>
  )
}
