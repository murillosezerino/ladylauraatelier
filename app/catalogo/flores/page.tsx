import Link from "next/link"
import Image from "next/image"
import { floresData, kitsData } from "@/lib/catalog-data"
import { siteConfig } from "@/lib/data"
import Nav from "@/components/Nav"
import Footer from "@/components/Footer"
import RevealInit from "@/components/RevealInit"
import HorizontalScroll from "@/components/HorizontalScroll"

const wppBase = `https://wa.me/${siteConfig.whatsapp}?text=`

function formatPrice(p: number) {
  return p.toLocaleString("pt-BR", { minimumFractionDigits: p % 1 === 0 ? 0 : 2, maximumFractionDigits: 2 })
}

function SectionHeader({ label, title, desc }: { label: string; title: string; desc?: string }) {
  return (
    <div className="reveal mb-14 text-center">
      <p className="text-[0.65rem] tracking-[0.4em] uppercase text-rose-dark font-sans font-medium mb-3">{label}</p>
      <h2 className="font-serif text-2xl md:text-4xl text-primary mb-5">{title}</h2>
      <div className="ornament mb-5">
        <svg className="w-2.5 h-2.5 text-rose-dark/40" viewBox="0 0 12 12" fill="currentColor">
          <path d="M6 0L7.5 4.5L12 6L7.5 7.5L6 12L4.5 7.5L0 6L4.5 4.5Z" />
        </svg>
      </div>
      {desc && <p className="text-ink-2 font-sans leading-relaxed max-w-xl mx-auto">{desc}</p>}
    </div>
  )
}

function PricePill({ preco, prefix }: { preco?: number | null; prefix?: string }) {
  if (preco == null) {
    return (
      <div className="absolute top-4 right-4 backdrop-blur-md bg-white/85 border border-white/40 rounded-full px-4 py-2 shadow-lg shadow-black/10">
        <p className="text-[0.55rem] tracking-[0.25em] uppercase text-rose-dark font-sans font-medium leading-tight whitespace-nowrap">Sob consulta</p>
      </div>
    )
  }
  return (
    <div className="absolute top-4 right-4 backdrop-blur-md bg-white/85 border border-white/40 rounded-full px-4 py-2 shadow-lg shadow-black/10">
      {prefix && <p className="text-[0.5rem] tracking-[0.3em] uppercase text-rose-dark/70 font-sans font-medium leading-tight">{prefix}</p>}
      <p className="font-serif text-base text-primary leading-tight whitespace-nowrap">R$ {formatPrice(preco)}</p>
    </div>
  )
}

function FlowerCard({ nome, tipo, sub, descricao, observacao, preco, wppMsg, image }: {
  nome: string;
  tipo?: string;
  sub?: string;
  descricao?: string | null;
  observacao?: string | null;
  preco?: number | null;
  wppMsg: string;
  image?: string;
}) {
  return (
    <div className="card-lift flex-none w-72 sm:w-[20rem] bg-white border border-rose/10 rounded-[2rem] overflow-hidden shadow-sm shadow-rose/8 hover:shadow-2xl hover:shadow-rose/15 transition-all duration-500 flex flex-col group">
      {/* Image */}
      <div className="relative aspect-[4/5] overflow-hidden bg-rose-pale img-hover">
        {image ? (
          <>
            <Image src={image} alt={nome} fill className="object-cover group-hover:scale-[1.04] transition-transform duration-700" sizes="400px" />
            <div className="absolute inset-0 bg-gradient-to-t from-rose-deep/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </>
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-rose-pale to-rose-bg flex items-center justify-center">
            <svg className="w-14 h-14 text-rose/30" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
            </svg>
          </div>
        )}

        <PricePill preco={preco} />
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col flex-1">
        {tipo && <p className="text-[0.55rem] tracking-[0.4em] uppercase text-rose-dark font-sans font-medium mb-2">{tipo}</p>}
        <h4 className="font-serif text-2xl text-primary mb-1 italic">{nome}</h4>
        {sub && <p className="text-[0.6rem] tracking-[0.2em] uppercase text-ink-3 font-sans mb-4">{sub}</p>}
        <div className="w-10 h-px bg-rose-dark/40 mb-4" />
        {descricao && <p className="text-ink-2 text-sm font-sans leading-[1.7] mb-3">{descricao}</p>}
        {observacao && <p className="text-ink-4 text-xs italic font-sans mb-3">{observacao}</p>}
        <div className="mt-auto pt-5">
          <a
            href={`${wppBase}${encodeURIComponent(wppMsg)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-shine block text-center bg-rose-dark text-white text-[0.65rem] tracking-[0.18em] uppercase font-sans font-medium px-6 py-3 rounded-full hover:bg-rose-deep transition-all duration-300 shadow-md shadow-rose-dark/15"
          >
            Consultar
          </a>
        </div>
      </div>
    </div>
  )
}

function GiftCard({ nome, itens, image, preco, observacao }: { nome: string; itens: string[]; image: string; preco?: number | null; observacao?: string }) {
  return (
    <div className="card-lift flex-none w-[20rem] bg-white border border-rose/10 rounded-[2rem] overflow-hidden shadow-sm shadow-rose/8 hover:shadow-2xl hover:shadow-rose/15 transition-all duration-500 flex flex-col group">
      <div className="relative aspect-[4/5] overflow-hidden bg-gradient-to-br from-rose-pale to-rose-bg">
        <Image src={image} alt={nome} fill className="object-cover group-hover:scale-[1.04] transition-transform duration-700" sizes="320px" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        <PricePill preco={preco} />
      </div>
      <div className="p-6 flex flex-col flex-1">
        <h4 className="font-serif text-2xl text-primary mb-1 italic">{nome}</h4>
        <div className="w-10 h-px bg-rose-dark/40 mb-4" />
        <p className="text-[0.55rem] tracking-[0.3em] uppercase text-rose-dark font-sans font-medium mb-3">Incluso</p>
        <ul className="space-y-1.5 mb-4 flex-1">
          {itens.map((item, i) => (
            <li key={i} className="flex items-start gap-2 text-sm text-ink-2 font-sans leading-relaxed">
              <span className="text-rose-dark/60 mt-1.5 shrink-0 text-[0.5rem]">&#9670;</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
        {observacao && <p className="text-ink-4 text-xs italic font-sans mb-3 pt-3 border-t border-rose/10">{observacao}</p>}
        <div className="mt-auto pt-5">
          <a
            href={`${wppBase}${encodeURIComponent(`Olá! Gostaria de encomendar o ${nome}.`)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-shine block text-center bg-rose-dark text-white text-[0.65rem] tracking-[0.18em] uppercase font-sans font-medium px-6 py-3 rounded-full hover:bg-rose-deep transition-all duration-300 shadow-md shadow-rose-dark/15"
          >
            Consultar
          </a>
        </div>
      </div>
    </div>
  )
}

export default function FloresPage() {
  const { arranjosFrescos, rosasVermelhas, floresSecas, floresPlantadas, vasos, plantas, intro } = floresData
  const { cafeDaManha, kitsComFlores, kitsSemFlores, latinhasEChocolates, linhaHome } = kitsData

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
              Flores &amp; Presentes
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
              {arranjosFrescos.map((a) => {
                const isBox = a.nome.toLowerCase().startsWith('box')
                const displayName = a.nome.replace(/^Arranjo Floral\s*/i, '')
                return (
                  <FlowerCard
                    key={a.nome + a.tamanho}
                    nome={displayName}
                    tipo={isBox ? 'Box Floral' : 'Arranjo Floral'}
                    sub={`Tamanho ${a.tamanho}`}
                    descricao={a.hastes}
                    preco={a.preco}
                    image={a.foto}
                    wppMsg={`Olá! Gostaria de encomendar o ${a.nome} (${a.tamanho}).`}
                  />
                )
              })}
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
              label="Nobres & Especiais"
              title="Rosas & Suas Variedades"
              desc="Também disponível na cor de sua escolha — consulte disponibilidade."
            />
            <div className="reveal">
              <HorizontalScroll>
                {rosasVermelhas.map((a) => {
                  const isVermelhas = a.nome.toLowerCase().includes('vermelhas')
                  const isPersonalizado = a.nome.toLowerCase().includes('personalizado')
                  const displayName = isPersonalizado
                    ? 'Personalizado'
                    : isVermelhas
                      ? 'Rosas Vermelhas'
                      : a.nome.replace(/^Arranjo Floral\s*/i, '')
                  return (
                    <FlowerCard
                      key={a.nome + a.tamanho}
                      nome={displayName}
                      tipo={isPersonalizado ? 'Arranjo de Rosas' : 'Arranjo Floral'}
                      sub={a.tamanho && a.tamanho !== 'Vários' ? `Tamanho ${a.tamanho}` : undefined}
                      descricao={a.hastes}
                      observacao={a.observacao}
                      preco={a.preco}
                      image={a.foto}
                      wppMsg={`Olá! Gostaria de encomendar o ${a.nome} (${a.tamanho}).`}
                    />
                  )
                })}
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
              {floresSecas.map((a, i) => {
                const displayName = a.nome
                  .replace(/^Arranjo de\s*/i, '')
                  .replace(/^Arranjo\s*/i, '')
                return (
                  <FlowerCard
                    key={i}
                    nome={displayName}
                    tipo="Arranjo de Flores Secas"
                    sub={a.tamanho ? `Tamanho ${a.tamanho}` : undefined}
                    descricao={a.descricao}
                    preco={a.preco}
                    image={a.foto}
                    wppMsg={`Olá! Gostaria de encomendar: ${a.nome}${a.tamanho ? ` (${a.tamanho})` : ""}.`}
                  />
                )
              })}
            </HorizontalScroll>
          </div>
        </section>

        {/* ── Flores Plantadas ── */}
        <section className="relative bg-white py-28 overflow-hidden">
          <div className="absolute -top-32 right-0 w-80 h-80 bg-olive-light/10 rounded-full blur-[100px] pointer-events-none" />

          <div className="max-w-7xl mx-auto px-6">
            <SectionHeader
              label="Naturelles & vivantes"
              title="Flores Plantadas"
              desc={floresPlantadas.descricao}
            />

            {/* Photo grid */}
            <div className="reveal grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
              {floresPlantadas.fotos.map((foto, i) => (
                <div key={i} className="relative aspect-[3/4] rounded-[1.5rem] overflow-hidden img-hover shadow-sm shadow-rose/10 group">
                  <Image
                    src={foto}
                    alt={`Flor plantada ${i + 1}`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 50vw, 25vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-rose-deep/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
              ))}
            </div>

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
                {vasos.map((v) => {
                  const displayName = v.nome.replace(/^Vaso Floral\s*/i, '')
                  return (
                    <FlowerCard
                      key={v.nome}
                      nome={displayName}
                      tipo="Vaso Floral"
                      descricao={v.descricao}
                      observacao={v.observacao}
                      preco={v.preco}
                      image={v.foto}
                      wppMsg={`Olá! Gostaria de encomendar o ${v.nome}.`}
                    />
                  )
                })}
              </HorizontalScroll>
            </div>
          </div>
        </section>

        {/* ── Plantas & Botânicas ── */}
        <section className="relative bg-white py-28 overflow-hidden">
          <div className="absolute -top-32 -right-24 w-80 h-80 bg-olive-light/15 rounded-full blur-[120px] pointer-events-none blob-pulse" />
          <div className="absolute -bottom-20 left-0 w-72 h-72 bg-rose-pale/40 rounded-full blur-[100px] pointer-events-none" />

          <div className="max-w-7xl mx-auto px-6">
            <SectionHeader
              label="Naturelles & vivantes"
              title="Plantas & Botânicas"
              desc="Bambus da sorte, kokedamas, terrários e variedades botânicas plantadas em vasos especiais — frescor e charme duradouros."
            />
            <div className="reveal">
              <HorizontalScroll>
                {plantas.map((p) => {
                  const isVaso = p.nome.toLowerCase().startsWith('vaso')
                  const isBambu = p.nome.toLowerCase().startsWith('bambu')
                  const tipo = isBambu ? 'Bambu da Sorte' : isVaso ? 'Planta em Vaso' : 'Planta'
                  const displayName = isBambu
                    ? p.nome.replace(/^Bambu da Sorte\s*/i, '')
                    : isVaso
                      ? p.nome.replace(/^Vaso (de\s)?/i, '')
                      : p.nome
                  return (
                    <FlowerCard
                      key={p.nome}
                      nome={displayName}
                      tipo={tipo}
                      descricao={p.descricao}
                      observacao={p.observacao}
                      preco={p.preco}
                      image={p.foto}
                      wppMsg={`Olá! Gostaria de encomendar o ${p.nome}.`}
                    />
                  )
                })}
              </HorizontalScroll>
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════════
                               PRESENTES
            ═══════════════════════════════════════════════════════════ */}

        {/* ── Divider / transition ── */}
        <section className="relative bg-gradient-to-b from-transparent via-rose-pale/20 to-white py-12">
          <div className="max-w-4xl mx-auto px-6 text-center reveal">
            <p className="text-[0.65rem] tracking-[0.5em] uppercase text-rose-dark font-sans font-medium mb-4">Catalogue</p>
            <h2 className="font-serif text-3xl md:text-5xl text-primary mb-4">Presentes</h2>
            <div className="flex items-center justify-center gap-4 mb-5">
              <div className="w-16 h-px bg-gradient-to-r from-transparent to-rose-dark/40" />
              <svg className="w-3 h-3 text-rose-dark/50" viewBox="0 0 12 12" fill="currentColor">
                <path d="M6 0L7.5 4.5L12 6L7.5 7.5L6 12L4.5 7.5L0 6L4.5 4.5Z" />
              </svg>
              <div className="w-16 h-px bg-gradient-to-l from-transparent to-rose-dark/40" />
            </div>
            <p className="text-ink-2 font-sans leading-relaxed max-w-2xl mx-auto">
              Kits cuidadosamente montados para presentear quem você ama — flores, doces, espumantes e itens artesanais selecionados.
            </p>
          </div>
        </section>

        {/* ── Café da Manhã ── */}
        <section className="relative bg-white py-24 overflow-hidden">
          <div className="absolute -top-20 -right-32 w-80 h-80 bg-rose-pale/50 rounded-full blur-[100px] pointer-events-none blob-pulse" />

          <div className="max-w-7xl mx-auto px-6">
            <SectionHeader
              label="Spécial"
              title="Café da Manhã"
              desc="Kits completos para um café da manhã inesquecível — com flores, doces, salgados e acompanhamentos selecionados."
            />
            <div className="reveal">
              <HorizontalScroll>
                {cafeDaManha.map((kit) => (
                  <GiftCard key={kit.nome} nome={kit.nome} itens={kit.itens} image={kit.foto} preco={kit.preco} observacao={kit.observacao} />
                ))}
              </HorizontalScroll>
            </div>
          </div>
        </section>

        {/* ── Kits com Flores ── */}
        <section className="relative py-24 overflow-hidden">
          <div className="absolute top-10 -left-40 w-96 h-96 bg-rose/20 rounded-full blur-[120px] pointer-events-none blob-pulse" />

          <div className="max-w-7xl mx-auto px-6">
            <SectionHeader
              label="Combinés"
              title="Kits com Flores"
              desc="Cada kit combina arranjos florais exclusivos com chocolates, espumantes e doces artesanais — uma surpresa completa em uma só caixa."
            />
            <div className="reveal">
              <HorizontalScroll>
                {kitsComFlores.map((kit) => (
                  <GiftCard key={kit.nome} nome={kit.nome} itens={kit.itens} image={kit.foto} preco={kit.preco} />
                ))}
              </HorizontalScroll>
            </div>
          </div>
        </section>

        {/* ── Kits Doces & Espumante ── */}
        <section className="relative bg-white py-24 overflow-hidden">
          <div className="absolute -bottom-20 -right-20 w-72 h-72 bg-rose-pale/60 rounded-full blur-[100px] pointer-events-none blob-pulse" />

          <div className="max-w-7xl mx-auto px-6">
            <SectionHeader
              label="Douceurs & Vins"
              title="Kits de Doces & Espumante"
              desc="Kits especiais de doces artesanais e espumantes — ótimos para qualquer ocasião."
            />
            <div className="reveal">
              <HorizontalScroll>
                {kitsSemFlores.map((kit) => (
                  <GiftCard key={kit.nome} nome={kit.nome} itens={kit.itens} image={kit.foto} preco={kit.preco} />
                ))}
              </HorizontalScroll>
            </div>
          </div>
        </section>

        {/* ── Avulsos ── */}
        <section className="relative py-24 overflow-hidden">
          <div className="absolute top-20 right-0 w-80 h-80 bg-rose-pale/40 rounded-full blur-[100px] pointer-events-none" />

          <div className="max-w-7xl mx-auto px-6">
            <SectionHeader
              label="Pièces Individuelles"
              title="Latinhas, Chocolates & Doces"
              desc="Peças avulsas para montar o seu presente perfeito."
            />
            <div className="reveal">
              <HorizontalScroll>
                {latinhasEChocolates.map((p) => (
                  <FlowerCard
                    key={p.nome}
                    nome={p.nome}
                    tipo="Avulso"
                    descricao={p.descricao}
                    preco={p.preco}
                    image={p.foto}
                    wppMsg={`Olá! Gostaria de encomendar: ${p.nome}.`}
                  />
                ))}
              </HorizontalScroll>
            </div>
          </div>
        </section>

        {/* ── Linha Home ── */}
        <section className="relative bg-white py-24 overflow-hidden">
          <div className="absolute -top-10 -left-20 w-80 h-80 bg-gold-pale/60 rounded-full blur-[100px] pointer-events-none blob-pulse" />

          <div className="max-w-7xl mx-auto px-6">
            <SectionHeader
              label="Maison"
              title="Linha Home"
              desc={linhaHome.descricao}
            />

            <div className="reveal flex flex-wrap items-center justify-center gap-2.5 mb-10">
              <span className="text-[0.65rem] tracking-[0.2em] uppercase text-ink-3 font-sans mr-2">Aromas:</span>
              {linhaHome.aromas.map((a) => (
                <span key={a} className="bg-base text-rose-dark px-5 py-2 rounded-full border border-rose/20 text-sm font-sans shadow-sm hover:shadow-md hover:shadow-rose/10 hover:border-rose-dark/30 hover:-translate-y-0.5 transition-all duration-300 cursor-default">
                  {a}
                </span>
              ))}
            </div>

            <div className="reveal">
              <HorizontalScroll>
                {linhaHome.produtos.map((p) => {
                  const isVela = p.nome.toLowerCase().includes('vela')
                  const isDifusor = p.nome.toLowerCase().includes('difusor')
                  const tipo = isVela ? 'Vela Aromática' : isDifusor ? 'Difusor' : 'Linha Home'
                  const displayName = p.nome
                    .replace(/^Vela Aromática\s*/i, '')
                    .replace(/^Difusor\s*/i, '')
                  return (
                    <FlowerCard
                      key={p.nome + p.descricao}
                      nome={displayName || p.nome}
                      tipo={tipo}
                      descricao={p.descricao}
                      preco={p.preco}
                      image={p.foto}
                      wppMsg={`Olá! Gostaria de encomendar: ${p.nome} — ${p.descricao}.`}
                    />
                  )
                })}
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
