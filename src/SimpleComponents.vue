<script setup>
import { ref } from 'vue';
import TodoItems from './components/TodoItems.vue';

const text = ref([
  { id: 1, text: 'Belajar Vue.js' },
  { id: 2, text: 'Dasar Vue.js' },
  { id: 3, text: 'Vue.js' }
]);
</script>

<template>
  <div>
    <h1>My Todo List</h1>
    <TodoItems v-for="item in text" :key="item.id" :todo="item" />
  </div>
</template>