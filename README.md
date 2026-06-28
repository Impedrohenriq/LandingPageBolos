<div align="center">

---

## 🌐 Demonstração

> 🚀 **Link do projeto publicado:** 
> [landing-page-decoracao.vercel.app](https://landing-page-decoracao.vercel.app/)

---

## 📖 Sobre o Projeto

### Objetivo

Apresentar o trabalho artesanal de um ateliê de bolos e decorações, permitindo que clientes conheçam o catálogo, a história da marca e entrem em contato para realizar encomendas.

### Problema que resolve

Negócios locais de confeitaria artesanal frequentemente não possuem uma presença digital que transmita a sofisticação e identidade visual da sua marca. Este projeto entrega uma vitrine digital elegante, sem depender de plataformas genéricas como Instagram Bio.

### Público-alvo

Clientes que buscam bolos e decorações artesanais personalizados para celebrações — aniversários, casamentos, formaturas e eventos corporativos.

---

## ✨ Funcionalidades

- 🏠 **Hero dinâmico** — título, descrição e imagem principal gerenciados pelo CMS
- 📖 **Seção Sobre** — história e valores do ateliê com fotos sobrepostas editáveis
- 🎂 **Catálogo em carrossel** — bolos em destaque exibidos em carrossel com navegação (Swiper.js)
- 🖼️ **Galeria fotográfica** — grid com efeito hover e legenda gerenciados pelo CMS
- 💬 **Seção de Contato** — acesso direto via WhatsApp e Instagram
- 🛎️ **Botão flutuante** — atalho para contato que aparece após rolar 300px da página
- 📱 **Menu responsivo** — hamburger menu para dispositivos móveis com animação
- 🔐 **Área administrativa** — rotas protegidas de login, dashboard, gerenciamento de conteúdo e imagens

---

## 🛠️ Tecnologias Utilizadas

| Tecnologia                                                  | Versão | Uso                                   |
| ----------------------------------------------------------- | ------- | ------------------------------------- |
| [React](https://react.dev)                                     | 19      | Biblioteca de UI                      |
| [TypeScript](https://www.typescriptlang.org)                   | 6       | Tipagem estática                     |
| [Vite](https://vitejs.dev)                                     | 8       | Bundler e servidor de desenvolvimento |
| [Tailwind CSS](https://tailwindcss.com)                        | 4       | Estilização utilitária             |
| [Sanity CMS](https://sanity.io)                                | —      | CMS headless para gerenciar conteúdo |
| [@sanity/client](https://www.npmjs.com/package/@sanity/client) | 7       | Consumo da API do Sanity via GROQ     |
| [React Router DOM](https://reactrouter.com)                    | 7       | Roteamento SPA                        |
| [Swiper.js](https://swiperjs.com)                              | 12      | Carrossel de produtos                 |
| [React Icons](https://react-icons.github.io/react-icons)       | 5       | Biblioteca de ícones                 |
| [Flowbite React](https://flowbite-react.com)                   | 0.12    | Componentes de UI acessíveis         |

---

## 📁 Estrutura do Projeto

```
LandingPageBolos-main/
│
├── frontend/                   # Aplicação React (Vite + TypeScript)
│   ├── public/                 # Arquivos estáticos públicos (ícone)
│   ├── src/
│   │   ├── assets/
│   │   │   └── images/         # Imagens locais (ex: hero.png)
│   │   ├── components/         # Componentes reutilizáveis da UI
│   │   │   ├── Header/         # Navbar responsiva com menu hambúrguer
│   │   │   ├── Hero/           # Seção inicial com dados dinâmicos do CMS
│   │   │   ├── About/          # Seção "Sobre Nós" com fotos e história
│   │   │   ├── Services/       # Carrossel de bolos em destaque (Swiper)
│   │   │   ├── Gallery/        # Galeria fotográfica com efeito hover
│   │   │   ├── Contact/        # Seção de contato com links WhatsApp/Instagram
│   │   │   ├── FloatingContact/# Botão flutuante de atalho para contato
│   │   │   ├── Footer/         # Rodapé
│   │   │   └── Common/         # Componentes compartilhados
│   │   ├── pages/
│   │   │   ├── home/           # Página principal (monta todos os componentes)
│   │   │   ├── login/          # Página de login da área administrativa
│   │   │   └── admin/          # Páginas internas do painel admin
│   │   │       ├── Dashboard.tsx
│   │   │       ├── ContentManager.tsx
│   │   │       ├── ImageManager.tsx
│   │   │       └── Settings.tsx
│   │   ├── routes/
│   │   │   └── AppRoutes.tsx   # Definição de rotas com React Router
│   │   ├── services/
│   │   │   └── api.ts          # Camada de serviços de API
│   │   ├── styles/             # CSS global, reset, variáveis e estilos base
│   │   ├── sanity.ts           # Client Sanity e queries GROQ tipadas
│   │   ├── App.tsx             # Componente raiz da aplicação
│   │   └── main.tsx            # Ponto de entrada (ReactDOM.createRoot)
│   ├── index.html
│   ├── vite.config.ts
│   └── package.json
│
└── cms/
    └── bolos-studio/           # Sanity Studio (CMS headless)
        ├── schemaTypes/        # Schemas de conteúdo
        │   ├── bolo.ts         # Schema do produto Bolo
        │   ├── hero.ts         # Schema da seção Hero
        │   ├── about.ts        # Schema da seção Sobre
        │   ├── fotoGaleria.ts  # Schema das fotos da galeria
        │   └── index.ts        # Exportação dos schemas
        ├── sanity.config.ts    # Configuração do Sanity Studio
        └── sanity.cli.ts       # CLI do Sanity
```

---

## 🚀 Instalação e Execução

### Pré-requisitos

- [Node.js](https://nodejs.org) >= 18
- [npm](https://npmjs.com) >= 9

### 1. Clone o repositório

```bash
git clone https://github.com/Impedrohenriq/LandingPageBolos.git
cd LandingPageBolos
```

### 2. Instale as dependências do frontend

```bash
cd frontend
npm install
```

### 3. Execute o frontend em modo de desenvolvimento

```bash
npm run dev
```

O projeto estará disponível em **https://landing-page-decoracao.vercel.app/**

### 4. (Opcional) Execute o Sanity Studio

```bash
cd ../cms/bolos-studio
npm install
npm run dev
```

O Sanity Studio estará disponível para o Cliente.

### Scripts disponíveis (frontend)

| Comando             | Descrição                          |
| ------------------- | ------------------------------------ |
| `npm run dev`     | Inicia o servidor de desenvolvimento |
| `npm run build`   | Gera o build de produção           |
| `npm run preview` | Visualiza o build localmente         |
| `npm run lint`    | Executa o linter (ESLint)            |

---

## 📱 Responsividade

O projeto foi desenvolvido com abordagem **mobile-first** utilizando Tailwind CSS. A interface se adapta completamente a:

- 📱 **Smartphones** — menu hambúrguer, layout em coluna única, touch-friendly
- 💻 **Tablets** — grid de 2 colunas na galeria, carrossel com 2 slides visíveis
- 🖥️ **Desktops** — layout full de 12 colunas, carrossel com 3 slides, menu horizontal duplo

---

## 🔮 Melhorias Futuras

- [ ] Implementar autenticação real na área administrativa
- [ ] Adicionar formulário de encomenda com envio via e-mail/WhatsApp API
- [ ] Criar página de detalhes do produto (modal ou rota dedicada)
- [ ] Adicionar animações de entrada com Framer Motion
- [ ] Implementar SEO com metatags e Open Graph dinâmicos
- [ ] Configurar deploy automático (CI/CD) com GitHub Actions
- [ ] Adicionar testes unitários com Vitest

---

## 👤 Autor

Desenvolvido por **Pedro Henrique**

[![GitHub](https://img.shields.io/badge/GitHub-Impedrohenriq-181717?style=for-the-badge&logo=github)](https://github.com/Impedrohenriq)
[![LinkedIn](www.linkedin.com/in/pedro-silva-776a1a3b0)

---

<div align="center">
  <sub>Feito com ❤️ e React</sub>
</div>
