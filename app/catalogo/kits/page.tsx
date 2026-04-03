import Link from "next/link"
import Image from "next/image"
import { kitsData } from "@/lib/catalog-data"
import Nav from "@/components/Nav"
import Footer from "@/components/Footer"
import RevealInit from "@/components/RevealInit"
import HorizontalScroll from "@/components/HorizontalScroll"

const wppBase = "https://wa.me/5512982910000?text="

function SectionHeader({ label, title, desc }: { label: string; title: string; desc?: string }) {
  return (
    <div className="reveal mb-12">
      <p className="text-[0.65rem] tracking-[0.4em] uppercase text-rose-dark font-sans font-medium mb-3">{label}</p>
      <h2 className="font-serif text-2xl md:text-4xl text-primary mb-5">{title}</h2>
      <div className="flex items-center gap-4 mb-5">
        <div className="w-12 h-px bg-gradient-to-r from-rose-dark to-rose" />
        <svg className="w-2 h-2 text-rose-dark/40" viewBox="0 0 12 12" fill="currentColor">
          <path d="M6 0L7.5 4.5L12 6L7.5 7.5L6 12L4.5 7.5L0 6L4.5 4.5Z" />
        </svg>
        <div className="w-12 h-px bg-gradient-to-l from-rose-dark to-rose" />
      </div>
      {desc && <p className="text-ink-2 font-sans leading-relaxed max-w-xl">{desc}</p>}
    </div>
  )
}

function KitCard({ kit }: { kit: { nome: string; itens: string[]; observacao?: string } }) {
  return (
    <div className="card-lift flex-none w-[18rem] bg-white border border-rose/15 rounded-[1.5rem] overflow-hidden shadow-sm hover:shadow-xl hover:shadow-rose/12 transition-all duration-500 flex flex-col group">
      <div className="relative aspect-[4/3] overflow-hidden bg-gradient-to-br from-rose-pale to-rose-bg">
        <Image src="/images/kits/capa-presentes.jpg" alt={kit.nome} fill className="object-cover group-hover:scale-[1.08] transition-transform duration-700" sizes="300px" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-500">
          <a href={`${wppBase}${encodeURIComponent(`Ola! Gostaria de encomendar o ${kit.nome}.`)}`}
            target="_blank" rel="noopener noreferrer"
            className="btn-shine block text-center text-[0.65rem] tracking-[0.12em] uppercase bg-white/95 text-rose-dark rounded-full px-4 py-2.5 font-sans font-medium backdrop-blur-sm">
            Consultar
          </a>
        </div>
      </div>
      <div className="p-5 flex flex-col flex-1">
        <h4 className="font-serif text-lg text-primary mb-3">{kit.nome}</h4>
        <ul className="space-y-1.5 mb-4 flex-1">
          {kit.itens.map((item, i) => (
            <li key={i} className="flex items-start gap-2 text-sm text-ink-2 font-sans">
              <span className="text-rose-dark mt-1 shrink-0 text-[0.5rem]">&#9670;</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
        {kit.observacao && <p className="text-ink-4 text-xs italic font-sans mb-3">{kit.observacao}</p>}
        <div className="mt-auto pt-4 border-t border-rose/10">
          <a href={`${wppBase}${encodeURIComponent(`Ola! Gostaria de encomendar o ${kit.nome}.`)}`}
            target="_blank" rel="noopener noreferrer"
            className="btn-shine block text-center text-[0.7rem] tracking-[0.12em] uppercase text-rose-dark border border-rose/30 rounded-full px-4 py-2.5 hover:bg-rose-dark hover:text-white hover:border-rose-dark transition-all duration-300 font-sans font-medium">
            Consultar
          </a>
        </div>
      </div>
    </div>
  )
}

export default function KitsPage() {
  const { cafeDaManha, kitsComFlores, kitsSemFlores, latinhasEChocolates, linhaHome, nota } = kitsData

  return (
    <>
      <RevealInit />
      <Nav />
      <main className="min-h-screen bg-base text-primary">
        {/* Hero */}
        <section data-nav-dark className="relative pt-44 pb-32 px-6 overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div className="bg-drift absolute inset-0">
              <Image src="/images/doces/doces-7.webp" alt="Presentes" fill className="object-cover" sizes="100vw" />
            </div>
            <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/25 to-black/60" />
            <div className="absolute inset-0 bg-rose-deep/10" />
            {/* Vignette */}
            <div className="absolute inset-0" style={{ boxShadow: 'inset 0 0 200px rgba(0,0,0,0.3)' }} />
          </div>
          <div className="relative z-10 max-w-4xl mx-auto text-center">
            <p className="text-[0.65rem] tracking-[0.4em] uppercase text-white/60 font-sans mb-4 reveal">Catalogue</p>
            <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl text-white mb-6 reveal">Kits & Presentes</h1>
            <div className="flex items-center justify-center gap-4 mb-6 reveal">
              <div className="w-16 h-px bg-white/30" />
              <svg className="w-2.5 h-2.5 text-white/40" viewBox="0 0 12 12" fill="currentColor">
                <path d="M6 0L7.5 4.5L12 6L7.5 7.5L6 12L4.5 7.5L0 6L4.5 4.5Z" />
              </svg>
              <div className="w-16 h-px bg-white/30" />
            </div>
            <p className="text-white/75 font-sans font-light text-lg max-w-xl mx-auto reveal">{nota}</p>
          </div>
        </section>

        {/* Cafe da Manha */}
        <section className="relative max-w-7xl mx-auto px-6 py-28">
          {/* Decorative blob */}
          <div className="blob-pulse absolute -top-20 -right-32 w-80 h-80 rounded-full bg-rose-pale/50 blur-3xl pointer-events-none" />
          <SectionHeader label="Sp\u00e9cial" title="Caf\u00e9 da Manh\u00e3" desc="Kits completos para um caf\u00e9 da manh\u00e3 inesquec\u00edvel com flores, doces e itens selecionados." />
          <HorizontalScroll>
            {cafeDaManha.map((kit) => <KitCard key={kit.nome} kit={kit} />)}
          </HorizontalScroll>
        </section>

        {/* Kits com Flores */}
        <section className="relative bg-white py-28">
          {/* Decorative blob */}
          <div className="blob-pulse absolute top-10 -left-40 w-96 h-96 rounded-full bg-rose/30 blur-3xl pointer-events-none" />
          <div className="max-w-7xl mx-auto px-6">
            <SectionHeader label="Combin\u00e9s" title="Kits com Flores" desc="Cada kit combina arranjos florais com chocolates, espumantes e doces artesanais." />
            <HorizontalScroll>
              {kitsComFlores.map((kit) => <KitCard key={kit.nome} kit={kit} />)}
            </HorizontalScroll>
          </div>
        </section>

        {/* Kits Doces */}
        <section className="relative max-w-7xl mx-auto px-6 py-28">
          {/* Decorative blob */}
          <div className="blob-pulse absolute -bottom-20 -right-20 w-72 h-72 rounded-full bg-rose-blush/60 blur-3xl pointer-events-none" />
          <SectionHeader label="Douceurs & Vins" title="Kits de Doces & Espumante" desc="Kits especiais de doces e espumantes \u2014 \u00f3timos para qualquer ocasi\u00e3o." />
          <HorizontalScroll>
            {kitsSemFlores.map((kit) => <KitCard key={kit.nome} kit={kit} />)}
          </HorizontalScroll>
        </section>

        {/* Avulsos */}
        <section className="relative bg-white py-28">
          {/* Decorative blob */}
          <div className="blob-pulse absolute top-20 right-0 w-80 h-80 rounded-full bg-rose-pale/40 blur-3xl pointer-events-none" />
          <div className="max-w-7xl mx-auto px-6">
            <SectionHeader label="Pi\u00e8ces Individuelles" title="Latinhas, Chocolates & Doces" desc="Pe\u00e7as avulsas para montar o seu presente perfeito." />
            <HorizontalScroll>
              {latinhasEChocolates.map((p) => (
                <div key={p.nome} className="card-lift flex-none w-64 bg-base border border-rose/15 rounded-[1.5rem] overflow-hidden shadow-sm hover:shadow-xl hover:shadow-rose/12 transition-all duration-500 flex flex-col group">
                  <div className="relative aspect-square overflow-hidden bg-gradient-to-br from-rose-pale to-rose-bg">
                    <Image src="/images/macarons/macarons-caixa-rosa.webp" alt={p.nome} fill className="object-cover group-hover:scale-[1.08] transition-transform duration-700" sizes="260px" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </div>
                  <div className="p-5 flex flex-col flex-1">
                    <h4 className="font-serif text-base text-primary mb-1">{p.nome}</h4>
                    {p.descricao && <p className="text-ink-3 text-sm font-sans leading-relaxed mb-3 flex-1">{p.descricao}</p>}
                    <div className="mt-auto pt-3 border-t border-rose/10">
                      <a href={`${wppBase}${encodeURIComponent(`Ola! Gostaria de encomendar: ${p.nome}.`)}`}
                        target="_blank" rel="noopener noreferrer"
                        className="btn-shine block text-center text-[0.65rem] tracking-[0.12em] uppercase text-white bg-rose-dark rounded-full px-4 py-2.5 hover:bg-rose-deep transition-all duration-300 font-sans font-medium">
                        Consultar valores
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </HorizontalScroll>
          </div>
        </section>

        {/* Linha Home */}
        <section className="relative max-w-7xl mx-auto px-6 py-28">
          {/* Decorative blob */}
          <div className="blob-pulse absolute -top-10 -left-20 w-80 h-80 rounded-full bg-gold-pale/60 blur-3xl pointer-events-none" />
          <SectionHeader label="Maison" title="Linha Home" desc={linhaHome.descricao} />

          {/* Aromas */}
          <div className="reveal flex flex-wrap items-center gap-2.5 mb-12">
            <span className="text-[0.65rem] tracking-[0.2em] uppercase text-ink-3 font-sans mr-2">Aromas:</span>
            {linhaHome.aromas.map((a) => (
              <span key={a} className="bg-white text-rose-dark px-5 py-2 rounded-full border border-rose/20 text-sm font-sans shadow-sm hover:shadow-md hover:shadow-rose/10 hover:border-rose-dark/30 hover:-translate-y-0.5 transition-all duration-300 cursor-default">
                {a}
              </span>
            ))}
          </div>

          <HorizontalScroll>
            {linhaHome.produtos.map((p) => (
              <div key={p.nome + p.descricao} className="card-lift flex-none w-64 bg-white border border-rose/15 rounded-[1.5rem] overflow-hidden shadow-sm hover:shadow-xl hover:shadow-rose/12 transition-all duration-500 flex flex-col group">
                <div className="relative w-full aspect-[4/3] overflow-hidden bg-gradient-to-br from-rose-pale via-nude-light to-gold-pale">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 rounded-full bg-white/60 backdrop-blur-sm flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                      <svg className="w-7 h-7 text-rose-dark" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.362 5.214A8.252 8.252 0 0112 21 8.25 8.25 0 016.038 7.048 8.287 8.287 0 009 9.6a8.983 8.983 0 013.361-6.867 8.21 8.21 0 003 2.48z" />
                      </svg>
                    </div>
                  </div>
                </div>
                <div className="p-5 flex flex-col flex-1">
                  <h4 className="font-serif text-base text-primary mb-1">{p.nome}</h4>
                  <p className="text-ink-3 text-sm font-sans mb-4 flex-1">{p.descricao}</p>
                  <div className="pt-3 border-t border-rose/10">
                    <a href={`${wppBase}${encodeURIComponent(`Ola! Gostaria de encomendar: ${p.nome} — ${p.descricao}.`)}`}
                      target="_blank" rel="noopener noreferrer"
                      className="btn-shine block text-center text-[0.65rem] tracking-[0.12em] uppercase text-white bg-rose-dark rounded-full px-4 py-2.5 hover:bg-rose-deep transition-all duration-300 font-sans font-medium">
                      Consultar valores
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </HorizontalScroll>
        </section>

        {/* Back link */}
        <div className="text-center py-20">
          <Link href="/#catalogo" className="btn-shine inline-flex items-center gap-3 bg-rose-dark text-white font-sans font-medium text-[0.75rem] tracking-[0.12em] uppercase px-8 py-3.5 rounded-full hover:bg-rose-deep transition-colors duration-300 shadow-md hover:shadow-lg hover:shadow-rose/20">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
            Voltar ao Cat\u00e1logo
          </Link>
        </div>
      </main>
      <Footer />
    </>
  )
}
