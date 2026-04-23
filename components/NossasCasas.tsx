'use client'

import { siteConfig } from '@/lib/data'
import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'

const carouselImages = [
  '/images/loja-sjc.jpg',
  '/images/eventos/mesa-casamento.jpg',
  '/images/eventos/evento-2.jpg',
  '/images/eventos/evento-3.jpg',
  '/images/eventos/evento-4.jpg',
  '/images/loja-jacarei.jpg',
]

export default function NossasCasas() {
  const [current, setCurrent] = useState(0)
  const touchStartX = useRef(0)
  const touchEndX = useRef(0)

  const prev = () => setCurrent((c) => (c === 0 ? carouselImages.length - 1 : c - 1))
  const next = () => setCurrent((c) => (c === carouselImages.length - 1 ? 0 : c + 1))

  useEffect(() => {
    const id = setInterval(() => {
      setCurrent((c) => (c === carouselImages.length - 1 ? 0 : c + 1))
    }, 5000)
    return () => clearInterval(id)
  }, [])

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX
  }
  const handleTouchEnd = (e: React.TouchEvent) => {
    touchEndX.current = e.changedTouches[0].clientX
    const diff = touchStartX.current - touchEndX.current
    if (Math.abs(diff) > 40) {
      if (diff > 0) next()
      else prev()
    }
  }

  return (
    <section id="nossas-casas" className="py-24 px-6 relative overflow-hidden bg-white">
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
            <p>Um convite para desfrutar com calma, seja em encontros, celebrações ou momentos só seus.</p>
            <p className="font-medium text-sm italic text-rose-dark">Consulte horários de funcionamento</p>
          </div>
        </div>

        {/* Carousel */}
        <div className="reveal mb-14">
          <div
            className="relative group rounded-[2rem] overflow-hidden shadow-xl shadow-rose/10 bg-rose-pale"
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
          >
            <div
              className="flex transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]"
              style={{ transform: `translateX(-${current * 100}%)` }}
            >
              {carouselImages.map((src, i) => (
                <div key={i} className="relative w-full flex-none aspect-[16/9] md:aspect-[21/9]">
                  <Image
                    src={src}
                    alt={`Nossa casa ${i + 1}`}
                    fill
                    className="object-cover"
                    sizes="100vw"
                    priority={i === 0}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
                </div>
              ))}
            </div>

            {/* Arrows */}
            <button
              onClick={prev}
              aria-label="Anterior"
              className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/80 backdrop-blur-sm text-rose-dark flex items-center justify-center shadow-md hover:bg-white transition-all opacity-0 group-hover:opacity-100"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={next}
              aria-label="Próximo"
              className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/80 backdrop-blur-sm text-rose-dark flex items-center justify-center shadow-md hover:bg-white transition-all opacity-0 group-hover:opacity-100"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </button>

            {/* Dots */}
            <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex gap-2">
              {carouselImages.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  aria-label={`Slide ${i + 1}`}
                  className={`h-1.5 rounded-full transition-all duration-500 ${
                    i === current ? 'bg-white w-8' : 'bg-white/50 w-1.5 hover:bg-white/80'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Location cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {siteConfig.addresses.map((addr, i) => (
            <div
              key={i}
              className="reveal card-lift rounded-[1.75rem] overflow-hidden border border-rose/10 hover:border-rose/25 transition-all duration-500 bg-base"
              style={{ transitionDelay: `${i * 0.1}s` }}
            >
              <div className="relative h-52 sm:h-60 w-full overflow-hidden bg-white">
                <iframe
                  src={addr.embedUrl}
                  className="absolute inset-0 w-full h-full border-0"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title={`Mapa ${addr.city}`}
                />
              </div>

              <div className="p-7 sm:p-8">
                <div className="flex items-start gap-4 mb-5">
                  <div className="w-10 h-10 rounded-full bg-rose-pale/50 flex items-center justify-center shrink-0 mt-0.5">
                    <svg className="w-4.5 h-4.5 text-rose-dark" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-serif text-2xl text-primary mb-1">{addr.city}</h3>
                    <p className="text-ink-2 text-sm font-sans">{addr.street}</p>
                    <p className="text-ink-4 text-xs font-sans mt-0.5">{addr.neighborhood}</p>
                  </div>
                </div>

                <a
                  href={addr.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-[0.65rem] tracking-[0.15em] uppercase text-rose-dark font-sans font-medium hover:gap-3 transition-all duration-400"
                >
                  Como chegar
                  <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
