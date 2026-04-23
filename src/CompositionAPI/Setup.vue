<script>
import { h, ref, toRef, watch } from "vue";

export default {
    props: {
        count: {
            type: Number,
            default: 0
        }
    },
    emits: ['update:count'],

    setup(props, context) {
        // context ada :
        console.log(context.attrs)   // objek berisi atribut dari parent yang TIDAK didefinisikan di props (ex: class, style, id, data-*)
        console.log(context.slots)   // objek berisi fungsi slot dari parent (ex: slots.default(), slots.header())
        console.log(context.emit)    // fungsi untuk mengirim event ke parent (ex: context.emit('klik', payload))
        console.log(context.expose)  // fungsi untuk memilih apa yang boleh diakses parent via template ref (ex: context.expose({ focus }))

        // Buat state lokal, ambil nilai awal dari props
        const localCount = ref(props.count)

        // Kalau props berubah dari parent, update lokal juga
        watch(toRef(props, 'count'), (newVal) => {
            localCount.value = newVal
        })

        const increment = () => {
            localCount.value++
            context.emit('update:count', localCount.value) // beri tahu parent
        }

        return () => h(      // ← fungsi ini dipanggil ulang setiap render
            'div',
            { class: 'box' },
            [
                h('h1', 'Contoh Setup(), tanpa script setup'),
                h('button', { onClick: increment }, `Hitungan: ${localCount.value}`)
                //                                              ↑
                // Sekarang dibaca ulang setiap kali fungsi render dipanggil ✅
            ]
        )
    }
}
</script>

<!-- template tidak digunakan karena sudah dirender dari return -->
<!-- <template>
  <h1>Contoh Setup(), tanpa script setup</h1>
  <button @click="increment">{{ localCount }}</button>
</template> -->