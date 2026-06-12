"use client"

import Link from "next/link"
import { useMemo, useState } from "react"
import { Search } from "lucide-react"
import { searchRecords } from "@/lib/data"
import { getAllTags, searchLabIndex } from "@/lib/search"

export function SearchClient() {
  const [query, setQuery] = useState("")
  const [tag, setTag] = useState("All")
  const tags = useMemo(() => ["All", ...getAllTags()], [])
  const results = useMemo(() => {
    const found = searchLabIndex(query, searchRecords)
    return tag === "All" ? found : found.filter((record) => record.tags.includes(tag))
  }, [query, tag])

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-3 border border-lab-line bg-lab-panel p-4 sm:flex-row">
        <label className="flex flex-1 items-center gap-3 border border-lab-line bg-lab-bg px-3 py-2.5">
          <Search className="h-4 w-4 flex-shrink-0 text-lab-faint" />
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full bg-transparent text-sm text-lab-ink outline-none placeholder:text-lab-faint"
            placeholder="Search papers, systems, PRs, benchmarks, notes"
            aria-label="Search"
          />
        </label>
        <select
          value={tag}
          onChange={(e) => setTag(e.target.value)}
          className="border border-lab-line bg-lab-bg px-3 py-2.5 text-sm text-lab-muted outline-none"
          aria-label="Filter by tag"
        >
          {tags.map((item) => (
            <option key={item}>{item}</option>
          ))}
        </select>
      </div>

      {query && results.length === 0 && (
        <p className="text-sm text-lab-muted">No results for &ldquo;{query}&rdquo;.</p>
      )}

      <div className="space-y-3">
        {results.map((record) => (
          <Link
            key={record.id}
            href={record.href}
            className="block border border-lab-line bg-lab-panel p-4 transition-colors hover:border-lab-accent"
          >
            <div className="flex flex-wrap items-center gap-3">
              <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-lab-accent">{record.type}</span>
              {record.year && <span className="font-mono text-[11px] text-lab-faint">{record.year}</span>}
            </div>
            <h2 className="mt-2 text-base font-semibold tracking-[-0.03em] text-lab-ink sm:text-lg">{record.title}</h2>
            <p className="mt-2 text-sm leading-6 text-lab-muted">{record.summary}</p>
            <div className="mt-3 flex flex-wrap gap-1.5">
              {record.tags.map((item) => (
                <span key={item} className="border border-lab-line px-2 py-0.5 font-mono text-[10px] text-lab-faint">
                  {item}
                </span>
              ))}
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}
