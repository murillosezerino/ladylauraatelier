// ============================================================
//  Lady Laura Atelier — Dados do site
//  Edite este arquivo para atualizar o conteúdo do site
// ============================================================

export const siteConfig = {
  name: 'Lady Laura Atelier',
  tagline: 'Pâtisserie & Confeitaria Artesanal',
  description:
    'Confeitaria artesanal em São José dos Campos e Jacareí. Bolos personalizados, flores de açúcar, kits especiais e muito mais — feitos com amor e técnica Le Cordon Bleu.',
  whatsapp: '5512997973143', // número sem símbolos
  instagram: 'https://www.instagram.com/ladylaura.atelier',
  email: 'contato@ladylaura.com.br', // atualizar quando tiver
  addresses: [
    {
      city: 'São José dos Campos',
      street: 'Av. Barão do Rio Branco, 646',
      neighborhood: 'Centro',
      mapsUrl: 'https://maps.google.com/?q=Av.+Barão+do+Rio+Branco,+646,+SJC',
    },
    {
      city: 'Jacareí',
      street: 'Pátio Villa Branca',
      neighborhood: 'Shopping',
      mapsUrl: 'https://maps.google.com/?q=Pátio+Villa+Branca,+Jacareí',
    },
  ],
}

export const hero = {
  scriptText: 'Bonjour, Chérie!',
  headline: 'Arte que se',
  headlineHighlight: 'come.',
  subheadline:
    'Confeitaria artesanal com alma francesa e coração brasileiro.\nBolos que contam histórias, flores que encantam, momentos que ficam.',
  ctaLabel: 'Encomendar pelo WhatsApp',
  ctaSecondary: 'Ver cardápio',
}

export const products = [
  {
    id: 'bolos',
    emoji: '🎂',
    category: 'Bolos Personalizados',
    description:
      'Do naked cake ao bolo de 5 andares — cada peça é esculpida para o seu momento especial.',
    items: [
      { name: 'Naked Cake', price: 'A partir de R$\u00a0180' },
      { name: 'Semi-Naked', price: 'A partir de R$\u00a0220' },
      { name: 'Bolo Cenográfico', price: 'Consulte' },
      { name: 'Bolo de Casamento', price: 'Consulte' },
    ],
    image: '/images/bolos.jpg', // substituir pela foto real
    imageAlt: 'Bolo artesanal Lady Laura Atelier',
    whatsappMsg: 'Olá! Gostaria de encomendar um bolo personalizado.',
  },
  {
    id: 'flores',
    emoji: '🌸',
    category: 'Flores de Açúcar',
    description:
      'Flores e decorações em pasta de açúcar, wafer paper e buttercream — técnica italiana, detalhes únicos.',
    items: [
      { name: 'Arranjo pequeno', price: 'A partir de R$\u00a060' },
      { name: 'Arranjo médio', price: 'A partir de R$\u00a0120' },
      { name: 'Flores avulsas', price: 'A partir de R$\u00a025/un' },
      { name: 'Topo de bolo', price: 'A partir de R$\u00a080' },
    ],
    image: '/images/flores.jpg',
    imageAlt: 'Flores de açúcar artesanais',
    whatsappMsg: 'Olá! Tenho interesse nas flores de açúcar.',
  },
  {
    id: 'kits',
    emoji: '🎁',
    category: 'Kits & Presentes',
    description:
      'Kits especiais para datas comemorativas, casamentos, empresas e momentos que merecem ser lembrados.',
    items: [
      { name: 'Kit Café da Manhã', price: 'A partir de R$\u00a0150' },
      { name: 'Kit Casamento', price: 'A partir de R$\u00a0280' },
      { name: 'Kit Corporativo', price: 'Consulte' },
      { name: 'Cesta Personalizada', price: 'Consulte' },
    ],
    image: '/images/kits.jpg',
    imageAlt: 'Kits e presentes Lady Laura Atelier',
    whatsappMsg: 'Olá! Gostaria de montar um kit especial.',
  },
]

export const about = {
  scriptText: 'La Maîtresse',
  title: 'Lady Laura',
  bio: [
    'Chef confeiteira com 13 anos de dedicação à arte da pâtisserie, formada pelo renomado Le Cordon Bleu Paris (2018) e especializada em Pasticceria Italiana em Florença (2023).',
    'Cada criação nasce da fusão entre a rigorosa técnica francesa, a leveza italiana e a criatividade brasileira — uma assinatura que só a Lady Laura tem.',
  ],
  credentials: [
    { icon: '🎓', label: 'Le Cordon Bleu Paris', detail: '2018 · Pâtisserie' },
    { icon: '🇮🇹', label: 'Pasticceria Italiana', detail: '2023 · Florença' },
    { icon: '📅', label: '13 anos de experiência', detail: 'Confeitaria artesanal' },
    { icon: '📍', label: '2 unidades', detail: 'SJC + Jacareí' },
    { icon: '❤️', label: '44K seguidores', detail: 'Instagram' },
  ],
  image: '/images/chef-laura.jpg',
  imageAlt: 'Chef Laura — Lady Laura Atelier',
}

export const testimonials = [
  {
    name: 'Mariana S.',
    text: 'O bolo do casamento foi simplesmente perfeito. Todos os convidados pediram o contato!',
    city: 'São José dos Campos',
    stars: 5,
  },
  {
    name: 'Fernanda P.',
    text: 'As flores de açúcar são obras de arte. Jamais vi algo tão delicado e detalhado.',
    city: 'Jacareí',
    stars: 5,
  },
  {
    name: 'Carla M.',
    text: 'Encomendo o kit de aniversário todo ano. É o presente que todo mundo ama receber.',
    city: 'São José dos Campos',
    stars: 5,
  },
]

export const faq = [
  {
    q: 'Com quanto tempo de antecedência devo encomendar?',
    a: 'Para bolos personalizados, recomendamos ao menos 7 dias. Para datas especiais como casamentos e 15 anos, mínimo 30 dias.',
  },
  {
    q: 'Vocês entregam?',
    a: 'Sim! Atendemos São José dos Campos e região. Consulte disponibilidade e taxa de entrega pelo WhatsApp.',
  },
  {
    q: 'Como funciona o pagamento?',
    a: 'Aceitamos PIX, transferência e cartão. Para encomendas, solicitamos 50% de entrada na confirmação do pedido.',
  },
  {
    q: 'Posso visitar o atelier?',
    a: 'Sim! Temos unidades em SJC (Av. Barão do Rio Branco, 646) e no Pátio Villa Branca em Jacareí. Horários pelo Instagram.',
  },
]
