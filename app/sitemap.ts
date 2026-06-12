import type { MetadataRoute } from "next"
import { researchPapers, systems, writing } from "@/lib/data"

export const dynamic = "force-static"

const baseUrl = "https://manipal-research-lab.vercel.app"

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = ["", "/hire", "/research", "/systems", "/experiments", "/open-source", "/writing", "/resume", "/search"]
  const researchRoutes = researchPapers.map((paper) => `/research/${paper.slug}`)
  const systemRoutes = systems.map((system) => `/systems/${system.slug}`)
  const writingRoutes = writing.map((article) => `/writing/${article.slug}`)

  return [...staticRoutes, ...researchRoutes, ...systemRoutes, ...writingRoutes].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date("2026-06-01"),
    changeFrequency: "monthly",
    priority: route === "" ? 1 : 0.8
  }))
}