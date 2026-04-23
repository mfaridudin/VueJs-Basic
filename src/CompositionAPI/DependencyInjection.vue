<script setup>
import { provide } from 'vue'
import ChildComponent from '@/components/Child.vue'

// Memberikan data dengan kunci 'message' bisa dikirim kemanapun dan ditamgkap denagan inject
provide('message', 'Halo dari Kakek! 👋')
</script>

<template>
  <div style="padding: 20px; border: 2px solid black;">
    <h1>Induk (App)</h1>
    <ChildComponent />
  </div>
</template>