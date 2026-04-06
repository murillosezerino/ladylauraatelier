import Link from "next/link"
import Image from "next/image"
import Nav from "@/components/Nav"
import Footer from "@/components/Footer"
import RevealInit from "@/components/RevealInit"

const wppBase = "https://wa.me/5512982910000?text="

function DiamondBullet({ gold }: { gold?: boolean }) {
  return (
    <span className={`mt-1.5 shrink-0 text-[0.45rem] ${gold ? 'text-gold-warm/60' : 'text-rose-dark/50'}`}>&#9670;</span>
  )
}

const eventos = [
  {
    nome: 'Petit Comité',
    subtitulo: 'Reserva especial',
    capacidade: 'Até 10 pessoas',
    itens: [
      '1 Torta ou Bolo Sweet Home',
      '1 Arranjo Floral em cristal',
      '1 Espumante em champanheira',
      'Mesa posta completa',
      'Até 3 horas de reserva',
    ],
    infos: [
      { label: 'Duração', value: '3 horas' },
      { label: 'Dias', value: 'Segunda a domingo' },
      { label: 'Pagamento', value: '100% via PIX' },
    ],
    cta: 'Reservar Petit Comité',
    wppMsg: 'Olá! Gostaria de reservar o Petit Comité.',
    accent: 'rose',
  },
  {
    nome: 'Petit Jardin',
    subtitulo: 'Jardim exclusivo',
    capacidade: 'Até 30 pessoas',
    itens: [
      'Menu de brunch completo',
      'Valet',
      'Decoração com flores naturais',
      'Jardim reservado',
      'Até 4 horas',
    ],
    infos: [
      { label: 'Duração', value: '4 horas' },
      { label: 'Menu', value: 'Brunch completo' },
      { label: 'Pagamento', value: 'Consulte' },
    ],
    nota: 'Jardim ao ar livre — possível realocação para o deck em caso de chuva.',
    cta: 'Reservar Petit Jardin',
    wppMsg: 'Olá! Gostaria de reservar o Petit Jardin.',
    accent: 'olive',
  },
  {
    nome: 'Grand Royale',
    subtitulo: 'Casa exclusiva',
    capacidade: 'Até 55 pessoas',
    itens: [
      'Casa inteira exclusiva',
      'Menu completo + bebidas',
      'Decoração floral completa',
      'Menu impresso, velas, mesa posta',
      'Garçom e valet',
      'Até 4 horas',
    ],
    infos: [
      { label: 'Duração', value: '4 horas' },
      { label: 'Menu', value: 'Jantar completo' },
      { label: 'Pagamento', value: 'Consulte' },
    ],
    cta: 'Solicitar proposta',
    wppMsg: 'Olá! Gostaria de saber mais sobre o Grand Royale.',
    accent: 'gold',
  },
]

export default function EventosPage() {
  return (
    <>
      <RevealInit />
      <Nav />
      <main className="min-h-screen bg-base text-primary">

        {/* ───────────────── HERO ───────────────── */}
        <section data-nav-dark className="relative min-h-[85vh] flex items-center justify-center px-6 overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute inset-0 bg-drift">
              <Image
                src="/images/eventos/capa-eventos.jpg"
                alt="Mesa de doces para eventos"
                fill
                className="object-cover"
                sizes="100vw"
                priority
              />
            </div>
          </div>
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/25 to-black/60" />
          <div className="absolute inset-0 bg-rose-deep/10" />
          <div className="absolute inset-0" style={{ boxShadow: 'inset 0 0 200px 60px rgba(0,0,0,0.35)' }} />

          <div className="absolute top-10 left-10 w-20 h-20 border-t border-l border-white/10 hidden md:block" />
          <div className="absolute bottom-10 right-10 w-20 h-20 border-b border-r border-white/10 hidden md:block" />

          <div className="relative z-10 max-w-4xl mx-auto text-center py-40">
            <p className="reveal text-[0.65rem] tracking-[0.45em] uppercase text-white/50 font-sans font-medium mb-5">Projetos para</p>
            <h1 className="reveal font-serif text-5xl md:text-7xl text-white mb-8 leading-[1.05]">Eventos & Reservas</h1>
            <div className="reveal flex items-center justify-center gap-5 mb-8">
              <div className="w-16 h-px bg-gradient-to-r from-transparent to-white/30" />
              <svg className="w-2.5 h-2.5 text-gold-warm/60" viewBox="0 0 12 12" fill="currentColor">
                <path d="M6 0L7.5 4.5L12 6L7.5 7.5L6 12L4.5 7.5L0 6L4.5 4.5Z" />
              </svg>
              <div className="w-16 h-px bg-gradient-to-l from-transparent to-white/30" />
            </div>
            <p className="reveal text-white/65 font-sans font-light text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
              Criamos experiências completas para casamentos, celebrações e eventos — do íntimo ao grandioso, dentro ou fora de nossas casas.
            </p>
          </div>
        </section>

        {/* ───────────────── NOSSOS SERVIÇOS ───────────────── */}
        <section className="relative py-28 overflow-hidden">
          <div className="absolute -top-32 -left-32 w-[500px] h-[500px] bg-rose-pale/15 rounded-full blur-[120px] pointer-events-none blob-pulse" />

          <div className="max-w-6xl mx-auto px-6 relative z-10">
            <div className="reveal text-center mb-16">
              <p className="text-[0.65rem] tracking-[0.4em] uppercase text-rose-dark font-sans font-medium mb-3">Nos Services</p>
              <h2 className="font-serif text-3xl md:text-5xl text-primary mb-5">O que fazemos</h2>
              <div className="flex items-center justify-center gap-4 mb-5">
                <div className="w-12 h-px bg-gradient-to-r from-transparent to-rose-dark/40" />
                <svg className="w-2.5 h-2.5 text-rose-dark/40" viewBox="0 0 12 12" fill="currentColor">
                  <path d="M6 0L7.5 4.5L12 6L7.5 7.5L6 12L4.5 7.5L0 6L4.5 4.5Z" />
                </svg>
                <div className="w-12 h-px bg-gradient-to-l from-transparent to-rose-dark/40" />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {[
                {
                  titulo: 'Eventos no Esplanada',
                  descricao: 'Celebrações e reservas realizadas em nossa casa no Jd. Esplanada — mesas de doces, brunches e experiências completas.',
                  icon: <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M8.25 21v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21m0 0h4.5V3.545M12.75 21h7.5V10.75M2.25 21h1.5m18 0h-18M2.25 9l4.5-1.636M18.75 3l-1.5.545m0 6.205l3 1m1.5.5l-1.5-.5M6.75 7.364V3h-3v18m3-13.636l10.5-3.819" /></svg>,
                },
                {
                  titulo: 'Projetos Eventos LL',
                  descricao: 'Projetos completos de eventos assinados Lady Laura — do conceito à execução, com curadoria de doces, flores e decoração.',
                  icon: <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 00-2.455 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" /></svg>,
                },
                {
                  titulo: 'Eventos Externos',
                  descricao: 'Levamos a experiência Lady Laura para o local de sua escolha — restaurantes, espaços de eventos, fazendas e residências.',
                  icon: <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" /></svg>,
                },
                {
                  titulo: 'Mesa de Doces',
                  descricao: 'Montagem completa de mesas de doces para casamentos, aniversários e eventos corporativos com curadoria artesanal.',
                  icon: <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M12 8.25v-1.5m0 1.5c-1.355 0-2.697.056-4.024.166C6.845 8.51 6 9.473 6 10.608v2.513m6-4.87c1.355 0 2.697.055 4.024.165C17.155 8.51 18 9.473 18 10.608v2.513m-3-4.87v-1.5m-6 1.5v-1.5m12 9.75l-1.5.75a3.354 3.354 0 01-3 0 3.354 3.354 0 00-3 0 3.354 3.354 0 01-3 0 3.354 3.354 0 00-3 0 3.354 3.354 0 01-3 0L3 16.5m18-4.5a9 9 0 00-18 0" /></svg>,
                },
                {
                  titulo: 'Decoração em Restaurantes',
                  descricao: 'Decoração floral e mesas de doces especiais para eventos realizados em restaurantes parceiros.',
                  icon: <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" /></svg>,
                },
                {
                  titulo: 'Mini Wedding & Casamentos',
                  descricao: 'Decoração floral completa e mesa de doces para mini weddings e casamentos — internos e externos.',
                  icon: <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" /></svg>,
                },
                {
                  titulo: 'Decoração Floral para Eventos',
                  descricao: 'Arranjos e composições florais exclusivas para decorar qualquer tipo de evento ou celebração.',
                  icon: <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" /></svg>,
                },
              ].map((s, i) => (
                <div
                  key={s.titulo}
                  className="reveal card-glow bg-white border border-rose/15 rounded-[1.5rem] p-7 group text-center hover:border-rose-dark/20 transition-all duration-500"
                  style={{ transitionDelay: `${i * 0.06}s` }}
                >
                  <div className="w-12 h-12 rounded-full bg-rose-pale/50 flex items-center justify-center mx-auto mb-5 text-rose-dark/60 group-hover:text-rose-dark group-hover:bg-rose-pale transition-all">
                    {s.icon}
                  </div>
                  <h3 className="font-serif text-lg text-primary mb-2">{s.titulo}</h3>
                  <p className="text-ink-2 text-sm font-sans leading-relaxed">{s.descricao}</p>
                </div>
              ))}
            </div>

            <div className="reveal text-center mt-12">
              <a
                href={`${wppBase}${encodeURIComponent('Olá! Gostaria de saber mais sobre os serviços de eventos.')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-shine inline-flex items-center gap-3 bg-rose-dark text-white font-sans font-medium text-[0.7rem] tracking-[0.15em] uppercase px-10 py-4 rounded-full hover:bg-rose-deep hover:scale-[1.03] transition-all duration-300 shadow-lg shadow-rose-dark/20"
              >
                Solicitar orçamento
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          </div>
        </section>

        {/* ───────────────── GALERIA DE EVENTOS ───────────────── */}
        <section className="relative bg-white py-28 overflow-hidden">
          <div className="max-w-7xl mx-auto px-6">
            <div className="reveal text-center mb-14">
              <p className="text-[0.65rem] tracking-[0.4em] uppercase text-rose-dark font-sans font-medium mb-3">Nos Réalisations</p>
              <h2 className="font-serif text-3xl md:text-5xl text-primary mb-5">Nossos Eventos</h2>
              <div className="flex items-center justify-center gap-4 mb-5">
                <div className="w-12 h-px bg-gradient-to-r from-transparent to-rose-dark/40" />
                <svg className="w-2.5 h-2.5 text-rose-dark/40" viewBox="0 0 12 12" fill="currentColor">
                  <path d="M6 0L7.5 4.5L12 6L7.5 7.5L6 12L4.5 7.5L0 6L4.5 4.5Z" />
                </svg>
                <div className="w-12 h-px bg-gradient-to-l from-transparent to-rose-dark/40" />
              </div>
            </div>

            <div className="reveal grid grid-cols-2 md:grid-cols-3 gap-4">
              {[
                { src: '/images/eventos/doces-eventos.jpg', alt: 'Mesa de doces para evento' },
                { src: '/images/eventos/evento-2.jpg', alt: 'Decoração de evento' },
                { src: '/images/eventos/evento-3.jpg', alt: 'Evento externo' },
                { src: '/images/eventos/evento-4.jpg', alt: 'Decoração floral para evento' },
                { src: '/images/eventos/mesa-casamento.jpg', alt: 'Mesa de casamento' },
                { src: '/images/eventos/capa-eventos.jpg', alt: 'Evento Lady Laura' },
              ].map((img, i) => (
                <div
                  key={i}
                  className="relative aspect-[4/3] rounded-[1.5rem] overflow-hidden img-hover group shadow-sm"
                  style={{ transitionDelay: `${i * 0.06}s` }}
                >
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-rose-deep/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ───────────────── 3 CARDS SIDE BY SIDE ───────────────── */}
        <section className="relative py-28 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-[600px] h-[600px] bg-rose-pale/15 rounded-full blur-[150px] pointer-events-none blob-pulse" />
          <div className="absolute -bottom-40 -left-40 w-[500px] h-[500px] bg-rose/10 rounded-full blur-[120px] pointer-events-none blob-pulse" />

          <div className="max-w-7xl mx-auto px-6 relative z-10">
            <div className="reveal text-center mb-16">
              <p className="text-[0.65rem] tracking-[0.4em] uppercase text-rose-dark font-sans font-medium mb-3">Nos Formats</p>
              <h2 className="font-serif text-3xl md:text-5xl text-primary mb-5">Escolha seu formato</h2>
              <div className="flex items-center justify-center gap-4 mb-5">
                <div className="w-12 h-px bg-gradient-to-r from-transparent to-rose-dark/40" />
                <svg className="w-2.5 h-2.5 text-rose-dark/40" viewBox="0 0 12 12" fill="currentColor">
                  <path d="M6 0L7.5 4.5L12 6L7.5 7.5L6 12L4.5 7.5L0 6L4.5 4.5Z" />
                </svg>
                <div className="w-12 h-px bg-gradient-to-l from-transparent to-rose-dark/40" />
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {eventos.map((ev, i) => {
                const isGold = ev.accent === 'gold'
                const borderColor = isGold ? 'border-gold-warm/20' : 'border-rose/15'
                const accentText = isGold ? 'text-gold-warm' : ev.accent === 'olive' ? 'text-olive' : 'text-rose-dark'
                const accentBg = isGold ? 'bg-gold-warm' : 'bg-rose-dark'
                const accentHover = isGold ? 'hover:bg-gold-light' : 'hover:bg-rose-deep'
                const headerBg = isGold
                  ? 'bg-gradient-to-br from-primary via-chocolate to-chocolate-dark'
                  : ev.accent === 'olive'
                    ? 'bg-gradient-to-br from-olive-light/15 via-rose-pale/40 to-cream'
                    : 'bg-gradient-to-br from-rose/20 via-rose-pale/50 to-cream'
                const headerText = isGold ? 'text-gold-warm' : 'text-rose-dark'
                const headerSubtext = isGold ? 'text-white/50' : 'text-ink-3'
                const bulletGold = isGold

                return (
                  <div
                    key={ev.nome}
                    className={`reveal card-lift rounded-[2rem] overflow-hidden border ${borderColor} ${isGold ? 'bg-primary' : 'bg-white'} flex flex-col shadow-sm hover:shadow-xl transition-all duration-500`}
                    style={{ transitionDelay: `${i * 0.1}s` }}
                  >
                    {/* Header */}
                    <div className={`${headerBg} px-8 py-8 border-b ${isGold ? 'border-white/10' : 'border-rose/10'}`}>
                      <p className={`text-[0.55rem] tracking-[0.35em] uppercase ${isGold ? 'text-gold-warm/70' : `${accentText}/70`} font-sans font-medium mb-2`}>{ev.subtitulo}</p>
                      <h3 className={`font-serif text-3xl ${headerText}`}>{ev.nome}</h3>
                      <p className={`text-[0.6rem] tracking-[0.2em] uppercase ${headerSubtext} font-sans mt-2`}>{ev.capacidade}</p>
                    </div>

                    {/* Items */}
                    <div className={`px-8 py-7 flex-1 ${isGold ? '' : ''}`}>
                      <p className={`text-[0.55rem] tracking-[0.25em] uppercase ${isGold ? 'text-gold-warm/60' : 'text-ink-3'} font-sans font-medium mb-4`}>Incluso</p>
                      <ul className={`space-y-2.5 ${isGold ? 'text-white/60' : 'text-ink-2'} text-sm font-sans`}>
                        {ev.itens.map((item) => (
                          <li key={item} className="flex items-start gap-3">
                            <DiamondBullet gold={bulletGold} />
                            {item}
                          </li>
                        ))}
                      </ul>

                      {ev.nota && (
                        <p className={`mt-5 text-xs italic font-sans leading-relaxed ${isGold ? 'text-white/35' : 'text-ink-4'} border-t ${isGold ? 'border-white/10' : 'border-rose/10'} pt-4`}>
                          {ev.nota}
                        </p>
                      )}
                    </div>

                    {/* Info + CTA */}
                    <div className={`px-8 pb-8`}>
                      <div className={`space-y-3 mb-6 pb-6 border-b ${isGold ? 'border-white/10' : 'border-rose/8'}`}>
                        {ev.infos.map((info) => (
                          <div key={info.label} className="flex items-center justify-between">
                            <span className={`text-[0.55rem] tracking-[0.12em] uppercase ${isGold ? 'text-gold-warm/50' : 'text-ink-3'} font-sans`}>{info.label}</span>
                            <span className={`text-sm font-sans font-medium ${isGold ? 'text-white/70' : 'text-primary'}`}>{info.value}</span>
                          </div>
                        ))}
                      </div>

                      <a
                        href={`${wppBase}${encodeURIComponent(ev.wppMsg)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`btn-shine block text-center ${accentBg} ${isGold ? 'text-primary font-semibold' : 'text-white font-medium'} font-sans text-[0.7rem] tracking-[0.14em] uppercase px-6 py-4 rounded-full ${accentHover} transition-all hover:scale-[1.02] shadow-lg ${isGold ? 'shadow-gold-warm/20' : 'shadow-rose-dark/15'}`}
                      >
                        {ev.cta}
                      </a>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* ───────────────── DOCES PARA EVENTOS ───────────────── */}
        <section className="max-w-6xl mx-auto px-6 py-28">
          <div className="reveal text-center mb-14">
            <p className="text-[0.65rem] tracking-[0.4em] uppercase text-rose-dark font-sans font-medium mb-3">Événements sur mesure</p>
            <h2 className="font-serif text-3xl md:text-5xl text-primary mb-5">Doces para Eventos</h2>
            <div className="flex items-center justify-center gap-4 mb-5">
              <div className="w-12 h-px bg-gradient-to-r from-transparent to-rose-dark/40" />
              <svg className="w-2.5 h-2.5 text-rose-dark/40" viewBox="0 0 12 12" fill="currentColor">
                <path d="M6 0L7.5 4.5L12 6L7.5 7.5L6 12L4.5 7.5L0 6L4.5 4.5Z" />
              </svg>
              <div className="w-12 h-px bg-gradient-to-l from-transparent to-rose-dark/40" />
            </div>
          </div>

          <div className="reveal bg-white border border-rose/8 rounded-[2rem] overflow-hidden grid md:grid-cols-2 hover:shadow-2xl hover:shadow-rose/12 transition-all duration-700">
            <div className="relative min-h-[300px] md:min-h-[360px] overflow-hidden img-hover">
              <Image src="/images/eventos/doces-eventos.jpg" alt="Doces para eventos" fill className="object-cover" sizes="50vw" />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent to-white/10 pointer-events-none md:block hidden" />
            </div>
            <div className="p-10 md:p-14 flex flex-col justify-center">
              <p className="text-[0.6rem] tracking-[0.3em] uppercase text-rose-dark font-sans font-medium mb-6">Mesa completa</p>
              <p className="text-ink-2 font-sans leading-[1.9] mb-5 text-[0.95rem]">
                Curadoria de doces especiais para o seu evento ou casamento. São doces em miniatura das opções que você já encontra nas vitrines de nossas casas. Tem algum pedido especial? Fale conosco!
              </p>
              <p className="text-ink-4 text-sm italic font-sans mb-10">Consulte disponibilidade e orçamento via WhatsApp.</p>
              <a href={`${wppBase}${encodeURIComponent('Olá! Gostaria de informações sobre doces para eventos.')}`}
                target="_blank" rel="noopener noreferrer"
                className="self-start inline-flex items-center gap-3 bg-rose-dark text-white font-sans font-medium text-[0.7rem] tracking-[0.15em] uppercase px-10 py-4 rounded-full hover:bg-rose-deep hover:scale-[1.03] transition-all duration-300 shadow-lg shadow-rose-dark/20">
                Falar com a equipe
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          </div>
        </section>

        {/* ───────────────── CONDIÇÕES GERAIS ───────────────── */}
        <section className="relative py-24 bg-white overflow-hidden">
          <div className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-gradient-to-br from-rose/15 via-rose-pale/20 to-transparent blur-3xl pointer-events-none blob-pulse opacity-40" />

          <div className="max-w-5xl mx-auto px-6 relative z-10">
            <div className="reveal text-center mb-12">
              <p className="text-[0.65rem] tracking-[0.4em] uppercase text-rose-dark font-sans font-medium mb-3">Informações importantes</p>
              <h2 className="font-serif text-3xl md:text-5xl text-primary mb-5">Condições Gerais</h2>
              <div className="flex items-center justify-center gap-4">
                <div className="w-12 h-px bg-gradient-to-r from-transparent to-rose-dark/40" />
                <svg className="w-2.5 h-2.5 text-rose-dark/40" viewBox="0 0 12 12" fill="currentColor">
                  <path d="M6 0L7.5 4.5L12 6L7.5 7.5L6 12L4.5 7.5L0 6L4.5 4.5Z" />
                </svg>
                <div className="w-12 h-px bg-gradient-to-l from-transparent to-rose-dark/40" />
              </div>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {[
                {
                  titulo: 'Confirmação',
                  texto: 'Evento confirmado mediante pagamento via PIX.',
                  icon: <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>,
                },
                {
                  titulo: 'Antecedência',
                  texto: 'Reserve com antecedência para garantir disponibilidade.',
                  icon: <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" /></svg>,
                },
                {
                  titulo: 'Itens externos',
                  texto: 'Consulte antes de trazer balões ou itens externos.',
                  icon: <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z" /></svg>,
                },
                {
                  titulo: 'Flexibilidade',
                  texto: 'Opções flexíveis — fale conosco.',
                  icon: <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75" /></svg>,
                },
              ].map((c) => (
                <div key={c.titulo} className="reveal card-glow bg-base border border-rose/15 rounded-[1.5rem] p-6 group text-center">
                  <div className="w-10 h-10 rounded-full bg-rose-pale/50 flex items-center justify-center mx-auto mb-4 text-rose-dark/60 group-hover:text-rose-dark group-hover:bg-rose-pale transition-all">
                    {c.icon}
                  </div>
                  <p className="text-[0.6rem] tracking-[0.2em] uppercase text-rose-dark font-sans font-medium mb-2">{c.titulo}</p>
                  <p className="text-ink-2 text-sm font-sans leading-relaxed">{c.texto}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ───────────────── BACK LINK ───────────────── */}
        <div className="text-center pb-24 pt-4 bg-white">
          <Link
            href="/#catalogo"
            className="btn-shine inline-flex items-center gap-3 px-10 py-4 rounded-full border border-rose-dark/20 bg-base text-rose-dark font-sans font-medium text-[0.7rem] tracking-[0.14em] uppercase hover:bg-rose-dark hover:text-white hover:border-rose-dark transition-all duration-400 shadow-sm hover:shadow-lg hover:shadow-rose-dark/15"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
            Voltar ao Catálogo
          </Link>
        </div>
      </main>
      <Footer />
    </>
  )
}
