import type { Metadata } from "next"
import { ContributionGraph } from "@/components/contribution-graph"
import { GithubRepos } from "@/components/github-repos"
import { SectionHeading } from "@/components/section-heading"
import { TagList } from "@/components/tag-list"
import { openSourceContributions } from "@/lib/data"

export const metadata: Metadata = {
  title: "Open Source",
  description: "Open-source contributions and public repositories by Mani Pal."
}

export default function OpenSourcePage() {
  return (
    <div className="space-y-8">
      <SectionHeading eyebrow="Open Source" title="Contributions, repositories, and research code">
        <p>
          Highlighted contribution to vLLM — distributed inference engineering: request identity, KV cache transfer, and
          production reliability across prefill and decode nodes. Public repositories include LLM systems, CUDA kernels,
          and AI research implementations.
        </p>
      </SectionHeading>

      <ContributionGraph />

      <GithubRepos />

      <div className="space-y-5">
        {openSourceContributions.map((contribution) => (
          <article key={contribution.slug} className="border border-lab-line bg-lab-panel p-5">
            <div className="flex flex-wrap items-center gap-3">
              <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-lab-accent">
                {contribution.repository}
              </span>
              <span className="font-mono text-[11px] text-lab-faint">{contribution.mergedPr}</span>
              <span className="font-mono text-[11px] text-lab-faint">{contribution.year}</span>
            </div>
            <h2 className="mt-4 text-xl font-semibold tracking-[-0.04em] text-lab-ink sm:text-2xl">
              Disaggregated prefill pipeline KV cache request-ID bug fix
            </h2>
            <div className="mt-5 grid gap-4 sm:grid-cols-2">
              <ContributionField title="Issue" body={contribution.issue} />
              <ContributionField title="Root Cause" body={contribution.rootCause} />
              <ContributionField title="Patch" body={contribution.patch} />
              <ContributionField title="Technical Impact" body={contribution.impact} />
              <ContributionField title="Engineering Complexity" body={contribution.complexity} />
              <ContributionField title="Merged PR" body={contribution.mergedPr} />
            </div>
            <div className="mt-5">
              <TagList tags={contribution.tags} />
            </div>
          </article>
        ))}
      </div>
    </div>
  )
}

function ContributionField({ title, body }: { title: string; body: string }) {
  return (
    <section className="border border-lab-line bg-lab-bg p-4">
      <h3 className="font-mono text-[11px] uppercase tracking-[0.2em] text-lab-faint">{title}</h3>
      <p className="mt-3 text-sm leading-6 text-lab-muted">{body}</p>
    </section>
  )
}
