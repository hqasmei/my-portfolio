import fs from "fs"
import path from "path"
import { getAllBooksMeta } from "./mdx"

type Tags = Record<string, number>

export async function getAllTags(): Promise<Tags> {
  const files = await getAllBooksMeta("books")

  let tagCount: Tags = {}
  // Iterate through each post, putting all found tags into tags
  files.forEach((file) => {
    if (file["tags"]?.length !== 0) {
      file["tags"]?.forEach((tag) => {
        if (tag in tagCount) {
          tagCount[tag] += 1
        } else {
          tagCount[tag] = 1
        }
      })
    }
  })

  return tagCount
}
