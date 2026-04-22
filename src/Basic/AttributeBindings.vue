<script setup>
import { ref } from 'vue';

const pesan = ref('klik ubah warna jadi biru!')
const isRed = ref(true)
const color = ref('green')

function toggleRed(){
  isRed.value = !isRed.value
}

function toggleColor() {
  color.value = color.value === 'green' ? 'blue' : 'green'
  pesan.value = color.value === 'green' ? 'klik ubah warna jadi biru!' : 'klik ubah warna jadi hijau!'
}

</script>

<template>
   
 <p :class="{ 'red' : isRed }" class="hover" @click="toggleRed">klik untuk ubah warna!</p>

 <p :style="{color}" class="hover" @click="toggleColor">{{ pesan }}</p> 

</template>
  
<style>
.red {
  color: red;
}

.hover {
  user-select: none;
}

.hover:hover {
  cursor: pointer;
}
</style>