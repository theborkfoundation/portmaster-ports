import { formatDate } from "../lib/format"

export default function Disclaimer() {
  return (
    <div className="space-y-8">
      <title>Disclaimer — Portmaster Ports</title>
      <header className="space-y-2">
        <h1 className="text-2xl font-semibold tracking-tight">Disclaimer</h1>
        <p className="text-sm text-neutral-500">
          Last updated {formatDate("2026-10-23")}
        </p>
      </header>

      <section className="space-y-3">
        <h2 className="text-lg font-medium">Provided as is</h2>
        <p className="text-neutral-300">
          The ports, loaders and tooling published here are provided “as is”,
          without warranty of any kind, express or implied, including but not
          limited to the warranties of merchantability, fitness for a particular
          purpose and non-infringement. You install and run them at your own
          risk. We are not liable for damage to hardware, storage or data, or for
          any other loss arising from their use.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-lg font-medium">Game files</h2>
        <p className="text-neutral-300">
          These projects are loaders and compatibility layers, not copies of the
          games. You must obtain the game files yourself, legally — typically by
          purchasing the game and preparing the files in accordance with its
          licence and your local law. We do not provide, host, link to or
          distribute game files, APKs, OBBs or any other proprietary assets, and
          this site will never do so.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-lg font-medium">Trademarks and ownership</h2>
        <p className="text-neutral-300">
          Game titles, artwork and other game content remain the property of
          their respective owners. They are referenced here for identification
          only; no affiliation with or endorsement by the rights holders is
          implied.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-lg font-medium">Rights holders</h2>
        <p className="text-neutral-300">
          If you believe something on this site infringes your rights, please
          open an issue on GitHub and we will respond promptly.
        </p>
      </section>
    </div>
  )
}
