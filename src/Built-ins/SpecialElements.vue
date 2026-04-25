<script setup>
import { ref, markRaw } from 'vue'
import TabA from '../components/InputTab.vue'
import TabB from '../components/InfoTab.vue'

const isActive = ref(true)
const tabAktif = ref(TabA)

// Definisi komponen 'BoxWrapper' secara lokal untuk demo <slot>
const BoxWrapper = {
    template: `
    <div class="box border p-3">
      <header>
        <slot name="judul">Judul Default (jika parent tidak kirim)</slot>
      </header>
      <main>
        <slot></slot>
      </main>
    </div>
  `
}
</script>

<template>
    <div class="p-5">
        <!-- Tag ini <template>digunakan sebagai placeholder ketika kita ingin menggunakan directive bawaan tanpa merender elemen di DOM. -->
        <template v-if="isActive"> 
            <h1>Selamat Datang!</h1>
            <p>Ini adalah demo Special Elements.</p>
        </template>

        <hr>

        <div class="tabs">
            <button @click="tabAktif = TabA">Tampilkan Tab A</button>
            <button @click="tabAktif = TabB">Tampilkan Tab B</button>

            <div class="tab-content border p-3 mt-2">
                <component :is="tabAktif" />
            </div>
        </div>

        <hr>

        <BoxWrapper>
            <template #judul>
                <h2 style="color: blue">Ini Judul dari Parent</h2>
            </template>

            <p>Ini adalah isi kotak yang dikirim melalui slot.</p>
        </BoxWrapper>
    </div>
</template>

<style scoped>
.border {
    border: 1px solid #ccc;
    border-radius: 8px;
}

.p-3 {
    padding: 1rem;
}

.mt-2 {
    margin-top: 0.5rem;
}

button {
    margin-right: 5px;
    cursor: pointer;
}
</style>