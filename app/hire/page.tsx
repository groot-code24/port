import type { Metadata } from "next"
import Link from "next/link"
import {
  ArrowUpRight,
  CalendarClock,
  Check,
  Mail,
  MessageCircle,
  ShieldCheck,
  X
} from "lucide-react"
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
  businessConfig,
  emailUrl,
  engagements,
  faq,
  fitSignals,
  processSteps,
  proofMetrics,
  whatsappUrl
} from "@/lib/business"

export const metadata: Metadata = {
  title: "Hire — Inference Optimization Engagements",
  description:
    "Fixed-scope LLM inference optimization sprints: cut GPU cost and latency with benchmarked, guaranteed results. vLLM contributor, CUDA kernel engineer."
}

const bookingHref = businessConfig.bookingUrl || emailUrl

const proofNumbers: Record<string, { value: number; decimals: number; suffix: string } | null> = {
  "Attention throughput": { value: 2.1, decimals: 1, suffix: "×" },
  "Inference speedup": { value: 2.4, decimals: 1, suffix: "×" },
  "vLLM contribution": null
}

export default function HirePage() {
  return (
    <div className="space-y-12 pb-24 lg:pb-0">
      {/* ------------------------------------------------ hero */}
      <section className="grid items-center gap-8 border-b border-lab-line pb-10 lg:grid-cols-[1.1fr_0.9fr]">
        <HeroEntrance className="space-y-6">
          <HeroItem>
            <div className="flex flex-wrap items-center gap-3">
              <span className="inline-flex items-center gap-2 border border-lab-biz/50 bg-lab-biz/10 px-3 py-1.5 font-mono text-[10px] font-semibold uppercase tracking-[0.2em] text-lab-biz">
                <span className="relative flex h-1.5 w-1.5" aria-hidden="true">
                  <span className="absolute inline-flex h-full w-full rounded-full bg-current opacity-60 motion-safe:animate-ping" />
                  <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-current" />
                </span>
                {businessConfig.availability}
              </span>
              <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-lab-faint">
                {businessConfig.responseTime}
              </span>
            </div>
          </HeroItem>

          <HeroItem>
            <h1 className="max-w-2xl font-display text-4xl font-semibold leading-[1.06] tracking-[-0.03em] text-lab-ink sm:text-5xl">
              I cut LLM inference cost and latency.{" "}
              <span className="text-lab-biz">Fixed scope. Benchmarked. Guaranteed.</span>
            </h1>
          </HeroItem>

          <HeroItem>
            <p className="max-w-xl text-base leading-7 text-lab-muted">
              If you serve models in production and the GPU bill or p95 latency hurts, I find the
              bottleneck and move the number — then hand everything to your team. Every engagement
              is pinned to a measurable target up front. Miss the target, and you don&apos;t pay
              the second half.
            </p>
          </HeroItem>

          <HeroItem>
            <div className="flex flex-wrap items-center gap-3">
              <a
                href={bookingHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-lab-biz px-5 py-3 text-sm font-semibold text-white transition-opacity hover:opacity-90"
              >
                <CalendarClock className="h-4 w-4" />
                Book a 15-min intro call
              </a>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 border border-lab-line bg-lab-panel px-5 py-3 text-sm font-medium text-lab-ink transition-colors hover:border-lab-biz"
              >
                <MessageCircle className="h-4 w-4 text-lab-biz" />
                WhatsApp
              </a>
              <a
                href={emailUrl}
                className="inline-flex items-center gap-2 border border-lab-line bg-lab-panel px-5 py-3 text-sm font-medium text-lab-ink transition-colors hover:border-lab-biz"
              >
                <Mail className="h-4 w-4 text-lab-biz" />
                Email
              </a>
            </div>
          </HeroItem>
        </HeroEntrance>

        <Reveal delay={0.15} y={16}>
          <div className="border border-lab-line bg-lab-panel p-4">
            <div className="flex items-center justify-between gap-3 border-b border-lab-line pb-3">
              <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-lab-faint">
                fig. 02 — the work, in one picture
              </p>
              <span className="font-mono text-[10px] text-lab-biz">live</span>
            </div>
            <KernelGrid accent="biz" className="mt-3 aspect-square w-full" />
            <p className="mt-3 border-t border-lab-line pt-3 font-mono text-[10px] leading-5 text-lab-faint">
              Same sweep your serving stack runs millions of times an hour. I make each pass
              cheaper.
            </p>
          </div>
        </Reveal>
      </section>

      {/* ------------------------------------------------ proof */}
      <section aria-label="Evidence">
        <Reveal>
          <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-lab-faint">
            Evidence, not adjectives
          </p>
        </Reveal>
        <StaggerGroup className="mt-4 grid gap-3 sm:grid-cols-3">
          {proofMetrics.map((metric) => {
            const num = proofNumbers[metric.label]
            return (
              <StaggerItem key={metric.label}>
                <Link
                  href={metric.href}
                  className="panel-hover group block h-full border border-lab-line bg-lab-panel p-5 hover:border-lab-biz"
                >
                  <div className="flex items-start justify-between gap-3">
                    <p className="font-display text-3xl font-semibold tracking-[-0.05em] text-lab-biz">
                      {num ? (
                        <CountUp
                          value={num.value}
                          decimals={num.decimals}
                          suffix={num.suffix}
                          duration={1.5}
                        />
                      ) : (
                        metric.value
                      )}
                    </p>
                    <ArrowUpRight className="h-4 w-4 text-lab-faint transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-lab-biz" />
                  </div>
                  <p className="mt-2 font-mono text-[10px] uppercase tracking-[0.2em] text-lab-faint">
                    {metric.label}
                  </p>
                  <p className="mt-2 text-sm leading-6 text-lab-muted">{metric.detail}</p>
                </Link>
              </StaggerItem>
            )
          })}
        </StaggerGroup>
        <Reveal delay={0.1}>
          <p className="mt-3 text-xs leading-5 text-lab-faint">
            Every number links to the full write-up — methodology, profiling traces, and code.
          </p>
        </Reveal>
      </section>

      {/* ------------------------------------------------ engagements */}
      <section aria-label="Engagements" className="space-y-4">
        <Reveal>
          <div className="border-b border-lab-line pb-4">
            <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-lab-faint">
              Engagements
            </p>
            <h2 className="mt-2 font-display text-xl font-semibold tracking-[-0.03em] text-lab-ink sm:text-2xl">
              Three ways to work together
            </h2>
          </div>
        </Reveal>

        <StaggerGroup className="grid gap-3 lg:grid-cols-3">
          {engagements.map((offer) => (
            <StaggerItem key={offer.id} className="h-full">
              <article className="panel-hover flex h-full flex-col border border-lab-line bg-lab-panel hover:border-lab-biz">
                <div className="border-b border-lab-line p-5">
                  <div className="flex items-baseline justify-between gap-3">
                    <h3 className="font-display text-base font-semibold tracking-[-0.02em] text-lab-ink">
                      {offer.name}
                    </h3>
                    <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-lab-faint">
                      {offer.duration}
                    </span>
                  </div>
                  <p className="mt-3 font-display text-2xl font-semibold tracking-[-0.04em] text-lab-biz">
                    {offer.price}
                  </p>
                  <p className="mt-1 font-mono text-[10px] uppercase tracking-[0.16em] text-lab-faint">
                    {offer.terms}
                  </p>
                </div>

                <div className="flex flex-1 flex-col gap-4 p-5">
                  <p className="text-sm leading-6 text-lab-muted">{offer.summary}</p>
                  <ul className="space-y-2.5">
                    {offer.deliverables.map((item) => (
                      <li key={item} className="flex gap-2.5 text-sm leading-6 text-lab-muted">
                        <Check className="mt-1 h-3.5 w-3.5 flex-shrink-0 text-lab-biz" />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-auto border border-lab-biz/30 bg-lab-biz/5 p-3.5">
                    <p className="flex gap-2 text-xs leading-5 text-lab-muted">
                      <ShieldCheck className="mt-0.5 h-3.5 w-3.5 flex-shrink-0 text-lab-biz" />
                      {offer.guarantee}
                    </p>
                  </div>
                </div>
              </article>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </section>

      {/* ------------------------------------------------ process */}
      <section aria-label="Process" className="space-y-4">
        <Reveal>
          <div className="border-b border-lab-line pb-4">
            <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-lab-faint">
              Process
            </p>
            <h2 className="mt-2 font-display text-xl font-semibold tracking-[-0.03em] text-lab-ink sm:text-2xl">
              Intro call to handoff
            </h2>
          </div>
        </Reveal>
        <StaggerGroup className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4" role="list">
          {processSteps.map((step) => (
            <StaggerItem key={step.step}>
              <div role="listitem" className="h-full border border-lab-line bg-lab-panel p-5">
                <span className="font-mono text-[11px] text-lab-biz">{step.step}</span>
                <h3 className="mt-3 text-sm font-semibold text-lab-ink">{step.name}</h3>
                <p className="mt-2 text-sm leading-6 text-lab-muted">{step.detail}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </section>

      {/* ------------------------------------------------ fit */}
      <section aria-label="Fit" className="grid gap-3 lg:grid-cols-2">
        <Reveal>
          <div className="h-full border border-lab-line bg-lab-panel p-5">
            <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-lab-signal">
              Good fit
            </p>
            <ul className="mt-4 space-y-3">
              {fitSignals.goodFit.map((item) => (
                <li key={item} className="flex gap-2.5 text-sm leading-6 text-lab-muted">
                  <Check className="mt-1 h-3.5 w-3.5 flex-shrink-0 text-lab-signal" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
        <Reveal delay={0.1}>
          <div className="h-full border border-lab-line bg-lab-panel p-5">
            <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-lab-warn">
              Not a fit
            </p>
            <ul className="mt-4 space-y-3">
              {fitSignals.badFit.map((item) => (
                <li key={item} className="flex gap-2.5 text-sm leading-6 text-lab-muted">
                  <X className="mt-1 h-3.5 w-3.5 flex-shrink-0 text-lab-warn" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </section>

      {/* ------------------------------------------------ faq */}
      <section aria-label="FAQ" className="space-y-4">
        <Reveal>
          <div className="border-b border-lab-line pb-4">
            <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-lab-faint">FAQ</p>
          </div>
        </Reveal>
        <StaggerGroup className="grid gap-3 sm:grid-cols-2">
          {faq.map((item) => (
            <StaggerItem key={item.q}>
              <div className="h-full border border-lab-line bg-lab-panel p-5">
                <h3 className="text-sm font-semibold text-lab-ink">{item.q}</h3>
                <p className="mt-2 text-sm leading-6 text-lab-muted">{item.a}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </section>

      {/* ------------------------------------------------ closing CTA */}
      <Reveal>
        <section
          aria-label="Book"
          className="relative overflow-hidden border border-lab-biz/40 bg-lab-biz/5 p-6 sm:p-8"
        >
          <div className="pointer-events-none absolute -bottom-12 -right-12 hidden h-64 w-64 opacity-40 sm:block">
            <KernelGrid accent="biz" cells={18} block={3} className="h-full w-full" />
          </div>
          <div className="relative">
            <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-lab-biz">
              {businessConfig.availability}
            </p>
            <h2 className="mt-3 max-w-2xl font-display text-xl font-semibold tracking-[-0.03em] text-lab-ink sm:text-2xl">
              Fifteen minutes to find out if I can move your number.
            </h2>
            <p className="mt-2 max-w-2xl text-sm leading-6 text-lab-muted">
              Bring your serving setup and the metric that hurts. I&apos;ll tell you honestly
              whether there&apos;s 20%+ on the table — and if there isn&apos;t, I&apos;ll say so on
              the call.
            </p>
            <div className="mt-5 flex flex-wrap items-center gap-3">
              <a
                href={bookingHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-lab-biz px-5 py-3 text-sm font-semibold text-white transition-opacity hover:opacity-90"
              >
                <CalendarClock className="h-4 w-4" />
                Book the intro call
              </a>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 border border-lab-line bg-lab-panel px-5 py-3 text-sm font-medium text-lab-ink transition-colors hover:border-lab-biz"
              >
                <MessageCircle className="h-4 w-4 text-lab-biz" />
                Message on WhatsApp
              </a>
            </div>
          </div>
        </section>
      </Reveal>

      {/* ------------------------------------------- mobile sticky CTA */}
      <div className="fixed inset-x-0 bottom-0 z-40 border-t border-lab-line bg-lab-bg/95 p-3 backdrop-blur-sm lg:hidden">
        <div className="mx-auto flex max-w-7xl gap-2">
          <a
            href={bookingHref}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-1 items-center justify-center gap-2 bg-lab-biz px-4 py-3 text-sm font-semibold text-white"
          >
            <CalendarClock className="h-4 w-4" />
            Book a call
          </a>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 border border-lab-line bg-lab-panel px-4 py-3 text-sm font-medium text-lab-ink"
            aria-label="Message on WhatsApp"
          >
            <MessageCircle className="h-4 w-4 text-lab-biz" />
            WhatsApp
          </a>
        </div>
      </div>
    </div>
  )
}
