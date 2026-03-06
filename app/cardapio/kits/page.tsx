// app/cardapio/kits/page.tsx
import Link from "next/link";
import { kitsData } from "@/lib/catalog-data";

const wppBase = "https://wa.me/5512997973143?text=";

function PrecoTag({ valor }: { valor: number }) {
  return (
    <span className="inline-block bg-rose-100 text-rose-700 font-semibold text-sm px-3 py-1 rounded-full">
      R$ {valor.toLocaleString("pt-BR", { minimumFractionDigits: 2 })}
    </span>
  );
}

function Foto({ emoji = "🎁", alt }: { emoji?: string; alt: string }) {
  return (
    <div className="w-full aspect-[4/3] bg-rose-50 flex items-center justify-center text-6xl" aria-label={alt}>
      {emoji}
    </div>
  );
}

function KitCard({ kit }: { kit: { nome: string; preco: number; foto: string; itens: string[]; observacao?: string } }) {
  return (
    <div className="bg-white border border-rose-100 rounded-2xl overflow-hidden hover:shadow-md transition-shadow flex flex-col">
      <Foto emoji="🎁" alt={kit.nome} />
      <div className="p-5 flex flex-col flex-1">
        <div className="flex items-start justify-between gap-2 mb-3 flex-wrap">
          <h4 className="text-lg font-serif text-stone-800 leading-tight">{kit.nome}</h4>
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
        {kit.observacao && <p className="text-stone-400 text-xs italic mb-4">{kit.observacao}</p>}
        <div className="mt-auto pt-3 border-t border-rose-50">
          <a
            href={`${wppBase}${encodeURIComponent(`Olá! Gostaria de encomendar o ${kit.nome}.`)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="block text-center text-xs uppercase tracking-widest text-rose-500 border border-rose-300 rounded-full px-4 py-2 hover:bg-rose-50 transition-colors"
          >
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

      {/* BREADCRUMB */}
      <div className="sticky top-0 z-40 bg-white/90 backdrop-blur border-b border-rose-100">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center gap-2 text-sm text-stone-500">
          <Link href="/" className="hover:text-rose-500 transition-colors">Lady Laura Atelier</Link>
          <span>›</span>
          <Link href="/#cardapio" className="hover:text-rose-500 transition-colors">Cardápio</Link>
          <span>›</span>
          <span className="text-rose-500 font-medium">Kits & Presentes</span>
        </div>
      </div>

      {/* HERO */}
      <section className="max-w-6xl mx-auto px-4 pt-16 pb-10 text-center">
        <p className="text-rose-400 tracking-widest text-xs uppercase mb-3 font-medium">Catálogo</p>
        <h1 className="text-4xl md:text-5xl font-serif font-light text-stone-800 mb-4">Kits & Presentes</h1>
        <div className="w-16 h-px bg-rose-300 mx-auto mb-6" />
        <p className="text-stone-500 max-w-xl mx-auto text-sm leading-relaxed">{nota}</p>
      </section>

      {/* CAFÉ DA MANHÃ */}
      <section className="max-w-6xl mx-auto px-4 pb-20" id="cafe-da-manha">
        <h2 className="text-2xl md:text-3xl font-serif text-stone-800">Café da Manhã</h2>
        <p className="text-stone-500 text-sm mt-1 mb-2 max-w-lg">Kits completos para um café da manhã inesquecível com flores, doces e itens selecionados.</p>
        <div className="w-10 h-px bg-rose-300 mt-3 mb-8" />
        <div className="grid md:grid-cols-2 gap-6">
          {cafeDaManha.map((kit) => (
            <KitCard key={kit.nome} kit={kit} />
          ))}
        </div>
      </section>

      {/* KITS COM FLORES */}
      <section className="bg-rose-50/50 py-20" id="kits-com-flores">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-serif text-stone-800">Kits com Flores</h2>
          <p className="text-stone-500 text-sm mt-1 mb-2 max-w-lg">Cada kit combina arranjos florais com chocolates, espumantes e doces artesanais.</p>
          <div className="w-10 h-px bg-rose-300 mt-3 mb-8" />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {kitsComFlores.map((kit) => (
              <KitCard key={kit.nome} kit={kit} />
            ))}
          </div>
        </div>
      </section>

      {/* KITS SEM FLORES */}
      <section className="max-w-6xl mx-auto px-4 py-20" id="kits-sem-flores">
        <h2 className="text-2xl md:text-3xl font-serif text-stone-800">Kits de Doces & Espumante</h2>
        <p className="text-stone-500 text-sm mt-1 mb-2 max-w-lg">Kits especiais de doces e espumantes — ótimos para qualquer ocasião.</p>
        <div className="w-10 h-px bg-rose-300 mt-3 mb-8" />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {kitsSemFlores.map((kit) => (
            <KitCard key={kit.nome} kit={kit} />
          ))}
        </div>
      </section>

      {/* LATINHAS & CHOCOLATES */}
      <section className="bg-rose-50/50 py-20" id="latinhas">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-serif text-stone-800">Latinhas, Chocolates & Doces Avulsos</h2>
          <p className="text-stone-500 text-sm mt-1 mb-2 max-w-lg">Peças avulsas para montar o seu presente perfeito ou complementar qualquer kit.</p>
          <div className="w-10 h-px bg-rose-300 mt-3 mb-8" />

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {latinhasEChocolates.map((p) => (
              <div key={p.nome} className="bg-white border border-rose-100 rounded-2xl overflow-hidden hover:shadow-md transition-shadow flex flex-col">
                <div className="w-full aspect-square bg-rose-50 flex items-center justify-center text-5xl">🍫</div>
                <div className="p-4 flex flex-col flex-1">
                  <h4 className="font-serif text-stone-800 mb-1">{p.nome}</h4>
                  {p.descricao && <p className="text-stone-500 text-xs leading-relaxed mb-3 flex-1">{p.descricao}</p>}
                  <div className="mt-auto pt-2 border-t border-rose-50 flex items-center justify-between">
                    <span className="inline-block bg-rose-100 text-rose-700 font-semibold text-sm px-3 py-1 rounded-full">
                      R$ {p.preco.toLocaleString("pt-BR", { minimumFractionDigits: 2 })}
                    </span>
                    <a
                      href={`${wppBase}${encodeURIComponent(`Olá! Gostaria de encomendar: ${p.nome}.`)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs text-rose-500 hover:underline"
                    >
                      Pedir
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Tabelas de caixas */}
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { titulo: "Caixas de Brigous 🍬", rows: caixasBrigous },
              { titulo: "Caixa de Macarons 🌈", rows: caixasMacarons },
              { titulo: "Caixas de Trufas 🍫", rows: caixasTrufas },
            ].map((tbl) => (
              <div key={tbl.titulo} className="bg-white border border-rose-100 rounded-2xl overflow-hidden">
                <div className="bg-rose-50 px-5 py-3">
                  <h4 className="font-semibold text-stone-700 text-sm">{tbl.titulo}</h4>
                </div>
                <div className="divide-y divide-rose-50">
                  {tbl.rows.map((row) => (
                    <div key={row.qtd} className="flex items-center justify-between px-5 py-3">
                      <span className="text-stone-600 text-sm">{row.qtd}</span>
                      <span className="text-rose-600 font-semibold text-sm">R$ {row.preco}</span>
                    </div>
                  ))}
                </div>
                <div className="px-5 py-3">
                  <a
                    href={`${wppBase}${encodeURIComponent(`Olá! Gostaria de encomendar: ${tbl.titulo.replace(/[^\w\sÀ-ÿ]/g, "").trim()}.`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-center text-xs uppercase tracking-widest text-rose-500 border border-rose-300 rounded-full px-4 py-2 hover:bg-rose-50 transition-colors"
                  >
                    Encomendar
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* LINHA HOME */}
      <section className="max-w-6xl mx-auto px-4 py-20" id="linha-home">
        <h2 className="text-2xl md:text-3xl font-serif text-stone-800">Linha Home</h2>
        <p className="text-stone-500 text-sm mt-1 mb-2 max-w-lg">{linhaHome.descricao}</p>
        <div className="w-10 h-px bg-rose-300 mt-3 mb-6" />

        <div className="flex flex-wrap gap-2 mb-8">
          <span className="text-xs text-stone-500 self-center mr-1">Aromas:</span>
          {linhaHome.aromas.map((a) => (
            <span key={a} className="bg-amber-50 text-amber-700 text-sm px-3 py-1 rounded-full border border-amber-200">{a}</span>
          ))}
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {linhaHome.produtos.map((p) => (
            <div key={p.nome + p.descricao} className="bg-white border border-rose-100 rounded-2xl overflow-hidden hover:shadow-md transition-shadow flex flex-col">
              <div className="w-full aspect-[4/3] bg-amber-50/50 flex items-center justify-center text-6xl">🕯️</div>
              <div className="p-5 flex flex-col flex-1">
                <h4 className="font-serif text-stone-800 mb-1">{p.nome}</h4>
                <p className="text-stone-500 text-sm mb-4 flex-1">{p.descricao}</p>
                <div className="pt-3 border-t border-rose-50 flex items-center justify-between">
                  <span className="inline-block bg-rose-100 text-rose-700 font-semibold text-sm px-3 py-1 rounded-full">
                    R$ {p.preco.toLocaleString("pt-BR")}
                  </span>
                  <a
                    href={`${wppBase}${encodeURIComponent(`Olá! Gostaria de encomendar: ${p.nome} — ${p.descricao}.`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs uppercase tracking-widest text-rose-500 border border-rose-300 rounded-full px-4 py-1.5 hover:bg-rose-50 transition-colors"
                  >
                    Pedir
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <div className="text-center pb-16">
        <Link href="/#cardapio" className="inline-block text-sm text-stone-400 hover:text-rose-500 transition-colors">
          ← Voltar ao Cardápio
        </Link>
      </div>
    </main>
  );
}
