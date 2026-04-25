<template>
    <div class="box">
        <h3>Halo, saya Custom Element!</h3>
        <p>Lebar elemen induk saya adalah: {{ lebar }}px</p>
        <button @click="cekLebar">Update Lebar</button>
    </div>
</template>

<script setup>
import { ref, onMounted, useHost, useShadowRoot } from 'vue'

const lebar = ref(0)

// 1. Menggunakan useHost untuk memegang elemen luar (<pengukur-lebar>)
const host = useHost()

// 2. Menggunakan useShadowRoot untuk melihat isi di dalam "dinding pelindung"
const shadow = useShadowRoot()

const cekLebar = () => {
    // Kita mengambil lebar fisik dari elemen induk (host)
    if (host) {
        lebar.value = host.offsetWidth
    }
}

onMounted(() => {
    cekLebar()
    console.log('Akses Shadow Root:', shadow)
})
</script>

<style scoped>
/* CSS ini tidak akan bocor keluar karena ada di Shadow DOM */
.box {
    border: 2px solid #42b983;
    padding: 15px;
    border-radius: 8px;
    background: #f9f9f9;
}
</style>