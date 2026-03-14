"use client"
import FadeIn from "./FadeIn"
import ContactForm from "./ContactForm"

type ContactFormStrings = {
  name: string
  email: string
  message: string
  submit: string
  sending: string
  success: string
  error: string
}

type ContactCTAProps = {
  title: string
  subtitle: string
  form: ContactFormStrings
}

export default function ContactCTA({ title, subtitle, form }: ContactCTAProps) {
  return (
    <section
      id="contact"
      className="relative overflow-hidden text-white text-center py-14 px-5 md:py-[100px] md:px-10"
      style={{ background: "linear-gradient(135deg, #308F16 0%, #63AF4F 100%)" }}
    >
      <img src="/greensun.svg" aria-hidden="true" className="absolute top-[-80px] left-[-80px] w-[600px] h-[600px] opacity-20 pointer-events-none brightness-0 invert hidden md:block" />

      <FadeIn>
        <h2 className="font-extrabold tracking-[-0.5px] mb-5" style={{ fontSize: "clamp(28px, 3vw, 48px)" }}>
          {title}
        </h2>
        <p className="text-[16px] md:text-[18px] opacity-90 max-w-[520px] mx-auto mb-10 leading-relaxed">{subtitle}</p>
        <ContactForm {...form} />
      </FadeIn>
    </section>
  )
}
