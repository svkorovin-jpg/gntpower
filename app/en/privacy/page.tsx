import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Privacy Policy — G&T Power",
  robots: { index: false },
}

export default function PrivacyPage() {
  return (
    <main className="max-w-[760px] mx-auto px-6 py-16 text-[#222] leading-relaxed">
      <Link href="/en" className="text-[#308F16] text-[14px] hover:underline">← Back</Link>

      <h1 className="text-[32px] font-extrabold mt-8 mb-2">Privacy Policy</h1>
      <p className="text-[#888] text-[14px] mb-10">Last updated: March 2026</p>

      <section className="mb-8">
        <h2 className="text-[20px] font-bold mb-3">1. Controller</h2>
        <p>
          SoftPotential OÜ (registry code 14565562)<br />
          Kakumäe tee 226, Haabersti, Tallinn 13516, Estonia<br />
          Email: <a href="mailto:info@gntpower.com" className="text-[#308F16] hover:underline">info@gntpower.com</a>
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-[20px] font-bold mb-3">2. Data We Collect</h2>
        <p className="mb-3"><strong>Contact form:</strong> name, email address, and message text you submit voluntarily. This data is used solely to respond to your enquiry.</p>
        <p><strong>Analytics:</strong> if you consent, we collect anonymised usage data via Google Analytics 4 (page views, session duration, country, device type). No personally identifiable information is collected through analytics.</p>
      </section>

      <section className="mb-8">
        <h2 className="text-[20px] font-bold mb-3">3. Legal Basis</h2>
        <p className="mb-3"><strong>Contact form:</strong> Article 6(1)(b) GDPR — processing necessary to respond to your request.</p>
        <p><strong>Analytics:</strong> Article 6(1)(a) GDPR — your consent, which you may withdraw at any time by clearing your browser's local storage.</p>
      </section>

      <section className="mb-8">
        <h2 className="text-[20px] font-bold mb-3">4. Data Processors</h2>
        <p className="mb-2"><strong>Resend Inc.</strong> (USA) — email delivery of contact form submissions. Data is processed under standard contractual clauses.</p>
        <p><strong>Google LLC</strong> (USA) — analytics, only if you have given consent. Data is processed under Google's Data Processing Agreement.</p>
      </section>

      <section className="mb-8">
        <h2 className="text-[20px] font-bold mb-3">5. Retention</h2>
        <p className="mb-2"><strong>Contact form data:</strong> retained for as long as necessary to handle your enquiry, then deleted.</p>
        <p><strong>Analytics data:</strong> retained for 14 months in Google Analytics, as per Google's standard settings.</p>
      </section>

      <section className="mb-8">
        <h2 className="text-[20px] font-bold mb-3">6. Your Rights</h2>
        <p className="mb-2">Under GDPR you have the right to: access your data, correct inaccuracies, request deletion, restrict or object to processing, and data portability.</p>
        <p>To exercise any of these rights, contact us at <a href="mailto:info@gntpower.com" className="text-[#308F16] hover:underline">info@gntpower.com</a>. You also have the right to lodge a complaint with the Estonian Data Protection Inspectorate (<a href="https://www.aki.ee" target="_blank" rel="noopener noreferrer" className="text-[#308F16] hover:underline">aki.ee</a>).</p>
      </section>

      <section className="mb-8">
        <h2 className="text-[20px] font-bold mb-3">7. Cookies</h2>
        <p>We use only the cookies set by Google Analytics, and only after your explicit consent. We do not use advertising, tracking, or third-party social media cookies.</p>
      </section>

      <section>
        <h2 className="text-[20px] font-bold mb-3">8. Changes</h2>
        <p>We may update this policy. The current version is always available on this page.</p>
      </section>
    </main>
  )
}
