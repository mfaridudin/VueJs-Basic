<template>
    <div>
        <h2>{{ pesanDunia }}</h2>
        <p>Data dari Inject: {{ tema }}</p> <button @click="halo">Klik Mixin</button>
    </div>
</template>

<script>
import { ref } from 'vue'

// Contoh Mixin sederhana
const myMixin = {
    methods: {
        halo() {
            console.log('Halo dari Mixin!')
        }
    }
}

export default {
    // 1. Mixins: Mengambil logika dari luar
    mixins: [myMixin],
    // extends: hampir sama mixins, tapi hanya untuk satu object

    // 2. Provide: Menyediakan data untuk keturunannya
    provide() {
        return {
            user: 'Budi'
        }
    },

    // 3. Inject: Mengambil data dari leluhurnya
    // provide() { cara providenya
    //     return {
    //         tema: 'dark-mode',
    //         setelanUser: {
    //             bahasa: 'id',
    //             notifikasi: true
    //         }
    //     }
    // },
    inject: ['tema'],

    // 4. Setup: Menggunakan Composition API
    setup(props, context) {
        const pesanDunia = ref('Halo dari Setup!')

        // Apa pun yang di-return bisa diakses di template
        return {
            pesanDunia
        }
    }
}
</script>