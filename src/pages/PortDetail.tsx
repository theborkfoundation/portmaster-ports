import { Link, useParams } from "react-router-dom"
import Downloads from "../components/Downloads"
import { getPort } from "../content/ports"
import { formatDate } from "../lib/format"

export default function PortDetail() {
  const port = getPort(useParams().slug)

  if (!port) {
    return (
      <div className="space-y-4">
        <title>Port not found — Portmaster Ports</title>
        <h1 className="text-2xl font-semibold tracking-tight">Port not found</h1>
        <p className="text-neutral-400">Nothing lives at this address yet.</p>
        <Link to="/" className="text-sm text-neutral-400 underline hover:text-white">
          ← Home
        </Link>
      </div>
    )
  }

  return (
    <div className="space-y-8">
      <title>{`${port.name} — Portmaster Ports`}</title>
      <Link to="/" className="text-sm text-neutral-400 hover:text-white">
        ← Home
      </Link>

      <header className="space-y-3">
        <h1 className="text-2xl font-semibold tracking-tight">{port.name}</h1>
        <dl className="flex flex-wrap gap-x-6 gap-y-1 text-sm text-neutral-500">
          <div className="flex gap-1.5">
            <dt>Game version</dt>
            <dd className="text-neutral-300">{port.game_version}</dd>
          </div>
          <div className="flex gap-1.5">
            <dt>Bundle</dt>
            <dd className="font-mono text-neutral-300">{port.game_bundle}</dd>
          </div>
          <div className="flex gap-1.5">
            <dt>Last updated</dt>
            <dd className="text-neutral-300">{formatDate(port.updated)}</dd>
          </div>
        </dl>
      </header>

      {port.image && (
        <img
          src={port.image}
          alt={`${port.name} running on a handheld`}
          width={640}
          className="h-auto w-full max-w-[640px] rounded-md border border-neutral-800"
        />
      )}

      <article className="prose prose-invert max-w-none prose-headings:font-medium prose-p:text-neutral-300 prose-a:text-neutral-200 prose-strong:text-neutral-100">
        <port.Content />
      </article>

      <ul className="flex flex-wrap gap-2">
        {port.tags.map((tag) => (
          <li
            key={tag}
            className="rounded border border-neutral-800 bg-neutral-900 px-2 py-0.5 font-mono text-[11px] uppercase tracking-[0.1em] text-neutral-400"
          >
            {tag}
          </li>
        ))}
      </ul>

      <Downloads alias={port.alias} />
    </div>
  )
}
