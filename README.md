# Portmaster Ports

Homepage for our aarch64 port projects: a list of every port and a link to
its source.

Scaffolded with Vite + React (TypeScript) + Tailwind CSS, routed with
`react-router`. Bun is the package manager.

## Development

```sh
bun install
bun run dev        # http://localhost:5173
```

## Build

```sh
bun run build      # type-check (tsc) + production build in dist/
bun run preview    # serve the build locally
```

Deployed on Vercel; `vercel.json` rewrites unknown paths to `index.html` so the
client-side routes work on a direct hit.

## Pages

| route | page |
|--|--|
| `/` | hero + port list (name, last updated) |
| `/ports` | redirects to `/` |
| `/ports/:slug` | one port (engine, description, tags, repo link) |
| `/disclaimer` | as-is notice, legal game files, trademarks |
| `*` | not found |

## Editing the list

Ports live in `src/data/ports.ts` — add an entry there and it shows up on the
home and detail pages. `slug` is the URL segment, `updated` is the ISO date of
the port's last change (taken from the port repo's latest commit), and `tags`
and `repo` feed the detail page.

Styling is intentionally minimal for now; the layout and type scale are the
placeholders to refine next.
