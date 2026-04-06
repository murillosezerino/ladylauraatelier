'use client'

import { siteConfig } from '@/lib/data'
import Image from 'next/image'
import { useState } from 'react'

export default function CTASection() {
  const waLink = `https://wa.me/${siteConfig.whatsapp}?text=Ol%C3%A1!+Vim+pelo+site+e+gostaria+de+fazer+uma+encomenda.`
  const [hoveredCard, setHoveredCard] = useState<number | null>(null)

  return (
    <>
      {/* ── CTA Section ── */}
      <section id="contato" data-nav-dark className="relative py-40 px-6 overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 bg-drift">
            <Image
              src="/images/eventos/mesa-doces-1.webp"
              alt="Mesa de doces Lady Laura Atelier"
              fill
              className="object-cover"
              sizes="100vw"
            />
          </div>
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-rose-deep/75 via-rose-deep/70 to-rose-deep/85" />
        <div className="absolute inset-0 bg-black/15" />

        {/* Decorative corners */}
        <div className="absolute top-10 left-10 w-20 h-20 border-t border-l border-white/10" />
        <div className="absolute bottom-10 right-10 w-20 h-20 border-b border-r border-white/10" />

        <div className="relative z-10 max-w-3xl mx-auto text-center">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/logo-ladylaura-white.svg"
            alt="Lady Laura Atelier"
            className="reveal h-14 sm:h-16 w-auto mx-auto mb-8 opacity-70"
          />
          <h2 className="reveal font-serif text-4xl sm:text-5xl md:text-6xl text-white mb-8 leading-tight">
            Pronta para adoçar e florir seu evento?
          </h2>

          <p className="reveal text-white/60 font-sans text-base sm:text-lg mb-2 italic">
            *Fale conosco via WhatsApp
          </p>

          <div className="reveal flex items-center justify-center gap-6 mb-10">
            <div className="w-12 h-px bg-white/20" />
            <div className="w-1.5 h-1.5 rounded-full bg-white/20" />
            <div className="w-12 h-px bg-white/20" />
          </div>

          {/* CTA */}
          <div className="reveal">
            <a
              href={waLink}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-shine inline-flex items-center gap-3 px-14 py-5 rounded-full bg-white text-rose-deep font-semibold text-[0.7rem] tracking-[0.2em] uppercase hover:bg-rose-pale transition-all hover:scale-[1.04] font-sans shadow-2xl shadow-black/15"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Falar no WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* ── Locations Section ── */}
      <section id="nossas-casas" className="py-24 px-6 bg-white relative overflow-hidden">
        {/* Background images that appear on card hover */}
        {siteConfig.addresses.map((addr, i) => (
          <div
            key={i}
            className="absolute inset-0 transition-opacity duration-700 pointer-events-none"
            style={{ opacity: hoveredCard === i ? 1 : 0 }}
          >
            <Image
              src={addr.photo}
              alt={addr.city}
              fill
              className="object-cover"
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-white/82" />
          </div>
        ))}

        <div className="absolute -top-40 -right-40 w-[500px] h-[500px] bg-rose-pale/15 rounded-full blur-[120px] pointer-events-none blob-pulse" />

        <div className="max-w-5xl mx-auto relative">
          {/* Header */}
          <div className="text-center mb-14 reveal">
            <p className="text-[0.6rem] tracking-[0.5em] uppercase text-rose-dark font-sans font-medium mb-4">
              Nos Maisons
            </p>
            <h2 className="font-serif text-3xl md:text-5xl text-primary mb-6">
              Nossas Casas
            </h2>
            <div className="ornament mb-6">
              <svg className="w-3 h-3 text-rose-dark/50" viewBox="0 0 12 12" fill="currentColor">
                <path d="M6 0L7.5 4.5L12 6L7.5 7.5L6 12L4.5 7.5L0 6L4.5 4.5Z" />
              </svg>
            </div>
            <div className="max-w-2xl mx-auto space-y-4 text-ink-2 font-sans text-[0.95rem] leading-relaxed">
              <p>Nossos bistrôs são extensões daquilo que acreditamos: boa comida, tempo de qualidade e experiências que ficam na memória.</p>
              <p>Em cada unidade, você encontra um ambiente acolhedor, com um menu cuidadosamente elaborado que reúne diversas opções para o seu brunch, doces autorais e carta de vinhos especiais.</p>
              <p>Um convite para desfrutar com calma, seja em encontros, celebrações ou momentos só seus.</p>
              <p className="text-rose-dark font-medium text-sm italic">Consulte horários de funcionamento</p>
            </div>
          </div>

          {/* Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {siteConfig.addresses.map((addr, i) => (
              <div
                key={i}
                className="reveal card-lift bg-base rounded-[1.75rem] overflow-hidden border border-rose/10 hover:border-rose/25 transition-all duration-500"
                style={{ transitionDelay: `${i * 0.1}s` }}
                onMouseEnter={() => setHoveredCard(i)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                {/* Map */}
                <div className="relative h-52 sm:h-60 w-full overflow-hidden">
                  <iframe
                    src={addr.embedUrl}
                    className="absolute inset-0 w-full h-full border-0"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title={`Mapa ${addr.city}`}
                  />
                </div>

                {/* Info */}
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
    </>
  )
}
