import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ArrowLeft } from 'lucide-react'
import { SiteShell } from '@/components/site-shell'
import { getAllTags, getPostsByTag } from '@/lib/posts'

export function generateStaticParams() {
  return getAllTags().map((tag) => ({ tag }))
}

export default async function TopicPage({ params }: { params: Promise<{ tag: string }> }) {
  const { tag } = await params
  const posts = getPostsByTag(tag)
  if (!posts.length) notFound()

  return (
    <SiteShell>
      <main className="content-page topics-page">
        <Link className="back-link" href="/topics"><ArrowLeft size={19} aria-hidden="true" /> All topics</Link>
        <p className="topic-kicker">Topic</p>
        <h1>{tag}</h1>
        <div className="topic-posts">
          {posts.map((post) => (
            <article key={post.slug}>
              <time dateTime={post.date}>{post.displayDate} · {post.year}</time>
              <Link href={`/blog/${post.slug}`}>{post.title}</Link>
              <p>{post.summary}</p>
            </article>
          ))}
        </div>
      </main>
    </SiteShell>
  )
}
