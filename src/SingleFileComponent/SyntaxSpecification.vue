<!-- SFC adalah format file standar Vue (dengan ekstensi .vue) 
 yang memungkinkan kita menulis HTML, JavaScript/TypeScript, 
 dan CSS dalam satu file yang sama. -->

<script setup>
import { ref } from 'vue'

const judul = ref('Halo SFC!')
const count = ref(0)

const tambah = () => {
    count.value++
}
</script>

<template>
    <div class="card">
        <h1>{{ judul }}</h1>
        <p>Jumlah: {{ count }}</p>
        <button @click="tambah">Tambah</button>
    </div>
</template>

<style scoped>
.card {
    border: 1px solid #ddd;
    padding: 20px;
    border-radius: 10px;
    text-align: center;
}

h1 {
    color: #42b983;
}
</style>