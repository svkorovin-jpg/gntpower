"use client"
import { useState } from "react"

const translations = {
  ru: {
    name: "Имя",
    email: "Email",
    message: "Сообщение",
    submit: "Отправить",
    sending: "Отправляем...",
    success: "Сообщение отправлено! Мы свяжемся с вами.",
    error: "Ошибка при отправке. Попробуйте снова.",
  },
  en: {
    name: "Name",
    email: "Email",
    message: "Message",
    submit: "Send",
    sending: "Sending...",
    success: "Message sent! We'll get back to you soon.",
    error: "Failed to send. Please try again.",
  },
  ua: {
    name: "Ім'я",
    email: "Email",
    message: "Повідомлення",
    submit: "Надіслати",
    sending: "Надсилаємо...",
    success: "Повідомлення надіслано! Ми зв'яжемося з вами.",
    error: "Помилка надсилання. Спробуйте ще раз.",
  },
}

type Lang = keyof typeof translations

export default function ContactForm({ lang = "ru" }: { lang?: Lang }) {
  const t = translations[lang] ?? translations.ru

  const [form, setForm] = useState({ name: "", email: "", message: "" })
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle")

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setStatus("loading")

    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    })

    setStatus(res.ok ? "success" : "error")
    if (res.ok) setForm({ name: "", email: "", message: "" })
  }

  const inputClass =
    "w-full rounded-lg px-4 py-3 text-gray-900 bg-white/95 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white/60 text-[15px]"

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-[520px] mx-auto mt-10 flex flex-col gap-4">
      <input
        type="text"
        required
        placeholder={t.name}
        value={form.name}
        onChange={(e) => setForm({ ...form, name: e.target.value })}
        className={inputClass}
      />
      <input
        type="email"
        required
        placeholder={t.email}
        value={form.email}
        onChange={(e) => setForm({ ...form, email: e.target.value })}
        className={inputClass}
      />
      <textarea
        required
        rows={4}
        placeholder={t.message}
        value={form.message}
        onChange={(e) => setForm({ ...form, message: e.target.value })}
        className={inputClass + " resize-none"}
      />

      {status === "success" && (
        <p className="text-white font-semibold text-center">{t.success}</p>
      )}
      {status === "error" && (
        <p className="text-red-200 font-semibold text-center">{t.error}</p>
      )}

      <button
        type="submit"
        disabled={status === "loading" || status === "success"}
        className="py-4 px-9 rounded-lg bg-white text-[#308F16] font-bold text-[16px] shadow-lg hover:bg-gray-50 hover:shadow-xl active:scale-95 transition-all duration-200 disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {status === "loading" ? t.sending : t.submit}
      </button>
    </form>
  )
}
