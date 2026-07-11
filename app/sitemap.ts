import type { MetadataRoute } from 'next'
import { getAllPosts } from '@/lib/posts'
import { siteUrl } from '@/lib/site'

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = ['/', '/blog', '/notes', '/projects', '/about', '/topics']
  const staticEntries = staticRoutes.map((route) => ({
    url: new URL(route, siteUrl).toString(),
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: route === '/' ? 1 : 0.7,
  }))
  const postEntries = getAllPosts().map((post) => ({
    url: new URL(`/blog/${post.slug}`, siteUrl).toString(),
    lastModified: new Date(`${post.date}T00:00:00`),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }))

  return [...staticEntries, ...postEntries]
}
