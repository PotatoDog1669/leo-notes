import { SiteShell } from '@/components/site-shell'
import { PixelIcon } from '@/components/pixel-icon'
import { Github, Mail } from 'lucide-react'

export default function AboutPage() {
  return (
    <SiteShell>
      <main className="content-page simple-page about-page">
        <h1><PixelIcon name="nameplate" size={44} /> About Me</h1>
        <p className="lede">I&apos;m <strong>Leo</strong> (黎耀聪), an algorithm engineer focused on large language models and agents.</p>
        <p>Leo&apos;s Notes is where I share my work, experiments, and the ideas that grow from them.</p>
        <div className="profile-links">
          <a href="mailto:potatodog16692@gmail.com"><Mail size={18} aria-hidden="true" /> potatodog16692@gmail.com</a>
          <a href="https://github.com/PotatoDog1669" target="_blank" rel="noreferrer"><Github size={18} aria-hidden="true" /> github.com/PotatoDog1669</a>
        </div>
      </main>
    </SiteShell>
  )
}
