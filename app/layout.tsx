import type { Metadata } from "next"
import type { ReactNode } from "react"
import "@fontsource-variable/inter"
import "@fontsource-variable/space-grotesk"
import "@fontsource-variable/jetbrains-mono"
import "katex/dist/katex.min.css"
import "reactflow/dist/style.css"
import "./globals.css"
import { SiteShell } from "@/components/site-shell"
import { ThemeScript } from "@/components/theme-script"

export const metadata: Metadata = {
  title: {
    default: "Mani Pal — AI Research Lab",
    template: "%s | Mani Pal"
  },
  description:
    "Personal research laboratory of Mani Pal. LLM systems, inference optimization, CUDA kernel engineering, mechanistic interpretability, model compression, and distributed AI infrastructure. Available for fixed-scope inference optimization engagements.",
  metadataBase: new URL("https://manipal-research-lab.vercel.app"),
  applicationName: "Mani Pal Research Lab",
  authors: [{ name: "Mani Pal", url: "https://github.com/groot-code24" }],
  keywords: [
    "Mani Pal",
    "LLM systems",
    "CUDA kernels",
    "FlashAttention-2",
    "Speculative decoding",
    "Mechanistic interpretability",
    "Model compression",
    "vLLM"
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://manipal-research-lab.vercel.app",
    siteName: "Mani Pal Research Lab",
    title: "Mani Pal — AI Research Lab",
    description: "LLM systems, inference optimization, CUDA kernels, and AI research."
  },
  twitter: {
    card: "summary",
    title: "Mani Pal — AI Research Lab",
    description: "LLM systems, inference optimization, CUDA kernels, and AI research."
  },
  robots: {
    index: true,
    follow: true
  }
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <ThemeScript />
      </head>
      <body>
        <SiteShell>{children}</SiteShell>
      </body>
    </html>
  )
}
