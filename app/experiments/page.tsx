import type { Metadata } from "next"
import { SectionHeading } from "@/components/section-heading"
import { StatusPill } from "@/components/status-pill"
import { TagList } from "@/components/tag-list"
import { experiments } from "@/lib/data"
import type { ExperimentEntry } from "@/lib/types"

export const metadata: Metadata = {
  title: "Experiments",
  description: "Internal research notebook: failed experiments, reproduction studies, benchmark logs, scaling studies, and open questions."
}

const categories: ExperimentEntry["category"][] = [
  "Failed Experiments",
  "Reproduction Studies",
  "Benchmark Logs",
  "Scaling Studies",
  "Compression Studies",
  "Interpretability Notes",
  "Open Questions",
  "Research Ideas"
]

export default function ExperimentsPage() {
  return (
    <div>
      <SectionHeading
        eyebrow="Experiments"
        title="Notebook: failed work, reproductions, logs, and open questions"
      >
        <p>
          This section is closer to an internal research notebook than a polished showcase. Negative results and
          reproducibility traces are preserved because they reveal engineering judgment.
        </p>
      </SectionHeading>

      <div className="space-y-8">
        {categories.map((category) => {
          const entries = experiments.filter((e) => e.category === category)
          return (
            <section key={category} className="border border-lab-line bg-lab-panel p-5">
              <div className="flex flex-col gap-2 border-b border-lab-line pb-4 sm:flex-row sm:items-end sm:justify-between">
                <div>
                  <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-lab-faint">Category</p>
                  <h2 className="mt-2 text-xl font-semibold tracking-[-0.04em] text-lab-ink">{category}</h2>
                </div>
                <span className="font-mono text-xs text-lab-faint">{entries.length} entries</span>
              </div>

              {entries.length === 0 ? (
                <p className="mt-5 text-sm text-lab-muted">No public notes yet.</p>
              ) : (
                <div className="mt-5 space-y-4">
                  {entries.map((entry) => (
                    <article key={entry.slug} className="border border-lab-line bg-lab-bg p-4">
                      <div className="flex flex-wrap items-center gap-3">
                        <StatusPill status={entry.status} />
                        <span className="font-mono text-[11px] text-lab-faint">{entry.date}</span>
                      </div>
                      <h3 className="mt-4 text-lg font-semibold tracking-[-0.03em] text-lab-ink sm:text-xl">
                        {entry.title}
                      </h3>
                      <p className="mt-2 text-sm leading-6 text-lab-muted">{entry.question}</p>
                      <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                        <NotebookBlock title="Setup" items={entry.setup} />
                        <NotebookBlock title="Observations" items={entry.observations} />
                        <div>
                          <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-lab-faint">Conclusion</p>
                          <p className="mt-2 text-sm leading-6 text-lab-muted">{entry.conclusion}</p>
                          <p className="mt-4 font-mono text-[11px] uppercase tracking-[0.18em] text-lab-faint">Next step</p>
                          <p className="mt-2 text-sm leading-6 text-lab-muted">{entry.nextStep}</p>
                        </div>
                      </div>
                      <div className="mt-4">
                        <TagList tags={entry.tags} />
                      </div>
                    </article>
                  ))}
                </div>
              )}
            </section>
          )
        })}
      </div>
    </div>
  )
}

function NotebookBlock({ title, items }: { title: string; items: string[] }) {
  return (
    <div>
      <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-lab-faint">{title}</p>
      <ul className="mt-2 space-y-2 text-sm leading-6 text-lab-muted">
        {items.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>
    </div>
  )
}
