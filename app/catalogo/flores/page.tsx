import Link from "next/link"
import Image from "next/image"
import { floresData } from "@/lib/catalog-data"
import Nav from "@/components/Nav"
import Footer from "@/components/Footer"
import RevealInit from "@/components/RevealInit"
import HorizontalScroll from "@/components/HorizontalScroll"

const wppBase = "https://wa.me/5512982910000?text="

function SectionHeader({ label, title, desc }: { label: string; title: string; desc?: string }) {
  return (
    <div className="reveal mb-14 text-center">
      <p className="text-[0.65rem] tracking-[0.4em] uppercase text-rose-dark font-sans font-medium mb-3">{label}</p>
      <h2 className="font-serif text-2xl md:text-4xl text-primary mb-5">{title}</h2>
      {/* ornament */}
      <div className="ornament mb-5">
        <svg className="w-2.5 h-2.5 text-rose-dark/40" viewBox="0 0 12 12" fill="currentColor">
          <path d="M6 0L7.5 4.5L12 6L7.5 7.5L6 12L4.5 7.5L0 6L4.5 4.5Z" />
        </svg>
      </div>
      {desc && <p className="text-ink-2 font-sans leading-relaxed max-w-xl mx-auto">{desc}</p>}
    </div>
  )
}

function FlowerCard({ nome, sub, descricao, observacao, wppMsg, image }: {
  nome: string; sub?: string; descricao?: string | null;
  observacao?: string | null; wppMsg: string; image?: string;
}) {
  return (
    <div className="card-lift flex-none w-64 sm:w-72 bg-white border border-rose/10 rounded-[1.5rem] overflow-hidden shadow-sm shadow-rose/5 flex flex-col group">
      {/* Image */}
      <div className="relative aspect-[3/4] overflow-hidden bg-rose-pale img-hover">
        {image ? (
          <>
            <Image
              src={image}
              alt={nome}
              fill
              className="object-cover"
              sizes="400px"
            />
            {/* Gradient overlay on hover */}
            <div className="absolute inset-0 bg-gradient-to-t from-rose-deep/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </>
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-rose-pale to-rose-bg flex items-center justify-center">
            <svg className="w-14 h-14 text-rose/30" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
            </svg>
          </div>
        )}

        {/* CTA slides up on hover */}
        <div className="absolute bottom-0 inset-x-0 p-5 translate-y-6 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
          <a
            href={`${wppBase}${encodeURIComponent(wppMsg)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-shine block text-center text-[0.65rem] tracking-[0.15em] uppercase text-white bg-rose-dark/90 backdrop-blur-sm rounded-full px-5 py-3 hover:bg-rose-deep transition-colors duration-300 font-sans font-medium shadow-lg"
          >
            Consultar via WhatsApp
          </a>
        </div>
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col flex-1">
        <h4 className="font-serif text-lg text-primary mb-1">{nome}</h4>
        {sub && <p className="text-[0.6rem] tracking-[0.2em] uppercase text-rose-dark font-sans mb-3">{sub}</p>}
        {descricao && <p className="text-ink-3 text-sm font-sans leading-relaxed mb-2">{descricao}</p>}
        {observacao && <p className="text-ink-4 text-xs italic font-sans mb-3">{observacao}</p>}
        <div className="mt-auto pt-5 border-t border-rose/10">
          <a
            href={`${wppBase}${encodeURIComponent(wppMsg)}`}
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
  )
}

export default function FloresPage() {
  const { arranjosFrescos, rosasVermelhas, floresSecas, floresPlantadas, vasos, intro } = floresData

  return (
    <>
      <RevealInit />
      <Nav />
      <main className="min-h-screen bg-base text-primary">

        {/* ── Hero ── */}
        <section data-nav-dark className="relative pt-44 pb-32 px-6 overflow-hidden">
          {/* Background with bg-drift */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="bg-drift absolute inset-0">
              <Image
                src="/images/flores/rosas-pink.jpg"
                alt="Flores Lady Laura Atelier"
                fill
                className="object-cover"
                priority
                sizes="100vw"
              />
            </div>
          </div>

          {/* Cinematic overlays */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/60" />
          <div className="absolute inset-0 bg-gradient-to-r from-rose-deep/15 via-transparent to-rose-deep/10" />

          {/* Vignette */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{ background: 'radial-gradient(ellipse at center, transparent 40%, rgba(0,0,0,0.4) 100%)' }}
          />

          {/* Content */}
          <div className="relative z-10 max-w-4xl mx-auto text-center">
            <p className="text-[0.65rem] tracking-[0.5em] uppercase text-white/50 font-sans mb-5 opacity-0 animate-[fadeUp_1s_0.2s_ease_forwards]">
              Catalogue de
            </p>
            <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl text-white mb-7 opacity-0 animate-[fadeUp_1s_0.4s_ease_forwards]">
              Flores &amp; Arranjos
            </h1>

            {/* Ornament */}
            <div className="flex items-center justify-center gap-5 mb-8 opacity-0 animate-[fadeUp_0.8s_0.6s_ease_forwards]">
              <div className="w-16 h-px bg-gradient-to-r from-transparent to-white/30" />
              <div className="w-1.5 h-1.5 rounded-full bg-rose-dark/60" />
              <div className="w-16 h-px bg-gradient-to-l from-transparent to-white/30" />
            </div>

            <p className="text-white/70 font-sans font-light text-base sm:text-lg max-w-xl mx-auto leading-relaxed opacity-0 animate-[fadeUp_0.8s_0.8s_ease_forwards]">
              {intro}
            </p>
          </div>
        </section>

        {/* ── Arranjos Frescos ── */}
        <section className="relative max-w-7xl mx-auto px-6 py-28 overflow-hidden">
          {/* Decorative blob */}
          <div className="absolute -top-32 -right-32 w-96 h-96 bg-rose/20 rounded-full blur-[120px] pointer-events-none blob-pulse" />

          <SectionHeader
            label="Montados diariamente"
            title="Arranjos Florais Frescos"
            desc="Composições com flores nobres e folhagens frescas selecionadas do dia."
          />
          <div className="reveal">
            <HorizontalScroll>
              {arranjosFrescos.map((a) => (
                <FlowerCard
                  key={a.nome + a.tamanho}
                  nome={a.nome}
                  sub={`Tamanho ${a.tamanho}`}
                  descricao={a.hastes}
                  image="/images/flores/copo-de-leite.webp"
                  wppMsg={`Olá! Gostaria de encomendar o ${a.nome} (${a.tamanho}).`}
                />
              ))}
            </HorizontalScroll>
          </div>
        </section>

        {/* ── Rosas ── */}
        <section className="relative bg-white py-28 overflow-hidden">
          {/* Decorative blobs */}
          <div className="absolute -top-40 -left-40 w-80 h-80 bg-rose-pale/60 rounded-full blur-[100px] pointer-events-none" />
          <div className="absolute -bottom-32 -right-24 w-72 h-72 bg-rose/15 rounded-full blur-[100px] pointer-events-none blob-pulse" />

          <div className="max-w-7xl mx-auto px-6">
            <SectionHeader
              label="Nobres & spéciales"
              title="Rosas"
              desc="Também disponível na cor de sua escolha — consulte disponibilidade."
            />
            <div className="reveal">
              <HorizontalScroll>
                {rosasVermelhas.map((a) => (
                  <FlowerCard
                    key={a.nome + a.tamanho}
                    nome={a.nome}
                    sub={`Tamanho ${a.tamanho}`}
                    descricao={a.hastes}
                    observacao={a.observacao}
                    wppMsg={`Olá! Gostaria de encomendar o ${a.nome} (${a.tamanho}).`}
                  />
                ))}
              </HorizontalScroll>
            </div>
          </div>
        </section>

        {/* ── Flores Secas ── */}
        <section className="relative max-w-7xl mx-auto px-6 py-28 overflow-hidden">
          {/* Decorative blob */}
          <div className="absolute top-1/2 -left-40 w-96 h-96 bg-rose-pale/50 rounded-full blur-[120px] pointer-events-none blob-pulse" />

          <SectionHeader
            label="Durables & élégantes"
            title="Flores Secas & Peças Especiais"
            desc="Arranjos em flores secas, garrafinhas e peças especiais com acabamento único."
          />
          <div className="reveal">
            <HorizontalScroll>
              {floresSecas.map((a, i) => (
                <FlowerCard
                  key={i}
                  nome={a.nome}
                  sub={a.tamanho ? `Tamanho ${a.tamanho}` : undefined}
                  descricao={a.descricao}
                  wppMsg={`Olá! Gostaria de encomendar: ${a.nome}${a.tamanho ? ` (${a.tamanho})` : ""}.`}
                />
              ))}
            </HorizontalScroll>
          </div>
        </section>

        {/* ── Flores Plantadas ── */}
        <section className="relative bg-white py-28 overflow-hidden">
          <div className="absolute -top-32 right-0 w-80 h-80 bg-olive-light/10 rounded-full blur-[100px] pointer-events-none" />

          <div className="max-w-5xl mx-auto px-6">
            <SectionHeader
              label="Naturelles & vivantes"
              title="Flores Plantadas"
              desc={floresPlantadas.descricao}
            />
            <div className="reveal text-center">
              <p className="text-ink-4 text-sm italic font-sans mb-8">{floresPlantadas.observacao}</p>
              <a
                href={`${wppBase}${encodeURIComponent('Olá! Gostaria de saber sobre flores plantadas disponíveis.')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-shine inline-flex items-center gap-3 bg-rose-dark text-white font-sans font-medium text-[0.7rem] tracking-[0.15em] uppercase px-10 py-4 rounded-full hover:bg-rose-deep hover:scale-[1.03] transition-all duration-300 shadow-lg shadow-rose-dark/20"
              >
                Consultar disponibilidade
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          </div>
        </section>

        {/* ── Vasos ── */}
        <section className="relative py-28 overflow-hidden">
          {/* Decorative blobs */}
          <div className="absolute -top-24 right-0 w-80 h-80 bg-rose/15 rounded-full blur-[100px] pointer-events-none" />
          <div className="absolute -bottom-20 -left-32 w-72 h-72 bg-rose-pale/40 rounded-full blur-[100px] pointer-events-none blob-pulse" />

          <div className="max-w-7xl mx-auto px-6">
            <SectionHeader
              label="Pour offrir"
              title="Vasos Florais"
              desc="Arranjos montados em vasos de cristal e vidro — presenteáveis e duradouros."
            />
            <div className="reveal">
              <HorizontalScroll>
                {vasos.map((v) => (
                  <FlowerCard
                    key={v.nome}
                    nome={v.nome}
                    descricao={v.descricao}
                    observacao={v.observacao}
                    wppMsg={`Olá! Gostaria de encomendar o ${v.nome}.`}
                  />
                ))}
              </HorizontalScroll>
            </div>
          </div>
        </section>

        {/* ── Back link ── */}
        <div className="reveal text-center py-20">
          <Link
            href="/#catalogo"
            className="btn-shine inline-flex items-center gap-3 px-10 py-4 rounded-full border border-rose-dark/30 text-rose-dark text-[0.7rem] font-semibold tracking-[0.18em] uppercase hover:bg-rose-dark hover:text-white hover:border-rose-dark transition-all duration-400 font-sans shadow-sm hover:shadow-lg hover:shadow-rose/15"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
            Retour au Catalogue
          </Link>
        </div>
      </main>
      <Footer />
    </>
  )
}
