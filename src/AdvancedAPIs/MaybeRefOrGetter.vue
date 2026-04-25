<script setup lang="ts">
import { computed, type MaybeRefOrGetter, ref, toValue } from 'vue'

// Fungsi untuk menjumlahkan pajak (10%)
// Bisa menerima: 1000, ref(1000), atau () => data.price
export function useTax(price: MaybeRefOrGetter<number>) {
    return computed(() => {
        // toValue akan otomatis "membuka" ref atau menjalankan fungsi getter
        return toValue(price) * 0.1
    })
}

// Cara pakainya fleksibel:
const tax1 = useTax(1000) // Angka biasa
const tax2 = useTax(ref(2000)) // Ref
</script>