import { getAllPosts } from '@/lib/posts'
import { siteUrl } from '@/lib/site'

export function GET() {
  const posts = getAllPosts()
  const items = posts.map((post) => `
    <item>
      <title><![CDATA[${post.title}]]></title>
      <link>${siteUrl}/blog/${post.slug}</link>
      <guid>${siteUrl}/blog/${post.slug}</guid>
      <pubDate>${new Date(post.date).toUTCString()}</pubDate>
      <description><![CDATA[${post.summary}]]></description>
    </item>`).join('')

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
    <rss version="2.0"><channel>
      <title>Leo's Notes</title>
      <link>${siteUrl}</link>
      <description>Writing by Leo on large language models, agents, and systems.</description>${items}
    </channel></rss>`

  return new Response(xml, { headers: { 'Content-Type': 'application/rss+xml; charset=utf-8' } })
}
