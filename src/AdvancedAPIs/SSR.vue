<script>
import { createSSRApp } from 'vue'
import { renderToString } from 'vue/server-renderer'

// 1. Buat aplikasi Vue
const app = createSSRApp({
    data: () => ({ msg: 'Halo dari Server!' }),
    template: `<div>{{ msg }}</div>`
})

// 2. Ubah menjadi HTML String
renderToString(app).then((html) => {
    console.log(html)
    // Hasil: <div data-server-rendered="true">Halo dari Server!</div>
})
</script>
