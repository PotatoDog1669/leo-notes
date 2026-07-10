'use client'

import { useEffect, useState } from 'react'

type Heading = {
  id: string
  text: string
  level: number
}

export function ArticleToc({ headings }: { headings: Heading[] }) {
  const [activeId, setActiveId] = useState(headings[0]?.id ?? '')

  useEffect(() => {
    let frame = 0

    const updateActiveHeading = () => {
      frame = 0
      const readingLine = window.innerHeight * 0.28
      let nextActiveId = headings[0]?.id ?? ''

      for (const heading of headings) {
        const element = document.getElementById(heading.id)
        if (element && element.getBoundingClientRect().top <= readingLine) {
          nextActiveId = heading.id
        }
      }

      setActiveId(nextActiveId)
    }

    const onScroll = () => {
      if (!frame) frame = window.requestAnimationFrame(updateActiveHeading)
    }

    updateActiveHeading()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)

    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
      if (frame) window.cancelAnimationFrame(frame)
    }
  }, [headings])

  return (
    <aside className="article-toc" aria-label="Table of contents">
      <h2>Table of Contents</h2>
      <nav>
        {headings.map((heading) => (
          <a
            key={heading.id}
            className={`${heading.level === 3 ? 'nested' : ''} ${activeId === heading.id ? 'active' : ''}`.trim()}
            href={`#${heading.id}`}
            onClick={() => setActiveId(heading.id)}
            aria-current={activeId === heading.id ? 'location' : undefined}
          >
            {heading.text}
          </a>
        ))}
      </nav>
    </aside>
  )
}
