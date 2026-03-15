import type { Metadata } from "next"
import Link from "next/link"
import AppLink from "../../../components/AppLink"

export const metadata: Metadata = {
  title: "Тест soft skills — G&T Power",
  description:
    "Научно обоснованная оценка soft skills по методу SJT. Измеряйте лидерские компетенции точно, объективно и в масштабе.",
  alternates: {
    canonical: "https://gntpower.com/ru/soft-skills-test",
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
          <Link href="/ru">
            <img src="/photo.png" alt="G&T Power" className="h-10 w-auto" />
          </Link>
          <AppLink
            href="https://app.gntpower.com/demo"
            lang="ru"
            className="bg-[#308F16] hover:bg-[#27780f] text-white text-[15px] font-semibold px-5 py-2 rounded-lg transition-colors"
          >
            Попробовать демо
          </AppLink>
        </div>
      </nav>

      {/* Hero */}
      <section className="bg-gradient-to-br from-[#308F16] to-[#63AF4F] text-white">
        <div className="max-w-[860px] mx-auto px-6 py-20">
          <p className="text-[13px] font-semibold uppercase tracking-widest opacity-80 mb-4">
            Ситуационный тест суждений (SJT)
          </p>
          <h1 className="text-[38px] sm:text-[48px] font-extrabold leading-tight mb-6">
            Тест soft skills: измерьте то, что стандартные тесты упускают
          </h1>
          <p className="text-[19px] leading-[1.7] opacity-90 max-w-[640px] mb-10">
            G&amp;T Power использует метод SJT для оценки четырёх лидерских компетенций, которые реально
            предсказывают эффективность работы — не то, что человек знает, а то, как он ведёт себя.
          </p>
          <AppLink
            href="https://app.gntpower.com/demo"
            lang="ru"
            className="inline-block bg-white text-[#308F16] font-bold text-[17px] px-8 py-4 rounded-xl hover:bg-[#f0fcea] transition-colors"
          >
            Попробовать демо бесплатно
          </AppLink>
        </div>
      </section>

      {/* Section 1: Why Standard Tests Cannot Assess Soft Skills */}
      <section className="bg-white border-t border-[#EDEDED]">
        <div className="max-w-[860px] mx-auto px-6 py-16">
          <h2 className="text-[28px] font-extrabold text-[#111] mb-4">
            Почему стандартные тесты не могут оценить soft skills
          </h2>
          <p className="text-[17px] text-[#444] leading-[1.8] mb-6">
            Традиционные инструменты оценки — тесты знаний, личностные опросники, компетенционные интервью —
            созданы для ответа на вопрос <em>"что этот человек знает?"</em> или{" "}
            <em>"как он себя описывает?"</em>. Это ценно для технических ролей. Но это почти ничего не говорит
            о soft skills.
          </p>
          <p className="text-[17px] text-[#444] leading-[1.8] mb-6">
            Soft skills — поведенческие: они описывают <strong>как человек действует</strong> в реальных
            рабочих ситуациях — конфликт, жёсткий дедлайн, неоднозначное задание или сопротивление команды.
            Эти паттерны нельзя выявить тестом знаний с множественным выбором. Для этого нужен принципиально
            иной подход.
          </p>
          <div className="grid sm:grid-cols-2 gap-4 mt-8">
            <div className="rounded-xl border border-[#EDEDED] p-6">
              <p className="font-bold text-[#111] mb-2">Тесты знаний и интервью</p>
              <p className="text-[15px] text-[#444] leading-[1.7]">
                Выявляют предметную экспертизу, стиль коммуникации и самопрезентацию. Они не предсказывают,
                как человек будет вести себя под давлением, разрешать неоднозначность или выстраивать
                команду в кризисе.
              </p>
            </div>
            <div className="rounded-xl border-2 border-[#308F16] p-6">
              <p className="font-bold text-[#111] mb-2">Ситуационный тест суждений (SJT)</p>
              <p className="text-[15px] text-[#444] leading-[1.7]">
                Помещает респондента внутрь реалистичных рабочих ситуаций и просит выбрать способ действий.
                Ответы выявляют реальные поведенческие тенденции — те самые компетенции, которые определяют
                лидерскую эффективность.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: The Science */}
      <section className="bg-[#f9fafb] border-t border-[#EDEDED]">
        <div className="max-w-[860px] mx-auto px-6 py-16">
          <h2 className="text-[28px] font-extrabold text-[#111] mb-4">Наука: метод SJT</h2>
          <p className="text-[17px] text-[#444] leading-[1.8] mb-10">
            Ситуационный тест суждений — один из наиболее тщательно изученных методов оценки в
            организационной психологии. Правительства, армии и ведущие организации по всему миру используют
            его именно потому, что доказательства его валидности неоспоримы.
          </p>
          <div className="grid sm:grid-cols-3 gap-6">
            <div className="rounded-xl bg-[#f7fdf4] border border-[#c8e6bf] p-6 text-center">
              <p className="text-[40px] font-extrabold text-[#308F16] mb-2">🏛</p>
              <p className="font-bold text-[#111] mb-2">Всемирно признанный</p>
              <p className="text-[14px] text-[#555] leading-[1.7]">
                Используется правительствами и армиями по всему миру как стандартный инструмент отбора и
                продвижения лидеров.
              </p>
            </div>
            <div className="rounded-xl bg-[#f7fdf4] border border-[#c8e6bf] p-6 text-center">
              <p className="text-[40px] font-extrabold text-[#308F16] mb-2">102</p>
              <p className="font-bold text-[#111] mb-2">Подтверждающих исследования</p>
              <p className="text-[14px] text-[#555] leading-[1.7]">
                Корреляция между результатами SJT и реальным поведением на рабочем месте подтверждена в 102
                независимых научных исследованиях.
              </p>
            </div>
            <div className="rounded-xl bg-[#f7fdf4] border border-[#c8e6bf] p-6 text-center">
              <p className="text-[40px] font-extrabold text-[#308F16] mb-2">0.732</p>
              <p className="font-bold text-[#111] mb-2">Альфа Кронбаха</p>
              <p className="text-[14px] text-[#555] leading-[1.7]">
                Показатель внутренней надёжности G&amp;T Power. Дизайн, устойчивый к предубеждениям,
                обеспечивает стабильные результаты в разных культурных и демографических группах.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Four Competencies */}
      <section className="bg-white border-t border-[#EDEDED]">
        <div className="max-w-[860px] mx-auto px-6 py-16">
          <h2 className="text-[28px] font-extrabold text-[#111] mb-4">
            Четыре компетенции, которые мы измеряем
          </h2>
          <p className="text-[17px] text-[#444] leading-[1.8] mb-10">
            G&amp;T Power оценивает четыре компетенции, которые исследования неизменно выявляют как те,
            что отличают эффективных лидеров от средних. Вместе они охватывают 17 уникальных навыков — 3 из
            которых являются кросс-компетентностными "суперспособностями", присутствующими в нескольких
            компетенциях.
          </p>
          <div className="grid sm:grid-cols-2 gap-6">
            <div className="rounded-xl border border-[#EDEDED] p-6">
              <p className="text-[22px] font-extrabold text-[#308F16] mb-2">Системное мышление</p>
              <p className="text-[15px] text-[#444] leading-[1.7]">
                Способность видеть закономерности, понимать причинно-следственные связи и принимать решения,
                учитывающие более широкую систему — не только непосредственную проблему. Лидеры с высокими
                баллами предвидят последствия второго порядка и избегают краткосрочных решений, создающих
                долгосрочную сложность.
              </p>
            </div>
            <div className="rounded-xl border border-[#EDEDED] p-6">
              <p className="text-[22px] font-extrabold text-[#308F16] mb-2">Способность достигать результата</p>
              <p className="text-[15px] text-[#444] leading-[1.7]">
                Способность превращать намерения в действия и достигать результатов несмотря на препятствия,
                неоднозначность и конкурирующие приоритеты. Люди с высокими баллами продвигают проекты вперёд,
                держат себя и других подотчётными и сохраняют фокус под давлением.
              </p>
            </div>
            <div className="rounded-xl border border-[#EDEDED] p-6">
              <p className="text-[22px] font-extrabold text-[#308F16] mb-2">Эффективное взаимодействие с людьми</p>
              <p className="text-[15px] text-[#444] leading-[1.7]">
                Способность влиять, согласовывать и вовлекать других через чёткую и целенаправленную
                коммуникацию. Эта компетенция охватывает то, как лидеры слушают, дают обратную связь,
                преодолевают разногласия и строят доверие с разными аудиториями.
              </p>
            </div>
            <div className="rounded-xl border border-[#EDEDED] p-6">
              <p className="text-[22px] font-extrabold text-[#308F16] mb-2">Адаптивность</p>
              <p className="text-[15px] text-[#444] leading-[1.7]">
                Способность обновлять убеждения и поведение в ответ на новую информацию, изменяющиеся
                обстоятельства или неожиданные неудачи. Люди с высокими баллами учатся на ошибках, быстро
                корректируют курс и ведут свои команды через изменения.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: How the Test Works */}
      <section className="bg-[#f9fafb] border-t border-[#EDEDED]">
        <div className="max-w-[860px] mx-auto px-6 py-16">
          <h2 className="text-[28px] font-extrabold text-[#111] mb-4">Как работает тест</h2>
          <p className="text-[17px] text-[#444] leading-[1.8] mb-10">
            Тест построен как серия реалистичных рабочих сценариев — не допрос. Это делает его одновременно
            увлекательным для респондентов и крайне информативным для организаций.
          </p>
          <ol className="space-y-6">
            <li className="flex gap-4">
              <span className="flex-shrink-0 w-10 h-10 rounded-full bg-[#308F16] text-white flex items-center justify-center font-bold text-[16px]">
                1
              </span>
              <div>
                <p className="font-bold text-[#111] mb-1">Реалистичные ситуационные сценарии</p>
                <p className="text-[16px] text-[#444] leading-[1.7]">
                  Респондентам предлагаются реалистичные рабочие ситуации из типичных лидерских вызовов.
                  Каждый сценарий описывает ситуацию и спрашивает: "Что бы вы сделали?"
                </p>
              </div>
            </li>
            <li className="flex gap-4">
              <span className="flex-shrink-0 w-10 h-10 rounded-full bg-[#308F16] text-white flex items-center justify-center font-bold text-[16px]">
                2
              </span>
              <div>
                <p className="font-bold text-[#111] mb-1">Каждое задание раскрывает конкретный навык</p>
                <p className="text-[16px] text-[#444] leading-[1.7]">
                  Сценарии тщательно построены так, чтобы каждый из них исследовал конкретный навык в рамках
                  одной из четырёх компетенций. Респонденты не знают, какой навык оценивается — что устраняет
                  искушение давать "социально желательные" ответы.
                </p>
              </div>
            </li>
            <li className="flex gap-4">
              <span className="flex-shrink-0 w-10 h-10 rounded-full bg-[#308F16] text-white flex items-center justify-center font-bold text-[16px]">
                3
              </span>
              <div>
                <p className="font-bold text-[#111] mb-1">Все ответы выглядят правильными</p>
                <p className="text-[16px] text-[#444] leading-[1.7]">
                  Явно "неправильных" ответов нет. Все варианты ответов представляют разумные подходы — но
                  они выявляют существенно разные уровни базовой компетенции. Именно это делает SJT устойчивым
                  к подделкам и натаскиванию.
                </p>
              </div>
            </li>
            <li className="flex gap-4">
              <span className="flex-shrink-0 w-10 h-10 rounded-full bg-[#308F16] text-white flex items-center justify-center font-bold text-[16px]">
                4
              </span>
              <div>
                <p className="font-bold text-[#111] mb-1">Каждый навык оценивается трижды</p>
                <p className="text-[16px] text-[#444] leading-[1.7]">
                  Для обеспечения надёжности каждый навык оценивается в трёх разных ситуациях. Это снижает
                  влияние контекстно-специфических реакций и даёт стабильный, обобщаемый балл для каждого
                  навыка.
                </p>
              </div>
            </li>
            <li className="flex gap-4">
              <span className="flex-shrink-0 w-10 h-10 rounded-full bg-[#308F16] text-white flex items-center justify-center font-bold text-[16px]">
                5
              </span>
              <div>
                <p className="font-bold text-[#111] mb-1">Шкала 0–10 с четырьмя уровнями эффективности</p>
                <p className="text-[16px] text-[#444] leading-[1.7]">
                  Каждый навык получает балл от 0 до 10, разделённый на четыре уровня эффективности:
                  Приемлемый (0–4), Хороший (4–6), Отличный (6–8) и Выдающийся (8–10). Выдающийся
                  соответствует топ 3–5% нормативной базы.
                </p>
              </div>
            </li>
          </ol>
        </div>
      </section>

      {/* Section 5: What You Get */}
      <section className="bg-white border-t border-[#EDEDED]">
        <div className="max-w-[860px] mx-auto px-6 py-16">
          <h2 className="text-[28px] font-extrabold text-[#111] mb-4">Что вы получаете</h2>
          <p className="text-[17px] text-[#444] leading-[1.8] mb-10">
            После каждой оценки G&amp;T Power генерирует структурированные отчёты, предназначенные для
            поддержки реальных решений — найма, повышения, планирования развития и формирования команды.
          </p>
          <div className="grid sm:grid-cols-2 gap-6">
            <div className="rounded-xl border-2 border-[#308F16] p-6">
              <p className="font-bold text-[#111] text-[17px] mb-2">Индивидуальный профиль компетенций</p>
              <p className="text-[15px] text-[#444] leading-[1.7]">
                Детальная разбивка баллов респондента по всем четырём компетенциям и 17 навыкам, отображённая
                на шкале 0–10 с индикаторами уровня эффективности. Включает нарративную интерпретацию сильных
                сторон и зон развития.
              </p>
            </div>
            <div className="rounded-xl border-2 border-[#308F16] p-6">
              <p className="font-bold text-[#111] text-[17px] mb-2">Сравнение с выдающимися исполнителями</p>
              <p className="text-[15px] text-[#444] leading-[1.7]">
                Наложите профиль человека на эталонный профиль топ 3–5% всех респондентов. Мгновенно увидьте,
                где находятся разрывы — и насколько они значимы — относительно стандартов высокой
                эффективности.
              </p>
            </div>
            <div className="rounded-xl border-2 border-[#308F16] p-6">
              <p className="font-bold text-[#111] text-[17px] mb-2">Эталонные профили типов задач</p>
              <p className="text-[15px] text-[#444] leading-[1.7]">
                Сравните профиль человека с четырьмя стандартными эталонными профилями типов задач:
                Предпринимательский, Структурирование, Внешнее давление и Глубокие изменения. Поймите,
                для каких типов вызовов человек наиболее естественно подходит как лидер.
              </p>
            </div>
            <div className="rounded-xl border-2 border-[#308F16] p-6">
              <p className="font-bold text-[#111] text-[17px] mb-2">Командный отчёт</p>
              <p className="text-[15px] text-[#444] leading-[1.7]">
                Агрегируйте индивидуальные результаты в единый вид на уровне команды. Увидьте коллективный
                профиль компетенций вашей команды — включая то, где команда сильна как группа и где есть
                системные пробелы.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-br from-[#308F16] to-[#63AF4F] text-white border-t border-[#EDEDED]">
        <div className="max-w-[860px] mx-auto px-6 py-20 text-center">
          <h2 className="text-[32px] font-extrabold mb-4">Готовы объективно измерить soft skills?</h2>
          <p className="text-[18px] opacity-90 mb-10 max-w-[520px] mx-auto">
            Попробуйте интерактивное демо и посмотрите, что именно измеряет тест и как выглядят отчёты.
          </p>
          <AppLink
            href="https://app.gntpower.com/demo"
            lang="ru"
            className="inline-block bg-white text-[#308F16] font-bold text-[17px] px-8 py-4 rounded-xl hover:bg-[#f0fcea] transition-colors"
          >
            Попробовать демо бесплатно
          </AppLink>
          <div className="mt-8">
            <Link href="/ru" className="text-white opacity-75 hover:opacity-100 text-[15px] underline underline-offset-2">
              ← Вернуться на главную
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
