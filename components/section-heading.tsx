import type { ReactNode } from "react"

export function SectionHeading({
  eyebrow,
  title,
  children
}: {
  eyebrow: string
  title: string
  children?: ReactNode
}) {
  return (
    <div className="mb-8 border-b border-lab-line pb-5">
      <p className="font-mono text-[11px] uppercase tracking-[0.26em] text-lab-faint">{eyebrow}</p>
      <h1 className="mt-3 max-w-4xl font-display text-2xl font-semibold tracking-[-0.03em] text-lab-ink sm:text-3xl lg:text-4xl">
        {title}
      </h1>
      {children ? (
        <div className="mt-4 max-w-3xl text-sm leading-7 text-lab-muted sm:text-base">{children}</div>
      ) : null}
    </div>
  )
}
