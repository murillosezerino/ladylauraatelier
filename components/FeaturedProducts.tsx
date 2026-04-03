import Image from 'next/image'
import { featuredProducts, siteConfig } from '@/lib/data'

export default function FeaturedProducts() {
  return (
    <section id="catalogo" className="py-24 lg:py-32 px-6 bg-white relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-rose-pale/20 rounded-full blur-[150px] pointer-events-none blob-pulse" />

      <div className="max-w-[1400px] mx-auto relative">
        <div className="text-center mb-20 reveal">
          <p className="text-[0.6rem] tracking-[0.5em] uppercase text-rose-dark font-sans font-medium mb-5">
            Sélection
          </p>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-[3.5rem] text-primary mb-5 leading-tight">
            Destaques
          </h2>
          <p className="text-ink-3 text-base font-sans max-w-lg mx-auto leading-relaxed">
            Nossas criações mais amadas, feitas com ingredientes nobres e técnica francesa.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 lg:gap-10 reveal-stagger">
          {featuredProducts.map((product, i) => {
            const waLink = `https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(product.whatsappMsg)}`
            return (
              <div
                key={product.name}
                className="group bg-base rounded-[2rem] overflow-hidden border border-rose/8 hover:shadow-2xl hover:shadow-rose/15 transition-all duration-700 hover:-translate-y-2"
                style={{ transitionDelay: `${i * 0.1}s` }}
              >
                {/* Image */}
                <div className="relative aspect-[4/5] overflow-hidden">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-110"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  {/* Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

                  {/* CTA overlay */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500">
                    <a
                      href={waLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-white/95 backdrop-blur-sm text-rose-deep px-10 py-3.5 rounded-full text-[0.7rem] tracking-[0.15em] uppercase font-sans font-semibold shadow-xl translate-y-6 group-hover:translate-y-0 transition-transform duration-500"
                    >
                      Encomendar
                    </a>
                  </div>
                </div>

                {/* Content */}
                <div className="p-8 lg:p-10">
                  <h4 className="font-serif text-2xl lg:text-[1.7rem] text-primary mb-3 group-hover:text-rose-dark transition-colors duration-500">
                    {product.name}
                  </h4>
                  <p className="text-ink-3 text-sm font-sans leading-[1.8]">
                    {product.description}
                  </p>

                  <div className="mt-6 pt-6 border-t border-rose/8">
                    <a
                      href={waLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-[0.65rem] tracking-[0.15em] uppercase text-rose-dark font-sans font-medium group-hover:gap-3 transition-all duration-400"
                    >
                      Consultar
                      <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
