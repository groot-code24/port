import type {
  BenchmarkSeries,
  DashboardPanel,
  DiagramEdge,
  DiagramNode,
  ExperimentEntry,
  OpenSourceContribution,
  ResearchPaper,
  SearchRecord,
  SystemCaseStudy,
  TimelineEvent,
  WritingArticle
} from "./types"

export const navItems = [
  { label: "Home", href: "/" },
  { label: "Research", href: "/research" },
  { label: "Systems", href: "/systems" },
  { label: "Experiments", href: "/experiments" },
  { label: "Open Source", href: "/open-source" },
  { label: "Writing", href: "/writing" },
  { label: "Resume", href: "/resume" },
  { label: "Search", href: "/search" }
]

export const prioritySignals = [
  {
    id: "llm-700m",
    label: "700M LLM from scratch",
    href: "/systems/project-chimera",
    detail: "Hybrid Mamba-2 and Transformer model with GRPO, DPO, GGUF, and CPU inference logs."
  },
  {
    id: "flashattention",
    label: "FlashAttention-2 CUDA kernels",
    href: "/systems/flashattention-2-cuda-kernel",
    detail: "Tiled IO-aware attention kernel profiled at 2.1x over PyTorch SDPA on A100."
  },
  {
    id: "speculative-decoding",
    label: "2.4x speculative decoding",
    href: "/systems/speculative-decoding-runtime",
    detail: "Draft-verifier runtime with temperature-corrected rejection sampling and adaptive gamma."
  },
  {
    id: "compactifai",
    label: "CompactifAI extension",
    href: "/research/adaptive-tensor-network-compression",
    detail: "Adaptive tensor-network compression with layer sensitivity profiling and policy search."
  },
  {
    id: "vllm",
    label: "vLLM contribution",
    href: "/open-source",
    detail: "Disaggregated prefill KV cache request-ID bug fix with production reliability impact."
  },
  {
    id: "interpretability",
    label: "Published interpretability research",
    href: "/research/grokking-beyond-addition",
    detail: "Circuit-level grokking study published on Zenodo and prepared for arXiv submission."
  }
] as const

export const dashboardPanels: DashboardPanel[] = [
  {
    title: "Published Research",
    value: "3",
    detail: "Mechanistic interpretability, tensor-network compression, and SNN credit assignment.",
    href: "/research"
  },
  {
    title: "Open Source Contributions",
    value: "vLLM",
    detail: "Distributed inference reliability patch in disaggregated prefill KV transfer.",
    href: "/open-source"
  },
  {
    title: "Systems Built",
    value: "5",
    detail: "LLM training, CUDA kernels, inference runtimes, sparse MoE, and offline voice AI.",
    href: "/systems"
  },
  {
    title: "Benchmarks",
    value: "2.4x",
    detail: "Speculative decoding speedup, 2.1x attention throughput, 93% memory reduction.",
    href: "/systems/speculative-decoding-runtime"
  },
  {
    title: "Current Investigations",
    value: "7",
    detail: "Open questions across compression, routing collapse, grokking, and online learning.",
    href: "/experiments"
  }
]

export const timelineEvents: TimelineEvent[] = [
  {
    year: "2023",
    type: "system",
    title: "Production RAG and model adaptation",
    summary: "Delivered legal-tech RAG and QLoRA fine-tuning work before focusing fully on LLM systems.",
  },
  {
    year: "2024",
    type: "system",
    title: "Project Chimera begins",
    signal: "llm-700m",
    summary: "Designed a 700M hybrid Mamba-2 and Transformer LLM, tokenizer, training schedule, and evaluation path."
  },
  {
    year: "2024",
    type: "system",
    title: "VAANI offline assistant",
    summary: "Built a Hindi-first offline voice stack with wake word, ASR, local LLM, and TTS under 800ms."
  },
  {
    year: "2025",
    type: "benchmark",
    title: "Speculative decoding reaches 2.4x",
    signal: "speculative-decoding",
    summary: "Implemented draft-verifier inference with adaptive lookahead and distribution-preserving sampling."
  },
  {
    year: "2025",
    type: "open-source",
    title: "vLLM disaggregated prefill patch",
    signal: "vllm",
    summary: "Fixed request-ID mismatch across prefill and decode nodes causing KV cache transfer hangs."
  },
  {
    year: "2025",
    type: "benchmark",
    title: "Sparse MoE scaling run",
    summary: "Implemented top-k routing, z-loss balancing, entropy logging, and matched-FLOP dense baselines."
  },
  {
    year: "2026",
    type: "research",
    title: "Grokking Beyond Addition published",
    signal: "interpretability",
    summary: "Circuit-level study across abelian and non-abelian algebraic operations published on Zenodo."
  },
  {
    year: "2026",
    type: "benchmark",
    title: "FlashAttention-2 kernel profiled",
    signal: "flashattention",
    summary: "CUDA C++ tiled attention kernel reached 2.1x throughput over PyTorch SDPA at sequence length 4096."
  },
  {
    year: "2026",
    type: "research",
    title: "CompactifAI extension completed",
    signal: "compactifai",
    summary: "Extended tensor-network compression with adaptive bond-dimension scheduling and model healing."
  }
]

export const researchPapers: ResearchPaper[] = [
  {
    slug: "grokking-beyond-addition",
    title: "Grokking Beyond Addition: Circuit-Level Analysis of Algebraic Learning in Transformers",
    subtitle: "Capacity-dependent boundary between abelian and non-abelian grokking",
    status: "published",
    year: "2026",
    venue: "Zenodo",
    authors: ["Mani Pal"],
    tags: ["Mechanistic Interpretability", "Transformers", "Grokking", "Representation Geometry"],
    signal: "interpretability",
    abstract:
      "This work extends grokking analysis beyond modular addition to eight algebraic operations across abelian fields, a composite ring, and non-abelian groups. A controlled transformer setup isolates when memorized algorithms become reusable circuits and when representation complexity blocks generalization.",
    problem:
      "Prior grokking studies often center on modular addition. The missing question is whether small transformers discover reusable algebraic circuits across richer algebraic structure, and whether non-abelian operations fail because they lack signal or because the model capacity is insufficient for the required representation.",
    methodology: [
      "Trained one-layer transformers with d_model=64 across eight algebraic operations and three seeds per operation.",
      "Compared abelian operations, a composite ring, and non-abelian groups with consistent optimizer, dataset, and training-fraction controls.",
      "Measured CKA across embedding spaces, Fourier concentration before and after discrete-log re-indexing, and Peter-Weyl signatures in non-abelian models.",
      "Derived formal complexity scores from character tables to test whether representation complexity predicts grokking order."
    ],
    experimentalDesign: [
      "Held architecture depth and width fixed to expose capacity effects.",
      "Ran training-fraction, weight-decay, and dataset-size ablations.",
      "Separated train memorization from test generalization and analyzed circuit formation after memorization.",
      "Logged cross-operation embedding alignment across all 28 operation pairs."
    ],
    results: [
      "All four abelian operations grokked to 100% test accuracy within 2,000 epochs.",
      "All four non-abelian groups reached 100% training accuracy but failed to grok under the fixed capacity setting.",
      "Discrete-log re-indexing improved multiplication Fourier concentration from 9.4% to 20.0%.",
      "Peter-Weyl analysis recovered the dominant irreducible representation in all four non-grokked non-abelian cases.",
      "CKA remained high across operation pairs with a mean of 0.90 and an add-S3 pair at 0.97."
    ],
    limitations: [
      "The study uses compact one-layer transformers, so capacity scaling remains open.",
      "The algebraic set is broad enough to expose a boundary but not exhaustive.",
      "Circuit evidence is geometric and spectral; direct causal patching is future work."
    ],
    futureDirections: [
      "Scale width, depth, and dataset support for non-abelian groups.",
      "Run activation patching on candidate representation channels.",
      "Test whether sparse MoE experts separate irreducible representation families.",
      "Release a reproducible benchmark harness for algebraic grokking circuits."
    ],
    references: [
      { label: "Zenodo record", href: "https://zenodo.org/records/19256207" },
      {
        label: "Code repository",
        href: "https://github.com/groot-code24/Grokking-Circuit-Level-Analysis-of-Algebraic-Learning-in-Transformers"
      }
    ],
    citation: {
      key: "pal2026grokking",
      bibtex:
        "@misc{pal2026grokking,\n  title={Grokking Beyond Addition: Circuit-Level Analysis of Algebraic Learning in Transformers},\n  author={Pal, Mani},\n  year={2026},\n  publisher={Zenodo},\n  doi={10.5281/zenodo.19256207}\n}"
    },
    metrics: [
      { label: "Operations", value: "8", detail: "Abelian fields, composite ring, and non-abelian groups." },
      { label: "Seeds", value: "24", detail: "Three seeds for each algebraic operation." },
      { label: "Mean CKA", value: "0.90", detail: "High cross-operation embedding similarity." }
    ]
  },
  {
    slug: "adaptive-tensor-network-compression",
    title: "Adaptive Tensor-Network Compression of LLMs: An Extension of CompactifAI",
    subtitle: "Layer-sensitive MPO tensorization with policy-guided bond dimensions",
    status: "active",
    year: "2026",
    venue: "Independent Research",
    authors: ["Mani Pal"],
    tags: ["Model Compression", "Tensor Networks", "MPO", "Quantization", "LLM Evaluation"],
    signal: "compactifai",
    abstract:
      "This project reproduces and extends CompactifAI-style tensor-network compression on real open-weight LLMs. It profiles layer sensitivity, replaces uniform bond dimensions with adaptive schedules, and evaluates healing runs across standard language benchmarks.",
    problem:
      "Uniform tensor-network compression treats transformer blocks as equally redundant, but LLMs show layer-specific fragility. The research question is whether adaptive bond-dimension assignment can preserve downstream quality at the same compression ratio.",
    methodology: [
      "Implemented Matrix Product Operator tensorization for self-attention and MLP matrices using sequential SVD.",
      "Swept bond dimension chi from 10 to 90 independently across attention blocks and layer types.",
      "Trained a REINFORCE policy to assign per-block bond dimensions using downstream MMLU accuracy as reward.",
      "Combined adaptive MPO schedules with model healing and optional soft gating adapters."
    ],
    experimentalDesign: [
      "Reproduced baseline compression behavior on LLaMA-3.2-1B and Qwen2.5-1.5B style targets.",
      "Profiled 32 attention blocks and seven layer families before constructing a non-uniform compression schedule.",
      "Ran one epoch of Alpaca-style healing after compression.",
      "Evaluated with lm-evaluation-harness across MMLU, HellaSwag, BoolQ, TriviaQA, and GSM8K."
    ],
    results: [
      "Matched the original 93% memory-reduction target at 1B-scale reproduction settings.",
      "Found initial blocks collapse below chi=50 while terminal blocks tolerate chi=10 with under 1% MMLU drop.",
      "Adaptive policy recovered 1.2% additional accuracy at matched compression versus uniform chi baselines.",
      "70% parameter reduction produced an observed 2% to 3% downstream accuracy drop after healing."
    ],
    limitations: [
      "The reproduction is computationally verifiable at smaller model scale, not a full 7B training campaign.",
      "Policy search cost grows with block count and benchmark feedback latency.",
      "Compression interacts with quantization and adapter healing in ways that need more isolation."
    ],
    futureDirections: [
      "Replace REINFORCE with differentiable schedule search or bandit-style block allocation.",
      "Profile attention heads and MLP projections separately instead of block-level schedules.",
      "Test adaptive tensorization under long-context inference and KV-cache pressure.",
      "Publish per-layer sensitivity traces as reusable compression priors."
    ],
    references: [
      { label: "CompactifAI", href: "https://arxiv.org/abs/2401.14109" },
      { label: "lm-evaluation-harness", href: "https://github.com/EleutherAI/lm-evaluation-harness" }
    ],
    citation: {
      key: "pal2026compactifai",
      bibtex:
        "@misc{pal2026compactifai,\n  title={Adaptive Tensor-Network Compression of LLMs: An Extension of CompactifAI},\n  author={Pal, Mani},\n  year={2026},\n  note={Independent research manuscript}\n}"
    },
    metrics: [
      { label: "Memory reduction", value: "93%", detail: "Best reproduced tensor-network compression setting." },
      { label: "Adaptive gain", value: "+1.2%", detail: "Additional recovered accuracy over uniform schedules." },
      { label: "Benchmarks", value: "5", detail: "MMLU, HellaSwag, BoolQ, TriviaQA, and GSM8K." }
    ]
  },
  {
    slug: "credit-assignment-spiking-neural-networks",
    title: "Credit Assignment in Spiking Neural Networks: Bridging Bioplausibility and Scalability",
    subtitle: "Surrogate gradients, eligibility traces, and online learning failure modes",
    status: "active",
    year: "2026",
    venue: "Open Problem Investigation",
    authors: ["Mani Pal"],
    tags: ["Spiking Neural Networks", "Credit Assignment", "Surrogate Gradients", "Online Learning"],
    abstract:
      "This investigation studies how scalable gradient methods and biologically plausible local learning rules diverge when training recurrent spiking neural networks on temporal tasks.",
    problem:
      "SNN learning sits between non-differentiable spike events and the need for long-horizon credit assignment. The work asks where surrogate gradients fail, where local eligibility traces help, and how hybrid strategies behave in online settings.",
    methodology: [
      "Benchmarked SuperSpike, SLAYER, and EXODUS-style surrogate gradients.",
      "Compared biologically plausible alternatives including e-prop, RTRL variants, and STDP-inspired local updates.",
      "Measured gradient pathologies introduced by leaky integrate-and-fire dynamics across deep temporal unrollings.",
      "Tested hybrid learning rules that combine global task signal with local eligibility traces."
    ],
    experimentalDesign: [
      "Used temporal classification tasks with controlled spike sparsity and sequence length.",
      "Tracked vanishing and exploding gradient regimes under recurrent SNN dynamics.",
      "Compared online update feasibility against full BPTT baselines.",
      "Logged task accuracy, spike rate, memory cost, and update latency."
    ],
    results: [
      "Surrogate gradients remain the strongest baseline for task accuracy but scale poorly under long unrollings.",
      "Eligibility traces reduce memory pressure but require careful stabilization to compete with BPTT.",
      "Hybrid strategies produced promising online behavior but underperformed full BPTT on harder temporal dependencies."
    ],
    limitations: [
      "Current tasks are diagnostic rather than large-scale neuromorphic deployments.",
      "The work has not yet evaluated hardware-specific energy behavior.",
      "Hybrid update rules need stronger theoretical framing."
    ],
    futureDirections: [
      "Test on event-camera and streaming audio workloads.",
      "Measure energy-latency tradeoffs on neuromorphic hardware targets.",
      "Use representation diagnostics to compare temporal credit localization."
    ],
    references: [
      { label: "SuperSpike" },
      { label: "SLAYER" },
      { label: "e-prop" },
      { label: "RTRL" }
    ],
    citation: {
      key: "pal2026snncredit",
      bibtex:
        "@misc{pal2026snncredit,\n  title={Credit Assignment in Spiking Neural Networks: Bridging Bioplausibility and Scalability},\n  author={Pal, Mani},\n  year={2026},\n  note={Open problem investigation}\n}"
    },
    metrics: [
      { label: "Methods", value: "7", detail: "Surrogate gradients, RTRL, e-prop, STDP, and hybrids." },
      { label: "Focus", value: "online", detail: "Memory-bounded recurrent temporal learning." }
    ]
  }
]

export const systems: SystemCaseStudy[] = [
  {
    slug: "flashattention-2-cuda-kernel",
    title: "FlashAttention-2 CUDA Kernel",
    subtitle: "Custom IO-aware GPU attention engine",
    status: "active",
    year: "2026",
    stack: ["CUDA C++", "PyTorch C++ Extension", "Triton", "NVIDIA Nsight Compute"],
    tags: ["CUDA", "Attention", "Kernel Engineering", "Inference Optimization"],
    signal: "flashattention",
    motivation:
      "Rebuild attention from the memory hierarchy upward and understand exactly where framework kernels spend bandwidth, registers, shared memory, and occupancy.",
    designConstraints: [
      "Preserve numerical agreement against PyTorch reference paths.",
      "Reduce HBM reads and writes by keeping tiled QK, online softmax, and PV accumulation SRAM-resident.",
      "Support causal masking and sequence length 4096 benchmark settings.",
      "Package as a standalone PyTorch C++ extension usable from Python."
    ],
    architecture: [
      "Thread-block tiling with Br=64 and Bc=64.",
      "Register-level running max, denominator, and output accumulators for online softmax.",
      "Fused QK score calculation, causal mask application, exponent rescaling, and V accumulation.",
      "Triton cross-check kernel used as an implementation sanity path."
    ],
    bottlenecks: [
      "Shared memory pressure from tile staging.",
      "Register pressure during online softmax state updates.",
      "Warp-level divergence at causal boundaries.",
      "HBM bandwidth from naive O(N^2) attention materialization."
    ],
    optimizationDecisions: [
      "Avoid materializing the attention matrix.",
      "Use online softmax to maintain stable row-wise normalization across K/V blocks.",
      "Tune block sizes against occupancy instead of maximizing tile size blindly.",
      "Profile memory throughput, achieved occupancy, and register spills in Nsight Compute."
    ],
    benchmarkMethodology: [
      "Compared against torch.scaled_dot_product_attention.",
      "Benchmarked on A100 at sequence length 4096.",
      "Validated float32 precision against PyTorch reference outputs.",
      "Recorded warmup, synchronized CUDA timing, and median throughput."
    ],
    results: [
      "Reached 2.1x throughput over PyTorch SDPA in the profiled A100 setting.",
      "Reduced HBM bandwidth from O(N^2) materialization to tiled streaming attention.",
      "Produced an installable PyTorch extension and reproducible kernel write-up."
    ],
    lessons: [
      "The core speedup is not only fusion; it is avoiding global-memory traffic.",
      "Online softmax correctness is the fragile center of the implementation.",
      "Register pressure can erase theoretical tiling wins unless profiled early."
    ],
    metrics: [
      { label: "Throughput", value: "2.1x", detail: "Versus PyTorch SDPA on A100, seqlen 4096." },
      { label: "Tile", value: "64x64", detail: "Q block and K/V block shape." },
      { label: "Memory", value: "O(N)", detail: "Streaming residency rather than O(N^2) attention storage." }
    ]
  },
  {
    slug: "project-chimera",
    title: "Project Chimera",
    subtitle: "700M hybrid Mamba-2 and Transformer LLM trained from scratch",
    status: "active",
    year: "2024-2025",
    stack: ["PyTorch", "Mamba-2", "DeepSpeed", "Triton", "GGUF", "llama.cpp", "Weights & Biases"],
    tags: ["LLM Training", "Mamba", "Transformers", "Alignment", "Tokenizer"],
    signal: "llm-700m",
    motivation:
      "Own the full path from tokenizer and architecture decisions through pretraining, reasoning fine-tuning, alignment, quantization, and local inference.",
    designConstraints: [
      "Train a 700M model from scratch rather than fine-tuning an existing checkpoint.",
      "Use a hybrid SSM-attention stack to trade long-context efficiency against attention expressivity.",
      "Support Hindi and English corpora with a custom BPE tokenizer.",
      "Produce deployable INT4 GGUF artifacts for CPU-only inference."
    ],
    architecture: [
      "Hybrid Mamba-2 and Transformer architecture with SSM layers for linear-complexity context handling.",
      "Interleaved attention at key depths to preserve token mixing behavior.",
      "Custom BPE tokenizer trained on Hindi and English data.",
      "GRPO chain-of-thought reasoning fine-tuning followed by DPO safety alignment and QLoRA adaptation."
    ],
    bottlenecks: [
      "KV-cache memory pressure for extended context.",
      "Tokenizer balance across Hindi and English corpora.",
      "Compute budget constraints around Chinchilla-style data scheduling.",
      "Quantization quality tradeoffs at CPU inference targets."
    ],
    optimizationDecisions: [
      "Documented YaRN and LongRoPE investigations for context extension.",
      "Used GGUF INT4 deployment path for local inference footprint.",
      "Tracked training and evaluation in W&B for reproducibility.",
      "Benchmarked with MMLU and HumanEval to separate memorization from useful capability."
    ],
    benchmarkMethodology: [
      "Evaluated downstream capability on MMLU and HumanEval.",
      "Measured first-token latency with CPU-only inference.",
      "Compared quantized artifact size and serving behavior.",
      "Published weights and benchmark results to Hugging Face Hub."
    ],
    results: [
      "Completed pretraining of a 700M-parameter model from scratch.",
      "Produced 4.2GB INT4 GGUF model artifact.",
      "Reached sub-3-second first-token latency on CPU-only inference.",
      "Published model weights, logs, and architecture decisions."
    ],
    lessons: [
      "Tokenizer design becomes a system constraint, not a preprocessing detail.",
      "Hybrid SSM-attention architecture pushes complexity into evaluation and long-context validation.",
      "Alignment work is only interpretable when pretraining and benchmark traces are preserved."
    ],
    metrics: [
      { label: "Parameters", value: "700M", detail: "Hybrid Mamba-2 and Transformer model." },
      { label: "Artifact", value: "4.2GB", detail: "INT4 GGUF quantized checkpoint." },
      { label: "Latency", value: "<3s", detail: "First token on CPU-only inference." }
    ]
  },
  {
    slug: "speculative-decoding-runtime",
    title: "Speculative Decoding Runtime",
    subtitle: "OpenAI-compatible draft-verifier inference server",
    status: "active",
    year: "2025",
    stack: ["Python", "PyTorch", "llama.cpp", "GGUF", "FastAPI"],
    tags: ["Inference Systems", "Speculative Decoding", "CPU Inference", "Serving"],
    signal: "speculative-decoding",
    motivation:
      "Increase tokens per second without changing the target model distribution, while keeping the serving API compatible with existing OpenAI-style clients.",
    designConstraints: [
      "Maintain mathematically identical output distribution under acceptance and rejection sampling.",
      "Pair a small draft model with a stronger verifier.",
      "Work on CPU-friendly quantized GGUF inference.",
      "Expose a /v1/completions-compatible FastAPI endpoint."
    ],
    architecture: [
      "Qwen2.5-0.5B draft model proposes a gamma-length continuation.",
      "Qwen2.5-3B verifier scores the proposal tokens.",
      "Temperature-corrected rejection sampling accepts or repairs the draft path.",
      "Adaptive gamma scheduling adjusts lookahead from observed acceptance rate."
    ],
    bottlenecks: [
      "Verifier calls dominate latency when acceptance rate falls.",
      "High-entropy text reduces the value of long draft lookahead.",
      "CPU quantized inference requires careful batching and memory reuse.",
      "API compatibility restricts how much state can leak into client contracts."
    ],
    optimizationDecisions: [
      "Use adaptive gamma instead of a fixed lookahead window.",
      "Specialize for low-entropy outputs such as code and JSON while degrading gracefully.",
      "Keep sampling correction explicit and testable.",
      "Record acceptance traces per prompt family."
    ],
    benchmarkMethodology: [
      "Measured mean tokens per second over code, JSON, and natural-language prompts.",
      "Compared against verifier-only generation.",
      "Validated distribution preservation by checking rejection-sampling paths.",
      "Tracked acceptance rate against selected gamma windows."
    ],
    results: [
      "Achieved 2.4x mean tokens-per-second speedup on CPU.",
      "Maintained identical output distribution under the target model sampling rule.",
      "Delivered an OpenAI-compatible completions endpoint.",
      "Showed graceful degradation on high-entropy text."
    ],
    lessons: [
      "Speculative decoding is a control problem around acceptance rate, not just a two-model trick.",
      "Low-entropy workloads are where adaptive gamma produces the most predictable returns.",
      "Distribution-correct rejection sampling should be visible in tests rather than implied."
    ],
    metrics: [
      { label: "Speedup", value: "2.4x", detail: "Mean CPU tokens per second versus verifier-only generation." },
      { label: "Draft", value: "0.5B", detail: "Qwen2.5 draft model." },
      { label: "Verifier", value: "3B", detail: "Qwen2.5 verifier model." }
    ]
  },
  {
    slug: "sparse-moe-scaling",
    title: "Sparse MoE Scaling",
    subtitle: "Top-k routing, z-loss load balancing, and expert collapse analysis",
    status: "reproduced",
    year: "2025",
    stack: ["PyTorch", "FSDP", "Triton", "Weights & Biases"],
    tags: ["MoE", "Distributed Training", "Routing", "Scaling Studies"],
    motivation:
      "Reproduce the practical failure modes of sparse MoE training, especially expert-utilization collapse, under a controlled matched-FLOP benchmark.",
    designConstraints: [
      "Use sparse top-k routing with k=2 and 8 experts.",
      "Match active compute against dense baselines.",
      "Log routing entropy and expert load over time.",
      "Keep runs reproducible through W&B artifacts."
    ],
    architecture: [
      "Sparse MoE layer with Switch Transformer-style z-loss.",
      "125M active parameters in a 1B-compute-equivalent model.",
      "FSDP training with expert routing traces.",
      "Dense matched-FLOP baseline for throughput comparison."
    ],
    bottlenecks: [
      "Expert imbalance under insufficient z-loss.",
      "All-to-all communication sensitivity in distributed settings.",
      "Router instability early in training.",
      "Underutilization when top-k probabilities collapse."
    ],
    optimizationDecisions: [
      "Sweep z-loss coefficient thresholds.",
      "Plot routing entropy alongside throughput and validation loss.",
      "Separate active parameter count from total parameter count in all reporting.",
      "Open-source run configs and logs."
    ],
    benchmarkMethodology: [
      "Compared sparse model throughput against dense matched-FLOP baseline.",
      "Logged expert load histograms across training.",
      "Measured routing entropy decay and collapse thresholds.",
      "Repeated runs under multiple z-loss settings."
    ],
    results: [
      "Reached 2.3x throughput versus dense baseline at matched FLOP budget.",
      "Identified z-loss thresholds that prevent expert utilization collapse.",
      "Produced reusable routing entropy curves for diagnostics."
    ],
    lessons: [
      "MoE throughput wins are inseparable from router health.",
      "Routing entropy should be a first-class training metric.",
      "Load-balancing losses can stabilize experts while still harming specialization if over-applied."
    ],
    metrics: [
      { label: "Throughput", value: "2.3x", detail: "Sparse versus dense matched-FLOP baseline." },
      { label: "Experts", value: "8", detail: "Top-2 sparse routing." },
      { label: "Active params", value: "125M", detail: "Active parameter budget per token." }
    ]
  },
  {
    slug: "vaani",
    title: "VAANI",
    subtitle: "Hindi-first fully offline voice assistant",
    status: "active",
    year: "2024",
    stack: ["Python", "Whisper", "Qwen2.5-3B", "Piper TTS", "XTTS v2", "openWakeWord"],
    tags: ["Offline AI", "Voice Systems", "Hindi", "Edge Inference"],
    motivation:
      "Build a local voice assistant that keeps speech, reasoning, and synthesis offline while preserving practical latency on consumer CPU hardware.",
    designConstraints: [
      "Zero internet dependency.",
      "Hindi-first interaction loop.",
      "Consumer CPU latency target below one second.",
      "Modular plugin architecture without changing the core inference loop."
    ],
    architecture: [
      "openWakeWord detection triggers the pipeline.",
      "Whisper-small performs local ASR.",
      "Qwen2.5-3B-Instruct Q4_K_M handles local reasoning with 128K context.",
      "Piper TTS and fine-tuned XTTS v2 produce speech output.",
      "Eight-layer plugin architecture isolates tools, memory, routing, and generation."
    ],
    bottlenecks: [
      "ASR and TTS latency under CPU-only constraints.",
      "Hindi corpus quality for voice persona fine-tuning.",
      "Context management with local quantized model memory.",
      "Tool plugin boundaries in an offline runtime."
    ],
    optimizationDecisions: [
      "Use quantized local model execution.",
      "Fine-tune XTTS v2 on AI4Bharat Hindi corpus.",
      "Keep plugin interfaces thin and deterministic.",
      "Optimize each stage independently before end-to-end latency tuning."
    ],
    benchmarkMethodology: [
      "Measured wake-to-response end-to-end latency.",
      "Profiled ASR, LLM, and TTS stages separately.",
      "Tested offline operation with no network dependency.",
      "Validated new plugin integration without modifying core runtime."
    ],
    results: [
      "Achieved under 800ms end-to-end latency on consumer CPU.",
      "Kept the entire voice pipeline offline.",
      "Supported modular plugin extension with stable core interfaces."
    ],
    lessons: [
      "Offline assistants are latency orchestration problems as much as model problems.",
      "Language-first UX changes tokenizer, ASR, TTS, and memory decisions.",
      "Local privacy constraints make deterministic system boundaries valuable."
    ],
    metrics: [
      { label: "Latency", value: "<800ms", detail: "Wake to spoken response on CPU." },
      { label: "Network", value: "0", detail: "No internet dependency." },
      { label: "Plugins", value: "8", detail: "Layered extension architecture." }
    ]
  }
]

export const openSourceContributions: OpenSourceContribution[] = [
  {
    slug: "vllm-disaggregated-prefill-kv-cache-request-id",
    repository: "vLLM",
    issue: "Disaggregated prefill pipeline hang caused decode nodes to miss KV cache tensors.",
    rootCause:
      "Prefill and decode nodes used inconsistent request-ID formatting, so decode-side lookup could not locate the transferred KV cache state.",
    patch:
      "Implemented request-ID normalization at the prefill-decode boundary, refactored KV cache lookup semantics, and added targeted tests for matched and mismatched ID formats.",
    mergedPr: "PR #38816",
    impact:
      "Resolved indefinite hangs in distributed inference deployments and improved reliability for high-throughput disaggregated serving.",
    complexity:
      "High. The bug crossed request lifecycle, distributed KV cache transfer, and prefill/decode process boundaries.",
    year: "2025",
    signal: "vllm",
    tags: ["vLLM", "Distributed Inference", "KV Cache", "Reliability"]
  }
]

export const experiments: ExperimentEntry[] = [
  {
    slug: "non-abelian-grokking-capacity-ceiling",
    title: "Non-Abelian Grokking Capacity Ceiling",
    category: "Failed Experiments",
    date: "2026-03",
    status: "failed",
    tags: ["Grokking", "Interpretability", "Capacity"],
    question: "Can the same one-layer transformer that groks abelian operations grok non-abelian groups under longer training?",
    setup: [
      "Used the grokking benchmark architecture at d_model=64.",
      "Extended non-abelian training horizons beyond the successful abelian window.",
      "Tracked train accuracy, test accuracy, CKA, and Peter-Weyl signatures."
    ],
    observations: [
      "Training accuracy saturated at 100%.",
      "Test generalization remained stalled.",
      "Representation traces showed partial irreducible representation formation without full algorithmic generalization."
    ],
    conclusion:
      "Longer training alone did not cross the boundary; the failure is likely capacity or representation-geometry constrained rather than an optimizer patience issue.",
    nextStep: "Scale width and depth independently while keeping the group family fixed."
  },
  {
    slug: "uniform-mpo-compression-collapse",
    title: "Uniform MPO Compression Collapse",
    category: "Compression Studies",
    date: "2026-02",
    status: "reproduced",
    tags: ["Tensor Networks", "Compression", "MMLU"],
    question: "Does a single global bond dimension preserve quality across all transformer layers?",
    setup: [
      "Applied uniform chi schedules across all attention blocks.",
      "Swept chi from 10 to 90.",
      "Evaluated MMLU deltas before and after one epoch of healing."
    ],
    observations: [
      "Early blocks collapsed below chi=50.",
      "Terminal blocks tolerated chi=10 with small accuracy movement.",
      "Uniform schedules wasted capacity on tolerant layers while damaging fragile layers."
    ],
    conclusion: "Layer sensitivity is too uneven for uniform MPO schedules to be the final compression policy.",
    nextStep: "Use per-block policy search seeded from sensitivity profiles."
  },
  {
    slug: "fixed-gamma-speculative-decoding",
    title: "Fixed-Gamma Speculative Decoding",
    category: "Benchmark Logs",
    date: "2025-11",
    status: "archived",
    tags: ["Speculative Decoding", "Inference", "Benchmarking"],
    question: "Is a fixed draft lookahead window enough for CPU speculative decoding?",
    setup: [
      "Paired Qwen2.5-0.5B draft with Qwen2.5-3B verifier.",
      "Benchmarked gamma values across code, JSON, and free-form text.",
      "Recorded acceptance rate and verifier rollback frequency."
    ],
    observations: [
      "Long gamma worked on low-entropy outputs.",
      "High-entropy prompts caused rollback spikes.",
      "Mean speedups were less stable than median speedups."
    ],
    conclusion: "Fixed gamma creates brittle prompt-family dependence.",
    nextStep: "Use adaptive gamma based on recent acceptance rate."
  },
  {
    slug: "sparse-moe-router-entropy",
    title: "Sparse MoE Router Entropy",
    category: "Scaling Studies",
    date: "2025-09",
    status: "reproduced",
    tags: ["MoE", "Routing", "z-loss"],
    question: "Can routing entropy predict expert collapse before validation loss exposes it?",
    setup: [
      "Trained top-2 MoE with eight experts.",
      "Swept z-loss coefficients.",
      "Logged per-expert token counts and entropy curves."
    ],
    observations: [
      "Entropy collapse preceded throughput and loss degradation.",
      "Moderate z-loss prevented early collapse.",
      "Over-regularized routing reduced specialization."
    ],
    conclusion: "Routing entropy is a leading diagnostic for MoE health.",
    nextStep: "Add entropy-triggered z-loss scheduling."
  },
  {
    slug: "activation-patching-algebraic-circuits",
    title: "Activation Patching for Algebraic Circuits",
    category: "Research Ideas",
    date: "2026-04",
    status: "draft",
    tags: ["Activation Patching", "Grokking", "Mechanistic Interpretability"],
    question: "Can causal patching separate memorized lookup behavior from algorithmic circuit behavior?",
    setup: [
      "Patch candidate channels between grokked abelian runs and memorized non-abelian runs.",
      "Intervene on embedding, attention output, and MLP residual stream locations.",
      "Measure recovery of test generalization behavior under patched activations."
    ],
    observations: [
      "Not yet executed.",
      "The current spectral signatures suggest likely intervention points.",
      "Needs careful pair construction to avoid operation mismatch artifacts."
    ],
    conclusion: "This is the next causal validation layer for the grokking study.",
    nextStep: "Build a patching harness over the existing algebraic benchmark."
  },
  {
    slug: "kv-cache-id-normalization-tests",
    title: "KV Cache ID Normalization Tests",
    category: "Reproduction Studies",
    date: "2025-08",
    status: "reproduced",
    tags: ["vLLM", "KV Cache", "Distributed Serving"],
    question: "Can a unit-level reproduction catch prefill/decode request-ID mismatches before deployment hangs?",
    setup: [
      "Created matched and mismatched request-ID fixtures.",
      "Exercised prefill-decode KV cache transfer boundary.",
      "Asserted decode-side lookup correctness under normalization."
    ],
    observations: [
      "The mismatch reproduced the observed hang path.",
      "Normalization made transfer semantics explicit.",
      "Tests protected the boundary where the bug entered."
    ],
    conclusion: "Distributed inference bugs need contract tests around identifiers and transfer semantics.",
    nextStep: "Extend tests to multi-node stress fixtures."
  }
]

export const writing: WritingArticle[] = [
  {
    slug: "transformer-internals",
    title: "Transformer Internals as a Systems Interface",
    topic: "Transformer Internals",
    date: "2026-01",
    readingTime: "12 min",
    tags: ["Transformers", "Residual Stream", "Interpretability"],
    thesis:
      "The residual stream is the real systems interface of a transformer: training, inference, interpretability, and compression all negotiate with it.",
    sections: [
      "Residual stream as shared memory.",
      "Attention heads as sparse routing operations.",
      "MLPs as feature-space write amplifiers.",
      "Where compression perturbs the interface."
    ],
    equation: "x_{l+1}=x_l+Attn(LN(x_l))+MLP(LN(x_l))",
    references: [{ label: "Grokking Beyond Addition", href: "/research/grokking-beyond-addition" }]
  },
  {
    slug: "attention-mechanisms",
    title: "Attention Mechanisms Under IO Pressure",
    topic: "Attention Mechanisms",
    date: "2026-01",
    readingTime: "10 min",
    tags: ["Attention", "FlashAttention", "CUDA"],
    thesis:
      "The useful mental model for modern attention kernels is not the softmax equation; it is the path data takes through HBM, SRAM, registers, and warps.",
    sections: [
      "Why materialized attention is a memory problem.",
      "Online softmax as the correctness boundary.",
      "Causal masking and tile scheduling.",
      "Benchmarking kernel work without fooling yourself."
    ],
    equation: "softmax(QK^T)V",
    references: [{ label: "FlashAttention-2 CUDA Kernel", href: "/systems/flashattention-2-cuda-kernel" }]
  },
  {
    slug: "cuda-optimization",
    title: "CUDA Optimization Notes from an Attention Kernel",
    topic: "CUDA Optimization",
    date: "2026-02",
    readingTime: "15 min",
    tags: ["CUDA", "Nsight", "Kernel Engineering"],
    thesis:
      "CUDA optimization is the discipline of making memory motion, register pressure, and occupancy legible enough to trade them deliberately.",
    sections: [
      "Tile shape selection.",
      "Register accumulation and spilling.",
      "Shared memory pressure.",
      "Nsight metrics that changed implementation choices."
    ],
    code: "for (int block = 0; block < n_blocks; ++block) {\n  load_kv_tile(block);\n  update_online_softmax();\n  accumulate_output();\n}",
    references: [{ label: "FlashAttention-2 CUDA Kernel", href: "/systems/flashattention-2-cuda-kernel" }]
  },
  {
    slug: "mamba-architectures",
    title: "Mamba Architectures in Hybrid LLM Training",
    topic: "Mamba Architectures",
    date: "2025-12",
    readingTime: "11 min",
    tags: ["Mamba", "SSM", "LLM Training"],
    thesis:
      "Hybrid SSM-attention models are best treated as architectural experiments whose evaluation must cover long-context behavior, tokenizer behavior, and deployment cost together.",
    sections: [
      "Why interleave attention with SSM blocks.",
      "Context extension pressure.",
      "Tokenizer and multilingual effects.",
      "Evaluation traces from Project Chimera."
    ],
    references: [{ label: "Project Chimera", href: "/systems/project-chimera" }]
  },
  {
    slug: "sparse-models",
    title: "Sparse Models Fail Quietly Before They Fail Loudly",
    topic: "Sparse Models",
    date: "2025-10",
    readingTime: "9 min",
    tags: ["MoE", "Routing Entropy", "Scaling"],
    thesis:
      "Sparse MoE systems can look healthy on loss curves while the router is already collapsing. Entropy and load metrics need to be first-class.",
    sections: [
      "Expert utilization as a health signal.",
      "z-loss threshold behavior.",
      "Matched-FLOP benchmarking.",
      "What to log before scaling up."
    ],
    references: [{ label: "Sparse MoE Scaling", href: "/systems/sparse-moe-scaling" }]
  },
  {
    slug: "inference-systems",
    title: "Inference Systems Are Acceptance-Rate Control Problems",
    topic: "Inference Systems",
    date: "2025-11",
    readingTime: "13 min",
    tags: ["Speculative Decoding", "Serving", "Latency"],
    thesis:
      "Speculative decoding speedup is controlled by acceptance-rate dynamics, not merely by choosing a smaller draft model.",
    sections: [
      "Draft-verifier architecture.",
      "Distribution-correct rejection sampling.",
      "Adaptive gamma scheduling.",
      "Prompt families and speedup variance."
    ],
    references: [{ label: "Speculative Decoding Runtime", href: "/systems/speculative-decoding-runtime" }]
  },
  {
    slug: "mechanistic-interpretability",
    title: "Mechanistic Interpretability Needs Negative Results",
    topic: "Mechanistic Interpretability",
    date: "2026-03",
    readingTime: "14 min",
    tags: ["Interpretability", "Grokking", "Negative Results"],
    thesis:
      "Failed grokking runs are not noise; they can expose representation capacity boundaries when paired with the right spectral and causal diagnostics.",
    sections: [
      "Memorization versus circuit formation.",
      "Why non-abelian failures are informative.",
      "CKA and Peter-Weyl diagnostics.",
      "Next step: causal patching."
    ],
    references: [{ label: "Grokking Beyond Addition", href: "/research/grokking-beyond-addition" }]
  }
]

export const benchmarkSeries: BenchmarkSeries[] = [
  { label: "Speculative decoding", value: 2.4, unit: "x", baseline: 1 },
  { label: "FlashAttention-2 kernel", value: 2.1, unit: "x", baseline: 1 },
  { label: "Sparse MoE", value: 2.3, unit: "x", baseline: 1 },
  { label: "API p95 reduction", value: 35, unit: "%", baseline: 0 },
  { label: "MPO memory reduction", value: 93, unit: "%", baseline: 0 }
]

export const systemDiagramNodes: DiagramNode[] = [
  { id: "data", label: "Corpus + tokenizer", group: "training" },
  { id: "pretrain", label: "700M pretraining", group: "training" },
  { id: "align", label: "GRPO + DPO", group: "alignment" },
  { id: "compress", label: "GGUF + MPO studies", group: "compression" },
  { id: "serve", label: "Speculative serving", group: "inference" },
  { id: "kernel", label: "CUDA attention", group: "inference" },
  { id: "eval", label: "MMLU + HumanEval + logs", group: "evaluation" }
]

export const systemDiagramEdges: DiagramEdge[] = [
  { source: "data", target: "pretrain", label: "tokens" },
  { source: "pretrain", target: "align", label: "checkpoint" },
  { source: "align", target: "compress", label: "deployable model" },
  { source: "compress", target: "serve", label: "local artifact" },
  { source: "kernel", target: "serve", label: "attention path" },
  { source: "serve", target: "eval", label: "latency traces" },
  { source: "pretrain", target: "eval", label: "capability eval" }
]

const record = (item: SearchRecord) => item

export const searchRecords: SearchRecord[] = [
  ...researchPapers.map((paper) =>
    record({
      id: `research-${paper.slug}`,
      title: paper.title,
      type: "Research",
      href: `/research/${paper.slug}`,
      summary: paper.abstract,
      tags: paper.tags,
      year: paper.year,
      priority: paper.signal ? 10 : 5
    })
  ),
  ...systems.map((system) =>
    record({
      id: `system-${system.slug}`,
      title: system.title,
      type: "System",
      href: `/systems/${system.slug}`,
      summary: `${system.subtitle}. ${system.motivation}`,
      tags: system.tags,
      year: system.year,
      priority: system.signal ? 10 : 6
    })
  ),
  ...experiments.map((experiment) =>
    record({
      id: `experiment-${experiment.slug}`,
      title: experiment.title,
      type: "Experiment",
      href: "/experiments",
      summary: `${experiment.question} ${experiment.conclusion}`,
      tags: experiment.tags,
      year: experiment.date,
      priority: experiment.status === "failed" ? 7 : 4
    })
  ),
  ...openSourceContributions.map((contribution) =>
    record({
      id: `oss-${contribution.slug}`,
      title: `${contribution.repository}: ${contribution.mergedPr}`,
      type: "Open Source",
      href: "/open-source",
      summary: `${contribution.issue} ${contribution.patch} ${contribution.impact}`,
      tags: contribution.tags,
      year: contribution.year,
      priority: 10
    })
  ),
  ...writing.map((article) =>
    record({
      id: `writing-${article.slug}`,
      title: article.title,
      type: "Writing",
      href: `/writing/${article.slug}`,
      summary: article.thesis,
      tags: article.tags,
      year: article.date,
      priority: 4
    })
  ),
  ...benchmarkSeries.map((benchmark) =>
    record({
      id: `benchmark-${benchmark.label.toLowerCase().replaceAll(" ", "-")}`,
      title: benchmark.label,
      type: "Benchmark",
      href: "/",
      summary: `${benchmark.value}${benchmark.unit} measured result in Mani Pal's research lab index.`,
      tags: ["Benchmark", "Performance"],
      priority: 8
    })
  )
]
