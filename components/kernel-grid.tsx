"use client"

import { useEffect, useRef } from "react"

/**
 * KernelGrid — the site's signature graphic.
 *
 * Renders a causal attention matrix being computed tile-by-tile, the way a
 * FlashAttention-style kernel sweeps SRAM-resident blocks. The active tile
 * glows in the accent color, processed tiles settle into a quiet fill, and
 * the sweep loops forever.
 *
 * - Colors are read from the CSS custom properties, so it follows
 *   light/dark theme automatically (re-reads on data-theme changes).
 * - Pauses when offscreen or when the tab is hidden.
 * - prefers-reduced-motion: renders a single static, fully-processed state.
 */
export function KernelGrid({
  accent = "accent",
  cells = 26,
  block = 4,
  className
}: {
  accent?: "accent" | "biz"
  cells?: number
  block?: number
  className?: string
}) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches

    let raf = 0
    let running = true
    let visible = true
    let width = 0
    let height = 0

    let accentRgb = "0 124 137"
    let lineRgb = "213 221 216"
    let faintRgb = "121 132 126"

    const readColors = () => {
      const styles = getComputedStyle(document.documentElement)
      accentRgb =
        styles.getPropertyValue(accent === "biz" ? "--color-biz" : "--color-accent").trim() ||
        accentRgb
      lineRgb = styles.getPropertyValue("--color-line").trim() || lineRgb
      faintRgb = styles.getPropertyValue("--color-faint").trim() || faintRgb
    }
    readColors()

    // Lower-triangle (causal) blocks in kernel sweep order: row-block major.
    const blocksPerSide = Math.ceil(cells / block)
    const sweepOrder: Array<{ br: number; bc: number }> = []
    for (let br = 0; br < blocksPerSide; br++) {
      for (let bc = 0; bc <= br; bc++) sweepOrder.push({ br, bc })
    }

    // progress[i] in [0, 1]: how "processed" each block is.
    const progress = new Float32Array(sweepOrder.length)
    let head = 0 // fractional index of the sweep head
    const SPEED = 0.16 // blocks advanced per frame at 60fps (time-scaled below)
    let lastTime = 0

    const resize = () => {
      const rect = canvas.getBoundingClientRect()
      const dpr = Math.min(window.devicePixelRatio || 1, 2)
      width = Math.max(1, Math.floor(rect.width))
      height = Math.max(1, Math.floor(rect.height))
      canvas.width = width * dpr
      canvas.height = height * dpr
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
    }

    const draw = () => {
      ctx.clearRect(0, 0, width, height)
      const size = Math.min(width, height)
      const cell = size / cells
      const pad = cell * 0.16
      const ox = (width - size) / 2
      const oy = (height - size) / 2

      for (let i = 0; i < sweepOrder.length; i++) {
        const { br, bc } = sweepOrder[i]
        const p = progress[i]
        const isHead = Math.floor(head) === i

        for (let r = br * block; r < Math.min((br + 1) * block, cells); r++) {
          for (let c = bc * block; c < Math.min((bc + 1) * block, cells); c++) {
            if (c > r) continue // causal mask
            const x = ox + c * cell + pad / 2
            const y = oy + r * cell + pad / 2
            const s = cell - pad

            if (p <= 0.001) {
              // untouched: hairline outline only
              ctx.strokeStyle = `rgb(${lineRgb} / 0.55)`
              ctx.lineWidth = 1
              ctx.strokeRect(x + 0.5, y + 0.5, s - 1, s - 1)
            } else {
              const alpha = isHead ? 0.95 : 0.14 + p * 0.3
              ctx.fillStyle = `rgb(${accentRgb} / ${alpha})`
              ctx.fillRect(x, y, s, s)
            }
          }
        }

        if (isHead && !reduceMotion) {
          // glow around the active tile
          const gx = ox + bc * block * cell
          const gy = oy + br * block * cell
          const gs = block * cell
          ctx.save()
          ctx.shadowColor = `rgb(${accentRgb} / 0.8)`
          ctx.shadowBlur = cell * 1.4
          ctx.strokeStyle = `rgb(${accentRgb})`
          ctx.lineWidth = 1.5
          ctx.strokeRect(gx + 1, gy + 1, gs - 2, gs - 2)
          ctx.restore()
        }
      }

      // diagonal annotation: the causal boundary
      ctx.strokeStyle = `rgb(${faintRgb} / 0.4)`
      ctx.lineWidth = 1
      ctx.setLineDash([3, 5])
      ctx.beginPath()
      ctx.moveTo(ox + cell * 0.5, oy + cell * 0.5)
      ctx.lineTo(ox + size - cell * 0.4, oy + size - cell * 0.4)
      ctx.stroke()
      ctx.setLineDash([])
    }

    const tick = (t: number) => {
      if (!running) return
      raf = requestAnimationFrame(tick)
      if (!visible || document.hidden) return
      const dt = lastTime ? Math.min((t - lastTime) / 16.67, 3) : 1
      lastTime = t

      head += SPEED * dt
      if (head >= sweepOrder.length + 6) {
        head = 0
        progress.fill(0)
      }
      const h = Math.floor(head)
      for (let i = 0; i <= Math.min(h, sweepOrder.length - 1); i++) {
        progress[i] = Math.min(1, progress[i] + 0.08 * dt)
      }
      draw()
    }

    resize()

    if (reduceMotion) {
      progress.fill(1)
      head = sweepOrder.length + 100 // no head glow
      draw()
    } else {
      raf = requestAnimationFrame(tick)
    }

    const ro = new ResizeObserver(() => {
      resize()
      draw()
    })
    ro.observe(canvas)

    const io = new IntersectionObserver(
      (entries) => {
        visible = entries[0]?.isIntersecting ?? true
      },
      { threshold: 0.05 }
    )
    io.observe(canvas)

    const mo = new MutationObserver(() => {
      readColors()
      draw()
    })
    mo.observe(document.documentElement, { attributes: true, attributeFilter: ["data-theme"] })

    return () => {
      running = false
      cancelAnimationFrame(raf)
      ro.disconnect()
      io.disconnect()
      mo.disconnect()
    }
  }, [accent, cells, block])

  return (
    <canvas
      ref={canvasRef}
      className={className}
      role="img"
      aria-label="Animated diagram of a causal attention matrix computed tile by tile, the access pattern of a FlashAttention kernel"
    />
  )
}
