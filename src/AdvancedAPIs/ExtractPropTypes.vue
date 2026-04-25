<script lang="ts">
import type { ExtractPropTypes, PropType } from 'vue'

const buttonProps = {
    type: String as PropType<'primary' | 'ghost'>,
    size: Number
}

// Kita ambil tipe datanya secara otomatis
type ButtonProps = ExtractPropTypes<typeof buttonProps>

// Hasilnya sama saja dengan menulis:
// interface ButtonProps { type?: 'primary' | 'ghost', size?: number }
</script>