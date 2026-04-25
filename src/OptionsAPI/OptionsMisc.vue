<template>
    <div>
        <p>Nama Komponen: MiscExample</p>

        <TombolKustom />

        <input v-fokus placeholder="Kotak ini otomatis fokus" />

        <div v-bind="$attrs">
            Konten Utama
        </div>
    </div>
</template>

<script>
// 1. Import komponen lain
const TombolKustom = {
    template: '<button>Klik Saya</button>'
}

export default {
    // 2. Memberikan nama eksplisit
    name: 'MiscExample',

    // 3. Mematikan fitur atribut otomatis (fallthrough)
    inheritAttrs: false,

    // 4. Registrasi komponen lokal
    components: {
        TombolKustom
    },

    // 5. Registrasi direktif lokal
    directives: {
        fokus: {
            // Dipanggil saat elemen dimasukkan ke DOM
            mounted(el) {
                el.focus()
            }
        }
    }
}
</script>
