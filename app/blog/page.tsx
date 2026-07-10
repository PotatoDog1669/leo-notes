import { BlogContent } from '@/components/blog-content'
import { SiteShell } from '@/components/site-shell'
import { getAllPosts } from '@/lib/posts'

export default function BlogPage() {
  return (
    <SiteShell>
      <BlogContent posts={getAllPosts()} />
    </SiteShell>
  )
}
