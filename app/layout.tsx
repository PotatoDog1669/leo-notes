import type { Metadata } from 'next'
import { Outfit } from 'next/font/google'
import type { ReactNode } from 'react'
import { Analytics } from '@vercel/analytics/next'
import { siteUrl } from '@/lib/site'
import './globals.css'

const outfit = Outfit({
  subsets: ['latin'],
  weight: ['700'],
  variable: '--font-outfit',
})

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Leo's Notes",
    template: "%s | Leo's Notes",
  },
  description: 'Writing by Leo (黎耀聪) on large language models, agents, and the systems around them.',
  authors: [{ name: 'Leo (黎耀聪)', url: 'https://github.com/PotatoDog1669' }],
  creator: 'Leo (黎耀聪)',
  keywords: ['LLM', 'AI agents', 'algorithm engineering', 'systems design', 'Leo'],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    siteName: "Leo's Notes",
    title: "Leo's Notes",
    description: 'Writing on large language models, agents, and systems.',
    images: [{ url: '/opengraph-image', width: 1200, height: 630, alt: "Leo's Notes" }],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Leo's Notes",
    description: 'Writing on large language models, agents, and systems.',
    images: ['/opengraph-image'],
  },
  robots: { index: true, follow: true },
}

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={outfit.variable}>{children}<Analytics /></body>
    </html>
  )
}
