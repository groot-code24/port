export function TagList({ tags }: { tags: string[] }) {
  return (
    <div className="flex flex-wrap gap-2">
      {tags.map((tag) => (
        <span key={tag} className="border border-lab-line bg-lab-panel px-2.5 py-1 font-mono text-[11px] text-lab-muted">
          {tag}
        </span>
      ))}
    </div>
  )
}
