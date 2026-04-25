<template>
    <div class="p-5" v-cloak>
        <h1 :class="{ 'text-success': isActive }" v-text="judul"></h1>

        <div class="mb-3">
            <input v-model="inputBaru" @keyup.enter="tambah" placeholder="Tambah list...">
            <button @click="tambah">Tambah</button>
        </div>

        <p v-if="items.length === 0">List benar-benar kosong.</p>
        <p v-else-if="items.length > 5">List sudah penuh!</p>
        <div v-else>
            <ul>
                v
                <li v-for="(item, i) in items" :key="i" v-memo="[item === itemTerpilih]" @click="itemTerpilih = item"
                    :class="{ 'bold': item === itemTerpilih }">
                    {{ i + 1 }}. {{ item }}
                </li>
            </ul>
        </div>

        <button @click="showDetail = !showDetail">Toggle Fitur Tambahan</button>

        <div v-show="showDetail" class="mt-3">
            <p v-html="htmlInfo"></p>

            <p v-pre>Sintaks asli Vue: {{ ini_tidak_diproses }}</p>

            <p v-once>Waktu Login: {{ jam }} (Tidak akan berubah)</p>

            <KomponenAnak>
                <template #header>
                    <b>Ini dikirim via v-slot:header</b>
                </template>
                <template #default>
                    Ini isi slot default.
                </template>
            </KomponenAnak>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'

const KomponenAnak = {
    template: `
    <div class="border p-2 mt-2">
      <slot name="header"></slot>
      <hr>
      <slot></slot>
    </div>
  `
}

const judul = ref('Vue Ultimate Directives')
const isActive = ref(true)
const inputBaru = ref('')
const items = ref(['Belajar Vue', 'Kuasai Direktif'])
const itemTerpilih = ref('')
const showDetail = ref(false)
const htmlInfo = 'Status: <span style="color:green">Sempurna</span>'
const jam = new Date().toLocaleTimeString()

const tambah = () => {
    if (inputBaru.value) {
        items.value.push(inputBaru.value)
        inputBaru.value = ''
    }
}
</script>

<style>
/* 15. v-cloak (Mencegah kedipan template mentah) */
[v-cloak] {
    display: none;
}
</style>

<!--Direktif,Singkatan,Peran Utama
v-bind,:,"Menempelkan data ke atribut HTML (class, id, src)."
v-on,@,"Menangani kejadian (click, enter, submit)."
v-model,-,Sinkronisasi data antara Input dan Script.
v-if/else,-,Menambah/menghapus elemen dari struktur halaman.
v-show,-,Menampilkan/menyembunyikan elemen (hanya secara visual).
v-for,-,Membuat daftar berulang dari data array.
v-slot,#,Mengirim konten masuk ke dalam komponen anak.
v-once/pre,-,Optimasi agar Vue tidak bekerja terlalu keras (skip/render sekali).
v-memo,-,Mengunci elemen agar tidak di-render ulang kecuali data penting berubah.
v-bind,:,"Menempelkan data ke atribut HTML (class, id, src)."
v-on,@,"Menangani kejadian (click, enter, submit)."
v-model,-,Sinkronisasi data antara Input dan Script.
v-if/else,-,Menambah/menghapus elemen dari struktur halaman.
v-show,-,Menampilkan/menyembunyikan elemen (hanya secara visual).
v-for,-,Membuat daftar berulang dari data array.
v-slot,#,Mengirim konten masuk ke dalam komponen anak.
v-once/pre,-,Optimasi agar Vue tidak bekerja terlalu keras (skip/render sekali).
v-memo,-,Mengunci elemen agar tidak di-render ulang kecuali data penting berubah. -->