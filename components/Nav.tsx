'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { siteConfig } from '@/lib/data'

const links: { label: string; href: string; sectionId?: string }[] = [
  { label: 'Confeitaria', href: '/catalogo/bolos' },
  { label: 'Flores & Presentes', href: '/catalogo/flores' },
  { label: 'Buquês de Noiva', href: '/buques-noiva' },
  { label: 'Eventos & Casamentos', href: '/catalogo/eventos' },
  { label: 'Nossas Casas', href: '/nossas-casas', sectionId: 'nossas-casas' },
  { label: 'Sobre Nós', href: '/sobre', sectionId: 'sobre' },
  { label: 'Contato', href: '/contato', sectionId: 'contato' },
]

function scrollToSection(id: string) {
  const el = document.getElementById(id)
  if (el) {
    el.scrollIntoView({ behavior: 'smooth' })
    window.history.replaceState(null, '', '/')
  }
}

export default function Nav() {
  const pathname = usePathname()
  const isHome = pathname === '/'
  const [scrolled, setScrolled] = useState(false)
  const [isDark, setIsDark] = useState(true)
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrollProgress, setScrollProgress] = useState(0)

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 60)
      const docHeight = document.documentElement.scrollHeight - window.innerHeight
      setScrollProgress(docHeight > 0 ? (window.scrollY / docHeight) * 100 : 0)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Detect if navbar is over a dark section
  useEffect(() => {
    const darkSections = document.querySelectorAll('[data-nav-dark]')
    if (!darkSections.length) return

    const observer = new IntersectionObserver(
      () => {
        // Check which section is behind the navbar (top 80px of viewport)
        const navBottom = 80
        let overDark = false

        darkSections.forEach((section) => {
          const rect = section.getBoundingClientRect()
          if (rect.top < navBottom && rect.bottom > 0) {
            overDark = true
          }
        })

        setIsDark(overDark)
      },
      { threshold: 0, rootMargin: '-0px 0px -90% 0px' }
    )

    darkSections.forEach((section) => observer.observe(section))

    // Also check on scroll for more precise detection
    const onScroll = () => {
      const navBottom = 80
      let overDark = false

      darkSections.forEach((section) => {
        const rect = section.getBoundingClientRect()
        if (rect.top < navBottom && rect.bottom > 0) {
          overDark = true
        }
      })

      setIsDark(overDark)
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    return () => {
      observer.disconnect()
      window.removeEventListener('scroll', onScroll)
    }
  }, [])

  const waLink = `https://wa.me/${siteConfig.whatsapp}?text=Ol%C3%A1!+Vim+pelo+site+e+gostaria+de+fazer+uma+encomenda.`

  // Color classes based on background
  const textCls = isDark ? 'text-white/75 hover:text-white' : 'text-ink-2 hover:text-rose-dark'
  const burgerBg = isDark ? 'bg-white' : 'bg-rose-dark'

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${scrolled ? 'backdrop-blur-md bg-black/5' : ''}`}>
      {/* Scroll progress bar */}
      <div className="absolute bottom-0 left-0 h-[2px] bg-gradient-to-r from-rose-dark to-rose transition-all duration-150 ease-out" style={{ width: `${scrollProgress}%` }} />

      <div className="max-w-[90rem] w-full mx-auto px-4 lg:px-8 h-20 flex items-center justify-between">
        {/* Logo — on home: appears on scroll; on subpages: always visible */}
        <Link href="/" className={`block shrink-0 transition-all duration-500 ${
          isHome && !scrolled ? 'opacity-0 -translate-y-3 pointer-events-none' : 'opacity-100 translate-y-0'
        }`}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={isDark ? '/images/logo-ladylaura-white.svg' : '/images/logo-ladylaura-rose.svg'}
            alt="Lady Laura Atelier"
            className="h-14 w-auto"
          />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-7">
          {links.map((l) => (
            l.sectionId && isHome ? (
              <button
                key={l.href}
                onClick={() => scrollToSection(l.sectionId!)}
                className={`text-[0.62rem] tracking-[0.14em] uppercase font-sans font-medium transition-all duration-300 link-underline whitespace-nowrap ${textCls}`}
              >
                {l.label}
              </button>
            ) : (
              <Link
                key={l.href}
                href={l.sectionId ? `/#${l.sectionId}` : l.href}
                className={`text-[0.62rem] tracking-[0.14em] uppercase font-sans font-medium transition-all duration-300 link-underline whitespace-nowrap ${textCls}`}
              >
                {l.label}
              </Link>
            )
          ))}
          <a
            href={waLink}
            target="_blank"
            rel="noopener noreferrer"
            className={`btn-shine text-[0.68rem] tracking-[0.15em] uppercase px-7 py-2.5 rounded-full font-sans font-medium transition-all duration-400 ${
              isDark
                ? 'border border-white/30 text-white hover:bg-white/10 hover:border-white/50'
                : 'bg-rose-dark text-white hover:bg-rose-deep shadow-sm'
            }`}
          >
            WhatsApp
          </a>
        </nav>

        {/* Mobile burger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="lg:hidden flex flex-col gap-[5px] p-2 relative w-8 h-8 items-center justify-center"
          aria-label="Menu"
        >
          {[0, 1, 2].map((i) => (
            <span
              key={i}
              className={`block h-[1.5px] rounded-full transition-all duration-400 origin-center ${burgerBg} ${
                i === 0 ? `w-5 ${menuOpen ? 'rotate-45 translate-y-[6.5px]' : ''}` :
                i === 1 ? `w-3.5 ${menuOpen ? 'opacity-0 scale-x-0' : ''}` :
                `w-5 ${menuOpen ? '-rotate-45 -translate-y-[6.5px]' : ''}`
              }`}
            />
          ))}
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
          menuOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="bg-base backdrop-blur-xl px-6 py-8 flex flex-col gap-1 border-t border-rose/15">
          {links.map((l, i) => {
            const style = { transitionDelay: `${i * 50}ms`, opacity: menuOpen ? 1 : 0, transform: menuOpen ? 'translateX(0)' : 'translateX(-10px)' }
            if (l.sectionId && isHome) {
              return (
                <button
                  key={l.href}
                  onClick={() => { scrollToSection(l.sectionId!); setMenuOpen(false) }}
                  className="text-left text-[0.7rem] tracking-[0.18em] uppercase text-ink-2 hover:text-rose-dark transition-all py-3.5 border-b border-rose/8 font-sans font-medium"
                  style={style}
                >
                  {l.label}
                </button>
              )
            }
            return (
              <Link
                key={l.href}
                href={l.sectionId ? `/#${l.sectionId}` : l.href}
                onClick={() => setMenuOpen(false)}
                className="text-[0.7rem] tracking-[0.18em] uppercase text-ink-2 hover:text-rose-dark transition-all py-3.5 border-b border-rose/8 font-sans font-medium"
                style={style}
              >
                {l.label}
              </Link>
            )
          })}
          <a
            href={waLink}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-shine text-center text-[0.7rem] tracking-[0.15em] uppercase px-5 py-3.5 rounded-full bg-rose-dark text-white hover:bg-rose-deep transition-colors mt-4 font-sans font-medium"
          >
            Falar no WhatsApp
          </a>
        </div>
      </div>
    </header>
  )
}
