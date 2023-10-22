import type { CollectionEntry } from "astro:content"

export const sortCollectionEntriesFromNewest = (
  entriesArr: CollectionEntry<"projects" | "posts">[]
): CollectionEntry<"projects" | "posts">[] => {
  const copyOfEntriesArr = entriesArr.slice(0)
  copyOfEntriesArr.sort(
    (entry1, entry2) =>
      entry2.data.publishDate.getTime() - entry1.data.publishDate.getTime()
  )
  return copyOfEntriesArr
}
