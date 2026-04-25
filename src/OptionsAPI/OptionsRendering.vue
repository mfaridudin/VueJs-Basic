<script>
import { h } from 'vue' //hyper scripty

export default {
    // 1. DATA: State internal komponen
    data() {
        return {
            pesan: 'Halo dari Rendering API!',
            status: true
        }
    },

    // 2. SLOTS (Baru): Mendefinisikan kontrak slot
    // Ini membantu IDE memberikan saran otomatis (autocomplete)
    slots: Object,

    /* CARA 2: Menggunakan Opsi 'render' 
       Kita memodifikasi fungsi render untuk menampilkan konten dari slot
    */
    render() {
        return h('div', { class: 'container' }, [
            h('h1', this.pesan),

            // Menampilkan konten yang dikirim dari parent melalui slot default
            // Jika tidak ada konten di slot, tampilkan teks default
            h('div', { class: 'slot-content' },
                this.$slots.default ? this.$slots.default() : 'Konten slot kosong'
            ),

            h('button', {
                onClick: () => { this.status = !this.status },
                style: {
                    color: 'white',
                    backgroundColor: this.status ? 'green' : 'red',
                    padding: '10px',
                    border: 'none',
                    marginTop: '10px'
                }
            }, this.status ? 'Aktif' : 'Non-Aktif')
        ])
    },

    // 3. COMPILER OPTIONS: Mengatur perilaku compiler
    compilerOptions: {
        // 'condense' akan menghapus spasi kosong antar elemen HTML di template
        whitespace: 'condense',
        // Contoh lain: mengubah simbol interpolasi dari {{ }} menjadi [[ ]]
        // delimiters: ['[[', ']]'] 
    }
}
</script>

<style scoped>
.container {
    padding: 20px;
    font-family: sans-serif;
    border: 1px solid #ddd;
}

.slot-content {
    margin: 10px 0;
    padding: 10px;
    background-color: #f9f9f9;
    border-left: 4px solid #42b983;
}
</style>