import type { Metadata } from "next"
import { ResearchFilter } from "@/components/research-filter"
import { SectionHeading } from "@/components/section-heading"

export const metadata: Metadata = {
  title: "Research",
  description: "Research papers and investigations from Mani Pal's personal AI systems laboratory."
}

export default function ResearchPage() {
  return (
    <div>
      <SectionHeading eyebrow="Research" title="Papers, manuscripts, and open investigations">
        <p>
          Research is presented as lab work rather than portfolio proof: abstract, problem statement, methodology,
          experimental design, results, limitations, future directions, references, and citation export.
        </p>
      </SectionHeading>
      <ResearchFilter />
    </div>
  )
}
