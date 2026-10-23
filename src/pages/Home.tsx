import { Link } from "react-router-dom"
import { ports } from "../data/ports"
import { formatDate } from "../lib/format"

export default function Home() {
  return (
    <div className="space-y-12">
      <section className="space-y-4">
        <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
          A collection of PortMaster ports
        </h1>
        <p className="max-w-xl text-neutral-400">
          Ports of various game titles, packaged to run on PortMaster devices.
        </p>
      </section>

      <section id="ports" className="space-y-4">
        <div className="flex items-baseline justify-between border-b border-neutral-800 pb-3">
          <h2 className="font-mono text-xs uppercase tracking-[0.18em] text-neutral-500">
            Ports
          </h2>
          <span className="font-mono text-xs text-neutral-500">{ports.length}</span>
        </div>

        <ul className="divide-y divide-neutral-800 border-b border-neutral-800">
          {ports.map((port) => (
            <li key={port.slug}>
              <Link
                to={`/ports/${port.slug}`}
                className="group flex items-baseline justify-between gap-6 py-4"
              >
                <span className="font-medium group-hover:text-white">{port.name}</span>
                <time
                  dateTime={port.updated}
                  className="shrink-0 font-mono text-xs text-neutral-500"
                >
                  {formatDate(port.updated)}
                </time>
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </div>
  )
}
