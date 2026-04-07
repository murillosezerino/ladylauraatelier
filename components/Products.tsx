// components/Products.tsx
"use client";
import Link from "next/link";
import ProductImage from "@/components/ProductImage";
import { siteConfig } from "@/lib/data";

const categorias = [
  {
    titulo: "Confeitaria & Doces",
    foto: "/images/eventos/mesa-doces-1.webp",
    emoji: "🎂",
    descricao: "Bolos festivos, profiteroles, éclairs, mille-feuille, brigadeiros gourmet e muito mais. Técnica Le Cordon Bleu Paris.",
    destaques: ["Baby Cake · Aro 15 · Aro 20 · Aro 25", "Seleção fixa + Buttercream personalizado", "Doces finos para eventos"],
    href: "/catalogo/bolos",
    wpp: `https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent('Olá! Gostaria de encomendar doces.')}`,
  },
  {
    titulo: "Flores & Arranjos",
    foto: "/images/flores/copo-de-leite.jpg",
    emoji: "🌸",
    descricao: "Arranjos frescos montados diariamente, rosas nobres, flores secas, vasos de cristal e peças especiais assinadas por Renata Chagas.",
    destaques: ["Arranjos frescos (6 tamanhos)", "Rosas · Flores secas · Vasos", "Galocha de Cerâmica · Aquário de Orquídea"],
    href: "/catalogo/flores",
    wpp: `https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent('Olá! Tenho interesse nas flores e arranjos.')}`,
  },
  {
    titulo: "Kits & Presentes",
    foto: "/images/macarons/macarons-caixa-rosa.webp",
    emoji: "🎁",
    descricao: "Kits especiais para datas comemorativas, casamentos, empresas e momentos que merecem ser lembrados — com flores, chocolates e espumantes.",
    destaques: ["Box Café da Manhã · Breakfast at Tiffany's", "15+ kits com flores nomeados", "Latinhas · Chocolates · Linha Home"],
    href: "/catalogo/kits",
    wpp: `https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent('Olá! Gostaria de montar um kit especial.')}`,
  },
  {
    titulo: "Eventos & Reservas",
    foto: "/images/eventos/mesa-casamento.webp",
    emoji: "🥂",
    descricao: "Projetos especiais para celebrar momentos únicos — do brunch íntimo ao casamento dos sonhos, com decoração floral, menu e exclusividade.",
    destaques: ["Sunday Brunch · Petit Comité", "Petit Jardin · Grand Royale", "Até 55 pessoas · Casa exclusiva"],
    href: "/catalogo/eventos",
    wpp: `https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent('Olá! Gostaria de saber mais sobre os projetos de eventos.')}`,
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
