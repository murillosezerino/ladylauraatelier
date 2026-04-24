'use client'

import { siteConfig } from '@/lib/data'
import Image from 'next/image'
import { useEffect, useState } from 'react'

const igUrl = 'https://www.instagram.com/ladylauraatelier/'

const imagePool = [
  '/images/confeitaria/tartlets-piped.webp',
  '/images/confeitaria/profiteroles-pistache.webp',
  '/images/confeitaria/eclairs-rosa.webp',
  '/images/confeitaria/milefeuille.webp',
  '/images/confeitaria/pavlovas-frutas.webp',
  '/images/confeitaria/tarte-chocolate-frutas.webp',
  '/images/confeitaria/mesa-doces-evento.webp',
  '/images/doces/brigadeiros-gourmet.webp',
  '/images/doces/brigadeiros-pistache.webp',
  '/images/doces/brigadeiros-variados.webp',
  '/images/doces/trufas-chocolate.webp',
  '/images/doces/doces-2.webp',
  '/images/doces/doces-4.webp',
  '/images/doces/doces-5.webp',
  '/images/doces/doces-7.webp',
  '/images/doces/doces-8.webp',
  '/images/doces/doces-12.webp',
  '/images/doces/doces-13.webp',
  '/images/doces/doces-17.webp',
  '/images/doces/doces-22.webp',
  '/images/doces/doces-24.webp',
  '/images/macarons/macarons-coloridos.webp',
  '/images/macarons/macarons-rosa-evento.webp',
  '/images/macarons/macaron-caramelo.webp',
  '/images/macarons/macarons-caixa-rosa.webp',
  '/images/macarons/galeria-1.webp',
  '/images/macarons/galeria-2.webp',
  '/images/macarons/galeria-3.webp',
  '/images/macarons/galeria-4.webp',
  '/images/macarons/galeria-5.webp',
  '/images/macarons/galeria-6.webp',
  '/images/bolos/praline.webp',
  '/images/bolos/red-velvet.webp',
  '/images/bolos/matilda.webp',
  '/images/bolos/pistache-framboesa.webp',
  '/images/bolos/dulce-nut.webp',
  '/images/bolos/strawberry-fields.webp',
  '/images/bolos/cha-revelacao.webp',
  '/images/bolos/buttercream-1.webp',
  '/images/bolos/buttercream-2.webp',
  '/images/bolos/buttercream-3.webp',
  '/images/bolos/buttercream-4.webp',
  '/images/bolos/buttercream-5.webp',
  '/images/bolos/buttercream-6.webp',
  '/images/flores/arranjo-cora.webp',
  '/images/flores/arranjo-cherie.webp',
  '/images/flores/arranjo-diamond.webp',
  '/images/flores/arranjo-amor.webp',
  '/images/flores/rosas-grande.webp',
  '/images/flores/rosas-medio.webp',
  '/images/flores/rosas-personalizado.webp',
  '/images/flores/secas-grande.webp',
  '/images/flores/secas-medio.webp',
  '/images/eventos/mesa-casamento.webp',
  '/images/eventos/mesa-doces-completa.webp',
  '/images/eventos/casal-comendo.webp',
  '/images/chef/thay-montando-prato.webp',
  '/images/chef/thay-le-cordon-bleu.webp',
  '/images/chef/thay-pratos.webp',
]

const spanPattern = [
  'col-span-1 row-span-1',
  'col-span-1 row-span-2',
  'col-span-1 row-span-1',
  'col-span-1 row-span-1',
  'col-span-1 row-span-2',
  'col-span-1 row-span-1',
  'col-span-1 row-span-1',
  'col-span-1 row-span-1',
  'col-span-1 row-span-1',
  'col-span-1 row-span-2',
  'col-span-1 row-span-1',
  'col-span-1 row-span-1',
  'col-span-1 row-span-1',
  'col-span-1 row-span-2',
  'col-span-1 row-span-1',
  'col-span-1 row-span-1',
]

const TILES = spanPattern.length

function uniqueSample(pool: string[], size: number, exclude: string[] = []): string[] {
  const filtered = pool.filter((src) => !exclude.includes(src))
  const copy = [...filtered]
  for (let i = copy.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[copy[i], copy[j]] = [copy[j], copy[i]]
  }
  return copy.slice(0, size)
}

export default function InstagramFeed() {
  const [tiles, setTiles] = useState<string[]>(() => imagePool.slice(0, TILES))
  const [refreshing, setRefreshing] = useState<Set<number>>(new Set())

  useEffect(() => {
    setTiles(uniqueSample(imagePool, TILES))
  }, [])

  useEffect(() => {
    const id = setInterval(() => {
      setTiles((prev) => {
        const slots = new Set<number>()
        while (slots.size < 3) {
          slots.add(Math.floor(Math.random() * TILES))
        }
        const replacements = uniqueSample(imagePool, slots.size, prev)
        const next = [...prev]
        let k = 0
        slots.forEach((slot) => {
          next[slot] = replacements[k] ?? next[slot]
          k += 1
        })
        setRefreshing(new Set(slots))
        window.setTimeout(() => setRefreshing(new Set()), 900)
        return next
      })
    }, 4200)
    return () => clearInterval(id)
  }, [])

  return (
    <section className="py-20 bg-base relative overflow-hidden">
      <div className="absolute top-20 right-0 w-[500px] h-[500px] bg-rose/8 rounded-full blur-[150px] pointer-events-none blob-pulse" />

      <div className="max-w-[100rem] mx-auto px-4 relative">
        <div className="text-center mb-14 reveal">
          <p className="text-[0.6rem] tracking-[0.5em] uppercase text-rose-dark font-sans font-medium mb-5">
            Suivez-nous sur Instagram
          </p>
          <h2 className="font-serif text-3xl md:text-5xl text-primary mb-4">
            @ladylauraatelier
          </h2>
          <p className="text-ink-3 text-sm font-sans max-w-md mx-auto">
            Acompanhe nosso dia a dia, novas criações e bastidores da confeitaria.
          </p>
        </div>

        <div className="reveal-scale grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-8 gap-3 auto-rows-[160px] sm:auto-rows-[180px] md:auto-rows-[190px] lg:auto-rows-[200px]">
          {tiles.map((src, i) => (
            <a
              key={i}
              href={igUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={`relative rounded-2xl overflow-hidden group img-hover ${spanPattern[i]}`}
            >
              <Image
                key={src}
                src={src}
                alt={`@ladylauraatelier ${i + 1}`}
                fill
                className={`object-cover transition-all duration-[900ms] ease-out ${
                  refreshing.has(i) ? 'opacity-0 scale-[1.04]' : 'opacity-100 scale-100'
                }`}
                sizes="(max-width: 768px) 50vw, (max-width: 1024px) 25vw, 12.5vw"
              />
              <div className="absolute inset-0 bg-rose-deep/0 group-hover:bg-rose-deep/50 transition-all duration-500 flex items-center justify-center backdrop-blur-0 group-hover:backdrop-blur-[2px]">
                <div className="opacity-0 group-hover:opacity-100 scale-75 group-hover:scale-100 transition-all duration-400 text-center">
                  <svg className="w-6 h-6 text-white mx-auto mb-1" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069z" />
                    <circle cx="12" cy="12" r="3.5" />
                  </svg>
                </div>
              </div>
            </a>
          ))}
        </div>

        <div className="text-center mt-12 reveal">
          <a
            href={siteConfig.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-shine inline-flex items-center gap-3 bg-rose-dark text-white rounded-full px-10 py-4 font-sans text-[0.7rem] tracking-[0.15em] uppercase font-medium hover:bg-rose-deep transition-all duration-300 shadow-md shadow-rose/20"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069z" />
              <circle cx="12" cy="12" r="3.5" />
            </svg>
            Instagram
          </a>
        </div>
      </div>
    </section>
  )
}
