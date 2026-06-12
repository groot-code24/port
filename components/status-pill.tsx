import { cn } from "@/lib/cn"
import type { LabStatus } from "@/lib/types"

const styles: Record<LabStatus, string> = {
  published: "border-lab-signal text-lab-signal",
  active: "border-lab-accent text-lab-accent",
  reproduced: "border-lab-accent text-lab-accent",
  archived: "border-lab-faint text-lab-muted",
  failed: "border-lab-warn text-lab-warn",
  draft: "border-lab-line text-lab-muted"
}

export function StatusPill({ status }: { status: LabStatus }) {
  return (
    <span className={cn("inline-flex border px-2 py-1 font-mono text-[10px] uppercase tracking-[0.18em]", styles[status])}>
      {status}
    </span>
  )
}
