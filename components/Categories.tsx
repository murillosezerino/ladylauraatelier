import Link from 'next/link'
import Image from 'next/image'
import { categories } from '@/lib/data'

export default function Categories() {
  return (
    <section id="universos" className="py-24 lg:py-32 px-6 bg-base relative overflow-hidden">
      {/* Subtle background accents */}
      <div className="absolute -top-60 -right-60 w-[500px] h-[500px] bg-rose/10 rounded-full blur-[120px] pointer-events-none blob-pulse" />
      <div className="absolute -bottom-60 -left-60 w-[500px] h-[500px] bg-gold-pale/30 rounded-full blur-[120px] pointer-events-none blob-pulse" style={{ animationDelay: '4s' }} />

      <div className="max-w-[1400px] mx-auto relative">
        {/* Header */}
        <div className="text-center mb-20 reveal">
          <p className="text-[0.6rem] tracking-[0.5em] uppercase text-rose-dark font-sans font-medium mb-5">
            Nos Créations
          </p>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-[3.5rem] text-primary mb-8 leading-tight">
            Nossas Especialidades
          </h2>
          <div className="ornament">
            <div className="w-1.5 h-1.5 rounded-full bg-rose-dark/40" />
          </div>
        </div>

        {/* Main grid - 2x2 with featured large */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 lg:gap-6">

          {/* Confeitaria - Large hero card */}
          <Link
            href={categories[0].href}
            className="reveal-left group relative rounded-[2rem] overflow-hidden lg:col-span-7 h-[400px] sm:h-[480px] lg:h-[620px]"
          >
            <Image
              src={categories[0].image}
              alt={categories[0].title}
              fill
              className="object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-105"
              sizes="(max-width: 1024px) 100vw, 58vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent group-hover:from-black/80 transition-all duration-700" />

            <div className="absolute bottom-0 left-0 right-0 p-8 sm:p-10 lg:p-14">
              <p className="text-[0.55rem] tracking-[0.4em] uppercase text-white/40 font-sans mb-4 group-hover:text-white/60 transition-colors">
                {categories[0].subtitle}
              </p>
              <h3 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-white mb-4 leading-[1.05]">
                {categories[0].title}
              </h3>
              <p className="text-white/55 text-sm sm:text-base font-sans leading-relaxed max-w-md mb-8 group-hover:text-white/70 transition-colors">
                {categories[0].description}
              </p>
              <span className="inline-flex items-center gap-2.5 text-[0.65rem] tracking-[0.2em] uppercase text-white/50 font-sans font-medium group-hover:text-white group-hover:gap-4 transition-all duration-500">
                Explorar
                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </span>
            </div>
          </Link>

          {/* Right column - stacked */}
          <div className="lg:col-span-5 flex flex-col gap-5 lg:gap-6">
            {/* Doces Finos */}
            <Link
              href={categories[1].href}
              className="reveal-right group relative rounded-[2rem] overflow-hidden h-[280px] sm:h-[300px] lg:flex-1"
            >
              <Image
                src={categories[1].image}
                alt={categories[1].title}
                fill
                className="object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-105"
                sizes="(max-width: 1024px) 100vw, 42vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/15 to-transparent group-hover:from-black/80 transition-all duration-700" />

              <div className="absolute bottom-0 left-0 right-0 p-8 lg:p-10">
                <p className="text-[0.55rem] tracking-[0.4em] uppercase text-white/40 font-sans mb-2 group-hover:text-white/60 transition-colors">
                  {categories[1].subtitle}
                </p>
                <h3 className="font-serif text-3xl lg:text-4xl text-white mb-2">
                  {categories[1].title}
                </h3>
                <p className="text-white/50 text-sm font-sans leading-relaxed max-w-sm group-hover:text-white/65 transition-colors">
                  {categories[1].description}
                </p>
              </div>
            </Link>

            {/* Macarons */}
            <Link
              href={categories[2].href}
              className="reveal-right group relative rounded-[2rem] overflow-hidden h-[280px] sm:h-[300px] lg:flex-1"
              style={{ transitionDelay: '0.12s' }}
            >
              <Image
                src={categories[2].image}
                alt={categories[2].title}
                fill
                className="object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-105"
                sizes="(max-width: 1024px) 100vw, 42vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/15 to-transparent group-hover:from-black/80 transition-all duration-700" />

              <div className="absolute bottom-0 left-0 right-0 p-8 lg:p-10">
                <p className="text-[0.55rem] tracking-[0.4em] uppercase text-white/40 font-sans mb-2 group-hover:text-white/60 transition-colors">
                  {categories[2].subtitle}
                </p>
                <h3 className="font-serif text-3xl lg:text-4xl text-white mb-2">
                  {categories[2].title}
                </h3>
                <p className="text-white/50 text-sm font-sans leading-relaxed max-w-sm group-hover:text-white/65 transition-colors">
                  {categories[2].description}
                </p>
              </div>
            </Link>
          </div>
        </div>

        {/* Eventos - Full-width cinematic banner */}
        <Link
          href={categories[3].href}
          className="reveal group relative rounded-[2rem] overflow-hidden mt-5 lg:mt-6 block h-[240px] sm:h-[280px] lg:h-[320px]"
        >
          <Image
            src={categories[3].image}
            alt={categories[3].title}
            fill
            className="object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-[1.03]"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/40 to-transparent group-hover:from-black/85 transition-all duration-700" />

          <div className="absolute inset-0 flex items-center p-8 sm:p-10 lg:p-16">
            <div className="max-w-xl">
              <p className="text-[0.55rem] tracking-[0.4em] uppercase text-white/40 font-sans mb-3">
                {categories[3].subtitle}
              </p>
              <h3 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-white mb-3 leading-tight">
                {categories[3].title}
              </h3>
              <p className="text-white/55 text-sm sm:text-base font-sans leading-relaxed max-w-md mb-8">
                {categories[3].description}
              </p>
              <span className="inline-flex items-center gap-2.5 px-8 py-3 rounded-full border border-white/20 text-[0.65rem] tracking-[0.2em] uppercase text-white/70 font-sans font-medium group-hover:bg-white/10 group-hover:border-white/40 group-hover:text-white transition-all duration-500">
                Explorar eventos
                <svg className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform duration-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </span>
            </div>
          </div>
        </Link>
      </div>
    </section>
  )
}
