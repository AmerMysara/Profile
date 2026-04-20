import type { MouseEvent } from 'react'

const LINKS = [
  { href: '#about', idx: '02', label: 'About' },
  { href: '#work', idx: '04', label: 'Work' },
  { href: '#reel', idx: '05', label: 'Reel' },
  { href: '#contact', idx: '09', label: 'Contact' },
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
      <ul>
        {LINKS.map((l) => (
          <li key={l.href}>
            <a href={l.href} onClick={smoothScroll}>
              <span className="nav-idx">{l.idx}</span>
              {l.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}
