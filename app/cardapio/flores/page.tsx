// app/cardapio/flores/page.tsx
import Link from "next/link";
import { floresData } from "@/lib/catalog-data";

const wppBase = "https://wa.me/5512997973143?text=";

function PrecoTag({ valor }: { valor: number | null }) {
  if (valor === null) return <span className="text-xs text-rose-400 italic">Consulte</span>;
  return (
    <span className="inline-block bg-rose-100 text-rose-700 font-semibold text-sm px-3 py-1 rounded-full">
      R$ {valor.toLocaleString("pt-BR", { minimumFractionDigits: 2 })}
    </span>
  );
}

function Foto({ emoji = "🌸", alt }: { emoji?: string; alt: string }) {
  return (
    <div className="w-full aspect-[4/3] bg-rose-50 flex items-center justify-center text-6xl" aria-label={alt}>
      {emoji}
    </div>
  );
}

function ProductCard({ emoji = "🌸", nome, sub, descricao, preco, observacao, wppMsg }: {
  emoji?: string; nome: string; sub?: string; descricao?: string | null;
  preco: number | null; observacao?: string | null; wppMsg: string;
}) {
  return (
    <div className="bg-white border border-rose-100 rounded-2xl overflow-hidden hover:shadow-md transition-shadow flex flex-col">
      <Foto emoji={emoji} alt={nome} />
      <div className="p-5 flex flex-col flex-1">
        <h4 className="text-base font-serif text-stone-800 mb-0.5">{nome}</h4>
        {sub && <p className="text-xs text-rose-400 font-medium mb-2">{sub}</p>}
        {descricao && <p className="text-stone-500 text-sm leading-relaxed mb-3">{descricao}</p>}
        {observacao && <p className="text-stone-400 text-xs italic mb-3">{observacao}</p>}
        <div className="mt-auto flex items-center justify-between gap-3 flex-wrap pt-3 border-t border-rose-50">
          <PrecoTag valor={preco} />
          <a
            href={`${wppBase}${encodeURIComponent(wppMsg)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs uppercase tracking-widest text-rose-500 border border-rose-300 rounded-full px-4 py-1.5 hover:bg-rose-50 transition-colors"
          >
            Encomendar
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

      {/* BREADCRUMB */}
      <div className="sticky top-0 z-40 bg-white/90 backdrop-blur border-b border-rose-100">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center gap-2 text-sm text-stone-500">
          <Link href="/" className="hover:text-rose-500 transition-colors">Lady Laura Atelier</Link>
          <span>›</span>
          <Link href="/#cardapio" className="hover:text-rose-500 transition-colors">Cardápio</Link>
          <span>›</span>
          <span className="text-rose-500 font-medium">Flores & Arranjos</span>
        </div>
      </div>

      {/* HERO */}
      <section className="max-w-6xl mx-auto px-4 pt-16 pb-10 text-center">
        <p className="text-rose-400 tracking-widest text-xs uppercase mb-3 font-medium">Catálogo</p>
        <h1 className="text-4xl md:text-5xl font-serif font-light text-stone-800 mb-4">Flores & Arranjos</h1>
        <div className="w-16 h-px bg-rose-300 mx-auto mb-6" />
        <p className="text-stone-500 max-w-xl mx-auto text-sm leading-relaxed">{intro}</p>
      </section>

      {/* ARRANJOS FRESCOS */}
      <section className="max-w-6xl mx-auto px-4 pb-20" id="arranjos-frescos">
        <h2 className="text-2xl md:text-3xl font-serif text-stone-800">Arranjos Florais Frescos</h2>
        <p className="text-stone-500 text-sm mt-1 mb-2 max-w-lg">Composições montadas diariamente com flores nobres e folhagens frescas.</p>
        <div className="w-10 h-px bg-rose-300 mt-3 mb-8" />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {arranjosFrescos.map((a) => (
            <ProductCard
              key={a.nome + a.tamanho}
              emoji="🌸"
              nome={a.nome}
              sub={`Tamanho ${a.tamanho}`}
              descricao={a.hastes}
              preco={a.preco}
              wppMsg={`Olá! Gostaria de encomendar o ${a.nome} (${a.tamanho}).`}
            />
          ))}
        </div>
      </section>

      {/* ROSAS */}
      <section className="bg-rose-50/50 py-20" id="rosas">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-serif text-stone-800">Rosas</h2>
          <p className="text-stone-500 text-sm mt-1 mb-2 max-w-lg">Arranjos especiais de rosas. Também disponível na cor de sua escolha — consulte.</p>
          <div className="w-10 h-px bg-rose-300 mt-3 mb-8" />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {rosasVermelhas.map((a) => (
              <ProductCard
                key={a.nome + a.tamanho}
                emoji="🌹"
                nome={a.nome}
                sub={`Tamanho ${a.tamanho}`}
                descricao={a.hastes}
                preco={a.preco}
                observacao={a.observacao}
                wppMsg={`Olá! Gostaria de encomendar o ${a.nome} (${a.tamanho}).`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* FLORES SECAS */}
      <section className="max-w-6xl mx-auto px-4 py-20" id="flores-secas">
        <h2 className="text-2xl md:text-3xl font-serif text-stone-800">Flores Secas & Peças Especiais</h2>
        <p className="text-stone-500 text-sm mt-1 mb-2 max-w-lg">Arranjos duradouros em flores secas, garrafinhas e peças especiais.</p>
        <div className="w-10 h-px bg-rose-300 mt-3 mb-8" />
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {floresSecas.map((a, i) => (
            <ProductCard
              key={i}
              emoji="🌾"
              nome={a.nome}
              sub={a.tamanho ? `Tamanho ${a.tamanho}` : undefined}
              descricao={a.descricao}
              preco={a.preco}
              wppMsg={`Olá! Gostaria de encomendar: ${a.nome}${a.tamanho ? ` (${a.tamanho})` : ""}.`}
            />
          ))}
        </div>
      </section>

      {/* VASOS */}
      <section className="bg-rose-50/50 py-20" id="vasos">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-serif text-stone-800">Vasos Florais</h2>
          <p className="text-stone-500 text-sm mt-1 mb-2 max-w-lg">Arranjos montados em vasos de cristal, vidro e design especial — presenteáveis e duradouros.</p>
          <div className="w-10 h-px bg-rose-300 mt-3 mb-8" />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {vasos.map((v) => (
              <ProductCard
                key={v.nome}
                emoji="🌷"
                nome={v.nome}
                descricao={v.descricao}
                preco={v.preco}
                observacao={v.observacao}
                wppMsg={`Olá! Gostaria de encomendar o ${v.nome}.`}
              />
            ))}
          </div>
        </div>
      </section>

      <div className="text-center py-16">
        <Link href="/#cardapio" className="inline-block text-sm text-stone-400 hover:text-rose-500 transition-colors">
          ← Voltar ao Cardápio
        </Link>
      </div>
    </main>
  );
}
