import type { ReactNode } from "react"

export function DetailSection({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section className="border-t border-lab-line py-6">
      <h2 className="font-mono text-[11px] uppercase tracking-[0.22em] text-lab-faint">{title}</h2>
      <div className="mt-4 text-sm leading-7 text-lab-muted">{children}</div>
    </section>
  )
}

export function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="space-y-3">
      {items.map((item, i) => (
        <li key={i} className="grid grid-cols-[12px_1fr] gap-3">
          <span className="mt-3.5 h-px bg-lab-accent" aria-hidden="true" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  )
}
