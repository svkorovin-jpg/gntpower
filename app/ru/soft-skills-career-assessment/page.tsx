import type { Metadata } from "next"
import Link from "next/link"
import AppLink from "../../../components/AppLink"

export const metadata: Metadata = {
  title: "Оценка soft skills для карьеры и лидерства | G&T Power",
  description:
    "Узнайте свои сильные стороны, лидерский потенциал и поведенческие компетенции. Профессиональная оценка на основе SJT. Весенний доступ со скидкой до 95% по коду VESNA26.",
  alternates: {
    canonical: "https://gntpower.com/ru/soft-skills-career-assessment",
    languages: {
      ru: "https://gntpower.com/ru/soft-skills-career-assessment",
      uk: "https://gntpower.com/ua/soft-skills-career-assessment",
    },
  },
}

const demoUrl = "https://app.gntpower.com/demo"

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "headline": "Оценка soft skills для карьеры и лидерства",
      "url": "https://gntpower.com/ru/soft-skills-career-assessment",
      "publisher": {
        "@type": "Organization",
        "name": "G&T Power",
        "url": "https://gntpower.com",
      },
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Сколько времени занимает оценка?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Около 1,5 часа. Оценка состоит из последовательности реалистичных рабочих ситуаций, где нужно выбирать способ действия. Это серьёзный профессиональный инструмент — не торопитесь.",
          },
        },
        {
          "@type": "Question",
          "name": "Это тест личности?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Нет. Это поведенческая оценка на основе SJT (Situational Judgement Test). Она не измеряет черты характера или самооценку — она анализирует, как вы принимаете решения в реальных рабочих ситуациях.",
          },
        },
        {
          "@type": "Question",
          "name": "Кому подходит эта оценка?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Оценка подходит специалистам и менеджерам, которые хотят понять свои сильные стороны, подготовиться к новой роли или получить структурированную обратную связь о своём поведенческом профиле.",
          },
        },
        {
          "@type": "Question",
          "name": "Могут ли компании использовать этот инструмент?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Да. G&T Power используется компаниями для отбора, оценки кадрового резерва и развития руководителей. Обратитесь к нам для корпоративного доступа.",
          },
        },
      ],
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "G&T Power",
          "item": "https://gntpower.com/ru",
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Оценка soft skills для карьеры",
          "item": "https://gntpower.com/ru/soft-skills-career-assessment",
        },
      ],
    },
  ],
}

export default function SoftSkillsCareerPageRu() {
  return (
    <main className="min-h-screen bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Nav */}
      <nav className="sticky top-0 z-50 bg-white border-b border-[#EDEDED]">
        <div className="max-w-[860px] mx-auto px-6 h-16 flex items-center justify-between">
          <Link href="/ru">
            <img src="/photo.png" alt="G&T Power" className="h-10 w-auto" />
          </Link>
          <AppLink
            href={demoUrl}
            lang="ru"
            className="bg-[#308F16] hover:bg-[#27780f] text-white text-[15px] font-semibold px-5 py-2 rounded-lg transition-colors"
          >
            Начать оценку
          </AppLink>
        </div>
      </nav>

      {/* SECTION 1 — HERO */}
      <section className="bg-gradient-to-br from-[#308F16] to-[#63AF4F] text-white">
        <div className="max-w-[860px] mx-auto px-6 py-20 md:py-28">
          <p className="text-[13px] font-semibold uppercase tracking-widest opacity-80 mb-4">
            Поведенческая оценка · SJT
          </p>
          <h1 className="text-[clamp(28px,4vw,50px)] font-extrabold leading-[1.12] tracking-[-0.5px] mb-6 max-w-[720px]">
            Поймите свои сильные стороны и лидерский потенциал
          </h1>
          <p className="text-[18px] leading-[1.7] opacity-90 max-w-[580px] mb-8">
            Профессиональная поведенческая оценка для развития карьеры и лидерства. Узнайте, как вы принимаете решения — не только что вы думаете о себе.
          </p>
          <ul className="space-y-3 mb-10 max-w-[520px]">
            {[
              "Поймите, как вы принимаете решения в сложных ситуациях",
              "Узнайте свои сильнейшие поведенческие компетенции",
              "Сравните свой профиль с выдающимися руководителями",
            ].map((item) => (
              <li key={item} className="flex items-start gap-3 text-[16px] opacity-90">
                <span className="shrink-0 mt-0.5 text-white/70">✓</span>
                {item}
              </li>
            ))}
          </ul>
          <AppLink
            href={demoUrl}
            lang="ru"
            className="inline-block bg-white text-[#308F16] font-bold text-[17px] px-8 py-4 rounded-xl hover:bg-[#f0fcea] transition-colors"
          >
            Начать оценку
          </AppLink>
          <div className="mt-4 text-[13px] opacity-75 space-y-0.5">
            <p>Весенний доступ по коду <strong className="opacity-100">VESNA26</strong> — скидка до 95%</p>
            <p>Ограниченное количество мест</p>
          </div>
        </div>
      </section>

      {/* SECTION 2 — WHAT YOU GET */}
      <section className="py-16 px-6 bg-white border-t border-[#EDEDED]">
        <div className="max-w-[860px] mx-auto">
          <h2 className="text-[28px] font-extrabold text-[#111] mb-3">Что вы узнаете о себе</h2>
          <p className="text-[17px] text-[#555] mb-10 max-w-[560px]">
            Оценка даёт конкретный, структурированный профиль — а не общие описания.
          </p>
          <div className="grid sm:grid-cols-3 gap-5">
            {[
              {
                num: "01",
                title: "Ваш поведенческий профиль",
                text: "Поймите, как вы думаете, реагируете на изменения, работаете с людьми и двигаете задачи к результату.",
              },
              {
                num: "02",
                title: "Ваши сильнейшие компетенции",
                text: "Увидьте, где вы естественно создаёте наибольшую ценность в командах и проектах.",
              },
              {
                num: "03",
                title: "Ваши зоны развития",
                text: "Определите, какие навыки могут ограничивать ваш рост — и как их развивать.",
              },
            ].map((card) => (
              <div key={card.num} className="rounded-xl border border-[#EDEDED] p-6">
                <p className="text-[13px] font-bold text-[#308F16] mb-3">{card.num}</p>
                <p className="font-bold text-[#111] text-[16px] mb-2">{card.title}</p>
                <p className="text-[14px] text-[#555] leading-[1.7]">{card.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 3 — HOW IT WORKS */}
      <section className="py-16 px-6 bg-[#f9fafb] border-t border-[#EDEDED]">
        <div className="max-w-[860px] mx-auto">
          <h2 className="text-[28px] font-extrabold text-[#111] mb-3">Как проходит оценка</h2>
          <p className="text-[17px] text-[#555] mb-10 max-w-[560px]">
            Оценка занимает около <strong className="text-[#111]">1,5 часа</strong> и построена на поведенческом принятии решений — не на тестах знаний.
          </p>
          <ol className="space-y-6">
            {[
              {
                n: "1",
                title: "Вы проходите последовательность реалистичных рабочих ситуаций",
                text: "Каждый сценарий взят из реального управленческого контекста.",
              },
              {
                n: "2",
                title: "Вы выбираете, как бы действовали в каждой ситуации",
                text: "Нет очевидно «правильных» или «неправильных» ответов — только разные поведенческие паттерны.",
              },
              {
                n: "3",
                title: "Ваши поведенческие паттерны анализируются",
                text: "Алгоритм выявляет устойчивые тенденции в вашем стиле принятия решений.",
              },
              {
                n: "4",
                title: "Вы получаете структурированный отчёт",
                text: "С профилем компетенций, сравнением с выдающимися результатами и рекомендациями по развитию.",
              },
            ].map((step) => (
              <li key={step.n} className="flex gap-5">
                <span className="flex-shrink-0 w-10 h-10 rounded-full bg-[#308F16] text-white flex items-center justify-center font-bold text-[16px]">
                  {step.n}
                </span>
                <div>
                  <p className="font-bold text-[#111] mb-1">{step.title}</p>
                  <p className="text-[15px] text-[#555] leading-[1.7]">{step.text}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* SECTION 4 — WHAT IS MEASURED */}
      <section className="py-16 px-6 bg-white border-t border-[#EDEDED]">
        <div className="max-w-[860px] mx-auto">
          <h2 className="text-[28px] font-extrabold text-[#111] mb-3">Что измеряется</h2>
          <p className="text-[17px] text-[#555] mb-10 max-w-[560px]">
            Четыре компетенции, которые отличают эффективных лидеров от средних.
          </p>
          <div className="grid sm:grid-cols-2 gap-5">
            {[
              {
                title: "Системное мышление",
                text: "Способность видеть общую картину, понимать причинно-следственные связи и принимать решения с учётом долгосрочных последствий.",
              },
              {
                title: "Адаптивность",
                text: "Способность обновлять убеждения и поведение в ответ на новую информацию, изменение обстоятельств и неожиданные ситуации.",
              },
              {
                title: "Способность достигать результат",
                text: "Умение превращать намерения в конкретные действия и двигать задачи к завершению несмотря на препятствия и неопределённость.",
              },
              {
                title: "Эффективное взаимодействие с другими людьми",
                text: "Способность влиять, согласовывать позиции и выстраивать доверие через чёткую и целенаправленную коммуникацию.",
              },
            ].map((comp) => (
              <div key={comp.title} className="rounded-xl border-2 border-[#308F16] p-6">
                <p className="font-extrabold text-[#308F16] text-[17px] mb-2">{comp.title}</p>
                <p className="text-[15px] text-[#444] leading-[1.7]">{comp.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 5 — WHY SJT WORKS */}
      <section className="py-16 px-6 bg-[#f7fdf4] border-t border-[#c8e6bf]">
        <div className="max-w-[860px] mx-auto">
          <h2 className="text-[28px] font-extrabold text-[#111] mb-3">Почему SJT — это не просто ещё один тест</h2>
          <p className="text-[17px] text-[#444] leading-[1.8] mb-5 max-w-[660px]">
            Ситуационный тест суждений (SJT) погружает вас в реалистичные рабочие ситуации и просит выбрать способ действия. Вместо того чтобы спрашивать «какой вы человек», он показывает — как вы на самом деле решаете проблемы.
          </p>
          <div className="grid sm:grid-cols-3 gap-5 mt-8">
            {[
              {
                title: "Поведенческий реализм",
                text: "Сценарии воспроизводят реальные управленческие ситуации. Трудно дать «правильный» ответ, не проявив настоящего стиля мышления.",
              },
              {
                title: "Паттерны решений",
                text: "Каждый навык оценивается в нескольких независимых ситуациях — это даёт стабильный, надёжный результат.",
              },
              {
                title: "Широкое применение",
                text: "SJT используется в отборе и развитии руководителей в крупных организациях, государственных структурах и армиях по всему миру.",
              },
            ].map((item) => (
              <div key={item.title} className="bg-white rounded-xl border border-[#c8e6bf] p-5">
                <p className="font-bold text-[#111] mb-2">{item.title}</p>
                <p className="text-[14px] text-[#555] leading-[1.7]">{item.text}</p>
              </div>
            ))}
          </div>
          <p className="mt-6 text-[14px] text-[#555]">
            Подробнее о методе:{" "}
            <Link href="/ru/chto-takoe-sjt" className="text-[#308F16] hover:underline">
              Что такое SJT →
            </Link>
          </p>
        </div>
      </section>

      {/* SECTION 6 — TRUST */}
      <section className="py-16 px-6 bg-white border-t border-[#EDEDED]">
        <div className="max-w-[860px] mx-auto">
          <h2 className="text-[28px] font-extrabold text-[#111] mb-10">Надёжность метода</h2>
          <div className="grid sm:grid-cols-2 gap-5">
            {[
              {
                stat: "102",
                label: "исследования",
                text: "Связь между результатами SJT и реальным поведением подтверждена в 102 независимых научных исследованиях.",
              },
              {
                stat: "0.73",
                label: "Cronbach's alpha",
                text: "Показатель внутренней надёжности теста G&T Power — в пределах норм для психометрических инструментов.",
              },
              {
                stat: "AWS",
                label: "хранение ответов",
                text: "Ответы хранятся в обезличенном виде в AWS. Отчёты не хранятся на сервере — формируются по запросу.",
              },
              {
                stat: "17",
                label: "навыков",
                text: "Оценка охватывает 17 навыков в четырёх компетенциях — с подробным профилем по каждому.",
              },
            ].map((item) => (
              <div key={item.stat} className="rounded-xl bg-[#f9fafb] border border-[#EDEDED] p-6 flex gap-5">
                <div className="shrink-0 text-[32px] font-extrabold text-[#308F16] leading-none pt-1">
                  {item.stat}
                </div>
                <div>
                  <p className="font-bold text-[#111] mb-1">{item.label}</p>
                  <p className="text-[14px] text-[#555] leading-[1.6]">{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 7 — WHO IT IS FOR */}
      <section className="py-16 px-6 bg-[#f9fafb] border-t border-[#EDEDED]">
        <div className="max-w-[860px] mx-auto">
          <h2 className="text-[28px] font-extrabold text-[#111] mb-3">Кому подходит эта оценка</h2>
          <p className="text-[17px] text-[#555] mb-8">Для людей, которым важно понимать себя — а не просто получить сертификат.</p>
          <ul className="space-y-4">
            {[
              "Хотите понять свои сильные стороны и где вы создаёте наибольшую ценность",
              "Готовитесь к новой руководящей роли или повышению",
              "Рассматриваете смену направления в карьере и хотите структурированный взгляд на себя",
              "Ищете качественную обратную связь помимо субъективных мнений коллег",
            ].map((item) => (
              <li key={item} className="flex items-start gap-3 text-[16px] text-[#333]">
                <span className="shrink-0 text-[#308F16] font-bold mt-0.5">→</span>
                {item}
              </li>
            ))}
          </ul>
          <p className="mt-8 text-[14px] text-[#555]">
            Также читайте:{" "}
            <Link href="/ru/kak-ocenit-soft-skills-komandy" className="text-[#308F16] hover:underline">
              Как оценить soft skills команды →
            </Link>
            {" · "}
            <Link href="/ru/soft-skills-test-online" className="text-[#308F16] hover:underline">
              Онлайн тест soft skills →
            </Link>
          </p>
        </div>
      </section>

      {/* SECTION 8 — PRICE */}
      <section className="py-16 px-6 bg-white border-t border-[#EDEDED]">
        <div className="max-w-[860px] mx-auto">
          <h2 className="text-[28px] font-extrabold text-[#111] mb-3">Стоимость</h2>
          <p className="text-[17px] text-[#555] mb-10 max-w-[560px]">
            Этот доступ предоставляется в рамках исследовательской программы. Участники проходят оценку по сниженной цене — взамен помогают нам собирать данные для совершенствования инструмента.
          </p>

          <div className="grid sm:grid-cols-3 gap-4 mb-8">
            {[
              { period: "До 31 марта", discount: "95%", price: "€17", highlight: true },
              { period: "До 30 апреля", discount: "90%", price: "€34", highlight: false },
              { period: "До 31 мая", discount: "85%", price: "€51", highlight: false },
            ].map((tier) => (
              <div
                key={tier.period}
                className={`rounded-xl border p-5 ${
                  tier.highlight
                    ? "border-[#308F16] border-2 bg-[#f7fdf4]"
                    : "border-[#EDEDED]"
                }`}
              >
                {tier.highlight && (
                  <p className="text-[11px] font-bold uppercase tracking-wider text-[#308F16] mb-2">
                    Текущая цена
                  </p>
                )}
                <p className="text-[13px] text-[#555] mb-1">{tier.period}</p>
                <p className="text-[28px] font-extrabold text-[#111]">{tier.price}</p>
                <p className="text-[13px] text-[#555]">скидка {tier.discount} от €340</p>
              </div>
            ))}
          </div>

          <div className="rounded-xl bg-[#f9fafb] border border-[#EDEDED] p-5 flex flex-wrap items-center gap-4 mb-8">
            <div>
              <p className="text-[13px] text-[#555] mb-0.5">Промокод для получения скидки</p>
              <p className="text-[22px] font-extrabold text-[#308F16] tracking-wider">VESNA26</p>
            </div>
            <p className="text-[14px] text-[#555] max-w-[400px]">
              Введите этот код при оплате. Регулярная цена — €340. Скидка действует до конца мая 2026.
            </p>
          </div>

          <AppLink
            href={demoUrl}
            lang="ru"
            className="inline-block bg-[#308F16] text-white font-bold text-[17px] px-8 py-4 rounded-xl hover:bg-[#27780f] transition-colors"
          >
            Начать оценку
          </AppLink>
        </div>
      </section>

      {/* SECTION 9 — FAQ */}
      <section className="py-16 px-6 bg-[#f9fafb] border-t border-[#EDEDED]">
        <div className="max-w-[860px] mx-auto">
          <h2 className="text-[28px] font-extrabold text-[#111] mb-8">Вопросы и ответы</h2>
          <div className="space-y-6">
            {[
              {
                q: "Сколько времени занимает оценка?",
                a: "Около 1,5 часа. Оценка построена как последовательность реалистичных рабочих ситуаций — это серьёзный профессиональный инструмент, поэтому не торопитесь. Время выполнения не ограничено.",
              },
              {
                q: "Это тест личности?",
                a: "Нет. Это поведенческая оценка на основе SJT (Situational Judgement Test). Она не спрашивает, как вы себя описываете — она анализирует, как вы принимаете решения в смоделированных рабочих ситуациях.",
              },
              {
                q: "Кому подходит эта оценка?",
                a: "Специалистам и менеджерам, которые хотят лучше понять свои сильные стороны, подготовиться к новой роли или получить структурированную обратную связь о своём поведенческом профиле.",
              },
              {
                q: "Могут ли компании использовать этот инструмент?",
                a: "Да. G&T Power используется компаниями для отбора, оценки кадрового резерва и развития руководителей. Обратитесь к нам для получения корпоративного доступа.",
              },
            ].map((item) => (
              <div key={item.q} className="border-b border-[#EDEDED] pb-5 last:border-0">
                <p className="font-bold text-[#111] text-[16px] mb-2">{item.q}</p>
                <p className="text-[15px] text-[#555] leading-relaxed">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 10 — FINAL CTA */}
      <section className="py-20 px-6 bg-gradient-to-br from-[#308F16] to-[#63AF4F] text-white text-center">
        <div className="max-w-[560px] mx-auto">
          <h2 className="text-[32px] font-extrabold mb-4 leading-tight">
            Узнайте свои поведенческие сильные стороны
          </h2>
          <p className="text-[17px] opacity-90 mb-8">
            Профессиональная оценка с конкретным результатом. Весенний доступ по коду <strong>VESNA26</strong>.
          </p>
          <AppLink
            href={demoUrl}
            lang="ru"
            className="inline-block bg-white text-[#308F16] font-bold text-[17px] px-10 py-4 rounded-xl hover:bg-[#f0fcea] transition-colors"
          >
            Начать оценку
          </AppLink>
          <p className="mt-4 text-[13px] opacity-70">Занимает ~1,5 часа · Результат сразу после завершения</p>
        </div>
      </section>

      {/* Footer nav */}
      <div className="py-8 px-6 bg-white border-t border-[#EDEDED]">
        <div className="max-w-[860px] mx-auto">
          <Link href="/ru" className="text-[#555] hover:text-[#308F16] text-[14px]">
            ← Вернуться на главную
          </Link>
        </div>
      </div>
    </main>
  )
}
