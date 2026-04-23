<script setup>
import { ref, computed, reactive, readonly, watchEffect, watch, onWatcherCleanup } from 'vue';

// ref
const count = ref(0)  // buat reactive data dengan ref(), nilai awal 0

// watchEffect
watchEffect(() => console.log('watch effect', count.value)) //akan berubah jika variable yang didalamnya berubah

// watch lebih spesifif dan selectif dari watchEffect
watch(count, (newValue, oldValue) => {
    console.log(`Berubah! Dari ${oldValue} menjadi ${newValue}`)

    const timer = setTimeout(() => {
        console.log('Aksi dijalankan setelah 1 detik tenang (debounce)')
    }, 1000)

    onWatcherCleanup(() => {
        clearTimeout(timer) // Hapus timer sebelumnya jika count berubah lagi dengan cepat
        console.log('Timer dibersihkan karena ada perubahan baru')
    })
})

console.log('nilai awal', count.value)  // output: 0  → nilai awal sebelum diubah

count.value = 4  // ubah nilai
console.log('nilai diubah', count.value)  // output: 4  → nilai setelah diubah


// computed() otomatis update saat count berubah / bergantung pada sumber datanya, jika berubah ini juga ikut berubah
// const plusOne = computed(() => count.value + 1) // readonly

// computed writable 
const plusOne = computed({
    // dibaca → kembalikan count + 1
    get: () => count.value + 1,

    // diubah → set sumber datanya (count)
    set: (val) => {
        count.value = val - 1
    }
})

console.log('plusOne dipanggil', plusOne.value) // 5  → get dipanggil (4 + 1)

plusOne.value = 10         // set dipanggil → count = 10 - 1 = 9
console.log('ubah dari computed', count.value)   // 9
console.log('get computed dipanggil', plusOne.value) // 10 → get dipanggil lagi (9 + 1)

// reactive sama seprti ref tapi khusus objec atau array
const user = reactive({
    name: 'Farid',
    alamat: 'Suruh'
})

// reactive array
const todos = reactive(['belajar', 'tanggung jawab'])

console.log(todos)
console.log(user.name)

// readonly
const copy = readonly(todos)
// copy.todos.push('Tidur') akan memunculkan warning karena readonly gak bisa di ubah

console.log(copy)
</script>

<template>
    <h2>Cek console</h2>
    <p>Count: {{ count }}</p>
    <p>Plus One: {{ plusOne }}</p>

    <div class="container">
        <div>
            <!-- untuk ubah count  -->
            <button @click="count++">Tambah Count</button>
            <button @click="count--">Kurang Count</button>
        </div>
        <div>
            <!-- ubah lewat setter computed → count ikut berubah -->
            <button @click="plusOne++">Tambah lewat plusOne</button>
            <button @click="plusOne--">Kurang lewat plusOne</button>
        </div>
    </div>
</template>

<style>
.container {
    display: flex;
    flex-direction: column;
    gap: 10px;
}
</style>