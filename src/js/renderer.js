// js/render.js
import { createRenderer } from '@vue/runtime-core'

const { createApp } = createRenderer({
    createElement(type) {
        return { type, props: {}, children: [] }
    },
    patchProp(el, key, prevValue, nextValue) {
        el.props[key] = nextValue
    },
    insert(child, parent) {
        parent.children.push(child)
    },
    setElementText(el, text) {
        el.text = text
    },
    // Tambahkan stub ini agar tidak error saat Vue mencoba menghapus/mencari node
    parentNode: node => node.parent || null,
    nextSibling: node => node.nextSibling || null,
    remove: node => { }
})

export { createApp } // Export supaya bisa dipakai di file lain