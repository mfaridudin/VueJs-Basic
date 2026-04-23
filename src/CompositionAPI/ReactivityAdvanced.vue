<script setup>
import { computed, customRef, effectScope, isReactive, isReadonly, markRaw, reactive, ref, shallowReactive, shallowReadonly, shallowRef, toRaw, triggerRef, watch, watchEffect } from 'vue';

// shallowRef hanya memantau perubahan pada .value (level kulit luar)
const shallow = shallowRef({
    greet: 'Hello, world'
})

//
watchEffect(() => {
    console.log(shallow.value.greet)
})

// langsung berubah karena langsung merubah pada .value
shallow.value = { greet: 'Hello, Guys' }

// gak berubah karena yang diubah bagian dalam gak langsung .value 
shallow.value.greet = 'Hello, universe'

// untuk memaksa perubahan
triggerRef(shallow)

// customRef
function useDebouncedRef(value, delay = 500) {
    let timeout
    return customRef((track, trigger) => {
        return {
            get() {
                track() // Beritahu Vue untuk melacak variabel ini
                return value
            },
            set(newValue) {
                clearTimeout(timeout) // Hapus timer sebelumnya

                // Buat timer baru
                timeout = setTimeout(() => {
                    value = newValue
                    trigger() // Baru panggil trigger setelah 'delay' berakhir
                }, delay)
            }
        }
    })
}

const text = useDebouncedRef('', 1000)

// shallowReactive hanya memantau perubahan pada .value (level kulit luar) di reactive
const state = shallowReactive({
  foo: 1,
  nested: {
    bar: 2
  }
})

// berubah karena baru diawal 
state.foo++

// tetapi tidak mengkonversi objek bersarang
isReactive(state.nested) // false

// tidak reactive karena sudah 2 level dari state
state.nested.bar++

// shallowReadonly hanya membuat readonly pada level pertama saja
const stateReadOnly = shallowReadonly({
  foo: 1,
  nested: {
    bar: 2
  }
})

// Mengubah properti stateReadOnly sendiri akan gagal.
stateReadOnly.foo++ // ini readonly karena masih di awal

// berfungsi untuk object bertingkat
isReadonly(stateReadOnly.nested) // false

// bisa karena sudah tidak readonly karena sudah bertingkat
stateReadOnly.nested.bar++

// toRaw membuat object menjadi mentah atau data awal 
const user = reactive({
    name: 'Farid',
    age: 17
})

// mengambil versi "mentah"
const rawUser = toRaw(user)

// 1. Cek perbandingannya
console.log('Perbandingan user, userRaw',user === rawUser)

rawUser.age = 25 // ini tidak akan berubah karena sudah tidak proxy lagi

// markRaw digunakan untuk mencegah data dibuat reactive oleh vue sejak awal 
const buah = markRaw({
    name: 'jeruk',
    berat: '12kg'
})

const buahReactive = reactive({
    myBuah: buah
})

console.log('reactive: ',isReactive(state.myBuah)); //false karena data sudah dibuat tidak reactive

// effectScope
const counter = ref(2)
const scope = effectScope()

scope.run(() => {
const doubled = computed(() => counter.value * 2)   

  watch(doubled, () => console.log(doubled.value))

  watchEffect(() => console.log('Count: ', doubled.value))
})

// to dispose all effects in the scope
// scope.stop()
</script>


<template>
    <h1>Cek console</h1>
    <input v-model="text" placeholder="Ketik sesuatu..." />
    <p>Data yang tersimpan: {{ text }}</p>
</template>