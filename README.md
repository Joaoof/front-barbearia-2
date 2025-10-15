# 💈 Front Barbearia 2.0

> Sistema frontend moderno para barbearias com foco na experiência do usuário e agendamento online

[![GitHub](https://img.shields.io/github/license/Joaoof/front-barbearia-2?style=for-the-badge)](LICENSE)
[![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://reactjs.org/)
[![Next.js](https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)

## 🎯 Sobre o Projeto

O **Front Barbearia 2.0** é uma aplicação web moderna desenvolvida para revolucionar a experiência de agendamento em barbearias. Com design responsivo e interface intuitiva, o sistema permite que clientes encontrem, avaliem e agendem serviços de forma rápida e eficiente.

### 🌟 Características Principais

- **Interface Moderna**: Design clean e profissional otimizado para conversão
- **Responsivo**: Experiência perfeita em dispositivos móveis, tablets e desktop
- **Performance Otimizada**: Carregamento rápido e navegação fluida
- **Acessibilidade**: Seguindo padrões WCAG para inclusão digital
- **SEO Friendly**: Otimizado para mecanismos de busca

## ✨ Funcionalidades

### 🏠 **Landing Page Atrativa**
- Hero section com call-to-action impactante
- Galeria de trabalhos realizados
- Depoimentos de clientes satisfeitos
- Seção de serviços e preços transparentes

### 📅 **Sistema de Agendamento**
- Calendário interativo em tempo real
- Seleção de profissionais disponíveis
- Escolha de serviços e duração
- Confirmação via email/SMS

### 👥 **Área do Cliente**
- Dashboard personalizado
- Histórico de agendamentos
- Sistema de avaliações
- Gerenciamento de perfil

### 🎨 **Galeria de Trabalhos**
- Portfólio visual dos serviços
- Filtros por tipo de corte/serviço
- Visualização em alta qualidade
- Compartilhamento nas redes sociais

### 📱 **Integração Social**
- Login com Google/Facebook
- Compartilhamento de experiências
- Feed do Instagram integrado
- WhatsApp para contato direto

## 🛠️ Stack Tecnológica

### **Frontend Core**
- **[React 18](https://reactjs.org/)** - Biblioteca JavaScript para interfaces
- **[Next.js 14](https://nextjs.org/)** - Framework React para produção
- **[TypeScript](https://www.typescriptlang.org/)** - Superset tipado do JavaScript
- **[Tailwind CSS](https://tailwindcss.com/)** - Framework CSS utility-first

### **Gerenciamento de Estado**
- **[Zustand](https://zustand-demo.pmnd.rs/)** - Gerenciamento de estado simples
- **[React Query](https://tanstack.com/query)** - Cache e sincronização de dados

### **Interface e UX**
- **[Framer Motion](https://www.framer.com/motion/)** - Animações fluidas
- **[Radix UI](https://www.radix-ui.com/)** - Componentes acessíveis
- **[Lucide Icons](https://lucide.dev/)** - Ícones modernos e consistentes

### **Formulários e Validação**
- **[React Hook Form](https://react-hook-form.com/)** - Formulários performáticos
- **[Zod](https://zod.dev/)** - Validação de esquemas TypeScript

### **Autenticação**
- **[NextAuth.js](https://next-auth.js.org/)** - Autenticação completa
- **[JWT](https://jwt.io/)** - Tokens de autenticação seguros

### **Desenvolvimento e Deploy**
- **[ESLint](https://eslint.org/)** + **[Prettier](https://prettier.io/)** - Qualidade de código
- **[Husky](https://typicode.github.io/husky/)** - Git hooks
- **[Vercel](https://vercel.com/)** - Plataforma de deploy

## 🚀 Início Rápido

### **Pré-requisitos**

Certifique-se de ter instalado em sua máquina:

- **Node.js** (versão 18 ou superior)
- **npm** ou **yarn** ou **pnpm**
- **Git**

### **Instalação**

1. **Clone o repositório**
   ```bash
   git clone https://github.com/Joaoof/front-barbearia-2.git
   cd front-barbearia-2
   ```

2. **Instale as dependências**
   ```bash
   npm install
   # ou
   yarn install
   # ou
   pnpm install
   ```

3. **Configure as variáveis de ambiente**
   ```bash
   cp .env.example .env.local
   ```
   
   Edite o arquivo `.env.local` e configure suas variáveis:
   ```env
   NEXTAUTH_URL=http://localhost:3000
   NEXTAUTH_SECRET=seu-secret-super-seguro
   GOOGLE_CLIENT_ID=seu-google-client-id
   GOOGLE_CLIENT_SECRET=seu-google-client-secret
   DATABASE_URL=sua-url-do-banco
   ```

4. **Execute o projeto em desenvolvimento**
   ```bash
   npm run dev
   # ou
   yarn dev
   # ou
   pnpm dev
   ```

5. **Acesse no navegador**
   ```
   http://localhost:3000
   ```

## 📁 Estrutura do Projeto

```
front-barbearia-2/
├── 📁 src/
│   ├── 📁 app/                    # App Router do Next.js 14
│   │   ├── 📁 (auth)/            # Rotas de autenticação
│   │   ├── 📁 agendamento/       # Sistema de agendamento
│   │   ├── 📁 perfil/            # Área do usuário
│   │   └── 📄 layout.tsx         # Layout principal
│   ├── 📁 components/            # Componentes reutilizáveis
│   │   ├── 📁 ui/                # Componentes de interface
│   │   ├── 📁 forms/             # Formulários
│   │   └── 📁 layout/            # Componentes de layout
│   ├── 📁 hooks/                 # Custom hooks
│   ├── 📁 lib/                   # Utilitários e configurações
│   ├── 📁 stores/                # Estado global (Zustand)
│   ├── 📁 types/                 # Definições TypeScript
│   └── 📁 utils/                 # Funções auxiliares
├── 📁 public/                    # Arquivos estáticos
│   ├── 📁 images/               # Imagens
│   └── 📁 icons/                # Ícones
├── 📄 tailwind.config.js        # Configuração do Tailwind
├── 📄 next.config.js            # Configuração do Next.js
└── 📄 package.json              # Dependências e scripts
```

## 🎨 Design System

### **Paleta de Cores**
```css
/* Cores Principais */
--primary: #1a1a1a;          /* Preto principal */
--secondary: #d4af37;        /* Dourado elegante */
--accent: #ffffff;           /* Branco puro */

/* Tons de Cinza */
--gray-50: #f9fafb;
--gray-100: #f3f4f6;
--gray-900: #111827;

/* Estados */
--success: #10b981;          /* Verde sucesso */
--warning: #f59e0b;          /* Amarelo alerta */
--error: #ef4444;            /* Vermelho erro */
```

### **Tipografia**
- **Fonte Principal**: `Inter` - Clean e moderna
- **Fonte Display**: `Playfair Display` - Elegante para títulos
- **Fonte Mono**: `JetBrains Mono` - Para código

### **Componentes Reutilizáveis**
- Buttons com variantes (primary, secondary, outline)
- Cards responsivos e sombreados
- Forms com validação em tempo real
- Modal/Dialog acessíveis
- Loading states animados

## 📱 Responsividade

O projeto utiliza uma abordagem **Mobile-First** com breakpoints otimizados:

```css
/* Breakpoints Tailwind CSS */
sm: '640px'     /* Smartphones landscape */
md: '768px'     /* Tablets */
lg: '1024px'    /* Laptops */
xl: '1280px'    /* Desktop */
2xl: '1536px'   /* Large desktop */
```

## 🔧 Scripts Disponíveis

```bash
# Desenvolvimento
npm run dev          # Servidor de desenvolvimento
npm run build        # Build para produção
npm run start        # Servidor de produção
npm run preview      # Preview do build

# Qualidade de Código
npm run lint         # Executar ESLint
npm run lint:fix     # Corrigir problemas do ESLint
npm run type-check   # Verificar tipos TypeScript

# Testes
npm run test         # Executar testes
npm run test:watch   # Testes em modo watch
npm run test:coverage # Cobertura de testes
```

## 🌐 Deploy

### **Vercel (Recomendado)**
```bash
# Instalar Vercel CLI
npm i -g vercel

# Deploy
vercel --prod
```

### **Netlify**
```bash
# Build
npm run build

# Deploy pasta out/
netlify deploy --prod --dir=out
```

### **Docker**
```dockerfile
FROM node:18-alpine

WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production

COPY . .
RUN npm run build

EXPOSE 3000
CMD ["npm", "start"]
```

## 📊 Performance

### **Métricas Alvo**
- **Largest Contentful Paint (LCP)**: < 2.5s
- **First Input Delay (FID)**: < 100ms
- **Cumulative Layout Shift (CLS)**: < 0.1
- **Performance Score**: > 90

### **Otimizações Implementadas**
- ✅ Image optimization (next/image)
- ✅ Code splitting automático
- ✅ Bundle analysis (webpack-bundle-analyzer)
- ✅ Compression (gzip/brotli)
- ✅ Service Worker para cache
- ✅ Prefetch de rotas críticas

## 🛡️ Segurança

- **CSP Headers**: Content Security Policy configurado
- **HTTPS Only**: Forçar conexões seguras
- **Rate Limiting**: Proteção contra spam
- **Input Validation**: Sanitização de dados
- **JWT Secure**: Tokens com expiração
- **CORS**: Cross-Origin configurado

## 🤝 Contribuição

Contribuições são muito bem-vindas! Para contribuir:

1. **Fork** o projeto
2. Crie uma **branch** para sua feature (`git checkout -b feature/AmazingFeature`)
3. **Commit** suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. **Push** para a branch (`git push origin feature/AmazingFeature`)
5. Abra um **Pull Request**

### **Padrões de Commit**
```bash
feat: nova funcionalidade
fix: correção de bug
docs: documentação
style: formatação
refactor: refatoração
test: testes
chore: tarefas de manutenção
```

## 📝 Roadmap

### **🔄 Versão Atual (2.0)**
- [x] Interface responsiva moderna
- [x] Sistema de agendamento básico
- [x] Autenticação social
- [x] Dashboard do cliente

### **🚀 Próximas Features (2.1)**
- [ ] Sistema de notificações push
- [ ] Chat em tempo real
- [ ] Programa de fidelidade
- [ ] Integração com pagamentos (PIX/Cartão)

### **🎯 Futuro (3.0)**
- [ ] App mobile (React Native)
- [ ] IA para recomendações
- [ ] Realidade aumentada (AR)
- [ ] Marketplace de produtos

## 📄 Licença

Este projeto está sob a licença **MIT**. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## 🙏 Agradecimentos

- **[Rocketseat](https://rocketseat.com.br/)** - Inspiração e conhecimento
- **[Vercel](https://vercel.com/)** - Plataforma de deploy incrível
- **[Tailwind Labs](https://tailwindlabs.com/)** - Framework CSS fantástico
- **Comunidade React** - Suporte e inovação constante

## 📞 Contato

**João** - Desenvolvedor Full Stack

- 🌐 **Portfolio**: [joaoof.com.br](https://joaoof.com.br)
- 💼 **LinkedIn**: [linkedin.com/in/joaoof](https://linkedin.com/in/joaoof)
- 📧 **Email**: contato@joaoof.com.br
- 🐱 **GitHub**: [@Joaoof](https://github.com/Joaoof)

---

<div align="center">
  <strong>Desenvolvido com ❤️ por João</strong><br>
  <em>Transformando ideias em código desde 2020</em>
</div>
