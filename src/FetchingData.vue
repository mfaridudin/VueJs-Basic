<script setup>
import { ref, watchEffect } from 'vue';

const API_URL = `https://api.github.com/repos/vuejs/core/commits?per_page=3&sha=`
const branches = ['main', 'minor']

const currentBranch = ref(branches[0])
const commits = ref([])

watchEffect(async() => {
    const url = `${API_URL}${currentBranch.value}`
    commits.value = await (await fetch(url)).json()
})

function truncate(v) {
  const newline = v.indexOf('\n')
  return newline > 0 ? v.slice(0, newline) : v
}

function formatDate(v) {
  return v.replace(/T|Z/g, ' ')
}
</script>

<template>
    <h1>Commit Terakhir</h1>

   <template v-for="branch in branches">
    <input type="radio" :id="branch" :value="branch" v-model="currentBranch">
    <label :for="branch">{{ branch }}</label>
   </template>

   <p>Vuejs/core@{{ currentBranch }}</p>

   <ul v-if="commits.length">
    <li v-for="commit in commits" :key="commit.sha">
        <a :href="commit.html_url" target="_blank" class="commit">{{ commit.sha.slice(0, 7) }}</a>
      <strong>{{ truncate(commit.commit.message) }}</strong>
      <small> - {{ formatDate(commit.commit.author.date) }}</small>
    </li>
   </ul>
</template>