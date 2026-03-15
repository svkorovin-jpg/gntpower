import type { Metadata } from "next"
import Link from "next/link"
import AppLink from "../../../components/AppLink"

export const metadata: Metadata = {
  title: "Тест soft skills — G&T Power",
  description:
    "Науково обґрунтована оцінка soft skills за методом SJT. Виміряйте лідерські компетенції точно, об'єктивно та у масштабі.",
  alternates: {
    canonical: "https://gntpower.com/ua/soft-skills-test",
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
          <Link href="/ua">
            <img src="/photo.png" alt="G&T Power" className="h-10 w-auto" />
          </Link>
          <AppLink
            href="https://app.gntpower.com/demo"
            lang="ua"
            className="bg-[#308F16] hover:bg-[#27780f] text-white text-[15px] font-semibold px-5 py-2 rounded-lg transition-colors"
          >
            Спробувати демо
          </AppLink>
        </div>
      </nav>

      {/* Hero */}
      <section className="bg-gradient-to-br from-[#308F16] to-[#63AF4F] text-white">
        <div className="max-w-[860px] mx-auto px-6 py-20">
          <p className="text-[13px] font-semibold uppercase tracking-widest opacity-80 mb-4">
            Ситуаційний тест суджень (SJT)
          </p>
          <h1 className="text-[38px] sm:text-[48px] font-extrabold leading-tight mb-6">
            Тест soft skills: виміряйте те, що стандартні тести пропускають
          </h1>
          <p className="text-[19px] leading-[1.7] opacity-90 max-w-[640px] mb-10">
            G&amp;T Power використовує метод SJT для оцінки чотирьох лідерських компетенцій, які реально
            передбачають ефективність роботи — не те, що людина знає, а те, як вона поводиться.
          </p>
          <AppLink
            href="https://app.gntpower.com/demo"
            lang="ua"
            className="inline-block bg-white text-[#308F16] font-bold text-[17px] px-8 py-4 rounded-xl hover:bg-[#f0fcea] transition-colors"
          >
            Спробувати демо безкоштовно
          </AppLink>
        </div>
      </section>

      {/* Section 1: Why Standard Tests Cannot Assess Soft Skills */}
      <section className="bg-white border-t border-[#EDEDED]">
        <div className="max-w-[860px] mx-auto px-6 py-16">
          <h2 className="text-[28px] font-extrabold text-[#111] mb-4">
            Чому стандартні тести не можуть оцінити soft skills
          </h2>
          <p className="text-[17px] text-[#444] leading-[1.8] mb-6">
            Традиційні інструменти оцінки — тести знань, особистісні опитувальники, компетенційні інтерв'ю —
            призначені відповісти на запитання <em>"що ця людина знає?"</em> або{" "}
            <em>"як вона себе описує?"</em>. Це корисно для технічних ролей. Але це майже нічого не говорить
            про soft skills.
          </p>
          <p className="text-[17px] text-[#444] leading-[1.8] mb-6">
            Soft skills — поведінкові: вони описують <strong>як людина діє</strong> у реальних робочих
            ситуаціях — конфлікт, жорсткий дедлайн, неоднозначне завдання або опір команди. Ці патерни не
            можна виявити тестом знань з множинним вибором. Для цього потрібен принципово інший підхід.
          </p>
          <div className="grid sm:grid-cols-2 gap-4 mt-8">
            <div className="rounded-xl border border-[#EDEDED] p-6">
              <p className="font-bold text-[#111] mb-2">Тести знань та інтерв'ю</p>
              <p className="text-[15px] text-[#444] leading-[1.7]">
                Виявляють предметну експертизу, стиль комунікації та самопрезентацію. Вони не передбачають,
                як людина поводитиметься під тиском, вирішуватиме неоднозначність або вирівнюватиме команду
                в кризі.
              </p>
            </div>
            <div className="rounded-xl border-2 border-[#308F16] p-6">
              <p className="font-bold text-[#111] mb-2">Ситуаційний тест суджень (SJT)</p>
              <p className="text-[15px] text-[#444] leading-[1.7]">
                Поміщає респондента всередину реалістичних робочих ситуацій і просить обрати спосіб дій.
                Відповіді виявляють реальні поведінкові тенденції — ті самі компетенції, які визначають
                лідерську ефективність.
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
            Ситуаційний тест суджень — один із найбільш ретельно досліджених методів оцінки в організаційній
            психології. Уряди, армії та провідні організації по всьому світу використовують його саме тому, що
            докази його валідності є переконливими.
          </p>
          <div className="grid sm:grid-cols-3 gap-6">
            <div className="rounded-xl bg-[#f7fdf4] border border-[#c8e6bf] p-6 text-center">
              <p className="text-[40px] font-extrabold text-[#308F16] mb-2">🏛</p>
              <p className="font-bold text-[#111] mb-2">Всесвітньо визнаний</p>
              <p className="text-[14px] text-[#555] leading-[1.7]">
                Використовується урядами та арміями по всьому світу як стандартний інструмент відбору та
                просування лідерів.
              </p>
            </div>
            <div className="rounded-xl bg-[#f7fdf4] border border-[#c8e6bf] p-6 text-center">
              <p className="text-[40px] font-extrabold text-[#308F16] mb-2">102</p>
              <p className="font-bold text-[#111] mb-2">Підтверджуючі дослідження</p>
              <p className="text-[14px] text-[#555] leading-[1.7]">
                Кореляція між результатами SJT та реальною поведінкою на робочому місці підтверджена в 102
                незалежних наукових дослідженнях.
              </p>
            </div>
            <div className="rounded-xl bg-[#f7fdf4] border border-[#c8e6bf] p-6 text-center">
              <p className="text-[40px] font-extrabold text-[#308F16] mb-2">0.732</p>
              <p className="font-bold text-[#111] mb-2">Альфа Кронбаха</p>
              <p className="text-[14px] text-[#555] leading-[1.7]">
                Показник внутрішньої надійності G&amp;T Power. Стійкий до упереджень дизайн забезпечує
                стабільні результати в різних культурних та демографічних групах.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Four Competencies */}
      <section className="bg-white border-t border-[#EDEDED]">
        <div className="max-w-[860px] mx-auto px-6 py-16">
          <h2 className="text-[28px] font-extrabold text-[#111] mb-4">
            Чотири компетенції, які ми вимірюємо
          </h2>
          <p className="text-[17px] text-[#444] leading-[1.8] mb-10">
            G&amp;T Power оцінює чотири компетенції, які дослідження постійно виявляють як такі, що
            відрізняють ефективних лідерів від середніх. Разом вони охоплюють 17 унікальних навичок — 3 з
            яких є крос-компетентнісними "суперздібностями", що присутні в кількох компетенціях.
          </p>
          <div className="grid sm:grid-cols-2 gap-6">
            <div className="rounded-xl border border-[#EDEDED] p-6">
              <p className="text-[22px] font-extrabold text-[#308F16] mb-2">Системне мислення</p>
              <p className="text-[15px] text-[#444] leading-[1.7]">
                Здатність бачити закономірності, розуміти причинно-наслідкові зв'язки та приймати рішення,
                які враховують ширшу систему — не лише безпосередню проблему. Лідери з високими балами тут
                передбачають наслідки другого порядку та уникають короткострокових рішень, що створюють
                довгострокову складність.
              </p>
            </div>
            <div className="rounded-xl border border-[#EDEDED] p-6">
              <p className="text-[22px] font-extrabold text-[#308F16] mb-2">Здатність досягати результату</p>
              <p className="text-[15px] text-[#444] leading-[1.7]">
                Здатність перетворювати наміри на дії та досягати результатів попри перешкоди, неоднозначність
                та конкуруючі пріоритети. Люди з високими балами просувають проекти вперед, тримають себе та
                інших підзвітними та зберігають фокус під тиском.
              </p>
            </div>
            <div className="rounded-xl border border-[#EDEDED] p-6">
              <p className="text-[22px] font-extrabold text-[#308F16] mb-2">Ефективна взаємодія з іншими</p>
              <p className="text-[15px] text-[#444] leading-[1.7]">
                Здатність впливати, узгоджувати та залучати інших через чітку і цілеспрямовану комунікацію.
                Ця компетенція охоплює те, як лідери слухають, дають зворотний зв'язок, долають розбіжності
                та будують довіру з різними аудиторіями.
              </p>
            </div>
            <div className="rounded-xl border border-[#EDEDED] p-6">
              <p className="text-[22px] font-extrabold text-[#308F16] mb-2">Адаптивність</p>
              <p className="text-[15px] text-[#444] leading-[1.7]">
                Здатність оновлювати переконання та поведінку у відповідь на нову інформацію, обставини, що
                змінюються, або несподівані невдачі. Люди з високими балами навчаються на помилках, швидко
                коригують курс та ведуть свої команди крізь зміни.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: How the Test Works */}
      <section className="bg-[#f9fafb] border-t border-[#EDEDED]">
        <div className="max-w-[860px] mx-auto px-6 py-16">
          <h2 className="text-[28px] font-extrabold text-[#111] mb-4">Як працює тест</h2>
          <p className="text-[17px] text-[#444] leading-[1.8] mb-10">
            Тест побудований як серія реалістичних робочих сценаріїв — не допит. Це робить його одночасно
            захопливим для респондентів та надзвичайно інформативним для організацій.
          </p>
          <ol className="space-y-6">
            <li className="flex gap-4">
              <span className="flex-shrink-0 w-10 h-10 rounded-full bg-[#308F16] text-white flex items-center justify-center font-bold text-[16px]">
                1
              </span>
              <div>
                <p className="font-bold text-[#111] mb-1">Реалістичні ситуаційні сценарії</p>
                <p className="text-[16px] text-[#444] leading-[1.7]">
                  Респондентам пропонуються реалістичні робочі ситуації, взяті із типових лідерських викликів.
                  Кожен сценарій описує ситуацію і запитує: "Що б ви зробили?"
                </p>
              </div>
            </li>
            <li className="flex gap-4">
              <span className="flex-shrink-0 w-10 h-10 rounded-full bg-[#308F16] text-white flex items-center justify-center font-bold text-[16px]">
                2
              </span>
              <div>
                <p className="font-bold text-[#111] mb-1">Кожне завдання розкриває конкретну навичку</p>
                <p className="text-[16px] text-[#444] leading-[1.7]">
                  Сценарії ретельно побудовані так, щоб кожен з них досліджував конкретну навичку в межах
                  однієї з чотирьох компетенцій. Респонденти не знають, яка навичка оцінюється — що усуває
                  спокусу давати "соціально бажані" відповіді.
                </p>
              </div>
            </li>
            <li className="flex gap-4">
              <span className="flex-shrink-0 w-10 h-10 rounded-full bg-[#308F16] text-white flex items-center justify-center font-bold text-[16px]">
                3
              </span>
              <div>
                <p className="font-bold text-[#111] mb-1">Усі відповіді виглядають правильними</p>
                <p className="text-[16px] text-[#444] leading-[1.7]">
                  Очевидно "неправильних" відповідей немає. Усі варіанти відповідей є розумними підходами —
                  але вони виявляють суттєво різні рівні базової компетенції. Саме це робить SJT стійким до
                  фальсифікацій та натаскування.
                </p>
              </div>
            </li>
            <li className="flex gap-4">
              <span className="flex-shrink-0 w-10 h-10 rounded-full bg-[#308F16] text-white flex items-center justify-center font-bold text-[16px]">
                4
              </span>
              <div>
                <p className="font-bold text-[#111] mb-1">Кожна навичка оцінюється тричі</p>
                <p className="text-[16px] text-[#444] leading-[1.7]">
                  Для забезпечення надійності кожна навичка оцінюється в трьох різних ситуаціях. Це зменшує
                  вплив контекстно-специфічних реакцій та дає стабільний, узагальнювальний бал для кожної
                  навички.
                </p>
              </div>
            </li>
            <li className="flex gap-4">
              <span className="flex-shrink-0 w-10 h-10 rounded-full bg-[#308F16] text-white flex items-center justify-center font-bold text-[16px]">
                5
              </span>
              <div>
                <p className="font-bold text-[#111] mb-1">Шкала 0–10 із чотирма рівнями ефективності</p>
                <p className="text-[16px] text-[#444] leading-[1.7]">
                  Кожна навичка отримує бал від 0 до 10, розподілений на чотири рівні ефективності:
                  Прийнятний (0–4), Добрий (4–6), Відмінний (6–8) та Видатний (8–10). Видатний відповідає
                  топ 3–5% нормативної бази.
                </p>
              </div>
            </li>
          </ol>
        </div>
      </section>

      {/* Section 5: What You Get */}
      <section className="bg-white border-t border-[#EDEDED]">
        <div className="max-w-[860px] mx-auto px-6 py-16">
          <h2 className="text-[28px] font-extrabold text-[#111] mb-4">Що ви отримуєте</h2>
          <p className="text-[17px] text-[#444] leading-[1.8] mb-10">
            Після кожного оцінювання G&amp;T Power генерує структуровані звіти, призначені для підтримки
            реальних рішень — найму, підвищення, планування розвитку та формування команди.
          </p>
          <div className="grid sm:grid-cols-2 gap-6">
            <div className="rounded-xl border-2 border-[#308F16] p-6">
              <p className="font-bold text-[#111] text-[17px] mb-2">Індивідуальний профіль компетенцій</p>
              <p className="text-[15px] text-[#444] leading-[1.7]">
                Детальна розбивка балів респондента за всіма чотирма компетенціями та 17 навичками,
                відображена на шкалі 0–10 з індикаторами рівня ефективності. Включає наративну інтерпретацію
                сильних сторін і зон розвитку.
              </p>
            </div>
            <div className="rounded-xl border-2 border-[#308F16] p-6">
              <p className="font-bold text-[#111] text-[17px] mb-2">Порівняння з видатними виконавцями</p>
              <p className="text-[15px] text-[#444] leading-[1.7]">
                Накладіть профіль людини на еталонний профіль топ 3–5% усіх респондентів. Миттєво побачте,
                де знаходяться розриви — і наскільки вони значущі — відносно стандартів високої ефективності.
              </p>
            </div>
            <div className="rounded-xl border-2 border-[#308F16] p-6">
              <p className="font-bold text-[#111] text-[17px] mb-2">Еталонні профілі типів завдань</p>
              <p className="text-[15px] text-[#444] leading-[1.7]">
                Порівняйте профіль людини з чотирма стандартними еталонними профілями типів завдань:
                Підприємницький, Структурування, Зовнішній тиск та Глибокі зміни. Зрозумійте, для яких
                типів викликів людина найбільш природно підходить як лідер.
              </p>
            </div>
            <div className="rounded-xl border-2 border-[#308F16] p-6">
              <p className="font-bold text-[#111] text-[17px] mb-2">Командний звіт</p>
              <p className="text-[15px] text-[#444] leading-[1.7]">
                Агрегуйте індивідуальні результати в єдиний вигляд на рівні команди. Побачте колективний
                профіль компетенцій вашої команди — включаючи те, де ваша команда сильна як група і де
                існують системні прогалини.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-br from-[#308F16] to-[#63AF4F] text-white border-t border-[#EDEDED]">
        <div className="max-w-[860px] mx-auto px-6 py-20 text-center">
          <h2 className="text-[32px] font-extrabold mb-4">Готові об'єктивно виміряти soft skills?</h2>
          <p className="text-[18px] opacity-90 mb-10 max-w-[520px] mx-auto">
            Спробуйте інтерактивне демо та побачте, що саме вимірює тест і як виглядають звіти.
          </p>
          <AppLink
            href="https://app.gntpower.com/demo"
            lang="ua"
            className="inline-block bg-white text-[#308F16] font-bold text-[17px] px-8 py-4 rounded-xl hover:bg-[#f0fcea] transition-colors"
          >
            Спробувати демо безкоштовно
          </AppLink>
          <div className="mt-8">
            <Link href="/ua" className="text-white opacity-75 hover:opacity-100 text-[15px] underline underline-offset-2">
              ← Повернутися на головну
            </Link>
          </div>
        </div>
      </section>

      {/* Related articles */}
      <section className="py-12 px-6 bg-white border-t border-[#EDEDED]">
        <div className="max-w-[860px] mx-auto">
          <h2 className="text-[20px] font-bold text-[#111] mb-6">Читайте також</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              { url: "/ua/shcho-take-sjt", label: "Що таке SJT" },
              { url: "/ua/soft-skills-test-online", label: "Онлайн тест soft skills" },
              { url: "/ua/pryklad-zvitu-soft-skills", label: "Приклад звіту soft skills" },
              { url: "/ua/rozvytok-soft-skills", label: "Розвиток soft skills" },
              { url: "/ua/yak-zrozumity-svoi-sylni-storony", label: "Як зрозуміти свої сильні сторони" },
            ].map((page) => (
              <Link
                key={page.url}
                href={page.url}
                className="rounded-xl border border-[#EDEDED] px-5 py-4 text-[15px] font-medium text-[#308F16] no-underline hover:border-[#308F16] hover:bg-[#f7fdf4] transition-all duration-150 flex items-center gap-2"
              >
                <span className="shrink-0">→</span>{page.label}
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
