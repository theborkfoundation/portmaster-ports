const REPO = "theborkfoundation/portmaster-ports"
const TAG = "v0.0.0"

export type ReleaseAsset = {
  name: string
  url: string
  size: number
  updated: string
  downloads: number
}

export type ReleaseInfo = {
  assets: ReleaseAsset[]
}

type RawAsset = {
  name: string
  browser_download_url: string
  size: number
  updated_at: string
  download_count: number
}

type RawRelease = {
  assets: RawAsset[]
}

let pending: Promise<ReleaseInfo> | null = null

// Local development reads the mock fixture from the dev server instead of the
// GitHub API (60 anonymous requests/hour per IP).
const ENDPOINT = import.meta.env.DEV
  ? "/__mock__/release.json"
  : `https://api.github.com/repos/${REPO}/releases/tags/${TAG}`

/**
 * Release metadata, fetched once per page load. api.github.com is CORS-enabled
 * but anonymous requests are limited to 60/hour per IP, so the promise is
 * shared between pages.
 */
export function getRelease(): Promise<ReleaseInfo> {
  if (!pending) {
    pending = fetch(ENDPOINT, {
      headers: { Accept: "application/vnd.github+json" },
    })
      .then(async (res) => {
        if (!res.ok) throw new Error(`GitHub API responded ${res.status}`)
        const data = (await res.json()) as RawRelease
        return {
          assets: data.assets.map((asset) => ({
            name: asset.name,
            url: asset.browser_download_url,
            size: asset.size,
            updated: asset.updated_at,
            downloads: asset.download_count,
          })),
        }
      })
      .catch((error) => {
        pending = null
        throw error
      })
  }
  return pending
}

/** Assets whose file name starts with the port's alias, newest upload first. */
export function assetsFor(release: ReleaseInfo, alias: string): ReleaseAsset[] {
  const prefix = alias.toLowerCase()
  return release.assets
    .filter((asset) => asset.name.toLowerCase().startsWith(prefix))
    .sort((a, b) => b.updated.localeCompare(a.updated) || b.name.localeCompare(a.name))
}
