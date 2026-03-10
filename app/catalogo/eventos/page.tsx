// app/catalogo/eventos/page.tsx
import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";

const wppBase = "https://wa.me/5512982910000?text=";

function SectionHeader({ label, title, desc }: { label: string; title: string; desc?: string }) {
  return (
    <div className="mb-10">
      <p className="label-caps text-rose-400 mb-2">{label}</p>
      <h2 className="text-stone-800 mb-3" style={{ fontFamily: 'var(--font-cinzel)', fontSize: 'clamp(1.5rem, 3vw, 2.25rem)' }}>{title}</h2>
      <div className="w-12 h-px bg-rose-300 mb-4" />
      {desc && <p className="text-stone-500 max-w-2xl leading-relaxed">{desc}</p>}
    </div>
  );
}

function InfoTag({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-start gap-2">
      <span className="label-caps text-rose-400 shrink-0 mt-0.5">{label}:</span>
      <span className="text-stone-600 text-sm">{value}</span>
    </div>
  );
}

export default function EventosPage() {
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
          <span className="text-rose-500">Eventos & Reservas</span>
        </div>
      </div>

      {/* HERO */}
      <section className="max-w-6xl mx-auto px-6 pt-20 pb-12 text-center">
        <p className="label-caps text-rose-400 mb-4">Projetos para</p>
        <h1 className="font-light text-stone-800 mb-4" style={{ fontFamily: 'var(--font-cinzel)', fontSize: 'clamp(2rem, 5vw, 3.5rem)' }}>
          Eventos & Reservas
        </h1>
        <div className="w-20 h-px bg-rose-300 mx-auto mb-6" />
        <p className="text-stone-500 max-w-2xl mx-auto leading-relaxed">
          Trabalhamos com três formatos de reservas para eventos — cada um pensado para tornar o seu momento especial ainda mais inesquecível.
        </p>
      </section>

      {/* SUNDAY BRUNCH */}
      <section className="max-w-6xl mx-auto px-6 pb-20">
        <div className="reveal bg-white border border-rose-100 rounded-3xl overflow-hidden">
          <div className="bg-gradient-to-r from-rose-50 to-amber-50 px-10 py-8 border-b border-rose-100">
            <p className="label-caps text-rose-400 mb-1">Experiência</p>
            <h2 style={{ fontFamily: 'var(--font-sacramento)', fontSize: '3rem', color: '#C4707A' }}>Sunday Brunch</h2>
            <p className="text-stone-600 mt-2 max-w-xl">Agende sua experiência completa. Servido durante todo o funcionamento das casas, para grupos de até 8 pessoas.</p>
          </div>
          <div className="grid md:grid-cols-2 gap-0">
            <div className="p-10 border-r border-rose-50">
              <p className="label-caps text-stone-500 mb-4">Menu incluso (por 2 pessoas)</p>
              <ul className="space-y-2 text-stone-600 text-sm leading-relaxed">
                {[
                  '2 Mimosas',
                  '1 Croissant Recheado (para compartilhar)',
                  '1 Croissant Tradicional (para compartilhar)',
                  '2 Quiches',
                  '4 Mini Croque Monsieur',
                  '2 Cocottes de ovos cremosos com bacon e pão de fermentação natural',
                  '1 Bule de chá da casa ou café filtrado',
                  '1 Jarra de suco natural',
                  '2 Mini saladas de frutas',
                  '2 Macarons',
                  'Seleção de 4 mini pâtisseries',
                  'Petit fours',
                  'Geleia & creme de mascarpone',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="text-rose-300 mt-1 shrink-0">✦</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="p-10 flex flex-col justify-between">
              <div>
                <div className="bg-rose-50 rounded-2xl p-6 mb-6">
                  <p className="text-3xl font-light text-rose-600 mb-1" style={{ fontFamily: 'var(--font-cinzel)' }}>R$ 110</p>
                  <p className="text-stone-500 text-sm">por pessoa · reserva via PIX</p>
                </div>
                <div className="space-y-3 mb-6">
                  <InfoTag label="Disponibilidade" value="Segunda à domingo, horário de preferência" />
                  <InfoTag label="Capacidade" value="Até 8 pessoas" />
                  <InfoTag label="Pagamento" value="100% antecipado via PIX" />
                </div>
              </div>
              <a
                href={`${wppBase}${encodeURIComponent('Olá! Gostaria de agendar a Experiência Sunday Brunch.')}`}
                target="_blank" rel="noopener noreferrer"
                className="block text-center bg-rose-500 text-white font-medium px-8 py-3 rounded-full hover:bg-rose-600 transition-colors"
              >
                Agendar Sunday Brunch
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* PETIT COMITÉ */}
      <section className="bg-rose-50/40 py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="reveal bg-white border border-rose-100 rounded-3xl overflow-hidden">
            <div className="bg-gradient-to-r from-rose-100/60 to-pink-50 px-10 py-8 border-b border-rose-100 flex items-start justify-between flex-wrap gap-4">
              <div>
                <p className="label-caps text-rose-400 mb-1">Reserva especial</p>
                <h2 style={{ fontFamily: 'var(--font-sacramento)', fontSize: '3rem', color: '#C4707A' }}>Petit Comité</h2>
                <p className="label-caps text-stone-400 mt-1">Até 10 pessoas</p>
              </div>
              <div className="bg-white rounded-2xl px-6 py-4 border border-rose-100 text-right">
                <p className="text-3xl font-light text-rose-600" style={{ fontFamily: 'var(--font-cinzel)' }}>R$ 505</p>
                <p className="text-stone-400 text-xs">investimento total</p>
              </div>
            </div>
            <div className="grid md:grid-cols-2 gap-0">
              <div className="p-10 border-r border-rose-50">
                <p className="label-caps text-stone-500 mb-4">Itens inclusos</p>
                <ul className="space-y-2 text-stone-600 text-sm">
                  {[
                    '1 Torta ou Bolo Sweet Home (consulte as opções)',
                    '1 Arranjo Floral em vaso de cristal',
                    '1 Espumante em champanheira',
                    'Mesa posta com sousplats, pratos, taças e demais itens',
                    'Até 3 horas de reserva',
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <span className="text-rose-300 mt-1 shrink-0">✦</span>
                      {item}
                    </li>
                  ))}
                </ul>
                <div className="mt-4 bg-amber-50 border border-amber-100 rounded-xl p-4">
                  <p className="text-amber-700 text-sm">✨ Adicione uma tábua de frutas & queijos por <strong>R$ 59,90</strong></p>
                </div>
              </div>
              <div className="p-10 flex flex-col justify-between">
                <div className="space-y-3 mb-6">
                  <InfoTag label="Duração" value="Até 3 horas de reserva" />
                  <InfoTag label="Dias" value="Segunda à domingo" />
                  <InfoTag label="Comanda" value="Individual por convidado ou única pelo anfitrião" />
                  <InfoTag label="Pagamento" value="100% antecipado via PIX" />
                </div>
                <a
                  href={`${wppBase}${encodeURIComponent('Olá! Gostaria de reservar o Petit Comité.')}`}
                  target="_blank" rel="noopener noreferrer"
                  className="block text-center bg-rose-500 text-white font-medium px-8 py-3 rounded-full hover:bg-rose-600 transition-colors"
                >
                  Reservar Petit Comité
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PETIT JARDIN */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <div className="reveal bg-white border border-rose-100 rounded-3xl overflow-hidden">
          <div className="bg-gradient-to-r from-emerald-50/60 to-rose-50 px-10 py-8 border-b border-rose-100 flex items-start justify-between flex-wrap gap-4">
            <div>
              <p className="label-caps text-rose-400 mb-1">Jardim exclusivo</p>
              <h2 style={{ fontFamily: 'var(--font-sacramento)', fontSize: '3rem', color: '#C4707A' }}>Petit Jardin</h2>
              <p className="label-caps text-stone-400 mt-1">Até 30 pessoas</p>
            </div>
            <div className="bg-white rounded-2xl px-6 py-4 border border-rose-100 text-right">
              <p className="text-3xl font-light text-rose-600" style={{ fontFamily: 'var(--font-cinzel)' }}>R$ 219</p>
              <p className="text-stone-400 text-xs">por pessoa</p>
            </div>
          </div>
          <div className="grid md:grid-cols-2 gap-0">
            <div className="p-10 border-r border-rose-50">
              <p className="label-caps text-stone-500 mb-4">Incluso</p>
              <ul className="space-y-2 text-stone-600 text-sm mb-6">
                {[
                  'Menu de brunch completo',
                  'Valet',
                  'Decoração personalizada com flores naturais',
                  'Jardim reservado exclusivamente para o evento',
                  'Até 30 pessoas (excedente usa mesas no deck interno)',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="text-rose-300 mt-1 shrink-0">✦</span>
                    {item}
                  </li>
                ))}
              </ul>
              <div className="bg-rose-50 rounded-xl p-4 text-sm text-stone-500 italic">
                Nosso jardim é ao ar livre — podem ocorrer interferências climáticas e realocação para o deck.
              </div>
            </div>
            <div className="p-10 flex flex-col justify-between">
              <div>
                <p className="label-caps text-stone-500 mb-4">Menu de Brunch incluso</p>
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div>
                    <p className="label-caps text-rose-400 mb-2 text-[10px]">Boulangerie</p>
                    <ul className="text-stone-500 text-xs space-y-1">
                      {['Mini Croque Monsieur', 'Croissants recheados', 'Mini folhados', 'Quiches', 'Pão de Queijo', 'Ovos Cremosos'].map(i => <li key={i}>· {i}</li>)}
                    </ul>
                  </div>
                  <div>
                    <p className="label-caps text-rose-400 mb-2 text-[10px]">Pâtisserie</p>
                    <ul className="text-stone-500 text-xs space-y-1">
                      {['Petit Fours', 'Panquecas fluffy', 'Pain Perdu', 'Torre de Pâtisseries', 'Mini macarons', 'Pavlovas'].map(i => <li key={i}>· {i}</li>)}
                    </ul>
                  </div>
                </div>
                <div className="space-y-2 mb-6">
                  <InfoTag label="Duração" value="Até 4 horas" />
                  <InfoTag label="Mimosas à vontade" value="+R$ 29 por pessoa" />
                </div>
              </div>
              <a
                href={`${wppBase}${encodeURIComponent('Olá! Gostaria de reservar o Petit Jardin.')}`}
                target="_blank" rel="noopener noreferrer"
                className="block text-center bg-rose-500 text-white font-medium px-8 py-3 rounded-full hover:bg-rose-600 transition-colors"
              >
                Reservar Petit Jardin
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* GRAND ROYALE */}
      <section className="bg-stone-800 py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="reveal rounded-3xl overflow-hidden border border-white/10">
            <div className="bg-gradient-to-r from-stone-700 to-stone-800 px-10 py-8 border-b border-white/10 flex items-start justify-between flex-wrap gap-4">
              <div>
                <p className="label-caps text-amber-400/80 mb-1">Casa exclusiva</p>
                <h2 style={{ fontFamily: 'var(--font-sacramento)', fontSize: '3.5rem', color: '#E8C98A' }}>Grand Royale</h2>
                <p className="label-caps text-stone-400 mt-1">Até 55 pessoas</p>
              </div>
              <div className="bg-white/10 rounded-2xl px-6 py-4 text-right">
                <p className="text-3xl font-light text-amber-300" style={{ fontFamily: 'var(--font-cinzel)' }}>R$ 380</p>
                <p className="text-stone-400 text-xs">por pessoa · menu, bebidas, decoração e valet</p>
              </div>
            </div>
            <div className="grid md:grid-cols-2 bg-stone-800">
              <div className="p-10 border-r border-white/10">
                <p className="label-caps text-amber-400/70 mb-4">Incluso</p>
                <ul className="space-y-2 text-stone-300 text-sm mb-6">
                  {[
                    'Casa inteira fechada exclusivamente para o evento',
                    'Menu completo e bebidas à vontade',
                    'Decoração com flores naturais em todo o espaço',
                    'Vasos florais para mesas dos convidados',
                    'Flores no hall e banheiros',
                    'Menu impresso, velas, mesa posta',
                    'Serviço de garçom',
                    'Valet',
                    'Até 4 horas de evento',
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <span className="text-amber-400/60 mt-1 shrink-0">✦</span>
                      {item}
                    </li>
                  ))}
                </ul>
                <div className="bg-white/5 rounded-xl p-4 text-sm text-stone-400 italic">
                  Taxa de exclusividade do espaço: R$ 5.000 (isenta para eventos acima de R$ 20.000)
                </div>
              </div>
              <div className="p-10 flex flex-col justify-between">
                <div>
                  <p className="label-caps text-amber-400/70 mb-4">Sugestão de menu volante</p>
                  <div className="space-y-3 mb-6 text-stone-400 text-xs">
                    <div>
                      <p className="text-stone-300 font-semibold mb-1">Entradas</p>
                      <p>Brie folhado · Mini tábua de frutas · Folhado de queijo coalho · Mini tartines · Mini ilha com pães</p>
                    </div>
                    <div>
                      <p className="text-stone-300 font-semibold mb-1">Pratos principais (3 opções)</p>
                      <p>Filé mignon · Papilote de peixe · Camarão na moranga · Gnocchi de búfala · Agnolotti</p>
                    </div>
                    <div>
                      <p className="text-stone-300 font-semibold mb-1">Finalização</p>
                      <p>Choux de pistache · Mousse de chocolate · Macaron de Porto · Café e chá</p>
                    </div>
                  </div>
                  <div className="space-y-2 mb-6">
                    <div className="flex gap-2 text-sm">
                      <span className="label-caps text-amber-400/60 shrink-0">Pagamento:</span>
                      <span className="text-stone-400">60% na assinatura + 40% até 40 dias antes</span>
                    </div>
                    <div className="flex gap-2 text-sm">
                      <span className="label-caps text-amber-400/60 shrink-0">Excedente:</span>
                      <span className="text-stone-400">R$ 380/pessoa adicional (até +30%)</span>
                    </div>
                  </div>
                </div>
                <a
                  href={`${wppBase}${encodeURIComponent('Olá! Gostaria de saber mais sobre o Grand Royale.')}`}
                  target="_blank" rel="noopener noreferrer"
                  className="block text-center bg-amber-400 text-stone-900 font-medium px-8 py-3 rounded-full hover:bg-amber-300 transition-colors"
                >
                  Solicitar proposta Grand Royale
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CONDIÇÕES GERAIS */}
      <section className="max-w-4xl mx-auto px-6 py-20">
        <SectionHeader label="Importante" title="Condições Gerais" />
        <div className="grid sm:grid-cols-2 gap-4">
          {[
            { titulo: 'Confirmação', texto: 'A data e o evento só são confirmados mediante pagamento integral via PIX.' },
            { titulo: 'Antecedência', texto: 'Reserve com antecedência para garantirmos a disponibilidade da agenda.' },
            { titulo: 'Itens externos', texto: 'Consulte-nos previamente caso queira trazer balões ou outros itens externos.' },
            { titulo: 'Taxa de rolha', texto: 'R$ 70 por garrafa de bebida externa.' },
            { titulo: 'Gentileza gera gentileza', texto: 'Pedimos carinho e respeito com nossa equipe e atenção às regrinhas da casa.' },
            { titulo: 'Flexibilidade', texto: 'Todas as opções são flexíveis de acordo com a sua necessidade — fale conosco.' },
          ].map((c) => (
            <div key={c.titulo} className="reveal bg-white border border-rose-100 rounded-2xl p-6">
              <p className="label-caps text-rose-400 mb-2">{c.titulo}</p>
              <p className="text-stone-600 text-sm leading-relaxed">{c.texto}</p>
            </div>
          ))}
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
