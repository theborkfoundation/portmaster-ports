import type { ComponentType } from "react"

export type PortFrontmatter = {
  name: string
  updated: string
  game_version: string
  game_bundle: string
  tags: string[]
  alias: string
}

export type Port = PortFrontmatter & {
  slug: string
  image?: string
  Content: ComponentType
}

type PortModule = {
  default: ComponentType
  frontmatter: PortFrontmatter
}

// Every ports/<name>/<name>.md becomes a page; remark-mdx-frontmatter exports
// the YAML frontmatter and the body is compiled to a React component.
const modules = import.meta.glob<PortModule>("../../ports/*/*.md", { eager: true })

// One image per port folder, converted to a 640px-wide PNG at build time.
const images = import.meta.glob<string>("../../ports/*/*.{png,jpg,jpeg,webp}", {
  eager: true,
  query: "?w=640&format=png",
  import: "default",
})

function normalizeDate(value: unknown): string {
  if (value instanceof Date) return value.toISOString().slice(0, 10)
  return String(value)
}

function slugOf(path: string): string {
  return path.split("/").slice(-2, -1)[0]
}

function imageFor(slug: string): string | undefined {
  const path = Object.keys(images).find((key) => slugOf(key) === slug)
  return path ? images[path] : undefined
}

export const ports: Port[] = Object.entries(modules)
  .map(([path, mod]) => {
    const slug = slugOf(path)
    return {
      ...mod.frontmatter,
      updated: normalizeDate(mod.frontmatter.updated),
      slug,
      image: imageFor(slug),
      Content: mod.default,
    }
  })
  .sort((a, b) => b.updated.localeCompare(a.updated) || a.name.localeCompare(b.name))

export function getPort(slug: string | undefined): Port | undefined {
  return ports.find((port) => port.slug === slug)
}
