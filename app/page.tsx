import Link from "next/link"
import {
  ArrowRight,
  ArrowUpRight,
  Database,
  FileText,
  GitBranch,
  Server,
  Sigma,
  Microscope
} from "lucide-react"
import { BenchmarkChart } from "@/components/benchmark-chart"
import { ResearchTimeline } from "@/components/research-timeline"
import { SystemDiagram } from "@/components/system-diagram"
import { KernelGrid } from "@/components/kernel-grid"
import { CountUp } from "@/components/motion/count-up"
import {
  HeroEntrance,
  HeroItem,
  Reveal,
  StaggerGroup,
  StaggerItem
} from "@/components/motion/reveal"
import {
  benchmarkSeries,
  dashboardPanels,
  experiments,
  prioritySignals,
  systemDiagramEdges,
  systemDiagramNodes,
  timelineEvents
} from "@/lib/data"

const panelIcons = [FileText, GitBranch, Server, Sigma, Microscope]

const heroStats = [
  { value: 2.1, decimals: 1, suffix: "×", label: "Attention throughput", note: "vs PyTorch SDPA, A100" },
  { value: 2.4, decimals: 1, suffix: "×", label: "Decoding speedup", note: "Identical output dist." },
  { value: 93, decimals: 0, suffix: "%", label: "Memory reduction", note: "Tensor-network MPO" },
  { value: 700, decimals: 0, suffix: "M", label: "LLM from scratch", note: "Hybrid Mamba-2 + attn" }
]

export default function HomePage() {
  return (
    <div className="space-y-12">
      {/* ------------------------------------------------------- hero */}
      <section className="grid items-center gap-8 border-b border-lab-line pb-10 lg:grid-cols-[1.05fr_0.95fr]">
        <HeroEntrance className="space-y-6">
          <HeroItem>
            <p className="font-mono text-[11px] uppercase tracking-[0.26em] text-lab-faint">
              LLM systems · CUDA kernels · Inference
            </p>
          </HeroItem>
          <HeroItem>
            <h1 className="max-w-xl font-display text-4xl font-semibold leading-[1.06] tracking-[-0.03em] text-lab-ink sm:text-5xl xl:text-6xl">
              LLM inference, made{" "}
              <span className="text-lab-accent">measurably faster</span>.
            </h1>
          </HeroItem>
          <HeroItem>
            <p className="max-w-lg text-base leading-7 text-lab-muted">
              I work where the model meets the metal: attention kernels, speculative decoding,
              KV-cache behavior, compression, and the serving stack around them. Every claim on
              this site links to code, profiling traces, and benchmarks.
            </p>
          </HeroItem>
          <HeroItem>
            <div className="flex flex-wrap items-center gap-3">
              <Link
                href="/systems"
                className="inline-flex items-center gap-2 bg-lab-ink px-5 py-3 text-sm font-semibold text-lab-bg transition-opacity hover:opacity-90"
              >
                Explore the systems
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/hire"
                className="inline-flex items-center gap-2 border border-lab-biz/50 bg-lab-biz/10 px-5 py-3 text-sm font-semibold text-lab-biz transition-colors hover:bg-lab-biz hover:text-white"
              >
                Hire me for a sprint
                <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>
          </HeroItem>
          <HeroItem>
            <dl className="grid grid-cols-2 gap-x-6 gap-y-5 border-t border-lab-line pt-5 sm:grid-cols-4">
              {heroStats.map((stat) => (
                <div key={stat.label}>
                  <dt className="sr-only">{stat.label}</dt>
                  <dd className="font-display text-2xl font-semibold tracking-[-0.04em] text-lab-ink sm:text-3xl">
                    <CountUp
                      value={stat.value}
                      decimals={stat.decimals}
                      suffix={stat.suffix}
                      duration={1.6}
                    />
                  </dd>
                  <p className="mt-1 font-mono text-[10px] uppercase tracking-[0.14em] text-lab-faint">
                    {stat.label}
                  </p>
                  <p className="mt-0.5 text-[11px] leading-4 text-lab-muted">{stat.note}</p>
                </div>
              ))}
            </dl>
          </HeroItem>
        </HeroEntrance>

        <Reveal delay={0.15} y={16} className="relative">
          <div className="border border-lab-line bg-lab-panel p-4">
            <div className="flex items-center justify-between gap-3 border-b border-lab-line pb-3">
              <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-lab-faint">
                fig. 01 — tiled causal attention sweep
              </p>
              <span className="font-mono text-[10px] text-lab-accent">live</span>
            </div>
            <KernelGrid className="mt-3 aspect-square w-full" />
            <p className="mt-3 border-t border-lab-line pt-3 font-mono text-[10px] leading-5 text-lab-faint">
              Br=64 · Bc=64 · SRAM-resident · HBM traffic O(N²) → O(N)
              <Link href="/systems/flashattention-2-cuda-kernel" className="ml-2 text-lab-accent hover:underline">
                read the kernel write-up →
              </Link>
            </p>
          </div>
        </Reveal>
      </section>

      {/* ------------------------------------------------- signals */}
      <section aria-label="Featured signals">
        <Reveal>
          <div className="mb-5 flex items-end justify-between gap-3 border-b border-lab-line pb-4">
            <div>
              <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-lab-faint">
                45-second signals
              </p>
              <h2 className="mt-2 font-display text-xl font-semibold tracking-[-0.03em] text-lab-ink sm:text-2xl">
                Six things worth your scroll
              </h2>
            </div>
          </div>
        </Reveal>
        <StaggerGroup className="grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
          {prioritySignals.map((signal, index) => (
            <StaggerItem key={signal.id}>
              <Link
                href={signal.href}
                className="panel-hover group block h-full border border-lab-line bg-lab-panel p-4 hover:border-lab-accent"
              >
                <div className="flex items-center justify-between gap-3">
                  <span className="font-mono text-[11px] text-lab-faint">0{index + 1}</span>
                  <ArrowUpRight className="h-4 w-4 text-lab-faint transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-lab-accent" />
                </div>
                <h3 className="mt-4 font-display text-base font-semibold tracking-[-0.02em] text-lab-ink">
                  {signal.label}
                </h3>
                <p className="mt-2 text-sm leading-6 text-lab-muted">{signal.detail}</p>
              </Link>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </section>

      {/* ------------------------------------------------- metrics */}
      <StaggerGroup
        className="grid grid-cols-2 gap-3 md:grid-cols-3 xl:grid-cols-5"
        aria-label="Lab metrics"
      >
        {dashboardPanels.map((panel, index) => {
          const Icon = panelIcons[index] ?? Database
          return (
            <StaggerItem key={panel.title}>
              <Link
                href={panel.href}
                className="panel-hover block h-full border border-lab-line bg-lab-panel p-4 hover:border-lab-accent"
              >
                <Icon className="h-4 w-4 text-lab-accent" />
                <p className="mt-3 font-mono text-[10px] uppercase tracking-[0.2em] text-lab-faint">
                  {panel.title}
                </p>
                <p className="mt-2 font-display text-2xl font-semibold tracking-[-0.04em] text-lab-ink sm:text-3xl">
                  {panel.value}
                </p>
                <p className="mt-2 text-xs leading-5 text-lab-muted">{panel.detail}</p>
              </Link>
            </StaggerItem>
          )
        })}
      </StaggerGroup>

      {/* --------------------------------------- timeline + chart */}
      <div className="grid gap-6 lg:grid-cols-[1fr_320px] xl:grid-cols-[1fr_360px]">
        <Reveal>
          <ResearchTimeline events={timelineEvents} />
        </Reveal>
        <Reveal delay={0.1}>
          <BenchmarkChart data={benchmarkSeries} />
        </Reveal>
      </div>

      {/* ------------------------------------------------- systems */}
      <section className="space-y-4" aria-label="Systems map">
        <Reveal>
          <div className="flex flex-col gap-2 border-b border-lab-line pb-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-lab-faint">
                Systems map
              </p>
              <h2 className="mt-2 font-display text-xl font-semibold tracking-[-0.03em] text-lab-ink sm:text-2xl">
                Training, compression, kernels, serving, evaluation
              </h2>
            </div>
            <Link
              href="/systems"
              className="text-sm font-medium text-lab-accent underline underline-offset-4"
            >
              View case studies
            </Link>
          </div>
        </Reveal>
        <Reveal delay={0.08}>
          <SystemDiagram nodes={systemDiagramNodes} edges={systemDiagramEdges} />
        </Reveal>
      </section>

      {/* --------------------------------------------- experiments */}
      <Reveal>
        <section className="border border-lab-line bg-lab-panel p-5">
          <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-lab-faint">
                Current investigations
              </p>
              <h2 className="mt-2 font-display text-xl font-semibold tracking-[-0.03em] text-lab-ink sm:text-2xl">
                Internal notebook surface
              </h2>
            </div>
            <Link
              href="/experiments"
              className="text-sm font-medium text-lab-accent underline underline-offset-4"
            >
              Open notebook
            </Link>
          </div>
          <StaggerGroup className="mt-5 grid gap-3 sm:grid-cols-2">
            {experiments.slice(0, 4).map((experiment) => (
              <StaggerItem key={experiment.slug}>
                <article className="panel-hover h-full border border-lab-line bg-lab-bg p-4 hover:border-lab-accent">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-lab-accent">
                      {experiment.category}
                    </span>
                    <span className="font-mono text-[10px] text-lab-faint">{experiment.status}</span>
                  </div>
                  <h3 className="mt-3 text-sm font-semibold leading-snug text-lab-ink">
                    {experiment.title}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-lab-muted">{experiment.question}</p>
                </article>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </section>
      </Reveal>

      {/* ----------------------------------------------- hire band */}
      <Reveal>
        <section className="relative overflow-hidden border border-lab-biz/40 bg-lab-biz/5 p-6 sm:p-8">
          <div className="pointer-events-none absolute -right-10 -top-10 hidden h-56 w-56 opacity-50 sm:block">
            <KernelGrid accent="biz" cells={18} block={3} className="h-full w-full" />
          </div>
          <div className="relative max-w-2xl">
            <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-lab-biz">
              Contract engagements
            </p>
            <h2 className="mt-3 font-display text-xl font-semibold tracking-[-0.03em] text-lab-ink sm:text-2xl">
              Serving models in production and the GPU bill hurts?
            </h2>
            <p className="mt-2 text-sm leading-6 text-lab-muted">
              Fixed-scope inference optimization sprints with a benchmark target agreed up front —
              and a guarantee behind it.
            </p>
            <Link
              href="/hire"
              className="mt-5 inline-flex items-center gap-2 bg-lab-biz px-5 py-3 text-sm font-semibold text-white transition-opacity hover:opacity-90"
            >
              See engagements
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </section>
      </Reveal>
    </div>
  )
}
