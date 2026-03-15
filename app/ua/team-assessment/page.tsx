import type { Metadata } from "next"
import Link from "next/link"
import AppLink from "../../../components/AppLink"

export const metadata: Metadata = {
  title: "Оцінка команди — G&T Power",
  description:
    "Комплексна оцінка soft skills команди. Візуалізуйте профіль компетенцій вашої команди, підбирайте людей під відповідні ролі та визначайте пріоритети розвитку.",
  alternates: {
    canonical: "https://gntpower.com/ua/team-assessment",
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
            Оцінка soft skills команди
          </p>
          <h1 className="text-[38px] sm:text-[48px] font-extrabold leading-tight mb-6">
            Оцінка команди: зберіть правильну команду для кожного завдання
          </h1>
          <p className="text-[19px] leading-[1.7] opacity-90 max-w-[640px] mb-10">
            G&amp;T Power дає вам повне, об'єктивне уявлення про профіль компетенцій усієї команди —
            щоб підбирати людей під правильні ролі, виявляти колективні прогалини та розвивати команду
            на основі даних, а не припущень.
          </p>
          <AppLink
            href="https://app.gntpower.com/demo"
            lang="ua"
            className="inline-block bg-white text-[#308F16] font-bold text-[17px] px-8 py-4 rounded-xl hover:bg-[#f0fcea] transition-colors"
          >
            Оцінити свою команду
          </AppLink>
        </div>
      </section>

      {/* Section 1: The Problem */}
      <section className="bg-white border-t border-[#EDEDED]">
        <div className="max-w-[860px] mx-auto px-6 py-16">
          <h2 className="text-[28px] font-extrabold text-[#111] mb-4">
            Проблема: не можна управляти тим, що не виміряно
          </h2>
          <p className="text-[17px] text-[#444] leading-[1.8] mb-8">
            Більшість команд працюють із суттєвою сліпою зоною: ніхто не має чіткого, об'єктивного
            уявлення про те, в чому кожна людина справді сильна — і де знаходяться колективні слабкості.
          </p>
          <div className="space-y-4">
            <div className="rounded-xl border border-[#EDEDED] p-6">
              <p className="font-bold text-[#111] mb-2">Призначення ролей на основі інтуїції</p>
              <p className="text-[15px] text-[#444] leading-[1.7]">
                Менеджери призначають людей на проекти та ролі на основі резюме, вражень від інтерв'ю та
                особистого знайомства. Це слабкі замінники того, що насправді важливо: чи має людина
                правильний профіль компетенцій для вимог конкретної ролі. Результат — розбіжності, що
                шкодять і ефективності, і моральному духу.
              </p>
            </div>
            <div className="rounded-xl border border-[#EDEDED] p-6">
              <p className="font-bold text-[#111] mb-2">Прогалини в soft skills помітні лише коли вже пізно</p>
              <p className="text-[15px] text-[#444] leading-[1.7]">
                Команди дізнаються про реальні прогалини компетенцій через невдачі — зірваний дедлайн,
                провалена ініціатива змін, комунікаційний збій, що зруйнував проект. На момент, коли
                прогалина стає видимою, збиток вже завдано. Проактивна оцінка виявляє прогалини до того,
                як вони стануть дорогими проблемами.
              </p>
            </div>
            <div className="rounded-xl border border-[#EDEDED] p-6">
              <p className="font-bold text-[#111] mb-2">Відсутність об'єктивного уявлення про склад команди</p>
              <p className="text-[15px] text-[#444] leading-[1.7]">
                Без об'єктивних даних бюджети на розвиток розподіляються рівномірно або за старшинством,
                а не за реальними потребами. Ресурси коучингу йдуть людям, які вже сильні у якійсь
                сфері, тоді як критичні прогалини в інших місцях залишаються невирішеними — бо ніхто
                не знає про їх існування.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: The Team Report */}
      <section className="bg-[#f9fafb] border-t border-[#EDEDED]">
        <div className="max-w-[860px] mx-auto px-6 py-16">
          <h2 className="text-[28px] font-extrabold text-[#111] mb-4">Командний звіт</h2>
          <p className="text-[17px] text-[#444] leading-[1.8] mb-10">
            Командний звіт G&amp;T Power агрегує індивідуальні результати оцінювань в єдиний, уніфікований
            вигляд компетентнісного ландшафту всієї команди. Це найефективніший спосіб зрозуміти, на що
            здатна ваша команда — і де вона є вразливою.
          </p>
          <div className="grid sm:grid-cols-2 gap-6">
            <div className="rounded-xl bg-[#f7fdf4] border border-[#c8e6bf] p-6">
              <p className="font-bold text-[#111] mb-2">17 навичок. Всі члени команди. Один графік.</p>
              <p className="text-[15px] text-[#444] leading-[1.7]">
                Командний звіт відображає бали кожного члена команди за всіма 17 навичками на єдиній
                візуалізації. Ви отримуєте миттєву, вичерпну картину того, де команда сильна і де
                існують колективні прогалини — не переглядаючи індивідуальні звіти один за одним.
              </p>
            </div>
            <div className="rounded-xl bg-[#f7fdf4] border border-[#c8e6bf] p-6">
              <p className="font-bold text-[#111] mb-2">Миттєвий аналіз сильних сторін і прогалин команди</p>
              <p className="text-[15px] text-[#444] leading-[1.7]">
                Визначайте навички, де вся команда має високі бали (ваші колективні сильні сторони), та
                навички, де середній показник команди є низьким (системні прогалини). Системні прогалини —
                це місця концентрації ризиків, які потребують негайної уваги в плануванні розвитку.
              </p>
            </div>
            <div className="rounded-xl bg-[#f7fdf4] border border-[#c8e6bf] p-6">
              <p className="font-bold text-[#111] mb-2">Порівняння членів команди</p>
              <p className="text-[15px] text-[#444] leading-[1.7]">
                Порівнюйте будь-яких двох або більше членів команди безпосередньо за будь-якою навичкою або
                компетенцією. Використовуйте це для об'єктивних рішень щодо розподілу ролей, складу
                проектних команд і планування наступництва — з даними, які всі залучені можуть бачити
                і яким довіряти.
              </p>
            </div>
            <div className="rounded-xl bg-[#f7fdf4] border border-[#c8e6bf] p-6">
              <p className="font-bold text-[#111] mb-2">Одночасна оцінка кількох рівнів</p>
              <p className="text-[15px] text-[#444] leading-[1.7]">
                Оцінюйте топ-менеджмент, середній менеджмент, спеціалістів та кандидатів кадрового резерву
                одночасно, з мінімальними витратами. G&amp;T Power масштабується від кількох людей до
                сотень — без логістичної складності традиційних методів оцінювання.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Referent Profiles */}
      <section className="bg-white border-t border-[#EDEDED]">
        <div className="max-w-[860px] mx-auto px-6 py-16">
          <h2 className="text-[28px] font-extrabold text-[#111] mb-4">
            Еталонні профілі: підберіть команду до завдання
          </h2>
          <p className="text-[17px] text-[#444] leading-[1.8] mb-10">
            Різні виклики вимагають різних профілів компетенцій. G&amp;T Power надає чотири науково
            виведених еталонних профілі, що описують ідеальну конфігурацію компетенцій для кожного з
            чотирьох найпоширеніших типів лідерських завдань. Використовуйте їх для призначення правильних
            людей на правильні виклики — і для розуміння того, де індивідуальні або колективні прогалини
            можуть стати проблемою.
          </p>
          <div className="grid sm:grid-cols-2 gap-6">
            <div className="rounded-xl border-2 border-[#308F16] p-6">
              <p className="text-[18px] font-bold text-[#111] mb-1">1. Підприємницький</p>
              <p className="text-[13px] text-[#308F16] font-semibold uppercase tracking-wide mb-3">Створення нових ініціатив</p>
              <p className="text-[15px] text-[#444] leading-[1.7]">
                Запуск нових продуктів, бізнес-одиниць або стратегічних ініціатив з нуля. Вимагає
                високої адаптивності, системного мислення та сильної здатності до виконання для переходу
                від ідеї до результату в умовах максимальної невизначеності.
              </p>
            </div>
            <div className="rounded-xl border-2 border-[#308F16] p-6">
              <p className="text-[18px] font-bold text-[#111] mb-1">2. Структурування та стабілізація</p>
              <p className="text-[13px] text-[#308F16] font-semibold uppercase tracking-wide mb-3">Побудова процесів і порядку</p>
              <p className="text-[15px] text-[#444] leading-[1.7]">
                Взяти хаотичну або швидко зрослу організацію і впровадити процеси, системи та структури,
                необхідні для стійкого масштабування. Вимагає іншого балансу компетенцій, ніж
                підприємницька робота — і раннє виявлення невідповідностей запобігає дорогим помилкам.
              </p>
            </div>
            <div className="rounded-xl border-2 border-[#308F16] p-6">
              <p className="text-[18px] font-bold text-[#111] mb-1">3. Зовнішній тиск</p>
              <p className="text-[13px] text-[#308F16] font-semibold uppercase tracking-wide mb-3">Швидкі зміни або ресурсні обмеження</p>
              <p className="text-[15px] text-[#444] leading-[1.7]">
                Досягнення результатів в умовах зовнішнього тиску — конкурентні загрози, скорочення
                бюджету, кризи або вимушені швидкі зміни. Критично важлива висока здатність до виконання
                та адаптивність; комунікація має бути особливо точною при високих ставках.
              </p>
            </div>
            <div className="rounded-xl border-2 border-[#308F16] p-6">
              <p className="text-[18px] font-bold text-[#111] mb-1">4. Глибокі зміни</p>
              <p className="text-[13px] text-[#308F16] font-semibold uppercase tracking-wide mb-3">Трансформація укорінених звичок</p>
              <p className="text-[15px] text-[#444] leading-[1.7]">
                Трансформація організаційної культури, укорінених робочих патернів або глибоко вкорінених
                переконань. Найвибагливіший тип завдань, що вимагає виняткової комунікації, адаптивності
                та системного розуміння для подолання опору та підтримання імпульсу протягом тривалого часу.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: Assessment at Scale */}
      <section className="bg-[#f9fafb] border-t border-[#EDEDED]">
        <div className="max-w-[860px] mx-auto px-6 py-16">
          <h2 className="text-[28px] font-extrabold text-[#111] mb-4">Оцінювання у масштабі</h2>
          <p className="text-[17px] text-[#444] leading-[1.8] mb-10">
            G&amp;T Power розроблений для практичного використання в організаціях будь-якого розміру —
            від невеликої команди керівників до цілого підприємства. Між масштабом і якістю даних немає
            компромісу.
          </p>
          <div className="grid sm:grid-cols-2 gap-6">
            <div className="rounded-xl border border-[#EDEDED] p-6">
              <p className="font-bold text-[#111] mb-2">Оцінюйте всю організацію одночасно</p>
              <p className="text-[15px] text-[#444] leading-[1.7]">
                Надсилайте оцінювання всій організації одразу. Немає потреби розбивати на групи або
                складати розклад — всі можуть проходити тест одночасно, у зручний для себе час.
              </p>
            </div>
            <div className="rounded-xl border border-[#EDEDED] p-6">
              <p className="font-bold text-[#111] mb-2">Будь-який рівень, будь-яка кількість людей</p>
              <p className="text-[15px] text-[#444] leading-[1.7]">
                Оцінюйте членів ради директорів і тімлідів одним і тим самим інструментом. Оцінювання
                калібрується за нормативною базою даних, тому результати порівнянні між рівнями, ролями
                та функціями.
              </p>
            </div>
            <div className="rounded-xl border border-[#EDEDED] p-6">
              <p className="font-bold text-[#111] mb-2">Доступно з будь-якого пристрою</p>
              <p className="text-[15px] text-[#444] leading-[1.7]">
                Оцінювання працює на десктопі, планшеті та мобільному — без завантаження додатку, без
                спеціального налаштування. Учасники проходять його там і тоді, коли їм зручно.
              </p>
            </div>
            <div className="rounded-xl border border-[#EDEDED] p-6">
              <p className="font-bold text-[#111] mb-2">Результати доступні негайно</p>
              <p className="text-[15px] text-[#444] leading-[1.7]">
                Звіти генеруються автоматично одразу після завершення оцінювання кожним учасником.
                Без очікування пакетної обробки. Без ручного підрахунку балів. Індивідуальні та командні
                звіти доступні в момент, коли вони вам потрібні.
              </p>
            </div>
          </div>
          <div className="mt-8 rounded-xl bg-[#f7fdf4] border border-[#c8e6bf] p-6">
            <p className="text-[15px] text-[#444] leading-[1.7]">
              <strong>Щодо конфіденційності даних:</strong> G&amp;T Power зберігає лише анонімізовані
              тестові бали в AWS. Жодні особисті дані не пов'язані з результатами в зберіганні, а звіти
              не зберігаються на платформі — забезпечуючи повну конфіденційність для учасників.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-br from-[#308F16] to-[#63AF4F] text-white border-t border-[#EDEDED]">
        <div className="max-w-[860px] mx-auto px-6 py-20 text-center">
          <h2 className="text-[32px] font-extrabold mb-4">Побачте, на що здатна ваша команда</h2>
          <p className="text-[18px] opacity-90 mb-10 max-w-[520px] mx-auto">
            Спробуйте інтерактивне демо, щоб особисто відчути оцінювання та переглянути командний звіт.
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
              { url: "/ua/yak-otsinyty-soft-skills-komandy", label: "Як оцінити soft skills команди" },
              { url: "/ua/assessment-center-vs-online-otsinka", label: "Assessment center чи онлайн-оцінка" },
              { url: "/ua/pryklad-zvitu-soft-skills", label: "Приклад звіту soft skills" },
              { url: "/ua/shcho-take-sjt", label: "Що таке SJT" },
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
