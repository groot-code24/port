import type { LabMetric } from "@/lib/types"

export function MetricGrid({ metrics }: { metrics: LabMetric[] }) {
  return (
    <div className="grid gap-3 grid-cols-2 sm:grid-cols-2 lg:grid-cols-3">
      {metrics.map((metric) => (
        <div key={`${metric.label}-${metric.value}`} className="border border-lab-line bg-lab-panel p-4">
          <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-lab-faint">{metric.label}</p>
          <p className="mt-2 text-2xl font-semibold tracking-[-0.05em] text-lab-ink sm:text-3xl">{metric.value}</p>
          <p className="mt-2 text-sm leading-5 text-lab-muted">{metric.detail}</p>
        </div>
      ))}
    </div>
  )
}
