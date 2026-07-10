import { SiteShell } from '@/components/site-shell'
import { PixelIcon } from '@/components/pixel-icon'
import { SiteSearch } from '@/components/site-search'
import { getAllPosts } from '@/lib/posts'

export default function ProjectsPage() {
  const searchItems = getAllPosts().map((post) => ({ href: `/blog/${post.slug}`, title: post.title, kind: 'Blog', keywords: post.tags.join(' ') }))

  return (
    <SiteShell>
      <main className="content-page simple-page">
        <h1><PixelIcon name="anvil" size={44} /> Projects</h1>
        <p className="lede">Experiments, small systems, and work in progress.</p>
        <SiteSearch items={searchItems} />
        <div className="empty-state">A shelf reserved for future work.</div>
      </main>
    </SiteShell>
  )
}
