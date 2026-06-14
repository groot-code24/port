// ---------------------------------------------------------------------------
// BUSINESS / HIRE MODE CONFIG
// Everything commercial lives here. Edit this one file to change links,
// pricing, availability, or offer copy. No other file needs touching.
// ---------------------------------------------------------------------------

export const businessConfig = {
  // TODO(Mani): create a free Cal.com account and replace this link.
  // Until then the button still works — it falls back to email if you set
  // bookingUrl to "".
  bookingUrl: "https://calendly.com/palmani2410/new-meeting",
  whatsappNumber: "+91 7380626997",
  whatsappPrefill:
    "Hi Mani — found your portfolio. I'd like to talk about an inference optimization engagement.",
  email: "palmani2410@gmail.com",
  emailSubject: "Inference optimization engagement",
  availability: "Available · 2 sprint slots this month",
  responseTime: "Replies within 12 hours, IST (UTC+5:30)",
  timezoneNote:
    "Full overlap with EU working hours; US East mornings and US West evenings covered."
} as const

export const whatsappUrl = `https://wa.me/${businessConfig.whatsappNumber}?text=${encodeURIComponent(
  businessConfig.whatsappPrefill
)}`

export const emailUrl = `mailto:${businessConfig.email}?subject=${encodeURIComponent(
  businessConfig.emailSubject
)}`

export interface ProofMetric {
  value: string
  label: string
  detail: string
  href: string
  external?: boolean
}

export const proofMetrics: ProofMetric[] = [
  {
    value: "2.1×",
    label: "Attention throughput",
    detail:
      "FlashAttention-2 written from scratch in CUDA C++, profiled against PyTorch SDPA on A100 at 4096 sequence length.",
    href: "/systems/flashattention-2-cuda-kernel"
  },
  {
    value: "2.4×",
    label: "Inference speedup",
    detail:
      "Draft–verifier speculative decoding runtime with mathematically identical output distributions, served via an OpenAI-compatible API.",
    href: "/systems/speculative-decoding-runtime"
  },
  {
    value: "Merged",
    label: "vLLM contribution",
    detail:
      "Production fix for a KV-cache hang in vLLM's disaggregated prefill pipeline — the serving engine your stack likely runs on.",
    href: "/open-source"
  }
]

export interface Engagement {
  id: string
  name: string
  price: string
  duration: string
  summary: string
  deliverables: string[]
  guarantee: string
  terms: string
}

export const engagements: Engagement[] = [
  {
    id: "audit",
    name: "Inference Audit Sprint",
    price: "$1,500 fixed",
    duration: "2 days",
    summary:
      "I profile your serving stack end to end and hand you a prioritized optimization plan with projected cost and latency savings.",
    deliverables: [
      "Profiling of your current serving path (vLLM / SGLang / TensorRT-LLM / llama.cpp / custom)",
      "Bottleneck report: batching, KV-cache, kernels, quantization, routing",
      "Prioritized optimization plan with projected savings per item",
      "30-minute walkthrough call with your team"
    ],
    guarantee:
      "If the audit doesn't identify at least 20% of provable cost or latency improvement, the second half of the fee is refunded.",
    terms: "50% to book the slot · 50% on delivery"
  },
  {
    id: "speedup",
    name: "Speedup Sprint",
    price: "$2,500–3,500 fixed",
    duration: "3–5 days",
    summary:
      "I implement the highest-impact optimization from the audit — or one you already know you need — and prove it with before/after benchmarks.",
    deliverables: [
      "Implementation: batching strategy, quantization, speculative decoding, KV-cache tuning, or kernel-level work",
      "Before/after benchmark report on your real traffic shape",
      "Production-ready code merged into your repo with tests",
      "Handoff doc so your team owns it after I leave"
    ],
    guarantee:
      "Scope is pinned to an agreed benchmark target up front. Miss the target, and the second half of the fee is refunded.",
    terms: "50% to book the slot · 50% on delivery"
  },
  {
    id: "retainer",
    name: "Fractional Inference Engineer",
    price: "From $5,000/month",
    duration: "Monthly · limited seats",
    summary:
      "Ongoing ownership of your inference layer — cost, latency, reliability — without a full-time hire.",
    deliverables: [
      "Continuous profiling and optimization of your serving stack",
      "Architecture reviews for new model launches and traffic growth",
      "On-call for inference incidents during agreed hours",
      "Monthly cost/latency report to leadership"
    ],
    guarantee: "Month-to-month. Cancel anytime with 2 weeks' notice.",
    terms: "Billed monthly in advance"
  }
]

export const processSteps = [
  {
    step: "01",
    name: "Intro call",
    detail: "15 minutes. You describe the stack and the pain; I tell you honestly whether I can move the number."
  },
  {
    step: "02",
    name: "Scope + deposit",
    detail: "Fixed scope and benchmark target in writing. 50% deposit locks the slot; I typically start within a week."
  },
  {
    step: "03",
    name: "Sprint",
    detail: "Heads-down work with a short written update every day. No meetings unless something needs a decision."
  },
  {
    step: "04",
    name: "Handoff",
    detail: "Benchmark report, merged code, handoff doc. Your team owns everything; I stay reachable for follow-ups."
  }
]

export const fitSignals = {
  goodFit: [
    "You serve LLMs in production and the GPU bill or p95 latency hurts",
    "You run vLLM, SGLang, TensorRT-LLM, llama.cpp, or a custom serving path",
    "You want a fixed-scope engagement with a measurable target, not open-ended hours",
    "Your team will own the result — I optimize and hand off"
  ],
  badFit: [
    "No production traffic yet — optimization before load is premature",
    "You need a full application built end to end",
    "You want indefinite hourly staff augmentation",
    "The bottleneck is the model's quality, not its serving cost"
  ]
}

export const faq = [
  {
    q: "How do you access our stack?",
    a: "Read-only repo access plus profiling traces is usually enough for the audit. For implementation sprints, a scoped branch and CI access. I'll sign your NDA before seeing anything."
  },
  {
    q: "What about timezones?",
    a: "I work from Delhi (IST, UTC+5:30) — full overlap with European hours, and US East mornings / US West evenings are covered. Sprints are async-first with a written daily update."
  },
  {
    q: "How do payments work?",
    a: "Wise, wire transfer, or Stripe invoice — whatever your finance team prefers. 50% books the slot, 50% on delivery against the agreed benchmark."
  },
  {
    q: "How soon can you start?",
    a: "Typically within a week of the deposit. If the slot pill above says slots are open, the queue is short."
  }
]
