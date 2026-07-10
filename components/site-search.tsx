'use client'

import Link from 'next/link'
import { useMemo, useState } from 'react'
import { PixelIcon } from '@/components/pixel-icon'

export type SearchItem = {
  href: string
  title: string
  kind: string
  keywords?: string
}

export function SiteSearch({ items }: { items: SearchItem[] }) {
  const [query, setQuery] = useState('')
  const normalizedQuery = query.trim().toLowerCase()
  const results = useMemo(
    () => items.filter((item) => `${item.title} ${item.kind} ${item.keywords ?? ''}`.toLowerCase().includes(normalizedQuery)),
    [items, normalizedQuery],
  )

  return (
    <div className="site-search">
      <label className="search-field">
        <PixelIcon name="search" size={25} />
        <input
          type="search"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          onKeyDown={(event) => {
            if (event.key === 'Escape') setQuery('')
          }}
          placeholder={`Search ${items.length} ${items.length === 1 ? 'item' : 'items'}...`}
          aria-label="Search published work"
          aria-controls="site-search-results"
          aria-expanded={normalizedQuery.length > 0}
        />
      </label>
      {normalizedQuery && (
        <ul className="site-search-results" id="site-search-results">
          {results.map((item) => (
            <li key={item.href}>
              <Link href={item.href} onClick={() => setQuery('')}>
                <span>{item.kind}</span>
                {item.title}
              </Link>
            </li>
          ))}
          {results.length === 0 && <li className="site-search-empty">No matching published work.</li>}
        </ul>
      )}
    </div>
  )
}
