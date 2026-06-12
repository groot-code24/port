# Mani Pal Research Lab

Personal research laboratory website for Mani Pal. The site is built as a dense technical research surface rather than a portfolio or marketing page.

## Information Architecture

- `/` Research dashboard with the six priority signals, lab counters, benchmark chart, milestone timeline, systems map, and current investigations.
- `/research` Publication and manuscript index with tag filtering.
- `/research/[slug]` Research paper template with abstract, problem statement, methodology, experimental design, results, limitations, future directions, references, and BibTeX.
- `/systems` Engineering case-study index.
- `/systems/[slug]` Case-study template with motivation, constraints, architecture, bottlenecks, optimizations, benchmark methodology, results, and lessons learned.
- `/experiments` Internal notebook surface for failed experiments, reproduction studies, benchmark logs, scaling studies, compression studies, interpretability notes, open questions, and research ideas.
- `/open-source` Contribution graph plus repository, issue, root cause, patch, merged PR, impact, and complexity.
- `/writing` Technical essay index.
- `/writing/[slug]` Article template with equations, code blocks, references, and reading progress.
- `/resume` Compact resume page and downloadable PDF.
- `/search` Global research index for every project, publication, benchmark, note, experiment, article, and contribution.

## Design System

The visual system is research-first: compact typography, explicit borders, neutral panels, strong information density, and no startup-style hero, glassmorphism, stock illustration, or gradient-heavy treatment.

Core primitives:

- Shell navigation
- Research signal cards
- Dashboard metric cards
- Timeline entries
- Benchmark chart
- React Flow system diagram
- Publication filter
- Status pills
- Tag chips
- Detail sections
- BibTeX export
- Contribution graph
- Notebook blocks
- Search result cards

## Typography System

- Sans: `Inter`, `IBM Plex Sans`, system fallback.
- Mono: `JetBrains Mono`, `IBM Plex Mono`, monospace fallback.
- Serif: `Source Serif 4`, Georgia fallback.
- Page titles: 30-48px, tight tracking, high contrast.
- Section labels: 10-12px uppercase mono, wide tracking.
- Body: 14-16px, 1.6-1.75 line height.
- Dense technical metadata: mono 10-12px.

## Color System

Light theme:

- Background: `rgb(246 248 247)`
- Panel: `rgb(255 255 255)`
- Ink: `rgb(16 23 20)`
- Muted: `rgb(75 86 81)`
- Line: `rgb(213 221 216)`
- Accent: `rgb(0 124 137)`
- Signal: `rgb(0 137 91)`
- Warning: `rgb(180 70 54)`

Dark theme:

- Background: `rgb(10 14 13)`
- Panel: `rgb(15 21 19)`
- Ink: `rgb(235 241 237)`
- Muted: `rgb(172 184 178)`
- Line: `rgb(44 56 51)`
- Accent: `rgb(78 194 204)`
- Signal: `rgb(107 213 151)`
- Warning: `rgb(236 126 107)`

## Desktop Wireframes

Home desktop:

```text
Top nav
Sidebar profile + 45-second signals | Main
                               Research Dashboard title
                               Six signal cards
                               Five dashboard counters
                               Timeline + benchmark chart
                               Systems diagram
                               Current investigations
```

Research detail desktop:

```text
Top nav
Sidebar signals | Paper heading + status + tags
                | Metrics
                | Abstract
                | Problem
                | Methodology
                | Experimental design
                | Results
                | Limitations
                | Future directions
                | References
                | BibTeX export
```

Systems detail desktop:

```text
Top nav
Sidebar signals | System heading + stack
                | Metrics
                | Motivation
                | Constraints
                | Architecture
                | Bottlenecks
                | Optimization decisions
                | Benchmark methodology
                | Results
                | Lessons learned
```

## Mobile Wireframes

```text
Top nav
Horizontal route chips
Single-column page
Signal cards
Metric cards
Timeline columns collapse into stacked years
Benchmark chart full width
Notebook cards full width
Search input above tag select
```

## Interactive Diagram Specifications

Timeline:

- Data source: `timelineEvents`
- Years: 2023, 2024, 2025, 2026
- Animation: small opacity and y-axis reveal via Framer Motion
- Event types: research, system, open-source, benchmark

Benchmark chart:

- Data source: `benchmarkSeries`
- Rendering: D3 scale normalization plus accessible HTML bars
- Metrics: speculative decoding speedup, FlashAttention throughput, Sparse MoE throughput, API latency reduction, MPO memory reduction

Architecture diagram:

- Data source: `systemDiagramNodes` and `systemDiagramEdges`
- Renderer: React Flow
- Nodes: corpus/tokenizer, 700M pretraining, GRPO/DPO, GGUF/MPO, speculative serving, CUDA attention, evaluation
- Edges: token flow, checkpoint flow, deployable artifact flow, attention path, latency traces, capability evaluation

Search:

- Local client index: `searchRecords`
- Production static index: Pagefind over exported HTML in `out/pagefind`
- Filters: query plus tag selection

## Data Models

Primary TypeScript models live in `lib/types.ts`:

- `ResearchPaper`
- `SystemCaseStudy`
- `OpenSourceContribution`
- `ExperimentEntry`
- `WritingArticle`
- `SearchRecord`
- `TimelineEvent`
- `BenchmarkSeries`
- `DiagramNode`
- `DiagramEdge`

Structured content lives in `lib/data.ts`. MDX support is configured in `contentlayer.config.ts`, with example MDX files in `content/`.

## Folder Structure

```text
app/
  layout.tsx
  page.tsx
  research/
  systems/
  experiments/
  open-source/
  writing/
  resume/
  search/
components/
  benchmark-chart.tsx
  citation-export.tsx
  contribution-graph.tsx
  detail-section.tsx
  equation.tsx
  metric-grid.tsx
  navigation.tsx
  reading-progress.tsx
  research-filter.tsx
  research-timeline.tsx
  search-client.tsx
  section-heading.tsx
  site-shell.tsx
  status-pill.tsx
  system-diagram.tsx
  tag-list.tsx
  theme-script.tsx
  theme-toggle.tsx
content/
  research/
  writing/
  experiments/
lib/
  cn.ts
  data.ts
  search.ts
  types.ts
public/
  resume/
```

## Production Implementation Plan

1. Install dependencies with `npm install`.
2. Run locally with `npm run dev`.
3. Extend structured records in `lib/data.ts` as new experiments, papers, benchmarks, and notes are added.
4. Add long-form MDX files under `content/` when a record needs article-level prose.
5. Build static output and Pagefind index with `npm run build`.
6. Deploy to Vercel.
7. Add custom image assets manually when ready; the implementation intentionally does not scaffold image components.

## Page Detail Coverage

- Home: all six priority signals appear above the fold on desktop and immediately after the dashboard title on mobile.
- Research: modern lab format with citation export and paper-level references.
- Systems: project work converted into engineering case studies.
- Experiments: includes failed experiments and unfinished research questions.
- Open Source: vLLM contribution is prominent and analyzed through root cause and impact.
- Writing: supports equations, code blocks, references, and reading progress.
- Resume: PDF available from `public/resume/mani-pal-resume.pdf`.
- Search: every structured record is searchable and tag-filterable.

## Hire Mode (Business Layer)

- A `LAB / HIRE` mode switch sits in the header. `HIRE` routes to `/hire` — the contract-engagement surface with offers, process, fit criteria, FAQ, booking, and WhatsApp.
- All commercial settings live in **`lib/business.ts`**: booking link, WhatsApp number and prefill text, email, availability line, pricing, offer copy, FAQ. Edit that one file only.
- **Action required:** create a free Cal.com account and replace `bookingUrl` in `lib/business.ts` (currently a placeholder).
- The sidebar and mobile header show an availability pill linking to `/hire` so the business layer is discoverable from research mode without polluting it.

## Motion & Redesign System (v2)

- **Signature graphic:** `components/kernel-grid.tsx` — a canvas animation of a causal attention matrix computed tile-by-tile (the FlashAttention access pattern). Used in the home hero (teal), the hire hero (copper), and as a background motif in CTA bands. Theme-aware, pauses offscreen, static under `prefers-reduced-motion`.
- **Motion primitives:** `components/motion/reveal.tsx` (`Reveal`, `StaggerGroup`/`StaggerItem`, `HeroEntrance`/`HeroItem`) and `components/motion/count-up.tsx` (animated benchmark counters). All built on framer-motion, all reduced-motion safe.
- **Page transitions:** `app/template.tsx` applies a subtle fade-rise on route change.
- **Typography:** display face is Space Grotesk Variable (headings, hero, big numbers); body Inter Variable; utility JetBrains Mono Variable. Self-hosted via @fontsource-variable — no Google Fonts request, works offline and with static export.
- **Hover system:** `.panel-hover` utility (lift + shadow) in `globals.css`, disabled for reduced motion and non-hover devices.
