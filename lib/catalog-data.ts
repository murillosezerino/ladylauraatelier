// lib/catalog-data.ts
// Conteúdo completo extraído dos catálogos 2026

export const bolosData = {
  intro: {
    antecedencia: "Mínimo de 4 dias de antecedência dependendo do modelo e do dia do seu evento.",
    pedido: "Após o envio do modelo, sabor e tamanho via WhatsApp, assim como a data e horário de retirada, enviaremos o orçamento completo. Confirmação mediante pagamento.",
    pagamento: "100% do valor total antecipado via PIX.",
    retirada: "Segunda à domingo com horário previamente agendado. Av. Barão do Rio Branco, 646 – Jd. Esplanada – SJC/SP.",
    transporte: "Transporte no chão do carro, preferencialmente com ar-condicionado ligado. O bolo deve ir direto para a geladeira e ser consumido em temperatura ambiente.",
  },

  tamanhos: [
    { nome: "Aro 15",    diametro: "15 cm", altura: "12 cm", porcoes: "~15 porções" },
    { nome: "Aro 20",    diametro: "20 cm", altura: "12 cm", porcoes: "~30 porções" },
    { nome: "Aro 25",    diametro: "25 cm", altura: "12 cm", porcoes: "~45 porções" },
  ],

  bolosFestivos: {
    descricao: "Seleção fixa da casa — bolos recheados prontos para personalizar com o tamanho ideal para o seu evento.",
    precos: { aro15: 299, aro20: 396, aro25: 498 },
    sabores: [
      {
        nome: "Praliné",
        badge: "best-seller",
        descricao: "Massa intensa de chocolate 55%, camadas de creme três leites e brigadeiro belga com praliné. Coberto com brigadeiro belga cremoso e praliné de castanhas caramelizadas.",
        foto: "/images/bolos/praline.webp",
      },
      {
        nome: "Red Velvet",
        badge: null,
        descricao: "Massa tradicional americana, camadas de buttercream cream cheese e geleia artesanal de morango. Decorado com frutas vermelhas e farofinha de bolo red velvet. Feito para comer bem gelado!",
        foto: "/images/bolos/red-velvet.webp",
      },
      {
        nome: "Matilda",
        badge: null,
        descricao: "Bolo em múltiplas camadas inspirado no filme 'Matilda' com massa de chocolate úmida e fofinha intercalada com ganache de chocolate Belga meio amargo. Decorado com trufas de chocolate.",
        foto: "/images/bolos/matilda.webp",
      },
      {
        nome: "Pistache com Framboesa",
        badge: "best-seller",
        descricao: "Massa de baunilha, camadas de brigadeiro de pistache, geleia de framboesa e creme três leites. Coberto com brigadeiro cremoso três leites e praliné de pistache.",
        foto: "/images/bolos/pistache-framboesa.webp",
      },
      {
        nome: "Dulce Nut",
        badge: null,
        descricao: "Massa de nozes, camadas de brigadeiro de nozes e doce de leite artesanal. Coberto com creme três leites, praliné de nozes e brigous enroladinhos de nozes.",
        foto: "/images/bolos/dulce-nut.webp",
      },
      {
        nome: "Strawberry Fields",
        badge: null,
        descricao: "Massa intensa de chocolate 55%, camadas de brigadeiro Belga ao leite e creme três leites com geleia artesanal de morangos. Coberto com brigadeiro belga cremoso e decorado com morangos frescos e brigous boleados.",
        foto: "/images/bolos/strawberry-fields.webp",
      },
      {
        nome: "Dois Amores",
        badge: null,
        descricao: "Massa intensa de chocolate 55%, camadas de brigadeiro Belga ao leite e creme três leites. Coberto e decorado com brigadeiro Belga cremoso. Brigous enroladinhos são opcionais.",
        foto: "/images/bolos/dois-amores.jpg",
      },
      {
        nome: "Trovão",
        badge: null,
        descricao: "Massa intensa de chocolate 55% e camadas de brigadeiro Belga ao leite. Coberto com brigadeiro belga cremoso e decorado com brigous boleados ao leite. O bolo mais chocolatudo que você vai conhecer!",
        foto: "/images/bolos/trovao.jpg",
      },
      {
        nome: "Yellow Submarine",
        badge: null,
        descricao: "Massa de baunilha, camadas de creme três leites, brigadeiro de maracujá e geleia de frutas amarelas. Coberto com creme três leites, lascas de chocolate Belga branco e topo com brigous boleados de Ninho.",
        foto: "/images/bolos/yellow-submarine.jpg",
      },
      {
        nome: "Pink Limonade",
        badge: null,
        descricao: "Massa de limão siciliano, camadas de brigadeiro de limão, geleia de framboesa e creme três leites com lemon curd. Coberto com brigadeiro cremoso três leites, amêndoas tostadas e frutas vermelhas frescas com macarons.",
        foto: "/images/bolos/pink-limonade.jpg",
      },
      {
        nome: "Fraisier",
        badge: null,
        descricao: "Clássico francês com massa leve de baunilha, recheado com crème pâtissière de fava de baunilha, coulis artesanal de morango e morangos frescos. Finalizado com nata fresca baunilhada.",
        foto: "/images/bolos/fraisier.jpg",
      },
      {
        nome: "Tiramisù",
        badge: null,
        descricao: "Massa de baunilha regada com calda de café, recheada com ganache de chocolate Belga ao leite e creme de tiramisù. Finalizado com biscoitos champagne, cacau em pó e arabescos de chocolate.",
        foto: "/images/bolos/tiramisu.jpg",
      },
    ],
  },

  bolosButtercream: {
    descricao: "Bolos artísticos personalizados em Buttercream Suíço. Adequamos a sua ideia à nossa personalidade e food styling.",
    precos: { aro15: 312, aro20: 416, aro25: 523 },
    nota: "Para um orçamento completo de decoração, envie uma foto do modelo desejado. Os valores podem variar de acordo com o tipo de arranjo floral e quantidade de macarons.",
    saboresDisponiveis: ["Trovão", "Dois Amores", "Praliné", "Dulce Nut", "Pistache com Framboesa"],
    estilosDecoracao: [],
  },

  docesEventos: {
    descricao: "Curadoria de doces especiais para o seu evento ou casamento. São doces em miniatura das opções que você já encontra nas vitrines de nossas casas. Montagem de mesa de doces para casamentos, aniversários e festas de 15 anos. Tem algum pedido especial? Fale conosco!",
    foto: "/images/bolos/doces-eventos.jpg",
    observacao: "Consulte disponibilidade e orçamento via WhatsApp.",
  },
};

// ─────────────────────────────────────────────
// FLORES & ARRANJOS
// ─────────────────────────────────────────────

export const floresData = {
  intro: "Composições florais montadas diariamente com as flores mais frescas e lindas do dia. As fotos fazem referência ao tamanho e não às cores/modelos. Caso tenha alguma preferência ou especificação, informe previamente.",

  arranjosFrescos: [
    { nome: "Arranjo Floral Cora",    tamanho: "Extra Grande", hastes: "35 hastes + flores nobres + folhagens", preco: 389.90, foto: "/images/flores/arranjo-cora.webp" },
    { nome: "Arranjo Floral Chérie",  tamanho: "Grande",       hastes: "25 hastes + flores nobres + folhagens", preco: 259.90, foto: "/images/flores/arranjo-cherie.webp" },
    { nome: "Arranjo Floral Diamond", tamanho: "Médio-Grande", hastes: "20 hastes + flores nobres + folhagens", preco: 199.90, foto: "/images/flores/arranjo-diamond.webp" },
    { nome: "Arranjo Floral Amor",    tamanho: "Médio",        hastes: "15 hastes + folhagens",                preco: 169.90, foto: "/images/flores/arranjo-amor.webp" },
    { nome: "Arranjo Floral Paixão",  tamanho: "Pequeno",      hastes: "10 hastes + folhagens",                preco: 128.90, foto: "/images/flores/arranjo-paixao.webp" },
    { nome: "Box Floral",             tamanho: "XG",           hastes: "Arranjo de flores tamanho XG com hastes nobres e folhagens em nossa box cartonada com alças", preco: 499, foto: "/images/flores/box-floral.jpg" },
    { nome: "Box Coralina",           tamanho: "Grande",       hastes: "Arranjo de flores frescas e nobres composto por rosas gardens, mix de flores naturais e hortênsias em nossa box cartonada redonda", preco: 599, foto: "/images/flores/box-coralina.jpg" },
  ],

  rosasVermelhas: [
    { nome: "Arranjo de Rosas Vermelhas", tamanho: "Extra Grande", hastes: "40 rosas + folhagens", preco: 799.90, foto: "/images/flores/rosas-extra-grande.webp", observacao: "*consulte disponibilidade" },
    { nome: "Arranjo de Rosas Vermelhas", tamanho: "Grande", hastes: "20 rosas + folhagens", preco: 399.90, foto: "/images/flores/rosas-grande.webp", observacao: "*consulte disponibilidade" },
    { nome: "Arranjo de Rosas Vermelhas", tamanho: "Médio",  hastes: "14 rosas + folhagens", preco: 289.90, foto: "/images/flores/rosas-medio.webp",  observacao: "*consulte disponibilidade" },
    { nome: "Arranjo Floral La Vie en Rose", tamanho: "Grande", hastes: "14 rosas + hortênsias & folhagens", preco: 389.90, foto: "/images/flores/rosas-la-vie-en-rose.webp", observacao: "*consulte disponibilidade" },
    { nome: "Arranjo Floral Dueto de Rosas", tamanho: "Grande", hastes: "20 rosas + folhagens", preco: 399.90, foto: "/images/flores/rosas-dueto.jpg", observacao: "*consulte disponibilidade" },
    { nome: "Arranjo de Rosas Personalizado", tamanho: "Vários", hastes: "Monte seu arranjo — escolha o tamanho e a cor", preco: null, foto: "/images/flores/rosas-personalizado.webp", observacao: "Consulte via WhatsApp" },
  ],

  floresSecas: [
    { nome: "Arranjo de Flores Secas", tamanho: "Pequeno", descricao: null, preco: 99.90,  foto: "/images/flores/secas-pequeno.webp" },
    { nome: "Arranjo de Flores Secas", tamanho: "Grande", descricao: null, preco: 198,   foto: "/images/flores/secas-grande.webp" },
    { nome: "Garrafinha de Flores Secas", tamanho: null,  descricao: null, preco: 99.90, foto: "/images/flores/garrafinha.webp" },
    { nome: "Galocha de Cerâmica",     tamanho: null, descricao: "1 pé com flores — disponível com flores secas ou frescas", preco: 179, foto: "/images/flores/galocha.webp" },
  ],

  floresPlantadas: {
    descricao: "Flores e folhagens que florescem com o tempo. Espécies selecionadas, plantadas com cuidado em vasos especiais, trazendo frescor, charme e longevidade para qualquer ambiente.",
    observacao: "*Consulte espécies disponíveis na estação",
    fotos: [
      "/images/flores/plantada-1.jpg",
      "/images/flores/plantada-2.jpg",
      "/images/flores/plantada-3.jpg",
      "/images/flores/plantada-4.jpg",
    ],
  },

  vasos: [
    { nome: "Vaso Floral Italy",       descricao: "Arranjo floral com mix de rosas e folhagens montados em vaso de vidro Premium com design tipo murano", preco: 749, foto: "/images/flores/vaso-italy.webp",       observacao: "*consulte disponibilidade" },
    { nome: "Vaso Floral Magnólia",    descricao: "Arranjo floral com mix de flores tropicais montado em vaso de vidro tipo Murano",          preco: 679, foto: "/images/flores/vaso-magnolia.jpg",     observacao: "*consulte disponibilidade" },
    { nome: "Vaso Floral La Rochelle", descricao: "Arranjo floral GG montado com flores e rosas nobres em vaso de cristal transparente",      preco: 479, foto: "/images/flores/vaso-larochelle.webp", observacao: null },
    { nome: "Vaso Floral Diamond",     descricao: "Arranjo floral grande montado em vaso de cristal",                                        preco: 349, foto: "/images/flores/vaso-diamond.webp",     observacao: null },
    { nome: "Vaso Floral Queen",       descricao: "Arranjo floral médio montado em vaso de vidro",                                           preco: 299, foto: "/images/flores/vaso-queen.jpg",       observacao: null },
    { nome: "Vaso Floral Deli",        descricao: "Arranjo de girassóis montado em vaso longo de cristal transparente",                     preco: 479, foto: "/images/flores/vaso-deli.webp",        observacao: "*consulte disponibilidade" },
  ],

  plantas: [
    { nome: "Vaso de Orquídea",            descricao: "Orquídea plantada em vaso de cerâmica.",                                        preco: 189.90, foto: "/images/flores/orquidea.webp",                  observacao: null },
    { nome: "Vaso Ouro de Begônias",       descricao: "Begônia maculata plantada em vaso dourado.",                                    preco: 399,    foto: "/images/flores/vaso-begonias-ouro.webp",        observacao: null },
    { nome: "Vaso Conceito de Begônias",   descricao: "Begônia maculata plantada em vaso estilo concreto.",                            preco: 229,    foto: "/images/flores/vaso-begonias-conceito.jpg",     observacao: null },
    { nome: "Vaso La Rochelle Botânica",   descricao: "Variedade botânica plantada em vaso de cerâmica artesanal.",                    preco: 269,    foto: "/images/flores/vaso-larochelle-pequeno.jpg",    observacao: null },
    { nome: "Vaso de Ficcus Lyrata",       descricao: "Ficcus lyrata plantado em vaso de fibra com pintura artística feita à mão.",    preco: 269,    foto: "/images/flores/ficcus-lyrata.jpg",              observacao: null },
    { nome: "Terrário de Botânicos",       descricao: "Variedades de botânicos plantados em vaso de vidro (preço por unidade).",       preco: 135,    foto: "/images/flores/terrario-botanicos.jpg",         observacao: null },
    { nome: "Bambu da Sorte Torcido",      descricao: "Bambu da sorte torcido tamanho XG em vaso de fibra.",                            preco: 229.90, foto: "/images/flores/bambu-torcido.webp",             observacao: null },
    { nome: "Bambu da Sorte Trançado",     descricao: "Bambu da sorte trançado pequeno em suporte com pedrinhas.",                      preco: 159.90, foto: "/images/flores/bambu-trancado.jpg",             observacao: null },
    { nome: "Bambu da Sorte Médio",        descricao: "Bambu da sorte pequeno em suporte de vidro e madeira com pedrinhas (preço por unidade).", preco: 89.90, foto: "/images/flores/bambu-medio.jpg", observacao: null },
    { nome: "Bambu da Sorte Solitário",    descricao: "Bambu solitário em suporte tipo \"béquer\" com madeira (preço por unidade).",   preco: 45,     foto: "/images/flores/bambu-solitario.webp",           observacao: null },
    { nome: "Kokedama",                    descricao: "Variedade botânica plantada em kokedama de fibra com suporte (preço por unidade).", preco: 65,  foto: "/images/flores/kokedamas.jpg",                  observacao: null },
  ],
};

// ─────────────────────────────────────────────
// KITS & PRESENTES
// ─────────────────────────────────────────────

export const kitsData = {
  nota: "As fotos fazem referência ao tamanho e não às cores/modelos. Caso tenha alguma preferência ou especificação, por gentileza informe previamente.",

  cafeDaManha: [
    {
      nome: "Box Breakfast at Tiffany's",
      preco: 698.90,
      foto: "/images/kits/breakfast-tiffanys.jpg",
      itens: [
        "1 Arranjo Floral Grande (em caixa cartonada presenteável)",
        "2 Quiches salgadas",
        "2 Croissants assados na hora",
        "1 Porção de Pão de Queijo",
        "Acompanhamentos: Creme de Mascarpone, Nutella, Brigadeiro de colher e geleia artesanal",
        "2 Panquecas Americanas Fluffy",
        "2 Toalhas Felpudas",
        "1 Apple Pie",
        "4 Brigous",
        "5 Macarons",
        "1 Suco ou Chá 300ml",
        "2 Sachês de chá francês Dammann",
        "1 Mendiants de Chocolate Belga",
        "1 Granola doce artesanal",
        "Slice de queijo selecionado do dia",
        "Morangos & Uvas frescas",
        "Bag Térmica sustentável",
      ],
      observacao: "A caixa e a bag foram feitas para ser utilizadas diversas vezes :)",
    },
    {
      nome: "Box Café da Manhã",
      preco: 599,
      foto: "/images/kits/cafe-da-manha-1.jpg",
      itens: [
        "1 Arranjo Floral com flores frescas (em caixa de papel)",
        "2 Quiches salgadas",
        "2 Croissants assados na hora",
        "1 Geleia artesanal de frutas vermelhas",
        "1 Brigadeiro de colher",
        "1 Creme de Queijo Mascarpone",
        "2 Toalhas Felpudas",
        "1 Tortinha doce caseira",
        "1 Cookie",
        "4 Brigous",
        "5 Macarons",
        "1 Porção de Pão de Queijo",
        "1 Suco 300ml",
        "2 Sachês de chá francês Dammann",
        "1 Granola artesanal",
      ],
    },
  ],

  kitsComFlores: [
    {
      nome: "Box Paris",         preco: 978.80, foto: "/images/kits/box-paris.webp",
      itens: ["1 Arranjo floral XG personalizado (flores frescas)", "1 Caixa cartonada XG retangular", "2 Croissants (assados na hora)", "1 Chá Casa Madeira 500ml", "1 Geleia Casa Madeira 240gr", "1 Lata de Café em pó Illy", "1 Caixa com 8 macarons", "1 Barra recheada de chocolate Belga", "1 Caixa com 4 Brigous", "1 Latinha Presenteável de Mendiants", "1 Tablete de Chocolate Belga", "1 Caixa de Profiteroles", "2 Éclairs"],
    },
    {
      nome: "Kit Gatsby",        preco: 674.80, foto: "/images/kits/kit-gatsby.webp",
      itens: ["Arranjo Floral Amor", "Caixa Cartonada Presenteável Grande", "1 Vela aromática", "1 Difusor de ambientes", "1 Home Spray"],
    },
    {
      nome: "Kit Annecy",        preco: 598.80, foto: "/images/kits/kit-annecy.webp",
      itens: ["Caixa Cartonada Presenteável Grande", "Arranjo Floral (flores frescas ou secas)", "Latinha Presenteável de Macarons ou Mendiants", "Vela aromática", "Freixenet 750ml"],
    },
    {
      nome: "Kit Ma Cherie",     preco: 584.80, foto: "/images/kits/ma-cherie.webp",
      itens: ["Caixa Cartonada Presenteável Grande", "Arranjo Floral Amor", "Latinha Presenteável de Mendiants", "Barra de Chocolate Belga recheada", "Caixa com 5 macarons", "Espumante 750ml"],
    },
    {
      nome: "Kit Versalhes",     preco: 583.70, foto: "/images/kits/versalhes.jpg",
      itens: ["Caixa Cartonada Presenteável Grande", "Arranjo Floral Amor", "Vinho Tinto, Branco ou Espumante 750ml", "Barra recheada de chocolate Belga", "Tablete de Chocolate Belga", "Latinha Presenteável de Macarons"],
    },
    {
      nome: "Kit Chamonix",      preco: 583,    foto: "/images/kits/kit-chamonix.jpg",
      itens: ["Caixa Cartonada Presenteável Grande", "Arranjo de Flores Secas", "Barra de Chocolate Belga Recheada", "Latinha Presenteável de Mendiants", "Caixa com 5 macarons", "Espumante 750ml"],
    },
    {
      nome: "Kit Provence",      preco: 490.80, foto: "/images/kits/kit-provence.webp",
      itens: ["Caixa Cartonada Presenteável Bolsa", "Arranjo Floral Paixão", "Vela Aromática", "Difusor de ambientes"],
    },
    {
      nome: "Kit Bordeaux",      preco: 483,    foto: "/images/kits/kit-bordeaux.webp",
      itens: ["Caixa Cartonada Presenteável Bolsa", "Arranjo Floral Amor", "Caixa com 8 macarons", "Espumante 750ml"],
    },
    {
      nome: "Kit Jardim de Monet", preco: 458.90, foto: "/images/kits/kit-jardim-monet.webp",
      itens: ["Caixa Cartonada Presenteável Grande", "Arranjo Floral Amor (flores frescas)", "Croissant da casa", "Geleia ZERO açúcar Casa Madeira", "Chá ZERO açúcar Casa Madeira", "Caixa com 8 Macarons", "Caixa com 4 Brigous"],
    },
    {
      nome: "Kit Belle Époque",  preco: 419.90, foto: "/images/kits/belle-epoque.jpg",
      itens: ["Caixa Cartonada Presenteável Bolsa", "Arranjo Floral Amor", "Espumante 750ml", "Caixa com 4 Brigous", "1 Tablete de Chocolate Belga"],
    },
    {
      nome: "Kit St Tropez",     preco: 412.80, foto: "/images/kits/kit-st-tropez.jpg",
      itens: ["Caixa Cartonada Presenteável Bolsa", "Arranjo Floral Amor", "Barra de Chocolate Belga recheada ou Caixa com 8 macarons", "Baby Chandon 187ml", "Tablete de Chocolate Belga"],
    },
    {
      nome: "Kit Ma Belle",      preco: 383.80, foto: "/images/kits/kit-ma-belle.webp",
      itens: ["Caixa Cartonada Presenteável Bolsa", "Arranjo Floral Amor", "Caixa com 8 macarons", "Caixa com 4 brigous", "Tablete de Chocolate Belga"],
    },
    {
      nome: "Kit Marselha",      preco: 339.80, foto: "/images/kits/kit-marselha.webp",
      itens: ["Caixa Cartonada Presenteável Bolsa", "Arranjo Floral Paixão", "Caixa com 5 macarons", "Latinha Presenteável de Mendiants"],
    },
    {
      nome: "Kit Burberry",      preco: 314.90, foto: "/images/kits/kit-burberry.webp",
      itens: ["Caixa de papel em estampa Burberry", "Arranjo Floral Amor", "Espumante 750ml"],
    },
    {
      nome: "Kit Da Vinci",      preco: 289.90, foto: "/images/kits/kit-da-vinci.webp",
      itens: ["Caixa de Papel Presenteável", "Arranjo Floral Paixão (flores frescas ou secas)", "1 Caixa com 4 Brigous", "1 Tablete de Chocolate Belga", "1 Caixa com 8 Macarons"],
    },
    {
      nome: "Kit Van Gogh",      preco: 243.90, foto: "/images/kits/kit-van-gogh.jpg",
      itens: ["Caixa de Papel Presenteável", "Arranjo Floral Médio Amor (flores frescas ou secas)", "Latinha Presenteável (mendiants ou macarons)"],
    },
    {
      nome: "Kit Monalisa",      preco: 219.90, foto: "/images/kits/kit-monalisa.webp",
      itens: ["Caixa de Papel Presenteável", "Arranjo Floral Pequeno Paixão (flores frescas ou secas)", "Caixa com 4 Brigous", "Tablete de Chocolate Belga"],
    },
    {
      nome: "Kit Matisse",       preco: 199.90, foto: "/images/kits/kit-matisse.jpg",
      itens: ["Caixa de Papel Presenteável", "Arranjo Floral Pequeno de Flores Secas", "1 Caixa com 8 Brigous"],
    },
  ],

  kitsSemFlores: [
    {
      nome: "Kit Taittinger",    preco: 753.80, foto: "/images/kits/kit-taittinger.webp",
      itens: ["2 Taças de Cristal para Champagne", "1 Garrafa de Champagne Taittinger Brut 750ml", "1 Caixa de papel presenteável com alça"],
    },
    {
      nome: "Composição Marrais", preco: 498.70, foto: "/images/kits/composicao-marrais.jpg",
      itens: ["1 Espumante Casa Madeira 130 Brut 750ml", "1 Taça de Cristal para espumante", "Caixa de papel com acetato presenteável", "1 Arranjo floral Diamond com flores frescas"],
    },
    {
      nome: "Kit Origem Casa Valduga", preco: 298.80, foto: "/images/kits/kit-origem-valduga.webp",
      itens: ["1 Vinho Origem Casa Valduga 750ml", "2 Geleias Casa Madeira", "1 Abridor de vinho", "Caixa de papel presenteável com tampa"],
    },
    {
      nome: "Kit Casa Valduga com Espumante", preco: 298.80, foto: "/images/kits/kit-casa-valduga.webp",
      itens: ["1 Espumante Casa Madeira 130 Brut 750ml", "1 Taça de Cristal para espumante", "Caixa de papel com acetato presenteável"],
    },
    {
      nome: "Kit Felicidade",    preco: 189,    foto: "/images/kits/kit-felicidade.webp",
      itens: ["1 Caixa de papel Presenteável", "1 Jar no potinho de vidro", "1 Barra de Chocolate recheada", "1 Caixa com 4 brigous", "1 Tablete de Chocolate", "1 Mini acrílico de mendiants"],
    },
    {
      nome: "Kit Freixenet",     preco: 169.90, foto: "/images/kits/kit-freixenet.webp",
      itens: ["Caixa de papel Presenteável", "6 doces sortidos", "1 Baby Freixenet 200ml"],
    },
    {
      nome: "Kit Chandon",       preco: 149.90, foto: "/images/kits/kit-chandon.webp",
      itens: ["Caixa de papel Presenteável", "6 doces sortidos", "1 Baby Chandon 187ml"],
    },
    {
      nome: "Kit Breakfest",     preco: 143.90, foto: "/images/kits/kit-breakfest.jpg",
      itens: ["1 Chá Casa Madeira", "2 Geleias Casa Madeira", "Caixa de papel presenteável com tampa"],
    },
    {
      nome: "Kit Delicatéssen",  preco: 143.90, foto: "/images/kits/kit-delicatessen.jpg",
      itens: ["1 Suco de Uva Casa Madeira", "3 Geleias Casa Madeira", "Caixa de papel presenteável com tampa"],
    },
  ],

  latinhasEChocolates: [
    { nome: "Caixa Seleção com 12 Doces", descricao: "12 docinhos sortidos selecionados de acordo com a disponibilidade do dia, contendo pelo menos 4 variedades diferentes. Acomodados em caixa especial com sacola presenteável.", preco: 152, foto: "/images/doces/caixa-selecao-12.webp" },
    { nome: "Latinhas Presenteáveis", descricao: "Mendiants Belga ao leite (220gr) · Macarons (6 und sortidos) · Trufas (6 und sortidas)", preco: 74, foto: "/images/doces/latinhas-presenteaveis.webp" },
    { nome: "Barras Recheadas",     descricao: "Feitas com chocolate Belga. Consulte os sabores do dia.",                                  preco: 69,   foto: "/images/doces/barras-recheadas.jpg" },
    { nome: "Tablete de Chocolate Belga", descricao: null,                                                                                preco: 34,   foto: "/images/doces/tablete-chocolate-belga.jpg" },
    { nome: "Caixa de Brigadeiros", descricao: "4 und R$31 · 8 und R$62 · 15 und R$115",                                                  preco: 31,   foto: "/images/doces/caixa-brigadeiros.webp" },
    { nome: "Caixa de Macarons",    descricao: "5 und R$47 · 8 und R$76 · 15 und R$143",                                                  preco: 47,   foto: "/images/macarons/caixa-macarons.jpg" },
    { nome: "Caixa de Trufas",      descricao: "4 und R$38 · 8 und R$76 · 15 und R$143 · *produto sazonal, consulte disponibilidade",     preco: 38,   foto: "/images/doces/caixa-trufas.jpg" },
  ],

  caixasBrigous: [
    { qtd: "4 und",  preco: 31  },
    { qtd: "8 und",  preco: 62  },
    { qtd: "15 und", preco: 115 },
  ],
  caixasMacarons: [
    { qtd: "5 und",  preco: 47  },
    { qtd: "8 und",  preco: 76  },
    { qtd: "15 und", preco: 143 },
  ],
  caixasTrufas: [
    { qtd: "4 und",  preco: 38  },
    { qtd: "8 und",  preco: 76  },
    { qtd: "15 und", preco: 143 },
  ],

  linhaHome: {
    descricao: "Velas aromáticas & difusores de ambiente — linha exclusiva Lady Laura.",
    aromas: ["Tiramisù", "Vinho Quente", "Brigadeiro", "Apple Pie", "Provence"],
    produtos: [
      { nome: "Vela Aromática Tiramisù",             descricao: "Vela aromática com aroma Tiramisù",                                          preco: 129, foto: "/images/home/tiramisu.jpg" },
      { nome: "Vela Aromática Vinho Quente",         descricao: "Vela aromática com aroma Vinho Quente",                                      preco: 129, foto: "/images/home/vinho-quente.jpg" },
      { nome: "Vela Aromática Brigadeiro",           descricao: "Vela aromática com aroma Brigadeiro",                                        preco: 129, foto: "/images/home/brigadeiro.jpg" },
      { nome: "Vela Aromática Apple Pie",            descricao: "Vela aromática com aroma Apple Pie",                                         preco: 129, foto: "/images/home/apple-pie.jpg" },
      { nome: "Difusor Tiramisù ou Apple Pie",       descricao: "Difusor de ambiente — Tiramisù ou Apple Pie",                                preco: 169, foto: "/images/home/tiramisu.jpg" },
      { nome: "Difusor Vinho Quente ou Brigadeiro",  descricao: "Difusor de ambiente — Vinho Quente ou Brigadeiro",                           preco: 143, foto: "/images/home/vinho-quente.jpg" },
      { nome: "Difusor + Home Spray Provence",       descricao: "Difusor de ambiente e Home Spray no aroma Provence",                         preco: 143, foto: "/images/home/provence.webp" },
      { nome: "Kit Lady Laura Home",                 descricao: "1 Vela aromática · 1 Difusor de ambientes · 1 Caixa decorada · 1 Sacola para presente", preco: 291, foto: "/images/kits/kit-lady-laura-home.webp" },
    ],
  },
};
