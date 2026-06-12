import type { Metadata } from "next"
import { SearchClient } from "@/components/search-client"
import { SectionHeading } from "@/components/section-heading"

export const metadata: Metadata = {
  title: "Search",
  description: "Global research index for projects, publications, benchmarks, notes, experiments, and writing."
}

export default function SearchPage() {
  return (
    <div>
      <SectionHeading eyebrow="Global research index" title="Search every project, paper, benchmark, note, experiment, and article">
        <p>
          The local index works immediately. After static export, Pagefind indexes the generated HTML for production search on Vercel.
        </p>
      </SectionHeading>
      <SearchClient />
    </div>
  )
}
