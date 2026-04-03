'use client'

import { useState } from 'react'
import Image from 'next/image'
import { events, siteConfig } from '@/lib/data'

export default function Events() {
  const [active, setActive] = useState(0)
  const format = events.formats[active]
  const waLink = `https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(`Olá! Gostaria de saber mais sobre o ${format.name}.`)}`

  return (
    <section data-nav-dark className="relative py-36 px-6 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-drift">
          <Image
            src={events.image}
            alt="Eventos Lady Laura Atelier"
            fill
            className="object-cover"
            sizes="100vw"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/60 to-black/80" />
        <div className="absolute inset-0 bg-rose-deep/10" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="text-center mb-16 reveal">
          <p className="text-[0.6rem] tracking-[0.5em] uppercase text-white/40 font-sans font-medium mb-5">
            Celebrations
          </p>
          <h2 className="font-serif text-3xl md:text-5xl lg:text-6xl text-white mb-8">
            {events.title}
          </h2>
          <div className="flex items-center justify-center gap-6 mb-6">
            <div className="w-16 h-px bg-white/20" />
            <div className="w-1.5 h-1.5 rounded-full bg-white/20" />
            <div className="w-16 h-px bg-white/20" />
          </div>
          <p className="text-white/60 text-lg font-sans font-light max-w-xl mx-auto">
            {events.text}
          </p>
        </div>

        {/* Tab selector */}
        <div className="reveal flex flex-wrap justify-center gap-3 mb-12">
          {events.formats.map((f, i) => (
            <button
              key={f.name}
              onClick={() => setActive(i)}
              className={`px-6 py-3 rounded-full text-[0.68rem] tracking-[0.15em] uppercase font-sans font-medium transition-all duration-400 ${
                active === i
                  ? 'bg-white text-rose-deep shadow-lg shadow-black/20 scale-105'
                  : 'bg-white/8 text-white/60 border border-white/10 hover:bg-white/15 hover:text-white'
              }`}
            >
              {f.name}
            </button>
          ))}
        </div>

        {/* Active event detail card */}
        <div className="reveal max-w-2xl mx-auto bg-white/8 backdrop-blur-xl rounded-3xl border border-white/10 overflow-hidden transition-all duration-500">
          <div className="p-10 lg:p-12 text-center">
            <h3 className="font-serif text-3xl lg:text-4xl text-white mb-3">{format.name}</h3>
            <p className="text-[0.6rem] tracking-[0.3em] uppercase text-white/40 font-sans mb-6">{format.capacity}</p>
            <p className="text-white/65 text-base font-sans leading-relaxed mb-10 max-w-md mx-auto">
              {format.description}
            </p>

            <a
              href={waLink}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-shine inline-flex items-center gap-2.5 px-12 py-4 rounded-full bg-white text-rose-deep text-[0.7rem] font-semibold tracking-[0.15em] uppercase hover:bg-rose-pale transition-all hover:scale-[1.03] font-sans shadow-lg shadow-black/10"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Solicitar orçamento
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
