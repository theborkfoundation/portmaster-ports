# Portmaster Ports

Homepage for our aarch64 port projects: a list of every port and a link to
its source.

Built with Vite + React (TypeScript) + Tailwind CSS, routed with
`react-router`. Content is Markdown with YAML frontmatter, compiled to React
components by MDX at build time. Bun is the package manager.

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
| `/ports/:slug` | one port: Markdown body, tags and a download button |
| `/disclaimer` | as-is notice, legal game files, trademarks |
| `*` | not found |

## Content

Each port is one folder:

```
ports/
  pacman256/
    pacman256.md
    pacman256.webp   # optional screenshot, any png/jpg/jpeg/webp
```

The Markdown file carries Jekyll-style frontmatter and the body:

```markdown
---
name: PAC-MAN 256
updated: "2026-10-23"
game_version: "2.1.5 (2634)"
tags: [Unity, IL2CPP, FMOD, PortMaster]
# URL of the release archive shown as the Download button.
download: https://example.com/pacman256.zip
---

The body becomes the port's page.
```

| field | used by |
|--|--|
| `name`, `updated` | home list |
| `game_version`, `tags`, `download` | detail page |

The list is sorted by `updated`, newest first (then by name).

An image in the folder (`png`, `jpg`, `jpeg` or `webp`) is picked up
automatically and shown on the port page. It is processed at build time by
`vite-imagetools` to a 640px-wide PNG (`?w=640&format=png`), with the aspect
ratio preserved.

`slug` comes from the directory name, so adding `ports/mygame/mygame.md` is
enough — `src/content/ports.ts` picks it up with `import.meta.glob` and the
home list, count and detail route follow automatically. The body is MDX, so
Markdown is enough but JSX is allowed where a page needs it.

Styling is intentionally minimal for now; the layout and type scale are the
placeholders to refine next.
