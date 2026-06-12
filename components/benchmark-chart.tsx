"use client"

import { useMemo } from "react"
import type { BenchmarkSeries } from "@/lib/types"

export function BenchmarkChart({ data }: { data: BenchmarkSeries[] }) {
  const rows = useMemo(() => {
    const max = Math.max(...data.map((d) => d.value))
    return data.map((item) => ({
      ...item,
      width: `${Math.max(8, (item.value / max) * 100)}%`
    }))
  }, [data])

  return (
    <div className="space-y-4 border border-lab-line bg-lab-panel p-5">
      <div>
        <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-lab-faint">Benchmarks</p>
        <h2 className="mt-2 text-xl font-semibold tracking-[-0.04em] text-lab-ink">Measured systems signals</h2>
      </div>
      <div className="space-y-4">
        {rows.map((item) => (
          <div key={item.label}>
            <div className="mb-1.5 flex items-center justify-between gap-4 text-sm">
              <span className="min-w-0 truncate text-lab-muted">{item.label}</span>
              <span className="flex-shrink-0 font-mono text-xs text-lab-ink">
                {item.value}
                {item.unit}
              </span>
            </div>
            <div className="h-2 border border-lab-line bg-lab-bg">
              <div
                className="h-full bg-lab-accent transition-all duration-700"
                style={{ width: item.width }}
                role="progressbar"
                aria-valuenow={item.value}
                aria-valuemin={0}
                aria-label={item.label}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
