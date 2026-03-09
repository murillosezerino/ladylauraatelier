// app/cardapio/flores/page.tsx
import Link from "next/link";
import { floresData } from "@/lib/catalog-data";
import ProductImage from "@/components/ProductImage";
import HorizontalScroll from "@/components/HorizontalScroll";
import ScrollReveal from "@/components/ScrollReveal"

const wppBase = "https://wa.me/5512997973143?text=";

function PrecoTag({ valor }: { valor: number | null }) {
  if (valor === null) return <span className="text-sm text-rose-400 italic">Consulte</span>;
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

function FlowerCard({ emoji, nome, sub, descricao, preco, observacao, wppMsg }: {
  emoji: string; nome: string; sub?: string; descricao?: string | null;
  preco: number | null; observacao?: string | null; wppMsg: string;
}) {
  return (
    <div className="scroll-card bg-white border border-rose-100 rounded-2xl overflow-hidden hover:shadow-md transition-shadow flex flex-col" style={{ width: '17rem' }}>
      <ProductImage src="" alt={nome} fallbackEmoji={emoji} />
      <div className="p-5 flex flex-col flex-1">
        <h4 className="text-stone-800 mb-0.5" style={{ fontFamily: 'var(--font-cinzel)', fontSize: '1.0625rem' }}>{nome}</h4>
        {sub && <p className="label-caps text-rose-400 mb-2">{sub}</p>}
        {descricao && <p className="text-stone-500 text-sm leading-relaxed mb-2">{descricao}</p>}
        {observacao && <p className="text-stone-400 text-xs italic mb-3">{observacao}</p>}
        <div className="mt-auto pt-3 border-t border-rose-50 flex items-center justify-between gap-2 flex-wrap">
          <PrecoTag valor={preco} />
          <a href={`${wppBase}${encodeURIComponent(wppMsg)}`} target="_blank" rel="noopener noreferrer"
            className="label-caps text-rose-500 border border-rose-300 rounded-full px-3 py-1.5 hover:bg-rose-50 transition-colors">
            Pedir
          </a>
        </div>
      </div>
    </div>
  );
}

export default function FloresPage() {
  const { arranjosFrescos, rosasVermelhas, floresSecas, vasos, intro } = floresData;

  return (
    <main className="min-h-screen bg-[#fdfaf7] text-stone-800">

      <div className="sticky top-0 z-40 bg-white/90 backdrop-blur border-b border-rose-100">
        <div className="max-w-6xl mx-auto px-6 py-3 flex items-center gap-2 text-stone-500" style={{ fontFamily: 'var(--font-josefin)', fontSize: '0.8rem', letterSpacing: '0.08em' }}>
          <Link href="/" className="hover:text-rose-500 transition-colors">Lady Laura Atelier</Link>
          <span>›</span>
          <Link href="/#cardapio" className="hover:text-rose-500 transition-colors">Cardápio</Link>
          <span>›</span>
          <span className="text-rose-500">Flores & Arranjos</span>
        </div>
      </div>

      <section className="max-w-6xl mx-auto px-6 pt-20 pb-12 text-center">
        <p className="label-caps text-rose-400 mb-4">Catálogo</p>
        <h1 className="font-light text-stone-800 mb-4" style={{ fontFamily: 'var(--font-cinzel)' }}>Flores & Arranjos</h1>
        <div className="w-20 h-px bg-rose-300 mx-auto mb-6" />
        <p className="text-stone-500 max-w-xl mx-auto">{intro}</p>
      </section>

      <section className="max-w-6xl mx-auto px-6 pb-20">
        <SectionHeader label="Montados diariamente" title="Arranjos Florais Frescos" desc="Composições com flores nobres e folhagens frescas selecionadas do dia." />
        <p className="label-caps text-stone-400 mb-5">Deslize para ver todos →</p>
        <HorizontalScroll>
          {arranjosFrescos.map((a) => (
            <FlowerCard key={a.nome + a.tamanho} emoji="🌸" nome={a.nome} sub={`Tamanho ${a.tamanho}`}
              descricao={a.hastes} preco={a.preco}
              wppMsg={`Olá! Gostaria de encomendar o ${a.nome} (${a.tamanho}).`} />
          ))}
        </HorizontalScroll>
      </section>

      <section className="bg-rose-50/50 py-20">
        <div className="max-w-6xl mx-auto px-6">
          <SectionHeader label="Nobres & especiais" title="Rosas" desc="Também disponível na cor de sua escolha — consulte disponibilidade." />
          <p className="label-caps text-stone-400 mb-5">Deslize para ver todos →</p>
          <HorizontalScroll>
            {rosasVermelhas.map((a) => (
              <FlowerCard key={a.nome + a.tamanho} emoji="🌹" nome={a.nome} sub={`Tamanho ${a.tamanho}`}
                descricao={a.hastes} preco={a.preco} observacao={a.observacao}
                wppMsg={`Olá! Gostaria de encomendar o ${a.nome} (${a.tamanho}).`} />
            ))}
          </HorizontalScroll>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-20">
        <SectionHeader label="Duradouras" title="Flores Secas & Peças Especiais" desc="Arranjos em flores secas, garrafinhas e peças especiais com acabamento único." />
        <p className="label-caps text-stone-400 mb-5">Deslize para ver todos →</p>
        <HorizontalScroll>
          {floresSecas.map((a, i) => (
            <FlowerCard key={i} emoji="🌾" nome={a.nome} sub={a.tamanho ? `Tamanho ${a.tamanho}` : undefined}
              descricao={a.descricao} preco={a.preco}
              wppMsg={`Olá! Gostaria de encomendar: ${a.nome}${a.tamanho ? ` (${a.tamanho})` : ""}.`} />
          ))}
        </HorizontalScroll>
      </section>

      <section className="bg-rose-50/50 py-20">
        <div className="max-w-6xl mx-auto px-6">
          <SectionHeader label="Presenteáveis" title="Vasos Florais" desc="Arranjos montados em vasos de cristal e vidro — presenteáveis e duradouros." />
          <p className="label-caps text-stone-400 mb-5">Deslize para ver todos →</p>
          <HorizontalScroll>
            {vasos.map((v) => (
              <FlowerCard key={v.nome} emoji="🌷" nome={v.nome} descricao={v.descricao}
                preco={v.preco} observacao={v.observacao}
                wppMsg={`Olá! Gostaria de encomendar o ${v.nome}.`} />
            ))}
          </HorizontalScroll>
        </div>
      </section>

      <div className="text-center py-20">
        <Link href="/#cardapio" className="text-stone-400 hover:text-rose-500 transition-colors label-caps">← Voltar ao Cardápio</Link>
      </div>
    </main>
  );
}
