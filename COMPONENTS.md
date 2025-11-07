# Estrutura de Componentes - Made in CE SPA

## 📋 Visão Geral

Este documento descreve a estrutura de componentes da aplicação Made in CE, replicada a partir do `index.html` original.

## 🏗️ Arquitetura

### Componentes Criados

1. **Header.vue** (`src/components/Header.vue`)
   - Navegação sticky com animação ao scroll
   - Links para seções âncora
   - Efeito de redução de altura ao rolar a página
   - Props: nenhuma (estado interno para scroll)

2. **Hero.vue** (`src/components/Hero.vue`)
   - Seção inicial com imagem de fundo
   - Overlay com gradiente
   - Props: `title` (string)

3. **About.vue** (`src/components/About.vue`)
   - Seção "Sobre o Projeto"
   - Formatação de parágrafos automática
   - Props: `description` (string com parágrafos separados por `\n\n`)

4. **Activities.vue** (`src/components/Activities.vue`)
   - Lista de atividades/eventos
   - Modo de visualização e edição
   - CRUD completo (admin)
   - Props: `activities`, `isAdmin`, `editMode`
   - Events: `add-activity`, `edit-activity`, `save-activity`, `delete-activity`, `cancel-edit`

5. **Stats.vue** (`src/components/Stats.vue`)
   - Estatísticas de impacto
   - Grid responsivo
   - Cards com efeito hover
   - Props: `stats` (array de { label, value })

6. **Media.vue** (`src/components/Media.vue`)
   - Matérias na mídia
   - Modo de visualização e edição
   - CRUD completo (admin)
   - Props: `media`, `isAdmin`, `editMode`
   - Events: `add-media`, `edit-media`, `save-media`, `delete-media`, `cancel-edit`

7. **Contact.vue** (`src/components/Contact.vue`)
   - Links para redes sociais
   - Ícones SVG inline
   - Props: `instagram`, `youtube`, `spotify`

8. **Footer.vue** (`src/components/Footer.vue`)
   - Rodapé simples
   - Copyright
   - Props: nenhuma

## 📊 Fluxo de Dados

```
App.vue (Estado Central)
    │
    ├─> Header.vue
    ├─> Hero.vue ← aboutData.title
    ├─> About.vue ← aboutData.description
    ├─> Activities.vue ← activities, isAdmin, editMode
    │       └─> Events → App.vue (CRUD operations)
    ├─> Stats.vue ← stats
    ├─> Media.vue ← media, isAdmin, editMode
    │       └─> Events → App.vue (CRUD operations)
    ├─> Contact.vue ← contactData
    └─> Footer.vue
```

## 🔄 Gerenciamento de Estado

Todo o estado da aplicação está centralizado no `App.vue`:

- `isAdmin`: boolean para controle de modo admin
- `editMode`: objeto com { type, id } para controle de edição
- `activities`: array de atividades
- `media`: array de matérias
- `stats`: array de estatísticas (read-only)
- `aboutData`: objeto com title e description
- `contactData`: objeto com redes sociais

## 🎨 Estilos

- **Tailwind CSS**: Via CDN para classes utilitárias
- **Font Awesome**: Via CDN para ícones
- **Estilos Scoped**: Cada componente tem seus estilos específicos
- **Estilos Globais**: Em `App.vue` para reset e scroll suave

## 🔐 Funcionalidades Admin

Para habilitar o modo admin, altere no `App.vue`:

```typescript
const isAdmin = ref(true) // Mudar de false para true
```

No modo admin:
- Botões de adicionar/editar/excluir ficam visíveis
- Modo de edição inline para atividades e mídia
- Confirmação antes de excluir

## 🖼️ Assets

As imagens devem estar em `public/`:
- `/logo.png` - Logo do Made in CE
- `/initial.jpg` - Imagem de fundo do Hero

Atualmente há placeholders SVG que devem ser substituídos.

## 🚀 Próximas Implementações

1. **Autenticação**: Sistema de login para modo admin
2. **Backend**: Integração com Supabase ou Firebase
3. **Animações**: Transições entre componentes
4. **Menu Mobile**: Hamburger menu para dispositivos móveis
5. **Loading States**: Indicadores de carregamento
6. **Error Handling**: Tratamento de erros de API
7. **Toast Notifications**: Feedback visual de ações
8. **Image Upload**: Upload de imagens para atividades
9. **Search/Filter**: Busca e filtros para atividades
10. **Pagination**: Paginação para listas longas

## 📱 Responsividade

Todos os componentes utilizam classes Tailwind responsivas:
- `md:` - Desktop (768px+)
- `lg:` - Large desktop (1024px+)
- Grid adapta colunas automaticamente
- Navegação preparada para versão mobile (a implementar)

## 🧪 TypeScript

Tipos definidos em `src/types.ts`:
- `Activity`
- `Stat`
- `MediaItem`
- `EditMode`
- `AboutData`
- `ContactData`

Todos os componentes usam `<script setup lang="ts">` com tipagem forte.
