<script>
import { createApp } from 'vue'
import App from './App.vue'

const app = createApp(App)

app.config.errorHandler = (err) => {
  console.log('Ada error nih:', err)
}

app.use(MyPlugin)
app.component('MyButton', MyButton)

app.mount('#app')
</script>