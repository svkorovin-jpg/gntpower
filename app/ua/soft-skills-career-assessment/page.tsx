import type { Metadata } from "next"
import Link from "next/link"
import AppLink from "../../../components/AppLink"

export const metadata: Metadata = {
  title: "Оцінка soft skills для кар'єри та лідерства | G&T Power",
  description:
    "Дізнайтеся свої сильні сторони, лідерський потенціал та поведінкові компетенції. Профессійна оцінка на основі SJT. Весняний доступ зі знижкою до 95% за кодом VESNA26.",
  alternates: {
    canonical: "https://gntpower.com/ua/soft-skills-career-assessment",
    languages: {
      uk: "https://gntpower.com/ua/soft-skills-career-assessment",
      ru: "https://gntpower.com/ru/soft-skills-career-assessment",
    },
  },
}

const demoUrl = "https://app.gntpower.com/demo"

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "headline": "Оцінка soft skills для кар'єри та лідерства",
      "url": "https://gntpower.com/ua/soft-skills-career-assessment",
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
          "name": "Скільки часу займає оцінка?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Приблизно 1,5 години. Оцінка складається з послідовності реалістичних робочих ситуацій, де потрібно обирати спосіб дії. Це серйозний профессійний інструмент, тому не поспішайте.",
          },
        },
        {
          "@type": "Question",
          "name": "Це тест особистості?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Ні. Це поведінкова оцінка на основі SJT (Situational Judgement Test). Вона не вимірює риси характеру чи самооцінку — вона аналізує, як ви приймаєте рішення в реальних робочих ситуаціях.",
          },
        },
        {
          "@type": "Question",
          "name": "Кому підходить ця оцінка?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Оцінка підходить для спеціалістів і менеджерів, які хочуть зрозуміти свої сильні сторони, підготуватися до нової ролі або отримати структурований зворотний зв'язок про свій поведінковий профіль.",
          },
        },
        {
          "@type": "Question",
          "name": "Чи можуть компанії використовувати цей інструмент?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Так. G&T Power використовується компаніями для відбору, оцінки кадрового резерву та розвитку керівників. Зверніться до нас для корпоративного доступу.",
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
          "item": "https://gntpower.com/ua",
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Оцінка soft skills для кар'єри",
          "item": "https://gntpower.com/ua/soft-skills-career-assessment",
        },
      ],
    },
  ],
}

export default function SoftSkillsCareerPage() {
  return (
    <main className="min-h-screen bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Nav */}
      <nav className="sticky top-0 z-50 bg-white border-b border-[#EDEDED]">
        <div className="max-w-[860px] mx-auto px-6 h-16 flex items-center justify-between">
          <Link href="/ua">
            <img src="/photo.png" alt="G&T Power" className="h-10 w-auto" />
          </Link>
          <AppLink
            href={demoUrl}
            lang="ua"
            className="bg-[#308F16] hover:bg-[#27780f] text-white text-[15px] font-semibold px-5 py-2 rounded-lg transition-colors"
          >
            Почати оцінку
          </AppLink>
        </div>
      </nav>

      {/* SECTION 1 — HERO */}
      <section className="bg-gradient-to-br from-[#308F16] to-[#63AF4F] text-white">
        <div className="max-w-[860px] mx-auto px-6 py-20 md:py-28">
          <p className="text-[13px] font-semibold uppercase tracking-widest opacity-80 mb-4">
            Поведінкова оцінка · SJT
          </p>
          <h1 className="text-[clamp(28px,4vw,50px)] font-extrabold leading-[1.12] tracking-[-0.5px] mb-6 max-w-[720px]">
            Зрозумійте свої сильні сторони та лідерський потенціал
          </h1>
          <p className="text-[18px] leading-[1.7] opacity-90 max-w-[580px] mb-8">
            Профессійна поведінкова оцінка для розвитку кар'єри та лідерства. Дізнайтеся, як ви приймаєте рішення — не лише що ви думаєте про себе.
          </p>
          <ul className="space-y-3 mb-10 max-w-[520px]">
            {[
              "Зрозумійте, як ви приймаєте рішення в складних ситуаціях",
              "Дізнайтеся свої найсильніші поведінкові компетенції",
              "Порівняйте свій профіль із видатними керівниками",
            ].map((item) => (
              <li key={item} className="flex items-start gap-3 text-[16px] opacity-90">
                <span className="shrink-0 mt-0.5 text-white/70">✓</span>
                {item}
              </li>
            ))}
          </ul>
          <AppLink
            href={demoUrl}
            lang="ua"
            className="inline-block bg-white text-[#308F16] font-bold text-[17px] px-8 py-4 rounded-xl hover:bg-[#f0fcea] transition-colors"
          >
            Почати оцінку
          </AppLink>
          <div className="mt-4 text-[13px] opacity-75 space-y-0.5">
            <p>Весняний доступ за кодом <strong className="opacity-100">VESNA26</strong> — знижка до 95%</p>
            <p>Обмежена кількість місць</p>
          </div>
        </div>
      </section>

      {/* SECTION 2 — WHAT YOU GET */}
      <section className="py-16 px-6 bg-white border-t border-[#EDEDED]">
        <div className="max-w-[860px] mx-auto">
          <h2 className="text-[28px] font-extrabold text-[#111] mb-3">Що ви дізнаєтеся про себе</h2>
          <p className="text-[17px] text-[#555] mb-10 max-w-[560px]">
            Оцінка дає конкретний, структурований профіль — а не загальні описи.
          </p>
          <div className="grid sm:grid-cols-3 gap-5">
            {[
              {
                num: "01",
                title: "Ваш поведінковий профіль",
                text: "Зрозумійте, як ви думаєте, реагуєте на зміни, працюєте з людьми та рухаєте задачі до результату.",
              },
              {
                num: "02",
                title: "Ваші найсильніші компетенції",
                text: "Побачте, де ви природно створюєте найбільшу цінність у командах і проектах.",
              },
              {
                num: "03",
                title: "Ваші зони розвитку",
                text: "Визначте, які навички можуть обмежувати ваше зростання — і як їх розвивати.",
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
          <h2 className="text-[28px] font-extrabold text-[#111] mb-3">Як проходить оцінка</h2>
          <p className="text-[17px] text-[#555] mb-10 max-w-[560px]">
            Оцінка займає близько <strong className="text-[#111]">1,5 години</strong> і побудована на поведінковому прийнятті рішень — не на тестах знань.
          </p>
          <ol className="space-y-6">
            {[
              {
                n: "1",
                title: "Ви проходите послідовність реалістичних робочих ситуацій",
                text: "Кожен сценарій взятий із реального управлінського контексту.",
              },
              {
                n: "2",
                title: "Ви обираєте, як би ви діяли в кожній ситуації",
                text: "Немає очевидно «правильних» або «неправильних» відповідей — лише різні поведінкові патерни.",
              },
              {
                n: "3",
                title: "Ваші поведінкові патерни аналізуються",
                text: "Алгоритм виявляє стійкі тенденції у вашому стилі прийняття рішень.",
              },
              {
                n: "4",
                title: "Ви отримуєте структурований звіт",
                text: "З профілем компетенцій, порівнянням із видатними результатами та рекомендаціями для розвитку.",
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
          <h2 className="text-[28px] font-extrabold text-[#111] mb-3">Що вимірюється</h2>
          <p className="text-[17px] text-[#555] mb-10 max-w-[560px]">
            Чотири компетенції, які відрізняють ефективних лідерів від середніх.
          </p>
          <div className="grid sm:grid-cols-2 gap-5">
            {[
              {
                title: "Системне мислення",
                text: "Здатність бачити загальну картину, розуміти причинно-наслідкові зв'язки та приймати рішення, які враховують довгострокові наслідки.",
              },
              {
                title: "Адаптивність",
                text: "Здатність оновлювати переконання та поведінку у відповідь на нову інформацію, зміни обставин і несподівані ситуації.",
              },
              {
                title: "Здатність досягати результату",
                text: "Вміння перетворювати наміри на конкретні дії і рухати задачі до завершення попри перешкоди та невизначеність.",
              },
              {
                title: "Ефективна взаємодія з іншими людьми",
                text: "Здатність впливати, узгоджувати позиції та будувати довіру через чітку і цілеспрямовану комунікацію.",
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
          <h2 className="text-[28px] font-extrabold text-[#111] mb-3">Чому SJT — це не просто ще один тест</h2>
          <p className="text-[17px] text-[#444] leading-[1.8] mb-5 max-w-[660px]">
            Ситуаційний тест суджень (SJT) занурює вас у реалістичні робочі ситуації та просить обрати спосіб дії. Замість того щоб запитувати «яка ви людина», він показує — як ви насправді вирішуєте проблеми.
          </p>
          <div className="grid sm:grid-cols-3 gap-5 mt-8">
            {[
              {
                title: "Поведінковий реалізм",
                text: "Сценарії відтворюють реальні управлінські ситуації. Важко дати «правильну» відповідь, не проявивши справжнього стилю мислення.",
              },
              {
                title: "Патерни рішень",
                text: "Кожна навичка оцінюється в кількох незалежних ситуаціях — це дає стабільний, надійний результат.",
              },
              {
                title: "Широке застосування",
                text: "SJT використовується у відборі та розвитку керівників у великих організаціях, державних структурах і арміях по всьому світу.",
              },
            ].map((item) => (
              <div key={item.title} className="bg-white rounded-xl border border-[#c8e6bf] p-5">
                <p className="font-bold text-[#111] mb-2">{item.title}</p>
                <p className="text-[14px] text-[#555] leading-[1.7]">{item.text}</p>
              </div>
            ))}
          </div>
          <p className="mt-6 text-[14px] text-[#555]">
            Детальніше про метод:{" "}
            <Link href="/ua/shcho-take-sjt" className="text-[#308F16] hover:underline">
              Що таке SJT →
            </Link>
          </p>
        </div>
      </section>

      {/* SECTION 6 — TRUST */}
      <section className="py-16 px-6 bg-white border-t border-[#EDEDED]">
        <div className="max-w-[860px] mx-auto">
          <h2 className="text-[28px] font-extrabold text-[#111] mb-10">Надійність методу</h2>
          <div className="grid sm:grid-cols-2 gap-5">
            {[
              {
                stat: "102",
                label: "дослідження",
                text: "Зв'язок між результатами SJT і реальною поведінкою підтверджено в 102 незалежних наукових дослідженнях.",
              },
              {
                stat: "0.73",
                label: "Cronbach's alpha",
                text: "Показник внутрішньої надійності тесту G&T Power — в межах норм для психометричних інструментів.",
              },
              {
                stat: "AWS",
                label: "зберігання відповідей",
                text: "Відповіді зберігаються в знеособленому вигляді в AWS. Звіти не зберігаються на сервері — формуються за запитом.",
              },
              {
                stat: "17",
                label: "навичок",
                text: "Оцінка охоплює 17 навичок у чотирьох компетенціях — із докладним профілем по кожній.",
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
          <h2 className="text-[28px] font-extrabold text-[#111] mb-3">Кому підходить ця оцінка</h2>
          <p className="text-[17px] text-[#555] mb-8">Для людей, яким важливо розуміти себе — а не просто отримати сертифікат.</p>
          <ul className="space-y-4">
            {[
              "Хочете зрозуміти свої сильні сторони та де ви даєте найбільшу цінність",
              "Готуєтеся до нової керівної ролі або підвищення",
              "Розглядаєте зміну напрямку в кар'єрі і хочете структурований погляд на себе",
              "Шукаєте якісний зворотний зв'язок поза суб'єктивними думками колег",
            ].map((item) => (
              <li key={item} className="flex items-start gap-3 text-[16px] text-[#333]">
                <span className="shrink-0 text-[#308F16] font-bold mt-0.5">→</span>
                {item}
              </li>
            ))}
          </ul>
          <p className="mt-8 text-[14px] text-[#555]">
            Також читайте:{" "}
            <Link href="/ua/yak-otsinyty-soft-skills-komandy" className="text-[#308F16] hover:underline">
              Як оцінити soft skills команди →
            </Link>
            {" · "}
            <Link href="/ua/soft-skills-test-online" className="text-[#308F16] hover:underline">
              Онлайн тест soft skills →
            </Link>
          </p>
        </div>
      </section>

      {/* SECTION 8 — PRICE */}
      <section className="py-16 px-6 bg-white border-t border-[#EDEDED]">
        <div className="max-w-[860px] mx-auto">
          <h2 className="text-[28px] font-extrabold text-[#111] mb-3">Вартість</h2>
          <p className="text-[17px] text-[#555] mb-10 max-w-[560px]">
            Цей доступ надається в рамках дослідницької програми. Учасники проходять оцінку за зниженою ціною — натомість допомагають нам збирати дані для вдосконалення інструменту.
          </p>

          <div className="grid sm:grid-cols-3 gap-4 mb-8">
            {[
              { period: "До 31 березня", discount: "95%", price: "€17", highlight: true },
              { period: "До 30 квітня", discount: "90%", price: "€34", highlight: false },
              { period: "До 31 травня", discount: "85%", price: "€51", highlight: false },
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
                    Поточна ціна
                  </p>
                )}
                <p className="text-[13px] text-[#555] mb-1">{tier.period}</p>
                <p className="text-[28px] font-extrabold text-[#111]">{tier.price}</p>
                <p className="text-[13px] text-[#555]">знижка {tier.discount} від €340</p>
              </div>
            ))}
          </div>

          <div className="rounded-xl bg-[#f9fafb] border border-[#EDEDED] p-5 flex flex-wrap items-center gap-4 mb-8">
            <div>
              <p className="text-[13px] text-[#555] mb-0.5">Промокод для отримання знижки</p>
              <p className="text-[22px] font-extrabold text-[#308F16] tracking-wider">VESNA26</p>
            </div>
            <p className="text-[14px] text-[#555] max-w-[400px]">
              Введіть цей код при оплаті. Регулярна ціна — €340. Знижка діє до кінця травня 2026.
            </p>
          </div>

          <AppLink
            href={demoUrl}
            lang="ua"
            className="inline-block bg-[#308F16] text-white font-bold text-[17px] px-8 py-4 rounded-xl hover:bg-[#27780f] transition-colors"
          >
            Почати оцінку
          </AppLink>
        </div>
      </section>

      {/* SECTION 9 — FAQ */}
      <section className="py-16 px-6 bg-[#f9fafb] border-t border-[#EDEDED]">
        <div className="max-w-[860px] mx-auto">
          <h2 className="text-[28px] font-extrabold text-[#111] mb-8">Питання та відповіді</h2>
          <div className="space-y-6">
            {[
              {
                q: "Скільки часу займає оцінка?",
                a: "Близько 1,5 години. Оцінка побудована як послідовність реалістичних робочих ситуацій — це серйозний профессійний інструмент, тому не поспішайте. Час виконання не обмежено.",
              },
              {
                q: "Це тест особистості?",
                a: "Ні. Це поведінкова оцінка на основі SJT (Situational Judgement Test). Вона не запитує, як ви себе описуєте — вона аналізує, як ви приймаєте рішення у змодельованих робочих ситуаціях.",
              },
              {
                q: "Кому підходить ця оцінка?",
                a: "Фахівцям і менеджерам, які хочуть краще розуміти свої сильні сторони, підготуватися до нової ролі або отримати структурований зворотний зв'язок про свій поведінковий профіль.",
              },
              {
                q: "Чи можуть компанії використовувати цей інструмент?",
                a: "Так. G&T Power використовується компаніями для відбору, оцінки кадрового резерву та розвитку керівників. Зверніться до нас для отримання корпоративного доступу.",
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
            Дізнайтеся свої поведінкові сильні сторони
          </h2>
          <p className="text-[17px] opacity-90 mb-8">
            Профессійна оцінка з конкретним результатом. Весняний доступ за кодом <strong>VESNA26</strong>.
          </p>
          <AppLink
            href={demoUrl}
            lang="ua"
            className="inline-block bg-white text-[#308F16] font-bold text-[17px] px-10 py-4 rounded-xl hover:bg-[#f0fcea] transition-colors"
          >
            Почати оцінку
          </AppLink>
          <p className="mt-4 text-[13px] opacity-70">Займає ~1,5 години · Результат одразу після завершення</p>
        </div>
      </section>

      {/* Footer nav */}
      <div className="py-8 px-6 bg-white border-t border-[#EDEDED]">
        <div className="max-w-[860px] mx-auto">
          <Link href="/ua" className="text-[#555] hover:text-[#308F16] text-[14px]">
            ← Повернутися на головну
          </Link>
        </div>
      </div>
    </main>
  )
}
