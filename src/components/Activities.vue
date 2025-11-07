<template>
  <section id="atividades" class="py-20 bg-gray-50">
    <div class="container mx-auto px-4 max-w-6xl">
      <div class="flex justify-between items-center mb-12">
        <h2 class="text-4xl font-bold text-gray-800">Atividades</h2>
        <button
          v-if="isAdmin"
          @click="$emit('add-activity')"
          class="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition flex items-center space-x-2"
        >
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4" />
          </svg>
          <span>Nova Atividade</span>
        </button>
      </div>

      <div class="space-y-8">
        <div
          v-for="activity in activities"
          :key="activity.id"
          class="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition"
        >
          <!-- Edit Mode -->
          <div v-if="editMode?.type === 'activity' && editMode?.id === activity.id" class="p-6 space-y-4">
            <input
              v-model="formData.title"
              class="w-full px-4 py-2 border rounded-lg"
              placeholder="Título"
            />
            <input
              v-model="formData.date"
              class="w-full px-4 py-2 border rounded-lg"
              placeholder="Data"
            />
            <input
              v-model="formData.location"
              class="w-full px-4 py-2 border rounded-lg"
              placeholder="Local"
            />
            <textarea
              v-model="formData.description"
              class="w-full px-4 py-2 border rounded-lg"
              rows="3"
              placeholder="Descrição"
            ></textarea>
            <input
              v-model="formData.link"
              class="w-full px-4 py-2 border rounded-lg"
              placeholder="Link"
            />
            <div class="flex space-x-2">
              <button
                @click="$emit('save-activity', formData as Activity)"
                class="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition flex items-center space-x-2"
              >
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                </svg>
                <span>Salvar</span>
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
          <div v-else class="p-6">
            <div class="flex justify-between items-start mb-4">
              <div class="flex-1">
                <div class="flex items-center space-x-4 mb-2">
                  <span class="text-4xl font-bold text-purple-600">{{ activity.number }}</span>
                  <div>
                    <h3 class="text-2xl font-bold text-gray-800">{{ activity.title }}</h3>
                    <p class="text-purple-600 font-semibold">{{ activity.date }}</p>
                  </div>
                </div>
                <p class="text-gray-600 mb-2">📍 {{ activity.location }}</p>
                <p class="text-gray-700 leading-relaxed mb-4">{{ activity.description }}</p>
                <a
                  v-if="activity.link"
                  :href="activity.link"
                  target="_blank"
                  class="inline-flex items-center text-purple-600 hover:text-purple-700 font-semibold"
                >
                  Ver mais
                  <svg class="w-5 h-5 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
              <div v-if="isAdmin" class="flex space-x-2 ml-4">
                <button @click="$emit('edit-activity', activity)" class="text-blue-600 hover:text-blue-700">
                  <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                    />
                  </svg>
                </button>
                <button @click="$emit('delete-activity', activity.id)" class="text-red-600 hover:text-red-700">
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
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'

export interface Activity {
  id: number
  number: string
  title: string
  date: string
  location: string
  description: string
  link?: string
}

export interface EditMode {
  type: string
  id: number
}

const props = defineProps<{
  activities: Activity[]
  isAdmin?: boolean
  editMode?: EditMode | null
}>()

defineEmits<{
  'add-activity': []
  'edit-activity': [activity: Activity]
  'save-activity': [formData: Activity]
  'delete-activity': [id: number]
  'cancel-edit': []
}>()

const formData = ref<Partial<Activity>>({})

watch(() => props.editMode, (newEditMode) => {
  if (newEditMode?.type === 'activity') {
    const activity = props.activities.find(a => a.id === newEditMode.id)
    if (activity) {
      formData.value = { ...activity }
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
