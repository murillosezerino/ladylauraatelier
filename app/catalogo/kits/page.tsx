// app/catalogo/kits/page.tsx
import Link from "next/link";
import { kitsData } from "@/lib/catalog-data";
import HorizontalScroll from "@/components/HorizontalScroll";
import ScrollReveal from "@/components/ScrollReveal"

const wppBase = "https://wa.me/5512982910000?text=";

function PrecoTag({ valor }: { valor: number }) {
  return (
    <span className="inline-block bg-rose-100 text-rose-700 font-semibold px-3 py-1 rounded-full text-sm">
      R$ {valor.toLocaleString("pt-BR", { minimumFractionDigits: 2 })}
    </span>
  );
}

function SectionHeader({ label, title, desc }: { label: string; title: string; desc?: string }) {
  return (
    <div className="mb-8">
      <p className="label-caps text-rose-400 mb-2">{label}</p>
      <h2 className="text-stone-800 mb-3" style={{ fontFamily: 'var(--font-cinzel)' }}>{title}</h2>
      <div className="w-12 h-px bg-rose-300 mb-4" />
      {desc && <p className="text-stone-500 max-w-xl">{desc}</p>}
    </div>
  );
}

function KitCard({ kit }: { kit: { nome: string; preco: number; foto?: string; itens: string[]; observacao?: string } }) {
  return (
    <div className="scroll-card bg-white border border-rose-100 rounded-2xl overflow-hidden hover:shadow-md transition-shadow flex flex-col" style={{ width: '18rem' }}>
      <div className="w-full bg-rose-50 flex items-center justify-center text-5xl" style={{ aspectRatio: '4/3' }}>🎁</div>
      <div className="p-5 flex flex-col flex-1">
        <div className="flex items-start justify-between gap-2 mb-3 flex-wrap">
          <h4 className="text-stone-800 leading-tight" style={{ fontFamily: 'var(--font-cinzel)', fontSize: '1.0625rem' }}>{kit.nome}</h4>
          <PrecoTag valor={kit.preco} />
        </div>
        <ul className="space-y-1 mb-4 flex-1">
          {kit.itens.map((item, i) => (
            <li key={i} className="flex items-start gap-2 text-sm text-stone-500">
              <span className="text-rose-300 mt-0.5 shrink-0">✦</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
        {kit.observacao && <p className="text-stone-400 text-xs italic mb-3">{kit.observacao}</p>}
        <div className="mt-auto pt-3 border-t border-rose-50">
          <a href={`${wppBase}${encodeURIComponent(`Olá! Gostaria de encomendar o ${kit.nome}.`)}`}
            target="_blank" rel="noopener noreferrer"
            className="block text-center label-caps text-rose-500 border border-rose-300 rounded-full px-4 py-2 hover:bg-rose-50 transition-colors">
            Encomendar
          </a>
        </div>
      </div>
    </div>
  );
}

export default function KitsPage() {
  const { cafeDaManha, kitsComFlores, kitsSemFlores, latinhasEChocolates, caixasBrigous, caixasMacarons, caixasTrufas, linhaHome, nota } = kitsData;

  return (
    <main className="min-h-screen bg-[#fdfaf7] text-stone-800">
  <ScrollReveal />

      <div className="sticky top-0 z-40 bg-white/90 backdrop-blur border-b border-rose-100">
        <div className="max-w-6xl mx-auto px-6 py-3 flex items-center gap-2 text-stone-500" style={{ fontFamily: 'var(--font-josefin)', fontSize: '0.8rem', letterSpacing: '0.08em' }}>
          <Link href="/" className="hover:text-rose-500 transition-colors">Lady Laura Atelier</Link>
          <span>›</span>
          <Link href="/#catalogo" className="hover:text-rose-500 transition-colors">Cardápio</Link>
          <span>›</span>
          <span className="text-rose-500">Kits & Presentes</span>
        </div>
      </div>

      <section className="max-w-6xl mx-auto px-6 pt-20 pb-12 text-center">
        <p className="label-caps text-rose-400 mb-4">Catálogo</p>
        <h1 className="font-light text-stone-800 mb-4" style={{ fontFamily: 'var(--font-cinzel)' }}>Kits & Presentes</h1>
        <div className="w-20 h-px bg-rose-300 mx-auto mb-6" />
        <p className="text-stone-500 max-w-xl mx-auto">{nota}</p>
      </section>

      <section className="max-w-6xl mx-auto px-6 pb-20">
        <SectionHeader label="Especial" title="Café da Manhã" desc="Kits completos para um café da manhã inesquecível com flores, doces e itens selecionados." />
        <p className="label-caps text-stone-400 mb-5">Deslize para ver todos →</p>
        <HorizontalScroll>
          {cafeDaManha.map((kit) => <KitCard key={kit.nome} kit={kit} />)}
        </HorizontalScroll>
      </section>

      <section className="bg-rose-50/50 py-20">
        <div className="max-w-6xl mx-auto px-6">
          <SectionHeader label="Combinados" title="Kits com Flores" desc="Cada kit combina arranjos florais com chocolates, espumantes e doces artesanais." />
          <p className="label-caps text-stone-400 mb-5">Deslize para ver todos →</p>
          <HorizontalScroll>
            {kitsComFlores.map((kit) => <KitCard key={kit.nome} kit={kit} />)}
          </HorizontalScroll>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-20">
        <SectionHeader label="Doces & Espumantes" title="Kits de Doces & Espumante" desc="Kits especiais de doces e espumantes — ótimos para qualquer ocasião." />
        <p className="label-caps text-stone-400 mb-5">Deslize para ver todos →</p>
        <HorizontalScroll>
          {kitsSemFlores.map((kit) => <KitCard key={kit.nome} kit={kit} />)}
        </HorizontalScroll>
      </section>

      <section className="bg-rose-50/50 py-20">
        <div className="max-w-6xl mx-auto px-6">
          <SectionHeader label="Avulsos" title="Latinhas, Chocolates & Doces" desc="Peças avulsas para montar o seu presente perfeito ou complementar qualquer kit." />
          <p className="label-caps text-stone-400 mb-5">Deslize para ver todos →</p>
          <HorizontalScroll className="mb-12">
            {latinhasEChocolates.map((p) => (
              <div key={p.nome} className="scroll-card bg-white border border-rose-100 rounded-2xl overflow-hidden hover:shadow-md transition-shadow flex flex-col" style={{ width: '15rem' }}>
                <div className="w-full bg-rose-50 flex items-center justify-center text-5xl" style={{ aspectRatio: '1' }}>🍫</div>
                <div className="p-5 flex flex-col flex-1">
                  <h4 className="text-stone-800 mb-1" style={{ fontFamily: 'var(--font-cinzel)', fontSize: '1rem' }}>{p.nome}</h4>
                  {p.descricao && <p className="text-stone-500 text-sm leading-relaxed mb-3 flex-1">{p.descricao}</p>}
                  <div className="mt-auto pt-2 border-t border-rose-50 flex items-center justify-between">
                    <span className="inline-block bg-rose-100 text-rose-700 font-semibold text-sm px-3 py-1 rounded-full">
                      R$ {p.preco.toLocaleString("pt-BR", { minimumFractionDigits: 2 })}
                    </span>
                    <a href={`${wppBase}${encodeURIComponent(`Olá! Gostaria de encomendar: ${p.nome}.`)}`}
                      target="_blank" rel="noopener noreferrer"
                      className="label-caps text-rose-500 hover:underline text-xs">Pedir</a>
                  </div>
                </div>
              </div>
            ))}
          </HorizontalScroll>

          <p className="label-caps text-stone-400 mb-5">Caixas por unidade →</p>
          <HorizontalScroll>
            {[
              { titulo: "Caixas de Brigous 🍬", rows: caixasBrigous },
              { titulo: "Caixa de Macarons 🌈", rows: caixasMacarons },
              { titulo: "Caixas de Trufas 🍫",  rows: caixasTrufas },
            ].map((tbl) => (
              <div key={tbl.titulo} className="scroll-card bg-white border border-rose-100 rounded-2xl overflow-hidden" style={{ width: '15rem' }}>
                <div className="bg-rose-50 px-5 py-3">
                  <p className="font-semibold text-stone-700">{tbl.titulo}</p>
                </div>
                <div className="divide-y divide-rose-50">
                  {tbl.rows.map((row) => (
                    <div key={row.qtd} className="flex items-center justify-between px-5 py-3">
                      <span className="text-stone-600">{row.qtd}</span>
                      <span className="text-rose-600 font-semibold">R$ {row.preco}</span>
                    </div>
                  ))}
                </div>
                <div className="px-5 py-3">
                  <a href={`${wppBase}${encodeURIComponent(`Olá! Gostaria de encomendar: ${tbl.titulo.replace(/[^\w\sÀ-ÿ]/g, "").trim()}.`)}`}
                    target="_blank" rel="noopener noreferrer"
                    className="block text-center label-caps text-rose-500 border border-rose-300 rounded-full px-4 py-2 hover:bg-rose-50 transition-colors">
                    Encomendar
                  </a>
                </div>
              </div>
            ))}
          </HorizontalScroll>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-20">
        <SectionHeader label="Exclusiva" title="Linha Home" desc={linhaHome.descricao} />
        <div className="flex flex-wrap gap-2 mb-8">
          <span className="label-caps text-stone-400 self-center mr-2">Aromas:</span>
          {linhaHome.aromas.map((a) => (
            <span key={a} className="bg-amber-50 text-amber-700 px-3 py-1 rounded-full border border-amber-200 text-sm">{a}</span>
          ))}
        </div>
        <p className="label-caps text-stone-400 mb-5">Deslize para ver todos →</p>
        <HorizontalScroll>
          {linhaHome.produtos.map((p) => (
            <div key={p.nome + p.descricao} className="scroll-card bg-white border border-rose-100 rounded-2xl overflow-hidden hover:shadow-md transition-shadow flex flex-col" style={{ width: '16rem' }}>
              <div className="w-full bg-amber-50/50 flex items-center justify-center text-5xl" style={{ aspectRatio: '4/3' }}>🕯️</div>
              <div className="p-5 flex flex-col flex-1">
                <h4 className="text-stone-800 mb-1" style={{ fontFamily: 'var(--font-cinzel)', fontSize: '1rem' }}>{p.nome}</h4>
                <p className="text-stone-500 text-sm mb-4 flex-1">{p.descricao}</p>
                <div className="pt-3 border-t border-rose-50 flex items-center justify-between">
                  <span className="inline-block bg-rose-100 text-rose-700 font-semibold text-sm px-3 py-1 rounded-full">
                    R$ {p.preco.toLocaleString("pt-BR")}
                  </span>
                  <a href={`${wppBase}${encodeURIComponent(`Olá! Gostaria de encomendar: ${p.nome} — ${p.descricao}.`)}`}
                    target="_blank" rel="noopener noreferrer"
                    className="label-caps text-rose-500 border border-rose-300 rounded-full px-3 py-1.5 hover:bg-rose-50 transition-colors text-xs">
                    Pedir
                  </a>
                </div>
              </div>
            </div>
          ))}
        </HorizontalScroll>
      </section>

      <div className="text-center pb-20">
        <Link href="/#catalogo" className="text-stone-400 hover:text-rose-500 transition-colors label-caps">← Voltar ao Cardápio</Link>
      </div>
    </main>
  );
}
