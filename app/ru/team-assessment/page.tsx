import type { Metadata } from "next"
import Link from "next/link"
import AppLink from "../../../components/AppLink"

export const metadata: Metadata = {
  title: "Оценка команды — G&T Power",
  description:
    "Комплексная оценка soft skills команды. Визуализируйте профиль компетенций вашей команды, подбирайте людей под нужные роли и определяйте приоритеты развития.",
  alternates: {
    canonical: "https://gntpower.com/ru/team-assessment",
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
            Оценка soft skills команды
          </p>
          <h1 className="text-[38px] sm:text-[48px] font-extrabold leading-tight mb-6">
            Оценка команды: сформируйте правильную команду для любой задачи
          </h1>
          <p className="text-[19px] leading-[1.7] opacity-90 max-w-[640px] mb-10">
            G&amp;T Power даёт вам полное, объективное представление о профиле компетенций всей команды —
            чтобы подбирать людей под нужные роли, выявлять коллективные пробелы и развивать команду
            на основе данных, а не предположений.
          </p>
          <AppLink
            href="https://app.gntpower.com/demo"
            lang="ru"
            className="inline-block bg-white text-[#308F16] font-bold text-[17px] px-8 py-4 rounded-xl hover:bg-[#f0fcea] transition-colors"
          >
            Оценить свою команду
          </AppLink>
        </div>
      </section>

      {/* Section 1: The Problem */}
      <section className="bg-white border-t border-[#EDEDED]">
        <div className="max-w-[860px] mx-auto px-6 py-16">
          <h2 className="text-[28px] font-extrabold text-[#111] mb-4">
            Проблема: нельзя управлять тем, что не измерено
          </h2>
          <p className="text-[17px] text-[#444] leading-[1.8] mb-8">
            Большинство команд работают со значительным слепым пятном: никто не имеет чёткого, объективного
            представления о том, в чём каждый человек действительно силён — и где находятся коллективные
            слабости.
          </p>
          <div className="space-y-4">
            <div className="rounded-xl border border-[#EDEDED] p-6">
              <p className="font-bold text-[#111] mb-2">Назначение ролей на основе интуиции</p>
              <p className="text-[15px] text-[#444] leading-[1.7]">
                Менеджеры назначают людей на проекты и роли на основе резюме, впечатлений от интервью и
                личного знакомства. Это слабые заменители того, что действительно важно: имеет ли человек
                правильный профиль компетенций для требований конкретной роли. Результат — несоответствия,
                которые вредят и эффективности, и моральному духу.
              </p>
            </div>
            <div className="rounded-xl border border-[#EDEDED] p-6">
              <p className="font-bold text-[#111] mb-2">Пробелы в soft skills заметны лишь когда уже поздно</p>
              <p className="text-[15px] text-[#444] leading-[1.7]">
                Команды обнаруживают реальные пробелы компетенций через неудачи — сорванный дедлайн,
                провалившаяся инициатива изменений, коммуникационный сбой, разрушивший проект. К тому
                моменту, когда пробел становится видимым, ущерб уже нанесён. Проактивная оценка выявляет
                пробелы до того, как они становятся дорогостоящими проблемами.
              </p>
            </div>
            <div className="rounded-xl border border-[#EDEDED] p-6">
              <p className="font-bold text-[#111] mb-2">Нет объективной картины состава команды</p>
              <p className="text-[15px] text-[#444] leading-[1.7]">
                Без объективных данных бюджеты на развитие распределяются равномерно или по старшинству,
                а не по реальным потребностям. Ресурсы коучинга идут людям, которые уже сильны в какой-то
                области, тогда как критические пробелы в других местах остаются нерешёнными — потому что
                никто не знает об их существовании.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: The Team Report */}
      <section className="bg-[#f9fafb] border-t border-[#EDEDED]">
        <div className="max-w-[860px] mx-auto px-6 py-16">
          <h2 className="text-[28px] font-extrabold text-[#111] mb-4">Командный отчёт</h2>
          <p className="text-[17px] text-[#444] leading-[1.8] mb-10">
            Командный отчёт G&amp;T Power агрегирует индивидуальные результаты оценивания в единое,
            унифицированное представление компетентностного ландшафта всей команды. Это наиболее
            эффективный способ понять, на что способна ваша команда — и где она уязвима.
          </p>
          <div className="grid sm:grid-cols-2 gap-6">
            <div className="rounded-xl bg-[#f7fdf4] border border-[#c8e6bf] p-6">
              <p className="font-bold text-[#111] mb-2">17 навыков. Все члены команды. Один график.</p>
              <p className="text-[15px] text-[#444] leading-[1.7]">
                Командный отчёт отображает баллы каждого члена команды по всем 17 навыкам на единой
                визуализации. Вы получаете мгновенную, всестороннюю картину того, где команда сильна и
                где существуют коллективные пробелы — без необходимости просматривать индивидуальные
                отчёты по одному.
              </p>
            </div>
            <div className="rounded-xl bg-[#f7fdf4] border border-[#c8e6bf] p-6">
              <p className="font-bold text-[#111] mb-2">Мгновенный анализ сильных сторон и пробелов команды</p>
              <p className="text-[15px] text-[#444] leading-[1.7]">
                Определяйте навыки, где вся команда имеет высокие баллы (ваши коллективные сильные стороны),
                и навыки, где средний показатель команды низкий (системные пробелы). Системные пробелы —
                это места концентрации рисков, требующие немедленного внимания в планировании развития.
              </p>
            </div>
            <div className="rounded-xl bg-[#f7fdf4] border border-[#c8e6bf] p-6">
              <p className="font-bold text-[#111] mb-2">Сравнение членов команды</p>
              <p className="text-[15px] text-[#444] leading-[1.7]">
                Сравнивайте любых двух или более членов команды напрямую по любому навыку или компетенции.
                Используйте это для объективных решений о распределении ролей, составе проектных команд и
                планировании преемственности — с данными, которые все вовлечённые могут видеть и которым
                доверять.
              </p>
            </div>
            <div className="rounded-xl bg-[#f7fdf4] border border-[#c8e6bf] p-6">
              <p className="font-bold text-[#111] mb-2">Одновременная оценка нескольких уровней</p>
              <p className="text-[15px] text-[#444] leading-[1.7]">
                Оценивайте топ-менеджмент, средний менеджмент, специалистов и кандидатов кадрового резерва
                одновременно, с минимальными затратами. G&amp;T Power масштабируется от нескольких человек
                до сотен — без логистической сложности традиционных методов оценивания.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Referent Profiles */}
      <section className="bg-white border-t border-[#EDEDED]">
        <div className="max-w-[860px] mx-auto px-6 py-16">
          <h2 className="text-[28px] font-extrabold text-[#111] mb-4">
            Эталонные профили: подберите команду под задачу
          </h2>
          <p className="text-[17px] text-[#444] leading-[1.8] mb-10">
            Разные вызовы требуют разных профилей компетенций. G&amp;T Power предоставляет четыре научно
            выведенных эталонных профиля, описывающих идеальную конфигурацию компетенций для каждого из
            четырёх наиболее распространённых типов лидерских задач. Используйте их для назначения нужных
            людей на нужные вызовы — и для понимания того, где индивидуальные или коллективные пробелы
            могут стать проблемой.
          </p>
          <div className="grid sm:grid-cols-2 gap-6">
            <div className="rounded-xl border-2 border-[#308F16] p-6">
              <p className="text-[18px] font-bold text-[#111] mb-1">1. Предпринимательский</p>
              <p className="text-[13px] text-[#308F16] font-semibold uppercase tracking-wide mb-3">Создание новых инициатив</p>
              <p className="text-[15px] text-[#444] leading-[1.7]">
                Запуск новых продуктов, бизнес-единиц или стратегических инициатив с нуля. Требует
                высокой адаптивности, системного мышления и сильной способности к выполнению для перехода
                от идеи к результату в условиях максимальной неопределённости.
              </p>
            </div>
            <div className="rounded-xl border-2 border-[#308F16] p-6">
              <p className="text-[18px] font-bold text-[#111] mb-1">2. Структурирование и стабилизация</p>
              <p className="text-[13px] text-[#308F16] font-semibold uppercase tracking-wide mb-3">Построение процессов и порядка</p>
              <p className="text-[15px] text-[#444] leading-[1.7]">
                Взять хаотичную или быстро выросшую организацию и внедрить процессы, системы и структуры,
                необходимые для устойчивого масштабирования. Требует иного баланса компетенций, чем
                предпринимательская работа — и раннее выявление несоответствий предотвращает дорогостоящие
                ошибки.
              </p>
            </div>
            <div className="rounded-xl border-2 border-[#308F16] p-6">
              <p className="text-[18px] font-bold text-[#111] mb-1">3. Внешнее давление</p>
              <p className="text-[13px] text-[#308F16] font-semibold uppercase tracking-wide mb-3">Быстрые изменения или ресурсные ограничения</p>
              <p className="text-[15px] text-[#444] leading-[1.7]">
                Достижение результатов в условиях внешнего давления — конкурентные угрозы, сокращение
                бюджета, кризисы или вынужденные быстрые изменения. Критически важны высокая способность
                к выполнению и адаптивность; коммуникация должна быть особенно точной при высоких ставках.
              </p>
            </div>
            <div className="rounded-xl border-2 border-[#308F16] p-6">
              <p className="text-[18px] font-bold text-[#111] mb-1">4. Глубокие изменения</p>
              <p className="text-[13px] text-[#308F16] font-semibold uppercase tracking-wide mb-3">Трансформация укоренившихся привычек</p>
              <p className="text-[15px] text-[#444] leading-[1.7]">
                Трансформация организационной культуры, укоренившихся рабочих паттернов или глубоко
                укоренившихся убеждений. Самый требовательный тип задач, требующий исключительной
                коммуникации, адаптивности и системного понимания для преодоления сопротивления и
                поддержания импульса на протяжении длительного времени.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: Assessment at Scale */}
      <section className="bg-[#f9fafb] border-t border-[#EDEDED]">
        <div className="max-w-[860px] mx-auto px-6 py-16">
          <h2 className="text-[28px] font-extrabold text-[#111] mb-4">Оценивание в масштабе</h2>
          <p className="text-[17px] text-[#444] leading-[1.8] mb-10">
            G&amp;T Power разработан для практического использования в организациях любого размера — от
            небольшой команды руководителей до целого предприятия. Между масштабом и качеством данных нет
            компромисса.
          </p>
          <div className="grid sm:grid-cols-2 gap-6">
            <div className="rounded-xl border border-[#EDEDED] p-6">
              <p className="font-bold text-[#111] mb-2">Оценивайте всю организацию одновременно</p>
              <p className="text-[15px] text-[#444] leading-[1.7]">
                Отправляйте оценивания всей организации сразу. Нет необходимости разбивать на группы или
                составлять расписание — все могут проходить тест одновременно, в удобное для них время.
              </p>
            </div>
            <div className="rounded-xl border border-[#EDEDED] p-6">
              <p className="font-bold text-[#111] mb-2">Любой уровень, любое количество людей</p>
              <p className="text-[15px] text-[#444] leading-[1.7]">
                Оценивайте членов совета директоров и тимлидов одним и тем же инструментом. Оценивание
                калибруется по нормативной базе данных, поэтому результаты сопоставимы между уровнями,
                ролями и функциями.
              </p>
            </div>
            <div className="rounded-xl border border-[#EDEDED] p-6">
              <p className="font-bold text-[#111] mb-2">Доступно с любого устройства</p>
              <p className="text-[15px] text-[#444] leading-[1.7]">
                Оценивание работает на десктопе, планшете и мобильном — без загрузки приложения, без
                специальной настройки. Участники проходят его там и тогда, когда им удобно.
              </p>
            </div>
            <div className="rounded-xl border border-[#EDEDED] p-6">
              <p className="font-bold text-[#111] mb-2">Результаты доступны немедленно</p>
              <p className="text-[15px] text-[#444] leading-[1.7]">
                Отчёты генерируются автоматически сразу после завершения оценивания каждым участником.
                Без ожидания пакетной обработки. Без ручного подсчёта баллов. Индивидуальные и командные
                отчёты доступны в момент, когда они вам нужны.
              </p>
            </div>
          </div>
          <div className="mt-8 rounded-xl bg-[#f7fdf4] border border-[#c8e6bf] p-6">
            <p className="text-[15px] text-[#444] leading-[1.7]">
              <strong>О конфиденциальности данных:</strong> G&amp;T Power хранит только анонимизированные
              тестовые баллы в AWS. Никакие личные данные не связаны с результатами в хранилище, а отчёты
              не хранятся на платформе — обеспечивая полную конфиденциальность для участников.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-br from-[#308F16] to-[#63AF4F] text-white border-t border-[#EDEDED]">
        <div className="max-w-[860px] mx-auto px-6 py-20 text-center">
          <h2 className="text-[32px] font-extrabold mb-4">Узнайте, на что способна ваша команда</h2>
          <p className="text-[18px] opacity-90 mb-10 max-w-[520px] mx-auto">
            Попробуйте интерактивное демо, чтобы лично ощутить оценивание и просмотреть командный отчёт.
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

      {/* Related articles */}
      <section className="py-12 px-6 bg-white border-t border-[#EDEDED]">
        <div className="max-w-[860px] mx-auto">
          <h2 className="text-[20px] font-bold text-[#111] mb-6">Читайте также</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              { url: "/ru/kak-ocenit-soft-skills-komandy", label: "Как оценить soft skills команды" },
              { url: "/ru/assessment-center-vs-online-ocenka", label: "Assessment center или онлайн-оценка" },
              { url: "/ru/primer-otcheta-soft-skills", label: "Пример отчёта soft skills" },
              { url: "/ru/chto-takoe-sjt", label: "Что такое SJT" },
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
