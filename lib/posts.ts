import fs from 'node:fs'
import path from 'node:path'
import matter from 'gray-matter'

const postsDirectory = path.join(process.cwd(), 'content/posts')

export type Post = {
  slug: string
  title: string
  date: string
  displayDate: string
  year: number
  tags: string[]
  summary: string
  content: string
  draft: boolean
}

type PostFrontmatter = {
  title: string
  date: string | Date
  summary: string
  tags?: string[]
  draft?: boolean
}

function toDateKey(value: string | Date) {
  if (value instanceof Date) return value.toISOString().slice(0, 10)
  return value
}

function formatDate(date: string) {
  return new Intl.DateTimeFormat('en-US', { month: 'long', day: 'numeric' }).format(new Date(`${date}T00:00:00`))
}

function readPost(filename: string): Post {
  const source = fs.readFileSync(path.join(postsDirectory, filename), 'utf8')
  const { data, content } = matter(source)
  const frontmatter = data as PostFrontmatter
  const dateKey = toDateKey(frontmatter.date)
  const date = new Date(`${dateKey}T00:00:00`)

  return {
    slug: filename.replace(/\.mdx$/, ''),
    title: frontmatter.title,
    date: dateKey,
    displayDate: formatDate(dateKey),
    year: date.getFullYear(),
    tags: frontmatter.tags ?? [],
    summary: frontmatter.summary,
    content,
    draft: frontmatter.draft ?? false,
  }
}

export function getAllPosts() {
  return fs.readdirSync(postsDirectory)
    .filter((filename) => filename.endsWith('.mdx'))
    .map(readPost)
    .filter((post) => !post.draft)
    .sort((first, second) => new Date(second.date).getTime() - new Date(first.date).getTime())
}

export function getPostBySlug(slug: string) {
  const filename = `${slug}.mdx`
  if (!fs.existsSync(path.join(postsDirectory, filename))) return undefined
  const post = readPost(filename)
  return post.draft ? undefined : post
}

export function getAdjacentPosts(slug: string) {
  const allPosts = getAllPosts()
  const index = allPosts.findIndex((post) => post.slug === slug)
  return {
    newer: index > 0 ? allPosts[index - 1] : undefined,
    older: index >= 0 && index < allPosts.length - 1 ? allPosts[index + 1] : undefined,
  }
}

export function getAllTags() {
  return [...new Set(getAllPosts().flatMap((post) => post.tags))].sort((first, second) => first.localeCompare(second))
}

export function getPostsByTag(tag: string) {
  return getAllPosts().filter((post) => post.tags.some((postTag) => postTag.toLowerCase() === tag.toLowerCase()))
}
