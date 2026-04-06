const items = [
  'Confeitaria',
  'Macarons',
  'Brigadeiros',
  'Profiteroles',
  'Éclairs',
  'Trufas',
  'Mille-feuille',
  'Pavlovas',
  'Le Cordon Bleu',
  'Flores',
  'Buquê de Noiva',
  'Kits para Presente',
  'Eventos',
  'Casamentos',
]

export default function Marquee() {
  const content = items.map((item, i) => (
    <span key={i} className="flex items-center gap-8 px-4">
      <span className="font-serif text-3xl md:text-4xl lg:text-5xl text-rose-deep/50 whitespace-nowrap tracking-wide">
        {item}
      </span>
      <span className="w-1.5 h-1.5 rounded-full bg-rose-deep/35 shrink-0" />
    </span>
  ))

  return (
    <div className="py-10 overflow-hidden bg-white border-y border-rose/10">
      <div className="marquee-track">
        <div className="flex">{content}</div>
        <div className="flex">{content}</div>
      </div>
    </div>
  )
}
