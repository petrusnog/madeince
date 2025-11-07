# Made in CE - SPA

Single Page Application (SPA) para o coletivo Made in CE, desenvolvida com Vue 3, TypeScript e Vite.

## 🚀 Tecnologias

- **Vue 3** - Framework JavaScript progressivo
- **TypeScript** - Tipagem estática para JavaScript
- **Vite** - Build tool moderna e rápida
- **Tailwind CSS** - Framework CSS utilitário (via CDN)
- **Font Awesome** - Ícones (via CDN)

## 📁 Estrutura do Projeto

```
src/
├── components/
│   ├── Header.vue       # Cabeçalho com navegação
│   ├── Hero.vue         # Seção inicial/banner
│   ├── About.vue        # Sobre o projeto
│   ├── Activities.vue   # Lista de atividades
│   ├── Stats.vue        # Estatísticas de impacto
│   ├── Media.vue        # Matérias na mídia
│   ├── Contact.vue      # Redes sociais e contato
│   └── Footer.vue       # Rodapé
├── App.vue              # Componente principal
└── main.ts              # Entry point
```

## 🎨 Componentes

### Header
- Navegação sticky com efeito de scroll
- Menu responsivo
- Links âncora para seções

### Hero
- Imagem de fundo com overlay
- Título principal do projeto

### About
- Descrição detalhada do projeto
- Parágrafos formatados

### Activities
- Lista de atividades/eventos
- Modo de edição (admin)
- CRUD completo

### Stats
- Estatísticas de impacto visual
- Cards animados
- Grid responsivo

### Media
- Matérias na mídia
- Links externos
- Modo de edição (admin)

### Contact
- Links para redes sociais
- Instagram, YouTube, Spotify
- Ícones SVG

### Footer
- Copyright e informações básicas

## 🛠️ Desenvolvimento

### Instalar dependências
```bash
npm install
```

### Executar em modo de desenvolvimento
```bash
npm run dev
```

### Build para produção
```bash
npm run build
```

### Preview do build de produção
```bash
npm run preview
```

## 📝 Notas

- Os dados estão centralizados no `App.vue` para facilitar futuras integrações com backend
- As imagens em `public/` são placeholders SVG - substitua pelas imagens reais do projeto
- O modo admin está disponível mas desabilitado por padrão (altere `isAdmin` no `App.vue`)
- Tailwind CSS e Font Awesome são carregados via CDN para simplificar o setup inicial

## 🔄 Próximos Passos

1. Substituir imagens placeholder por imagens reais
2. Implementar autenticação para modo admin
3. Conectar com backend/Supabase para persistência de dados
4. Adicionar animações e transições
5. Implementar modo responsivo completo (mobile menu)

## 📄 Licença

© 2023-2025 Made in CE - Todos os direitos reservados

