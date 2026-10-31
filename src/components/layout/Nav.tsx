import { useState, useEffect } from 'react'
import { Menu, X, Github } from 'lucide-react'
import { useScrollSpy } from '@/lib/useScrollSpy'
import { profile } from '@/data/profile'

const NAV_SECTIONS = ['about', 'skills', 'projects', 'lab', 'leadership', 'achievements', 'contact']
const NAV_LABELS: Record<string, string> = {
  about: 'About',
  skills: 'Skills',
  projects: 'Projects',
  lab: 'Quest ⚡',
  leadership: 'Leadership',
  achievements: 'Milestones',
  contact: 'Community',
}

export function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const activeSection = useScrollSpy(NAV_SECTIONS)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [])

  useEffect(() => {
    if (menuOpen) {
      const handler = () => setMenuOpen(false)
      window.addEventListener('scroll', handler, { passive: true, once: true })
    }
  }, [menuOpen])

  useEffect(() => {
    if (!menuOpen) return
    const handler = (e: KeyboardEvent) => { if (e.key === 'Escape') setMenuOpen(false) }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [menuOpen])

  const handleNavClick = (id: string) => {
    setMenuOpen(false)
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <header className={`nav-root ${scrolled ? 'scrolled' : ''}`} role="banner">
      <div className="container-content">
        <nav className="flex items-center justify-between py-4" aria-label="Main navigation">

          {/* Wordmark */}
          <a
            href="#hero"
            onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }) }}
            className="font-mono font-semibold tracking-[0.14em] uppercase text-[var(--color-text-1)] hover:text-[var(--color-accent)] transition-colors duration-150 no-underline shrink-0"
            style={{ fontSize: 'var(--text-xs)' }}
            aria-label="THE BUILDER'S LAB — return to top"
          >
            THE BUILDER'S LAB
          </a>

          {/* Desktop nav */}
          <div className="hidden lg:flex items-center gap-1">
            {NAV_SECTIONS.map((id) => (
              <a
                key={id}
                href={`#${id}`}
                onClick={(e) => { e.preventDefault(); handleNavClick(id) }}
                className={`nav-link ${activeSection === id ? 'active' : ''}`}
                aria-current={activeSection === id ? 'page' : undefined}
              >
                {NAV_LABELS[id]}
              </a>
            ))}
          </div>

          {/* GitHub link */}
          <div className="hidden lg:flex items-center">
            <a
              href={profile.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-[var(--color-text-3)] hover:text-[var(--color-text-1)] transition-colors duration-150"
              style={{ fontSize: 'var(--text-sm)' }}
              aria-label="Visit GitHub profile of Tanush Kasetty (opens in new tab)"
            >
              <Github size={15} strokeWidth={1.5} />
              <span className="font-mono text-xs">@tanush326k</span>
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            className="lg:hidden flex items-center justify-center w-11 h-11 text-[var(--color-text-2)] hover:text-[var(--color-text-1)] transition-colors cursor-pointer"
            onClick={() => setMenuOpen((v) => !v)}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </nav>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div
          id="mobile-menu"
          className="lg:hidden border-t border-[var(--color-border)] bg-[var(--color-bg)]"
          role="navigation"
          aria-label="Mobile navigation"
        >
          <div className="container-content py-4 flex flex-col gap-1">
            {NAV_SECTIONS.map((id) => (
              <a
                key={id}
                href={`#${id}`}
                onClick={(e) => { e.preventDefault(); handleNavClick(id) }}
                className={`nav-link block py-3 ${activeSection === id ? 'active' : ''}`}
                style={{ fontSize: 'var(--text-base)' }}
                aria-current={activeSection === id ? 'page' : undefined}
              >
                {NAV_LABELS[id]}
              </a>
            ))}
            <div className="pt-3 border-t border-[var(--color-border)] mt-2">
              <a
                href={profile.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 py-2 text-[var(--color-text-2)]"
                style={{ fontSize: 'var(--text-sm)' }}
              >
                <Github size={15} strokeWidth={1.5} />
                <span className="font-mono">GitHub: @tanush326k</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
