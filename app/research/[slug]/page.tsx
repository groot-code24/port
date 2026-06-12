import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { ArrowUpRight } from "lucide-react"
import { BulletList, DetailSection } from "@/components/detail-section"
import { CitationExport } from "@/components/citation-export"
import { MetricGrid } from "@/components/metric-grid"
import { SectionHeading } from "@/components/section-heading"
import { StatusPill } from "@/components/status-pill"
import { TagList } from "@/components/tag-list"
import { researchPapers } from "@/lib/data"

type PageProps = {
  params: Promise<{ slug: string }>
}

export function generateStaticParams() {
  return researchPapers.map((paper) => ({ slug: paper.slug }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const paper = researchPapers.find((item) => item.slug === slug)

  if (!paper) {
    return {}
  }

  return {
    title: paper.title,
    description: paper.abstract
  }
}

export default async function ResearchDetailPage({ params }: PageProps) {
  const { slug } = await params
  const paper = researchPapers.find((item) => item.slug === slug)

  if (!paper) {
    notFound()
  }

  return (
    <article>
      <SectionHeading eyebrow={`${paper.venue} / ${paper.year}`} title={paper.title}>
        <p>{paper.subtitle}</p>
        <div className="mt-5 flex flex-wrap items-center gap-3">
          <StatusPill status={paper.status} />
          <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-lab-faint">{paper.authors.join(", ")}</span>
        </div>
      </SectionHeading>

      <div className="mb-8">
        <TagList tags={paper.tags} />
      </div>

      <MetricGrid metrics={paper.metrics} />

      <div className="mt-8">
        <DetailSection title="Abstract">
          <p>{paper.abstract}</p>
        </DetailSection>
        <DetailSection title="Problem Statement">
          <p>{paper.problem}</p>
        </DetailSection>
        <DetailSection title="Methodology">
          <BulletList items={paper.methodology} />
        </DetailSection>
        <DetailSection title="Experimental Design">
          <BulletList items={paper.experimentalDesign} />
        </DetailSection>
        <DetailSection title="Results">
          <BulletList items={paper.results} />
        </DetailSection>
        <DetailSection title="Limitations">
          <BulletList items={paper.limitations} />
        </DetailSection>
        <DetailSection title="Future Directions">
          <BulletList items={paper.futureDirections} />
        </DetailSection>
        <DetailSection title="References">
          <div className="space-y-2">
            {paper.references.map((reference) =>
              reference.href ? (
                <a key={reference.label} href={reference.href} className="flex items-center gap-2 text-lab-accent underline">
                  {reference.label}
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </a>
              ) : (
                <p key={reference.label}>{reference.label}</p>
              )
            )}
          </div>
        </DetailSection>
      </div>

      <CitationExport citation={paper.citation} />
    </article>
  )
}
