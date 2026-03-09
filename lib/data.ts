// ============================================================
//  Lady Laura Atelier — Dados do site
//  Edite este arquivo para atualizar o conteúdo do site
// ============================================================

export const siteConfig = {
  name: 'Lady Laura Atelier',
  tagline: 'Pâtisserie & Confeitaria Artesanal',
  description:
    'Confeitaria artesanal em São José dos Campos e Jacareí. Bolos festivos, flores naturais, kits presenteáveis e muito mais — com técnica Le Cordon Bleu Paris e 13 anos de amor.',
  whatsapp: '5512982910000', // (12) 98291-0000
  instagram: 'https://www.instagram.com/ladylauraatelier',
  email: 'contato@ladylauraatelier.com.br',
  addresses: [
    {
      city: 'São José dos Campos',
      street: 'Av. Barão do Rio Branco, 646',
      neighborhood: 'Jd. Esplanada',
      mapsUrl: 'https://maps.google.com/?q=Av.+Barão+do+Rio+Branco+646+São+José+dos+Campos',
    },
    {
      city: 'Jacareí',
      street: 'Pátio Villa Branca',
      neighborhood: 'Shopping',
      mapsUrl: 'https://maps.google.com/?q=Pátio+Villa+Branca+Jacareí',
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
    category: 'Bolos Festivos',
    description:
      'Seleção exclusiva da casa em múltiplos sabores e tamanhos. Do Baby Cake ao Aro 25 — cada bolo é uma obra feita com amor e técnica Le Cordon Bleu.',
    items: [
      { name: 'Baby Cake  (8 porções)', price: 'R$ 211' },
      { name: 'Aro 15  (15 porções)', price: 'R$ 299' },
      { name: 'Aro 20  (30 porções)', price: 'R$ 396' },
      { name: 'Aro 25  (45 porções)', price: 'R$ 498' },
    ],
    image: '/images/bolos.jpg',
    imageAlt: 'Bolo festivo Lady Laura Atelier',
    whatsappMsg: 'Olá! Gostaria de encomendar um bolo festivo.',
    note: 'Sabores: Praliné, Trovão, Dois Amores, Pistache com Framboesa, Red Velvet, Matilda, Tiramisù e mais.',
  },
  {
    id: 'flores',
    emoji: '🌸',
    category: 'Flores & Arranjos',
    description:
      'Composições florais montadas diariamente com as flores mais frescas. Respeito à natureza e às estações — cada arranjo é único.',
    items: [
      { name: 'Arranjo Paixão  (10 hastes)', price: 'R$ 128,90' },
      { name: 'Arranjo Amor  (15 hastes)', price: 'R$ 169,90' },
      { name: 'Arranjo Chérie  (25 hastes)', price: 'R$ 259,90' },
      { name: 'Arranjo Cora XG  (35 hastes)', price: 'R$ 389,90' },
    ],
    image: '/images/flores.jpg',
    imageAlt: 'Arranjo floral Lady Laura Atelier',
    whatsappMsg: 'Olá! Tenho interesse em um arranjo floral.',
    note: 'Também disponível: flores secas, Box Floral, vasos de cristal e arranjos de rosas personalizados.',
  },
  {
    id: 'kits',
    emoji: '🎁',
    category: 'Kits & Presentes',
    description:
      'Kits cuidadosamente curados com flores, doces artesanais, chocolates belgas e espumantes. Cada detalhe pensado com carinho.',
    items: [
      { name: 'Box Café da Manhã', price: 'R$ 499' },
      { name: "Box Breakfast at Tiffany's", price: 'R$ 598,90' },
      { name: 'Kit Ma Cherie', price: 'R$ 584,80' },
      { name: 'Kit Gatsby', price: 'R$ 674,80' },
    ],
    image: '/images/kits.jpg',
    imageAlt: 'Kit presente Lady Laura Atelier',
    whatsappMsg: 'Olá! Gostaria de saber mais sobre os kits e presentes.',
    note: 'Mais de 15 opções: Marselha, Versalhes, Bordeaux, Belle Époque, Burberry e muito mais.',
  },
]

export const about = {
  scriptText: 'Notre Histoire',
  title: 'Sobre Nós',

  // Thay Chagas — Confeitaria
  thay: {
    role: 'Maîtresse Pâtissière',
    name: 'Thay Chagas',
    bio: [
      'Começou aos 15 anos atendendo encomendas na casa dos pais — e nunca mais parou. Há 13 anos, Thay Chagas transforma ingredientes em memórias afetivas com as mesmas receitas de sempre.',
      'Em 2018 se formou em Pâtisserie pela Le Cordon Bleu Paris, percorrendo mais de 15 cidades europeias em busca das receitas perfeitas. Em 2023 se especializou em Pasticceria Italiana em Firenze.',
    ],
    image: '/images/chef-thay.jpg',
    imageAlt: 'Thay Chagas — Lady Laura Atelier',
    credentials: [
  { icon: '🎓', label: 'Le Cordon Bleu Paris', detail: '2018 · Pâtisserie', href: 'https://www.instagram.com/lecordonbleu/' },
  { icon: '🇮🇹', label: 'Pasticceria Italiana', detail: '2023 · Firenze', href: null },
  { icon: '📅', label: '13 anos de experiência', detail: 'Desde os 15 anos', href: null },
],
  },

  // Renata Chagas — Flores
  renata: {
    role: 'Designer Floral',
    name: 'Renata Chagas',
    bio: [
      'Há 12 anos, Renata Chagas cuida de cada pétala com a mesma dedicação de sempre. Especialista em arranjos florais, ela desenvolve composições exclusivas pensadas para transformar qualquer momento em uma memória bonita.',
      'Todas as composições florais são montadas diariamente com as flores mais frescas e lindas do dia — respeitando a estação, a natureza e o gosto de cada cliente.',
    ],
    image: '/images/renata-chagas.jpg',
    imageAlt: 'Renata Chagas — Designer Floral Lady Laura Atelier',
    credentials: [
  { icon: '🌸', label: 'Designer Floral', detail: '12 anos de curadoria', href: null },
  { icon: '💐', label: 'Flores frescas diárias', detail: 'Seleção do dia', href: null },
  { icon: '🎁', label: 'Flores & Presentes', detail: 'Know-how principal', href: null },
],
  },

  // Credenciais gerais da empresa (mantidas para compatibilidade)
  credentials: [
  { icon: '🎓', label: 'Le Cordon Bleu Paris', detail: '2018 · Pâtisserie', href: 'https://www.instagram.com/lecordonbleu/' },
  { icon: '🇮🇹', label: 'Pasticceria Italiana', detail: '2023 · Firenze', href: null },
  { icon: '📅', label: '13 anos de experiência', detail: 'Desde os 15 anos', href: null },
  { icon: '📍', label: 'Jacareí · Pátio Villa Branca', detail: 'Jacareí', href: 'https://maps.app.goo.gl/ladylauravillabranca' },
  { icon: '📍', label: 'São José dos Campos', detail: 'Esplanada', href: 'https://maps.app.goo.gl/ladylauraesplanada' },
  { icon: '❤️', label: '44K seguidores', detail: '@ladylauraatelier', href: 'https://www.instagram.com/ladylauraatelier' },
],

  // Mantidos para não quebrar outros usos
  bio: [
    'Começou aos 15 anos atendendo encomendas na casa dos pais — e nunca mais parou. Há 13 anos, Thay Chagas transforma ingredientes em memórias afetivas com as mesmas receitas de sempre.',
    'Em 2018 se formou em Pâtisserie pela Le Cordon Bleu Paris, percorrendo mais de 15 cidades europeias em busca das receitas perfeitas. Em 2023 se especializou em Pasticceria Italiana em Firenze.',
  ],
  image: '/images/chef-thay.jpg',
  imageAlt: 'Thay Chagas — Lady Laura Atelier',
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
    text: 'As flores são montadas com tanto carinho. Cada arranjo parece único e especial.',
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
    a: 'Mínimo de 4 dias para a maioria dos produtos. Para modelos elaborados em buttercream e datas especiais como casamentos, consulte disponibilidade com mais antecedência.',
  },
  {
    q: 'Como funciona o pagamento?',
    a: '100% do valor total antecipado via PIX para confirmação da encomenda.',
  },
  {
    q: 'Como faço para retirar meu pedido?',
    a: 'Retiradas de segunda a domingo com horário agendado na Av. Barão do Rio Branco, 646 – Jd. Esplanada – SJC/SP.',
  },
  {
    q: 'Como transportar o bolo corretamente?',
    a: 'Transporte no chão do carro com ar condicionado ligado. O bolo deve ir para a geladeira ao chegar e ser consumido em temperatura ambiente — não gelado.',
  },
  {
    q: 'As cores dos arranjos são iguais às fotos?',
    a: 'As fotos fazem referência ao tamanho, não às cores. Cada composição é montada com as flores mais frescas do dia. Preferências devem ser informadas previamente.',
  },
]