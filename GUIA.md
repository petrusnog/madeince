# 🚀 Guia Rápido - Made in CE SPA

## Início Rápido

### 1. Executar o projeto
```bash
npm run dev
```
Acesse: http://localhost:5173 (ou porta alternativa se ocupada)

### 2. Estrutura de Componentes

```
App.vue
├── Header.vue          # Navegação
├── Hero.vue            # Banner principal
├── About.vue           # Sobre o projeto
├── Activities.vue      # Lista de atividades (CRUD)
├── Stats.vue           # Estatísticas
├── Media.vue           # Mídia (CRUD)
├── Contact.vue         # Redes sociais
└── Footer.vue          # Rodapé
```

## 📝 Como Usar

### Editar Conteúdo

Todos os dados estão em `src/App.vue`. Para editar:

1. **Título Hero**:
```typescript
const aboutData = {
  title: "Seu novo título aqui",
  // ...
}
```

2. **Descrição Sobre**:
```typescript
const aboutData = {
  // ...
  description: "Parágrafo 1\n\nParágrafo 2\n\nParágrafo 3"
}
```

3. **Adicionar Atividade**:
```typescript
const activities = ref([
  // ... atividades existentes
  {
    id: 4,
    number: "04",
    title: "Nova Atividade",
    date: "Data do evento",
    location: "Local do evento",
    description: "Descrição detalhada",
    link: "https://..."
  }
])
```

4. **Editar Estatísticas**:
```typescript
const stats = [
  { label: "Sua Métrica", value: "100" },
  // ...
]
```

5. **Adicionar Matéria**:
```typescript
const media = ref([
  // ... matérias existentes
  {
    id: 3,
    source: "Nome do Veículo",
    title: "Título da Matéria",
    link: "https://..."
  }
])
```

6. **Atualizar Redes Sociais**:
```typescript
const contactData = {
  instagram: "@seu_instagram",
  youtube: "@seu_canal",
  spotify: "Seu Podcast"
}
```

### Modo Admin

Para habilitar edição inline:

```typescript
const isAdmin = ref(true) // Mudar para true
```

Com isso, você poderá:
- ✏️ Adicionar novas atividades
- ✏️ Editar atividades existentes
- 🗑️ Excluir atividades
- ✏️ Adicionar matérias de mídia
- ✏️ Editar matérias
- 🗑️ Excluir matérias

### Substituir Imagens

As imagens estão em `public/`:

1. **Logo** (`public/logo.png`):
   - Substitua pelo logo real
   - Recomendado: PNG com fundo transparente
   - Tamanho: ~200x80px

2. **Hero Background** (`public/initial.jpg`):
   - Substitua pela imagem de fundo
   - Recomendado: JPG de alta qualidade
   - Tamanho: 1920x1080px ou maior

## 🎨 Personalização

### Cores

As cores estão definidas via Tailwind CSS:
- Roxo: `purple-900`, `purple-800`, `purple-600`
- Rosa: `pink-800`, `pink-300`
- Cinza: `gray-50`, `gray-800`, `gray-900`

Para mudar, edite as classes nos componentes.

### Fontes

Atualmente usa:
- **Títulos**: Bebas Neue (Google Fonts)
- **Texto**: System fonts

Para adicionar novas fontes, edite `index.html`:
```html
<link href="https://fonts.googleapis.com/css2?family=SuaFonte&display=swap" rel="stylesheet">
```

## 🔧 Comandos Úteis

```bash
# Desenvolvimento
npm run dev

# Build para produção
npm run build

# Preview do build
npm run preview

# Verificar erros TypeScript
npx tsc --noEmit
```

## 📦 Build para Produção

```bash
npm run build
```

Os arquivos estarão em `dist/`. Faça upload para:
- Vercel
- Netlify
- GitHub Pages
- Seu servidor web

## 🐛 Troubleshooting

### Porta em uso
Se a porta 5173 estiver ocupada, o Vite automaticamente usa outra (5174, etc).

### Imagens não aparecem
Certifique-se que as imagens estão em `public/` e não em `src/assets/`.

### Erros TypeScript
Execute: `npx tsc --noEmit` para ver erros detalhados.

### Estilos Tailwind não aplicados
Verifique se o CDN está carregando em `index.html`.

## 📚 Documentação Adicional

- `README.md` - Visão geral do projeto
- `COMPONENTS.md` - Documentação detalhada dos componentes
- [Vue 3 Docs](https://vuejs.org/)
- [Vite Docs](https://vitejs.dev/)
- [Tailwind CSS](https://tailwindcss.com/)

## 🤝 Contribuindo

Para adicionar novos componentes:

1. Crie em `src/components/NomeComponente.vue`
2. Importe em `src/App.vue`
3. Adicione ao template
4. Documente em `COMPONENTS.md`

## 📞 Suporte

Para dúvidas sobre o projeto Made in CE:
- Instagram: @festivalmadeince
- YouTube: @FestivalMadeinCE
