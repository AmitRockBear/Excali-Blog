import { defineConfig } from "astro/config"
import tailwind from "@astrojs/tailwind"

import vercel from "@astrojs/vercel/serverless"

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind()],
  output: "hybrid",
  adapter: vercel(),
  markdown: {
    remarkPlugins: ["remark-math"],
    rehypePlugins: [
      [
        "rehype-katex",
        {
          macros: {
            "\\E": "\\mathbb{E}",
            "\\C": "\\mathbb{C}",
            "\\R": "\\mathbb{R}",
            "\\N": "\\mathbb{N}",
            "\\Q": "\\mathbb{Q}",
            "\\bigO": "\\mathcal{O}",
            "\\abs": "|#1|",
            "\\set": "\\{ #1 \\}",
            "\\indep": "{\\perp\\mkern-9.5mu\\perp}",
            "\\nindep": "{\\not\\!\\perp\\!\\!\\!\\perp}",
            "\\latex": "\\LaTeX",
            "\\katex": "\\KaTeX",
          },
        },
      ],
    ],
  },
})
