import Link from "next/link"
import Image from "next/image"
import { siteConfig } from "@/lib/data"
import Nav from "@/components/Nav"
import Footer from "@/components/Footer"
import RevealInit from "@/components/RevealInit"
import EventoFormatoCard, { type EventoFormato } from "@/components/EventoFormatoCard"

const wppBase = `https://wa.me/${siteConfig.whatsapp}?text=`

const eventos: EventoFormato[] = [
  {
    nome: 'Petit Comité',
    subtitulo: 'Reserva especial',
    capacidade: 'Até 10 pessoas',
    fotos: [
      '/images/eventos/petit-comite.webp',
      '/images/eventos/petit-comite-1.webp',
      '/images/eventos/petit-comite-2.webp',
    ],
    itens: [
      '1 Torta ou Bolo Sweet Home',
      '1 Arranjo Floral em cristal',
      '1 Espumante em champanheira',
      'Mesa posta completa',
      'Até 3 horas de reserva',
    ],
    infos: [
      { label: 'Duração', value: '3 horas' },
      { label: 'Dias', value: 'Seg a Dom' },
      { label: 'Pagamento', value: '100% PIX' },
    ],
    cta: 'Reservar Petit Comité',
    wppMsg: 'Olá! Gostaria de reservar o Petit Comité.',
    accent: 'rose',
  },
  {
    nome: 'Petit Jardin',
    subtitulo: 'Jardim exclusivo',
    capacidade: 'Até 40 pessoas',
    fotos: [
      '/images/eventos/petit-jardin.jpg',
      '/images/eventos/petit-jardin-1.webp',
      '/images/eventos/petit-jardin-2.jpg',
      '/images/eventos/petit-jardin-3.webp',
    ],
    itens: [
      'Menu de brunch completo',
      'Valet',
      'Decoração com flores naturais',
      'Jardim reservado',
      'Até 4 horas',
    ],
    infos: [
      { label: 'Duração', value: '4 horas' },
      { label: 'Menu', value: 'Brunch' },
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
    fotos: [
      '/images/eventos/grand-royale.jpg',
      '/images/eventos/grand-royale-1.jpg',
      '/images/eventos/grand-royale-2.jpg',
      '/images/eventos/grand-royale-3.jpg',
      '/images/eventos/grand-royale-4.jpg',
    ],
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
      { label: 'Menu', value: 'Jantar' },
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

        {/* ───────────────── O QUE FAZEMOS ───────────────── */}
        <section className="relative py-28 overflow-hidden">
          <div className="absolute -top-32 -left-32 w-[500px] h-[500px] bg-rose-pale/15 rounded-full blur-[120px] pointer-events-none blob-pulse" />

          <div className="max-w-6xl mx-auto px-6 relative z-10">
            <div className="reveal text-center mb-16">
              <p className="text-[0.65rem] tracking-[0.4em] uppercase text-rose-dark font-sans font-medium mb-3">Nos Services</p>
              <h2 className="font-serif text-3xl md:text-5xl text-primary mb-5">O que fazemos</h2>
              <div className="flex items-center justify-center gap-4 mb-6">
                <div className="w-12 h-px bg-gradient-to-r from-transparent to-rose-dark/40" />
                <svg className="w-2.5 h-2.5 text-rose-dark/40" viewBox="0 0 12 12" fill="currentColor">
                  <path d="M6 0L7.5 4.5L12 6L7.5 7.5L6 12L4.5 7.5L0 6L4.5 4.5Z" />
                </svg>
                <div className="w-12 h-px bg-gradient-to-l from-transparent to-rose-dark/40" />
              </div>
              <p className="font-serif text-xl md:text-2xl text-primary mb-2">Eventos Internos e Externos</p>
              <p className="text-ink-2 font-sans text-base">Casamentos, corporativos &amp; eventos sociais</p>
            </div>

            {/* Eventos em nossa casa do Jd. Esplanada */}
            <div className="reveal mb-20 grid md:grid-cols-2 gap-10 items-center">
              <div className="relative aspect-[4/5] rounded-[2rem] overflow-hidden shadow-xl shadow-rose/15 img-hover order-last md:order-first">
                <Image
                  src="/images/eventos/eventos-casa-esplanada.jpg"
                  alt="Eventos em nossa casa do Jd. Esplanada"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <div>
                <p className="text-[0.6rem] tracking-[0.4em] uppercase text-rose-dark font-sans font-medium mb-3">Nossa casa</p>
                <h3 className="font-serif text-2xl md:text-4xl text-primary mb-6 leading-tight">Eventos em nossa casa do Jd. Esplanada</h3>
                <div className="w-12 h-px bg-rose-dark/40 mb-6" />
                <div className="space-y-4 text-ink-2 font-sans leading-[1.9] text-[0.95rem]">
                  <p>Na nossa casa do Jardim Esplanada, cada celebração é pensada como uma experiência completa e memorável. Recebemos desde brunches corporativos até casamentos, batizados e eventos sociais, sempre com um cuidado especial em cada detalhe.</p>
                  <p>Oferecemos uma estrutura completa, que inclui o espaço, decoração personalizada, menu cuidadosamente elaborado, além de bolo e doces — tudo harmonizado para traduzir o estilo e o momento de cada cliente.</p>
                  <p>Nossa equipe cuida de toda a organização para que você tenha apenas uma preocupação: viver e aproveitar intensamente o seu momento feliz.</p>
                </div>
              </div>
            </div>

            {/* Mesa de Doces para Casamentos & Aniversários de 15 anos */}
            <div className="reveal mb-20 grid md:grid-cols-2 gap-10 items-center">
              <div>
                <p className="text-[0.6rem] tracking-[0.4em] uppercase text-rose-dark font-sans font-medium mb-3">Curadoria artesanal</p>
                <h3 className="font-serif text-2xl md:text-4xl text-primary mb-6 leading-tight">Mesa de Doces para Casamentos &amp; Aniversários de 15 anos</h3>
                <div className="w-12 h-px bg-rose-dark/40 mb-6" />
                <div className="space-y-4 text-ink-2 font-sans leading-[1.9] text-[0.95rem]">
                  <p>Desenvolvemos mesas de doces completas para casamentos, aniversários de 15 anos e eventos corporativos, com curadoria artesanal e atenção minuciosa a cada detalhe.</p>
                  <p>Cada projeto é pensado de forma personalizada, unindo estética, equilíbrio e sabor, para compor uma mesa elegante e alinhada ao estilo da celebração.</p>
                  <p>Atendemos todo o estado de São Paulo e Rio de Janeiro, levando nossa identidade e cuidado a eventos que pedem excelência e encantamento.</p>
                </div>
              </div>
              <div className="relative aspect-[4/5] rounded-[2rem] overflow-hidden shadow-xl shadow-rose/15 img-hover">
                <Image
                  src="/images/eventos/casal-doce.jpg"
                  alt="Casal comendo doce — mesa de doces para casamentos"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </div>

            {/* Decoração & Mesa de Doces em Restaurantes */}
            <div className="reveal mb-12 grid md:grid-cols-2 gap-10 items-center">
              <div className="relative aspect-[4/5] rounded-[2rem] overflow-hidden shadow-xl shadow-rose/15 img-hover order-last md:order-first">
                <Image
                  src="/images/eventos/decoracao-restaurante.jpg"
                  alt="Decoração e mesa de doces em restaurantes"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <div>
                <p className="text-[0.6rem] tracking-[0.4em] uppercase text-rose-dark font-sans font-medium mb-3">Eventos intimistas</p>
                <h3 className="font-serif text-2xl md:text-4xl text-primary mb-6 leading-tight">Decoração &amp; Mesa de Doces em Restaurantes</h3>
                <div className="w-12 h-px bg-rose-dark/40 mb-6" />
                <div className="space-y-4 text-ink-2 font-sans leading-[1.9] text-[0.95rem]">
                  <p>Desenvolvemos projetos de decoração floral e mesas de doces especiais para eventos realizados em restaurantes parceiros, ideais para celebrações intimistas, pequenos eventos e mini weddings.</p>
                  <p>Cada composição é pensada de forma personalizada, respeitando o estilo do ambiente e a proposta da ocasião, criando uma atmosfera harmoniosa, acolhedora e sofisticada.</p>
                  <p>Cuidamos de todos os detalhes para transformar o espaço do restaurante em um cenário único e memorável para o seu evento.</p>
                </div>
              </div>
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
              <p className="text-ink-2 font-sans italic text-base max-w-xl mx-auto">Para realização do seu evento em nossa casa do Jd. Esplanada.</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
              {eventos.map((ev, i) => (
                <EventoFormatoCard
                  key={ev.nome}
                  formato={ev}
                  wppBase={wppBase}
                  delay={i * 0.1}
                />
              ))}
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
              ].map((c, i) => (
                <div
                  key={c.titulo}
                  className="reveal card-lift relative bg-gradient-to-br from-rose-pale via-rose-bg to-rose-pale/60 border border-rose/25 rounded-[1.5rem] p-6 hover:border-rose-dark/30 hover:shadow-xl hover:shadow-rose/15 transition-all duration-500 overflow-hidden group"
                  style={{ transitionDelay: `${i * 0.08}s` }}
                >
                  <div className="absolute -top-12 -right-12 w-28 h-28 bg-rose/15 rounded-full blur-2xl group-hover:bg-rose/25 transition-all duration-700" />
                  <div className="relative w-12 h-12 rounded-full bg-white/80 backdrop-blur-sm flex items-center justify-center shadow-sm shadow-rose/15 text-rose-dark mb-4 group-hover:scale-110 transition-transform duration-500">
                    {c.icon}
                  </div>
                  <p className="relative text-[0.6rem] tracking-[0.3em] uppercase text-rose-dark font-sans font-semibold mb-2">{c.titulo}</p>
                  <div className="relative w-8 h-px bg-rose-dark/30 mb-3" />
                  <p className="relative text-ink-2 text-sm font-sans leading-relaxed">{c.texto}</p>
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
