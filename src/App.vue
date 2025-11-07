<script setup lang="ts">
import { ref } from 'vue'
import Header from './components/Header.vue'
import Hero from './components/Hero.vue'
import About from './components/About.vue'
import Activities from './components/Activities.vue'
import type { Activity } from './components/Activities.vue'
import Stats from './components/Stats.vue'
import type { Stat } from './components/Stats.vue'
import Media from './components/Media.vue'
import type { MediaItem } from './components/Media.vue'
import Contact from './components/Contact.vue'
import Footer from './components/Footer.vue'

// Estado da aplicação
const isAdmin = ref(false)
const editMode = ref<{ type: string; id: number } | null>(null)

// Dados do projeto
const aboutData = {
  title: "Transformando a cena da música autoral cearense desde 2023.",
  description: "Nascido em 2023, o Made in CE surgiu como uma resposta à necessidade de palcos e visibilidade para a efervescente cena autoral de Fortaleza. Criado como um movimento para promover e valorizar os talentos, o coletivo se consolidou como uma plataforma vital para a descoberta e circulação da música local.\n\nO sucesso do Festival Made in CE inspirou o coletivo a criar ações contínuas, garantindo que a cena se mantenha aquecida durante todo o ano. Assim, a iniciativa se expandiu, dando origem às Made in CE Sessions, uma residência artística semanal que se tornou uma vitrine permanente para novos talentos, e ao Made in CE Podcast.\n\nO coletivo opera em um modelo de economia solidária, onde a receita simbólica de suas ações contínuas é 100% reinvestida para viabilizar as grandes ações gratuitas."
}

const activities = ref<Activity[]>([
  {
    id: 1,
    number: "01",
    title: "Festival Made in CE - 1ª Edição | 2023",
    date: "16 de julho de 2023",
    location: "Vibe 085, Iracema",
    description: "Primeira edição do Festival Made in CE com 07 artistas autorais de Fortaleza e região metropolitana.",
    link: "https://www.instagram.com/festivalmadeince"
  },
  {
    id: 2,
    number: "02",
    title: "Dropz - Festival Made in CE | 2023",
    date: "Outubro de 2023",
    location: "Teatro B. de Paiva",
    description: "Primeira edição do projeto Dropz com entrada franca e apoio do Instituto Dragão do Mar.",
    link: "https://www.instagram.com/festivalmadeince"
  },
  {
    id: 3,
    number: "03",
    title: "Festival Made in CE - 2ª Edição | 2023",
    date: "05 de novembro de 2023",
    location: "Vibe 085, Iracema",
    description: "Segunda edição com 09 artistas autorais de Fortaleza.",
    link: "https://www.instagram.com/festivalmadeince"
  }
])

const stats: Stat[] = [
  { label: "Anos de Atuação", value: "+2" },
  { label: "Festivais Realizados", value: "03" },
  { label: "Episódios de Podcast", value: "53" },
  { label: "Artistas Divulgados", value: "+100" },
  { label: "Pessoas Alcançadas", value: "+3.000" }
]

const media = ref<MediaItem[]>([
  {
    id: 1,
    source: "Diário do Nordeste",
    title: "Quer conhecer novos artistas do rock à MPB? Festival Made in CE celebra música autoral em Fortaleza",
    link: "#"
  },
  {
    id: 2,
    source: "Diário do Nordeste",
    title: "Fortaleza só tem cover? Eventos focados na música autoral cearense buscam mostrar o contrário",
    link: "#"
  }
])

const contactData = {
  instagram: "@festivalmadeince",
  youtube: "@FestivalMadeinCE",
  spotify: "Podcast Made in CE"
}

// Funções para gerenciar atividades
const addActivity = () => {
  const newActivity: Activity = {
    id: Date.now(),
    number: String(activities.value.length + 1).padStart(2, '0'),
    title: "Nova Atividade",
    date: "",
    location: "",
    description: "",
    link: ""
  }
  activities.value.push(newActivity)
  editActivity(newActivity)
}

const editActivity = (activity: Activity) => {
  editMode.value = { type: 'activity', id: activity.id }
}

const saveActivity = (formData: Activity) => {
  const index = activities.value.findIndex(a => a.id === formData.id)
  if (index !== -1) {
    activities.value[index] = { ...formData }
  }
  cancelEdit()
}

const deleteActivity = (id: number) => {
  if (confirm('Tem certeza que deseja excluir?')) {
    activities.value = activities.value.filter(a => a.id !== id)
  }
}

// Funções para gerenciar mídia
const addMedia = () => {
  const newMediaItem: MediaItem = {
    id: Date.now(),
    source: "",
    title: "",
    link: ""
  }
  media.value.push(newMediaItem)
  editMedia(newMediaItem)
}

const editMedia = (mediaItem: MediaItem) => {
  editMode.value = { type: 'media', id: mediaItem.id }
}

const saveMedia = (formData: MediaItem) => {
  const index = media.value.findIndex(m => m.id === formData.id)
  if (index !== -1) {
    media.value[index] = { ...formData }
  }
  cancelEdit()
}

const deleteMedia = (id: number) => {
  if (confirm('Tem certeza que deseja excluir?')) {
    media.value = media.value.filter(m => m.id !== id)
  }
}

const cancelEdit = () => {
  editMode.value = null
}
</script>

<template>
  <div id="app">
    <Header />
    
    <Hero :title="aboutData.title" />
    
    <About :description="aboutData.description" />
    
    <Activities
      :activities="activities"
      :is-admin="isAdmin"
      :edit-mode="editMode"
      @add-activity="addActivity"
      @edit-activity="editActivity"
      @save-activity="saveActivity"
      @delete-activity="deleteActivity"
      @cancel-edit="cancelEdit"
    />
    
    <Stats :stats="stats" />
    
    <Media
      :media="media"
      :is-admin="isAdmin"
      :edit-mode="editMode"
      @add-media="addMedia"
      @edit-media="editMedia"
      @save-media="saveMedia"
      @delete-media="deleteMedia"
      @cancel-edit="cancelEdit"
    />
    
    <Contact
      :instagram="contactData.instagram"
      :youtube="contactData.youtube"
      :spotify="contactData.spotify"
    />
    
    <Footer />
  </div>
</template>

<style>
/* Global styles */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
}

body {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
  line-height: 1.6;
}

</style>
