import type { MouseEvent } from 'react'
import { ThemeToggle } from './ThemeToggle'

const LINKS = [
  { href: '#about', label: 'About' },
  { href: '#work', label: 'Work' },
  { href: '#reel', label: 'Reel' },
  { href: '#contact', label: 'Contact' },
]

function smoothScroll(e: MouseEvent<HTMLAnchorElement>) {
  const href = e.currentTarget.getAttribute('href') ?? ''
  if (href.length <= 1 || !href.startsWith('#')) return
  const el = document.querySelector(href)
  if (el instanceof HTMLElement) {
    e.preventDefault()
    window.scrollTo({ top: el.offsetTop - 20, behavior: 'smooth' })
  }
}

export function Nav() {
  return (
    <nav className="top">
      <div className="logo">
        AMER<span>.</span>MYSARA
      </div>
      <div className="nav-right">
        <ul>
          {LINKS.map((l) => (
            <li key={l.href}>
              <a href={l.href} onClick={smoothScroll}>
                {l.label}
              </a>
            </li>
          ))}
        </ul>
        <ThemeToggle />
      </div>
    </nav>
  )
}
