import { useState, type MouseEvent } from 'react'
import { ThemeToggle } from './ThemeToggle'

const LINKS = [
  { href: '#about', label: 'About' },
  { href: '#work', label: 'Work' },
  { href: '#reel', label: 'Reel' },
  { href: '#contact', label: 'Contact' },
]

export function Nav() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  function handleLinkClick(e: MouseEvent<HTMLAnchorElement>) {
    setMobileMenuOpen(false)
    const href = e.currentTarget.getAttribute('href') ?? ''
    if (href.length <= 1 || !href.startsWith('#')) return
    const el = document.querySelector(href)
    if (el instanceof HTMLElement) {
      e.preventDefault()
      window.scrollTo({ top: el.offsetTop - 20, behavior: 'smooth' })
    }
  }

  return (
    <nav className={`top ${mobileMenuOpen ? 'menu-open' : ''}`}>
      <div className="logo">
        AMER<span>.</span>MYSARA
      </div>
      <div className="nav-right">
        <ul className="desktop-links">
          {LINKS.map((l) => (
            <li key={l.href}>
              <a href={l.href} onClick={handleLinkClick}>
                {l.label}
              </a>
            </li>
          ))}
        </ul>
        <ThemeToggle />
        <button
          type="button"
          className="mobile-menu-toggle"
          onClick={() => setMobileMenuOpen((prev) => !prev)}
          aria-label="Toggle Navigation Menu"
        >
          <span className="hamburger-line" />
          <span className="hamburger-line" />
        </button>
      </div>

      {/* Mobile Navigation Drawer */}
      <div className={`mobile-nav-drawer ${mobileMenuOpen ? 'open' : ''}`}>
        <ul className="mobile-nav-links">
          {LINKS.map((l) => (
            <li key={l.href}>
              <a href={l.href} onClick={handleLinkClick}>
                {l.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}

