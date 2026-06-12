"use client"

import Link from "next/link"
import { useMemo, useState } from "react"
import { researchPapers } from "@/lib/data"
import { StatusPill } from "./status-pill"
import { TagList } from "./tag-list"

export function ResearchFilter() {
  const tags = useMemo(
    () => ["All", ...Array.from(new Set(researchPapers.flatMap((p) => p.tags))).sort()],
    []
  )
  const [tag, setTag] = useState("All")
  const filtered = tag === "All" ? researchPapers : researchPapers.filter((p) => p.tags.includes(tag))

  return (
    <div className="space-y-5">
      <div className="flex flex-wrap gap-2" role="group" aria-label="Filter by tag">
        {tags.map((item) => (
          <button
            key={item}
            type="button"
            onClick={() => setTag(item)}
            className={`border px-3 py-1.5 font-mono text-[11px] uppercase tracking-[0.16em] transition-colors ${
              tag === item
                ? "border-lab-ink bg-lab-ink text-lab-bg"
                : "border-lab-line text-lab-muted hover:border-lab-accent hover:text-lab-ink"
            }`}
          >
            {item}
          </button>
        ))}
      </div>
      <div className="space-y-4">
        {filtered.map((paper) => (
          <Link
            key={paper.slug}
            href={`/research/${paper.slug}`}
            className="block border border-lab-line bg-lab-panel p-5 transition-colors hover:border-lab-accent"
          >
            <div className="flex flex-wrap items-center gap-3">
              <StatusPill status={paper.status} />
              <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-lab-faint">{paper.venue}</span>
              <span className="font-mono text-[11px] text-lab-faint">{paper.year}</span>
            </div>
            <h2 className="mt-4 text-lg font-semibold tracking-[-0.03em] text-lab-ink sm:text-xl">{paper.title}</h2>
            <p className="mt-2 text-sm leading-6 text-lab-muted">{paper.abstract}</p>
            <div className="mt-4">
              <TagList tags={paper.tags} />
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}
