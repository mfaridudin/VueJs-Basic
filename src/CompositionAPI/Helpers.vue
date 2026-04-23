<script setup>
import { ref } from 'vue'
import MyInput from '@/components/InputComponent.vue'

const namaUser = ref('')
const emailUser = ref('')
</script>

<template>
    <div>
        <h1>Form Pendaftaran</h1>

        <MyInput v-model="namaUser" />

        <MyInput v-model="emailUser" class="border-merah" placeholder="Masukkan Email Anda">
            <template #label>Alamat Email:</template>
        </MyInput>

        <hr>
        <p>Data di Parent: {{ namaUser }} | {{ emailUser }}</p>
    </div>
</template>

<style>
.border-merah {
    border: 2px solid red !important;
}
</style>