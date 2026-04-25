<template>
    <div class="p-5">

        <!-- =====================
         TELEPORT
         Memindahkan elemen ke luar hierarki DOM komponen
         Di sini modal dipindahkan langsung ke <body>
         agar tidak terpengaruh CSS parent (overflow, z-index, dll)
         ===================== -->
        <button @click="showModal = true">Buka Modal</button>

        <Teleport to="body">
            <!-- to="body" → modal dirender sebagai child langsung dari <body> -->

            <!-- =====================
           TRANSITION
           Memberi animasi saat elemen muncul/hilang
           name="bounce" → Vue otomatis cari class:
           .bounce-enter-active, .bounce-leave-active, dst
           ===================== -->
            <Transition name="bounce">

                <div v-if="showModal" class="modal-overlay">
                    <div class="modal-content">
                        <h3>Peringatan!</h3>
                        <p>Ini adalah modal yang di-teleport ke body.</p>
                        <button @click="showModal = false">Tutup</button>
                    </div>
                </div>

            </Transition>
        </Teleport>

        <hr />

        <!-- =====================
         DYNAMIC COMPONENT + KEEP-ALIVE
         <component :is="..."> → render komponen secara dinamis
         KeepAlive → menyimpan state komponen di cache
         sehingga saat ganti tab, isi input tidak hilang
         ===================== -->
        <nav>
            <button @click="tab = 'InputTab'">Tab Input</button>
            <button @click="tab = 'InfoTab'">Tab Info</button>
        </nav>

        <!-- :is="currentTab" → render komponen sesuai nilai tab
        Tanpa KeepAlive: saat pindah tab, state input hilang
        Dengan KeepAlive: state input tetap tersimpan di cache -->
        <KeepAlive>
            <component :is="currentTab" />
        </KeepAlive>

    </div>
</template>

<script setup>
import { computed, ref } from 'vue'
import InputTab from '../components/InputTab.vue'
import InfoTab from '../components/InfoTab.vue'

// ref() → reactive data untuk kontrol modal
const showModal = ref(false)

// ref() → reactive data untuk kontrol tab aktif
const tab = ref('InputTab')

// objek tabs sebagai lookup komponen
// ✅ BENAR: tabs[tab.value] → akses nilai ref dengan .value
// Di template Vue otomatis unwrap ref, jadi tabs[tab] langsung bisa
const tabs = { InputTab, InfoTab }
//            ↑
// Di template: tabs[tab] → Vue unwrap tab otomatis → tabs['InputTab']
// Di script:   tabs[tab.value] → harus pakai .value

const currentTab = computed(() => tabs[tab.value] ?? InputTab)
</script>

<style>
.modal-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    align-items: center;
    justify-content: center;
}

.modal-content {
    background: white;
    padding: 20px;
    border-radius: 8px;
}

/* 
  Transition Class Convention:
  .{name}-enter-active  → saat elemen MUNCUL (animasi masuk)
  .{name}-leave-active  → saat elemen HILANG (animasi keluar)
  .{name}-enter-from    → state awal sebelum muncul
  .{name}-enter-to      → state akhir setelah muncul
  .{name}-leave-from    → state awal sebelum hilang
  .{name}-leave-to      → state akhir setelah hilang
*/
.bounce-enter-active {
    animation: bounce-in 0.5s;
}

.bounce-leave-active {
    animation: bounce-in 0.5s reverse;
    /* reverse = animasi diputar balik */
}

@keyframes bounce-in {
    0% {
        transform: scale(0);
    }

    /* mulai dari ukuran 0 */
    50% {
        transform: scale(1.2);
    }

    /* overshoot sedikit */
    100% {
        transform: scale(1);
    }

    /* kembali normal */
}
</style>