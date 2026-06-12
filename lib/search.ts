import { searchRecords } from "./data"
import type { SearchRecord } from "./types"

const normalize = (value: string) => value.toLowerCase().replace(/[^a-z0-9.+#\s-]/g, " ")

export function searchLabIndex(query: string, records: SearchRecord[] = searchRecords) {
  const terms = normalize(query).split(/\s+/).filter(Boolean)

  if (terms.length === 0) {
    return records.sort((a, b) => (b.priority ?? 0) - (a.priority ?? 0))
  }

  return records
    .map((record) => {
      const haystack = normalize([record.title, record.type, record.summary, record.tags.join(" "), record.year ?? ""].join(" "))
      const score =
        terms.reduce((sum, term) => sum + (haystack.includes(term) ? 1 : 0), 0) +
        (record.priority ?? 0) / 20 +
        (terms.some((term) => normalize(record.title).includes(term)) ? 1 : 0)

      return { record, score }
    })
    .filter((item) => item.score > 0)
    .sort((a, b) => b.score - a.score)
    .map((item) => item.record)
}

export function getAllTags() {
  return Array.from(new Set(searchRecords.flatMap((record) => record.tags))).sort()
}
