import Link from "next/link"
import Image from "next/image"
import { siteConfig } from "@/lib/data"
import Nav from "@/components/Nav"
import Footer from "@/components/Footer"
import RevealInit from "@/components/RevealInit"

const wppBase = `https://wa.me/${siteConfig.whatsapp}?text=`

const buques = [
  {
    nome: "Renoir",
    tipo: "Buquê Pequeno",
    preco: 487,
    composicao: "Mix de Flores",
    detalhes: "10 hastes + folhagens",
    paleta: "Paleta de cores à escolha",
    fotoPrincipal: "/images/buques-noiva/renoir-1.webp",
    galeria: [
      "/images/buques-noiva/renoir-2.webp",
      "/images/buques-noiva/renoir-3.webp",
      "/images/buques-noiva/renoir-4.webp",
    ],
    descricao: "Composição delicada e clean — perfeita para civis, mini weddings e damas de honra.",
  },
  {
    nome: "Rousseau",
    tipo: "Buquê Pequeno",
    preco: 598,
    composicao: "Mix de Flores",
    detalhes: "15 hastes incluindo flores nobres + folhagens",
    paleta: "Paleta de cores à escolha",
    fotoPrincipal: "/images/buques-noiva/rousseau-1.webp",
    galeria: [
      "/images/buques-noiva/rousseau-2.jpg",
      "/images/buques-noiva/rousseau-3.jpg",
      "/images/buques-noiva/rousseau-4.webp",
    ],
    descricao: "Volume e personalidade com flores nobres — composição clássica e cheia de movimento.",
  },
  {
    nome: "Matisse",
    tipo: "Buquê Médio",
    preco: 920,
    composicao: "Mix de Flores Nobres",
    detalhes: "25 hastes de flores nobres + folhagens",
    paleta: "Paleta de cores à escolha",
    fotoPrincipal: "/images/buques-noiva/matisse-1.webp",
    galeria: [
      "/images/buques-noiva/matisse-2.jpg",
      "/images/buques-noiva/matisse-3.jpg",
    ],
    descricao: "Composição ampla, sofisticada — flores nobres em arranjo de impacto para o altar.",
  },
  {
    nome: "Monet",
    tipo: "Buquê Grande",
    preco: 1490,
    composicao: "Mix de Flores Nobres",
    detalhes: "38 hastes de flores nobres + folhagens",
    paleta: "Paleta de cores à escolha",
    fotoPrincipal: "/images/buques-noiva/monet-1.webp",
    galeria: [
      "/images/buques-noiva/monet-2.webp",
      "/images/buques-noiva/monet-3.webp",
    ],
    descricao: "O statement piece — composição imponente para grandes celebrações e cerimônias formais.",
  },
]

const galeriaGeral = [
  "/images/buques-noiva/renoir-2.webp",
  "/images/buques-noiva/rousseau-2.jpg",
  "/images/buques-noiva/matisse-2.jpg",
  "/images/buques-noiva/monet-2.webp",
  "/images/buques-noiva/renoir-3.webp",
  "/images/buques-noiva/rousseau-3.jpg",
  "/images/buques-noiva/matisse-3.jpg",
  "/images/buques-noiva/monet-3.webp",
  "/images/buques-noiva/rousseau-4.webp",
]

const cuidados = [
  {
    titulo: "Cuidados",
    texto: "Ao receber, remova a embalagem e corte os caules em diagonal (~2cm). Coloque ~10cm de água fresca no vaso e troque a cada 2 dias.",
  },
  {
    titulo: "Paleta",
    texto: "Trabalhamos para entregar a paleta e espécies definidas, mas como flores são sazonais podem ser necessárias substituições dentro do nosso padrão.",
  },
  {
    titulo: "Sazonalidade",
    texto: "Variações naturais e regionais podem alterar o produto. As fotos são referência de tamanho — não das espécies exatas.",
  },
]

const comoEncomendar = [
  {
    titulo: "Consulta",
    texto: "Compartilhe data, estilo do casamento, cores do vestido e referências pelo WhatsApp.",
  },
  {
    titulo: "Projeto sob medida",
    texto: "Desenhamos juntas a composição, espécies, paleta e acabamento do buquê.",
  },
  {
    titulo: "Antecedência",
    texto: "Recomendamos no mínimo 30 dias para garantir disponibilidade das flores escolhidas.",
  },
  {
    titulo: "Entrega & retirada",
    texto: "Buquê preparado no dia da cerimônia — entregamos no local ou em nossa casa do Jd. Esplanada.",
  },
]

function formatPrice(p: number) {
  return p.toLocaleString("pt-BR", { minimumFractionDigits: 0, maximumFractionDigits: 0 })
}

export default function BuquesNoivaPage() {
  return (
    <>
      <RevealInit />
      <Nav />
      <main className="min-h-screen bg-base text-primary">

        {/* ── Hero ── */}
        <section data-nav-dark className="relative pt-44 pb-32 px-6 overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div className="bg-drift absolute inset-0">
              <Image
                src="/images/buques-noiva/hero-buques.webp"
                alt="Buquês de noiva Lady Laura Atelier"
                fill
                className="object-cover"
                priority
                sizes="100vw"
              />
            </div>
          </div>

          <div className="absolute inset-0 bg-gradient-to-b from-black/45 via-black/25 to-black/65" />
          <div className="absolute inset-0 bg-gradient-to-r from-rose-deep/20 via-transparent to-rose-deep/15" />
          <div
            className="absolute inset-0 pointer-events-none"
            style={{ background: 'radial-gradient(ellipse at center, transparent 40%, rgba(0,0,0,0.4) 100%)' }}
          />

          <div className="relative z-10 max-w-4xl mx-auto text-center">
            <p className="text-[0.65rem] tracking-[0.5em] uppercase text-white/50 font-sans mb-5 opacity-0 animate-[fadeUp_1s_0.2s_ease_forwards]">
              Collection Spéciale
            </p>
            <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl text-white mb-7 opacity-0 animate-[fadeUp_1s_0.4s_ease_forwards]">
              Buquês de Noiva
            </h1>

            <div className="flex items-center justify-center gap-5 mb-8 opacity-0 animate-[fadeUp_0.8s_0.6s_ease_forwards]">
              <div className="w-16 h-px bg-gradient-to-r from-transparent to-white/30" />
              <div className="w-1.5 h-1.5 rounded-full bg-rose-dark/60" />
              <div className="w-16 h-px bg-gradient-to-l from-transparent to-white/30" />
            </div>

            <p className="text-white/75 font-sans font-light text-base sm:text-lg max-w-xl mx-auto leading-relaxed opacity-0 animate-[fadeUp_0.8s_0.8s_ease_forwards]">
              Buquês exclusivos e personalizados — traduzimos em flores a delicadeza, a personalidade e o estilo de cada noiva.
            </p>
          </div>
        </section>

        {/* ── Intro ── */}
        <section className="relative max-w-4xl mx-auto px-6 py-24 text-center">
          <div className="absolute -top-32 -left-40 w-[400px] h-[400px] bg-rose-pale/40 rounded-full blur-[120px] pointer-events-none blob-pulse" />
          <div className="absolute -bottom-32 -right-40 w-[400px] h-[400px] bg-rose/15 rounded-full blur-[120px] pointer-events-none blob-pulse" />

          <div className="reveal relative">
            <p className="text-[0.65rem] tracking-[0.4em] uppercase text-rose-dark font-sans font-medium mb-3">Notre savoir-faire</p>
            <h2 className="font-serif text-3xl md:text-4xl text-primary mb-6">Cada flor escolhida a dedo</h2>
            <div className="flex items-center justify-center gap-4 mb-8">
              <div className="w-12 h-px bg-gradient-to-r from-transparent to-rose-dark/40" />
              <svg className="w-2.5 h-2.5 text-rose-dark/40" viewBox="0 0 12 12" fill="currentColor">
                <path d="M6 0L7.5 4.5L12 6L7.5 7.5L6 12L4.5 7.5L0 6L4.5 4.5Z" />
              </svg>
              <div className="w-12 h-px bg-gradient-to-l from-transparent to-rose-dark/40" />
            </div>
            <div className="space-y-4 text-ink-2 font-sans leading-[1.9] text-[0.95rem] max-w-2xl mx-auto">
              <p>
                Os buquês de noiva Lady Laura são criados sob medida, alinhando a estética do vestido, o estilo do casamento e a personalidade de cada noiva.
              </p>
              <p>
                Quatro composições principais, todas com paleta de cores à escolha — do civil ao grande casamento.
              </p>
            </div>
          </div>
        </section>

        {/* ── Buquês (4 sizes) ── */}
        <section className="relative bg-white py-28 overflow-hidden">
          <div className="absolute -top-40 -left-40 w-80 h-80 bg-rose-pale/60 rounded-full blur-[100px] pointer-events-none" />
          <div className="absolute -bottom-32 -right-24 w-72 h-72 bg-rose/15 rounded-full blur-[100px] pointer-events-none blob-pulse" />

          <div className="max-w-7xl mx-auto px-6">
            <div className="reveal mb-16 text-center">
              <p className="text-[0.65rem] tracking-[0.4em] uppercase text-rose-dark font-sans font-medium mb-3">Nos Compositions</p>
              <h2 className="font-serif text-3xl md:text-5xl text-primary mb-5">Quatro tamanhos, infinitas possibilidades</h2>
              <div className="ornament mb-5">
                <svg className="w-2.5 h-2.5 text-rose-dark/40" viewBox="0 0 12 12" fill="currentColor">
                  <path d="M6 0L7.5 4.5L12 6L7.5 7.5L6 12L4.5 7.5L0 6L4.5 4.5Z" />
                </svg>
              </div>
              <p className="text-ink-2 font-sans leading-relaxed max-w-xl mx-auto">
                Do clássico ao imponente — composições pensadas para cada estilo de cerimônia.
              </p>
            </div>

            <div className="space-y-24">
              {buques.map((b, i) => {
                const reverse = i % 2 === 1
                return (
                  <div
                    key={b.nome}
                    className="reveal grid lg:grid-cols-12 gap-8 lg:gap-12 items-center"
                  >
                    {/* Galeria de fotos */}
                    <div className={`lg:col-span-7 ${reverse ? 'lg:order-2' : ''}`}>
                      <div className="grid grid-cols-1 md:grid-cols-12 gap-3">
                        {/* Foto principal */}
                        <div className="md:col-span-12 relative aspect-[4/5] sm:aspect-[16/11] rounded-[2rem] overflow-hidden shadow-xl shadow-rose/15 img-hover group">
                          <Image
                            src={b.fotoPrincipal}
                            alt={`${b.tipo} ${b.nome}`}
                            fill
                            priority={i === 0}
                            className="object-cover"
                            sizes="(max-width: 1024px) 100vw, 60vw"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                          {/* Price pill */}
                          <div className="absolute top-5 right-5 backdrop-blur-md bg-white/80 border border-white/40 rounded-full px-5 py-2.5 shadow-lg shadow-black/10">
                            <p className="text-[0.55rem] tracking-[0.3em] uppercase text-rose-dark/70 font-sans font-medium">A partir de</p>
                            <p className="font-serif text-xl text-primary leading-tight">R$ {formatPrice(b.preco)}</p>
                          </div>
                        </div>

                        {/* Thumbnails */}
                        {b.galeria.map((foto, j) => (
                          <div
                            key={j}
                            className={`relative aspect-square md:aspect-[4/5] rounded-[1.25rem] overflow-hidden shadow-md shadow-rose/10 img-hover group ${
                              b.galeria.length === 3
                                ? 'md:col-span-4'
                                : 'md:col-span-6'
                            }`}
                          >
                            <Image
                              src={foto}
                              alt={`${b.nome} detalhe ${j + 1}`}
                              fill
                              className="object-cover"
                              sizes="(max-width: 768px) 100vw, 30vw"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Info */}
                    <div className={`lg:col-span-5 ${reverse ? 'lg:order-1' : ''}`}>
                      <p className="text-[0.6rem] tracking-[0.4em] uppercase text-rose-dark font-sans font-medium mb-3">{b.tipo}</p>
                      <h3 className="font-serif text-4xl md:text-5xl text-primary mb-4 italic">{b.nome}</h3>
                      <div className="w-12 h-px bg-rose-dark/40 mb-6" />

                      <p className="text-ink-2 font-sans text-[0.95rem] leading-[1.8] mb-7">
                        {b.descricao}
                      </p>

                      <div className="space-y-4 mb-8 pb-8 border-b border-rose/10">
                        <div className="flex items-baseline justify-between gap-4">
                          <span className="text-[0.6rem] tracking-[0.25em] uppercase text-ink-3 font-sans">Composição</span>
                          <span className="text-sm text-primary font-sans font-medium text-right">{b.composicao}</span>
                        </div>
                        <div className="flex items-baseline justify-between gap-4">
                          <span className="text-[0.6rem] tracking-[0.25em] uppercase text-ink-3 font-sans">Hastes</span>
                          <span className="text-sm text-primary font-sans font-medium text-right">{b.detalhes}</span>
                        </div>
                        <div className="flex items-baseline justify-between gap-4">
                          <span className="text-[0.6rem] tracking-[0.25em] uppercase text-ink-3 font-sans">Paleta</span>
                          <span className="text-sm text-primary font-sans font-medium text-right">{b.paleta}</span>
                        </div>
                        <div className="flex items-baseline justify-between gap-4">
                          <span className="text-[0.6rem] tracking-[0.25em] uppercase text-ink-3 font-sans">Valor</span>
                          <span className="text-2xl font-serif text-rose-dark text-right">R$ {formatPrice(b.preco)}</span>
                        </div>
                      </div>

                      <a
                        href={`${wppBase}${encodeURIComponent(`Olá! Gostaria de orçar o Buquê ${b.nome} (${b.tipo}).`)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-shine inline-flex items-center gap-3 bg-rose-dark text-white font-sans font-medium text-[0.7rem] tracking-[0.15em] uppercase px-8 py-4 rounded-full hover:bg-rose-deep hover:scale-[1.02] transition-all duration-300 shadow-lg shadow-rose-dark/20"
                      >
                        Orçar este buquê
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </a>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* ── Galeria geral ── */}
        <section className="relative py-28 overflow-hidden">
          <div className="absolute -top-32 right-0 w-[400px] h-[400px] bg-rose-pale/40 rounded-full blur-[120px] pointer-events-none blob-pulse" />

          <div className="max-w-7xl mx-auto px-6 relative">
            <div className="reveal text-center mb-14">
              <p className="text-[0.65rem] tracking-[0.4em] uppercase text-rose-dark font-sans font-medium mb-3">Nos Créations</p>
              <h2 className="font-serif text-3xl md:text-5xl text-primary mb-5">Galeria de Buquês</h2>
              <div className="flex items-center justify-center gap-4 mb-5">
                <div className="w-12 h-px bg-gradient-to-r from-transparent to-rose-dark/40" />
                <svg className="w-2.5 h-2.5 text-rose-dark/40" viewBox="0 0 12 12" fill="currentColor">
                  <path d="M6 0L7.5 4.5L12 6L7.5 7.5L6 12L4.5 7.5L0 6L4.5 4.5Z" />
                </svg>
                <div className="w-12 h-px bg-gradient-to-l from-transparent to-rose-dark/40" />
              </div>
              <p className="text-ink-2 font-sans leading-relaxed max-w-xl mx-auto">
                Uma seleção de composições assinadas Lady Laura — cada buquê é único e feito sob medida.
              </p>
            </div>

            <div className="reveal grid grid-cols-2 md:grid-cols-3 gap-4">
              {galeriaGeral.map((foto, i) => (
                <div
                  key={i}
                  className="relative aspect-[3/4] rounded-[1.5rem] overflow-hidden img-hover shadow-sm shadow-rose/10 group"
                >
                  <Image
                    src={foto}
                    alt={`Buquê Lady Laura ${i + 1}`}
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

        {/* ── Cuidados / Atenção ── */}
        <section className="relative bg-white py-24 overflow-hidden">
          <div className="absolute left-1/2 -translate-x-1/2 top-0 w-[500px] h-[500px] rounded-full bg-gold-pale/40 blur-3xl pointer-events-none -translate-y-1/2" />

          <div className="max-w-5xl mx-auto px-6 relative">
            <div className="reveal text-center mb-12">
              <p className="text-[0.65rem] tracking-[0.4em] uppercase text-rose-dark font-sans font-medium mb-3">Atenção</p>
              <h2 className="font-serif text-3xl md:text-4xl text-primary mb-4">Cuidados & sazonalidade</h2>
              <div className="flex items-center justify-center gap-4">
                <div className="w-12 h-px bg-gradient-to-r from-transparent to-rose-dark/40" />
                <svg className="w-2.5 h-2.5 text-rose-dark/40" viewBox="0 0 12 12" fill="currentColor">
                  <path d="M6 0L7.5 4.5L12 6L7.5 7.5L6 12L4.5 7.5L0 6L4.5 4.5Z" />
                </svg>
                <div className="w-12 h-px bg-gradient-to-l from-transparent to-rose-dark/40" />
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-5">
              {cuidados.map((c, i) => (
                <div
                  key={c.titulo}
                  className="reveal card-lift relative bg-base/60 backdrop-blur-sm border border-rose/15 rounded-[1.5rem] p-7 hover:border-rose-dark/30 hover:shadow-xl hover:shadow-rose/15 transition-all duration-500"
                  style={{ transitionDelay: `${i * 0.08}s` }}
                >
                  <p className="text-[0.6rem] tracking-[0.3em] uppercase text-rose-dark font-sans font-semibold mb-3">{c.titulo}</p>
                  <div className="w-8 h-px bg-rose-dark/30 mb-4" />
                  <p className="text-ink-2 text-sm font-sans leading-[1.7]">{c.texto}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Como encomendar ── */}
        <section className="relative py-24 overflow-hidden">
          <div className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-gradient-to-br from-rose/15 via-rose-pale/20 to-transparent blur-3xl pointer-events-none blob-pulse opacity-40" />

          <div className="max-w-5xl mx-auto px-6 relative z-10">
            <div className="reveal text-center mb-12">
              <p className="text-[0.65rem] tracking-[0.4em] uppercase text-rose-dark font-sans font-medium mb-3">Comment commander</p>
              <h2 className="font-serif text-3xl md:text-5xl text-primary mb-5">Como encomendar</h2>
              <div className="flex items-center justify-center gap-4">
                <div className="w-12 h-px bg-gradient-to-r from-transparent to-rose-dark/40" />
                <svg className="w-2.5 h-2.5 text-rose-dark/40" viewBox="0 0 12 12" fill="currentColor">
                  <path d="M6 0L7.5 4.5L12 6L7.5 7.5L6 12L4.5 7.5L0 6L4.5 4.5Z" />
                </svg>
                <div className="w-12 h-px bg-gradient-to-l from-transparent to-rose-dark/40" />
              </div>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {comoEncomendar.map((c, i) => {
                const icons = [
                  <svg key="i" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 01-.825-.242m9.345-8.334a2.126 2.126 0 00-.476-.095 48.64 48.64 0 00-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0011.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155" />
                  </svg>,
                  <svg key="i" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
                  </svg>,
                  <svg key="i" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
                  </svg>,
                  <svg key="i" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                  </svg>,
                ]
                return (
                  <div
                    key={c.titulo}
                    className="reveal card-lift relative bg-gradient-to-br from-rose-pale via-rose-bg to-rose-pale/60 border border-rose/25 rounded-[1.5rem] p-6 hover:border-rose-dark/30 hover:shadow-xl hover:shadow-rose/15 transition-all duration-500 overflow-hidden group"
                    style={{ transitionDelay: `${i * 0.08}s` }}
                  >
                    <div className="absolute -top-12 -right-12 w-28 h-28 bg-rose/15 rounded-full blur-2xl group-hover:bg-rose/25 transition-all duration-700" />
                    <div className="relative w-12 h-12 rounded-full bg-white/80 backdrop-blur-sm flex items-center justify-center shadow-sm shadow-rose/15 text-rose-dark mb-4 group-hover:scale-110 transition-transform duration-500">
                      {icons[i]}
                    </div>
                    <p className="relative text-[0.6rem] tracking-[0.3em] uppercase text-rose-dark font-sans font-semibold mb-2">{c.titulo}</p>
                    <div className="relative w-8 h-px bg-rose-dark/30 mb-3" />
                    <p className="relative text-ink-2 text-sm font-sans leading-relaxed">{c.texto}</p>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* ── CTA ── */}
        <section className="relative py-24 overflow-hidden">
          <div className="absolute -bottom-20 -left-32 w-[500px] h-[500px] bg-rose-pale/40 rounded-full blur-[150px] pointer-events-none blob-pulse" />

          <div className="max-w-4xl mx-auto px-6 relative text-center">
            <div className="reveal">
              <p className="text-[0.65rem] tracking-[0.4em] uppercase text-rose-dark font-sans font-medium mb-3">Sur mesure</p>
              <h2 className="font-serif text-3xl md:text-4xl text-primary mb-6">Solicite o seu buquê exclusivo</h2>
              <p className="text-ink-2 font-sans leading-[1.9] text-[0.95rem] max-w-2xl mx-auto mb-10">
                Cada buquê é único e pensado para traduzir o seu dia. Fale com nossa equipe pelo WhatsApp e vamos criar juntas o buquê perfeito para a sua celebração.
              </p>
              <a
                href={`${wppBase}${encodeURIComponent('Olá! Gostaria de solicitar um orçamento para buquê de noiva.')}`}
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

        {/* ── Back link ── */}
        <div className="reveal text-center py-20">
          <Link
            href="/"
            className="btn-shine inline-flex items-center gap-3 px-10 py-4 rounded-full border border-rose-dark/30 text-rose-dark text-[0.7rem] font-semibold tracking-[0.18em] uppercase hover:bg-rose-dark hover:text-white hover:border-rose-dark transition-all duration-400 font-sans shadow-sm hover:shadow-lg hover:shadow-rose/15"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
            Voltar ao Início
          </Link>
        </div>
      </main>
      <Footer />
    </>
  )
}
