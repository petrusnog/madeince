<template>
  <section id="midia" class="py-20 bg-white">
    <div class="container mx-auto px-4 max-w-6xl">
      <div class="flex justify-between items-center mb-12">
        <h2 class="text-4xl font-bold text-gray-800">Made in CE na Mídia</h2>
        <button
          v-if="isAdmin"
          @click="$emit('add-media')"
          class="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition flex items-center space-x-2"
        >
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4" />
          </svg>
          <span>Nova Matéria</span>
        </button>
      </div>

      <div class="space-y-6">
        <div
          v-for="item in media"
          :key="item.id"
          class="bg-gray-50 rounded-xl p-6 hover:bg-gray-100 transition"
        >
          <!-- Edit Mode -->
          <div v-if="editMode?.type === 'media' && editMode?.id === item.id" class="space-y-4">
            <input
              v-model="formData.source"
              class="w-full px-4 py-2 border rounded-lg"
              placeholder="Fonte"
            />
            <input
              v-model="formData.title"
              class="w-full px-4 py-2 border rounded-lg"
              placeholder="Título"
            />
            <input
              v-model="formData.link"
              class="w-full px-4 py-2 border rounded-lg"
              placeholder="Link"
            />
            <div class="flex space-x-2">
              <button
                @click="$emit('save-media', formData as MediaItem)"
                class="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition"
              >
                Salvar
              </button>
              <button
                @click="$emit('cancel-edit')"
                class="bg-gray-500 text-white px-4 py-2 rounded-lg hover:bg-gray-600 transition"
              >
                Cancelar
              </button>
            </div>
          </div>

          <!-- View Mode -->
          <div v-else class="flex justify-between items-start">
            <div class="flex-1">
              <p class="text-purple-600 font-bold mb-2">{{ item.source }}</p>
              <h3 class="text-xl font-semibold text-gray-800 mb-3">{{ item.title }}</h3>
              <a
                :href="item.link"
                target="_blank"
                class="inline-flex items-center text-purple-600 hover:text-purple-700 font-semibold"
              >
                Ler matéria
                <svg class="w-5 h-5 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                  />
                </svg>
              </a>
            </div>
            <div v-if="isAdmin" class="flex space-x-2 ml-4">
              <button @click="$emit('edit-media', item)" class="text-blue-600 hover:text-blue-700">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                  />
                </svg>
              </button>
              <button @click="$emit('delete-media', item.id)" class="text-red-600 hover:text-red-700">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'

export interface MediaItem {
  id: number
  source: string
  title: string
  link: string
}

export interface EditMode {
  type: string
  id: number
}

const props = defineProps<{
  media: MediaItem[]
  isAdmin?: boolean
  editMode?: EditMode | null
}>()

defineEmits<{
  'add-media': []
  'edit-media': [media: MediaItem]
  'save-media': [formData: MediaItem]
  'delete-media': [id: number]
  'cancel-edit': []
}>()

const formData = ref<Partial<MediaItem>>({})

watch(() => props.editMode, (newEditMode) => {
  if (newEditMode?.type === 'media') {
    const mediaItem = props.media.find(m => m.id === newEditMode.id)
    if (mediaItem) {
      formData.value = { ...mediaItem }
    }
  }
}, { deep: true })
</script>

<style scoped>
h2, h3 {
  font-family: "Bebas Neue", sans-serif;
  font-weight: 400;
  font-style: normal;
  letter-spacing: 5px;
}
</style>
