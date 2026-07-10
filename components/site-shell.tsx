'use client'

import Link from 'next/link'
import { Github, Mail, Menu, X } from 'lucide-react'
import { useEffect, useState, type CSSProperties, type ReactNode } from 'react'
import { usePathname } from 'next/navigation'
import { PixelIcon } from '@/components/pixel-icon'

const navigation = [
  { href: '/', label: 'All', icon: 'map' },
  { href: '/blog', label: 'Blog', icon: 'scroll' },
  { href: '/notes', label: 'Notes', icon: 'journal' },
  { href: '/projects', label: 'Projects', icon: 'anvil' },
  { href: '/about', label: 'About Me', icon: 'nameplate' },
]

const accentChoices = [
  { name: 'Purple', value: '#a951c7', deep: '#80369d' },
  { name: 'Berry', value: '#ba2b6c', deep: '#8e174f' },
  { name: 'Gold', value: '#b57a11', deep: '#825509' },
  { name: 'Green', value: '#2e9638', deep: '#1e6e27' },
  { name: 'Blue', value: '#3378bb', deep: '#23568d' },
]

export function SiteShell({ children }: { children: ReactNode }) {
  const pathname = usePathname()
  const [dark, setDark] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [colorMenuOpen, setColorMenuOpen] = useState(false)
  const [accent, setAccent] = useState(accentChoices[1])

  useEffect(() => {
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
    const savedTheme = window.localStorage.getItem('leo-theme')
    const useDark = savedTheme ? savedTheme === 'dark' : prefersDark
    setDark(useDark)
    document.documentElement.dataset.theme = useDark ? 'dark' : 'light'

    const savedAccent = window.localStorage.getItem('leo-accent')
    const savedChoice = accentChoices.find((choice) => choice.value === savedAccent)
    if (savedChoice) applyAccent(savedChoice)
  }, [])

  function applyAccent(choice: typeof accentChoices[number]) {
    setAccent(choice)
    document.documentElement.style.setProperty('--accent', choice.value)
    document.documentElement.style.setProperty('--accent-deep', choice.deep)
    window.localStorage.setItem('leo-accent', choice.value)
  }

  function toggleTheme() {
    const nextTheme = !dark
    setDark(nextTheme)
    document.documentElement.dataset.theme = nextTheme ? 'dark' : 'light'
    window.localStorage.setItem('leo-theme', nextTheme ? 'dark' : 'light')
  }

  return (
    <div className="site-frame">
      <aside className={`sidebar ${menuOpen ? 'is-open' : ''}`}>
        <div className="side-topline">
          <Link href="/" className="wordmark" onClick={() => setMenuOpen(false)}>
            <span aria-hidden="true" className="mark"><PixelIcon name="brand" size={25} /></span>
            <span>Leo&apos;s Notes</span>
          </Link>
          <div className="color-picker">
            <button
              className={`status-dot ${colorMenuOpen ? 'is-open' : ''}`}
              type="button"
              onClick={() => setColorMenuOpen((open) => !open)}
              aria-label="Choose accent color"
              aria-expanded={colorMenuOpen}
              title="Choose accent color"
              style={{ '--dot-color': accent.value } as CSSProperties}
            />
            {colorMenuOpen && (
              <div className="color-menu" role="menu" aria-label="Accent colors">
                {accentChoices.map((choice) => (
                  <button
                    key={choice.value}
                    className={`color-swatch ${accent.value === choice.value ? 'selected' : ''}`}
                    type="button"
                    role="menuitemradio"
                    aria-label={choice.name}
                    aria-checked={accent.value === choice.value}
                    title={choice.name}
                    style={{ '--swatch-color': choice.value } as CSSProperties}
                    onClick={() => {
                      applyAccent(choice)
                      setColorMenuOpen(false)
                    }}
                  />
                ))}
              </div>
            )}
          </div>
          <button className="icon-button" onClick={toggleTheme} aria-label={dark ? 'Use light theme' : 'Use dark theme'}>
            {dark ? <PixelIcon name="sun" size={24} /> : <PixelIcon name="moon" size={24} />}
          </button>
          <button className="icon-button mobile-only" onClick={() => setMenuOpen(false)} aria-label="Close menu">
            <X size={23} strokeWidth={2.5} />
          </button>
        </div>

        <div className="sidebar-rule" />

        <section className="sidebar-intro" aria-labelledby="about-leo">
          <h2 id="about-leo">About Me</h2>
          <p>I&apos;m <a href="/about">Leo</a>, an algorithm engineer focused on large language models and agents. I share my work here. <PixelIcon name="sprout" size={19} className="inline-pixel-icon" /></p>
        </section>

        <nav className="primary-nav" aria-label="Primary navigation">
          {navigation.map((item) => {
            const active = item.href === '/' ? pathname === '/' : pathname === item.href || pathname.startsWith(`${item.href}/`)
            return (
              <Link key={item.href} href={item.href} className={active ? 'active' : ''} onClick={() => setMenuOpen(false)}>
                <span aria-hidden="true"><PixelIcon name={item.icon as 'map' | 'journal' | 'scroll' | 'anvil' | 'nameplate'} size={24} /></span>
                {item.label}
              </Link>
            )
          })}
        </nav>

        <div className="sidebar-rule lower-rule" />

        <section className="connect" aria-labelledby="stay-connected">
          <h2 id="stay-connected">Stay Connected</h2>
          <a href="mailto:potatodog16692@gmail.com"><Mail size={16} aria-hidden="true" /> Email</a>
          <a href="https://github.com/PotatoDog1669" target="_blank" rel="noreferrer"><Github size={16} aria-hidden="true" /> GitHub</a>
          <a href="/rss.xml">RSS feed</a>
        </section>
      </aside>

      <button className="mobile-menu-button" onClick={() => setMenuOpen(true)} aria-label="Open navigation menu">
        <Menu size={24} strokeWidth={2.5} />
      </button>
      <div className={`mobile-scrim ${menuOpen ? 'visible' : ''}`} onClick={() => setMenuOpen(false)} aria-hidden="true" />
      {children}
    </div>
  )
}
