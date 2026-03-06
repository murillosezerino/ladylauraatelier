import { testimonials } from '@/lib/data'

export default function Testimonials() {
  return (
    <section id="avaliacoes" className="py-24 px-6" style={{ background: '#FDF5F7' }}>
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <p
            className="text-3xl text-rose mb-2 reveal"
            style={{ fontFamily: 'var(--font-sacramento)' }}
          >
            Elles adorent
          </p>
          <h2
            className="text-4xl sm:text-5xl font-semibold text-ink tracking-tight reveal"
            style={{ fontFamily: 'var(--font-cinzel)' }}
          >
            Avaliações
          </h2>
          <div className="separator mt-6 reveal">✦</div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="reveal bg-white rounded-2xl p-7 border border-rose-soft/20 shadow-sm hover:shadow-md transition-all"
            >
              {/* Stars */}
              <div className="flex gap-0.5 mb-4">
                {Array.from({ length: t.stars }).map((_, j) => (
                  <span key={j} className="text-gold text-sm">★</span>
                ))}
              </div>

              <p className="text-sm text-ink-2 leading-relaxed mb-5 italic">
                &ldquo;{t.text}&rdquo;
              </p>

              <div className="flex items-center gap-3">
                <div
                  className="w-9 h-9 rounded-full bg-rose-pale flex items-center justify-center text-rose font-semibold text-sm"
                  style={{ fontFamily: 'var(--font-cinzel)' }}
                >
                  {t.name[0]}
                </div>
                <div>
                  <p
                    className="text-xs font-semibold text-ink"
                    style={{ fontFamily: 'var(--font-josefin)' }}
                  >
                    {t.name}
                  </p>
                  <p className="text-xs text-ink-3">{t.city}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
