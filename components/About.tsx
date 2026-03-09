import { about } from '@/lib/data'
import Image from "next/image"

function PersonCard({
  person,
  reverse = false,
}: {
  person: typeof about.thay
  reverse?: boolean
}) {
  return (
    <div className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-center ${reverse ? 'lg:[&>*:first-child]:order-2' : ''}`}>
      {/* Photo */}
      <div className="reveal relative">
        <div
          className="relative rounded-2xl overflow-hidden aspect-[4/5] max-w-sm mx-auto lg:mx-0"
          style={{ background: '#FAF0F4' }}
        >
          <Image
            src={person.image}
            alt={person.imageAlt}
            fill
            className="object-cover object-top"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
        </div>

        {/* Badge com role */}
        <div className="absolute -bottom-4 -right-4 lg:right-auto lg:-left-6 bg-white rounded-xl shadow-lg p-4 border border-rose-soft/30 max-w-[180px]">
          <p
            className="text-xs text-gold font-semibold tracking-wide"
            style={{ fontFamily: 'var(--font-josefin)' }}
          >
            {person.name}
          </p>
          <p className="text-xs text-ink-3">{person.role}</p>
        </div>
      </div>

      {/* Text */}
      <div className={reverse ? 'lg:order-1' : ''}>
        <p
          className="text-rose mb-1 reveal"
          style={{ fontFamily: 'var(--font-sacramento)', fontSize: '2.5rem' }}
        >
          {person.role}
        </p>
        <h3
          className="font-semibold text-ink tracking-tight mb-6 reveal"
          style={{ fontFamily: 'var(--font-cinzel)', fontSize: 'clamp(1.75rem, 3vw, 2.5rem)' }}
        >
          {person.name}
        </h3>

        <div className="space-y-4 mb-8">
          {person.bio.map((paragraph, i) => (
            <p key={i} className="text-ink-2 leading-relaxed reveal">
              {paragraph}
            </p>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          {person.credentials.map((cred, i) => (
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
  )
}

export default function About() {
  return (
    <section
      id="sobre"
      className="py-24 px-6"
      style={{
        background:
          'linear-gradient(160deg, #FDF5F7 0%, #FBF6F0 40%, #F5EDE0 100%)',
      }}
    >
      <div className="max-w-6xl mx-auto">

        {/* Cabeçalho da seção */}
        <div className="text-center mb-20 reveal">
          <p
            className="text-rose mb-2"
            style={{ fontFamily: 'var(--font-sacramento)', fontSize: '3rem' }}
          >
            {about.scriptText}
          </p>
          <h2
            className="font-semibold text-ink tracking-tight"
            style={{ fontFamily: 'var(--font-cinzel)', fontSize: 'clamp(2rem, 4vw, 3.25rem)' }}
          >
            {about.title}
          </h2>
          <div className="w-16 h-px bg-gold mx-auto mt-6" />
        </div>

        {/* Thay Chagas */}
        <PersonCard person={about.thay} />

        {/* Divisor */}
        <div className="my-24 flex items-center gap-6">
          <div className="flex-1 h-px bg-gradient-to-r from-transparent to-rose-soft" />
          <span className="text-rose-soft text-2xl">✦</span>
          <div className="flex-1 h-px bg-gradient-to-l from-transparent to-rose-soft" />
        </div>

        {/* Renata Chagas */}
        <PersonCard person={about.renata} reverse />

        {/* Stats da empresa */}
        <div className="mt-24 grid grid-cols-2 sm:grid-cols-4 gap-4">
          {[
            { numero: '13', label: 'anos de confeitaria' },
            { numero: '12', label: 'anos de flores' },
            { numero: '2',  label: 'unidades SJC + Jacareí' },
            { numero: '44K', label: 'seguidores @ladylauraatelier' },
          ].map((stat) => (
            <div
              key={stat.label}
              className="reveal text-center bg-white/60 rounded-2xl p-6 border border-rose-soft/20"
            >
              <p
                className="text-4xl font-light text-rose mb-1"
                style={{ fontFamily: 'var(--font-cinzel)' }}
              >
                {stat.numero}
              </p>
              <p className="text-xs text-ink-3" style={{ fontFamily: 'var(--font-josefin)', letterSpacing: '0.08em' }}>
                {stat.label}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
