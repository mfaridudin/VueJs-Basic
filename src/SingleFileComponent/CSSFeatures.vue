<script setup>
import { ref } from 'vue'

const warnaBaru = ref('red')
</script>

<template>
    <div class="container">
        <h1 class="title">Halo CSS Vue!</h1>

        <p :class="$style.deskripsi">Ini menggunakan CSS Modules.</p>

        <ChildComponent>
            <span class="konten-slot">Teks ini ada di dalam slot.</span>
        </ChildComponent>

        <button @click="warnaBaru = 'blue'">Ubah Warna ke Biru</button>
    </div>
</template>

<style scoped>
/* 1. Scoped CSS: Hanya berlaku di komponen ini */
.container {
    padding: 20px;
}

/* 2. v-bind in CSS: Menghubungkan variabel JS ke CSS */
.title {
    color: v-bind(warnaBaru);
}

/* 3. Deep Selector: Mengubah elemen di dalam ChildComponent */
:deep(.child-text) {
    font-style: italic;
}

/* 4. Slotted Selector: Mengatur gaya elemen yang masuk ke slot */
:slotted(.konten-slot) {
    text-decoration: underline;
}

/* 5. Global Selector: Berlaku untuk seluruh aplikasi */
:global(.status-bar) {
    background: black;
}
</style>

<style module>
/* 6. CSS Modules: Diakses lewat $style.deskripsi */
.deskripsi {
    font-size: 14px;
    color: gray;
}
</style>