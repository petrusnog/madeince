<template>
  <header
    class="bg-gradient-to-r from-purple-900 via-purple-800 to-pink-800 text-white py-4 sticky top-0 z-40 shadow-lg transition-all duration-300"
    :class="{ 'scrolled': isScrolled }"
  >
    <div class="container mx-auto px-4">
      <div class="flex justify-between">
        <!-- Logo -->
        <div class="flex items-center space-x-3">
          <img class="logo" src="/logo.png" alt="Logomarca Made IN CE">
        </div>

        <!-- Desktop Navigation -->
        <nav class="hidden md:flex items-center space-x-8">
          <a href="#sobre" class="hover:text-pink-300 transition font-medium flex items-center space-x-2">
            <i class="fas fa-info-circle"></i>
            <span>Sobre</span>
          </a>
          <a href="#atividades" class="hover:text-pink-300 transition font-medium flex items-center space-x-2">
            <i class="fas fa-calendar-alt"></i>
            <span>Atividades</span>
          </a>
          <a href="#impacto" class="hover:text-pink-300 transition font-medium flex items-center space-x-2">
            <i class="fas fa-chart-line"></i>
            <span>Impacto</span>
          </a>
          <a href="#midia" class="hover:text-pink-300 transition font-medium flex items-center space-x-2">
            <i class="fas fa-newspaper"></i>
            <span>Mídia</span>
          </a>
          <a href="#contato" class="hover:text-pink-300 transition font-medium flex items-center space-x-2">
            <i class="fas fa-envelope"></i>
            <span>Contato</span>
          </a>
        </nav>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

const isScrolled = ref(false)

const handleScroll = () => {
  const scrollPosition = window.scrollY
  
  if (!isScrolled.value && scrollPosition > 120) {
    isScrolled.value = true
  } else if (isScrolled.value && scrollPosition < 80) {
    isScrolled.value = false
  }
}

let scrollTimeout: number

const debouncedScroll = () => {
  clearTimeout(scrollTimeout)
  scrollTimeout = setTimeout(handleScroll, 10)
}

onMounted(() => {
  window.addEventListener('scroll', debouncedScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', debouncedScroll)
  clearTimeout(scrollTimeout)
})
</script>

<style scoped>
header {
  transition: padding 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
}

nav {
  margin-right: 50px;
}

nav a {
  letter-spacing: 3px;
  font-size: 20px;
  color: #f8c419;
  transition: font-size 0.3s ease-in-out;
  font-family: "Bebas Neue", sans-serif;
  font-weight: 400;
  font-style: normal;
  letter-spacing: 5px;
}

header.scrolled nav a {
  font-size: 16px;
  letter-spacing: 2px;
}

.logo {
  width: 150px;
  transition: width 0.3s ease-in-out;
  object-fit: contain;
}

header.scrolled .logo {
  width: 100px;
}
</style>
