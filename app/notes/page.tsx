import { SiteShell } from '@/components/site-shell'
import { PixelIcon } from '@/components/pixel-icon'
import { SiteSearch } from '@/components/site-search'
import { getAllPosts } from '@/lib/posts'

export default function NotesPage() {
  const searchItems = getAllPosts().map((post) => ({ href: `/blog/${post.slug}`, title: post.title, kind: 'Blog', keywords: post.tags.join(' ') }))

  return (
    <SiteShell>
      <main className="content-page simple-page">
        <h1><PixelIcon name="journal" size={44} /> Notes</h1>
        <p className="lede">Small observations, half-formed ideas, and useful things worth keeping nearby.</p>
        <SiteSearch items={searchItems} />
        <div className="empty-state">The first note is on its way.</div>
      </main>
    </SiteShell>
  )
}
