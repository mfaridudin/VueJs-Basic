<script setup>
import {
  useAttrs,
  useSlots,
  useModel,
  useTemplateRef,
  useId,
  onMounted
} from 'vue'
const props = defineProps(['modelValue']) 

// 1. useId(): Menghasilkan ID unik otomatis untuk aksesibilitas (label <-> input)
const uuid = useId()

// 2. useModel(): Cara paling simpel untuk sinkronisasi v-model dari Parent
// Tidak perlu lagi manual defineProps(['modelValue']) dan defineEmits(['update:modelValue'])
const model = useModel(props, 'modelValue')

// 3. useTemplateRef(): Cara modern mengambil elemen HTML (DOM)
// 'input-elemen' adalah nama yang kita pasang di atribut ref di template
const inputRef = useTemplateRef('input-elemen')

// 4. useAttrs(): Mengambil atribut "sampah" (class, style, id) yang dikirim parent 
// tapi tidak dideklarasikan di props.
const attrs = useAttrs()

// 5. useSlots(): Mengecek apakah user mengisi slot tertentu
const slots = useSlots()

onMounted(() => {
  // Contoh penggunaan Template Ref: Otomatis fokus saat muncul
  inputRef.value?.focus()

  console.log('Atribut tambahan dari parent:', attrs)
})
</script>

<template>
  <div class="custom-input-container">
    <label :for="uuid">
      <slot name="label" v-if="slots.label"></slot>
      <span v-else>Label Default</span>
    </label>

    <input :id="uuid" ref="input-elemen" v-model="model" type="text" placeholder="Ketik di sini..." v-bind="attrs" />
    <p v-if="model">Input berisi: {{ model }}</p>
  </div>
</template>

<style scoped>
.custom-input-container {
  margin: 10px 0;
  display: flex;
  flex-direction: column;
}

input {
  padding: 8px;
  border-radius: 4px;
  border: 1px solid #ccc;
}

label {
  font-weight: bold;
  margin-bottom: 5px;
}
</style>