"use client"

import { useEffect, useState } from "react"
import { ExternalLink } from "lucide-react"

interface GitHubProfile {
  public_repos: number
  followers: number
  following: number
  public_gists: number
}

export function ContributionGraph() {
  const [profile, setProfile] = useState<GitHubProfile | null>(null)
  const [imgLoaded, setImgLoaded] = useState(false)

  useEffect(() => {
    fetch("https://api.github.com/users/groot-code24", {
      headers: { Accept: "application/vnd.github+json" }
    })
      .then((r) => r.json())
      .then((d) => {
        if (d.public_repos !== undefined) {
          setProfile({
            public_repos: d.public_repos,
            followers: d.followers,
            following: d.following,
            public_gists: d.public_gists
          })
        }
      })
      .catch(() => {})
  }, [])

  return (
    <div className="border border-lab-line bg-lab-panel p-5">
      <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-lab-faint">GitHub activity</p>
          <h2 className="mt-2 text-xl font-semibold tracking-[-0.04em] text-lab-ink">Contribution history</h2>
        </div>
        <a
          href="https://github.com/groot-code24"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 text-sm text-lab-accent hover:underline"
        >
          @groot-code24
          <ExternalLink className="h-3.5 w-3.5" />
        </a>
      </div>

      {profile && (
        <div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-4">
          {[
            { label: "Public repos", value: profile.public_repos },
            { label: "Followers", value: profile.followers },
            { label: "Following", value: profile.following },
            { label: "Gists", value: profile.public_gists }
          ].map((stat) => (
            <div key={stat.label} className="border border-lab-line bg-lab-bg px-4 py-3">
              <p className="text-2xl font-semibold tracking-[-0.04em] text-lab-ink">{stat.value}</p>
              <p className="mt-1 font-mono text-[10px] uppercase tracking-[0.16em] text-lab-faint">{stat.label}</p>
            </div>
          ))}
        </div>
      )}

      <div className="mt-5 overflow-hidden border border-lab-line bg-lab-bg p-3">
        {!imgLoaded && (
          <div className="flex h-24 items-center justify-center">
            <p className="font-mono text-[11px] text-lab-faint">Loading contribution chart…</p>
          </div>
        )}
        <img
          src="https://ghchart.rshah.org/007C89/groot-code24"
          alt="GitHub contribution chart for groot-code24"
          className="w-full"
          style={{ display: imgLoaded ? "block" : "none" }}
          onLoad={() => setImgLoaded(true)}
          onError={() => setImgLoaded(true)}
        />
      </div>
    </div>
  )
}
