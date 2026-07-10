import Link from 'next/link'
import { SiteShell } from '@/components/site-shell'
import { getAllTags, getPostsByTag } from '@/lib/posts'

export default function TopicsPage() {
  const tags = getAllTags()

  return (
    <SiteShell>
      <main className="content-page topics-page">
        <h1>Topics</h1>
        <p className="lede">Browse the ideas behind the notes.</p>
        <div className="topic-cloud">
          {tags.map((tag) => <Link href={`/topics/${encodeURIComponent(tag)}`} key={tag}>{tag}<span>{getPostsByTag(tag).length}</span></Link>)}
        </div>
      </main>
    </SiteShell>
  )
}
