<script setup>
import { ref } from 'vue';

const message = ref('Hello World!')

function reverseMessage() {
    message.value = message.value.split('').reverse().join('')
}

function notify(){
    alert('Tombol di klik')
}
</script>

<template>
<h1 style="text-align: center;">HANDLE USER INPUT</h1>

   <h2>{{ message }}</h2>

   <button @click="reverseMessage">Reverse Message</button>

   <button @click="message += '!'">appen!</button>

   <button @click="notify">Notify</button>
</template>