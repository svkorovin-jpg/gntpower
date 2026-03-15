"use client"
import { useState } from "react"
import Link from "next/link"

type ContactFormProps = {
  name: string
  email: string
  message: string
  submit: string
  sending: string
  success: string
  error: string
  privacyPre: string
  privacyLink: string
  privacyPost: string
  privacyUrl: string
}

export default function ContactForm({ name, email, message, submit, sending, success, error, privacyPre, privacyLink, privacyPost, privacyUrl }: ContactFormProps) {
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
        placeholder={name}
        value={form.name}
        onChange={(e) => setForm({ ...form, name: e.target.value })}
        className={inputClass}
      />
      <input
        type="email"
        required
        placeholder={email}
        value={form.email}
        onChange={(e) => setForm({ ...form, email: e.target.value })}
        className={inputClass}
      />
      <textarea
        required
        rows={4}
        placeholder={message}
        value={form.message}
        onChange={(e) => setForm({ ...form, message: e.target.value })}
        className={inputClass + " resize-none"}
      />

      {status === "success" && (
        <p className="text-white font-semibold text-center">{success}</p>
      )}
      {status === "error" && (
        <p className="text-red-200 font-semibold text-center">{error}</p>
      )}

      <button
        type="submit"
        disabled={status === "loading" || status === "success"}
        className="py-4 px-9 rounded-lg bg-white text-[#308F16] font-bold text-[16px] shadow-lg hover:bg-gray-50 hover:shadow-xl active:scale-95 transition-all duration-200 disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {status === "loading" ? sending : submit}
      </button>

      <p className="text-white/70 text-[13px] text-center leading-snug">
        {privacyPre}{" "}
        <Link href={privacyUrl} className="underline hover:text-white transition-colors">
          {privacyLink}
        </Link>
        {privacyPost}
      </p>
    </form>
  )
}
