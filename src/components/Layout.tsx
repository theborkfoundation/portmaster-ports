import { Link, NavLink, Outlet } from "react-router-dom"

const navClass = ({ isActive }: { isActive: boolean }) =>
  isActive ? "text-white" : "text-neutral-400 hover:text-white"

export default function Layout() {
  return (
    <div className="flex min-h-screen flex-col bg-neutral-950 text-neutral-100">
      <header className="border-b border-neutral-800">
        <div className="mx-auto flex w-full max-w-3xl items-center justify-between px-6 py-4">
          <Link to="/" className="font-semibold tracking-tight">
            Portmaster Ports
          </Link>
          <nav className="flex items-center gap-5 text-sm">
            <a href="/#ports" className="text-neutral-400 hover:text-white">
              Ports
            </a>
            <NavLink to="/disclaimer" className={navClass}>
              Disclaimer
            </NavLink>
          </nav>
        </div>
      </header>

      <main className="mx-auto w-full max-w-3xl flex-1 px-6 py-12">
        <Outlet />
      </main>

      <footer className="border-t border-neutral-800">
        <div className="mx-auto w-full max-w-3xl px-6 py-6 text-xs text-neutral-500">
          © {new Date().getFullYear()} Portmaster Ports. All rights reserved.
        </div>
      </footer>
    </div>
  )
}
