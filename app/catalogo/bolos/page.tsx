'use client'

import Link from "next/link"
import Image from "next/image"
import { bolosData } from "@/lib/catalog-data"
import { siteConfig } from "@/lib/data"
import Nav from "@/components/Nav"
import Footer from "@/components/Footer"
import RevealInit from "@/components/RevealInit"
import SmoothScroll from "@/components/SmoothScroll"
import { useState } from "react"

const wppBase = `https://wa.me/${siteConfig.whatsapp}?text=`

const SABOR_DESC: Record<string, string> = {
  "Trovão": "Massa intensa de chocolate 55% e camadas de brigadeiro Belga ao leite.",
  "Dois Amores": "Massa intensa de chocolate 55%, camadas de brigadeiro Belga ao leite e creme três leites.",
  "Praliné": "Massa intensa de chocolate 55%, camadas de creme três leites e brigadeiro belga com praliné.",
  "Dulce Nut": "Massa de nozes, camadas de brigadeiro de nozes e Doce de Leite artesanal.",
  "Pistache com Framboesa": "Massa de baunilha, camadas de brigadeiro de pistache, geleia de framboesa e creme três leites.",
}

// Galeria de fotos buttercream - adicione mais caminhos aqui para incluir novas fotos
const BUTTERCREAM_GALERIA = [
  "/images/bolos/buttercream-1.webp",
  "/images/bolos/buttercream-2.webp",
  "/images/bolos/buttercream-3.webp",
  "/images/bolos/buttercream-4.webp",
  "/images/bolos/buttercream-5.webp",
  "/images/bolos/buttercream-6.webp",
]

// Galeria de fotos macarons - adicione mais caminhos aqui para incluir novas fotos
const MACARONS_GALERIA = [
  "/images/macarons/galeria-1.webp",
  "/images/macarons/galeria-2.webp",
  "/images/macarons/galeria-3.webp",
  "/images/macarons/galeria-4.webp",
  "/images/macarons/galeria-5.webp",
  "/images/macarons/galeria-6.webp",
]

function SectionHeader({ label, title, desc }: { label: string; title: string; desc?: string }) {
  return (
    <div className="mb-14 reveal">
      <p className="text-[0.6rem] tracking-[0.5em] uppercase text-rose-dark font-sans font-medium mb-4">{label}</p>
      <h2 className="font-serif text-3xl md:text-5xl text-primary mb-5 leading-tight">{title}</h2>
      <div className="w-16 h-px bg-gradient-to-r from-rose-dark to-rose mb-3" />
      <div className="ornament w-32 mb-5">
        <svg className="w-2 h-2 text-rose-dark/40 mx-3 shrink-0" viewBox="0 0 12 12" fill="currentColor">
          <path d="M6 0L7.5 4.5L12 6L7.5 7.5L6 12L4.5 7.5L0 6L4.5 4.5Z" />
        </svg>
      </div>
      {desc && <p className="text-ink-2 font-sans leading-relaxed max-w-xl">{desc}</p>}
    </div>
  )
}

function SaborTag({ sabor }: { sabor: string }) {
  const [show, setShow] = useState(false)
  const desc = SABOR_DESC[sabor]

  return (
    <span
      className="relative bg-white text-rose-dark px-5 py-2 rounded-full border border-rose/15 text-sm font-sans hover:bg-rose-dark hover:text-white hover:border-rose-dark transition-all duration-300 cursor-default"
      onMouseEnter={() => setShow(true)}
      onMouseLeave={() => setShow(false)}
    >
      {sabor}
      {desc && show && (
        <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-3 w-64 bg-primary text-white text-xs font-sans leading-relaxed rounded-xl px-4 py-3 shadow-xl z-30 pointer-events-none">
          <span className="font-medium">{sabor}:</span> {desc}
          <span className="absolute top-full left-1/2 -translate-x-1/2 w-0 h-0 border-l-[6px] border-r-[6px] border-t-[6px] border-l-transparent border-r-transparent border-t-primary" />
        </span>
      )}
    </span>
  )
}

export default function BolosPage() {
  const { bolosFestivos, bolosButtercream, docesEventos, tamanhos, intro } = bolosData

  return (
    <>
      <RevealInit />
      <SmoothScroll />
      <Nav />
      <main className="min-h-screen bg-base text-primary">
        {/* ─── Hero ─── */}
        <section data-nav-dark className="relative pt-44 pb-32 px-6 overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute inset-0 bg-drift">
              <Image src="/images/bolos/capa-bolos.jpg" alt="Confeitaria" fill className="object-cover" priority sizes="100vw" />
            </div>
            <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/60" />
            <div className="absolute inset-0 bg-gradient-to-r from-rose-deep/15 via-transparent to-rose-deep/10" />
            <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse at center, transparent 40%, rgba(0,0,0,0.4) 100%)' }} />
          </div>
          <div className="relative z-10 max-w-4xl mx-auto text-center">
            <p className="text-[0.6rem] tracking-[0.5em] uppercase text-white/50 font-sans mb-5 opacity-0 animate-[fadeUp_1s_0.2s_ease_forwards]">
              Pâtisserie &amp; Confiserie
            </p>
            <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl text-white mb-8 opacity-0 animate-[fadeUp_1s_0.4s_ease_forwards]">
              Confeitaria &amp; Doces
            </h1>
            <div className="flex items-center justify-center gap-5 mb-8 opacity-0 animate-[fadeUp_0.8s_0.6s_ease_forwards]">
              <div className="w-16 h-px bg-gradient-to-r from-transparent to-white/30" />
              <div className="w-1.5 h-1.5 rounded-full bg-rose-dark/60" />
              <div className="w-16 h-px bg-gradient-to-l from-transparent to-white/30" />
            </div>
            <p className="text-white/70 font-sans font-light text-base sm:text-lg max-w-xl mx-auto leading-relaxed opacity-0 animate-[fadeUp_0.8s_0.8s_ease_forwards]">
              Cada bolo é criado sob encomenda com ingredientes selecionados. Escolha o sabor, o tamanho e personalize a decoração.
            </p>
          </div>
        </section>

        {/* ─── Bolos Festivos ─── */}
        <section className="bg-rose-pale/40 py-24 px-6 relative overflow-hidden">
          <div className="absolute -top-40 -right-40 w-[500px] h-[500px] bg-rose/15 rounded-full blur-[150px] pointer-events-none blob-pulse" />
          <div className="absolute -bottom-32 -left-32 w-[400px] h-[400px] bg-rose-pale/60 rounded-full blur-[120px] pointer-events-none blob-pulse" />

          <div className="max-w-7xl mx-auto relative">
            <SectionHeader label="Sélection de la maison" title="Bolos Festivos" desc={bolosFestivos.descricao} />

            {/* Tamanhos — compactos */}
            <div className="reveal mb-14 flex flex-wrap justify-center gap-3 sm:gap-4">
              {tamanhos.map((t, i) => (
                <div
                  key={t.nome}
                  className="card-glow bg-rose-pale/90 backdrop-blur-sm border border-rose/25 rounded-2xl px-5 py-4 text-center hover:border-rose-dark/40 hover:bg-rose-pale transition-all duration-500 min-w-[130px]"
                  style={{ transitionDelay: `${i * 0.05}s` }}
                >
                  <h4 className="font-serif text-base text-primary mb-1.5">{t.nome}</h4>
                  <div className="w-6 h-px bg-rose-dark/30 mx-auto mb-2" />
                  <p className="text-[0.7rem] text-ink-3 font-sans leading-tight">
                    <span className="block">{t.diametro} · {t.altura}</span>
                  </p>
                  <p className="text-xs text-rose-dark font-sans font-medium mt-1">{t.porcoes}</p>
                </div>
              ))}
            </div>

            {/* Sabores */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {bolosFestivos.sabores.map((s, i) => (
                <div
                  key={s.nome}
                  className="reveal card-lift bg-white border border-rose/8 rounded-[1.75rem] overflow-hidden flex flex-col group"
                  style={{ transitionDelay: `${i * 0.04}s` }}
                >
                  <div className="relative aspect-square overflow-hidden img-hover">
                    {s.foto ? (
                      <Image src={s.foto} alt={s.nome} fill className="object-cover" sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw" />
                    ) : (
                      <div className="w-full h-full bg-gradient-to-br from-rose-pale to-rose-bg" />
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500">
                      <a
                        href={`${wppBase}${encodeURIComponent(`Olá! Gostaria de encomendar um bolo ${s.nome}.`)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-white/95 backdrop-blur-sm text-rose-deep px-8 py-3 rounded-full text-[0.65rem] tracking-[0.15em] uppercase font-sans font-semibold shadow-xl translate-y-6 group-hover:translate-y-0 transition-transform duration-500"
                      >
                        Encomendar
                      </a>
                    </div>
                    {s.badge === "best-seller" && (
                      <span className="absolute top-4 right-4 bg-rose-dark/90 backdrop-blur-sm text-white text-[0.55rem] tracking-[0.15em] uppercase font-sans font-medium px-4 py-1.5 rounded-full shadow-lg z-10">
                        Best Seller
                      </span>
                    )}
                  </div>
                  <div className="p-6 flex flex-col flex-1">
                    <h4 className="font-serif text-xl text-primary mb-2 group-hover:text-rose-dark transition-colors duration-500">{s.nome}</h4>
                    <p className="text-ink-3 text-sm font-sans leading-[1.8] mb-5 flex-1">{s.descricao}</p>
                    <div className="pt-4 border-t border-rose/8">
                      <a
                        href={`${wppBase}${encodeURIComponent(`Olá! Gostaria de encomendar um bolo ${s.nome}.`)}`}
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
            </div>
          </div>
        </section>

        {/* ─── Informações (Prazo, Como pedir, Pagamento, Retirada) ─── */}
        <section className="bg-rose-bg py-20 px-6 relative overflow-hidden">
          <div className="absolute -top-32 left-1/4 w-[400px] h-[400px] bg-rose-pale/50 rounded-full blur-[120px] pointer-events-none blob-pulse" />
          <div className="max-w-5xl mx-auto relative">
            <div className="reveal text-center mb-10">
              <p className="text-[0.6rem] tracking-[0.4em] uppercase text-rose-dark font-sans font-medium mb-3">Informations</p>
              <h2 className="font-serif text-2xl md:text-3xl text-primary">Como encomendar</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-5">
              {[
                { label: "Prazo", texto: intro.antecedencia },
                { label: "Como pedir", texto: intro.pedido },
                { label: "Pagamento", texto: intro.pagamento },
                { label: "Retirada", texto: intro.retirada },
              ].map((item, i) => (
                <div
                  key={item.label}
                  className="reveal card-lift bg-white/85 backdrop-blur-sm border border-rose/15 rounded-[1.25rem] p-7 hover:border-rose-dark/20 transition-all duration-500"
                  style={{ transitionDelay: `${i * 0.08}s` }}
                >
                  <p className="text-[0.6rem] tracking-[0.3em] uppercase text-rose-dark font-sans font-medium mb-3">{item.label}</p>
                  <p className="text-ink-2 font-sans text-sm leading-relaxed">{item.texto}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── Bolos Buttercream ─── */}
        <section className="bg-white py-28 relative overflow-hidden">
          <div className="absolute -top-32 -left-32 w-[600px] h-[600px] bg-rose-pale/15 rounded-full blur-[150px] pointer-events-none blob-pulse" />
          <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-rose-pale/10 rounded-full blur-[100px] pointer-events-none blob-pulse" />

          <div className="max-w-7xl mx-auto px-6 relative">
            <SectionHeader label="Créations personnalisées" title="Bolos em Buttercream" desc={bolosButtercream.descricao} />

            {/* Sabores com tooltip */}
            <div className="reveal bg-base border border-rose/10 rounded-[1.5rem] p-8 mb-12">
              <p className="text-[0.6rem] tracking-[0.3em] uppercase text-ink-3 font-sans mb-4">Sabores disponíveis</p>
              <div className="flex flex-wrap gap-2.5">
                {bolosButtercream.saboresDisponiveis.map((s) => (
                  <SaborTag key={s} sabor={s} />
                ))}
              </div>
              <p className="text-ink-4 text-xs mt-5 italic font-sans">{bolosButtercream.nota}</p>
            </div>

            {/* Galeria Buttercream */}
            <div className="reveal mb-14">
              <p className="text-[0.6rem] tracking-[0.3em] uppercase text-ink-3 font-sans mb-6">Galeria</p>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {BUTTERCREAM_GALERIA.map((src, i) => (
                  <div key={i} className="relative aspect-square rounded-[1.25rem] overflow-hidden img-hover group shadow-sm">
                    <Image src={src} alt={`Buttercream ${i + 1}`} fill className="object-cover" sizes="(max-width: 768px) 50vw, 33vw" />
                    <div className="absolute inset-0 bg-gradient-to-t from-rose-deep/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </div>
                ))}
              </div>
            </div>

            {/* Bolos especiais e personalizados */}
            <div className="reveal bg-base border border-rose/10 rounded-[1.75rem] overflow-hidden grid md:grid-cols-2 mb-12">
              <div className="relative min-h-[280px] overflow-hidden img-hover bg-rose-pale">
                <Image src="/images/bolos/cha-revelacao.webp" alt="Bolos especiais e personalizados" fill className="object-cover" sizes="50vw" />
              </div>
              <div className="p-8 md:p-10 flex flex-col justify-center">
                <p className="text-[0.6rem] tracking-[0.3em] uppercase text-rose-dark font-sans font-medium mb-3">Spécial</p>
                <h3 className="font-serif text-2xl md:text-3xl text-primary mb-4">Bolos especiais e personalizados</h3>
                <p className="text-ink-2 font-sans leading-[1.9] mb-8 text-[0.95rem]">
                  Perfeitos para chá revelação, casamento, noivado e ocasiões que precisem de um bolo mais artístico.
                </p>
                <a href={`${wppBase}${encodeURIComponent('Olá! Gostaria de encomendar um bolo especial e personalizado.')}`}
                  target="_blank" rel="noopener noreferrer"
                  className="self-start inline-flex items-center gap-3 bg-rose-dark text-white font-sans font-medium text-[0.7rem] tracking-[0.15em] uppercase px-8 py-3.5 rounded-full hover:bg-rose-deep hover:scale-[1.03] transition-all duration-300 shadow-lg shadow-rose-dark/20">
                  Solicitar orçamento
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
              </div>
            </div>

            <div className="reveal">
              <a href={`${wppBase}${encodeURIComponent('Olá! Gostaria de encomendar um bolo em Buttercream personalizado.')}`}
                target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-rose-dark text-white font-sans font-medium text-[0.7rem] tracking-[0.15em] uppercase px-10 py-4 rounded-full hover:bg-rose-deep hover:scale-[1.03] transition-all duration-300 shadow-lg shadow-rose-dark/20">
                Solicitar orçamento
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          </div>
        </section>

        {/* ─── Macarons ─── */}
        <section className="max-w-7xl mx-auto px-6 py-28">
          <SectionHeader
            label="Nos Macarons"
            title="Macarons"
            desc="Macarons artesanais feitos com técnica francesa da massa à montagem. Perfeitos para presentes, eventos e mesas de doces."
          />

          <div className="reveal grid grid-cols-2 md:grid-cols-3 gap-4 mb-12">
            {MACARONS_GALERIA.map((src, i) => (
              <div key={i} className="relative aspect-square rounded-[1.25rem] overflow-hidden img-hover group shadow-sm">
                <Image src={src} alt={`Macarons ${i + 1}`} fill className="object-cover" sizes="(max-width: 768px) 50vw, 33vw" />
                <div className="absolute inset-0 bg-gradient-to-t from-rose-deep/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            ))}
          </div>

          <div className="reveal">
            <a href={`${wppBase}${encodeURIComponent('Olá! Gostaria de encomendar macarons.')}`}
              target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-rose-dark text-white font-sans font-medium text-[0.7rem] tracking-[0.15em] uppercase px-10 py-4 rounded-full hover:bg-rose-deep hover:scale-[1.03] transition-all duration-300 shadow-lg shadow-rose-dark/20">
              Encomendar macarons
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </section>

        {/* ─── Doces para Eventos ─── */}
        <section className="bg-white py-28 relative overflow-hidden">
          <div className="max-w-6xl mx-auto px-6">
            <SectionHeader label="Événements sur mesure" title="Doces para Eventos" />
            <div className="reveal bg-base border border-rose/8 rounded-[2rem] overflow-hidden grid md:grid-cols-2 hover:shadow-2xl hover:shadow-rose/12 transition-all duration-700">
              <div className="relative min-h-[300px] md:min-h-[360px] overflow-hidden img-hover">
                <Image src="/images/confeitaria/mesa-doces-evento.jpg" alt="Doces para eventos" fill className="object-cover" sizes="50vw" />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent to-white/10 pointer-events-none md:block hidden" />
              </div>
              <div className="p-10 md:p-14 flex flex-col justify-center">
                <p className="text-[0.6rem] tracking-[0.3em] uppercase text-rose-dark font-sans font-medium mb-6">Mesa completa</p>
                <p className="text-ink-2 font-sans leading-[1.9] mb-5 text-[0.95rem]">{docesEventos.descricao}</p>
                <p className="text-ink-4 text-sm italic font-sans mb-10">{docesEventos.observacao}</p>
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
          </div>
        </section>

        {/* ─── Back link ─── */}
        <div className="text-center py-20 reveal">
          <Link
            href="/#catalogo"
            className="inline-flex items-center gap-3 bg-white border border-rose/15 text-rose-dark hover:bg-rose-dark hover:text-white hover:border-rose-dark font-sans font-medium text-[0.7rem] tracking-[0.15em] uppercase px-10 py-4 rounded-full transition-all duration-300 shadow-sm hover:shadow-lg hover:shadow-rose-dark/15"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
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
