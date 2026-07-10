'use client'

import Link from 'next/link'
import { useMemo, useState } from 'react'
import { PixelIcon } from '@/components/pixel-icon'
import type { Post } from '@/lib/posts'

export function BlogContent({ posts }: { posts: Post[] }) {
  const [query, setQuery] = useState('')
  const normalizedQuery = query.trim().toLowerCase()
  const visiblePosts = useMemo(
    () => posts.filter((post) => `${post.title} ${post.tags.join(' ')}`.toLowerCase().includes(normalizedQuery)),
    [normalizedQuery, posts],
  )
  const groupedPosts = visiblePosts.reduce<Record<number, Post[]>>((groups, post) => {
    groups[post.year] ??= []
    groups[post.year].push(post)
    return groups
  }, {})

  return (
    <main className="content-page blog-page">
      <h1><PixelIcon name="scroll" size={44} /> Blog</h1>
      <p className="lede">Notes, references, and small experiments on design, technology, and the things I&apos;m learning.</p>

      <Link className="topic-link" href="/topics">All topics</Link>
      <label className="search-field">
        <PixelIcon name="search" size={25} />
        <input
          type="search"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder={`Search ${posts.length} posts...`}
          aria-label="Search posts"
        />
      </label>

      <section className="post-groups" aria-live="polite">
        {Object.entries(groupedPosts).sort(([firstYear], [secondYear]) => Number(secondYear) - Number(firstYear)).map(([year, yearlyPosts]) => (
          <section className="year-group" key={year} aria-labelledby={`year-${year}`}>
            <div className="year-heading">
              <h2 id={`year-${year}`}>{year}</h2>
              <span>{yearlyPosts.length} {yearlyPosts.length === 1 ? 'post' : 'posts'}</span>
            </div>
            <div className="post-list">
              {yearlyPosts.map((post) => (
                <article key={post.slug} className="post-preview">
                  <time dateTime={post.date}>{post.displayDate}</time>
                  <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                </article>
              ))}
            </div>
          </section>
        ))}
        {visiblePosts.length === 0 && <p className="no-results">No posts match “{query}”.</p>}
      </section>
    </main>
  )
}
