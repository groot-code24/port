"use client"

import { motion } from "framer-motion"
import type { TimelineEvent } from "@/lib/types"

const years = ["2023", "2024", "2025", "2026"]

const typeLabel: Record<TimelineEvent["type"], string> = {
  research: "Research",
  system: "System",
  "open-source": "Open Source",
  benchmark: "Benchmark"
}

export function ResearchTimeline({ events }: { events: TimelineEvent[] }) {
  return (
    <div className="border border-lab-line bg-lab-panel p-5">
      <div className="mb-5 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-lab-faint">Timeline</p>
          <h2 className="mt-2 text-xl font-semibold tracking-[-0.04em] text-lab-ink">Milestones</h2>
        </div>
        <p className="max-w-xs text-xs leading-5 text-lab-muted sm:text-right">
          Research, systems, benchmarks, and open-source across the lab record.
        </p>
      </div>

      <div className="overflow-x-auto -mx-5 px-5 sm:overflow-visible sm:mx-0 sm:px-0">
        <div className="grid min-w-[480px] gap-4 sm:min-w-0 sm:grid-cols-2 lg:grid-cols-4">
          {years.map((year) => (
            <div key={year} className="border-l-2 border-lab-line pl-4">
              <p className="font-mono text-sm font-medium text-lab-ink">{year}</p>
              <div className="mt-4 space-y-3">
                {events
                  .filter((e) => e.year === year)
                  .map((event, index) => (
                    <motion.article
                      key={`${event.year}-${event.title}`}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.06, duration: 0.3 }}
                      className="border border-lab-line bg-lab-bg p-3"
                    >
                      <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-lab-faint">
                        {typeLabel[event.type]}
                      </p>
                      <h3 className="mt-2 text-sm font-semibold leading-snug text-lab-ink">{event.title}</h3>
                      <p className="mt-2 text-xs leading-5 text-lab-muted">{event.summary}</p>
                    </motion.article>
                  ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
