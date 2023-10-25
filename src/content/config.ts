import { z, defineCollection } from "astro:content"

const postsCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string(),
    type: z.string(),
    publishDate: z.date(),
  }),
})

const projectsCollection = defineCollection({
  type: "data",
  schema: z.object({
    title: z.string(),
    description: z.string(),
    chips: z.array(z.string()),
    githubLink: z.string(),
    previewLink: z.string().optional(),
    publishDate: z.date(),
    image: z.object({
      src: z.string(),
      alt: z.string(),
    }),
  }),
})

export const collections = {
  posts: postsCollection,
  projects: projectsCollection,
}
