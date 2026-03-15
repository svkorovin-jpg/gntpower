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
        <h2 className="text-[20px] font-bold mb-3">1. Who We Are</h2>
        <p>
          This website is operated by SoftPotential OÜ (registry code 14565562), based at Kakumäe tee 226, Haabersti, Tallinn 13516, Estonia. We act as the data controller for personal data collected through this website. For any privacy-related enquiries, please contact us at{" "}
          <a href="mailto:info@gntpower.com" className="text-[#308F16] hover:underline">info@gntpower.com</a>.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-[20px] font-bold mb-3">2. What Data We Collect</h2>
        <p className="mb-3"><strong>Contact form:</strong> name, email address, and message text you submit voluntarily.</p>
        <p className="mb-3"><strong>Analytics:</strong> if you consent, we collect anonymised usage data via Google Analytics 4 (page views, session duration, country, device type). No personally identifiable information is collected through analytics.</p>
        <p><strong>Server logs:</strong> IP address, browser type, and referral source are automatically processed by our hosting provider (Vercel) for security and performance purposes.</p>
      </section>

      <section className="mb-8">
        <h2 className="text-[20px] font-bold mb-3">3. Legal Basis for Processing</h2>
        <p className="mb-3"><strong>Contact form:</strong> Article 6(1)(b) GDPR — processing necessary to respond to your request; and Article 6(1)(f) GDPR — our legitimate interest in handling business enquiries.</p>
        <p className="mb-3"><strong>Analytics:</strong> Article 6(1)(a) GDPR — your explicit consent, which you may withdraw at any time by clearing your browser's local storage.</p>
        <p><strong>Server logs:</strong> Article 6(1)(f) GDPR — legitimate interest in maintaining platform security.</p>
      </section>

      <section className="mb-8">
        <h2 className="text-[20px] font-bold mb-3">4. How We Use Your Data</h2>
        <p className="mb-2">We use the data we collect for the following purposes:</p>
        <ul className="list-disc pl-6 space-y-1">
          <li>Responding to your enquiries submitted via the contact form.</li>
          <li>Analysing website usage patterns to improve our content and user experience (analytics only, with your consent).</li>
          <li>Maintaining the security and performance of the platform.</li>
        </ul>
        <p className="mt-3">We do not use your data for automated decision-making or profiling, and we do not sell your personal information to any third party.</p>
      </section>

      <section className="mb-8">
        <h2 className="text-[20px] font-bold mb-3">5. Third Parties</h2>
        <p className="mb-2"><strong>Vercel Inc.</strong> (USA) — website hosting and server infrastructure. Data is processed under standard contractual clauses.</p>
        <p className="mb-2"><strong>Resend Inc.</strong> (USA) — email delivery of contact form submissions. Messages are not retained by Resend after delivery. Data is processed under standard contractual clauses.</p>
        <p><strong>Google LLC</strong> (USA) — analytics, only if you have given consent. Data is processed under Google's Data Processing Agreement.</p>
      </section>

      <section className="mb-8">
        <h2 className="text-[20px] font-bold mb-3">6. Data Retention</h2>
        <p className="mb-2"><strong>Contact form messages:</strong> retained for a maximum of 12 months from receipt, then deleted.</p>
        <p className="mb-2"><strong>Analytics data:</strong> retained for 14 months in Google Analytics, after which it is automatically deleted.</p>
        <p><strong>Server logs:</strong> retained by Vercel for up to 30 days.</p>
      </section>

      <section className="mb-8">
        <h2 className="text-[20px] font-bold mb-3">7. Your Rights</h2>
        <p className="mb-2">Under GDPR you have the right to: access your data, correct inaccuracies, request deletion, restrict or object to processing, and data portability. You also have the right to withdraw consent at any time without affecting the lawfulness of prior processing.</p>
        <p>To exercise any of these rights, contact us at{" "}
          <a href="mailto:info@gntpower.com" className="text-[#308F16] hover:underline">info@gntpower.com</a>. You also have the right to lodge a complaint with the Estonian Data Protection Inspectorate ({" "}
          <a href="https://www.aki.ee" target="_blank" rel="noopener noreferrer" className="text-[#308F16] hover:underline">aki.ee</a>).
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-[20px] font-bold mb-3">8. Cookies</h2>
        <p className="mb-2">We use the following cookies:</p>
        <ul className="list-disc pl-6 space-y-1">
          <li><strong>gntpower_cookie_consent</strong> — stores your cookie preference. Expires after 1 year.</li>
          <li><strong>_ga, _ga_*</strong> — Google Analytics tracking cookies, set only after your explicit consent. Expire after 14 months.</li>
        </ul>
        <p className="mt-3">We do not use advertising, tracking, or third-party social media cookies. You can withdraw your analytics consent at any time by clearing your browser's local storage.</p>
      </section>

      <section>
        <h2 className="text-[20px] font-bold mb-3">9. Changes to This Policy</h2>
        <p>We may update this policy from time to time. The date at the top of this page indicates the most recent version. Continued use of the website after an update constitutes acceptance of the revised policy.</p>
      </section>
    </main>
  )
}
