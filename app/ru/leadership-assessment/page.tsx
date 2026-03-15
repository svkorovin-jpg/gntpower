import type { Metadata } from "next"
import Link from "next/link"
import AppLink from "../../../components/AppLink"

export const metadata: Metadata = {
  title: "Оценка руководителей — G&T Power",
  description:
    "Объективная оценка лидерских компетенций по методу SJT. Прогнозируйте эффективность руководителей, принимайте обоснованные кадровые решения.",
  alternates: {
    canonical: "https://gntpower.com/ru/leadership-assessment",
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
            Оценка лидерских компетенций
          </p>
          <h1 className="text-[38px] sm:text-[48px] font-extrabold leading-tight mb-6">
            Оценка руководителей: объективные данные для кадровых решений
          </h1>
          <p className="text-[19px] leading-[1.7] opacity-90 max-w-[640px] mb-10">
            G&amp;T Power даёт вам надёжные, научно валидированные баллы по четырём лидерским компетенциям,
            которые предсказывают реальную эффективность — чтобы каждое решение о найме и повышении
            опиралось на данные, а не на интуицию.
          </p>
          <AppLink
            href="https://app.gntpower.com/demo"
            lang="ru"
            className="inline-block bg-white text-[#308F16] font-bold text-[17px] px-8 py-4 rounded-xl hover:bg-[#f0fcea] transition-colors"
          >
            Оценить своих руководителей
          </AppLink>
        </div>
      </section>

      {/* Section 1: The Problem */}
      <section className="bg-white border-t border-[#EDEDED]">
        <div className="max-w-[860px] mx-auto px-6 py-16">
          <h2 className="text-[28px] font-extrabold text-[#111] mb-4">
            Проблема: оценивать руководителей сложно
          </h2>
          <p className="text-[17px] text-[#444] leading-[1.8] mb-8">
            Большинство организаций полагаются на подходы, которые выглядят тщательными, но стабильно
            уступают в прогнозировании реальной лидерской эффективности.
          </p>
          <div className="space-y-4">
            <div className="rounded-xl border border-[#EDEDED] p-6">
              <p className="font-bold text-[#111] mb-2">Интервью оценивают уверенность, а не компетентность</p>
              <p className="text-[15px] text-[#444] leading-[1.7]">
                Структурированные или неструктурированные, интервью систематически отдают предпочтение
                кандидатам, которые красноречивы, социально умелы и умеют себя подать. Эти черты слабо
                коррелируют со способностью управлять командами, внедрять изменения или ориентироваться
                в сложных ситуациях. Результат: уверенные, но неэффективные лидеры получают повышение,
                тогда как способные, но более тихие люди остаются незамеченными.
              </p>
            </div>
            <div className="rounded-xl border border-[#EDEDED] p-6">
              <p className="font-bold text-[#111] mb-2">Предметная экспертиза не предсказывает лидерский успех</p>
              <p className="text-[15px] text-[#444] leading-[1.7]">
                Лучший инженер автоматически не становится лучшим менеджером по инжинирингу. Предметная
                экспертиза необходима, но недостаточна для лидерства. Навыки, нужные для руководства
                людьми — адаптивность, системное мышление, способность достигать результата, эффективная
                коммуникация — это совершенно другие компетенции, которые технический опыт не развивает
                по умолчанию.
              </p>
            </div>
            <div className="rounded-xl border border-[#EDEDED] p-6">
              <p className="font-bold text-[#111] mb-2">Ассессмент-центры дорогие и медленные</p>
              <p className="text-[15px] text-[#444] leading-[1.7]">
                Традиционные ассессмент-центры дают богатые данные, но требуют нескольких дней времени
                участников, обученных оценщиков и значительного бюджета. Они непрактичны для оценки более
                нескольких кандидатов или сотрудников за раз — и просто нежизнеспособны для рутинных
                кадровых решений.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: What We Measure */}
      <section className="bg-[#f9fafb] border-t border-[#EDEDED]">
        <div className="max-w-[860px] mx-auto px-6 py-16">
          <h2 className="text-[28px] font-extrabold text-[#111] mb-4">Что измеряет G&amp;T Power</h2>
          <p className="text-[17px] text-[#444] leading-[1.8] mb-4">
            G&amp;T Power оценивает четыре компетенции, которые исследования неоднократно определяли как
            основные предикторы лидерской эффективности. Оценивание охватывает 17 уникальных навыков — 3
            из которых являются кросс-компетентностными "суперспособностями" — и каждый навык оценивается
            трижды в разных ситуациях для обеспечения надёжных, обобщаемых результатов.
          </p>
          <p className="text-[15px] text-[#555] italic mb-10">
            Каждый навык оценивается по шкале 0–10 в четырёх уровнях эффективности: Приемлемый, Хороший,
            Отличный и Выдающийся (топ 3–5%).
          </p>
          <div className="grid sm:grid-cols-2 gap-6">
            <div className="rounded-xl bg-[#f7fdf4] border border-[#c8e6bf] p-6">
              <p className="text-[20px] font-extrabold text-[#308F16] mb-2">Системное мышление</p>
              <p className="text-[15px] text-[#444] leading-[1.7]">
                Видение общей картины, понимание причинно-следственных связей и принятие решений, учитывающих
                всю систему. Лидеры с высокими баллами принимают лучшие стратегические решения и избегают
                создания новых проблем при решении старых.
              </p>
            </div>
            <div className="rounded-xl bg-[#f7fdf4] border border-[#c8e6bf] p-6">
              <p className="text-[20px] font-extrabold text-[#308F16] mb-2">Способность достигать результата</p>
              <p className="text-[15px] text-[#444] leading-[1.7]">
                Превращение планов в действия и достижение результатов несмотря на препятствия. Люди с
                высокими баллами преодолевают сложность, поддерживают фокус и ведут свои команды к
                завершению даже в трудных условиях.
              </p>
            </div>
            <div className="rounded-xl bg-[#f7fdf4] border border-[#c8e6bf] p-6">
              <p className="text-[20px] font-extrabold text-[#308F16] mb-2">Эффективное взаимодействие с людьми</p>
              <p className="text-[15px] text-[#444] leading-[1.7]">
                Влияние, согласование и вовлечение других через чёткую и целенаправленную коммуникацию.
                Охватывает слушание, обратную связь, преодоление разногласий и построение доверия с разными
                стейкхолдерами.
              </p>
            </div>
            <div className="rounded-xl bg-[#f7fdf4] border border-[#c8e6bf] p-6">
              <p className="text-[20px] font-extrabold text-[#308F16] mb-2">Адаптивность</p>
              <p className="text-[15px] text-[#444] leading-[1.7]">
                Обновление убеждений и поведения в ответ на новую информацию, изменения или неудачи. Люди
                с высокими баллами учатся быстро, решительно корректируют курс и ведут свои команды через
                неопределённость без потери импульса.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Use Cases */}
      <section className="bg-white border-t border-[#EDEDED]">
        <div className="max-w-[860px] mx-auto px-6 py-16">
          <h2 className="text-[28px] font-extrabold text-[#111] mb-4">Области применения</h2>
          <p className="text-[17px] text-[#444] leading-[1.8] mb-10">
            G&amp;T Power разработан для полного спектра лидерских кадровых решений — от первичного скрининга
            кандидатов до планирования развития для топ-команд.
          </p>
          <div className="grid sm:grid-cols-2 gap-6">
            <div className="rounded-xl border border-[#EDEDED] p-6">
              <p className="text-[18px] font-bold text-[#111] mb-2">Найм</p>
              <p className="text-[15px] text-[#444] leading-[1.7]">
                Сравнивайте кандидатов по единой объективной шкале, независимо от результатов интервью или
                подачи резюме. Определяйте кандидатов, чей профиль компетенций соответствует конкретным
                требованиям роли — не просто тех, кто лучше проявил себя на интервью.
              </p>
            </div>
            <div className="rounded-xl border border-[#EDEDED] p-6">
              <p className="text-[18px] font-bold text-[#111] mb-2">Повышение</p>
              <p className="text-[15px] text-[#444] leading-[1.7]">
                Определяйте, кто действительно готов взять на себя большую лидерскую ответственность.
                Сравнивайте внутренних кандидатов с требованиями компетенций новой роли — не только с
                их эффективностью в текущей.
              </p>
            </div>
            <div className="rounded-xl border border-[#EDEDED] p-6">
              <p className="text-[18px] font-bold text-[#111] mb-2">Кадровый резерв</p>
              <p className="text-[15px] text-[#444] leading-[1.7]">
                Систематически выявляйте будущих лидеров по всей организации до открытия вакансий. Формируйте
                кадровый резерв из оценённых и готовых к развитию людей вместо того, чтобы реактивно
                заполнять вакансии.
              </p>
            </div>
            <div className="rounded-xl border border-[#EDEDED] p-6">
              <p className="text-[18px] font-bold text-[#111] mb-2">Развитие</p>
              <p className="text-[15px] text-[#444] leading-[1.7]">
                Точно направляйте коучинг и развитие на конкретные навыки, где у каждого лидера наибольшие
                пробелы. Перестаньте угадывать приоритеты развития — начинайте с объективных данных, которые
                показывают, что именно нужно развивать.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: Your Reports */}
      <section className="bg-[#f9fafb] border-t border-[#EDEDED]">
        <div className="max-w-[860px] mx-auto px-6 py-16">
          <h2 className="text-[28px] font-extrabold text-[#111] mb-4">Ваши отчёты</h2>
          <p className="text-[17px] text-[#444] leading-[1.8] mb-10">
            Каждая завершённая оценка генерирует набор структурированных отчётов, которыми вы можете
            воспользоваться немедленно в своих кадровых решениях. Отчёты доступны сразу после завершения
            оценивания — без ожидания и ручной обработки.
          </p>
          <div className="space-y-4">
            <div className="rounded-xl border-2 border-[#308F16] p-6">
              <p className="font-bold text-[#111] text-[17px] mb-2">Индивидуальный профиль компетенций</p>
              <p className="text-[15px] text-[#444] leading-[1.7]">
                Полная разбивка баллов человека по всем четырём компетенциям и 17 навыкам. Каждый навык
                отображается на шкале 0–10 с уровнем эффективности (Приемлемый / Хороший / Отличный /
                Выдающийся) и нарративной интерпретацией. Это основной документ для индивидуальной обратной
                связи и разговоров о развитии.
              </p>
            </div>
            <div className="rounded-xl border-2 border-[#308F16] p-6">
              <p className="font-bold text-[#111] text-[17px] mb-2">
                Сравнение с выдающимися исполнителями (топ 3–5%)
              </p>
              <p className="text-[15px] text-[#444] leading-[1.7]">
                Наложите профиль человека на эталонный профиль топ 3–5% всех респондентов нормативной базы.
                Это сравнение сразу показывает, где человек уже на выдающемся уровне и где расстояние до
                высокой эффективности наибольшее — необходимые данные для приоритизации развития или оценки
                готовности к старшим ролям.
              </p>
            </div>
            <div className="rounded-xl border-2 border-[#308F16] p-6">
              <p className="font-bold text-[#111] text-[17px] mb-2">
                Сравнение с эталонными профилями типов задач (4 стандартных типа)
              </p>
              <p className="text-[15px] text-[#444] leading-[1.7]">
                G&amp;T Power предоставляет эталонные профили компетенций для четырёх стандартных типов
                лидерских задач: Предпринимательский (создание новых инициатив), Структурирование &amp;
                Стабилизация (построение процессов и порядка), Внешнее давление (достижение результатов
                в условиях быстрых изменений или ресурсных ограничений) и Глубокие изменения (трансформация
                укоренившихся привычек и культуры). Сравнивайте профиль человека с любым из этих четырёх
                эталонных профилей для определения соответствия и пробелов для конкретных типов ролей.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-br from-[#308F16] to-[#63AF4F] text-white border-t border-[#EDEDED]">
        <div className="max-w-[860px] mx-auto px-6 py-20 text-center">
          <h2 className="text-[32px] font-extrabold mb-4">Начните с бесплатного демо</h2>
          <p className="text-[18px] opacity-90 mb-10 max-w-[520px] mx-auto">
            Увидьте оценивание и отчёты своими глазами. Интерактивное демо займёт несколько минут и покажет
            именно то, что вы получите.
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
