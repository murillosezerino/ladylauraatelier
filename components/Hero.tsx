import { hero, siteConfig } from '@/lib/data'

export default function Hero() {
  const waLink = `https://wa.me/${siteConfig.whatsapp}?text=Olá!+Gostaria+de+fazer+uma+encomenda.`

  return (
    <section
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        background:
          'radial-gradient(ellipse 80% 60% at 50% 0%, #EEBECE44 0%, transparent 70%), linear-gradient(180deg, #FDF5F7 0%, #FBF6F0 50%, #F5EDE0 100%)',
      }}
    >
      {/* Decorative blobs */}
      <div
        className="absolute top-20 right-[8%] w-80 h-80 rounded-full opacity-20 blur-3xl pointer-events-none"
        style={{ background: '#C8728A' }}
      />
      <div
        className="absolute bottom-24 left-[6%] w-64 h-64 rounded-full opacity-15 blur-3xl pointer-events-none"
        style={{ background: '#B8966A' }}
      />

      {/* Grid texture overlay */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage:
            'repeating-linear-gradient(0deg, #2A1E28 0px, #2A1E28 1px, transparent 1px, transparent 60px), repeating-linear-gradient(90deg, #2A1E28 0px, #2A1E28 1px, transparent 1px, transparent 60px)',
        }}
      />

      <div className="relative max-w-5xl mx-auto px-6 pt-24 pb-20 text-center">
        {/* Script greeting */}
        <p
          className="text-4xl text-rose mb-2 opacity-0 animate-[fadeIn_1s_0.2s_ease_forwards]"
          style={{ fontFamily: 'var(--font-sacramento)' }}
        >
          {hero.scriptText}
        </p>

        {/* Headline */}
        <h1
          className="text-6xl sm:text-7xl lg:text-8xl font-semibold text-ink leading-none tracking-tight mb-2 opacity-0 animate-[fadeUp_0.9s_0.4s_ease_forwards]"
          style={{ fontFamily: 'var(--font-cinzel)' }}
        >
          {hero.headline}{' '}
          <em
            className="not-italic"
            style={{
              background: 'linear-gradient(135deg, #C8728A, #B8966A)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            {hero.headlineHighlight}
          </em>
        </h1>

        {/* Separator */}
        <div className="separator my-8 opacity-0 animate-[fadeIn_0.8s_0.7s_ease_forwards]">
          ✦
        </div>

        {/* Subheadline */}
        <p
          className="text-base sm:text-lg text-ink-2 max-w-xl mx-auto leading-relaxed mb-10 opacity-0 animate-[fadeUp_0.8s_0.8s_ease_forwards]"
          style={{ fontFamily: 'var(--font-nunito)' }}
        >
          {hero.subheadline.split('\n').map((line, i) => (
            <span key={i}>
              {line}
              {i < hero.subheadline.split('\n').length - 1 && <br />}
            </span>
          ))}
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 opacity-0 animate-[fadeUp_0.8s_1s_ease_forwards]">
          <a
            href={waLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-white text-sm font-semibold tracking-widest uppercase transition-all hover:scale-105 hover:shadow-lg"
            style={{
              background: 'linear-gradient(135deg, #C8728A, #A05070)',
              fontFamily: 'var(--font-josefin)',
              boxShadow: '0 8px 30px rgba(200,114,138,0.35)',
            }}
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            {hero.ctaLabel}
          </a>
          <a
            href="#cardapio"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-rose-deep text-sm font-semibold tracking-widest uppercase border border-rose-soft hover:border-rose hover:bg-rose-pale transition-all"
            style={{ fontFamily: 'var(--font-josefin)' }}
          >
            {hero.ctaSecondary}
          </a>
        </div>

        {/* Scroll indicator */}
        <div className="mt-16 flex justify-center opacity-0 animate-[fadeIn_1s_1.4s_ease_forwards]">
          <div className="flex flex-col items-center gap-1 text-ink-3">
            <span className="text-xs tracking-[0.3em] uppercase" style={{ fontFamily: 'var(--font-josefin)' }}>
              Explorar
            </span>
            <div className="w-px h-8 bg-gradient-to-b from-ink-3 to-transparent" />
          </div>
        </div>
      </div>
    </section>
  )
}
