import { Link, useParams } from "react-router-dom"
import { getPort } from "../content/ports"
import { formatDate } from "../lib/format"

export default function PortDetail() {
  const port = getPort(useParams().slug)

  if (!port) {
    return (
      <div className="space-y-4">
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
      <Link to="/" className="text-sm text-neutral-400 hover:text-white">
        ← Home
      </Link>

      <header className="space-y-3">
        <h1 className="text-2xl font-semibold tracking-tight">{port.name}</h1>
        <dl className="flex flex-wrap gap-x-6 gap-y-1 text-sm text-neutral-500">
          {port.game_version && (
            <div className="flex gap-1.5">
              <dt>Game version</dt>
              <dd className="text-neutral-300">{port.game_version}</dd>
            </div>
          )}
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

      {port.download && (
        <a
          href={port.download}
          download
          className="inline-flex items-center gap-2 rounded-md border border-neutral-700 bg-neutral-900 px-3 py-2 text-sm text-neutral-100 transition-colors hover:border-neutral-500 hover:bg-neutral-800"
        >
          <span aria-hidden="true" className="text-neutral-500">
            ↓
          </span>
          Download
        </a>
      )}
    </div>
  )
}
