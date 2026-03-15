import type { Metadata } from "next"
import Link from "next/link"
import AppLink from "../../../components/AppLink"

export const metadata: Metadata = {
  title: "Soft Skills Test — G&T Power",
  description:
    "Scientifically validated soft skills assessment using the Situational Judgement Test (SJT) method. Measure leadership competencies accurately, objectively, and at scale.",
  alternates: {
    canonical: "https://gntpower.com/en/soft-skills-test",
    languages: {
      uk: "https://gntpower.com/ua/soft-skills-test",
      ru: "https://gntpower.com/ru/soft-skills-test",
      en: "https://gntpower.com/en/soft-skills-test",
    },
  },
}

export default function SoftSkillsTestPage() {
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
            Situational Judgement Test
          </p>
          <h1 className="text-[38px] sm:text-[48px] font-extrabold leading-tight mb-6">
            Soft Skills Test: Measure What Standard Tests Miss
          </h1>
          <p className="text-[19px] leading-[1.7] opacity-90 max-w-[640px] mb-10">
            G&amp;T Power uses the SJT method to assess the four leadership competencies that actually predict how people
            perform on the job — not what they know, but how they behave.
          </p>
          <AppLink
            href="https://app.gntpower.com/demo"
            lang="en"
            className="inline-block bg-white text-[#308F16] font-bold text-[17px] px-8 py-4 rounded-xl hover:bg-[#f0fcea] transition-colors"
          >
            Try the demo for free
          </AppLink>
        </div>
      </section>

      {/* Section 1: Why Standard Tests Cannot Assess Soft Skills */}
      <section className="bg-white border-t border-[#EDEDED]">
        <div className="max-w-[860px] mx-auto px-6 py-16">
          <h2 className="text-[28px] font-extrabold text-[#111] mb-4">
            Why Standard Tests Cannot Assess Soft Skills
          </h2>
          <p className="text-[17px] text-[#444] leading-[1.8] mb-6">
            Traditional assessment tools — knowledge tests, personality questionnaires, competency interviews — are
            designed to answer the question <em>"what does this person know?"</em> or{" "}
            <em>"how do they describe themselves?"</em>. That is valuable for technical roles. But it tells you
            almost nothing about soft skills.
          </p>
          <p className="text-[17px] text-[#444] leading-[1.8] mb-6">
            Soft skills are behavioural: they describe <strong>how a person acts</strong> when facing a real
            workplace situation — a conflict, a tight deadline, an ambiguous directive, or a team resistance. These
            patterns cannot be revealed by a multiple-choice knowledge test. They require a fundamentally different
            approach.
          </p>
          <div className="grid sm:grid-cols-2 gap-4 mt-8">
            <div className="rounded-xl border border-[#EDEDED] p-6">
              <p className="font-bold text-[#111] mb-2">Knowledge tests & interviews</p>
              <p className="text-[15px] text-[#444] leading-[1.7]">
                Reveal domain expertise, communication style, and self-presentation. They do not predict how
                someone will behave under pressure, resolve ambiguity, or align a team in a crisis.
              </p>
            </div>
            <div className="rounded-xl border-2 border-[#308F16] p-6">
              <p className="font-bold text-[#111] mb-2">Situational Judgement Test (SJT)</p>
              <p className="text-[15px] text-[#444] leading-[1.7]">
                Places the respondent inside realistic work situations and asks them to choose how to respond.
                Responses reveal actual behavioural tendencies — the very competencies that drive leadership
                performance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: The Science */}
      <section className="bg-[#f9fafb] border-t border-[#EDEDED]">
        <div className="max-w-[860px] mx-auto px-6 py-16">
          <h2 className="text-[28px] font-extrabold text-[#111] mb-4">The Science: SJT Method</h2>
          <p className="text-[17px] text-[#444] leading-[1.8] mb-10">
            The Situational Judgement Test is one of the most rigorously studied assessment methods in occupational
            psychology. It is used by governments, militaries, and leading organisations worldwide precisely because
            the evidence for its validity is overwhelming.
          </p>
          <div className="grid sm:grid-cols-3 gap-6">
            <div className="rounded-xl bg-[#f7fdf4] border border-[#c8e6bf] p-6 text-center">
              <p className="text-[40px] font-extrabold text-[#308F16] mb-2">🏛</p>
              <p className="font-bold text-[#111] mb-2">Universally Trusted</p>
              <p className="text-[14px] text-[#555] leading-[1.7]">
                Used by governments and militaries globally as a standard tool for selecting and promoting leaders.
              </p>
            </div>
            <div className="rounded-xl bg-[#f7fdf4] border border-[#c8e6bf] p-6 text-center">
              <p className="text-[40px] font-extrabold text-[#308F16] mb-2">102</p>
              <p className="font-bold text-[#111] mb-2">Validated Studies</p>
              <p className="text-[14px] text-[#555] leading-[1.7]">
                Correlation between SJT results and actual workplace behaviour confirmed in 102 independent
                scientific studies.
              </p>
            </div>
            <div className="rounded-xl bg-[#f7fdf4] border border-[#c8e6bf] p-6 text-center">
              <p className="text-[40px] font-extrabold text-[#308F16] mb-2">0.732</p>
              <p className="font-bold text-[#111] mb-2">Cronbach's Alpha</p>
              <p className="text-[14px] text-[#555] leading-[1.7]">
                G&amp;T Power's internal reliability score. Bias-resistant design ensures consistent results across
                cultural and demographic groups.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Four Competencies */}
      <section className="bg-white border-t border-[#EDEDED]">
        <div className="max-w-[860px] mx-auto px-6 py-16">
          <h2 className="text-[28px] font-extrabold text-[#111] mb-4">
            Four Competencies We Measure
          </h2>
          <p className="text-[17px] text-[#444] leading-[1.8] mb-10">
            G&amp;T Power assesses the four competencies consistently found in research to differentiate effective
            leaders from average performers. Together they cover 17 unique skills — 3 of which are
            cross-competency "super-skills" present across multiple competencies.
          </p>
          <div className="grid sm:grid-cols-2 gap-6">
            <div className="rounded-xl border border-[#EDEDED] p-6">
              <p className="text-[22px] font-extrabold text-[#308F16] mb-2">Systemic Thinking</p>
              <p className="text-[15px] text-[#444] leading-[1.7]">
                The ability to see patterns, understand cause-and-effect relationships, and make decisions that
                account for the wider system — not just the immediate problem. Leaders who score high here
                anticipate second-order consequences and avoid short-term fixes that create long-term complexity.
              </p>
            </div>
            <div className="rounded-xl border border-[#EDEDED] p-6">
              <p className="text-[22px] font-extrabold text-[#308F16] mb-2">Execution Ability</p>
              <p className="text-[15px] text-[#444] leading-[1.7]">
                The ability to translate intent into action and achieve results despite obstacles, ambiguity, and
                competing priorities. High scorers drive projects forward, hold themselves and others accountable,
                and maintain focus under pressure.
              </p>
            </div>
            <div className="rounded-xl border border-[#EDEDED] p-6">
              <p className="text-[22px] font-extrabold text-[#308F16] mb-2">Effective Communication</p>
              <p className="text-[15px] text-[#444] leading-[1.7]">
                The ability to influence, align, and engage others through clear and purposeful communication.
                This competency covers how leaders listen, give feedback, navigate disagreement, and build trust
                with different audiences.
              </p>
            </div>
            <div className="rounded-xl border border-[#EDEDED] p-6">
              <p className="text-[22px] font-extrabold text-[#308F16] mb-2">Adaptability</p>
              <p className="text-[15px] text-[#444] leading-[1.7]">
                The ability to update beliefs and behaviours in response to new information, changing
                circumstances, or unexpected setbacks. High scorers learn from failure, adjust course quickly,
                and bring their teams along through change.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: How the Test Works */}
      <section className="bg-[#f9fafb] border-t border-[#EDEDED]">
        <div className="max-w-[860px] mx-auto px-6 py-16">
          <h2 className="text-[28px] font-extrabold text-[#111] mb-4">How the Test Works</h2>
          <p className="text-[17px] text-[#444] leading-[1.8] mb-10">
            The test is designed to feel like a series of realistic work scenarios — not an interrogation. This
            makes it both engaging for respondents and highly informative for organisations.
          </p>
          <ol className="space-y-6">
            <li className="flex gap-4">
              <span className="flex-shrink-0 w-10 h-10 rounded-full bg-[#308F16] text-white flex items-center justify-center font-bold text-[16px]">
                1
              </span>
              <div>
                <p className="font-bold text-[#111] mb-1">Realistic situational scenarios</p>
                <p className="text-[16px] text-[#444] leading-[1.7]">
                  Respondents are presented with realistic workplace situations drawn from common leadership
                  challenges. Each scenario describes a situation and asks: "What would you do?"
                </p>
              </div>
            </li>
            <li className="flex gap-4">
              <span className="flex-shrink-0 w-10 h-10 rounded-full bg-[#308F16] text-white flex items-center justify-center font-bold text-[16px]">
                2
              </span>
              <div>
                <p className="font-bold text-[#111] mb-1">Each task reveals a specific skill</p>
                <p className="text-[16px] text-[#444] leading-[1.7]">
                  The scenarios are carefully designed so that each one probes a specific skill within one of
                  the four competencies. Respondents don't know which skill is being assessed — removing
                  the temptation to give "socially desirable" answers.
                </p>
              </div>
            </li>
            <li className="flex gap-4">
              <span className="flex-shrink-0 w-10 h-10 rounded-full bg-[#308F16] text-white flex items-center justify-center font-bold text-[16px]">
                3
              </span>
              <div>
                <p className="font-bold text-[#111] mb-1">All answers appear correct</p>
                <p className="text-[16px] text-[#444] leading-[1.7]">
                  There are no obviously "wrong" answers. All response options represent reasonable approaches —
                  but they reveal meaningfully different levels of the underlying competency. This is what makes
                  SJT resistant to faking and coaching.
                </p>
              </div>
            </li>
            <li className="flex gap-4">
              <span className="flex-shrink-0 w-10 h-10 rounded-full bg-[#308F16] text-white flex items-center justify-center font-bold text-[16px]">
                4
              </span>
              <div>
                <p className="font-bold text-[#111] mb-1">Each skill assessed three times</p>
                <p className="text-[16px] text-[#444] leading-[1.7]">
                  To ensure reliability, every skill is assessed across three different situations. This reduces
                  the effect of context-specific reactions and gives a stable, generalisable score for each skill.
                </p>
              </div>
            </li>
            <li className="flex gap-4">
              <span className="flex-shrink-0 w-10 h-10 rounded-full bg-[#308F16] text-white flex items-center justify-center font-bold text-[16px]">
                5
              </span>
              <div>
                <p className="font-bold text-[#111] mb-1">0–10 score with four performance bands</p>
                <p className="text-[16px] text-[#444] leading-[1.7]">
                  Each skill receives a score from 0 to 10, mapped to four performance bands: Acceptable (0–4),
                  Good (4–6), Excellent (6–8), and Outstanding (8–10). Outstanding corresponds to the top 3–5%
                  of the normative database.
                </p>
              </div>
            </li>
          </ol>
        </div>
      </section>

      {/* Section 5: What You Get */}
      <section className="bg-white border-t border-[#EDEDED]">
        <div className="max-w-[860px] mx-auto px-6 py-16">
          <h2 className="text-[28px] font-extrabold text-[#111] mb-4">What You Get</h2>
          <p className="text-[17px] text-[#444] leading-[1.8] mb-10">
            After each assessment, G&amp;T Power generates structured reports designed to support real decisions —
            hiring, promotion, development planning, and team composition.
          </p>
          <div className="grid sm:grid-cols-2 gap-6">
            <div className="rounded-xl border-2 border-[#308F16] p-6">
              <p className="font-bold text-[#111] text-[17px] mb-2">Individual Competency Profile</p>
              <p className="text-[15px] text-[#444] leading-[1.7]">
                A detailed breakdown of the respondent's scores across all four competencies and 17 skills,
                displayed on a 0–10 scale with performance band indicators. Includes narrative interpretation
                of strengths and development areas.
              </p>
            </div>
            <div className="rounded-xl border-2 border-[#308F16] p-6">
              <p className="font-bold text-[#111] text-[17px] mb-2">Comparison with Outstanding Performers</p>
              <p className="text-[15px] text-[#444] leading-[1.7]">
                Overlay the individual's profile against the benchmark profile of the top 3–5% of all
                respondents. Instantly see where the gaps are — and how significant they are — relative to
                high-performance standards.
              </p>
            </div>
            <div className="rounded-xl border-2 border-[#308F16] p-6">
              <p className="font-bold text-[#111] text-[17px] mb-2">Task-Type Referent Profiles</p>
              <p className="text-[15px] text-[#444] leading-[1.7]">
                Compare the individual's profile against four standard task-type referent profiles:
                Entrepreneurial, Structuring, External Pressure, and Deep Change. Understand which types of
                challenges they are naturally best suited to lead.
              </p>
            </div>
            <div className="rounded-xl border-2 border-[#308F16] p-6">
              <p className="font-bold text-[#111] text-[17px] mb-2">Team Report</p>
              <p className="text-[15px] text-[#444] leading-[1.7]">
                Aggregate individual results into a single team-level view. See the collective competency
                profile of your entire team — including where your team is strong as a group and where you
                have systemic gaps to address.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-br from-[#308F16] to-[#63AF4F] text-white border-t border-[#EDEDED]">
        <div className="max-w-[860px] mx-auto px-6 py-20 text-center">
          <h2 className="text-[32px] font-extrabold mb-4">Ready to measure soft skills objectively?</h2>
          <p className="text-[18px] opacity-90 mb-10 max-w-[520px] mx-auto">
            Try the interactive demo and see exactly what the test measures and how the reports look.
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
