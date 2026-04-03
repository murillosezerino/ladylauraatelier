import { about } from '@/lib/data'
import Image from 'next/image'

function PersonCard({
  person,
  reverse = false,
}: {
  person: typeof about.thay
  reverse?: boolean
}) {
  return (
    <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center ${reverse ? 'lg:[&>*:first-child]:order-2' : ''}`}>
      {/* Photo */}
      <div className={reverse ? 'reveal-right' : 'reveal-left'}>
        <div className="relative rounded-3xl overflow-hidden aspect-[3/4] max-w-md mx-auto lg:mx-0 img-hover shadow-xl shadow-rose/15">
          <Image
            src={person.image}
            alt={person.imageAlt}
            fill
            className="object-cover object-top"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
        </div>
      </div>

      {/* Text */}
      <div className={reverse ? 'reveal-left lg:order-1' : 'reveal-right'}>
        <p className="text-[0.6rem] tracking-[0.5em] uppercase text-rose-dark font-sans font-medium mb-3">
          {person.role}
        </p>
        <h3 className="font-serif text-3xl md:text-4xl text-primary mb-8">
          {person.name}
        </h3>

        <div className="space-y-5 mb-10">
          {person.bio.map((paragraph, i) => (
            <p key={i} className="text-ink-2 leading-[1.9] font-sans text-[0.95rem]">{paragraph}</p>
          ))}
        </div>

        {/* Credentials */}
        <div className="space-y-3">
          {person.credentials.map((cred, i) => {
            const inner = (
              <div className="flex items-center gap-4">
                <div className="w-2 h-2 rounded-full bg-rose-dark/60 shrink-0" />
                <div>
                  <p className="text-sm font-sans font-medium text-primary">{cred.label}</p>
                  <p className="text-xs text-ink-3 font-sans">{cred.detail}</p>
                </div>
              </div>
            )
            return cred.href ? (
              <a key={i} href={cred.href} target="_blank" rel="noopener noreferrer"
                className="block bg-white rounded-xl p-4 border border-rose/10 hover:border-rose/30 hover:shadow-sm transition-all card-glow">
                {inner}
              </a>
            ) : (
              <div key={i} className="bg-white rounded-xl p-4 border border-rose/10">
                {inner}
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default function About() {
  return (
    <section id="sobre" className="py-20 lg:py-24 px-6 bg-base relative overflow-hidden">
      {/* Decorative floating blob */}
      <div className="absolute top-40 -right-40 w-[400px] h-[400px] bg-rose-pale/15 rounded-full blur-[120px] pointer-events-none blob-pulse" />
      <div className="absolute bottom-20 -left-40 w-[350px] h-[350px] bg-gold-pale/15 rounded-full blur-[100px] pointer-events-none blob-pulse" style={{ animationDelay: '3s' }} />

      <div className="max-w-7xl mx-auto relative">
        {/* Header */}
        <div className="text-center mb-16 reveal">
          <p className="font-hand text-2xl text-rose-dark/60 mb-4">
            {about.scriptText}
          </p>
          <h2 className="font-serif text-3xl md:text-5xl lg:text-6xl text-primary mb-8">
            {about.title}
          </h2>
          <div className="ornament">
            <div className="w-1.5 h-1.5 rounded-full bg-rose-dark/40" />
          </div>
        </div>

        <PersonCard person={about.thay} />

        {/* Divider */}
        <div className="my-20 ornament">
          <div className="w-2 h-2 rounded-full bg-rose/40" />
        </div>

        <PersonCard person={about.renata} reverse />
      </div>
    </section>
  )
}
