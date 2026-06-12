"use client"

import { Moon, Sun } from "lucide-react"
import { useEffect, useState } from "react"

export function ThemeToggle() {
  const [theme, setTheme] = useState<"light" | "dark">("light")

  useEffect(() => {
    const saved = window.localStorage.getItem("theme")
    const next = saved === "dark" ? "dark" : "light"
    setTheme(next)
    document.documentElement.dataset.theme = next
    document.documentElement.classList.toggle("dark", next === "dark")
  }, [])

  function toggleTheme() {
    const next = theme === "dark" ? "light" : "dark"
    setTheme(next)
    window.localStorage.setItem("theme", next)
    document.documentElement.dataset.theme = next
    document.documentElement.classList.toggle("dark", next === "dark")
  }

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className="inline-flex h-9 items-center gap-2 border border-lab-line bg-lab-panel px-3 text-xs font-medium text-lab-muted transition hover:text-lab-ink"
      aria-label="Toggle color theme"
    >
      {theme === "dark" ? <Moon className="h-4 w-4" /> : <Sun className="h-4 w-4" />}
      <span>{theme === "dark" ? "Dark" : "Light"}</span>
    </button>
  )
}
