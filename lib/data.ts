// ============================================================
//  Lady Laura Atelier — Dados do site
//  Edite este arquivo para atualizar o conteúdo do site
// ============================================================

export const siteConfig = {
  name: 'Lady Laura Atelier',
  tagline: 'Confeitaria Artesanal & Flores',
  description:
    'Confeitaria artesanal francesa, doces finos, macarons, flores e eventos em São José dos Campos e Jacareí. Técnica Le Cordon Bleu Paris com 13 anos de amor em cada receita.',
  whatsapp: '5512982910000',
  instagram: 'https://www.instagram.com/ladylauraatelier',
  email: 'contato@ladylauraatelier.com.br',
  addresses: [
    {
      city: 'São José dos Campos',
      street: 'Av. Barão do Rio Branco, 646',
      neighborhood: 'Jd. Esplanada',
      mapsUrl: 'https://www.google.com/maps/place/Lady+Laura+Atelier+Esplanada/@-23.1970593,-45.9051016,17z/data=!4m6!3m5!1s0x94cc3559f23d62a1:0x89c5b3f6d0b4a261!8m2!3d-23.1970593!4d-45.9051016!16s%2Fg%2F11jzpnkcxn',
      embedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3667.1!2d-45.9051016!3d-23.1970593!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94cc3559f23d62a1%3A0x89c5b3f6d0b4a261!2sLady%20Laura%20Atelier%20Esplanada!5e0!3m2!1spt-BR!2sbr!4v1',
    },
    {
      city: 'Jacareí',
      street: 'Pátio Villa Branca',
      neighborhood: 'Shopping',
      mapsUrl: 'https://www.google.com/maps/place/Lady+Laura+Atelier+Villa+Branca/@-23.267578,-45.9411769,17z/data=!4m6!3m5!1s0x94cc35f2d6adbe15:0x5035abcd6024c0d6!8m2!3d-23.267578!4d-45.9411769!16s%2Fg%2F11v44r7p5s',
      embedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3667.1!2d-45.9411769!3d-23.267578!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94cc35f2d6adbe15%3A0x5035abcd6024c0d6!2sLady%20Laura%20Atelier%20Villa%20Branca!5e0!3m2!1spt-BR!2sbr!4v1',
    },
  ],
}

export const hero = {
  headline: 'Doçura feita com alma',
  subheadline: 'Bonjour, raio de sol! Feliz em te receber por aqui. Conheça nossos menus clicando nos links abaixo e faça o seu pedido :)',
  ctaLabel: 'Conheça',
  ctaSecondary: 'Falar no WhatsApp',
}

export const categories = [
  {
    id: 'confeitaria',
    title: 'Confeitaria',
    subtitle: 'Pâtisserie Française',
    description: 'Bolos, tortas, profiteroles, éclairs e sobremesas com técnica Le Cordon Bleu Paris.',
    image: '/images/eventos/mesa-doces-1.webp',
    href: '/catalogo/bolos',
  },
  {
    id: 'doces',
    title: 'Doces Finos',
    subtitle: 'Douceurs',
    description: 'Brigadeiros gourmet, trufas artesanais e bombons para sua mesa de doces.',
    image: '/images/eventos/doces-chocolate.webp',
    href: '/catalogo/bolos',
  },
  {
    id: 'macarons',
    title: 'Macarons',
    subtitle: 'Les Macarons',
    description: 'Macarons artesanais em dezenas de sabores — da massa à montagem, tudo feito à mão.',
    image: '/images/macarons/macarons-coloridos.webp',
    href: '/catalogo/bolos',
  },
  {
    id: 'eventos',
    title: 'Eventos',
    subtitle: 'Célébrations',
    description: 'Mesas completas de doces, bolos e experiências para casamentos e celebrações.',
    image: '/images/eventos/mesa-casamento.webp',
    href: '/catalogo/eventos',
  },
]

export const editorial = {
  title: 'Cada receita conta uma história de amor.',
  text: 'Desde os 15 anos, a chef Thay Chagas transforma ingredientes em memórias afetivas. Com formação pela Le Cordon Bleu Paris e especialização em Pasticceria Italiana em Firenze, cada doce é uma obra de arte feita com as mesmas receitas de sempre — e todo o carinho do mundo.',
  quote: "L'art de vivre est dans chaque détail.",
  image: '/images/flores/torta-e-maos.webp',
}

export const featuredProducts = [
  {
    name: 'Macarons Artesanais',
    description: 'Dezenas de sabores preparados com técnica francesa. Perfeitos para presentes, eventos e mesas de doces.',
    image: '/images/doces/doces-7.webp',
    whatsappMsg: 'Olá! Gostaria de saber mais sobre os macarons artesanais.',
  },
  {
    name: 'Brigadeiros Gourmet',
    description: 'Brigadeiros clássicos e especiais: pistache, café, frutas vermelhas, Oreo e muito mais.',
    image: '/images/doces/doces-12.webp',
    whatsappMsg: 'Olá! Gostaria de saber mais sobre os brigadeiros gourmet.',
  },
  {
    name: 'Mesa de Doces',
    description: 'Montagem completa para casamentos e eventos: profiteroles, éclairs, mille-feuille, pavlovas e mais.',
    image: '/images/confeitaria/mesa-doces-evento.webp',
    whatsappMsg: 'Olá! Gostaria de solicitar orçamento para mesa de doces.',
  },
]

export const events = {
  title: 'Eventos que encantam em cada detalhe',
  text: 'Do íntimo ao grandioso, criamos mesas de doces e experiências que traduzem sentimentos.',
  image: '/images/eventos/mesa-casamento.webp',
  ctaLabel: 'Solicitar orçamento',
  formats: [
    { name: 'Sunday Brunch', capacity: 'Até 8 pessoas', description: 'Mimosas, croissants, quiches e pâtisseries em uma manhã especial.' },
    { name: 'Petit Comité', capacity: 'Até 10 pessoas', description: 'Bolo, flores, espumante e mesa decorada para momentos íntimos.' },
    { name: 'Petit Jardin', capacity: 'Até 30 pessoas', description: 'Menu completo de brunch, valet e decoração exclusiva.' },
    { name: 'Grand Royale', capacity: 'Até 55 pessoas', description: 'Casa exclusiva, menu premium e experiência completa.' },
  ],
}

export const catalogs = [
  { title: 'Confeitaria', description: 'Bolos, tortas, profiteroles e sobremesas artesanais com técnica francesa', href: '/catalogo/bolos', icon: 'cake' },
  { title: 'Doces Finos', description: 'Brigadeiros gourmet, trufas, bombons e doces especiais para eventos', href: '/catalogo/bolos', icon: 'sweet' },
  { title: 'Flores', description: 'Arranjos frescos, secos e vasos especiais compostos diariamente', href: '/catalogo/flores', icon: 'flower' },
  { title: 'Eventos', description: 'Mesas completas, brunchs exclusivos e experiências do íntimo ao grandioso', href: '/catalogo/eventos', icon: 'event' },
]

export const products = [
  {
    id: 'confeitaria',
    category: 'Confeitaria Francesa',
    description:
      'Técnica Le Cordon Bleu Paris em cada sobremesa. Profiteroles, éclairs, mille-feuille, pavlovas, tartes e mais — feitos com os melhores ingredientes.',
    items: [
      { name: 'Profiteroles' },
      { name: 'Éclairs' },
      { name: 'Mille-feuille' },
      { name: 'Pavlovas' },
    ],
    image: '/images/confeitaria/profiteroles-pistache.webp',
    imageAlt: 'Confeitaria francesa Lady Laura Atelier',
    whatsappMsg: 'Olá! Gostaria de encomendar sobremesas francesas.',
    note: 'Também: tartes, merengues, crème brûlée e mais.',
  },
  {
    id: 'doces',
    category: 'Doces Finos & Brigadeiros',
    description:
      'Brigadeiros gourmet, trufas artesanais, bombons e doces especiais. Cada um feito à mão com ingredientes nobres.',
    items: [
      { name: 'Brigadeiros Gourmet' },
      { name: 'Trufas Artesanais' },
      { name: 'Bombons' },
      { name: 'Quindim Brûlé' },
    ],
    image: '/images/doces/brigadeiros-variados.webp',
    imageAlt: 'Doces finos Lady Laura Atelier',
    whatsappMsg: 'Olá! Gostaria de saber mais sobre os doces finos.',
    note: 'Sabores: Pistache, Café, Oreo, Frutas Vermelhas, Coco, Churros e mais.',
  },
  {
    id: 'macarons',
    category: 'Macarons',
    description:
      'Macarons artesanais feitos com técnica francesa da massa à montagem. Perfeitos para presentes, eventos e mesas de doces.',
    items: [
      { name: 'Caixa com 8 unidades' },
      { name: 'Caixa com 12 unidades' },
      { name: 'Torre de Macarons (eventos)' },
      { name: 'Macaron personalizado' },
    ],
    image: '/images/macarons/macarons-coloridos.webp',
    imageAlt: 'Macarons artesanais Lady Laura Atelier',
    whatsappMsg: 'Olá! Gostaria de encomendar macarons.',
    note: 'Sabores: Pistache, Caramelo, Café, Frutas, Chocolate, Coco e mais.',
  },
]

export const about = {
  scriptText: 'Notre Histoire',
  title: 'Sobre Nós',

  thay: {
    role: 'Maîtresse Pâtissière',
    name: 'Thay Chagas',
    bio: [
      'Começou aos 15 anos atendendo encomendas na casa dos pais — e nunca mais parou. Há 13 anos, Thay Chagas transforma ingredientes em memórias afetivas com as mesmas receitas de sempre.',
      'Em 2018 se formou em Pâtisserie pela Le Cordon Bleu Paris, percorrendo mais de 15 cidades europeias em busca das receitas perfeitas. Em 2023 se especializou em Pasticceria Italiana em Firenze.',
    ],
    image: '/images/chef/thay-le-cordon-bleu.webp',
    imageAlt: 'Thay Chagas — Le Cordon Bleu Paris',
    credentials: [
      { label: 'Le Cordon Bleu Paris', detail: '2018 · Pâtisserie', href: 'https://www.instagram.com/lecordonbleu/' },
      { label: 'Pasticceria Italiana', detail: '2023 · Firenze', href: null },
      { label: '13 anos de experiência', detail: 'Desde os 15 anos', href: null },
    ],
  },

  renata: {
    role: 'Designer Floral',
    name: 'Renata Chagas',
    bio: [
      'Há 12 anos, Renata Chagas cuida de cada pétala com a mesma dedicação de sempre. Especialista em arranjos florais, ela desenvolve composições exclusivas pensadas para transformar qualquer momento em uma memória bonita.',
      'Todas as composições florais são montadas diariamente com as flores mais frescas e lindas do dia — respeitando a estação, a natureza e o gosto de cada cliente.',
    ],
    image: '/images/eventos/fundo-3.webp',
    imageAlt: 'Arranjos florais Lady Laura Atelier',
    credentials: [
      { label: 'Designer Floral', detail: '12 anos de curadoria', href: null },
      { label: 'Flores frescas diárias', detail: 'Seleção do dia', href: null },
      { label: 'Flores & Presentes', detail: 'Know-how principal', href: null },
    ],
  },

  credentials: [
    { label: 'Le Cordon Bleu Paris', detail: '2018 · Pâtisserie', href: 'https://www.instagram.com/lecordonbleu/' },
    { label: 'Pasticceria Italiana', detail: '2023 · Firenze', href: null },
    { label: '13 anos de experiência', detail: 'Desde os 15 anos', href: null },
    { label: 'São José dos Campos', detail: 'Esplanada', href: 'https://share.google/ZXDvqAoRNmVu2hoxz' },
    { label: 'Jacareí · Pátio Villa Branca', detail: 'Jacareí', href: 'https://share.google/d9P4cAW2ksoO7R9nW' },
    { label: '44K seguidores', detail: '@ladylauraatelier', href: 'https://www.instagram.com/ladylauraatelier' },
  ],

  bio: [
    'Começou aos 15 anos atendendo encomendas na casa dos pais — e nunca mais parou. Há 13 anos, Thay Chagas transforma ingredientes em memórias afetivas com as mesmas receitas de sempre.',
    'Em 2018 se formou em Pâtisserie pela Le Cordon Bleu Paris, percorrendo mais de 15 cidades europeias em busca das receitas perfeitas. Em 2023 se especializou em Pasticceria Italiana em Firenze.',
  ],
  image: '/images/chef/thay-le-cordon-bleu.webp',
  imageAlt: 'Thay Chagas — Lady Laura Atelier',
}

export const testimonials = [
  {
    name: 'Mariana S.',
    text: 'A mesa de doces do casamento foi simplesmente perfeita. Os profiteroles e macarons são de outro mundo — todos os convidados pediram o contato!',
    city: 'São José dos Campos',
    stars: 5,
  },
  {
    name: 'Fernanda P.',
    text: 'Os brigadeiros gourmet são incríveis. Cada sabor é uma surpresa. Encomendo toda semana para a família!',
    city: 'Jacareí',
    stars: 5,
  },
  {
    name: 'Carla M.',
    text: 'Os macarons são perfeitos — crocantes por fora, macios por dentro. Melhor presente que já dei para alguém.',
    city: 'São José dos Campos',
    stars: 5,
  },
]

export const faq = [
  {
    q: 'Com quanto tempo de antecedência devo encomendar?',
    a: 'Mínimo de 4 dias para a maioria dos produtos. Para mesas de doces de casamentos e eventos grandes, consulte disponibilidade com mais antecedência.',
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
    q: 'Vocês fazem mesa de doces para casamento?',
    a: 'Sim! Criamos mesas completas com brigadeiros, macarons, profiteroles, éclairs, mille-feuille, pavlovas, tortas e mais. Cada mesa é personalizada para o evento.',
  },
  {
    q: 'Qual a quantidade mínima de macarons?',
    a: 'Para encomendas avulsas, mínimo de 8 unidades. Para eventos, trabalhamos sob consulta de acordo com o número de convidados.',
  },
  {
    q: 'Como transportar o bolo corretamente?',
    a: 'Transporte no chão do carro com ar condicionado ligado. O bolo deve ir para a geladeira ao chegar e ser consumido em temperatura ambiente — não gelado.',
  },
  {
    q: 'As flores são naturais?',
    a: 'Sim! Todas as composições são montadas diariamente com as flores mais frescas do dia. Preferências de cores devem ser informadas previamente.',
  },
]
