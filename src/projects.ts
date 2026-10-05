
// loads the project markdown and layout.yaml from src/content

import { parse } from "yaml"
import { getImage } from "astro:assets"
import layoutYaml from "./content/layout.yaml?raw"

// slider images are shown at most ~350px wide, so 800px covers high-DPI screens
const IMAGE_WIDTH = 800

type Markdown = {
  frontmatter: {
    slug: string
    title: string
  }
  compiledContent: () => string | Promise<string>
}

export type ProjectData = {
  folder: string
  title: string
  slug: string
  html: string
  images: string[] | null
}

const markdowns = import.meta.glob<Markdown>("./content/*/*.md", { eager: true })
const images = import.meta.glob<{ default: ImageMetadata }>("./content/*/*.{png,jpg,jpeg,gif}", { eager: true })
// videos are already compressed, so they're just copied into the build as-is
const videos = import.meta.glob<string>("./content/*/*.{webm,mp4}", { eager: true, query: "?url", import: "default" })

// Helper function to extract the folder name from the file path
const getFolderName = (path: string): string => {
  const parts = path.split('/')
  return parts[parts.length - 2]
}

export async function getAllMarkdown() {
  return Promise.all(Object.values(markdowns).map(async md => ({
    ...md.frontmatter,
    html: await md.compiledContent(),
  })))
}

// projects in the order (and with the images) listed in layout.yaml
export async function getProjects(): Promise<ProjectData[]> {
  const layout: { folder: string, images?: string[] }[] = parse(layoutYaml)

  const projects = await Promise.all(layout.map(async ({ folder, images: imagePaths }) => {

    let markdown = Object.entries(markdowns).find(([path]) => getFolderName(path) === folder)?.[1]

    if (!markdown) {
      console.error("Could not find markdown for folder: " + folder)
      return null
    }

    return {
      folder,
      title: markdown.frontmatter.title,
      slug: markdown.frontmatter.slug,
      html: await markdown.compiledContent(),
      // image paths in layout.yaml are relative to src/content
      images: imagePaths ? await Promise.all(imagePaths.map(async p => {
        let path = "./content/" + p.replace(/^\.\//, "")
        if (videos[path]) return videos[path]
        let image = images[path]
        if (!image) throw new Error("Could not find image or video: " + p)
        // resize and convert to webp at build time
        let optimized = await getImage({ src: image.default, width: IMAGE_WIDTH, format: "webp" })
        return optimized.src
      })) : null,
    }
  }))

  return projects.filter(p => p !== null)
}
