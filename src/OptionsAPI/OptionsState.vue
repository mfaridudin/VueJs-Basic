<template>
    <div class="card">
        <h2>{{ title }}</h2>

        <div class="content">
            <p>Angka saat ini: <strong>{{ counter }}</strong></p>

            <p>Status: <span>{{ statusAngka }}</span></p>

            <button @click="tambahAngka">Tambah +1</button>
            <button @click="resetAngka">Reset</button>
        </div>

        <p v-if="pesanLog" class="log">{{ pesanLog }}</p>
    </div>
</template>

<script>
export default {
    // 1. PROPS: Menerima data dari induk
    props: {
        title: {
            type: String,
            default: 'Penghitung Standar'
        }
    },

    // 2. EMITS: Deklarasi event yang dikirim ke induk
    emits: ['update-total'],

    // 3. DATA: State internal komponen
    data() {
        return {
            counter: 0,
            pesanLog: ''
        }
    },

    // 4. COMPUTED: Logika yang bergantung pada data lain (cached)
    computed: {
        statusAngka() {
            return this.counter % 2 === 0 ? 'Genap' : 'Ganjil';
        }
    },

    // 5. METHODS: Fungsi untuk aksi atau logika
    methods: {
        tambahAngka() {
            this.counter++;
            // Memicu emit ke parent
            this.$emit('update-total', this.counter);
        },
        resetAngka() {
            this.counter = 0;
        }
    },

    // 6. WATCH: Memantau perubahan data untuk side-effect
    watch: {
        counter(newVal, oldVal) {
            this.pesanLog = `Berubah dari ${oldVal} ke ${newVal}`;

            // Menghilangkan pesan log setelah 2 detik
            setTimeout(() => {
                this.pesanLog = '';
            }, 2000);
        }
    },

    // 7. EXPOSE: Membatasi apa yang bisa diakses oleh ref dari luar
    expose: ['resetAngka']
}
</script>