"use client"

import { useEffect, useRef } from "react"
import { animate, useInView, useReducedMotion } from "framer-motion"

/**
 * CountUp — animates a benchmark number from 0 to its value on first view.
 * `value` is numeric; `prefix`/`suffix` wrap it ("2.1" + "×", "93" + "%").
 */
export function CountUp({
  value,
  decimals = 0,
  prefix = "",
  suffix = "",
  duration = 1.4,
  className
}: {
  value: number
  decimals?: number
  prefix?: string
  suffix?: string
  duration?: number
  className?: string
}) {
  const ref = useRef<HTMLSpanElement | null>(null)
  const inView = useInView(ref, { once: true, margin: "-40px" })
  const reduce = useReducedMotion()
  const final = `${prefix}${value.toFixed(decimals)}${suffix}`

  useEffect(() => {
    const el = ref.current
    if (!el || !inView) return
    if (reduce) {
      el.textContent = final
      return
    }
    const controls = animate(0, value, {
      duration,
      ease: [0.16, 0.84, 0.32, 1],
      onUpdate: (v) => {
        el.textContent = `${prefix}${v.toFixed(decimals)}${suffix}`
      }
    })
    return () => controls.stop()
  }, [inView, reduce, value, decimals, prefix, suffix, duration, final])

  return (
    <span ref={ref} className={className} aria-label={final}>
      {reduce ? final : `${prefix}${(0).toFixed(decimals)}${suffix}`}
    </span>
  )
}
