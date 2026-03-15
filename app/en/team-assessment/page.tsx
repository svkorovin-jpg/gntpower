import type { Metadata } from "next"
import Link from "next/link"
import AppLink from "../../../components/AppLink"

export const metadata: Metadata = {
  title: "Team Assessment — G&T Power",
  description:
    "Comprehensive team soft skills assessment. Visualise your team's competency profile, match people to the right roles, and identify development priorities at scale.",
  alternates: {
    canonical: "https://gntpower.com/en/team-assessment",
    languages: {
      uk: "https://gntpower.com/ua/team-assessment",
      ru: "https://gntpower.com/ru/team-assessment",
      en: "https://gntpower.com/en/team-assessment",
    },
  },
}

export default function TeamAssessmentPage() {
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
            Team Soft Skills Assessment
          </p>
          <h1 className="text-[38px] sm:text-[48px] font-extrabold leading-tight mb-6">
            Team Assessment: Build the Right Team for Every Challenge
          </h1>
          <p className="text-[19px] leading-[1.7] opacity-90 max-w-[640px] mb-10">
            G&amp;T Power gives you a complete, objective view of your entire team's competency profile —
            so you can match people to the right roles, identify collective gaps, and develop your team
            based on data rather than assumptions.
          </p>
          <AppLink
            href="https://app.gntpower.com/demo"
            lang="en"
            className="inline-block bg-white text-[#308F16] font-bold text-[17px] px-8 py-4 rounded-xl hover:bg-[#f0fcea] transition-colors"
          >
            Assess your team
          </AppLink>
        </div>
      </section>

      {/* Section 1: The Problem */}
      <section className="bg-white border-t border-[#EDEDED]">
        <div className="max-w-[860px] mx-auto px-6 py-16">
          <h2 className="text-[28px] font-extrabold text-[#111] mb-4">
            The Problem: You Can't Manage What You Can't Measure
          </h2>
          <p className="text-[17px] text-[#444] leading-[1.8] mb-8">
            Most teams operate with a significant blind spot: no one has a clear, objective picture of what
            each person is actually good at — or where the collective weaknesses lie.
          </p>
          <div className="space-y-4">
            <div className="rounded-xl border border-[#EDEDED] p-6">
              <p className="font-bold text-[#111] mb-2">Role assignments based on gut feel</p>
              <p className="text-[15px] text-[#444] leading-[1.7]">
                Managers assign people to projects and roles based on CV, interview impressions, and
                personal familiarity. These are weak proxies for what actually matters: whether someone
                has the right competency profile for the demands of the specific role. The result is
                mismatches that damage both performance and morale.
              </p>
            </div>
            <div className="rounded-xl border border-[#EDEDED] p-6">
              <p className="font-bold text-[#111] mb-2">Soft skill gaps only visible when it's too late</p>
              <p className="text-[15px] text-[#444] leading-[1.7]">
                Teams discover their real competency gaps through failure — a missed deadline, a failed
                change initiative, a communication breakdown that derails a project. By the time the gap
                is visible, the damage is already done. Proactive assessment reveals gaps before they
                become costly problems.
              </p>
            </div>
            <div className="rounded-xl border border-[#EDEDED] p-6">
              <p className="font-bold text-[#111] mb-2">No objective picture of team composition</p>
              <p className="text-[15px] text-[#444] leading-[1.7]">
                Without objective data, development budgets get spread evenly or allocated by seniority
                rather than by actual need. Coaching resources go to people who are already strong in an
                area while critical gaps elsewhere go unaddressed — because no one knows they exist.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: The Team Report */}
      <section className="bg-[#f9fafb] border-t border-[#EDEDED]">
        <div className="max-w-[860px] mx-auto px-6 py-16">
          <h2 className="text-[28px] font-extrabold text-[#111] mb-4">The Team Report</h2>
          <p className="text-[17px] text-[#444] leading-[1.8] mb-10">
            G&amp;T Power's team report aggregates individual assessment results into a single, unified view
            of your entire team's competency landscape. It is the most efficient way to understand what your
            team is capable of — and where it is vulnerable.
          </p>
          <div className="grid sm:grid-cols-2 gap-6">
            <div className="rounded-xl bg-[#f7fdf4] border border-[#c8e6bf] p-6">
              <p className="font-bold text-[#111] mb-2">All 17 skills. All team members. One chart.</p>
              <p className="text-[15px] text-[#444] leading-[1.7]">
                The team report displays every team member's scores across all 17 skills on a single
                visualisation. You get an instant, comprehensive picture of where the team is strong and
                where collective gaps exist — without having to read through individual reports one by one.
              </p>
            </div>
            <div className="rounded-xl bg-[#f7fdf4] border border-[#c8e6bf] p-6">
              <p className="font-bold text-[#111] mb-2">Instant team strengths and gap analysis</p>
              <p className="text-[15px] text-[#444] leading-[1.7]">
                Identify skills where the whole team scores high (your collective strengths) and skills
                where the team's average is low (systemic gaps). Systemic gaps are where risk concentrates —
                they deserve immediate attention in development planning.
              </p>
            </div>
            <div className="rounded-xl bg-[#f7fdf4] border border-[#c8e6bf] p-6">
              <p className="font-bold text-[#111] mb-2">Side-by-side member comparison</p>
              <p className="text-[15px] text-[#444] leading-[1.7]">
                Compare any two or more team members directly on any skill or competency. Use this to
                make objective decisions about role assignments, project team composition, and succession
                planning — with data that everyone involved can see and trust.
              </p>
            </div>
            <div className="rounded-xl bg-[#f7fdf4] border border-[#c8e6bf] p-6">
              <p className="font-bold text-[#111] mb-2">Assess multiple levels simultaneously</p>
              <p className="text-[15px] text-[#444] leading-[1.7]">
                Assess top management, middle management, specialists, and talent pool candidates at the
                same time, at minimal cost. G&amp;T Power scales from a handful of people to hundreds —
                without the logistical complexity of traditional assessment methods.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Referent Profiles */}
      <section className="bg-white border-t border-[#EDEDED]">
        <div className="max-w-[860px] mx-auto px-6 py-16">
          <h2 className="text-[28px] font-extrabold text-[#111] mb-4">
            Referent Profiles: Match Your Team to the Task
          </h2>
          <p className="text-[17px] text-[#444] leading-[1.8] mb-10">
            Different challenges require different competency profiles. G&amp;T Power provides four
            scientifically derived referent profiles that describe the ideal competency configuration for
            each of the four most common leadership task types. Use them to assign the right people to the
            right challenges — and to understand where individual or collective gaps might become a problem.
          </p>
          <div className="grid sm:grid-cols-2 gap-6">
            <div className="rounded-xl border-2 border-[#308F16] p-6">
              <p className="text-[18px] font-bold text-[#111] mb-1">1. Entrepreneurial</p>
              <p className="text-[13px] text-[#308F16] font-semibold uppercase tracking-wide mb-3">New initiative creation</p>
              <p className="text-[15px] text-[#444] leading-[1.7]">
                Launching new products, business units, or strategic initiatives from scratch. Requires
                high adaptability, systemic thinking, and strong execution to move from idea to traction
                in conditions of maximum uncertainty.
              </p>
            </div>
            <div className="rounded-xl border-2 border-[#308F16] p-6">
              <p className="text-[18px] font-bold text-[#111] mb-1">2. Structuring &amp; Stabilisation</p>
              <p className="text-[13px] text-[#308F16] font-semibold uppercase tracking-wide mb-3">Building process and order</p>
              <p className="text-[15px] text-[#444] leading-[1.7]">
                Taking a chaotic or rapidly-grown organisation and installing the processes, systems, and
                structures needed for sustainable scale. Requires different competency balances than
                entrepreneurial work — and identifying mismatches early prevents costly failures.
              </p>
            </div>
            <div className="rounded-xl border-2 border-[#308F16] p-6">
              <p className="text-[18px] font-bold text-[#111] mb-1">3. External Pressure</p>
              <p className="text-[13px] text-[#308F16] font-semibold uppercase tracking-wide mb-3">Rapid change or resource constraints</p>
              <p className="text-[15px] text-[#444] leading-[1.7]">
                Driving results in conditions of external pressure — competitive threats, budget cuts,
                crises, or forced rapid change. High execution ability and adaptability are critical;
                communication must be especially precise when stakes are high.
              </p>
            </div>
            <div className="rounded-xl border-2 border-[#308F16] p-6">
              <p className="text-[18px] font-bold text-[#111] mb-1">4. Deep Change</p>
              <p className="text-[13px] text-[#308F16] font-semibold uppercase tracking-wide mb-3">Transforming entrenched habits</p>
              <p className="text-[15px] text-[#444] leading-[1.7]">
                Transforming organisational culture, entrenched working patterns, or deeply held beliefs.
                The most demanding task type, requiring exceptional communication, adaptability, and
                systemic understanding to overcome resistance and sustain momentum over a long period.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: Assessment at Scale */}
      <section className="bg-[#f9fafb] border-t border-[#EDEDED]">
        <div className="max-w-[860px] mx-auto px-6 py-16">
          <h2 className="text-[28px] font-extrabold text-[#111] mb-4">Assessment at Scale</h2>
          <p className="text-[17px] text-[#444] leading-[1.8] mb-10">
            G&amp;T Power is designed to be practical at any organisational size — from a small leadership
            team to an entire enterprise. There is no trade-off between scale and data quality.
          </p>
          <div className="grid sm:grid-cols-2 gap-6">
            <div className="rounded-xl border border-[#EDEDED] p-6">
              <p className="font-bold text-[#111] mb-2">Assess the entire organisation simultaneously</p>
              <p className="text-[15px] text-[#444] leading-[1.7]">
                Send assessments to your whole organisation at once. There is no need to stagger or
                sequence cohorts — everyone can complete the test at the same time, on their own schedule.
              </p>
            </div>
            <div className="rounded-xl border border-[#EDEDED] p-6">
              <p className="font-bold text-[#111] mb-2">Any level, any number of people</p>
              <p className="text-[15px] text-[#444] leading-[1.7]">
                Assess board members and front-line team leads with the same instrument. The scoring is
                calibrated against a normative database, so results are comparable across levels, roles,
                and functions.
              </p>
            </div>
            <div className="rounded-xl border border-[#EDEDED] p-6">
              <p className="font-bold text-[#111] mb-2">Accessible from any device</p>
              <p className="text-[15px] text-[#444] leading-[1.7]">
                The assessment works on desktop, tablet, and mobile — no app download, no special setup.
                Participants complete it wherever and whenever it is convenient for them.
              </p>
            </div>
            <div className="rounded-xl border border-[#EDEDED] p-6">
              <p className="font-bold text-[#111] mb-2">Results available immediately</p>
              <p className="text-[15px] text-[#444] leading-[1.7]">
                Reports are generated automatically as soon as each participant completes the assessment.
                No waiting for batch processing. No manual scoring. Individual and team reports are
                available the moment you need them.
              </p>
            </div>
          </div>
          <div className="mt-8 rounded-xl bg-[#f7fdf4] border border-[#c8e6bf] p-6">
            <p className="text-[15px] text-[#444] leading-[1.7]">
              <strong>Note on data privacy:</strong> G&amp;T Power stores only anonymised test scores in AWS.
              No personal data is linked to results in storage, and reports are not stored on the platform —
              ensuring full confidentiality for participants.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-br from-[#308F16] to-[#63AF4F] text-white border-t border-[#EDEDED]">
        <div className="max-w-[860px] mx-auto px-6 py-20 text-center">
          <h2 className="text-[32px] font-extrabold mb-4">See what your team is capable of</h2>
          <p className="text-[18px] opacity-90 mb-10 max-w-[520px] mx-auto">
            Try the interactive demo to experience the assessment first-hand and preview the team report.
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
