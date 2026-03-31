"use client"
import { useRef, type ReactNode } from "react"

type Props = {
  children: ReactNode
  className?: string
  style?: React.CSSProperties
  intensity?: number
}

export default function Card3D({ children, className, style, intensity = 8 }: Props) {
  const ref = useRef<HTMLDivElement>(null)

  function onMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    const el = ref.current
    if (!el) return
    const { left, top, width, height } = el.getBoundingClientRect()
    const x = (e.clientX - left) / width - 0.5
    const y = (e.clientY - top) / height - 0.5
    el.style.transition = "transform 0.08s ease-out"
    el.style.transform = `perspective(900px) rotateY(${x * intensity * 2}deg) rotateX(${-y * intensity * 2}deg) scale3d(1.02, 1.02, 1.02)`
  }

  function onMouseLeave() {
    const el = ref.current
    if (!el) return
    el.style.transition = "transform 0.5s ease-out"
    el.style.transform = "perspective(900px) rotateY(0deg) rotateX(0deg) scale3d(1, 1, 1)"
  }

  return (
    <div
      ref={ref}
      className={className}
      style={{ ...style, willChange: "transform" }}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
    >
      {children}
    </div>
  )
}
