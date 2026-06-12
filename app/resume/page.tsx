import type { Metadata } from "next"
import { Download } from "lucide-react"
import { SectionHeading } from "@/components/section-heading"
import { prioritySignals } from "@/lib/data"

export const metadata: Metadata = {
  title: "Resume",
  description: "Resume and compact technical signal summary for Mani Pal."
}

const experience = [
  {
    company: "Trellions",
    role: "ML Engineer / LLM Engineer",
    dates: "May 2026 – Present",
    details: [
      "Own the AI layer for a YC-backed recruitment platform with LLM scoring, job description generation, Q&A, and bias detection.",
      "Maintain production RAG pipelines with Pinecone, Weaviate, pgvector, hybrid search, and cross-encoder reranking.",
      "Own MLOps across MLflow, W&B, model versioning, CI/CD, drift monitoring, and latency/throughput SLAs."
    ]
  },
  {
    company: "RecurX",
    role: "Founding Engineer & Technical Lead",
    dates: "Jan 2024 – Nov 2025",
    details: [
      "Architected cross-chain payment infrastructure across Ethereum and Solana with sub-200ms transaction latency.",
      "Reduced p95 API latency from 280ms to 182ms through Redis, indexing, and query optimization.",
      "Built Docker, GitHub Actions, AWS ECS, OpenTelemetry, Grafana, and Prometheus deployment systems."
    ]
  },
  {
    company: "Independent Contract AI/LLM Engineer",
    role: "Clients across India, US, and EU",
    dates: "Jan 2021 – Dec 2023",
    details: [
      "Built production RAG for legal-tech serving 50+ law firms and reducing attorney document-research time by 65%.",
      "Fine-tuned Mistral-7B and Llama-2 via QLoRA on AWS SageMaker.",
      "Improved high-cardinality PostgreSQL throughput by 10x through materialized views, partitioning, and EXPLAIN-driven tuning."
    ]
  }
]

const skills = [
  "PyTorch", "JAX/Flax", "Triton", "CUDA C++", "vLLM", "SGLang", "TensorRT-LLM",
  "llama.cpp", "FSDP", "DeepSpeed ZeRO", "GRPO", "DPO", "Tensor Networks", "MPO",
  "GGUF", "Kubernetes", "FastAPI", "Rust", "TypeScript", "PostgreSQL"
]

export default function ResumePage() {
  return (
    <div className="space-y-8">
      <SectionHeading eyebrow="Resume" title="Compact technical resume">
        <p>
          The downloadable PDF is included in the app. This page keeps the frontier-AI signals visible without
          switching visitors into a traditional portfolio flow.
        </p>
      </SectionHeading>

      <a
        href="/resume/mani-pal-resume.pdf"
        className="inline-flex items-center gap-2 border border-lab-line bg-lab-panel px-4 py-3 text-sm font-medium text-lab-ink transition-colors hover:border-lab-accent"
      >
        <Download className="h-4 w-4" />
        Download PDF resume
      </a>

      <section className="border border-lab-line bg-lab-panel p-5">
        <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-lab-faint">Technical skills</p>
        <div className="mt-4 flex flex-wrap gap-2">
          {skills.map((skill) => (
            <span
              key={skill}
              className="border border-lab-line bg-lab-bg px-2.5 py-1 font-mono text-[11px] text-lab-muted"
            >
              {skill}
            </span>
          ))}
        </div>
      </section>

      <section className="grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
        {prioritySignals.map((signal) => (
          <div key={signal.id} className="border border-lab-line bg-lab-panel p-4">
            <h2 className="text-sm font-semibold text-lab-ink">{signal.label}</h2>
            <p className="mt-2 text-sm leading-6 text-lab-muted">{signal.detail}</p>
          </div>
        ))}
      </section>

      <section className="space-y-4">
        <div className="border-b border-lab-line pb-4">
          <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-lab-faint">Experience</p>
          <h2 className="mt-2 text-xl font-semibold tracking-[-0.04em] text-lab-ink sm:text-2xl">Engineering roles</h2>
        </div>
        {experience.map((item) => (
          <article key={item.company} className="border border-lab-line bg-lab-panel p-5">
            <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
              <div>
                <h3 className="text-lg font-semibold tracking-[-0.03em] text-lab-ink sm:text-xl">{item.company}</h3>
                <p className="mt-1 text-sm text-lab-muted">{item.role}</p>
              </div>
              <p className="flex-shrink-0 font-mono text-[11px] text-lab-faint">{item.dates}</p>
            </div>
            <ul className="mt-4 space-y-2 text-sm leading-6 text-lab-muted">
              {item.details.map((detail, i) => (
                <li key={i} className="flex gap-2">
                  <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-lab-line" aria-hidden="true" />
                  {detail}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </section>
    </div>
  )
}
