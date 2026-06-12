export type LabStatus = "published" | "active" | "reproduced" | "archived" | "failed" | "draft"

export type SignalId =
  | "llm-700m"
  | "flashattention"
  | "speculative-decoding"
  | "compactifai"
  | "vllm"
  | "interpretability"

export type LabMetric = {
  label: string
  value: string
  detail: string
}

export type Reference = {
  label: string
  href?: string
}

export type Citation = {
  key: string
  bibtex: string
}

export type TimelineEvent = {
  year: "2023" | "2024" | "2025" | "2026"
  title: string
  type: "research" | "system" | "open-source" | "benchmark"
  signal?: SignalId
  summary: string
}

export type DashboardPanel = {
  title: string
  value: string
  detail: string
  href: string
}

export type ResearchPaper = {
  slug: string
  title: string
  subtitle: string
  status: LabStatus
  year: string
  venue: string
  authors: string[]
  tags: string[]
  signal?: SignalId
  abstract: string
  problem: string
  methodology: string[]
  experimentalDesign: string[]
  results: string[]
  limitations: string[]
  futureDirections: string[]
  references: Reference[]
  citation: Citation
  metrics: LabMetric[]
}

export type SystemCaseStudy = {
  slug: string
  title: string
  subtitle: string
  status: LabStatus
  year: string
  stack: string[]
  tags: string[]
  signal?: SignalId
  motivation: string
  designConstraints: string[]
  architecture: string[]
  bottlenecks: string[]
  optimizationDecisions: string[]
  benchmarkMethodology: string[]
  results: string[]
  lessons: string[]
  metrics: LabMetric[]
}

export type OpenSourceContribution = {
  slug: string
  repository: string
  issue: string
  rootCause: string
  patch: string
  mergedPr: string
  impact: string
  complexity: string
  year: string
  signal?: SignalId
  tags: string[]
}

export type ExperimentEntry = {
  slug: string
  title: string
  category:
    | "Failed Experiments"
    | "Reproduction Studies"
    | "Benchmark Logs"
    | "Scaling Studies"
    | "Compression Studies"
    | "Interpretability Notes"
    | "Open Questions"
    | "Research Ideas"
  date: string
  status: LabStatus
  tags: string[]
  question: string
  setup: string[]
  observations: string[]
  conclusion: string
  nextStep: string
}

export type WritingArticle = {
  slug: string
  title: string
  topic: string
  date: string
  readingTime: string
  tags: string[]
  thesis: string
  sections: string[]
  code?: string
  equation?: string
  references: Reference[]
}

export type SearchRecord = {
  id: string
  title: string
  type: "Research" | "System" | "Experiment" | "Open Source" | "Writing" | "Benchmark"
  href: string
  summary: string
  tags: string[]
  year?: string
  priority?: number
}

export type DiagramNode = {
  id: string
  label: string
  group: string
}

export type DiagramEdge = {
  source: string
  target: string
  label: string
}

export type BenchmarkSeries = {
  label: string
  value: number
  unit: string
  baseline?: number
}
