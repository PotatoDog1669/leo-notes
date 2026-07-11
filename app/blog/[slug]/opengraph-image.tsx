import { notFound } from 'next/navigation'
import { ImageResponse } from 'next/og'
import { getPostBySlug } from '@/lib/posts'

export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default async function OpenGraphImage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const post = getPostBySlug(slug)
  if (!post) notFound()

  const titleSize = post.title.length > 28 ? 54 : 66

  return new ImageResponse(
    (
      <div style={{ alignItems: 'stretch', background: '#fdf8ed', color: '#25242d', display: 'flex', height: '100%', width: '100%' }}>
        <div style={{ background: '#f2ecd9', borderRight: '8px solid #e6dcc2', display: 'flex', flexDirection: 'column', padding: '72px 54px', width: 310 }}>
          <div style={{ alignItems: 'center', display: 'flex', fontSize: 28, fontWeight: 700, gap: 16 }}>
            <div style={{ background: '#8f573d', border: '6px solid #25242d', borderTop: '12px solid #78ad52', height: 38, width: 50 }} />
            Leo's Notes
          </div>
          <div style={{ background: '#e6dcc2', height: 4, marginTop: 42, width: '100%' }} />
          <div style={{ color: '#ba2b6c', fontFamily: 'monospace', fontSize: 20, fontWeight: 700, marginTop: 38 }}>BLOG / {post.year}</div>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '80px 72px', width: 890 }}>
          <div style={{ color: '#ba2b6c', fontFamily: 'monospace', fontSize: 22, fontWeight: 700 }}>{post.tags.slice(0, 3).join(' / ').toUpperCase()}</div>
          <div style={{ fontSize: titleSize, fontWeight: 700, lineHeight: 1.12, marginTop: 24, width: 720 }}>{post.title}</div>
          <div style={{ borderTop: '5px solid #e6dcc2', fontSize: 24, lineHeight: 1.45, marginTop: 38, paddingTop: 28, width: 720 }}>{post.summary}</div>
        </div>
      </div>
    ),
    size,
  )
}
