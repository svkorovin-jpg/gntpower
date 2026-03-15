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
        <h2 className="text-[20px] font-bold mb-3">1. Кто мы</h2>
        <p>
          Этот сайт управляется компанией SoftPotential OÜ (регистрационный номер 14565562), зарегистрированной по адресу Kakumäe tee 226, Haabersti, Tallinn 13516, Эстония. Мы являемся оператором персональных данных, собираемых через этот сайт. По вопросам конфиденциальности обращайтесь к нам по адресу{" "}
          <a href="mailto:info@gntpower.com" className="text-[#308F16] hover:underline">info@gntpower.com</a>.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-[20px] font-bold mb-3">2. Какие данные мы собираем</h2>
        <p className="mb-3"><strong>Форма обратной связи:</strong> имя, адрес электронной почты и текст сообщения, которые вы вводите добровольно.</p>
        <p className="mb-3"><strong>Аналитика:</strong> при наличии вашего согласия мы собираем анонимизированные данные об использовании сайта через Google Analytics 4 (просмотры страниц, длительность сессии, страна, тип устройства). Персональные данные через аналитику не собираются.</p>
        <p><strong>Системные журналы:</strong> IP-адрес, тип браузера и источник перехода автоматически обрабатываются нашим хостинг-провайдером (Vercel) в целях безопасности и производительности.</p>
      </section>

      <section className="mb-8">
        <h2 className="text-[20px] font-bold mb-3">3. Правовое основание для обработки</h2>
        <p className="mb-3"><strong>Форма обратной связи:</strong> ст. 6(1)(b) GDPR — обработка необходима для ответа на ваш запрос; а также ст. 6(1)(f) GDPR — наш законный интерес в обработке деловых запросов.</p>
        <p className="mb-3"><strong>Аналитика:</strong> ст. 6(1)(a) GDPR — ваше явное согласие, которое вы можете отозвать в любой момент, очистив локальное хранилище браузера.</p>
        <p><strong>Системные журналы:</strong> ст. 6(1)(f) GDPR — законный интерес в обеспечении безопасности платформы.</p>
      </section>

      <section className="mb-8">
        <h2 className="text-[20px] font-bold mb-3">4. Как мы используем ваши данные</h2>
        <p className="mb-2">Мы используем собранные данные в следующих целях:</p>
        <ul className="list-disc pl-6 space-y-1">
          <li>Ответы на запросы, поданные через форму обратной связи.</li>
          <li>Анализ показателей использования сайта для улучшения контента и пользовательского опыта (только аналитика, при наличии вашего согласия).</li>
          <li>Поддержание безопасности и производительности платформы.</li>
        </ul>
        <p className="mt-3">Мы не используем ваши данные для автоматизированного принятия решений или профилирования и не продаём персональные данные третьим сторонам.</p>
      </section>

      <section className="mb-8">
        <h2 className="text-[20px] font-bold mb-3">5. Третьи стороны</h2>
        <p className="mb-2"><strong>Vercel Inc.</strong> (США) — хостинг сайта и серверная инфраструктура. Данные передаются на основании стандартных договорных положений.</p>
        <p className="mb-2"><strong>Resend Inc.</strong> (США) — доставка писем из формы обратной связи. Сообщения не хранятся в Resend после отправки. Данные передаются на основании стандартных договорных положений.</p>
        <p><strong>Google LLC</strong> (США) — аналитика, только при наличии вашего согласия. Данные обрабатываются в соответствии с соглашением Google об обработке данных.</p>
      </section>

      <section className="mb-8">
        <h2 className="text-[20px] font-bold mb-3">6. Сроки хранения</h2>
        <p className="mb-2"><strong>Сообщения из формы обратной связи:</strong> хранятся не более 12 месяцев с момента получения, после чего удаляются.</p>
        <p className="mb-2"><strong>Данные аналитики:</strong> хранятся 14 месяцев в Google Analytics, после чего автоматически удаляются.</p>
        <p><strong>Системные журналы:</strong> хранятся Vercel до 30 дней.</p>
      </section>

      <section className="mb-8">
        <h2 className="text-[20px] font-bold mb-3">7. Ваши права</h2>
        <p className="mb-2">В соответствии с GDPR вы имеете право на: доступ к своим данным, исправление неточностей, удаление, ограничение или возражение против обработки, а также переносимость данных. Вы также вправе отозвать согласие в любой момент без ущерба для законности предшествующей обработки.</p>
        <p>Для реализации любого из этих прав обращайтесь по адресу{" "}
          <a href="mailto:info@gntpower.com" className="text-[#308F16] hover:underline">info@gntpower.com</a>. Вы также вправе подать жалобу в Инспекцию по защите данных Эстонии ({" "}
          <a href="https://www.aki.ee" target="_blank" rel="noopener noreferrer" className="text-[#308F16] hover:underline">aki.ee</a>).
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-[20px] font-bold mb-3">8. Файлы cookie</h2>
        <p className="mb-2">Мы используем следующие файлы cookie:</p>
        <ul className="list-disc pl-6 space-y-1">
          <li><strong>gntpower_cookie_consent</strong> — хранит ваши настройки cookie. Срок действия — 1 год.</li>
          <li><strong>_ga, _ga_*</strong> — файлы отслеживания Google Analytics, устанавливаются только после вашего явного согласия. Срок действия — 14 месяцев.</li>
        </ul>
        <p className="mt-3">Мы не используем рекламные, отслеживающие или сторонние cookie социальных сетей. Вы можете отозвать согласие на аналитику в любой момент, очистив локальное хранилище браузера.</p>
      </section>

      <section>
        <h2 className="text-[20px] font-bold mb-3">9. Изменения в данной политике</h2>
        <p>Мы можем время от времени обновлять данную политику. Дата в верхней части этой страницы указывает на наиболее актуальную версию. Продолжение использования сайта после обновления означает принятие пересмотренной политики.</p>
      </section>
    </main>
  )
}
