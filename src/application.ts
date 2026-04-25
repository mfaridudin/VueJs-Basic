import { createApp, inject } from 'vue'

import Application from './Application.vue' // mengambil file 
import applicationRouter from './router/aplications' // mengambil file router
import { defineCustomElement } from 'vue'
import PengukurLebar from './components/PengukurLebar.ce.vue'

const app = createApp(Application) // membuat aplikasi 

const ElemenKustom = defineCustomElement(PengukurLebar)

// Mendaftarkan tag <pengukur-lebar> ke browser
customElements.define('pengukur-lebar', ElemenKustom)

app.onUnmount(() => {
    console.log('Aplikasi di matikan 😈')  //pesan saat di unmount
})

// app.component('TombolKeren', MyButton) // membuat komponen dapat dipangil secara global

// membuat custom directive global
// app.directive('focus', {
//   mounted(el) {
//     el.focus()
//   }
// })

app.use(applicationRouter) // menggunakan plugin

// app.provide('message', 'hello') // memberikan data ke semua komponen yang ada di dalam aplikasi

// const result = app.runWithContext(() => {
//     return inject('message')
// }) // Menjalankan fungsi callback dengan aplikasi saat ini sebagai konteks injeksi.

// console.log(result) // melihat hasil inject

// console.log(app.config) // melihat konfigurasi aplikasi

// app.config.errorHandler = (err, vm, info) => {
//   alert("Maaf, terjadi kesalahan teknis. Tim kami sedang memperbaikinya.")
// } // menangani error global

// Mengubah komponen Vue menjadi Custom Element standar


app.mount('#app') // mengirimnya file html

// app.unmount() // untuk menghentikan aplikasi
