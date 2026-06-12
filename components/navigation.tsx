"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Search, Menu, X } from "lucide-react"
import { useState } from "react"
import { navItems } from "@/lib/data"
import { cn } from "@/lib/cn"
import { ThemeToggle } from "./theme-toggle"
import { ModeSwitch } from "./mode-switch"

export function Navigation() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href)

  return (
    <header className="sticky top-0 z-40 border-b border-lab-line bg-lab-bg/95 backdrop-blur-sm">
      <div className="mx-auto flex h-14 max-w-7xl items-center px-4 sm:px-6 lg:px-8">
        <Link
          href="/"
          onClick={() => setOpen(false)}
          className="mr-6 min-w-max font-mono text-xs font-semibold uppercase tracking-[0.24em] text-lab-ink"
        >
          Mani Pal
        </Link>

        <nav className="hidden flex-1 items-center gap-0.5 lg:flex" aria-label="Primary">
          {navItems.slice(0, 7).map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "px-3 py-2 text-xs font-medium uppercase tracking-[0.18em] transition-colors hover:text-lab-ink",
                isActive(item.href) ? "text-lab-ink" : "text-lab-muted"
              )}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="ml-auto flex items-center gap-2">
          <ModeSwitch className="h-9" />
          <Link
            href="/search"
            className="hidden h-9 items-center gap-2 border border-lab-line bg-lab-panel px-3 text-xs font-medium text-lab-muted transition-colors hover:text-lab-ink sm:inline-flex"
            aria-label="Search"
          >
            <Search className="h-4 w-4" />
            <span className="hidden sm:inline">Search</span>
          </Link>
          <ThemeToggle />
          <button
            type="button"
            onClick={() => setOpen(!open)}
            className="inline-flex h-9 w-9 items-center justify-center border border-lab-line bg-lab-panel text-lab-muted transition-colors hover:text-lab-ink lg:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
          >
            {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-lab-line bg-lab-bg lg:hidden" role="navigation" aria-label="Mobile">
          <div className="mx-auto grid max-w-7xl grid-cols-2 gap-1 px-4 py-3 sm:grid-cols-3 sm:px-6">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className={cn(
                  "border border-lab-line px-3 py-2.5 text-center font-mono text-[11px] uppercase tracking-[0.16em] transition-colors",
                  isActive(item.href)
                    ? "bg-lab-ink text-lab-bg"
                    : "text-lab-muted hover:border-lab-accent hover:text-lab-ink"
                )}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  )
}
