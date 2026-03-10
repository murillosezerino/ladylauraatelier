// components/Products.tsx
"use client";
import Link from "next/link";
import ProductImage from "@/components/ProductImage";

const categorias = [
  {
    titulo: "Bolos & Doces",
    foto: "/images/bolos/capa-bolos.jpg",
    emoji: "🎂",
    descricao: "Bolos festivos e artísticos sob encomenda — naked cake, buttercream, drip cake, e muito mais. 12 sabores da casa para escolher.",
    destaques: ["Baby Cake · Aro 15 · Aro 20 · Aro 25", "Seleção fixa + Buttercream personalizado", "Doces para eventos"],
    href: "/catalogo/bolos",
    wpp: "https://wa.me/5512982910000?text=Olá!%20Gostaria%20de%20encomendar%20um%20bolo%20personalizado.",
  },
  {
    titulo: "Flores & Arranjos",
    foto: "/images/flores/capa-flores.jpg",
    emoji: "🌸",
    descricao: "Arranjos frescos montados diariamente, rosas nobres, flores secas, vasos de cristal e peças especiais assinadas por Renata Chagas.",
    destaques: ["Arranjos frescos (6 tamanhos)", "Rosas · Flores secas · Vasos", "Galocha de Cerâmica · Aquário de Orquídea"],
    href: "/catalogo/flores",
    wpp: "https://wa.me/5512982910000?text=Olá!%20Tenho%20interesse%20nas%20flores%20e%20arranjos.",
  },
  {
    titulo: "Kits & Presentes",
    foto: "/images/kits/capa-presentes.jpg",
    emoji: "🎁",
    descricao: "Kits especiais para datas comemorativas, casamentos, empresas e momentos que merecem ser lembrados — com flores, chocolates e espumantes.",
    destaques: ["Box Café da Manhã · Breakfast at Tiffany's", "15+ kits com flores nomeados", "Latinhas · Chocolates · Linha Home"],
    href: "/catalogo/kits",
    wpp: "https://wa.me/5512982910000?text=Olá!%20Gostaria%20de%20montar%20um%20kit%20especial.",
  },
  {
    titulo: "Eventos & Reservas",
    foto: "/images/eventos/capa-eventos.jpg",
    emoji: "🥂",
    descricao: "Projetos especiais para celebrar momentos únicos — do brunch íntimo ao casamento dos sonhos, com decoração floral, menu e exclusividade.",
    destaques: ["Sunday Brunch · Petit Comité", "Petit Jardin · Grand Royale", "Até 55 pessoas · Casa exclusiva"],
    href: "/catalogo/eventos",
    wpp: "https://wa.me/5512982910000?text=Ol%C3%A1!%20Gostaria%20de%20saber%20mais%20sobre%20os%20projetos%20de%20eventos.",
  },
];

export default function Products() {
  return (
    <section id="catalogo" className="py-24 bg-[#fdfaf7]">
      <div className="max-w-6xl mx-auto px-4">

        {/* Cabeçalho */}
        <div className="text-center mb-16">
          <p className="text-rose-400 tracking-widest text-xs uppercase mb-3 font-medium">Notre Carte</p>
          <h2 className="text-3xl md:text-4xl font-serif font-light text-stone-800 mb-4">Catálogo</h2>
          <span className="inline-block text-rose-300 text-xl">✦</span>
        </div>

        {/* Cards de categoria */}
        <div className="grid sm:grid-cols-2 xl:grid-cols-4 gap-6">
          {categorias.map((cat) => (
            <div
              key={cat.titulo}
              className="bg-white border border-rose-100 rounded-2xl overflow-hidden hover:shadow-lg transition-shadow flex flex-col"
            >
              {/* Imagem de capa — usa emoji como fallback enquanto foto não existir */}
              <Link href={cat.href}>
  <ProductImage
    src={cat.foto}
    alt={cat.titulo}
    fallbackEmoji={cat.emoji}
    aspectClass="aspect-[4/3]"
  />
</Link>

              {/* Conteúdo */}
              <div className="p-6 flex flex-col flex-1">
                <h3 className="text-xl font-serif text-stone-800 mb-2">{cat.titulo}</h3>
                <p className="text-stone-500 text-sm leading-relaxed mb-4">{cat.descricao}</p>

                {/* Destaques */}
                <ul className="space-y-1.5 mb-6 flex-1">
                  {cat.destaques.map((d) => (
                    <li key={d} className="flex items-start gap-2 text-sm text-stone-500">
                      <span className="text-rose-300 mt-0.5 shrink-0">✦</span>
                      {d}
                    </li>
                  ))}
                </ul>

                {/* Botões */}
                <div className="flex flex-col gap-2">
                  <Link
                    href={cat.href}
                    className="block text-center bg-rose-500 text-white text-sm font-medium px-4 py-2.5 rounded-full hover:bg-rose-600 transition-colors"
                  >
                    Ver catálogo completo
                  </Link>
                  <a
                    href={cat.wpp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-center text-sm text-rose-500 border border-rose-300 px-4 py-2.5 rounded-full hover:bg-rose-50 transition-colors"
                  >
                    Encomendar via WhatsApp
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <p className="text-center text-stone-400 text-xs mt-8">
          Todos os produtos são feitos artesanalmente sob encomenda · Consulte disponibilidade
        </p>
      </div>
    </section>
  );
}
