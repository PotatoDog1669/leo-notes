import Link from 'next/link'
import { PixelIcon } from '@/components/pixel-icon'
import { SiteSearch } from '@/components/site-search'
import { SiteShell } from '@/components/site-shell'
import { getAllPosts } from '@/lib/posts'

export default function AllPage() {
  const posts = getAllPosts()
  const searchItems = posts.map((post) => ({ href: `/blog/${post.slug}`, title: post.title, kind: 'Blog', keywords: post.tags.join(' ') }))

  return (
    <SiteShell>
      <main className="content-page all-page">
        <h1><PixelIcon name="map" size={44} /> All</h1>
        <p className="lede">Everything I publish, newest first.</p>
        <SiteSearch items={searchItems} />

        <section className="all-timeline" aria-label="All published work">
          {posts.map((post) => (
            <article className="timeline-item" key={post.slug}>
              <time dateTime={post.date}>{post.displayDate}, {post.year}</time>
              <div>
                <span className="content-kind">Blog</span>
                <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                <p>{post.summary}</p>
              </div>
            </article>
          ))}
        </section>
      </main>
    </SiteShell>
  )
}
