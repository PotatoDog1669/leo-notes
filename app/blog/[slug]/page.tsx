import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ArrowLeft, ArrowRight, Hash } from 'lucide-react'
import { marked } from 'marked'
import { SiteShell } from '@/components/site-shell'
import { GiscusComments } from '@/components/giscus-comments'
import { ArticleToc } from '@/components/article-toc'
import { getAdjacentPosts, getAllPosts, getPostBySlug } from '@/lib/posts'

type Heading = { id: string; text: string; level: number }

function slugify(value: string) {
  return value.toLowerCase().trim()
    .replace(/[^\p{L}\p{N}\s-]/gu, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
}

function renderPostContent(markdown: string) {
  const headings: Heading[] = []
  const renderer = new marked.Renderer()
  renderer.heading = ({ text, depth }) => {
    const id = slugify(text)
    if (depth === 2 || depth === 3) headings.push({ id, text, level: depth })
    return `<h${depth} id="${id}"><a class="heading-anchor" href="#${id}" aria-label="Link to ${text}">#</a>${text}</h${depth}>`
  }
  return { html: marked.parse(markdown, { renderer, gfm: true }) as string, headings }
}

export function generateStaticParams() {
  return getAllPosts().map((post) => ({ slug: post.slug }))
}

export default async function PostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const post = getPostBySlug(slug)
  if (!post) notFound()

  const { html, headings } = renderPostContent(post.content)
  const { newer, older } = getAdjacentPosts(post.slug)

  return (
    <SiteShell>
      <article className="content-page article-page">
        <Link className="back-link" href="/">
          <ArrowLeft size={19} strokeWidth={2.8} aria-hidden="true" />
          All posts
        </Link>
        <header className="article-header">
          <time className="article-date" dateTime={post.date}>{post.displayDate} · {post.year}</time>
          <h1>{post.title}</h1>
          <p className="article-intro">{post.summary}</p>
          <div className="article-tags" aria-label="Post topics">
            {post.tags.map((tag) => <Link href={`/topics/${encodeURIComponent(tag)}`} key={tag}>{tag}</Link>)}
          </div>
        </header>

        <div className="article-layout">
          <div className="article-body" dangerouslySetInnerHTML={{ __html: html }} />
          <ArticleToc headings={headings} />
        </div>

        <nav className="post-navigation" aria-label="Post navigation">
          {newer ? <Link href={`/blog/${newer.slug}`}><ArrowLeft size={18} aria-hidden="true" /><span><small>Newer</small>{newer.title}</span></Link> : <span />}
          {older ? <Link className="next" href={`/blog/${older.slug}`}><span><small>Older</small>{older.title}</span><ArrowRight size={18} aria-hidden="true" /></Link> : <span />}
        </nav>

        <a className="article-comments" href={`mailto:potatodog16692@gmail.com?subject=${encodeURIComponent(`Thoughts on ${post.title}`)}`}><Hash size={17} aria-hidden="true" /> Share a thought by email</a>
        <GiscusComments term={post.slug} />
      </article>
    </SiteShell>
  )
}
