import { siteConfig } from '@/lib/data'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer data-nav-dark className="relative bg-primary overflow-hidden">
      {/* Decorative top gradient */}
      <div className="h-px bg-gradient-to-r from-transparent via-rose-dark/30 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 mb-12">
          {/* Brand */}
          <div>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/logo-ladylaura-white.svg"
              alt="Lady Laura Atelier"
              className="h-16 w-auto mb-5 opacity-90"
            />
            <p className="text-white/35 text-sm font-sans leading-relaxed max-w-xs">
              Confeitaria artesanal francesa, doces finos, macarons e flores — experiências que adoçam memórias.
            </p>
          </div>

          {/* Links */}
          <div>
            <p className="text-[0.65rem] tracking-[0.3em] uppercase text-white/50 font-sans mb-5">
              Navegação
            </p>
            <div className="grid grid-cols-2 gap-y-3">
              {[
                { label: 'Confeitaria', href: '/catalogo/bolos' },
                { label: 'Flores', href: '/catalogo/flores' },
                { label: 'Eventos', href: '/catalogo/eventos' },
                { label: 'Presentes', href: '/catalogo/kits' },
                { label: 'Sobre', href: '#sobre' },
                { label: 'Contato', href: '#contato' },
                { label: 'Dúvidas Frequentes', href: '/faq' },
              ].map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-white/40 hover:text-rose-dark text-sm font-sans transition-colors"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <p className="text-[0.65rem] tracking-[0.3em] uppercase text-white/50 font-sans mb-5">
              Contato
            </p>
            <div className="space-y-3">
              {siteConfig.addresses.map((addr, i) => (
                <a
                  key={i}
                  href={addr.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-white/40 hover:text-white/60 text-sm font-sans transition-colors"
                >
                  {addr.city} · {addr.street}
                </a>
              ))}
              <a
                href={`https://wa.me/${siteConfig.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block text-rose-dark/80 hover:text-rose-dark text-sm font-sans transition-colors"
              >
                (12) 98291-0000
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-white/8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/25 text-xs font-sans">
            &copy; {year} Lady Laura Atelier. Todos os direitos reservados.
          </p>

          <div className="flex items-center gap-6">
            <a
              href={siteConfig.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/30 hover:text-rose-dark/80 transition-colors"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069z" />
                <circle cx="12" cy="12" r="3.5" />
              </svg>
            </a>
            <a
              href={`https://wa.me/${siteConfig.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/30 hover:text-rose-dark/80 transition-colors"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
            </a>
          </div>

          <p className="text-white/15 text-xs font-sans">
            Desenvolvido por CZ Studio
          </p>
        </div>
      </div>
    </footer>
  )
}
