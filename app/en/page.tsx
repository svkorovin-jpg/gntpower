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
import JsonLd from "../../components/JsonLd"
import { messages } from "../../messages/en"

export const metadata: Metadata = {
  title: "G&T Power — Evaluate your Soft Skills",
  description: "A scientifically sound way to assess four leadership competencies. Discover your superpowers and get a detailed report to build your career.",
  alternates: {
    canonical: "https://gntpower.vercel.app/en",
    languages: { "uk": "https://gntpower.vercel.app/ua", "ru": "https://gntpower.vercel.app/ru", "en": "https://gntpower.vercel.app/en" },
  },
  openGraph: {
    title: "G&T Power — Evaluate your Soft Skills",
    description: "A scientifically sound way to assess four leadership competencies.",
    url: "https://gntpower.vercel.app/en",
    siteName: "G&T Power",
    locale: "en_US",
    type: "website",
    images: [{ url: "https://gntpower.vercel.app/og-image.png", width: 1200, height: 630 }],
  },
}

export default function Page() {
  return (
    <main>
      <JsonLd lang="en" />
      <SectionTracker />
      <Header nav={messages.nav} lang="en" />
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
        form={messages.contact.form}
      />
      <Footer />
    </main>
  )
}
