<script setup>
import { ref } from 'vue';
const text = ref('')
const checkBox = ref()
const checkedNames = ref([])
const picked = ref ('')
const selected = ref('')
const multipleSelected = ref([])

</script>

<template>
  <h2>Text Input</h2>
  <input type="text" placeholder="Ketik sesuatu..." v-model="text">
  <p>Pesan: {{ text }}</p>

  <h2>Checkbox</h2>
  <input type="checkbox" id="checkbox" v-model="checkBox">
  <label for="checkbox">Checked: {{ checkBox }}</label>

  <h2>Multi Checkboxs</h2>
  <input type="checkbox" id="farid" value="Farid" v-model="checkedNames">
  <label for="farid">Farid</label>

  <input type="checkbox" id="Udin" value="Udin" v-model="checkedNames">
  <label for="Udin">Udin</label>

  <input type="checkbox" id="Budi" value="Budi" v-model="checkedNames">
  <label for="Budi">Farid</label>
  <p>Checked Names: {{ checkedNames }}</p>

  <h2>Radio</h2>
  <input type="radio" id="one" value="One" v-model="picked">
  <label for="one">One</label>
  <br>
  <input type="radio" id="two" value="Two" v-model="picked">
  <label for="two">Two</label>
  <p>Picked: {{ picked }}</p>

  <h2>Select</h2>
  <select v-model="selected">
    <option disabled value="">Pilih salah satu</option>
    <option>A</option>
    <option>B</option>
    <option>C</option>
  </select>
  <p>Selected: {{ selected }}</p>

  <h2>Multi Select</h2>
  <select v-model="multipleSelected" multiple style="width: 200px;">
    <option>A</option>
    <option>B</option>
    <option>C</option>
  </select>
  <p>Multiple Selected: {{ multipleSelected }}</p>
</template>