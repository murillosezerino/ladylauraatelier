import Link from 'next/link'
import Image from 'next/image'
import { catalogs } from '@/lib/data'

const catalogImages: Record<string, string> = {
  cake: '/images/confeitaria/tartlets-piped.webp',
  sweet: '/images/eventos/doces-chocolate.webp',
  flower: '/images/flores/copo-de-leite.webp',
  event: '/images/eventos/casal-comendo.webp',
}

export default function Catalogs() {
  return (
    <section className="py-20 lg:py-24 px-6 bg-white relative overflow-hidden">
      <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-rose-pale/20 to-transparent pointer-events-none" />
      <div className="absolute -top-40 right-0 w-[400px] h-[400px] bg-rose/8 rounded-full blur-[120px] pointer-events-none blob-pulse" />

      <div className="max-w-7xl mx-auto relative">
        <div className="text-center mb-14 reveal">
          <p className="text-[0.6rem] tracking-[0.5em] uppercase text-rose-dark font-sans font-medium mb-5">
            Nos Catalogues
          </p>
          <h2 className="font-serif text-3xl md:text-5xl text-primary mb-8">
            Conheça nossos catálogos
          </h2>
          <div className="ornament">
            <div className="w-1.5 h-1.5 rounded-full bg-rose-dark/40" />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 reveal-stagger">
          {catalogs.map((cat, i) => (
            <Link
              key={cat.title}
              href={cat.href}
              className="card-lift group relative rounded-[1.5rem] overflow-hidden aspect-[9/16] img-hover"
              style={{ transitionDelay: `${i * 0.08}s` }}
            >
              <Image
                src={catalogImages[cat.icon]}
                alt={cat.title}
                fill
                className="object-cover"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-black/5 group-hover:from-black/85 transition-all duration-600" />

              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-7 sm:p-8">
                <h3 className="font-serif text-2xl sm:text-xl lg:text-2xl text-white mb-2">
                  {cat.title}
                </h3>
                <p className="text-white/55 text-sm sm:text-xs font-sans leading-relaxed mb-6 group-hover:text-white/70 transition-colors">
                  {cat.description}
                </p>
                <span className="inline-flex items-center gap-2 text-[0.65rem] tracking-[0.15em] uppercase text-white/60 font-sans font-medium group-hover:text-white group-hover:gap-3 transition-all duration-400">
                  Ver catálogo
                  <svg className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
