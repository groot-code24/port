import type { ReactNode } from "react"
import Link from "next/link"
import { ArrowUpRight, Github, Linkedin, MapPin, Mail, Radio } from "lucide-react"
import { prioritySignals } from "@/lib/data"
import { businessConfig } from "@/lib/business"
import { ReadingProgress } from "./reading-progress"
import { Navigation } from "./navigation"

export function SiteShell({ children }: { children: ReactNode }) {
  return (
    <>
      <ReadingProgress />
      <Navigation />

      <div className="border-b border-lab-line bg-lab-panel lg:hidden">
        <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6">
          <p className="font-mono text-[10px] uppercase tracking-[0.24em] text-lab-faint">Engineer-researcher</p>
          <h1 className="mt-1.5 text-xl font-semibold tracking-[-0.04em] text-lab-ink">Mani Pal</h1>
          <p className="mt-2 max-w-2xl text-sm leading-6 text-lab-muted">
            LLM systems, CUDA kernels, inference optimization, compression, interpretability, and distributed AI infrastructure.
          </p>
          <div className="mt-3 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-lab-muted">
            <Link href="/hire" className="flex items-center gap-1.5 font-medium text-lab-biz hover:opacity-80 transition-opacity">
              <span className="relative flex h-1.5 w-1.5" aria-hidden="true">
                <span className="absolute inline-flex h-full w-full rounded-full bg-current opacity-60 motion-safe:animate-ping" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-current" />
              </span>
              Available for contract work
            </Link>
            <a href="mailto:palmani2410@gmail.com" className="flex items-center gap-1.5 hover:text-lab-ink transition-colors">
              <Mail className="h-3.5 w-3.5 flex-shrink-0" />
              <span className="hidden sm:inline">palmani2410@gmail.com</span>
              <span className="sm:hidden">Email</span>
            </a>
            <span className="flex items-center gap-1.5">
              <MapPin className="h-3.5 w-3.5 flex-shrink-0" />
              Delhi, India
            </span>
            <a
              href="https://github.com/groot-code24"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 hover:text-lab-ink transition-colors"
            >
              <Github className="h-3.5 w-3.5 flex-shrink-0" />
              GitHub
            </a>
            <a
              href="https://linkedin.com/in/manipalgrokking"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 hover:text-lab-ink transition-colors"
            >
              <Linkedin className="h-3.5 w-3.5 flex-shrink-0" />
              LinkedIn
            </a>
          </div>
        </div>
      </div>

      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 px-4 py-8 sm:px-6 lg:grid-cols-[260px_1fr] lg:px-8 xl:grid-cols-[280px_1fr]">
        <aside className="hidden lg:block" data-pagefind-ignore>
          <div className="sticky top-24 space-y-6">
            <div className="border border-lab-line bg-lab-panel p-5">
              <p className="font-mono text-[10px] uppercase tracking-[0.24em] text-lab-faint">Engineer-researcher</p>
              <h1 className="mt-3 text-2xl font-semibold tracking-[-0.04em] text-lab-ink">Mani Pal</h1>
              <p className="mt-3 text-sm leading-6 text-lab-muted">
                LLM systems, CUDA kernels, inference optimization, compression, interpretability, and distributed AI infrastructure.
              </p>
              <div className="mt-5 space-y-3 text-sm text-lab-muted">
                <a className="flex items-center gap-2 hover:text-lab-ink transition-colors" href="mailto:palmani2410@gmail.com">
                  <Mail className="h-4 w-4 flex-shrink-0" />
                  <span className="truncate">palmani2410@gmail.com</span>
                </a>
                <p className="flex items-center gap-2">
                  <MapPin className="h-4 w-4 flex-shrink-0" />
                  Delhi, India
                </p>
                <a
                  className="flex items-center gap-2 hover:text-lab-ink transition-colors"
                  href="https://github.com/groot-code24"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github className="h-4 w-4 flex-shrink-0" />
                  groot-code24
                </a>
                <a
                  className="flex items-center gap-2 hover:text-lab-ink transition-colors"
                  href="https://linkedin.com/in/manipalgrokking"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Linkedin className="h-4 w-4 flex-shrink-0" />
                  manipalgrokking
                </a>
              </div>
            </div>
            <Link
              href="/hire"
              className="group block border border-lab-biz/40 bg-lab-panel p-5 transition-colors hover:border-lab-biz"
            >
              <span className="flex items-center gap-2 font-mono text-[10px] font-semibold uppercase tracking-[0.24em] text-lab-biz">
                <span className="relative flex h-1.5 w-1.5" aria-hidden="true">
                  <span className="absolute inline-flex h-full w-full rounded-full bg-current opacity-60 motion-safe:animate-ping" />
                  <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-current" />
                </span>
                {businessConfig.availability}
              </span>
              <p className="mt-3 text-sm leading-6 text-lab-muted">
                Fixed-scope inference optimization sprints. Benchmarked results, guaranteed
                findings.
              </p>
              <span className="mt-3 inline-flex items-center gap-1 text-sm font-medium text-lab-biz">
                View engagements
                <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </span>
            </Link>
            <div className="border border-lab-line bg-lab-panel p-5">
              <div className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.24em] text-lab-faint">
                <Radio className="h-3.5 w-3.5" />
                45-second signals
              </div>
              <div className="mt-4 space-y-3">
                {prioritySignals.map((signal, index) => (
                  <Link
                    key={signal.id}
                    href={signal.href}
                    className="block border-l-2 border-lab-line pl-3 text-sm transition-colors hover:border-lab-accent"
                  >
                    <span className="font-mono text-[10px] text-lab-faint">0{index + 1}</span>
                    <span className="mt-0.5 block font-medium text-lab-ink">{signal.label}</span>
                    <span className="mt-1 block text-xs leading-5 text-lab-muted">{signal.detail}</span>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </aside>
        <main className="min-w-0" id="main-content" data-pagefind-body>
          {children}
        </main>
      </div>
    </>
  )
}
