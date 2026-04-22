<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  data() {
    return {
      count: 0,
      username: 'Budi'
    }
  },
  methods: {
    tambah() {
      // SAAT KAMU KETIK "this.", VS Code akan memunculkan:
      // count, username, tambah, dll.
      this.count++
    }
  }
})
</script>