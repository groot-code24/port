import type { Metadata } from "next"
import Link from "next/link"
import { ArrowUpRight } from "lucide-react"
import { SectionHeading } from "@/components/section-heading"
import { TagList } from "@/components/tag-list"
import { writing } from "@/lib/data"

export const metadata: Metadata = {
  title: "Writing",
  description: "Technical essays on transformer internals, attention, CUDA optimization, Mamba, sparse models, inference, and interpretability."
}

export default function WritingPage() {
  return (
    <div>
      <SectionHeading eyebrow="Writing" title="Technical essays with equations, code, and citations">
        <p>
          These notes are written for readers who already understand modern ML systems. They emphasize mechanisms,
          tradeoffs, and reproducible engineering observations.
        </p>
      </SectionHeading>

      <div className="grid gap-4 sm:grid-cols-2">
        {writing.map((article) => (
          <Link
            key={article.slug}
            href={`/writing/${article.slug}`}
            className="border border-lab-line bg-lab-panel p-5 transition-colors hover:border-lab-accent"
          >
            <div className="flex items-center gap-3">
              <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-lab-accent">{article.topic}</span>
              <span className="font-mono text-[11px] text-lab-faint">{article.readingTime}</span>
              <ArrowUpRight className="ml-auto h-4 w-4 flex-shrink-0 text-lab-faint" />
            </div>
            <h2 className="mt-4 text-lg font-semibold tracking-[-0.03em] text-lab-ink">{article.title}</h2>
            <p className="mt-3 text-sm leading-6 text-lab-muted">{article.thesis}</p>
            <div className="mt-4">
              <TagList tags={article.tags} />
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}
