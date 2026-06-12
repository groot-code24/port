"use client"

import { useEffect, useState } from "react"

export function ReadingProgress() {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    function update() {
      const scrollTop = window.scrollY
      const height = document.documentElement.scrollHeight - window.innerHeight
      setProgress(height <= 0 ? 0 : Math.min(1, scrollTop / height))
    }

    update()
    window.addEventListener("scroll", update, { passive: true })
    window.addEventListener("resize", update)

    return () => {
      window.removeEventListener("scroll", update)
      window.removeEventListener("resize", update)
    }
  }, [])

  return (
    <div className="fixed left-0 top-0 z-50 h-0.5 w-full bg-transparent" aria-hidden="true">
      <div className="h-full bg-lab-accent" style={{ width: `${progress * 100}%` }} />
    </div>
  )
}
