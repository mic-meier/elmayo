import fs from 'fs'
import { bundleMDXFile } from 'mdx-bundler'
import { join } from 'path'

const POSTS_PATH = join(process.cwd(), '_posts')

export function getPostFilePaths(): string[] {
  // Search folder with posts and return only md(x) files
  const paths = fs
    .readdirSync(POSTS_PATH)
    .filter((path) => /\.mdx?$/.test(path))
  return paths
}

export const getFrontMatter = async (path: string) => {
  const { frontmatter } = await bundleMDXFile(path).then((data) => data)
  return frontmatter
}

export const getPost = async (slug: string | string[] | undefined) => {
  const { code, frontmatter } = await bundleMDXFile(`${POSTS_PATH}/${slug}.mdx`)
  return { code, frontmatter }
}

export async function getAllPosts() {
  const paths = getPostFilePaths()
  return paths.map(async (path) => await getFrontMatter(join(POSTS_PATH, path)))
}

export async function getAllPostsFrontmatter() {
  const paths = getPostFilePaths()
  const promises = paths.map(async (path) => {
    const frontmatter = await getFrontMatter(join(POSTS_PATH, path)).then(
      (fm) => {
        if (process.env.NODE_ENV === 'production') {
          if (fm.published) return fm
        } else {
          return fm
        }
      }
    )
    return frontmatter
  })

  const posts = await Promise.all(promises)
  const filteredPosts = posts.filter((post) => post?.published != undefined)

  return filteredPosts.sort((a, b) => (a?.date > b?.date ? -1 : 1))
}
