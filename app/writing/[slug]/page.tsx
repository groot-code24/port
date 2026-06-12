import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { ArrowUpRight } from "lucide-react"
import { Equation } from "@/components/equation"
import { SectionHeading } from "@/components/section-heading"
import { TagList } from "@/components/tag-list"
import { writing } from "@/lib/data"

type PageProps = {
  params: Promise<{ slug: string }>
}

export function generateStaticParams() {
  return writing.map((article) => ({ slug: article.slug }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const article = writing.find((item) => item.slug === slug)

  if (!article) {
    return {}
  }

  return {
    title: article.title,
    description: article.thesis
  }
}

export default async function WritingDetailPage({ params }: PageProps) {
  const { slug } = await params
  const article = writing.find((item) => item.slug === slug)

  if (!article) {
    notFound()
  }

  return (
    <article>
      <SectionHeading eyebrow={`${article.topic} / ${article.date}`} title={article.title}>
        <p>{article.thesis}</p>
        <p className="mt-3 font-mono text-[11px] uppercase tracking-[0.18em] text-lab-faint">{article.readingTime}</p>
      </SectionHeading>

      <div className="mb-8">
        <TagList tags={article.tags} />
      </div>

      <div className="space-y-6 border border-lab-line bg-lab-panel p-5">
        <section>
          <h2 className="font-mono text-xs uppercase tracking-[0.22em] text-lab-faint">Outline</h2>
          <ul className="mt-4 space-y-3 text-sm leading-7 text-lab-muted">
            {article.sections.map((section) => (
              <li key={section} className="grid grid-cols-[14px_1fr] gap-3">
                <span className="mt-3 h-px bg-lab-accent" />
                <span>{section}</span>
              </li>
            ))}
          </ul>
        </section>

        {article.equation ? (
          <section className="border-t border-lab-line pt-6">
            <h2 className="font-mono text-xs uppercase tracking-[0.22em] text-lab-faint">Equation</h2>
            <div className="mt-4 overflow-x-auto border border-lab-line bg-lab-bg p-4 text-lab-ink">
              <Equation value={article.equation} />
            </div>
          </section>
        ) : null}

        {article.code ? (
          <section className="border-t border-lab-line pt-6">
            <h2 className="font-mono text-xs uppercase tracking-[0.22em] text-lab-faint">Code Block</h2>
            <pre className="mt-4 overflow-x-auto border border-lab-line bg-lab-bg p-4 text-sm leading-6 text-lab-muted">
              <code>{article.code}</code>
            </pre>
          </section>
        ) : null}

        <section className="border-t border-lab-line pt-6">
          <h2 className="font-mono text-xs uppercase tracking-[0.22em] text-lab-faint">References</h2>
          <div className="mt-4 space-y-2">
            {article.references.map((reference) =>
              reference.href ? (
                <a key={reference.label} href={reference.href} className="flex items-center gap-2 text-sm text-lab-accent underline">
                  {reference.label}
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </a>
              ) : (
                <p key={reference.label} className="text-sm text-lab-muted">
                  {reference.label}
                </p>
              )
            )}
          </div>
        </section>
      </div>
    </article>
  )
}
