<template>
  <section id="sobre" class="py-20 bg-white">
    <div class="container mx-auto px-4 max-w-4xl">
      <h2 class="text-4xl font-bold text-gray-800 mb-8 text-center">Sobre o Projeto</h2>
      <div class="prose prose-lg max-w-none text-gray-700 leading-relaxed">
        <p v-for="(paragraph, index) in paragraphs" :key="index" class="mb-6">
          {{ paragraph }}
        </p>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps<{
  description: string
}>()

const paragraphs = computed(() => {
  return props.description.split('\n\n').filter(p => p.trim())
})
</script>

<style scoped>
.prose {
  font-size: 1.125rem;
  line-height: 1.75;
}

p {
  text-align: justify;
}

h2 {
  font-family: "Bebas Neue", sans-serif;
  font-weight: 400;
  font-style: normal;
  letter-spacing: 5px;
}
</style>
