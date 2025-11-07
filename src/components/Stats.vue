<template>
  <section id="impacto" class="py-20 bg-gradient-to-r from-purple-900 via-purple-800 to-pink-800 text-white">
    <div class="container mx-auto px-4">
      <h2 class="text-4xl font-bold mb-12 text-center">Resumo de Impacto</h2>
      <div class="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
        <div v-for="stat in stats" :key="stat.label" class="text-center">
          <div class="bg-white bg-opacity-20 rounded-xl p-6 backdrop-blur-sm hover:bg-opacity-30 transition">
            <div class="text-5xl font-bold mb-2">{{ stat.value }}</div>
            <div class="text-lg opacity-90">{{ stat.label }}</div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
export interface Stat {
  label: string
  value: string
}

defineProps<{
  stats: Stat[]
}>()
</script>

<style scoped>
h2 {
  font-family: "Bebas Neue", sans-serif;
  font-weight: 400;
  font-style: normal;
  letter-spacing: 5px;
}
</style>
