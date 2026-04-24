'use client'

import { hero, siteConfig } from '@/lib/data'
import Image from 'next/image'
import { useEffect, useState } from 'react'

export default function Hero() {
  const waLink = `https://wa.me/${siteConfig.whatsapp}?text=Ol%C3%A1!+Gostaria+de+fazer+uma+encomenda.`
  const [scrollY, setScrollY] = useState(0)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    setIsMobile(window.innerWidth < 768)
  }, [])

  useEffect(() => {
    if (isMobile) return
    let ticking = false
    const onScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          setScrollY(window.scrollY)
          ticking = false
        })
        ticking = true
      }
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [isMobile])

  const parallaxOffset = isMobile ? 0 : scrollY * 0.3
  const textOpacity = isMobile ? 1 : Math.max(0, 1 - scrollY / 700)
  const textOffset = isMobile ? 0 : scrollY * 0.12

  return (
    <section data-nav-dark className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Parallax background */}
      <div className="absolute inset-0 overflow-hidden will-change-transform" style={{ transform: `translateY(${parallaxOffset}px)` }}>
        <div className={`absolute inset-0 ${isMobile ? '' : 'bg-drift'}`}>
          <Image
            src="/images/eventos/mesa-doces-completa.jpg"
            alt="Mesa de doces Lady Laura Atelier"
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
        </div>
      </div>

      {/* Cinematic overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/70" />
      <div className="absolute inset-0 bg-gradient-to-r from-rose-deep/20 via-transparent to-rose-deep/10" />

      {/* Vignette effect */}
      <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse at center, transparent 40%, rgba(0,0,0,0.4) 100%)' }} />

      {/* Content */}
      <div
        className="relative z-10 max-w-4xl mx-auto px-6 text-center"
        style={{ opacity: textOpacity, transform: `translateY(${textOffset}px)` }}
      >
        {/* Logo */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/logo-ladylaura-white.svg"
          alt="Lady Laura Atelier"
          className="h-20 sm:h-32 md:h-36 w-auto mx-auto mb-6 sm:mb-10 opacity-0 animate-[fadeUp_1s_0.2s_ease_forwards]"
        />

        {/* Tagline */}
        <p
          className="text-[0.7rem] sm:text-[0.8rem] tracking-[0.35em] sm:tracking-[0.5em] uppercase text-white font-sans font-medium mb-6 sm:mb-10 opacity-0 animate-[fadeUp_1s_0.4s_ease_forwards]"
          style={{ textShadow: '0 1px 12px rgba(0,0,0,0.55), 0 0 24px rgba(0,0,0,0.35)' }}
        >
          Pâtisserie &amp; Bistrô &bull; Flores &amp; Presentes &bull; Eventos
        </p>

        {/* Divider */}
        <div className="flex items-center justify-center gap-5 mb-6 sm:mb-8 opacity-0 animate-[fadeUp_0.8s_0.6s_ease_forwards]">
          <div className="w-20 h-px bg-gradient-to-r from-transparent to-white/30" />
          <div className="w-1.5 h-1.5 rounded-full bg-rose-dark/60" />
          <div className="w-20 h-px bg-gradient-to-l from-transparent to-white/30" />
        </div>

        {/* Subtitle */}
        {hero.subheadline && (
          <p className="text-sm sm:text-lg text-white/70 max-w-xl mx-auto mb-10 sm:mb-16 font-sans font-light leading-relaxed opacity-0 animate-[fadeUp_0.8s_0.8s_ease_forwards]">
            {hero.subheadline}
          </p>
        )}

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 opacity-0 animate-[fadeUp_0.8s_1s_ease_forwards]">
          <a
            href="#universos"
            className="btn-shine inline-flex items-center px-10 sm:px-14 py-3.5 sm:py-4 rounded-full bg-white text-primary text-[0.7rem] font-semibold tracking-[0.2em] uppercase hover:bg-rose-pale transition-all hover:scale-[1.03] font-sans shadow-2xl shadow-black/20"
          >
            {hero.ctaLabel}
          </a>
          <a
            href={waLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 px-10 sm:px-14 py-3.5 sm:py-4 rounded-full border border-white/25 text-white text-[0.7rem] font-medium tracking-[0.2em] uppercase hover:bg-white/10 hover:border-white/40 transition-all font-sans backdrop-blur-sm"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            {hero.ctaSecondary}
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-6 sm:bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2.5 opacity-0 animate-[fadeIn_1s_2.5s_ease_forwards]">
        <span className="text-[0.5rem] tracking-[0.5em] uppercase font-sans text-white/30">Scroll</span>
        <div className="w-5 h-8 rounded-full border border-white/20 flex items-start justify-center p-1.5">
          <div className="w-1 h-2 rounded-full bg-white/40 animate-[scrollDot_2s_ease-in-out_infinite]" />
        </div>
      </div>
    </section>
  )
}
