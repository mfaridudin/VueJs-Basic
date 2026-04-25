<script>
import {
    h,
    defineComponent,
    mergeProps,
    cloneVNode,
    isVNode,
    resolveComponent,
    withDirectives,
    withModifiers,
    vShow // direktif bawaan
} from 'vue'

export default defineComponent({
    props: ['isVisible', 'extraClass'],
    setup(props, { slots }) {

        // 1. resolveComponent: Mencari komponen global 'MyIcon' jika ada
        const MyIcon = resolveComponent('MyIcon')

        return () => {
            // Ambil konten default dari slot
            const children = slots.default ? slots.default() : []

            // 2. isVNode: Memastikan kita hanya memproses VNode (bukan teks biasa)
            const validChildren = children.filter(child => isVNode(child))

            // 3. cloneVNode & mergeProps: Menggandakan elemen pertama dan menambah class
            const enhancedChild = validChildren.length > 0
                ? cloneVNode(validChildren[0], mergeProps({ class: props.extraClass }, { style: 'color: red' }))
                : h('span', 'Tidak ada elemen')

            // 4. withModifiers: Membuat fungsi klik yang punya .stop dan .prevent
            const handleClick = withModifiers(() => {
                console.log('Klik tertangkap tanpa reload/bubbling!')
            }, ['stop', 'prevent'])

            // 5. withDirectives: Memasang v-show secara manual ke elemen
            // Struktur: [Direktif, Value, Argument, Modifiers]
            return withDirectives(
                h('div', { class: 'wrapper', onClick: handleClick }, [
                    h('h2', 'Render Function Demo'),
                    enhancedChild, // Elemen yang sudah di-clone
                    h(MyIcon, { name: 'star' }) // Menggunakan komponen yang di-resolve
                ]),
                [[vShow, props.isVisible]]
            )
        }
    }
})
</script>