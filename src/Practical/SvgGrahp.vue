<script setup>
import PolyGraph from '../components/PolyGraph.vue'
import { ref, reactive } from 'vue'

const newLabel = ref('')
const stats = reactive([
  { label: 'A', value: 100 },
  { label: 'B', value: 100 },
  { label: 'C', value: 100 },
  { label: 'D', value: 100 },
  { label: 'E', value: 100 },
  { label: 'F', value: 100 }
])

function add(e) {
  e.preventDefault()
  if (!newLabel.value) return
  stats.push({
    label: newLabel.value,
    value: 100
  })
  newLabel.value = ''
}

function remove(stat) {
  if (stats.length > 3) {
    stats.splice(stats.indexOf(stat), 1)
  } else {
    alert("Can't delete more!")
  }
}
</script>

<template>
  <svg class="svg" width="200" height="200">
    <PolyGraph :stats="stats"></PolyGraph>
  </svg>
  <!-- controls -->
  <div class="controls-container">
    <div v-for="stat in stats" class="control-row">
      <label>{{ stat.label }}</label>
      <input type="range" v-model.number="stat.value" min="0" max="100">
      <span class="value-text">{{ stat.value }}</span>
      <button @click="remove(stat)" class="remove-btn">X</button>
    </div>

    <form class="form_add" id="add">
      <input name="newlabel" v-model="newLabel">
      <button @click="add">Add a Stat</button>
    </form>
  </div>

  <pre id="raw">{{ stats }}</pre>

</template>

<style>
.controls-container {
  position: absolute;
  left: 500px;
  max-width: 300px;
  padding: 10px;
}

.control-row {
  display: flex;
  align-items: center;
  margin-bottom: 5px;
  gap: 10px;
}

.form_add {
  display: flex;
  gap: 12px;
}

label {
  width: 20px;
  font-weight: bold;
  font-size: 14px;
}

input[type="range"] {
  flex: 1;
  cursor: pointer;
}

.value-text {
  width: 30px;
  font-size: 12px;
  text-align: right;
}

.remove-btn {
  padding: 2px 6px;
  font-size: 10px;
  cursor: pointer;
}

polygon {
  fill: #42b983;
  opacity: 0.75;
}

circle {
  fill: transparent;
  stroke: #999;
}

text {
  font-size: 10px;
  fill: #666;
}

svg {
  position: absolute;
  left: 300px;
  top: 20px;
  width: 200px;
  height: 200px;
}

label {
  display: inline-block;
  margin-left: 10px;
  width: 20px;
}

#raw {
  position: absolute;
  top: 20px;
  left: 900px;
}
</style>