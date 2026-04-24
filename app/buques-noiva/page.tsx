import Link from "next/link"
import Image from "next/image"
import { siteConfig } from "@/lib/data"
import Nav from "@/components/Nav"
import Footer from "@/components/Footer"
import RevealInit from "@/components/RevealInit"
import HorizontalScroll from "@/components/HorizontalScroll"

const wppBase = `https://wa.me/${siteConfig.whatsapp}?text=`

const estilos = [
  {
    nome: "Buquê Clássico",
    sub: "Redondo & atemporal",
    descricao: "Formato redondo simétrico com rosas nobres e folhagens delicadas — a elegância tradicional que nunca sai de moda.",
    foto: "/images/flores/arranjo-cora.webp",
  },
  {
    nome: "Buquê Cascata",
    sub: "Movimento & romance",
    descricao: "Flores que desenham uma cascata suave a partir das mãos da noiva — um gesto romântico para vestidos longos e celebrações imponentes.",
    foto: "/images/flores/arranjo-cherie.webp",
  },
  {
    nome: "Buquê Campestre",
    sub: "Natural & orgânico",
    descricao: "Flores do campo em composição livre e despojada, com folhagens e ramos — ideal para casamentos ao ar livre e mini weddings.",
    foto: "/images/flores/arranjo-diamond.webp",
  },
  {
    nome: "Buquê Rosas Nobres",
    sub: "Monocromático & sofisticado",
    descricao: "Composição só com rosas nobres — brancas, pêssego, rosé ou vermelhas — para um resultado clean e sofisticado.",
    foto: "/images/flores/rosas-grande.webp",
  },
  {
    nome: "Buquê Pastel",
    sub: "Tons suaves & delicados",
    descricao: "Paleta em tons pastel — rosé, champagne, branco e lavanda — para noivas que buscam delicadeza e romantismo na fotografia.",
    foto: "/images/flores/arranjo-amor.webp",
  },
  {
    nome: "Buquê Petit",
    sub: "Minimalista & moderno",
    descricao: "Formato compacto e minimalista — ideal para noivas contemporâneas, civil ou damas de honra.",
    foto: "/images/flores/arranjo-paixao.jpg",
  },
  {
    nome: "Buquê de Noiva Box",
    sub: "Presenteável",
    descricao: "Montado em caixa cartonada com alça — perfeito para deslocamentos e cerimônias que precisam do buquê intacto até o altar.",
    foto: "/images/flores/arranjo-box.jpg",
  },
  {
    nome: "Buquê Personalizado",
    sub: "Sob medida",
    descricao: "Criado a partir do seu mood board, cores do vestido e estilo da cerimônia — desenhado a quatro mãos com a noiva.",
    foto: "/images/flores/rosas-personalizado.webp",
  },
]

const galeria = [
  "/images/flores/arranjo-cora.webp",
  "/images/flores/arranjo-cherie.webp",
  "/images/flores/arranjo-diamond.webp",
  "/images/flores/arranjo-amor.webp",
  "/images/flores/arranjo-paixao.jpg",
  "/images/flores/arranjo-box.jpg",
  "/images/flores/rosas-grande.webp",
  "/images/flores/rosas-medio.webp",
  "/images/flores/rosas-personalizado.webp",
]

const comoEncomendar = [
  {
    titulo: "Consulta",
    texto: "Fale conosco pelo WhatsApp compartilhando a data, estilo do casamento, cores do vestido e referências.",
  },
  {
    titulo: "Projeto sob medida",
    texto: "Desenhamos juntas a composição, espécies florais, paleta de cores e acabamento do buquê.",
  },
  {
    titulo: "Antecedência",
    texto: "Recomendamos agendamento com pelo menos 30 dias de antecedência para garantir a disponibilidade das flores escolhidas.",
  },
  {
    titulo: "Entrega & retirada",
    texto: "Buquê preparado no dia da cerimônia com flores frescas selecionadas — entregamos no local ou em nossa casa do Jd. Esplanada.",
  },
]

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
                src="/images/renata-chagas.jpg"
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
                Trabalhamos com flores nobres, selecionadas a cada estação, sempre com o cuidado e a delicadeza que o seu dia merece — do civil à grande cerimônia.
              </p>
            </div>
          </div>
        </section>

        {/* ── Estilos ── */}
        <section className="relative bg-white py-28 overflow-hidden">
          <div className="absolute -top-40 -left-40 w-80 h-80 bg-rose-pale/60 rounded-full blur-[100px] pointer-events-none" />
          <div className="absolute -bottom-32 -right-24 w-72 h-72 bg-rose/15 rounded-full blur-[100px] pointer-events-none blob-pulse" />

          <div className="max-w-7xl mx-auto px-6">
            <div className="reveal mb-14 text-center">
              <p className="text-[0.65rem] tracking-[0.4em] uppercase text-rose-dark font-sans font-medium mb-3">Nos Styles</p>
              <h2 className="font-serif text-2xl md:text-4xl text-primary mb-5">Estilos de Buquê</h2>
              <div className="ornament mb-5">
                <svg className="w-2.5 h-2.5 text-rose-dark/40" viewBox="0 0 12 12" fill="currentColor">
                  <path d="M6 0L7.5 4.5L12 6L7.5 7.5L6 12L4.5 7.5L0 6L4.5 4.5Z" />
                </svg>
              </div>
              <p className="text-ink-2 font-sans leading-relaxed max-w-xl mx-auto">
                Formatos e composições para cada estilo de noiva — todos personalizáveis com a sua paleta preferida.
              </p>
            </div>

            <div className="reveal">
              <HorizontalScroll>
                {estilos.map((e) => (
                  <div
                    key={e.nome}
                    className="card-lift flex-none w-64 sm:w-72 bg-white border border-rose/10 rounded-[1.5rem] overflow-hidden shadow-sm shadow-rose/5 flex flex-col group"
                  >
                    <div className="relative aspect-[3/4] overflow-hidden bg-rose-pale img-hover">
                      <Image
                        src={e.foto}
                        alt={e.nome}
                        fill
                        className="object-cover"
                        sizes="400px"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-rose-deep/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      <div className="absolute bottom-0 inset-x-0 p-5 translate-y-6 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                        <a
                          href={`${wppBase}${encodeURIComponent(`Olá! Gostaria de saber mais sobre o ${e.nome}.`)}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn-shine block text-center text-[0.65rem] tracking-[0.15em] uppercase text-white bg-rose-dark/90 backdrop-blur-sm rounded-full px-5 py-3 hover:bg-rose-deep transition-colors duration-300 font-sans font-medium shadow-lg"
                        >
                          Consultar via WhatsApp
                        </a>
                      </div>
                    </div>
                    <div className="p-5 flex flex-col flex-1">
                      <h4 className="font-serif text-lg text-primary mb-1">{e.nome}</h4>
                      <p className="text-[0.6rem] tracking-[0.2em] uppercase text-rose-dark font-sans mb-3">{e.sub}</p>
                      <p className="text-ink-3 text-sm font-sans leading-relaxed mb-2">{e.descricao}</p>
                      <div className="mt-auto pt-5 border-t border-rose/10">
                        <a
                          href={`${wppBase}${encodeURIComponent(`Olá! Gostaria de saber mais sobre o ${e.nome}.`)}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 text-[0.65rem] tracking-[0.15em] uppercase text-rose-dark font-sans font-medium group-hover:gap-3 transition-all duration-400"
                        >
                          Consultar
                          <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                          </svg>
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              </HorizontalScroll>
            </div>
          </div>
        </section>

        {/* ── Galeria ── */}
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
                Uma seleção de composições florais assinadas Lady Laura — cada buquê é único e feito sob medida.
              </p>
            </div>

            <div className="reveal grid grid-cols-2 md:grid-cols-3 gap-4">
              {galeria.map((foto, i) => (
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

        {/* ── Como encomendar ── */}
        <section className="relative bg-white py-24 overflow-hidden">
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
              {comoEncomendar.map((c, i) => (
                <div key={c.titulo} className="reveal card-glow bg-base border border-rose/15 rounded-[1.5rem] p-6 text-center">
                  <div className="w-10 h-10 rounded-full bg-rose-pale/50 flex items-center justify-center mx-auto mb-4 text-rose-dark font-serif text-lg">
                    {i + 1}
                  </div>
                  <p className="text-[0.6rem] tracking-[0.2em] uppercase text-rose-dark font-sans font-medium mb-2">{c.titulo}</p>
                  <p className="text-ink-2 text-sm font-sans leading-relaxed">{c.texto}</p>
                </div>
              ))}
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
