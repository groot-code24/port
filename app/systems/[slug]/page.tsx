import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { BulletList, DetailSection } from "@/components/detail-section"
import { MetricGrid } from "@/components/metric-grid"
import { SectionHeading } from "@/components/section-heading"
import { StatusPill } from "@/components/status-pill"
import { TagList } from "@/components/tag-list"
import { systems } from "@/lib/data"

type PageProps = {
  params: Promise<{ slug: string }>
}

export function generateStaticParams() {
  return systems.map((system) => ({ slug: system.slug }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const system = systems.find((item) => item.slug === slug)

  if (!system) {
    return {}
  }

  return {
    title: system.title,
    description: `${system.subtitle}. ${system.motivation}`
  }
}

export default async function SystemDetailPage({ params }: PageProps) {
  const { slug } = await params
  const system = systems.find((item) => item.slug === slug)

  if (!system) {
    notFound()
  }

  return (
    <article>
      <SectionHeading eyebrow={`System case study / ${system.year}`} title={system.title}>
        <p>{system.subtitle}</p>
        <div className="mt-5 flex flex-wrap items-center gap-3">
          <StatusPill status={system.status} />
          <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-lab-faint">{system.stack.join(" / ")}</span>
        </div>
      </SectionHeading>

      <div className="mb-8">
        <TagList tags={system.tags} />
      </div>

      <MetricGrid metrics={system.metrics} />

      <div className="mt-8">
        <DetailSection title="Motivation">
          <p>{system.motivation}</p>
        </DetailSection>
        <DetailSection title="Design Constraints">
          <BulletList items={system.designConstraints} />
        </DetailSection>
        <DetailSection title="System Architecture">
          <BulletList items={system.architecture} />
        </DetailSection>
        <DetailSection title="Performance Bottlenecks">
          <BulletList items={system.bottlenecks} />
        </DetailSection>
        <DetailSection title="Optimization Decisions">
          <BulletList items={system.optimizationDecisions} />
        </DetailSection>
        <DetailSection title="Benchmark Methodology">
          <BulletList items={system.benchmarkMethodology} />
        </DetailSection>
        <DetailSection title="Results">
          <BulletList items={system.results} />
        </DetailSection>
        <DetailSection title="Lessons Learned">
          <BulletList items={system.lessons} />
        </DetailSection>
      </div>
    </article>
  )
}
