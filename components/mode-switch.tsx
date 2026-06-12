"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/cn"

/**
 * Instrument-style mode selector: LAB (research surface, teal) <-> HIRE
 * (commercial surface, copper). Route-driven so it never desyncs from the
 * page actually being shown, survives refresh, and works without JS state.
 */
export function ModeSwitch({ className }: { className?: string }) {
  const pathname = usePathname()
  const hireActive = pathname.startsWith("/hire")

  return (
    <div
      role="group"
      aria-label="Site mode"
      className={cn(
        "flex items-stretch overflow-hidden border border-lab-line bg-lab-panel font-mono text-[10px] font-semibold uppercase tracking-[0.18em]",
        className
      )}
    >
      <Link
        href="/"
        aria-current={!hireActive ? "page" : undefined}
        className={cn(
          "flex items-center px-3 py-2 transition-colors",
          !hireActive ? "bg-lab-ink text-lab-bg" : "text-lab-muted hover:text-lab-ink"
        )}
      >
        Lab
      </Link>
      <Link
        href="/hire"
        aria-current={hireActive ? "page" : undefined}
        className={cn(
          "flex items-center gap-1.5 px-3 py-2 transition-colors",
          hireActive ? "bg-lab-biz text-white" : "text-lab-biz hover:bg-lab-biz/10"
        )}
      >
        <span className="relative flex h-1.5 w-1.5" aria-hidden="true">
          {!hireActive && (
            <span className="absolute inline-flex h-full w-full rounded-full bg-current opacity-60 motion-safe:animate-ping" />
          )}
          <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-current" />
        </span>
        Hire
      </Link>
    </div>
  )
}
