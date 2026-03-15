import type { Metadata } from "next"
import Link from "next/link"
import AppLink from "../../../components/AppLink"

export const metadata: Metadata = {
  title: "Leadership Assessment — G&T Power",
  description:
    "Objective leadership competency assessment using SJT methodology. Predict leadership performance, support hiring and promotion decisions with reliable data.",
  alternates: {
    canonical: "https://gntpower.com/en/leadership-assessment",
    languages: {
      uk: "https://gntpower.com/ua/leadership-assessment",
      ru: "https://gntpower.com/ru/leadership-assessment",
      en: "https://gntpower.com/en/leadership-assessment",
    },
  },
}

export default function LeadershipAssessmentPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Nav */}
      <nav className="sticky top-0 z-50 bg-white border-b border-[#EDEDED]">
        <div className="max-w-[860px] mx-auto px-6 h-16 flex items-center justify-between">
          <Link href="/en">
            <img src="/photo.png" alt="G&T Power" className="h-10 w-auto" />
          </Link>
          <AppLink
            href="https://app.gntpower.com/demo"
            lang="en"
            className="bg-[#308F16] hover:bg-[#27780f] text-white text-[15px] font-semibold px-5 py-2 rounded-lg transition-colors"
          >
            Try free demo
          </AppLink>
        </div>
      </nav>

      {/* Hero */}
      <section className="bg-gradient-to-br from-[#308F16] to-[#63AF4F] text-white">
        <div className="max-w-[860px] mx-auto px-6 py-20">
          <p className="text-[13px] font-semibold uppercase tracking-widest opacity-80 mb-4">
            Leadership Competency Assessment
          </p>
          <h1 className="text-[38px] sm:text-[48px] font-extrabold leading-tight mb-6">
            Leadership Assessment: Objective Data for Better People Decisions
          </h1>
          <p className="text-[19px] leading-[1.7] opacity-90 max-w-[640px] mb-10">
            G&amp;T Power gives you reliable, scientifically validated scores for the four leadership
            competencies that predict actual performance — so every hire and promotion is backed by data,
            not instinct.
          </p>
          <AppLink
            href="https://app.gntpower.com/demo"
            lang="en"
            className="inline-block bg-white text-[#308F16] font-bold text-[17px] px-8 py-4 rounded-xl hover:bg-[#f0fcea] transition-colors"
          >
            Assess your leaders
          </AppLink>
        </div>
      </section>

      {/* Section 1: The Problem */}
      <section className="bg-white border-t border-[#EDEDED]">
        <div className="max-w-[860px] mx-auto px-6 py-16">
          <h2 className="text-[28px] font-extrabold text-[#111] mb-4">
            The Problem: Assessing Leaders Is Hard
          </h2>
          <p className="text-[17px] text-[#444] leading-[1.8] mb-8">
            Most organisations rely on approaches that look rigorous but consistently underperform when it comes
            to predicting actual leadership effectiveness.
          </p>
          <div className="space-y-4">
            <div className="rounded-xl border border-[#EDEDED] p-6">
              <p className="font-bold text-[#111] mb-2">Interviews assess confidence, not competency</p>
              <p className="text-[15px] text-[#444] leading-[1.7]">
                Structured or unstructured, interviews systematically favour candidates who are articulate,
                socially skilled, and good at self-promotion. These traits correlate weakly with the ability
                to lead teams, drive change, or navigate complex situations. The result: confident but
                ineffective leaders get promoted while capable but quieter people are overlooked.
              </p>
            </div>
            <div className="rounded-xl border border-[#EDEDED] p-6">
              <p className="font-bold text-[#111] mb-2">Domain expertise doesn't predict leadership success</p>
              <p className="text-[15px] text-[#444] leading-[1.7]">
                The best engineer doesn't automatically become the best engineering manager. Subject-matter
                expertise is necessary but not sufficient for leadership. The skills needed to lead people —
                adaptability, systemic thinking, execution ability, effective communication — are entirely
                different competencies that technical experience does not develop by default.
              </p>
            </div>
            <div className="rounded-xl border border-[#EDEDED] p-6">
              <p className="font-bold text-[#111] mb-2">Assessment centres are expensive and slow</p>
              <p className="text-[15px] text-[#444] leading-[1.7]">
                Traditional assessment centres provide rich data but require days of participant time, trained
                assessors, and significant budget. They are impractical for assessing more than a handful of
                candidates or employees at a time — and they are simply not viable for routine talent decisions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: What We Measure */}
      <section className="bg-[#f9fafb] border-t border-[#EDEDED]">
        <div className="max-w-[860px] mx-auto px-6 py-16">
          <h2 className="text-[28px] font-extrabold text-[#111] mb-4">What G&amp;T Power Measures</h2>
          <p className="text-[17px] text-[#444] leading-[1.8] mb-4">
            G&amp;T Power assesses four competencies that research has repeatedly identified as the core
            predictors of leadership performance. The assessment covers 17 unique skills in total — with 3
            cross-competency "super-skills" that appear across multiple competencies — and each skill is
            assessed three times in different situations to ensure reliable, generalisable results.
          </p>
          <p className="text-[15px] text-[#555] italic mb-10">
            Every skill is scored on a 0–10 scale across four performance bands: Acceptable, Good, Excellent,
            and Outstanding (top 3–5%).
          </p>
          <div className="grid sm:grid-cols-2 gap-6">
            <div className="rounded-xl bg-[#f7fdf4] border border-[#c8e6bf] p-6">
              <p className="text-[20px] font-extrabold text-[#308F16] mb-2">Systemic Thinking</p>
              <p className="text-[15px] text-[#444] leading-[1.7]">
                Seeing the bigger picture, understanding cause-and-effect, and making decisions that account
                for the whole system. Leaders who score high here make better strategic decisions and avoid
                creating new problems while solving old ones.
              </p>
            </div>
            <div className="rounded-xl bg-[#f7fdf4] border border-[#c8e6bf] p-6">
              <p className="text-[20px] font-extrabold text-[#308F16] mb-2">Execution Ability</p>
              <p className="text-[15px] text-[#444] leading-[1.7]">
                Translating plans into action and delivering results despite obstacles. High scorers cut
                through complexity, maintain focus, and drive their teams to completion even when conditions
                are difficult.
              </p>
            </div>
            <div className="rounded-xl bg-[#f7fdf4] border border-[#c8e6bf] p-6">
              <p className="text-[20px] font-extrabold text-[#308F16] mb-2">Effective Communication</p>
              <p className="text-[15px] text-[#444] leading-[1.7]">
                Influencing, aligning, and engaging others through clear and purposeful communication.
                This covers listening, giving feedback, navigating disagreement, and building trust across
                different stakeholders.
              </p>
            </div>
            <div className="rounded-xl bg-[#f7fdf4] border border-[#c8e6bf] p-6">
              <p className="text-[20px] font-extrabold text-[#308F16] mb-2">Adaptability</p>
              <p className="text-[15px] text-[#444] leading-[1.7]">
                Updating beliefs and behaviours in response to new information, change, or setbacks. High
                scorers learn quickly, adjust course decisively, and bring their teams through uncertainty
                without losing momentum.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Use Cases */}
      <section className="bg-white border-t border-[#EDEDED]">
        <div className="max-w-[860px] mx-auto px-6 py-16">
          <h2 className="text-[28px] font-extrabold text-[#111] mb-4">Use Cases</h2>
          <p className="text-[17px] text-[#444] leading-[1.8] mb-10">
            G&amp;T Power is designed for the full range of leadership talent decisions — from first-time
            candidate screening to ongoing development planning for senior teams.
          </p>
          <div className="grid sm:grid-cols-2 gap-6">
            <div className="rounded-xl border border-[#EDEDED] p-6">
              <p className="text-[18px] font-bold text-[#111] mb-2">Hiring</p>
              <p className="text-[15px] text-[#444] leading-[1.7]">
                Compare candidates on the same objective scale, independent of interview performance or
                resume presentation. Identify candidates whose competency profile fits the specific demands
                of the role — not just who interviewed best.
              </p>
            </div>
            <div className="rounded-xl border border-[#EDEDED] p-6">
              <p className="text-[18px] font-bold text-[#111] mb-2">Promotion</p>
              <p className="text-[15px] text-[#444] leading-[1.7]">
                Identify who is genuinely ready to take on more leadership responsibility. Compare internal
                candidates against the competency requirements of the new role — not just their performance
                in the current one.
              </p>
            </div>
            <div className="rounded-xl border border-[#EDEDED] p-6">
              <p className="text-[18px] font-bold text-[#111] mb-2">Talent Pool</p>
              <p className="text-[15px] text-[#444] leading-[1.7]">
                Systematically identify future leaders across the organisation before positions open up.
                Build a pipeline of assessed, ready-to-develop talent rather than scrambling to fill
                vacancies reactively.
              </p>
            </div>
            <div className="rounded-xl border border-[#EDEDED] p-6">
              <p className="text-[18px] font-bold text-[#111] mb-2">Development</p>
              <p className="text-[15px] text-[#444] leading-[1.7]">
                Target coaching and development precisely to the specific skills where each leader has the
                greatest gaps. Stop guessing about development priorities — start from objective data showing
                exactly what needs to grow.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: Your Reports */}
      <section className="bg-[#f9fafb] border-t border-[#EDEDED]">
        <div className="max-w-[860px] mx-auto px-6 py-16">
          <h2 className="text-[28px] font-extrabold text-[#111] mb-4">Your Reports</h2>
          <p className="text-[17px] text-[#444] leading-[1.8] mb-10">
            Each completed assessment generates a suite of structured reports you can use immediately in
            your people decisions. Reports are available as soon as the assessment is complete — no waiting,
            no manual processing.
          </p>
          <div className="space-y-4">
            <div className="rounded-xl border-2 border-[#308F16] p-6">
              <p className="font-bold text-[#111] text-[17px] mb-2">Individual Competency Profile</p>
              <p className="text-[15px] text-[#444] leading-[1.7]">
                A complete breakdown of the individual's scores across all four competencies and 17 skills.
                Each skill is displayed on the 0–10 scale with its performance band (Acceptable / Good /
                Excellent / Outstanding) and a narrative interpretation. This is the core document for
                individual feedback and development conversations.
              </p>
            </div>
            <div className="rounded-xl border-2 border-[#308F16] p-6">
              <p className="font-bold text-[#111] text-[17px] mb-2">
                Comparison with Outstanding Performers (top 3–5%)
              </p>
              <p className="text-[15px] text-[#444] leading-[1.7]">
                Overlay the individual's profile against the benchmark profile of the top 3–5% of all
                respondents in the normative database. This comparison immediately shows where the individual
                is already at an outstanding level and where the distance to high performance is greatest —
                essential data for prioritising development or evaluating readiness for senior roles.
              </p>
            </div>
            <div className="rounded-xl border-2 border-[#308F16] p-6">
              <p className="font-bold text-[#111] text-[17px] mb-2">
                Comparison with Task-Type Referent Profiles (4 standard types)
              </p>
              <p className="text-[15px] text-[#444] leading-[1.7]">
                G&amp;T Power provides referent competency profiles for four standard leadership task types:
                Entrepreneurial (new initiative creation), Structuring &amp; Stabilisation (building
                processes and order), External Pressure (driving results under rapid change or resource
                constraints), and Deep Change (transforming entrenched habits and culture). Compare the
                individual's profile against any of these four referent profiles to identify fit — and gaps —
                for specific role types.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-br from-[#308F16] to-[#63AF4F] text-white border-t border-[#EDEDED]">
        <div className="max-w-[860px] mx-auto px-6 py-20 text-center">
          <h2 className="text-[32px] font-extrabold mb-4">Start with a free demo</h2>
          <p className="text-[18px] opacity-90 mb-10 max-w-[520px] mx-auto">
            See the assessment and reports for yourself. The interactive demo takes a few minutes and shows
            you exactly what you'll get.
          </p>
          <AppLink
            href="https://app.gntpower.com/demo"
            lang="en"
            className="inline-block bg-white text-[#308F16] font-bold text-[17px] px-8 py-4 rounded-xl hover:bg-[#f0fcea] transition-colors"
          >
            Try the demo for free
          </AppLink>
          <div className="mt-8">
            <Link href="/en" className="text-white opacity-75 hover:opacity-100 text-[15px] underline underline-offset-2">
              ← Back to G&amp;T Power home
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
