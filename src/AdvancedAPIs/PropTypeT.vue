<script lang="ts">
import { defineComponent, type PropType } from 'vue'

interface User {
    id: number
    name: string
    role: 'admin' | 'user'
}

export default defineComponent({
    props: {
        // Tanpa PropType, Vue hanya tahu ini adalah "Object"
        // Dengan PropType, kita bisa tahu detail isi objeknya
        userInfo: {
            type: Object as PropType<User>,
            required: true
        }
    },
    setup(props) {
        // Sekarang auto-complete muncul!
        console.log(props.userInfo.role)
    }
})
</script>
