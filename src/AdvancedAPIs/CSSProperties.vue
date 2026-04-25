<script setup lang="ts">
import { type CSSProperties } from 'vue'

// Kita izinkan variabel CSS kustom yang diawali dengan "--"
const myStyle: CSSProperties = {
  '--main-color': '#42b983',
  fontSize: '16px'
}
</script>

<template>
  <div :style="myStyle">Teks dengan warna dinamis</div>
</template>
