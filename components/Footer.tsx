import { siteConfig } from '@/lib/data'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer
      className="py-10 px-6 border-t border-rose-soft/20"
      style={{ background: '#2A1E28' }}
    >
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <div>
          <p
            className="text-rose-soft text-sm font-semibold tracking-widest uppercase"
            style={{ fontFamily: 'var(--font-cinzel)' }}
          >
            Lady Laura Atelier
          </p>
          <p className="text-ink-4 text-xs mt-1">
            Pâtisserie & Confeitaria Artesanal · SJC + Jacareí
          </p>
        </div>

        <div className="text-center">
          <p className="text-ink-3 text-xs">
            &copy; {year} Lady Laura Atelier · Todos os direitos reservados
          </p>
          <p className="text-ink-4 text-xs mt-1">
            Desenvolvido por{' '}
            <a
              href="CZ Studio"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gold hover:text-gold-light transition-colors"
            >
              Murillo Sezerino
            </a>
          </p>
        </div>

        <div className="flex items-center gap-4">
          <a
            href={siteConfig.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="text-ink-3 hover:text-rose-soft transition-colors text-xs tracking-wide"
            style={{ fontFamily: 'var(--font-josefin)' }}
          >
            Instagram
          </a>
          <span className="text-ink-4">·</span>
          <a
            href={`https://wa.me/${siteConfig.whatsapp}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-ink-3 hover:text-rose-soft transition-colors text-xs tracking-wide"
            style={{ fontFamily: 'var(--font-josefin)' }}
          >
            WhatsApp
          </a>
        </div>
      </div>
    </footer>
  )
}
