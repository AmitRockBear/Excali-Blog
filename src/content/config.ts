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
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string(),
    chips: z.array(z.string()),
    githubLink: z.string(),
    publishDate: z.date(),
  }),
})

export const collections = {
  posts: postsCollection,
  projects: projectsCollection,
}
