import FadeIn from "./FadeIn"

type ContactCTAProps = {
  title: string
  subtitle: string
  button: string
  email: string
  emailSubject: string
}

export default function ContactCTA({ title, subtitle, button, email, emailSubject }: ContactCTAProps) {
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
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href="https://app.gntpower.com/demo"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto py-4 px-9 text-[16px] font-bold rounded-lg bg-white text-[#308F16] no-underline shadow-lg text-center hover:bg-gray-50 hover:shadow-xl active:scale-95 transition-all duration-200"
          >
            {button}
          </a>
          <a
            href={`mailto:${email}?subject=${encodeURIComponent(emailSubject)}`}
            className="w-full sm:w-auto py-4 px-9 text-[16px] font-semibold rounded-lg bg-transparent text-white no-underline border-2 border-white/60 text-center hover:bg-white/10 active:scale-95 transition-all duration-200"
          >
            {email}
          </a>
        </div>
      </FadeIn>
    </section>
  )
}
