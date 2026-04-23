<script setup lang="ts">
import { version } from 'vue'
import { ref, nextTick } from 'vue'
import { defineAsyncComponent } from 'vue'

// Komponen ini HANYA akan di-download saat dibutuhkan
const Components = defineAsyncComponent(() =>
  import('./components/WelcomeItem.vue')
)

const judul = ref('Hello APPLICATION')
const judulRef = ref(null)

const gantiJudul = async () => {
  judul.value = 'HELLO WORLD!'
  await nextTick()
} // nextTick digunakan untuk memastikan bahwa DOM sudah diperbarui sebelum kita mencoba mengaksesnya

console.log(`Vue version: ${version}`)
</script>

<template>
  <div>
    <h2 ref="judulRef">{{ judul }}</h2>
    <button @click="gantiJudul">Ganti Judul</button>
  </div>


  <RouterLink to="/application/setup">Setup()</RouterLink>
  <RouterLink to="/application/ReactivityCore">Reactivity Core</RouterLink>
  <RouterLink to="/application/ReactivityUtilities">Reactivity Utilities</RouterLink>
  <RouterLink to="/application/ReactivityAdvanced">Reactivity Advanced</RouterLink>
  <RouterLink to="/application/LifecycleHooks">Lifecycle Hooks</RouterLink>
    <RouterLink to="/application/DependencyInjection">Dependency Injection</RouterLink>
  <router-view />
</template>