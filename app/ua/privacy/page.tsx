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
        <h2 className="text-[20px] font-bold mb-3">1. Оператор даних</h2>
        <p>
          SoftPotential OÜ (реєстраційний номер 14565562)<br />
          Kakumäe tee 226, Haabersti, Tallinn 13516, Естонія<br />
          Email: <a href="mailto:info@gntpower.com" className="text-[#308F16] hover:underline">info@gntpower.com</a>
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-[20px] font-bold mb-3">2. Які дані ми збираємо</h2>
        <p className="mb-3"><strong>Форма зворотного зв'язку:</strong> ім'я, адреса електронної пошти та текст повідомлення, які ви вводите добровільно. Ці дані використовуються виключно для відповіді на ваш запит.</p>
        <p><strong>Аналітика:</strong> за наявності вашої згоди ми збираємо анонімізовані дані про використання сайту через Google Analytics 4 (перегляди сторінок, тривалість сесії, країна, тип пристрою). Персональні дані через аналітику не збираються.</p>
      </section>

      <section className="mb-8">
        <h2 className="text-[20px] font-bold mb-3">3. Правова підстава</h2>
        <p className="mb-3"><strong>Форма зворотного зв'язку:</strong> ст. 6(1)(b) GDPR — обробка необхідна для відповіді на ваш запит.</p>
        <p><strong>Аналітика:</strong> ст. 6(1)(a) GDPR — ваша згода, яку ви можете відкликати будь-коли, очистивши локальне сховище браузера.</p>
      </section>

      <section className="mb-8">
        <h2 className="text-[20px] font-bold mb-3">4. Обробники даних</h2>
        <p className="mb-2"><strong>Resend Inc.</strong> (США) — доставка листів із форми зворотного зв'язку. Дані передаються на підставі стандартних договірних положень.</p>
        <p><strong>Google LLC</strong> (США) — аналітика, тільки за наявності вашої згоди. Дані обробляються відповідно до угоди Google про обробку даних.</p>
      </section>

      <section className="mb-8">
        <h2 className="text-[20px] font-bold mb-3">5. Строки зберігання</h2>
        <p className="mb-2"><strong>Дані форми зворотного зв'язку:</strong> зберігаються до обробки вашого запиту, після чого видаляються.</p>
        <p><strong>Дані аналітики:</strong> зберігаються 14 місяців у Google Analytics відповідно до стандартних налаштувань Google.</p>
      </section>

      <section className="mb-8">
        <h2 className="text-[20px] font-bold mb-3">6. Ваші права</h2>
        <p className="mb-2">Відповідно до GDPR ви маєте право на: доступ до своїх даних, виправлення неточностей, видалення, обмеження або заперечення проти обробки, а також на перенесення даних.</p>
        <p>Для реалізації будь-якого з цих прав звертайтесь за адресою <a href="mailto:info@gntpower.com" className="text-[#308F16] hover:underline">info@gntpower.com</a>. Ви також маєте право подати скаргу до Інспекції захисту даних Естонії (<a href="https://www.aki.ee" target="_blank" rel="noopener noreferrer" className="text-[#308F16] hover:underline">aki.ee</a>).</p>
      </section>

      <section className="mb-8">
        <h2 className="text-[20px] font-bold mb-3">7. Файли cookie</h2>
        <p>Ми використовуємо лише файли cookie, що встановлюються Google Analytics, і лише після вашої явної згоди. Рекламні, відстежувальні або сторонні cookie соціальних мереж не використовуються.</p>
      </section>

      <section>
        <h2 className="text-[20px] font-bold mb-3">8. Зміни</h2>
        <p>Ми можемо оновлювати цю політику. Актуальна версія завжди доступна на цій сторінці.</p>
      </section>
    </main>
  )
}
