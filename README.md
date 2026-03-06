# Lady Laura Atelier — Website

Site oficial da Lady Laura Atelier, confeitaria artesanal com unidades em São José dos Campos e Jacareí.

**Stack:** Next.js 14 · TypeScript · Tailwind CSS · Vercel

---

## 🚀 Setup local

```bash
# 1. Instalar dependências
npm install

# 2. Rodar em desenvolvimento
npm run dev
# → http://localhost:3000

# 3. Build de produção
npm run build
npm start
```

---

## ✏️ Como atualizar o conteúdo

**Todo o conteúdo do site está em um único arquivo:** `lib/data.ts`

- Textos, preços, produtos → edite `lib/data.ts`
- Número de WhatsApp, endereços, Instagram → `siteConfig` em `lib/data.ts`
- Fotos → substitua os arquivos em `public/images/`

### Adicionando fotos reais

1. Coloque as fotos em `public/images/`:
   - `public/images/bolos.jpg`
   - `public/images/flores.jpg`
   - `public/images/kits.jpg`
   - `public/images/chef-laura.jpg`
   - `public/og-image.jpg` (1200×630px para redes sociais)

2. Em cada componente, descomente o `<Image>` e remova o placeholder emoji.

---

## 🌐 Deploy na Vercel

### Via GitHub (recomendado)

```bash
# 1. Criar repositório no GitHub
git init
git add .
git commit -m "feat: Lady Laura Atelier — initial setup"
git branch -M main
git remote add origin https://github.com/seu-usuario/ladylaura-atelier.git
git push -u origin main

# 2. Na Vercel:
# → vercel.com → Add New Project → Import GitHub repo
# → Framework: Next.js (detectado automaticamente)
# → Deploy
```

### Via CLI

```bash
npm i -g vercel
vercel
```

### Domínio customizado

1. Vercel → Settings → Domains → Add `ladylaura.com.br`
2. Configurar DNS no seu provedor (Hostinger/Cloudflare):
   - CNAME `www` → `cname.vercel-dns.com`
   - A `@` → IP fornecido pela Vercel
3. SSL provisionado automaticamente

---

## 📁 Estrutura do projeto

```
ladylaura-atelier/
├── app/
│   ├── layout.tsx      # Metadados SEO globais
│   ├── page.tsx        # Página principal
│   └── globals.css     # Estilos globais + Tailwind
├── components/
│   ├── Nav.tsx         # Navegação responsiva
│   ├── Hero.tsx        # Seção hero
│   ├── Products.tsx    # Cardápio (bolos, flores, kits)
│   ├── About.tsx       # A Chef Laura
│   ├── Testimonials.tsx # Avaliações
│   ├── FAQ.tsx         # Dúvidas frequentes (accordion)
│   ├── Contact.tsx     # Seção de contato + WhatsApp
│   ├── Footer.tsx      # Rodapé
│   └── RevealInit.tsx  # Animações de scroll
├── lib/
│   └── data.ts         # ← TODO O CONTEÚDO DO SITE AQUI
├── public/
│   └── images/         # Colocar fotos reais aqui
└── ...configs
```

---

## 🔧 Workflow de atualização

```bash
# Criar branch para mudanças
git checkout -b update/novos-precos

# Editar lib/data.ts
# Testar local: npm run dev

# Commit + push → deploy automático na Vercel
git add .
git commit -m "update: novos preços bolos"
git push origin update/novos-precos

# Merge para main quando pronto
```

---

Desenvolvido por [Murillo Sezerino](https://murillosezerino.com)
