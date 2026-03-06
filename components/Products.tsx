import { products, siteConfig } from '@/lib/data'
import Image from 'next/image'

export default function Products() {
  return (
    <section id="cardapio" className="py-24 px-6" style={{ background: '#FBF6F0' }}>
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <p
            className="text-3xl text-rose mb-2 reveal"
            style={{ fontFamily: 'var(--font-sacramento)' }}
          >
            Notre Carte
          </p>
          <h2
            className="text-4xl sm:text-5xl font-semibold text-ink tracking-tight reveal"
            style={{ fontFamily: 'var(--font-cinzel)' }}
          >
            Cardápio
          </h2>
          <div className="separator mt-6 reveal">✦</div>
        </div>

        {/* Product cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {products.map((product) => {
            const waLink = `https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(product.whatsappMsg)}`
            return (
              <article
                key={product.id}
                className="reveal bg-white rounded-2xl overflow-hidden shadow-sm border border-rose-soft/20 hover:shadow-md hover:-translate-y-1 transition-all duration-300"
              >
                {/* Image */}
                <div className="relative h-56 bg-rose-pale overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center text-6xl">
                    {product.emoji}
                  </div>
                  {/* Uncomment when you have real photos:
                  <Image
                    src={product.image}
                    alt={product.imageAlt}
                    fill
                    className="object-cover"
                  />
                  */}
                  <div
                    className="absolute bottom-0 left-0 right-0 h-16"
                    style={{
                      background: 'linear-gradient(to top, white, transparent)',
                    }}
                  />
                </div>

                {/* Content */}
                <div className="p-7">
                  <h3
                    className="text-lg font-semibold text-ink mb-2 tracking-wide"
                    style={{ fontFamily: 'var(--font-cinzel)' }}
                  >
                    {product.category}
                  </h3>
                  <p className="text-sm text-ink-2 leading-relaxed mb-5">
                    {product.description}
                  </p>

                  {/* Price list */}
                  <ul className="space-y-2 mb-6">
                    {product.items.map((item) => (
                      <li
                        key={item.name}
                        className="flex items-center justify-between text-xs border-b border-rose-soft/20 pb-2"
                      >
                        <span
                          className="text-ink-2 tracking-wide uppercase"
                          style={{ fontFamily: 'var(--font-josefin)' }}
                        >
                          {item.name}
                        </span>
                        <span className="font-semibold text-rose" style={{ fontFamily: 'var(--font-josefin)' }}>
                          {item.price}
                        </span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA */}
                  <a
                    href={waLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-center text-xs tracking-widest uppercase py-3 px-6 rounded-full border border-rose text-rose hover:bg-rose hover:text-white transition-all"
                    style={{ fontFamily: 'var(--font-josefin)' }}
                  >
                    Encomendar
                  </a>
                </div>
              </article>
            )
          })}
        </div>

        {/* Bottom note */}
        <p className="text-center text-xs text-ink-3 mt-10 tracking-wide reveal">
          Todos os produtos são feitos artesanalmente sob encomenda · Consulte disponibilidade
        </p>
      </div>
    </section>
  )
}
