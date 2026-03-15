import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Політика конфіденційності — G&T Power",
  robots: { index: false },
}

export default function PrivacyPage() {
  return (
    <main className="max-w-[760px] mx-auto px-6 py-16 text-[#222] leading-relaxed">
      <Link href="/ua" className="text-[#308F16] text-[14px] hover:underline">← Назад</Link>

      <h1 className="text-[32px] font-extrabold mt-8 mb-2">Політика конфіденційності</h1>
      <p className="text-[#888] text-[14px] mb-10">Останнє оновлення: березень 2026</p>

      <section className="mb-8">
        <h2 className="text-[20px] font-bold mb-3">1. Хто ми</h2>
        <p>
          Цей вебсайт управляється компанією SoftPotential OÜ (реєстраційний номер 14565562), зареєстрованою за адресою Kakumäe tee 226, Haabersti, Tallinn 13516, Естонія. Ми є оператором персональних даних, зібраних через цей сайт. З питань конфіденційності звертайтесь до нас за адресою{" "}
          <a href="mailto:info@gntpower.com" className="text-[#308F16] hover:underline">info@gntpower.com</a>.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-[20px] font-bold mb-3">2. Які дані ми збираємо</h2>
        <p className="mb-3"><strong>Форма зворотного зв'язку:</strong> ім'я, адреса електронної пошти та текст повідомлення, які ви вводите добровільно.</p>
        <p className="mb-3"><strong>Аналітика:</strong> за наявності вашої згоди ми збираємо анонімізовані дані про використання сайту через Google Analytics 4 (перегляди сторінок, тривалість сесії, країна, тип пристрою). Персональні дані через аналітику не збираються.</p>
        <p><strong>Системні журнали:</strong> IP-адреса, тип браузера та джерело переходу автоматично обробляються нашим хостинг-провайдером (Vercel) з метою безпеки та продуктивності.</p>
      </section>

      <section className="mb-8">
        <h2 className="text-[20px] font-bold mb-3">3. Правова підстава обробки</h2>
        <p className="mb-3"><strong>Форма зворотного зв'язку:</strong> ст. 6(1)(b) GDPR — обробка необхідна для відповіді на ваш запит; та ст. 6(1)(f) GDPR — наш законний інтерес в обробці ділових запитів.</p>
        <p className="mb-3"><strong>Аналітика:</strong> ст. 6(1)(a) GDPR — ваша явна згода, яку ви можете відкликати будь-коли, очистивши локальне сховище браузера.</p>
        <p><strong>Системні журнали:</strong> ст. 6(1)(f) GDPR — законний інтерес у підтриманні безпеки платформи.</p>
      </section>

      <section className="mb-8">
        <h2 className="text-[20px] font-bold mb-3">4. Як ми використовуємо ваші дані</h2>
        <p className="mb-2">Ми використовуємо зібрані дані для таких цілей:</p>
        <ul className="list-disc pl-6 space-y-1">
          <li>Відповіді на запити, надіслані через форму зворотного зв'язку.</li>
          <li>Аналіз показників використання сайту для покращення контенту та досвіду користувача (лише аналітика, за вашої згоди).</li>
          <li>Підтримання безпеки та продуктивності платформи.</li>
        </ul>
        <p className="mt-3">Ми не використовуємо ваші дані для автоматизованого прийняття рішень або профілювання та не продаємо персональні дані третім сторонам.</p>
      </section>

      <section className="mb-8">
        <h2 className="text-[20px] font-bold mb-3">5. Треті сторони</h2>
        <p className="mb-2"><strong>Vercel Inc.</strong> (США) — хостинг сайту та серверна інфраструктура. Дані передаються на підставі стандартних договірних положень.</p>
        <p className="mb-2"><strong>Resend Inc.</strong> (США) — доставка листів із форми зворотного зв'язку. Повідомлення не зберігаються Resend після відправки. Дані передаються на підставі стандартних договірних положень.</p>
        <p><strong>Google LLC</strong> (США) — аналітика, тільки за наявності вашої згоди. Дані обробляються відповідно до угоди Google про обробку даних.</p>
      </section>

      <section className="mb-8">
        <h2 className="text-[20px] font-bold mb-3">6. Строки зберігання</h2>
        <p className="mb-2"><strong>Повідомлення з форми зворотного зв'язку:</strong> зберігаються не більше 12 місяців з моменту отримання, після чого видаляються.</p>
        <p className="mb-2"><strong>Дані аналітики:</strong> зберігаються 14 місяців у Google Analytics, після чого автоматично видаляються.</p>
        <p><strong>Системні журнали:</strong> зберігаються Vercel до 30 днів.</p>
      </section>

      <section className="mb-8">
        <h2 className="text-[20px] font-bold mb-3">7. Ваші права</h2>
        <p className="mb-2">Відповідно до GDPR ви маєте право на: доступ до своїх даних, виправлення неточностей, видалення, обмеження або заперечення проти обробки, а також на перенесення даних. Ви також маєте право відкликати згоду будь-коли без шкоди для законності попередньої обробки.</p>
        <p>Для реалізації будь-якого з цих прав звертайтесь за адресою{" "}
          <a href="mailto:info@gntpower.com" className="text-[#308F16] hover:underline">info@gntpower.com</a>. Ви також маєте право подати скаргу до Інспекції захисту даних Естонії ({" "}
          <a href="https://www.aki.ee" target="_blank" rel="noopener noreferrer" className="text-[#308F16] hover:underline">aki.ee</a>).
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-[20px] font-bold mb-3">8. Файли cookie</h2>
        <p className="mb-2">Ми використовуємо такі файли cookie:</p>
        <ul className="list-disc pl-6 space-y-1">
          <li><strong>gntpower_cookie_consent</strong> — зберігає ваші налаштування cookie. Термін дії — 1 рік.</li>
          <li><strong>_ga, _ga_*</strong> — файли відстеження Google Analytics, встановлюються лише після вашої явної згоди. Термін дії — 14 місяців.</li>
        </ul>
        <p className="mt-3">Ми не використовуємо рекламні, відстежувальні або сторонні cookie соціальних мереж. Ви можете відкликати згоду на аналітику будь-коли, очистивши локальне сховище браузера.</p>
      </section>

      <section>
        <h2 className="text-[20px] font-bold mb-3">9. Зміни до цієї політики</h2>
        <p>Ми можемо час від часу оновлювати цю політику. Дата у верхній частині цієї сторінки вказує на найактуальнішу версію. Продовження використання сайту після оновлення означає прийняття переглянутої політики.</p>
      </section>
    </main>
  )
}
