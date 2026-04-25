<template>
    <div class="card">
        <h2 ref="judul">Judul Komponen</h2>
        <p>Data: {{ $data.pesan }}</p>
        <p>Props: {{ $props.title }}</p>

        <slot></slot>

        <button @click="cekAkses">Cek Instance</button>
    </div>
</template>

<script>
export default {
    props: ['title'],
    data() {
        return {
            pesan: 'Halo'
        }
    },
    methods: {
        cekAkses() {
            // 1. Mengakses elemen HTML lewat $refs
            this.$refs.judul.style.color = 'red';

            // 2. Mengirim data ke parent lewat $emit
            this.$emit('tombol-diklik', 'Data dari Anak');

            // 3. Menggunakan $nextTick
            this.pesan = 'Berubah!';
            this.$nextTick(() => {
                console.log('DOM sudah diupdate dengan pesan baru');
            });

            // 4. Melihat root
            console.log('Akses root:', this.$root);
        }
    },
    mounted() {
        // 5. Membuat watcher manual
        const stop = this.$watch('pesan', (baru) => {
            console.log('Watcher manual mendeteksi:', baru);
        });

        // stop(); // panggil ini jika ingin berhenti memantau
    }
}
</script>