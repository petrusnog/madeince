<template>
  <section class="initial relative text-white overflow-hidden">
    <!-- Background Image -->
    <div class="absolute inset-0 z-0">
      <img src="/initial.jpg" alt="Background Made in CE" class="w-full h-full object-cover">
      <!-- Overlay gradient para manter legibilidade -->
      <div class="absolute inset-0 bg-gradient-to-br from-black/70 via-black/60 to-black/70"></div>
    </div>

    <!-- Content -->
    <div class="container mx-auto px-4 relative z-10 flex flex-col items-center text-center">
      <h1>{{ title }}</h1>
    </div>
  </section>
</template>

<script setup lang="ts">
defineProps<{
  title: string
}>()
</script>

<style scoped>
.initial {
  height: 88vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

h1 {
  margin-top: -75px;
  width: 60%;
  font-size: 80px;
  font-family: "Bebas Neue", sans-serif;
  font-weight: 400;
  font-style: normal;
  letter-spacing: 5px;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
  line-height: 1.2;
}

@media (max-width: 768px) {
  h1 {
    font-size: 48px;
    width: 90%;
  }
}
</style>
