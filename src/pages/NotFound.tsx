import { Link } from "react-router-dom"

export default function NotFound() {
  return (
    <div className="space-y-4">
      <title>Page not found — Portmaster Ports</title>
      <h1 className="text-2xl font-semibold tracking-tight">Page not found</h1>
      <p className="text-neutral-400">Nothing lives at this address.</p>
      <Link to="/" className="text-sm text-neutral-400 underline hover:text-white">
        ← Home
      </Link>
    </div>
  )
}
