import { about } from '@/lib/data'

export default function About() {
  return (
    <section
      id="chef"
      className="py-24 px-6"
      style={{
        background:
          'linear-gradient(160deg, #FDF5F7 0%, #FBF6F0 40%, #F5EDE0 100%)',
      }}
    >
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Photo side */}
          <div className="reveal relative">
            {/* Photo frame */}
            <div
              className="relative rounded-2xl overflow-hidden aspect-[4/5] max-w-sm mx-auto lg:mx-0"
              style={{ background: '#FAF0F4' }}
            >
              {/* Placeholder — replace with real photo */}
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 text-rose-mid">
                <div className="text-8xl">👩‍🍳</div>
                <p
                  className="text-xs tracking-widest uppercase text-ink-3"
                  style={{ fontFamily: 'var(--font-josefin)' }}
                >
                  Foto da Chef Laura
                </p>
              </div>
            </div>

            {/* Floating credential badge */}
            <div
              className="absolute -bottom-4 -right-4 lg:right-auto lg:-left-6 bg-white rounded-xl shadow-lg p-4 border border-rose-soft/30 max-w-[160px]"
            >
              <p
                className="text-xs text-gold font-semibold tracking-wide"
                style={{ fontFamily: 'var(--font-josefin)' }}
              >
                Le Cordon Bleu
              </p>
              <p className="text-xs text-ink-3">Paris · 2018</p>
            </div>
          </div>

          {/* Text side */}
          <div>
            <p
              className="text-4xl text-rose mb-1 reveal"
              style={{ fontFamily: 'var(--font-sacramento)' }}
            >
              {about.scriptText}
            </p>
            <h2
              className="text-4xl sm:text-5xl font-semibold text-ink tracking-tight mb-6 reveal"
              style={{ fontFamily: 'var(--font-cinzel)' }}
            >
              {about.title}
            </h2>

            <div className="space-y-4 mb-8">
              {about.bio.map((paragraph, i) => (
                <p key={i} className="text-ink-2 leading-relaxed reveal">
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Credentials grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {about.credentials.map((cred, i) => (
                <div
                  key={i}
                  className="reveal flex items-center gap-3 bg-white/70 rounded-xl p-4 border border-rose-soft/20"
                >
                  <span className="text-2xl">{cred.icon}</span>
                  <div>
                    <p
                      className="text-xs font-semibold text-ink tracking-wide"
                      style={{ fontFamily: 'var(--font-josefin)' }}
                    >
                      {cred.label}
                    </p>
                    <p className="text-xs text-ink-3">{cred.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
