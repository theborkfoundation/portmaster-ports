const formatter = new Intl.DateTimeFormat("en", {
  day: "numeric",
  month: "short",
  year: "numeric",
})

/** Format an ISO date (YYYY-MM-DD) without timezone drift. */
export function formatDate(iso: string): string {
  const [year, month, day] = iso.split("-").map(Number)
  return formatter.format(new Date(year, month - 1, day))
}
