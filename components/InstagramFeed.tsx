import { siteConfig } from '@/lib/data'
import Image from 'next/image'

const igUrl = 'https://www.instagram.com/ladylauraatelier/'

const posts: { src: string; span: string }[] = [
  { src: '/images/confeitaria/tartlets-piped.webp', span: 'row-span-1' },
  { src: '/images/doces/trufas-chocolate.webp', span: 'row-span-2' },
  { src: '/images/macarons/macarons-rosa-evento.webp', span: 'row-span-1' },
  { src: '/images/confeitaria/profiteroles-pistache.webp', span: 'row-span-1' },
  { src: '/images/doces/brigadeiros-gourmet.webp', span: 'row-span-2' },
  { src: '/images/confeitaria/eclairs-rosa.webp', span: 'row-span-1' },
  { src: '/images/bolos/red-velvet.webp', span: 'row-span-1' },
  { src: '/images/macarons/macarons-caixa-rosa.webp', span: 'row-span-1' },
  { src: '/images/chef/thay-montando-prato.webp', span: 'row-span-1' },
  { src: '/images/flores/arranjo-cora.webp', span: 'row-span-2' },
  { src: '/images/macarons/galeria-1.webp', span: 'row-span-2' },
  { src: '/images/confeitaria/milefeuille.webp', span: 'row-span-1' },
  { src: '/images/doces/brigadeiros-pistache.webp', span: 'row-span-1' },
  { src: '/images/macarons/macarons-coloridos.webp', span: 'row-span-1' },
  { src: '/images/flores/rosas-personalizado.webp', span: 'row-span-2' },
  { src: '/images/bolos/buttercream-3.webp', span: 'row-span-2' },
  { src: '/images/macarons/macaron-caramelo.webp', span: 'row-span-1' },
  { src: '/images/bolos/pistache-framboesa.webp', span: 'row-span-1' },
  { src: '/images/confeitaria/pavlovas-frutas.webp', span: 'row-span-1' },
  { src: '/images/doces/doces-5.webp', span: 'row-span-1' },
  { src: '/images/flores/arranjo-cherie.webp', span: 'row-span-2' },
  { src: '/images/bolos/praline.webp', span: 'row-span-1' },
  { src: '/images/macarons/galeria-4.webp', span: 'row-span-1' },
  { src: '/images/eventos/mesa-casamento.webp', span: 'row-span-1' },
  { src: '/images/confeitaria/tarte-chocolate-frutas.webp', span: 'row-span-1' },
  { src: '/images/doces/brigadeiros-variados.webp', span: 'row-span-1' },
  { src: '/images/bolos/matilda.webp', span: 'row-span-1' },
  { src: '/images/macarons/galeria-6.webp', span: 'row-span-1' },
]

export default function InstagramFeed() {
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

        <div
          className="reveal-scale grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-8 gap-3 auto-rows-[160px] sm:auto-rows-[180px] md:auto-rows-[190px] lg:auto-rows-[200px]"
          style={{ gridAutoFlow: 'dense' }}
        >
          {posts.map((post, i) => (
            <a
              key={i}
              href={igUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={`relative rounded-2xl overflow-hidden group img-hover ${post.span}`}
            >
              <Image
                src={post.src}
                alt={`@ladylauraatelier ${i + 1}`}
                fill
                className="object-cover"
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
