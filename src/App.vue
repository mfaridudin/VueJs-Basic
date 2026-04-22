<script setup lang="ts">
import { version } from 'vue'

console.log(`Vue version: ${version}`)
</script>

<template>
  <div class="main-layout">
    <header class="sidebar">
      <nav class="sidebar-nav">
        <section>
          <h3>Basic</h3>
          <RouterLink to="/">Hello World</RouterLink>
          <RouterLink to="/handling-user-input">Handling User Input</RouterLink>
          <RouterLink to="/attribute-bindings">Attribute Bindings</RouterLink>
          <RouterLink to="/conditionals-and-loops">Conditionals and Loops</RouterLink>
          <RouterLink to="/form-bindings">Form Bindings</RouterLink>
          <RouterLink to="/simple-components">Simple Component</RouterLink>
        </section>

        <hr />

        <section>
          <h3>Practical</h3>
          <RouterLink to="/markdown-editor">Markdown Editor</RouterLink>
          <RouterLink to="/fetching-data">Fetching Data</RouterLink>
          <RouterLink to="/grid-with-sort-and-filter">Grid with Sort and Filter</RouterLink>
          <RouterLink to="/tree-view">Tree View</RouterLink>
          <RouterLink to="/svg-graph">SVG Graph</RouterLink>
          <RouterLink to="/show-modal">Modal with Transitions</RouterLink>
          <RouterLink to="/list-with-transitions">List with Transitions</RouterLink>
        </section>

        <hr />

        <section>
          <h3>7 GUIs</h3>
          <RouterLink to="/counter">Counter</RouterLink>
          <RouterLink to="/temperature-converter">Temperature Converter</RouterLink>
          <RouterLink to="/flight-booker">Flight Booker</RouterLink>
          <RouterLink to="/timer">Timer</RouterLink>
          <RouterLink to="/crud">CRUD</RouterLink>
          <RouterLink to="/circle-drawer">Circle Drawer</RouterLink>
          <RouterLink to="/cells">Cells</RouterLink>
        </section>
      </nav>
    </header>

    <main class="content">
      <router-view />
    </main>
  </div>
</template>

<style scoped>
.main-layout {
  display: flex;
  min-height: 100vh;
}

.sidebar {
  width: 260px;
  border-right: 1px solid #eee;
  background-color: #f9f9f9;
  position: sticky;
  top: 0;
  height: 100vh;
  overflow-y: auto;
}

.content {
  flex: 1;
  padding: 2rem;
}

.sidebar-nav {
  display: flex;
  flex-direction: column;
  padding: 1rem;
}

.sidebar-nav section {
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-bottom: 1rem;
}

.sidebar-nav h3 {
  font-size: 0.8rem;
  color: #999;
  text-transform: uppercase;
  letter-spacing: 1px;
  margin-bottom: 8px;
}

.sidebar-nav a {
  text-decoration: none;
  color: #2c3e50;
  font-size: 14px;
  padding: 4px 8px;
  border-radius: 4px;
  transition: background 0.2s;
}

.sidebar-nav a:hover {
  background-color: #e8f5e9;
  color: #42b983;
}

.router-link-active {
  font-weight: 600;
  background-color: #e8f5e9;
  color: #42b983 !important;
}

hr {
  border: 0;
  border-top: 1px solid #eee;
  margin: 15px 0;
}
</style>