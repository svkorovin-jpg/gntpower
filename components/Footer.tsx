const privacyLinks: Record<string, { href: string; label: string }> = {
  ru: { href: "/ru/privacy", label: "Политика конфиденциальности" },
  en: { href: "/en/privacy", label: "Privacy Policy" },
  ua: { href: "/ua/privacy", label: "Політика конфіденційності" },
}

export default function Footer({ lang = "en" }: { lang?: "ru" | "en" | "ua" }) {
  const privacy = privacyLinks[lang]

  return (
    <footer className="bg-[#111] text-[#aaa] py-10 px-5 text-center text-[13px] leading-[1.8]">
      <p className="m-0 mb-1.5 text-[#666]">SoftPotential OÜ · Reg. No. 14565562</p>
      <p className="m-0 mb-4 text-[#555]">
        Kakumäe tee 226, Harju maakond, Haabersti linnaosa, Tallinn 13516, Estonia
      </p>
      <p className="m-0 mb-2 text-[#444]">© G&amp;T Power. 2018–2026</p>
      <a href={privacy.href} className="text-[#555] hover:text-[#63AF4F] underline text-[12px] transition-colors">
        {privacy.label}
      </a>
    </footer>
  )
}
