import { getAllPosts } from '@/lib/posts'

export function GET() {
  const posts = getAllPosts()
  const items = posts.map((post) => `
    <item>
      <title><![CDATA[${post.title}]]></title>
      <link>https://leosnotes.dev/blog/${post.slug}</link>
      <guid>https://leosnotes.dev/blog/${post.slug}</guid>
      <pubDate>${new Date(post.date).toUTCString()}</pubDate>
      <description><![CDATA[${post.summary}]]></description>
    </item>`).join('')

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
    <rss version="2.0"><channel>
      <title>Leo's Notes</title>
      <link>https://leosnotes.dev</link>
      <description>A digital garden by Leo.</description>${items}
    </channel></rss>`

  return new Response(xml, { headers: { 'Content-Type': 'application/rss+xml; charset=utf-8' } })
}
