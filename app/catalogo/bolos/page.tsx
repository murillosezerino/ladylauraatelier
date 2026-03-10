// app/catalogo/bolos/page.tsx
import Link from "next/link";
import { bolosData } from "@/lib/catalog-data";
import ProductImage from "@/components/ProductImage";
import PhotoSwitcher from "@/components/PhotoSwitcher";
import HorizontalScroll from "@/components/HorizontalScroll";
import ScrollReveal from "@/components/ScrollReveal";

const wppBase = "https://wa.me/5512982910000?text=";

const FOTOS: Record<string, string> = {
  "Praliné":                "/images/bolos/praline.jpg",
  "Red Velvet":             "/images/bolos/red-velvet.jpg",
  "Matilda":                "/images/bolos/matilda.jpg",
  "Pistache com Framboesa": "/images/bolos/pistache-framboesa.jpg",
  "Dulce Nut":              "/images/bolos/dulce-nut.jpg",
  "Strawberry Fields":      "/images/bolos/strawberry-fields.jpg",
  "Dois Amores":            "/images/bolos/dois-amores.jpg",
  "Trovão":                 "/images/bolos/trovao.jpg",
  "Yellow Submarine":       "/images/bolos/yellow-submarine.jpg",
  "Pink Limonade":          "/images/bolos/pink-lemonade.jpg",
  "Fraisier":               "/images/bolos/fraisier.jpg",
  "Tiramisù":               "/images/bolos/tiramisu.jpg",
};

function PrecoTag({ valor }: { valor: number }) {
  return (
    <span className="inline-block bg-rose-100 text-rose-700 font-semibold px-3 py-1 rounded-full text-sm">
      R$ {valor.toLocaleString("pt-BR")}
    </span>
  );
}

function SectionHeader({ label, title, desc }: { label: string; title: string; desc?: string }) {
  return (
    <div className="mb-8">
      <p className="label-caps text-rose-400 mb-2">{label}</p>
      <h2 className="font-cinzel text-stone-800 mb-3">{title}</h2>
      <div className="w-12 h-px bg-rose-300 mb-4" />
      {desc && <p className="text-stone-500 max-w-xl">{desc}</p>}
    </div>
  );
}

export default function BolosPage() {
  const { bolosFestivos, bolosButtercream, docesEventos, tamanhos, intro } = bolosData;

  return (
    <main className="min-h-screen bg-[#fdfaf7] text-stone-800">
      <ScrollReveal />

      {/* BREADCRUMB */}
      <div className="sticky top-0 z-40 bg-white/90 backdrop-blur border-b border-rose-100">
        <div className="max-w-6xl mx-auto px-6 py-3 flex items-center gap-2 text-stone-500" style={{ fontFamily: 'var(--font-josefin)', fontSize: '0.8rem', letterSpacing: '0.08em' }}>
          <Link href="/" className="hover:text-rose-500 transition-colors">Lady Laura Atelier</Link>
          <span>›</span>
          <Link href="/#catalogo" className="hover:text-rose-500 transition-colors">Catálogo</Link>
          <span>›</span>
          <span className="text-rose-500">Bolos & Doces</span>
        </div>
      </div>

      {/* HERO */}
      <section className="max-w-6xl mx-auto px-6 pt-20 pb-12 text-center">
        <p className="label-caps text-rose-400 mb-4">Menu de</p>
        <h1 className="font-cinzel font-light text-stone-800 mb-4" style={{ fontFamily: 'var(--font-cinzel)' }}>
          Bolos & Doces para Eventos
        </h1>
        <div className="w-20 h-px bg-rose-300 mx-auto mb-6" />
        <p className="text-stone-500 max-w-xl mx-auto">
          Cada bolo é criado sob encomenda com ingredientes selecionados. Escolha o sabor, o tamanho e personalize a decoração para o seu momento especial.
        </p>
      </section>

      {/* INFORMAÇÕES */}
      <section className="max-w-5xl mx-auto px-6 pb-16">
        <div className="grid md:grid-cols-2 gap-4">
          {[
            { label: "Prazo",      texto: intro.antecedencia },
            { label: "Como pedir", texto: intro.pedido },
            { label: "Pagamento",  texto: intro.pagamento },
            { label: "Retirada",   texto: intro.retirada },
          ].map((item) => (
            <div key={item.label} className="reveal bg-white border border-rose-100 rounded-2xl p-6">
              <p className="label-caps text-rose-400 mb-2">{item.label}</p>
              <p className="text-stone-600">{item.texto}</p>
            </div>
          ))}
        </div>
      </section>

      {/* BOLOS FESTIVOS */}
      <section className="max-w-6xl mx-auto px-6 pb-24">
        <SectionHeader
          label="Seleção fixa da casa"
          title="Bolos Festivos"
          desc={bolosFestivos.descricao}
        />

        <div className="overflow-x-auto mb-12">
          <table className="w-full text-sm bg-white rounded-2xl border border-rose-100 overflow-hidden">
            <thead className="bg-rose-50">
              <tr>
                {["Tamanho", "Diâmetro", "Altura", "Porções", "Preço"].map((h) => (
                  <th key={h} className="px-5 py-4 text-left label-caps text-rose-500">{h}</th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-rose-50">
              {tamanhos.map((t, i) => {
                const precos = [bolosFestivos.precos.babyCake, bolosFestivos.precos.aro15, bolosFestivos.precos.aro20, bolosFestivos.precos.aro25];
                return (
                  <tr key={t.nome} className="hover:bg-rose-50/40 transition-colors">
                    <td className="px-5 py-4 font-medium text-stone-700">{t.nome}</td>
                    <td className="px-5 py-4 text-stone-500">{t.diametro}</td>
                    <td className="px-5 py-4 text-stone-500">{t.altura}</td>
                    <td className="px-5 py-4 text-stone-500">{t.porcoes}</td>
                    <td className="px-5 py-4"><PrecoTag valor={precos[i]} /></td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

        <p className="label-caps text-stone-400 mb-6">Deslize para ver todos os sabores →</p>
        <HorizontalScroll>
          {bolosFestivos.sabores.map((s) => (
            <div key={s.nome} className="flex-none w-72 bg-white border border-rose-100 rounded-2xl overflow-hidden hover:shadow-md transition-shadow flex flex-col">
              <div className="relative">
                <ProductImage src={FOTOS[s.nome] ?? ""} alt={s.nome} fallbackEmoji="🎂" />
                {s.badge === "best-seller" && (
                  <span className="absolute top-3 right-3 bg-amber-400 text-white text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded-full shadow">
                    Best Seller
                  </span>
                )}
              </div>
              <div className="p-5 flex flex-col flex-1">
                <h4 className="font-cinzel text-stone-800 mb-2" style={{ fontFamily: 'var(--font-cinzel)', fontSize: '1.125rem' }}>{s.nome}</h4>
                <p className="text-stone-500 text-sm leading-relaxed mb-4 flex-1">{s.descricao}</p>
                <a
                  href={`${wppBase}${encodeURIComponent(`Olá! Gostaria de encomendar um bolo ${s.nome}.`)}`}
                  target="_blank" rel="noopener noreferrer"
                  className="block text-center label-caps text-rose-500 border border-rose-300 rounded-full px-4 py-2 hover:bg-rose-50 transition-colors"
                >
                  Encomendar
                </a>
              </div>
            </div>
          ))}
        </HorizontalScroll>
      </section>

      {/* BOLOS BUTTERCREAM */}
      <section className="bg-rose-50/50 py-24">
        <div className="max-w-6xl mx-auto px-6">
          <SectionHeader
            label="Bolos artísticos personalizados"
            title="Bolos em Buttercream"
            desc={bolosButtercream.descricao}
          />

          <div className="overflow-x-auto mb-10">
            <table className="w-full text-sm bg-white rounded-2xl border border-rose-100 overflow-hidden">
              <thead className="bg-rose-50">
                <tr>
                  {["Tamanho", "Diâmetro", "Porções", "Preço"].map((h) => (
                    <th key={h} className="px-5 py-4 text-left label-caps text-rose-500">{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-rose-50">
                {tamanhos.map((t, i) => {
                  const precos = [bolosButtercream.precos.babyCake, bolosButtercream.precos.aro15, bolosButtercream.precos.aro20, bolosButtercream.precos.aro25];
                  return (
                    <tr key={t.nome} className="hover:bg-rose-50/40 transition-colors">
                      <td className="px-5 py-4 font-medium text-stone-700">{t.nome}</td>
                      <td className="px-5 py-4 text-stone-500">{t.diametro}</td>
                      <td className="px-5 py-4 text-stone-500">{t.porcoes}</td>
                      <td className="px-5 py-4"><PrecoTag valor={precos[i]} /></td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>

          <div className="bg-white border border-rose-100 rounded-2xl p-6 mb-10">
            <p className="label-caps text-stone-500 mb-3">Sabores disponíveis</p>
            <div className="flex flex-wrap gap-2">
              {bolosButtercream.saboresDisponiveis.map((s) => (
                <span key={s} className="bg-rose-50 text-rose-600 px-4 py-1.5 rounded-full border border-rose-200">{s}</span>
              ))}
            </div>
            <p className="text-stone-400 text-sm mt-4 italic">{bolosButtercream.nota}</p>
          </div>

          <p className="label-caps text-stone-400 mb-6">Estilos de decoração</p>
          <HorizontalScroll>
            <div className="flex-none w-72 bg-white border border-rose-100 rounded-2xl overflow-hidden hover:shadow-md transition-shadow flex flex-col">
              <PhotoSwitcher
                images={[
                  "/images/bolos/macarons1.jpg",
                  "/images/bolos/macarons2.jpg",
                  "/images/bolos/macarons3.jpg",
                  "/images/bolos/macarons4.jpg",
                ]}
                alt="Macarons & Flores"
              />
              <div className="p-5 flex flex-col flex-1">
                <h4 className="font-cinzel text-stone-800 mb-2" style={{ fontFamily: 'var(--font-cinzel)', fontSize: '1.125rem' }}>
                  {bolosButtercream.estilosDecoracao[0].nome}
                </h4>
                <p className="text-stone-500 text-sm leading-relaxed flex-1">
                  {bolosButtercream.estilosDecoracao[0].descricao}
                </p>
              </div>
            </div>

            <div className="flex-none w-72 bg-white border border-rose-100 rounded-2xl overflow-hidden hover:shadow-md transition-shadow flex flex-col">
              <PhotoSwitcher
                images={[
                  "/images/bolos/drip-cake1.jpg",
                  "/images/bolos/drip-cake2.jpg",
                  "/images/bolos/drip-cake3.jpg",
                  "/images/bolos/drip-cake4.jpg",
                ]}
                alt="Drip Cake"
              />
              <div className="p-5 flex flex-col flex-1">
                <h4 className="font-cinzel text-stone-800 mb-2" style={{ fontFamily: 'var(--font-cinzel)', fontSize: '1.125rem' }}>
                  {bolosButtercream.estilosDecoracao[1].nome}
                </h4>
                <p className="text-stone-500 text-sm leading-relaxed flex-1">
                  {bolosButtercream.estilosDecoracao[1].descricao}
                </p>
              </div>
            </div>
          </HorizontalScroll>

          <div className="mt-10">
            <a
              href={`${wppBase}${encodeURIComponent('Olá! Gostaria de encomendar um bolo em Buttercream personalizado.')}`}
              target="_blank" rel="noopener noreferrer"
              className="inline-block bg-rose-500 text-white font-medium px-8 py-3 rounded-full hover:bg-rose-600 transition-colors"
            >
              Solicitar orçamento de decoração
            </a>
          </div>
        </div>
      </section>

      {/* DOCES PARA EVENTOS */}
      <section className="max-w-6xl mx-auto px-6 py-24">
        <SectionHeader label="Sob encomenda" title="Doces para Eventos" />
        <div className="bg-white border border-rose-100 rounded-2xl overflow-hidden grid md:grid-cols-2">
          <div className="bg-rose-50 flex items-center justify-center text-8xl min-h-[260px]">🍬</div>
          <div className="p-10 flex flex-col justify-center">
            <p className="text-stone-600 leading-relaxed mb-4">{docesEventos.descricao}</p>
            <p className="text-stone-400 text-sm italic mb-8">{docesEventos.observacao}</p>
            <a
              href={`${wppBase}${encodeURIComponent('Olá! Gostaria de informações sobre doces para eventos.')}`}
              target="_blank" rel="noopener noreferrer"
              className="self-start bg-rose-500 text-white font-medium px-8 py-3 rounded-full hover:bg-rose-600 transition-colors"
            >
              Falar com a equipe
            </a>
          </div>
        </div>
      </section>

      <div className="text-center pb-20">
        <Link href="/#catalogo" className="text-stone-400 hover:text-rose-500 transition-colors label-caps">
          ← Voltar ao Catálogo
        </Link>
      </div>
    </main>
  );
}
