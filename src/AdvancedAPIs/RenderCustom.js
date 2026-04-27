import { h } from '@vue/runtime-core';

export default {
    data() {
        return { count: 0 };
    },
    render() {
        return h('root', {}, [
            h('node', { value: this.count }, `Counter Node: ${this.count}`)
        ]);
    },
    mounted() {
        setInterval(() => {
            this.count++;
        }, 1000);
    }
};