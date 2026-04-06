import Link from "next/link"
import Image from "next/image"
import { bolosData } from "@/lib/catalog-data"
import Nav from "@/components/Nav"
import Footer from "@/components/Footer"
import RevealInit from "@/components/RevealInit"
import SmoothScroll from "@/components/SmoothScroll"
import PhotoSwitcher from "@/components/PhotoSwitcher"
import HorizontalScroll from "@/components/HorizontalScroll"

const wppBase = "https://wa.me/5512982910000?text="

const FOTOS: Record<string, string> = {
  "Praliné":                "/images/bolos/praline.webp",
  "Red Velvet":             "/images/bolos/red-velvet.webp",
  "Matilda":                "/images/bolos/matilda.webp",
  "Pistache com Framboesa": "/images/bolos/pistache-framboesa.webp",
  "Dulce Nut":              "/images/bolos/dulce-nut.webp",
  "Strawberry Fields":      "/images/bolos/strawberry-fields.webp",
  "Dois Amores":            "/images/bolos/dois-amores.jpg",
  "Trovão":                 "/images/bolos/trovao.jpg",
  "Yellow Submarine":       "/images/bolos/yellow-submarine.jpg",
  "Pink Limonade":          "/images/bolos/pink-lemonade.jpg",
  "Fraisier":               "/images/bolos/fraisier.jpg",
  "Tiramisù":               "/images/bolos/tiramisu.jpg",
}

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
              <Image src="/images/bolos/capa-bolos.jpg.jpg" alt="Confeitaria" fill className="object-cover" priority sizes="100vw" />
            </div>
            <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/60" />
            <div className="absolute inset-0 bg-gradient-to-r from-rose-deep/15 via-transparent to-rose-deep/10" />
            {/* Vignette */}
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

        {/* ─── Informações ─── */}
        <section className="max-w-5xl mx-auto px-6 py-20 relative">
          {/* Decorative blob */}
          <div className="absolute -top-20 right-0 w-[500px] h-[500px] bg-rose-pale/15 rounded-full blur-[120px] pointer-events-none blob-pulse" />

          <div className="grid md:grid-cols-2 gap-5 relative">
            {[
              { label: "Prazo", texto: intro.antecedencia },
              { label: "Como pedir", texto: intro.pedido },
              { label: "Pagamento", texto: intro.pagamento },
              { label: "Retirada", texto: intro.retirada },
            ].map((item, i) => (
              <div
                key={item.label}
                className="reveal card-lift bg-white border border-rose/10 rounded-[1.25rem] p-7 hover:border-rose-dark/20 transition-all duration-500"
                style={{ transitionDelay: `${i * 0.08}s` }}
              >
                <p className="text-[0.6rem] tracking-[0.3em] uppercase text-rose-dark font-sans font-medium mb-3">{item.label}</p>
                <p className="text-ink-2 font-sans text-sm leading-relaxed">{item.texto}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ─── Bolos Festivos ─── */}
        <section className="max-w-7xl mx-auto px-6 pb-28">
          <SectionHeader label="Sélection de la maison" title="Bolos Festivos" desc={bolosFestivos.descricao} />

          {/* Tamanhos - visual cards */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 mb-16 reveal">
            {tamanhos.map((t, i) => (
              <div
                key={t.nome}
                className="card-glow bg-white border border-rose/10 rounded-[1.5rem] p-6 text-center hover:border-rose-dark/20 transition-all duration-500"
                style={{ transitionDelay: `${i * 0.05}s` }}
              >
                <h4 className="font-serif text-lg text-primary mb-3">{t.nome}</h4>
                <div className="w-8 h-px bg-rose-dark/20 mx-auto mb-3" />
                <div className="space-y-1.5 text-sm font-sans">
                  <p className="text-ink-2">{t.diametro}</p>
                  <p className="text-ink-3">{t.altura}</p>
                  <p className="text-rose-dark font-medium">{t.porcoes}</p>
                </div>
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
                  {FOTOS[s.nome] ? (
                    <Image src={FOTOS[s.nome]} alt={s.nome} fill className="object-cover" sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw" />
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
        </section>

        {/* ─── Bolos Buttercream ─── */}
        <section className="bg-white py-28 relative overflow-hidden">
          {/* Decorative blob */}
          <div className="absolute -top-32 -left-32 w-[600px] h-[600px] bg-rose-pale/15 rounded-full blur-[150px] pointer-events-none blob-pulse" />
          <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-rose-pale/10 rounded-full blur-[100px] pointer-events-none blob-pulse" />

          <div className="max-w-7xl mx-auto px-6 relative">
            <SectionHeader label="Créations personnalisées" title="Bolos em Buttercream" desc={bolosButtercream.descricao} />

            <div className="reveal bg-base border border-rose/10 rounded-[1.5rem] p-8 mb-12">
              <p className="text-[0.6rem] tracking-[0.3em] uppercase text-ink-3 font-sans mb-4">Sabores disponíveis</p>
              <div className="flex flex-wrap gap-2.5">
                {bolosButtercream.saboresDisponiveis.map((s) => (
                  <span
                    key={s}
                    className="bg-white text-rose-dark px-5 py-2 rounded-full border border-rose/15 text-sm font-sans hover:bg-rose-dark hover:text-white hover:border-rose-dark transition-all duration-300 cursor-default"
                  >
                    {s}
                  </span>
                ))}
              </div>
              <p className="text-ink-4 text-xs mt-5 italic font-sans">{bolosButtercream.nota}</p>
            </div>

            <HorizontalScroll>
              <div className="flex-none w-80 sm:w-96 bg-base border border-rose/8 rounded-[1.75rem] overflow-hidden hover:shadow-2xl hover:shadow-rose/15 transition-all duration-700 flex flex-col group hover:-translate-y-2">
                <PhotoSwitcher
                  images={["/images/bolos/macarons1.jpg", "/images/bolos/macarons2.jpg", "/images/bolos/macarons3.jpg", "/images/bolos/macarons4.jpg"]}
                  alt="Macarons & Flores"
                />
                <div className="p-6 flex flex-col flex-1">
                  <h4 className="font-serif text-xl text-primary mb-2 group-hover:text-rose-dark transition-colors duration-500">{bolosButtercream.estilosDecoracao[0].nome}</h4>
                  <p className="text-ink-3 text-sm font-sans leading-[1.8] flex-1">{bolosButtercream.estilosDecoracao[0].descricao}</p>
                </div>
              </div>
              <div className="flex-none w-80 sm:w-96 bg-base border border-rose/8 rounded-[1.75rem] overflow-hidden hover:shadow-2xl hover:shadow-rose/15 transition-all duration-700 flex flex-col group hover:-translate-y-2">
                <PhotoSwitcher
                  images={["/images/bolos/drip-cake1.jpg", "/images/bolos/drip-cake2.jpg", "/images/bolos/drip-cake3.jpg", "/images/bolos/drip-cake4.jpg"]}
                  alt="Drip Cake"
                />
                <div className="p-6 flex flex-col flex-1">
                  <h4 className="font-serif text-xl text-primary mb-2 group-hover:text-rose-dark transition-colors duration-500">{bolosButtercream.estilosDecoracao[1].nome}</h4>
                  <p className="text-ink-3 text-sm font-sans leading-[1.8] flex-1">{bolosButtercream.estilosDecoracao[1].descricao}</p>
                </div>
              </div>
            </HorizontalScroll>

            <div className="mt-12 reveal">
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

        {/* ─── Doces para Eventos ─── */}
        <section className="max-w-6xl mx-auto px-6 py-28">
          <SectionHeader label="Événements sur mesure" title="Doces para Eventos" />
          <div className="reveal bg-white border border-rose/8 rounded-[2rem] overflow-hidden grid md:grid-cols-2 hover:shadow-2xl hover:shadow-rose/12 transition-all duration-700">
            <div className="relative min-h-[300px] md:min-h-[360px] overflow-hidden img-hover">
              <Image src="/images/confeitaria/mesa-doces-evento.webp" alt="Doces para eventos" fill className="object-cover" sizes="50vw" />
              {/* Subtle gradient overlay */}
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
