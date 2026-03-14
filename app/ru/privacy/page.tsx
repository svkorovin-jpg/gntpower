import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Политика конфиденциальности — G&T Power",
  robots: { index: false },
}

export default function PrivacyPage() {
  return (
    <main className="max-w-[760px] mx-auto px-6 py-16 text-[#222] leading-relaxed">
      <Link href="/ru" className="text-[#308F16] text-[14px] hover:underline">← Назад</Link>

      <h1 className="text-[32px] font-extrabold mt-8 mb-2">Политика конфиденциальности</h1>
      <p className="text-[#888] text-[14px] mb-10">Последнее обновление: март 2026</p>

      <section className="mb-8">
        <h2 className="text-[20px] font-bold mb-3">1. Оператор данных</h2>
        <p>
          SoftPotential OÜ (регистрационный номер 14565562)<br />
          Kakumäe tee 226, Haabersti, Tallinn 13516, Эстония<br />
          Email: <a href="mailto:info@gntpower.com" className="text-[#308F16] hover:underline">info@gntpower.com</a>
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-[20px] font-bold mb-3">2. Какие данные мы собираем</h2>
        <p className="mb-3"><strong>Форма обратной связи:</strong> имя, адрес электронной почты и текст сообщения, которые вы вводите добровольно. Эти данные используются исключительно для ответа на ваш запрос.</p>
        <p><strong>Аналитика:</strong> при наличии вашего согласия мы собираем анонимизированные данные об использовании сайта через Google Analytics 4 (просмотры страниц, длительность сессии, страна, тип устройства). Персональные данные через аналитику не собираются.</p>
      </section>

      <section className="mb-8">
        <h2 className="text-[20px] font-bold mb-3">3. Правовое основание</h2>
        <p className="mb-3"><strong>Форма обратной связи:</strong> ст. 6(1)(b) GDPR — обработка необходима для ответа на ваш запрос.</p>
        <p><strong>Аналитика:</strong> ст. 6(1)(a) GDPR — ваше согласие, которое вы можете отозвать в любой момент, очистив локальное хранилище браузера.</p>
      </section>

      <section className="mb-8">
        <h2 className="text-[20px] font-bold mb-3">4. Обработчики данных</h2>
        <p className="mb-2"><strong>Resend Inc.</strong> (США) — доставка писем из формы обратной связи. Данные передаются на основании стандартных договорных положений.</p>
        <p><strong>Google LLC</strong> (США) — аналитика, только при наличии вашего согласия. Данные обрабатываются в соответствии с соглашением Google об обработке данных.</p>
      </section>

      <section className="mb-8">
        <h2 className="text-[20px] font-bold mb-3">5. Сроки хранения</h2>
        <p className="mb-2"><strong>Данные формы обратной связи:</strong> хранятся до обработки вашего запроса, после чего удаляются.</p>
        <p><strong>Данные аналитики:</strong> хранятся 14 месяцев в Google Analytics согласно стандартным настройкам Google.</p>
      </section>

      <section className="mb-8">
        <h2 className="text-[20px] font-bold mb-3">6. Ваши права</h2>
        <p className="mb-2">В соответствии с GDPR вы имеете право на: доступ к своим данным, исправление неточностей, удаление, ограничение или возражение против обработки, а также переносимость данных.</p>
        <p>Для реализации любого из этих прав обращайтесь по адресу <a href="mailto:info@gntpower.com" className="text-[#308F16] hover:underline">info@gntpower.com</a>. Вы также вправе подать жалобу в Инспекцию по защите данных Эстонии (<a href="https://www.aki.ee" target="_blank" rel="noopener noreferrer" className="text-[#308F16] hover:underline">aki.ee</a>).</p>
      </section>

      <section className="mb-8">
        <h2 className="text-[20px] font-bold mb-3">7. Файлы cookie</h2>
        <p>Мы используем только файлы cookie, устанавливаемые Google Analytics, и только после вашего явного согласия. Рекламные, отслеживающие или сторонние cookie социальных сетей не используются.</p>
      </section>

      <section>
        <h2 className="text-[20px] font-bold mb-3">8. Изменения</h2>
        <p>Мы можем обновлять данную политику. Актуальная версия всегда доступна на этой странице.</p>
      </section>
    </main>
  )
}
