<script setup>
import { ref } from 'vue'
import ChildComponent from '../components/InputComponent.vue' // Impor langsung pakai

// 1. defineProps (Props)
defineProps({
    status: String
})

// 2. defineEmits (Events)
const emit = defineEmits(['hapus'])

// 3. defineModel (v-model dua arah)
const nama = defineModel()

// 4. Reactive State & Logic
const judul = ref('Halo Setup!')
const logHapus = () => {
    console.log('Item dihapus')
    emit('hapus')
}

// 5. defineExpose (Membuka akses ke parent)
defineExpose({
    judul // Parent bisa akses 'judul' lewat ref
})
</script>

<template>
    <div>
        <h1>{{ judul }}</h1>
        <p>Status: {{ status }}</p>

        <input v-model="nama" />

        <ChildComponent @hapus="logHapus" />
    </div>
</template>
