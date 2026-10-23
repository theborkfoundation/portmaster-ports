import { defineConfig } from "vite"
import mdx from "@mdx-js/rollup"
import react from "@vitejs/plugin-react"
import tailwindcss from "@tailwindcss/vite"
import { imagetools } from "vite-imagetools"
import remarkFrontmatter from "remark-frontmatter"
import remarkMdxFrontmatter from "remark-mdx-frontmatter"

export default defineConfig({
  plugins: [
    // Runs before the React plugin so .md files become JSX modules.
    {
      enforce: "pre",
      ...mdx({
        include: /\.mdx?$/,
        remarkPlugins: [remarkFrontmatter, remarkMdxFrontmatter],
      }),
    },
    react(),
    tailwindcss(),
    // Port images are resized/converted at build time (?w=640&format=png).
    imagetools(),
  ],
})
