<script setup>
import { 
  onBeforeMount, 
  onMounted, 
  onBeforeUpdate, 
  onUpdated, 
  onBeforeUnmount, 
  onUnmounted 
} from 'vue'

// 1. "CREATED" (Tidak ada onCreated)
// Di Composition API, kode apa pun yang kamu tulis langsung di <script setup>
// itu setara dengan fase 'created'.
console.log('1. Setup/Created: Logic siap!')

// 2. MOUNTING (Nempel ke HTML)
onBeforeMount(() => {
  console.log('2. onBeforeMount: Mau nempel ke layar...')
})

onMounted(() => {
  console.log('3. onMounted: SUDAH nempel di layar ✅')
})

// 3. UPDATING (Data berubah)
onBeforeUpdate(() => {
  console.log('4. onBeforeUpdate: Data berubah, DOM belum ganti...')
})

onUpdated(() => {
  console.log('5. onUpdated: DOM sudah update ✅')
})

// 4. UNMOUNTING (Dihancurkan)
onBeforeUnmount(() => {
  console.log('6. onBeforeUnmount: Sedang bersiap mati...')
})

onUnmounted(() => {
  console.log('7. onUnmounted: SUDAH hancur 💀')
})
</script>