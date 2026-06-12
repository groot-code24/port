"use client"

import { Check, Clipboard } from "lucide-react"
import { useState } from "react"
import type { Citation } from "@/lib/types"

export function CitationExport({ citation }: { citation: Citation }) {
  const [copied, setCopied] = useState(false)

  async function copy() {
    await navigator.clipboard.writeText(citation.bibtex)
    setCopied(true)
    window.setTimeout(() => setCopied(false), 1400)
  }

  return (
    <div className="border border-lab-line bg-lab-panel p-4">
      <div className="flex items-center justify-between gap-3">
        <h2 className="font-mono text-xs uppercase tracking-[0.22em] text-lab-faint">BibTeX</h2>
        <button
          type="button"
          onClick={copy}
          className="inline-flex items-center gap-2 border border-lab-line px-3 py-1.5 text-xs text-lab-muted transition hover:text-lab-ink"
        >
          {copied ? <Check className="h-3.5 w-3.5" /> : <Clipboard className="h-3.5 w-3.5" />}
          {copied ? "Copied" : "Copy"}
        </button>
      </div>
      <pre className="mt-4 overflow-x-auto border border-lab-line bg-lab-bg p-4 text-xs leading-6 text-lab-muted">
        <code>{citation.bibtex}</code>
      </pre>
    </div>
  )
}
