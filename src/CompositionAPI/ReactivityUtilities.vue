<!-- ini adalah kumpulan pembantu untuk Reactivity Core -->

<script setup>
import { isProxy, isReactive, isReadonly, isRef, reactive, ref, toRef, toRefs, toValue, unref } from 'vue';

const count = ref(0)
const n = ref(10)
const m = 20

// isRef untuk mengecek apakah bernilai ref
if (isRef(count)) {
    console.log('Ini objek ref');
}

// unref mengembalika nilai aslinya jika tidak ref
console.log('Ini ref', unref(n))
console.log('ini bukan objeck ref', unref(m))

// toValue mirip dengan unRef tapi bisa mengeksesusi getter function
const getter = () => 20 //getter function

console.log(toValue(1))
console.log(toValue(getter))

// toRef() & toRefs() untuk mengonversi object reactive menjadi ref biasa
const user = reactive({
    name: 'Farid',
    age: 17
})

const { name, age } = toRefs(user) //toRefs untuk banyak
console.log(name.value)
console.log(age.value)

const nama = toRef(user, 'name') // toRef untuk satu object  
console.log(nama.value)

// isProxy Memeriksa apakah suatu objek merupakan proxy yang dibuat oleh reactive(), readonly(),
//  shallowReactive()atau shallowReadonly().
console.log(isProxy(user)) //true karana reactive

// isReaktif() untuk cek apakah suatu objek adalah proxy yang dibuat oleh reactive()atau shallowReactive().
console.log(isReactive(count)) //false karena bukan reactive

// isReadonly() cek apakah object hanya bisa dibaca
console.log(isReadonly(user))  // false karena bukan readonly

</script>

<template>
    <h1>Cek Console</h1>
</template>