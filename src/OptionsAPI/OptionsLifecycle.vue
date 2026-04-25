<!--  siklus hidup komponen vue -->
<script>
export default {
    data() {
        return {
            judul: 'Belajar Lifecycle Vue'
        }
    },
    // Tahap Creation
    beforeCreate() {
        console.log('1. beforeCreate: Data belum siap');
    },
    created() {
        console.log('2. created: Data sudah siap, Judul:', this.judul);
    },
    // Tahap Mounting
    beforeMount() {
        console.log('3. beforeMount: Akan segera dipasang ke DOM');
    },
    mounted() {
        console.log('4. mounted: Komponen sudah muncul di layar');
    },
    // Tahap Updating
    beforeUpdate() {
        console.log('5. beforeUpdate: Data berubah, DOM akan diupdate');
    },
    updated() {
        console.log('6. updated: DOM sudah berhasil diupdate');
    },
    // Tahap Unmounting
    beforeUnmount() {
        console.log('7. beforeUnmount: Bersiap untuk dihapus');
    },
    unmounted() {
        console.log('8. unmounted: Komponen sudah terhapus');
    },

    // Menangkap error dari komponen anak
    errorCaptured(err, instance, info) {
        console.error('Ada error di anak komponen:', err);
        return false; // Jangan teruskan error ke atas
    },

    // Hanya jalan saat dibungkus <KeepAlive>
    activated() {
        console.log('Komponen kembali aktif (masuk dari cache)');
    },

    // Debugging (Hanya di komputer developer)
    renderTriggered({ key, target }) {
        console.log(`Render ulang dipicu oleh perubahan pada properti: ${key}`);
    },

    // Ambil data di sisi server (jika pakai Nuxt/Vue SSR)
    async serverPrefetch() {
        this.count = await fetchInitialCount();
    }
}
</script>

<template>
    <div>
        <h1>{{ judul }}</h1>
        <button @click="judul = 'Judul Baru'">Ubah Judul</button>
    </div>
</template>
