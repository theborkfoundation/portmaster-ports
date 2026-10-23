import { Link, useParams } from "react-router-dom"
import { ports } from "../data/ports"

export default function PortDetail() {
  const { slug } = useParams()
  const port = ports.find((item) => item.slug === slug)

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

      <header className="space-y-2">
        <h1 className="text-2xl font-semibold tracking-tight">{port.name}</h1>
        <p className="text-sm text-neutral-500">{port.engine}</p>
      </header>

      <p className="max-w-xl text-neutral-300">{port.description}</p>

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

      <a
        href={port.repo}
        target="_blank"
        rel="noreferrer"
        className="inline-block text-sm text-neutral-400 underline hover:text-white"
      >
        Source on GitHub ↗
      </a>
    </div>
  )
}
