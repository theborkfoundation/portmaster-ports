import { useEffect, useState } from "react"
import { formatBytes, formatCount } from "../lib/format"
import { assetsFor, getRelease, type ReleaseInfo } from "../lib/releases"

export default function Downloads({ alias }: { alias: string }) {
  const [release, setRelease] = useState<ReleaseInfo | null>(null)
  const [failed, setFailed] = useState(false)

  useEffect(() => {
    let alive = true
    getRelease()
      .then((info) => {
        if (alive) setRelease(info)
      })
      .catch(() => {
        if (alive) setFailed(true)
      })
    return () => {
      alive = false
    }
  }, [])

  const assets = release ? assetsFor(release, alias) : []

  return (
    <section className="space-y-3 border-t border-neutral-800 pt-6">
      <div className="flex items-baseline justify-between">
        <h2 className="font-mono text-xs uppercase tracking-[0.18em] text-neutral-500">
          Downloads
        </h2>
      </div>

      {!release && !failed && (
        <p className="text-sm text-neutral-500">Loading builds…</p>
      )}

      {failed && (
        <p className="text-sm text-neutral-500">
          Downloads are unavailable right now.
        </p>
      )}

      {release && assets.length === 0 && (
        <p className="text-sm text-neutral-500">No builds published yet.</p>
      )}

      {assets.length > 0 && (
        <ul className="divide-y divide-neutral-800 border-y border-neutral-800">
          {assets.map((asset) => (
            <li key={asset.name}>
              <a
                href={asset.url}
                download
                className="group flex items-baseline justify-between gap-4 py-3 text-sm"
              >
                <span className="font-mono text-[13px] text-neutral-200 group-hover:text-white">
                  {asset.name}
                </span>
                <span className="shrink-0 font-mono text-xs text-neutral-500 group-hover:text-neutral-300">
                  {formatBytes(asset.size)} · {formatCount(asset.downloads)}{" "}
                  {asset.downloads === 1 ? "download" : "downloads"} ↓
                </span>
              </a>
            </li>
          ))}
        </ul>
      )}
    </section>
  )
}
