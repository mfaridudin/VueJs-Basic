<script setup>
import { ref, onMounted } from 'vue'

const judul = ref('Halo Vue!')
const tipeElemen = ref('button')

// Nama variabel 'myInput' harus sama dengan ref="myInput" di template
const myInput = ref(null)

const users = ref([
    { id: 101, nama: 'Budi' },
    { id: 102, nama: 'Sari' }
])

const gantiJudul = () => {
    judul.value = judul.value === 'Halo Vue!' ? 'Atribut Spesial Vue' : 'Halo Vue!'

    // Menggunakan ref untuk fokus ke input secara manual
    myInput.value.focus()
}

onMounted(() => {
    console.log('Elemen input sudah bisa diakses:', myInput.value)
})
</script>

<template>
    <div class="p-5">
        <!-- key Identitas unik untuk efisiensi update DOM. -->
        <h1 :key="judul">{{ judul }}</h1>

        <div class="mb-3">
            <!-- Referensi untuk memegang elemen DOM/Komponen. -->
            <input ref="myInput" placeholder="Ketik sesuatu...">
            <button @click="gantiJudul">Ganti Judul & Fokus Input</button>
        </div>

        <hr>

        <p>Ubah elemen di bawah secara dinamis:</p>
        <button @click="tipeElemen = 'button'">Mode Tombol</button>
        <button @click="tipeElemen = 'a'">Mode Link</button>

        <div class="mt-3">
            <!-- Menentukan bentuk dari komponen dinamis. -->
            <component :is="tipeElemen" href="#" class="dynamic-el">
                Saya adalah elemen: {{ tipeElemen }}
            </component>
        </div>

        <hr>

        <ul>
            <li v-for="user in users" :key="user.id">
                {{ user.nama }}
            </li>
        </ul>
    </div>
</template>

<style>
.dynamic-el {
    padding: 5px 10px;
    background: #eee;
    text-decoration: none;
    display: inline-block;
    color: black;
    border: 1px solid #ccc;
}

.mt-3 {
    margin-top: 15px;
}

[v-cloak] {
    display: none;
}
</style>