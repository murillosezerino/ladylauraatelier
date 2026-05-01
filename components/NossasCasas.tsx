'use client'

import { siteConfig } from '@/lib/data'
import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'

function CasaCard({
  city,
  street,
  neighborhood,
  gallery,
  mapsUrl,
  embedUrl,
  delay = 0,
}: {
  city: string
  street: string
  neighborhood: string
  gallery: string[]
  mapsUrl: string
  embedUrl: string
  delay?: number
}) {
  const [active, setActive] = useState(0)
  const touchStartX = useRef(0)
  const touchEndX = useRef(0)

  useEffect(() => {
    const id = setInterval(() => {
      setActive((c) => (c + 1) % gallery.length)
    }, 6000)
    return () => clearInterval(id)
  }, [gallery.length])

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX
  }
  const handleTouchEnd = (e: React.TouchEvent) => {
    touchEndX.current = e.changedTouches[0].clientX
    const diff = touchStartX.current - touchEndX.current
    if (Math.abs(diff) > 40) {
      if (diff > 0) setActive((c) => (c + 1) % gallery.length)
      else setActive((c) => (c === 0 ? gallery.length - 1 : c - 1))
    }
  }

  return (
    <div
      className="reveal card-lift relative bg-white border border-rose/10 rounded-[2rem] overflow-hidden shadow-sm shadow-rose/8 hover:shadow-2xl hover:shadow-rose/15 transition-all duration-500 group"
      style={{ transitionDelay: `${delay}s` }}
    >
      {/* Image carousel */}
      <div
        className="relative aspect-[4/3] overflow-hidden bg-rose-pale"
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        <div
          className="flex h-full transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]"
          style={{ transform: `translateX(-${active * 100}%)` }}
        >
          {gallery.map((src, i) => (
            <div key={i} className="relative w-full flex-none h-full">
              <Image
                src={src}
                alt={`${city} - foto ${i + 1}`}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
            </div>
          ))}
        </div>

        {/* City badge — top */}
        <div className="absolute top-5 left-5 backdrop-blur-md bg-white/85 border border-white/40 rounded-full px-5 py-2 shadow-lg shadow-black/10">
          <p className="text-[0.55rem] tracking-[0.3em] uppercase text-rose-dark/70 font-sans font-medium">Maison</p>
          <p className="font-serif text-base text-primary leading-tight">{city}</p>
        </div>

        {/* Dot indicators */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-1.5">
          {gallery.map((_, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              aria-label={`Foto ${i + 1}`}
              className={`h-1.5 rounded-full transition-all duration-500 ${
                i === active ? 'bg-white w-6' : 'bg-white/50 w-1.5 hover:bg-white/80'
              }`}
            />
          ))}
        </div>
      </div>

      {/* Address strip */}
      <div className="px-6 py-5 border-b border-rose/8 bg-gradient-to-br from-rose-pale/30 to-transparent">
        <div className="flex items-start gap-3">
          <div className="w-9 h-9 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center shrink-0 shadow-sm shadow-rose/10">
            <svg className="w-4 h-4 text-rose-dark" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
            </svg>
          </div>
          <div className="min-w-0 flex-1">
            <p className="text-[0.55rem] tracking-[0.25em] uppercase text-rose-dark font-sans font-semibold mb-0.5">Endereço</p>
            <p className="text-primary text-sm font-sans font-medium leading-tight">{street}</p>
            <p className="text-ink-3 text-xs font-sans mt-0.5">{neighborhood}</p>
          </div>
        </div>
      </div>

      {/* Map */}
      <div className="relative aspect-[16/10] w-full overflow-hidden bg-white">
        <iframe
          src={embedUrl}
          className="absolute inset-0 w-full h-full border-0 grayscale-[0.15]"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title={`Mapa ${city}`}
        />
      </div>

      {/* CTA */}
      <a
        href={mapsUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="block px-6 py-4 bg-rose-dark text-white text-center text-[0.65rem] tracking-[0.18em] uppercase font-sans font-medium hover:bg-rose-deep transition-colors duration-300"
      >
        <span className="inline-flex items-center gap-2">
          Como chegar
          <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </span>
      </a>
    </div>
  )
}

export default function NossasCasas() {
  return (
    <section id="nossas-casas" className="py-24 px-6 relative overflow-hidden bg-white">
      {/* Decorative blobs */}
      <div className="absolute -top-40 -left-32 w-[400px] h-[400px] bg-rose-pale/40 rounded-full blur-[120px] pointer-events-none blob-pulse" />
      <div className="absolute -bottom-40 -right-32 w-[400px] h-[400px] bg-rose/15 rounded-full blur-[120px] pointer-events-none blob-pulse" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-14 reveal">
          <p className="text-[0.6rem] tracking-[0.5em] uppercase font-sans font-medium mb-4 text-rose-dark">
            Nos Maisons
          </p>
          <h2 className="font-serif text-3xl md:text-5xl mb-6 text-primary">
            Nossas Casas
          </h2>
          <div className="ornament mb-6">
            <svg className="w-3 h-3 text-rose-dark/50" viewBox="0 0 12 12" fill="currentColor">
              <path d="M6 0L7.5 4.5L12 6L7.5 7.5L6 12L4.5 7.5L0 6L4.5 4.5Z" />
            </svg>
          </div>
          <div className="max-w-2xl mx-auto space-y-4 font-sans text-[0.95rem] leading-relaxed text-ink-2">
            <p>Nossos bistrôs são extensões daquilo que acreditamos: boa comida, tempo de qualidade e experiências que ficam na memória.</p>
            <p>Em cada unidade, você encontra um ambiente acolhedor, com um menu cuidadosamente elaborado que reúne diversas opções para o seu brunch, doces autorais e carta de vinhos especiais.</p>
            <p className="font-medium text-sm italic text-rose-dark">Consulte horários de funcionamento</p>
          </div>
        </div>

        {/* Casa cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
          {siteConfig.addresses.map((addr, i) => (
            <CasaCard
              key={addr.city}
              city={addr.city}
              street={addr.street}
              neighborhood={addr.neighborhood}
              gallery={addr.gallery}
              mapsUrl={addr.mapsUrl}
              embedUrl={addr.embedUrl}
              delay={i * 0.1}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
