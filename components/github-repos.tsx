"use client"

import { useEffect, useState } from "react"
import { Star, GitFork, ExternalLink } from "lucide-react"

interface GithubRepo {
  id: number
  name: string
  description: string | null
  html_url: string
  stargazers_count: number
  forks_count: number
  language: string | null
  topics: string[]
  pushed_at: string
  fork: boolean
}

const LANG_COLORS: Record<string, string> = {
  Python: "#3572A5",
  TypeScript: "#2b7489",
  JavaScript: "#f1e05a",
  "C++": "#f34b7d",
  C: "#555555",
  Rust: "#dea584",
  Go: "#00ADD8",
  Jupyter: "#DA5B0B",
  Shell: "#89e051",
  Solidity: "#AA6746"
}

function LangDot({ lang }: { lang: string }) {
  const color = LANG_COLORS[lang] ?? "rgb(var(--color-faint))"
  return (
    <span
      className="inline-block h-2.5 w-2.5 flex-shrink-0 rounded-full"
      style={{ backgroundColor: color }}
      aria-hidden="true"
    />
  )
}

export function GithubRepos() {
  const [repos, setRepos] = useState<GithubRepo[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)

  useEffect(() => {
    fetch("https://api.github.com/users/groot-code24/repos?sort=updated&per_page=24&type=public", {
      headers: { Accept: "application/vnd.github+json" }
    })
      .then((r) => r.json())
      .then((data) => {
        if (Array.isArray(data)) {
          setRepos(data.filter((r) => !r.fork).slice(0, 12))
        } else {
          setError(true)
        }
        setLoading(false)
      })
      .catch(() => {
        setError(true)
        setLoading(false)
      })
  }, [])

  return (
    <div className="border border-lab-line bg-lab-panel p-5">
      <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-lab-faint">GitHub repositories</p>
          <h2 className="mt-2 text-xl font-semibold tracking-[-0.04em] text-lab-ink">Public projects and research code</h2>
        </div>
        <a
          href="https://github.com/groot-code24?tab=repositories"
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm font-medium text-lab-accent underline underline-offset-4"
        >
          View all repositories
        </a>
      </div>

      {loading && (
        <div className="mt-5 grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
          {Array.from({ length: 6 }).map((_, i) => (
            <div key={i} className="h-32 animate-pulse border border-lab-line bg-lab-bg" />
          ))}
        </div>
      )}

      {error && !loading && (
        <div className="mt-5 border border-lab-line bg-lab-bg p-5">
          <p className="text-sm text-lab-muted">
            Could not load repositories.{" "}
            <a
              href="https://github.com/groot-code24"
              target="_blank"
              rel="noopener noreferrer"
              className="text-lab-accent hover:underline"
            >
              View on GitHub
            </a>
            .
          </p>
        </div>
      )}

      {!loading && !error && repos.length > 0 && (
        <div className="mt-5 grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
          {repos.map((repo) => (
            <a
              key={repo.id}
              href={repo.html_url}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col border border-lab-line bg-lab-bg p-4 transition-colors hover:border-lab-accent"
            >
              <div className="flex items-start justify-between gap-2">
                <h3 className="text-sm font-semibold leading-snug text-lab-ink group-hover:text-lab-accent transition-colors">
                  {repo.name}
                </h3>
                <ExternalLink className="mt-0.5 h-3.5 w-3.5 flex-shrink-0 text-lab-faint transition-colors group-hover:text-lab-accent" />
              </div>

              {repo.description && (
                <p className="mt-2 flex-1 text-xs leading-5 text-lab-muted line-clamp-2">{repo.description}</p>
              )}

              {repo.topics && repo.topics.length > 0 && (
                <div className="mt-3 flex flex-wrap gap-1">
                  {repo.topics.slice(0, 3).map((topic) => (
                    <span
                      key={topic}
                      className="border border-lab-line px-1.5 py-0.5 font-mono text-[9px] uppercase tracking-[0.12em] text-lab-faint"
                    >
                      {topic}
                    </span>
                  ))}
                </div>
              )}

              <div className="mt-3 flex items-center gap-3 font-mono text-[11px] text-lab-faint">
                {repo.language && (
                  <span className="flex items-center gap-1.5">
                    <LangDot lang={repo.language} />
                    {repo.language}
                  </span>
                )}
                {repo.stargazers_count > 0 && (
                  <span className="flex items-center gap-1">
                    <Star className="h-3 w-3" />
                    {repo.stargazers_count}
                  </span>
                )}
                {repo.forks_count > 0 && (
                  <span className="flex items-center gap-1">
                    <GitFork className="h-3 w-3" />
                    {repo.forks_count}
                  </span>
                )}
              </div>
            </a>
          ))}
        </div>
      )}
    </div>
  )
}
