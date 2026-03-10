'use client'

import { useState, useEffect } from 'react'
import { siteConfig } from '@/lib/data'

const links = [
  { label: 'Catálogo', href: '#catalogo' },
  { label: 'Sobre Nós', href: '#sobre' },
  { label: 'Avaliações', href: '#avaliacoes' },
  { label: 'Contato', href: '#contato' },
]

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const waLink = `https://wa.me/${siteConfig.whatsapp}?text=Ol%C3%A1!+Vim+pelo+site+e+gostaria+de+fazer+uma+encomenda.`

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-paper/95 backdrop-blur-md shadow-sm border-b border-rose-soft/30'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#"
          className="flex flex-col leading-none"
          style={{ fontFamily: 'var(--font-cinzel)' }}
        >
          <span className="text-sm font-semibold tracking-[0.25em] text-ink uppercase">
            Lady Laura
          </span>
          <span
            className="text-xs tracking-[0.2em] text-gold uppercase"
            style={{ fontFamily: 'var(--font-josefin)' }}
          >
            Atelier
          </span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-xs tracking-widest uppercase text-ink-2 hover:text-rose transition-colors"
              style={{ fontFamily: 'var(--font-josefin)' }}
            >
              {l.label}
            </a>
          ))}
          <a
            href={waLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs tracking-widest uppercase px-5 py-2 rounded-full bg-rose text-white hover:bg-rose-deep transition-colors"
            style={{ fontFamily: 'var(--font-josefin)' }}
          >
            Encomendar
          </a>
        </nav>

        {/* Mobile burger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden flex flex-col gap-1.5 p-1"
          aria-label="Menu"
        >
          <span
            className={`block w-5 h-0.5 bg-ink-2 transition-all ${menuOpen ? 'rotate-45 translate-y-2' : ''}`}
          />
          <span
            className={`block w-5 h-0.5 bg-ink-2 transition-all ${menuOpen ? 'opacity-0' : ''}`}
          />
          <span
            className={`block w-5 h-0.5 bg-ink-2 transition-all ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`}
          />
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-paper/98 border-t border-rose-soft/30 px-6 py-6 flex flex-col gap-4">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setMenuOpen(false)}
              className="text-xs tracking-widest uppercase text-ink-2 hover:text-rose transition-colors py-2 border-b border-rose-soft/20"
              style={{ fontFamily: 'var(--font-josefin)' }}
            >
              {l.label}
            </a>
          ))}
          <a
            href={waLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-center text-xs tracking-widest uppercase px-5 py-3 rounded-full bg-rose text-white hover:bg-rose-deep transition-colors mt-2"
            style={{ fontFamily: 'var(--font-josefin)' }}
          >
            Encomendar pelo WhatsApp
          </a>
        </div>
      )}
    </header>
  )
}
