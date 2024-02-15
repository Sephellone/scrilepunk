<template>
  <header class="app__header">
    <BaseHeader />
  </header>
  <main class="app__main">
    <RouterView />
  </main>

  <footer class="app__footer">
    <BaseFooter />
  </footer>
</template>

<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import BaseHeader from "@/components/BaseHeader.vue";
import BaseFooter from "@/components/BaseFooter.vue";
</script>

<style scoped>
.app__main {
  width: 100%;
  flex-grow: 1;
  padding-bottom: 10px;
}
</style>
