import Link from "next/link"

export default function NotFound() {
  return (
    <div className="border border-lab-line bg-lab-panel p-8">
      <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-lab-faint">404</p>
      <h1 className="mt-3 text-3xl font-semibold tracking-[-0.05em] text-lab-ink">Record not found</h1>
      <p className="mt-3 text-sm leading-6 text-lab-muted">
        This lab entry is not in the public index. The global search is the fastest way back into the corpus.
      </p>
      <Link href="/search" className="mt-5 inline-flex border border-lab-line px-4 py-2 text-sm text-lab-ink hover:border-lab-accent">
        Open search
      </Link>
    </div>
  )
}
