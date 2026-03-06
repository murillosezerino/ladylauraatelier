// app/cardapio/flores/page.tsx
import Link from "next/link";
import Image from "next/image";
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

function ProductCard({
  foto, alt, emoji = "🌸", nome, sub, descricao, preco, observacao, wppMsg,
}: {
  foto: string; alt: string; emoji?: string; nome: string; sub?: string;
  descricao?: string | null; preco: number | null; observacao?: string | null; wppMsg: string;
}) {
  return (
    <div className="bg-white border border-rose-100 rounded-2xl overflow-hidden hover:shadow-md transition-shadow group flex flex-col">
      <div className="relative w-full aspect-[4/3] bg-rose-50 flex items-center justify-center overflow-hidden">
        <Image src={foto} alt={alt} fill className="object-cover group-hover:scale-105 transition-transform duration-500" onError={() => {}} />
        <span className="text-5xl select-none" aria-hidden>{emoji}</span>
      </div>
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

function SectionTitle({ children, sub }: { children: React.ReactNode; sub?: string }) {
  return (
    <div className="mb-8">
      <h2 className="text-2xl md:text-3xl font-serif text-stone-800">{children}</h2>
      {sub && <p className="text-stone-500 text-sm mt-1 max-w-lg">{sub}</p>}
      <div className="w-10 h-px bg-rose-300 mt-4" />
    </div>
  );
}

export default function FloresPage() {
  const { arranjosFrescos, rosasVermelhas, floresSecas, vasos, intro } = floresData;

  return (
    <main className="min-h-screen bg-[#fdfaf7] text-stone-800">
      {/* ── BREADCRUMB ── */}
      <div className="sticky top-0 z-40 bg-white/90 backdrop-blur border-b border-rose-100">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center gap-2 text-sm text-stone-500">
          <Link href="/" className="hover:text-rose-500 transition-colors">Lady Laura Atelier</Link>
          <span>›</span>
          <Link href="/#cardapio" className="hover:text-rose-500 transition-colors">Cardápio</Link>
          <span>›</span>
          <span className="text-rose-500 font-medium">Flores & Arranjos</span>
        </div>
      </div>

      {/* ── HERO ── */}
      <section className="max-w-6xl mx-auto px-4 pt-16 pb-10 text-center">
        <p className="text-rose-400 tracking-widest text-xs uppercase mb-3 font-medium">Catálogo</p>
        <h1 className="text-4xl md:text-5xl font-serif font-light text-stone-800 mb-4">Flores & Arranjos</h1>
        <div className="w-16 h-px bg-rose-300 mx-auto mb-6" />
        <p className="text-stone-500 max-w-xl mx-auto text-sm leading-relaxed">{intro}</p>
      </section>

      {/* ──────────────────────────────
          SECÇÃO 1 — ARRANJOS FRESCOS
      ────────────────────────────── */}
      <section className="max-w-6xl mx-auto px-4 pb-20" id="arranjos-frescos">
        <SectionTitle sub="Composições montadas diariamente com flores nobres e folhagens frescas.">
          Arranjos Florais Frescos
        </SectionTitle>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {arranjosFrescos.map((a) => (
            <ProductCard
              key={a.nome + a.tamanho}
              foto={a.foto}
              alt={a.nome}
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

      {/* ──────────────────────────────
          SECÇÃO 2 — ROSAS
      ────────────────────────────── */}
      <section className="bg-rose-50/50 py-20" id="rosas">
        <div className="max-w-6xl mx-auto px-4">
          <SectionTitle sub="Arranjos especiais de rosas. Também disponível na cor de sua escolha — consulte.">
            Rosas
          </SectionTitle>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {rosasVermelhas.map((a) => (
              <ProductCard
                key={a.nome + a.tamanho}
                foto={a.foto}
                alt={a.nome}
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

      {/* ──────────────────────────────
          SECÇÃO 3 — FLORES SECAS & ESPECIAIS
      ────────────────────────────── */}
      <section className="max-w-6xl mx-auto px-4 py-20" id="flores-secas">
        <SectionTitle sub="Arranjos duradouros em flores secas, garrafinhas e peças especiais.">
          Flores Secas & Peças Especiais
        </SectionTitle>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {floresSecas.map((a, i) => (
            <ProductCard
              key={i}
              foto={a.foto}
              alt={a.nome}
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

      {/* ──────────────────────────────
          SECÇÃO 4 — VASOS FLORAIS
      ────────────────────────────── */}
      <section className="bg-rose-50/50 py-20" id="vasos">
        <div className="max-w-6xl mx-auto px-4">
          <SectionTitle sub="Arranjos montados em vasos de cristal, vidro e design especial — presenteáveis e duradouros.">
            Vasos Florais
          </SectionTitle>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {vasos.map((v) => (
              <ProductCard
                key={v.nome}
                foto={v.foto}
                alt={v.nome}
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

      {/* ── FOOTER INTERNO ── */}
      <div className="text-center py-16">
        <Link href="/#cardapio" className="inline-block text-sm text-stone-400 hover:text-rose-500 transition-colors border-b border-transparent hover:border-rose-300">
          ← Voltar ao Cardápio
        </Link>
      </div>
    </main>
  );
}
