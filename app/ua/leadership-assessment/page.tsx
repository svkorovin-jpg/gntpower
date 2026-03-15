import type { Metadata } from "next"
import Link from "next/link"
import AppLink from "../../../components/AppLink"

export const metadata: Metadata = {
  title: "Оцінка керівників — G&T Power",
  description:
    "Об'єктивна оцінка лідерських компетенцій за методом SJT. Прогнозуйте ефективність керівників, приймайте обґрунтовані кадрові рішення.",
  alternates: {
    canonical: "https://gntpower.com/ua/leadership-assessment",
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
            Оцінка лідерських компетенцій
          </p>
          <h1 className="text-[38px] sm:text-[48px] font-extrabold leading-tight mb-6">
            Оцінка керівників: об'єктивні дані для кращих кадрових рішень
          </h1>
          <p className="text-[19px] leading-[1.7] opacity-90 max-w-[640px] mb-10">
            G&amp;T Power дає вам надійні, науково валідовані бали за чотирма лідерськими компетенціями,
            що передбачають реальну ефективність — щоб кожне рішення про найм і підвищення спиралося на
            дані, а не інтуїцію.
          </p>
          <AppLink
            href="https://app.gntpower.com/demo"
            lang="ua"
            className="inline-block bg-white text-[#308F16] font-bold text-[17px] px-8 py-4 rounded-xl hover:bg-[#f0fcea] transition-colors"
          >
            Оцінити своїх керівників
          </AppLink>
        </div>
      </section>

      {/* Section 1: The Problem */}
      <section className="bg-white border-t border-[#EDEDED]">
        <div className="max-w-[860px] mx-auto px-6 py-16">
          <h2 className="text-[28px] font-extrabold text-[#111] mb-4">
            Проблема: оцінювати керівників важко
          </h2>
          <p className="text-[17px] text-[#444] leading-[1.8] mb-8">
            Більшість організацій покладаються на підходи, що виглядають ретельними, але стабільно
            поступаються у прогнозуванні реальної лідерської ефективності.
          </p>
          <div className="space-y-4">
            <div className="rounded-xl border border-[#EDEDED] p-6">
              <p className="font-bold text-[#111] mb-2">Інтерв'ю оцінюють впевненість, а не компетентність</p>
              <p className="text-[15px] text-[#444] leading-[1.7]">
                Структуровані чи неструктуровані, інтерв'ю систематично надають перевагу кандидатам, які є
                красномовними, соціально вправними та вміють себе подати. Ці риси слабко корелюють зі
                здатністю керувати командами, впроваджувати зміни або орієнтуватися в складних ситуаціях.
                Результат: упевнені, але неефективні лідери отримують підвищення, тоді як здібні, але
                тихіші люди залишаються непоміченими.
              </p>
            </div>
            <div className="rounded-xl border border-[#EDEDED] p-6">
              <p className="font-bold text-[#111] mb-2">Предметна експертиза не передбачає лідерський успіх</p>
              <p className="text-[15px] text-[#444] leading-[1.7]">
                Найкращий інженер автоматично не стає найкращим менеджером з інжинірингу. Предметна
                експертиза необхідна, але недостатня для лідерства. Навички, потрібні для керівництва
                людьми — адаптивність, системне мислення, здатність досягати результату, ефективна
                комунікація — це абсолютно інші компетенції, які технічний досвід не розвиває за
                замовчуванням.
              </p>
            </div>
            <div className="rounded-xl border border-[#EDEDED] p-6">
              <p className="font-bold text-[#111] mb-2">Асесмент-центри дорогі й повільні</p>
              <p className="text-[15px] text-[#444] leading-[1.7]">
                Традиційні асесмент-центри надають багаті дані, але вимагають кількох днів часу учасників,
                навчених оцінювачів та значного бюджету. Вони непрактичні для оцінювання більш ніж
                кількох кандидатів або співробітників за раз — і просто нежиттєздатні для рутинних
                кадрових рішень.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: What We Measure */}
      <section className="bg-[#f9fafb] border-t border-[#EDEDED]">
        <div className="max-w-[860px] mx-auto px-6 py-16">
          <h2 className="text-[28px] font-extrabold text-[#111] mb-4">Що вимірює G&amp;T Power</h2>
          <p className="text-[17px] text-[#444] leading-[1.8] mb-4">
            G&amp;T Power оцінює чотири компетенції, які дослідження неодноразово визначали як основні
            предиктори лідерської ефективності. Оцінювання охоплює 17 унікальних навичок — 3 з яких є
            крос-компетентнісними "суперздібностями" — і кожна навичка оцінюється тричі в різних ситуаціях
            для забезпечення надійних, узагальнювальних результатів.
          </p>
          <p className="text-[15px] text-[#555] italic mb-10">
            Кожна навичка оцінюється за шкалою 0–10 у чотирьох рівнях ефективності: Прийнятний, Добрий,
            Відмінний та Видатний (топ 3–5%).
          </p>
          <div className="grid sm:grid-cols-2 gap-6">
            <div className="rounded-xl bg-[#f7fdf4] border border-[#c8e6bf] p-6">
              <p className="text-[20px] font-extrabold text-[#308F16] mb-2">Системне мислення</p>
              <p className="text-[15px] text-[#444] leading-[1.7]">
                Бачення загальної картини, розуміння причинно-наслідкових зв'язків та прийняття рішень,
                що враховують всю систему. Лідери з високими балами приймають кращі стратегічні рішення та
                уникають створення нових проблем при вирішенні старих.
              </p>
            </div>
            <div className="rounded-xl bg-[#f7fdf4] border border-[#c8e6bf] p-6">
              <p className="text-[20px] font-extrabold text-[#308F16] mb-2">Здатність досягати результату</p>
              <p className="text-[15px] text-[#444] leading-[1.7]">
                Перетворення планів на дії та досягнення результатів попри перешкоди. Люди з високими
                балами долають складність, підтримують фокус і ведуть свої команди до завершення навіть
                в складних умовах.
              </p>
            </div>
            <div className="rounded-xl bg-[#f7fdf4] border border-[#c8e6bf] p-6">
              <p className="text-[20px] font-extrabold text-[#308F16] mb-2">Ефективна взаємодія з іншими</p>
              <p className="text-[15px] text-[#444] leading-[1.7]">
                Вплив, узгодження та залучення інших через чітку і цілеспрямовану комунікацію. Охоплює
                слухання, надання зворотного зв'язку, подолання розбіжностей та побудову довіри з
                різними стейкхолдерами.
              </p>
            </div>
            <div className="rounded-xl bg-[#f7fdf4] border border-[#c8e6bf] p-6">
              <p className="text-[20px] font-extrabold text-[#308F16] mb-2">Адаптивність</p>
              <p className="text-[15px] text-[#444] leading-[1.7]">
                Оновлення переконань і поведінки у відповідь на нову інформацію, зміни або невдачі. Люди
                з високими балами навчаються швидко, рішуче коригують курс і ведуть свої команди крізь
                невизначеність без втрати імпульсу.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Use Cases */}
      <section className="bg-white border-t border-[#EDEDED]">
        <div className="max-w-[860px] mx-auto px-6 py-16">
          <h2 className="text-[28px] font-extrabold text-[#111] mb-4">Сфери застосування</h2>
          <p className="text-[17px] text-[#444] leading-[1.8] mb-10">
            G&amp;T Power розроблений для повного спектру лідерських кадрових рішень — від первинного
            скринінгу кандидатів до планування розвитку для топ-команд.
          </p>
          <div className="grid sm:grid-cols-2 gap-6">
            <div className="rounded-xl border border-[#EDEDED] p-6">
              <p className="text-[18px] font-bold text-[#111] mb-2">Найм</p>
              <p className="text-[15px] text-[#444] leading-[1.7]">
                Порівнюйте кандидатів за однією об'єктивною шкалою, незалежно від результатів інтерв'ю
                або подачі резюме. Визначайте кандидатів, чий профіль компетенцій відповідає конкретним
                вимогам ролі — не просто тих, хто краще проявив себе на інтерв'ю.
              </p>
            </div>
            <div className="rounded-xl border border-[#EDEDED] p-6">
              <p className="text-[18px] font-bold text-[#111] mb-2">Підвищення</p>
              <p className="text-[15px] text-[#444] leading-[1.7]">
                Визначайте, хто справді готовий взяти на себе більшу лідерську відповідальність. Порівнюйте
                внутрішніх кандидатів із вимогами компетенцій нової ролі — не лише з їхньою ефективністю
                у поточній.
              </p>
            </div>
            <div className="rounded-xl border border-[#EDEDED] p-6">
              <p className="text-[18px] font-bold text-[#111] mb-2">Кадровий резерв</p>
              <p className="text-[15px] text-[#444] leading-[1.7]">
                Систематично виявляйте майбутніх лідерів по всій організації до відкриття вакансій.
                Формуйте кадровий резерв із оціненим та готовим до розвитку персоналом замість того,
                щоб реактивно заповнювати вакансії.
              </p>
            </div>
            <div className="rounded-xl border border-[#EDEDED] p-6">
              <p className="text-[18px] font-bold text-[#111] mb-2">Розвиток</p>
              <p className="text-[15px] text-[#444] leading-[1.7]">
                Точно спрямовуйте коучинг і розвиток на конкретні навички, де кожен лідер має найбільші
                прогалини. Припиніть здогадуватися про пріоритети розвитку — починайте з об'єктивних
                даних, що показують, що саме потрібно розвивати.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: Your Reports */}
      <section className="bg-[#f9fafb] border-t border-[#EDEDED]">
        <div className="max-w-[860px] mx-auto px-6 py-16">
          <h2 className="text-[28px] font-extrabold text-[#111] mb-4">Ваші звіти</h2>
          <p className="text-[17px] text-[#444] leading-[1.8] mb-10">
            Кожне завершене оцінювання генерує набір структурованих звітів, якими ви можете скористатися
            негайно у своїх кадрових рішеннях. Звіти доступні одразу після завершення оцінювання — без
            очікування та ручної обробки.
          </p>
          <div className="space-y-4">
            <div className="rounded-xl border-2 border-[#308F16] p-6">
              <p className="font-bold text-[#111] text-[17px] mb-2">Індивідуальний профіль компетенцій</p>
              <p className="text-[15px] text-[#444] leading-[1.7]">
                Повна розбивка балів людини за всіма чотирма компетенціями та 17 навичками. Кожна навичка
                відображається на шкалі 0–10 з рівнем ефективності (Прийнятний / Добрий / Відмінний /
                Видатний) та наративною інтерпретацією. Це основний документ для індивідуального зворотного
                зв'язку та розмов про розвиток.
              </p>
            </div>
            <div className="rounded-xl border-2 border-[#308F16] p-6">
              <p className="font-bold text-[#111] text-[17px] mb-2">
                Порівняння з видатними виконавцями (топ 3–5%)
              </p>
              <p className="text-[15px] text-[#444] leading-[1.7]">
                Накладіть профіль людини на еталонний профіль топ 3–5% усіх респондентів нормативної бази.
                Це порівняння одразу показує, де людина вже на видатному рівні і де відстань до високої
                ефективності є найбільшою — необхідні дані для пріоритизації розвитку або оцінки готовності
                до старших ролей.
              </p>
            </div>
            <div className="rounded-xl border-2 border-[#308F16] p-6">
              <p className="font-bold text-[#111] text-[17px] mb-2">
                Порівняння з еталонними профілями типів завдань (4 стандартні типи)
              </p>
              <p className="text-[15px] text-[#444] leading-[1.7]">
                G&amp;T Power надає еталонні профілі компетенцій для чотирьох стандартних типів лідерських
                завдань: Підприємницький (створення нових ініціатив), Структурування &amp; Стабілізація
                (побудова процесів і порядку), Зовнішній тиск (досягнення результатів в умовах швидких змін
                або ресурсних обмежень) та Глибокі зміни (трансформація укорінених звичок і культури).
                Порівняйте профіль людини з будь-яким із цих чотирьох еталонних профілів, щоб визначити
                відповідність і прогалини для конкретних типів ролей.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-br from-[#308F16] to-[#63AF4F] text-white border-t border-[#EDEDED]">
        <div className="max-w-[860px] mx-auto px-6 py-20 text-center">
          <h2 className="text-[32px] font-extrabold mb-4">Почніть із безкоштовного демо</h2>
          <p className="text-[18px] opacity-90 mb-10 max-w-[520px] mx-auto">
            Побачте оцінювання та звіти на власні очі. Інтерактивне демо займає кілька хвилин і показує
            саме те, що ви отримаєте.
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
    </main>
  )
}
