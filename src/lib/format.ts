const dateFormatter = new Intl.DateTimeFormat("en", {
  day: "numeric",
  month: "short",
  year: "numeric",
})

/** Format an ISO date (YYYY-MM-DD) without timezone drift. */
export function formatDate(iso: string): string {
  const [year, month, day] = iso.split("-").map(Number)
  return dateFormatter.format(new Date(year, month - 1, day))
}

/** 1188657 -> "1.1 MB" */
export function formatBytes(bytes: number): string {
  if (bytes < 1024) return `${bytes} B`
  const units = ["KB", "MB", "GB"]
  let value = bytes / 1024
  let unit = 0
  while (value >= 1024 && unit < units.length - 1) {
    value /= 1024
    unit += 1
  }
  return `${value.toFixed(value >= 10 ? 0 : 1)} ${units[unit]}`
}

const countFormatter = new Intl.NumberFormat("en")

/** 12345 -> "12,345" */
export function formatCount(value: number): string {
  return countFormatter.format(value)
}
