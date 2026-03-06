// app/cardapio/bolos/page.tsx
import Link from "next/link";
import { bolosData } from "@/lib/catalog-data";

const wppBase = "https://wa.me/5512997973143?text=";

function PrecoTag({ valor }: { valor: number }) {
  return (
    <span className="inline-block bg-rose-100 text-rose-700 font-semibold text-sm px-3 py-1 rounded-full">
      R$ {valor.toLocaleString("pt-BR")}
    </span>
  );
}

function Foto({ emoji = "🎂", alt }: { emoji?: string; alt: string }) {
  return (
    <div className="w-full aspect-[4/3] bg-rose-50 flex items-center justify-center text-6xl" aria-label={alt}>
      {emoji}
    </div>
  );
}

export default function BolosPage() {
  const { bolosFestivos, bolosButtercream, docesEventos, tamanhos, intro } = bolosData;

  return (
    <main className="min-h-screen bg-[#fdfaf7] text-stone-800">

      {/* BREADCRUMB */}
      <div className="sticky top-0 z-40 bg-white/90 backdrop-blur border-b border-rose-100">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center gap-2 text-sm text-stone-500">
          <Link href="/" className="hover:text-rose-500 transition-colors">Lady Laura Atelier</Link>
          <span>›</span>
          <Link href="/#cardapio" className="hover:text-rose-500 transition-colors">Cardápio</Link>
          <span>›</span>
          <span className="text-rose-500 font-medium">Bolos & Eventos</span>
        </div>
      </div>

      {/* HERO */}
      <section className="max-w-6xl mx-auto px-4 pt-16 pb-10 text-center">
        <p className="text-rose-400 tracking-widest text-xs uppercase mb-3 font-medium">Menu de</p>
        <h1 className="text-4xl md:text-5xl font-serif font-light text-stone-800 mb-4">Bolos & Doces para Eventos</h1>
        <div className="w-16 h-px bg-rose-300 mx-auto mb-6" />
        <p className="text-stone-500 max-w-xl mx-auto text-sm leading-relaxed">
          Cada bolo é criado sob encomenda com ingredientes selecionados. Escolha o sabor, o tamanho e personalize a decoração para o seu momento especial.
        </p>
      </section>

      {/* INFORMAÇÕES */}
      <section className="max-w-5xl mx-auto px-4 pb-16">
        <div className="grid md:grid-cols-2 gap-4">
          {[
            { label: "Prazo", texto: intro.antecedencia },
            { label: "Como pedir", texto: intro.pedido },
            { label: "Pagamento", texto: intro.pagamento },
            { label: "Retirada", texto: intro.retirada },
          ].map((item) => (
            <div key={item.label} className="bg-white border border-rose-100 rounded-2xl p-5">
              <p className="text-xs font-semibold uppercase tracking-wider text-rose-400 mb-1">{item.label}</p>
              <p className="text-stone-600 text-sm leading-relaxed">{item.texto}</p>
            </div>
          ))}
        </div>
      </section>

      {/* BOLOS FESTIVOS */}
      <section className="max-w-6xl mx-auto px-4 pb-20" id="bolos-festivos">
        <h2 className="text-2xl md:text-3xl font-serif text-stone-800">Bolos Festivos</h2>
        <p className="text-rose-400 text-xs uppercase tracking-widest font-medium mt-1">Seleção fixa da casa</p>
        <div className="w-10 h-px bg-rose-300 mt-4 mb-6" />
        <p className="text-stone-500 text-sm mb-8 max-w-lg">{bolosFestivos.descricao}</p>

        <div className="overflow-x-auto mb-12">
          <table className="w-full text-sm bg-white rounded-2xl border border-rose-100 overflow-hidden">
            <thead className="bg-rose-50">
              <tr>
                {["Tamanho", "Diâmetro", "Altura", "Porções", "Preço"].map((h) => (
                  <th key={h} className="px-4 py-3 text-left text-xs uppercase tracking-wider text-rose-500 font-semibold">{h}</th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-rose-50">
              {tamanhos.map((t, i) => {
                const precos = [bolosFestivos.precos.babyCake, bolosFestivos.precos.aro15, bolosFestivos.precos.aro20, bolosFestivos.precos.aro25];
                return (
                  <tr key={t.nome} className="hover:bg-rose-50/40 transition-colors">
                    <td className="px-4 py-3 font-medium text-stone-700">{t.nome}</td>
                    <td className="px-4 py-3 text-stone-500">{t.diametro}</td>
                    <td className="px-4 py-3 text-stone-500">{t.altura}</td>
                    <td className="px-4 py-3 text-stone-500">{t.porcoes}</td>
                    <td className="px-4 py-3"><PrecoTag valor={precos[i]} /></td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

        <h3 className="text-xl font-serif text-stone-700 mb-6">Sabores disponíveis</h3>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {bolosFestivos.sabores.map((s) => (
            <div key={s.nome} className="bg-white border border-rose-100 rounded-2xl overflow-hidden hover:shadow-md transition-shadow flex flex-col">
              <div className="relative">
                <Foto emoji="🎂" alt={s.nome} />
                {s.badge === "best-seller" && (
                  <span className="absolute top-3 right-3 bg-amber-400 text-white text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded-full shadow">
                    Best Seller
                  </span>
                )}
              </div>
              <div className="p-5 flex flex-col flex-1">
                <h4 className="text-lg font-serif text-stone-800 mb-2">{s.nome}</h4>
                <p className="text-stone-500 text-sm leading-relaxed mb-4 flex-1">{s.descricao}</p>
                <a
                  href={`${wppBase}Olá!+Gostaria+de+encomendar+um+bolo+${encodeURIComponent(s.nome)}.`}
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
      </section>

      {/* BUTTERCREAM */}
      <section className="bg-rose-50/50 py-20" id="bolos-buttercream">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-serif text-stone-800">Bolos em Buttercream</h2>
          <p className="text-rose-400 text-xs uppercase tracking-widest font-medium mt-1">Bolos artísticos personalizados</p>
          <div className="w-10 h-px bg-rose-300 mt-4 mb-6" />
          <p className="text-stone-500 text-sm mb-8 max-w-lg">{bolosButtercream.descricao}</p>

          <div className="overflow-x-auto mb-10">
            <table className="w-full text-sm bg-white rounded-2xl border border-rose-100 overflow-hidden">
              <thead className="bg-rose-50">
                <tr>
                  {["Tamanho", "Diâmetro", "Porções", "Preço"].map((h) => (
                    <th key={h} className="px-4 py-3 text-left text-xs uppercase tracking-wider text-rose-500 font-semibold">{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-rose-50">
                {tamanhos.map((t, i) => {
                  const precos = [bolosButtercream.precos.babyCake, bolosButtercream.precos.aro15, bolosButtercream.precos.aro20, bolosButtercream.precos.aro25];
                  return (
                    <tr key={t.nome} className="hover:bg-rose-50/40 transition-colors">
                      <td className="px-4 py-3 font-medium text-stone-700">{t.nome}</td>
                      <td className="px-4 py-3 text-stone-500">{t.diametro}</td>
                      <td className="px-4 py-3 text-stone-500">{t.porcoes}</td>
                      <td className="px-4 py-3"><PrecoTag valor={precos[i]} /></td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>

          <div className="bg-white border border-rose-100 rounded-2xl p-6 mb-8">
            <h3 className="text-base font-semibold text-stone-700 mb-3">Sabores disponíveis</h3>
            <div className="flex flex-wrap gap-2">
              {bolosButtercream.saboresDisponiveis.map((s) => (
                <span key={s} className="bg-rose-50 text-rose-600 text-sm px-3 py-1 rounded-full border border-rose-200">{s}</span>
              ))}
            </div>
            <p className="text-stone-400 text-xs mt-4">{bolosButtercream.nota}</p>
          </div>

          <h3 className="text-xl font-serif text-stone-700 mb-6">Estilos de decoração</h3>
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            {bolosButtercream.estilosDecoracao.map((e) => (
              <div key={e.nome} className="bg-white border border-rose-100 rounded-2xl overflow-hidden hover:shadow-md transition-shadow">
                <Foto emoji="🎨" alt={e.nome} />
                <div className="p-5">
                  <h4 className="text-lg font-serif text-stone-800 mb-2">{e.nome}</h4>
                  <p className="text-stone-500 text-sm leading-relaxed">{e.descricao}</p>
                </div>
              </div>
            ))}
          </div>

          <a
            href={`${wppBase}Olá!+Gostaria+de+encomendar+um+bolo+em+Buttercream+personalizado.`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-rose-500 text-white text-sm font-medium px-8 py-3 rounded-full hover:bg-rose-600 transition-colors"
          >
            Solicitar orçamento de decoração
          </a>
        </div>
      </section>

      {/* DOCES PARA EVENTOS */}
      <section className="max-w-6xl mx-auto px-4 py-20" id="doces-eventos">
        <h2 className="text-2xl md:text-3xl font-serif text-stone-800 mb-2">Doces para Eventos</h2>
        <div className="w-10 h-px bg-rose-300 mb-6" />
        <div className="bg-white border border-rose-100 rounded-2xl overflow-hidden grid md:grid-cols-2">
          <div className="bg-rose-50 flex items-center justify-center text-8xl min-h-[260px]">🍬</div>
          <div className="p-8 flex flex-col justify-center">
            <p className="text-stone-600 leading-relaxed mb-6">{docesEventos.descricao}</p>
            <p className="text-stone-400 text-sm italic mb-8">{docesEventos.observacao}</p>
            <a
              href={`${wppBase}Olá!+Gostaria+de+informações+sobre+doces+para+eventos.`}
              target="_blank"
              rel="noopener noreferrer"
              className="self-start bg-rose-500 text-white text-sm font-medium px-8 py-3 rounded-full hover:bg-rose-600 transition-colors"
            >
              Falar com a equipe
            </a>
          </div>
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
