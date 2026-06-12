import type { Metadata } from "next"
import Link from "next/link"
import { ArrowUpRight } from "lucide-react"
import { MetricGrid } from "@/components/metric-grid"
import { SectionHeading } from "@/components/section-heading"
import { StatusPill } from "@/components/status-pill"
import { TagList } from "@/components/tag-list"
import { systems } from "@/lib/data"

export const metadata: Metadata = {
  title: "Systems",
  description: "Engineering case studies across CUDA kernels, LLM training, inference runtimes, sparse MoE scaling, and offline AI."
}

export default function SystemsPage() {
  return (
    <div>
      <SectionHeading eyebrow="Systems" title="Engineering case studies, not project blurbs">
        <p>
          Each system is structured around motivation, design constraints, architecture, bottlenecks, optimization
          decisions, benchmark methodology, results, and lessons learned.
        </p>
      </SectionHeading>
      <div className="space-y-5">
        {systems.map((system) => (
          <Link
            key={system.slug}
            href={`/systems/${system.slug}`}
            className="block border border-lab-line bg-lab-panel p-5 transition-colors hover:border-lab-accent"
          >
            <div className="flex flex-wrap items-center gap-3">
              <StatusPill status={system.status} />
              <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-lab-faint">{system.year}</span>
              <ArrowUpRight className="ml-auto h-4 w-4 text-lab-faint" />
            </div>
            <h2 className="mt-4 text-xl font-semibold tracking-[-0.04em] text-lab-ink sm:text-2xl">{system.title}</h2>
            <p className="mt-1 text-sm text-lab-muted">{system.subtitle}</p>
            <p className="mt-4 text-sm leading-6 text-lab-muted">{system.motivation}</p>
            <div className="mt-5">
              <MetricGrid metrics={system.metrics} />
            </div>
            <div className="mt-5">
              <TagList tags={system.tags} />
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}
