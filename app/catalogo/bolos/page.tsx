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

            {/* Tamanhos — cards maiores, rosa, mais informativos */}
            <div className="reveal mb-16 grid grid-cols-1 sm:grid-cols-3 gap-5 max-w-3xl mx-auto">
              {tamanhos.map((t, i) => {
                const diametro = t.diametro.replace(' cm', '')
                const altura = t.altura.replace(' cm', '')
                return (
                  <div
                    key={t.nome}
                    className="reveal card-lift relative bg-gradient-to-br from-rose-pale via-rose-bg to-rose-pale/70 border border-rose/20 rounded-[2rem] p-6 text-center shadow-sm shadow-rose/8 hover:border-rose-dark/30 hover:shadow-2xl hover:shadow-rose/15 transition-all duration-500 overflow-hidden group"
                    style={{ transitionDelay: `${i * 0.08}s` }}
                  >
                    {/* Decorative blob */}
                    <div className="absolute -top-12 -right-12 w-28 h-28 bg-rose/15 rounded-full blur-2xl group-hover:bg-rose/25 transition-all duration-700" />

                    {/* Cake icon */}
                    <div className="relative w-12 h-12 mx-auto mb-4 rounded-full bg-white/70 backdrop-blur-sm flex items-center justify-center shadow-sm shadow-rose/15 group-hover:scale-110 transition-transform duration-500">
                      <svg className="w-6 h-6 text-rose-dark" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 11.25v8.25a1.5 1.5 0 01-1.5 1.5H5.25a1.5 1.5 0 01-1.5-1.5v-8.25M12 4.875A2.625 2.625 0 109.375 7.5H12m0-2.625V7.5m0-2.625A2.625 2.625 0 1114.625 7.5H12m0 0V21m-8.625-9.75h18c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125h-18c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z" />
                      </svg>
                    </div>

                    <h4 className="relative font-serif text-2xl text-primary mb-1">{t.nome}</h4>
                    <div className="relative w-10 h-px bg-rose-dark/30 mx-auto mb-4" />

                    {/* Stats */}
                    <div className="relative grid grid-cols-2 gap-2 mb-5">
                      <div className="bg-white/70 backdrop-blur-sm rounded-xl py-2.5 border border-rose/15">
                        <p className="text-[0.55rem] tracking-[0.2em] uppercase text-ink-3 font-sans mb-0.5">Diâmetro</p>
                        <p className="font-serif text-xl text-rose-dark leading-none">{diametro}<span className="text-xs text-ink-3 ml-0.5 font-sans">cm</span></p>
                      </div>
                      <div className="bg-white/70 backdrop-blur-sm rounded-xl py-2.5 border border-rose/15">
                        <p className="text-[0.55rem] tracking-[0.2em] uppercase text-ink-3 font-sans mb-0.5">Altura</p>
                        <p className="font-serif text-xl text-rose-dark leading-none">{altura}<span className="text-xs text-ink-3 ml-0.5 font-sans">cm</span></p>
                      </div>
                    </div>

                    {/* Porções */}
                    <div className="relative inline-flex items-center gap-2 bg-rose-dark text-white px-4 py-2 rounded-full text-[0.7rem] tracking-[0.1em] font-sans font-medium shadow-md shadow-rose-dark/20">
                      <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
                      </svg>
                      {t.porcoes}
                    </div>
                  </div>
                )
              })}
            </div>

            {/* Sabores */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {bolosFestivos.sabores.map((s, i) => (
                <div
                  key={s.nome}
                  className="reveal card-lift bg-white border border-rose/8 rounded-[2rem] overflow-hidden shadow-sm shadow-rose/8 hover:shadow-2xl hover:shadow-rose/15 transition-all duration-500 flex flex-col group"
                  style={{ transitionDelay: `${i * 0.04}s` }}
                >
                  <div className="relative aspect-[4/5] overflow-hidden img-hover">
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
        <section className="bg-rose-bg py-24 px-6 relative overflow-hidden">
          <div className="absolute -top-32 left-1/4 w-[400px] h-[400px] bg-rose-pale/50 rounded-full blur-[120px] pointer-events-none blob-pulse" />
          <div className="absolute -bottom-32 right-1/4 w-[400px] h-[400px] bg-rose/10 rounded-full blur-[120px] pointer-events-none blob-pulse" />

          <div className="max-w-6xl mx-auto relative">
            <div className="reveal text-center mb-14">
              <p className="text-[0.65rem] tracking-[0.4em] uppercase text-rose-dark font-sans font-medium mb-3">Informations</p>
              <h2 className="font-serif text-3xl md:text-5xl text-primary mb-5">Como encomendar</h2>
              <div className="flex items-center justify-center gap-4 mb-5">
                <div className="w-12 h-px bg-gradient-to-r from-transparent to-rose-dark/40" />
                <svg className="w-2.5 h-2.5 text-rose-dark/40" viewBox="0 0 12 12" fill="currentColor">
                  <path d="M6 0L7.5 4.5L12 6L7.5 7.5L6 12L4.5 7.5L0 6L4.5 4.5Z" />
                </svg>
                <div className="w-12 h-px bg-gradient-to-l from-transparent to-rose-dark/40" />
              </div>
              <p className="text-ink-2 font-sans text-sm max-w-xl mx-auto leading-relaxed">
                Quatro passos simples para garantir o seu pedido com tranquilidade.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {[
                {
                  label: "Prazo",
                  texto: intro.antecedencia,
                  icon: (
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  ),
                },
                {
                  label: "Como pedir",
                  texto: intro.pedido,
                  icon: (
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 01-.825-.242m9.345-8.334a2.126 2.126 0 00-.476-.095 48.64 48.64 0 00-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0011.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155" />
                    </svg>
                  ),
                },
                {
                  label: "Pagamento",
                  texto: intro.pagamento,
                  icon: (
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5z" />
                    </svg>
                  ),
                },
                {
                  label: "Retirada",
                  texto: intro.retirada,
                  icon: (
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                    </svg>
                  ),
                },
              ].map((item, i) => (
                <div
                  key={item.label}
                  className="reveal card-lift relative bg-gradient-to-br from-rose-pale via-rose-bg to-rose-pale/60 border border-rose/20 rounded-[2rem] p-6 shadow-sm shadow-rose/8 hover:border-rose-dark/30 hover:shadow-2xl hover:shadow-rose/15 transition-all duration-500 overflow-hidden group"
                  style={{ transitionDelay: `${i * 0.08}s` }}
                >
                  {/* Decorative blob */}
                  <div className="absolute -top-12 -right-12 w-28 h-28 bg-rose/15 rounded-full blur-2xl group-hover:bg-rose/25 transition-all duration-700" />

                  {/* Icon */}
                  <div className="relative w-12 h-12 rounded-full bg-white/80 backdrop-blur-sm flex items-center justify-center shadow-sm shadow-rose/15 text-rose-dark mb-4 group-hover:scale-110 transition-transform duration-500">
                    {item.icon}
                  </div>

                  <p className="relative text-[0.6rem] tracking-[0.3em] uppercase text-rose-dark font-sans font-semibold mb-2">{item.label}</p>
                  <div className="relative w-8 h-px bg-rose-dark/30 mb-3" />
                  <p className="relative text-ink-2 font-sans text-sm leading-relaxed">{item.texto}</p>
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
            <div className="reveal bg-base border border-rose/10 rounded-[2rem] p-8 mb-12 shadow-sm shadow-rose/8">
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
            <div className="reveal bg-base border border-rose/10 rounded-[2rem] overflow-hidden grid md:grid-cols-2 mb-12 shadow-sm shadow-rose/8 hover:shadow-2xl hover:shadow-rose/15 transition-all duration-500">
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
