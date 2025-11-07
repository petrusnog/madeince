<template>
  <section id="sobre" class="py-20 bg-white">
    <div class="container mx-auto px-4 max-w-6xl">
      <div class="flex flex-col md:flex-row gap-8 items-center">
        <!-- Imagem à esquerda -->
        <div class="w-full md:w-1/2 flex-shrink-0">
          <img 
            src="/about-image.jpg" 
            alt="Made in CE" 
            class="w-full h-auto rounded-lg shadow-lg object-cover"
          />
        </div>
        
        <!-- Conteúdo à direita -->
        <div class="w-full md:w-1/2">
          <div class="prose prose-lg max-w-none text-gray-700 leading-relaxed">
            <h2 class="text-4xl font-bold text-gray-800 mb-8">Sobre o Projeto</h2>
            <p v-for="(paragraph, index) in paragraphs" :key="index" class="mb-6">
              {{ paragraph }}
            </p>
          </div>
        </div>
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

img {
  height: 100px;
}
</style>
