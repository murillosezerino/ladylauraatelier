# Lady Laura Atelier

Site oficial da **Lady Laura Atelier** — confeitaria artesanal francesa, flores, presentes e eventos em **São Jose dos Campos** e **Jacarei**.

**Stack:** Next.js 14 | TypeScript | Tailwind CSS | Vercel

---

## Sobre o projeto

O site foi desenvolvido como uma experiencia digital premium para a marca Lady Laura Atelier, refletindo a sofisticacao e o cuidado artesanal da confeitaria. Inspirado na estetica francesa com toques contemporaneos, o design prioriza imagens grandes, animacoes suaves e navegacao intuitiva.

### Principais funcionalidades

- **Landing page cinematografica** com parallax, animacoes de reveal e efeitos visuais
- **Catalogo de Confeitaria** com bolos festivos, buttercream e doces para eventos
- **Catalogo de Flores** com arranjos frescos, rosas, flores secas e vasos
- **Catalogo de Eventos** com formatos Petit Comite, Petit Jardin e Grand Royale
- **Pagina de FAQ** independente com accordion interativo
- **Integracao WhatsApp** em todos os CTAs para pedidos diretos
- **Google Maps** embutido na secao de localizacao
- **Feed Instagram** com galeria masonry linkando para o perfil
- **Navbar inteligente** com deteccao de secao escura/clara e logo adaptativo
- **SEO otimizado** com Open Graph, meta tags e fontes otimizadas
- **100% responsivo** — mobile-first com ajustes para tablet e desktop
- **Animacoes de scroll** (reveal, fade-up, stagger) com IntersectionObserver
- **Carrossel horizontal** nativo com botoes de navegacao e fade nas bordas

---

## Setup local

```bash
# 1. Clonar o repositorio
git clone https://github.com/seu-usuario/ladylauraatelier.git
cd ladylauraatelier

# 2. Instalar dependencias
npm install

# 3. Rodar em desenvolvimento
npm run dev
# -> http://localhost:3000

# 4. Build de producao
npm run build
npm start
```

---

## Estrutura do projeto

```
ladylauraatelier/
|
|-- app/
|   |-- page.tsx                    # Pagina principal (home)
|   |-- layout.tsx                  # Layout global + SEO + fontes
|   |-- globals.css                 # Estilos globais + animacoes + Tailwind
|   |-- faq/page.tsx                # Pagina de duvidas frequentes
|   |-- catalogo/
|       |-- bolos/page.tsx          # Catalogo de confeitaria & doces
|       |-- flores/page.tsx         # Catalogo de flores & arranjos
|       |-- eventos/page.tsx        # Catalogo de eventos & reservas
|       |-- kits/page.tsx           # Catalogo de presentes & kits
|
|-- components/
|   |-- Nav.tsx                     # Navegacao fixa com deteccao dark/light
|   |-- Hero.tsx                    # Hero cinematografico com parallax
|   |-- Categories.tsx              # Grid de categorias (confeitaria, doces, etc)
|   |-- Editorial.tsx               # Secao editorial com imagens grandes
|   |-- FeaturedProducts.tsx        # Produtos em destaque
|   |-- Events.tsx                  # Preview de eventos na home
|   |-- Catalogs.tsx                # Cards dos catalogos
|   |-- Marquee.tsx                 # Texto corrido animado
|   |-- About.tsx                   # Secao sobre (Thay + Renata)
|   |-- Testimonials.tsx            # Depoimentos de clientes
|   |-- FAQ.tsx                     # Accordion de perguntas frequentes
|   |-- InstagramFeed.tsx           # Galeria masonry do Instagram
|   |-- CTASection.tsx              # CTA final + secao de localizacao com mapas
|   |-- Footer.tsx                  # Rodape com links e contato
|   |-- HorizontalScroll.tsx        # Carrossel horizontal reutilizavel
|   |-- PhotoSwitcher.tsx           # Alternador de fotos (buttercream)
|   |-- SmoothScroll.tsx            # Scroll suave
|   |-- RevealInit.tsx              # Inicializador de animacoes de scroll
|
|-- lib/
|   |-- data.ts                     # Dados do site (config, textos, enderecos)
|   |-- catalog-data.ts             # Dados dos catalogos (bolos, flores, etc)
|
|-- public/
|   |-- fonts/                      # Fontes customizadas (Bobby Jones, etc)
|   |-- images/
|       |-- bolos/                  # Fotos dos bolos e doces
|       |-- flores/                 # Fotos de arranjos e flores
|       |-- eventos/                # Fotos de eventos e mesas
|       |-- confeitaria/            # Fotos de patisserie
|       |-- doces/                  # Fotos de doces finos
|       |-- macarons/               # Fotos de macarons
|       |-- chef/                   # Fotos da equipe
|       |-- ilustracoes/            # Ilustracoes decorativas
|       |-- logo-ladylaura-*.svg    # Logos (white, dark, rose, clean)
|
|-- tailwind.config.ts              # Paleta de cores, fontes, animacoes
|-- next.config.mjs                 # Configuracao do Next.js
|-- tsconfig.json                   # Configuracao do TypeScript
```

---

## Como atualizar o conteudo

### Textos e configuracoes

Todo o conteudo editavel esta centralizado em dois arquivos:

| Arquivo | Conteudo |
|---------|----------|
| `lib/data.ts` | Nome, WhatsApp, enderecos, Instagram, textos da home, categorias, depoimentos |
| `lib/catalog-data.ts` | Sabores de bolos, tamanhos, flores, arranjos, precos |

### Imagens

Substitua os arquivos em `public/images/` mantendo os mesmos nomes. Formatos recomendados:
- **WebP** para fotos (melhor compressao)
- **JPG** como fallback
- **SVG** para logos e icones

### Enderecos e WhatsApp

Edite `siteConfig` em `lib/data.ts`:

```typescript
export const siteConfig = {
  whatsapp: '5512982910000',
  instagram: 'https://www.instagram.com/ladylauraatelier',
  addresses: [
    {
      city: 'Sao Jose dos Campos',
      street: 'Av. Barao do Rio Branco, 646',
      neighborhood: 'Jd. Esplanada',
      mapsUrl: '...',
      embedUrl: '...',
    },
    // ...
  ],
}
```

---

## Paleta de cores

| Cor | Hex | Uso |
|-----|-----|-----|
| Base | `#FBF6F0` | Fundo principal |
| Primary | `#2A2A2A` | Texto principal |
| Rose | `#E8CFCF` | Destaques suaves |
| Rose Dark | `#C8728A` | Acentos, botoes, links |
| Rose Deep | `#A05070` | Hover, gradientes |
| Gold | `#B8966A` | Destaques premium (Grand Royale) |
| Olive | `#6F7D6B` | Acentos naturais (Petit Jardin) |

---

## Fontes

| Fonte | Uso |
|-------|-----|
| **Cormorant Garamond** | Titulos (h1, h2, h3) |
| **Poppins** | Corpo de texto e labels |
| **Bobby Jones** | Display decorativo |
| **Beautifully Delicious** | Script/cursivo |
| **Schoolbell** | Escrita a mao |

---

## Deploy

### Vercel (recomendado)

O projeto esta configurado para deploy automatico na Vercel:

1. Conecte o repositorio GitHub na Vercel
2. Framework: **Next.js** (detectado automaticamente)
3. Build command: `next build`
4. Output directory: `.next`

Cada push na branch `main` dispara um novo deploy automaticamente.

### Dominio customizado

1. Vercel > Settings > Domains > Adicionar dominio
2. Configurar DNS no provedor:
   - `CNAME www` -> `cname.vercel-dns.com`
   - `A @` -> IP da Vercel
3. SSL provisionado automaticamente

---

## Animacoes e efeitos

O site utiliza diversas animacoes CSS customizadas:

- **Reveal** — elementos aparecem ao entrar no viewport (fade + translate)
- **Parallax** — background do hero se move em velocidade diferente (desativado no mobile)
- **imgPulse** — zoom sutil e continuo em todas as imagens (efeito hipnotizante)
- **bg-drift** — movimento lento de fundo em secoes com imagem de capa
- **card-lift** — cards sobem e ganham sombra no hover
- **btn-shine** — reflexo de luz deslizante em botoes no hover
- **Marquee** — texto horizontal infinito

---

## Performance

- Imagens otimizadas com `next/image` (lazy loading, responsive sizes)
- Fontes com `font-display: swap` e preload via Google Fonts
- Parallax desativado no mobile para evitar jank
- `requestAnimationFrame` throttling em scroll listeners
- Scroll indicators com CSS puro (sem JS desnecessario)

---

Desenvolvido por **CZ Studio** | [Murillo Sezerino](https://murillosezerino.com)
