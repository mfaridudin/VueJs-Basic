<script setup>
import { hasInjectionContext, inject } from 'vue'

// 1. Deklarasikan variabel di luar agar bisa diakses template
let pesanDiterima;

// 2. Cek konteks
if (hasInjectionContext()) { 
    // Jika di dalam setup ,ambil data dari inject
    // Kita beri nilai default 'Data tidak ditemukan' jika kuncinya gak ada
    pesanDiterima = inject('message', 'Pesan Kosong');
} else {
    // Jika di luar setup (kasus langka di script setup)
    pesanDiterima = 'Default Data (Luar Konteks)';
}
</script>

<template>
  <div style="margin-top: 20px; padding: 10px; background: #e0e0e0;">
    <h3>Anak (Child)</h3>
    <p>Pesan yang di-inject: <b>{{ pesanDiterima }}</b></p>
  </div>
</template>